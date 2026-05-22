(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5405],{

/***/ 48366:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(71868);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 1070:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: function() { return /* binding */ mapCmsToGtmProductList; },
/* harmony export */   n: function() { return /* binding */ mapCmsToGtmProductItem; }
/* harmony export */ });
/* harmony import */ var _kering_technologies_eagle_china_package_web_cms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78340);

const mapCmsToGtmProductItem = (product)=>{
    return {
        ...product,
        styleMaterialColor: "",
        parentSku: "",
        sku: (product === null || product === void 0 ? void 0 : product.sku) || "",
        hasSpecialPrice: false,
        orgPrice: "",
        stock: _kering_technologies_eagle_china_package_web_cms__WEBPACK_IMPORTED_MODULE_0__/* .IProductList */ .GZ.ProductStatus.Regular === product.status ? "in stock" : "",
        isPreOrder: _kering_technologies_eagle_china_package_web_cms__WEBPACK_IMPORTED_MODULE_0__/* .IProductList */ .GZ.ProductStatus.Preorder === product.status,
        attributes: [],
        imageList: {
            desktopImageList: product.imageList.desktopImageList,
            mobileImageList: [],
            changeViewImage: product.imageList.changeViewImage
        },
        macroCategory: (product === null || product === void 0 ? void 0 : product.macroCategory) || "",
        macroCategoryEn: (product === null || product === void 0 ? void 0 : product.macroCategoryEn) || "",
        microCategory: (product === null || product === void 0 ? void 0 : product.microCategory) || "",
        microCategoryEn: (product === null || product === void 0 ? void 0 : product.microCategoryEn) || "",
        rootCategory: (product === null || product === void 0 ? void 0 : product.rootCategory) || "",
        rootCategoryCn: (product === null || product === void 0 ? void 0 : product.rootCategoryCn) || "",
        rootCategoryEn: (product === null || product === void 0 ? void 0 : product.rootCategoryEn) || "",
        superMicroCategory: (product === null || product === void 0 ? void 0 : product.superMicroCategory) || "",
        superMicroCategoryEn: (product === null || product === void 0 ? void 0 : product.superMicroCategoryEn) || "",
        colorEn: (product === null || product === void 0 ? void 0 : product.colorEn) || "",
        nameEn: (product === null || product === void 0 ? void 0 : product.nameEn) || "",
        colorCodeId: (product === null || product === void 0 ? void 0 : product.colorCodeId) || "",
        materialEn: (product === null || product === void 0 ? void 0 : product.materialEn) || "",
        icon3D: (product === null || product === void 0 ? void 0 : product.icon3D) || null
    };
};
//mapCmsToGtmProductList
const mapCmsToGtmProductList = (productList)=>{
    return productList.map((product)=>{
        return mapCmsToGtmProductItem(product);
    });
};


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

/***/ 71868:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11527);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50959);
/* harmony import */ var _components_cms_cms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34600);
/* harmony import */ var _layouts_default_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65353);
/* harmony import */ var _kering_technologies_eagle_china_package_web_cms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78340);
/* harmony import */ var _components_cms_cms_seo_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95680);
/* harmony import */ var _utils_insert_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60609);
/* harmony import */ var _adapters_gtm_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3054);
/* harmony import */ var _adapters_map_cms_to_gtm_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1070);
/* harmony import */ var _contexts_module_height__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80388);
/* harmony import */ var _adapters_sensors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64068);
/* harmony import */ var _adapters_sensors_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67893);
/* harmony import */ var _hooks_use_scroll_to_path_id_view__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5281);













