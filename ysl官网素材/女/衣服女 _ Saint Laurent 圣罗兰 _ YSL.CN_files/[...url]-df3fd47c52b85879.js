(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8788],{

/***/ 13528:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/categories/[...url]",
      function () {
        return __webpack_require__(62236);
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

/***/ 62236:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __N_SSP: function() { return /* binding */ __N_SSP; },
  "default": function() { return /* binding */ categories_url_; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash.isequal@4.5.0/node_modules/lodash.isequal/index.js
var lodash_isequal = __webpack_require__(5899);
var lodash_isequal_default = /*#__PURE__*/__webpack_require__.n(lodash_isequal);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/router.js
var next_router = __webpack_require__(69132);
// EXTERNAL MODULE: ./layouts/default-layout.tsx + 2 modules
var default_layout = __webpack_require__(65353);
// EXTERNAL MODULE: ./features/category/index.module.scss
var index_module = __webpack_require__(32865);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+eagle_china-package-api@2.332.0/node_modules/@kering-technologies/eagle_china-package-api/dist/index.mjs
var dist = __webpack_require__(65943);
// EXTERNAL MODULE: ./features/category/product-list-data.ts
var product_list_data = __webpack_require__(29149);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-utils@1.16.0_events@3.3.0/node_modules/@kering-technologies/ec_china-package-utils/dist/index.esm.js
var index_esm = __webpack_require__(80811);
// EXTERNAL MODULE: ./features/category/product-list.tsx + 1 modules
var product_list = __webpack_require__(77513);
// EXTERNAL MODULE: ./features/category/use-view-type.ts
var use_view_type = __webpack_require__(28597);
// EXTERNAL MODULE: ./features/category/category-navigation.tsx
var category_navigation = __webpack_require__(42826);
// EXTERNAL MODULE: ./components/dialogs/dialog.tsx + 2 modules
var dialog = __webpack_require__(95625);
// EXTERNAL MODULE: ./features/category/navigation-modal/index.module.scss
var navigation_modal_index_module = __webpack_require__(62987);
var navigation_modal_index_module_default = /*#__PURE__*/__webpack_require__.n(navigation_modal_index_module);
// EXTERNAL MODULE: ./hooks/use-get-device-type.ts
var use_get_device_type = __webpack_require__(89834);
// EXTERNAL MODULE: ./utils/to-frontend-category-url.ts
var to_frontend_category_url = __webpack_require__(61476);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/link.js
var next_link = __webpack_require__(60806);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./adapters/gtm-adapter.tsx + 4 modules
var gtm_adapter = __webpack_require__(3054);
// EXTERNAL MODULE: ./adapters/sensors/services/index.ts + 2 modules
var services = __webpack_require__(67893);
// EXTERNAL MODULE: ./adapters/sensors/index.tsx + 2 modules
var sensors = __webpack_require__(64068);
;// CONCATENATED MODULE: ./features/category/navigation-modal/index.tsx













const ToLink = (param)=>{
    let { children, item, className } = param;
    const { clickMenu } = (0,gtm_adapter/* useGtm */.u)();
    const router = (0,next_router.useRouter)();
    const { clickMenu: clickSensorsMenu } = (0,sensors/* useSensors */.D)();
    if (item.unclickable) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
            children: children
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
        href: (0,to_frontend_category_url/* toFrontendCategoryUrl */.c)(item),
        target: item.isOpenNewTab ? "_blank" : "_self",
        className: className,
        onClick: (e)=>{
            if (router.asPath.split("?")[0] === (0,to_frontend_category_url/* toFrontendCategoryUrl */.c)(item)) {
                e.preventDefault();
                window.open((0,to_frontend_category_url/* toFrontendCategoryUrl */.c)(item), "_self");
            }
            try {
                var _getPlpOrPdpCategory;
                // GTM埋点：点击导航 clickMenu
                clickMenu({
                    menuTopCategory: "",
                    menuCategory: "",
                    menuSubCategory: (item === null || item === void 0 ? void 0 : item.nameEn) || "",
                    elementType: "text"
                });
                clickSensorsMenu({
                    menu_top_category: "",
                    menu_category: "",
                    menu_sub_category: (item === null || item === void 0 ? void 0 : item.nameEn) || "",
                    item_category: ((_getPlpOrPdpCategory = (0,services/* getPlpOrPdpCategory */.Sq)()) === null || _getPlpOrPdpCategory === void 0 ? void 0 : _getPlpOrPdpCategory.item_category) || ""
                });
            } catch (e) {
                console.error("[GTM][clickMenu]", e);
            }
        },
        children: children
    });
};
const NavigationModal = (param)=>{
    let { isVisible, onClose, sisterCategoryList } = param;
    const { currentDevice } = (0,use_get_device_type/* useGetDeviceType */.n)();
    const isMobile = currentDevice === use_get_device_type/* DeviceType */.Y.MOBILE;
    const isTablet = currentDevice === use_get_device_type/* DeviceType */.Y.TABLET;
    const currentItemRef = (0,react.useRef)(null);
    const timerRef = (0,react.useRef)(null);
    const startYRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        if (!currentItemRef.current) return;
        // If the seleted category is out of the view port，display the selected category at the last line in the drawer in the viewport.
        if (isVisible) {
            timerRef.current = setTimeout(()=>{
                var _currentItemRef_current;
                (_currentItemRef_current = currentItemRef.current) === null || _currentItemRef_current === void 0 ? void 0 : _currentItemRef_current.scrollIntoView({
                    block: "end",
                    inline: "nearest"
                });
            }, 100);
            return ()=>{
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                    timerRef.current = null;
                }
            };
        }
    }, [
        isVisible
    ]);
    const handleTouchStart = (e)=>{
        startYRef.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e)=>{
        const endY = e.changedTouches[0].clientY;
        if (!startYRef.current) return;
        if (endY > startYRef.current + 5) {
            onClose();
            return;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.V, {
            isVisible: isVisible,
            onClose: onClose,
            onClickMask: onClose,
            lockBodyScroll: true,
            dialogClassName: classnames_default()((navigation_modal_index_module_default()).override, (navigation_modal_index_module_default()).dialog),
            customContentClassName: (navigation_modal_index_module_default()).dialogContent,
            position: currentDevice === use_get_device_type/* DeviceType */.Y.DESKTOP ? "left" : "bottom",
            isCloseIconVisible: currentDevice === use_get_device_type/* DeviceType */.Y.DESKTOP,
            openDialogHeaderOpacity: false,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (navigation_modal_index_module_default()).bar
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (navigation_modal_index_module_default()).drag,
                        onTouchStart: handleTouchStart,
                        onTouchEnd: handleTouchEnd
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                        className: classnames_default()((navigation_modal_index_module_default()).content, "body-scroll-lock-ignore"),
                        children: sisterCategoryList.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                ref: item.isSelected ? currentItemRef : null,
                                className: classnames_default()((navigation_modal_index_module_default()).item, {
                                    [(navigation_modal_index_module_default()).isHighlight]: isMobile ? item.mobileHighLight : isTablet ? item.tabletHighLight : item.highlight,
                                    [(navigation_modal_index_module_default()).isSelected]: item.isSelected,
                                    [(navigation_modal_index_module_default()).isHidden]: (0,index_esm/* arrayOrEmpty */.sq)(item.notIncludeInDevice).includes(currentDevice)
                                }),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ToLink, {
                                    item: item,
                                    className: (navigation_modal_index_module_default()).link,
                                    children: item.name
                                })
                            }, "".concat(item.name, "|").concat(index)))
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ./components/create-portal.tsx
var create_portal = __webpack_require__(77470);
// EXTERNAL MODULE: ./features/category/enum.ts
var category_enum = __webpack_require__(58020);
// EXTERNAL MODULE: ./hooks/use-element-into-view.ts
var use_element_into_view = __webpack_require__(22682);
// EXTERNAL MODULE: ./features/category/filter/index.tsx + 3 modules
var filter = __webpack_require__(40511);
// EXTERNAL MODULE: ./utils/event-bus.ts
var event_bus = __webpack_require__(24286);
// EXTERNAL MODULE: ./packages/loading/index.tsx + 1 modules
var loading = __webpack_require__(59830);
// EXTERNAL MODULE: ./features/search/search-no-result/index.tsx
var search_no_result = __webpack_require__(92496);
// EXTERNAL MODULE: ./components/by-breakpoints.tsx
var by_breakpoints = __webpack_require__(25073);
// EXTERNAL MODULE: ./contexts/module-height.tsx
var module_height = __webpack_require__(80388);
// EXTERNAL MODULE: ./hooks/use-back-to-top-and-nav-sticky.ts + 1 modules
var use_back_to_top_and_nav_sticky = __webpack_require__(87728);
// EXTERNAL MODULE: ./utils/constant.ts
var constant = __webpack_require__(64825);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/head.js
var head = __webpack_require__(31852);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
;// CONCATENATED MODULE: ./features/category/category-seo-head.tsx



