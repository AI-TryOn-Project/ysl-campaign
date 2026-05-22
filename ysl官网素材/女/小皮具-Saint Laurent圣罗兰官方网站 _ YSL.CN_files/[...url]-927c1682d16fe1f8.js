(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8793],{

/***/ 61868:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);
var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var SvgBookMarkFull = function SvgBookMarkFull(_ref, ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13.5049 6.85C14.2073 6.15 15.1103 5.75 16.0133 5.75C16.9164 5.75 17.8194 6.15 18.5217 6.85C19.8261 8.25 19.8261 10.55 18.5217 11.95L12.0001 18.25L5.47827 11.95C4.17391 10.55 4.17391 8.25 5.47827 6.85C6.18063 6.15 7.08365 5.75 7.98667 5.75C8.8897 5.75 9.79272 6.15 10.4951 6.85L12.0001 8.35L13.5049 6.85Z",
    fill: "black"
  })));
};
var ForwardRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(SvgBookMarkFull);
/* harmony default export */ __webpack_exports__.Z = (ForwardRef);

/***/ }),

/***/ 80885:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/products/[...url]",
      function () {
        return __webpack_require__(40718);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 79588:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ StoreListItem; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11527);
/* harmony import */ var _features_product_find_in_store_store_list_item_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17526);
/* harmony import */ var _features_product_find_in_store_store_list_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_features_product_find_in_store_store_list_item_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_controls_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78001);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84875);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50959);
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48188);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69132);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_rendered_node__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25351);
/* harmony import */ var _adapters_gtm_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3054);
/* harmony import */ var _adapters_sensors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64068);










const StoreListItem = (param)=>{
    let { handleStoreItem, handleClickAppointment, store, style, storeListItemClassName, storeIndex, inStorePersonalization = false } = param;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { viewStoreDetails } = (0,_adapters_gtm_adapter__WEBPACK_IMPORTED_MODULE_7__/* .useGtm */ .u)();
    const { viewStoreDetails: sensorsViewStoreDetails } = (0,_adapters_sensors__WEBPACK_IMPORTED_MODULE_8__/* .useSensors */ .D)();
    const handleClickDetail = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        try {
            // GTM埋点：查看商店详细信息
            viewStoreDetails({
                boutiqueId: store === null || store === void 0 ? void 0 : store.code
            });
            sensorsViewStoreDetails({
                boutique_id: String(store === null || store === void 0 ? void 0 : store.code) || ""
            });
        } catch (e) {
            console.error("[GTM][viewStoreDetails]", e);
        }
        router.push("/stores/" + store.url);
    }, [
        router,
        sensorsViewStoreDetails,
        store === null || store === void 0 ? void 0 : store.code,
        store.url,
        viewStoreDetails
    ]);
    const handleButonClick = (e)=>{
        handleClickAppointment === null || handleClickAppointment === void 0 ? void 0 : handleClickAppointment(store);
        e.stopPropagation();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "store" + store.id,
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_features_product_find_in_store_store_list_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default().storeList), storeListItemClassName, "storeList"),
        onClick: ()=>handleStoreItem === null || handleStoreItem === void 0 ? void 0 : handleStoreItem(store),
        style: {
            ...style
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_features_product_find_in_store_store_list_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default().storeInfo),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: (_features_product_find_in_store_store_list_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default().name),
                        children: (0,_utils_zero_fill__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(storeIndex + 1) + "." + store.name
                    }, store.name),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        children: store.address
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rendered_node__WEBPACK_IMPORTED_MODULE_6__/* .RenderedNode */ .r, {
                        vIf: !inStorePersonalization,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    children: store.businessToday && store.businessToday.openFrom && store.businessToday.openTo ? "营业时间：" + store.businessToday.openFrom + " - " + store.businessToday.openTo : "今日闭店"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", {
                                    href: "tel:".concat(store.phone),
                                    children: store.phone
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (_features_product_find_in_store_store_list_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default().details),
                onClick: handleClickDetail,
                children: inStorePersonalization ? "更多详情" : "查看详情"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_rendered_node__WEBPACK_IMPORTED_MODULE_6__/* .RenderedNode */ .r, {
                vIf: !inStorePersonalization && (store === null || store === void 0 ? void 0 : store.isClickReserve),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_controls_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_features_product_find_in_store_store_list_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default().button), "appointmentButton"),
                    onClick: handleButonClick,
                    children: "店铺预留"
                })
            })
        ]
    });
};


/***/ }),

/***/ 26749:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  X: function() { return /* binding */ SizeGuideDialog; },
  Z: function() { return /* binding */ size_guide_dialog; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./components/dialogs/dialog.tsx + 2 modules
var dialog = __webpack_require__(95625);
;// CONCATENATED MODULE: ./features/product/utils/size-guide.ts
var SizeGuideGridType;
(function(SizeGuideGridType) {
    SizeGuideGridType["Measurement"] = "Measurement";
    SizeGuideGridType["Category"] = "Category";
})(SizeGuideGridType || (SizeGuideGridType = {}));

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-utils@1.16.0_events@3.3.0/node_modules/@kering-technologies/ec_china-package-utils/dist/index.esm.js
var index_esm = __webpack_require__(80811);
// EXTERNAL MODULE: ./features/product/size-guide-dialog/index.module.scss
var index_module = __webpack_require__(62267);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./components/create-portal.tsx
var create_portal = __webpack_require__(77470);
// EXTERNAL MODULE: ./components/controls/radio.tsx
var controls_radio = __webpack_require__(66758);
// EXTERNAL MODULE: ./components/fields/form-field-select.tsx
var form_field_select = __webpack_require__(8526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+eagle_china-package-api@2.332.0/node_modules/@kering-technologies/eagle_china-package-api/dist/index.mjs
var dist = __webpack_require__(65943);
// EXTERNAL MODULE: ./components/rendered-node.tsx
var rendered_node = __webpack_require__(25351);
;// CONCATENATED MODULE: ./features/product/size-guide-dialog/index.tsx












// 尺寸指南表（Measurement）
const TableMeasurement = (param)=>{
    let { tableData } = param;
    var _tableData_data_find_countries, _tableData_data_find;
    // 当前展示的尺码类型
    const [sizeType, setSizeType] = (0,react.useState)(tableData.data[0].unit);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (index_module_default()).guideTitle,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: tableData.title
                    }),
                    tableData.radioButton && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).radioGroup,
                        children: tableData.data.map((value)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (index_module_default()).radio,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_radio/* Radio */.Y, {
                                    checked: value.unit === sizeType,
                                    onChange: ()=>{
                                        setSizeType(value.unit);
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: value.unitCN
                                    })
                                })
                            }, value.unit))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (index_module_default()).tableWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("table", {
                    className: (index_module_default()).table,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                        children: (_tableData_data_find = tableData.data.find((item)=>item.unit === sizeType)) === null || _tableData_data_find === void 0 ? void 0 : (_tableData_data_find_countries = _tableData_data_find.countries) === null || _tableData_data_find_countries === void 0 ? void 0 : _tableData_data_find_countries.map((countries, sizeGuideItemIndex)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                className: (index_module_default()).tr,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                        className: classnames_default()((index_module_default()).td, (index_module_default()).rowTitle),
                                        children: countries.title
                                    }),
                                    (0,index_esm/* arrayOrEmpty */.sq)(countries.rows).map((value, valueIndex)=>{
                                        return /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            className: classnames_default()((index_module_default()).td, (index_module_default()).item),
                                            children: value
                                        }, valueIndex);
                                    })
                                ]
                            }, sizeGuideItemIndex);
                        })
                    })
                })
            })
        ]
    });
};
// 尺寸指南表（Category）
const TableCategory = (param)=>{
    let { tableData } = param;
    // 默认展示尺码
    const defaultCountrySize = (0,react.useMemo)(()=>{
        var _tableData_data_find;
        return (_tableData_data_find = tableData.data.find((item)=>item.isDefault)) === null || _tableData_data_find === void 0 ? void 0 : _tableData_data_find.title;
    }, [
        tableData.data
    ]);
    // 当前选中的转换尺码
    const [currentCountrySize, setCurrentCountrySize] = (0,react.useState)(defaultCountrySize);
    // Select options
    const selectOptions = (0,react.useMemo)(()=>tableData.data.filter((item)=>!item.isHeadFixation) // 固定头部的row不展示在select中
        .map((i)=>i.title), [
        tableData.data
    ]);
    const onChange = (0,react.useCallback)((value)=>{
        setCurrentCountrySize(value);
    }, []);
    // 获取当前国家信息
    const getGeoLocalization = (0,react.useCallback)(async ()=>{
        try {
            var _res_data;
            const { data: res } = await dist/* api */.hi.geo.getGeoLocalization();
            // 优先取所在国家名称 在中国时取默认地区
            setCurrentCountrySize((res === null || res === void 0 ? void 0 : (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.name) || defaultCountrySize || "中国");
        } catch (error) {
            console.log("[switchPaymentMethodCode]", error);
        }
    }, [
        defaultCountrySize
    ]);
    (0,react.useEffect)(()=>{
        getGeoLocalization();
    }, [
        getGeoLocalization
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            tableData.countryDropdownVisible && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).label,
                        children: "选择转换表"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_select/* FormFieldSelect */.n, {
                        options: selectOptions,
                        value: currentCountrySize,
                        onChange: onChange,
                        placeholder: "请选择"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (index_module_default()).guideTitle,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: tableData.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (index_module_default()).tableWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("table", {
                    className: (index_module_default()).table,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tbody", {
                        children: tableData.data.filter((item)=>item.isHeadFixation || item.title === currentCountrySize).map((countries, sizeGuideItemIndex)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                                className: (index_module_default()).tr,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                        className: classnames_default()((index_module_default()).td, (index_module_default()).rowTitle),
                                        children: countries.title
                                    }),
                                    (0,index_esm/* arrayOrEmpty */.sq)(countries.rows).map((value, valueIndex)=>{
                                        return /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                            className: classnames_default()((index_module_default()).td, (index_module_default()).item),
                                            children: value
                                        }, valueIndex);
                                    })
                                ]
                            }, sizeGuideItemIndex);
                        })
                    })
                })
            })
        ]
    });
};
const SizeGuideDialog = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { isVisible, onClose, sizeChartData } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* Dialog */.V, {
            isVisible: isVisible,
            onClose: onClose,
            onClickMask: onClose,
            lockBodyScroll: true,
            customContentClassName: (index_module_default()).dialogContent,
            title: "尺码指南",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                    vIf: sizeChartData === null || sizeChartData === void 0 ? void 0 : sizeChartData.title,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).title,
                        dangerouslySetInnerHTML: {
                            __html: sizeChartData === null || sizeChartData === void 0 ? void 0 : sizeChartData.title
                        }
                    })
                }),
                (0,index_esm/* arrayOrEmpty */.sq)(sizeChartData === null || sizeChartData === void 0 ? void 0 : sizeChartData.gridData).map((item, index)=>{
                    return item.type === SizeGuideGridType.Measurement ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableMeasurement, {
                        tableData: item
                    }, index) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCategory, {
                        tableData: item
                    }, index);
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                    vIf: sizeChartData === null || sizeChartData === void 0 ? void 0 : sizeChartData.information,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).information,
                        dangerouslySetInnerHTML: {
                            __html: sizeChartData === null || sizeChartData === void 0 ? void 0 : sizeChartData.information
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                    vIf: sizeChartData === null || sizeChartData === void 0 ? void 0 : sizeChartData.text,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        dangerouslySetInnerHTML: {
                            __html: sizeChartData === null || sizeChartData === void 0 ? void 0 : sizeChartData.text
                        }
                    })
                })
            ]
        })
    });
});
SizeGuideDialog.displayName = "SizeGuideDialog";
/* harmony default export */ var size_guide_dialog = (SizeGuideDialog);


/***/ }),

/***/ 25488:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: function() { return /* binding */ useSyncCallback; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);

const useSyncCallback = (callback)=>{
    const [proxyState, setProxyState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        current: false
    });
    const Func = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setProxyState({
            current: true
        });
    }, [
        proxyState
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (proxyState.current === true) setProxyState({
            current: false
        });
    }, [
        proxyState
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        proxyState.current && callback();
    });
    return Func;
};


/***/ }),

/***/ 89803:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ OPEN_WE_CHAT_DATA_KEY; },
/* harmony export */   p: function() { return /* binding */ useWeChatQuickPay; }
/* harmony export */ });
/* harmony import */ var _kering_technologies_ec_china_package_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59265);
/* harmony import */ var _kering_technologies_eagle_china_package_gtm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80703);
/* harmony import */ var _hooks_use_campaign_parameter_tracking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59861);
/* harmony import */ var _kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80811);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69132);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50959);
/* harmony import */ var _kering_technologies_eagle_china_package_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65943);
/* harmony import */ var _packages_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59830);
/* harmony import */ var _contexts_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80360);
/* harmony import */ var _adapters_sensors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64068);
/* harmony import */ var _adapters_sensors_order_source_url__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(82356);
/* harmony import */ var _adapters_sensors_$latest_referrer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25233);












const gaTrackingId = "G-N3M729XRCH" || 0;
const gaTrackingIdOld = "UA-32769654-11" || 0;
const OPEN_WE_CHAT_DATA_KEY = "OPEN_WE_CHAT_DATA";
const useWeChatQuickPay = (selectedSize, selectedColor, customizedInfo, callback, isCOC)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [isWeChat, setIsWeChat] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const windowWidth = (0,_kering_technologies_ec_china_package_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useWindowWidth */ .Lm)();
    const isMobile = windowWidth > 0 && windowWidth < 768 || false;
    const { getTracking } = (0,_hooks_use_campaign_parameter_tracking__WEBPACK_IMPORTED_MODULE_2__/* .useCampaignParameterTracking */ .e)();
    const qrCodeImageUrlRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)("");
    const { startLoading, finishLoading } = (0,_packages_loading__WEBPACK_IMPORTED_MODULE_7__/* .useLoading */ .r$)();
    const { showToast } = (0,_contexts_toast__WEBPACK_IMPORTED_MODULE_8__/* .useToast */ .p)();
    const { getAnonymousID } = (0,_adapters_sensors__WEBPACK_IMPORTED_MODULE_9__/* .useSensors */ .D)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setIsWeChat((0,_kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_3__/* .isWeChatBrowser */ .X5)());
        (0,_kering_technologies_eagle_china_package_gtm__WEBPACK_IMPORTED_MODULE_1__/* .initGANewClientId */ .Kt)(gaTrackingId);
    }, [
        router
    ]);
    const getWeChatPayQrCode = async ()=>{
        // 没有选择尺码
        if (!selectedSize) {
            return;
        }
        try {
            var _this, _window__insideGraph, _window;
            const scene = {
                orderSource: "web",
                cart: {
                    ...(_this = selectedSize || (selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.children[0])) === null || _this === void 0 ? void 0 : _this.product.addToCartParams,
                    ...customizedInfo || {}
                },
                gaClientId: (0,_kering_technologies_eagle_china_package_gtm__WEBPACK_IMPORTED_MODULE_1__/* .getGANowClientId */ .KZ)(gaTrackingIdOld),
                utm: {
                    ...getTracking()
                },
                pid: ((_window = window) === null || _window === void 0 ? void 0 : (_window__insideGraph = _window._insideGraph) === null || _window__insideGraph === void 0 ? void 0 : _window__insideGraph.pid) || "",
                sensorsCookieId: getAnonymousID(),
                isCOC,
                orderSourceUrl: (0,_adapters_sensors_order_source_url__WEBPACK_IMPORTED_MODULE_10__/* .getOrderSourceUrl */ .F)(),
                latestReferrer: (0,_adapters_sensors_$latest_referrer__WEBPACK_IMPORTED_MODULE_11__/* .getLatestReferrer */ .f)()
            };
            const params = {
                scene,
                page: "pages/before-checkout/before-checkout"
            };
            startLoading();
            const { data: res } = isMobile ? await _kering_technologies_eagle_china_package_api__WEBPACK_IMPORTED_MODULE_6__/* .api */ .hi.product.getUrlSchemeV2(params) : await _kering_technologies_eagle_china_package_api__WEBPACK_IMPORTED_MODULE_6__/* .api */ .hi.product.getUnlimitedQrCodeV2(params);
            if ((res === null || res === void 0 ? void 0 : res.status) && (res === null || res === void 0 ? void 0 : res.data)) {
                if (isWeChat) {
                    sessionStorage.setItem(OPEN_WE_CHAT_DATA_KEY, JSON.stringify(res.data));
                    router.push("/open-we-chat-mini-app");
                    return;
                }
                if (isMobile) {
                    var _res_data;
                    location.href = (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.openlink;
                    return;
                }
                qrCodeImageUrlRef.current = res.data.qrcodeImageUrl;
                callback === null || callback === void 0 ? void 0 : callback(qrCodeImageUrlRef.current);
                return;
            }
            showToast((res === null || res === void 0 ? void 0 : res.message) || "");
        } catch (e) {
            console.error("[product-detail][useWeChatQuickPay]", e);
        } finally{
            finishLoading();
        }
    };
    return {
        getWeChatPayQrCode
    };
};


/***/ }),

/***/ 40718:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __N_SSP: function() { return /* binding */ __N_SSP; },
  "default": function() { return /* binding */ _url_; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/router.js
var next_router = __webpack_require__(69132);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+eagle_china-package-api@2.332.0/node_modules/@kering-technologies/eagle_china-package-api/dist/index.mjs
var dist = __webpack_require__(65943);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/head.js
var head = __webpack_require__(31852);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./layouts/default-layout.tsx + 2 modules
var default_layout = __webpack_require__(65353);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./features/product/product-detail/index.module.scss
var index_module = __webpack_require__(85412);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./hooks/use-breakpoints.ts
var use_breakpoints = __webpack_require__(21525);
// EXTERNAL MODULE: ./components/basic-image.tsx
var basic_image = __webpack_require__(81892);
// EXTERNAL MODULE: ./features/product/product-detail-video/index.tsx + 1 modules
var product_detail_video = __webpack_require__(19184);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-hooks@1.17.0_lodash.debounce@4.0.8_lodash.throttle@4.1._nnr3xwofk5oatghfixxbrp4jym/node_modules/@kering-technologies/ec_china-package-hooks/dist/index.esm.js
var index_esm = __webpack_require__(59265);
// EXTERNAL MODULE: ./components/by-breakpoints.tsx
var by_breakpoints = __webpack_require__(25073);
// EXTERNAL MODULE: ./components/slide/index.tsx + 1 modules
var slide = __webpack_require__(16888);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/link.js
var next_link = __webpack_require__(60806);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./features/product/product-detail-info/index.module.scss
var product_detail_info_index_module = __webpack_require__(92231);
var product_detail_info_index_module_default = /*#__PURE__*/__webpack_require__.n(product_detail_info_index_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-swr@1.10.0_@kering-technologies+eagle_china-package-api@2.332.0_swr@2.2.2/node_modules/@kering-technologies/ec_china-package-swr/dist/index.js
var ec_china_package_swr_dist = __webpack_require__(23659);
// EXTERNAL MODULE: ./hooks/use-element-into-view.ts
var use_element_into_view = __webpack_require__(22682);
// EXTERNAL MODULE: ./assets/svg/arrow-right.svg
var arrow_right = __webpack_require__(70788);
;// CONCATENATED MODULE: ./features/product/utils/product.config.ts

const FIND_IN_STORE_LINK_HIDDEN_STATUS = [
    dist/* ApiProductStatus */.Qk.UnSellable,
    dist/* ApiProductStatus */.Qk.UnSellableWithOtherChannelExclusive,
    dist/* ApiProductStatus */.Qk.ComingSoon,
    dist/* ApiProductStatus */.Qk.OutOfStock
];
/**
 * 为给定的产品信息生成页脚菜单信息
 *
 * @param {Object} options - 生成页脚菜单的选项。
 * @param {ProductInfo} options.productInfo - 产品信息。
 * @param {function} options.setIsPreviewDialogVisible - 设置预览对话框的可见性的函数。
 * @param {function} options.setIsInformationDialogVisible - 设置信息对话框的可见性的函数。
 * @param {function} options.openFindInStore - 打开查找门店页面的函数。
 * @param {ApiProductDetailsData<SizeGuide[]>} options.product - 产品详细数据。
 * @param {function} options.gtmShowProductDetails - 在GTM中显示产品详情的函数。
 * @param {function} options.gtmShowShippingReturns - 在GTM中显示配送和退货信息的函数。
 * @return {Array} 生成的页脚菜单数据
 */ const footerMenu = (param)=>{
    let { productInfo, setIsPreviewDialogVisible, setIsInformationDialogVisible, openFindInStore, product, gtmShowProductDetails, gtmShowShippingReturns, goToCustomerCare } = param;
    return [
        {
            title: "更多详情",
            isHidden: !(productInfo === null || productInfo === void 0 ? void 0 : productInfo.styleMaterialColor) && !(productInfo === null || productInfo === void 0 ? void 0 : productInfo.isoMadeIn) && !(productInfo === null || productInfo === void 0 ? void 0 : productInfo.materialCompositionChinese) && !(productInfo === null || productInfo === void 0 ? void 0 : productInfo.description) && !(productInfo === null || productInfo === void 0 ? void 0 : productInfo.shortDesc),
            action: ()=>{
                setIsPreviewDialogVisible === null || setIsPreviewDialogVisible === void 0 ? void 0 : setIsPreviewDialogVisible(true);
                gtmShowProductDetails === null || gtmShowProductDetails === void 0 ? void 0 : gtmShowProductDetails();
            }
        },
        {
            title: "查询线下店铺情况",
            isHidden: FIND_IN_STORE_LINK_HIDDEN_STATUS.includes(productInfo.status) || !productInfo.reserveInStore,
            action: openFindInStore
        },
        {
            title: "免费配送与退货服务",
            isHidden: !(!(productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization) && (product === null || product === void 0 ? void 0 : product.shippingReturn) || (productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization) && (product === null || product === void 0 ? void 0 : product.personalizeShippingReturn)),
            action: ()=>{
                setIsInformationDialogVisible === null || setIsInformationDialogVisible === void 0 ? void 0 : setIsInformationDialogVisible(true);
                gtmShowShippingReturns === null || gtmShowShippingReturns === void 0 ? void 0 : gtmShowShippingReturns();
            }
        },
        {
            title: "客户服务",
            action: ()=>{
                goToCustomerCare();
            }
        }
    ];
};

// EXTERNAL MODULE: ./features/product/color-swatch/index.module.scss
var color_swatch_index_module = __webpack_require__(57056);
var color_swatch_index_module_default = /*#__PURE__*/__webpack_require__.n(color_swatch_index_module);
// EXTERNAL MODULE: ./hooks/use-get-device-type.ts
var use_get_device_type = __webpack_require__(89834);
;// CONCATENATED MODULE: ./features/product/product-detail-context.tsx


const ProductDetailContext = /*#__PURE__*/ (0,react.createContext)(undefined);
const useProductDetail = ()=>{
    const context = (0,react.useContext)(ProductDetailContext);
    if (!context) {
        throw new Error("useProductDetail must be used within ProductDetailProvider");
    }
    const { activeColorIndex, setActiveColorIndex, activePantabootsIndex, setActivePantabootsIndex } = context;
    return {
        activeColorIndex,
        setActiveColorIndex,
        activePantabootsIndex,
        setActivePantabootsIndex
    };
};
const ProductDetailProvider = (param)=>{
    let { children } = param;
    const [activeColorIndex, setActiveColorIndex] = (0,react.useState)(-1);
    const [activePantabootsIndex, setActivePantabootsIndex] = (0,react.useState)(-1);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProductDetailContext.Provider, {
        value: {
            activeColorIndex,
            setActiveColorIndex,
            activePantabootsIndex,
            setActivePantabootsIndex
        },
        children: children
    });
};

// EXTERNAL MODULE: ./utils/recursion-product-store-data.ts
var recursion_product_store_data = __webpack_require__(42629);
;// CONCATENATED MODULE: ./features/product/color-swatch/index.tsx










const ColorSwatch = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { product, colorList, selectColor, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    selectedColor, setSelectedPantaboots, setSelectedSize, isPantaboots, setProductData } = param;
    const { activeColorIndex } = useProductDetail();
    const [slideArrowVisible, setSlideArrowVisible] = (0,react.useState)(false);
    const divRef = (0,react.useRef)(null);
    const [flag, setFlag] = (0,react.useState)(0);
    const { currentDevice: currentEquipment } = (0,use_get_device_type/* useGetDeviceType */.n)();
    const [, startTransition] = (0,react.useTransition)();
    const fetchSMCDataFlag = (0,react.useRef)(false);
    // 获取库存相关数据
    const fetchSMCData = (0,react.useCallback)(async (color, sku, index)=>{
        if (index === undefined) return color;
        try {
            const { data: res } = await dist/* api */.hi.product.getProductHotByUrlWebV3({
                sku
            });
            fetchSMCDataFlag.current = false;
            if ((res === null || res === void 0 ? void 0 : res.status) && res.data) {
                const pdpInfoData = JSON.parse(JSON.stringify(product));
                const storeInfoData = res.data;
                if (isPantaboots) {
                    pdpInfoData.pantabootsChildren = (0,recursion_product_store_data/* recursionProductStoreData */.C)(pdpInfoData.pantabootsChildren, storeInfoData);
                } else {
                    pdpInfoData.children = (0,recursion_product_store_data/* recursionProductStoreData */.C)(pdpInfoData.children, storeInfoData);
                }
                setProductData === null || setProductData === void 0 ? void 0 : setProductData(pdpInfoData);
                return isPantaboots ? pdpInfoData.pantabootsChildren[index] : pdpInfoData.children[index];
            }
        } catch (error) {
            fetchSMCDataFlag.current = false;
            console.log("[pdp][fetchSMCData]", error);
        }
    }, [
        product,
        isPantaboots,
        setProductData
    ]);
    /** 点击切换颜色 */ const onClick = (0,react.useCallback)(async (_color, index)=>{
        var _color_children, _color_children1, _color_children2;
        let sku = _color.product.smc;
        // 是Pantaboots商品，并且下边有children，并且children里边有smc，并且sku和children[0]的smc不一样，才做sku拼接，拼接时逗号,间隔
        if (isPantaboots && ((_color_children = _color.children) === null || _color_children === void 0 ? void 0 : _color_children[0]) && ((_color_children1 = _color.children) === null || _color_children1 === void 0 ? void 0 : _color_children1[0].product.smc) && ((_color_children2 = _color.children) === null || _color_children2 === void 0 ? void 0 : _color_children2[0].product.smc) !== sku) {
            var _color_children3;
            sku = sku + "," + ((_color_children3 = _color.children) === null || _color_children3 === void 0 ? void 0 : _color_children3[0].product.smc);
        }
        if (fetchSMCDataFlag.current) return;
        fetchSMCDataFlag.current = true;
        let item;
        if (index !== undefined) {
            item = await fetchSMCData(_color, sku, index);
        } else {
            item = _color;
        }
        fetchSMCDataFlag.current = false;
        startTransition(()=>{
            var _item_children;
            selectColor(item);
            // U码默认选择
            setSelectedSize(item.children[0].attribute.label === "U" ? item.children[0] : null);
            // 切换颜色后重置 默认 Pantaboots 尺码
            isPantaboots && setSelectedPantaboots((_item_children = item.children) === null || _item_children === void 0 ? void 0 : _item_children[0]);
        });
    }, [
        fetchSMCData,
        isPantaboots,
        selectColor,
        setSelectedPantaboots,
        setSelectedSize
    ]);
    (0,react.useEffect)(()=>{
        var _divRef_current, _divRef_current1;
        // pc端 swiper中内容的宽度超过详情容器宽度时显示箭头
        if (((_divRef_current = divRef.current) === null || _divRef_current === void 0 ? void 0 : _divRef_current.clientWidth) && ((_divRef_current1 = divRef.current) === null || _divRef_current1 === void 0 ? void 0 : _divRef_current1.clientWidth) > colorList.length * 64 && currentEquipment === use_get_device_type/* DeviceType */.Y.DESKTOP) {
            setSlideArrowVisible(true);
        }
    }, [
        colorList.length,
        currentEquipment
    ]);
    (0,react.useEffect)(()=>{
        setFlag((val)=>val + 1);
    }, [
        slideArrowVisible
    ]);
    return colorList.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ref: divRef
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()((color_swatch_index_module_default()).wrapper, slideArrowVisible ? (color_swatch_index_module_default()).fitContent : ""),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(slide/* Slide */.M, {
                    dataList: colorList,
                    items: (item, index)=>{
                        var _item_product, _item_attribute, _item_product1;
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                            className: classnames_default()((color_swatch_index_module_default()).image, activeColorIndex === index ? (color_swatch_index_module_default()).isSelected : ""),
                            alt: (_item_product = item.product) === null || _item_product === void 0 ? void 0 : _item_product.name,
                            src: (_item_attribute = item.attribute) === null || _item_attribute === void 0 ? void 0 : _item_attribute.image,
                            style: {
                                objectFit: "contain"
                            },
                            onClick: ()=>{
                                activeColorIndex !== index && onClick(item, index);
                            }
                        }, "".concat((_item_product1 = item.product) === null || _item_product1 === void 0 ? void 0 : _item_product1.name, "|").concat(index));
                    },
                    allowTouchMove: true,
                    prevArrowClass: (color_swatch_index_module_default()).prevArrowClass,
                    nextArrowClass: (color_swatch_index_module_default()).nextArrowClass,
                    slidesPerView: "auto",
                    firstOrLastArrowVisibleMode: true,
                    slideArrowVisibleMode: // 移动端不显示箭头
                    slideArrowVisible || currentEquipment !== use_get_device_type/* DeviceType */.Y.DESKTOP ? "hidden" : "visible"
                })
            }, flag)
        ]
    }) : null;
});
ColorSwatch.displayName = "ColorSwatch";

