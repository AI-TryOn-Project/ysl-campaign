(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5818],{

/***/ 69963:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/customer-care",
      function () {
        return __webpack_require__(51177);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 69770:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11527);
/* harmony import */ var _pages_500__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65747);
/* harmony import */ var _pages_404__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7108);



const Error = (param)=>{
    let { statusCode } = param;
    if (statusCode === 404) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_404__WEBPACK_IMPORTED_MODULE_2__["default"], {});
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_500__WEBPACK_IMPORTED_MODULE_1__["default"], {});
};
Error.getInitialProps = (param)=>{
    let { res, err } = param;
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
};
/* harmony default export */ __webpack_exports__["default"] = (Error);


/***/ }),

/***/ 51177:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __N_SSP: function() { return /* binding */ __N_SSP; },
  "default": function() { return /* binding */ customer_care; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./layouts/default-layout.tsx + 2 modules
var default_layout = __webpack_require__(65353);
// EXTERNAL MODULE: ./features/customer-care/customer-care-header.module.scss
var customer_care_header_module = __webpack_require__(46749);
var customer_care_header_module_default = /*#__PURE__*/__webpack_require__.n(customer_care_header_module);
;// CONCATENATED MODULE: ./features/customer-care/customer-care-header.tsx


const CustomerCareHeader = (param)=>{
    let { customerCareConfig } = param;
    var _customerCareConfig_header, _customerCareConfig_header1, _customerCareConfig_header2, _customerCareConfig_header3;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (customer_care_header_module_default()).customerCare,
        children: [
            !!(customerCareConfig === null || customerCareConfig === void 0 ? void 0 : (_customerCareConfig_header = customerCareConfig.header) === null || _customerCareConfig_header === void 0 ? void 0 : _customerCareConfig_header.title) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (customer_care_header_module_default()).title,
                dangerouslySetInnerHTML: {
                    __html: customerCareConfig === null || customerCareConfig === void 0 ? void 0 : (_customerCareConfig_header1 = customerCareConfig.header) === null || _customerCareConfig_header1 === void 0 ? void 0 : _customerCareConfig_header1.title
                }
            }),
            !!(customerCareConfig === null || customerCareConfig === void 0 ? void 0 : (_customerCareConfig_header2 = customerCareConfig.header) === null || _customerCareConfig_header2 === void 0 ? void 0 : _customerCareConfig_header2.description) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (customer_care_header_module_default()).description,
                dangerouslySetInnerHTML: {
                    __html: customerCareConfig === null || customerCareConfig === void 0 ? void 0 : (_customerCareConfig_header3 = customerCareConfig.header) === null || _customerCareConfig_header3 === void 0 ? void 0 : _customerCareConfig_header3.description
                }
            })
        ]
    });
};


// EXTERNAL MODULE: ./components/controls/button.tsx
var controls_button = __webpack_require__(78001);
// EXTERNAL MODULE: ./features/customer-care/customer-care-content.module.scss
var customer_care_content_module = __webpack_require__(3440);
var customer_care_content_module_default = /*#__PURE__*/__webpack_require__.n(customer_care_content_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./contexts/store-locator-dialog.tsx + 1 modules
var store_locator_dialog = __webpack_require__(25785);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-inside@1.0.2_next@14.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@kering-technologies/ec_china-package-inside/dist/index.js
var dist = __webpack_require__(41437);
// EXTERNAL MODULE: ./adapters/sensors/index.tsx + 2 modules
var sensors = __webpack_require__(64068);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./adapters/sensors/services/index.ts + 2 modules
var services = __webpack_require__(67893);
;// CONCATENATED MODULE: ./features/customer-care/customer-care-content.tsx









/**
 * 根据实时聊天客服的状态返回当前的文案
 * @param {object} config 实时聊天客服的配置
 * @param {boolean} isInsideChatAvailable 客服是否在线
 * @returns liveChatText-当前时间段应该显示的文案,  isInWorkingHour-是否在工作时间
 */ const getLiveChatText = (config, isInsideChatAvailable)=>{
    let isInWorkingHour = false;
    const hour = new Date().getHours();
    isInWorkingHour = hour >= Number(config === null || config === void 0 ? void 0 : config.beginWorkTime) && hour < Number(config === null || config === void 0 ? void 0 : config.getOffWorkTime);
    if (!config) {
        return {
            liveChatText: "",
            isInWorkingHour
        };
    }
    if (!isInWorkingHour) {
        return {
            liveChatText: config.offlineText,
            isInWorkingHour
        };
    }
    if (!isInsideChatAvailable) {
        return {
            liveChatText: config.busyText,
            isInWorkingHour
        };
    }
    return {
        liveChatText: config.onlineText,
        isInWorkingHour
    };
};
const CustomerCareContent = (param)=>{
    let { cardList } = param;
    const { isStoreLocatorDialogVisible, setIsStoreLocatorDialogVisible } = (0,store_locator_dialog/* useStoreLocatorDialog */.c)();
    const { openInsideChatPane, isInsideChatAvailable } = (0,dist/* useInside */.w)();
    const { contactRequest } = (0,sensors/* useSensors */.D)();
    const trackFaqClick = (tabCategory, category, name)=>{
        services/* clickCustomerCareElement */.aM({
            l1Category: tabCategory,
            l2Category: category || "",
            type: "CTA",
            name: name || ""
        });
    };
    const contactRequestFunc = (0,react.useCallback)((contactType)=>{
        contactRequest({
            contact_type: contactType,
            site_location: "customer care"
        });
    }, [
        contactRequest
    ]);
    const handleLinkClick = (item)=>{
        if (item.link && item.link.includes("/contact-us")) {
            contactRequestFunc("email");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (customer_care_content_module_default()).wrapper,
        children: cardList.map((item, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (customer_care_content_module_default()).content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (customer_care_content_module_default()).title,
                        children: item.title
                    }),
                    (item === null || item === void 0 ? void 0 : item.description) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (customer_care_content_module_default()).description,
                        dangerouslySetInnerHTML: {
                            __html: item === null || item === void 0 ? void 0 : item.description
                        }
                    }),
                    item.type === "contact" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* Button */.z, {
                        phone: item.phone,
                        type: "phone",
                        className: classnames_default()((customer_care_content_module_default()).override, (customer_care_content_module_default()).phone),
                        onClick: ()=>{
                            contactRequestFunc("phone call");
                            trackFaqClick("phone", item.callNow, item.callNow);
                        },
                        children: item.callNow
                    }) : null,
                    item.type === "liveChat" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* Button */.z, {
                        className: classnames_default()((customer_care_content_module_default()).override, (customer_care_content_module_default()).button),
                        cursorDefault: !isInsideChatAvailable || !getLiveChatText(item, isInsideChatAvailable).isInWorkingHour,
                        onClick: ()=>{
                            const liveChatText = getLiveChatText(item, isInsideChatAvailable).liveChatText;
                            contactRequestFunc("chat");
                            openInsideChatPane();
                            trackFaqClick("other", liveChatText, liveChatText);
                        },
                        children: getLiveChatText(item, isInsideChatAvailable).liveChatText
                    }) : null,
                    item.type === "bookAppointment" && item.text ? /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* Button */.z, {
                        className: classnames_default()((customer_care_content_module_default()).override, (customer_care_content_module_default()).button),
                        onClick: ()=>{
                            !isStoreLocatorDialogVisible && setIsStoreLocatorDialogVisible(true);
                            trackFaqClick("other", item.text, item.text);
                        },
                        children: item.text
                    }) : null,
                    (item === null || item === void 0 ? void 0 : item.type) && ![
                        "bookAppointment",
                        "liveChat",
                        "contact"
                    ].includes(item === null || item === void 0 ? void 0 : item.type) && item.text ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (customer_care_content_module_default()).link,
                        onClick: ()=>{
                            handleLinkClick(item);
                            trackFaqClick("other", item.text, item.text);
                        },
                        children: [
                            !!(item === null || item === void 0 ? void 0 : item.link) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (customer_care_content_module_default()).linkTag,
                                dangerouslySetInnerHTML: {
                                    __html: item.link
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* Button */.z, {
                                className: classnames_default()((customer_care_content_module_default()).override, (customer_care_content_module_default()).button),
                                children: item.text
                            })
                        ]
                    }) : null
                ]
            }, index);
        })
    });
};