const CategorySEOHead = (param)=>{
    let { categoryInfo } = param;
    const rootCategoryName = categoryInfo.breadcrumbs.length > 0 ? categoryInfo.breadcrumbs[0].name : "";
    const secondaryCategoryName = categoryInfo.breadcrumbs.length > 1 ? categoryInfo.breadcrumbs[categoryInfo.breadcrumbs.length - 1].name : "";
    const threeCategoryName = categoryInfo.breadcrumbs.length > 2 ? categoryInfo.breadcrumbs[categoryInfo.breadcrumbs.length - 2].name : "";
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                children: (categoryInfo === null || categoryInfo === void 0 ? void 0 : categoryInfo.metaTitle) || (threeCategoryName || secondaryCategoryName || rootCategoryName ? "圣罗兰".concat(rootCategoryName).concat(secondaryCategoryName).concat(threeCategoryName ? "-" + threeCategoryName : "", "-Saint Laurent圣罗兰官方网站 | YSL.CN") : constant/* BrandName */.rV)
            }, "title"),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                name: "description",
                content: categoryInfo.metaDescription || "欢迎访问Saint Laurent圣罗兰官方网站，探索并选购 Saint Laurent ".concat(rootCategoryName).concat(secondaryCategoryName).concat(threeCategoryName, "。浏览 Saint Laurent圣罗兰官方网站，探索包袋、成衣、鞋履、小皮具和配饰 - YSL.CN")
            }, "description"),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                name: "keywords",
                content: (categoryInfo === null || categoryInfo === void 0 ? void 0 : categoryInfo.metaKeywords) ? categoryInfo === null || categoryInfo === void 0 ? void 0 : categoryInfo.metaKeywords : "ysl,圣罗兰".concat(rootCategoryName, ",圣罗兰").concat(secondaryCategoryName, ",圣罗兰").concat(threeCategoryName)
            }, "keywords"),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("link", {
                rel: "canonical",
                href: "".concat("https://www.ysl.cn", "/categories").concat(categoryInfo.url)
            }, "canonical")
        ]
    });
};

// EXTERNAL MODULE: ./features/seo-h1.tsx
var seo_h1 = __webpack_require__(50335);
// EXTERNAL MODULE: ./components/bread-crumb/index.module.scss
var bread_crumb_index_module = __webpack_require__(82117);
var bread_crumb_index_module_default = /*#__PURE__*/__webpack_require__.n(bread_crumb_index_module);
// EXTERNAL MODULE: ./components/scrollX-text/index.module.scss
var scrollX_text_index_module = __webpack_require__(34876);
var scrollX_text_index_module_default = /*#__PURE__*/__webpack_require__.n(scrollX_text_index_module);
// EXTERNAL MODULE: ./hooks/use-breakpoints.ts
var use_breakpoints = __webpack_require__(21525);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-hooks@1.17.0_lodash.debounce@4.0.8_lodash.throttle@4.1._nnr3xwofk5oatghfixxbrp4jym/node_modules/@kering-technologies/ec_china-package-hooks/dist/index.esm.js
var dist_index_esm = __webpack_require__(59265);
;// CONCATENATED MODULE: ./components/scrollX-text/index.tsx