// EXTERNAL MODULE: ./features/product/select-size/index.module.scss
var select_size_index_module = __webpack_require__(23691);
var select_size_index_module_default = /*#__PURE__*/__webpack_require__.n(select_size_index_module);
// EXTERNAL MODULE: ./components/fields/form-field-select.tsx
var form_field_select = __webpack_require__(8526);
// EXTERNAL MODULE: ./components/rendered-node.tsx
var rendered_node = __webpack_require__(25351);
;// CONCATENATED MODULE: ./features/product/select-size/index.tsx









const SelectSize = (param)=>{
    let { product, setSelectedSize, setSelectedPantaboots, selectedSize, selectedPantaboots, isPantaboots, selectedColor, isOpenSelect, setIsOpenSelect, onBlur, setProductData } = param;
    var _selectedPantaboots_children, _selectedPantaboots_children1;
    const { activeColorIndex, activePantabootsIndex } = useProductDetail();
    const fetchSMCDataFlag = (0,react.useRef)(false);
    // 获取库存相关数据
    const fetchSMCData = (0,react.useCallback)(async (pantaboots, index)=>{
        if (index === undefined) return pantaboots;
        try {
            const { data: res } = await dist/* api */.hi.product.getProductHotByUrlWebV3({
                sku: pantaboots.product.smc
            });
            fetchSMCDataFlag.current = false;
            if ((res === null || res === void 0 ? void 0 : res.status) && res.data) {
                const pdpInfoData = JSON.parse(JSON.stringify(product));
                const storeInfoData = res.data;
                pdpInfoData.pantabootsChildren = (0,recursion_product_store_data/* recursionProductStoreData */.C)(pdpInfoData.pantabootsChildren, storeInfoData);
                setProductData === null || setProductData === void 0 ? void 0 : setProductData(pdpInfoData);
                return pdpInfoData.pantabootsChildren[activeColorIndex].children[index];
            }
        } catch (error) {
            fetchSMCDataFlag.current = false;
            console.log("[pdp][fetchSMCData]", error);
        }
    }, [
        product,
        setProductData,
        activeColorIndex
    ]);
    /**
   * @description Pantaboots商品切换后 改变尺码
   * @param {ApiProductColorListItem} pantaboots
   * @return {*}
   */ const selectPantaboots = (0,react.useCallback)(async (_pantaboots, index)=>{
        var _pantaboots_children;
        if (index === activePantabootsIndex) return;
        if (fetchSMCDataFlag.current) return;
        fetchSMCDataFlag.current = true;
        let pantaboots;
        if (index !== undefined) {
            pantaboots = await fetchSMCData(_pantaboots, index);
        } else {
            pantaboots = _pantaboots;
        }
        fetchSMCDataFlag.current = false;
        let size = null;
        if (pantaboots === null || pantaboots === void 0 ? void 0 : (_pantaboots_children = pantaboots.children) === null || _pantaboots_children === void 0 ? void 0 : _pantaboots_children.length) {
            // 改变Pantaboots的时候，选中的尺码与上一个Pantaboots相同的尺码（保证其尺码可用的情况下）
            size = pantaboots.children.find((ele)=>!ele.isDisabled && ele.attribute.label === (selectedPantaboots === null || selectedPantaboots === void 0 ? void 0 : selectedPantaboots.attribute.label));
        }
        setSelectedPantaboots(pantaboots);
        setSelectedSize(size || null);
    }, [
        fetchSMCData,
        selectedPantaboots === null || selectedPantaboots === void 0 ? void 0 : selectedPantaboots.attribute.label,
        setSelectedPantaboots,
        setSelectedSize,
        activePantabootsIndex
    ]);
    /**
   * @description 选择尺码
   * @param {ApiProductSizeListItem} size
   * @return {*}
   */ const selectSize = (size)=>{
        setIsOpenSelect(false);
        setSelectedSize(size);
    };
    const onBlurCb = ()=>{
        setIsOpenSelect(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur();
    };
    return isPantaboots ? // Pantaboots 商品尺码选择
    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
        vIf: (selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.children) || (selectedPantaboots === null || selectedPantaboots === void 0 ? void 0 : (_selectedPantaboots_children = selectedPantaboots.children) === null || _selectedPantaboots_children === void 0 ? void 0 : _selectedPantaboots_children.length),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classnames_default()((select_size_index_module_default()).wrapper, // 没有color swatch时的间距
            product.children.length ? (select_size_index_module_default()).withoutColor : ""),
            children: [
                (selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.children) && /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_select/* FormFieldSelect */.n, {
                    label: product === null || product === void 0 ? void 0 : product.labelForFirstDropdown,
                    placeholder: "选择",
                    options: selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.children,
                    onChange: selectPantaboots,
                    value: selectedPantaboots,
                    toDisplay: (option)=>option.attribute.label,
                    toIdentity: (option)=>option.attribute.label,
                    placeholderClassName: (select_size_index_module_default()).placeholder
                }),
                (selectedPantaboots === null || selectedPantaboots === void 0 ? void 0 : (_selectedPantaboots_children1 = selectedPantaboots.children) === null || _selectedPantaboots_children1 === void 0 ? void 0 : _selectedPantaboots_children1.length) && /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_select/* FormFieldSelect */.n, {
                    label: product === null || product === void 0 ? void 0 : product.labelForSecondDropdown,
                    placeholder: "选择",
                    options: selectedPantaboots === null || selectedPantaboots === void 0 ? void 0 : selectedPantaboots.children,
                    onChange: selectSize,
                    value: selectedSize,
                    toDisplay: (option)=>"ysl " + option.attribute.label + (option.attribute.tag || ""),
                    toIdentity: (option)=>option.attribute.label,
                    wrapperClassName: (select_size_index_module_default()).selectWrap,
                    isOpenSelect: isOpenSelect,
                    onBlur: onBlurCb,
                    placeholderClassName: (select_size_index_module_default()).placeholder
                })
            ]
        })
    }) : // U码不显示
    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
        vIf: !((selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.children[0].attribute.label) === "U" || !(selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.children.length)),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classnames_default()((select_size_index_module_default()).wrapper, // 没有color swatch时的间距
            product.children.length ? (select_size_index_module_default()).withoutColor : ""),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_select/* FormFieldSelect */.n, {
                label: "YSL尺码",
                placeholder: "选择",
                options: selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.children,
                onChange: selectSize,
                value: selectedSize,
                toDisplay: (option)=>"ysl " + option.attribute.label + (option.attribute.tag || ""),
                toIdentity: (option)=>option.attribute.label,
                isOpenSelect: isOpenSelect,
                onBlur: onBlurCb,
                placeholderClassName: (select_size_index_module_default()).placeholder
            })
        })
    });
};

// EXTERNAL MODULE: ./features/product/share/index.module.scss
var share_index_module = __webpack_require__(60834);
var share_index_module_default = /*#__PURE__*/__webpack_require__.n(share_index_module);
;// CONCATENATED MODULE: ./assets/svg/wechat.svg
var _path, _path2;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var SvgWechat = function SvgWechat(_ref, ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    d: "M14.9999 9.48251C14.9999 7.65862 13.0177 6.17145 10.7923 6.17145C8.43416 6.17145 6.57861 7.65862 6.57861 9.48251C6.57861 11.3101 8.43416 12.7936 10.7923 12.7936C11.2848 12.7936 11.7834 12.6795 12.2779 12.5654L13.6369 13.25L13.263 12.1108C14.2581 11.4224 14.9999 10.5114 14.9999 9.48251ZM9.42324 8.91196C9.17597 8.91196 8.9287 8.68561 8.9287 8.45552C8.9287 8.2273 9.17798 7.99908 9.42324 7.99908C9.79717 7.99908 10.0424 8.2273 10.0424 8.45552C10.0444 8.68561 9.79918 8.91196 9.42324 8.91196ZM12.1493 8.91196C11.904 8.91196 11.6567 8.68561 11.6567 8.45552C11.6567 8.2273 11.904 7.99908 12.1493 7.99908C12.5212 7.99908 12.7684 8.2273 12.7684 8.45552C12.7684 8.68561 12.5212 8.91196 12.1493 8.91196Z",
    fill: "black"
  })), _path2 || (_path2 = /*#__PURE__*/react.createElement("path", {
    d: "M5.95549 2.75C3.23148 2.75 1 4.45978 1 6.62974C1 7.88308 1.74182 8.91195 2.98219 9.70885L2.48765 11.0819L4.22056 10.2813C4.83975 10.3935 5.33831 10.5095 5.95549 10.5095C6.11028 10.5095 6.26508 10.502 6.41786 10.4908C6.32137 10.1859 6.26508 9.86598 6.26508 9.53487C6.26508 7.54262 8.12464 5.92451 10.4767 5.92451C10.6376 5.92451 10.7964 5.93573 10.9532 5.9507C10.525 4.11558 8.39001 2.75 5.95549 2.75ZM4.3452 5.83097C3.97329 5.83097 3.59937 5.60275 3.59937 5.26042C3.59937 4.91622 3.97329 4.69174 4.3452 4.69174C4.71712 4.69174 4.96439 4.91809 4.96439 5.26042C4.96439 5.60088 4.71712 5.83097 4.3452 5.83097ZM7.81304 5.83097C7.44113 5.83097 7.06921 5.60275 7.06921 5.26042C7.06921 4.91622 7.44113 4.69174 7.81304 4.69174C8.18696 4.69174 8.43222 4.91809 8.43222 5.26042C8.43222 5.60088 8.18696 5.83097 7.81304 5.83097Z",
    fill: "black"
  })));
};
var ForwardRef = /*#__PURE__*/(0,react.forwardRef)(SvgWechat);
/* harmony default export */ var wechat = (ForwardRef);
;// CONCATENATED MODULE: ./assets/svg/weibo.svg
var weibo_path;
var weibo_excluded = ["title", "titleId"];
function weibo_extends() { weibo_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return weibo_extends.apply(this, arguments); }
function weibo_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = weibo_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function weibo_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var SvgWeibo = function SvgWeibo(_ref, ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = weibo_objectWithoutProperties(_ref, weibo_excluded);
  return /*#__PURE__*/react.createElement("svg", weibo_extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, weibo_path || (weibo_path = /*#__PURE__*/react.createElement("path", {
    d: "M11.6686 8.37381C11.8624 8.5289 11.9996 8.715 12.0787 8.93213C12.1578 9.14925 12.1908 9.37581 12.1763 9.61182C12.1618 9.84782 12.1116 10.0838 12.0246 10.3185C11.9376 10.5545 11.8268 10.7676 11.6897 10.9591C11.4444 11.3056 11.1675 11.5996 10.8576 11.8424C10.5477 12.0851 10.2273 12.2874 9.89626 12.4506C9.56527 12.6124 9.23165 12.7392 8.8967 12.8323C8.56176 12.924 8.24659 12.9927 7.95121 13.0372C7.65582 13.0817 7.39077 13.1087 7.15736 13.1195C6.92396 13.1303 6.74198 13.1357 6.61143 13.1357C6.4822 13.1357 6.30945 13.1262 6.09319 13.1087C5.87692 13.0898 5.63824 13.0534 5.37451 12.9981C5.11209 12.9428 4.83648 12.866 4.54769 12.7662C4.26022 12.6664 3.97934 12.5356 3.70505 12.3737C3.43077 12.2119 3.16967 12.0123 2.92176 11.7777C2.67385 11.5417 2.46286 11.2584 2.29011 10.9267C2.1767 10.7123 2.0989 10.4844 2.05934 10.2403C2.01978 9.99752 2 9.68734 2 9.31243C2 9.1506 2.02637 8.96584 2.08044 8.75951C2.13451 8.55317 2.22945 8.32526 2.36659 8.07442C2.50374 7.82358 2.69099 7.55117 2.92835 7.25717C3.16571 6.96318 3.46901 6.63817 3.8356 6.28484C4.1956 5.93825 4.56879 5.63077 4.95385 5.3624C5.3389 5.09403 5.75165 4.885 6.19077 4.738C6.39253 4.66383 6.61538 4.62337 6.86066 4.61663C7.10593 4.60989 7.30769 4.65035 7.46593 4.738C7.53846 4.81892 7.60571 4.90253 7.67165 4.98615C7.73626 5.07111 7.77978 5.1763 7.80088 5.30037C7.82198 5.40286 7.82462 5.50266 7.80615 5.59841C7.78769 5.69416 7.76791 5.78991 7.74681 5.88566C7.72571 5.98141 7.70725 6.07311 7.69275 6.16212C7.67824 6.24978 7.68615 6.33204 7.71385 6.40487C7.83648 6.4197 7.95516 6.4143 8.06989 6.38868C8.18462 6.36306 8.2967 6.32934 8.40484 6.28889C8.51297 6.24843 8.62242 6.20662 8.73451 6.16212C8.84659 6.11761 8.96264 6.08525 9.08527 6.06232C9.27912 6.02591 9.47297 6.00838 9.66286 6.01242C9.85407 6.01647 10.0268 6.04344 10.1811 6.09469C10.3354 6.14594 10.4633 6.2255 10.5648 6.33204C10.6651 6.43858 10.727 6.57748 10.7481 6.74606C10.7626 6.84855 10.7547 6.9443 10.727 7.03331C10.698 7.12232 10.6677 7.20458 10.6347 7.28145C10.6018 7.35832 10.5767 7.43789 10.5596 7.5188C10.5411 7.59972 10.5464 7.68468 10.5754 7.77234C10.5965 7.82358 10.6492 7.87213 10.7323 7.91529C10.8154 7.95979 10.9103 8.0043 11.0185 8.04745C11.1266 8.09195 11.24 8.13915 11.3587 8.1904C11.4787 8.24839 11.5815 8.30773 11.6686 8.37381ZM8.94549 11.81C9.13275 11.6927 9.32132 11.5295 9.51253 11.3245C9.70374 11.1168 9.85934 10.8876 9.97802 10.6327C10.0967 10.3792 10.164 10.1068 10.1785 9.81545C10.193 9.52416 10.1204 9.23151 9.9622 8.93752C9.82505 8.69477 9.65758 8.48844 9.45978 8.31852C9.26198 8.14859 9.04044 8.01508 8.79516 7.91529C8.54989 7.81549 8.28879 7.74402 8.01187 7.69951C7.73494 7.65501 7.45143 7.63343 7.16396 7.63343C6.60879 7.63343 6.11824 7.69277 5.68967 7.8101C5.2611 7.92743 4.89055 8.08251 4.5767 8.27401C4.26286 8.46551 4.00967 8.68264 3.81451 8.92538C3.62066 9.16813 3.48352 9.41492 3.4044 9.66576C3.32527 9.90851 3.30154 10.1499 3.33451 10.39C3.36747 10.6287 3.44132 10.8552 3.55604 11.0696C3.67077 11.2827 3.8211 11.4742 4.0044 11.6441C4.18769 11.8141 4.39209 11.9503 4.61495 12.0528C5.02505 12.2375 5.4444 12.3535 5.87297 12.4007C6.30154 12.4479 6.71033 12.4506 7.09934 12.4061C7.48835 12.3616 7.84308 12.2847 8.16352 12.1741C8.48396 12.0636 8.74506 11.9422 8.94549 11.81ZM7.53055 8.31852C7.67429 8.37786 7.81143 8.44394 7.94066 8.51676C8.06989 8.59093 8.18593 8.68938 8.28615 8.8148C8.35868 8.90381 8.42066 9.01304 8.47473 9.14655C8.52879 9.27872 8.56703 9.42032 8.58813 9.57136C8.60923 9.7224 8.61582 9.87479 8.60396 10.0299C8.59341 10.185 8.55912 10.3239 8.5011 10.4493C8.44308 10.5815 8.37319 10.7163 8.29011 10.8525C8.20703 10.9887 8.10681 11.1155 7.98813 11.2342C7.86945 11.3515 7.72703 11.4567 7.56088 11.5484C7.39473 11.6401 7.19297 11.7089 6.9556 11.7534C6.52308 11.8343 6.10901 11.7938 5.71341 11.632C5.3178 11.4702 5.00791 11.2018 4.78505 10.8256C4.69802 10.5383 4.65187 10.2848 4.64396 10.0636C4.63736 9.84243 4.69407 9.60373 4.8167 9.34615C4.91033 9.1479 5.05275 8.9618 5.24396 8.78783C5.43516 8.61521 5.65407 8.47495 5.9033 8.36842C6.15121 8.26188 6.41626 8.19849 6.69714 8.18096C6.98066 8.16208 7.25758 8.20793 7.53055 8.31852ZM5.81363 11.0359C6.08 11.0575 6.28308 10.9914 6.42418 10.8377C6.56527 10.6826 6.64044 10.51 6.65099 10.3185C6.66154 10.127 6.60747 9.95571 6.48879 9.80467C6.37011 9.65362 6.18418 9.59294 5.93231 9.62261C5.73846 9.64418 5.58681 9.72915 5.47868 9.87614C5.37055 10.0231 5.30989 10.1796 5.29538 10.3455C5.28088 10.5113 5.31517 10.6637 5.39824 10.804C5.48 10.9442 5.61846 11.0211 5.81363 11.0359ZM10.2312 2.84998C10.7574 2.84998 11.2479 2.92145 11.7055 3.06575C12.1631 3.21005 12.5626 3.41773 12.9042 3.69015C13.2457 3.96256 13.5147 4.29432 13.7086 4.68406C13.9024 5.0738 14 5.51614 14 6.00973C14 6.25247 13.942 6.43453 13.8273 6.55591C13.7125 6.67728 13.5873 6.74066 13.4541 6.74336C13.3209 6.74741 13.1969 6.69616 13.0809 6.58827C12.9662 6.48173 12.9081 6.31721 12.9081 6.09604C12.9081 5.80204 12.829 5.52154 12.6708 5.25586C12.5125 4.99019 12.3029 4.75823 12.0444 4.55999C11.7846 4.36175 11.4879 4.20396 11.153 4.09068C10.818 3.97605 10.4778 3.91941 10.1323 3.91941C9.90945 3.91941 9.7433 3.86412 9.63516 3.75353C9.52703 3.64295 9.47692 3.52023 9.48352 3.38402C9.49011 3.24781 9.55736 3.12509 9.68396 3.0145C9.81187 2.90527 9.99385 2.84998 10.2312 2.84998ZM10.2312 4.61798C10.9011 4.61798 11.4088 4.7933 11.7543 5.14258C12.0998 5.49187 12.2725 6.02052 12.2725 6.72853C12.2725 6.9497 12.2369 7.10613 12.1644 7.19784C12.0919 7.28954 12.0127 7.33 11.927 7.31921C11.84 7.30842 11.7609 7.25448 11.6897 7.15873C11.6171 7.06298 11.5815 6.93351 11.5815 6.77168C11.5815 6.33744 11.4589 5.99085 11.2136 5.73327C10.9684 5.47568 10.6413 5.34622 10.2312 5.34622C10.0941 5.34622 9.99385 5.30711 9.92923 5.23024C9.86462 5.15337 9.83165 5.06976 9.83165 4.9821C9.83165 4.89309 9.86593 4.81083 9.93451 4.73396C10.0031 4.65574 10.102 4.61798 10.2312 4.61798Z",
    fill: "black"
  })));
};
var weibo_ForwardRef = /*#__PURE__*/(0,react.forwardRef)(SvgWeibo);
/* harmony default export */ var weibo = (weibo_ForwardRef);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-utils@1.16.0_events@3.3.0/node_modules/@kering-technologies/ec_china-package-utils/dist/index.esm.js
var dist_index_esm = __webpack_require__(80811);
;// CONCATENATED MODULE: ./assets/svg/point.svg
var point_path;
var point_excluded = ["title", "titleId"];
function point_extends() { point_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return point_extends.apply(this, arguments); }
function point_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = point_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function point_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var SvgPoint = function SvgPoint(_ref, ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = point_objectWithoutProperties(_ref, point_excluded);
  return /*#__PURE__*/react.createElement("svg", point_extends({
    width: 112,
    height: 110,
    viewBox: "0 0 112 110",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, point_path || (point_path = /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M100.899 11.1561L111.615 4.28067L99.6183 0L100.108 4.26495C99.339 4.34012 98.5382 4.43433 97.7094 4.54822L97.9816 6.5296C98.798 6.41741 99.5842 6.32522 100.336 6.25218L100.899 11.1561ZM89.4919 8.20972C91.4515 7.7113 93.3393 7.30494 95.1229 6.98425L94.7689 5.01581C92.938 5.34502 91.0039 5.76148 88.9989 6.27144L89.4919 8.20972ZM81.2035 10.7615C83.0647 10.0864 84.9046 9.4905 86.7006 8.96952L86.1434 7.04871C84.3067 7.58149 82.4251 8.19087 80.5215 8.88141L81.2035 10.7615ZM73.2241 14.1233C74.9809 13.2724 76.7476 12.4962 78.5059 11.7911L77.7615 9.93481C75.9623 10.6563 74.1529 11.4512 72.3523 12.3234L73.2241 14.1233ZM65.6682 18.3286C67.2995 17.2887 68.9658 16.3232 70.6506 15.4287L69.7128 13.6622C67.984 14.58 66.2717 15.5721 64.5931 16.6421L65.6682 18.3286ZM58.7181 23.4363C60.1838 22.1919 61.7075 21.0233 63.2734 19.9278L62.1269 18.289C60.513 19.4181 58.9397 20.6245 57.4237 21.9117L58.7181 23.4363ZM52.6194 29.4957C53.8641 28.0362 55.1881 26.655 56.5767 25.3492L55.2065 23.8922C53.7675 25.2455 52.3924 26.6797 51.0976 28.1979L52.6194 29.4957ZM47.6678 36.4908C48.6277 34.8241 49.6852 33.2373 50.8263 31.7273L49.2307 30.5215C48.0416 32.0951 46.9377 33.7511 45.9347 35.4926L47.6678 36.4908ZM44.1404 44.2841C44.7627 42.4485 45.4945 40.6916 46.3228 39.0106L44.5288 38.1266C43.6626 39.8845 42.8972 41.7221 42.2463 43.642L44.1404 44.2841ZM54.727 44.3588C56.7272 44.1717 58.738 44.0861 60.7128 44.1328L60.7601 42.1333C58.6967 42.0845 56.6072 42.1742 54.5407 42.3675L54.727 44.3588ZM63.688 44.3104C65.7104 44.509 67.6591 44.8701 69.4837 45.4261L70.0667 43.5129C68.0952 42.9122 66.0138 42.5292 63.8835 42.32L63.688 44.3104ZM45.8194 45.8115C47.7184 45.3782 49.7097 44.9998 51.7415 44.7114L51.4604 42.7313C49.3684 43.0282 47.3223 43.4172 45.3745 43.8616L45.8194 45.8115ZM37.1368 48.345C38.3775 47.895 39.7596 47.4396 41.2481 47.0026C40.8072 48.7233 40.4557 50.5042 40.2019 52.3467L42.1832 52.6197C42.4506 50.679 42.8304 48.8122 43.3119 47.0169L42.2202 46.7242C42.4411 46.6625 42.6641 46.6013 42.889 46.5407L42.3684 44.6096C40.1949 45.1956 38.1946 45.8339 36.455 46.4648L37.1368 48.345ZM72.216 46.4532C73.999 47.2662 75.6099 48.3154 76.9952 49.6396L78.3772 48.1939C76.8111 46.6969 75.0071 45.5278 73.0456 44.6335L72.216 46.4532ZM31.7571 50.7345C32.3492 50.3728 33.2276 49.9294 34.3553 49.4421L33.5618 47.6062C32.3892 48.113 31.4172 48.5985 30.7145 49.0278C30.1058 49.3996 29.3025 49.8181 28.3066 50.3369L28.3064 50.337L28.1411 50.4231L29.0653 52.1968L29.2623 52.0941L29.2623 52.0941C30.2259 51.5923 31.0876 51.1435 31.7571 50.7345ZM78.8711 51.7998C79.3963 52.5319 79.8718 53.3286 80.2912 54.195C80.5393 55.1779 80.7291 56.1367 80.8647 57.0708L82.8439 56.7835C82.6935 55.7469 82.4816 54.6867 82.2046 53.604L82.1804 53.5093L82.1383 53.4212C81.6587 52.416 81.109 51.4882 80.4961 50.6339L78.8711 51.7998ZM21.4349 56.7431C23.2032 55.4798 24.9015 54.4576 26.4331 53.6046L25.46 51.8573C23.8838 52.7351 22.1181 53.797 20.2723 55.1158L21.4349 56.7431ZM41.8769 55.4693C41.804 56.4062 41.7565 57.3595 41.7358 58.3294C41.7361 59.3853 41.7774 60.3996 41.8569 61.373L39.8635 61.5358C39.7792 60.5027 39.7358 59.4306 39.7358 58.3188V58.3082L39.736 58.2976C39.7574 57.2868 39.8068 56.2923 39.8829 55.3141L41.8769 55.4693ZM14.8396 62.5623C16.2468 61.0263 17.6847 59.6926 19.1053 58.5268L17.8366 56.9807C16.349 58.2015 14.8413 59.5998 13.365 61.2112L14.8396 62.5623ZM81.1206 60.0763C81.1698 62.199 80.9279 64.1766 80.4474 65.9999L82.3814 66.5095C82.911 64.4999 83.1735 62.3349 83.12 60.0298L81.1206 60.0763ZM9.62088 69.6399C10.6717 67.8538 11.7879 66.2442 12.9404 64.7903L11.3731 63.5479C10.1645 65.0727 8.99573 66.7584 7.89708 68.6258L9.62088 69.6399ZM43.974 70.146C43.219 68.4519 42.6282 66.5349 42.2436 64.3819L40.2747 64.7336C40.6856 67.0337 41.3215 69.1073 42.1472 70.9601L43.974 70.146ZM79.4736 68.8061C78.6599 70.6717 77.5752 72.3442 76.287 73.8075L77.7881 75.1291C79.2085 73.5156 80.4072 71.6682 81.3068 69.6057L79.4736 68.8061ZM5.88954 77.6256C6.59641 75.6775 7.37821 73.8787 8.21658 72.2159L6.43073 71.3155C5.55622 73.0499 4.74306 74.9217 4.00948 76.9434L5.88954 77.6256ZM49.3268 77.1507C47.8433 75.9871 46.5065 74.5353 45.3829 72.7744L43.6969 73.8502C44.9409 75.7998 46.43 77.4204 48.0926 78.7244L49.3268 77.1507ZM74.1547 75.8904C72.6231 77.1789 70.9101 78.2343 69.0917 79.0363L69.8989 80.8662C71.8848 79.9903 73.7606 78.8356 75.4422 77.4209L74.1547 75.8904ZM57.4038 80.6234C55.4481 80.3113 53.5538 79.696 51.8001 78.7613L50.8594 80.5262C52.8199 81.5712 54.9273 82.2535 57.0886 82.5984L57.4038 80.6234ZM3.52139 86.1642C3.93095 84.1315 4.41372 82.2223 4.95787 80.4281L3.04396 79.8476C2.48076 81.7046 1.98258 83.6758 1.56079 85.7691L3.52139 86.1642ZM66.2773 80.0519C64.3455 80.6016 62.3498 80.8789 60.3715 80.8661L60.3585 82.866C62.5314 82.8801 64.7156 82.5757 66.8247 81.9755L66.2773 80.0519ZM2.30121 94.9764C2.46919 92.9108 2.70436 90.9469 2.99893 89.0792L1.02335 88.7676C0.720683 90.6866 0.479691 92.7004 0.307787 94.8143L2.30121 94.9764ZM2.00716 103.89C1.98334 101.829 2.0193 99.852 2.10979 97.9549L0.112057 97.8597C0.0196216 99.7975 -0.0169671 101.814 0.00729573 103.913L2.00716 103.89ZM2.2338 109.875C2.16962 108.855 2.11907 107.854 2.08164 106.872L0.083087 106.948C0.12116 107.947 0.172554 108.965 0.237753 110L2.2338 109.875Z",
    fill: "white"
  })));
};
var point_ForwardRef = /*#__PURE__*/(0,react.forwardRef)(SvgPoint);
/* harmony default export */ var point = (point_ForwardRef);
// EXTERNAL MODULE: ./components/create-portal.tsx
var create_portal = __webpack_require__(77470);
// EXTERNAL MODULE: ./components/dialogs/dialog.tsx + 2 modules
var dialog = __webpack_require__(95625);
// EXTERNAL MODULE: ./features/product/qr-code-dialog/index.module.scss
var qr_code_dialog_index_module = __webpack_require__(30012);
var qr_code_dialog_index_module_default = /*#__PURE__*/__webpack_require__.n(qr_code_dialog_index_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/qrcode.react@3.1.0_react@18.2.0/node_modules/qrcode.react/lib/esm/index.js
var esm = __webpack_require__(31792);
;// CONCATENATED MODULE: ./features/product/qr-code-dialog/index.tsx





const QrCodeDialog = (param)=>{
    let { isVisible, onClose } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.V, {
        isVisible: isVisible,
        onClose: onClose,
        onClickMask: onClose,
        lockBodyScroll: true,
        title: "分享至微信",
        dialogClassName: classnames_default()((qr_code_dialog_index_module_default()).override, (qr_code_dialog_index_module_default()).dialog),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (qr_code_dialog_index_module_default()).main,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (qr_code_dialog_index_module_default()).qrCode,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(esm/* default */.ZP, {
                        value: window.location.href,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (qr_code_dialog_index_module_default()).content,
                    children: [
                        "打开微信，点击底部的“发现”",
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                        "使用“扫一扫”扫码分享至微信"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (qr_code_dialog_index_module_default()).btn,
                    onClick: ()=>onClose(),
                    children: "继续购物"
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./adapters/sensors/index.tsx + 2 modules
var sensors = __webpack_require__(64068);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-web_sensors@1.48.0_next@14.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@kering-technologies/ec_china-package-web_sensors/dist/index.js
var ec_china_package_web_sensors_dist = __webpack_require__(57377);
;// CONCATENATED MODULE: ./features/product/share/index.tsx












const Share = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { productInfo } = param;
    const [isWechat, setIsWechat] = (0,react.useState)(false);
    const { isMobile } = (0,use_breakpoints/* useBreakpoints */.k)();
    const [shareMaskBoxVisible, setShareMaskBoxVisible] = (0,react.useState)(false);
    const shareBoxTime = (0,react.useRef)(null);
    const [isWeChatShareDialogVisible, setIsWeChatShareDialogVisible] = (0,react.useState)(false);
    const { followSocialMedia } = (0,sensors/* useSensors */.D)();
    (0,react.useEffect)(()=>{
        setIsWechat((0,dist_index_esm/* isWeChatBrowser */.X5)());
    }, []);
    // 分享至微信
    const shareToWeChat = (0,react.useCallback)(()=>{
        if ((0,dist_index_esm/* isWeChatBrowser */.X5)()) {
            setShareMaskBoxVisible(true);
            shareBoxTime.current = setTimeout(()=>{
                setShareMaskBoxVisible(false);
            }, 5000);
            return;
        }
        setIsWeChatShareDialogVisible(true);
        followSocialMedia({
            social_platform: ec_china_package_web_sensors_dist/* SocialPlatformEnum */.Qk.WECHAT_CHANNELS
        });
    }, [
        followSocialMedia
    ]);
    const shareToWeiboUrl = (0,react.useCallback)(()=>{
        const title = productInfo.name;
        const imageUrl = productInfo.images[0] ? productInfo.images[0].large || productInfo.images[0].medium : "";
        return "http://service.weibo.com/share/share.php?url=".concat(encodeURIComponent(window.location.href), "&title=").concat(encodeURIComponent(title), "&pic=").concat(encodeURIComponent(imageUrl));
    }, [
        productInfo.images,
        productInfo.name
    ]);
    // 分享至微博
    const shareToWeibo = (0,react.useCallback)(()=>{
        window.open(shareToWeiboUrl());
        followSocialMedia({
            social_platform: ec_china_package_web_sensors_dist/* SocialPlatformEnum */.Qk.WEIBO
        });
    }, [
        followSocialMedia,
        shareToWeiboUrl
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (share_index_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (share_index_module_default()).shareIconGroup,
                children: [
                    "分享至",
                    isWechat || !isMobile ? /*#__PURE__*/ (0,jsx_runtime.jsx)(wechat, {
                        className: (share_index_module_default()).shareIcon,
                        onClick: shareToWeChat
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(weibo, {
                        className: (share_index_module_default()).shareIcon,
                        onClick: shareToWeibo
                    })
                ]
            }),
            shareMaskBoxVisible ? /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (share_index_module_default()).weChatBrowserShare,
                    onClick: ()=>{
                        setShareMaskBoxVisible(false);
                        shareBoxTime.current && clearTimeout(shareBoxTime.current);
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (share_index_module_default()).content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (share_index_module_default()).image,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(point, {
                                    className: (share_index_module_default()).sharingIcon
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (share_index_module_default()).text,
                                children: "点击右上角完成分享"
                            })
                        ]
                    })
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QrCodeDialog, {
                    isVisible: isWeChatShareDialogVisible,
                    onClose: ()=>{
                        setIsWeChatShareDialogVisible(false);
                    }
                })
            })
        ]
    });
});
Share.displayName = "Share";


