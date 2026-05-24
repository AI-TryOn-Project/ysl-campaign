(function () {
    /**
     * After 1.27.0 upgrade, insideAPI in frontend-framework.js.bundle won't be loaded in the screen sharing mode
     * insideAPI.post will be replaced with the fetch method in screen sharing mode to fix issue
     */
     if (location.search.search('inside_app_ss') > -1 || document.cookie.search('inside-app-ss') > -1) {
        window.insideAPI = {
            post: function (call, data) {
                fetch(_insideSocialUrl + call, {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            }
        };
    }

    window._insideScreenShare = window._insideScreenShare || {};
    window._insideScreenShare.sendCartItems = function (visitorId) {
        var baseUrl = document.location.origin + "/" + document.location.pathname.split("/")[1];
        fetch(baseUrl + "/cart?isMiniCart=true", {
            method: "GET"
        }).then(data => data.text()).then((data) => {
            var cart = _insideGraph.jQuery("<div>").html(data).find(".l-cart").data("gtmminicartclick").products;
            insideAPI.post("api/videochat/screenshare/transferbasket", { "visitorid": visitorId, "basket": cart });
        });
    }

    window._insideScreenShare.addCartItems = function (basket) {
        var count = basket.length;
        for (var i = 0; i < basket.length; i++) {
            var codes = document.location.pathname.split("/")[1].split("-");
            fetch(document.location.origin + "/on/demandware.store/Sites-SLP-NOAM-Site/" + codes[0] + "_" + codes[1].toUpperCase() + "/Cart-AddProduct", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: "pid=" + basket[i].id + "&quantity=" + basket[i].quantity + "&isMobile=false&options="
            }).then(() => {
                count--;
                if (count === 0) window.location = document.location.origin + "/" + document.location.pathname.split("/")[1] + "/cart";
            })
        }
    }
})();