const ScrollXText = (param)=>{
    let { children, wraperClassName, scrollTextClassName, isTextOverflowScrollToEnd, isFadeInFadeOutVisible = true } = param;
    const wrapperRef = (0,react.useRef)(null);
    const textContainerRef = (0,react.useRef)(null);
    const textRef = (0,react.useRef)(null);
    const [isOverflowText, setIsOverflowText] = (0,react.useState)(false);
    const [isToLeft, setIsToLeft] = (0,react.useState)(false);
    const [isToRight, setIsToRight] = (0,react.useState)(false);
    const [isDivScroll, setIsDivScroll] = (0,react.useState)(false);
    const isDragging = (0,react.useRef)(false);
    const dragStart = (0,react.useRef)(0);
    const scrollStart = (0,react.useRef)(0);
    const { isDesktop } = (0,use_breakpoints/* useBreakpoints */.k)();
    const resizeDiv = (0,react.useCallback)(()=>{
        var _wrapperRef_current, _textRef_current;
        const wrapperWidth = (_wrapperRef_current = wrapperRef.current) === null || _wrapperRef_current === void 0 ? void 0 : _wrapperRef_current.getBoundingClientRect().width;
        const textWidth = (_textRef_current = textRef.current) === null || _textRef_current === void 0 ? void 0 : _textRef_current.getBoundingClientRect().width;
        const isOverflowText = textWidth > wrapperWidth;
        if (isTextOverflowScrollToEnd && isOverflowText) {
            var _textContainerRef_current;
            (_textContainerRef_current = textContainerRef.current) === null || _textContainerRef_current === void 0 ? void 0 : _textContainerRef_current.scrollTo({
                left: textWidth,
                behavior: "smooth"
            });
        }
        if (!isFadeInFadeOutVisible) return;
        setIsOverflowText(isOverflowText);
        if (isOverflowText) {
            var _textContainerRef_current1;
            (_textContainerRef_current1 = textContainerRef.current) === null || _textContainerRef_current1 === void 0 ? void 0 : _textContainerRef_current1.addEventListener("scroll", (e)=>{
                var _e_target;
                const scrollLeft = (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.scrollLeft;
                setIsDivScroll(true);
                setIsToLeft(scrollLeft === 0);
                setIsToRight(textWidth - wrapperWidth < scrollLeft + 1);
            });
        }
    }, [
        isFadeInFadeOutVisible,
        isTextOverflowScrollToEnd
    ]);
    const debounce = (0,dist_index_esm/* useDebounce */.Nr)((entries)=>{
        for (const entry of entries){
            const wrapper = wrapperRef.current;
            if (!wrapper) return;
            if (entry.target === wrapper) {
                resizeDiv();
            }
        }
    }, 50);
    (0,react.useEffect)(()=>{
        resizeDiv();
        const wrapper = wrapperRef.current;
        if (!wrapper) return;
        const resizeObserver = new ResizeObserver(debounce);
        resizeObserver.observe(wrapper);
        return ()=>{
            resizeObserver && resizeObserver.disconnect();
        };
    }, [
        debounce,
        isFadeInFadeOutVisible,
        isTextOverflowScrollToEnd,
        resizeDiv
    ]);
    const handleMouseDown = (e)=>{
        var _textContainerRef_current;
        if (!isDesktop) return;
        isDragging.current = true;
        dragStart.current = e.pageX;
        scrollStart.current = (_textContainerRef_current = textContainerRef.current) === null || _textContainerRef_current === void 0 ? void 0 : _textContainerRef_current.scrollLeft;
    };
    const handleMouseMove = (e)=>{
        if (!isDesktop) return;
        if (!isDragging.current) return;
        const delta = e.pageX - dragStart.current;
        textContainerRef.current.scrollLeft = scrollStart.current - delta;
    };
    const handleMouseUp = ()=>{
        if (!isDesktop) return;
        isDragging.current = false;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((scrollX_text_index_module_default()).wrapper, wraperClassName),
        ref: wrapperRef,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ref: textContainerRef,
            onMouseDown: handleMouseDown,
            onMouseMove: handleMouseMove,
            onMouseUp: handleMouseUp,
            onMouseLeave: handleMouseUp,
            className: classnames_default()((scrollX_text_index_module_default()).textContainer, scrollTextClassName, isTextOverflowScrollToEnd && isOverflowText ? (scrollX_text_index_module_default()).isOverflowLeftText : !isTextOverflowScrollToEnd && isOverflowText ? (scrollX_text_index_module_default()).isOverflowRightText : "", isDivScroll ? (scrollX_text_index_module_default()).isOverflowText : "", isToLeft ? (scrollX_text_index_module_default()).isToLeft : "", isToRight ? (scrollX_text_index_module_default()).isToRight : ""),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                ref: textRef,
                className: (scrollX_text_index_module_default()).text,
                children: children
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/bread-crumb/index.tsx







const genHref = (item, isLast)=>{
    if (item.id === "-1") return "/";
    if (!isLast && !!item.url) {
        return "/categories".concat(item.url);
    }
    return "";
};
const Breadcrumb = (param)=>{
    let { data, wrapperClassName, onlyBack = false, definedArrow } = param;
    const composedData = (0,react.useMemo)(()=>[
            {
                id: "-1",
                name: "YSL",
                url: "/"
            },
            ...data
        ], [
        data
    ]);
    if (!(0,index_esm/* arrayOrEmpty */.sq)(composedData).length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ScrollXText, {
        wraperClassName: classnames_default()((bread_crumb_index_module_default()).wrapper, wrapperClassName),
        isFadeInFadeOutVisible: false,
        isTextOverflowScrollToEnd: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classnames_default()((bread_crumb_index_module_default()).breadCrumbs),
            children: onlyBack ? /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                href: genHref(composedData[Math.max(composedData.length - 2, 0)], false),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: classnames_default()((bread_crumb_index_module_default()).breadItemArrow, definedArrow),
                        children: "<"
                    }),
                    composedData[Math.max(composedData.length - 2, 0)].name
                ]
            }) : composedData.map((item, index)=>{
                const isLast = index === composedData.length - 1 ? true : false;
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (bread_crumb_index_module_default()).breadItem,
                    children: [
                        isLast ? item.name : /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
                            href: genHref(item, isLast),
                            className: (bread_crumb_index_module_default()).link,
                            children: item.name
                        }),
                        isLast ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: classnames_default()((bread_crumb_index_module_default()).breadItemArrow),
                            children: "/"
                        })
                    ]
                }, item.id);
            })
        })
    });
};
/* harmony default export */ var bread_crumb = (/*#__PURE__*/(0,react.memo)(Breadcrumb));

