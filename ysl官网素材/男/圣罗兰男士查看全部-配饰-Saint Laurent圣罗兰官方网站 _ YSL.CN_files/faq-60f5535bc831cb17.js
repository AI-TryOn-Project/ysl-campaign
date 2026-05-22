(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7746],{

/***/ 66598:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/faq",
      function () {
        return __webpack_require__(45522);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 38643:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: function() { return /* binding */ AccountLayout; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11527);
/* harmony import */ var _features_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40390);
/* harmony import */ var _features_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69148);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84875);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_default_layout_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30875);
/* harmony import */ var _layouts_default_layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layouts_default_layout_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_informative_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76527);
/* harmony import */ var _components_cart_reminder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68830);
/* harmony import */ var _features_cart_use_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65335);








const AccountLayout = (param)=>{
    let { children, childrenClassName, wrapperClassName, footerVisible = true, headerNoOverlap = false, headerClassName, headerRightListVisible = true, headerMenuVisible = true, informativeBannerNoOverlap = false, informativeBannerVisible = true } = param;
    const { cart } = (0,_features_cart_use_cart__WEBPACK_IMPORTED_MODULE_7__/* .useCart */ .j)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_layouts_default_layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper), wrapperClassName),
        children: [
            informativeBannerVisible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_informative_banner__WEBPACK_IMPORTED_MODULE_5__/* .InformativeBanner */ .q, {
                informativeBannerNoOverlap: informativeBannerNoOverlap
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_features_header__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h4, {
                headerNoOverlap: headerNoOverlap,
                headerClassName: headerClassName,
                rightListVisible: headerRightListVisible,
                menuVisible: headerMenuVisible
            }),
            !!(cart === null || cart === void 0 ? void 0 : cart.cartCount) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_cart_reminder__WEBPACK_IMPORTED_MODULE_6__/* .CartReminder */ .u, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_layouts_default_layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main), childrenClassName),
                children: children
            }),
            footerVisible && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_features_footer__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .$, {
                className: (_layouts_default_layout_module_scss__WEBPACK_IMPORTED_MODULE_4___default().accountFooter)
            })
        ]
    });
};


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

/***/ 45522:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ faq; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./pages/faq/index.module.scss
var index_module = __webpack_require__(25995);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/router.js
var next_router = __webpack_require__(69132);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./packages/loading/index.tsx + 1 modules
var loading = __webpack_require__(59830);
// EXTERNAL MODULE: ./pages/_error.tsx
var _error = __webpack_require__(69770);
// EXTERNAL MODULE: ./api/content.ts
var content = __webpack_require__(11915);
// EXTERNAL MODULE: ./features/faq/faq-most-popular.module.scss
var faq_most_popular_module = __webpack_require__(43054);
var faq_most_popular_module_default = /*#__PURE__*/__webpack_require__.n(faq_most_popular_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-collapse@5.1.1_react@18.2.0/node_modules/react-collapse/lib/index.js
var lib = __webpack_require__(51053);
// EXTERNAL MODULE: ./adapters/sensors/services/index.ts + 2 modules
var services = __webpack_require__(67893);
;// CONCATENATED MODULE: ./features/faq/faq-most-popular.tsx






const FaqMostPopular = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { mostPopular, isFaqActive, ids, handlerClick } = param;
    var _mostPopular_questions;
    const [currentIds, setCurrentIds] = (0,react.useState)(ids);
    const [activeTabIds, setActiveTabIds] = (0,react.useState)([]);
    const isContentGray = !isFaqActive || activeTabIds.length;
    (0,react.useEffect)(()=>{
        if (isFaqActive) {
            setCurrentIds([]);
            setActiveTabIds([]);
        }
    }, [
        isFaqActive
    ]);
    const trackFaqClick = (category, name)=>{
        services/* clickCustomerCareElement */.aM({
            l1Category: "popular questions",
            l2Category: category || "",
            type: "CTA",
            name: name || ""
        });
    };
    const itemClick = (item)=>()=>{
            const questionId = item.id;
            if (questionId) {
                const index = currentIds.findIndex((item)=>item === questionId);
                if (index > -1) {
                    currentIds.splice(index, 1);
                } else {
                    currentIds.push(questionId);
                }
                setCurrentIds([
                    ...currentIds
                ]);
                setActiveTabIds([
                    ...activeTabIds,
                    questionId
                ]);
                handlerClick && handlerClick({
                    faqIdsMostPopular: [
                        ...activeTabIds,
                        questionId
                    ],
                    tabName: "mostPopular"
                });
                trackFaqClick(item.title, item.title);
            }
        };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (faq_most_popular_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()((faq_most_popular_module_default()).title, isContentGray ? "" : (faq_most_popular_module_default()).contentGray),
                dangerouslySetInnerHTML: {
                    __html: mostPopular.title
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (faq_most_popular_module_default()).content,
                children: (_mostPopular_questions = mostPopular.questions) === null || _mostPopular_questions === void 0 ? void 0 : _mostPopular_questions.map((item)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classnames_default()((faq_most_popular_module_default()).question, isContentGray ? "" : (faq_most_popular_module_default()).contentGray),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (faq_most_popular_module_default()).questionTitle,
                                onClick: itemClick(item),
                                dangerouslySetInnerHTML: {
                                    __html: item.title
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(lib.Collapse, {
                                isOpened: currentIds.includes(item.id),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (faq_most_popular_module_default()).questionContent,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (faq_most_popular_module_default()).questionContentItemContent,
                                        dangerouslySetInnerHTML: {
                                            __html: item.content
                                        }
                                    })
                                })
                            })
                        ]
                    }, item.id);
                })
            })
        ]
    });
});
FaqMostPopular.displayName = "FaqMostPopular";
/* harmony default export */ var faq_most_popular = (FaqMostPopular);