// EXTERNAL MODULE: ./features/product/components/other-products-modal/index.module.scss
var other_products_modal_index_module = __webpack_require__(24196);
var other_products_modal_index_module_default = /*#__PURE__*/__webpack_require__.n(other_products_modal_index_module);
// EXTERNAL MODULE: ./features/product/components/other-products-swiper/index.module.scss
var other_products_swiper_index_module = __webpack_require__(90480);
var other_products_swiper_index_module_default = /*#__PURE__*/__webpack_require__.n(other_products_swiper_index_module);
// EXTERNAL MODULE: ./features/product-card/index.tsx
var product_card = __webpack_require__(73210);
// EXTERNAL MODULE: ./adapters/gtm-adapter.tsx + 4 modules
var gtm_adapter = __webpack_require__(3054);
;// CONCATENATED MODULE: ./features/product/components/other-products-swiper/index.tsx








const OtherProductsSwiper = (param)=>{
    let { otherStyleProducts, listName = "", productClick } = param;
    const { currentDevice } = (0,use_get_device_type/* useGetDeviceType */.n)();
    const isMobile = currentDevice === use_get_device_type/* DeviceType */.Y.MOBILE;
    const { eeListView, getListName } = (0,gtm_adapter/* useGtm */.u)();
    // GTM埋点：查看产品列表
    (0,react.useEffect)(()=>{
        eeListView({
            productList: otherStyleProducts,
            list: getListName("")
        });
    }, [
        otherStyleProducts,
        eeListView,
        getListName
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((other_products_swiper_index_module_default()).wrapper),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(slide/* Slide */.M, {
            dataList: otherStyleProducts,
            items: (item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(product_card/* ProductCard */.Il, {
                    product: item,
                    index: index,
                    listName: listName,
                    showOnlyOneImage: true,
                    productClick: (product, productIndex)=>{
                        productClick && productClick(product, productIndex);
                    }
                }, index),
            allowTouchMove: true,
            prevArrowClass: (other_products_swiper_index_module_default()).prevArrowClass,
            nextArrowClass: (other_products_swiper_index_module_default()).nextArrowClass,
            slidesPerView: "auto",
            slideArrowVisibleMode: "hidden",
            spaceBetween: 4,
            slidesOffsetBefore: isMobile ? 20 : 32,
            slidesOffsetAfter: isMobile ? 20 : 32
        })
    });
};

;// CONCATENATED MODULE: ./features/product/components/other-products-modal/index.tsx






const OtherProductsModal = (param)=>{
    let { isVisible, onClose, otherStyleProductsData, productClick } = param;
    const { currentDevice } = (0,use_get_device_type/* useGetDeviceType */.n)();
    var _otherStyleProductsData_otherStyleTitle, _otherStyleProductsData_otherStyleSubtitle;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.V, {
            isVisible: isVisible,
            onClose: onClose,
            onClickMask: onClose,
            lockBodyScroll: true,
            dialogClassName: classnames_default()((other_products_modal_index_module_default()).otherProductsModal, (other_products_modal_index_module_default()).dialog),
            customContentClassName: (other_products_modal_index_module_default()).dialogContent,
            position: currentDevice === use_get_device_type/* DeviceType */.Y.DESKTOP ? "right" : "bottom",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (other_products_modal_index_module_default()).title,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (other_products_modal_index_module_default()).text,
                            dangerouslySetInnerHTML: {
                                __html: (_otherStyleProductsData_otherStyleTitle = otherStyleProductsData === null || otherStyleProductsData === void 0 ? void 0 : otherStyleProductsData.otherStyleTitle) !== null && _otherStyleProductsData_otherStyleTitle !== void 0 ? _otherStyleProductsData_otherStyleTitle : ""
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (other_products_modal_index_module_default()).content,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (other_products_modal_index_module_default()).box,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (other_products_modal_index_module_default()).boxTitle,
                                    dangerouslySetInnerHTML: {
                                        __html: (_otherStyleProductsData_otherStyleSubtitle = otherStyleProductsData === null || otherStyleProductsData === void 0 ? void 0 : otherStyleProductsData.otherStyleSubtitle) !== null && _otherStyleProductsData_otherStyleSubtitle !== void 0 ? _otherStyleProductsData_otherStyleSubtitle : ""
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (other_products_modal_index_module_default()).boxProducts,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OtherProductsSwiper, {
                                        otherStyleProducts: otherStyleProductsData.otherStyleProducts,
                                        productClick: productClick
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./components/controls/button.tsx
var controls_button = __webpack_require__(78001);
// EXTERNAL MODULE: ./features/product/components/status-cta/index.module.scss
var status_cta_index_module = __webpack_require__(86013);
var status_cta_index_module_default = /*#__PURE__*/__webpack_require__.n(status_cta_index_module);
// EXTERNAL MODULE: ./contexts/contact-us-config.tsx
var contact_us_config = __webpack_require__(86042);
// EXTERNAL MODULE: ./node_modules/.pnpm/swr@2.2.2_react@18.2.0/node_modules/swr/core/dist/index.mjs
var core_dist = __webpack_require__(88297);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/image.js
var next_image = __webpack_require__(24499);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./adapters/sensors/services/index.ts + 2 modules
var services = __webpack_require__(67893);
;// CONCATENATED MODULE: ./features/product/components/status-cta/index.tsx


















var NO_SELECT_SIZE_TYPE;
(function(NO_SELECT_SIZE_TYPE) {
    NO_SELECT_SIZE_TYPE["none"] = "";
    NO_SELECT_SIZE_TYPE["addToBag"] = "addToBag";
})(NO_SELECT_SIZE_TYPE || (NO_SELECT_SIZE_TYPE = {}));
const STATUS_LABEL_MAP = {
    [dist/* ApiProductStatus */.Qk.UnSellable]: "联系我们",
    [dist/* ApiProductStatus */.Qk.UnSellableWithOtherChannelExclusive]: "至微信官网精品店购买",
    [dist/* ApiProductStatus */.Qk.Regular]: "添加至购物袋",
    [dist/* ApiProductStatus */.Qk.Preorder]: "预售",
    [dist/* ApiProductStatus */.Qk.ShipFromStore]: "紧俏商品",
    [dist/* ApiProductStatus */.Qk.ComingSoon]: "联系我们",
    [dist/* ApiProductStatus */.Qk.OutOfStock]: "联系我们",
    [dist/* ApiProductStatus */.Qk.BackInStock]: "到货提醒",
    [dist/* ApiProductStatus */.Qk.NoPrice]: ""
};
const RETAIL_LABEL = "查询线下店铺情况";
const Unsellable = (param)=>{
    let { productInfo, openFindInStore } = param;
    const router = (0,next_router.useRouter)();
    const { isMobile } = (0,use_get_device_type/* useGetDeviceType */.n)();
    const { contactUsConfig } = (0,contact_us_config/* useContactUsConfig */.c)();
    const phoneRef = (0,react.useRef)(null);
    const onClick = (0,react.useCallback)(()=>{
        if (productInfo.reserveInStore) {
            openFindInStore();
        } else {
            if (isMobile) {
                var _phoneRef_current;
                (_phoneRef_current = phoneRef.current) === null || _phoneRef_current === void 0 ? void 0 : _phoneRef_current.click();
            } else {
                router.push("/contact-us");
            }
        }
    }, [
        isMobile,
        productInfo.reserveInStore,
        openFindInStore,
        router
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* Button */.z, {
                className: (status_cta_index_module_default()).btn,
                isLight: false,
                onClick: onClick,
                children: productInfo.reserveInStore ? RETAIL_LABEL : STATUS_LABEL_MAP[productInfo.status]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                href: "tel:".concat(contactUsConfig === null || contactUsConfig === void 0 ? void 0 : contactUsConfig.contact.phone),
                className: (status_cta_index_module_default()).hidden,
                ref: phoneRef
            })
        ]
    });
};
const UnSellableWithOtherChannelExclusive = (param)=>{
    let { productInfo, openFindInStore } = param;
    var _qrCodeData_data_data, _qrCodeData_data;
    const { isTmallExclusive, isRetailExclusive, id, sku } = productInfo;
    const [isDialogVisible, setIsDialogVisible] = (0,react.useState)(false);
    const { data: qrCodeData, error: qrCodeError } = (0,core_dist/* default */.ZP)([
        "/V2/applet/getUnlimitedQrCode",
        id,
        sku
    ], ()=>dist/* api */.hi.product.getUnlimitedQrCode({
            scene: "id=".concat(productInfo.id, "&sku=").concat(productInfo.sku),
            page: "pages/product-detail/product-detail"
        }));
    if (qrCodeError) console.error("[product-detail][getUnlimitedQrCode]", qrCodeError);
    const { isMobile } = (0,use_get_device_type/* useGetDeviceType */.n)();
    const windowWidth = (0,index_esm/* useWindowWidth */.Lm)();
    const qrCodeSrc = (0,react.useMemo)(()=>{
        var _qrCodeData_data_data, _qrCodeData_data;
        return qrCodeData === null || qrCodeData === void 0 ? void 0 : (_qrCodeData_data = qrCodeData.data) === null || _qrCodeData_data === void 0 ? void 0 : (_qrCodeData_data_data = _qrCodeData_data.data) === null || _qrCodeData_data_data === void 0 ? void 0 : _qrCodeData_data_data.qrcodeImageUrl;
    }, [
        qrCodeData === null || qrCodeData === void 0 ? void 0 : (_qrCodeData_data = qrCodeData.data) === null || _qrCodeData_data === void 0 ? void 0 : (_qrCodeData_data_data = _qrCodeData_data.data) === null || _qrCodeData_data_data === void 0 ? void 0 : _qrCodeData_data_data.qrcodeImageUrl
    ]);
    const qrCodeWidth = (0,react.useMemo)(()=>isMobile && windowWidth ? 160 / 390 * windowWidth : 160, [
        isMobile,
        windowWidth
    ]);
    const onClick = (0,react.useCallback)(async ()=>{
        if (isRetailExclusive) {
            openFindInStore();
        } else {
            setIsDialogVisible(true);
        }
    }, [
        isRetailExclusive,
        openFindInStore
    ]);
    const onClose = (0,react.useCallback)(()=>setIsDialogVisible(false), []);
    return !isTmallExclusive ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* Button */.z, {
                className: (status_cta_index_module_default()).btn,
                isLight: false,
                onClick: onClick,
                children: isRetailExclusive ? RETAIL_LABEL : STATUS_LABEL_MAP[productInfo.status]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.V, {
                    isVisible: isDialogVisible,
                    onClose: onClose,
                    onClickMask: onClose,
                    lockBodyScroll: true,
                    title: "查看官方精品店",
                    children: qrCodeSrc && /*#__PURE__*/ (0,jsx_runtime.jsx)((image_default()), {
                        className: (status_cta_index_module_default()).qrCode,
                        src: qrCodeSrc,
                        alt: "官方精品店二维码",
                        width: qrCodeWidth,
                        height: qrCodeWidth
                    })
                })
            })
        ]
    }) : null;
};
const AddToCart = (param)=>{
    let { addToCart, productInfo, notSelectSize, setNotSelectSize, getIsSelectedSize } = param;
    const { shipFromStoreConfig } = (0,ec_china_package_swr_dist/* useShipFromStoreConfig */.cf)();
    const { preOrder } = (0,gtm_adapter/* useGtm */.u)();
    const { preOrder: sensorsPreOrder } = (0,sensors/* useSensors */.D)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(controls_button/* Button */.z, {
        className: classnames_default()((status_cta_index_module_default()).btn, {
            [(status_cta_index_module_default()).notSelectSize]: notSelectSize === "addToBag"
        }),
        isLight: false,
        onClick: (val)=>{
            addToCart(val);
            if (productInfo.status === dist/* ApiProductStatus */.Qk.Preorder) {
                try {
                    // GTM埋点：预购
                    preOrder({
                        id: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.styleMaterialColor) || ""
                    });
                    sensorsPreOrder({
                        ...(0,services/* getProductBaseInfo */.ND)(productInfo),
                        item_category: (0,services/* getProductCategory */.dB)(productInfo).item_category
                    });
                } catch (e) {
                    console.error("[GTM][preOrder]", e);
                }
            }
        },
        onMouseLeave: ()=>setNotSelectSize === null || setNotSelectSize === void 0 ? void 0 : setNotSelectSize(""),
        onMouseEnter: ()=>getIsSelectedSize(false) && (setNotSelectSize === null || setNotSelectSize === void 0 ? void 0 : setNotSelectSize("addToBag")),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (status_cta_index_module_default()).addToBag,
                children: productInfo.status === dist/* ApiProductStatus */.Qk.ShipFromStore && (shipFromStoreConfig === null || shipFromStoreConfig === void 0 ? void 0 : shipFromStoreConfig.cta) ? shipFromStoreConfig === null || shipFromStoreConfig === void 0 ? void 0 : shipFromStoreConfig.cta : STATUS_LABEL_MAP[productInfo.status]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (status_cta_index_module_default()).selectSize,
                children: "请选择尺码"
            })
        ]
    });
};
const BackInStock = (param)=>{
    let { productInfo, notifyMe, notSelectSize, setNotSelectSize, getIsSelectedSize } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(controls_button/* Button */.z, {
        isLight: false,
        onClick: notifyMe,
        className: classnames_default()((status_cta_index_module_default()).btn, {
            [(status_cta_index_module_default()).notSelectSize]: notSelectSize === "addToBag"
        }),
        onMouseLeave: ()=>setNotSelectSize === null || setNotSelectSize === void 0 ? void 0 : setNotSelectSize(""),
        onMouseEnter: ()=>getIsSelectedSize(false) && (setNotSelectSize === null || setNotSelectSize === void 0 ? void 0 : setNotSelectSize("addToBag")),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (status_cta_index_module_default()).addToBag,
                children: STATUS_LABEL_MAP[productInfo.status]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: (status_cta_index_module_default()).selectSize,
                children: "请选择尺码"
            })
        ]
    });
};
const CTA_MAP = {
    [dist/* ApiProductStatus */.Qk.UnSellable]: Unsellable,
    [dist/* ApiProductStatus */.Qk.UnSellableWithOtherChannelExclusive]: UnSellableWithOtherChannelExclusive,
    [dist/* ApiProductStatus */.Qk.Regular]: AddToCart,
    [dist/* ApiProductStatus */.Qk.Preorder]: AddToCart,
    [dist/* ApiProductStatus */.Qk.ShipFromStore]: AddToCart,
    [dist/* ApiProductStatus */.Qk.ComingSoon]: Unsellable,
    [dist/* ApiProductStatus */.Qk.OutOfStock]: Unsellable,
    [dist/* ApiProductStatus */.Qk.BackInStock]: BackInStock,
    [dist/* ApiProductStatus */.Qk.NoPrice]: null
};
const StatusCta = (props)=>{
    const [notSelectSize, setNotSelectSize] = (0,react.useState)("");
    const Cta = (0,react.useMemo)(()=>CTA_MAP[props.productInfo.status], [
        props.productInfo.status
    ]);
    return Cta ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Cta, {
        ...props,
        setNotSelectSize: setNotSelectSize,
        notSelectSize: notSelectSize
    }) : null;
};
/* harmony default export */ var status_cta = (/*#__PURE__*/(0,react.memo)(StatusCta));

// EXTERNAL MODULE: ./features/checkout/huabei-dialog.module.scss
var huabei_dialog_module = __webpack_require__(34665);
var huabei_dialog_module_default = /*#__PURE__*/__webpack_require__.n(huabei_dialog_module);
;// CONCATENATED MODULE: ./features/checkout/huabei-dialog.tsx





const HuabeiDialog = (param)=>{
    let { isVisible, onClose, title, content } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.V, {
            isVisible: isVisible,
            onClose: onClose,
            onClickMask: onClose,
            lockBodyScroll: true,
            title: title,
            customContentClassName: (huabei_dialog_module_default()).dialogContent,
            dialogClassName: classnames_default()((huabei_dialog_module_default()).override, (huabei_dialog_module_default()).dialog),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (huabei_dialog_module_default()).huabeiDescription,
                dangerouslySetInnerHTML: {
                    __html: content
                }
            })
        })
    });
};

// EXTERNAL MODULE: ./features/product/size-guide-dialog/index.tsx + 1 modules
var size_guide_dialog = __webpack_require__(26749);
// EXTERNAL MODULE: ./contexts/module-height.tsx
var module_height = __webpack_require__(80388);
// EXTERNAL MODULE: ./features/product/components/we-chat-quick-pay/index.module.scss
var we_chat_quick_pay_index_module = __webpack_require__(28901);
var we_chat_quick_pay_index_module_default = /*#__PURE__*/__webpack_require__.n(we_chat_quick_pay_index_module);
// EXTERNAL MODULE: ./hooks/use-we-chat-quick-pay.ts
var use_we_chat_quick_pay = __webpack_require__(89803);
// EXTERNAL MODULE: ./features/product/components/we-chat-quick-pay/dialog.module.scss
var dialog_module = __webpack_require__(8105);
var dialog_module_default = /*#__PURE__*/__webpack_require__.n(dialog_module);
;// CONCATENATED MODULE: ./features/product/components/we-chat-quick-pay/dialog.tsx





const WeChatQuickPayDialog = (param)=>{
    let { isVisible, onClose, title, content } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.V, {
            isVisible: isVisible,
            onClose: onClose,
            onClickMask: onClose,
            lockBodyScroll: true,
            title: title,
            customContentClassName: (dialog_module_default()).dialogContent,
            dialogClassName: classnames_default()((dialog_module_default()).override, (dialog_module_default()).dialog),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                dangerouslySetInnerHTML: {
                    __html: content
                }
            })
        })
    });
};

// EXTERNAL MODULE: ./utils/event-bus.ts
var event_bus = __webpack_require__(24286);
// EXTERNAL MODULE: ./features/category/enum.ts
var category_enum = __webpack_require__(58020);
;// CONCATENATED MODULE: ./features/product/components/we-chat-quick-pay/index.tsx












const WeChatQuickPay = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { productInfo, productStatus, selectedSize, selectedColor, getIsSelectedSize, customizedPlatform, triggerCustomization, openCustomizationDialog } = param;
    const { isTablet, isDesktop } = (0,use_breakpoints/* useBreakpoints */.k)();
    const [isDialogVisible, setIsDialogVisible] = (0,react.useState)(false);
    const [dialogContent, setDialogContent] = (0,react.useState)("");
    const onWeChatPayQrCodeDialogOpen = async (url)=>{
        const content = "<div style='color: #000000;font-size: 14px;line-height: normal;".concat(isDesktop ? "max-width: 160px" : isTablet ? "max-width:160px" : "", "'><img style='width:100%' src='") + url + "' /></div>";
        setDialogContent(content);
        url && onOpenDialog();
    };
    const { getWeChatPayQrCode } = (0,use_we_chat_quick_pay/* useWeChatQuickPay */.p)(selectedSize, selectedColor, // 定制参数
    {
        ...customizedPlatform || {}
    }, onWeChatPayQrCodeDialogOpen);
    const isWeChatQuickPayVisible = (0,react.useMemo)(()=>{
        const isVisibleStatus = [
            dist/* ApiProductStatus */.Qk.Regular,
            dist/* ApiProductStatus */.Qk.Preorder,
            dist/* ApiProductStatus */.Qk.ShipFromStore
        ];
        return isVisibleStatus.some((status)=>status === productStatus);
    }, [
        productStatus
    ]);
    const onClick = async ()=>{
        // step1: 判断是否选择尺码
        if (getIsSelectedSize()) return;
        // step2: 强制定制 校验定制信息
        const isNeedCustomization = await triggerCustomization();
        if (isNeedCustomization) return;
        // step3: 是定制商品 并且有定制信息时 弹出定制条款
        const isCustomizationDialogVisible = openCustomizationDialog({
            isFromQuickPay: true
        });
        if (isCustomizationDialogVisible) return;
        // step3: 打开快捷支付dialog
        getWeChatPayQrCode();
    };
    (0,react.useEffect)(()=>{
        isDialogVisible && services/* wechatQuickPay */.XH({
            product: {
                ...productInfo,
                sku: (selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product.sku) || ""
            }
        });
    }, [
        isDialogVisible,
        productInfo,
        selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product.sku
    ]);
    (0,react.useEffect)(()=>{
        (0,event_bus/* $on */.Zn)(category_enum/* WeChatQuickPayEnum */.t.open, getWeChatPayQrCode);
        return ()=>{
            (0,event_bus/* $off */.M5)(category_enum/* WeChatQuickPayEnum */.t.open, getWeChatPayQrCode);
        };
    }, [
        getWeChatPayQrCode
    ]);
    const onOpenDialog = (0,react.useCallback)(()=>setIsDialogVisible(true), []);
    const onCloseDialog = (0,react.useCallback)(()=>{
        setIsDialogVisible(false);
        (0,event_bus/* $emit */.Qy)(category_enum/* WeChatQuickPayEnum */.t.close);
    }, []);
    return isWeChatQuickPayVisible ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(controls_button/* Button */.z, {
                className: (we_chat_quick_pay_index_module_default()).weChatCta,
                onClick: onClick,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(wechat, {
                        className: (we_chat_quick_pay_index_module_default()).weChatIcon
                    }),
                    "微信快捷支付"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WeChatQuickPayDialog, {
                isVisible: isDialogVisible,
                onClose: onCloseDialog,
                title: "微信快捷支付",
                content: dialogContent
            })
        ]
    }) : null;
});
WeChatQuickPay.displayName = "WeChatQuickPay";


// EXTERNAL MODULE: ./features/product/customization/index.module.scss
var customization_index_module = __webpack_require__(40585);
var customization_index_module_default = /*#__PURE__*/__webpack_require__.n(customization_index_module);
// EXTERNAL MODULE: ./components/fields/form-field-input.tsx
var form_field_input = __webpack_require__(57146);
// EXTERNAL MODULE: ./node_modules/.pnpm/yup@1.2.0/node_modules/yup/index.esm.js
var yup_index_esm = __webpack_require__(99275);
// EXTERNAL MODULE: ./node_modules/.pnpm/@hookform+resolvers@2.9.11_react-hook-form@7.45.4/node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var yup = __webpack_require__(63518);
// EXTERNAL MODULE: ./packages/loading/index.tsx + 1 modules
var loading = __webpack_require__(59830);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-merge-refs@2.0.2/node_modules/react-merge-refs/dist/index.mjs
var react_merge_refs_dist = __webpack_require__(80075);
;// CONCATENATED MODULE: ./features/product/customization/index.tsx













