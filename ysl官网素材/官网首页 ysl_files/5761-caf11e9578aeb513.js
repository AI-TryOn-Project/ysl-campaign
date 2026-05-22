(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5761],{

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

/***/ 42826:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ CategoryNavigation; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11527);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50959);
/* harmony import */ var _features_category_category_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11308);
/* harmony import */ var _features_category_category_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_features_category_category_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84875);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_by_breakpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25073);
/* harmony import */ var _assets_svg_arrow_down_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3974);
/* harmony import */ var _features_category_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58020);
/* harmony import */ var _components_client_only__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80887);
/* harmony import */ var _hooks_use_get_device_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89834);









const CategoryNavigation = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((param)=>{
    let { categoryInfo, setViewType, setIsNavigationModalVisible, setDiffDeviceViewType, searchTitle, wrapperClassName, titleClassName, setIsFilterDialogVisible, navigationRightVisible = true, filterCount, isDefaultView, setIsDefaultView, navRightClassName, onViewTypeChange } = param;
    const { currentDevice } = (0,_hooks_use_get_device_type__WEBPACK_IMPORTED_MODULE_8__/* .useGetDeviceType */ .n)();
    const handleViewTypeChange = (device)=>{
        setIsDefaultView(!isDefaultView);
        onViewTypeChange === null || onViewTypeChange === void 0 ? void 0 : onViewTypeChange(isDefaultView ? "preview" : "detail");
        setViewType === null || setViewType === void 0 ? void 0 : setViewType(isDefaultView ? _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ViewType */ .bW.MOBILE_DETAIL_DESKTOP_SIMPLE : _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ViewType */ .bW.MOBILE_SIMPLE_DESKTOP_DETAIL);
        if (device == _hooks_use_get_device_type__WEBPACK_IMPORTED_MODULE_8__/* .DeviceType */ .Y.MOBILE) {
            setDiffDeviceViewType === null || setDiffDeviceViewType === void 0 ? void 0 : setDiffDeviceViewType(isDefaultView ? _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ProductListEnum */ .EK.MOBILE_TWO : _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ProductListEnum */ .EK.MOBILE_THREE);
        } else {
            setDiffDeviceViewType === null || setDiffDeviceViewType === void 0 ? void 0 : setDiffDeviceViewType(isDefaultView ? _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ProductListEnum */ .EK.DESKTOP_SIX : _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ProductListEnum */ .EK.DESKTOP_THREE);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentDevice === _hooks_use_get_device_type__WEBPACK_IMPORTED_MODULE_8__/* .DeviceType */ .Y.DESKTOP) {
            setDiffDeviceViewType === null || setDiffDeviceViewType === void 0 ? void 0 : setDiffDeviceViewType(isDefaultView ? _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ProductListEnum */ .EK.DESKTOP_THREE : _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ProductListEnum */ .EK.DESKTOP_SIX);
        } else {
            setDiffDeviceViewType === null || setDiffDeviceViewType === void 0 ? void 0 : setDiffDeviceViewType(isDefaultView ? _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ProductListEnum */ .EK.MOBILE_THREE : _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ProductListEnum */ .EK.MOBILE_TWO);
        }
    }, [
        currentDevice,
        isDefaultView,
        setDiffDeviceViewType
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_client_only__WEBPACK_IMPORTED_MODULE_7__/* .ClientOnly */ .q, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_features_category_category_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wrapper), wrapperClassName),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_features_category_category_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().left), titleClassName),
                    onClick: ()=>setIsNavigationModalVisible === null || setIsNavigationModalVisible === void 0 ? void 0 : setIsNavigationModalVisible(true),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: (_features_category_category_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title),
                            children: (categoryInfo === null || categoryInfo === void 0 ? void 0 : categoryInfo.categoryTitle) || (categoryInfo === null || categoryInfo === void 0 ? void 0 : categoryInfo.title) || searchTitle
                        }),
                        !searchTitle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_assets_svg_arrow_down_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_features_category_category_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon))
                        })
                    ]
                }),
                navigationRightVisible ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_features_category_category_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().right), "category-navigation", navRightClassName),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_by_breakpoints__WEBPACK_IMPORTED_MODULE_4__/* .ByBreakpoints */ .W, {
                            breakpoints: [
                                _hooks_use_get_device_type__WEBPACK_IMPORTED_MODULE_8__/* .DeviceType */ .Y.MOBILE,
                                _hooks_use_get_device_type__WEBPACK_IMPORTED_MODULE_8__/* .DeviceType */ .Y.TABLET
                            ],
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_features_category_category_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().viewText),
                                onClick: ()=>{
                                    handleViewTypeChange(_hooks_use_get_device_type__WEBPACK_IMPORTED_MODULE_8__/* .DeviceType */ .Y.MOBILE);
                                },
                                children: [
                                    "浏览按\xa0",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        children: isDefaultView ? _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ProductListEnum */ .EK.TWO_COLUMNS : _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ProductListEnum */ .EK.THREE_COLUMNS
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_by_breakpoints__WEBPACK_IMPORTED_MODULE_4__/* .ByBreakpoints */ .W, {
                            breakpoints: [
                                _hooks_use_get_device_type__WEBPACK_IMPORTED_MODULE_8__/* .DeviceType */ .Y.DESKTOP
                            ],
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: (_features_category_category_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().viewText),
                                onClick: ()=>{
                                    handleViewTypeChange(_hooks_use_get_device_type__WEBPACK_IMPORTED_MODULE_8__/* .DeviceType */ .Y.DESKTOP);
                                },
                                children: [
                                    "浏览按\xa0",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                        children: isDefaultView ? _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ProductListEnum */ .EK.SIX_COLUMNS : _features_category_enum__WEBPACK_IMPORTED_MODULE_6__/* .ProductListEnum */ .EK.THREE_COLUMNS
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>{
                                setIsFilterDialogVisible === null || setIsFilterDialogVisible === void 0 ? void 0 : setIsFilterDialogVisible(true);
                            },
                            className: (_features_category_category_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().filter),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "筛选",
                                        filterCount ? "（".concat(filterCount, "）") : ""
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_assets_svg_arrow_down_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_features_category_category_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default().icon))
                                })
                            ]
                        })
                    ]
                }) : null
            ]
        })
    });
});
CategoryNavigation.displayName = "CategoryNavigation";



/***/ }),