// EXTERNAL MODULE: ./features/faq/faq-list.module.scss
var faq_list_module = __webpack_require__(97243);
var faq_list_module_default = /*#__PURE__*/__webpack_require__.n(faq_list_module);
;// CONCATENATED MODULE: ./assets/svg/arrow-down-faq.svg
var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var SvgArrowDownFaq = function SvgArrowDownFaq(_ref, ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    d: "M6 15L12 9L18 15",
    stroke: "black"
  })));
};
var ForwardRef = /*#__PURE__*/(0,react.forwardRef)(SvgArrowDownFaq);
/* harmony default export */ var arrow_down_faq = (ForwardRef);
// EXTERNAL MODULE: ./hooks/use-breakpoints.ts
var use_breakpoints = __webpack_require__(21525);
// EXTERNAL MODULE: ./adapters/sensors/index.tsx + 2 modules
var sensors = __webpack_require__(64068);
// EXTERNAL MODULE: ./utils/html-to-text.ts
var html_to_text = __webpack_require__(62286);
;// CONCATENATED MODULE: ./features/faq/faq-list.tsx











const FaqListTabMap = new Map([
    [
        "热门问题",
        "popular questions"
    ],
    [
        "订单",
        "orders"
    ],
    [
        "产品",
        "products"
    ],
    [
        "服务",
        "services"
    ],
    [
        "电话",
        "phone"
    ],
    [
        "邮件",
        "email"
    ],
    [
        "其他",
        "other"
    ]
]);
const FaqList = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { faq, handlerClick, ids, faqTabName } = param;
    const [currentIds, setCurrentIds] = (0,react.useState)(ids);
    const [childIds, setChildIds] = (0,react.useState)([]);
    const [tabName, setTabName] = (0,react.useState)(faqTabName);
    const { isMobile } = (0,use_breakpoints/* useBreakpoints */.k)();
    const router = (0,next_router.useRouter)();
    const { showProductSustainability } = (0,sensors/* useSensors */.D)();
    const updateChildIds = (questionId)=>{
        setChildIds(childIds.includes(questionId) ? childIds.filter((item)=>item !== questionId) : [
            ...childIds,
            questionId
        ]);
    };
    const itemChildren = function() {
        let idsList = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], questions = arguments.length > 1 ? arguments[1] : void 0, tabNameText = arguments.length > 2 ? arguments[2] : void 0;
        setTimeout(()=>{
            const currentArr = idsList.filter((item)=>!questions.some((question)=>{
                    return item === question.id;
                }));
            const _tabName = currentArr.length ? tabNameText : "";
            setCurrentIds(currentArr);
            setTabName(_tabName);
            handlerClick && handlerClick({
                falIds: currentArr,
                tabName: _tabName
            });
        }, 500);
    };
    const trackFaqClick = (tabCategory, category, name)=>{
        services/* clickCustomerCareElement */.aM({
            l1Category: FaqListTabMap.get(tabCategory) || "other",
            l2Category: category || "",
            type: "CTA",
            name: name || ""
        });
    };
    const itemClick = (param)=>{
        let { questionId, questions = [], tabNameText = "", questionTitle = "" } = param;
        return ()=>{
            if (questionId) {
                let ids = [
                    ...currentIds
                ];
                updateChildIds(questionId);
                if (currentIds.includes(questionId)) {
                    const index = ids.findIndex((item)=>item === questionId);
                    ids.splice(index, 1);
                    if (questions) {
                        itemChildren(ids, questions, tabNameText);
                    }
                } else {
                    if (questions.length) {
                        ids = [
                            questionId
                        ];
                    } else {
                        ids.push(questionId);
                    }
                }
                const _tabName = ids.length ? tabNameText : "";
                setCurrentIds(ids);
                setTabName(_tabName);
                handlerClick && handlerClick({
                    falIds: ids,
                    tabName: _tabName
                });
                (questionTitle === null || questionTitle === void 0 ? void 0 : questionTitle.includes("可持续发展")) && showProductSustainability();
                trackFaqClick(_tabName, questionTitle, questionTitle);
            }
        };
    };
    (0,react.useEffect)(()=>{
        setCurrentIds(ids);
        ids.length && setChildIds(ids);
    }, [
        ids
    ]);
    (0,react.useEffect)(()=>{
        var _router_query, _router_query1, _router_query2, /** 打开对应tab */ _router_query3, _router_query4;
        /** footer 配送和退货，点击link应跳转到faq并且锚点到配送和退货的tab位置 */ const element = document.querySelector(".contentItemHeader_" + ((_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.anchor));
        setTimeout(()=>{
            /** 在有informative-banner的情况下 小屏pc设备多点几次后 会有滚动位置不对的情况 因此延迟执行滚动 */ element === null || element === void 0 ? void 0 : element.scrollIntoView({
                block: "center",
                behavior: "smooth"
            });
        }, 50);
        const name = ((_router_query1 = router.query) === null || _router_query1 === void 0 ? void 0 : _router_query1.tabName) || "";
        const anchorId = [
            ((_router_query2 = router.query) === null || _router_query2 === void 0 ? void 0 : _router_query2.anchor) || ""
        ];
        ((_router_query3 = router.query) === null || _router_query3 === void 0 ? void 0 : _router_query3.anchor) && setCurrentIds(anchorId);
        name && setTabName(name);
        ((_router_query4 = router.query) === null || _router_query4 === void 0 ? void 0 : _router_query4.anchor) && (handlerClick === null || handlerClick === void 0 ? void 0 : handlerClick({
            falIds: anchorId,
            tabName: name
        }));
    }, [
        faq,
        handlerClick,
        router
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (faq_list_module_default()).wrapper,
        children: faq === null || faq === void 0 ? void 0 : faq.map((item, index)=>{
            var _item_list;
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (faq_list_module_default()).questions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classnames_default()((faq_list_module_default()).header, tabName && tabName !== item.title ? (faq_list_module_default()).contentGray : ""),
                        dangerouslySetInnerHTML: {
                            __html: item.title
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (faq_list_module_default()).content,
                        children: item === null || item === void 0 ? void 0 : (_item_list = item.list) === null || _item_list === void 0 ? void 0 : _item_list.map((itemChild)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classnames_default()((faq_list_module_default()).contentItemQuestion, currentIds.length && tabName && !currentIds.includes(itemChild.id) ? (faq_list_module_default()).contentGray : ""),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classnames_default()((faq_list_module_default()).contentItemHeader, "contentItemHeader_" + itemChild.id),
                                        onClick: itemClick({
                                            questionId: itemChild.id,
                                            questions: itemChild.questions,
                                            tabNameText: item.title,
                                            questionTitle: (0,html_to_text/* HtmlToText */.G)(itemChild.title)
                                        }),
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: (faq_list_module_default()).contentItemHeaderName,
                                                dangerouslySetInnerHTML: {
                                                    __html: itemChild.title
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down_faq, {
                                                style: currentIds.includes(itemChild.id) ? {
                                                    transform: "rotate(0deg)"
                                                } : {
                                                    transform: "rotate(180deg)"
                                                },
                                                className: (faq_list_module_default()).contentItemHeaderIcon
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(lib.Collapse, {
                                        className: (faq_list_module_default()).contentItemBox,
                                        isOpened: currentIds.includes(itemChild.id),
                                        theme: {
                                            collapse: "id_".concat(itemChild.id, "_  ReactCollapse--collapse ")
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: (faq_list_module_default()).contentItemBoxInner,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: (faq_list_module_default()).contentItemBoxWrapper,
                                                children: itemChild.questions.map((question)=>{
                                                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: (faq_list_module_default()).contentItemBoxQuestion,
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: (faq_list_module_default()).contentItemBoxQuestionTitle,
                                                                onClick: itemClick({
                                                                    questionId: question.id,
                                                                    tabNameText: item.title,
                                                                    questionTitle: (0,html_to_text/* HtmlToText */.G)(question.title)
                                                                }),
                                                                dangerouslySetInnerHTML: {
                                                                    __html: question.title
                                                                }
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(lib.Collapse, {
                                                                className: (faq_list_module_default()).contentItemBoxQuestionWrapper,
                                                                isOpened: childIds.includes(question.id),
                                                                onRest: (args)=>{
                                                                    if (isMobile) {
                                                                        const dom = document.querySelector(".id_".concat(itemChild.id, "_"));
                                                                        if (dom && args.isOpened) {
                                                                            dom.style.height = dom.clientHeight + "px";
                                                                        }
                                                                    }
                                                                },
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    className: (faq_list_module_default()).contentItemBoxQuestionWrapperContent,
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                        className: (faq_list_module_default()).contentItemBoxQuestionWrapperContentText,
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: question.content
                                                                        }
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }, question.id);
                                                })
                                            })
                                        })
                                    })
                                ]
                            }, itemChild.id);
                        })
                    })
                ]
            }, index);
        })
    });
});
FaqList.displayName = "FaqList";
/* harmony default export */ var faq_list = (FaqList);

