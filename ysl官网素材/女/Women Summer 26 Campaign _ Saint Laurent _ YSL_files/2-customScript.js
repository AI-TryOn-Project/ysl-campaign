!function ($) {
  if(typeof window._insideCustomScriptLoaded !== 'undefined') {
    return;
  }
  window._insideCustomScriptLoaded = true;
  var device;
	
  function waitForInside() {
    if (typeof _insideGraph !== "undefined" && _insideGraph.jQuery && insideFrontInterface && insideFrontInterface.bind && insideFrontInterface.chat && insideFrontInterface.chat.userid) {
      device = $.inside.front.getDevice();

      var settingDesc = typeof insideFrontInterface != 'undefined' && insideFrontInterface.chatSettings && insideFrontInterface.chatSettings.description; // legacy alt-settings
      var settingName = typeof insideFrontInterface != 'undefined' && insideFrontInterface.chatSettings && insideFrontInterface.chatSettings.name; // themes

      var websiteId = insideFrontInterface.chat.userid.split(':')[1];

      if (insideFrontInterface.chatSettings.version == 2) {
        // custom department selector for themes
        _insideGraph.loadJS(_insideCDN + 'custom/' + websiteId + '-custom-prechat.js?v=' + _insideScriptVersion);
      }
      else if (settingDesc && settingDesc.search(/(Alexander McQueen|Saint Laurent)/i) > -1) {
        // custom department selector for legacy chat pane
        _insideGraph.loadJS(_insideCDN + 'custom/' + websiteId + '-customDepartmentSelector.js?v=' + _insideScriptVersion);
      }
      
    }
    else {
      setTimeout(waitForInside, 400);
    }
  }
  waitForInside();

  _insideGraph.defer(function (params) {
    if (insideFrontInterface.chatSettings.name.toLowerCase().search('bv') > -1) {
      $(insideChatPane.frame).addClass('bv-chatpane');
    }
    $(insideChatPane.chatPane).parent().attr('theme', insideFrontInterface.chatSettings.name.replace(/(\.|\s)/g, '-').toLowerCase());
  }, function () {
    return typeof insideFrontInterface !== "undefined" && insideFrontInterface.chatSettings && insideFrontInterface.chatSettings.name && typeof insideChatPane !== 'undefined' && insideChatPane.frame && insideChatPane.chatPane;
  });
  
	_insideGraph.defer(function (params) {
		const originalPost = insideAPI.post;
		insideAPI.post = function(call, data, success, error, abortController, forceIgnoreFetch = false, timeout = null, ignoreAsyncAwait=false) {
			originalPost.apply(this, [call, data, success, error, abortController, true, timeout, ignoreAsyncAwait]);
		}
	}, function () {
		return typeof insideFrontInterface !== "undefined" && typeof insideAPI !== "undefined" && typeof insideAPI.post === "function";
	});

  _insideGraph.loadJS(_insideCDN + 'custom/2-commonFunctions.js?v=' + _insideScriptVersion);

}(_insideGraph.jQuery)

