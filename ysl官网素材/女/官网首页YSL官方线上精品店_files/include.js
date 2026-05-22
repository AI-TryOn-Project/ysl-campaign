// YSL China
var _inside = _inside || [];
// var _inside = [];
var _insideLoaded = _insideLoaded || false;
var _insideJQ = _insideJQ || null;

(function () {
	if (_insideLoaded)
		return;
	_insideLoaded = true;

	var accountKey = "IN-1000888";
	var trackerURL = "asia3-track.inside-graph.cn";
	var subsiteId = "6";
	var insideOrderTotal = insideOrderTotal || 0;
	var _insideMaxLoop = 2500;
	var _insideCurLoop = 0;
	var _insideFirstLoad = false;
	var tempcururl = window.location.href;
	var _insideDataLayer = null;
	var _insideCurrency = "CNY";
	var _insideCount = 0;
	var _insideOrderConfirmed = false;

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
		var searchUrl = "/search";
		var searchQueryString = null;
		var productCategoryUrl = "/categories";
		var productCategoryQueryString = null;
		var productUrl = "/products";
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
				if (typeof (window._insideData) != "undefined" && window._insideData != null && typeof (window._insideData.page) != "undefined" && window._insideData.page != null && typeof (window._insideData.page.type) != "undefined" && window._insideData.page.type != null && window._insideData.page.type.length > 0) {
					temppagetype = window._insideData.page.type.toLowerCase();

					try {
						if (typeof (window._insideData.page.currencyCode) != "undefined" && window._insideData.page.currencyCode != null && window._insideData.page.currencyCode.length > 0) {
							_insideCurrency = window._insideData.page.currencyCode;
						}
					} catch (curex) { }
				}

				var temphome = _insideJQ("div.page-index");

				if (temppagetype == "home") {
					data.type = "homepage";
				}
				else if (temppagetype == "product list page") {
					data.type = "productcategory";
				}
				else if (temppagetype == "orderconfirmed" || temppagetype == "order confirmed" || temppagetype == "thank-you") {
					data.type = "orderconfirmed";
				}
				else if (temppagetype.indexOf("checkout") != -1 || temppagetype == "cart" || temppagetype == "shopping-bag") {
					data.type = "checkout";
				}
				else if (temppagetype == "search result" || temppagetype == "search") {
					data.type = "search";
				}
				else if (temphome.length > 0) {
					data.type = "homepage";
				}
				else if (temppagetype == "login") {
					data.type = "login";
				}
				else if (tempurl.indexOf("/register") != -1) {
					data.type = "login";
				}

				// try {
				// 	if (typeof (_insideData.order) != "undefined" && _insideData.order != null && typeof (_insideData.order.id) != "undefined" && _insideData.order.id != null) {
				// 		if (typeof _insideData.order.id === 'string' || _insideData.order.id instanceof String) {
				// 			if (_insideData.order.id.length > 0)
				// 				data.type = "orderconfirmed";
				// 		}
				// 	}
				// } catch (tempex) { }

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

						if (typeof (_insideData) != "undefined" && _insideData != null && typeof (_insideData.page) != "undefined" && _insideData.page != null && typeof (_insideData.page.countryCode) != "undefined"
							&& _insideData.page.countryCode != null && _insideData.page.countryCode.length > 0)
							data.name = _insideData.page.countryCode.toUpperCase() + " - " + data.name;
						else
							data.type = "productother";

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
			// Modify if necessary
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
				if (_insideData && _insideData.product && _insideData.product.name)
					return _insideData.product.name;
			} catch (tempex) { }

			try {
				var temptext = myTrim(_insideJQ(".page-products-id__info-item h3").text());

				if (temptext.length > 0) {
					return temptext;
				}
			} catch (tempex) { }

			return null;
		}

		function getProductImage() {
			try {
				if (_insideData && _insideData.product && _insideData.product.img)
					return _insideData.product.img;
			} catch (tempex) { }

			try {
				var temptext = _insideJQ(".page-products-id__pictures img").get(0).currentSrc;

				if (temptext.length > 0) {
					return temptext;
				}
			} catch (tempex) { }

			return null;
		}

		function getProductPrice() {
			try {
				if (_insideData && _insideData.product && _insideData.product.price)
					return parseFloat(_insideData.product.price.replace(/[^0-9\.\-\+]/g, ""));
			} catch (tempex) { }

			try {
				var temptext = myTrim(_insideJQ(".page-products-id__info-item .component-products-head-line__price").text());

				if (temptext.length > 0) {
					return parseFloat(temptext.replace(/[^0-9\.\-\+]/g, ""));
				}
			} catch (tempex) { }

			return null;
		}

		function getProductSku() {
			try {
				if (_insideData && _insideData.product && _insideData.product.sku)
					return _insideData.product.sku;
			} catch (tempex) { }

			try {
				var temptext = myTrim(_insideJQ(".page-products-id__info-item .page-products-id__code").text());
				// temptext = temptext.split("：")[1];

				temptext = temptext.substring(temptext.search(/\d/), temptext.length);

				if (temptext.length > 0) {
					return temptext;
				}
			} catch (tempex) { }

			return null;
		}

		function getCategory() {
			try {
				var breadcrumbs = _insideJQ(".component-bread-crumbs__item:not(.is-disabled)");

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

				if (_insideData && _insideData.cart && _insideData.cart.items && _insideData.cart.items.length > 0) {
					var tempitems = _insideData.cart.items;
					for (var i = 0; i < tempitems.length; i++) {
						var tempitem = tempitems[i];
						var insideitem = {};
						insideitem.action = "addItem";
						insideitem.orderId = orderId;
						insideitem.name = tempitem.name
						insideitem.img = tempitem.img;
						insideitem.sku = tempitem.sku;
						insideitem.qty = tempitem.qty;
						var tempprice = tempitem.price;
						insideitem.price = parseFloat(tempprice.replace(/[^0-9\.\-\+]/g, ""));

						try {
							if (tempitem.category) {
								insideitem.category = tempitem.category;
								if (insideitem.category.length > 149)
									insideitem.category = insideitem.category.substring(0, 149);
							}
						} catch (tempex) { }

						totalprice = totalprice + (insideitem.price * insideitem.qty);

						data.push(insideitem);
					}
				}

				if (data.length > 0) {

					try {
						var temptotal = _insideData.cart.total;
						temptotal = parseFloat(temptotal.replace(/[^0-9\.\-\+]/g, ""));
						if (isNumeric(temptotal)) {
							totalprice = temptotal;
						}
					} catch (totalex) { }

					data.push({
						"action": "trackOrder",
						"orderId": orderId,
						"orderTotal": totalprice
					});

					return data;
				}
			}
			catch (ex) {
				log("getOrderData error. ", ex);
			}

			// try {
			// 	var data = [];
			// 	var totalprice = 0;
			// 	var orderId = "auto";

			// 	var tempitems = _insideJQ(".component-cart-line-list:first .component-cart-line");
			// 	for (var i = 0; i < tempitems.length; i++) {
			// 		var tempitem = _insideJQ(tempitems[i]);
			// 		var insideitem = {};
			// 		insideitem.action = "addItem";
			// 		insideitem.orderId = orderId;
			// 		insideitem.name = myTrim(tempitem.find(".component-cart-line-core__name").text());
			// 		insideitem.img = tempitem.find("img.component-cart-line-core__image").get(0).currentSrc;
			// 		insideitem.sku = insideitem.name;
			// 		try {
			// 			var tempsku = insideitem.img.split("/")[insideitem.img.split("/").length - 1];
			// 			tempsku = tempsku.split("_")[0];
			// 			tempsku = myTrim(tempsku.split("-")[1]);
			// 			if (tempsku.length > 0) {
			// 				insideitem.sku = tempsku;
			// 			}
			// 		} catch (skuex) { }

			// 		var tempqty = tempitem.find(".component-cart-line-attribute-quantity__value").text();
			// 		insideitem.qty = parseFloat(tempqty.replace(/[^0-9\.\-\+]/g, ""));

			// 		var tempprice = tempitem.find(".component-cart-line-bottom__price").text();
			// 		insideitem.price = parseFloat(tempprice.replace(/[^0-9\.\-\+]/g, ""));

			// 		totalprice = totalprice + insideitem.price;
			// 		insideitem.price = insideitem.price / insideitem.qty;

			// 		data.push(insideitem);
			// 	}

			// 	if (data.length > 0) {

			// 		data.push({
			// 			"action": "trackOrder",
			// 			"orderId": orderId,
			// 			"orderTotal": totalprice
			// 		});

			// 		return data;
			// 	}
			// }
			// catch (ex) {
			// 	log("getOrderData error. ", ex);
			// }

			// try {
			// 	var data = [];
			// 	var totalprice = 0;
			// 	var orderId = "auto";

			// 	var tempitems = _insideJQ(".component-checkout-product-infor__product:first li");
			// 	for (var i = 0; i < tempitems.length; i++) {
			// 		var tempitem = _insideJQ(tempitems[i]);
			// 		var insideitem = {};
			// 		insideitem.action = "addItem";
			// 		insideitem.orderId = orderId;
			// 		insideitem.name = myTrim(tempitem.find(".component-checkout-product-infor__product-name").text());
			// 		insideitem.img = tempitem.find(".component-checkout-product-infor__product-img img").get(0).currentSrc;
			// 		insideitem.sku = insideitem.name;
			// 		try {
			// 			var tempsku = insideitem.img.split("/")[insideitem.img.split("/").length - 1];
			// 			tempsku = tempsku.split("_")[0];
			// 			tempsku = myTrim(tempsku.split("-")[1]);
			// 			if (tempsku.length > 0) {
			// 				insideitem.sku = tempsku;
			// 			}
			// 		} catch (skuex) { }

			// 		var tempqty = tempitem.find(".component-checkout-product-infor__product-text:last").text();
			// 		insideitem.qty = parseFloat(tempqty.replace(/[^0-9\.\-\+]/g, ""));

			// 		var tempprice = tempitem.find(".component-checkout-product-infor__product-price").text();
			// 		insideitem.price = parseFloat(tempprice.replace(/[^0-9\.\-\+]/g, ""));

			// 		totalprice = totalprice + insideitem.price;
			// 		insideitem.price = insideitem.price / insideitem.qty;

			// 		data.push(insideitem);
			// 	}

			// 	if (data.length > 0) {
			// 		try {
			// 			var temptotal = _insideJQ(".component-checkout-product-infor__price dt:last").text();
			// 			temptotal = parseFloat(temptotal.replace(/[^0-9\.\-\+]/g, ""));
			// 			if (isNumeric(temptotal)) {
			// 				totalprice = temptotal;
			// 			}
			// 		} catch (totalex) { }

			// 		data.push({
			// 			"action": "trackOrder",
			// 			"orderId": orderId,
			// 			"orderTotal": totalprice
			// 		});

			// 		return data;
			// 	}
			// }
			// catch (ex) {
			// 	log("getOrderData error. ", ex);
			// }

			return null;
		}

		function orderConfirmProcess() {
			// try {
			// 	var data = [];
			// 	var detail = null;

			// 	if (_insideData.order)
			// 		detail = _insideData.order;

			// 	if (detail != null) {
			// 		var totalprice = parseFloat(detail.total.replace(/[^0-9\.\-\+]/g, ""));
			// 		var orderID = detail.id;
			// 		var temppurchasedata = {};

			// 		if (typeof (detail.shipping) != "undefined" && detail.shipping != null) {
			// 			temppurchasedata.shipping = parseFloat(detail.shipping.replace(/[^0-9\.\-\+]/g, ""));
			// 		}
			// 		if (typeof (detail.tax) != "undefined" && detail.tax != null) {
			// 			temppurchasedata.tax = detail.tax;
			// 		}
			// 		if (_insideCurrency != null) {
			// 			temppurchasedata.currency = _insideCurrency;
			// 		}

			// 		// try {
			// 		// 	var temporderdata = getOrderData();
			// 		// 	if (temporderdata && temporderdata.length > 0)
			// 		// 		data = temporderdata;
			// 		// } catch (orderex) { }

			// 		if (typeof (orderID) != "undefined" && orderID != null && orderID.length > 0 && orderID != "auto") {
			// 			try {
			// 				var lastOrderID = sessionStorage.getItem("insidelastorderid");
			// 				if (lastOrderID == orderID) {
			// 					return null;
			// 				}
			// 			}
			// 			catch (orderidex) {
			// 			}

			// 			data.push({
			// 				"action": "trackOrder",
			// 				"orderId": "auto",
			// 				"newOrderId": orderID,
			// 				"orderTotal": totalprice,
			// 				"data": temppurchasedata,
			// 				"update": true,
			// 				"complete": true
			// 			});
			// 		}

			// 		return data;
			// 	}
			// }
			// catch (ex) {
			// 	log("orderConfirmProcess error. ", ex);
			// }

			return null;
		}

		function getVisitorId() {
			try {
				if (_insideData && _insideData.user && _insideData.user.id)
					return _insideData.user.id;
			}
			catch (visitidex) {
			}

			return null;
		}

		function getVisitorName() {
			try {
				if (_insideData && _insideData.user && _insideData.user.name)
					return _insideData.user.name;
			}
			catch (visitidex) {
			}

			return null;
		}

		function getVisitorData() {
			try {
				var tempdata = {};

				if (_insideData && _insideData.page && _insideData.page.countryCode)
					tempdata.nav_countryCode = _insideData.page.countryCode.toUpperCase();

				if (_insideData && _insideData.page && _insideData.page.languageCode)
					tempdata.nav_languageCode = _insideData.page.languageCode.toUpperCase();

				if (_insideData && _insideData.page && _insideData.page.step)
					tempdata.nav_stepName = _insideData.page.step;

				var tempuserid = getVisitorId();
				var tempusername = getVisitorName();
				if (tempuserid != null && tempuserid.length > 0 && tempusername != null && tempusername.length > 0) {
					tempdata.user_name = tempusername;
					if (typeof (_insideData.user.email) != "undefined" && _insideData.user.email != null && _insideData.user.email.indexOf("@") != -1)
						tempdata.user_email = _insideData.user.email;
				}

				return tempdata;
			}
			catch (visitidex) {
			}

			return null;
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

				var visitorId = getVisitorId();
				if (visitorId != null && visitorId.length > 0) {
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

				var view = getViewData();
				if (view != null) {
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
					}

					// Add currency code
					try {
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

					_inside.push(view);

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

			insertInsideTag();
			if (!_insideFirstLoad)
				_insideFirstLoad = true;
		}

		deferWait(sendToInside, function () {
			var insideloadbool = false;
			try {
				if (document.readyState != 'loading' && document.readyState != 'interactive') {
					_insideCount++;
				}
				insideloadbool = (typeof (_insideData) != "undefined" && _insideData != null && _insideData.page && _insideData.page.type);
			}
			catch (tempex) { }

			if (_insideCount > 10)
				insideloadbool = true;
			if (insideloadbool) {
				keepWait(sendToInside, function () {
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

						var tempurl = window.location.href.split("#")[0];
						if (tempurl != tempcururl) {
							tempcururl = tempurl;
							return true;
						}

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

			deferWait(function () {
				var websiteId = insideFrontInterface.chat.userid.split(':')[1];
				_insideGraph.loadJS(_insideCDN + 'custom/' + websiteId + '-customScript.js?v=' + _insideScriptVersion);
			}, function () {
				return typeof _insideGraph != 'undefined' && _insideGraph.loadJS && typeof insideFrontInterface != 'undefined' && insideFrontInterface.chat && insideFrontInterface.chat.userid;
			});
		}
	}

})();