var __N_SSP = true;
function Home(param) {
    let { components, title, metaKeywords, metaDescription, identifier, type, content, isHeaderAllowOverlap } = param;
    (0,_hooks_use_scroll_to_path_id_view__WEBPACK_IMPORTED_MODULE_11__/* .useScrollToPathIdView */ .c)();
    const { setInformativeOccupyPosition } = (0,_contexts_module_height__WEBPACK_IMPORTED_MODULE_8__/* .useModuleHeight */ .l)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setInformativeOccupyPosition(!isHeaderAllowOverlap);
        return ()=>{
            setInformativeOccupyPosition(true);
        };
    }, [
        isHeaderAllowOverlap,
        setInformativeOccupyPosition
    ]);
    // screen by screen not display regular footer
    const isSlideInFullScreen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        var _components_, _components_1;
        return (components === null || components === void 0 ? void 0 : (_components_ = components[0]) === null || _components_ === void 0 ? void 0 : _components_.type) === "editableContent" && (components === null || components === void 0 ? void 0 : (_components_1 = components[0]) === null || _components_1 === void 0 ? void 0 : _components_1.slideInFullScreen);
    }, [
        components
    ]);
    const cmsProps = {
        identifier,
        title,
        components,
        inline: false
    };
    const { eeListView, homepagePush, eeListClick, getListName } = (0,_adapters_gtm_adapter__WEBPACK_IMPORTED_MODULE_6__/* .useGtm */ .u)();
    const { homepagePush: sensorsHomepagePush } = (0,_adapters_sensors__WEBPACK_IMPORTED_MODULE_9__/* .useSensors */ .D)();
    const gtmTrack = {
        /**
     * 跟踪推荐产品列表视图
     * @param list {TGtmProductItem[]} - 推荐产品列表
     */ recommendProductsEeListView (list) {
            eeListView({
                productList: list,
                list: getListName("")
            });
        },
        /**
     * 跟踪推荐产品列表点击
     * @param product {TGtmProductItem} - 产品信息
     * @param index {number} - 索引
     */ recommendProductsEeListClick (product, index) {
            eeListClick({
                productInfo: product,
                list: getListName(""),
                index
            });
        }
    };
    /**
   * analyticsForHP cms 埋点
   */ const analyticsForHP = {
        /**
     * CTA的点击事件处理函数
     * @param componentConfig
     */ homepageCTAOnClick (componentConfig) {
            try {
                var _componentConfig_text, _getPlpOrPdpCategory;
                homepagePush({
                    pushPosition: componentConfig.index + 1,
                    pushName: (componentConfig === null || componentConfig === void 0 ? void 0 : (_componentConfig_text = componentConfig.text) === null || _componentConfig_text === void 0 ? void 0 : _componentConfig_text.split("_")[0]) || ""
                });
                sensorsHomepagePush({
                    push_name: (componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.text) || "",
                    push_position: componentConfig.index + 1,
                    item_category: ((_getPlpOrPdpCategory = (0,_adapters_sensors_services__WEBPACK_IMPORTED_MODULE_10__/* .getPlpOrPdpCategory */ .Sq)()) === null || _getPlpOrPdpCategory === void 0 ? void 0 : _getPlpOrPdpCategory.item_category) || ""
                });
            } catch (error) {
                console.error("[index][homepageCTAOnClick]", error);
            }
        },
        /**
     * 组件初始化事件处理函数
     * @param componentConfig - 组件的配置
     *  @param componentConfig.component {Component} - 组件
     */ componentInit (componentConfig) {
            switch(componentConfig.component.type){
                case _kering_technologies_eagle_china_package_web_cms__WEBPACK_IMPORTED_MODULE_4__/* .ComponentType */ .re.recommendProducts:
                case _kering_technologies_eagle_china_package_web_cms__WEBPACK_IMPORTED_MODULE_4__/* .ComponentType */ .re.productCards:
                    {
                        var _componentConfig_component;
                        const productList = (0,_adapters_map_cms_to_gtm_product__WEBPACK_IMPORTED_MODULE_7__/* .mapCmsToGtmProductList */ .V)((componentConfig === null || componentConfig === void 0 ? void 0 : (_componentConfig_component = componentConfig.component) === null || _componentConfig_component === void 0 ? void 0 : _componentConfig_component.products) || []);
                        gtmTrack.recommendProductsEeListView(productList);
                        break;
                    }
                case _kering_technologies_eagle_china_package_web_cms__WEBPACK_IMPORTED_MODULE_4__/* .ComponentType */ .re.lookContent:
                    {
                        const productList = (componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.productList) || [];
                        gtmTrack.recommendProductsEeListView(productList);
                        break;
                    }
                default:
                    {
                        console.log("componentInit", componentConfig);
                    }
            }
        },
        /**
     * 产品点击事件处理函数
     * @param componentConfig - 组件的配置
     *  @param componentConfig.product {IProductList.Product} - 产品信息
     *  @param componentConfig.index {number} - 索引
     *  @param componentConfig.component {Component} - 组件
     */ productClick (componentConfig) {
            switch(componentConfig.component.type){
                case _kering_technologies_eagle_china_package_web_cms__WEBPACK_IMPORTED_MODULE_4__/* .ComponentType */ .re.recommendProducts:
                case _kering_technologies_eagle_china_package_web_cms__WEBPACK_IMPORTED_MODULE_4__/* .ComponentType */ .re.productCards:
                    {
                        if (!componentConfig.product) {
                            return;
                        }
                        const product = (0,_adapters_map_cms_to_gtm_product__WEBPACK_IMPORTED_MODULE_7__/* .mapCmsToGtmProductItem */ .n)(componentConfig.product);
                        gtmTrack.recommendProductsEeListClick(product, componentConfig.index);
                        break;
                    }
                default:
                    {
                        console.log("productClick", componentConfig);
                    }
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (type === "free_template") (0,_utils_insert_html__WEBPACK_IMPORTED_MODULE_12__/* .insertHtml */ .U)("ysl-homepage-children-".concat(identifier), content);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_default_layout__WEBPACK_IMPORTED_MODULE_3__/* .DefaultLayout */ .H, {
        footerVisible: !isSlideInFullScreen,
        childrenClassName: "ysl-homepage-children-".concat(identifier),
        isSeoH1: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_cms_cms_seo_head__WEBPACK_IMPORTED_MODULE_5__/* .SEOHead */ .R, {
                title: title,
                metaDescription: metaDescription,
                metaKeywords: metaKeywords,
                canonicalUrl: "/"
            }),
            type !== "free_template" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_cms_cms__WEBPACK_IMPORTED_MODULE_2__/* .CMSComponent */ .o, {
                ...cmsProps,
                analytics: analyticsForHP
            })
        ]
    });
}


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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9774,1394,6708,9893,4600,2888,179], function() { return __webpack_exec__(48366); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);