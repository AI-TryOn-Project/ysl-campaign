(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[8259],{

/***/ 99574:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = ({"src":"https://static.ysl.cn/_next/static/media/location.f0bcfd7a.png","height":25,"width":20,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAbUlEQVR42g3Buw2CUACG0U8n0IoFGMREegaxsDPWxhfhsQAlNQtAAyGBEDahuyUE7g/nAFUUzuFUx0Dz9cXeV/XiZ5Br3RX9De8V68gR9mPJBnRazgtKO4x3F/ubxgsJ/dPTVe0jAI5Q5GUOHDbNdDIuwCyPigAAAABJRU5ErkJggg==","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ 27747:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: function() { return /* binding */ Map; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/router.js
var next_router = __webpack_require__(69132);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./components/baidu-map/index.module.scss
var index_module = __webpack_require__(52612);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-utils@1.16.0_events@3.3.0/node_modules/@kering-technologies/ec_china-package-utils/dist/index.esm.js
var index_esm = __webpack_require__(80811);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./hooks/use-previous.ts

// 记录旧值的公用hooks
function usePrevious(value) {
    const ref = (0,react.useRef)(value);
    (0,react.useEffect)(()=>{
        ref.current = value;
    });
    return ref.current;
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-hooks@1.17.0_lodash.debounce@4.0.8_lodash.throttle@4.1._nnr3xwofk5oatghfixxbrp4jym/node_modules/@kering-technologies/ec_china-package-hooks/dist/index.esm.js
var dist_index_esm = __webpack_require__(59265);
// EXTERNAL MODULE: ./hooks/use-get-device-type.ts
var use_get_device_type = __webpack_require__(89834);
// EXTERNAL MODULE: ./utils/is-chrome-browser.ts
var is_chrome_browser = __webpack_require__(31411);
// EXTERNAL MODULE: ./hooks/use-geolocalisation-pop-up.ts
var use_geolocalisation_pop_up = __webpack_require__(12340);
;// CONCATENATED MODULE: ./components/baidu-map/index.tsx











let Map = /*#__PURE__*/ (0,react.forwardRef)((param)=>{
    let { onRef, baiDuMapId, className, dataList, selectedData, setSelectedData, selectedIndex, setSelectedIndex, defaultPosition = {
        lng: 113.6313494733,
        lat: 34.753487882409
    }, defaultZoomNumber = 5, zoomInNumber = 11, iconConfig, isMarkerAllowClicking = true, infoBoxCallback, mapClickEventRegistration, mapMove, isMapRouteVisible = false, getStoreParams, setIsStoreCardVisible, isMapLabelVisible = true, isAutoZoomToShowAllStores = false } = param;
    const router = (0,next_router.useRouter)();
    const [isMapReady, setIsMapReady] = (0,react.useState)(false);
    const infoBox = (0,react.useRef)(null);
    const map = (0,react.useRef)(null);
    const driving = (0,react.useRef)(null);
    const oldDataList = usePrevious(dataList);
    const oldSelectedData = usePrevious(selectedData);
    const [isRendering, setIsRendering] = (0,react.useState)(false);
    const mapUseId = (0,react.useId)();
    const mapId = baiDuMapId || mapUseId;
    const { currentDevice } = (0,use_get_device_type/* useGetDeviceType */.n)();
    const isDesktop = currentDevice === use_get_device_type/* DeviceType */.Y.DESKTOP;
    const { isChina } = (0,use_geolocalisation_pop_up/* useGeolocalisationPopUp */.h)();
    const addEvent = (0,react.useCallback)(()=>{
        if (!map.current) return;
        if (!mapMove) return;
        map.current.addEventListener("moveend", mapMove);
        map.current.addEventListener("zoomend", mapMove);
    }, [
        mapMove
    ]);
    const initBMap = (0,react.useCallback)(()=>{
        const BMapGL = window.BMapGL;
        try {
            map.current = new BMapGL.Map(mapId);
            map.current.centerAndZoom(new BMapGL.Point(defaultPosition.lng, defaultPosition.lat), defaultZoomNumber);
            map.current.enableScrollWheelZoom(true);
            setIsMapReady(true);
            addEvent();
        } catch (e) {
            console.error("[baidu-map][initBMap][initBMap]", e);
        }
    }, [
        addEvent,
        mapId,
        defaultPosition.lat,
        defaultPosition.lng,
        defaultZoomNumber
    ]);
    const getBMapScript = (0,react.useCallback)(()=>{
        if (!window._BMapGL_Loaded) {
            window.BMapGL = {};
            window.BMapGL._preloader = new Promise((resolve)=>{
                window.initBMap = function() {
                    resolve(window.BMapGL);
                    window.BMapGL._preloader = null;
                    window.initBMap = null;
                    initBMap();
                    (0,index_esm/* asyncLoadScript */.Me)("/js/info-box.js", ()=>{});
                };
                (0,index_esm/* asyncLoadScript */.Me)("https://api.map.baidu.com/api?v=1.0&type=webgl&ak=".concat("rEzDZxvvxcZbFSbcnsujwYYeEXlGRmGv", "&callback=initBMap"), ()=>{
                    window._BMapGL_Loaded = true;
                });
            });
            return window.BMapGL._preloader;
        } else if (!window.BMapGL._preloader) {
            initBMap();
            return Promise.resolve(window.BMapGL);
        } else {
            return window.BMapGL._preloader;
        }
    }, [
        initBMap
    ]);
    (0,react.useEffect)(()=>{
        if (!router.isReady) return;
        getBMapScript();
    }, [
        router.isReady,
        getBMapScript
    ]);
    const handleClickInfoBox = (0,react.useCallback)(async (data, selectedIndex)=>{
        var _window_BMapGLLib;
        if (!data) return;
        try {
            var _infoBox_current;
            (_infoBox_current = infoBox.current) === null || _infoBox_current === void 0 ? void 0 : _infoBox_current.close();
        } catch (error) {
            console.error("[baidu-map][handleClickInfoBox][closeClickInfoBox]", error);
        }
        if (!infoBoxCallback) return;
        const { html, config } = await (infoBoxCallback === null || infoBoxCallback === void 0 ? void 0 : infoBoxCallback(data, selectedIndex)) || {};
        if (!html) return;
        const BMapGL = window.BMapGL;
        if ((_window_BMapGLLib = window.BMapGLLib) === null || _window_BMapGLLib === void 0 ? void 0 : _window_BMapGLLib.InfoBox) {
            const BMapGLLib = window.BMapGLLib;
            infoBox.current = new BMapGLLib.InfoBox(map.current, html, {
                ...config,
                align: window.INFOBOX_AT_TOP
            });
            const point = new BMapGL.Point(Number(data.lng), Number(data.lat));
            infoBox.current.open(point);
            mapClickEventRegistration === null || mapClickEventRegistration === void 0 ? void 0 : mapClickEventRegistration();
        } else {
            (0,index_esm/* asyncLoadScript */.Me)("/js/info-box.js", ()=>{
                const BMapGLLib = window.BMapGLLib;
                infoBox.current = new BMapGLLib.InfoBox(map.current, html, {
                    ...config,
                    align: window.INFOBOX_AT_TOP
                });
                const point = new BMapGL.Point(Number(data.lng), Number(data.lat));
                infoBox.current.open(point);
                mapClickEventRegistration === null || mapClickEventRegistration === void 0 ? void 0 : mapClickEventRegistration();
            });
        }
    }, [
        mapClickEventRegistration,
        infoBoxCallback
    ]);
    const deletePoint = (0,react.useCallback)(()=>{
        return new Promise((resolve)=>{
            var _map_current;
            const allOverlay = (_map_current = map.current) === null || _map_current === void 0 ? void 0 : _map_current.getOverlays();
            if ((0,index_esm/* arrayOrEmpty */.sq)(allOverlay).length === 0) return resolve(true);
            for(let i = 0; i < allOverlay.length; i++){
                var _allOverlay_i_point, _allOverlay_i, _allOverlay_i1, _allOverlay_i2;
                const data = ((_allOverlay_i = allOverlay[i]) === null || _allOverlay_i === void 0 ? void 0 : (_allOverlay_i_point = _allOverlay_i.point) === null || _allOverlay_i_point === void 0 ? void 0 : _allOverlay_i_point.lng) ? (_allOverlay_i1 = allOverlay[i]) === null || _allOverlay_i1 === void 0 ? void 0 : _allOverlay_i1.point : (_allOverlay_i2 = allOverlay[i]) === null || _allOverlay_i2 === void 0 ? void 0 : _allOverlay_i2._point;
                if (selectedData && Number(selectedData.lng) === (data === null || data === void 0 ? void 0 : data.lng) && Number(selectedData.lat) === (data === null || data === void 0 ? void 0 : data.lat)) {
                    map.current.removeOverlay(allOverlay[i]);
                } else if (selectedData == null) {
                    map.current.removeOverlay(allOverlay[i]);
                }
                if (oldSelectedData && Number(oldSelectedData.lng) === (data === null || data === void 0 ? void 0 : data.lng) && Number(oldSelectedData.lat) === (data === null || data === void 0 ? void 0 : data.lat)) {
                    map.current.removeOverlay(allOverlay[i]);
                }
                if (i === allOverlay.length - 1) {
                    resolve(true);
                }
            }
        });
    }, [
        oldSelectedData,
        selectedData
    ]);
    const initializeMap = (0,dist_index_esm/* useThrottle */.fB)(async ()=>{
        // 防止重复渲染节点
        if (oldDataList === dataList && oldSelectedData === selectedData && isRendering) return;
        const data = dataList;
        if ((data === null || data === void 0 ? void 0 : data.length) && isMapReady) {
            try {
                await deletePoint();
            } catch (error) {
                console.error("[baidu-map][data?.Length][getOverlays]", error);
            }
            const BMapGL = window.BMapGL;
            const { selectedUrl, unSelected } = iconConfig;
            const selectedIcon = new BMapGL.Icon(selectedUrl.url, new BMapGL.Size(selectedUrl.imageWidth, selectedUrl.imageHeight), {
                anchor: new BMapGL.Size(selectedUrl.deviationX, selectedUrl.deviationY),
                imageSize: new BMapGL.Size(selectedUrl.imageWidth, selectedUrl.imageHeight)
            });
            const unSelectedIcon = new BMapGL.Icon(unSelected.url, new BMapGL.Size(unSelected.imageWidth, unSelected.imageHeight), {
                anchor: new BMapGL.Size(unSelected.deviationX, unSelected.deviationY),
                imageSize: new BMapGL.Size(unSelected.imageWidth, unSelected.imageHeight)
            });
            const points = [];
            for(let i = 0; i < data.length; i++){
                const point = new BMapGL.Point(Number(data[i].lng), Number(data[i].lat));
                points.push(point);
                const marker = new BMapGL.Marker(point, {
                    icon: data[i].id == (selectedData === null || selectedData === void 0 ? void 0 : selectedData.id) ? selectedIcon : unSelectedIcon
                });
                map.current.addOverlay(marker);
                const label = new BMapGL.Label("".concat(i < 9 ? "0" + (i + 1) : i + 1), {
                    position: point,
                    offset: new window.BMapGL.Size(-7, -20)
                });
                // 设置标签样式
                label.setStyle({
                    width: "12px",
                    height: "11px",
                    zIndex: 2,
                    fontSize: "10px",
                    border: "none",
                    color: "#FFF",
                    fontWeight: 700,
                    backgroundColor: "transparent",
                    fontFamily: "Helvetica"
                });
                isMapLabelVisible && marker.setLabel(label);
                const item = data[i];
                const itemIndex = i;
                marker.addEventListener("click", function() {
                    if (!isMarkerAllowClicking) return;
                    if (item.id === (selectedData === null || selectedData === void 0 ? void 0 : selectedData.id)) {
                        var _infoBox_current;
                        const point = new BMapGL.Point(Number(item.lng), Number(item.lat));
                        (_infoBox_current = infoBox.current) === null || _infoBox_current === void 0 ? void 0 : _infoBox_current.open(point);
                        setIsStoreCardVisible === null || setIsStoreCardVisible === void 0 ? void 0 : setIsStoreCardVisible(true);
                        mapClickEventRegistration === null || mapClickEventRegistration === void 0 ? void 0 : mapClickEventRegistration();
                        return;
                    }
                    setIsStoreCardVisible === null || setIsStoreCardVisible === void 0 ? void 0 : setIsStoreCardVisible(true);
                    setSelectedData === null || setSelectedData === void 0 ? void 0 : setSelectedData(item);
                    setSelectedIndex === null || setSelectedIndex === void 0 ? void 0 : setSelectedIndex(itemIndex);
                });
                if (isDesktop) {
                    var _document;
                    const storeListItemContent = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(".storeListItemContent-" + (selectedData === null || selectedData === void 0 ? void 0 : selectedData.id));
                    storeListItemContent === null || storeListItemContent === void 0 ? void 0 : storeListItemContent.addEventListener("click", function() {
                        if (!isMarkerAllowClicking) return;
                        if (item.id === (selectedData === null || selectedData === void 0 ? void 0 : selectedData.id)) {
                            const point = new BMapGL.Point(Number(item.lng), Number(item.lat));
                            infoBox.current.open(point);
                            mapClickEventRegistration === null || mapClickEventRegistration === void 0 ? void 0 : mapClickEventRegistration();
                            return;
                        }
                    });
                }
            }
            if (isAutoZoomToShowAllStores) {
                autoSetViewport(points, selectedData);
            } else {
                panTo(data, selectedData);
            }
        }
        if (!(data === null || data === void 0 ? void 0 : data.length)) {
            try {
                await deletePoint();
            } catch (error) {
                console.error("[baidu-map][!data?.Length][getOverlays]", error);
            }
        }
    }, 0);
    const autoSetViewport = (0,dist_index_esm/* useThrottle */.fB)((points, selectedData)=>{
        if (isMarkerAllowClicking && (selectedData === null || selectedData === void 0 ? void 0 : selectedData.lng) && (selectedData === null || selectedData === void 0 ? void 0 : selectedData.lat)) {
            // 选中之后的定位逻辑
            const point = new window.BMapGL.Point(Number(selectedData.lng), Number(selectedData.lat));
            map.current.centerAndZoom(point, zoomInNumber);
            selectedIndex !== undefined && handleClickInfoBox(selectedData, selectedIndex);
            map.current.centerAndZoom(point, zoomInNumber);
        } else {
            var _map_current, _map_current1, _map_current2;
            (_map_current = map.current) === null || _map_current === void 0 ? void 0 : _map_current.setMaxZoom(zoomInNumber);
            (_map_current1 = map.current) === null || _map_current1 === void 0 ? void 0 : _map_current1.setViewport(points);
            (_map_current2 = map.current) === null || _map_current2 === void 0 ? void 0 : _map_current2.setMaxZoom(19);
        }
    }, 500);
    const isPanToFlag = (0,react.useRef)(true);
    const panTo = (0,dist_index_esm/* useThrottle */.fB)((data, selectedData)=>{
        if (!selectedData) {
            try {
                var _infoBox_current;
                (_infoBox_current = infoBox.current) === null || _infoBox_current === void 0 ? void 0 : _infoBox_current.close();
            } catch (error) {
                console.error("[baidu-map][panTo][closeClickInfoBox]", error);
            }
        }
        setIsRendering(true);
        if ((JSON.stringify(getStoreParams === null || getStoreParams === void 0 ? void 0 : getStoreParams.current) === "{}" || JSON.stringify(getStoreParams === null || getStoreParams === void 0 ? void 0 : getStoreParams.current) === '{"isAppointment":true}') && !selectedData) {
            if (isPanToFlag.current) {
                setTimeout(()=>{
                    isPanToFlag.current = false;
                }, 1000);
                return;
            }
            const BMapGL = window.BMapGL;
            map.current.centerAndZoom(new BMapGL.Point(defaultPosition.lng, defaultPosition.lat), defaultZoomNumber);
        } else if ((selectedData === null || selectedData === void 0 ? void 0 : selectedData.lng) && (selectedData === null || selectedData === void 0 ? void 0 : selectedData.lat)) {
            // 选中之后的定位逻辑
            const point = new window.BMapGL.Point(Number(selectedData.lng), Number(selectedData.lat));
            map.current.centerAndZoom(point, zoomInNumber);
            if (isMarkerAllowClicking) {
                selectedIndex !== undefined && handleClickInfoBox(selectedData, selectedIndex);
            }
        } else {
            var _getStoreParams_current;
            // 如果是点击搜索此区域，则不需要缩放也不需要居中
            if (getStoreParams === null || getStoreParams === void 0 ? void 0 : (_getStoreParams_current = getStoreParams.current) === null || _getStoreParams_current === void 0 ? void 0 : _getStoreParams_current.rangeLocation) return;
            // 重新搜索之后展示第一个的定位逻辑
            const point = new window.BMapGL.Point(Number(data === null || data === void 0 ? void 0 : data[0].lng), Number(data === null || data === void 0 ? void 0 : data[0].lat));
            map.current.centerAndZoom(point, zoomInNumber);
        }
    }, 500);
    (0,react.useEffect)(()=>{
        if (!isMapReady) return;
        initializeMap();
    }, [
        initializeMap,
        deletePoint,
        handleClickInfoBox,
        isMapReady,
        mapClickEventRegistration,
        selectedData,
        setSelectedData,
        setSelectedIndex,
        dataList,
        zoomInNumber,
        isMarkerAllowClicking
    ]);
    const geolocation = (0,react.useCallback)(function(callBack) {
        let isPanTo = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var _window;
        try {
            var _infoBox_current;
            (_infoBox_current = infoBox.current) === null || _infoBox_current === void 0 ? void 0 : _infoBox_current.close();
        } catch (error) {
            console.error("[baidu-map][geolocation][closeClickInfoBox]", error);
        }
        if (!((_window = window) === null || _window === void 0 ? void 0 : _window.BMapGL)) return;
        const BMapGL = window.BMapGL;
        if ((0,is_chrome_browser/* isChromeBrowser */.U)() && isChina) {
            const myCity = new BMapGL.LocalCity();
            myCity.get((result)=>{
                var _result_center, _result_center1;
                if (callBack && (result === null || result === void 0 ? void 0 : (_result_center = result.center) === null || _result_center === void 0 ? void 0 : _result_center.lng) && (result === null || result === void 0 ? void 0 : (_result_center1 = result.center) === null || _result_center1 === void 0 ? void 0 : _result_center1.lat)) {
                    if (isPanTo) {
                        const point = new BMapGL.Point(result.center.lng, result.center.lat);
                        map.current.centerAndZoom(point, zoomInNumber);
                    }
                    callBack({
                        status: true,
                        lng: result.center.lng,
                        lat: result.center.lat
                    });
                } else {
                    callBack({
                        status: false,
                        lng: null,
                        lat: null
                    });
                }
            });
            return;
        }
        const geolocation = new BMapGL.Geolocation();
        // 开启SDK辅助定位
        geolocation.enableSDKLocation();
        geolocation.getCurrentPosition(function(r) {
            if (this.getStatus() == window.BMAP_STATUS_SUCCESS) {
                var _r_point, _r_point1;
                if (callBack && (r === null || r === void 0 ? void 0 : (_r_point = r.point) === null || _r_point === void 0 ? void 0 : _r_point.lng) && (r === null || r === void 0 ? void 0 : (_r_point1 = r.point) === null || _r_point1 === void 0 ? void 0 : _r_point1.lat)) {
                    if (isPanTo) {
                        const point = new BMapGL.Point(r.point.lng, r.point.lat);
                        map.current.centerAndZoom(point, zoomInNumber);
                    }
                    callBack({
                        status: true,
                        lng: r.point.lng,
                        lat: r.point.lat
                    });
                }
            } else {
                callBack({
                    status: false,
                    lng: null,
                    lat: null
                });
            }
        }, {
            timeout: 60000,
            SDKLocation: true,
            enableHighAccuracy: true
        });
    }, [
        zoomInNumber,
        isChina
    ]);
    const drivingRoute = (0,react.useCallback)(()=>{
        if (!selectedData) return;
        const BMapGL = window.BMapGL;
        geolocation((param)=>{
            let { lng, lat, status } = param;
            if (status && lng && lat) {
                driving.current = new BMapGL.DrivingRoute(map.current, {
                    renderOptions: {
                        map: map.current,
                        autoViewport: true
                    }
                });
                const start = new BMapGL.Point(lng, lat);
                const end = new BMapGL.Point(Number(selectedData === null || selectedData === void 0 ? void 0 : selectedData.lng), Number(selectedData === null || selectedData === void 0 ? void 0 : selectedData.lat));
                driving.current.search(start, end);
            }
        });
    }, [
        geolocation,
        selectedData
    ]);
    (0,react.useEffect)(()=>{
        if (!isMapReady) return;
        if (isMapRouteVisible) {
            drivingRoute();
            return;
        }
        if (driving.current) {
            driving.current.clearResults();
            driving.current = null;
        }
    }, [
        isMapRouteVisible,
        isMapReady,
        drivingRoute
    ]);
    const getMap = (0,react.useCallback)(()=>map.current, [
        map
    ]);
    const getInfoBox = (0,react.useCallback)(()=>infoBox.current, [
        infoBox
    ]);
    (0,react.useImperativeHandle)(onRef, ()=>({
            map: getMap,
            infoBox: getInfoBox,
            geolocation
        }), [
        geolocation,
        getMap,
        getInfoBox
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((index_module_default()).mapBox, className),
        id: mapId
    });
});
Map = /*#__PURE__*/ (0,react.memo)(Map);
Map.displayName = "Map";



/***/ }),

/***/ 77456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * This function lets you dynamically import a component.
 * It uses [React.lazy()](https://react.dev/reference/react/lazy) with [Suspense](https://react.dev/reference/react/Suspense) under the hood.
 *
 * Read more: [Next.js Docs: `next/dynamic`](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic)
 */ default: function() {
        return dynamic;
    },
    noSSR: function() {
        return noSSR;
    }
});
const _interop_require_default = __webpack_require__(42430);
const _jsxruntime = __webpack_require__(11527);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(50959));
const _loadablesharedruntime = /*#__PURE__*/ _interop_require_default._(__webpack_require__(49727));
const isServerSide = "object" === "undefined";
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    return {
        default: (mod == null ? void 0 : mod.default) || mod
    };
}
function noSSR(LoadableInitializer, loadableOptions) {
    // Removing webpack and modules means react-loadable won't try preloading
    delete loadableOptions.webpack;
    delete loadableOptions.modules;
    // This check is necessary to prevent react-loadable from initializing on the server
    if (!isServerSide) {
        return LoadableInitializer(loadableOptions);
    }
    const Loading = loadableOptions.loading;
    // This will only be rendered on the server side
    return ()=>/*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            error: null,
            isLoading: true,
            pastDelay: false,
            timedOut: false
        });
}
function dynamic(dynamicOptions, options) {
    let loadableFn = _loadablesharedruntime.default;
    let loadableOptions = {
        // A loading component is not required, so we default it
        loading: (param)=>{
            let { error, isLoading, pastDelay } = param;
            if (!pastDelay) return null;
            if (false) {}
            return null;
        }
    };
    // Support for direct import(), eg: dynamic(import('../hello-world'))
    // Note that this is only kept for the edge case where someone is passing in a promise as first argument
    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
    // To make sure we don't execute the import without rendering first
    if (dynamicOptions instanceof Promise) {
        loadableOptions.loader = ()=>dynamicOptions;
    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))
    } else if (typeof dynamicOptions === "function") {
        loadableOptions.loader = dynamicOptions;
    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
    } else if (typeof dynamicOptions === "object") {
        loadableOptions = {
            ...loadableOptions,
            ...dynamicOptions
        };
    }
    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})
    loadableOptions = {
        ...loadableOptions,
        ...options
    };
    const loaderFn = loadableOptions.loader;
    const loader = ()=>loaderFn != null ? loaderFn().then(convertModule) : Promise.resolve(convertModule(()=>null));
    // coming from build/babel/plugins/react-loadable-plugin.js
    if (loadableOptions.loadableGenerated) {
        loadableOptions = {
            ...loadableOptions,
            ...loadableOptions.loadableGenerated
        };
        delete loadableOptions.loadableGenerated;
    }
    // support for disabling server side rendering, eg: dynamic(() => import('../hello-world'), {ssr: false}).
    if (typeof loadableOptions.ssr === "boolean" && !loadableOptions.ssr) {
        delete loadableOptions.webpack;
        delete loadableOptions.modules;
        return noSSR(loadableFn, loadableOptions);
    }
    return loadableFn({
        ...loadableOptions,
        loader: loader
    });
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dynamic.js.map


/***/ }),