const Customization = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { setCustomized, personalizationRules, smc, onRef } = param;
    var _errors_root;
    const { maxChars, minChars, minCharsMsg, maxCharsMsg, personalizationLabel, initializedPlaceholder, forceMetion, force } = personalizationRules;
    // 当前输入框内容
    const [customizedContent, setCustomizedContent] = (0,react.useState)("");
    // 定制图片
    const [personalizationImg, setPersonalizationImg] = (0,react.useState)();
    const [isComposition, setIsComposition] = (0,react.useState)(false);
    const inputRef = (0,react.useRef)(null);
    const { startLoading, finishLoading } = (0,loading/* useLoading */.r$)();
    var _useContext;
    const { setCustomizedInput, setCustomizedInputValueRef } = (_useContext = (0,react.useContext)(CustomizedInputContext)) !== null && _useContext !== void 0 ? _useContext : {};
    // 验证
    const schema = yup_index_esm/* object */.Ry().shape({
        personalization: yup_index_esm/* string */.Z_().required(force == "1" ? forceMetion : minCharsMsg).max(Number(maxChars), maxCharsMsg).min(Number(minChars), minCharsMsg)
    });
    const { register, formState: { errors }, watch, setValue, trigger, setServerValidationError, setError, clearErrors } = (0,index_esm/* useFormWithServerValidation */.h7)({
        resolver: (0,yup/* yupResolver */.X)(schema),
        mode: "all"
    });
    const watchPersonalization = watch("personalization", "");
    const text = watchPersonalization.toLocaleUpperCase();
    // 获取定制图片
    const getCustomizedProduct = (0,index_esm/* useDebounce */.Nr)(async (value)=>{
        var _personalizationRules_materials_, _personalizationRules_materials;
        const result = await trigger("personalization");
        if (!result) return;
        // 获取定制商品图片
        startLoading();
        clearErrors();
        const { data: res } = await dist/* api */.hi.product.validatePersonalizationText({
            firstLine: value,
            smc,
            materialId: (_personalizationRules_materials = personalizationRules.materials) === null || _personalizationRules_materials === void 0 ? void 0 : (_personalizationRules_materials_ = _personalizationRules_materials[0]) === null || _personalizationRules_materials_ === void 0 ? void 0 : _personalizationRules_materials_.materialId
        });
        if (res === null || res === void 0 ? void 0 : res.status) {
            setPersonalizationImg(res.data);
        } else {
            setServerValidationError("personalization", (res === null || res === void 0 ? void 0 : res.message) || "");
            setError("root.serverError", {
                type: res === null || res === void 0 ? void 0 : res.message
            });
        }
        finishLoading();
    }, 500);
    /** 点击添加购物车时触发校验 验证是否存在serverError */ const triggerCustomization = (0,react.useCallback)(async ()=>{
        var _errors_root;
        const result = await trigger("personalization");
        if (!customizedContent && force !== "1") {
            /** 定制内容不存在并且非强制定制 提交时清空报错 */ !customizedContent && clearErrors();
            return true;
        }
        if (errors === null || errors === void 0 ? void 0 : (_errors_root = errors.root) === null || _errors_root === void 0 ? void 0 : _errors_root.serverError) {
            /** 设置接口返回错误信息（点击添加购物车时 请求接口时设置的错误信息会被清空 此处再次设置） */ setServerValidationError("personalization", errors.root.serverError.type || "");
            return false;
        }
        return result;
    }, [
        clearErrors,
        customizedContent,
        (_errors_root = errors.root) === null || _errors_root === void 0 ? void 0 : _errors_root.serverError,
        force,
        setServerValidationError,
        trigger
    ]);
    (0,react.useImperativeHandle)(onRef, ()=>({
            triggerCustomization
        }));
    (0,react.useEffect)(()=>{
        /** 非强制定制 定制内容为空时清空报错信息 */ !customizedContent && force !== "1" && clearErrors();
        const updatedCustomized = {
            personalizationText: customizedContent,
            personalizationImg: "",
            personalizationImgEcom: "",
            personalizationImgMedium: ""
        };
        /** 定制内容存在 并且无报错 设置定制内容 */ if (customizedContent && !errors.personalization) {
            updatedCustomized.personalizationImg = (personalizationImg === null || personalizationImg === void 0 ? void 0 : personalizationImg.large) || "";
            updatedCustomized.personalizationImgEcom = (personalizationImg === null || personalizationImg === void 0 ? void 0 : personalizationImg.ecom) || "";
            updatedCustomized.personalizationImgMedium = (personalizationImg === null || personalizationImg === void 0 ? void 0 : personalizationImg.medium) || "";
        }
        setCustomized(updatedCustomized);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        clearErrors,
        customizedContent,
        errors.personalization,
        force,
        personalizationImg === null || personalizationImg === void 0 ? void 0 : personalizationImg.ecom,
        personalizationImg === null || personalizationImg === void 0 ? void 0 : personalizationImg.large,
        personalizationImg === null || personalizationImg === void 0 ? void 0 : personalizationImg.medium,
        setCustomized
    ]);
    (0,react.useEffect)(()=>{
        if (isComposition) return;
        setCustomizedContent(text);
        setCustomizedInput === null || setCustomizedInput === void 0 ? void 0 : setCustomizedInput(text);
        if (!text) return;
        getCustomizedProduct(text);
        setValue("personalization", text);
    }, [
        getCustomizedProduct,
        setValue,
        text,
        finishLoading,
        personalizationRules.materials,
        setServerValidationError,
        smc,
        startLoading,
        trigger,
        setCustomizedInput,
        isComposition
    ]);
    (0,react.useEffect)(()=>{
        if (!inputRef.current) return;
        const inputEl = inputRef.current;
        const onCompositionStart = ()=>setIsComposition(true);
        const onCompositionEnd = ()=>setIsComposition(false);
        inputEl.addEventListener("compositionstart", onCompositionStart);
        inputEl.addEventListener("compositionend", onCompositionEnd);
        return ()=>{
            inputEl.removeEventListener("compositionstart", onCompositionStart);
            inputEl.removeEventListener("compositionend", onCompositionEnd);
        };
    }, []);
    (0,react.useEffect)(()=>{
        if (!setCustomizedInputValueRef) return;
        setCustomizedInputValueRef.current = (value)=>setValue("personalization", value);
    }, [
        setCustomizedInputValueRef,
        setValue
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (customization_index_module_default()).inputWrap,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_input/* FormFieldInput */.H, {
                    internalLabel: "添加定制内容",
                    placeholder: initializedPlaceholder,
                    filled: !!watchPersonalization,
                    error: errors === null || errors === void 0 ? void 0 : errors.personalization,
                    ...register("personalization"),
                    onBlur: ()=>{},
                    ref: (0,react_merge_refs_dist/* mergeRefs */.l)([
                        register("personalization").ref,
                        inputRef
                    ]),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: (customization_index_module_default()).size,
                        children: [
                            customizedContent.length,
                            " / ",
                            maxChars
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                vIf: personalizationLabel,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (customization_index_module_default()).personalizationLabel,
                    dangerouslySetInnerHTML: {
                        __html: personalizationLabel || ""
                    }
                })
            })
        ]
    });
});
Customization.displayName = "Customization";

// EXTERNAL MODULE: ./features/seo-h1.tsx
var seo_h1 = __webpack_require__(50335);
;// CONCATENATED MODULE: ./assets/svg/book-mark.svg
var book_mark_path;
var book_mark_excluded = ["title", "titleId"];
function book_mark_extends() { book_mark_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return book_mark_extends.apply(this, arguments); }
function book_mark_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = book_mark_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function book_mark_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var SvgBookMark = function SvgBookMark(_ref, ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = book_mark_objectWithoutProperties(_ref, book_mark_excluded);
  return /*#__PURE__*/react.createElement("svg", book_mark_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, book_mark_path || (book_mark_path = /*#__PURE__*/react.createElement("path", {
    d: "M13.5049 6.85C14.2073 6.15 15.1103 5.75 16.0133 5.75C16.9164 5.75 17.8194 6.15 18.5217 6.85C19.8261 8.25 19.8261 10.55 18.5217 11.95L12.0001 18.25L5.47827 11.95C4.17391 10.55 4.17391 8.25 5.47827 6.85C6.18063 6.15 7.08365 5.75 7.98667 5.75C8.88969 5.75 9.79272 6.15 10.4951 6.85L12.0001 8.35L13.5049 6.85Z",
    stroke: "black"
  })));
};
var book_mark_ForwardRef = /*#__PURE__*/(0,react.forwardRef)(SvgBookMark);
/* harmony default export */ var book_mark = (book_mark_ForwardRef);
// EXTERNAL MODULE: ./assets/svg/book-mark-full.svg
var book_mark_full = __webpack_require__(61868);
// EXTERNAL MODULE: ./features/product/other-sizes/index.module.scss
var other_sizes_index_module = __webpack_require__(26714);
var other_sizes_index_module_default = /*#__PURE__*/__webpack_require__.n(other_sizes_index_module);
// EXTERNAL MODULE: ./features/product/other-sizes/accordion-expand-animation/index.module.scss
var accordion_expand_animation_index_module = __webpack_require__(92038);
var accordion_expand_animation_index_module_default = /*#__PURE__*/__webpack_require__.n(accordion_expand_animation_index_module);
;// CONCATENATED MODULE: ./hooks/use-valid-ref-value.ts

/**
 * 挂载时获取有效的ref以实现副作用
 * @param targetRef 目标ref
 * @param callback 回调函数
 * @param interval 检测ref的间隔时间, ms
 */ function useValidRefValue(targetRef, callback) {
    let interval = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 50;
    const cbRef = (0,react.useRef)();
    (0,react.useEffect)(()=>{
        cbRef.current = callback;
    }, [
        callback
    ]);
    (0,react.useEffect)(()=>{
        const timer = setInterval(()=>{
            var _cbRef_current;
            if (!targetRef.current) return;
            clearInterval(timer);
            (_cbRef_current = cbRef.current) === null || _cbRef_current === void 0 ? void 0 : _cbRef_current.call(cbRef, targetRef.current);
        }, interval);
        return ()=>clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}
/* harmony default export */ var use_valid_ref_value = (useValidRefValue);

// EXTERNAL MODULE: ./assets/svg/arrow-down.svg
var arrow_down = __webpack_require__(3974);
;// CONCATENATED MODULE: ./features/product/other-sizes/accordion-expand-animation/index.tsx







const AccordionExpandAnimation = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { buttonComponent, panelComponent, visible, buttonProps, panelClassName, wrapperClassNames } = props;
    const [height, setHeight] = (0,react.useState)(0);
    const [showPanel, setShowPanel] = (0,react.useState)(visible);
    const panelMeasureRef = (0,react.useRef)(null);
    const observerRef = (0,react.useRef)();
    // 避免闭包的影响
    const visibleRef = (0,react.useRef)(visible);
    (0,react.useEffect)(()=>{
        var _panelMeasureRef_current;
        var _panelMeasureRef_current_offsetHeight;
        setHeight(visible ? (_panelMeasureRef_current_offsetHeight = (_panelMeasureRef_current = panelMeasureRef.current) === null || _panelMeasureRef_current === void 0 ? void 0 : _panelMeasureRef_current.offsetHeight) !== null && _panelMeasureRef_current_offsetHeight !== void 0 ? _panelMeasureRef_current_offsetHeight : 0 : 0);
        // 避免闭包的影响
        visibleRef.current = visible;
    }, [
        visible
    ]);
    // 挂载时监听高度
    use_valid_ref_value(panelMeasureRef, (panelMeasure)=>{
        observerRef.current = new ResizeObserver((entries)=>{
            var _entries__contentRect_height;
            setHeight(visibleRef.current ? (_entries__contentRect_height = entries[0].contentRect.height) !== null && _entries__contentRect_height !== void 0 ? _entries__contentRect_height : 0 : 0);
        });
        observerRef.current.observe(panelMeasure);
    });
    (0,react.useEffect)(()=>()=>{
            var _observerRef_current;
            return (_observerRef_current = observerRef.current) === null || _observerRef_current === void 0 ? void 0 : _observerRef_current.disconnect();
        }, []);
    (0,react.useEffect)(()=>{
        async function inner() {
            await (0,dist_index_esm/* wait */.Dc)(500);
            setShowPanel(false);
        }
        if (visible) {
            setShowPanel(true);
        } else if (visibleRef.current) {
            inner();
        }
    }, [
        visible
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()((accordion_expand_animation_index_module_default()).wrapper, wrapperClassNames),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (accordion_expand_animation_index_module_default()).buttonWrapper,
                ...buttonProps,
                children: [
                    buttonComponent,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* default */.Z, {
                        className: classnames_default()((accordion_expand_animation_index_module_default()).icon, {
                            [(accordion_expand_animation_index_module_default()).open]: height !== 0
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()((accordion_expand_animation_index_module_default()).panelWrapper, {
                    [(accordion_expand_animation_index_module_default()).invisible]: !visible,
                    [(accordion_expand_animation_index_module_default()).visible]: visible
                }, panelClassName),
                style: {
                    height
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    ref: panelMeasureRef,
                    className: classnames_default()((accordion_expand_animation_index_module_default()).content, {
                        [(accordion_expand_animation_index_module_default()).contentInvisible]: !visible
                    }),
                    children: showPanel && panelComponent
                })
            })
        ]
    });
});
AccordionExpandAnimation.displayName = "AccordionExpandAnimation";

// EXTERNAL MODULE: ./features/product/other-sizes/other-sizes-list/index.module.scss
var other_sizes_list_index_module = __webpack_require__(52085);
var other_sizes_list_index_module_default = /*#__PURE__*/__webpack_require__.n(other_sizes_list_index_module);
// EXTERNAL MODULE: ./components/aspect-ratio-box.tsx
var aspect_ratio_box = __webpack_require__(54279);
;// CONCATENATED MODULE: ./features/product/other-sizes/other-sizes-list/index.tsx











const OtherSizesList = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { list = [], selectedColor } = param;
    const { isTablet, isDesktop, isLargeDesktop, currentDevice } = (0,use_get_device_type/* useGetDeviceType */.n)();
    const router = (0,next_router.useRouter)();
    const windowWidth = (0,index_esm/* useWindowWidth */.Lm)();
    const handleLink = (0,react.useCallback)((item)=>{
        // 如果当前点击的商品卡片链接和顶部地址栏的链接一样  并且  不等于 当前选中颜色的url 链接的话，就重新reload。
        if ("/products".concat(item.url) === router.asPath && "/products".concat(item.url) !== "/products".concat(selectedColor.product.url)) {
            router.reload();
        }
    }, [
        router,
        selectedColor
    ]);
    if (!windowWidth) return null;
    return list.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classnames_default()((other_sizes_list_index_module_default()).wrapper),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(slide/* Slide */.M, {
                firstOrLastArrowVisibleMode: true,
                spaceBetween: 4,
                swiperSlideClassName: (other_sizes_list_index_module_default()).swiperSlideClassName,
                slidesPerView: isLargeDesktop ? 3 : isDesktop ? 2.2 : isTablet ? 3 : 2.5,
                dataList: list,
                items: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                        href: "/products".concat(item.url),
                        className: classnames_default()((other_sizes_list_index_module_default()).link),
                        onClick: ()=>handleLink(item),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classnames_default()((other_sizes_list_index_module_default()).image, item.isSelected ? (other_sizes_list_index_module_default()).isSelected : ""),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(aspect_ratio_box/* AspectRatioBox */.U, {
                                    ratio: isLargeDesktop ? 127 / 160 : isDesktop ? 120 / 150 : isTablet ? 170 / 212 : 160 / 200,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                                        src: item.image,
                                        alt: item.label,
                                        style: {
                                            objectFit: "contain"
                                        }
                                    })
                                })
                            }),
                            item.label && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (other_sizes_list_index_module_default()).label,
                                children: item.label
                            })
                        ]
                    }),
                allowTouchMove: true,
                prevArrowClass: (other_sizes_list_index_module_default()).prevArrowClass,
                nextArrowClass: (other_sizes_list_index_module_default()).nextArrowClass,
                slideArrowVisibleMode: // 移动端不显示箭头
                isDesktop || isLargeDesktop ? "hoverVisible" : "hidden"
            })
        }, "otherSizesList" + currentDevice + (selectedColor.product.smc || ""))
    }) : null;
});
OtherSizesList.displayName = "OtherSizesList";

;// CONCATENATED MODULE: ./features/product/other-sizes/index.tsx





const OtherSizes = (props)=>{
    var _otherSizes_find, _otherSizes_find1;
    const { selectedColor } = props;
    // 其他尺寸
    const [isOtherSizesUnfold, setIsOtherSizesUnfold] = (0,react.useState)(false);
    const otherSizes = (0,react.useMemo)(()=>{
        var _selectedColor_product;
        return ((_selectedColor_product = selectedColor.product) === null || _selectedColor_product === void 0 ? void 0 : _selectedColor_product.otherSizes) || [];
    }, [
        selectedColor.product
    ]);
    // 后端名字有点问题，dropdown是前端需要显示的label，label是当前选中的value的中文值
    const valueData = (otherSizes === null || otherSizes === void 0 ? void 0 : (_otherSizes_find = otherSizes.find((item)=>item.isSelected)) === null || _otherSizes_find === void 0 ? void 0 : _otherSizes_find.label) || "";
    const labelData = (otherSizes === null || otherSizes === void 0 ? void 0 : (_otherSizes_find1 = otherSizes.find((item)=>item.isSelected)) === null || _otherSizes_find1 === void 0 ? void 0 : _otherSizes_find1.dropdown) || "";
    const ButtonComponent = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (other_sizes_index_module_default()).titleWrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: (other_sizes_index_module_default()).label,
                    dangerouslySetInnerHTML: {
                        __html: labelData
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    className: (other_sizes_index_module_default()).value,
                    children: valueData
                })
            ]
        });
    };
    (0,react.useEffect)(()=>{
        if (!otherSizes.length) {
            setIsOtherSizesUnfold(false);
        }
    }, [
        otherSizes
    ]);
    if (!otherSizes.length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: !!otherSizes && otherSizes.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionExpandAnimation, {
            wrapperClassNames: (other_sizes_index_module_default()).otherSizeWrapper,
            visible: isOtherSizesUnfold,
            buttonComponent: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonComponent, {}),
            buttonProps: {
                onClick: ()=>setIsOtherSizesUnfold(!isOtherSizesUnfold)
            },
            panelComponent: /*#__PURE__*/ (0,jsx_runtime.jsx)(OtherSizesList, {
                list: otherSizes,
                selectedColor: selectedColor
            }),
            panelClassName: (other_sizes_index_module_default()).otherSizePanel
        })
    });
};
/* harmony default export */ var other_sizes = (/*#__PURE__*/(0,react.memo)(OtherSizes));

;// CONCATENATED MODULE: ./features/product/product-detail-info/index.tsx


