/***/ 40511:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U: function() { return /* binding */ FilterDialog; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./features/category/filter/index.module.scss
var index_module = __webpack_require__(80879);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./components/dialogs/dialog.tsx + 2 modules
var dialog = __webpack_require__(95625);
// EXTERNAL MODULE: ./components/price-slider/index.module.scss
var price_slider_index_module = __webpack_require__(46504);
var price_slider_index_module_default = /*#__PURE__*/__webpack_require__.n(price_slider_index_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(40507);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./components/price-slider/ReactSlider.jsx



/**
 * To prevent text selection while dragging.
 * http://stackoverflow.com/questions/5429827/how-can-i-prevent-text-element-selection-with-cursor-drag
 */ function pauseEvent(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    }
    if (e && e.preventDefault) {
        e.preventDefault();
    }
    return false;
}
function stopPropagation(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
}
function sanitizeInValue(x) {
    if (x == null) {
        return [];
    }
    return Array.isArray(x) ? x.slice() : [
        x
    ];
}
function prepareOutValue(x) {
    return x !== null && x.length === 1 ? x[0] : x.slice();
}
function trimSucceeding(length, nextValue, minDistance, max) {
    for(let i = 0; i < length; i += 1){
        const padding = max - i * minDistance;
        if (nextValue[length - 1 - i] > padding) {
            // eslint-disable-next-line no-param-reassign
            nextValue[length - 1 - i] = padding;
        }
    }
}
function trimPreceding(length, nextValue, minDistance, min) {
    for(let i = 0; i < length; i += 1){
        const padding = min + i * minDistance;
        if (nextValue[i] < padding) {
            // eslint-disable-next-line no-param-reassign
            nextValue[i] = padding;
        }
    }
}
function addHandlers(i, eventMap) {
    Object.keys(eventMap).forEach((key)=>{
        if (typeof document !== "undefined") {
            document.addEventListener(key, eventMap[key], false);
        }
        // 修改 ReactSlider 源码，将事件绑定从 document 移到 thumb 元素上，
        // 从而解决：PSEP-154210 在 iOS 当价格组件被撑出一屏后无法滑动问题
        this["thumb".concat(i)].addEventListener(key, eventMap[key], false);
    });
}
function removeHandlers(eventMap) {
    Object.keys(eventMap).forEach((key)=>{
        if (typeof document !== "undefined") {
            document.removeEventListener(key, eventMap[key], false);
        }
        // 修改 ReactSlider 源码，将事件绑定从 document 移到 thumb 元素上，
        // 从而解决：PSEP-154210 在 iOS 当价格组件被撑出一屏后无法滑动问题
        for(let i = 0; i < this.state.zIndices.length; i++){
            this["thumb".concat(i)].removeEventListener(key, eventMap[key], false);
        }
    });
}
function trimAlignValue(val, props) {
    return alignValue(trimValue(val, props), props);
}
function alignValue(val, props) {
    const valModStep = (val - props.min) % props.step;
    let alignedValue = val - valModStep;
    if (Math.abs(valModStep) * 2 >= props.step) {
        alignedValue += valModStep > 0 ? props.step : -props.step;
    }
    return parseFloat(alignedValue.toFixed(5));
}
function trimValue(val, props) {
    let trimmed = val;
    if (trimmed <= props.min) {
        trimmed = props.min;
    }
    if (trimmed >= props.max) {
        trimmed = props.max;
    }
    return trimmed;
}
class ReactSlider extends react.Component {
    componentDidMount() {
        if (true) {
            this.resizeObserver = new ResizeObserver(this.handleResize);
            this.resizeObserver.observe(this.resizeElementRef.current);
            this.resize();
        }
    }
    // Keep the internal `value` consistent with an outside `value` if present.
    // This basically allows the slider to be a controlled component.
    static getDerivedStateFromProps(props, state) {
        const value = sanitizeInValue(props.value);
        if (!value.length) {
            return null;
        }
        // Do not allow controlled upates to happen while we have pending updates
        if (state.pending) {
            return null;
        }
        return {
            value: value.map((item)=>trimAlignValue(item, props))
        };
    }
    componentDidUpdate() {
        // If an upperBound has not yet been determined (due to the component being hidden
        // during the mount event, or during the last resize), then calculate it now
        if (this.state.upperBound === 0) {
            this.resize();
        }
    }
    componentWillUnmount() {
        this.clearPendingResizeTimeouts();
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
    onEnd(eventMap) {
        if (eventMap) {
            removeHandlers.call(this, eventMap);
        }
        if (this.hasMoved) {
            this.fireChangeEvent("onAfterChange");
        }
        // Allow controlled updates to continue
        this.setState({
            pending: false
        });
        this.hasMoved = false;
    }
    getValue() {
        return prepareOutValue(this.state.value);
    }
    getClosestIndex(pixelOffset) {
        let minDist = Number.MAX_VALUE;
        let closestIndex = -1;
        const { value } = this.state;
        const l = value.length;
        for(let i = 0; i < l; i += 1){
            const offset = this.calcOffset(value[i]);
            const dist = Math.abs(pixelOffset - offset);
            if (dist < minDist) {
                minDist = dist;
                closestIndex = i;
            }
        }
        return closestIndex;
    }
    getMousePosition(e) {
        return [
            e["page".concat(this.axisKey())],
            e["page".concat(this.orthogonalAxisKey())]
        ];
    }
    getTouchPosition(e) {
        const touch = e.touches[0];
        return [
            touch["page".concat(this.axisKey())],
            touch["page".concat(this.orthogonalAxisKey())]
        ];
    }
    getKeyDownEventMap() {
        return {
            keydown: this.onKeyDown,
            keyup: this.onKeyUp,
            focusout: this.onBlur
        };
    }
    getMouseEventMap() {
        return {
            mousemove: this.onMouseMove,
            mouseup: this.onMouseUp
        };
    }
    getTouchEventMap() {
        return {
            touchmove: this.onTouchMove,
            touchend: this.onTouchEnd
        };
    }
    getValueFromPosition(position) {
        const diffValue = position / (this.state.sliderLength - this.state.thumbSize) * (this.props.max - this.props.min);
        return trimAlignValue(this.state.startValue + diffValue, this.props);
    }
    getDiffPosition(position) {
        let diffPosition = position - this.state.startPosition;
        if (this.props.invert) {
            diffPosition *= -1;
        }
        return diffPosition;
    }
    resize() {
        const { slider, thumb0: thumb } = this;
        if (!slider || !thumb) {
            return;
        }
        const sizeKey = this.sizeKey();
        // For the slider size, we want to use the client width/height, excluding any borders
        const sliderRect = slider.getBoundingClientRect();
        const sliderSize = slider[sizeKey];
        const sliderMax = sliderRect[this.posMaxKey()];
        const sliderMin = sliderRect[this.posMinKey()];
        // For the thumb size, we want to use the outer width/height, including any borders
        const thumbRect = thumb.getBoundingClientRect();
        const thumbSize = thumbRect[sizeKey.replace("client", "").toLowerCase()];
        const upperBound = sliderSize - thumbSize;
        const sliderLength = Math.abs(sliderMax - sliderMin);
        if (this.state.upperBound !== upperBound || this.state.sliderLength !== sliderLength || this.state.thumbSize !== thumbSize) {
            this.setState({
                upperBound,
                sliderLength,
                thumbSize
            });
        }
    }
    // calculates the offset of a thumb in pixels based on its value.
    calcOffset(value) {
        const range = this.props.max - this.props.min;
        if (range === 0) {
            return 0;
        }
        const ratio = (value - this.props.min) / range;
        return ratio * this.state.upperBound;
    }
    // calculates the value corresponding to a given pixel offset, i.e. the inverse of `calcOffset`.
    calcValue(offset) {
        const ratio = offset / this.state.upperBound;
        return ratio * (this.props.max - this.props.min) + this.props.min;
    }
    calcOffsetFromPosition(position) {
        const { slider } = this;
        const sliderRect = slider.getBoundingClientRect();
        const sliderMax = sliderRect[this.posMaxKey()];
        const sliderMin = sliderRect[this.posMinKey()];
        // The `position` value passed in is the mouse position based on the window height.
        // The slider bounding rect is based on the viewport, so we must add the window scroll
        // offset to normalize the values.
        const windowOffset = window["page".concat(this.axisKey(), "Offset")];
        const sliderStart = windowOffset + (this.props.invert ? sliderMax : sliderMin);
        let pixelOffset = position - sliderStart;
        if (this.props.invert) {
            pixelOffset = this.state.sliderLength - pixelOffset;
        }
        pixelOffset -= this.state.thumbSize / 2;
        return pixelOffset;
    }
    // Snaps the nearest thumb to the value corresponding to `position`
    // and calls `callback` with that thumb's index.
    forceValueFromPosition(position, callback) {
        const pixelOffset = this.calcOffsetFromPosition(position);
        const closestIndex = this.getClosestIndex(pixelOffset);
        const nextValue = trimAlignValue(this.calcValue(pixelOffset), this.props);
        // Clone this.state.value since we'll modify it temporarily
        const value = this.state.value.slice();
        value[closestIndex] = nextValue;
        // Prevents the slider from shrinking below `props.minDistance`
        for(let i = 0; i < value.length - 1; i += 1){
            if (value[i + 1] - value[i] < this.props.minDistance) {
                return;
            }
        }
        this.fireChangeEvent("onBeforeChange");
        this.hasMoved = true;
        this.setState({
            value
        }, ()=>{
            callback(closestIndex);
            this.fireChangeEvent("onChange");
        });
    }
    // clear all pending timeouts to avoid error messages after unmounting
    clearPendingResizeTimeouts() {
        do {
            const nextTimeout = this.pendingResizeTimeouts.shift();
            clearTimeout(nextTimeout);
        }while (this.pendingResizeTimeouts.length);
    }
    start(i, position) {
        const thumbRef = this["thumb".concat(i)];
        if (thumbRef) {
            thumbRef.focus();
        }
        const { zIndices } = this.state;
        // remove wherever the element is
        zIndices.splice(zIndices.indexOf(i), 1);
        // add to end
        zIndices.push(i);
        this.setState((prevState)=>({
                startValue: prevState.value[i],
                startPosition: position !== undefined ? position : prevState.startPosition,
                index: i,
                zIndices
            }));
    }
    moveUpByStep() {
        let step = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.step;
        const oldValue = this.state.value[this.state.index];
        // if the slider is inverted and horizontal we want to honor the inverted value
        const newValue = this.props.invert && this.props.orientation === "horizontal" ? oldValue - step : oldValue + step;
        const trimAlign = trimAlignValue(newValue, this.props);
        this.move(Math.min(trimAlign, this.props.max));
    }
    moveDownByStep() {
        let step = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props.step;
        const oldValue = this.state.value[this.state.index];
        // if the slider is inverted and horizontal we want to honor the inverted value
        const newValue = this.props.invert && this.props.orientation === "horizontal" ? oldValue + step : oldValue - step;
        const trimAlign = trimAlignValue(newValue, this.props);
        this.move(Math.max(trimAlign, this.props.min));
    }
    move(newValue) {
        // Clone this.state.value since we'll modify it temporarily
        const value = this.state.value.slice();
        const { index } = this.state;
        const { length } = value;
        // Short circuit if the value is not changing
        const oldValue = value[index];
        if (newValue === oldValue) {
            return;
        }
        // Trigger only before the first movement
        if (!this.hasMoved) {
            this.fireChangeEvent("onBeforeChange");
        }
        this.hasMoved = true;
        // if "pearling" (= thumbs pushing each other) is disabled,
        // prevent the thumb from getting closer than `minDistance` to the previous or next thumb.
        const { pearling, max, min, minDistance } = this.props;
        if (!pearling) {
            if (index > 0) {
                const valueBefore = value[index - 1];
                if (newValue < valueBefore + minDistance) {
                    // eslint-disable-next-line no-param-reassign
                    newValue = valueBefore + minDistance;
                }
            }
            if (index < length - 1) {
                const valueAfter = value[index + 1];
                if (newValue > valueAfter - minDistance) {
                    // eslint-disable-next-line no-param-reassign
                    newValue = valueAfter - minDistance;
                }
            }
        }
        value[index] = newValue;
        // if "pearling" is enabled, let the current thumb push the pre- and succeeding thumbs.
        if (pearling && length > 1) {
            if (newValue > oldValue) {
                this.pushSucceeding(value, minDistance, index);
                trimSucceeding(length, value, minDistance, max);
            } else if (newValue < oldValue) {
                this.pushPreceding(value, minDistance, index);
                trimPreceding(length, value, minDistance, min);
            }
        }
        // Normally you would use `shouldComponentUpdate`,
        // but since the slider is a low-level component,
        // the extra complexity might be worth the extra performance.
        this.setState({
            value
        }, this.fireChangeEvent.call(this, "onChange"));
    }
    pushSucceeding(value, minDistance, index) {
        let i;
        let padding;
        for(i = index, padding = value[i] + minDistance; value[i + 1] !== null && padding > value[i + 1]; i += 1, padding = value[i] + minDistance){
            // eslint-disable-next-line no-param-reassign
            value[i + 1] = alignValue(padding, this.props);
        }
    }
    pushPreceding(value, minDistance, index) {
        for(let i = index, padding = value[i] - minDistance; value[i - 1] !== null && padding < value[i - 1]; i -= 1, padding = value[i] - minDistance){
            // eslint-disable-next-line no-param-reassign
            value[i - 1] = alignValue(padding, this.props);
        }
    }
    axisKey() {
        if (this.props.orientation === "vertical") {
            return "Y";
        }
        // Defaults to 'horizontal';
        return "X";
    }
    orthogonalAxisKey() {
        if (this.props.orientation === "vertical") {
            return "X";
        }
        // Defaults to 'horizontal'
        return "Y";
    }
    posMinKey() {
        if (this.props.orientation === "vertical") {
            return this.props.invert ? "bottom" : "top";
        }
        // Defaults to 'horizontal'
        return this.props.invert ? "right" : "left";
    }
    posMaxKey() {
        if (this.props.orientation === "vertical") {
            return this.props.invert ? "top" : "bottom";
        }
        // Defaults to 'horizontal'
        return this.props.invert ? "left" : "right";
    }
    sizeKey() {
        if (this.props.orientation === "vertical") {
            return "clientHeight";
        }
        // Defaults to 'horizontal'
        return "clientWidth";
    }
    fireChangeEvent(event) {
        if (this.props[event]) {
            this.props[event](prepareOutValue(this.state.value), this.state.index);
        }
    }
    buildThumbStyle(offset, i) {
        const style = {
            position: "absolute",
            touchAction: "none",
            willChange: this.state.index >= 0 ? this.posMinKey() : undefined,
            zIndex: this.state.zIndices.indexOf(i) + 1
        };
        style[this.posMinKey()] = "".concat(offset, "px");
        return style;
    }
    buildTrackStyle(min, max) {
        const obj = {
            position: "absolute",
            willChange: this.state.index >= 0 ? "".concat(this.posMinKey(), ",").concat(this.posMaxKey()) : undefined
        };
        obj[this.posMinKey()] = min;
        obj[this.posMaxKey()] = max;
        return obj;
    }
    buildMarkStyle(offset) {
        return {
            position: "absolute",
            [this.posMinKey()]: offset
        };
    }
    renderThumbs(offset) {
        const { length } = offset;
        const styles = [];
        for(let i = 0; i < length; i += 1){
            styles[i] = this.buildThumbStyle(offset[i], i);
        }
        const res = [];
        for(let i = 0; i < length; i += 1){
            res[i] = this.renderThumb(styles[i], i);
        }
        return res;
    }
    renderTracks(offset) {
        const tracks = [];
        const lastIndex = offset.length - 1;
        tracks.push(this.renderTrack(0, 0, offset[0]));
        for(let i = 0; i < lastIndex; i += 1){
            tracks.push(this.renderTrack(i + 1, offset[i], offset[i + 1]));
        }
        tracks.push(this.renderTrack(lastIndex + 1, offset[lastIndex], this.state.upperBound));
        return tracks;
    }
    renderMarks() {
        let { marks } = this.props;
        const range = this.props.max - this.props.min + 1;
        if (typeof marks === "boolean") {
            marks = Array.from({
                length: range
            }).map((_, key)=>key);
        } else if (typeof marks === "number") {
            marks = Array.from({
                length: range
            }).map((_, key)=>key).filter((key)=>key % marks === 0);
        }
        return marks.map(parseFloat).sort((a, b)=>a - b).map((mark)=>{
            const offset = this.calcOffset(mark);
            const props = {
                key: mark,
                className: this.props.markClassName,
                style: this.buildMarkStyle(offset)
            };
            return this.props.renderMark(props);
        });
    }
    render() {
        const offset = [];
        const { value } = this.state;
        const l = value.length;
        for(let i = 0; i < l; i += 1){
            offset[i] = this.calcOffset(value[i], i);
        }
        const tracks = this.props.withTracks ? this.renderTracks(offset) : null;
        const thumbs = this.renderThumbs(offset);
        const marks = this.props.marks ? this.renderMarks() : null;
        return /*#__PURE__*/ react.createElement("div", {
            ref: (r)=>{
                this.slider = r;
                this.resizeElementRef.current = r;
            },
            style: {
                position: "relative"
            },
            className: this.props.className + (this.props.disabled ? " disabled" : ""),
            onMouseDown: this.onSliderMouseDown,
            onClick: this.onSliderClick
        }, tracks, thumbs, marks);
    }
    constructor(props){
        super(props);
        this.onKeyUp = ()=>{
            this.onEnd();
        };
        this.onMouseUp = ()=>{
            this.onEnd(this.getMouseEventMap());
        };
        this.onTouchEnd = (e)=>{
            e.preventDefault();
            this.onEnd(this.getTouchEventMap());
        };
        this.onBlur = ()=>{
            this.setState({
                index: -1
            }, this.onEnd(this.getKeyDownEventMap()));
        };
        this.onMouseMove = (e)=>{
            // Prevent controlled updates from happening while mouse is moving
            this.setState({
                pending: true
            });
            const position = this.getMousePosition(e);
            const diffPosition = this.getDiffPosition(position[0]);
            const newValue = this.getValueFromPosition(diffPosition);
            this.move(newValue);
        };
        this.onTouchMove = (e)=>{
            if (e.touches.length > 1) {
                return;
            }
            // Prevent controlled updates from happending while touch is moving
            this.setState({
                pending: true
            });
            const position = this.getTouchPosition(e);
            if (typeof this.isScrolling === "undefined") {
                const diffMainDir = position[0] - this.startPosition[0];
                const diffScrollDir = position[1] - this.startPosition[1];
                this.isScrolling = Math.abs(diffScrollDir) > Math.abs(diffMainDir);
            }
            if (this.isScrolling) {
                this.setState({
                    index: -1
                });
                return;
            }
            const diffPosition = this.getDiffPosition(position[0]);
            const newValue = this.getValueFromPosition(diffPosition);
            this.move(newValue);
        };
        this.onKeyDown = (e)=>{
            if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
                return;
            }
            // Prevent controlled updates from happening while a key is pressed
            this.setState({
                pending: true
            });
            switch(e.key){
                case "ArrowLeft":
                case "ArrowDown":
                case "Left":
                case "Down":
                    e.preventDefault();
                    this.moveDownByStep();
                    break;
                case "ArrowRight":
                case "ArrowUp":
                case "Right":
                case "Up":
                    e.preventDefault();
                    this.moveUpByStep();
                    break;
                case "Home":
                    e.preventDefault();
                    this.move(this.props.min);
                    break;
                case "End":
                    e.preventDefault();
                    this.move(this.props.max);
                    break;
                case "PageDown":
                    e.preventDefault();
                    this.moveDownByStep(this.props.pageFn(this.props.step));
                    break;
                case "PageUp":
                    e.preventDefault();
                    this.moveUpByStep(this.props.pageFn(this.props.step));
                    break;
                default:
            }
        };
        this.onSliderMouseDown = (e)=>{
            // do nothing if disabled or right click
            if (this.props.disabled || e.button === 2) {
                return;
            }
            // Prevent controlled updates from happening while mouse is moving
            this.setState({
                pending: true
            });
            if (!this.props.snapDragDisabled) {
                const position = this.getMousePosition(e);
                this.forceValueFromPosition(position[0], (i)=>{
                    this.start(i, position[0]);
                    addHandlers.call(this, i, this.getMouseEventMap());
                });
            }
            pauseEvent(e);
        };
        this.onSliderClick = (e)=>{
            if (this.props.disabled) {
                return;
            }
            if (this.props.onSliderClick && !this.hasMoved) {
                const position = this.getMousePosition(e);
                const valueAtPos = trimAlignValue(this.calcValue(this.calcOffsetFromPosition(position[0])), this.props);
                this.props.onSliderClick(valueAtPos);
            }
        };
        // create the `keydown` handler for the i-th thumb
        this.createOnKeyDown = (i)=>(e)=>{
                if (this.props.disabled) {
                    return;
                }
                this.start(i);
                addHandlers.call(this, i, this.getKeyDownEventMap());
                pauseEvent(e);
            };
        // create the `mousedown` handler for the i-th thumb
        this.createOnMouseDown = (i)=>(e)=>{
                // do nothing if disabled or right click
                if (this.props.disabled || e.button === 2) {
                    return;
                }
                // Prevent controlled updates from happending while mouse is moving
                this.setState({
                    pending: true
                });
                const position = this.getMousePosition(e);
                this.start(i, position[0]);
                addHandlers.call(this, i, this.getMouseEventMap());
                pauseEvent(e);
            };
        // create the `touchstart` handler for the i-th thumb
        this.createOnTouchStart = (i)=>(e)=>{
                if (this.props.disabled || e.touches.length > 1) {
                    return;
                }
                // Prevent controlled updates from happending while touch is moving
                this.setState({
                    pending: true
                });
                const position = this.getTouchPosition(e);
                this.startPosition = position;
                // don't know yet if the user is trying to scroll
                this.isScrolling = undefined;
                this.start(i, position[0]);
                addHandlers.call(this, i, this.getTouchEventMap());
                stopPropagation(e);
            };
        this.handleResize = ()=>{
            // setTimeout of 0 gives element enough time to have assumed its new size if
            // it is being resized
            const resizeTimeout = window.setTimeout(()=>{
                // drop this timeout from pendingResizeTimeouts to reduce memory usage
                this.pendingResizeTimeouts.shift();
                this.resize();
            }, 0);
            this.pendingResizeTimeouts.push(resizeTimeout);
        };
        this.renderThumb = (style, i)=>{
            const className = "".concat(this.props.thumbClassName, " ").concat(this.props.thumbClassName, "-").concat(i, " ").concat(this.state.index === i ? this.props.thumbActiveClassName : "");
            const props = {
                ref: (r)=>{
                    this["thumb".concat(i)] = r;
                },
                key: "".concat(this.props.thumbClassName, "-").concat(i),
                className,
                style,
                onMouseDown: this.createOnMouseDown(i),
                onTouchStart: this.createOnTouchStart(i),
                onFocus: this.createOnKeyDown(i),
                tabIndex: 0,
                role: "slider",
                "aria-orientation": this.props.orientation,
                "aria-valuenow": this.state.value[i],
                "aria-valuemin": this.props.min,
                "aria-valuemax": this.props.max,
                "aria-label": Array.isArray(this.props.ariaLabel) ? this.props.ariaLabel[i] : this.props.ariaLabel,
                "aria-labelledby": Array.isArray(this.props.ariaLabelledby) ? this.props.ariaLabelledby[i] : this.props.ariaLabelledby,
                "aria-disabled": this.props.disabled
            };
            const state = {
                index: i,
                value: prepareOutValue(this.state.value),
                valueNow: this.state.value[i]
            };
            if (this.props.ariaValuetext) {
                props["aria-valuetext"] = typeof this.props.ariaValuetext === "string" ? this.props.ariaValuetext : this.props.ariaValuetext(state);
            }
            return this.props.renderThumb(props, state);
        };
        this.renderTrack = (i, offsetFrom, offsetTo)=>{
            const props = {
                key: "".concat(this.props.trackClassName, "-").concat(i),
                className: "".concat(this.props.trackClassName, " ").concat(this.props.trackClassName, "-").concat(i),
                style: this.buildTrackStyle(offsetFrom, this.state.upperBound - offsetTo)
            };
            const state = {
                index: i,
                value: prepareOutValue(this.state.value)
            };
            return this.props.renderTrack(props, state);
        };
        let value = sanitizeInValue(props.value);
        if (!value.length) {
            value = sanitizeInValue(props.defaultValue);
        }
        // array for storing resize timeouts ids
        this.pendingResizeTimeouts = [];
        const zIndices = [];
        for(let i = 0; i < value.length; i += 1){
            value[i] = trimAlignValue(value[i], props);
            zIndices.push(i);
        }
        this.resizeObserver = null;
        this.resizeElementRef = /*#__PURE__*/ react.createRef();
        this.state = {
            index: -1,
            upperBound: 0,
            sliderLength: 0,
            value,
            zIndices
        };
    }
}
ReactSlider.displayName = "ReactSlider";
ReactSlider.propTypes = {
    /**
     * The minimum value of the slider.
     */ min: (prop_types_default()).number,
    /**
     * The maximum value of the slider.
     */ max: (prop_types_default()).number,
    /**
     * Value to be added or subtracted on each step the slider makes.
     * Must be greater than zero.
     * `max - min` should be evenly divisible by the step value.
     */ step: (prop_types_default()).number,
    /**
     * The result of the function is the value to be added or subtracted
     * when the `Page Up` or `Page Down` keys are pressed.
     *
     * The current `step` value will be passed as the only argument.
     * By default, paging will modify `step` by a factor of 10.
     */ pageFn: (prop_types_default()).func,
    /**
     * The minimal distance between any pair of thumbs.
     * Must be positive, but zero means they can sit on top of each other.
     */ minDistance: (prop_types_default()).number,
    /**
     * Determines the initial positions of the thumbs and the number of thumbs.
     *
     * If a number is passed a slider with one thumb will be rendered.
     * If an array is passed each value will determine the position of one thumb.
     * The values in the array must be sorted.
     */ defaultValue: prop_types_default().oneOfType([
        (prop_types_default()).number,
        prop_types_default().arrayOf((prop_types_default()).number)
    ]),
    /**
     * Like `defaultValue` but for
     * [controlled components](http://facebook.github.io/react/docs/forms.html#controlled-components).
     */ value: prop_types_default().oneOfType([
        (prop_types_default()).number,
        prop_types_default().arrayOf((prop_types_default()).number)
    ]),
    /**
     * Determines whether the slider moves horizontally (from left to right)
     * or vertically (from top to bottom).
     */ orientation: prop_types_default().oneOf([
        "horizontal",
        "vertical"
    ]),
    /**
     * The css class set on the slider node.
     */ className: (prop_types_default()).string,
    /**
     * The css class set on each thumb node.
     *
     * In addition each thumb will receive a numbered css class of the form
     * `${thumbClassName}-${i}`, e.g. `thumb-0`, `thumb-1`, ...
     */ thumbClassName: (prop_types_default()).string,
    /**
     * The css class set on the thumb that is currently being moved.
     */ thumbActiveClassName: (prop_types_default()).string,
    /**
     * If `true` tracks between the thumbs will be rendered.
     */ withTracks: (prop_types_default()).bool,
    /**
     * The css class set on the tracks between the thumbs.
     * In addition track fragment will receive a numbered css class of the form
     * `${trackClassName}-${i}`, e.g. `track-0`, `track-1`, ...
     */ trackClassName: (prop_types_default()).string,
    /**
     * If `true` the active thumb will push other thumbs
     * within the constraints of `min`, `max`, `step` and `minDistance`.
     */ pearling: (prop_types_default()).bool,
    /**
     * If `true` the thumbs can't be moved.
     */ disabled: (prop_types_default()).bool,
    /**
     * Disables thumb move when clicking the slider track
     */ snapDragDisabled: (prop_types_default()).bool,
    /**
     * Inverts the slider.
     */ invert: (prop_types_default()).bool,
    /**
     * Shows passed marks on the track, if true it shows all the marks,
     * if an array of numbers it shows just the passed marks, if a number is passed
     * it shows just the marks in that steps: like passing 3 shows the marks 3, 6, 9
     */ marks: prop_types_default().oneOfType([
        prop_types_default().arrayOf((prop_types_default()).number),
        (prop_types_default()).bool,
        (prop_types_default()).number
    ]),
    /**
     * The css class set on the marks.
     */ markClassName: (prop_types_default()).string,
    /**
     * Callback called before starting to move a thumb. The callback will only be called if the
     * action will result in a change. The function will be called with two arguments, the first
     * being the initial value(s) the second being thumb index.
     */ // eslint-disable-next-line max-len
    onBeforeChange: (prop_types_default()).func,
    /**
     * Callback called on every value change.
     * The function will be called with two arguments, the first being the new value(s)
     * the second being thumb index.
     */ // eslint-disable-next-line max-len
    onChange: (prop_types_default()).func,
    /**
     * Callback called only after moving a thumb has ended. The callback will only be called if
     * the action resulted in a change. The function will be called with two arguments, the
     * first being the result value(s) the second being thumb index.
     */ // eslint-disable-next-line max-len
    onAfterChange: (prop_types_default()).func,
    /**
     * Callback called when the the slider is clicked (thumb or tracks).
     * Receives the value at the clicked position as argument.
     */ onSliderClick: (prop_types_default()).func,
    /**
     * aria-label for screen-readers to apply to the thumbs.
     * Use an array for more than one thumb.
     * The length of the array must match the number of thumbs in the value array.
     */ ariaLabel: prop_types_default().oneOfType([
        (prop_types_default()).string,
        prop_types_default().arrayOf((prop_types_default()).string)
    ]),
    /**
     * aria-labelledby for screen-readers to apply to the thumbs.
     * Used when slider rendered with separate label.
     * Use an array for more than one thumb.
     * The length of the array must match the number of thumbs in the value array.
     */ ariaLabelledby: prop_types_default().oneOfType([
        (prop_types_default()).string,
        prop_types_default().arrayOf((prop_types_default()).string)
    ]),
    /**
     * aria-valuetext for screen-readers.
     * Can be a static string, or a function that returns a string.
     * The function will be passed a single argument,
     * an object with the following properties:
     *
     *     state => `Value: ${state.value}`
     *
     * - `state.index` {`number`} the index of the thumb
     * - `state.value` {`number` | `array`} the current value state
     * - `state.valueNow` {`number`} the value of the thumb (i.e. aria-valuenow)
     */ ariaValuetext: prop_types_default().oneOfType([
        (prop_types_default()).string,
        (prop_types_default()).func
    ]),
    /**
     * Provide a custom render function for the track node.
     * The render function will be passed two arguments,
     * an object with props that should be added to your handle node,
     * and an object with track and slider state:
     *
     *     (props, state) => <div {...props} />
     *
     * - `props` {`object`} props to be spread into your track node
     * - `state.index` {`number`} the index of the track
     * - `state.value` {`number` | `array`} the current value state
     */ renderTrack: (prop_types_default()).func,
    /**
     * Provide a custom render function for dynamic thumb content.
     * The render function will be passed two arguments,
     * an object with props that should be added to your thumb node,
     * and an object with thumb and slider state:
     *
     *     (props, state) => <div {...props} />
     *
     * - `props` {`object`} props to be spread into your thumb node
     * - `state.index` {`number`} the index of the thumb
     * - `state.value` {`number` | `array`} the current value state
     * - `state.valueNow` {`number`} the value of the thumb (i.e. aria-valuenow)
     */ renderThumb: (prop_types_default()).func,
    /**
     * Provide a custom render function for the mark node.
     * The render function will be passed one argument,
     * an object with props that should be added to your handle node
     *
     *     (props) => <span {...props} />
     *
     * - `props` {`object`} props to be spread into your track node
     */ renderMark: (prop_types_default()).func
};
ReactSlider.defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    pageFn: (step)=>step * 10,
    minDistance: 0,
    defaultValue: 0,
    orientation: "horizontal",
    className: "slider",
    thumbClassName: "thumb",
    thumbActiveClassName: "active",
    trackClassName: "track",
    markClassName: "mark",
    withTracks: true,
    pearling: false,
    disabled: false,
    snapDragDisabled: false,
    invert: false,
    marks: [],
    renderThumb: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ...props
        }),
    renderTrack: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ...props
        }),
    renderMark: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            ...props
        })
};
/* harmony default export */ var price_slider_ReactSlider = (ReactSlider);

