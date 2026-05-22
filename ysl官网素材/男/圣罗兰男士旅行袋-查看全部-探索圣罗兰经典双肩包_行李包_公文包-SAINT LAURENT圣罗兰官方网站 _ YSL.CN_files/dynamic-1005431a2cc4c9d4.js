(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[2739],{

/***/ 2453:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/dynamic",
      function () {
        return __webpack_require__(31891);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 95680:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: function() { return /* binding */ SEOHead; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11527);
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64825);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31852);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



const SEOHead = (param)=>{
    let { title, metaDescription, metaKeywords, canonicalUrl } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("title", {
                children: title ? "".concat(title) : "".concat(_utils_constant__WEBPACK_IMPORTED_MODULE_1__/* .BrandName */ .rV, " | YSL.CN - 中国官方线上精品店")
            }, "title"),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                name: "description",
                content: metaDescription || "SAINT LAURENT圣罗兰成立于1961年，是20世纪知名的时装品牌之一，也是同时具备革命性与华丽感的时尚品牌。SAINT LAURENT圣罗兰拥有男士和女士高档包袋、成衣、鞋履、小皮具和配饰等产品。"
            }, "description"),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
                name: "keywords",
                content: metaKeywords || "ysl,圣罗兰,saint laurent"
            }, "keywords"),
            !!canonicalUrl && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("link", {
                rel: "canonical",
                href: "".concat("https://www.ysl.cn").concat(canonicalUrl)
            }, "canonical")
        ]
    });
};


/***/ }),

/***/ 5281:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: function() { return /* binding */ useScrollToPathIdView; }
/* harmony export */ });
/* harmony import */ var _kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80811);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69132);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50959);



/**
 * 拿到地址栏上边hash值滚动到页面指定位置。
 * 仅支持纯cms页面，
 * 链接格式：#position-${identifier}
 * 如：
 * http://localhost:3700/categories/highlights/men/fall-24.html#position-1productlist7copycopy
 * http://localhost:3700/dynamic?pageId=w-winter-24-campaign#position-double2x3copy1
 *
 * 不能同时在地址栏上配置打开cms页面上的弹框和锚点滚动的功能。
 * 如果组件上方配置了margin，那就会以margin初始的位置为起点与header对齐。
 * 锚点跳转只有第一次打开页面的时候生效，跳转之后会删除地址栏的#id。因为返回上一页也有回到上一次滚动位置的功能，要不然会打架。在地址栏有#id的情况下，会直接跳到指定锚点。
 * 跳转到锚点的功能做了延时两秒的逻辑，因为header和informative-banner是异步加载的，首先需要计算它们的高度，另外，页面的静态资源的渲染需要时间，所以延迟两秒。
 * 两秒并不是空穴来风，而是根据实际的场景测试得出。这里从生产环境和qa环境分别挑选了不同高度的页面进行 Disable cache 测试数据(链接在下方列出)，2秒的延时在大多数场景下都可以成功跳转（也有一部分原因是因为这些页面配置的静态资源比较小）。当然，2秒的也并不意味着一定会成功，具体取决于页面中元素的静态资源的多少和大小，以及浏览器的渲染速度等。这种情况已经和BA沟通，不再额外处理。
 * 生产：
 * https://www.ysl.cn/categories/highlights/men/fall-24.html
 * https://www.ysl.cn/categories/shop-women/shoes/new-arrivals.html
 * https://www.ysl.cn/categories/shop-women/ready-to-wear/new-arrivals.html#single16x9copycopycopycopy-position
 * https://www.ysl.cn/dynamic?pageId=w-winter-24-campaign
 * https://www.ysl.cn/dynamic?pageId=w-winter-24-shop
 * qa：
 * /preview/cms/401
 * /preview/cms/481
 * /preview/cms/482
 * /preview/cms/1182
 * /preview/cms/1174
 */ const useScrollToPathIdView = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const scrollToElement = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        if (window.location.hash) {
            if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
            await (0,_kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_0__/* .wait */ .Dc)(2000);
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id + "-anchorPoint") // 拼接anchorPoint字段，防止系统自动跳转，否则会跳转两次
            ;
            if (element) {
                element.scrollIntoView({
                    behavior: "auto"
                });
            }
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!router.isReady) return;
        scrollToElement();
    }, [
        scrollToElement,
        router
    ]);
};


/***/ }),

/***/ 12247:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11527);
/* harmony import */ var _pages_cms_index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22199);
/* harmony import */ var _pages_cms_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_cms_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cms_cms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34600);
/* harmony import */ var _layouts_default_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65353);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50959);
/* harmony import */ var _components_cms_cms_seo_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95680);
/* harmony import */ var _utils_insert_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60609);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84875);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _features_seo_h1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50335);
/* harmony import */ var _contexts_module_height__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80388);
/* harmony import */ var _hooks_use_scroll_to_path_id_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5281);