/**
 * @description 箭头加文字
 * @param {string} customClass 自定义类名
 * @param {string} text 文案
 * @param {() => void} [onClick] 点击事件
 */ const ArrowText = (param)=>{
    let { customClass, text, onClick, isArrowVisible = true } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((product_detail_info_index_module_default()).alignCenter, customClass),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
            className: isArrowVisible ? (product_detail_info_index_module_default()).isArrowVisible : "",
            onClick: ()=>isArrowVisible && (onClick === null || onClick === void 0 ? void 0 : onClick()),
            children: [
                text,
                isArrowVisible && /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_right/* default */.Z, {})
            ]
        })
    });
};
const ProductDetailInfo = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { setProductData, product, productInfo, onRef, setIsInformationDialogVisible, setIsPreviewDialogVisible, addToCart, setSelectedSize, setSelectedColor, setSelectedPantaboots, selectedSize, selectedPantaboots, isPantaboots, selectedColor, isOpenSelect, setIsOpenSelect, openFindInStore, notifyMe, setCustomizedContent, getIsSelectedSize, customizedPlatform, openCustomizationDialog, setInStorePersonalizationDialogVisible, designatedStore, isWishlistValidating, isRequestingWishlist, toggleWishlist, wishlistItem, onSizeSelectBlur } = param;
    var _selectedSize_product, _selectedPantaboots_product, _nameRef_current, _product_otherStyleProducts, _selectedColor_attribute_association, _product_sizeChartData, _productInfo_personalizationRules, _product_sizeChartData1;
    const { shipFromStoreConfig } = (0,ec_china_package_swr_dist/* useShipFromStoreConfig */.cf)();
    const [priceIntoView, setPriceIntoView] = (0,react.useState)(false);
    // 花呗dialog
    const [isHuabeiVisible, setIsHuabeiVisible] = (0,react.useState)(false);
    // 尺码指南dialog
    const [isSizeGuideVisible, setIsSizeGuideVisible] = (0,react.useState)(false);
    // 移动端  name模块是否fixed
    const [isFixed, setIsFixed] = (0,react.useState)(false);
    const { topHeight } = (0,module_height/* useModuleHeight */.l)();
    const nameRef = (0,react.useRef)(null);
    const router = (0,next_router.useRouter)();
    const { selectVariation } = (0,sensors/* useSensors */.D)();
    // 定制表单ref
    const customizationRef = (0,react.useRef)(null);
    // 标识元素  用于标识产品名称部分是否完全进入可视区域
    const signRef = (0,react.useRef)(null);
    // 其他产品弹窗展示
    const [otherProductsModalVisible, setOtherProductsModalVisible] = (0,react.useState)(false);
    // 监听标识元素是否进入可视区域
    (0,use_element_into_view/* useElementIntoView */.R)({
        element: signRef.current,
        callBack: setPriceIntoView
    });
    // GTM 埋点
    const { showProductDetails, showShippingReturns, showSizeGuide, select_variation } = (0,gtm_adapter/* useGtm */.u)();
    const { showProductDetails: sensorsShowProductDetails, showShippingReturns: sensorsShowShippingReturns, showSizeGuide: sensorsShowSizeGuide } = (0,sensors/* useSensors */.D)();
    /**
     * GTM showProductDetails事件，点击产品详情
     *
     * @return {void} 此函数不返回任何内容。
     */ const gtmShowProductDetails = ()=>{
        try {
            var _productInfo_size, _selectedSize_product_size, _selectedSize_product, _selectedSize_product1;
            const item_stock = (productInfo === null || productInfo === void 0 ? void 0 : productInfo.status) === dist/* ApiProductStatus */.Qk.Preorder ? "pre order" : (productInfo === null || productInfo === void 0 ? void 0 : productInfo.status) === dist/* ApiProductStatus */.Qk.Regular ? "in stock" : "sold out";
            showProductDetails({
                id: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.styleMaterialColor) || "",
                productStock: item_stock,
                productSize: (productInfo === null || productInfo === void 0 ? void 0 : (_productInfo_size = productInfo.size) === null || _productInfo_size === void 0 ? void 0 : _productInfo_size.label) || "",
                productColorId: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.styleMaterialColor) || "",
                productColor: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.colorEn) || ""
            });
            sensorsShowProductDetails({
                item_category: (0,services/* getProductCategory */.dB)(productInfo).item_category,
                item_size: (selectedSize === null || selectedSize === void 0 ? void 0 : (_selectedSize_product = selectedSize.product) === null || _selectedSize_product === void 0 ? void 0 : (_selectedSize_product_size = _selectedSize_product.size) === null || _selectedSize_product_size === void 0 ? void 0 : _selectedSize_product_size.label) || "",
                item_color_id: productInfo.colorCodeId || "",
                item_color: ((productInfo === null || productInfo === void 0 ? void 0 : productInfo.colorEn) || "").toLocaleLowerCase(),
                item_stock,
                ...(0,services/* getProductBaseInfo */.ND)({
                    ...productInfo,
                    sku: (selectedSize === null || selectedSize === void 0 ? void 0 : (_selectedSize_product1 = selectedSize.product) === null || _selectedSize_product1 === void 0 ? void 0 : _selectedSize_product1.sku) || ""
                })
            });
        } catch (e) {
            console.error("[GTM][showProductDetails]", e);
        }
    };
    /**
     * GTM showShippingReturns事件，发货退货触发
     *
     * @return {void} 此函数不返回任何内容。
     */ const gtmShowShippingReturns = ()=>{
        var _selectedSize_product;
        showShippingReturns({
            id: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.styleMaterialColor) || ""
        });
        sensorsShowShippingReturns({
            item_category: (0,services/* getProductCategory */.dB)(productInfo).item_category,
            ...(0,services/* getProductBaseInfo */.ND)({
                ...productInfo,
                sku: (selectedSize === null || selectedSize === void 0 ? void 0 : (_selectedSize_product = selectedSize.product) === null || _selectedSize_product === void 0 ? void 0 : _selectedSize_product.sku) || ""
            })
        });
    };
    /**
     * 去客户服务页面
     *
     * @return {void} 此函数不返回任何内容。
     */ const goToCustomerCare = ()=>{
        router.push("/customer-care");
    };
    (0,react.useImperativeHandle)(onRef, ()=>({
            nameRef: ()=>nameRef.current
        }));
    const selectColor = (0,react.useCallback)((color)=>{
        setSelectedColor(color);
    }, [
        setSelectedColor
    ]);
    const setSignScrollTopFun = (0,index_esm/* useDebounce */.Nr)(()=>{
        var _signRef_current;
        const signTop = ((_signRef_current = signRef.current) === null || _signRef_current === void 0 ? void 0 : _signRef_current.getBoundingClientRect().top) || 0;
        const fixed = !priceIntoView && (signTop > topHeight || !!(product === null || product === void 0 ? void 0 : product.miniProductsEnabled) && signTop === 0);
        setIsFixed(fixed);
    }, 10);
    (0,react.useEffect)(()=>{
        setSignScrollTopFun();
    }, [
        setSignScrollTopFun,
        priceIntoView,
        product === null || product === void 0 ? void 0 : product.miniProductsEnabled,
        topHeight
    ]);
    const otherStyleProductsData = (0,react.useMemo)(()=>{
        return {
            otherStyleProducts: product.otherStyleProducts,
            otherStyleTitle: product.otherStyleTitle,
            otherStyleSubtitle: product.otherStyleSubtitle
        };
    }, [
        product === null || product === void 0 ? void 0 : product.otherStyleProducts,
        product === null || product === void 0 ? void 0 : product.otherStyleTitle,
        product === null || product === void 0 ? void 0 : product.otherStyleSubtitle
    ]);
    const tags = (0,react.useMemo)(()=>{
        const { uniqueTag, additionalTags, customTags } = productInfo;
        return [
            ...uniqueTag ? [
                uniqueTag
            ] : [],
            ...additionalTags,
            ...customTags.slice(0, 3)
        ];
    }, [
        productInfo
    ]);
    // 切换其他产品弹窗展示
    const toggleOtherProductsModalVisible = function() {
        let val = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        return setOtherProductsModalVisible(val);
    };
    // 花呗
    const onOpenHuabei = (0,react.useCallback)(()=>setIsHuabeiVisible(true), []);
    const onCloseHuabei = (0,react.useCallback)(()=>setIsHuabeiVisible(false), []);
    // 尺码指南
    const onOpenSizeGuide = (0,react.useCallback)(()=>{
        setIsSizeGuideVisible(true);
        try {
            var _selectedSize_product;
            // GTM埋点：尺码指南
            showSizeGuide({
                id: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.styleMaterialColor) || ""
            });
            sensorsShowSizeGuide({
                item_category: (0,services/* getProductCategory */.dB)(productInfo).item_category,
                ...(0,services/* getProductBaseInfo */.ND)({
                    ...productInfo,
                    sku: (selectedSize === null || selectedSize === void 0 ? void 0 : (_selectedSize_product = selectedSize.product) === null || _selectedSize_product === void 0 ? void 0 : _selectedSize_product.sku) || ""
                })
            });
        } catch (e) {
            console.error("[GTM][showSizeGuide]", e);
        }
    }, [
        showSizeGuide,
        productInfo,
        sensorsShowSizeGuide,
        selectedSize === null || selectedSize === void 0 ? void 0 : (_selectedSize_product = selectedSize.product) === null || _selectedSize_product === void 0 ? void 0 : _selectedSize_product.sku
    ]);
    const onCloseSizeGuide = (0,react.useCallback)(()=>setIsSizeGuideVisible(false), []);
    // 定制 校验定制信息
    const triggerCustomization = (0,react.useCallback)(async ()=>{
        var _customizationRef_current;
        const result = await ((_customizationRef_current = customizationRef.current) === null || _customizationRef_current === void 0 ? void 0 : _customizationRef_current.triggerCustomization());
        if (!result && (productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization)) {
            (0,dist_index_esm/* scrollToErrorMessage */.jZ)();
            return true;
        }
        return false;
    }, [
        productInfo
    ]);
    // 添加购物车
    const addShoppingCart = (0,react.useCallback)(async ()=>{
        // 没有选择尺码并且不是U码 时打开尺码选择框
        if (getIsSelectedSize()) return;
        const isNeedCustomization = await triggerCustomization();
        // 定制商品 校验定制信息
        if (isNeedCustomization && (productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization)) return;
        addToCart({});
    }, [
        addToCart,
        getIsSelectedSize,
        productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization,
        triggerCustomization
    ]);
    const { setActiveColorIndex, setActivePantabootsIndex } = useProductDetail();
    (0,react.useEffect)(()=>{
        const colorList = isPantaboots ? product.pantabootsChildren : product.children;
        const index = (0,dist_index_esm/* arrayOrEmpty */.sq)(colorList).findIndex((item)=>{
            var _item_product, _selectedColor_product;
            return (item === null || item === void 0 ? void 0 : (_item_product = item.product) === null || _item_product === void 0 ? void 0 : _item_product.parentId) === (selectedColor === null || selectedColor === void 0 ? void 0 : (_selectedColor_product = selectedColor.product) === null || _selectedColor_product === void 0 ? void 0 : _selectedColor_product.parentId);
        });
        setActiveColorIndex(index);
    }, [
        setActiveColorIndex,
        selectedColor,
        isPantaboots,
        product.pantabootsChildren,
        product.children
    ]);
    (0,react.useEffect)(()=>{
        if (isPantaboots) {
            const pantabootsList = selectedColor.children;
            const index = (0,dist_index_esm/* arrayOrEmpty */.sq)(pantabootsList).findIndex((item)=>{
                var _item_product, _selectedPantaboots_product;
                return (item === null || item === void 0 ? void 0 : (_item_product = item.product) === null || _item_product === void 0 ? void 0 : _item_product.parentId) === (selectedPantaboots === null || selectedPantaboots === void 0 ? void 0 : (_selectedPantaboots_product = selectedPantaboots.product) === null || _selectedPantaboots_product === void 0 ? void 0 : _selectedPantaboots_product.parentId);
            });
            setActivePantabootsIndex(index);
        }
    }, [
        selectedColor,
        isPantaboots,
        setActivePantabootsIndex,
        selectedPantaboots === null || selectedPantaboots === void 0 ? void 0 : (_selectedPantaboots_product = selectedPantaboots.product) === null || _selectedPantaboots_product === void 0 ? void 0 : _selectedPantaboots_product.parentId
    ]);
    var _shipFromStoreConfig_description;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(by_breakpoints/* ByBreakpoints */.W, {
                breakpoints: [
                    "mobile",
                    "tablet"
                ],
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                    vIf: product === null || product === void 0 ? void 0 : product.miniProductsEnabled,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ColorSwatch, {
                        product: product,
                        colorList: isPantaboots ? product.pantabootsChildren : product.children,
                        selectColor: selectColor,
                        selectedColor: selectedColor,
                        setSelectedPantaboots: setSelectedPantaboots,
                        isPantaboots: isPantaboots,
                        setSelectedSize: setSelectedSize,
                        setProductData: setProductData
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()((product_detail_info_index_module_default()).wrapper),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(by_breakpoints/* ByBreakpoints */.W, {
                        breakpoints: [
                            "mobile",
                            "tablet"
                        ],
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classnames_default()(isFixed ? "" : (product_detail_info_index_module_default()).hidden),
                                style: {
                                    height: (_nameRef_current = nameRef.current) === null || _nameRef_current === void 0 ? void 0 : _nameRef_current.clientHeight
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                ref: nameRef,
                                className: classnames_default()((product_detail_info_index_module_default()).nameAndPrice, // 标识元素从下往上进入可视区域时取消fixed 向上滚动超出可视区域时不fixed
                                isFixed ? (product_detail_info_index_module_default()).fixed : ""),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(seo_h1/* SeoH1 */.f, {
                                        className: (product_detail_info_index_module_default()).name,
                                        children: productInfo === null || productInfo === void 0 ? void 0 : productInfo.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: (product_detail_info_index_module_default()).colorAndPriceWrap,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: productInfo === null || productInfo === void 0 ? void 0 : productInfo.color.colorCn
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: (product_detail_info_index_module_default()).price,
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        children: productInfo === null || productInfo === void 0 ? void 0 : productInfo.price
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                                                        vIf: productInfo === null || productInfo === void 0 ? void 0 : productInfo.hasSpecialPrice,
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: (product_detail_info_index_module_default()).orgPrice,
                                                            children: productInfo === null || productInfo === void 0 ? void 0 : productInfo.orgPrice
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classnames_default()((product_detail_info_index_module_default()).signTop)
                            }),
                            (product === null || product === void 0 ? void 0 : product.miniProductsEnabled) ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                ref: signRef
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classnames_default()((product_detail_info_index_module_default()).sign)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(by_breakpoints/* ByBreakpoints */.W, {
                        breakpoints: [
                            "desktop"
                        ],
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (product_detail_info_index_module_default()).nameAndPrice,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (product_detail_info_index_module_default()).nameWrapper,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(seo_h1/* SeoH1 */.f, {
                                            className: (product_detail_info_index_module_default()).name,
                                            children: productInfo === null || productInfo === void 0 ? void 0 : productInfo.name
                                        }),
                                        (!isWishlistValidating || isRequestingWishlist) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (product_detail_info_index_module_default()).wishlist,
                                            onClick: toggleWishlist,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(book_mark, {
                                                    className: classnames_default()((product_detail_info_index_module_default()).empty, {
                                                        [(product_detail_info_index_module_default()).hidden]: wishlistItem
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(book_mark_full/* default */.Z, {
                                                    className: classnames_default()((product_detail_info_index_module_default()).full, {
                                                        [(product_detail_info_index_module_default()).visible]: wishlistItem
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (product_detail_info_index_module_default()).price,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: productInfo === null || productInfo === void 0 ? void 0 : productInfo.price
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                                            vIf: productInfo === null || productInfo === void 0 ? void 0 : productInfo.hasSpecialPrice,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: (product_detail_info_index_module_default()).orgPrice,
                                                children: productInfo === null || productInfo === void 0 ? void 0 : productInfo.orgPrice
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (product_detail_info_index_module_default()).colorContainer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classnames_default()((product_detail_info_index_module_default()).otherHeader),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(by_breakpoints/* ByBreakpoints */.W, {
                                        breakpoints: [
                                            "desktop"
                                        ],
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            children: productInfo === null || productInfo === void 0 ? void 0 : productInfo.color.colorCn
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                                        vIf: product === null || product === void 0 ? void 0 : (_product_otherStyleProducts = product.otherStyleProducts) === null || _product_otherStyleProducts === void 0 ? void 0 : _product_otherStyleProducts.length,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowText, {
                                            text: "其他风格",
                                            customClass: (product_detail_info_index_module_default()).otherHeaderArrow,
                                            onClick: ()=>{
                                                toggleOtherProductsModalVisible(true);
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(by_breakpoints/* ByBreakpoints */.W, {
                                breakpoints: [
                                    "desktop"
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                                    vIf: product === null || product === void 0 ? void 0 : product.miniProductsEnabled,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ColorSwatch, {
                                        product: product,
                                        colorList: isPantaboots ? product.pantabootsChildren : product.children,
                                        selectColor: selectColor,
                                        selectedColor: selectedColor,
                                        setSelectedPantaboots: setSelectedPantaboots,
                                        isPantaboots: isPantaboots,
                                        setSelectedSize: setSelectedSize,
                                        setProductData: setProductData
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OtherProductsModal, {
                            isVisible: otherProductsModalVisible,
                            otherStyleProductsData: otherStyleProductsData,
                            onClose: ()=>toggleOtherProductsModalVisible(false),
                            productClick: (productClickItem)=>{
                                try {
                                    // GTM埋点：点击其他产品
                                    select_variation({
                                        productFirstVariation: productInfo.styleMaterialColor || productInfo.parentSku || productInfo.sku || "",
                                        productSecondVariation: productClickItem.sku || ""
                                    });
                                    selectVariation({
                                        item_first_variation: productInfo.name || "",
                                        item_second_variation: productClickItem.name || ""
                                    });
                                } catch (e) {
                                    console.error("[GTM][select_variation]", e);
                                }
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                        vIf: productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Customization, {
                            personalizationRules: productInfo.personalizationRules,
                            setCustomized: setCustomizedContent,
                            smc: productInfo.smc,
                            onRef: customizationRef
                        })
                    }),
                    ((_selectedColor_attribute_association = selectedColor.attribute.association) === null || _selectedColor_attribute_association === void 0 ? void 0 : _selectedColor_attribute_association.url) ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (product_detail_info_index_module_default()).genderWrapper,
                        children: [
                            "女士",
                            "男士"
                        ].map((gender)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: (0,dist_index_esm/* pathJoin */.Dy)("/products", selectedColor.attribute.association.url),
                                className: classnames_default()((product_detail_info_index_module_default()).gender, {
                                    [(product_detail_info_index_module_default()).active]: selectedColor.product.rootCategory === gender
                                }),
                                children: [
                                    gender,
                                    "尺码"
                                ]
                            }, gender))
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectSize, {
                        product: product,
                        setProductData: setProductData,
                        setSelectedSize: setSelectedSize,
                        setSelectedPantaboots: setSelectedPantaboots,
                        selectedSize: selectedSize,
                        selectedPantaboots: selectedPantaboots,
                        isPantaboots: isPantaboots,
                        selectedColor: selectedColor,
                        setIsOpenSelect: setIsOpenSelect,
                        isOpenSelect: isOpenSelect,
                        onBlur: onSizeSelectBlur
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                        vIf: (_product_sizeChartData = product.sizeChartData) === null || _product_sizeChartData === void 0 ? void 0 : _product_sizeChartData.length,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowText, {
                            customClass: (product_detail_info_index_module_default()).sizeGuide,
                            text: "尺码指南",
                            onClick: onOpenSizeGuide
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(other_sizes, {
                        selectedColor: selectedColor
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                        vIf: productInfo === null || productInfo === void 0 ? void 0 : productInfo.description,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classnames_default()((product_detail_info_index_module_default()).description, /** 不存在尺码时 隐藏上边距 */ (selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.children[0].attribute.label) === "U" || !(selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.children.length) ? (product_detail_info_index_module_default()).hiddenMargin : ""),
                            dangerouslySetInnerHTML: {
                                __html: productInfo === null || productInfo === void 0 ? void 0 : productInfo.description
                            },
                            onClick: ()=>setIsPreviewDialogVisible === null || setIsPreviewDialogVisible === void 0 ? void 0 : setIsPreviewDialogVisible(true)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                        vIf: productInfo.huabei.length > 0 && productInfo.huabeiCTA && productInfo.huabeiDisplayStyle !== dist/* HuaBeiDisplayType */.LN.doNotShow,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowText, {
                            customClass: (product_detail_info_index_module_default()).huabei,
                            text: productInfo.huabeiCTA,
                            onClick: onOpenHuabei,
                            isArrowVisible: !!(productInfo.huabeiTitle && productInfo.huabeiDescription && productInfo.huabeiDisplayStyle === dist/* HuaBeiDisplayType */.LN.notifyWithPop)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                        vIf: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalize) && !!(designatedStore === null || designatedStore === void 0 ? void 0 : designatedStore.length),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowText, {
                            customClass: (product_detail_info_index_module_default()).personalize,
                            text: "个性化定制",
                            onClick: ()=>{
                                setInStorePersonalizationDialogVisible(true);
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                        vIf: productInfo.status === dist/* ApiProductStatus */.Qk.ShipFromStore && (shipFromStoreConfig === null || shipFromStoreConfig === void 0 ? void 0 : shipFromStoreConfig.description),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (product_detail_info_index_module_default()).shipFromStoreDescription,
                            dangerouslySetInnerHTML: {
                                __html: (_shipFromStoreConfig_description = shipFromStoreConfig === null || shipFromStoreConfig === void 0 ? void 0 : shipFromStoreConfig.description) !== null && _shipFromStoreConfig_description !== void 0 ? _shipFromStoreConfig_description : ""
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(status_cta, {
                        productInfo,
                        addToCart: addShoppingCart,
                        openFindInStore,
                        notifyMe,
                        getIsSelectedSize
                    }),
                    (product === null || product === void 0 ? void 0 : product.enableQuickPay) && /*#__PURE__*/ (0,jsx_runtime.jsx)(WeChatQuickPay, {
                        productInfo: productInfo,
                        productStatus: productInfo === null || productInfo === void 0 ? void 0 : productInfo.status,
                        selectedSize: selectedSize,
                        selectedColor: selectedColor,
                        getIsSelectedSize: getIsSelectedSize,
                        customizedPlatform: customizedPlatform,
                        triggerCustomization: triggerCustomization,
                        openCustomizationDialog: openCustomizationDialog
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                        vIf: productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (product_detail_info_index_module_default()).statement,
                            dangerouslySetInnerHTML: {
                                __html: (productInfo === null || productInfo === void 0 ? void 0 : (_productInfo_personalizationRules = productInfo.personalizationRules) === null || _productInfo_personalizationRules === void 0 ? void 0 : _productInfo_personalizationRules.return) || ""
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                        vIf: tags.length > 0,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (product_detail_info_index_module_default()).tagWrapper,
                            children: tags.map((tag, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: tag !== null && tag !== void 0 ? tag : ""
                                    }
                                }, "".concat(index, "-").concat(tag)))
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: footerMenu({
                            productInfo,
                            setIsPreviewDialogVisible,
                            setIsInformationDialogVisible,
                            openFindInStore,
                            product,
                            gtmShowProductDetails,
                            gtmShowShippingReturns,
                            goToCustomerCare
                        }).map((item, index)=>!item.isHidden && /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowText, {
                                    customClass: (product_detail_info_index_module_default()).footerMenuItem,
                                    text: item.title,
                                    onClick: item === null || item === void 0 ? void 0 : item.action
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Share, {
                        productInfo: productInfo
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(HuabeiDialog, {
                title: productInfo === null || productInfo === void 0 ? void 0 : productInfo.huabeiTitle,
                content: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.huabeiDescription) || "",
                isVisible: isHuabeiVisible,
                onClose: onCloseHuabei
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(size_guide_dialog/* SizeGuideDialog */.X, {
                isVisible: isSizeGuideVisible,
                onClose: onCloseSizeGuide,
                sizeChartData: (_product_sizeChartData1 = product.sizeChartData) === null || _product_sizeChartData1 === void 0 ? void 0 : _product_sizeChartData1[0]
            })
        ]
    });
});
ProductDetailInfo.displayName = "ProductDetailInfo";


// EXTERNAL MODULE: ./features/footer/index.tsx + 4 modules
var footer = __webpack_require__(69148);
// EXTERNAL MODULE: ./components/client-only.tsx
var client_only = __webpack_require__(80887);
// EXTERNAL MODULE: ./utils/constant.ts
var constant = __webpack_require__(64825);
// EXTERNAL MODULE: ./utils/path-join.ts
var path_join = __webpack_require__(10792);
// EXTERNAL MODULE: ./features/product/components/complete-the-look/index.module.scss
var complete_the_look_index_module = __webpack_require__(29131);
var complete_the_look_index_module_default = /*#__PURE__*/__webpack_require__.n(complete_the_look_index_module);
// EXTERNAL MODULE: ./adapters/sensors/use-view-item-list.tsx
var use_view_item_list = __webpack_require__(37569);
// EXTERNAL MODULE: ./adapters/sensors/use-map-sensors-events.ts + 7 modules
var use_map_sensors_events = __webpack_require__(94278);
;// CONCATENATED MODULE: ./features/product/components/complete-the-look/index.tsx















const getProductDetailLink = (item)=>{
    if (!item.url) return "";
    return "".concat((0,path_join/* pathJoin */.D)("/products", item.url, "?listName=productDetail"));
};
const SlideItem = (param)=>{
    let { item, isTablet, isMobile, index, moduleName = "", isFromUpSell, mainProductName, onClick } = param;
    var _item_imageList, _item_imageList1;
    const imgUrl = (isTablet || isMobile ? item === null || item === void 0 ? void 0 : (_item_imageList = item.imageList) === null || _item_imageList === void 0 ? void 0 : _item_imageList.mobileImageList[0] : item === null || item === void 0 ? void 0 : (_item_imageList1 = item.imageList) === null || _item_imageList1 === void 0 ? void 0 : _item_imageList1.desktopImageList[0]) || "";
    const imageAlt = "".concat(constant/* BrandName */.rV, " ").concat(item.name);
    const wrapperRef = (0,use_view_item_list/* useViewItemList */.A)(item, index + 1, moduleName, isFromUpSell, mainProductName);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
        href: getProductDetailLink(item),
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ref: wrapperRef,
            className: (complete_the_look_index_module_default()).image,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                priority: true,
                src: imgUrl,
                alt: imageAlt,
                style: {
                    objectFit: "contain"
                }
            })
        })
    });
};
const CompleteTheLook = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { product, mainProductName = "", isFromUpSell = true, moduleName = "Recommended matching" } = param;
    var _product_relatedProducts;
    const { currentDevice } = (0,use_get_device_type/* useGetDeviceType */.n)();
    const isMobile = currentDevice === use_get_device_type/* DeviceType */.Y.MOBILE;
    const isTablet = currentDevice === use_get_device_type/* DeviceType */.Y.TABLET;
    const [activityIndex, setActivityIndex] = (0,react.useState)(0);
    const { selectItem } = (0,use_map_sensors_events/* useMapSensorsEvents */.U)();
    const onSlideChange = (index)=>{
        setActivityIndex(index);
    };
    const isLoop = (0,react.useMemo)(()=>{
        var _product_relatedProducts;
        return (product === null || product === void 0 ? void 0 : (_product_relatedProducts = product.relatedProducts) === null || _product_relatedProducts === void 0 ? void 0 : _product_relatedProducts.length) > 1;
    }, [
        product === null || product === void 0 ? void 0 : (_product_relatedProducts = product.relatedProducts) === null || _product_relatedProducts === void 0 ? void 0 : _product_relatedProducts.length
    ]);
    const trackClickProduct = (item, itemIndex)=>{
        item && selectItem(item, itemIndex);
        item && isFromUpSell && services/* clickModuleProduct */.X9({
            product: item,
            itemIndex: itemIndex,
            moduleName,
            mainProductName
        });
    };
    const trackSelectItem = ()=>{
        const item = product === null || product === void 0 ? void 0 : product.relatedProducts[activityIndex];
        item && trackClickProduct(item, activityIndex);
    };
    var _product_relatedProductsAutoplayDuration;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()((complete_the_look_index_module_default()).swiperBox),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (complete_the_look_index_module_default()).title,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (complete_the_look_index_module_default()).titleText,
                    children: product.relatedProductsTitle
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (complete_the_look_index_module_default()).product,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (complete_the_look_index_module_default()).slideWrapper,
                    children: (product === null || product === void 0 ? void 0 : product.relatedProducts) && /*#__PURE__*/ (0,jsx_runtime.jsx)(client_only/* ClientOnly */.q, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(slide/* Slide */.M, {
                            onSlideChange: onSlideChange,
                            dataList: product === null || product === void 0 ? void 0 : product.relatedProducts,
                            loop: isLoop,
                            autoplay: !!(product === null || product === void 0 ? void 0 : product.relatedProductsAutoplayDuration) && isLoop,
                            autoplayDuration: ((_product_relatedProductsAutoplayDuration = product === null || product === void 0 ? void 0 : product.relatedProductsAutoplayDuration) !== null && _product_relatedProductsAutoplayDuration !== void 0 ? _product_relatedProductsAutoplayDuration : 1) * 1000,
                            items: (item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SlideItem, {
                                    item: item,
                                    isTablet: isTablet,
                                    isMobile: isMobile,
                                    index: index,
                                    moduleName: moduleName,
                                    mainProductName: mainProductName,
                                    isFromUpSell: isFromUpSell,
                                    onClick: ()=>trackClickProduct(item, index)
                                }),
                            slideArrowVisibleMode: isTablet || isMobile || !isLoop ? "hidden" : "hoverVisible",
                            slidePaginationHidden: !isLoop,
                            allowTouchMove: true,
                            prevArrowClass: (complete_the_look_index_module_default()).prevArrow,
                            nextArrowClass: (complete_the_look_index_module_default()).nextArrow
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (complete_the_look_index_module_default()).productInfoBox,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                    href: getProductDetailLink(product === null || product === void 0 ? void 0 : product.relatedProducts[activityIndex]),
                    onClick: trackSelectItem,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(product_card/* ProductInfo */.ww, {
                        product: product === null || product === void 0 ? void 0 : product.relatedProducts[activityIndex]
                    })
                })
            })
        ]
    });
});
CompleteTheLook.displayName = "CompleteTheLook";

// EXTERNAL MODULE: ./features/recently-viewed/index.tsx
var recently_viewed = __webpack_require__(1455);
// EXTERNAL MODULE: ./features/recommended-products/index.tsx
var recommended_products = __webpack_require__(18518);
// EXTERNAL MODULE: ./features/recommended-products/constant.ts
var recommended_products_constant = __webpack_require__(51540);
;// CONCATENATED MODULE: ./features/product/product-detail/index.tsx























// 按条件渲染360 按钮
const CappasityBtn = (param)=>{
    let { power360Active, paginationModel, setIsPowerViewer3DDialogVisible, productInfo } = param;
    const { click3D } = (0,sensors/* useSensors */.D)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
        vIf: power360Active,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classnames_default()((index_module_default()).capacity, paginationModel ? (index_module_default()).immobilization : ""),
            onClick: ()=>{
                setIsPowerViewer3DDialogVisible(true);
                click3D({
                    click_origin: "from button",
                    item_category: (0,services/* getProductCategory */.dB)(productInfo).item_category || "",
                    ...(0,services/* getProductBaseInfo */.ND)(productInfo)
                });
            },
            children: "360\xb0"
        })
    });
};
// 根据类型获取渲染的组件
const MediaComponent = (param)=>{
    let { item, index, source = "", handleProductImageClick, videoConfig, currentSwiperIndex, alt, isDesktop } = param;
    var _conditions_find;
    const conditions = [
        {
            check: item.type === "image",
            component: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                className: "".concat((index_module_default()).image),
                src: item[isDesktop ? "large" : "medium"],
                onClick: ()=>{
                    handleProductImageClick(item);
                },
                style: {
                    objectFit: "contain"
                },
                fill: false,
                width: "960",
                height: "1200",
                defaultImage: "/default-image-pdp.svg",
                alt: alt
            })
        },
        {
            check: item.type === "video",
            component: /*#__PURE__*/ (0,jsx_runtime.jsx)(product_detail_video/* ProductDetailVideo */.o, {
                ...videoConfig,
                currentActive: index === currentSwiperIndex,
                source: source
            })
        }
    ];
    return ((_conditions_find = conditions.find((ele)=>ele.check)) === null || _conditions_find === void 0 ? void 0 : _conditions_find.component) || /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
};
const ProductDetail = /*#__PURE__*/ (0,react.memo)((props)=>{
    var _product_upSellProducts, _product_relatedProducts;
    const { productInfo, setCurrentPreviewImageIndex, setImagePreviewShow, setIsPowerViewer3DDialogVisible, product, customizedContent, isWishlistValidating, isRequestingWishlist, toggleWishlist, wishlistItem } = props;
    const { isDesktop } = (0,use_breakpoints/* useBreakpoints */.k)();
    const videoUrl = isDesktop ? productInfo.videoUrl || productInfo.mobileVideoUrl || "" : productInfo.mobileVideoUrl || productInfo.videoUrl || "";
    const posterUrl = isDesktop ? productInfo.videoPosterUrl || productInfo.videoMobilePosterUrl || "" : productInfo.videoMobilePosterUrl || productInfo.videoPosterUrl || "";
    const height = (0,index_esm/* useWindowHeight */.AS)();
    // pagination是否取消fixed
    const [paginationModel, setPaginationModel] = (0,react.useState)(false);
    // 当前pagination index
    const [paginationIndex, setPaginationIndex] = (0,react.useState)(0);
    // 移动端ProductNameHeight
    const [productNameHeight, setProductNameHeight] = (0,react.useState)(0);
    // 当前swiper index
    const [currentSwiperIndex, setCurrentSwiperIndex] = (0,react.useState)(0);
    const productInfoRef = (0,react.useRef)(null);
    const { zoomProduct } = (0,gtm_adapter/* useGtm */.u)();
    const { zoomProduct: sensorsZoomProduct, switchImage: sensorsSwitchImage } = (0,sensors/* useSensors */.D)();
    const preImageIndex = (0,react.useRef)(0);
    const insert = (0,react.useCallback)((list, param)=>{
        let { position, type, key } = param;
        let pos = Number(productInfo[position]);
        if (pos > list.length) pos = list.length + 1;
        list.splice(pos - 1, 0, {
            type,
            key
        });
    }, [
        productInfo
    ]);
    const imageList = (0,react.useMemo)(()=>{
        const list = (customizedContent.personalizationImg ? [
            // 定制化图片添加至image list
            {
                type: "image",
                large: customizedContent.personalizationImg,
                medium: customizedContent.personalizationImgMedium
            },
            ...productInfo.images
        ] : productInfo.images).map((e, i)=>({
                ...e,
                key: e.large,
                type: "image",
                originalIndex: i
            }));
        if (videoUrl) {
            insert(list, {
                position: "videoPosition",
                type: "video",
                key: videoUrl
            });
        }
        return list;
    }, [
        customizedContent.personalizationImg,
        customizedContent.personalizationImgMedium,
        productInfo.images,
        videoUrl,
        insert
    ]);
    const videoConfig = (0,react.useMemo)(()=>{
        return {
            videoUrl: videoUrl,
            posterUrl: posterUrl,
            options: productInfo.video
        };
    }, [
        productInfo.video,
        videoUrl,
        posterUrl
    ]);
    const completeTheLookData = (0,react.useMemo)(()=>{
        return {
            relatedProducts: product.relatedProducts,
            relatedProductsTitle: product.relatedProductsTitle,
            relatedProductsAutoplayDuration: product === null || product === void 0 ? void 0 : product.relatedProductsAutoplayDuration
        };
    }, [
        product
    ]);
    const handleProductImageClick = (0,react.useCallback)((item)=>{
        setCurrentPreviewImageIndex(item.originalIndex);
        setImagePreviewShow(true);
        try {
            var _productInfo_size, _props_selectedSize_product_size, _props_selectedSize_product, _props_selectedSize, _props_selectedSize_product1, _props_selectedSize1;
            const stock = (productInfo === null || productInfo === void 0 ? void 0 : productInfo.isPreOrder) ? "pre order" : (productInfo === null || productInfo === void 0 ? void 0 : productInfo.stock) ? "in stock" : "sold out";
            // GTM埋点：点击图片放大
            zoomProduct({
                productColor: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.colorEn) || "",
                productColorId: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.styleMaterialColor) || "",
                id: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.styleMaterialColor) || "",
                productSize: (productInfo === null || productInfo === void 0 ? void 0 : (_productInfo_size = productInfo.size) === null || _productInfo_size === void 0 ? void 0 : _productInfo_size.label) || "",
                productStock: stock
            });
            sensorsZoomProduct({
                item_category: (0,services/* getProductCategory */.dB)(productInfo).item_category || "",
                item_size: (props === null || props === void 0 ? void 0 : (_props_selectedSize = props.selectedSize) === null || _props_selectedSize === void 0 ? void 0 : (_props_selectedSize_product = _props_selectedSize.product) === null || _props_selectedSize_product === void 0 ? void 0 : (_props_selectedSize_product_size = _props_selectedSize_product.size) === null || _props_selectedSize_product_size === void 0 ? void 0 : _props_selectedSize_product_size.label) || "",
                item_color_id: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.colorCodeId) || "",
                item_color: ((productInfo === null || productInfo === void 0 ? void 0 : productInfo.colorEn) || "").toLocaleLowerCase(),
                item_stock: stock,
                ...(0,services/* getProductBaseInfo */.ND)({
                    ...productInfo,
                    sku: (props === null || props === void 0 ? void 0 : (_props_selectedSize1 = props.selectedSize) === null || _props_selectedSize1 === void 0 ? void 0 : (_props_selectedSize_product1 = _props_selectedSize1.product) === null || _props_selectedSize_product1 === void 0 ? void 0 : _props_selectedSize_product1.sku) || ""
                })
            });
        } catch (e) {
            console.error("[GTM][zoomProduct]", e);
        }
    }, [
        sensorsZoomProduct,
        setCurrentPreviewImageIndex,
        setImagePreviewShow,
        zoomProduct,
        productInfo
    ]);
    //  页面滚动时设置 Pagination的状态以及index
    const handlePaginationStatus = (0,react.useCallback)(()=>{
        if (document.querySelectorAll("." + dialog/* dialogOpenClassName */.u).length) return;
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        // 滚动上去的距离+(页面高度/2)  除于  页面的高度取floor = 当前的index
        const data = (scrollTop + height / 2) / height;
        const index = Math.floor(data);
        // 滚动到最后一张图的一半时 Pagination 跟随页面滚动
        setPaginationModel(data >= imageList.length - 0.5);
        const currentIndex = index >= imageList.length - 1 ? imageList.length - 1 : index;
        setPaginationIndex(currentIndex);
        if (!isNaN(currentIndex) && preImageIndex.current != currentIndex) {
            sensorsSwitchImage();
            preImageIndex.current = currentIndex;
        }
    }, [
        height,
        imageList.length
    ]);
    (0,react.useEffect)(()=>{
        // 在组件挂载后获取子组件的ref值 ipad端需要延迟获取
        setTimeout(()=>{
            var _productInfoRef_current_nameRef, _productInfoRef_current;
            setProductNameHeight((productInfoRef === null || productInfoRef === void 0 ? void 0 : (_productInfoRef_current = productInfoRef.current) === null || _productInfoRef_current === void 0 ? void 0 : (_productInfoRef_current_nameRef = _productInfoRef_current.nameRef()) === null || _productInfoRef_current_nameRef === void 0 ? void 0 : _productInfoRef_current_nameRef.clientHeight) || 0);
        }, 500);
    }, []);
    (0,react.useEffect)(()=>{
        handlePaginationStatus();
        const onScroll = ()=>{
            window.requestAnimationFrame(()=>{
                handlePaginationStatus();
            });
        };
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, [
        handlePaginationStatus
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (index_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (index_module_default()).contentWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (index_module_default()).images,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(by_breakpoints/* ByBreakpoints */.W, {
                                breakpoints: [
                                    "mobile",
                                    "tablet"
                                ],
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: (index_module_default()).slideWrap,
                                    style: productNameHeight ? {
                                        height: height ? "calc(".concat(height, "px - ").concat(productNameHeight, "px)") : "80vh"
                                    } : {
                                        height: "100vh"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(slide/* Slide */.M, {
                                            dataList: imageList,
                                            items: (item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MediaComponent, {
                                                    item: item,
                                                    source: "slide",
                                                    index: index,
                                                    handleProductImageClick: handleProductImageClick,
                                                    videoConfig: videoConfig,
                                                    currentSwiperIndex: currentSwiperIndex,
                                                    alt: productInfo.name,
                                                    isDesktop: isDesktop
                                                }),
                                            slideArrowVisibleMode: "hidden",
                                            // 只有一个时隐藏 Pagination
                                            slidePaginationHidden: imageList.length <= 1,
                                            allowTouchMove: true,
                                            loop: true,
                                            onSlideChange: (index)=>{
                                                setCurrentSwiperIndex(index);
                                                if (!isNaN(index) && preImageIndex.current != index) {
                                                    sensorsSwitchImage();
                                                    preImageIndex.current = index;
                                                }
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CappasityBtn, {
                                            power360Active: productInfo.power360Active,
                                            paginationModel: paginationModel,
                                            setIsPowerViewer3DDialogVisible: setIsPowerViewer3DDialogVisible,
                                            productInfo: productInfo
                                        }),
                                        (!isWishlistValidating || isRequestingWishlist) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (index_module_default()).wishlist,
                                            onClick: toggleWishlist,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(book_mark, {
                                                    className: classnames_default()((index_module_default()).empty, {
                                                        [(index_module_default()).hidden]: wishlistItem
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(book_mark_full/* default */.Z, {
                                                    className: classnames_default()((index_module_default()).full, {
                                                        [(index_module_default()).visible]: wishlistItem
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(by_breakpoints/* ByBreakpoints */.W, {
                                breakpoints: [
                                    "desktop"
                                ],
                                children: [
                                    imageList.map((item, index)=>{
                                        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: (index_module_default()).imageItem,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MediaComponent, {
                                                item: item,
                                                handleProductImageClick: handleProductImageClick,
                                                videoConfig: videoConfig,
                                                currentSwiperIndex: currentSwiperIndex,
                                                alt: productInfo.name,
                                                isDesktop: isDesktop
                                            })
                                        }, item.key + index);
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                                        vIf: imageList.length > 1,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: classnames_default()((index_module_default()).pagination, paginationModel ? (index_module_default()).immobilization : ""),
                                            children: [
                                                paginationIndex + 1,
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: (index_module_default()).divider
                                                }),
                                                imageList.length
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CappasityBtn, {
                                        power360Active: productInfo.power360Active,
                                        paginationModel: paginationModel,
                                        setIsPowerViewer3DDialogVisible: setIsPowerViewer3DDialogVisible,
                                        productInfo: productInfo
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).productInfo,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProductDetailInfo, {
                            ...props,
                            onRef: productInfoRef
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(recently_viewed/* RecentlyViewed */.H, {
                productId: product.id,
                listName: "recentlyViewed_PDP"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                vIf: product === null || product === void 0 ? void 0 : (_product_upSellProducts = product.upSellProducts) === null || _product_upSellProducts === void 0 ? void 0 : _product_upSellProducts.length,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(recommended_products/* RecommendedProducts */.m, {
                    productList: (product === null || product === void 0 ? void 0 : product.upSellProducts) || [],
                    recommendedProductsConfig: recommended_products_constant/* recommendedProductsConfigPC */._
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                vIf: product === null || product === void 0 ? void 0 : (_product_relatedProducts = product.relatedProducts) === null || _product_relatedProducts === void 0 ? void 0 : _product_relatedProducts.length,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CompleteTheLook, {
                    product: completeTheLookData
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(footer/* Footer */.$, {})
        ]
    });
});
ProductDetail.displayName = "ProductDetail";


// EXTERNAL MODULE: ./features/cart/map-to-return-current-attribute.ts
var map_to_return_current_attribute = __webpack_require__(9357);
// EXTERNAL MODULE: ./features/cart/product-details-preview.tsx + 1 modules
var product_details_preview = __webpack_require__(72291);
// EXTERNAL MODULE: ./features/product/shipping-information-dialog/index.module.scss
var shipping_information_dialog_index_module = __webpack_require__(68223);
var shipping_information_dialog_index_module_default = /*#__PURE__*/__webpack_require__.n(shipping_information_dialog_index_module);
;// CONCATENATED MODULE: ./features/product/shipping-information-dialog/index.tsx



const ShippingInformationDialog = (param)=>{
    let { isVisible, onClose, shippingReturn } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.V, {
        isVisible: isVisible,
        onClose: onClose,
        onClickMask: onClose,
        lockBodyScroll: true,
        title: "免费配送与退货服务",
        customContentClassName: (shipping_information_dialog_index_module_default()).dialogContent,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            dangerouslySetInnerHTML: {
                __html: shippingReturn
            }
        })
    });
};

// EXTERNAL MODULE: ./node_modules/.pnpm/swiper@8.4.7/node_modules/swiper/react/swiper-react.js + 15 modules
var swiper_react = __webpack_require__(59164);
// EXTERNAL MODULE: ./node_modules/.pnpm/swiper@8.4.7/node_modules/swiper/swiper.esm.js + 94 modules
var swiper_esm = __webpack_require__(27915);
// EXTERNAL MODULE: ./features/product/image-preview/index.module.scss
var image_preview_index_module = __webpack_require__(43053);
var image_preview_index_module_default = /*#__PURE__*/__webpack_require__.n(image_preview_index_module);
// EXTERNAL MODULE: ./assets/svg/close.svg
var svg_close = __webpack_require__(97682);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-zoom-pan-pinch@3.1.0_react-dom@18.2.0_react@18.2.0/node_modules/react-zoom-pan-pinch/dist/index.esm.js
var react_zoom_pan_pinch_dist_index_esm = __webpack_require__(43318);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-inner-image-zoom@3.0.2_prop-types@15.8.1_react@18.2.0/node_modules/react-inner-image-zoom/es/index.js + 5 modules
var es = __webpack_require__(27540);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-inner-image-zoom@3.0.2_prop-types@15.8.1_react@18.2.0/node_modules/react-inner-image-zoom/lib/InnerImageZoom/styles.css
var styles = __webpack_require__(96319);
// EXTERNAL MODULE: ./assets/svg/arrow.svg
var arrow = __webpack_require__(93429);
// EXTERNAL MODULE: ./utils/pre-load-image.ts
var pre_load_image = __webpack_require__(84314);
;// CONCATENATED MODULE: ./features/product/image-preview/index.tsx


















swiper_esm/* default */.ZP.use([
    swiper_esm/* Pagination */.tl
]);
let _startPositionX;
const PCImage = (param)=>{
    let { imageUrl, afterZoomIn, afterZoomOut } = param;
    const imageRef = (0,react.useRef)(null);
    const defaultImage = "/default-image-pdp.svg";
    const [url, setUrl] = (0,react.useState)(imageUrl || defaultImage);
    const [loaded, setLoaded] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        if (imageUrl) {
            (0,pre_load_image/* preloadImage */.p)(imageUrl, ()=>{
                try {
                    setUrl(defaultImage);
                } catch (error) {
                    console.error("[image-preview][setDefaultImage]", error);
                }
            }, ()=>setLoaded(true));
        }
    }, [
        imageRef,
        imageUrl
    ]);
    (0,react.useEffect)(()=>setLoaded(false), [
        imageUrl
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (image_preview_index_module_default()).imageZoom,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(es/* default */.Z, {
            moveType: "drag",
            src: loaded ? url : defaultImage,
            zoomSrc: url,
            afterZoomIn: afterZoomIn,
            afterZoomOut: afterZoomOut
        })
    });
};
const ImagePreview = (param)=>{
    let { dialogClassName, customContentClassName, isCloseIconVisible = true, isVisible = false, onClose, backgroundColor, images, initialSlide = 0 } = param;
    const bodyScrollLocker = (0,index_esm/* useBodyScrollLocker */.Pr)(isVisible);
    const [swiperDom, setSwiperDom] = (0,react.useState)(null);
    const [swiperDomReady, setSwiperDomReady] = (0,react.useState)(false);
    // eslint-disable-next-line @typescript-eslint/ban-types
    const transformRef = (0,react.useRef)();
    const slideRef = (0,react.useRef)(null);
    const justOnePicture = (0,dist_index_esm/* arrayOrEmpty */.sq)(images).length > 1 ? false : true;
    const height = (0,index_esm/* useWindowHeight */.AS)();
    // 移动端放大操作
    const [isScale, setIsScale] = (0,react.useState)(false);
    // pc端是否放大了
    const [isZoomed, setIsZoomed] = (0,react.useState)(false);
    const windowHeight = (0,index_esm/* useWindowHeightPageScrollDisableRefresh */.EK)();
    const [imagePreviewIndex, setImagePreviewIndex] = (0,react.useState)(initialSlide);
    const { isMobile } = (0,use_breakpoints/* useBreakpoints */.k)();
    const { switchImage: sensorsSwitchImage } = (0,sensors/* useSensors */.D)();
    const realPreIndex = (0,react.useRef)(-1);
    const onPanningStart = (ref)=>{
        _startPositionX = ref.state.positionX;
    };
    const onPanningStop = (ref)=>{
        const { previousScale, positionX } = ref.state;
        const previousScaleResult = previousScale > 0.9 && previousScale <= 1.5;
        // 设置点击操作（放大缩小）
        setIsScale(previousScaleResult);
        if (previousScaleResult && _startPositionX <= positionX - 50) return slidePrev();
        if (previousScaleResult && _startPositionX >= positionX + 50) return slideNext();
    };
    const slidePrev = ()=>swiperDom === null || swiperDom === void 0 ? void 0 : swiperDom.slidePrev();
    const slideNext = ()=>swiperDom === null || swiperDom === void 0 ? void 0 : swiperDom.slideNext();
    const onSlideChange = (swiper)=>{
        var _transformRef_current;
        // 重置图片为正常状态  点击操作重置为点击放大
        setIsScale(true);
        transformRef === null || transformRef === void 0 ? void 0 : (_transformRef_current = transformRef.current) === null || _transformRef_current === void 0 ? void 0 : _transformRef_current.call(transformRef);
        if (realPreIndex.current === swiper.realIndex) return;
        realPreIndex.current = swiper.realIndex;
        sensorsSwitchImage();
    };
    //  页面滚动时设置 Pagination的状态以及index
    const handlePaginationStatus = (0,index_esm/* useDebounce */.Nr)((InitialIndex)=>{
        var _slideRef_current;
        if (InitialIndex) {
            var // 设置初始预览图
            _slideRef_current1;
            (_slideRef_current1 = slideRef.current) === null || _slideRef_current1 === void 0 ? void 0 : _slideRef_current1.scrollTo({
                top: height * InitialIndex
            });
            return;
        }
        const scrollTop = ((_slideRef_current = slideRef.current) === null || _slideRef_current === void 0 ? void 0 : _slideRef_current.scrollTop) || 0;
        // 滚动上去的距离+(页面高度/2)  除于  页面的高度取floor = 当前的index
        const data = (scrollTop + height / 2) / height;
        const index = Math.floor(data);
        // 滚动到最后一张图的一半时 Pagination 跟随页面滚动
        setImagePreviewIndex(index);
        sensorsSwitchImage();
    }, 100);
    (0,react.useEffect)(()=>{
        const slide = slideRef.current;
        handlePaginationStatus(initialSlide);
        const onScroll = ()=>{
            window.requestAnimationFrame(()=>{
                handlePaginationStatus();
            });
        };
        slide === null || slide === void 0 ? void 0 : slide.addEventListener("scroll", onScroll);
        return ()=>slide === null || slide === void 0 ? void 0 : slide.removeEventListener("scroll", onScroll);
    }, [
        handlePaginationStatus,
        initialSlide
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((image_preview_index_module_default()).imagePreview, isVisible ? (image_preview_index_module_default()).dialogVisible : ""),
        style: {
            backgroundColor: backgroundColor || "transparent"
        },
        ref: bodyScrollLocker,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classnames_default()((image_preview_index_module_default()).content, dialogClassName, "image-preview-content", !isMobile ? "body-scroll-lock-ignore" : ""),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classnames_default()((image_preview_index_module_default()).closeIcon, isCloseIconVisible ? (image_preview_index_module_default()).isCloseIconVisible : ""),
                    onClick: ()=>onClose(),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(svg_close/* default */.Z, {
                        className: (image_preview_index_module_default()).icon
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(by_breakpoints/* ByBreakpoints */.W, {
                    breakpoints: [
                        "desktop"
                    ],
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classnames_default()((image_preview_index_module_default()).pcPaginationSlide, isZoomed ? (image_preview_index_module_default()).Zoomed : ""),
                            children: images.map((item, i)=>{
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classnames_default()((image_preview_index_module_default()).item, imagePreviewIndex === i ? (image_preview_index_module_default()).active : ""),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                                        src: (item === null || item === void 0 ? void 0 : item.small_thumbnail) || (item === null || item === void 0 ? void 0 : item.large),
                                        onClick: ()=>{
                                            var // 点击左侧缩略图滚动至缩略图位置
                                            _slideRef_current;
                                            setImagePreviewIndex(i);
                                            (_slideRef_current = slideRef.current) === null || _slideRef_current === void 0 ? void 0 : _slideRef_current.scroll({
                                                top: i * height,
                                                behavior: "smooth"
                                            });
                                        },
                                        style: {
                                            objectFit: "contain"
                                        },
                                        className: (image_preview_index_module_default()).image
                                    })
                                }, i);
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classnames_default()((image_preview_index_module_default()).images, isZoomed ? (image_preview_index_module_default()).hidden : ""),
                            ref: slideRef,
                            children: images.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PCImage, {
                                    imageUrl: item.ecom || item.large,
                                    afterZoomIn: ()=>{
                                        // 放大
                                        setIsZoomed(true);
                                    },
                                    afterZoomOut: ()=>{
                                        // 缩小
                                        setIsZoomed(false);
                                    }
                                }, i))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(by_breakpoints/* ByBreakpoints */.W, {
                    breakpoints: [
                        "mobile",
                        "tablet"
                    ],
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(swiper_react/* Swiper */.tq, {
                            className: classnames_default()((image_preview_index_module_default()).swiper),
                            style: {
                                height: windowHeight
                            },
                            onSwiper: (swiper)=>{
                                setSwiperDom(swiper);
                                setTimeout(()=>{
                                    // onSwiper 会瞬间被调两次，第一次的不是实例，延时一下获取正常
                                    setSwiperDomReady(true);
                                }, 100);
                            },
                            onSlideChange: onSlideChange,
                            loop: !justOnePicture,
                            initialSlide: imagePreviewIndex,
                            pagination: {
                                clickable: true
                            },
                            children: images.map((item, index)=>{
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(swiper_react/* SwiperSlide */.o5, {
                                    className: classnames_default()((image_preview_index_module_default()).swiperSlide, customContentClassName, "slide"),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        style: {
                                            backgroundColor: backgroundColor || "transparent"
                                        },
                                        className: classnames_default()((image_preview_index_module_default()).imageInitialBox),
                                        children: swiperDomReady ? /*#__PURE__*/ (0,jsx_runtime.jsx)(react_zoom_pan_pinch_dist_index_esm/* TransformWrapper */.d$, {
                                            maxScale: 3,
                                            centerZoomedOut: true,
                                            onPanningStart: onPanningStart,
                                            onPanningStop: onPanningStop,
                                            children: (param)=>{
                                                let { zoomIn, resetTransform } = param;
                                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(react_zoom_pan_pinch_dist_index_esm/* TransformComponent */.Uv, {
                                                    wrapperClass: (image_preview_index_module_default()).wrapperClass,
                                                    contentClass: (image_preview_index_module_default()).contentClass,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                        className: classnames_default()((image_preview_index_module_default()).imageInitial),
                                                        onClick: ()=>{
                                                            transformRef.current = resetTransform;
                                                            setIsScale(!isScale);
                                                            if (isScale) {
                                                                // 单击放大
                                                                zoomIn(3);
                                                            } else {
                                                                // 再次单击复原
                                                                resetTransform();
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                                                            src: (item === null || item === void 0 ? void 0 : item.ecom) || (item === null || item === void 0 ? void 0 : item.large),
                                                            style: {
                                                                objectFit: "contain"
                                                            },
                                                            tag: "img"
                                                        })
                                                    })
                                                });
                                            }
                                        }) : null
                                    })
                                }, index);
                            })
                        }),
                        !justOnePicture && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classnames_default()((image_preview_index_module_default()).arrowItem, (image_preview_index_module_default()).prevArrow),
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        slidePrev();
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow/* default */.Z, {
                                        color: "black"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classnames_default()((image_preview_index_module_default()).arrowItem, (image_preview_index_module_default()).nextArrow),
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        slideNext();
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow/* default */.Z, {
                                        color: "black"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};


// EXTERNAL MODULE: ./features/product/power-viewer-3d-dialog/index.tsx
var power_viewer_3d_dialog = __webpack_require__(61253);
// EXTERNAL MODULE: ./contexts/toast/index.tsx
var toast = __webpack_require__(80360);
// EXTERNAL MODULE: ./features/cart/use-cart.ts
var use_cart = __webpack_require__(65335);
// EXTERNAL MODULE: ./contexts/mini-cart.tsx + 1 modules
var mini_cart = __webpack_require__(2140);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/dynamic.js
var dynamic = __webpack_require__(56170);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./features/product/index.module.scss
var product_index_module = __webpack_require__(6497);
var product_index_module_default = /*#__PURE__*/__webpack_require__.n(product_index_module);
// EXTERNAL MODULE: ./features/product/personalization-dialog/index.module.scss
var personalization_dialog_index_module = __webpack_require__(36741);
var personalization_dialog_index_module_default = /*#__PURE__*/__webpack_require__.n(personalization_dialog_index_module);
;// CONCATENATED MODULE: ./features/product/personalization-dialog/index.tsx






const PersonalizationDialog = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { isVisible, onClose, personalizationRules, onSubmit } = param;
    const { disclaimer, disclaimerAllow, disclaimerDeny } = personalizationRules;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* Dialog */.V, {
        isVisible: isVisible,
        onClose: onClose,
        onClickMask: onClose,
        customContentClassName: classnames_default()((personalization_dialog_index_module_default()).override, (personalization_dialog_index_module_default()).dialog),
        lockBodyScroll: true,
        title: "定制条款",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                dangerouslySetInnerHTML: {
                    __html: disclaimer || ""
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* Button */.z, {
                className: (personalization_dialog_index_module_default()).btn,
                isLight: false,
                onClick: ()=>{
                    onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit({
                        isAgreeClause: true
                    });
                },
                children: disclaimerAllow
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* Button */.z, {
                onClick: ()=>onClose(true),
                children: disclaimerDeny
            })
        ]
    });
});
PersonalizationDialog.displayName = "PersonalizationDialog";

// EXTERNAL MODULE: ./features/product/instore-personalization-dialog/index.module.scss
var instore_personalization_dialog_index_module = __webpack_require__(13086);
var instore_personalization_dialog_index_module_default = /*#__PURE__*/__webpack_require__.n(instore_personalization_dialog_index_module);
// EXTERNAL MODULE: ./features/store-locator/store-locator-context.tsx
var store_locator_context = __webpack_require__(25037);
// EXTERNAL MODULE: ./hooks/use-my-geolocation.ts
var use_my_geolocation = __webpack_require__(81422);
// EXTERNAL MODULE: ./features/product/find-in-store/store-list-item.tsx
var store_list_item = __webpack_require__(79588);
;// CONCATENATED MODULE: ./features/product/instore-personalization-dialog/index.tsx


















/**
 * @description 店内个性化服务  测试商品smc - 480585dze0e1000,  后台配置=>Configuration=>D1M=>messageSetting=>Personalize Config
 * @param {InStorePersonalizationDialogProps} { isVisible, onClose }
 */ const InStorePersonalizationDialog = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { isVisible, onClose, designatedStore, product } = param;
    // 门店列表
    const { storeLocatorList, setStoreLocatorList } = (0,store_locator_context/* useStoreLocator */.k)();
    // 配置项
    const [personalizeConfig, setPersonalizeConfig] = (0,react.useState)();
    // 是否在使用 我的位置
    const MyLocationRef = (0,react.useRef)(false);
    //当前选择店铺
    const [currentStore, setCurrentStore] = (0,react.useState)(null);
    // 选择店铺后 是否点击查找
    const [isLookUp, setIsLookUp] = (0,react.useState)(false);
    //查找的门店
    const [lookUpStore, setLookUpStore] = (0,react.useState)(null);
    //error message
    const [errorMessage, setErrorMessage] = (0,react.useState)("");
    const { storeAvailabilityGeolocate } = (0,gtm_adapter/* useGtm */.u)();
    const { storeAvailabilityGeolocate: sensorsStoreAvailabilityGeolocate } = (0,sensors/* useSensors */.D)();
    // 展示的门店列表
    const storeList = (0,react.useMemo)(()=>(isLookUp ? lookUpStore && [
            lookUpStore
        ] : storeLocatorList && (0,dist_index_esm/* arrayOrEmpty */.sq)(storeLocatorList)) || [], [
        isLookUp,
        lookUpStore,
        storeLocatorList
    ]);
    // 滚动至可视区域标识
    const signRef = (0,react.useRef)(null);
    /** 滚动至可视区域 */ const scrollIntoView = (0,react.useCallback)(()=>{
        setTimeout(()=>{
            var _signRef_current;
            (_signRef_current = signRef.current) === null || _signRef_current === void 0 ? void 0 : _signRef_current.scrollIntoView();
        }, 100);
    }, [
        signRef
    ]);
    // 我的位置
    const { getMyGeolocation } = (0,use_my_geolocation/* useMyGeolocation */.S)({
        is_customizable: "1"
    }, scrollIntoView);
    /** 获取Personalize 配置 */ const getPersonalizeConfig = (0,react.useCallback)(async ()=>{
        try {
            const { data } = await dist/* api */.hi.product.getPersonalizeConfig();
            if ((data === null || data === void 0 ? void 0 : data.status) && (data === null || data === void 0 ? void 0 : data.data)) {
                setPersonalizeConfig(data === null || data === void 0 ? void 0 : data.data);
            }
        } catch (error) {
            console.log("[inStore-personalization-dialog][getPersonalizeConfig]", error);
        }
    }, []);
    /**清空查找门店 */ const clearLookUpStore = (0,react.useCallback)(()=>{
        // 清空查找标识
        setIsLookUp(false);
        // 清空选择后查找的门店
        setLookUpStore(null);
        // 清空选择的门店
        setCurrentStore(null);
    }, []);
    /**点击获取我的位置*/ const onClickMyGeolocation = (0,react.useCallback)(()=>{
        MyLocationRef.current = true;
        // 获取我的位置门店
        getMyGeolocation();
        clearLookUpStore();
        setErrorMessage("");
        try {
            // GTM埋点：Geolocate me
            storeAvailabilityGeolocate({
                id: (product === null || product === void 0 ? void 0 : product.styleMaterialColor) || (product === null || product === void 0 ? void 0 : product.parentSku) || (product === null || product === void 0 ? void 0 : product.sku) || ""
            });
            sensorsStoreAvailabilityGeolocate({
                ...(0,services/* getProductBaseInfo */.ND)(product),
                item_category: (0,services/* getProductCategory */.dB)(product).item_category
            });
        } catch (e) {
            console.error("[GTM][storeAvailabilityGeolocate]", e);
        }
    }, [
        clearLookUpStore,
        getMyGeolocation,
        storeAvailabilityGeolocate,
        product
    ]);
    /** 选择门店 */ const onChange = (0,react.useCallback)((value)=>{
        setCurrentStore(value);
        setErrorMessage("");
    }, []);
    /** 查找门店 */ const onClickLookUp = (0,react.useCallback)(()=>{
        if (!currentStore) {
            // 没有选择门店时 拦截
            setErrorMessage("请选择指定门店");
            return;
        }
        setIsLookUp(true) // 查找标识
        ;
        MyLocationRef.current = false;
        setLookUpStore(currentStore) // 设置当前查找门店
        ;
        scrollIntoView();
    }, [
        currentStore,
        scrollIntoView
    ]);
    (0,react.useEffect)(()=>{
        !personalizeConfig && getPersonalizeConfig();
    }, [
        getPersonalizeConfig,
        personalizeConfig
    ]);
    (0,react.useEffect)(()=>{
        // 关闭弹框后 清空查找信息
        if (!isVisible) return;
        clearLookUpStore();
        /**清空store list */ setStoreLocatorList(null);
        // 清除 我的位置标识
        MyLocationRef.current = false;
    }, [
        clearLookUpStore,
        isVisible,
        setStoreLocatorList
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* Dialog */.V, {
            isVisible: isVisible,
            onClose: onClose,
            onClickMask: onClose,
            customContentClassName: classnames_default()((instore_personalization_dialog_index_module_default()).override, (instore_personalization_dialog_index_module_default()).dialog),
            lockBodyScroll: true,
            title: "店内个性化服务",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (instore_personalization_dialog_index_module_default()).image,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                        src: (personalizeConfig === null || personalizeConfig === void 0 ? void 0 : personalizeConfig.imgUrl) || "",
                        style: {
                            objectFit: "contain"
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (instore_personalization_dialog_index_module_default()).marginTop,
                    dangerouslySetInnerHTML: {
                        __html: (personalizeConfig === null || personalizeConfig === void 0 ? void 0 : personalizeConfig.desc) || ""
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_select/* FormFieldSelect */.n, {
                    wrapperClassName: (instore_personalization_dialog_index_module_default()).marginTop,
                    label: "指定门店",
                    placeholder: "请选择指定门店",
                    externalLabel: true,
                    options: designatedStore || [],
                    toDisplay: (item)=>item.name,
                    toIdentity: (item)=>item.id,
                    value: currentStore,
                    onChange: onChange,
                    errorMessage: errorMessage
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classnames_default()((instore_personalization_dialog_index_module_default()).myLocation, (instore_personalization_dialog_index_module_default()).marginTop),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: (instore_personalization_dialog_index_module_default()).text,
                        onClick: onClickMyGeolocation,
                        children: "获取我的位置"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* Button */.z, {
                    className: (instore_personalization_dialog_index_module_default()).btn,
                    onClick: onClickLookUp,
                    children: "查找"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                    vIf: (MyLocationRef.current || isLookUp) && !!storeList.length,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (instore_personalization_dialog_index_module_default()).list,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                ref: signRef
                            }),
                            storeList.map((store, index)=>{
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(store_list_item/* StoreListItem */.O, {
                                    store: store,
                                    storeIndex: index,
                                    inStorePersonalization: true,
                                    storeListItemClassName: (instore_personalization_dialog_index_module_default()).listItem
                                }, store.id);
                            })
                        ]
                    })
                })
            ]
        })
    });
});
InStorePersonalizationDialog.displayName = "InStorePersonalizationDialog";

;// CONCATENATED MODULE: ./adapters/map-product-detail-to-gtm-product.ts
const mapProductDetailToGtmProduct = (productChild)=>{
    return {
        ...productChild,
        // 空白属性 - 埋点未使用
        attributes: [],
        imageList: {
            desktopImageList: [],
            mobileImageList: [],
            changeViewImage: {
                desktopImage: ""
            }
        },
        tag: "",
        isCustomizedTag: false
    };
};

;// CONCATENATED MODULE: ./adapters/map-to-gtm-select-size.ts

const mapToGtmSelectSize = (source)=>{
    var _source_size;
    const selectSize = {
        id: source.styleMaterialColor || (source === null || source === void 0 ? void 0 : source.parentSku) || source.sku || "",
        size: ((_source_size = source.size) === null || _source_size === void 0 ? void 0 : _source_size.label) || "",
        name: source.nameEn || "",
        material: source.materialEn || "",
        packshotType: source.videoUrl ? "video" : "image",
        color: source.colorEn || "",
        colorId: source.colorCodeId || "",
        price: (0,dist_index_esm/* mapPriceToNumber */.R2)(source.hasSpecialPrice ? source.orgPrice : source.price) || 0,
        discountPrice: source.hasSpecialPrice ? (0,dist_index_esm/* mapPriceToNumber */.R2)(source.price) : 0,
        subCategory: source.microCategoryEn || "",
        category: source.superMicroCategoryEn || "",
        topCategory: source.macroCategoryEn || "",
        productCategory: source.superMicroCategoryEn || "",
        macroCategory: source.macroCategoryEn || "",
        microCategory: source.microCategoryEn || "",
        superMicroCategory: source.superMicroCategoryEn || "",
        productSMC: source.smc || "",
        stock: source.isPreOrder ? "pre order" : source.stock ? "in stock" : "sold out",
        productGlobalSMC: source.smc || source.styleMaterialColor || (source === null || source === void 0 ? void 0 : source.parentSku) || source.sku || ""
    };
    return selectSize;
};

// EXTERNAL MODULE: ./contexts/product.tsx
var contexts_product = __webpack_require__(59161);
// EXTERNAL MODULE: ./hooks/use-wishlist.ts + 1 modules
var use_wishlist = __webpack_require__(88651);
// EXTERNAL MODULE: ./utils/token-service.ts
var token_service = __webpack_require__(27602);
// EXTERNAL MODULE: ./utils/delete-query.ts
var delete_query = __webpack_require__(62957);
// EXTERNAL MODULE: ./features/confirm-dialog/index.tsx
var confirm_dialog = __webpack_require__(64812);
// EXTERNAL MODULE: ./hooks/use-sync-callback.ts
var use_sync_callback = __webpack_require__(25488);
// EXTERNAL MODULE: ./hooks/use-effect-only-once.ts
var use_effect_only_once = __webpack_require__(87658);
// EXTERNAL MODULE: ./utils/category-storage.ts
var category_storage = __webpack_require__(36967);
// EXTERNAL MODULE: ./hooks/use-baidu-parameter-tracking.ts
var use_baidu_parameter_tracking = __webpack_require__(14318);
;// CONCATENATED MODULE: ./features/product/index.tsx


































const ProductAddToCartData = "ProductAddToCartData" // 商品加入购物车的数据，主要用于登陆之后的返回重新加购
;








const PurchaseLimitDialog = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(3731), __webpack_require__.e(563)]).then(__webpack_require__.bind(__webpack_require__, 50563)).then((mod)=>mod.PurchaseLimitDialog), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(50563)
            ]
    },
    ssr: false
});
const FindInStoreDialog = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(377), __webpack_require__.e(5694)]).then(__webpack_require__.bind(__webpack_require__, 35694)).then((mod)=>mod.FindInStoreDialog), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(35694)
            ]
    },
    ssr: false
});
const NotifyMeDrawer = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(91), __webpack_require__.e(8975)]).then(__webpack_require__.bind(__webpack_require__, 18975)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(18975)
            ]
    },
    ssr: false
});
const CustomizedInputContext = /*#__PURE__*/ (0,react.createContext)(null);
const ProductDetailWrapper = (props)=>{
    var _product_pantabootsChildren, _wishlistData_data_data, _wishlistData_data, _productInfo_personalizationRules, _defaultSelectedSize_attribute;
    const { product: _product, canonicalUrl } = props;
    const [product, setProductData] = (0,react.useState)(_product);
    // 是否是Pantaboots商品
    const isPantaboots = product === null || product === void 0 ? void 0 : (_product_pantabootsChildren = product.pantabootsChildren) === null || _product_pantabootsChildren === void 0 ? void 0 : _product_pantabootsChildren.length;
    const { defaultSelectedColor, defaultSelectedSize, defaultPantaboots } = isPantaboots ? (0,map_to_return_current_attribute/* mapToReturnCurrentAttributePantaboots */.y)(product) : (0,map_to_return_current_attribute/* mapToReturnCurrentAttribute */.j)(product);
    const [selectedColor, setSelectedColor] = (0,react.useState)(defaultSelectedColor);
    const [selectedSize, setSelectedSize] = (0,react.useState)(defaultSelectedSize || null);
    const [selectedPantaboots, setSelectedPantaboots] = (0,react.useState)(defaultPantaboots || null);
    const { setProduct } = (0,contexts_product/* useProduct */.i)();
    const router = (0,next_router.useRouter)();
    const preSku = (0,react.useRef)("");
    // inside 使用数据
    (0,react.useEffect)(()=>{
        if (defaultSelectedSize) {
            setProduct(defaultSelectedSize.product || {});
            return;
        }
        if (defaultSelectedColor) {
            setProduct(defaultSelectedColor.product || {});
        }
    }, [
        defaultSelectedColor,
        defaultSelectedSize,
        setProduct
    ]);
    // 商品更多详情dialog
    const [isPreviewDialogVisible, setIsPreviewDialogVisible] = (0,react.useState)(false);
    // Shipping Information dialog
    const [isInformationDialogVisible, setIsInformationDialogVisible] = (0,react.useState)(false);
    // 商品预览
    const [imagePreviewShow, setImagePreviewShow] = (0,react.useState)(false);
    // 预览图片的index
    const [currentPreviewImageIndex, setCurrentPreviewImageIndex] = (0,react.useState)(0);
    // 360弹框是否显示
    const [isPowerViewer3DDialogVisible, setIsPowerViewer3DDialogVisible] = (0,react.useState)(false);
    // find in store
    const [findInStoreCityDialogVisible, setFindInStoreCityDialogVisible] = (0,react.useState)(false);
    // notify me
    const [notifyMeDialogVisible, setNotifyMeDialogVisible] = (0,react.useState)(false);
    // 定制条款
    const [personalizationDialogVisible, setPersonalizationDialogVisible] = (0,react.useState)(false);
    // 门店定制
    const [inStorePersonalizationDialogVisible, setInStorePersonalizationDialogVisible] = (0,react.useState)(false);
    // 请求心愿单
    const [isRequestingWishlist, setIsRequestingWishlist] = (0,react.useState)(false);
    // 选择尺码后是否添加心愿单
    const [isWishAfterSelectSize, setIsWishAfterSelectSize] = (0,react.useState)(false);
    // 是否打开尺码选择框
    const [isOpenSelect, setIsOpenSelect] = (0,react.useState)(false);
    // 个性化定制内容
    const [customizedContent, setCustomizedContent] = (0,react.useState)({
        personalizationText: "",
        personalizationImg: "",
        personalizationImgEcom: "",
        personalizationImgMedium: ""
    });
    // 门店个性化 指定门店列表
    const [designatedStore, setDesignatedStore] = (0,react.useState)();
    // 删除心愿单确认弹窗
    const [isDeleteWishlistDialogVisible, setIsDeleteWishlistDialogVisible] = (0,react.useState)(false);
    const { getStoreList, getStoreParams, setStoreLocatorList } = (0,store_locator_context/* useStoreLocator */.k)();
    const [isPurchaseLimitDialogVisible, setIsPurchaseLimitDialogVisible] = (0,react.useState)(false);
    const addToCartFlag = (0,react.useRef)(false);
    const { getTracking } = (0,use_baidu_parameter_tracking/* useBaiduParameterTracking */.m)();
    // TDK 上级目录名称
    const breadcrumbsLen = ((product === null || product === void 0 ? void 0 : product.breadcrumbs) || []).length;
    const preCategoryName = !breadcrumbsLen ? "" : product === null || product === void 0 ? void 0 : product.breadcrumbs[breadcrumbsLen - 1].name;
    (0,react.useEffect)(()=>{
        if (product.breadcrumbs.length) {
            category_storage/* set */.t8(product.breadcrumbs);
        }
    }, [
        product
    ]);
    const { startLoading, finishLoading } = (0,loading/* useLoading */.r$)();
    const { showToast } = (0,toast/* useToast */.p)();
    const { refreshCart, setMobileCart } = (0,use_cart/* useCart */.j)();
    const { setIsMiniCartVisible } = (0,mini_cart/* useMiniCart */.l)();
    const { eeListView, eeProductDetail, addToCart: gtmAddToCart, selectSize, selectColor } = (0,gtm_adapter/* useGtm */.u)();
    const { selectColor: sensorSelectColor, selectSize: sensorSelectSize } = (0,sensors/* useSensors */.D)();
    const { viewItem, addToCart: sensorsAddToCart, removeFromWishlist, addToWishlist: sensorsAddToWishlist } = (0,use_map_sensors_events/* useMapSensorsEvents */.U)();
    (0,use_effect_only_once/* useEffectOnlyOnce */.Z)(()=>{
        var _defaultSelectedSize_product;
        defaultSelectedColor && sensorSelectColor({
            ...defaultSelectedColor,
            product: {
                ...defaultSelectedColor === null || defaultSelectedColor === void 0 ? void 0 : defaultSelectedColor.product,
                sku: (defaultSelectedSize === null || defaultSelectedSize === void 0 ? void 0 : (_defaultSelectedSize_product = defaultSelectedSize.product) === null || _defaultSelectedSize_product === void 0 ? void 0 : _defaultSelectedSize_product.sku) || ""
            }
        });
        defaultSelectedSize && sensorSelectSize(defaultSelectedSize);
    });
    // 是否来自微信快捷支付
    const [isFromWeChatQuickPay, setIsFromWeChatQuickPay] = (0,react.useState)(false);
    // 记录定制化输入信息
    const [customizedInput, setCustomizedInput] = (0,react.useState)("");
    //#region商品数据
    const productInfo = (0,react.useMemo)(()=>(selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product) || (selectedPantaboots === null || selectedPantaboots === void 0 ? void 0 : selectedPantaboots.product) || (selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.product), [
        selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.product,
        selectedPantaboots === null || selectedPantaboots === void 0 ? void 0 : selectedPantaboots.product,
        selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product
    ]);
    // 商品图预览 添加定制图片
    const previewImageList = (0,react.useMemo)(()=>customizedContent.personalizationImg ? [
            // 定制化图片添加至image list
            {
                type: "image",
                large: customizedContent.personalizationImg,
                ecom: customizedContent.personalizationImgEcom
            },
            ...productInfo.images
        ] : productInfo.images, [
        customizedContent.personalizationImg,
        customizedContent.personalizationImgEcom,
        productInfo.images
    ]);
    const getProduct = (0,react.useMemo)(()=>{
        return product;
    }, [
        product
    ]);
    const getProductInfo = (0,react.useMemo)(()=>{
        return productInfo;
    }, [
        productInfo
    ]);
    const getSelectedColor = (0,react.useMemo)(()=>{
        return selectedColor;
    }, [
        selectedColor
    ]);
    const getSelectedSize = (0,react.useMemo)(()=>{
        return selectedSize;
    }, [
        selectedSize
    ]);
    //#end region
    const isUSize = (0,react.useMemo)(()=>{
        var _this;
        return ((_this = isPantaboots ? selectedPantaboots : selectedColor) === null || _this === void 0 ? void 0 : _this.children.filter((item)=>item.attribute.label !== "U").length) === 0;
    }, [
        isPantaboots,
        selectedColor,
        selectedPantaboots
    ]);
    const wishlistIds = (0,react.useMemo)(()=>product.children.reduce((outerAcc, param)=>{
            let { children } = param;
            return [
                ...outerAcc,
                ...children.reduce((innerAcc, param)=>{
                    let { product: prod } = param;
                    return [
                        ...innerAcc,
                        prod.id
                    ];
                }, [])
            ];
        }, []), [
        product.children
    ]);
    const { data: wishlistData, isValidating: isWishlistValidating } = (0,use_wishlist/* useWishlistByIds */.bL)(wishlistIds);
    const wishlistItems = (0,react.useMemo)(()=>{
        var _wishlistData_data_data, _wishlistData_data;
        return wishlistData === null || wishlistData === void 0 ? void 0 : (_wishlistData_data = wishlistData.data) === null || _wishlistData_data === void 0 ? void 0 : (_wishlistData_data_data = _wishlistData_data.data) === null || _wishlistData_data_data === void 0 ? void 0 : _wishlistData_data_data.items;
    }, [
        wishlistData === null || wishlistData === void 0 ? void 0 : (_wishlistData_data = wishlistData.data) === null || _wishlistData_data === void 0 ? void 0 : (_wishlistData_data_data = _wishlistData_data.data) === null || _wishlistData_data_data === void 0 ? void 0 : _wishlistData_data_data.items
    ]);
    const wishlistItem = (0,react.useMemo)(()=>{
        if (!wishlistItems) return null;
        return wishlistItems.find((param)=>{
            let { productId } = param;
            return productId === (selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product.id);
        });
    }, [
        selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product.id,
        wishlistItems
    ]);
    // 一键注册/登录后回到商品详情页时应添加心愿单的sku和定制化信息
    const { skuBackFromRegister, customizedBackFromRegister } = (0,react.useMemo)(()=>({
            skuBackFromRegister: router.query.wishlist,
            customizedBackFromRegister: router.query.customized
        }), [
        router.query.customized,
        router.query.wishlist
    ]);
    // 标识是否是从登录/注册页面跳转过来并且已经添加了心愿单
    const isInWishlistBackFromRegister = (0,react.useRef)(false);
    // 用于设置定制化信息
    const setCustomizedInputValueRef = (0,react.useRef)(null);
    const { mutate } = (0,core_dist/* useSWRConfig */.kY)();
    const { mutate: infiniteMutate } = (0,use_wishlist/* useInfiniteWishlist */.YR)();
    const { addToWishlistTrigger, deleteWishlistTrigger } = (0,use_wishlist/* useWishlistTrigger */.IW)({
        onSettled: async ()=>{
            // 需要等待数量请求是因为header中需要展示数量
            await mutate("/rest/default/V2/wishlist/list", undefined, {
                revalidate: true
            });
            infiniteMutate();
            finishLoading();
            setIsRequestingWishlist(false);
        }
    });
    const addToWishlist = (0,react.useCallback)((size, customized)=>{
        const targetSize = size !== null && size !== void 0 ? size : selectedSize;
        const targetCustomized = customized || customizedInput;
        if (!targetSize) return;
        // 只有登录用户可以添加心愿单
        const isLogin = token_service/* userService */.W.isLoggedIn();
        if (!isLogin) {
            // 若为访客，则跳转登录/注册页
            router.push("/login?returnUrl=".concat(encodeURIComponent("".concat(router.asPath).concat(/.*\?.*/.test(router.asPath) ? "&" : "?", "wishlist=").concat(targetSize.product.sku).concat(customizedInput ? "&customized=".concat(customizedInput) : ""))));
            return;
        }
        setIsRequestingWishlist(true);
        startLoading();
        addToWishlistTrigger({
            product: targetSize.product.parentId,
            super_attribute: {
                // 颜色
                [targetSize.product.color.id]: targetSize.product.color.value,
                // 尺寸
                [targetSize.product.size.id]: targetSize.product.size.value
            },
            wishlistIds,
            ...targetCustomized ? {
                customizedPlatforme: {
                    firstLine: targetCustomized,
                    agree: true
                }
            } : null
        }).then((res)=>{
            var _res_data;
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status) {
                (selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product) && sensorsAddToWishlist(selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product, 0, ec_china_package_web_sensors_dist/* WishlistLocation */.Ag.ProductPage);
            }
        });
    }, [
        addToWishlistTrigger,
        customizedInput,
        router,
        selectedSize,
        sensorsAddToWishlist,
        startLoading,
        wishlistIds
    ]);
    const toggleWishlist = (0,react.useCallback)(()=>{
        // 若已请求，则不再请求
        if (isRequestingWishlist) return;
        if (wishlistItem) {
            // 已经加入心愿单，则从心愿单移除
            setIsDeleteWishlistDialogVisible(true);
        } else if (isUSize || selectedSize) {
            // U码或者已经手动选择了尺码，则直接加入心愿单
            addToWishlist();
        } else {
            // 否则，打开尺码选择弹窗
            setIsOpenSelect(true);
            setIsWishAfterSelectSize(true);
        }
    }, [
        isRequestingWishlist,
        wishlistItem,
        isUSize,
        selectedSize,
        addToWishlist
    ]);
    const composedSetSelectedSize = (0,react.useCallback)((val)=>{
        setSelectedSize(val);
        try {
            // GTM埋点：选中尺寸
            (val === null || val === void 0 ? void 0 : val.product) && selectSize(mapToGtmSelectSize(val.product));
            (val === null || val === void 0 ? void 0 : val.product) && sensorSelectSize(val);
        } catch (e) {
            console.error("[GTM][selectSize]", e);
        }
        if (!isWishAfterSelectSize) return;
        setIsWishAfterSelectSize(false);
        // 只有尚未加入心愿单时才请求加入心愿单
        if (val && typeof (wishlistItems === null || wishlistItems === void 0 ? void 0 : wishlistItems.find((param)=>{
            let { productId } = param;
            return productId === val.product.id;
        })) === "undefined") {
            addToWishlist(val);
        }
    }, [
        addToWishlist,
        isWishAfterSelectSize,
        selectSize,
        wishlistItems
    ]);
    const onSizeSelectBlur = (0,react.useCallback)(()=>setIsWishAfterSelectSize(false), []);
    /**
   * @description 获取是否已选择尺码
   * @param {boolean} [openSelect=true] 是否打开尺码选择框
   * @return {boolean} false 已选择尺码  true 未选择
   */ const getIsSelectedSize = (0,react.useCallback)(function() {
        let openSelect = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        // 没有选择尺码 时打开尺码选择框
        if (!selectedSize) {
            openSelect && setIsOpenSelect(true);
            return true;
        }
        return false;
    }, [
        selectedSize
    ]);
    // 接口所需定制数据格式
    const customizedPlatform = (0,react.useMemo)(()=>{
        var _productInfo_personalizationRules_materials_, _productInfo_personalizationRules_materials, _productInfo_personalizationRules;
        return {
            customizedPlatforme: (customizedContent === null || customizedContent === void 0 ? void 0 : customizedContent.personalizationText) ? {
                agree: true,
                firstLine: customizedContent === null || customizedContent === void 0 ? void 0 : customizedContent.personalizationText,
                personalizationImg: customizedContent === null || customizedContent === void 0 ? void 0 : customizedContent.personalizationImg,
                materialId: ((_productInfo_personalizationRules = productInfo.personalizationRules) === null || _productInfo_personalizationRules === void 0 ? void 0 : (_productInfo_personalizationRules_materials = _productInfo_personalizationRules.materials) === null || _productInfo_personalizationRules_materials === void 0 ? void 0 : (_productInfo_personalizationRules_materials_ = _productInfo_personalizationRules_materials[0]) === null || _productInfo_personalizationRules_materials_ === void 0 ? void 0 : _productInfo_personalizationRules_materials_.materialId) || ""
            } : null
        };
    }, [
        customizedContent === null || customizedContent === void 0 ? void 0 : customizedContent.personalizationImg,
        customizedContent === null || customizedContent === void 0 ? void 0 : customizedContent.personalizationText,
        (_productInfo_personalizationRules = productInfo.personalizationRules) === null || _productInfo_personalizationRules === void 0 ? void 0 : _productInfo_personalizationRules.materials
    ]);
    // 是定制商品 并且有定制信息时 弹出定制条款
    const openCustomizationDialog = (0,react.useCallback)((param)=>{
        let { isAgreeClause = false, isFromQuickPay = false } = param;
        setIsFromWeChatQuickPay(isFromQuickPay);
        if ((productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization) && customizedContent.personalizationText && !isAgreeClause) {
            setPersonalizationDialogVisible(true);
            (0,services/* popinPersonalization */.r4)({
                product: (selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product) ? {
                    ...productInfo,
                    ...selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product
                } : productInfo,
                actionType: ec_china_package_web_sensors_dist/* PopinPersonalizationActionStatusEnum */.n_.ACCESS,
                personalization_location: "add from PDP",
                item_personalization_content: (customizedContent === null || customizedContent === void 0 ? void 0 : customizedContent.personalizationText) || ""
            });
            return true;
        }
        return false;
    }, [
        customizedContent.personalizationText,
        productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization,
        setIsFromWeChatQuickPay
    ]);
    // 添加购物车
    const addToCart = (0,react.useCallback)(async (param)=>{
        let { isAgreeClause = false, autoAddToCart = false } = param;
        if (!autoAddToCart) {
            // 是否同意定制条款
            const isCustomizationDialogVisible = openCustomizationDialog({
                isAgreeClause
            });
            // 自动加入购物车的情况下不需要再走这些if内部了，直接往下进行，因为第一次加购的时候已经判断过了。
            if (isCustomizationDialogVisible) return;
        }
        // 打开微信快捷支付
        if (isFromWeChatQuickPay && !autoAddToCart) {
            (0,event_bus/* $emit */.Qy)(category_enum/* WeChatQuickPayEnum */.t.open);
            setIsFromWeChatQuickPay(false);
            setPersonalizationDialogVisible(false);
            (0,services/* popinPersonalization */.r4)({
                product: (selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product) ? {
                    ...productInfo,
                    ...selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product
                } : productInfo,
                actionType: ec_china_package_web_sensors_dist/* PopinPersonalizationActionStatusEnum */.n_.CLOSE,
                personalization_location: "add from PDP",
                item_personalization_content: (customizedContent === null || customizedContent === void 0 ? void 0 : customizedContent.personalizationText) || ""
            });
            return;
        }
        // 购物车接口 params
        const params = {
            ...selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product.addToCartParams,
            ...customizedPlatform,
            ocpc_data: {
                logidUrl: getTracking()
            }
        };
        startLoading();
        try {
            const { data: res } = await dist/* api */.hi.cart.addToCart(params);
            // 关闭定制条款
            isAgreeClause && setPersonalizationDialogVisible(false);
            isAgreeClause && (0,services/* popinPersonalization */.r4)({
                product: (selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product) ? {
                    ...productInfo,
                    ...selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product
                } : productInfo,
                actionType: ec_china_package_web_sensors_dist/* PopinPersonalizationActionStatusEnum */.n_.CLOSE,
                personalization_location: "add from PDP",
                item_personalization_content: (customizedContent === null || customizedContent === void 0 ? void 0 : customizedContent.personalizationText) || ""
            });
            if (!(res === null || res === void 0 ? void 0 : res.status)) {
                finishLoading();
                if (res === null || res === void 0 ? void 0 : res.quotaControl) {
                    setIsPurchaseLimitDialogVisible(true);
                    return;
                }
                (res === null || res === void 0 ? void 0 : res.message) && showToast(res.message);
                return;
            }
            if (res.status && res.data) {
                var _customizedPlatform_customizedPlatforme;
                setMobileCart(res.data.items);
                try {
                    var _this;
                    // GTM埋点：添加到购物车
                    const _product = (_this = selectedSize || (selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.children[0])) === null || _this === void 0 ? void 0 : _this.product;
                    _product && gtmAddToCart({
                        productInfo: _product,
                        cartLocation: "product page"
                    });
                } catch (e) {
                    console.error("[GTM][addToCart]", e);
                }
                (selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product) && sensorsAddToCart({
                    product: selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product,
                    firstLine: (customizedPlatform === null || customizedPlatform === void 0 ? void 0 : (_customizedPlatform_customizedPlatforme = customizedPlatform.customizedPlatforme) === null || _customizedPlatform_customizedPlatforme === void 0 ? void 0 : _customizedPlatform_customizedPlatforme.firstLine) || "",
                    cart_location: "product page",
                    position: "",
                    isHighDemand: (selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product.status) === dist/* ApiProductStatus */.Qk.ShipFromStore
                });
                refreshCart(()=>{
                    finishLoading();
                    setIsMiniCartVisible(true);
                });
            }
        } catch (error) {
            finishLoading();
            console.log("[product-detail][addToCart]", error);
        }
    }, [
        customizedPlatform,
        finishLoading,
        gtmAddToCart,
        isFromWeChatQuickPay,
        openCustomizationDialog,
        refreshCart,
        selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.children,
        selectedSize,
        setIsMiniCartVisible,
        setMobileCart,
        showToast,
        startLoading
    ]);
    const autoAddToCart = (0,use_sync_callback/* useSyncCallback */.o)(()=>{
        addToCart({
            autoAddToCart: true
        });
    });
    (0,react.useEffect)(()=>{
        (async ()=>{
            var _router_query;
            const isLoggedIn = token_service/* userService */.W.isLoggedIn();
            if (((_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.isLoginCallback) === "1" && isLoggedIn) {
                if (addToCartFlag.current) return;
                addToCartFlag.current = true;
                await (0,dist_index_esm/* wait */.Dc)(200);
                const defaultData = localStorage.getItem(ProductAddToCartData);
                const data = defaultData ? JSON.parse(defaultData) : "";
                if (!data) return;
                setSelectedColor(data.selectedColor);
                if (data.selectedPantaboots) {
                    await (0,dist_index_esm/* wait */.Dc)(200);
                    setSelectedPantaboots(data.selectedPantaboots);
                }
                await (0,dist_index_esm/* wait */.Dc)(200);
                setCustomizedContent(data.customizedContent);
                setSelectedSize(data.selectedSize);
                autoAddToCart();
                localStorage.removeItem(ProductAddToCartData);
                const url = router.query.url.join("/");
                const query = (0,dist_index_esm/* getQueryWithoutUrl */.Z7)(router.query);
                delete query.isLoginCallback;
                const updatedUrl = (0,dist_index_esm/* getUrlWithQuery */.bT)(url, query);
                router.replace(updatedUrl, undefined, {
                    scroll: true,
                    shallow: true
                });
            }
        })();
    }, [
        autoAddToCart,
        router
    ]);
    const closePurchaseLimitDialog = (0,react.useCallback)(()=>{
        setIsPurchaseLimitDialogVisible(false);
    }, []);
    const goToLogin = (0,react.useCallback)(()=>{
        const data = {
            customizedContent,
            selectedSize,
            selectedColor,
            selectedPantaboots
        };
        localStorage.setItem(ProductAddToCartData, JSON.stringify(data));
        closePurchaseLimitDialog();
        router.push("/login?returnUrl=".concat(encodeURIComponent(window.location.pathname + window.location.search + (window.location.search ? "&isLoginCallback=1" : "?isLoginCallback=1"))));
    }, [
        closePurchaseLimitDialog,
        customizedContent,
        router,
        selectedColor,
        selectedSize,
        selectedPantaboots
    ]);
    // Find In Store
    const openFindInStore = (0,react.useCallback)(()=>{
        // 没有选择尺码并且不是U码 时打开尺码选择框
        if (getIsSelectedSize()) return;
        setFindInStoreCityDialogVisible(true);
    }, [
        getIsSelectedSize
    ]);
    //关闭 Find In Store
    const closeFindInStore = (0,react.useCallback)(()=>{
        setFindInStoreCityDialogVisible(false);
    }, []);
    // 到货提醒
    const notifyMe = (0,react.useCallback)(()=>{
        // 没有选择尺码并且不是U码 时打开尺码选择框
        if (getIsSelectedSize()) return;
        setNotifyMeDialogVisible(true);
    }, [
        getIsSelectedSize
    ]);
    const closeNotifyMe = (0,react.useCallback)(()=>{
        setNotifyMeDialogVisible(false);
    }, []);
    // 关闭商品预览
    const onCloseImagePreview = (isVisible)=>{
        setImagePreviewShow(isVisible || false);
    };
    // 关闭 360弹框
    const onClosePowerViewer3DDialog = ()=>{
        setIsPowerViewer3DDialogVisible(false);
    };
    // 关闭定制条框
    const onClosePersonalizationDialog = (0,react.useCallback)((isRefuse)=>{
        setPersonalizationDialogVisible(false);
        setIsFromWeChatQuickPay(false);
        (0,services/* popinPersonalization */.r4)({
            product: (selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product) ? {
                ...productInfo,
                ...selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product
            } : productInfo,
            actionType: isRefuse ? ec_china_package_web_sensors_dist/* PopinPersonalizationActionStatusEnum */.n_.REFUSE : ec_china_package_web_sensors_dist/* PopinPersonalizationActionStatusEnum */.n_.CLOSE,
            personalization_location: "add from PDP",
            item_personalization_content: (customizedContent === null || customizedContent === void 0 ? void 0 : customizedContent.personalizationText) || ""
        });
    }, [
        customizedContent === null || customizedContent === void 0 ? void 0 : customizedContent.personalizationText,
        productInfo,
        selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product
    ]);
    // 关闭定制条框
    const onCloseInStorePersonalizationDialog = (0,react.useCallback)(()=>{
        setInStorePersonalizationDialogVisible(false);
    }, []);
    // reset isFromWeChatQuickPay value
    (0,react.useEffect)(()=>{
        const onCloseWeChatQuickPayDialog = ()=>setIsFromWeChatQuickPay(false);
        (0,event_bus/* $on */.Zn)(category_enum/* WeChatQuickPayEnum */.t.close, onCloseWeChatQuickPayDialog);
        return ()=>{
            (0,event_bus/* $off */.M5)(category_enum/* WeChatQuickPayEnum */.t.close, onCloseWeChatQuickPayDialog);
        };
    }, []);
    (0,react.useEffect)(()=>{
        // 门店定制 查找可定制门店列表 无门店时 不展示入口
        if (productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalize) {
            getStoreParams.current = {
                is_customizable: "1"
            } // 筛选可定制门店
            ;
            getStoreList((value)=>{
                setDesignatedStore(value);
                // 清除store list 防止获取我的位置前 会展示 本次请求数据
                setStoreLocatorList([]);
            });
        }
    }, [
        getStoreList,
        getStoreParams,
        productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalize,
        setStoreLocatorList
    ]);
    // GTM埋点: 产品列表展示
    (0,react.useEffect)(()=>{
        try {
            const gtmProduct = mapProductDetailToGtmProduct(productInfo);
            gtmProduct && eeListView({
                productList: [
                    gtmProduct
                ],
                list: ""
            });
        } catch (e) {
            console.error("[GTM][eeListView]", e);
        }
    }, [
        product,
        eeListView,
        productInfo
    ]);
    // GTM埋点: 产品详细信息
    (0,react.useEffect)(()=>{
        try {
            var _defaultSelectedSize_attribute;
            const listName = router.query.listName;
            eeProductDetail({
                productInfo: {
                    ...mapProductDetailToGtmProduct(productInfo),
                    size: (defaultSelectedSize === null || defaultSelectedSize === void 0 ? void 0 : (_defaultSelectedSize_attribute = defaultSelectedSize.attribute) === null || _defaultSelectedSize_attribute === void 0 ? void 0 : _defaultSelectedSize_attribute.label) || ""
                },
                list: listName
            });
        } catch (e) {
            console.error("[GTM][eeProductDetail]", e);
        }
    }, [
        eeProductDetail,
        router.query.listName,
        productInfo,
        defaultSelectedSize === null || defaultSelectedSize === void 0 ? void 0 : (_defaultSelectedSize_attribute = defaultSelectedSize.attribute) === null || _defaultSelectedSize_attribute === void 0 ? void 0 : _defaultSelectedSize_attribute.label
    ]);
    // 登录/注册回来自动选中sku并添加心愿单
    (0,react.useEffect)(()=>{
        var _this;
        if (!skuBackFromRegister || isInWishlistBackFromRegister.current) return;
        isInWishlistBackFromRegister.current = true;
        if (customizedBackFromRegister) {
            var // 自动设置定制化信息
            _setCustomizedInputValueRef_current;
            (_setCustomizedInputValueRef_current = setCustomizedInputValueRef.current) === null || _setCustomizedInputValueRef_current === void 0 ? void 0 : _setCustomizedInputValueRef_current.call(setCustomizedInputValueRef, customizedBackFromRegister);
        }
        if (isPantaboots) {
            // 如果是pantaboots则还需要选择sku对应的pantaboots
            const autoSelectedPantaboots = selectedColor === null || selectedColor === void 0 ? void 0 : selectedColor.children.find((pantaboots)=>pantaboots.children.find((item)=>item.product.sku === skuBackFromRegister));
            if (!autoSelectedPantaboots) return;
            setSelectedPantaboots(autoSelectedPantaboots);
        }
        const autoSelectedSize = (_this = isPantaboots ? selectedPantaboots : selectedColor) === null || _this === void 0 ? void 0 : _this.children.find((item)=>item.product.sku === skuBackFromRegister);
        if (!autoSelectedSize) return;
        // 自动选中sku
        setSelectedSize(autoSelectedSize);
        addToWishlist(autoSelectedSize, customizedBackFromRegister);
        (0,delete_query/* default */.Z)("wishlist=".concat(skuBackFromRegister));
        (0,delete_query/* default */.Z)("customized=".concat(customizedBackFromRegister));
    }, [
        addToWishlist,
        customizedBackFromRegister,
        isPantaboots,
        selectedColor,
        selectedPantaboots,
        skuBackFromRegister
    ]);
    const handleSetSelectedSize = (0,react.useCallback)((val)=>{
        setSelectedColor(val);
        try {
            var _val_product, _val_product1, _val_product2, _val_product3, _val_product4;
            // GTM埋点：选中颜色
            val.product && selectColor({
                id: (val === null || val === void 0 ? void 0 : (_val_product = val.product) === null || _val_product === void 0 ? void 0 : _val_product.styleMaterialColor) || "",
                productColorId: (val === null || val === void 0 ? void 0 : (_val_product1 = val.product) === null || _val_product1 === void 0 ? void 0 : _val_product1.styleMaterialColor) || "",
                productColor: (val === null || val === void 0 ? void 0 : (_val_product2 = val.product) === null || _val_product2 === void 0 ? void 0 : _val_product2.colorEn) || "",
                productStock: (val === null || val === void 0 ? void 0 : (_val_product3 = val.product) === null || _val_product3 === void 0 ? void 0 : _val_product3.status) === dist/* ApiProductStatus */.Qk.Preorder ? "pre order" : (val === null || val === void 0 ? void 0 : (_val_product4 = val.product) === null || _val_product4 === void 0 ? void 0 : _val_product4.status) === dist/* ApiProductStatus */.Qk.Regular ? "in stock" : "sold out"
            });
            val.product && sensorSelectColor(val);
        } catch (e) {
            console.error("[GTM][selectColor]", e);
        }
    }, [
        selectColor,
        sensorSelectColor
    ]);
    (0,react.useEffect)(()=>{
        var _selectedSize_product;
        const nowSku = selectedSize ? selectedSize === null || selectedSize === void 0 ? void 0 : (_selectedSize_product = selectedSize.product) === null || _selectedSize_product === void 0 ? void 0 : _selectedSize_product.sku : productInfo === null || productInfo === void 0 ? void 0 : productInfo.smc;
        // 防止多次上报
        if (preSku.current !== nowSku) {
            viewItem(productInfo, selectedSize, 0);
            preSku.current = nowSku;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        productInfo
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: product.metaTitle || "圣罗兰".concat(product.name, "_Saint Laurent圣罗兰官方网站 | YSL.CN")
                    }, "title"),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: product.metaDescription || "欢迎访问Saint Laurent圣罗兰官方网站，探索并选购 Saint Laurent 圣罗兰 ".concat(product.name, "。").concat(product.description, "浏览 Saint Laurent圣罗兰官方网站，探索包袋、成衣、鞋履、小皮具和配饰 - YSL.CN")
                    }, "description"),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "keywords",
                        content: product.metaKeywords || "".concat(product.name, ",").concat(preCategoryName, ",圣罗兰")
                    }, "keywords"),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("link", {
                        rel: "canonical",
                        href: "".concat("https://www.ysl.cn", "/products").concat(canonicalUrl)
                    }, "canonical")
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(default_layout/* DefaultLayout */.H, {
                footerVisible: false,
                childrenClassName: (product_index_module_default()).main,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomizedInputContext.Provider, {
                    value: {
                        customizedInput,
                        setCustomizedInput,
                        setCustomizedInputValueRef
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProductDetail, {
                        setProductData: setProductData,
                        product: getProduct,
                        productInfo: getProductInfo,
                        selectedColor: getSelectedColor,
                        selectedSize: getSelectedSize,
                        setSelectedColor: handleSetSelectedSize,
                        setSelectedSize: composedSetSelectedSize,
                        setIsInformationDialogVisible: setIsInformationDialogVisible,
                        setIsPreviewDialogVisible: setIsPreviewDialogVisible,
                        setCurrentPreviewImageIndex: setCurrentPreviewImageIndex,
                        setImagePreviewShow: setImagePreviewShow,
                        setIsPowerViewer3DDialogVisible: setIsPowerViewer3DDialogVisible,
                        addToCart: addToCart,
                        setSelectedPantaboots: setSelectedPantaboots,
                        selectedPantaboots: selectedPantaboots,
                        isPantaboots: !!isPantaboots,
                        isOpenSelect: isOpenSelect,
                        setIsOpenSelect: setIsOpenSelect,
                        openFindInStore: openFindInStore,
                        notifyMe: notifyMe,
                        setCustomizedContent: setCustomizedContent,
                        customizedContent: customizedContent,
                        getIsSelectedSize: getIsSelectedSize,
                        customizedPlatform: customizedPlatform,
                        openCustomizationDialog: openCustomizationDialog,
                        setInStorePersonalizationDialogVisible: setInStorePersonalizationDialogVisible,
                        designatedStore: designatedStore,
                        isWishlistValidating: isWishlistValidating,
                        isRequestingWishlist: isRequestingWishlist,
                        toggleWishlist: toggleWishlist,
                        wishlistItem: wishlistItem,
                        onSizeSelectBlur: onSizeSelectBlur
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(product_details_preview/* ProductDetailsPreviewDialog */.L, {
                isVisible: isPreviewDialogVisible,
                onClose: ()=>{
                    setIsPreviewDialogVisible(false);
                },
                productInfo: productInfo,
                isPdp: true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                vIf: !(productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization) && getProduct.shippingReturn || (productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization) && getProduct.personalizeShippingReturn,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShippingInformationDialog, {
                    isVisible: isInformationDialogVisible,
                    onClose: ()=>{
                        setIsInformationDialogVisible(false);
                    },
                    shippingReturn: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization) ? getProduct.personalizeShippingReturn : getProduct.shippingReturn
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                vIf: imagePreviewShow && (productInfo === null || productInfo === void 0 ? void 0 : productInfo.images),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ImagePreview, {
                    isVisible: imagePreviewShow,
                    backgroundColor: "#f8f7f5",
                    images: previewImageList,
                    initialSlide: currentPreviewImageIndex,
                    onClose: onCloseImagePreview
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                vIf: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.power360Active) && (productInfo === null || productInfo === void 0 ? void 0 : productInfo.power360Id),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(power_viewer_3d_dialog/* PowerViewer3DDialog */.x, {
                    isVisible: isPowerViewer3DDialogVisible,
                    onClose: onClosePowerViewer3DDialog,
                    power360Id: productInfo === null || productInfo === void 0 ? void 0 : productInfo.power360Id
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FindInStoreDialog, {
                isVisible: findInStoreCityDialogVisible,
                product: product,
                defaultSelectedColor: getSelectedColor,
                defaultSelectedSize: getSelectedSize,
                defaultSelectedPantaboots: selectedPantaboots,
                onClose: closeFindInStore,
                isPantaboots: !!isPantaboots
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                vIf: productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalization,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonalizationDialog, {
                    isVisible: personalizationDialogVisible,
                    onClose: onClosePersonalizationDialog,
                    personalizationRules: productInfo.personalizationRules,
                    onSubmit: addToCart
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                vIf: (productInfo === null || productInfo === void 0 ? void 0 : productInfo.personalize) && !!(designatedStore === null || designatedStore === void 0 ? void 0 : designatedStore.length),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InStorePersonalizationDialog, {
                    product: productInfo,
                    isVisible: inStorePersonalizationDialogVisible,
                    onClose: onCloseInStorePersonalizationDialog,
                    designatedStore: designatedStore
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NotifyMeDrawer, {
                isVisible: notifyMeDialogVisible,
                onClose: closeNotifyMe,
                productInfo: productInfo,
                setNotifyMeDialogVisible: setNotifyMeDialogVisible
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(confirm_dialog/* ConfirmDialog */.Q, {
                isVisible: isDeleteWishlistDialogVisible,
                onClose: ()=>setIsDeleteWishlistDialogVisible(false),
                onCancel: ()=>setIsDeleteWishlistDialogVisible(false),
                title: "心愿单",
                htmlText: "您确定要从心愿单删除此商品吗？",
                onConfirm: async ()=>{
                    var _res_data, _res_data1;
                    setIsDeleteWishlistDialogVisible(false);
                    if (!wishlistItem) return;
                    setIsRequestingWishlist(true);
                    startLoading();
                    const res = await deleteWishlistTrigger({
                        item: wishlistItem.itemId,
                        wishlistIds
                    });
                    if (!((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.status)) {
                        var _res_data2;
                        console.error("[pdp][deleteWishlist]", (_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.error);
                    }
                    if ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.status) {
                        (selectedSize === null || selectedSize === void 0 ? void 0 : selectedSize.product) && removeFromWishlist(selectedSize.product, 0, ec_china_package_web_sensors_dist/* WishlistLocation */.Ag.ProductPage);
                    }
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PurchaseLimitDialog, {
                isVisible: isPurchaseLimitDialogVisible,
                onClose: closePurchaseLimitDialog,
                goToLogin: goToLogin
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/products/[...url].tsx






const _url_ProductDetail = (props)=>{
    const { product } = props;
    const router = (0,next_router.useRouter)();
    // 记录商品ID供最近浏览接口查询
    (0,react.useEffect)(()=>{
        dist/* api */.hi.product.viewProduct(product.id).catch((err)=>{
            console.error("[product-detail][viewProduct]", err);
        });
    }, [
        product
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProductDetailProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProductDetailWrapper, {
            ...props
        }, router.asPath.split("?")[0])
    });
};
var __N_SSP = true;
/* harmony default export */ var _url_ = (_url_ProductDetail);


/***/ }),

/***/ 62957:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ deleteQuery; }
/* harmony export */ });
/**
 * 从地址栏上删除查询参数。例如，想删除'id=110',则直接调用deleteQuery('id=110')
 * @param query 要删除的查询参数
 */ function deleteQuery(query) {
    // query是否是第一个查询参数
    const isQueryFirst = window.location.search.includes("?".concat(query));
    // query是否是第一个查询参数且不是唯一查询参数
    const isQueryFirstButNotOnly = window.location.search.includes("?".concat(query, "&"));
    const replaceStr = isQueryFirst ? isQueryFirstButNotOnly ? "".concat(query, "&") : "?".concat(query) : "&".concat(query);
    window.history.replaceState(null, "", window.location.href.replace(replaceStr, ""));
}


/***/ }),

/***/ 34665:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"huabei-dialog_textFontWeight__GJE_4","override":"huabei-dialog_override__Cx5Eu","dialog":"huabei-dialog_dialog__Sa3fy","dialogContent":"huabei-dialog_dialogContent__KAlsS","huabeiDescription":"huabei-dialog_huabeiDescription__aXFG2","button-hover":"huabei-dialog_button-hover__T2zsM"};

/***/ }),

/***/ 57056:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"color-swatch_textFontWeight__hzG1t","wrapper":"color-swatch_wrapper__GGCbJ","fitContent":"color-swatch_fitContent__AbAPG","prevArrowClass":"color-swatch_prevArrowClass__Um__o","nextArrowClass":"color-swatch_nextArrowClass__oOhOv","image":"color-swatch_image__hWyJu","isSelected":"color-swatch_isSelected__NJREf","button-hover":"color-swatch_button-hover__HiNoO"};

/***/ }),

/***/ 29131:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"complete-the-look_textFontWeight__ioKTb","swiperBox":"complete-the-look_swiperBox__Ve5Zl","title":"complete-the-look_title__EHRo_","titleText":"complete-the-look_titleText__GhY7p","product":"complete-the-look_product__uGryV","slideWrapper":"complete-the-look_slideWrapper__4ikvD","prevArrow":"complete-the-look_prevArrow__ObuhT","nextArrow":"complete-the-look_nextArrow__NGtQp","image":"complete-the-look_image__8iYIw","productInfoBox":"complete-the-look_productInfoBox__Xa4pl","button-hover":"complete-the-look_button-hover__BFiLv"};

/***/ }),

/***/ 24196:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"other-products-modal_textFontWeight__x1g1d","otherProductsModal":"other-products-modal_otherProductsModal__tiOfU","dialog":"other-products-modal_dialog__rdfTP","title":"other-products-modal_title__l_EWZ","text":"other-products-modal_text__07ukg","content":"other-products-modal_content__YXTJu","box":"other-products-modal_box__pf5BR","boxTitle":"other-products-modal_boxTitle__iqLaw","link":"other-products-modal_link__m5nEv","productCount":"other-products-modal_productCount__Wqfww","button-hover":"other-products-modal_button-hover__uAfsf"};