;// CONCATENATED MODULE: ./components/price-slider/index.tsx





/**
 * 根据给定的百分比范围计算最小值和最大值的函数。
 *
 * @param {Array<number>} val - 表示百分比值的数字元组
 * @param {Array<number>} priceRange - 表示价格范围的数字元组
 * @return {Object} 包含计算得到的最小值和最大值的对象
 */ const getPriceRange = (percentageRange, priceRange, lastPercentageRange, lastPriceRange)=>{
    const [minPercentage, maxPercentage] = percentageRange;
    const [lastMinPercentage, lastMaxPercentage] = lastPercentageRange;
    const [minPrice, maxPrice] = priceRange;
    const [lastMinPrice, lastMaxPrice] = lastPriceRange;
    // 如果百分比范围没有变化，则直接返回
    if (minPercentage === lastMinPercentage && maxPercentage === lastMaxPercentage) {
        return {
            valueMin: lastMinPrice,
            valueMax: lastMaxPrice,
            minPercentage: lastMinPercentage,
            maxPercentage: lastMaxPercentage
        };
    }
    const totalRange = maxPrice - minPrice;
    // 跟BA确认，最小差值不能小于1元
    const minimumDiff = 1;
    let valueMin = Math.floor(minPrice + totalRange * minPercentage / 100);
    let valueMax = Math.ceil(minPrice + totalRange * maxPercentage / 100);
    // 如果价格区间重叠，需求上要求相差1元
    if (valueMin === valueMax) {
        const isMinToMax = minPercentage !== lastMinPercentage && maxPercentage === lastMaxPercentage;
        const isMaxToMmin = minPercentage === lastMinPercentage && maxPercentage !== lastMaxPercentage;
        if (isMinToMax) {
            valueMin = Math.max(minPrice, valueMin - minimumDiff);
        } else if (isMaxToMmin) {
            valueMax = Math.min(maxPrice, valueMax + minimumDiff);
        }
    }
    return {
        valueMin,
        valueMax,
        minPercentage,
        maxPercentage
    };
};
const PriceSlider = (param)=>{
    let { prices, onPriceChange, customPriceTextClassName, customHorizontalSliderClassName, customSliderBoxClassName, isNeedResetCurrentPrice, defaultValue } = param;
    const defaultPriceRange = [
        prices === null || prices === void 0 ? void 0 : prices.minPrice,
        prices === null || prices === void 0 ? void 0 : prices.maxPrice
    ] // 默认价格范围
    ;
    let defaultPriceRangePercentage = [
        0,
        100
    ] // 默认价格范围对应的百分比
    ;
    if ((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.length) === 2) {
        const [startValue, endValue] = defaultValue.map((item)=>Number(item));
        const { minPrice = 0, maxPrice = 0 } = prices || {};
        // 区间总长度
        const totalDistance = maxPrice - minPrice;
        // 计算百分比
        const calculatePercentage = (value)=>{
            return totalDistance ? Math.round((value - minPrice) / totalDistance * 100) : 0;
        };
        const valueMin = calculatePercentage(startValue);
        const valueMax = calculatePercentage(endValue);
        defaultPriceRangePercentage = [
            valueMin,
            valueMax
        ];
    }
    const [currentPriceRange, setCurrentPriceRange] = (0,react.useState)(defaultPriceRange) // 当前价格区间
    ;
    const [currentPriceRangePercentage, setCurrentPriceRangePercentage] = (0,react.useState)() // 当前价格区间对应的百分比
    ;
    /**
   * 更新当前价格范围的百分比，并根据给定值设置当前价格范围。
   *
   * @param {[number, number]} val - 作为两个数字数组的新价格百分比范围。
   * @return {void} 此函数不返回任何内容。
   */ const onChangePrice = function(val) {
        let isDone = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        const { valueMin, valueMax, minPercentage, maxPercentage } = getPriceRange(val, [
            prices === null || prices === void 0 ? void 0 : prices.minPrice,
            prices === null || prices === void 0 ? void 0 : prices.maxPrice
        ], currentPriceRangePercentage, currentPriceRange);
        setCurrentPriceRange([
            valueMin,
            valueMax
        ]);
        setCurrentPriceRangePercentage([
            minPercentage,
            maxPercentage
        ]);
        isDone && onPriceChange && onPriceChange([
            valueMin,
            valueMax
        ]);
    };
    (0,react.useEffect)(()=>{
        // 当需要重置当前价格时
        if (isNeedResetCurrentPrice) {
            setCurrentPriceRangePercentage([
                0,
                100
            ]);
            setCurrentPriceRange([
                prices === null || prices === void 0 ? void 0 : prices.minPrice,
                prices === null || prices === void 0 ? void 0 : prices.maxPrice
            ]);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isNeedResetCurrentPrice,
        prices === null || prices === void 0 ? void 0 : prices.maxPrice,
        prices === null || prices === void 0 ? void 0 : prices.minPrice
    ]);
    // fix数据未及时更新
    (0,react.useEffect)(()=>{
        if ((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.length) === 2) {
            const defaultPrice = defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.map((item)=>Number(item));
            setCurrentPriceRange(defaultPrice);
            setCurrentPriceRangePercentage(defaultPriceRangePercentage);
        }
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()((price_slider_index_module_default()).priceText, customPriceTextClassName),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (price_slider_index_module_default()).priceTextLeft,
                        children: [
                            "￥ ",
                            currentPriceRange[0],
                            " - ￥ ",
                            currentPriceRange[1]
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (price_slider_index_module_default()).priceTextRight,
                        children: [
                            "￥ ",
                            prices === null || prices === void 0 ? void 0 : prices.maxPrice
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(price_slider_ReactSlider, {
                className: classnames_default()((price_slider_index_module_default()).horizontalSlider, customHorizontalSliderClassName),
                thumbClassName: classnames_default()((price_slider_index_module_default()).sliderBox, customSliderBoxClassName),
                defaultValue: defaultPriceRangePercentage,
                value: currentPriceRangePercentage,
                renderThumb: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        ...props
                    }),
                onChange: (value)=>onChangePrice(value),
                onAfterChange: (value)=>onChangePrice(value, true)
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+eagle_china-package-api@2.332.0/node_modules/@kering-technologies/eagle_china-package-api/dist/index.mjs
var dist = __webpack_require__(65943);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/router.js
var next_router = __webpack_require__(69132);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-utils@1.16.0_events@3.3.0/node_modules/@kering-technologies/ec_china-package-utils/dist/index.esm.js
var index_esm = __webpack_require__(80811);
// EXTERNAL MODULE: ./features/category/filter/filter-block.module.scss
var filter_block_module = __webpack_require__(8276);
var filter_block_module_default = /*#__PURE__*/__webpack_require__.n(filter_block_module);
// EXTERNAL MODULE: ./components/fields/form-field-checkbox.tsx
var form_field_checkbox = __webpack_require__(77578);
;// CONCATENATED MODULE: ./features/category/filter/filter-block.tsx






const FilterBlock = (param)=>{
    let { filterBlock, onClickButton, className } = param;
    const onChange = (0,react.useCallback)((item)=>{
        onClickButton(item);
    }, [
        onClickButton
    ]);
    if (!(0,index_esm/* arrayOrEmpty */.sq)(filterBlock.items).length) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((filter_block_module_default()).wrapper, className),
        children: (0,index_esm/* arrayOrEmpty */.sq)(filterBlock.items).map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()((filter_block_module_default()).button),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(form_field_checkbox/* FormFieldCheckbox */.s, {
                    checked: item.isSelected,
                    onChange: ()=>{
                        onChange(item);
                    },
                    checkboxClassName: classnames_default()((filter_block_module_default()).override, (filter_block_module_default()).checkbox),
                    labelClassName: classnames_default()((filter_block_module_default()).override, (filter_block_module_default()).label),
                    labelClickable: false,
                    clickLabel: ()=>{
                        onChange(item);
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: (filter_block_module_default()).labelText,
                        children: [
                            item.label,
                            item.label !== "官网有货" ? "（".concat(item.count, "）") : ""
                        ]
                    })
                })
            }, "".concat(item.label, "-").concat(index)))
    });
};

