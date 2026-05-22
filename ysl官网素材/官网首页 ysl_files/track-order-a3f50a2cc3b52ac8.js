(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1227],{

/***/ 12976:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/track-order",
      function () {
        return __webpack_require__(49002);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 49002:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ track_order; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./layouts/default-layout.tsx + 2 modules
var default_layout = __webpack_require__(65353);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/head.js
var head = __webpack_require__(31852);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./pages/track-order.module.scss
var track_order_module = __webpack_require__(73197);
var track_order_module_default = /*#__PURE__*/__webpack_require__.n(track_order_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/yup@1.2.0/node_modules/yup/index.esm.js
var index_esm = __webpack_require__(99275);
// EXTERNAL MODULE: ./components/fields/form-field-input.tsx
var form_field_input = __webpack_require__(57146);
// EXTERNAL MODULE: ./components/fields/form-field-vertical-gap.tsx
var form_field_vertical_gap = __webpack_require__(73732);
// EXTERNAL MODULE: ./features/guest-track-order/index.module.scss
var index_module = __webpack_require__(74241);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/@hookform+resolvers@2.9.11_react-hook-form@7.45.4/node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var yup = __webpack_require__(63518);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.45.4_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs
var dist_index_esm = __webpack_require__(24924);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-schema@1.1.0_yup@1.2.0/node_modules/@kering-technologies/ec_china-package-schema/dist/index.esm.js
var ec_china_package_schema_dist_index_esm = __webpack_require__(98207);
;// CONCATENATED MODULE: ./schema/guest-order-schema.ts


const GuestOrderSchema = {
    orderBn: index_esm/* string */.Z_().required("请输入订单号").matches(/^([0-9]*)$/i, "订单号格式错误，请重试"),
    telephone: index_esm/* string */.Z_().required("请输入收货人手机号码").matches(ec_china_package_schema_dist_index_esm/* mobileReg */.OX, "请输入正确的收货人手机号码")
};

// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/router.js
var next_router = __webpack_require__(69132);
// EXTERNAL MODULE: ./packages/loading/index.tsx + 1 modules
var loading = __webpack_require__(59830);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+eagle_china-package-api@2.332.0/node_modules/@kering-technologies/eagle_china-package-api/dist/index.mjs
var dist = __webpack_require__(65943);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./components/controls/button.tsx
var controls_button = __webpack_require__(78001);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./components/fields/form-field-checkbox-group.tsx
var form_field_checkbox_group = __webpack_require__(92876);
;// CONCATENATED MODULE: ./features/guest-track-order/index.tsx















const GuestTrackOrder = (param)=>{
    let { btnClassName } = param;
    const router = (0,next_router.useRouter)();
    const { startLoading, finishLoading } = (0,loading/* useLoading */.r$)();
    const schema = index_esm/* object */.Ry().shape(GuestOrderSchema);
    const { formState: { errors }, register, handleSubmit, watch } = (0,dist_index_esm/* useForm */.cI)({
        mode: "all",
        resolver: (0,yup/* yupResolver */.X)(schema)
    });
    const orderBnWatch = watch("orderBn");
    const telephoneWatch = watch("telephone");
    const [errorMessage, setErrorMessage] = (0,react.useState)("");
    const formFieldCheckboxGroupRef = (0,react.useRef)({});
    const submit = async (data)=>{
        var _formFieldCheckboxGroupRef_current_check, _formFieldCheckboxGroupRef_current;
        const formFieldCheckboxGroupData = await (formFieldCheckboxGroupRef === null || formFieldCheckboxGroupRef === void 0 ? void 0 : (_formFieldCheckboxGroupRef_current_check = (_formFieldCheckboxGroupRef_current = formFieldCheckboxGroupRef.current).check) === null || _formFieldCheckboxGroupRef_current_check === void 0 ? void 0 : _formFieldCheckboxGroupRef_current_check.call(_formFieldCheckboxGroupRef_current));
        if (!formFieldCheckboxGroupData) return;
        startLoading();
        try {
            const { data: res } = await dist/* api */.hi.order.getGuestTrackOrderFormKey({
                ...data,
                isPrivacyPolicyAccepted: true
            });
            if (!(res === null || res === void 0 ? void 0 : res.status)) {
                !!(res === null || res === void 0 ? void 0 : res.message) && setErrorMessage(res === null || res === void 0 ? void 0 : res.message);
                return;
            }
            router.push("/guest/order-detail/".concat(data.orderBn, "?formKey=") + res.formKey);
        } catch (error) {
            console.log("[guest-track-order-form][onSubmit]", error);
        } finally{
            finishLoading();
        }
    };
    (0,react.useEffect)(()=>{
        setErrorMessage("");
    }, [
        orderBnWatch,
        telephoneWatch
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (index_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_input/* FormFieldInput */.H, {
                label: "订单号",
                placeholder: "请输入订单号",
                rightLabel: "必填项",
                required: true,
                filled: true,
                error: errors === null || errors === void 0 ? void 0 : errors.orderBn,
                maxLength: 20,
                ...register("orderBn"),
                rightLabelClassName: (index_module_default()).tips
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_vertical_gap/* FormFieldVerticalGap */.E, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_input/* FormFieldInput */.H, {
                label: "收货人手机号码",
                placeholder: "请输入收货人手机号码",
                required: true,
                filled: true,
                error: errors === null || errors === void 0 ? void 0 : errors.telephone,
                maxLength: 11,
                ...register("telephone"),
                otherErrorMessage: errorMessage
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_checkbox_group/* FormFieldCheckboxGroup */.a, {
                formRef: formFieldCheckboxGroupRef
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* Button */.z, {
                isLight: false,
                className: classnames_default()((index_module_default()).override, (index_module_default()).button, btnClassName),
                onClick: (e)=>{
                    var _formFieldCheckboxGroupRef_current_check, _formFieldCheckboxGroupRef_current;
                    handleSubmit(submit)(e);
                    (_formFieldCheckboxGroupRef_current = formFieldCheckboxGroupRef.current) === null || _formFieldCheckboxGroupRef_current === void 0 ? void 0 : (_formFieldCheckboxGroupRef_current_check = _formFieldCheckboxGroupRef_current.check) === null || _formFieldCheckboxGroupRef_current_check === void 0 ? void 0 : _formFieldCheckboxGroupRef_current_check.call(_formFieldCheckboxGroupRef_current);
                },
                children: "查看状态"
            })
        ]
    });
};

// EXTERNAL MODULE: ./swr/checkout-info-text-data.tsx
var checkout_info_text_data = __webpack_require__(77915);
;// CONCATENATED MODULE: ./pages/track-order.tsx







const TrackOrder = ()=>{
    const { data: checkoutInfoTextData } = (0,checkout_info_text_data/* useCheckoutInfoTextData */.U)();
    const description = (0,react.useMemo)(()=>{
        return (checkoutInfoTextData === null || checkoutInfoTextData === void 0 ? void 0 : checkoutInfoTextData.showOrderText) || "";
    }, [
        checkoutInfoTextData
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(default_layout/* DefaultLayout */.H, {
        headerNoOverlap: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)((head_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                    children: "查看订单"
                }, "title")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (track_order_module_default()).wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (track_order_module_default()).title,
                        children: "查看订单"
                    }),
                    !!description && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (track_order_module_default()).desc,
                        dangerouslySetInnerHTML: {
                            __html: description
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(GuestTrackOrder, {})
                ]
            })
        ]
    });
};
/* harmony default export */ var track_order = (TrackOrder);


/***/ }),

