(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8455],{

/***/ 68406:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/contact-us",
      function () {
        return __webpack_require__(83617);
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

/***/ 83617:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ContactUs; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./layouts/default-layout.tsx + 2 modules
var default_layout = __webpack_require__(65353);
// EXTERNAL MODULE: ./packages/loading/index.tsx + 1 modules
var loading = __webpack_require__(59830);
// EXTERNAL MODULE: ./pages/_error.tsx
var _error = __webpack_require__(69770);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-utils@1.16.0_events@3.3.0/node_modules/@kering-technologies/ec_china-package-utils/dist/index.esm.js
var index_esm = __webpack_require__(80811);
// EXTERNAL MODULE: ./http-client.ts + 1 modules
var http_client = __webpack_require__(46350);
;// CONCATENATED MODULE: ./api/block.ts

const blockApi = {
    /**
   * 获取订单详情中礼品卡配置
   * */ getGiftMessageConfig () {
        return http_client/* httpClient */.M.get("/rest/V1/cms/block/identifier/gift-message/0");
    },
    // 获取联系我们话题和主题
    getContactUsTopicList () {
        return http_client/* httpClient */.M.get("/rest/V1/cms/block/identifier/topic-and-subject/0");
    }
};


// EXTERNAL MODULE: ./features/contact-us/contact-us-success/index.module.scss
var index_module = __webpack_require__(17408);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/link.js
var next_link = __webpack_require__(60806);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./features/contact-us/contact-us-success/index.tsx



const ContactUsSuccess = (param)=>{
    let { pageInfo } = param;
    const userName = "".concat((pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.lastName) || "").concat(pageInfo.firstName || "");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (index_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (index_module_default()).title,
                children: "联系我们"
            }),
            !!userName && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (index_module_default()).subtitle,
                children: [
                    "亲爱的",
                    userName
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (index_module_default()).description,
                children: [
                    "感谢您与我们联系。您的消息已成功发送，您可以在",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                        href: "/customer-care",
                        children: "客户服务"
                    }),
                    "专区找到常见问题与回复。",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    "谢谢",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    "SAINT LAURENT圣罗兰"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (index_module_default()).item,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).label,
                        children: "主题"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).value,
                        children: pageInfo.topic
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (index_module_default()).item,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).label,
                        children: "正文"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).value,
                        children: pageInfo.subject
                    })
                ]
            }),
            !!pageInfo.description && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (index_module_default()).item,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (index_module_default()).label,
                                children: "留言"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (index_module_default()).value,
                                children: pageInfo.description
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (index_module_default()).item,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).label,
                        children: "联系人"
                    }),
                    !!userName && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).value,
                        children: userName
                    }),
                    !!pageInfo.phoneNumber && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).value,
                        children: pageInfo.phoneNumber
                    }),
                    !!pageInfo.email && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (index_module_default()).value,
                        children: pageInfo.email
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/dialogs/dialog.tsx + 2 modules
var dialog = __webpack_require__(95625);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./features/contact-us/festival-dialog/index.module.scss
var festival_dialog_index_module = __webpack_require__(87494);
var festival_dialog_index_module_default = /*#__PURE__*/__webpack_require__.n(festival_dialog_index_module);
;// CONCATENATED MODULE: ./features/contact-us/festival-dialog/index.tsx





const FestivalDialog = (param)=>{
    let { isVisible, pageInfo, onClose } = param;
    const close = ()=>{
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.V, {
            isVisible: isVisible,
            onClose: close,
            onClickMask: close,
            title: pageInfo.title,
            lockBodyScroll: true,
            customContentClassName: classnames_default()((festival_dialog_index_module_default()).override, (festival_dialog_index_module_default()).content),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (festival_dialog_index_module_default()).wrapper,
                children: !!pageInfo.content && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (festival_dialog_index_module_default()).content,
                    dangerouslySetInnerHTML: {
                        __html: pageInfo.content
                    }
                })
            })
        })
    });
};

// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.45.4_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs
var dist_index_esm = __webpack_require__(24924);
// EXTERNAL MODULE: ./node_modules/.pnpm/yup@1.2.0/node_modules/yup/index.esm.js
var yup_index_esm = __webpack_require__(99275);
// EXTERNAL MODULE: ./node_modules/.pnpm/@hookform+resolvers@2.9.11_react-hook-form@7.45.4/node_modules/@hookform/resolvers/yup/dist/yup.mjs + 1 modules
var yup = __webpack_require__(63518);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-hooks@1.17.0_lodash.debounce@4.0.8_lodash.throttle@4.1._nnr3xwofk5oatghfixxbrp4jym/node_modules/@kering-technologies/ec_china-package-hooks/dist/index.esm.js
var ec_china_package_hooks_dist_index_esm = __webpack_require__(59265);
;// CONCATENATED MODULE: ./utils/map-size-to-human-readable.ts
function mapSizeToHumanReadable(currentSize) {
    const units = [
        "B",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB"
    ];
    let unitsIndex = 0;
    while(currentSize >= 1024 && ++unitsIndex){
        currentSize = currentSize / 1024;
    }
    return currentSize.toFixed(currentSize < 10 && unitsIndex > 0 ? 1 : 0) + units[unitsIndex];
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-schema@1.1.0_yup@1.2.0/node_modules/@kering-technologies/ec_china-package-schema/dist/index.esm.js
var ec_china_package_schema_dist_index_esm = __webpack_require__(98207);
// EXTERNAL MODULE: ./schema/store-appointment-schema.ts
var store_appointment_schema = __webpack_require__(22122);
;// CONCATENATED MODULE: ./schema/contact-us-form-schema.ts



const productCodeReg = /^[\w|\d]{0,20}$/g;
const orderNumberReg = /^[\w|\d]{0,20}$/g;
const contactUsFormSchema = {
    appellation: yup_index_esm/* string */.Z_(),
    lastName: yup_index_esm/* string */.Z_().required("请输入姓氏").test("lastName", "请输入正确的姓氏", (lastName)=>!lastName || ec_china_package_schema_dist_index_esm/* nameReg */.ov.test(lastName)),
    firstName: yup_index_esm/* string */.Z_().required("请输入名字").test("firstName", "请输入正确的名字", (firstName)=>!firstName || ec_china_package_schema_dist_index_esm/* nameReg */.ov.test(firstName)),
    mobile: yup_index_esm/* string */.Z_().test("mobile", "请输入正确的手机号码", (mobile)=>!mobile || ec_china_package_schema_dist_index_esm/* mobileReg */.OX.test(mobile)).max(11, "请输入正确的手机号码"),
    email: yup_index_esm/* string */.Z_().required("请输入电子邮箱").matches(store_appointment_schema/* emailReg */.m0, "请输入正确的电子邮箱"),
    orderNumber: yup_index_esm/* string */.Z_().notRequired().matches(orderNumberReg, "请输入正确的订单号").max(20, "请输入正确的订单号"),
    productId: yup_index_esm/* string */.Z_().notRequired().matches(productCodeReg, "请输入正确的商品代码"),
    message: yup_index_esm/* string */.Z_(),
    topic: yup_index_esm/* object */.Ry().required("请选择主题"),
    subject: yup_index_esm/* object */.Ry().required("请选择正文"),
    orderBn: yup_index_esm/* object */.Ry()
};


// EXTERNAL MODULE: ./components/fields/form-field-select.tsx
var form_field_select = __webpack_require__(8526);
// EXTERNAL MODULE: ./components/fields/form-field-input.tsx
var form_field_input = __webpack_require__(57146);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-swr@1.10.0_@kering-technologies+eagle_china-package-api@2.332.0_swr@2.2.2/node_modules/@kering-technologies/ec_china-package-swr/dist/index.js
var dist = __webpack_require__(23659);
// EXTERNAL MODULE: ./components/controls/button.tsx
var controls_button = __webpack_require__(78001);
// EXTERNAL MODULE: ./utils/with-authentication.ts
var with_authentication = __webpack_require__(94527);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+eagle_china-package-api@2.332.0/node_modules/@kering-technologies/eagle_china-package-api/dist/index.mjs
var eagle_china_package_api_dist = __webpack_require__(65943);
// EXTERNAL MODULE: ./components/fields/form-field-vertical-gap.tsx
var form_field_vertical_gap = __webpack_require__(73732);
// EXTERNAL MODULE: ./utils/token-service.ts
var token_service = __webpack_require__(27602);
// EXTERNAL MODULE: ./components/fields/form-field-radio.tsx
var form_field_radio = __webpack_require__(62274);
// EXTERNAL MODULE: ./features/confirm-dialog/index.tsx
var confirm_dialog = __webpack_require__(64812);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/router.js
var next_router = __webpack_require__(69132);
// EXTERNAL MODULE: ./features/contact-us/contact-form/index.module.scss
var contact_form_index_module = __webpack_require__(45884);
var contact_form_index_module_default = /*#__PURE__*/__webpack_require__.n(contact_form_index_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(10422);
// EXTERNAL MODULE: ./api/order.ts
var order = __webpack_require__(28825);
// EXTERNAL MODULE: ./contexts/toast/index.tsx
var toast = __webpack_require__(80360);
// EXTERNAL MODULE: ./features/form-field-textarea/index.tsx
var form_field_textarea = __webpack_require__(67876);
// EXTERNAL MODULE: ./components/fields/form-field-checkbox-group.tsx
var form_field_checkbox_group = __webpack_require__(92876);
;// CONCATENATED MODULE: ./features/contact-us/contact-form/index.tsx




























const allowFileType = [
    "image/jpeg",
    "application/pdf",
    "image/png"
];
const maxFileSize = 1572864;
const ContactForm = (param)=>{
    let { topicList, pageHeader, openSendSucDialog, openFestivalDialog, setServiceError } = param;
    const router = (0,next_router.useRouter)();
    const { appellationList } = (0,dist/* useAppellationList */.G6)();
    const [isDeleteDialogVisible, setIsDeleteDialogVisible] = (0,react.useState)(false);
    const { startLoading, finishLoading } = (0,loading/* useLoading */.r$)();
    const [subjectList, setSubjectList] = (0,react.useState)([]);
    const [checkedUploadFile, setCheckedUploadFile] = (0,react.useState)(null);
    const [isUploadFileError, setIsUploadFileError] = (0,react.useState)(false);
    const [checkedUploadFileBase64, setCheckedUploadFileBase64] = (0,react.useState)("");
    const uploadFileId = (0,react.useId)();
    const [orderList, setOrderList] = (0,react.useState)([]);
    const formFieldCheckboxGroupRef = (0,react.useRef)({});
    const { register, formState: { errors }, control, getValues, trigger, setValue } = (0,ec_china_package_hooks_dist_index_esm/* useFormWithServerValidation */.h7)({
        mode: "all",
        resolver: (0,yup/* yupResolver */.X)(yup_index_esm/* object */.Ry().shape(contactUsFormSchema))
    });
    const { field: checkedTopic } = (0,dist_index_esm/* useController */.bc)({
        name: "topic",
        control
    });
    const { field: checkedSubject } = (0,dist_index_esm/* useController */.bc)({
        name: "subject",
        control
    });
    const { field: checkedOrderId } = (0,dist_index_esm/* useController */.bc)({
        name: "orderBn",
        control
    });
    const { showToast } = (0,toast/* useToast */.p)();
    /*
   *  确认删除上传的文件
   **/ const confirmDeletion = ()=>{
        setCheckedUploadFile(null);
        setIsUploadFileError(false);
        setCheckedUploadFileBase64("");
        setIsDeleteDialogVisible(false);
    };
    /**
   * 填充 orderNumber 和 userInfo
   */ (0,react.useEffect)(()=>{
        if (router.isReady && appellationList.length) {
            const isLogin = token_service/* userService */.W.isLoggedIn();
            if (isLogin) {
                getOrderList();
            } else {
                var _router_query_orderBn;
                // 填充 orderNumber
                const orderBn = (_router_query_orderBn = router.query.orderBn) === null || _router_query_orderBn === void 0 ? void 0 : _router_query_orderBn.toString();
                if (orderBn) {
                    setValue("orderNumber", orderBn);
                }
            }
        }
    }, [
        router.isReady,
        appellationList,
        setValue
    ]);
    const handleDesc = ()=>(e)=>{
            // 判断是否点击的是a标签
            if (e.target.tagName === "A") {
                openFestivalDialog();
            }
        };
    const uploadFile = (e)=>{
        var _e_target_files;
        const reader = new FileReader();
        if ((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files.length) {
            const file = e.target.files[0];
            reader.readAsDataURL(file);
            let result = "";
            reader.onload = (res)=>{
                result = res.currentTarget.result;
                setCheckedUploadFileBase64(result);
                const fileType = allowFileType.find((item)=>item == file.type);
                if (fileType && file && file.size <= maxFileSize) {
                    setCheckedUploadFile(file);
                    setIsUploadFileError(false);
                } else {
                    confirmDeletion();
                    setIsUploadFileError(true);
                }
            };
        }
    };
    const submit = async ()=>{
        var _formFieldCheckboxGroupRef_current_check, _formFieldCheckboxGroupRef_current, _appellationList_find, _data_topic, _data_subject;
        const isValid = await trigger();
        const formFieldCheckboxGroupData = await (formFieldCheckboxGroupRef === null || formFieldCheckboxGroupRef === void 0 ? void 0 : (_formFieldCheckboxGroupRef_current_check = (_formFieldCheckboxGroupRef_current = formFieldCheckboxGroupRef.current).check) === null || _formFieldCheckboxGroupRef_current_check === void 0 ? void 0 : _formFieldCheckboxGroupRef_current_check.call(_formFieldCheckboxGroupRef_current));
        if (!isValid || !formFieldCheckboxGroupData) {
            (0,index_esm/* scrollToErrorMessage */.jZ)();
            return;
        }
        const data = getValues();
        // 文件限制不能超过1.5MB
        if (checkedUploadFile) {
            if (checkedUploadFile.size > maxFileSize) return;
        }
        startLoading();
        const contactUsInterface = {
            attachmentContentType: (checkedUploadFile === null || checkedUploadFile === void 0 ? void 0 : checkedUploadFile.type) || "",
            attachmentFileBase64: checkedUploadFileBase64 || "",
            attachmentURL: (checkedUploadFile === null || checkedUploadFile === void 0 ? void 0 : checkedUploadFile.name) || "",
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            orderNumber: data.orderNumber || "",
            phoneNumber: data.mobile || "",
            genderTitle: ((_appellationList_find = appellationList.find((item)=>item.value === Number(data.appellation))) === null || _appellationList_find === void 0 ? void 0 : _appellationList_find.title) || "暂不透露",
            topic: ((_data_topic = data.topic) === null || _data_topic === void 0 ? void 0 : _data_topic.title) || "",
            subject: ((_data_subject = data.subject) === null || _data_subject === void 0 ? void 0 : _data_subject.title) || "",
            description: data.message,
            productId: data.productId || "",
            isPrivacyPolicyAccepted: true
        };
        if (data.orderBn && data.orderBn.code) {
            contactUsInterface.orderNumber = data.orderBn.code;
        }
        const params = {
            contactUsInterface
        };
        try {
            const { data: res } = await eagle_china_package_api_dist/* api */.hi.customerCare.contactUs(params);
            if (res === null || res === void 0 ? void 0 : res.status) {
                openSendSucDialog(contactUsInterface);
            } else if (res === null || res === void 0 ? void 0 : res.message) {
                showToast(res === null || res === void 0 ? void 0 : res.message);
            }
        } catch (error) {
            console.log("[contact-us][submit]", error);
        }
        finishLoading();
    };
    (0,react.useEffect)(()=>{
        if (checkedTopic.value) {
            setSubjectList(checkedTopic.value.subject);
            setValue("subject", undefined);
        }
    }, [
        checkedTopic.value,
        setValue
    ]);
    const getOrderList = (0,react.useCallback)(async ()=>{
        try {
            const { data: res } = await (0,with_authentication/* withAuthentication */.O)(order/* orderApi */.E.getOrderSnList());
            if ((res === null || res === void 0 ? void 0 : res.status) && res.data) {
                var _res_data_items, _res_data;
                const orderData = ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_items = _res_data.items) === null || _res_data_items === void 0 ? void 0 : _res_data_items.map((item)=>({
                        code: item.orderBn,
                        title: item.orderBn
                    }))) || [];
                orderData.push({
                    title: "其它",
                    code: "其它"
                });
                if (res.data.items.length) {
                    var _router_query_orderBn;
                    // 填充 orderNumber
                    const orderBn = (_router_query_orderBn = router.query.orderBn) === null || _router_query_orderBn === void 0 ? void 0 : _router_query_orderBn.toString();
                    if (orderBn) {
                        setValue("orderBn", {
                            code: orderBn,
                            title: orderBn
                        });
                    }
                }
                (0,react_dom.unstable_batchedUpdates)(()=>{
                    setOrderList(orderData);
                });
            }
        } catch (error) {
            setServiceError(true);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (contact_form_index_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (contact_form_index_module_default()).container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (contact_form_index_module_default()).header,
                        children: [
                            !!(pageHeader === null || pageHeader === void 0 ? void 0 : pageHeader.title) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (contact_form_index_module_default()).title,
                                dangerouslySetInnerHTML: {
                                    __html: pageHeader.title
                                }
                            }),
                            !!(pageHeader === null || pageHeader === void 0 ? void 0 : pageHeader.description) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                onClick: handleDesc(),
                                className: (contact_form_index_module_default()).description,
                                dangerouslySetInnerHTML: {
                                    __html: pageHeader === null || pageHeader === void 0 ? void 0 : pageHeader.description
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (contact_form_index_module_default()).formItem,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (contact_form_index_module_default()).requiredText,
                                        children: "*必填项"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_select/* FormFieldSelect */.n, {
                                        label: "主题",
                                        placeholder: "请选择主题",
                                        externalLabel: true,
                                        required: true,
                                        value: checkedTopic.value,
                                        options: topicList,
                                        onBlur: checkedTopic.onBlur,
                                        onChange: checkedTopic.onChange,
                                        toDisplay: (option)=>option.title,
                                        toIdentity: (option)=>option.title,
                                        error: errors === null || errors === void 0 ? void 0 : errors.topic
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_vertical_gap/* FormFieldVerticalGap */.E, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_select/* FormFieldSelect */.n, {
                                label: "正文",
                                placeholder: "请选择正文",
                                required: true,
                                externalLabel: true,
                                value: checkedSubject.value,
                                options: subjectList,
                                onChange: checkedSubject.onChange,
                                onBlur: checkedSubject.onBlur,
                                toDisplay: (option)=>option.title,
                                toIdentity: (option)=>option.title,
                                disabled: !checkedTopic.value,
                                error: errors === null || errors === void 0 ? void 0 : errors.subject
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_vertical_gap/* FormFieldVerticalGap */.E, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist_index_esm/* Controller */.Qr, {
                                control: control,
                                name: "appellation",
                                render: (param)=>{
                                    let { field } = param;
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_radio/* FormFieldRadio */.x, {
                                        label: "称谓",
                                        filled: true,
                                        required: false,
                                        error: errors === null || errors === void 0 ? void 0 : errors.appellation,
                                        options: appellationList,
                                        onChange: field.onChange,
                                        value: field.value
                                    });
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_vertical_gap/* FormFieldVerticalGap */.E, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (contact_form_index_module_default()).groupName,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_input/* FormFieldInput */.H, {
                                        label: "姓氏",
                                        required: true,
                                        placeholder: "请输入姓氏",
                                        filled: true,
                                        error: errors === null || errors === void 0 ? void 0 : errors.lastName,
                                        maxLength: 20,
                                        ...register("lastName")
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_input/* FormFieldInput */.H, {
                                        label: "名字",
                                        required: true,
                                        placeholder: "请输入名字",
                                        filled: true,
                                        error: errors === null || errors === void 0 ? void 0 : errors.firstName,
                                        maxLength: 20,
                                        ...register("firstName")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_vertical_gap/* FormFieldVerticalGap */.E, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_input/* FormFieldInput */.H, {
                                label: "手机号码",
                                filled: true,
                                placeholder: "请输入手机号码",
                                error: errors === null || errors === void 0 ? void 0 : errors.mobile,
                                maxLength: 11,
                                ...register("mobile"),
                                type: "tel"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_vertical_gap/* FormFieldVerticalGap */.E, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_input/* FormFieldInput */.H, {
                                label: "电子邮箱",
                                required: true,
                                filled: true,
                                placeholder: "请输入电子邮箱",
                                error: errors === null || errors === void 0 ? void 0 : errors.email,
                                maxLength: 64,
                                ...register("email"),
                                type: "email"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_vertical_gap/* FormFieldVerticalGap */.E, {}),
                            !orderList.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_input/* FormFieldInput */.H, {
                                label: "订单号",
                                filled: true,
                                placeholder: "请输入订单号",
                                error: errors === null || errors === void 0 ? void 0 : errors.orderNumber,
                                maxLength: 20,
                                ...register("orderNumber")
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_select/* FormFieldSelect */.n, {
                                label: "订单号",
                                placeholder: "请选择订单号",
                                externalLabel: true,
                                menuClassName: (contact_form_index_module_default()).orderId,
                                value: checkedOrderId.value,
                                options: orderList,
                                onChange: checkedOrderId.onChange,
                                onBlur: checkedOrderId.onBlur,
                                toDisplay: (option)=>option.title,
                                toIdentity: (option)=>option.title,
                                error: errors === null || errors === void 0 ? void 0 : errors.orderBn
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_vertical_gap/* FormFieldVerticalGap */.E, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_input/* FormFieldInput */.H, {
                                label: "商品代码",
                                filled: true,
                                placeholder: "请输入商品代码",
                                error: errors === null || errors === void 0 ? void 0 : errors.productId,
                                maxLength: 20,
                                ...register("productId")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_vertical_gap/* FormFieldVerticalGap */.E, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_textarea/* FormFieldTextarea */.D, {
                                label: "留言",
                                className: (contact_form_index_module_default()).textarea,
                                textareaWrapperClassName: (contact_form_index_module_default()).textareaWrapper,
                                maxLength: 1500,
                                placeholder: "请输入内容",
                                error: errors === null || errors === void 0 ? void 0 : errors.message,
                                ...register("message")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (contact_form_index_module_default()).uploadFiles,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classnames_default()((contact_form_index_module_default()).uploadFileDesc, isUploadFileError ? (contact_form_index_module_default()).isError : ""),
                                        children: isUploadFileError ? "附件仅支持 .pdf, .png, .jpg，且大小不超过1.5MB" : "附上您的文件（可接受的格式: .PDF、.PNG、.JPG - 大小不超过: 1.5MB）"
                                    }),
                                    checkedUploadFile ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: (contact_form_index_module_default()).uploadFileDescFile,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: (contact_form_index_module_default()).fileName,
                                                    children: [
                                                        checkedUploadFile.name,
                                                        "(",
                                                        mapSizeToHumanReadable(checkedUploadFile.size),
                                                        ")"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: (contact_form_index_module_default()).hoverHasUnderline,
                                                    onClick: ()=>{
                                                        setIsDeleteDialogVisible(true);
                                                    },
                                                    children: "删除"
                                                })
                                            ]
                                        })
                                    }) : null,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* Button */.z, {
                                        className: classnames_default()((contact_form_index_module_default()).override, (contact_form_index_module_default()).uploadFile),
                                        onChange: uploadFile,
                                        uploadFileId: uploadFileId,
                                        type: "file",
                                        children: "上传附件"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (contact_form_index_module_default()).privacyPolicy,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_checkbox_group/* FormFieldCheckboxGroup */.a, {
                                    formRef: formFieldCheckboxGroupRef,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            "以上所填写的资料只会用作准确回应阁下的查询。YSL.CN永远不会发布个人数据。详情请参阅我们的\xa0",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "/privacy-policy",
                                                target: "_blank",
                                                children: "隐私政策"
                                            }),
                                            "。"
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* Button */.z, {
                                isLight: false,
                                className: classnames_default()((contact_form_index_module_default()).override, (contact_form_index_module_default()).sendButton),
                                onClick: submit,
                                children: "发送"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (contact_form_index_module_default()).returnTop,
                        onClick: ()=>{
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        },
                        children: "返回顶部"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(confirm_dialog/* ConfirmDialog */.Q, {
                isVisible: isDeleteDialogVisible,
                onClose: ()=>setIsDeleteDialogVisible(false),
                onCancel: ()=>setIsDeleteDialogVisible(false),
                title: "操作提示",
                htmlText: "是否确认删除此文件？",
                onConfirm: confirmDeletion
            })
        ]
    });
};

// EXTERNAL MODULE: ./features/seo-head.tsx
var seo_head = __webpack_require__(60472);
;// CONCATENATED MODULE: ./pages/contact-us/index.tsx











function ContactUs() {
    const [festivalDialogVisible, setFestivalDialogVisible] = (0,react.useState)(false);
    const [isServerError, setIsServerError] = (0,react.useState)(false);
    const [sendSuccessPageInfo, setSendSuccessPageInfo] = (0,react.useState)(null);
    const { startLoading, finishLoading } = (0,loading/* useLoading */.r$)();
    const [topicList, setTopicList] = (0,react.useState)([]);
    const [pageHeader, setPageHeader] = (0,react.useState)(null);
    const [popupInfo, setPopupInfo] = (0,react.useState)(null);
    // 获取主题正文
    const getPageConfig = async ()=>{
        const { data: res } = await blockApi.getContactUsTopicList();
        if ((res === null || res === void 0 ? void 0 : res.status) && res.data.content) {
            setTopicList((0,index_esm/* arrayOrEmpty */.sq)(res.data.content.topic));
            setPageHeader({
                title: res.data.content.title,
                description: res.data.content.description
            });
            setPopupInfo(res.data.content.popup);
        }
    };
    const getContactBlockInfo = (0,react.useCallback)(async ()=>{
        startLoading();
        try {
            await getPageConfig();
            setIsServerError(false);
        } catch (error) {
            setIsServerError(true);
        }
        finishLoading();
    }, [
        startLoading,
        finishLoading
    ]);
    (0,react.useEffect)(()=>{
        getContactBlockInfo();
    }, [
        getContactBlockInfo
    ]);
    if (isServerError) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(_error["default"], {
            statusCode: 500
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(default_layout/* DefaultLayout */.H, {
        headerNoOverlap: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(seo_head/* SEOHead */.R, {
                title: "联系我们-SAINT LAURENT圣罗兰官方网站 | YSL.CN",
                metaKeywords: "联系我们,SAINT LAURENT,圣罗兰,ysl"
            }),
            !!sendSuccessPageInfo && /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactUsSuccess, {
                pageInfo: sendSuccessPageInfo
            }),
            !sendSuccessPageInfo && topicList && /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactForm, {
                topicList: topicList,
                pageHeader: pageHeader,
                openFestivalDialog: ()=>setFestivalDialogVisible(true),
                openSendSucDialog: (contactUsInterface)=>{
                    window.scrollTo(0, 0);
                    setSendSuccessPageInfo(contactUsInterface);
                },
                setServiceError: (error)=>setIsServerError(error)
            }),
            !!popupInfo && /*#__PURE__*/ (0,jsx_runtime.jsx)(FestivalDialog, {
                isVisible: festivalDialogVisible,
                pageInfo: popupInfo,
                onClose: ()=>setFestivalDialogVisible(false)
            })
        ]
    });
}


/***/ }),

/***/ 45884:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"contact-form_textFontWeight__0ZMQn","wrapper":"contact-form_wrapper__yuSyB","title":"contact-form_title__L8m4q","description":"contact-form_description__t6WEw","formItem":"contact-form_formItem__efxZx","requiredText":"contact-form_requiredText__Nhq7p","groupName":"contact-form_groupName__OYzz1","textareaTitle":"contact-form_textareaTitle__bQqGC","textareaWrapper":"contact-form_textareaWrapper__p7a4w","textarea":"contact-form_textarea__GL8wL","uploadFiles":"contact-form_uploadFiles__PGhPQ","uploadFileDesc":"contact-form_uploadFileDesc__c_cIS","uploadFileDescFile":"contact-form_uploadFileDescFile__WlUVv","override":"contact-form_override__BI0im","uploadFile":"contact-form_uploadFile__szGlc","privacyPolicy":"contact-form_privacyPolicy__FwMzY","sendButton":"contact-form_sendButton__D2oo9","returnTop":"contact-form_returnTop__aJUnH","hoverHasUnderline":"contact-form_hoverHasUnderline__tDCB5","isError":"contact-form_isError__xGVao","button-hover":"contact-form_button-hover__FKxUz"};

/***/ }),

/***/ 17408:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"contact-us-success_textFontWeight__r10rF","wrapper":"contact-us-success_wrapper__1_XEj","title":"contact-us-success_title__O3mwP","subtitle":"contact-us-success_subtitle__pdHCe","description":"contact-us-success_description__xryia","item":"contact-us-success_item__ztU8i","label":"contact-us-success_label__cZF4U","button-hover":"contact-us-success_button-hover__zFHK8"};

/***/ }),

/***/ 87494:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"festival-dialog_textFontWeight__qkgDr","override":"festival-dialog_override__Fy5_O","content":"festival-dialog_content__jJfSC","display":"festival-dialog_display__rC2ma","button-hover":"festival-dialog_button-hover__0otd3"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [2888,9774,179], function() { return __webpack_exec__(68406); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);