// EXTERNAL MODULE: ./layouts/account-layout.tsx
var account_layout = __webpack_require__(38643);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/head.js
var head = __webpack_require__(31852);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
;// CONCATENATED MODULE: ./pages/faq/index.tsx











/**
 * 根据给定的FAQ数据生成一个数据树。
 *
 * @param {FaqData} data - 用于生成数据树的FAQ数据。
 * @return {{[key: string]: { children: string[]; parentId: string }}} - 生成的数据树。
 */ const getDataTree = (data)=>{
    var _data_mostPopular;
    const tree = {};
    if ((_data_mostPopular = data.mostPopular) === null || _data_mostPopular === void 0 ? void 0 : _data_mostPopular.questions) {
        for (const question of data.mostPopular.questions){
            tree[question.id] = {
                type: "mostPopular",
                parentId: "",
                children: [],
                tabName: question.title
            };
        }
    }
    for (const item of data.faq){
        for (const itemChild of item.list){
            tree[itemChild.id] = {
                type: "faq",
                tabName: item.title,
                parentId: itemChild.id,
                children: itemChild.questions.map((question)=>question.id)
            };
            for (const question of itemChild.questions){
                tree[question.id] = {
                    type: "faq",
                    parentId: itemChild.id,
                    children: [],
                    tabName: item.title
                };
            }
        }
    }
    return tree;
};
const Faq = ()=>{
    var _router_query;
    const router = (0,next_router.useRouter)();
    const [mostPopular, setMostPopular] = (0,react.useState)(null);
    const [pageInfo, setPageInfo] = (0,react.useState)(null);
    const [faq, setFaq] = (0,react.useState)(null);
    const [faqIds, setFaqIds] = (0,react.useState)([]) // ids: string[
    ;
    const [faqTabName, setFaqTabName] = (0,react.useState)("") // ids: string[
    ;
    const [ids, setIds] = (0,react.useState)([]) // ids: string[
    ;
    const { startLoading, finishLoading } = (0,loading/* useLoading */.r$)();
    const [isServerError, setIsServerError] = (0,react.useState)(false);
    /**
   * 初始化FAQ类别。
   *
   * @param {FaqData} content - FAQ 数据。
   */ const initFaqCategory = (0,react.useCallback)((content)=>{
        var _router_query;
        const faqCategory = (_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.faqCategory;
        if (!faqCategory) return;
        const tree = getDataTree(content);
        const dom = tree[faqCategory];
        if (!dom) {
            return;
        }
        const idsList = [
            ...new Set(dom.parentId ? [
                dom.parentId,
                faqCategory
            ] : [
                faqCategory
            ])
        ];
        setFaqIds(dom.type === "mostPopular" ? [] : idsList);
        setFaqTabName(dom.type === "mostPopular" ? "" : dom.tabName || "");
        setIds(idsList);
    }, [
        (_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.faqCategory
    ]);
    const getFaqList = (0,react.useCallback)(async ()=>{
        startLoading();
        try {
            var _res_data;
            const { data: res } = await content/* contentApi */.s.getFaqList();
            if ((res === null || res === void 0 ? void 0 : res.status) && (res === null || res === void 0 ? void 0 : res.data) && (res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.content)) {
                const content = res.data.content;
                setPageInfo({
                    title: content.title,
                    desc: content.desc
                });
                setFaq(content.faq);
                setMostPopular(content.mostPopular);
                setIsServerError(false);
                initFaqCategory(content);
            } else {
                setIsServerError(true);
            }
        } catch (error) {
            setIsServerError(true);
            console.log("[faq][getFaqList][error]", error);
        } finally{
            finishLoading();
        }
    }, [
        finishLoading,
        initFaqCategory,
        startLoading
    ]);
    (0,react.useEffect)(()=>{
        if (!router.isReady) return;
        getFaqList();
    }, [
        getFaqList,
        router
    ]);
    const updateFaqLink = (idsList)=>{
        if (idsList.length > 0) {
            window.history.pushState({}, "", "/faq?faqCategory=".concat(idsList[idsList.length - 1]));
        }
    };
    const handlerClick = (0,react.useCallback)((param)=>{
        let { falIds = [], tabName = "" } = param;
        setIds(falIds);
        setFaqTabName(tabName);
        updateFaqLink(falIds);
    }, []);
    const handlerClickMostPopular = (0,react.useCallback)((param)=>{
        let { faqIdsMostPopular = [] } = param;
        setFaqTabName("");
        setFaqIds([]);
        updateFaqLink(faqIdsMostPopular);
    }, []);
    if (isServerError) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(_error["default"], {
            statusCode: 500
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(account_layout/* AccountLayout */.p, {
        headerNoOverlap: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                    children: "常见问题-SAINT LAURENT圣罗兰官方网站 | YSL.CN"
                }, "title")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (index_module_default()).wrapper,
                children: [
                    !!(pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.title) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).header,
                        children: pageInfo.title
                    }),
                    !!(pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.desc) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).desc,
                        dangerouslySetInnerHTML: {
                            __html: pageInfo.desc
                        }
                    }),
                    !!mostPopular && /*#__PURE__*/ (0,jsx_runtime.jsx)(faq_most_popular, {
                        isFaqActive: !!faqTabName,
                        mostPopular: mostPopular,
                        ids: ids,
                        handlerClick: handlerClickMostPopular
                    }),
                    !!faq && /*#__PURE__*/ (0,jsx_runtime.jsx)(faq_list, {
                        faq: faq,
                        faqTabName: faqTabName,
                        ids: faqIds,
                        handlerClick: handlerClick
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var faq = (Faq);


/***/ }),