/***/ 77915:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: function() { return /* binding */ useCheckoutInfoTextData; }
/* harmony export */ });
/* harmony import */ var _kering_technologies_eagle_china_package_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65943);
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88131);


const useCheckoutInfoTextData = ()=>{
    const { data, mutate } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("api.checkout.getCheckoutInfoTextData", _kering_technologies_eagle_china_package_api__WEBPACK_IMPORTED_MODULE_0__/* .api */ .hi.checkout.getCheckoutInfoTextData);
    const actions = {
        refresh: mutate
    };
    if ((data === null || data === void 0 ? void 0 : data.status) && data.data) {
        return {
            data: data.data.data,
            ...actions
        };
    }
    return {
        data: null,
        ...actions
    };
};


/***/ }),

/***/ 74241:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"guest-track-order_textFontWeight__QwS6Q","wrapper":"guest-track-order_wrapper__m2Hwb","tips":"guest-track-order_tips__yKV1f","override":"guest-track-order_override__s2K8q","button":"guest-track-order_button__LDPGl","button-hover":"guest-track-order_button-hover__brf4s"};

/***/ }),

/***/ 73197:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"track-order_textFontWeight__bUvLC","wrapper":"track-order_wrapper__2dclS","title":"track-order_title__xGOpT","desc":"track-order_desc__8N_Er","button-hover":"track-order_button-hover__1MWwb"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [2888,9774,179], function() { return __webpack_exec__(12976); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);