/***/ 21164:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "LoadableContext", ({
    enumerable: true,
    get: function() {
        return LoadableContext;
    }
}));
const _interop_require_default = __webpack_require__(42430);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(50959));
const LoadableContext = _react.default.createContext(null);
if (false) {} //# sourceMappingURL=loadable-context.shared-runtime.js.map


/***/ }),

/***/ 49727:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
// TODO: Remove use of `any` type.
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ // https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(42430);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(50959));
const _loadablecontextsharedruntime = __webpack_require__(21164);
function resolve(obj) {
    return obj && obj.default ? obj.default : obj;
}
const ALL_INITIALIZERS = [];
const READY_INITIALIZERS = [];
let initialized = false;
function load(loader) {
    let promise = loader();
    let state = {
        loading: true,
        loaded: null,
        error: null
    };
    state.promise = promise.then((loaded)=>{
        state.loading = false;
        state.loaded = loaded;
        return loaded;
    }).catch((err)=>{
        state.loading = false;
        state.error = err;
        throw err;
    });
    return state;
}
function createLoadableComponent(loadFn, options) {
    let opts = Object.assign({
        loader: null,
        loading: null,
        delay: 200,
        timeout: null,
        webpack: null,
        modules: null
    }, options);
    /** @type LoadableSubscription */ let subscription = null;
    function init() {
        if (!subscription) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            const sub = new LoadableSubscription(loadFn, opts);
            subscription = {
                getCurrentValue: sub.getCurrentValue.bind(sub),
                subscribe: sub.subscribe.bind(sub),
                retry: sub.retry.bind(sub),
                promise: sub.promise.bind(sub)
            };
        }
        return subscription.promise();
    }
    // Server only
    if (false) {}
    // Client only
    if (!initialized && "object" !== "undefined") {
        // require.resolveWeak check is needed for environments that don't have it available like Jest
        const moduleIds = opts.webpack && "function" === "function" ? opts.webpack() : opts.modules;
        if (moduleIds) {
            READY_INITIALIZERS.push((ids)=>{
                for (const moduleId of moduleIds){
                    if (ids.includes(moduleId)) {
                        return init();
                    }
                }
            });
        }
    }
    function useLoadableModule() {
        init();
        const context = _react.default.useContext(_loadablecontextsharedruntime.LoadableContext);
        if (context && Array.isArray(opts.modules)) {
            opts.modules.forEach((moduleName)=>{
                context(moduleName);
            });
        }
    }
    function LoadableComponent(props, ref) {
        useLoadableModule();
        const state = _react.default.useSyncExternalStore(subscription.subscribe, subscription.getCurrentValue, subscription.getCurrentValue);
        _react.default.useImperativeHandle(ref, ()=>({
                retry: subscription.retry
            }), []);
        return _react.default.useMemo(()=>{
            if (state.loading || state.error) {
                return /*#__PURE__*/ _react.default.createElement(opts.loading, {
                    isLoading: state.loading,
                    pastDelay: state.pastDelay,
                    timedOut: state.timedOut,
                    error: state.error,
                    retry: subscription.retry
                });
            } else if (state.loaded) {
                return /*#__PURE__*/ _react.default.createElement(resolve(state.loaded), props);
            } else {
                return null;
            }
        }, [
            props,
            state
        ]);
    }
    LoadableComponent.preload = ()=>init();
    LoadableComponent.displayName = "LoadableComponent";
    return /*#__PURE__*/ _react.default.forwardRef(LoadableComponent);
}
class LoadableSubscription {
    promise() {
        return this._res.promise;
    }
    retry() {
        this._clearTimeouts();
        this._res = this._loadFn(this._opts.loader);
        this._state = {
            pastDelay: false,
            timedOut: false
        };
        const { _res: res, _opts: opts } = this;
        if (res.loading) {
            if (typeof opts.delay === "number") {
                if (opts.delay === 0) {
                    this._state.pastDelay = true;
                } else {
                    this._delay = setTimeout(()=>{
                        this._update({
                            pastDelay: true
                        });
                    }, opts.delay);
                }
            }
            if (typeof opts.timeout === "number") {
                this._timeout = setTimeout(()=>{
                    this._update({
                        timedOut: true
                    });
                }, opts.timeout);
            }
        }
        this._res.promise.then(()=>{
            this._update({});
            this._clearTimeouts();
        }).catch((_err)=>{
            this._update({});
            this._clearTimeouts();
        });
        this._update({});
    }
    _update(partial) {
        this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...partial
        };
        this._callbacks.forEach((callback)=>callback());
    }
    _clearTimeouts() {
        clearTimeout(this._delay);
        clearTimeout(this._timeout);
    }
    getCurrentValue() {
        return this._state;
    }
    subscribe(callback) {
        this._callbacks.add(callback);
        return ()=>{
            this._callbacks.delete(callback);
        };
    }
    constructor(loadFn, opts){
        this._loadFn = loadFn;
        this._opts = opts;
        this._callbacks = new Set();
        this._delay = null;
        this._timeout = null;
        this.retry();
    }
}
function Loadable(opts) {
    return createLoadableComponent(load, opts);
}
function flushInitializers(initializers, ids) {
    let promises = [];
    while(initializers.length){
        let init = initializers.pop();
        promises.push(init(ids));
    }
    return Promise.all(promises).then(()=>{
        if (initializers.length) {
            return flushInitializers(initializers, ids);
        }
    });
}
Loadable.preloadAll = ()=>{
    return new Promise((resolveInitializers, reject)=>{
        flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
    });
};
Loadable.preloadReady = (ids)=>{
    if (ids === void 0) ids = [];
    return new Promise((resolvePreload)=>{
        const res = ()=>{
            initialized = true;
            return resolvePreload();
        };
        // We always will resolve, errors should be handled within loading UIs.
        flushInitializers(READY_INITIALIZERS, ids).then(res, res);
    });
};
if (true) {
    window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}
const _default = Loadable; //# sourceMappingURL=loadable.shared-runtime.js.map


/***/ }),

/***/ 52612:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"baidu-map_textFontWeight__XKy_n","mapBox":"baidu-map_mapBox__km8xB","button-hover":"baidu-map_button-hover__u1Z3u"};

/***/ }),

/***/ 56170:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(77456)


/***/ })

}]);