// EXTERNAL MODULE: ./adapters/sensors/use-map-sensors-events.ts + 7 modules
var use_map_sensors_events = __webpack_require__(94278);
// EXTERNAL MODULE: ./utils/category-storage.ts
var category_storage = __webpack_require__(36967);
// EXTERNAL MODULE: ./components/cms/cms.tsx + 44 modules
var cms = __webpack_require__(34600);
;// CONCATENATED MODULE: ./features/category/index.tsx



































// 排序 GTM 映射表
const rankingSortMap = new Map([
    [
        "positionasc",
        "default"
    ],
    [
        "new_arrivaldesc",
        "Latest Arrivals"
    ],
    [
        "priceasc",
        "PriceAscending"
    ],
    [
        "pricedesc",
        "PriceDescending"
    ]
]);
const CategoriesWrapper = (props)=>{
    var _productData_categoryInfo, _productData_prices, _productData_prices1, _productData_categoryInfo1, _productData_componentRenders_, _productData_componentRenders, _productData_componentRenders_1, _productData_componentRenders1;
    const router = (0,next_router.useRouter)();
    const productData = props;
    // 面包屑数据
    const breadcrumbs = (0,react.useMemo)(()=>{
        var _productData_categoryInfo;
        return ((_productData_categoryInfo = productData.categoryInfo) === null || _productData_categoryInfo === void 0 ? void 0 : _productData_categoryInfo.breadcrumbs) || [];
    }, [
        (_productData_categoryInfo = productData.categoryInfo) === null || _productData_categoryInfo === void 0 ? void 0 : _productData_categoryInfo.breadcrumbs
    ]);
    const [editorialComponentRenders, setEditorialComponentRenders] = (0,react.useState)(productData.editorialComponentRenders) // plp插入的组件，每次调接口的时候都需要更新
    ;
    const routerData = (0,index_esm/* getQueryWithoutUrl */.Z7)(router.query);
    const queryRef = (0,react.useRef)(routerData);
    const url = (0,react.useMemo)(()=>router.query.url.join("/"), [
        router.query.url
    ]);
    (0,react.useEffect)(()=>{
        if (breadcrumbs.length) {
            category_storage/* set */.t8(breadcrumbs);
        }
    }, [
        breadcrumbs
    ]);
    // 价格
    const priceFilter = (0,react.useMemo)(()=>{
        var _queryRef_current_price, _queryRef_current, _productData_prices, _productData_prices1;
        let priceRange = [];
        if ((_queryRef_current = queryRef.current) === null || _queryRef_current === void 0 ? void 0 : (_queryRef_current_price = _queryRef_current.price) === null || _queryRef_current_price === void 0 ? void 0 : _queryRef_current_price.includes("-")) priceRange = queryRef.current.price.split("-");
        return {
            code: dist/* ApiFilterCode */.Xs.priceFilter,
            count: 0,
            isMultiselect: true,
            items: [],
            name: "价格",
            sort: 998,
            prices: {
                maxPrice: (productData === null || productData === void 0 ? void 0 : (_productData_prices = productData.prices) === null || _productData_prices === void 0 ? void 0 : _productData_prices.maxPrice) || 0,
                minPrice: (productData === null || productData === void 0 ? void 0 : (_productData_prices1 = productData.prices) === null || _productData_prices1 === void 0 ? void 0 : _productData_prices1.minPrice) || 0
            },
            priceRange
        };
    }, [
        productData === null || productData === void 0 ? void 0 : (_productData_prices = productData.prices) === null || _productData_prices === void 0 ? void 0 : _productData_prices.maxPrice,
        productData === null || productData === void 0 ? void 0 : (_productData_prices1 = productData.prices) === null || _productData_prices1 === void 0 ? void 0 : _productData_prices1.minPrice
    ]);
    // 官网有货
    const inventoryFilter = (0,react.useMemo)(()=>({
            code: dist/* ApiFilterCode */.Xs.inventoryFilter,
            count: 0,
            isMultiselect: true,
            items: [
                {
                    isSelected: !!queryRef.current.inventoryFilter,
                    label: "官网有货",
                    value: "1"
                }
            ],
            name: "库存",
            sort: 999
        }), []);
    const [totalProducts, setTotalProducts] = (0,react.useState)(productData.totalProducts);
    const [filterTotalProducts, setFilterTotalProducts] = (0,react.useState)(0);
    const { startLoading, finishLoading } = (0,loading/* useLoading */.r$)();
    const [productList, setProductList] = (0,react.useState)((0,index_esm/* arrayOrEmpty */.sq)(productData.items));
    const [nowProductList, setNowProductList] = (0,react.useState)((0,index_esm/* arrayOrEmpty */.sq)(productData.items));
    const [filters, setFilters] = (0,react.useState)([]);
    /** 筛选项个数 */ const [filterCount, setFilterCount] = (0,react.useState)(0);
    const [sortOrders, setSortOrders] = (0,react.useState)([]);
    const buttonRef = (0,react.useRef)(null);
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [endOfLoading, setEndOfLoading] = (0,react.useState)(productData.currentPage >= productData.totalPages);
    const { currentDevice } = (0,use_get_device_type/* useGetDeviceType */.n)();
    // 空结果页配置
    const [emptySearchConfig, setEmptySearchConfig] = (0,react.useState)();
    const { viewType, setViewType } = (0,use_view_type/* useViewType */.F)();
    const [isNavigationModalVisible, setIsNavigationModalVisible] = (0,react.useState)(false);
    const { filterProductList, resetFilters, sortProductList, filterIntention, changeListDisplay } = (0,gtm_adapter/* useGtm */.u)();
    const { filterProductList: sensorsFilterProductList } = (0,use_map_sensors_events/* useMapSensorsEvents */.U)();
    const { resetFilters: sensorsResetFilters, changeListDisplay: sensorsChangeListDisplay } = (0,sensors/* useSensors */.D)();
    const [diffDeviceViewType, setDiffDeviceViewType] = (0,react.useState)(currentDevice === use_get_device_type/* DeviceType */.Y.DESKTOP ? category_enum/* ProductListEnum */.EK.DESKTOP_THREE : category_enum/* ProductListEnum */.EK.MOBILE_THREE);
    // filter dialog
    const [isFilterDialogVisible, setIsFilterDialogVisible] = (0,react.useState)(false);
    // 筛选排序
    const selectedSort = (0,product_list_data/* getSelectedSort */.a)({
        sortOrders,
        query: router.query
    });
    const navRef = (0,react.useRef)(null);
    const [navIsIntersecting, setNavIsIntersecting] = (0,react.useState)(true);
    const { topHeight } = (0,module_height/* useModuleHeight */.l)();
    const [isDefaultView, setIsDefaultView] = (0,react.useState)(viewType === category_enum/* ViewType */.bW.MOBILE_SIMPLE_DESKTOP_DETAIL);
    /**
   * mobile/tablet 底部footer出现 nav，否则一直出现
   * mobile/tablet 底部footer出现 或者回到页面顶端的时候 back to top 消失
   * desktop navRef不在视口的时候 上滑消失，下滑出现
   */ const { isDesktopNavSticky, isMobileAndTabletNavSticky } = (0,use_back_to_top_and_nav_sticky/* useBackToTopAndNavSticky */.C)(currentDevice === use_get_device_type/* DeviceType */.Y.DESKTOP ? navIsIntersecting : false);
    const [isBackToTopVisible, setIsBackToTopVisible] = (0,react.useState)(false);
    const [CMSpositions, setCMSPositions] = (0,react.useState)([]) // 不同设备展示插入组件的位置
    ;
    const windowWidth = (0,dist_index_esm/* useWindowWidth */.Lm)();
    // #region 处理 filter 数据和更新 url
    const handleFilterData = (0,react.useCallback)((data)=>{
        var _data_prices, _data_prices1, _queryRef_current_price, _queryRef_current;
        // 设置是否勾选库存
        inventoryFilter.items[0].isSelected = !!queryRef.current.inventoryFilter;
        priceFilter.prices = {
            minPrice: (_data_prices = data.prices) === null || _data_prices === void 0 ? void 0 : _data_prices.minPrice,
            maxPrice: (_data_prices1 = data.prices) === null || _data_prices1 === void 0 ? void 0 : _data_prices1.maxPrice
        };
        let priceRange = [];
        if ((_queryRef_current = queryRef.current) === null || _queryRef_current === void 0 ? void 0 : (_queryRef_current_price = _queryRef_current.price) === null || _queryRef_current_price === void 0 ? void 0 : _queryRef_current_price.includes("-")) priceRange = queryRef.current.price.split("-");
        priceFilter.priceRange = priceRange;
        setFilters([
            inventoryFilter,
            ...data.filters,
            priceFilter
        ]);
        setSortOrders(data.sortOrders);
        setFilterCount((0,product_list_data/* getSelectedFilterCount */.F)([
            inventoryFilter,
            ...data.filters,
            priceFilter
        ]));
        setFilterTotalProducts(data.productResult);
    }, [
        inventoryFilter,
        priceFilter
    ]);
    // #end region
    // #region获取商品列表
    const getProductList = (0,react.useCallback)(async function() {
        let scroll = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        if (lodash_isequal_default()(router.query, queryRef.current)) return;
        try {
            if (isLoading) return;
            setIsLoading(true);
            if (queryRef.current.page === 1) {
                setEndOfLoading(false);
                (0,loading/* setHiddenLoading */.Wn)(false);
            } else {
                (0,loading/* setHiddenLoading */.Wn)(true);
            }
            const { data: res } = await dist/* api */.hi.category.getProductList({
                url,
                config: {
                    params: queryRef.current
                }
            });
            if ((res === null || res === void 0 ? void 0 : res.status) && (res === null || res === void 0 ? void 0 : res.data)) {
                setIsLoading(false);
                const { data } = res;
                const total = data.totalProducts;
                const totalPages = data.totalPages;
                setTotalProducts(total);
                setEditorialComponentRenders(data.editorialComponentRenders);
                const list = data.items;
                if (queryRef.current.page === 1) {
                    setProductList(list);
                    setNowProductList(list);
                    data.currentPage >= totalPages && setEndOfLoading(true);
                } else {
                    setProductList((val)=>{
                        var _queryRef_current;
                        const listData = [
                            ...val,
                            ...list
                        ];
                        ((_queryRef_current = queryRef.current) === null || _queryRef_current === void 0 ? void 0 : _queryRef_current.page) >= totalPages && setEndOfLoading(true);
                        return listData;
                    });
                    setNowProductList(list);
                }
                const updatedUrl = (0,index_esm/* getUrlWithQuery */.bT)(url, queryRef.current);
                if (window.location.pathname.startsWith("/categories")) {
                    router.replace(updatedUrl, undefined, {
                        scroll,
                        shallow: true
                    });
                }
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            console.log("[categories][getProductList]", error);
        }
    }, [
        router,
        isLoading,
        url
    ]);
    // #end region
    /**
   * 点击筛选弹层中的底部的“筛选”更新plp列表
   */ const applyFilterData = (0,react.useCallback)(()=>{
        // 点击应用筛选的时候需要将page重置
        queryRef.current.page = 1;
        const updatedUrl = (0,index_esm/* getUrlWithQuery */.bT)(url, queryRef.current);
        if (window.location.pathname.startsWith("/categories")) {
            router.replace(updatedUrl, undefined, {
                scroll: false,
                shallow: true
            });
        }
        getProductList(true);
        // GTM 筛选
        if (queryRef.current.code !== "sort") {
            try {
                var _filters_find;
                const sizeArr = (_filters_find = filters.find((item)=>item.code === queryRef.current.code)) === null || _filters_find === void 0 ? void 0 : _filters_find.items;
                // GTM埋点： 筛选器产品列表
                filterProductList({
                    filterType: queryRef.current.code,
                    filterValue: (sizeArr === null || sizeArr === void 0 ? void 0 : sizeArr.filter((item)=>item.isSelected).map((i)=>i.label).join(",")) || ""
                });
            } catch (e) {
                console.error("[GTM][filterProductList]", e);
            }
        }
        sensorsFilterProductList(queryRef.current, filters, sortOrders);
        if (queryRef.current.code === "sort") {
            try {
                const rankingSort = rankingSortMap.get("".concat(queryRef.current.sort).concat(queryRef.current.sortDir));
                // GTM埋点： 排序产品列表
                rankingSort && sortProductList({
                    rankingSort
                });
            } catch (e) {
                console.error("[GTM][sortProductList]", e);
            }
        }
    }, [
        filterProductList,
        filters,
        getProductList,
        router,
        sensorsFilterProductList,
        sortOrders,
        sortProductList,
        url
    ]);
    // 获取下一页数据
    const getNextPageProductData = (0,react.useCallback)((isIntersecting)=>{
        var _queryRef_current;
        if (endOfLoading || isLoading || !isIntersecting) return;
        queryRef.current = {
            ...queryRef.current,
            page: ((queryRef === null || queryRef === void 0 ? void 0 : (_queryRef_current = queryRef.current) === null || _queryRef_current === void 0 ? void 0 : _queryRef_current.page) ? Number(queryRef.current.page) : 1) + 1
        };
        getProductList(false);
    }, [
        endOfLoading,
        isLoading,
        getProductList
    ]);
    // 获取空筛选配置
    const getEmptySearch = (0,react.useCallback)(async ()=>{
        try {
            startLoading();
            const { data: res } = await dist/* api */.hi.search.getEmptySearch();
            if ((res === null || res === void 0 ? void 0 : res.status) && (res === null || res === void 0 ? void 0 : res.data)) {
                setEmptySearchConfig(res.data);
            }
            finishLoading();
        } catch (error) {
            finishLoading();
            console.log("[search][getEmptySearch][error]", error);
        }
    }, [
        finishLoading,
        startLoading
    ]);
    (0,react.useEffect)(()=>{
        // 空搜索结果页配置
        !(productList === null || productList === void 0 ? void 0 : productList.length) && getEmptySearch();
    }, [
        getEmptySearch,
        productList === null || productList === void 0 ? void 0 : productList.length
    ]);
    (0,use_element_into_view/* useElementIntoView */.R)({
        element: buttonRef.current,
        callBack: getNextPageProductData,
        options: {
            rootMargin: "0px 0px 300px 0px"
        }
    });
    // #region 点击 filter选项的时候只更新 filter，不需要更新 plp 列表
    const getFilterList = (0,react.useCallback)(async ()=>{
        try {
            // 获得带参数的类别
            const { data: res } = await dist/* api */.hi.category.getFilterList({
                url,
                query: queryRef.current
            });
            if (!(res === null || res === void 0 ? void 0 : res.status) || !res.data) return;
            handleFilterData(res.data);
        } catch (error) {
            console.log("[PLP][getFilterList]", error);
        }
    }, [
        handleFilterData,
        url
    ]);
    const updateFilterData = (0,react.useCallback)(async (param)=>{
        let { code, selectedOption } = param;
        const sortData = code === "sort" ? selectedOption : selectedSort;
        const query = {
            page: 1,
            sort: sortData === null || sortData === void 0 ? void 0 : sortData.sort,
            sortDir: sortData === null || sortData === void 0 ? void 0 : sortData.sortDir
        };
        if (code !== "sort") {
            query[code] = selectedOption;
        }
        queryRef.current = {
            ...queryRef.current,
            ...query
        };
        if (!selectedOption) delete queryRef.current[code];
        getFilterList();
    }, [
        getFilterList,
        selectedSort
    ]);
    (0,react.useEffect)(()=>{
        (0,event_bus/* $on */.Zn)(category_enum/* FilterDataEnum */.e7.UPDATE_FILTER_DATA, updateFilterData);
        return ()=>{
            (0,event_bus/* $off */.M5)(category_enum/* FilterDataEnum */.e7.UPDATE_FILTER_DATA, updateFilterData);
        };
    }, [
        updateFilterData
    ]);
    // #end region
    // 清除筛选，需要重置所有 filter，但不需要更新 plp 列表
    const clearFilterData = (0,react.useCallback)(async ()=>{
        // 清空地址栏所有数据
        queryRef.current = {
            page: 1
        };
        getFilterList();
        // GTM埋点： 重置筛选器
        resetFilters();
        sensorsResetFilters();
    }, [
        getFilterList,
        resetFilters,
        sensorsResetFilters
    ]);
    //#region  filter list
    (0,react.useEffect)(()=>{
        getFilterList();
    }, [
        getFilterList
    ]);
    //#endregion
    (0,react.useEffect)(()=>{
        (0,event_bus/* $on */.Zn)(category_enum/* FilterDataEnum */.e7.APPLY_FILTER_DATA, applyFilterData);
        (0,event_bus/* $on */.Zn)(category_enum/* FilterDataEnum */.e7.CLEAR_FILTER_DATA, clearFilterData);
        return ()=>{
            (0,event_bus/* $off */.M5)(category_enum/* FilterDataEnum */.e7.APPLY_FILTER_DATA, applyFilterData);
            (0,event_bus/* $off */.M5)(category_enum/* FilterDataEnum */.e7.CLEAR_FILTER_DATA, clearFilterData);
        };
    }, [
        applyFilterData,
        clearFilterData
    ]);
    // 根据不同端设置cms要插入的位置
    (0,react.useEffect)(()=>{
        let deviceType = "";
        if (windowWidth >= 1366) {
            deviceType = "large";
        } else {
            deviceType = currentDevice;
        }
        const arr = (editorialComponentRenders === null || editorialComponentRenders === void 0 ? void 0 : editorialComponentRenders.map((item)=>{
            const key = "".concat(deviceType, "Postion");
            return parseInt(item[key]);
        })) || [];
        setCMSPositions(arr);
    }, [
        currentDevice,
        editorialComponentRenders,
        windowWidth
    ]);
    const getIsIntersecting = (isIntersecting)=>{
        setNavIsIntersecting(isIntersecting);
    };
    (0,use_element_into_view/* useElementIntoView */.R)({
        element: navRef.current,
        callBack: getIsIntersecting,
        options: {
            rootMargin: "-".concat(topHeight, "px 0px 0px 0px")
        }
    });
    (0,react.useEffect)(()=>{
        // back to top 显示规则至少4行商品
        if (currentDevice === use_get_device_type/* DeviceType */.Y.DESKTOP) {
            setIsBackToTopVisible(isDefaultView ? totalProducts > category_enum/* ProductTotalNum */.T9.NINE : totalProducts > category_enum/* ProductTotalNum */.T9.EIGHTEEN);
        } else {
            setIsBackToTopVisible(isDefaultView ? totalProducts > category_enum/* ProductTotalNum */.T9.NINE : totalProducts > category_enum/* ProductTotalNum */.T9.SIX);
        }
        return ()=>{
            setIsBackToTopVisible(false);
        };
    }, [
        currentDevice,
        isDefaultView,
        totalProducts
    ]);
    (0,react.useEffect)(()=>{
        // GTM埋点： 展示过滤器
        isFilterDialogVisible && filterIntention();
    }, [
        filterIntention,
        isFilterDialogVisible
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(default_layout/* DefaultLayout */.H, {
        headerNoOverlap: true,
        wrapperClassName: (index_module_default()).layout,
        headerClassName: classnames_default()((index_module_default()).header, {
            [(index_module_default()).disappear]: isDesktopNavSticky
        }),
        headerIsSubmenuVisibleClassName: (index_module_default()).headerIsSubmenuVisible,
        isBackToTopVisible: isBackToTopVisible,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CategorySEOHead, {
                categoryInfo: productData.categoryInfo
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (index_module_default()).wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(seo_h1/* SeoH1 */.f, {
                        className: (index_module_default()).categoryTitle,
                        children: ((_productData_categoryInfo1 = productData.categoryInfo) === null || _productData_categoryInfo1 === void 0 ? void 0 : _productData_categoryInfo1.categoryTitle) || productData.categoryInfo.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        ref: navRef,
                        className: (index_module_default()).observerArea
                    }),
                    ((_productData_componentRenders = productData.componentRenders) === null || _productData_componentRenders === void 0 ? void 0 : (_productData_componentRenders_ = _productData_componentRenders[0]) === null || _productData_componentRenders_ === void 0 ? void 0 : _productData_componentRenders_.componentData) && /*#__PURE__*/ (0,jsx_runtime.jsx)(cms/* CMSComponent */.o, {
                        components: (_productData_componentRenders1 = productData.componentRenders) === null || _productData_componentRenders1 === void 0 ? void 0 : (_productData_componentRenders_1 = _productData_componentRenders1[0]) === null || _productData_componentRenders_1 === void 0 ? void 0 : _productData_componentRenders_1.componentData.children,
                        identifier: "top-carrousel"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(category_navigation/* CategoryNavigation */.A, {
                        categoryInfo: productData.categoryInfo,
                        setViewType: setViewType,
                        setIsNavigationModalVisible: setIsNavigationModalVisible,
                        setDiffDeviceViewType: setDiffDeviceViewType,
                        setIsFilterDialogVisible: setIsFilterDialogVisible,
                        navigationRightVisible: !!productList.length,
                        filterCount: filterCount,
                        isDefaultView: isDefaultView,
                        setIsDefaultView: setIsDefaultView,
                        navRightClassName: classnames_default()((index_module_default()).rightNav, {
                            [(index_module_default()).isMobileAndTabletNavHidden]: !isMobileAndTabletNavSticky
                        }),
                        onViewTypeChange: (viewTypeType)=>{
                            try {
                                changeListDisplay({
                                    viewType: viewTypeType
                                });
                                sensorsChangeListDisplay({
                                    view_type: viewTypeType
                                });
                            } catch (e) {
                                console.error("[GTM][changeListDisplay]", e);
                            }
                        }
                    }),
                    !(productList === null || productList === void 0 ? void 0 : productList.length) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(search_no_result/* SearchNoResult */.y, {
                        listName: "",
                        emptySearchConfig: emptySearchConfig,
                        isPLP: true,
                        filterCount: filterCount,
                        onOpenFilterDialog: ()=>{
                            setIsFilterDialogVisible(true);
                        }
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(product_list/* ProductList */.c, {
                        viewType: viewType,
                        productList: productList,
                        nowProductList: nowProductList,
                        listName: "productList",
                        editorialComponentRenders: editorialComponentRenders,
                        diffDeviceViewType: diffDeviceViewType,
                        totalProducts: totalProducts,
                        CMSpositions: CMSpositions
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        ref: buttonRef,
                        children: !endOfLoading && productList.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (index_module_default()).loadMoreWrapperNew,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (index_module_default()).loadMore,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (index_module_default()).loadMoreText,
                                    children: "加载中..."
                                })
                            })
                        }) : null
                    }),
                    editorialComponentRenders ? /*#__PURE__*/ (0,jsx_runtime.jsx)(product_list/* InsertedComponent */.D, {
                        positions: CMSpositions,
                        index: category_enum/* PLPLastPositionEnum */.$M.LAST_POSITION_INDEX,
                        editorialComponentRenders: editorialComponentRenders,
                        trackSwitch: {
                            eeListView: true
                        },
                        totalProducts: totalProducts
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(bread_crumb, {
                        data: breadcrumbs
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationModal, {
                            isVisible: isNavigationModalVisible,
                            sisterCategoryList: productData.categoryInfo.childrenCategoryList,
                            onClose: ()=>setIsNavigationModalVisible(false)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(filter/* FilterDialog */.U, {
                        isVisible: isFilterDialogVisible,
                        onClose: ()=>{
                            setIsFilterDialogVisible(false);
                        },
                        filters: filters,
                        filterCount: filterCount,
                        totalProducts: filterTotalProducts,
                        sortOrders: sortOrders
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(by_breakpoints/* ByBreakpoints */.W, {
                breakpoints: [
                    "desktop"
                ],
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classnames_default()((index_module_default()).navSticky, {
                        [(index_module_default()).disappear]: !isDesktopNavSticky
                    }),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(category_navigation/* CategoryNavigation */.A, {
                        categoryInfo: productData.categoryInfo,
                        setViewType: setViewType,
                        setIsNavigationModalVisible: setIsNavigationModalVisible,
                        setDiffDeviceViewType: setDiffDeviceViewType,
                        setIsFilterDialogVisible: setIsFilterDialogVisible,
                        navigationRightVisible: !!productList.length,
                        wrapperClassName: classnames_default()((index_module_default()).navStickyCon, {
                            [(index_module_default()).appear]: isDesktopNavSticky
                        }),
                        filterCount: filterCount,
                        isDefaultView: isDefaultView,
                        setIsDefaultView: setIsDefaultView
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./pages/cms/[...url].tsx
var _url_ = __webpack_require__(12247);
;// CONCATENATED MODULE: ./pages/categories/[...url].tsx






const Categories = (props)=>{
    const router = (0,next_router.useRouter)();
    (0,react.useEffect)(()=>{
        return ()=>{
            (0,loading/* setHiddenLoading */.Wn)(false);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CategoriesWrapper, {
        ...props
    }, router.asPath.split("?")[0]);
};
const DynamicCMS = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(_url_["default"], {
        ...props
    });
const CategoriesOrCms = (props)=>{
    var _props_isCategoryPage;
    const isCategoryPage = (_props_isCategoryPage = props === null || props === void 0 ? void 0 : props.isCategoryPage) !== null && _props_isCategoryPage !== void 0 ? _props_isCategoryPage : true;
    return isCategoryPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Categories, {
        ...props
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(DynamicCMS, {
        ...props
    });
};
var __N_SSP = true;
/* harmony default export */ var categories_url_ = (CategoriesOrCms);


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

/***/ 82117:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"bread-crumb_textFontWeight___FS1f","wrapper":"bread-crumb_wrapper__6raBF","breadCrumbs":"bread-crumb_breadCrumbs__iIFf0","breadItemArrow":"bread-crumb_breadItemArrow__6H5SE","breadItem":"bread-crumb_breadItem__WLjEp","link":"bread-crumb_link__vgvwa","button-hover":"bread-crumb_button-hover__wiaS7"};

/***/ }),

/***/ 34876:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"scrollX-text_textFontWeight__W2XqN","wrapper":"scrollX-text_wrapper__q7Pwh","textContainer":"scrollX-text_textContainer___CpZY","isOverflowLeftText":"scrollX-text_isOverflowLeftText__KHBio","isOverflowRightText":"scrollX-text_isOverflowRightText__dvGBX","isToLeft":"scrollX-text_isToLeft__0idv_","isToRight":"scrollX-text_isToRight__lcxFt","isOverflowText":"scrollX-text_isOverflowText__Doj__","text":"scrollX-text_text__UjTbQ","button-hover":"scrollX-text_button-hover__2C_vF"};

/***/ }),

/***/ 62987:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"navigation-modal_textFontWeight__kwB30","override":"navigation-modal_override__k9s4n","dialog":"navigation-modal_dialog__euEmp","dialogContent":"navigation-modal_dialogContent__EZViy","drag":"navigation-modal_drag__LHEH8","bar":"navigation-modal_bar__cCOwe","content":"navigation-modal_content__1iZ2s","item":"navigation-modal_item__m0f4T","isHighlight":"navigation-modal_isHighlight__OmUxs","isSelected":"navigation-modal_isSelected__1oU1P","isHidden":"navigation-modal_isHidden__5DlsO","link":"navigation-modal_link__7awYJ","productCount":"navigation-modal_productCount__Z7VIO","button-hover":"navigation-modal_button-hover__UaJXe"};

/***/ }),

/***/ 22199:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms_textFontWeight__F6JVI","isSlideNoFullScreen":"cms_isSlideNoFullScreen__YcHlN","override":"cms_override__b_ruH","onlyBackToTop":"cms_onlyBackToTop__46X0a","button-hover":"cms_button-hover__fjjbf"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9774,1394,6708,9893,4600,5761,2888,179], function() { return __webpack_exec__(13528); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);