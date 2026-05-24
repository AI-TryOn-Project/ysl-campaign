!function () {

  var $, _chatDocument, _customPrechat, _websiteId, _preChatWorkflowBackup = 0;
  var _storeChannel = [], _storeName = [];

  _insideGraph.defer(function () {
    $ = _insideGraph.jQuery;
    _chatDocument = $(insideChatFrame.contentWindow.document);
    _websiteId = insideFrontInterface.chat.userid.split(':')[1];
    _preChatWorkflowBackup = insideChatPane.settings.chatSettings.chatPane.preChatWorkflow;

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

      if(insideFrontInterface.chatSettings.name.search('YSL') > -1) {
        replaceOfflineWithPrechat();
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

    if(insideChatPane.activeChat != true) {
      resetDepartmentSelection();
      //insidePreChatForm.check();
    }

    if(!insidePreChatForm.prechatFilled && !insideFrontInterface.chat.deptChosen) {
      _insideGraph.defer(preChatAvailable, function() {
        return _chatDocument.find('.custom-prechat').length > 0;
      })
    }

    if(insideFrontInterface.chatSettings.name.search('YSL') > -1) {
      _chatDocument.find('head').append('<style>#inside_leaveMessageForm * { display: none;}</style>');
      replaceOfflineWithPrechat();
    }

    // #84432
    if(insideChatPane.isOpen() && _chatDocument.find('#inside_prechatForm').length === 0) {
      insidePreChatForm.check();
    }
  }, function () {
    return typeof insideChatPane != 'undefined' && insideChatPane.chatPane && typeof insidePreChatForm != 'undefined';
  })

  function replaceOfflineWithPrechat() {
    if(insideFrontInterface.getAvailableAssistants().length === 0) {
      insidePreChatForm.init(_insideGraph.jQuery);
      insidePreChatForm.show();
      _chatDocument.find('#inside_leaveMessageForm').remove();
    }
  }

  function preChatAvailable() {
    setTimeout(customizePreChat, 500);
  }

  function customizePreChat() {
    _chatDocument.find('#inside_leaveMessageForm').remove();
    _customPrechat = _chatDocument.find('.custom-prechat');

    if(_customPrechat.hasClass('init')) return;

    var storeSelector = _customPrechat.find('.storeSelector');
    storeSelector.attr('required', 'required').addClass('unselected').on('change', function(){
      if(this.value == '') this.classList.add('unselected');
      else this.classList.remove('unselected');
    });
    storeSelector.each(initDropdown);

    _customPrechat.find('button').unbind('click').click(function(e) {
      e.preventDefault();
      e.stopPropagation();

      if($(this).hasClass('bookAppointment')) {
        _chatDocument.find('.schedulingFormContainer, .schedulingFrameContainer').remove();
        var selectedStore = storeSelector.val();
        if(selectedStore.length == 0) {
          try { storeSelector[0].reportValidity(); } catch (e) {}
        } else {
          insideChatPane.frame.contentWindow.insideScheduling.showInputForm(selectedStore, _insideGraph.current.subsiteId);
          _chatDocument.find('.selectedStore').remove();
          _chatDocument.find('.schedulingFormContainer .schedulingForm').prepend('<div class="selectedStore">' + storeSelector.find('option:selected').text() + '</div>');
          _chatDocument.find('.schedulingForm select').each(initDropdown);
          _chatDocument.find('.schedulingForm .schedulingButton').after('<button class="insideSubmitButton schedulingButtonBack" tabindex="0">' + (insideFrontInterface.language == "de" ? "Zurück" : "Back") + '</button>');
          _chatDocument.find('.schedulingForm .schedulingButtonBack').on('click', insideChatPane.frame.contentWindow.insideScheduling.closeInputForm);

          var productSelect = _chatDocument.find('#schedulingCustomFields .insideSelect.customFieldValue');
          productSelect.attr('required', 'required').prepend('<option value="">' + (insideFrontInterface.language == "de" ? "Ausgewähltes Produkt" : "Select Product") + '</option>');
          productSelect.val('');
          overrideClickEvent($, _chatDocument.find('.schedulingForm .schedulingButton')[0], function() {
            productSelect.parent().removeClass('invalid');
            if(productSelect.val().length === 0) {
              productSelect.parent().addClass('invalid');
              try { productSelect[0].reportValidity(); } catch (e) { }
              return false;
            }
            return true;
          });
        }
      } else {
        selectDepartmentByValue($(this).attr('data-department'));
        nextStep();
      }

      return false;
    }).attr('connect-label', insideChatPane.chatPane.querySelector('#prechatSubmitButton').value);

    // show options based channel availability
    insideFrontInterface.bind("assistants", checkAvailableAssistants);
    getStoreChannel(checkAvailableAssistants);

    // show store options for book appointment
    if(storeSelector.length) {
      getStoreNames(function(){
        if(_storeName.length == 0) return;

        var filteredStore = _storeName.filter(function(s){
          return insideFrontInterface.chatSettings.name.toLowerCase().search(s.brand.toLowerCase()) > -1;
        }).sort(function(a, b){
          return a.name.localeCompare(b.name);
        });

        storeSelector.append(filteredStore.map(function(s){
          return '<option value="' + s.id + '">' + s.name + '</option>';
        }).join(''));
      });
    }

    _customPrechat.addClass('init');
  }
  
  function overrideClickEvent($, button, validateFunc) {
    var originalClickEvent = $._data(button, "events")['click'][0].handler;
    $._data(button, "events")['click'][0].handler = function () {
      if(validateFunc()) originalClickEvent();
    }
  }

  function initDropdown() {
    $(this).wrap('<div class="insideSelectContainer">');
  }

  function getStoreChannel(callback) {
    $.getJSON(_insideCDN + 'custom/' + _websiteId + '-store-channels.json?v=' + _insideScriptVersion, function(data){
       _storeChannel = data; 
       if(typeof callback == 'function') callback();
    })
  }

  function getStoreNames(callback) {
    $.getJSON(_insideCDN + 'custom/' + _websiteId + '-store-names.json?v=' + _insideScriptVersion, function(data){
       _storeName = data; 
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
      _customPrechat.find('.option1').css('display', 'block'); // Store option
    } //else {
      // always show Book an Appointment as 3rd option
      _customPrechat.find('.option3').css('display', 'block'); // Book an Appointment
    //}
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
    if(chatSettingsName.startsWith('YSL') && _customPrechat.find('.option:not(.option3)[style*="display: block"]').length === 1) {
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

    if(val === 'CLIENT SERVICES') {
      const isSandbox = _insideCDN.includes('us-sandbox');
       // start AI disclaimer pre-chat task
      const prechatTaskId = {
        'amq': isSandbox ? 275 : 4,
        'bal': isSandbox ? 276 : 5,
        'bv ': isSandbox ? 277 : 6,
      }
      const themeName = insideFrontInterface.chatSettings.name.toLowerCase().substring(0,3);
      insideAPI.post("api/workflow/StartWorkflow", {
          workflowId: prechatTaskId[themeName],
          force: true
      });
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
    const websiteId = _insideCluster === 'ussandbox' ? 109 : insideFrontInterface.chat.userid.split(':')[1];
    let fileName = 'custom-prechat.css';
    if(insideFrontInterface.chatSettings.name.startsWith('BV')) {
      fileName = 'bv-theme.css';
    }
    const filePath = _insideCDN + 'custom/' + websiteId + '-' + fileName + '?v=' + _insideScriptVersion;
    const customPrechatCSS = `<link id="customPrechatCSS" rel="stylesheet" type="text/css" media="all" href="${filePath}">`

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
}()