/***/ }),

/***/ 90480:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"other-products-swiper_textFontWeight__ZqGlx","wrapper":"other-products-swiper_wrapper__t_bcw","prevArrowClass":"other-products-swiper_prevArrowClass__3l9xC","nextArrowClass":"other-products-swiper_nextArrowClass__CcDzs","button-hover":"other-products-swiper_button-hover__l2eOS"};

/***/ }),

/***/ 86013:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"status-cta_textFontWeight__jMrF7","btn":"status-cta_btn__CST96","notSelectSize":"status-cta_notSelectSize__ZPauB","selectSize":"status-cta_selectSize__nurW1","addToBag":"status-cta_addToBag__Wmnl3","hidden":"status-cta_hidden__KST92","qrCode":"status-cta_qrCode__oAjp_","button-hover":"status-cta_button-hover__fWRAf"};

/***/ }),

/***/ 8105:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"dialog_textFontWeight__VI9Ql","override":"dialog_override__qcKae","dialog":"dialog_dialog__9VEYi","dialogContent":"dialog_dialogContent__uhDBj","button-hover":"dialog_button-hover__oe4Pr"};

/***/ }),

/***/ 28901:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"we-chat-quick-pay_textFontWeight__2c0m_","weChatCta":"we-chat-quick-pay_weChatCta__eda9G","weChatIcon":"we-chat-quick-pay_weChatIcon__Hlv5c","button-hover":"we-chat-quick-pay_button-hover__3iYkE"};

