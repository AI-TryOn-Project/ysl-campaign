// YSL
var _inside = _inside || [];
// var _inside = [];
var _insideLoaded = _insideLoaded || false;
var _insideJQ = _insideJQ || null;
window._insideViewUpdate = window._insideViewUpdate || function () { };
window._insideUpdateView = window._insideUpdateView || function () { };

(function () {
	if (_insideLoaded)
		return;
	_insideLoaded = true;

	var accountKey = "IN-1000764";
	var trackerURL = "us5-cdn.inside-graph.com";
	var subsiteId = null;
	var insideOrderTotal = insideOrderTotal || 0;
	var _insideMaxLoop = 150;
	var _insideCurLoop = 0;
	var _insideFirstLoad = false;
	var _insideCurUrl = window.location.href;
	var _insideDataLayer = null;
	var _insideCurrency = null;
	var _insideCount = 0;
	var _insideOrderConfirmed = false;
	var _insideCurPageType = "other";
	let _insideProduct = null;

	var subsiteMapping = {
		"us": "12",
		"ca": "13",
		"br": "39"
	};

	var currencyMapping = {
		"us": "USD",
		"ca": "CAD",
		"br": "BRL"
	};

	var hashJoaat = function (b) { for (var a = 0, c = b.length; c--;)a += b.charCodeAt(c), a += a << 10, a ^= a >> 6; a += a << 3; a ^= a >> 11; return ((a + (a << 15) & 4294967295) >>> 0).toString(16) };

	function debounce(func, wait, immediate) {
		var timeout;
		return function () {
			var context = this, args = arguments;
			var later = function () {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	function deferWait(callback, test) {
		if (test()) {
			callback();
			return;
		}
		var _interval = 10;
		var _spin = function () {
			if (test()) {
				callback();
			}
			else {
				_interval = _interval >= 1000 ? 1000 : _interval * 2;
				setTimeout(_spin, _interval);
			}
		};
		setTimeout(_spin, _interval);
	}

	function processInside(tracker) {
		var searchUrl = "/search?q";
		var searchQueryString = null;
		var productCategoryUrl = null;
		var productCategoryQueryString = null;
		var productUrl = null;
		var productQueryString = null;
		var checkoutUrl = "/checkout";
		var checkoutQueryString = null;
		var orderConfirmedUrl = null;
		var orderConfirmedQueryString = null;

		// Utility Functions
		function log() {
			if (typeof (console) != "undefined" && typeof (console.log) != "undefined") {
				// console.log("[INSIDE]", Array.prototype.slice.call(arguments));
			}
		}

		function keepWait(callback, test) {
			if (test()) {
				callback();
				if (_insideCurLoop >= _insideMaxLoop) {
					return;
				}
			}
			var _interval = 1000;
			var _spin = function () {
				if (test()) {
					_insideCurLoop = _insideCurLoop + 1;
					callback();
					if (_insideCurLoop >= _insideMaxLoop) {
						return;
					}
				}
				setTimeout(_spin, _interval);
			};
			setTimeout(_spin, _interval);
		}

		var indexOf = [].indexOf || function (prop) {
			for (var i = 0; i < this.length; i++) {
				if (this[i] === prop)
					return i;
			}
			return -1;
		};

		function myTrim(text) {
			try {
				if (typeof (text) != "undefined" && text != null)
					return typeof (text.trim) === "function" ? text.trim() : text.replace(/^\s+|\s+$/gm, '');
			} catch (trimex) { }

			return text;
		}

		function isNumber(o) {
			return !isNaN(o - 0) && o !== null && o !== "" && o !== false;
		}

		function isNumeric(n) {
			try {
				return !isNaN(parseFloat(n)) && isFinite(n);
			}
			catch (tempex) {
			}

			return false;
		}

		function validateEmail(tempmail) {
			try {
				if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(tempmail)) {
					return (true);
				}
			} catch (tempex) { }
			return (false);
		}

		function addCommas(nStr) {
			try {
				nStr += '';
				x = nStr.split('.');
				x1 = x[0];
				x2 = x.length > 1 ? '.' + x[1] : '';
				var rgx = /(\d+)(\d{3})/;
				while (rgx.test(x1)) {
					x1 = x1.replace(rgx, '$1' + ',' + '$2');
				}

				return x1 + x2;
			}
			catch (tempex) {
			}

			return nStr;
		}

		function setCookie(cname, cvalue, exdays) {
			var hostName = window.location.hostname;
			var siteNameFragments = hostName.split(".");
			var siteName = siteNameFragments[1];
			var domain = siteNameFragments.slice(1, siteNameFragments.length).join(".");

			var d = new Date();
			d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toGMTString();
			document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/" + ";domain=." + domain;
		}

		function getCookie(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = myTrim(ca[i]);
				if (c.indexOf(name) == 0)
					return c.substring(name.length, c.length);
			}
			return null;
		}

		function deleteCookie(cname) {
			document.cookie = cname + "=" + 0 + "; " + "expires=01 Jan 1970 00:00:00 GMT" + ";path=/";
		}

		function roundToTwo(num) {
			if (Math != "undefined" && Math.round != "undefined")
				return +(Math.round(num + "e+2") + "e-2");
			else
				return num;
		}

		function getSearchParameters() {
			var prmstr = window.location.search.substr(1);
			return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : [];
		}

		function transformToAssocArray(prmstr) {
			var params = [];
			var prmarr = prmstr.split("&");
			for (var i = 0; i < prmarr.length; i++) {
				params[i] = prmarr[i];
			}

			return params;
		}

		function randomIntFromInterval(min, max) {
			try {
				return Math.floor(Math.random() * (max - min + 1) + min);
			}
			catch (tempex) {
			}

			return min;
		}

		function getDecimalSign(number) {
			try {
				var tempnum = myTrim(number);

				if (number.length > 3) {
					return number.charAt(number.length - 3);
				}
			}
			catch (signex) {
			}

			return ".";
		}

		// End of utility functions

		function getViewData() {
			try {

				// Output view data
				// Default view data is "unknown"

				var data = {};

				data.action = "trackView";
				data.type = "article";
				data.url = window.location.href;
				data.name = "Unknown Page: " + window.location.href;
				var tempurl = window.location.href.toLowerCase();

				var temppath = window.location.pathname;
				var temp_loc = temppath.split("/");
				var page = "";

				var add_tags = [];
				var params = getSearchParameters();
				var searchterm = "Search"; // Find the searchterm the
				// visitor
				// entered for the search page to be
				// used as the page name
				if (params != null && params.length > 0) {
					for (var i = 0; i < params.length; i++) {
						if (params[i].indexOf("q=") == 0) {
							searchterm = params[i].split("q=")[1];
						}
					}
				}

				for (var i = 1; i < temp_loc.length; i++) {
					if (temp_loc[i] != null && temp_loc[i].length > 0)
						page = temp_loc[i];
				}
				var curpage = page.split("?")[0];
				data.name = curpage;

				// Identify and assign the correct page type here
				// The part below is actually very flexible, can use
				// dataLayer too
				// sometimes, etc so if needed can also just delete the
				// global
				// variable parts and make your own algorithm. From my
				// experience
				// the following part will rarely work for all websites.

				var temppagetype = "other";
				try {
					try {
						if (typeof (dataLayer) != "undefined" && dataLayer != null && dataLayer.length > 0) {
							for (var i = dataLayer.length - 1; i >= 0; i--) {
								if (typeof (dataLayer[i]) != "undefined" && dataLayer[i] != null && dataLayer[i].countryCode && dataLayer[i].pageType && dataLayer[i].currencyCode && dataLayer[i].languageCode) {
									_insideDataLayer = dataLayer[i];
									_insideCurrency = dataLayer[i].currencyCode;
									temppagetype = dataLayer[i].pageType.toLowerCase();
									break;
								}
							}

							if (temppagetype.indexOf("product page") != -1 || temppagetype.indexOf("product_page") != -1) {
								for (var i = dataLayer.length - 1; i >= 0; i--) {
									if (dataLayer[i] && dataLayer[i].eeAction && dataLayer[i].eeAction == "eeProductDetail") {
										if (dataLayer[i].product && dataLayer[i].product[0])
											_insideProduct = dataLayer[i].product[0];
										else if (dataLayer[i].products && dataLayer[i].products[0])
											_insideProduct = dataLayer[i].products[0];
										break;
									}
								}
							}
						}
					}
					catch (tempex) { }
				}
				catch (tempex) { }

				if (temppagetype == "homepage") {
					data.type = "homepage";
				}
				else if (temppagetype.indexOf("Product List Page".toLowerCase()) != -1) {
					data.type = "productcategory";
				}
				else if (temppagetype.indexOf("product page") != -1 || temppagetype.indexOf("product_page") != -1) {
					data.type = "product";
				}
				else if (temppagetype == "orderconfirmed" || temppagetype == "order confirmed" || temppagetype == "thank-you") {
					data.type = "orderconfirmed";
				}
				else if (temppagetype.indexOf("checkout") != -1 || temppagetype == "cart" || temppagetype == "shopping-bag") {
					data.type = "checkout";
				}
				else if (temppagetype.indexOf("search result") != -1 || temppagetype.indexOf("search") != -1) {
					data.type = "search";
				}
				else if (temppagetype == "login") {
					data.type = "login";
				}
				else if (tempurl.indexOf("/signup") != -1 || tempurl.indexOf("/signin") != -1) {
					data.type = "login";
				}

				if (productCategoryUrl != null) {
					if (tempurl.indexOf(productCategoryUrl.toLowerCase()) > -1) {
						data.type = "productcategory";
					}
				}
				if (productCategoryQueryString != null) {
					var tempelem = _insideJQ(productCategoryQueryString);
					if (tempelem != null && tempelem.length > 0) {
						data.type = "productcategory";
					}
				}

				if (searchUrl != null) {
					if (tempurl.indexOf(searchUrl.toLowerCase()) > -1) {
						data.type = "search";
					}
				}
				if (searchQueryString != null) {
					var tempelem = _insideJQ(searchQueryString);
					if (tempelem != null && tempelem.length > 0) {
						data.type = "search";
					}
				}

				if (productUrl != null) {
					if (tempurl.indexOf(productUrl.toLowerCase()) > -1) {
						data.type = "product";
					}
				}
				if (productQueryString != null) {
					var tempelem = _insideJQ(productQueryString);
					if (tempelem != null && tempelem.length > 0) {
						data.type = "product";
					}
				}

				if (checkoutUrl != null) {
					if (tempurl.indexOf(checkoutUrl.toLowerCase()) > -1) {
						data.type = "checkout";
					}
				}
				if (checkoutQueryString != null) {
					var tempelem = _insideJQ(checkoutQueryString);
					if (tempelem != null && tempelem.length > 0) {
						data.type = "checkout";
					}
				}

				if (orderConfirmedUrl != null) {
					if (tempurl.indexOf(orderConfirmedUrl.toLowerCase()) > -1) {
						data.type = "orderconfirmed";
					}
				}
				if (orderConfirmedQueryString != null) {
					var tempelem = _insideJQ(orderConfirmedQueryString);
					if (tempelem != null && tempelem.length > 0) {
						data.type = "orderconfirmed";
					}
				}

				try {
					var tempconfirmprocess = orderConfirmProcess();
					if (tempconfirmprocess != null && tempconfirmprocess.length > 0) {
						data.type = "orderconfirmed";
					}
				} catch (tempex) { }

				// Finish identying

				switch (data.type) {
					case "homepage":
						data.name = "Home";
						break;
					case "search":
						data.name = "Search Result Page";
						if (searchterm != null && searchterm.length > 0) {
							data.name = decodeURIComponent(searchterm);
							if (data.name.indexOf("+") != -1) {
								data.name = data.name.replace(/\+/g, ' ');
							}

							try {
								var tempempty = _insideJQ(".component-search-no-result__result");
								// var tempempty = _insideJQ(".component-search-no-result-block"); // This should be the new one but change was reverted for now
								if (tempempty.length > 0 && tempempty.is(":visible")) {
									add_tags.push("emptysearch");
								}
								else {
									if (typeof (dataLayer) != "undefined" && dataLayer != null && dataLayer.length > 0) {
										for (var i = dataLayer.length - 1; i >= 0; i--) {
											if (typeof (dataLayer[i].numberResults) != "undefined" && dataLayer[i].numberResults != null) {
												if (dataLayer[i].numberResults == 0)
													add_tags.push("emptysearch");
												break;
											}
											if (typeof (dataLayer[i].number_results) != "undefined" && dataLayer[i].number_results != null) {
												if (dataLayer[i].number_results == 0)
													add_tags.push("emptysearch");
												break;
											}
										}
									}
								}
							}
							catch (emptyex) {
							}
						}
						break;
					case "productcategory":
						var tempcat = getCategory();
						if (tempcat != null && tempcat.length > 0) {
							if (tempcat.length > 149)
								tempcat = tempcat.substring(0, 149);
							data.category = tempcat;
						}

						var tempPageName = getPageName();
						if (tempPageName != null && tempPageName.length > 0)
							data.name = tempPageName;

						break;
					case "product":
						var tempPageName = getProductName();
						if (tempPageName != null && tempPageName.length > 0)
							data.name = tempPageName;

						var tempcat = getCategory();
						if (tempcat != null && tempcat.length > 0) {
							if (tempcat.length > 149)
								tempcat = tempcat.substring(0, 149);
							data.category = tempcat;
						}

						var tempval = getProductImage();
						if (tempval != null && tempval.length > 0)
							data.img = tempval;
						else {
							data.type = "productother";
						}

						var boolsku = false;
						var tempsku = getProductSku();
						if (tempsku != null && tempsku.length > 0) {
							data.sku = tempsku;
							if (data.name.toLowerCase().indexOf(tempsku.toLowerCase()) == -1) {
								data.name = data.name + " #" + tempsku;
								boolsku = true;
							}
						}

						var boolprice = false;
						var tempprice = getProductPrice();
						if (tempprice != null && tempprice > 0) {
							data.price = tempprice;

							try {
								var temptextprice = tempprice;
								if (typeof temptextprice === 'string' || temptextprice instanceof String)
									temptextprice = parseFloat(temptextprice);

								data.name = addCommas(Math.trunc(temptextprice).toString()) + " - " + data.name;
								boolprice = true;
							}
							catch (temppriceex) {
							}
						}

						if (typeof (_insideDataLayer) != "undefined" && _insideDataLayer != null && typeof (_insideDataLayer.countryCode) != "undefined" && _insideDataLayer.countryCode != null && _insideDataLayer.countryCode.length > 0)
							data.name = _insideDataLayer.countryCode.toUpperCase() + " - " + data.name;

						if (!boolsku || !boolprice)
							data.type = "productother";

						break;
					case "orderconfirmed":
						data.name = "Order Confirmed";
						break;
					case "checkout":
						try {
							var tempPageName = getPageName();
							if (tempPageName != null && tempPageName.length > 0)
								data.name = tempPageName;

							if (_insideData && _insideData.page && _insideData.page.step) {
								if (typeof (data.data) == "undefined") {
									data.data = {};
								}
								data.data.nav_stepName = _insideData.page.step;
							}
						} catch (tempex) { }
						break;
					default:
						var tempPageName = getPageName();
						if (tempPageName != null && tempPageName.length > 0)
							data.name = tempPageName;
				}

				if (add_tags.length > 0) {
					data.tags = add_tags.join(",");
				}

				// Get view data from page

				return data;
			}
			catch (ex) {
				if (typeof (console) != "undefined" && typeof (console.log) != "undefined")
					log("getViewData error: ", ex);
				return null;
			}
		}

		function getPageName() {

			if (typeof (_insideData) != "undefined" && _insideData != null && _insideData.page && _insideData.page.name) {
				return _insideData.page.name;
			}

			try {
				var content = document.getElementsByTagName("title");
				if (typeof (content) != "undefined" && content != null && content.length > 0) {
					var result = content[0].textContent || content[0].innerText;
					if (typeof (result) != "undefined" && result != null && result.length > 0) {
						return myTrim(result);
					}
				}
			} catch (pagenameex) { }

			return null;
		}

		function getProductName() {
			try {
				if (_insideProduct && _insideProduct.name && _insideProduct.name.length > 0) {
					return _insideProduct.name;
				}
			} catch (tempex) { }

			return null;
		}

		function getProductImage() {
			try {
				var tempimg = _insideJQ('#main li button img[data-nimg="1"][loading="lazy"]');
				if (tempimg.length > 0)
					return tempimg.get(0).currentSrc;
			} catch (tempex) { }

			try {
				var metaTags = document.getElementsByTagName("meta");

				var fbAppIdContent = "";
				for (var i = 0; i < metaTags.length; i++) {
					if (metaTags[i].getAttribute("property") == "og:image") {
						fbAppIdContent = metaTags[i].getAttribute("content");
						if (fbAppIdContent)
							return fbAppIdContent;
					}
				}
			}
			catch (tempex) {
			}

			return null;
		}

		function getProductPrice() {
			try {
				if (_insideProduct && _insideProduct.price) {
					return _insideProduct.price;
				}
			} catch (tempex) { }

			return null;
		}

		function getProductSku() {
			try {
				if (_insideProduct && _insideProduct.id && _insideProduct.id.length > 0) {
					return _insideProduct.id;
				}
			} catch (tempex) { }

			return null;
		}

		function getCategory() {
			try {
				var breadcrumbs = null;

				if (breadcrumbs != null && breadcrumbs.length > 0) {
					var path = "";
					for (var i = 1; i < breadcrumbs.length; i++) {
						var temp = breadcrumbs[i].innerText || breadcrumbs[i].textContent;
						var tempelem = breadcrumbs[i].getElementsByTagName("a");
						if (tempelem != null && tempelem.length > 0) {
							temp = tempelem[0].innerText || tempelem[0].textContent;
						}
						temp = myTrim(temp);
						if (temp != "/")
							path += (path != "" ? " / " : "") + temp;
					}
					if (path != "")
						return path;
				}
			}
			catch (tempex) {
			}

			return null;
		}

		function getOrderData() {
			try {
				var data = [];
				var totalprice = 0;
				var orderId = "auto";

				var tempdataprods = null;
				try {
					if (typeof (dataLayer) != "undefined" && dataLayer != null && dataLayer.length > 0) {
						for (var i = dataLayer.length - 1; i >= 0; i--) {
							if (typeof (dataLayer[i]) != "undefined" && dataLayer[i] != null && typeof (dataLayer[i].pageType) != "undefined" && dataLayer[i].pageType != null && dataLayer[i].pageType.length > 0 && dataLayer[i].pageType.toLowerCase() == "checkout" && typeof (dataLayer[i].products) != "undefined" && dataLayer[i].products != null && dataLayer[i].products.length > 0) {
								tempdataprods = dataLayer[i].products;
								if (typeof (dataLayer[i].event) != "undefined" && dataLayer[i].event != null && dataLayer[i].event.length > 0
									&& dataLayer[i].event.toLowerCase() == "purchase") {
									tempdataprods = null;
								}
								break;
							}
							else if (typeof (dataLayer[i]) != "undefined" && dataLayer[i] != null && typeof (dataLayer[i].event) != "undefined" && dataLayer[i].event != null && dataLayer[i].event.length > 0 && dataLayer[i].event.toLowerCase() == "eecheckout" && typeof (dataLayer[i].products) != "undefined" && dataLayer[i].products != null && dataLayer[i].products.length > 0) {
								tempdataprods = dataLayer[i].products;
								break;
							}
						}
					}

					var tempimgs = _insideJQ(".c-minilineitem__details img.c-minilineitem__image");
				} catch (tempex) { }

				if (tempdataprods != null) {
					for (var i = 0; i < tempdataprods.length; i++) {
						var insideitem = {};
						insideitem.action = "addItem";
						insideitem.orderId = orderId;

						if (tempdataprods[i].name && tempdataprods[i].name.length > 0)
							insideitem.name = tempdataprods[i].name;

						if (tempdataprods[i].id)
							insideitem.sku = tempdataprods[i].id;

						if (tempdataprods[i].price && isNumeric(tempdataprods[i].price)) {
							insideitem.price = parseFloat(tempdataprods[i].price);
							if (tempdataprods[i].quantity && isNumeric(tempdataprods[i].quantity)) {
								insideitem.qty = parseFloat(tempdataprods[i].quantity);
								totalprice = totalprice + (insideitem.price * insideitem.qty);
							}
						}

						if (tempdataprods[i].category) {
							insideitem.category = tempdataprods[i].category;
							if (insideitem.category.length > 149)
								insideitem.category = insideitem.category.substring(0, 149);
						}

						try {
							var tempimg = _insideJQ("button[data-pid='" + insideitem.sku + "']");
							if (tempimg.length > 0)
								insideitem.img = tempimg.attr("data-image");
							else {
								if (tempimgs.length > 0) {
									tempimgs.each(function (rowindex) {
										var tempalt = _insideJQ(this).get(0).currentSrc;
										if (tempalt.toLowerCase().indexOf(tempdataprods[i].productSMC.toLowerCase()) != -1) {
											insideitem.img = tempalt;
										}
									});
								}
							}
						} catch (tempex) { }

						data.push(insideitem);
					}
				}

				if (data.length > 0) {
					data.push({
						"action": "trackOrder",
						"orderId": orderId,
						"orderTotal": totalprice
					});

					sessionStorage.setItem("insideordertotal", totalprice);

					return data;
				}
			}
			catch (ex) {
				log("getOrderData error. ", ex);
			}

			return null;
		}

		function orderConfirmProcess() {
			try {
				var data = [];
				var detail = null;

				if (typeof (_insideData) != "undefined" && _insideData != null && _insideData.order)
					detail = _insideData.order;

				if (detail != null) {
					var totalprice = detail.total;
					var orderID = detail.id;
					var temppurchasedata = {};

					if (typeof (detail.shipping) != "undefined" && detail.shipping != null) {
						temppurchasedata.shipping = detail.shipping;
					}
					if (typeof (detail.tax) != "undefined" && detail.tax != null) {
						temppurchasedata.tax = detail.tax;
					}
					if (_insideCurrency != null) {
						temppurchasedata.currency = _insideCurrency;
					}

					// try {
					// 	var temporderdata = getOrderData();
					// 	if (temporderdata && temporderdata.length > 0)
					// 		data = temporderdata;
					// } catch (orderex) { }

					if (typeof (orderID) != "undefined" && orderID != null && orderID.length > 0 && orderID != "auto") {
						try {
							var lastOrderID = sessionStorage.getItem("insidelastorderid");
							if (lastOrderID == orderID) {
								return null;
							}
						}
						catch (orderidex) {
						}

						data.push({
							"action": "trackOrder",
							"orderId": "auto",
							"newOrderId": orderID,
							"orderTotal": totalprice,
							"data": temppurchasedata,
							"update": true,
							"complete": true
						});
					}

					return data;
				}
			}
			catch (ex) {
				log("orderConfirmProcess error. ", ex);
			}

			try {
				var data = [];
				var tempcurrency = null;

				var detail = null;
				if (typeof (dataLayer) != "undefined" && dataLayer != null && dataLayer.length > 0) {
					for (var i = 0; i < dataLayer.length; i++) {
						if (typeof (dataLayer[i].transactionId) != "undefined" && dataLayer[i].transactionId != null && dataLayer[i].transactionId.length > 0 && typeof (dataLayer[i].transactionTotal) != "undefined" && dataLayer[i].transactionTotal != null) {
							detail = dataLayer[i];
							if (typeof (dataLayer[i].currencyCode) != "undefined" && dataLayer[i].currencyCode != null) {
								tempcurrency = dataLayer[i].currencyCode;
							}
						}
					}
				}

				if (detail != null) {
					var totalprice = detail.transactionTotal;
					var orderID = detail.transactionId;
					var temppurchasedata = {};

					if (typeof (detail.transactionShipping) != "undefined" && detail.transactionShipping != null) {
						temppurchasedata.shipping = detail.transactionShipping;
					}
					if (typeof (detail.transactionTax) != "undefined" && detail.transactionTax != null) {
						temppurchasedata.tax = detail.transactionTax;
					}
					if (tempcurrency != null) {
						temppurchasedata.currency = tempcurrency;
					}

					if (typeof (orderID) != "undefined" && orderID != null && orderID.length > 0 && orderID != "auto") {

						try {
							var lastOrderID = sessionStorage.getItem("insidelastorderid");
							if (lastOrderID == orderID) {
								return null;
							}
						}
						catch (orderidex) {
						}

						data.push({
							"action": "trackOrder",
							"orderId": "auto",
							"newOrderId": orderID,
							"orderTotal": totalprice,
							"data": temppurchasedata,
							"update": true,
							"complete": true
						});
					}

					return data;
				}
			}
			catch (ex) {
				log("orderConfirmProcess error. ", ex);
			}

			try {
				var data = [];
				var tempcurrency = null;

				var detail = null;
				if (typeof (dataLayer) != "undefined" && dataLayer != null && dataLayer.length > 0) {
					for (var i = 0; i < dataLayer.length; i++) {
						if (typeof (dataLayer[i]) != "undefined" && dataLayer[i] != null && typeof (dataLayer[i].ecommerce) != "undefined" && dataLayer[i].ecommerce != null
							&& typeof (dataLayer[i].ecommerce.purchase) != "undefined" && dataLayer[i].ecommerce.purchase != null
							&& typeof (dataLayer[i].ecommerce.purchase.actionField) != "undefined"
							&& dataLayer[i].ecommerce.purchase.actionField != null
							&& typeof (dataLayer[i].ecommerce.purchase.actionField.id) != "undefined"
							&& dataLayer[i].ecommerce.purchase.actionField.id != null
							&& dataLayer[i].ecommerce.purchase.actionField.id.length > 0) {
							detail = dataLayer[i].ecommerce.purchase;
							if (typeof (dataLayer[i].ecommerce.currencyCode) != "undefined" && dataLayer[i].ecommerce.currencyCode != null && dataLayer[i].ecommerce.currencyCode.length > 0) {
								tempcurrency = dataLayer[i].ecommerce.currencyCode.toUpperCase();
							}
						}
					}
				}

				if (detail != null) {
					var totalprice = detail.actionField.revenue;
					var orderID = detail.actionField.id;
					var temppurchasedata = {};

					if (typeof (detail.actionField.shipping) != "undefined" && detail.actionField.shipping != null) {
						temppurchasedata.shipping = detail.actionField.shipping;
					}
					if (typeof (detail.actionField.tax) != "undefined" && detail.actionField.tax != null) {
						temppurchasedata.tax = detail.actionField.tax;
					}
					if (tempcurrency != null) {
						temppurchasedata.currency = tempcurrency;
					}

					// var details = detail.products;

					// for (var i = 0; i < details.length; i++)
					// {
					// var price = details[i].price;
					// var qty = details[i].quantity;
					// var item_name = details[i].name;
					// var sku = details[i].id;
					//
					// data.push({
					// "action" : "addItem",
					// "orderId" : "auto",
					// "name" : myTrim(item_name),
					// "price" : price,
					// "img" : details[i].ImageURL,
					// "sku" : myTrim(sku),
					// "qty" : qty
					// });
					// }

					if (typeof (orderID) != "undefined" && orderID != null && orderID.length > 0 && orderID != "auto") {
						try {
							var lastOrderID = sessionStorage.getItem("insidelastorderid");
							if (lastOrderID == orderID) {
								return null;
							}
						}
						catch (orderidex) {
						}

						// data.push({
						// "action" : "trackOrder",
						// "orderId" : "auto",
						// "orderTotal" : totalprice
						// });

						data.push({
							"action": "trackOrder",
							"orderId": "auto",
							"newOrderId": orderID,
							"orderTotal": totalprice,
							"data": temppurchasedata,
							"update": true,
							"complete": true
						});

						return data;
					}
				}
			}
			catch (ex) {
				log("orderConfirmProcess error. ", ex);
			}

			try {
				var data = [];
				var tempcurrency = null;

				var detail = null;
				if (typeof (dataLayer) != "undefined" && dataLayer != null && dataLayer.length > 0) {
					for (var i = 0; i < dataLayer.length; i++) {
						if (typeof (dataLayer[i]) != "undefined" && dataLayer[i] != null && dataLayer[i].event && dataLayer[i].event == "purchase" && typeof (dataLayer[i].ecommerce) != "undefined" && dataLayer[i].ecommerce != null && typeof (dataLayer[i].ecommerce.transaction_id) != "undefined" && dataLayer[i].ecommerce.transaction_id != null && dataLayer[i].ecommerce.transaction_id && typeof (dataLayer[i].ecommerce.value) != "undefined" && dataLayer[i].ecommerce.value != null) {
							detail = dataLayer[i].ecommerce;
						}
					}
				}

				if (detail != null) {
					var totalprice = detail.value;
					var orderID = detail.transaction_id;
					var temppurchasedata = {};

					if (typeof (detail.shipping) != "undefined" && detail.shipping != null) {
						temppurchasedata.shipping = detail.shipping;
					}
					if (typeof (detail.tax) != "undefined" && detail.tax != null) {
						temppurchasedata.tax = detail.tax;
					}
					if (tempcurrency != null) {
						temppurchasedata.currency = tempcurrency;
					}

					if (typeof (orderID) != "undefined" && orderID != null && orderID != "auto") {

						try {
							var lastOrderID = sessionStorage.getItem("insidelastorderid");
							if (lastOrderID == orderID) {
								return null;
							}
						}
						catch (orderidex) {
						}

						data.push({
							"action": "trackOrder",
							"orderId": "auto",
							"newOrderId": orderID,
							"orderTotal": totalprice,
							"data": temppurchasedata,
							"update": true,
							"complete": true
						});
					}

					return data;
				}
			}
			catch (ex) {
				log("orderConfirmProcess error. ", ex);
			}

			return null;
		}

		function getVisitorId() {
			try {
				if (typeof (_insideData) != "undefined" && _insideData != null && _insideData.user && _insideData.user.id)
					return _insideData.user.id;
			}
			catch (visitidex) {
			}

			try {
				if (_insideDataLayer && _insideDataLayer.isLogged == "1" && _insideDataLayer.userId)
					return _insideDataLayer.userId;
			}
			catch (visitidex) {
			}

			return null;
		}

		function getVisitorName() {
			try {
				if (typeof (_insideData) != "undefined" && _insideData != null && _insideData.user && _insideData.user.name)
					return _insideData.user.name;
			}
			catch (visitidex) {
			}

			return null;
		}

		function getVisitorData() {
			try {
				var tempdata = {};

				if (_insideDataLayer) {
					if (_insideDataLayer.countryCode) {
						tempdata.nav_countryCode = _insideDataLayer.countryCode.toUpperCase();
						tempdata.country = _insideDataLayer.countryCode.toUpperCase();
					}
					if (_insideDataLayer.languageCode) {
						tempdata.nav_languageCode = _insideDataLayer.languageCode.toUpperCase();
						tempdata.language = _insideDataLayer.languageCode.toUpperCase();
					}
				}

				if (typeof (_insideData) != "undefined" && _insideData != null && _insideData.website && _insideData.website.country) {
					tempdata.nav_countryCode = _insideData.website.country.toUpperCase();
					tempdata.country = _insideData.website.country.toUpperCase();
				}

				if (typeof (_insideData) != "undefined" && _insideData != null && _insideData.website && _insideData.website.language) {
					tempdata.nav_languageCode = _insideData.website.language.toUpperCase();
					tempdata.language = _insideData.website.language.toUpperCase();
				}

				var tempuserid = getVisitorId();
				var tempusername = getVisitorName();
				if (tempuserid != null && tempusername != null && tempusername.length > 0) {
					tempdata.user_name = tempusername;
					if (typeof (_insideData.user.email) != "undefined" && _insideData.user.email != null && validateEmail(_insideData.user.email))
						tempdata.user_email = _insideData.user.email;
				}
			}
			catch (visitidex) {
			}


			return tempdata;
		}

		function insertInsideTag() {
			try {
				_insideGraph.processQueue();
			}
			catch (tempex) {
			}
		}

		function sendToInside() {
			try {
				tracker.url = window.location.href;

				var view = getViewData();
				if (view != null) {
					var visitorId = getVisitorId();
					if (visitorId != null) {
						tracker.visitorId = visitorId;
					}

					var visitorName = getVisitorName();
					if (visitorName != null && visitorName.length > 0) {
						tracker.visitorName = visitorName;
					}

					var visitorData = getVisitorData();
					if (visitorData != null) {
						tracker.visitorData = visitorData;
					}

					if (view.type == "orderconfirmed") {
						var tempconfirm = orderConfirmProcess();
						if (tempconfirm != null && tempconfirm.length > 0) {
							_insideOrderConfirmed = true;

							for (var i = 0; i < tempconfirm.length; i++) {
								_inside.push(tempconfirm[i]);

								try {
									if (tempconfirm[i].action == "trackOrder")
										if (typeof (tempconfirm[i].newOrderId) != "undefined" && tempconfirm[i].newOrderId != null)
											sessionStorage.setItem("insidelastorderid", tempconfirm[i].newOrderId);
								}
								catch (tempex) {
								}
							}

							sessionStorage.removeItem("insideordertotal");
						}
						else {
							view.type == "other";
						}
					}
					else {
						var orderData = getOrderData();

						if (orderData != null && orderData.length > 0) {
							for (var i = 0; i < orderData.length; i++) {
								_inside.push(orderData[i]);
								if (orderData[i].action == "trackOrder") {
									view.orderId = orderData[i].orderId;
									view.orderTotal = orderData[i].orderTotal;
									insideOrderTotal = orderData[i].orderTotal;
								}
							}
						}
						else {
							try {
								var total_temp = sessionStorage.getItem("insideordertotal");
								try {
									total_temp = parseFloat(total_temp);
								}
								catch (numex) {
									total_temp = 0;
								}

								if (total_temp != null && total_temp > 0) {
									view.orderId = "auto";
									view.orderTotal = total_temp;
								}
							} catch (tempex) { }
						}
					}

					// Add currency code
					try {
						try {
							if (typeof (_insideData) != "undefined" && _insideData != null && _insideData.website && _insideData.website.currency && _insideData.website.currency.length == 3) {
								_insideCurrency = _insideData.website.currency.toUpperCase();
							}
						} catch (currencyex) { }

						if (_insideCurrency) {
							if (_inside != null && _inside.length > 0) {
								for (var i = 0; i < _inside.length; i++) {
									if (_inside[i].action == "trackOrder") {
										if (typeof (_inside[i].data) == "undefined" || _inside[i].data == null) {
											_inside[i].data = {};
										}

										if (typeof (_inside[i].data.currency) == "undefined" || _inside[i].data.currency == null) {
											_inside[i].data.currency = _insideCurrency;
										}
									}
								}
							}

							if (typeof (view.data) == "undefined" || view.data == null) {
								view.data = {};
							}
							view.data.currency = _insideCurrency;

							if (typeof (tracker.visitorData) == "undefined" || tracker.visitorData == null) {
								tracker.visitorData = {};
							}
							tracker.visitorData.currency = _insideCurrency;
						}
					} catch (currencyex) { }

					try {
						if (view.type == "product") {
							var tempprodname = getProductName();
							if (tempprodname) {
								if (typeof (tracker.visitorData) == "undefined" || tracker.visitorData == null) {
									tracker.visitorData = {};
								}
								tracker.visitorData.productPageName = tempprodname;
							}
						}
					} catch (productnamedataex) { }

					_inside.push(view);

					try {
						_insideCurPageType = view.type;
					} catch (tempex) { }

					log("Inside Debug: ", _inside);
				}
			}
			catch (sendex) {
				_inside = [];

				_inside.push({
					"action": "trackView",
					"type": "other",
					"name": "Check: " + window.location.href
				});

				log(sendex);
			}

			try {
				let tempPathArr = window.location.pathname.split("/").filter(function (p) { return p !== ""; });
				if (tempPathArr) {
					if (tempPathArr.length && tempPathArr.length > 0) {
						let tempSubsiteCountry = tempPathArr[0].toLowerCase();
						if (tempSubsiteCountry.indexOf("-") != -1)
							tempSubsiteCountry = tempSubsiteCountry.split("-")[1];
						if (subsiteMapping[tempSubsiteCountry]) {
							subsiteId = subsiteMapping[tempSubsiteCountry];
							tracker.subsiteId = subsiteId;
						}
					}
				}
			} catch (tempex) { }

			try {
				if (typeof (dataLayer) != "undefined" && dataLayer != null && dataLayer.length > 0) {
					for (var i = dataLayer.length - 1; i >= 0; i--) {
						if (typeof (dataLayer[i]) != "undefined" && dataLayer[i] != null && dataLayer[i].countryCode && dataLayer[i].languageCode) {
							var tempdatacountry = dataLayer[i].countryCode.toLowerCase();
							if (subsiteMapping[tempdatacountry]) {
								subsiteId = subsiteMapping[tempdatacountry];
								tracker.subsiteId = subsiteId;
							}
							break;
						}
					}
				}
			} catch (subsiteex) { }

			insertInsideTag();
			if (!_insideFirstLoad)
				_insideFirstLoad = true;
		}

		window._insideViewUpdate = debounce(function () {
			var triggerupdate = true;
			try {
				// var temphashj = hashJoaat(JSON.stringify(_insideDataLayer))
				// if (temphashj == _insideHashJ)
				// 	triggerupdate = false;
			} catch (tempex) { }

			if (triggerupdate) {
				setTimeout(sendToInside, 1000);
			}
		}, 2000);

		window._insideUpdateView = debounce(function () {
			var triggerupdate = true;
			try {
				// var temphashj = hashJoaat(JSON.stringify(_insideDataLayer))
				// if (temphashj == _insideHashJ)
				// 	triggerupdate = false;
			} catch (tempex) { }

			if (triggerupdate) {
				setTimeout(sendToInside, 1000);
			}
		}, 2000);

		deferWait(sendToInside, function () {
			var insideloadbool = false;
			try {
				if (document.readyState != 'loading' && document.readyState != 'interactive') {
					// _insideCount++;
					insideloadbool = true;
				}
				// insideloadbool = (typeof (_insideData) != "undefined" && _insideData != null && _insideData.page && _insideData.page.type);
			}
			catch (tempex) { }

			// if (_insideCount > 7)
			// if (_insideCount > 2)
			// 	insideloadbool = true;
			if (insideloadbool) {
				keepWait(function () {
					setTimeout(sendToInside, 2000);
				}, function () {
					if (!_insideFirstLoad)
						return false;

					if (typeof (_insideGraph) != "undefined" && _insideGraph != null) {
						var temporderdata = getOrderData();

						if (temporderdata != null && temporderdata.length > 0) {
							for (var i = 0; i < temporderdata.length; i++) {
								if (temporderdata[i].action == "trackOrder") {
									if (insideOrderTotal != temporderdata[i].orderTotal) {
										return true;
									}
								}
							}
						}
						else if (insideOrderTotal > 0) {
							insideOrderTotal = 0;
							return true;
						}

						try {
							var tempcurview = getViewData();
							var tempcururl = window.location.href.split("#")[0];
							if (_insideCurUrl != tempcururl) {
								_insideCurUrl = tempcururl;
								_insideCurPageType = tempcurview.type;
								return true;
							}

							if (_insideCurPageType != tempcurview.type) {
								_insideCurPageType = tempcurview.type;
								_insideCurUrl = tempcururl;
								return true;
							}
						} catch (tempex) { }

						try {
							if (!_insideOrderConfirmed) {
								var tempview = getViewData();
								if (tempview != null && typeof (tempview.type) != "undefined" && tempview.type != null && tempview.type == "orderconfirmed") {
									var tempconfirm = orderConfirmProcess();
									if (tempconfirm != null && tempconfirm.length > 0) {
										return true;
									}
								}
							}
						} catch (tempex) { }
					}

					return false;
				});

				return true;
			}

			return false;
		});
	}

	if (window.location.href.indexOf("no_insidechat=true") != -1) {
		return;
	}
	else {
		if (typeof (_insideGraph) != "undefined" && _insideGraph != null && typeof (_insideGraph.current) != "undefined" && _insideGraph.current != null) {
			processInside(_insideGraph.current)
		}
		else {
			var insideTracker = {
				"action": "getTracker",
				"crossDomain": false,
				"account": accountKey
			};

			try {
				let tempPathArr = window.location.pathname.split("/").filter(function (p) { return p !== ""; });
				if (tempPathArr) {
					if (tempPathArr.length && tempPathArr.length > 0) {
						let tempSubsiteCountry = tempPathArr[0].toLowerCase();
						if (tempSubsiteCountry.indexOf("-") != -1)
							tempSubsiteCountry = tempSubsiteCountry.split("-")[1];
						if (subsiteMapping[tempSubsiteCountry]) {
							subsiteId = subsiteMapping[tempSubsiteCountry];
							_insideCurrency = currencyMapping[tempdatacountry];
						}
					}
				}
			} catch (tempex) { }

			try {
				if (typeof (dataLayer) != "undefined" && dataLayer != null && dataLayer.length > 0) {
					for (var i = dataLayer.length - 1; i >= 0; i--) {
						if (typeof (dataLayer[i]) != "undefined" && dataLayer[i] != null && dataLayer[i].countryCode && dataLayer[i].languageCode) {
							var tempdatacountry = dataLayer[i].countryCode.toLowerCase();
							if (subsiteMapping[tempdatacountry]) {
								subsiteId = subsiteMapping[tempdatacountry];
								_insideCurrency = currencyMapping[tempdatacountry];
							}
							break;
						}
					}
				}
			} catch (subsiteex) { }

			if (typeof (subsiteId) != "undefined" && subsiteId != null)
				insideTracker["subsiteId"] = subsiteId;

			_inside.push(insideTracker);

			_inside.push({
				"action": "bind",
				"name": "onload",
				"callback": function (tracker) {
					if (_insideFirstLoad)
						return;

					_insideJQ = _insideGraph.jQuery;

					processInside(tracker)
				}
			});
			(function (w, d, s, u) {
				a = d.createElement(s), m = d.getElementsByTagName(s)[0];
				a.async = 1;
				a.src = u;
				m.parentNode.insertBefore(a, m);
			})(window, document, "script", "//" + trackerURL + "/ig.js");

			(function (w, d, s, u) {
				a = d.createElement(s), m = d.getElementsByTagName(s)[0];
				a.async = 1;
				a.src = u;
				m.parentNode.insertBefore(a, m);
			})(window, document, "script", "//us5-cdn.inside-graph.com/gtm/IN-1000764-YSL-EAGLE/addToBasket.js");
		}
	}

})();