// EXTERNAL MODULE: ./node_modules/.pnpm/react-collapse@5.1.1_react@18.2.0/node_modules/react-collapse/lib/index.js
var lib = __webpack_require__(51053);
// EXTERNAL MODULE: ./assets/svg/arrow.svg
var arrow = __webpack_require__(93429);
// EXTERNAL MODULE: ./utils/event-bus.ts
var event_bus = __webpack_require__(24286);
// EXTERNAL MODULE: ./features/category/enum.ts
var category_enum = __webpack_require__(58020);
// EXTERNAL MODULE: ./components/create-portal.tsx
var create_portal = __webpack_require__(77470);
// EXTERNAL MODULE: ./components/controls/button.tsx
var controls_button = __webpack_require__(78001);
// EXTERNAL MODULE: ./components/controls/radio.tsx
var controls_radio = __webpack_require__(66758);
// EXTERNAL MODULE: ./adapters/gtm-adapter.tsx + 4 modules
var gtm_adapter = __webpack_require__(3054);
// EXTERNAL MODULE: ./adapters/sensors/index.tsx + 2 modules
var sensors = __webpack_require__(64068);
;// CONCATENATED MODULE: ./features/category/filter/index.tsx



















const FilterItem = (param)=>{
    let { item, className, onPriceFilterChange, isUsePriceFiltering } = param;
    var _item_items_, _item_prices, _item_prices1;
    const router = (0,next_router.useRouter)();
    const query = (0,index_esm/* getQueryWithoutUrl */.Z7)(router.query);
    const newDataListRef = (0,react.useRef)(query[item.code] ? query[item.code].split(",") : []);
    const [isBlockOpen, setIsBlockOpen] = (0,react.useState)(false);
    /** 用于更新选择库存时的filterCount */ const inventorySelected = item.name === "库存" ? (_item_items_ = item.items[0]) === null || _item_items_ === void 0 ? void 0 : _item_items_.isSelected : false;
    const filterCount = (0,react.useMemo)(()=>item.items.filter((element)=>element.isSelected).length, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        item.items,
        inventorySelected
    ]);
    const returnFilterItemResult = (newData)=>{
        if (newDataListRef.current.includes(newData.value)) {
            newDataListRef.current.splice(newDataListRef.current.indexOf(newData.value), 1);
        } else {
            newDataListRef.current.push(newData.value);
        }
        return newDataListRef.current.join(",");
    };
    /**
   * 根据输入值和物品价格生成新的价格范围，然后发射APPLY_FILTER_DATA事件，并传递更新后的价格范围。
   *
   * @param {Array<number>} value - 新的价格范围值
   * @return {void}
   */ const onPriceChange = (priceRange)=>{
        onPriceFilterChange && onPriceFilterChange(priceRange);
        const [valueMin, valueMax] = priceRange;
        /** 价格变化只需更新 filter */ (0,event_bus/* $emit */.Qy)(category_enum/* FilterDataEnum */.e7.UPDATE_FILTER_DATA, {
            code: "price",
            selectedOption: "".concat(valueMin, "-").concat(valueMax)
        });
    };
    // 最低价等于最高价，不展示
    if (item.code === "priceFilter" && ((_item_prices = item.prices) === null || _item_prices === void 0 ? void 0 : _item_prices.maxPrice) === ((_item_prices1 = item.prices) === null || _item_prices1 === void 0 ? void 0 : _item_prices1.minPrice)) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: item.code === dist/* ApiFilterCode */.Xs.inventoryFilter ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FilterBlock, {
            filterBlock: item,
            className: (index_module_default()).inventoryFilter,
            onClickButton: (selectedOption)=>{
                (0,event_bus/* $emit */.Qy)(category_enum/* FilterDataEnum */.e7.UPDATE_FILTER_DATA, {
                    code: item.code,
                    selectedOption: returnFilterItemResult(selectedOption)
                });
            }
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (index_module_default()).title,
                    onClick: ()=>setIsBlockOpen(!isBlockOpen),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: (index_module_default()).name,
                            children: [
                                item.name,
                                filterCount ? "（".concat(filterCount, "）") : ""
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow/* default */.Z, {
                            className: classnames_default()((index_module_default()).icon, isBlockOpen ? (index_module_default()).rotate : "")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(lib.Collapse, {
                    isOpened: isBlockOpen,
                    children: item.code === dist/* ApiFilterCode */.Xs.priceFilter ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceSlider, {
                        prices: item.prices,
                        onPriceChange: onPriceChange,
                        isNeedResetCurrentPrice: !isUsePriceFiltering,
                        defaultValue: item === null || item === void 0 ? void 0 : item.priceRange
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FilterBlock, {
                        filterBlock: item,
                        className: className,
                        onClickButton: (selectedOption)=>{
                            /** 点击筛选项只需更新 filter */ (0,event_bus/* $emit */.Qy)(category_enum/* FilterDataEnum */.e7.UPDATE_FILTER_DATA, {
                                code: item.code,
                                selectedOption: returnFilterItemResult(selectedOption)
                            });
                        }
                    })
                })
            ]
        })
    });
};
const FilterDialog = (param)=>{
    let { isVisible, onClose, filters, filterCount, totalProducts, sortOrders } = param;
    const { filterIntention } = (0,gtm_adapter/* useGtm */.u)();
    const { filterIntention: sensorsFilterIntention } = (0,sensors/* useSensors */.D)();
    const [isUsePriceFiltering, setIsUsePriceFiltering] = (0,react.useState)(false) // 是否使用了价格筛选, 0表示没有筛选，1表示筛选
    ;
    const onPriceFilterChange = (val)=>{
        if (val) setIsUsePriceFiltering(true);
    };
    (0,react.useEffect)(()=>{
        filters.forEach((item)=>{
            var _item_priceRange;
            if (item.code === "priceFilter" && (item === null || item === void 0 ? void 0 : (_item_priceRange = item.priceRange) === null || _item_priceRange === void 0 ? void 0 : _item_priceRange.length)) {
                setIsUsePriceFiltering(true);
            }
        });
        // GTM埋点： 展示过滤器
        isVisible && filterIntention();
        isVisible && sensorsFilterIntention();
    }, [
        filterIntention,
        isVisible,
        sensorsFilterIntention
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* Dialog */.V, {
            isVisible: isVisible,
            onClose: onClose,
            onClickMask: onClose,
            isSeoH1: true,
            title: "筛选",
            dialogClassName: classnames_default()((index_module_default()).override, (index_module_default()).dialog),
            lockBodyScroll: true,
            openDialogHeaderOpacity: false,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (index_module_default()).main,
                    children: [
                        (0,index_esm/* arrayOrEmpty */.sq)(filters).map((item, index)=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(FilterItem, {
                                item: item,
                                onPriceFilterChange: onPriceFilterChange,
                                isUsePriceFiltering: isUsePriceFiltering
                            }, "".concat(item.code, "|").concat(index));
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (index_module_default()).radioGroup,
                            children: sortOrders === null || sortOrders === void 0 ? void 0 : sortOrders.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (index_module_default()).radioCon,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_radio/* Radio */.Y, {
                                        className: (index_module_default()).radio,
                                        checked: item.isSelected,
                                        onChange: ()=>{
                                            /** 点击排序只需更新 filter */ (0,event_bus/* $emit */.Qy)(category_enum/* FilterDataEnum */.e7.UPDATE_FILTER_DATA, {
                                                code: "sort",
                                                selectedOption: item
                                            });
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: (index_module_default()).ratioText,
                                            children: item.label
                                        })
                                    })
                                }, "".concat(item.label, "|").concat(index)))
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (index_module_default()).buttonWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(controls_button/* Button */.z, {
                            className: (index_module_default()).button,
                            onClick: ()=>{
                                (0,event_bus/* $emit */.Qy)(category_enum/* FilterDataEnum */.e7.CLEAR_FILTER_DATA);
                                setIsUsePriceFiltering(false);
                            },
                            children: [
                                "清空 ",
                                filterCount ? "（".concat(filterCount, "）") : ""
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(controls_button/* Button */.z, {
                            className: (index_module_default()).button,
                            onClick: ()=>{
                                onClose();
                                /** 点击底部筛选的时候刷新 plp 列表 */ (0,event_bus/* $emit */.Qy)(category_enum/* FilterDataEnum */.e7.APPLY_FILTER_DATA);
                            },
                            isLight: false,
                            children: [
                                "筛选",
                                filterCount || isUsePriceFiltering ? "（".concat(totalProducts, "）") : ""
                            ]
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 29149:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ getSelectedFilterCount; },
/* harmony export */   a: function() { return /* binding */ getSelectedSort; }
/* harmony export */ });
/* harmony import */ var _kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80811);

/**
 * 获取已选择的过滤器数量
 * @param {Array<ApiFilter | ApiColorFilter>} filters - 过滤器列表
 * @returns {number} - 已选择的过滤器数量
 */ const getSelectedFilterCount = (filters)=>{
    if (!filters) {
        return 0;
    }
    return (0,_kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_0__/* .arrayOrEmpty */ .sq)(filters).reduce((result, filter)=>{
        // 对每个过滤器的子项进行处理，并计算已选择的子项数量
        const sum = filter.items.reduce((sum, item)=>{
            return sum + (item.isSelected ? 1 : 0);
        }, 0);
        if (filter.code === "priceFilter") {
            var _filter_priceRange;
            return result + ((filter === null || filter === void 0 ? void 0 : (_filter_priceRange = filter.priceRange) === null || _filter_priceRange === void 0 ? void 0 : _filter_priceRange.length) ? 1 : 0);
        }
        return result + sum;
    }, 0);
};
/**
 * 获取已选择的排序方式
 * @param {GetSelectedFiltersParams} params - 参数对象
 * @param {Array<SortOrder>} params.sortOrders - 排序方式列表
 * @param {Query} params.query - 查询对象
 * @returns {SortOrder | null} - 已选择的排序方式，如果未找到则返回null
 */ function getSelectedSort(param) {
    let { sortOrders, query } = param;
    if (!sortOrders) {
        return null;
    }
    const processedSortOrders = (0,_kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_0__/* .arrayOrEmpty */ .sq)(sortOrders);
    const selectedSort = processedSortOrders.find((t)=>{
        // 判断排序方式和排序方向是否与查询对象相匹配
        return t.sort === query.sort && t.sortDir === query.sortDir;
    });
    // 如果未找到匹配的排序方式，则返回数组中的第一个排序方式作为默认值
    return selectedSort || processedSortOrders[0];
}


/***/ }),