/***/ }),

/***/ 40585:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"customization_textFontWeight__fw1rE","personalizationLabel":"customization_personalizationLabel__XJM4C","inputWrap":"customization_inputWrap__cj8yw","size":"customization_size__hIo_m","button-hover":"customization_button-hover__WIQdM"};

/***/ }),

/***/ 17526:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"store-list-item_textFontWeight__q1NVV","storeList":"store-list-item_storeList__Dpehr","name":"store-list-item_name__OSr_N","details":"store-list-item_details__6OB2_","button":"store-list-item_button__4GEQV","button-hover":"store-list-item_button-hover__e3Da1"};

/***/ }),

/***/ 43053:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"image-preview_textFontWeight__dO2Q_","pcPaginationSlide":"image-preview_pcPaginationSlide__szPLU","Zoomed":"image-preview_Zoomed__NG3fB","item":"image-preview_item__tH2Hv","active":"image-preview_active__fB_bl","imagePreview":"image-preview_imagePreview__p4_Or","dialogVisible":"image-preview_dialogVisible__K_hUF","content":"image-preview_content__MI3DC","closeIcon":"image-preview_closeIcon__AONac","isCloseIconVisible":"image-preview_isCloseIconVisible__jEkF7","imageInitialBox":"image-preview_imageInitialBox__Udgoh","imageInitial":"image-preview_imageInitial__91Rwi","swiper":"image-preview_swiper__yG7t_","swiperSlide":"image-preview_swiperSlide__2WCr5","wrapperClass":"image-preview_wrapperClass__CvB7w","contentClass":"image-preview_contentClass__Dp4is","imageZoom":"image-preview_imageZoom__L1FMp","arrowItem":"image-preview_arrowItem__dw0SG","prevArrow":"image-preview_prevArrow__MlNNq","nextArrow":"image-preview_nextArrow__HLiLb","image":"image-preview_image__pHHw3","images":"image-preview_images__NdGaf","hidden":"image-preview_hidden__QkjD2","button-hover":"image-preview_button-hover__6nGVt"};