/***/ 97243:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"faq-list_textFontWeight__ZeFVH","wrapper":"faq-list_wrapper__68wFG","header":"faq-list_header__G_Ue8","contentItemQuestion":"faq-list_contentItemQuestion__mMWdn","contentItemHeader":"faq-list_contentItemHeader__qUPzB","contentItemHeaderName":"faq-list_contentItemHeaderName__PqE0W","contentItemHeaderIcon":"faq-list_contentItemHeaderIcon__UFDmb","contentItemBoxWrapper":"faq-list_contentItemBoxWrapper__zUMgx","contentItemBoxQuestionWrapperContentText":"faq-list_contentItemBoxQuestionWrapperContentText__eQz8X","contentItemBoxQuestionTitle":"faq-list_contentItemBoxQuestionTitle__9e2TH","contentGray":"faq-list_contentGray__lBXq2","button-hover":"faq-list_button-hover__qb_vu"};

/***/ }),

/***/ 43054:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"faq-most-popular_textFontWeight__7DG3k","wrapper":"faq-most-popular_wrapper__iVO_R","title":"faq-most-popular_title__WEgnx","content":"faq-most-popular_content__oSI68","questionTitle":"faq-most-popular_questionTitle__AhtpG","questionContentItemContent":"faq-most-popular_questionContentItemContent__Jw1Wn","contentGray":"faq-most-popular_contentGray__ltWr6","button-hover":"faq-most-popular_button-hover___wASj"};

/***/ }),

/***/ 25995:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"faq_textFontWeight__jQu6V","wrapper":"faq_wrapper__82F4m","header":"faq_header__DJwxi","desc":"faq_desc__5ovdG","button-hover":"faq_button-hover__EubxQ"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [2888,9774,179], function() { return __webpack_exec__(66598); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);