/***/ 77513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: function() { return /* binding */ InsertedComponent; },
  c: function() { return /* binding */ ProductList; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./features/category/product-list.module.scss
var product_list_module = __webpack_require__(22074);
var product_list_module_default = /*#__PURE__*/__webpack_require__.n(product_list_module);
// EXTERNAL MODULE: ./features/category/enum.ts
var category_enum = __webpack_require__(58020);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-utils@1.16.0_events@3.3.0/node_modules/@kering-technologies/ec_china-package-utils/dist/index.esm.js
var index_esm = __webpack_require__(80811);
// EXTERNAL MODULE: ./features/product-card/index.tsx
var product_card = __webpack_require__(73210);
// EXTERNAL MODULE: ./components/client-only.tsx
var client_only = __webpack_require__(80887);
// EXTERNAL MODULE: ./components/cms/cms.tsx + 44 modules
var cms = __webpack_require__(34600);
// EXTERNAL MODULE: ./adapters/map-cms-to-gtm-product.ts
var map_cms_to_gtm_product = __webpack_require__(1070);
// EXTERNAL MODULE: ./adapters/gtm-adapter.tsx + 4 modules
var gtm_adapter = __webpack_require__(3054);
// EXTERNAL MODULE: ./adapters/sensors/use-map-sensors-events.ts + 7 modules
var use_map_sensors_events = __webpack_require__(94278);
// EXTERNAL MODULE: ./hooks/use-get-device-type.ts
var use_get_device_type = __webpack_require__(89834);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/router.js
var next_router = __webpack_require__(69132);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+eagle_china-package-api@2.332.0/node_modules/@kering-technologies/eagle_china-package-api/dist/index.mjs
var dist = __webpack_require__(65943);
// EXTERNAL MODULE: ./node_modules/.pnpm/swr@2.2.2_react@18.2.0/node_modules/swr/immutable/dist/index.mjs
var immutable_dist = __webpack_require__(88131);
;// CONCATENATED MODULE: ./swr/product-info-display-data.tsx


const useProductInfoDisplayData = ()=>{
    const { data, mutate } = (0,immutable_dist/* default */.Z)("api.category.getProductInfoDisplaySeparately", dist/* api */.hi.category.getProductInfoDisplaySeparately);
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

;// CONCATENATED MODULE: ./features/category/product-list.tsx















// 指定位置插入组件
const InsertedComponent = (param)=>{
    let { positions, index, editorialComponentRenders, columnValue, trackSwitch = {
        eeListView: true
    }, totalProducts, isCategoryPreviewPage = false } = param;
    var _editorialComponentRenders_arrayOrEmpty_indexOf;
    // 如果cms的位置大于商品总数，则将其赋值为999999，放置最后一位
    const positionList = positions === null || positions === void 0 ? void 0 : positions.map((item)=>item >= totalProducts ? category_enum/* PLPLastPositionEnum */.$M.LAST_POSITION : item);
    const componentRenders = (_editorialComponentRenders_arrayOrEmpty_indexOf = editorialComponentRenders[(0,index_esm/* arrayOrEmpty */.sq)(positionList).indexOf(index + 1)]) === null || _editorialComponentRenders_arrayOrEmpty_indexOf === void 0 ? void 0 : _editorialComponentRenders_arrayOrEmpty_indexOf.componentData;
    const cmsProps = {
        identifier: "product-list-".concat(index + 1),
        components: (componentRenders === null || componentRenders === void 0 ? void 0 : componentRenders.children) || []
    };
    const { eeListView, eeListClick, getListName } = (0,gtm_adapter/* useGtm */.u)();
    const { selectItem } = (0,use_map_sensors_events/* useMapSensorsEvents */.U)();
    /**
   * 包含用于GTM跟踪的函数的对象。
   */ const gtmTrack = {
        /**
     * 跟踪推荐产品列表的视图的函数。
     * @param {TGtmProductItem[]} list - 推荐产品列表。
     */ recommendProductsEeListView (list) {
            eeListView({
                productList: list,
                list: getListName("")
            });
        },
        /**
     * 跟踪推荐产品列表中的产品点击的函数。
     * @param {TGtmProductItem} product - 推荐产品。
     * @param {number} productIndex - 点击产品在列表中的索引。
     */ recommendProductsEeListClick (product, productIndex) {
            eeListClick({
                productInfo: product,
                list: getListName(""),
                index: productIndex
            });
        }
    };
    /**
   * 包含用于跟踪CMS组件的分析函数的对象。
   * @namespace analytics
   */ const analytics = {
        /**
     * 初始化组件跟踪的函数。
     * @param {Object} componentConfig - 组件的配置对象。
     * @param {Component} componentConfig.component - 组件对象。
     */ componentInit (componentConfig) {
            switch(componentConfig.component.type){
                case "recommendProducts":
                    {
                        var _componentConfig_component;
                        if (trackSwitch.eeListView) {
                            return;
                        }
                        const productList = (0,map_cms_to_gtm_product/* mapCmsToGtmProductList */.V)((componentConfig === null || componentConfig === void 0 ? void 0 : (_componentConfig_component = componentConfig.component) === null || _componentConfig_component === void 0 ? void 0 : _componentConfig_component.products) || []);
                        gtmTrack.recommendProductsEeListView(productList);
                        break;
                    }
                default:
                    {
                        console.log("[product-list][componentInit]", componentConfig);
                    }
            }
        },
        /**
     * 跟踪组件中产品的点击的函数。
     * @param {Object} componentConfig - 组件的配置对象。
     * @param {Component} componentConfig.component - 组件对象。
     * @param {IProductList.Product} componentConfig.product - 点击的产品。
     * @param {number} componentConfig.index - 点击产品在列表中的索引。
     */ productClick (componentConfig) {
            switch(componentConfig.component.type){
                case "recommendProducts":
                    {
                        if (!componentConfig.product) {
                            return;
                        }
                        const product = (0,map_cms_to_gtm_product/* mapCmsToGtmProductItem */.n)(componentConfig.product);
                        gtmTrack.recommendProductsEeListClick(product, componentConfig.index);
                        selectItem(product, componentConfig.index);
                        break;
                    }
                default:
                    {
                        console.log("productClick", componentConfig);
                    }
            }
        }
    };
    if ((0,index_esm/* arrayOrEmpty */.sq)(positionList).includes(index + 1) && !!(componentRenders === null || componentRenders === void 0 ? void 0 : componentRenders.children[0])) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: columnValue ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    gridColumnStart: "span ".concat(columnValue)
                },
                children: componentRenders ? /*#__PURE__*/ (0,jsx_runtime.jsx)(cms/* CMSComponent */.o, {
                    ...cmsProps,
                    analytics: analytics,
                    isCategoryPreviewPage: isCategoryPreviewPage
                }) : null
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(cms/* CMSComponent */.o, {
                ...cmsProps,
                analytics: analytics,
                isCategoryPreviewPage: isCategoryPreviewPage
            })
        });
    }
    return null;
};
const ProductList = (param)=>{
    let { viewType, productList, nowProductList, diffDeviceViewType, editorialComponentRenders, trackSwitch = {
        eeListView: true
    }, listName = "", totalProducts, CMSpositions, isCategoryPreviewPage = false } = param;
    const { eeListView, getListName } = (0,gtm_adapter/* useGtm */.u)();
    const { data: productInfoDisplayData } = useProductInfoDisplayData();
    const { currentDevice } = (0,use_get_device_type/* useGetDeviceType */.n)();
    const router = (0,next_router.useRouter)();
    const columnValue = diffDeviceViewType === category_enum/* ProductListEnum */.EK.MOBILE_THREE || diffDeviceViewType === category_enum/* ProductListEnum */.EK.DESKTOP_THREE ? "3" : diffDeviceViewType === category_enum/* ProductListEnum */.EK.MOBILE_TWO ? "2" : "6";
    const productInfoDisplay = (0,react.useMemo)(()=>{
        var // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        _productInfoDisplayData_pageData;
        const defaultData = {
            productNameVisible: true,
            productPriceVisible: true,
            productColorsVisible: true,
            productTagVisible: true
        };
        let pageData = "";
        if (router.pathname.startsWith("/categories") || router.pathname.startsWith("/preview/categories")) {
            pageData = "plp";
        } else if (router.pathname.startsWith("/search")) {
            pageData = "search";
        }
        if (!pageData) return defaultData;
        return (productInfoDisplayData === null || productInfoDisplayData === void 0 ? void 0 : (_productInfoDisplayData_pageData = productInfoDisplayData[pageData]) === null || _productInfoDisplayData_pageData === void 0 ? void 0 : _productInfoDisplayData_pageData["".concat(currentDevice, "View").concat(columnValue)]) || defaultData;
    }, [
        productInfoDisplayData,
        currentDevice,
        diffDeviceViewType,
        router.pathname,
        columnValue
    ]);
    (0,react.useEffect)(()=>{
        // 当要换行的位置正好是一行的最后一个时，另起一行会有一个空的没有高度的div受父元素设置的gap影响导致这个div上下gap有问题
        const itemElements = document.querySelectorAll(".product-list-placeholder");
        if (!itemElements.length) return;
        itemElements.forEach((item)=>{
            if (!item.offsetHeight) {
                item.style.display = "none";
            }
        });
    }, [
        productList
    ]);
    (0,react.useEffect)(()=>{
        // GTM埋点:  产品列表的视图
        (nowProductList === null || nowProductList === void 0 ? void 0 : nowProductList.length) && eeListView({
            productList: nowProductList || [],
            list: getListName(listName)
        });
    }, [
        nowProductList,
        eeListView,
        getListName,
        listName
    ]);
    if (!(0,index_esm/* arrayOrEmpty */.sq)(productList).length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(client_only/* ClientOnly */.q, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classnames_default()((product_list_module_default()).wrapper, {
                [(product_list_module_default()).changeColumn]: viewType === category_enum/* ViewType */.bW.MOBILE_DETAIL_DESKTOP_SIMPLE,
                [(product_list_module_default()).rowGap]: !(productInfoDisplay === null || productInfoDisplay === void 0 ? void 0 : productInfoDisplay.productNameVisible) && !(productInfoDisplay === null || productInfoDisplay === void 0 ? void 0 : productInfoDisplay.productPriceVisible) && !(productInfoDisplay === null || productInfoDisplay === void 0 ? void 0 : productInfoDisplay.productColorsVisible) && !(productInfoDisplay === null || productInfoDisplay === void 0 ? void 0 : productInfoDisplay.productTagVisible)
            }),
            id: "productList",
            children: productList.map((item, index)=>{
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(product_card/* ProductCard */.Il, {
                            product: item,
                            index: index,
                            listName: listName,
                            diffDeviceViewType: diffDeviceViewType,
                            isNameVisible: !!(productInfoDisplay === null || productInfoDisplay === void 0 ? void 0 : productInfoDisplay.productNameVisible),
                            isPriceVisible: !!(productInfoDisplay === null || productInfoDisplay === void 0 ? void 0 : productInfoDisplay.productPriceVisible),
                            isColorVisible: !!(productInfoDisplay === null || productInfoDisplay === void 0 ? void 0 : productInfoDisplay.productColorsVisible),
                            isTagVisible: !!(productInfoDisplay === null || productInfoDisplay === void 0 ? void 0 : productInfoDisplay.productTagVisible)
                        }, index),
                        item.breakline && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "product-list-placeholder",
                            style: {
                                gridColumnStart: columnValue
                            }
                        }),
                        editorialComponentRenders && totalProducts && index + 1 < totalProducts ? /*#__PURE__*/ (0,jsx_runtime.jsx)(InsertedComponent, {
                            positions: CMSpositions,
                            index: index,
                            editorialComponentRenders: editorialComponentRenders,
                            columnValue: columnValue,
                            trackSwitch: trackSwitch,
                            totalProducts: totalProducts,
                            isCategoryPreviewPage: isCategoryPreviewPage
                        }) : null
                    ]
                }, "".concat(item.sku, "|").concat(index));
            })
        })
    });
};