/***/ }),

/***/ 6497:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"product_textFontWeight__6Ijmi","main":"product_main__fkLn6","button-hover":"product_button-hover__nsGji"};

/***/ }),

/***/ 13086:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"instore-personalization-dialog_textFontWeight__gta2D","override":"instore-personalization-dialog_override__YMePT","dialog":"instore-personalization-dialog_dialog__w_tHF","image":"instore-personalization-dialog_image__tUHLT","myLocation":"instore-personalization-dialog_myLocation__vT6kX","text":"instore-personalization-dialog_text__syoKS","marginTop":"instore-personalization-dialog_marginTop__JoEWa","btn":"instore-personalization-dialog_btn__ZDSoP","list":"instore-personalization-dialog_list__FkKsH","listItem":"instore-personalization-dialog_listItem__0tuf3","button-hover":"instore-personalization-dialog_button-hover__DtLIE"};

/***/ }),

/***/ 92038:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"accordion-expand-animation_textFontWeight__QtAsR","wrapper":"accordion-expand-animation_wrapper__NztLF","buttonWrapper":"accordion-expand-animation_buttonWrapper__mUl_f","icon":"accordion-expand-animation_icon__QD_nv","open":"accordion-expand-animation_open__ZGKQh","panelWrapper":"accordion-expand-animation_panelWrapper__YIzmT","invisible":"accordion-expand-animation_invisible__f_7GE","visible":"accordion-expand-animation_visible__uFvrg","fadeIn":"accordion-expand-animation_fadeIn__Zir0j","content":"accordion-expand-animation_content__qQIj1","contentInvisible":"accordion-expand-animation_contentInvisible__Dfafy","button-hover":"accordion-expand-animation_button-hover__OmHBb"};

/***/ }),

/***/ 26714:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"other-sizes_textFontWeight__NExeU","otherSizeWrapper":"other-sizes_otherSizeWrapper__mL0mf","titleWrapper":"other-sizes_titleWrapper__XpJjJ","label":"other-sizes_label___9pwH","value":"other-sizes_value__ynTpA","button-hover":"other-sizes_button-hover__WJH_x"};

/***/ }),

/***/ 52085:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"other-sizes-list_textFontWeight__SY7YX","wrapper":"other-sizes-list_wrapper__qBZf_","prevArrowClass":"other-sizes-list_prevArrowClass__SG6Jz","nextArrowClass":"other-sizes-list_nextArrowClass__5fFAM","image":"other-sizes-list_image__ya_Wh","isSelected":"other-sizes-list_isSelected__zAZMm","label":"other-sizes-list_label___0aFa","button-hover":"other-sizes-list_button-hover__xes5T"};

/***/ }),

/***/ 36741:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"personalization-dialog_textFontWeight___Yqks","override":"personalization-dialog_override__UdU6_","dialog":"personalization-dialog_dialog__vg9Oq","btn":"personalization-dialog_btn__S8A5s","button-hover":"personalization-dialog_button-hover__8OzF1"};

/***/ }),

/***/ 92231:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"product-detail-info_textFontWeight__OlFL9","wrapper":"product-detail-info_wrapper__BNC9J","hidden":"product-detail-info_hidden__4IfSZ","nameAndPrice":"product-detail-info_nameAndPrice__KyTg0","visible-animation":"product-detail-info_visible-animation__vnwtJ","fixed":"product-detail-info_fixed__NeWPu","orgPrice":"product-detail-info_orgPrice__MJ_sq","nameWrapper":"product-detail-info_nameWrapper__0_ZBx","wishlist":"product-detail-info_wishlist__avr9G","empty":"product-detail-info_empty__ue0qJ","full":"product-detail-info_full__vNOpo","visible":"product-detail-info_visible__hB_cL","signTop":"product-detail-info_signTop__6ymW7","sign":"product-detail-info_sign__dbYu7","name":"product-detail-info_name__h_6I9","colorAndPriceWrap":"product-detail-info_colorAndPriceWrap__U09zH","colorContainer":"product-detail-info_colorContainer__FcCWo","genderWrapper":"product-detail-info_genderWrapper__epf_u","gender":"product-detail-info_gender__L9vx2","active":"product-detail-info_active__bWIOM","otherHeader":"product-detail-info_otherHeader__9ph0L","onlyColorCn":"product-detail-info_onlyColorCn__QYB51","otherHeaderArrow":"product-detail-info_otherHeaderArrow__fPGXi","sizeGuide":"product-detail-info_sizeGuide__mpsjI","description":"product-detail-info_description__v4jJR","hiddenMargin":"product-detail-info_hiddenMargin__Qrf5q","otherStyles":"product-detail-info_otherStyles__qt4eo","extendedMargin":"product-detail-info_extendedMargin__j0kRV","huabei":"product-detail-info_huabei__fNdWN","personalize":"product-detail-info_personalize__aX8eA","shipFromStoreDescription":"product-detail-info_shipFromStoreDescription__8m5zm","preOrderDateMention":"product-detail-info_preOrderDateMention__Cket_","tagWrapper":"product-detail-info_tagWrapper__55tkz","huabeiDescription":"product-detail-info_huabeiDescription__mkZAR","alignCenter":"product-detail-info_alignCenter__CidQG","isArrowVisible":"product-detail-info_isArrowVisible__7qCUI","footerMenuItem":"product-detail-info_footerMenuItem__pDOdW","statement":"product-detail-info_statement__oDoVC","button-hover":"product-detail-info_button-hover__7f_5s"};

/***/ }),

/***/ 30012:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"qr-code-dialog_textFontWeight__GfGoX","main":"qr-code-dialog_main__z_NDb","content":"qr-code-dialog_content__1e9CW","btn":"qr-code-dialog_btn__2F7le","qrCode":"qr-code-dialog_qrCode__dJGXp","button-hover":"qr-code-dialog_button-hover__0RFTu"};

/***/ }),

/***/ 23691:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"select-size_textFontWeight__wEcUj","selectWrap":"select-size_selectWrap__Eygjh","placeholder":"select-size_placeholder__lWfvi","button-hover":"select-size_button-hover__KPcd8"};

/***/ }),

/***/ 60834:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"share_textFontWeight__YBVlG","wrapper":"share_wrapper__J5r8P","content":"share_content__604IK","shareIconGroup":"share_shareIconGroup__2K90T","shareIcon":"share_shareIcon__G2bpz","weChatBrowserShare":"share_weChatBrowserShare__DTx7d","text":"share_text__Tog4r","sharingIcon":"share_sharingIcon__9WgKs","button-hover":"share_button-hover__lZYUp"};

/***/ }),

/***/ 68223:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"shipping-information-dialog_textFontWeight__hRsTl","dialogContent":"shipping-information-dialog_dialogContent__Fkty5","button-hover":"shipping-information-dialog_button-hover___VHgx"};

/***/ }),

/***/ 62267:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"size-guide-dialog_textFontWeight__g8AXP","dialogContent":"size-guide-dialog_dialogContent__hcxeF","title":"size-guide-dialog_title__zuL0_","information":"size-guide-dialog_information__ACeVy","guideTitle":"size-guide-dialog_guideTitle__MeQ9l","label":"size-guide-dialog_label__RK2eD","radioGroup":"size-guide-dialog_radioGroup__UevGy","radio":"size-guide-dialog_radio__zJTmg","tableWrapper":"size-guide-dialog_tableWrapper__96LrZ","td":"size-guide-dialog_td__asnu9","table":"size-guide-dialog_table__Dzn0P","tr":"size-guide-dialog_tr__tAYRr","rowTitle":"size-guide-dialog_rowTitle__UvOgh","item":"size-guide-dialog_item___sbjA","button-hover":"size-guide-dialog_button-hover__Eu7IK"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [7450,2888,9774,179], function() { return __webpack_exec__(80885); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);