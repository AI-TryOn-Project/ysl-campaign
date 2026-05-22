!function () {
  var $, _chatDocument, _customPrechat, _websiteId;
  var _storeChannel = [];
  var _settingName;

  //#region Initialization

  _insideGraph.defer(function () {
    $ = _insideGraph.jQuery;

    _settingName = typeof insideFrontInterface != 'undefined' && insideFrontInterface.chatSettings && insideFrontInterface.chatSettings.description;

    if(insideFrontInterface.chat.version == 2) _settingName = insideFrontInterface.chatSettings.name;
    
    if (typeof _settingName == 'undefined' || _settingName == '') return;

    $("#inside_holder").attr('chatsettingname', _settingName.toLowerCase().replace(/ /g, '-'));

    var websiteId = insideFrontInterface.chat.userid.split(':')[1];

    if (_settingName.search(/(saint laurent|ysl)/i) > -1 && $('#component-footer-cookie').is(':visible')) {
      $('#inside_holder').addClass('cookie-footer-exists');
      document.getElementById('inside_holder').style.setProperty('--cookie-bar-height', $('#component-footer-cookie').outerHeight());
      $('.component-footer-cookie__button-close').click(function () {
        $('#inside_holder').removeClass('cookie-footer-exists');
        document.getElementById('inside_holder').style.setProperty('--cookie-bar-height', 0);
      });
    } else if (_settingName.toLowerCase().search('balenciaga') > -1) {
      observeChatTab();
      setTimeout(checkChatTab, 400);
      window.addEventListener("scroll", debounce(checkScrollPosition, 150));
      setTimeout(checkScrollPosition, 400);
    }

    $.inside.bind("connected", function(){
    	setTimeout(function(){
    		$('.inside_chatTabImage').attr('style', 'width:auto!important;');
    		insideFrontInterface.positionTabs();
    	}, 1000)
    });

  }, function () {
    return typeof _insideGraph != 'undefined' && _insideGraph.jQuery && _insideGraph.jQuery('#inside_tabs').length > 0
  })

  //#endregion

  function observeChatTab() {
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(function (mutationsList, observer) {
      checkChatTab();
    });

    observer.observe(document.getElementById('inside_tabs'), config);
  }

  function checkChatTab() {
    if (_insideGraph.jQuery('#inside_liveChatTab').is(':visible'))
      $('body').addClass('inside-chat-tab-shown');
    else $('body').removeClass('inside-chat-tab-shown');
  }

  function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
  };

  function checkScrollPosition() {
    if (Math.ceil(window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      $('#inside_holder').addClass('scrolled-to-bottom');
    } else {
      $('#inside_holder').removeClass('scrolled-to-bottom');
    }
  }

  //#region custom prechat
  _insideGraph.defer(function () {
    $ = _insideGraph.jQuery;
    _chatDocument = $(insideChatFrame.contentWindow.document);
    _websiteId = insideFrontInterface.chat.userid.split(':')[1];

    getStoreChannel();

    if(insideFrontInterface.chatSettings) $('#inside_holder').attr('chatpaneversion', insideFrontInterface.chatSettings.version)

    var chatPaneOpen = insideChatPane.open;
    insideChatPane.open = function(force, workflow, survey) {
      if(insideChatPane.activeChat != true && insideFrontInterface.chat.deptChosen != true) resetDepartmentSelection();

      chatPaneOpen(force, workflow, survey);
      
      if(!insidePreChatForm.prechatFilled && !insideFrontInterface.chat.deptChosen) {
        _insideGraph.defer(preChatAvailable, function() {
          return _chatDocument.find('.custom-prechat').length > 0;
        })
      }

      if(_chatDocument.find('#customPrechatCSS').next().length > 0)
        _chatDocument.find('#customPrechatCSS').appendTo(_chatDocument.find('head'));
    }

    var checkPreChatForm = insidePreChatForm.check;
    insidePreChatForm.check = function(abortWorkflow, prechatShowCallback, prechatSurveySubmitted, taskStartedCallback) {
      _insideGraph.defer(preChatAvailable, function() {
        return _chatDocument.find('.custom-prechat').length > 0;
      })
      return checkPreChatForm(abortWorkflow, prechatShowCallback, prechatSurveySubmitted, taskStartedCallback);
    }

    if(insideChatPane.activeChat != true) resetDepartmentSelection();

    if(!insidePreChatForm.prechatFilled && !insideFrontInterface.chat.deptChosen) {
      _insideGraph.defer(preChatAvailable, function() {
        return _chatDocument.find('.custom-prechat').length > 0;
      })
    }
  }, function () {
    return typeof insideChatPane != 'undefined' && typeof insidePreChatForm != 'undefined' && insideChatPane.open;
  })

  function preChatAvailable() {
    setTimeout(customizePreChat, 500);
  }

  function customizePreChat() {
    _customPrechat = _chatDocument.find('.custom-prechat');
    if(_customPrechat.hasClass('init')) return;

    _customPrechat.find('button').click(function(e) {
      e.preventDefault();
      e.stopPropagation();
      selectDepartmentByValue($(this).attr('data-department'));
      nextStep();
      return false;
    }).attr('connect-label', insideChatPane.chatPane.querySelector('#prechatSubmitButton').value);

    // show options based channel availability
    insideFrontInterface.bind("assistants", checkAvailableAssistants);
    checkAvailableAssistants();

    _customPrechat.addClass('init');
  }

  function getStoreChannel(callback) {
    $.getJSON(_insideCDN + 'custom/' + _websiteId + '-store-channels.json?v=' + _insideScriptVersion, function(storeChannel){
       _storeChannel = storeChannel; 
       if(typeof callback == 'function') callback();
    })
  }

  function checkAvailableAssistants() {
    if(_storeChannel.length == 0) {
      getStoreChannel(checkAvailableAssistants);
    }
    _customPrechat.find('.option').hide();
    var assistants = insideFrontInterface.getAvailableAssistants().filter(function(c){ return c.id.search('ch:') == 0; });
    var storeAvailable = assistants.filter(function(o){ return $.inArray(o.name, _storeChannel) > -1 }).length > 0;
    if(storeAvailable) {
      _customPrechat.find('.option1').css('display', 'block');
    } 
    var advisorAvailable = assistants.filter(function(o){ return $.inArray(o.name, _storeChannel) == -1}).length > 0;
    if(advisorAvailable) {
      _customPrechat.find('.option2').css('display', 'block');
    } 
    
    if(!storeAvailable && !advisorAvailable && insideFrontInterface.getAvailableAssistants().length > 0) {
      _customPrechat.find('.option2').css('display', 'block');
    }

    const chatSettingsName = insideFrontInterface.chatSettings.name;
    if(chatSettingsName.startsWith('BV')) {
      const singleOption = _customPrechat.find('.option:visible').length < 2;
      _customPrechat.closest('#inside_prechatForm')[(singleOption ? 'add' : 'remove') + 'Class']('single-option');
      _customPrechat.find('.heading.title .inside_label').remove();
      if (singleOption) {
        const label = _customPrechat.find('.option:visible .inside_label').clone();
        _customPrechat.find('.heading.title').append(label);
      }
    }

    _customPrechat.removeClass('hide-labels');
    if(chatSettingsName.startsWith('YSL') && _customPrechat.find('.option:not(.option3):visible').length === 1) {
      _customPrechat.addClass('hide-labels');
    }
  }

  function selectDepartmentByValue(val) {
    var select = _chatDocument.find('.inside_dept_selector select');
    if(select.length > 0) {
      select.val(val);
    } else {
      _chatDocument.find('.inside_dept_option input[value="' + val + '"]').click();
    }
  }

  function nextStep() {
    _chatDocument.find('#inside_prechatForm_form .inside_formTitle').hide();
    
    if(_chatDocument.find('.inside_chatDisclaimer').length > 0) {
      _chatDocument.find('#inside_prechatForm_form .insideSubmitButton, .inside_chatDisclaimer').show();
    }
    else {
      _chatDocument.find('#inside_prechatForm_form').css({
        background: 'white url(' + _insideCDN + 'custom/' + _websiteId + '-Spinner-1s-100px.gif) center no-repeat'
      });
      _chatDocument.find('#inside_prechatForm_form form > .insideSubmitButton').click();
    }
  }

  function resetDepartmentSelection() {
    insideAPI.post("api/visitor/set_department", { department: '' });
    insidePreChatForm.prechatFilled = insideFrontInterface.chat.deptChosen = false;
  }

  function getCustomHeadHTML() {
    const websiteId = insideFrontInterface.chat.userid.split(':')[1];
    let fileName = '';
    if (insideFrontInterface.chat?.settings?.preChat?.askDept) {
      fileName = 'custom-prechat.css';
    }
    if(insideFrontInterface.chatSettings.name.startsWith('BV') && insideFrontInterface.chatSettings.name.includes('V3')) {
      fileName = 'bv-theme.css';
    }
    let customPrechatCSS = '';
    if (fileName) {
      const filePath = _insideCDN + 'custom/' + websiteId + '-' + fileName + '?v=' + _insideScriptVersion;
      customPrechatCSS = `<link id="customPrechatCSS" rel="stylesheet" type="text/css" media="all" href="${filePath}">`
    }
    return `
    ${customPrechatCSS}
    <style>
      #insideChatPaneContent, #inside_prechatForm, #insideChatPaneFooter { opacity: 0; transition: opacity 200ms linear; }
    </style>`;
  }

  _insideGraph.bind('chatpane_html_head', getCustomHeadHTML);

  if (typeof insideChatFrame !== 'undefined' && insideChatFrame.contentWindow) {
    var chatHead = insideChatFrame.contentWindow.document.querySelector('head');
    if (chatHead && !chatHead.querySelector('#customPrechatCSS')) {
      chatHead.insertAdjacentHTML('beforeend', getCustomHeadHTML());
    }
  }

  //#endregion
}()