/***/ }),

/***/ 28597:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ useViewType; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);
/* harmony import */ var _features_category_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58020);
/* harmony import */ var _kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80811);



const PLP_VIEW_TYPE = "PLP_VIEW_TYPE";
/**
 * 使用视图类型
 * @returns {Object} - 包含viewType和setViewType函数的对象
 * @property {ViewType} viewType - 当前视图类型
 * @property {(val: ViewType) => void} setViewType - 设置视图类型的函数
 */ const useViewType = ()=>{
    let defaultViewType;
    if ((0,_kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_2__/* .isBrowser */ .jU)()) {
        var _sessionStorage;
        // 如果sessionStorage中存在PLP_VIEW_TYPE键，则使用其值作为默认视图类型
        defaultViewType = ((_sessionStorage = sessionStorage) === null || _sessionStorage === void 0 ? void 0 : _sessionStorage.getItem(PLP_VIEW_TYPE)) ? sessionStorage.getItem(PLP_VIEW_TYPE) : _features_category_enum__WEBPACK_IMPORTED_MODULE_1__/* .ViewType */ .bW.MOBILE_SIMPLE_DESKTOP_DETAIL;
    } else {
        defaultViewType = _features_category_enum__WEBPACK_IMPORTED_MODULE_1__/* .ViewType */ .bW.MOBILE_SIMPLE_DESKTOP_DETAIL;
    }
    const [viewType, setViewType] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultViewType);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        sessionStorage.setItem(PLP_VIEW_TYPE, viewType);
    }, [
        viewType
    ]);
    return {
        viewType,
        setViewType
    };
};


