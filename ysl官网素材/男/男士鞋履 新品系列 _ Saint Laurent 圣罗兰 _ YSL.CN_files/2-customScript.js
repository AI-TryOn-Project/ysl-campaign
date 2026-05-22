!function ($) {
  var _device;
  var _settingName;

  //#region Initialization

  _insideGraph.defer(function () {
    _device = $.inside.front.getDevice();
    _settingName = typeof insideFrontInterface != 'undefined' && insideFrontInterface.chatSettings && insideFrontInterface.chatSettings.description;

    if (insideFrontInterface.chat.version == 2)
      _settingName = insideFrontInterface.chatSettings.name;

    if (typeof _settingName == 'undefined' || _settingName == '')
      return;

    $("#inside_holder").attr('chatsettingname', _settingName.toLowerCase().replace(/ /g, '-'));

    var websiteId = insideFrontInterface.chat.userid.split(':')[1];
    var hasPrechat = insideFrontInterface.chatSettings && insideFrontInterface.chatSettings.chatPane && insideFrontInterface.chatSettings.chatPane.preChatSurveyId;
    // custom department selector  
    if (insideFrontInterface.chatSettings.version == 2 && hasPrechat) {
      // custom department selector for themes
      _insideGraph.loadJS(_insideCDN + 'custom/' + websiteId + '-custom-prechat.js?v=' + _insideScriptVersion);
    } else if (_settingName.search(/(saint laurent|bottega veneta)/i) > -1) {
      _insideGraph.loadJS(_insideCDN + 'custom/' + websiteId + '-customDepartmentSelector.js?v=' + _insideScriptVersion);
    }

    if (_settingName.search(/(saint laurent|ysl|amq)/i) > -1) {
      $("#inside_holder").addClass('dynamicPosition');
      setTabOffset();
      checkOffset_AMQ_YSL();
      setInterval(checkOffset_AMQ_YSL, 100);
    } else if (_settingName.search('BAL') > -1) {
      observeChatTabBAL();
      setTimeout(checkChatTabBAL, 400);
      window.addEventListener("scroll", debounce(checkScrollPositionBAL, 150));
      setTimeout(checkScrollPositionBAL, 400);

      observeDialogBAL();
      checkDialogBAL(true);

      if ($("#inside_holder").hasClass('mobile-device')) {
        observeProductInfoBAL();
        setTimeout(checkProductInfoBAL, 400);
      }
    }

    $.inside.bind("connected", function () {
      setTimeout(function () {
        $('.inside_chatTabImage').attr('style', 'width:auto!important;');
        insideFrontInterface.positionTabs();
      }, 1000)
    });

  }, function () {
    return typeof _insideGraph != 'undefined' && _insideGraph.jQuery && _insideGraph.jQuery('#inside_tabs').length > 0
  })

  // hotfix for bug https://powerfront.tpondemand.com/entity/35446-kering-chinaasia3-the-chat-notification-div
  _insideGraph.defer(function () {
    insideChatPane.frame.contentDocument.on('click', '#chatNotifications .closeButton, #chatNotifications .icon-close', function () {
      setTimeout(insideChatPane.clearNotifications, 100);
    });
  }, function () {
    return typeof insideChatPane !== 'undefined' && insideChatPane.frame;
  });

  //#endregion

  //#region AMQ & YSL
  function setTabOffset() {
    const device = $.inside.front.getDevice();
    const tabVerticalOffset = insideFrontInterface.chatSettings.chatTab[device >= 2 ? 'mobileOffset' : 'offset'].vertical;
    document.getElementById('inside_holder').style.setProperty('--inside-tab-bottom-offset', (tabVerticalOffset || 0) + 'px');
  }
  
  function checkOffset_AMQ_YSL() {
    const isYSL = insideFrontInterface.chatSettings.name.search(/ysl/i) > -1;
    const isAMQ = insideFrontInterface.chatSettings.name.search(/amq/i) > -1;
    const isDesktop = $.inside.front.getDevice() === 1;
    const isMobile = $.inside.front.getDevice() === 2;
    const isTablet = $.inside.front.getDevice() === 3;
    const isProductPage = location.href.search('/products/') > -1;
    const isCategoryPage = location.href.search('/categories/') > -1;
    const isCartPage = location.href.search('/cart') > -1;
    const productDetail = document.querySelector('[class^="product-detail_wrapper"]');
    let dialogElement = $('.dialogOpen [class^=dialog_content]'), sideDialog, bottomDialog;
    if (dialogElement.length && parseInt(dialogElement.outerWidth()) !== top.visualViewport.width && dialogElement[0].getBoundingClientRect().left > 0) {
      sideDialog = dialogElement;
    } else if (dialogElement.length && parseInt(dialogElement.outerWidth()) === top.visualViewport.width && parseInt(dialogElement.outerHeight()) < (top.visualViewport.height / 2)) {
      bottomDialog = dialogElement;
    }
    let sideOffset = 0;
    if (document.body.style['overflow-y'] === 'hidden' && sideDialog) {
      sideOffset = sideDialog.outerWidth();
    }
    document.getElementById('inside_holder').style.setProperty('--inside-side-offset', sideOffset + 'px');

    let bottomOffset = 0, cookieBannerHeight = $('[class^="cookie-consent_container"]:visible, [class^=cookie-consent_wrapper]').outerHeight();
    if (cookieBannerHeight) {
      bottomOffset = cookieBannerHeight;
    } else if (bottomDialog) {
      bottomOffset = bottomDialog.outerHeight();
    } else if (isYSL && isProductPage && (isMobile || isTablet) && productDetail && productDetail.scrollTop < 100) {
      bottomOffset = isMobile ? 75 : 87;
    } else if (isYSL && isCategoryPage && (isMobile || isTablet)) {
      bottomOffset = isMobile ? 60 : 72;
    } else if (isYSL && isCartPage && (isMobile || isTablet) && document.querySelector('[class*="cart_bottom"]')) {
      bottomOffset = 110;
    } else if(isAMQ && isProductPage && isDesktop) {
      const productDetail = document.querySelector('[class*="product-detail-desktop-bottom-Sticky"]');
      if (productDetail && productDetail.getAttribute('class').search('Sticky_bottomAnimationIn') > 0) {
        bottomOffset += productDetail.offsetHeight;
      }
      const backToTop = document.querySelector('[class^="back-to-top_backToTopIcon"]');
      if(backToTop) {
        bottomOffset += backToTop.offsetHeight + 20;
      }
    }
    document.getElementById('inside_holder').style.setProperty('--inside-bottom-offset', bottomOffset + 'px');
  }

  //#endregion

  //#region Balenciaga
  function observeChatTabBAL() {
    // Options for the observer (which mutations to observe)
    const config = {
      attributes: true,
      childList: true,
      subtree: true
    };
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(function (mutationsList, observer) {
      checkChatTabBAL();
    }
    );

    // disabled to fix 38384
    //observer.observe(document.getElementById('inside_tabs'), config);
  }

  function checkChatTabBAL() {
    if (_insideGraph.jQuery('#inside_liveChatTab, .chatPaneMinimised #insideChatFrame').is(':visible'))
      $('body').addClass('inside-chat-tab-shown');
    else
      $('body').removeClass('inside-chat-tab-shown');
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this
        , args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate)
          func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow)
        func.apply(context, args);
    }
      ;
  }
  ;
  function checkScrollPositionBAL() {
    if (Math.ceil(window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      $('#inside_holder').addClass('scrolled-to-bottom');
    } else {
      $('#inside_holder').removeClass('scrolled-to-bottom');
    }
  }

  function observeDialogBAL() {
    $('body').click(function (e) {
      setTimeout(checkDialogBAL, 10);
    });
  }

  function checkDialogBAL(force) {
    const dialog = $('[class*="dialog_content_"]:visible');
    if (dialog.length === 0 || dialog.is('[class*="rightOut"]')) {
      $('#insideChatFrame, #inside_tabs').addClass('slideOutAnumation').css('margin-right', 0);
      setTimeout(function () {
        $('#insideChatFrame, #inside_tabs').removeClass('slideOutAnumation')
      }, 400);
    } else if (dialog.is('[class*="rightIn"]') || force) {
      _insideGraph.defer(function () {
        $('#insideChatFrame, #inside_tabs').addClass('slideInAnumation').css('margin-right', dialog.outerWidth() + 1);
        setTimeout(function () {
          $('#insideChatFrame, #inside_tabs').removeClass('slideInAnumation')
        }, 800);
      }, function () {
        return dialog.is(':visible') && $('#insideChatFrame, #inside_tabs').is(':visible');
      });
    }
  }

  function observeProductInfoBAL() {
    const productInfo = $('[class*="products_productInfoChildren"]');
    if (productInfo.length) {
      const observer = new MutationObserver(checkProductInfoBAL);

      observer.observe(productInfo[0], {
        attributes: true,
        childList: true,
        subtree: true
      });
    }
  }

  function checkProductInfoBAL() {
    const productInfo = $('[class*="products_productInfoChildren"]');
    var floatingButton = productInfo.find('[class*="cta_principalCTA"]');
    if (floatingButton.length) {
      $('#inside_holder').css('z-index', 1);
      $('#insideChatFrame, #inside_tabs').css('margin-top', floatingButton.outerHeight() * -1);
    } else {
      $('#inside_holder').css('z-index', 200000);
      $('#insideChatFrame, #inside_tabs').css('margin-top', 0)
    }
  }

  //#endregion
}(_insideGraph.jQuery)
