// custom tab offset for AMQ & YSL
!function ($) {
  //#region custom chat tab/pane position for AMQ & YSL
  function observeElement(element, callback, config) {
    try {
      // Options for the observer (which mutations to observe)
      if (typeof config == "undefined") config = { attributes: true, childList: true, subtree: true };
      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(function (mutationsList, observer) {
        if (typeof callback === 'function') {
          callback(mutationsList, observer);
        }
      });

      observer.observe(element, config);
    } catch (e) {

    }
  }

  function setTabOffset() {
    const tabVerticalOffset = insideFrontInterface.chatSettings.chatTab[visualViewport.width < 1024 ? 'mobileOffset' : 'offset'].vertical;
    document.getElementById('inside_holder').style.setProperty('--inside-tab-bottom-offset', (tabVerticalOffset || 0) + 'px');
  }

  function getRecaptchaButtonHeight() {
    let h = 0;
    if(document.querySelector('.grecaptcha-badge')) {
      h += visualViewport.height - document.querySelector('.grecaptcha-badge').getBoundingClientRect().top;
    }
    return h;
  }

  _insideGraph.defer(function () {
    setTabOffset();

    const chatSettingsName = insideFrontInterface.chatSettings.name.toLowerCase();
    if (chatSettingsName.startsWith('bv') || chatSettingsName.startsWith('bal')) {
      document.getElementById('inside_holder').style.setProperty('--inside-bottom-offset', getRecaptchaButtonHeight() + 'px');
    } 
    
    if (chatSettingsName.search('amq') > -1) {
      const footerBar = document.getElementById('csr-portal-disabled');
      if (footerBar) {
        observeElement(footerBar, function (data) {
          const footerBarVisible = footerBar.innerHTML.length > 0;
          $('#inside_holder')[(footerBarVisible ? 'add' : 'remove') + 'Class']('footerBarVisible');
        }, { childList: true })
      }
    } 
    
    if (chatSettingsName.search('ysl') > -1) {
      const checkOffset = function () {
        const isMobileOrTab = visualViewport.width < 1024;
        const pageType = dataLayer.filter(d => d.pageType).pop().pageType;
        const mobileProductPage = pageType === "YSL_PRODUCT PAGE" && isMobileOrTab;
        const mobileCategoryPage = (pageType === 'YSL_PRODUCT LIST PAGE' || pageType === "YSL_SEARCH RESULT") && isMobileOrTab;
        let dialogElements = $('[aria-modal="true"]:visible'), sideDialog, bottomDialog;
        dialogElements.each((i, a) => {
          let dialogVisible = $(a).css('visibility') === 'visible' && parseInt($(a).css('opacity')) === 1;
          const rect = a.getBoundingClientRect();
          const viewPort = top.visualViewport;
          if (dialogVisible && parseInt(rect.width) !== viewPort.width && parseInt(a.style.right || 0) === 0 && rect.left > 0) {
            sideDialog = $(a);
          } else if (dialogVisible && parseInt(rect.width) === viewPort.width && parseInt(rect.height) !== viewPort.height && rect.height < (viewPort.height / 2)) {
            bottomDialog = $(a);
          }
        });
        let sideOffset = 0;
        if (sideDialog) {
          sideOffset = sideDialog.outerWidth();
        }
        document.getElementById('inside_holder').style.setProperty('--inside-side-offset', sideOffset + 'px');

        let bottomOffset = 0, cookieBannerHeight = $('#onetrust-banner-sdk:visible').outerHeight(), checkoutButtonHeight = $('[data-ref="checkoutButtonContainer"]').outerHeight();
        if (checkoutButtonHeight) {
          bottomOffset = checkoutButtonHeight;
        } else if (cookieBannerHeight) {
          bottomOffset = cookieBannerHeight;
        } else if (bottomDialog) {
          bottomOffset = bottomDialog.outerHeight();
        } else if (mobileProductPage && window.scrollY < 280) {
          if (document.querySelector('.l-pdp__images')) {
            bottomOffset = visualViewport.height - document.querySelector('.l-pdp__images').clientHeight - document.querySelector('header').clientHeight;
          } else if (document.querySelector('main section > [class^="sc-"][class*="-3"]')) {
            bottomOffset = document.querySelector('main section > [class^="sc-"][class*="-3"]').clientHeight;
          }
        } else if (mobileCategoryPage) {
          try {
            const filterBar = $('main h1').next(),
              filterBarShown = filterBar.css('transform').match(/matrix.*\((.+)\)/)[1].split(', ')[5] === '0';
            if (filterBarShown) bottomOffset = filterBar.outerHeight();
          } catch (error) { }
        }

        if(document.querySelector('.grecaptcha-badge')) {
          bottomOffset += visualViewport.height - document.querySelector('.grecaptcha-badge').getBoundingClientRect().top ;
        }
        
        document.getElementById('inside_holder').style.setProperty('--inside-bottom-offset', bottomOffset + 'px');
      }

      setInterval(checkOffset, 100);
    }
  }, function () {
    return typeof insideFrontInterface && insideFrontInterface.chatSettings && insideFrontInterface.chatSettings.name;
  });

  //#endregion
}(_insideGraph.jQuery)

// chat pane observer and event listener
!function ($) {
  function replaceLinks(node) {
    let languageCode = 'en-gb';
    try {
      languageCode = `${_insideGraph.current.visitorData.nav_languageCode}-${_insideGraph.current.visitorData.nav_countryCode}`.toLowerCase();
    } catch (e) {
    }
    node.querySelectorAll('a').forEach(a => {
      a.href = a.href.replace(/\/[a-z]{2}-[a-z]{2}\//i, `/${languageCode}/`);
    });
  }

  _insideGraph.defer(function () {
    const insideChatPaneContentObserver = new MutationObserver(function (mutationsList) {
      mutationsList.forEach(function (mutation) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(function (node) {
            const classList = ['welcomeGreeting', 'privacyMessage']
            if (classList.some(className => node.classList.contains(className))) {
              replaceLinks(node);
            }
          });
        }
      });
    });

    insideChatPaneContentObserver.observe(
      insideChatPane.chatPaneContent, { childList: true, subtree: false }
    );

    $(insideChatPane.chatPaneContent).find('.welcomeGreeting, .privacyMessage').each(function () {
      replaceLinks(this);
    });

    $(insideChatPane.frame.contentDocument).on('click', '#privacyDecline', () => {
      insideChatPane.close();
    });
  }, function () {
    return typeof insideChatPane !== 'undefined' && insideChatPane.chatPaneContent;
  });
}(_insideGraph.jQuery)

// chat notification customization
!function ($) {
  _insideGraph.bind("chatnotification", function (data) {
    try {
      if(insideChatPane.lastMessage?.querySelector('.content a[href*="privacy"]')) {
        insideChatPane.frame.contentDocument.body.classList.add('proactive-with-disclaimer');
      }
    } catch (e) { }
  });

  _insideGraph.bind('openchatv2', () => {
    try {
      insideChatPane.frame.contentDocument.body.classList.remove('proactive-with-disclaimer');
    } catch (e) { }
  });
}(_insideGraph.jQuery)