/***/ }),

/***/ 92496:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: function() { return /* binding */ SearchNoResult; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11527);
/* harmony import */ var _features_search_search_no_result_index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75403);
/* harmony import */ var _features_search_search_no_result_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_features_search_search_no_result_index_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69132);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_recently_viewed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1455);
/* harmony import */ var _features_recommended_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18518);
/* harmony import */ var _features_recommended_products_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51540);
/* harmony import */ var _utils_event_bus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24286);
/* harmony import */ var _features_header_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37361);








const SearchNoResult = (param)=>{
    let { keyword, emptySearchConfig, isPLP = false, filterCount, listName = "", onOpenFilterDialog } = param;
    // 空结果页 cta 文案
    const emptySearchCta = filterCount ? emptySearchConfig === null || emptySearchConfig === void 0 ? void 0 : emptySearchConfig.emptyFilterCta : emptySearchConfig === null || emptySearchConfig === void 0 ? void 0 : emptySearchConfig.emptySearchCta;
    // 空结果 描述
    const emptySearchWord = filterCount ? emptySearchConfig === null || emptySearchConfig === void 0 ? void 0 : emptySearchConfig.emptyFilterWord : emptySearchConfig === null || emptySearchConfig === void 0 ? void 0 : emptySearchConfig.emptySearchWord;
    // 空结果 Redirect url
    const emptySearchCtaRedirect = filterCount ? emptySearchConfig === null || emptySearchConfig === void 0 ? void 0 : emptySearchConfig.filterCtaRedirect : emptySearchConfig === null || emptySearchConfig === void 0 ? void 0 : emptySearchConfig.ctaRedirect;
    // 空结果 cat behavior
    const ctaClickBehavior = filterCount ? emptySearchConfig === null || emptySearchConfig === void 0 ? void 0 : emptySearchConfig.emptyFilterCtaClickBehavior : emptySearchConfig === null || emptySearchConfig === void 0 ? void 0 : emptySearchConfig.emptySearchCtaClickBehavior;
    return emptySearchConfig ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: !isPLP ? (_features_search_search_no_result_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().wrapper) : (_features_search_search_no_result_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().wrapperPlp),
        children: [
            !isPLP && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    "“",
                    keyword,
                    "” 的结果 (0)"
                ]
            }),
            emptySearchWord ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: !isPLP ? (_features_search_search_no_result_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().description) : "",
                dangerouslySetInnerHTML: {
                    __html: emptySearchWord
                }
            }) : null,
            emptySearchCta ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (_features_search_search_no_result_index_module_scss__WEBPACK_IMPORTED_MODULE_1___default().cta),
                onClick: ()=>{
                    if (ctaClickBehavior == "drawer") {
                        filterCount ? onOpenFilterDialog() : (0,_utils_event_bus__WEBPACK_IMPORTED_MODULE_6__/* .$emit */ .Qy)(_features_header_enum__WEBPACK_IMPORTED_MODULE_7__/* .OPEN_SEARCH_DIALOG */ .b);
                    } else {
                        emptySearchCtaRedirect && next_router__WEBPACK_IMPORTED_MODULE_2___default().replace(emptySearchCtaRedirect);
                    }
                },
                dangerouslySetInnerHTML: {
                    __html: emptySearchCta
                }
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_features_recently_viewed__WEBPACK_IMPORTED_MODULE_3__/* .RecentlyViewed */ .H, {
                listName: listName
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_features_recommended_products__WEBPACK_IMPORTED_MODULE_4__/* .RecommendedProducts */ .m, {
                recommendedProductsConfig: _features_recommended_products_constant__WEBPACK_IMPORTED_MODULE_5__/* .recommendedProductsConfigPC */ ._
            })
        ]
    }) : null;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (SearchNoResult)));