// EXTERNAL MODULE: ./pages/_error.tsx
var _error = __webpack_require__(69770);
// EXTERNAL MODULE: ./api/content.ts
var content = __webpack_require__(11915);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/router.js
var next_router = __webpack_require__(69132);
// EXTERNAL MODULE: ./features/seo-head.tsx
var seo_head = __webpack_require__(60472);
;// CONCATENATED MODULE: ./pages/customer-care/index.tsx









const CustomerCare = (param)=>{
    let { customerCareConfig } = param;
    const router = (0,next_router.useRouter)();
    const [cardList, setCardList] = (0,react.useState)(null);
    const [isServerErrorStatus, setIsServerError] = (0,react.useState)(null);
    const getCustomContactUs = async ()=>{
        try {
            const { data } = await content/* contentApi */.s.getCustomContactUs();
            if ((data === null || data === void 0 ? void 0 : data.status) && data.data) {
                setCardList(data.data);
            }
        } catch (e) {
            setIsServerError(500);
        }
    };
    (0,react.useEffect)(()=>{
        if (!router.isReady) {
            return;
        }
        getCustomContactUs();
    }, [
        router.isReady
    ]);
    if (isServerErrorStatus) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(_error["default"], {
            statusCode: isServerErrorStatus
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(default_layout/* DefaultLayout */.H, {
        headerNoOverlap: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(seo_head/* SEOHead */.R, {
                title: "客户服务-SAINT LAURENT圣罗兰官方网站 | YSL.CN",
                metaKeywords: "客户服务,SAINT LAURENT,圣罗兰,ysl"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomerCareHeader, {
                customerCareConfig: customerCareConfig
            }),
            !!cardList && !!cardList.length && /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomerCareContent, {
                cardList: cardList
            })
        ]
    });
};
var __N_SSP = true;
/* harmony default export */ var customer_care = (CustomerCare);


/***/ }),

/***/ 3440:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"customer-care-content_textFontWeight__DyMv5","wrapper":"customer-care-content_wrapper__3Xz_4","content":"customer-care-content_content__Hi2W7","title":"customer-care-content_title__11wIe","description":"customer-care-content_description__XiKFA","override":"customer-care-content_override__tVUDd","button":"customer-care-content_button__sPzcd","phone":"customer-care-content_phone__sTNvL","link":"customer-care-content_link__qwgc2","linkTag":"customer-care-content_linkTag__tqZIS","button-hover":"customer-care-content_button-hover__V1cOW"};

/***/ }),

/***/ 46749:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"customer-care-header_textFontWeight__rMtgw","customerCare":"customer-care-header_customerCare__GCSFa","title":"customer-care-header_title__4RQ5n","description":"customer-care-header_description__6LQfi","button-hover":"customer-care-header_button-hover__Y6NMi"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [2888,9774,179], function() { return __webpack_exec__(69963); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);