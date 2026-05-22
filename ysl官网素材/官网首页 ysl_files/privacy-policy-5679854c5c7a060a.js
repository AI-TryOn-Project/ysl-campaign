(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9396],{

/***/ 63706:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/privacy-policy",
      function () {
        return __webpack_require__(6630);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 98573:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FIXED_LEGAL_TYPES */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11527);
/* harmony import */ var _layouts_default_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65353);
/* harmony import */ var _kering_technologies_eagle_china_package_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65943);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60806);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95604);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69132);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84875);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50959);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88131);
/* harmony import */ var _features_seo_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60472);










const FIXED_LEGAL_TYPES = [
    "terms-and-use",
    "terms-and-sale",
    "refund-policy",
    "privacy-policy",
    "cookie-policy"
];
const Legal = (param)=>{
    let { title, metaKeywords } = param;
    var _data_data, _data_data1, _config_data_content, _config_data;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { data } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)("/rest/default/V1/config/policyAndTermsWithBlock", _kering_technologies_eagle_china_package_api__WEBPACK_IMPORTED_MODULE_2__/* .api */ .hi.config.getPolicyAndTermsWithBlockConfig, {
        onError (err) {
            console.error("[Legal][getPolicyAndTermsWithBlockConfig]", err);
        }
    });
    const { config, routes } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(()=>{
        var _data_data, _data_data1, _router_asPath_match, _Reflect_ownKeys;
        if (!(data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.status) || !(data === null || data === void 0 ? void 0 : (_data_data1 = data.data) === null || _data_data1 === void 0 ? void 0 : _data_data1.data)) return {};
        const { list } = data.data.data;
        const regex = /^(\/[^?#]+)/;
        const path = (_router_asPath_match = router.asPath.match(regex)) === null || _router_asPath_match === void 0 ? void 0 : _router_asPath_match[1].replace("/legal", "").slice(1);
        return {
            config: path ? list[path] : list["privacy-policy"],
            routes: (_Reflect_ownKeys = Reflect.ownKeys(list)) === null || _Reflect_ownKeys === void 0 ? void 0 : _Reflect_ownKeys.map((item)=>{
                var _list_item_data_content, _list_item_data;
                return {
                    label: (_list_item_data = list[item].data) === null || _list_item_data === void 0 ? void 0 : (_list_item_data_content = _list_item_data.content) === null || _list_item_data_content === void 0 ? void 0 : _list_item_data_content.title,
                    url: "".concat(FIXED_LEGAL_TYPES.includes(item) ? "" : "/legal", "/").concat(item)
                };
            })
        };
    }, [
        data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.data,
        data === null || data === void 0 ? void 0 : (_data_data1 = data.data) === null || _data_data1 === void 0 ? void 0 : _data_data1.status,
        router.asPath
    ]);
    const handleHtmlClick = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)((e)=>{
        const target = e.target;
        if (typeof target.className === "string" && target.className.includes("block-custom-expand-collapse-event-title")) {
            const blockDOM = target.parentNode;
            if (blockDOM && blockDOM.className === "block-custom-expand-collapse-event") {
                const contentDOM = blockDOM.querySelector(".block-custom-expand-collapse-event-content");
                if (contentDOM) {
                    const displayType = contentDOM.style.display;
                    if (displayType !== "none") {
                        contentDOM.style.display = "none";
                        target.classList.remove("is-active");
                    } else {
                        contentDOM.style.display = "block";
                        target.classList.add("is-active");
                    }
                }
            }
        }
    }, []);
    var _config_data_content_html;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_default_layout__WEBPACK_IMPORTED_MODULE_1__/* .DefaultLayout */ .H, {
        childrenClassName: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().layout),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_features_seo_head__WEBPACK_IMPORTED_MODULE_9__/* .SEOHead */ .R, {
                title: title,
                metaKeywords: metaKeywords
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                children: "法律声明"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().routes),
                        children: routes === null || routes === void 0 ? void 0 : routes.map((route)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: route.url,
                                className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().route), {
                                    [(_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active)]: router.pathname === route.url
                                }),
                                children: route.label
                            }, route.url))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: (_config_data_content_html = config === null || config === void 0 ? void 0 : (_config_data = config.data) === null || _config_data === void 0 ? void 0 : (_config_data_content = _config_data.content) === null || _config_data_content === void 0 ? void 0 : _config_data_content.html) !== null && _config_data_content_html !== void 0 ? _config_data_content_html : ""
                        },
                        onClick: handleHtmlClick
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ __webpack_exports__.Z = (Legal);


/***/ }),

/***/ 6630:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11527);
/* harmony import */ var _components_legal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98573);


const PrivacyPolicy = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_legal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "隐私政策-SAINT LAURENT圣罗兰官方网站 | YSL.CN",
        metaKeywords: "隐私政策,SAINT LAURENT,圣罗兰,ysl"
    });
};
/* harmony default export */ __webpack_exports__["default"] = (PrivacyPolicy);


/***/ }),

/***/ 95604:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"legal_textFontWeight__y9Dq8","layout":"legal_layout__YPHC_","title":"legal_title__x0l1M","content":"legal_content__e4Vyn","routes":"legal_routes__WePTV","route":"legal_route__xoxe5","active":"legal_active__HTWq_","button-hover":"legal_button-hover__l4EIg"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [2888,9774,179], function() { return __webpack_exec__(63706); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);