/***/ }),

/***/ 46504:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"price-slider_textFontWeight__d7Lg8","priceText":"price-slider_priceText__JaS5V","horizontalSlider":"price-slider_horizontalSlider__5AuH2","sliderBox":"price-slider_sliderBox__n_he4","button-hover":"price-slider_button-hover__jpAGt"};

/***/ }),

/***/ 11308:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"category-navigation_textFontWeight__RiQSD","wrapper":"category-navigation_wrapper__gpZBY","right":"category-navigation_right__BScWx","filter":"category-navigation_filter__veVj6","viewText":"category-navigation_viewText__4BMTO","left":"category-navigation_left__ioREu","title":"category-navigation_title__qcL1B","button-hover":"category-navigation_button-hover___Lpx0"};

/***/ }),

/***/ 8276:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"filter-block_textFontWeight__WWxBH","wrapper":"filter-block_wrapper___ydO2","button":"filter-block_button___dJm3","override":"filter-block_override__zNVGj","checkbox":"filter-block_checkbox__AaYar","label":"filter-block_label__kvn0H","labelText":"filter-block_labelText__HPPHf","button-hover":"filter-block_button-hover__6uMfe"};

/***/ }),

/***/ 80879:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"filter_textFontWeight__wGGRx","override":"filter_override__I1JZQ","dialog":"filter_dialog__xusiL","title":"filter_title__I0gER","name":"filter_name__5Uaxn","main":"filter_main__dParo","icon":"filter_icon__Dik1o","rotate":"filter_rotate__H_M4j","buttonWrapper":"filter_buttonWrapper__F3YGf","button":"filter_button__yMCwi","radioCon":"filter_radioCon__FaYXN","radio":"filter_radio__vGbtO","inventoryFilter":"filter_inventoryFilter__ESq9R","radioGroup":"filter_radioGroup__0SGc0","ratioText":"filter_ratioText__CrsIJ","button-hover":"filter_button-hover__HtU0E"};

/***/ }),

/***/ 32865:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"category_textFontWeight__Q9AK8","layout":"category_layout__JGJvL","header":"category_header__DCAQt","disappear":"category_disappear__7FZc2","headerIsSubmenuVisible":"category_headerIsSubmenuVisible__LW3MA","navSticky":"category_navSticky__4rh_1","navSticky-out":"category_navSticky-out__bS2lR","navStickyCon":"category_navStickyCon__UptUF","appear":"category_appear__GDgmj","rightNav":"category_rightNav__UuSdv","isMobileAndTabletNavHidden":"category_isMobileAndTabletNavHidden__WemHA","observerArea":"category_observerArea__beZ5u","loadMoreWrapper":"category_loadMoreWrapper__1ob6g","loadMore":"category_loadMore__dJXsN","loadMoreWrapperNew":"category_loadMoreWrapperNew__obIja","loadMoreText":"category_loadMoreText__IqqA4","blink":"category_blink__M_iYg","wrapper":"category_wrapper__V4TU6","categoryTitle":"category_categoryTitle__UO4ko","button-hover":"category_button-hover__N7zWe"};

/***/ }),

/***/ 22074:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"product-list_textFontWeight__2olBH","wrapper":"product-list_wrapper__jbYuo","changeColumn":"product-list_changeColumn__oQA4_","rowGap":"product-list_rowGap__2iHli","button-hover":"product-list_button-hover__Zt2_O"};

/***/ }),

/***/ 75403:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"search-no-result_textFontWeight__MEwrH","wrapper":"search-no-result_wrapper__6eMZl","wrapperPlp":"search-no-result_wrapperPlp__Cls__","description":"search-no-result_description__iQH9i","cta":"search-no-result_cta__xvEh6","button-hover":"search-no-result_button-hover__2qixz"};

/***/ })

}]);