const CMS = (param)=>{
    let { components, title, metaKeywords, metaDescription, identifier, isPreview = false, isPreviewFreeTemplate = false, analytics, content, freeTemplate, isShowBackButton = false, customTitle, categoryTitle, isHeaderAllowOverlap } = param;
    (0,_hooks_use_scroll_to_path_id_view__WEBPACK_IMPORTED_MODULE_9__/* .useScrollToPathIdView */ .c)();
    const { setInformativeOccupyPosition } = (0,_contexts_module_height__WEBPACK_IMPORTED_MODULE_8__/* .useModuleHeight */ .l)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setInformativeOccupyPosition(!isHeaderAllowOverlap);
        return ()=>{
            setInformativeOccupyPosition(true);
        };
    }, [
        isHeaderAllowOverlap,
        setInformativeOccupyPosition
    ]);
    // screen by screen not display regular footer
    const isSlideInFullScreen = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        var _components_, _components_1;
        return (components === null || components === void 0 ? void 0 : (_components_ = components[0]) === null || _components_ === void 0 ? void 0 : _components_.type) === "editableContent" && (components === null || components === void 0 ? void 0 : (_components_1 = components[0]) === null || _components_1 === void 0 ? void 0 : _components_1.slideInFullScreen);
    }, [
        components
    ]);
    const cmsProps = {
        identifier,
        isPreview,
        analytics,
        title,
        components
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        // 预览freeTemplate页面 或 cms页面有数据 ，插入html
        if (!isPreview && (freeTemplate === null || freeTemplate === void 0 ? void 0 : freeTemplate.data) || isPreviewFreeTemplate) (0,_utils_insert_html__WEBPACK_IMPORTED_MODULE_10__/* .insertHtml */ .U)("ysl-cms-children-".concat(identifier), content);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_default_layout__WEBPACK_IMPORTED_MODULE_3__/* .DefaultLayout */ .H, {
        footerVisible: !isSlideInFullScreen,
        wrapperClassName: !isSlideInFullScreen ? (_pages_cms_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().isSlideNoFullScreen) : "",
        childrenClassName: "ysl-cms-children-".concat(identifier),
        isBackToTopVisible: !!isShowBackButton,
        backToTopClassName: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_pages_cms_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().override), (_pages_cms_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().onlyBackToTop)),
        isCmsPage: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_features_seo_h1__WEBPACK_IMPORTED_MODULE_7__/* .SeoH1 */ .f, {
                style: {
                    display: "none"
                },
                children: customTitle || categoryTitle
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_cms_cms_seo_head__WEBPACK_IMPORTED_MODULE_5__/* .SEOHead */ .R, {
                title: title,
                metaDescription: metaDescription,
                metaKeywords: metaKeywords
            }),
            !(!isPreview && (freeTemplate === null || freeTemplate === void 0 ? void 0 : freeTemplate.data)) && !isPreviewFreeTemplate && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_cms_cms__WEBPACK_IMPORTED_MODULE_2__/* .CMSComponent */ .o, {
                ...cmsProps,
                analytics: analytics
            })
        ]
    });
};
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (CMS);


/***/ }),

/***/ 31891:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11527);
/* harmony import */ var _pages_cms_url___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12247);


const DynamicCMS = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_cms_url___WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...props
    });
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (DynamicCMS);


/***/ }),

/***/ 60609:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: function() { return /* binding */ insertHtml; }
/* harmony export */ });
/**
 * 插入HTML
 * @param className 插入HTML代码块的父节点位置
 * @param html 插入的HTML代码块
 */ const insertHtml = function(className) {
    let html = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    // 创建script
    async function runScript(script) {
        return new Promise((resolve, reject)=>{
            var // 在原来的位置插入脚本 执行脚本
            _script_parentNode;
            // 直接 document.head.appendChild(script) 是不会生效的，需要重新创建一个
            const newScript = document.createElement("script");
            newScript.innerHTML = script.innerHTML;
            // 存在 src 属性的话
            const src = script.getAttribute("src");
            if (src) newScript.setAttribute("src", src);
            (_script_parentNode = script.parentNode) === null || _script_parentNode === void 0 ? void 0 : _script_parentNode.insertBefore(newScript, script);
            // 删除原来的脚本 可以在浏览器端使用 getEventListeners(window)，判断添加的监听是否被删除
            script.remove();
            if (src) {
                newScript.onload = function() {
                    resolve(newScript);
                };
                newScript.onerror = function() {
                    reject(newScript);
                };
            } else {
                resolve(newScript);
            }
        });
    }
    // 插入html
    async function setHTMLWithScript(className, html) {
        const el = document.getElementsByClassName(className)[0];
        el.innerHTML = html;
        const scripts = el.querySelectorAll("script");
        if (scripts === null || scripts === void 0 ? void 0 : scripts.length) {
            for (const script of scripts){
                await runScript(script);
            }
        }
    }
    setHTMLWithScript(className, html);
};


/***/ }),

/***/ 22199:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms_textFontWeight__F6JVI","isSlideNoFullScreen":"cms_isSlideNoFullScreen__YcHlN","override":"cms_override__b_ruH","onlyBackToTop":"cms_onlyBackToTop__46X0a","button-hover":"cms_button-hover__fjjbf"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9774,1394,6708,9893,4600,2888,179], function() { return __webpack_exec__(2453); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);