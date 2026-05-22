(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[442],{

/***/ 92991:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/store-locator",
      function () {
        return __webpack_require__(92445);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 25638:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__.Z = ({"src":"https://static.ysl.cn/_next/static/media/close.7e8fc330.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAf0lEQVR42iWNsQ2DMBREv9xg6/gUFEjULJBELrJOShKhzMMWTMAMbJLESBbQXAzomnvNe0KhCVh00w9oKAmj0hLMmaVnJID2dR3qqWw93QxZlBjq+8N3fUMXC9mU+VT67vIeK2JV+YJZ6/tmrJ432h9OqUsD7SHdszNisWo4sn8N2zwJnkvA3QAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

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

/***/ 92445:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ store_locator; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./features/store-locator/index.module.scss
var index_module = __webpack_require__(45170);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/router.js
var next_router = __webpack_require__(69132);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./features/store-locator/store-locator-map/index.module.scss
var store_locator_map_index_module = __webpack_require__(13393);
var store_locator_map_index_module_default = /*#__PURE__*/__webpack_require__.n(store_locator_map_index_module);
// EXTERNAL MODULE: ./features/store-locator/store-locator-context.tsx
var store_locator_context = __webpack_require__(25037);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./utils/event-bus.ts
var event_bus = __webpack_require__(24286);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-utils@1.16.0_events@3.3.0/node_modules/@kering-technologies/ec_china-package-utils/dist/index.esm.js
var index_esm = __webpack_require__(80811);
// EXTERNAL MODULE: ./hooks/use-breakpoints.ts
var use_breakpoints = __webpack_require__(21525);
// EXTERNAL MODULE: ./components/baidu-map/index.tsx + 1 modules
var baidu_map = __webpack_require__(27747);
// EXTERNAL MODULE: ./features/store-locator/store-list-item/index.tsx
var store_list_item = __webpack_require__(42681);
// EXTERNAL MODULE: ./features/store-locator/enum.tsx
var store_locator_enum = __webpack_require__(45844);
// EXTERNAL MODULE: ./features/store-locator/store-detail-back.ts
var store_detail_back = __webpack_require__(59653);
// EXTERNAL MODULE: ./assets/svg/plus-sign.svg
var plus_sign = __webpack_require__(23660);
// EXTERNAL MODULE: ./assets/svg/minus.svg
var minus = __webpack_require__(95875);
// EXTERNAL MODULE: ./utils/zero-fill.ts
var zero_fill = __webpack_require__(48188);
// EXTERNAL MODULE: ./contexts/toast/index.tsx
var toast = __webpack_require__(80360);
// EXTERNAL MODULE: ./packages/loading/index.tsx + 1 modules
var loading = __webpack_require__(59830);
// EXTERNAL MODULE: ./components/create-portal.tsx
var create_portal = __webpack_require__(77470);
// EXTERNAL MODULE: ./features/store-locator/find-store/index.module.scss
var find_store_index_module = __webpack_require__(73601);
var find_store_index_module_default = /*#__PURE__*/__webpack_require__.n(find_store_index_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.45.4_react@18.2.0/node_modules/react-hook-form/dist/index.esm.mjs
var dist_index_esm = __webpack_require__(24924);
// EXTERNAL MODULE: ./features/store-locator/full-region-select/index.tsx
var full_region_select = __webpack_require__(44198);
// EXTERNAL MODULE: ./components/by-breakpoints.tsx
var by_breakpoints = __webpack_require__(25073);
// EXTERNAL MODULE: ./features/store-locator/store-list/index.tsx
var store_list = __webpack_require__(73918);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-hooks@1.17.0_lodash.debounce@4.0.8_lodash.throttle@4.1._nnr3xwofk5oatghfixxbrp4jym/node_modules/@kering-technologies/ec_china-package-hooks/dist/index.esm.js
var ec_china_package_hooks_dist_index_esm = __webpack_require__(59265);
// EXTERNAL MODULE: ./assets/svg/arrow-down.svg
var arrow_down = __webpack_require__(3974);
// EXTERNAL MODULE: ./contexts/module-height.tsx
var module_height = __webpack_require__(80388);
;// CONCATENATED MODULE: ./utils/is-ios-mobile.ts
const isIOSMobile = ()=>{
    const u = window.navigator.userAgent;
    const ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    const iPad = u.indexOf("iPad") > -1;
    const iPhone = u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1;
    if (ios || iPad || iPhone) {
        return true;
    } else {
        return false;
    }
};

// EXTERNAL MODULE: ./adapters/gtm-adapter.tsx + 4 modules
var gtm_adapter = __webpack_require__(3054);
// EXTERNAL MODULE: ./hooks/use-element-into-view.ts
var use_element_into_view = __webpack_require__(22682);
// EXTERNAL MODULE: ./adapters/sensors/index.tsx + 2 modules
var sensors = __webpack_require__(64068);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-web_sensors@1.48.0_next@14.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@kering-technologies/ec_china-package-web_sensors/dist/index.js
var dist = __webpack_require__(57377);
;// CONCATENATED MODULE: ./features/store-locator/find-store/index.tsx























var SelectTypes;
(function(SelectTypes) {
    SelectTypes[SelectTypes["selectList"] = 0] = "selectList";
    SelectTypes[SelectTypes["selectMap"] = 1] = "selectMap";
})(SelectTypes || (SelectTypes = {}));
const STORE_CHINA_CODE_ARR = [
    "Hong Kong SAR",
    "Macau SAR",
    "Taiwan Region"
];
const _FindStore = (param)=>{
    let { baiDuMapDomId, setCity, setRegion, setCountry } = param;
    var _router_query, _router_query1;
    const { reset, control, watch, setValue } = (0,dist_index_esm/* useForm */.cI)({
        mode: "all"
    });
    const region = watch("region");
    const city = watch("city");
    const country = watch("country");
    const { field: regionField } = (0,dist_index_esm/* useController */.bc)({
        name: "region",
        control
    });
    const { field: cityField } = (0,dist_index_esm/* useController */.bc)({
        name: "city",
        control
    });
    const { field: countryField } = (0,dist_index_esm/* useController */.bc)({
        name: "country",
        control
    });
    const [selectTabIndex, setSelectTabIndex] = (0,react.useState)(0);
    const mapEl = (0,react.useRef)(null);
    const [mapTopHeight, setMapTopHeight] = (0,react.useState)(0);
    const windowWidth = (0,ec_china_package_hooks_dist_index_esm/* useWindowWidth */.Lm)();
    const findStoreEl = (0,react.useRef)(null);
    /** switchTab是否处于Sticky状态的标识元素 */ const stickySignRef = (0,react.useRef)(null);
    const { isMobile, isTablet } = (0,use_breakpoints/* useBreakpoints */.k)();
    const router = (0,next_router.useRouter)();
    const { topHeight } = (0,module_height/* useModuleHeight */.l)();
    const isAppointment = ((_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.isAppointment) ? JSON.parse(router.query.isAppointment) : false;
    const height0 = {
        height: 0,
        overflow: "hidden"
    };
    const heightAuto = {
        height: "auto"
    };
    const [mapHeight, setMapHeight] = (0,react.useState)();
    const { cityStoreSearch } = (0,gtm_adapter/* useGtm */.u)();
    const { cityStoreSearch: sensorsCityStoreSearch } = (0,sensors/* useSensors */.D)();
    /** switchTab是否处于Sticky状态 */ const [isTabSticky, setIsTabSticky] = (0,react.useState)(false);
    /** sticky元素 是否需要手动设置到 第一屏下方 */ const [isSignManualSetting, setIsSignManualSetting] = (0,react.useState)(false);
    /** sticky元素 手动设置到 第一屏下方的距离 */ const [signManualBottom, setSignManualBottom] = (0,react.useState)(0);
    /** 国家 */ const countryByRouter = (0,react.useMemo)(()=>{
        var _router_query;
        return (((_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.country) || "").replace(/_/g, " ");
    }, [
        router.query.country
    ]);
    const isChinaArea = (countryId)=>{
        return [
            dist/* CountrySearched */.rf.China,
            ...STORE_CHINA_CODE_ARR
        ].find((item)=>item.toUpperCase() === (countryId || "").toUpperCase());
    };
    const { getRegions, getStoreList, getStoreParams, regionRepository, storeLocatorTotal, selectedStoreData, setSelectedStoreData, canStoreLocatorScroll, storeLocatorList } = (0,store_locator_context/* useStoreLocator */.k)();
    (0,react.useEffect)(()=>{
        const mapHeight = {
            height: isIOSMobile() ? "calc(min(100dvh, 100vh) - ".concat(topHeight + (isMobile ? 170 : 176), "px)") : "calc(100vh - ".concat(topHeight + (isMobile ? 170 : 176), "px)")
        };
        setMapHeight(mapHeight);
    }, [
        isMobile,
        topHeight
    ]);
    /** 国家选择后清空 city 字段 */ (0,react.useEffect)(()=>{
        const subscribe = watch((value, param)=>{
            let { name } = param;
            if (name === "country") {
                // 当 country 字段变化时，清空 city 字段
                setValue("city", undefined);
            }
            if (name === "region") {
                // 当 region 字段变化时，清空 city 字段
                setValue("city", undefined);
            }
        });
        return ()=>{
            subscribe === null || subscribe === void 0 ? void 0 : subscribe.unsubscribe();
        };
    }, [
        setValue,
        watch
    ]);
    (0,react.useEffect)(()=>{
        const code = router.query.code || "";
        const countryId = router.query.country || "";
        if (!countryId) {
            setValue("country", undefined);
        }
        if (!code || !!countryId) {
            return;
        }
        const data = code.split(",") || [];
        if (data.length && data[1]) {
            setValue("region", {
                id: data[1],
                code: data[0] + "," + data[1],
                name: data[1]
            });
        }
        setTimeout(()=>{
            if (data.length && data[2]) {
                setValue("city", {
                    id: data[2],
                    code: code,
                    name: data[2]
                });
            }
        }, 200);
    }, [
        setValue,
        router.query.code,
        router.query.country
    ]);
    (0,react.useEffect)(()=>{
        if (!!countryByRouter && !!regionRepository && Object.keys(regionRepository).length) {
            var _code_split;
            const countryKey = Object.keys(regionRepository).find((key)=>{
                const id = (key.split(",") || [])[1] || "";
                if (id.toLowerCase() === countryByRouter.toLowerCase()) {
                    return true;
                }
                return false;
            });
            // 当国家无法匹配到是请求中国店铺列表 【必要逻辑】
            if (!countryKey) {
                getStoreList();
                return;
            }
            const data = countryKey.split(",") || [];
            const countryValue = (regionRepository[0] || []).find((item)=>item.id === data[1]);
            if (!(countryValue === null || countryValue === void 0 ? void 0 : countryValue.id)) {
                return;
            }
            if (countryValue) {
                setValue("country", {
                    id: (countryValue === null || countryValue === void 0 ? void 0 : countryValue.id) || "",
                    code: countryKey,
                    name: (countryValue === null || countryValue === void 0 ? void 0 : countryValue.name) || ""
                });
            }
            const code = router.query.code || "";
            const cityList = regionRepository[countryKey] || [];
            if (!code && (cityList === null || cityList === void 0 ? void 0 : cityList.length)) return;
            const cityId = ((_code_split = code.split(",")) === null || _code_split === void 0 ? void 0 : _code_split[2]) || "";
            if (cityId) {
                if (cityList === null || cityList === void 0 ? void 0 : cityList.length) {
                    const cityValue = cityList.find((item)=>{
                        var _item_id;
                        return ((_item_id = item.id) === null || _item_id === void 0 ? void 0 : _item_id.toUpperCase()) === cityId.toUpperCase();
                    });
                    if (cityValue) {
                        setTimeout(()=>{
                            setValue("city", {
                                id: (cityValue === null || cityValue === void 0 ? void 0 : cityValue.id) || "",
                                code: "".concat(countryKey, ",").concat(cityValue === null || cityValue === void 0 ? void 0 : cityValue.id) || "",
                                name: (cityValue === null || cityValue === void 0 ? void 0 : cityValue.name) || ""
                            });
                        }, 200);
                    }
                }
            }
        }
    }, [
        setValue,
        countryByRouter,
        regionRepository,
        router.query.code,
        getStoreList
    ]);
    (0,react.useEffect)(()=>{
        if ((region === null || region === void 0 ? void 0 : region.id) || (city === null || city === void 0 ? void 0 : city.id) || (country === null || country === void 0 ? void 0 : country.id)) {
            var _country_id;
            setSelectedStoreData(null);
            const params = {
                isAppointment,
                // TODO Store locator in .cn show the stores in Hong Kong, Macau and Taiwan
                regionAndDistrict: true
            };
            const countryId = (country === null || country === void 0 ? void 0 : (_country_id = country.id) === null || _country_id === void 0 ? void 0 : _country_id.toUpperCase()) || "";
            const isChina = countryId === dist/* CountrySearched */.rf.China.toUpperCase();
            const isChinaSpecialEconomicZone = STORE_CHINA_CODE_ARR.find((item)=>item.toUpperCase() === countryId);
            // 中国选择特殊处理, 已与 sam 沟通确认正式站也会是 China
            if (isChina) {
                (city === null || city === void 0 ? void 0 : city.id) ? params.region = city === null || city === void 0 ? void 0 : city.name : "";
                setValue("country", undefined);
                getRegions(isAppointment, true);
            // 港澳台特殊处理
            } else if (isChinaSpecialEconomicZone) {
                params.region = country === null || country === void 0 ? void 0 : country.name;
                setValue("country", undefined);
                getRegions(isAppointment, true);
                setValue("region", {
                    id: (params === null || params === void 0 ? void 0 : params.region) || "",
                    code: "0,".concat((params === null || params === void 0 ? void 0 : params.region) || ""),
                    name: params.region || ""
                });
            } else {
                (city === null || city === void 0 ? void 0 : city.id) ? params.city = city === null || city === void 0 ? void 0 : city.id : "";
                (region === null || region === void 0 ? void 0 : region.id) && !(country === null || country === void 0 ? void 0 : country.id) ? params.region = region === null || region === void 0 ? void 0 : region.id : "";
            }
            if ((country === null || country === void 0 ? void 0 : country.id) && !isChina && !isChinaSpecialEconomicZone) {
                params.country = country === null || country === void 0 ? void 0 : country.id;
            }
            getStoreParams.current = params;
            getStoreList();
            try {
                // GTM埋点：当用户输入一个国家/城市
                cityStoreSearch({
                    city: (city === null || city === void 0 ? void 0 : city.id) || "",
                    province: (region === null || region === void 0 ? void 0 : region.id) || ""
                });
                (city === null || city === void 0 ? void 0 : city.id) && sensorsCityStoreSearch({
                    country_searched: dist/* CountrySearched */.rf.China,
                    city_searched: (city === null || city === void 0 ? void 0 : city.name) || ""
                });
            } catch (e) {
                console.error("[GTM][cityStoreSearch]", e);
            }
        }
        // 修复之前setCity、setRegion在if内的bug，因为setCity、setRegion要和这两个字段关联，在if内的话就不会置空，所以提出来，这样即使city id、region id为false，也会设置setCity、setRegion.
        setCity((city === null || city === void 0 ? void 0 : city.id) ? city : undefined);
        setRegion((region === null || region === void 0 ? void 0 : region.id) ? region : undefined);
        setCountry((country === null || country === void 0 ? void 0 : country.id) ? country : undefined);
    }, [
        city === null || city === void 0 ? void 0 : city.id,
        getStoreList,
        getStoreParams,
        isAppointment,
        region === null || region === void 0 ? void 0 : region.id,
        setCity,
        setRegion,
        setSelectedStoreData,
        cityStoreSearch,
        sensorsCityStoreSearch,
        setCountry,
        country === null || country === void 0 ? void 0 : country.id,
        setValue,
        getRegions
    ]);
    (0,react.useEffect)(()=>{
        var _router_query;
        if ((_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.lngAndLat) {
            var _router_query1, _router_query2, _router_query3, _router_query4;
            setSelectedStoreData(null);
            const params = {
                isAppointment,
                // TODO Store locator in .cn show the stores in Hong Kong, Macau and Taiwan
                regionAndDistrict: true,
                currentLocation: {
                    lng: ((_router_query1 = router.query) === null || _router_query1 === void 0 ? void 0 : _router_query1.lngAndLat) ? ((_router_query2 = router.query) === null || _router_query2 === void 0 ? void 0 : _router_query2.lngAndLat).split(",")[0] : "",
                    lat: ((_router_query3 = router.query) === null || _router_query3 === void 0 ? void 0 : _router_query3.lngAndLat) ? ((_router_query4 = router.query) === null || _router_query4 === void 0 ? void 0 : _router_query4.lngAndLat).split(",")[1] : ""
                }
            };
            getStoreParams.current = params;
            getStoreList();
        }
    }, [
        getStoreList,
        getStoreParams,
        isAppointment,
        setSelectedStoreData,
        router,
        city === null || city === void 0 ? void 0 : city.id
    ]);
    (0,react.useEffect)(()=>{
        var _router_query;
        getRegions(isAppointment, true, countryByRouter);
        // 没有选择门店/没有经纬度 不执行
        if (!router.isReady || router.query.code || ((_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.lngAndLat)) return;
        getStoreParams.current = {
            isAppointment,
            regionAndDistrict: true
        };
        setSelectedStoreData(null);
        if (!countryByRouter && !(region === null || region === void 0 ? void 0 : region.id)) {
            getStoreList();
        }
    }, [
        getRegions,
        getStoreList,
        getStoreParams,
        router.isReady,
        router.query.code,
        (_router_query1 = router.query) === null || _router_query1 === void 0 ? void 0 : _router_query1.lngAndLat,
        setSelectedStoreData,
        isAppointment,
        countryByRouter
    ]);
    (0,react.useEffect)(()=>{
        if (mapEl.current) {
            var _mapEl_current;
            const top = (_mapEl_current = mapEl.current) === null || _mapEl_current === void 0 ? void 0 : _mapEl_current.getBoundingClientRect().top;
            if (top) setMapTopHeight(top);
        }
    }, [
        windowWidth,
        regionRepository
    ]);
    (0,react.useEffect)(()=>{
        // TODO Store locator in .cn show the stores in Hong Kong, Macau and Taiwan
        !countryByRouter && getRegions(isAppointment, true);
    }, [
        countryByRouter,
        isAppointment,
        getRegions
    ]);
    const handleClickTabs = (0,react.useCallback)(()=>{
        setSelectTabIndex(0 === selectTabIndex ? 1 : 0);
        setSelectedStoreData(null);
        setTimeout(()=>{
            var _window;
            (_window = window) === null || _window === void 0 ? void 0 : _window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 50);
    }, [
        selectTabIndex,
        setSelectedStoreData
    ]);
    const setSelectTabMap = (0,react.useCallback)(()=>{
        setSelectTabIndex(1);
    }, []);
    const updateURLSearchParams = function(pathname, params) {
        try {
            const newUrl = "".concat(pathname).concat(params.size > 0 ? "?".concat(params.toString()) : "");
            router.replace(newUrl, "", {
                shallow: true
            });
        } catch (error) {
            console.error("[find-store][updateURLSearchParams]", error);
        }
    };
    const countryFieldChange = (0,react.useCallback)((regionInfo)=>{
        setValue("city", undefined);
        setValue("region", undefined);
        const query = router.query || {};
        const queryParams = new URLSearchParams(query);
        queryParams.delete("code");
        const countryId = (regionInfo === null || regionInfo === void 0 ? void 0 : regionInfo.id) || "";
        if (isChinaArea(countryId)) {
            // 中国地区 url 上不需要展示 country 参数
            queryParams.delete("country");
        } else {
            queryParams.set("country", countryId.replace(/\s/g, "_"));
        }
        updateURLSearchParams(router.pathname, queryParams);
        countryField.onChange(regionInfo);
    }, [
        countryField,
        router
    ]);
    const removeCountryFromUrl = (0,react.useCallback)(()=>{
        const query = router.query || {};
        const queryParams = new URLSearchParams(query);
        if (!queryParams.has("country")) {
            return;
        }
        // 中国地区 url 上不需要展示 country 参数
        queryParams.delete("country");
        updateURLSearchParams(router.pathname, queryParams);
    }, [
        router
    ]);
    (0,react.useEffect)(()=>{
        if (isMobile || isTablet) return;
        if (findStoreEl && canStoreLocatorScroll) {
            if (selectedStoreData === null || selectedStoreData === void 0 ? void 0 : selectedStoreData.id) {
                var _storeListContainerEle_getBoundingClientRect, _storeLocatorLeftMapContainerEle_getBoundingClientRect;
                // 选择门店元素
                const selectedStoreEle = document.querySelector("#store" + (selectedStoreData === null || selectedStoreData === void 0 ? void 0 : selectedStoreData.id));
                // 计算滚动的偏移量
                const scrollTop = (selectedStoreEle === null || selectedStoreEle === void 0 ? void 0 : selectedStoreEle.offsetTop) - findStoreEl.current.offsetTop;
                // 获取门店列表元素
                const storeListContainerEle = document.querySelector(".storeListContainer");
                // 获取左侧地图元素
                const storeLocatorLeftMapContainerEle = document.querySelector(".storeLocatorLeftMapContainer");
                // 获取左侧地图+门店列表元素
                const storeLocatorContainerEle = document.querySelector(".storeLocatorContainer");
                // 计算门店列表与顶部的距离加上门店列表的高度
                const allListHeight = (storeListContainerEle === null || storeListContainerEle === void 0 ? void 0 : storeListContainerEle.offsetTop) + (storeListContainerEle === null || storeListContainerEle === void 0 ? void 0 : (_storeListContainerEle_getBoundingClientRect = storeListContainerEle.getBoundingClientRect()) === null || _storeListContainerEle_getBoundingClientRect === void 0 ? void 0 : _storeListContainerEle_getBoundingClientRect.height);
                // 获取左侧地图的高度
                const leftMapHeight = storeLocatorLeftMapContainerEle === null || storeLocatorLeftMapContainerEle === void 0 ? void 0 : (_storeLocatorLeftMapContainerEle_getBoundingClientRect = storeLocatorLeftMapContainerEle.getBoundingClientRect()) === null || _storeLocatorLeftMapContainerEle_getBoundingClientRect === void 0 ? void 0 : _storeLocatorLeftMapContainerEle_getBoundingClientRect.height;
                // 根据条件判断执行滚动操作
                if (allListHeight - (selectedStoreEle === null || selectedStoreEle === void 0 ? void 0 : selectedStoreEle.offsetTop) < leftMapHeight) {
                    // 使左侧地图+门店列表元素滚动到底部
                    storeLocatorContainerEle === null || storeLocatorContainerEle === void 0 ? void 0 : storeLocatorContainerEle.scrollIntoView({
                        block: "end",
                        behavior: "smooth"
                    });
                } else {
                    var // 使用 window 滚动到{scrollTop}的位置
                    _window;
                    (_window = window) === null || _window === void 0 ? void 0 : _window.scrollTo({
                        top: scrollTop,
                        behavior: "smooth"
                    });
                }
            } else {
                var _window1;
                (_window1 = window) === null || _window1 === void 0 ? void 0 : _window1.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
    }, [
        selectedStoreData,
        mapTopHeight,
        baiDuMapDomId,
        isMobile,
        isTablet,
        canStoreLocatorScroll
    ]);
    (0,react.useEffect)(()=>{
        (0,event_bus/* $on */.Zn)(store_locator_enum/* RESET_REGION_SELECTOR */.E + baiDuMapDomId, reset);
        return ()=>{
            (0,event_bus/* $off */.M5)(store_locator_enum/* RESET_REGION_SELECTOR */.E + baiDuMapDomId, reset);
        };
    }, [
        baiDuMapDomId,
        reset
    ]);
    (0,react.useEffect)(()=>{
        if (isMobile || isTablet) {
            /** 移动端 搜索门店结果少于一屏时 将标识元素的位置 移动至 底部剩余空间下面  */ const storeLocatorContainerEle = document.querySelector(".storeLocatorContainer");
            /** 搜索门店结果是否少于一屏 */ setIsSignManualSetting(storeLocatorContainerEle.offsetHeight + topHeight < window.innerHeight);
            setSignManualBottom(window.innerHeight - storeLocatorContainerEle.offsetHeight - topHeight + 50);
        }
    }, [
        isMobile,
        isTablet,
        storeLocatorList === null || storeLocatorList === void 0 ? void 0 : storeLocatorList.length,
        topHeight,
        selectTabIndex
    ]);
    // 监听标识元素 stickySign 是否进入可视区域
    (0,use_element_into_view/* useElementIntoView */.R)({
        element: stickySignRef.current,
        callBack: setIsTabSticky,
        options: {
            /** 上边界5000%（stickySign超出上边界5000% 才会标识为超出可视区域） 实际不会出现此情况（标识元素下面只有footer，footer实际不会大于50倍屏幕高度）
       *  用于 stickySign只设置从下向上进入可视区域状态
       */ rootMargin: "5000% 0px 0px 0px"
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ref: findStoreEl,
        style: selectTabIndex === 1 && mapTopHeight ? mapHeight : heightAuto,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (find_store_index_module_default()).findStoreWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(by_breakpoints/* ByBreakpoints */.W, {
                        breakpoints: [
                            "mobile",
                            "tablet"
                        ],
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (find_store_index_module_default()).title,
                                children: "查找门店"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                ref: mapEl,
                                className: (find_store_index_module_default()).mapContainer,
                                style: selectTabIndex === 1 && mapTopHeight ? mapHeight : height0,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StoreLocatorMap, {
                                    isMobileOrTablet: true,
                                    selectTabIndex: selectTabIndex,
                                    wrapperStyle: mapHeight,
                                    defaultPosition: {
                                        lng: 113.6313494733,
                                        lat: 34.753487882409
                                    },
                                    region: region,
                                    city: city,
                                    baiDuMapId: baiDuMapDomId
                                })
                            })
                        ]
                    }),
                    0 === selectTabIndex ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (find_store_index_module_default()).content,
                        children: [
                            regionRepository && !country && /*#__PURE__*/ (0,jsx_runtime.jsx)(full_region_select/* FullRegionSelect */.S, {
                                province: regionField.value,
                                provinceLabel: "省份/地区",
                                cityLabel: "城市",
                                provincePlaceholder: "请选择省份/地区",
                                cityPlaceholder: "请选择城市",
                                city: cityField.value,
                                onProvinceChange: (regionInfo)=>{
                                    setValue("city", undefined);
                                    removeCountryFromUrl();
                                    regionField.onChange(regionInfo);
                                },
                                onCityChange: (regionInfo)=>{
                                    removeCountryFromUrl();
                                    cityField.onChange(regionInfo);
                                },
                                onProvinceBlur: regionField.onBlur,
                                onCityBlur: cityField.onBlur,
                                regionRepository: regionRepository
                            }),
                            regionRepository && !!country && /*#__PURE__*/ (0,jsx_runtime.jsx)(full_region_select/* FullRegionSelect */.S, {
                                province: countryField.value,
                                provinceLabel: "地区/国家",
                                cityLabel: "城市",
                                provincePlaceholder: "请选择地区/国家",
                                cityPlaceholder: "请选择城市",
                                city: cityField.value,
                                onProvinceChange: countryFieldChange,
                                onCityChange: cityField.onChange,
                                onProvinceBlur: countryField.onBlur,
                                onCityBlur: cityField.onBlur,
                                regionRepository: regionRepository
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classnames_default()((find_store_index_module_default()).geolocationBtn),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: (find_store_index_module_default()).text,
                                    onClick: ()=>{
                                        reset();
                                        (0,event_bus/* $emit */.Qy)("geolocation-" + baiDuMapDomId);
                                    },
                                    children: "获取我的位置"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (find_store_index_module_default()).searchResultTipText,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: storeLocatorTotal != null && "找到".concat(storeLocatorTotal, "家门店")
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(by_breakpoints/* ByBreakpoints */.W, {
                                        breakpoints: [
                                            "desktop"
                                        ],
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            onClick: ()=>{},
                                            className: (find_store_index_module_default()).filter,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "筛选"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* default */.Z, {
                                                    className: classnames_default()((find_store_index_module_default()).icon)
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(store_list/* StoreList */.D, {
                                setSelectTabMap: setSelectTabMap,
                                region: region,
                                city: city
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(by_breakpoints/* ByBreakpoints */.W, {
                breakpoints: [
                    "mobile",
                    "tablet"
                ],
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (find_store_index_module_default()).mapContainerPlaceholder,
                        style: selectTabIndex === 1 && mapTopHeight ? {
                            height: isMobile ? "502px" : "776px"
                        } : height0
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        ref: stickySignRef,
                        className: (find_store_index_module_default()).stickySign,
                        style: isSignManualSetting && 0 === selectTabIndex ? {
                            bottom: -signManualBottom + "px"
                        } : {}
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classnames_default()((find_store_index_module_default()).switchTab, isTabSticky ? (find_store_index_module_default()).tabHidden : ""),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                onClick: handleClickTabs,
                                children: 0 === selectTabIndex ? "地图上查看" : "查看门店列表"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                onClick: ()=>{},
                                className: (find_store_index_module_default()).filter,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "筛选"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(arrow_down/* default */.Z, {
                                        className: classnames_default()((find_store_index_module_default()).icon)
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const FindStore = /*#__PURE__*/ (0,react.memo)(_FindStore);

;// CONCATENATED MODULE: ./features/store-locator/store-locator-map/index.tsx






















const StoreLocatorMap = (param)=>{
    let { isZoomBtnInvisible = true, isSearchThisAreaBtnInvisible = true, defaultPosition = {
        lng: 113.6313494733,
        lat: 34.753487882409
    }, defaultZoomNumber = 5, zoomInNumber = 11, wrapperClassName, wrapperStyle, handleClickDetail, baiDuMapId, region, city, country, selectTabIndex, isMobileOrTablet = false, isAutoZoomToShowAllStores = false } = param;
    const router = (0,next_router.useRouter)();
    const { isTablet, isMobile } = (0,use_breakpoints/* useBreakpoints */.k)();
    const closeSrc = (__webpack_require__(25638)/* ["default"] */ .Z).src;
    const map = (0,react.useRef)(null);
    const mapUseId = (0,react.useId)();
    const mapId = baiDuMapId || mapUseId;
    const { showToast } = (0,toast/* useToast */.p)();
    const { startLoading, finishLoading } = (0,loading/* useLoading */.r$)();
    const [isStoreCardVisible, setIsStoreCardVisible] = (0,react.useState)(false);
    const [searchThisAreaBtn, setSearchThisAreaBtn] = (0,react.useState)(false);
    const iconConfig = {
        selectedUrl: {
            url: (__webpack_require__(99574)/* ["default"] */ .Z).src,
            deviationX: 9,
            deviationY: 23,
            imageWidth: 18,
            imageHeight: 23
        },
        unSelected: {
            url: (__webpack_require__(99574)/* ["default"] */ .Z).src,
            deviationX: 9,
            deviationY: 23,
            imageWidth: 18,
            imageHeight: 23
        }
    };
    const { getStoreParams, storeLocatorList, selectedStoreData, setSelectedStoreData, selectedStoreIndex, setSelectedStoreIndex, getStoreList, storeLocatorTotal, setCanStoreLocatorScroll } = (0,store_locator_context/* useStoreLocator */.k)();
    const { geolocationSearch, viewStoreDetails } = (0,gtm_adapter/* useGtm */.u)();
    const { geolocationSearch: sensorsGeolocationSearch, viewStoreDetails: sensorsViewStoreDetails } = (0,sensors/* useSensors */.D)();
    (0,react.useEffect)(()=>{
        if (storeLocatorTotal === 0) {
            return;
        }
    }, [
        showToast,
        storeLocatorTotal
    ]);
    const mapClickEventRegistration = (0,react.useCallback)(()=>{
        try {
            const goToStoreDetail = document.querySelector(".goToStoreDetail-" + mapId);
            goToStoreDetail.addEventListener("click", (e)=>{
                e.stopPropagation();
                if (selectedStoreData) {
                    var _router_query, _getStoreParams_current;
                    if (handleClickDetail) return handleClickDetail(selectedStoreData);
                    const isAppointment = ((_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.isAppointment) ? JSON.parse(router.query.isAppointment) : false;
                    if (city || region || country) {
                        let queryString = "";
                        if (city === null || city === void 0 ? void 0 : city.code) {
                            queryString += "code=".concat(city.code, "&");
                        } else if (region === null || region === void 0 ? void 0 : region.code) {
                            queryString += "code=".concat(region.code, "&");
                        }
                        if (isAppointment !== undefined) {
                            queryString += "isAppointment=".concat(isAppointment, "&");
                        }
                        if (country === null || country === void 0 ? void 0 : country.id) {
                            queryString += "country=".concat(country.id, "&");
                        }
                        // Remove the trailing '&' if it exists
                        if (queryString.endsWith("&")) {
                            queryString = queryString.slice(0, -1);
                        }
                        (0,store_detail_back/* setStoreDetailBackSession */.D)("?".concat(queryString));
                        try {
                            // GTM埋点：查看商店详细信息
                            viewStoreDetails({
                                boutiqueId: (selectedStoreData === null || selectedStoreData === void 0 ? void 0 : selectedStoreData.code) || ""
                            });
                            sensorsViewStoreDetails({
                                boutique_id: String(selectedStoreData === null || selectedStoreData === void 0 ? void 0 : selectedStoreData.code) || ""
                            });
                        } catch (err) {
                            console.error("[GTM][viewStoreDetails]", err);
                        }
                        router.push("/stores/" + selectedStoreData.url);
                        return;
                    }
                    const { lng = "", lat = "" } = ((_getStoreParams_current = getStoreParams.current) === null || _getStoreParams_current === void 0 ? void 0 : _getStoreParams_current.currentLocation) || {};
                    const lngAndLat = lng && lat ? "&lngAndLat=".concat(lng, ",").concat(lat) : "";
                    (0,store_detail_back/* setStoreDetailBackSession */.D)("?isAppointment=" + isAppointment + lngAndLat);
                    try {
                        // GTM埋点：查看商店详细信息
                        viewStoreDetails({
                            boutiqueId: (selectedStoreData === null || selectedStoreData === void 0 ? void 0 : selectedStoreData.code) || ""
                        });
                        sensorsViewStoreDetails({
                            boutique_id: String(selectedStoreData === null || selectedStoreData === void 0 ? void 0 : selectedStoreData.code) || ""
                        });
                    } catch (err) {
                        console.error("[GTM][viewStoreDetails]", err);
                    }
                    router.push("/stores/" + selectedStoreData.url);
                }
            });
            goToStoreDetail.addEventListener("touchend", (e)=>{
                e.stopPropagation();
                if (selectedStoreData) {
                    if (handleClickDetail) {
                        handleClickDetail(selectedStoreData);
                    } else {
                        var _router_query, _getStoreParams_current;
                        const isAppointment = ((_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.isAppointment) ? JSON.parse(router.query.isAppointment) : false;
                        if (city || region) {
                            (0,store_detail_back/* setStoreDetailBackSession */.D)("?code=" + ((city === null || city === void 0 ? void 0 : city.code) || (region === null || region === void 0 ? void 0 : region.code)) + "&isAppointment=" + isAppointment);
                            try {
                                // GTM埋点：查看商店详细信息
                                viewStoreDetails({
                                    boutiqueId: (selectedStoreData === null || selectedStoreData === void 0 ? void 0 : selectedStoreData.code) || ""
                                });
                            } catch (err) {
                                console.error("[GTM][viewStoreDetails]", err);
                            }
                            router.push("/stores/" + selectedStoreData.url);
                            return;
                        }
                        const { lng = "", lat = "" } = ((_getStoreParams_current = getStoreParams.current) === null || _getStoreParams_current === void 0 ? void 0 : _getStoreParams_current.currentLocation) || {};
                        const lngAndLat = lng && lat ? "&lngAndLat=".concat(lng, ",").concat(lat) : "";
                        (0,store_detail_back/* setStoreDetailBackSession */.D)("?isAppointment=" + isAppointment + lngAndLat);
                        try {
                            // GTM埋点：查看商店详细信息
                            viewStoreDetails({
                                boutiqueId: (selectedStoreData === null || selectedStoreData === void 0 ? void 0 : selectedStoreData.code) || ""
                            });
                        } catch (err) {
                            console.error("[GTM][viewStoreDetails]", err);
                        }
                        router.push("/stores/" + selectedStoreData.url);
                    }
                }
            });
            const storeDetailClose = document.querySelector(".storeDetailClose");
            storeDetailClose.addEventListener("click", ()=>{
                var _map_current_infoBox, _map_current;
                (_map_current = map.current) === null || _map_current === void 0 ? void 0 : (_map_current_infoBox = _map_current.infoBox()) === null || _map_current_infoBox === void 0 ? void 0 : _map_current_infoBox.close();
            });
            storeDetailClose.addEventListener("touchend", ()=>{
                var _map_current_infoBox, _map_current;
                (_map_current = map.current) === null || _map_current === void 0 ? void 0 : (_map_current_infoBox = _map_current.infoBox()) === null || _map_current_infoBox === void 0 ? void 0 : _map_current_infoBox.close();
            });
        } catch (error) {
            console.error("[store-locator-map][mapClickEventRegistration]", error);
        }
    }, [
        mapId,
        selectedStoreData,
        handleClickDetail,
        router,
        city,
        region,
        getStoreParams,
        viewStoreDetails
    ]);
    const infoBoxCallback = (0,react.useCallback)((data, selectedIndex)=>{
        if (isMobile || isTablet) {
            return;
        }
        setCanStoreLocatorScroll === null || setCanStoreLocatorScroll === void 0 ? void 0 : setCanStoreLocatorScroll((val)=>val + 1);
        const html = '<div style="font-size: 12px;display:inline-block">\n                      <div class="storeDetailClose" style="position: absolute;right: 12px;top:12px;width: 24px;height: 24px; opacity: 0;z-index:211;cursor:pointer"></div>\n                      <div style="width:225px;font-weight: 700">'.concat((0,zero_fill/* default */.Z)(selectedIndex + 1), ".").concat(data.name, "</div>\n                      <div>").concat(data.servicesInfo, "</div>\n                      <div>").concat(data.businessToday && data.businessToday.openFrom && data.businessToday.openTo ? "营业时间：" + data.businessToday.openFrom + " - " + data.businessToday.openTo : "今日闭店", '\n                        </div>\n                      </div>\n                      <div style="margin-top: 16px">\n                        <span class="goToStoreDetail-').concat(mapId, '" style="text-decoration:underline;text-underline-offset: 2px;cursor:pointer;">门店详情</span>\n                      </div>\n                    </div>');
        return {
            html,
            config: {
                boxStyle: {
                    width: "280px",
                    minHeight: "140px",
                    transform: "translateY(calc(100% + 16px))",
                    backgroundColor: "#fff",
                    fontSize: "12px",
                    padding: "20px",
                    lineHeight: "16px",
                    zIndex: "200",
                    cursor: "default"
                },
                enableAutoPan: false,
                closeIconMargin: "-8px 12px 0 0",
                closeIconUrl: closeSrc
            }
        };
    }, [
        isMobile,
        isTablet,
        mapId,
        closeSrc
    ]);
    const geolocation = (0,react.useCallback)(()=>{
        var _map_current;
        startLoading();
        (_map_current = map.current) === null || _map_current === void 0 ? void 0 : _map_current.geolocation((param)=>{
            let { lng, lat, status } = param;
            finishLoading();
            if (status && lng && lat) {
                var _getStoreParams_current;
                const isAppointment = ((_getStoreParams_current = getStoreParams.current) === null || _getStoreParams_current === void 0 ? void 0 : _getStoreParams_current.isAppointment) || false;
                getStoreParams.current = {
                    isAppointment,
                    // TODO Store locator in .cn show the stores in Hong Kong, Macau and Taiwan
                    regionAndDistrict: true,
                    currentLocation: {
                        lng: String(lng),
                        lat: String(lat)
                    }
                };
                getStoreList();
                // GTM埋点：查看我的位置
                geolocationSearch();
                sensorsGeolocationSearch();
            } else {
                showToast("我们无法获取您目前的位置。<br />请检查您的设置或升级您的浏览器或使用其他浏览器。", "提示");
            }
        }, true);
    }, [
        finishLoading,
        geolocationSearch,
        getStoreList,
        getStoreParams,
        showToast,
        startLoading
    ]);
    (0,react.useEffect)(()=>{
        (0,event_bus/* $on */.Zn)("geolocation-" + mapId, geolocation);
        return ()=>{
            (0,event_bus/* $off */.M5)("geolocation-" + mapId, geolocation);
        };
    }, [
        mapId,
        geolocation
    ]);
    const ZoomBtn = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (store_locator_map_index_module_default()).zoomBtn,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classnames_default()((store_locator_map_index_module_default()).zoomBtnItem, (store_locator_map_index_module_default()).plus),
                    onClick: ()=>{
                        var _map_current;
                        return (_map_current = map.current) === null || _map_current === void 0 ? void 0 : _map_current.map().zoomIn();
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(plus_sign/* default */.Z, {
                        className: (store_locator_map_index_module_default()).btn
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (store_locator_map_index_module_default()).zoomBtnLine
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (store_locator_map_index_module_default()).zoomBtnItem,
                    onClick: ()=>{
                        var _map_current;
                        return (_map_current = map.current) === null || _map_current === void 0 ? void 0 : _map_current.map().zoomOut();
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(minus/* default */.Z, {
                        className: (store_locator_map_index_module_default()).btn
                    })
                })
            ]
        });
    };
    const goToStoreDetail = (data)=>{
        var _router_query, _getStoreParams_current;
        const isAppointment = ((_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.isAppointment) ? JSON.parse(router.query.isAppointment) : false;
        if (city || region) {
            (0,store_detail_back/* setStoreDetailBackSession */.D)("?code=" + ((city === null || city === void 0 ? void 0 : city.code) || (region === null || region === void 0 ? void 0 : region.code)) + "&isAppointment=" + isAppointment);
            try {
                // GTM埋点：查看商店详细信息
                viewStoreDetails({
                    boutiqueId: (data === null || data === void 0 ? void 0 : data.code) || ""
                });
            } catch (e) {
                console.error("[GTM][viewStoreDetails]", e);
            }
            router.push("/stores/" + data.url);
            return;
        }
        const { lng = "", lat = "" } = ((_getStoreParams_current = getStoreParams.current) === null || _getStoreParams_current === void 0 ? void 0 : _getStoreParams_current.currentLocation) || {};
        const lngAndLat = lng && lat ? "&lngAndLat=".concat(lng, ",").concat(lat) : "";
        (0,store_detail_back/* setStoreDetailBackSession */.D)("?isAppointment=" + isAppointment + lngAndLat);
        try {
            // GTM埋点：查看商店详细信息
            viewStoreDetails({
                boutiqueId: (data === null || data === void 0 ? void 0 : data.code) || ""
            });
            sensorsViewStoreDetails({
                boutique_id: String(data.code) || ""
            });
        } catch (e) {
            console.error("[GTM][viewStoreDetails]", e);
        }
        router.push("/stores/" + data.url);
    };
    const makeAnAppointment = (data)=>{
        (0,event_bus/* $emit */.Qy)(store_locator_enum/* StoreAppointmentDialogEnum */.t.OPEN_DIALOG, data);
    };
    const handleClickClose = (0,react.useCallback)(()=>{
        setIsStoreCardVisible(false);
    }, []);
    const openStoreCard = ()=>{
        setIsStoreCardVisible(true);
    };
    //#region 动态获取底部浮动 storeItemHeight 并将高度设置到根结点上
    const setRootStoreItemHeight = (0,react.useCallback)(async ()=>{
        const root = document.querySelector(":root");
        if (!isStoreCardVisible || !(selectedStoreData === null || selectedStoreData === void 0 ? void 0 : selectedStoreData.id)) {
            root.style.setProperty("--root-store-item-height", "0px");
            return;
        }
        // fix: 节点获取不到
        await (0,index_esm/* wait */.Dc)(200);
        const storeItemDom = document.querySelector("#store".concat(selectedStoreData.id));
        const storeItemHeight = (storeItemDom === null || storeItemDom === void 0 ? void 0 : storeItemDom.clientHeight) || 0;
        root.style.setProperty("--root-store-item-height", "".concat(storeItemHeight, "px"));
    }, [
        isStoreCardVisible,
        selectedStoreData
    ]);
    (0,react.useEffect)(()=>{
        setRootStoreItemHeight();
    }, [
        isStoreCardVisible,
        selectedStoreData,
        setRootStoreItemHeight
    ]);
    //#endregion
    (0,react.useEffect)(()=>{
        /** 打开 StoreCard */ (0,event_bus/* $on */.Zn)("openStoreCard", openStoreCard);
        return ()=>{
            (0,event_bus/* $off */.M5)("openStoreCard", openStoreCard);
        };
    }, []);
    const searchThisArea = ()=>{
        var _map_current_map, _map_current;
        try {
            var _map_current_infoBox, _map_current1;
            (_map_current1 = map.current) === null || _map_current1 === void 0 ? void 0 : (_map_current_infoBox = _map_current1.infoBox()) === null || _map_current_infoBox === void 0 ? void 0 : _map_current_infoBox.close();
        } catch (error) {
            console.log("[store-locator][searchThisArea]", error);
        }
        const bounds = (_map_current = map.current) === null || _map_current === void 0 ? void 0 : (_map_current_map = _map_current.map()) === null || _map_current_map === void 0 ? void 0 : _map_current_map.getBounds();
        if (bounds) {
            var _getStoreParams_current;
            setSearchThisAreaBtn(false);
            const params = {
                rangeLocation: {
                    start: bounds.getNorthEast(),
                    end: bounds.getSouthWest()
                }
            };
            const isAppointment = ((_getStoreParams_current = getStoreParams.current) === null || _getStoreParams_current === void 0 ? void 0 : _getStoreParams_current.isAppointment) || false;
            getStoreParams.current = {
                isAppointment,
                // TODO Store locator in .cn show the stores in Hong Kong, Macau and Taiwan
                regionAndDistrict: true,
                ...params
            };
            (0,event_bus/* $emit */.Qy)(store_locator_enum/* RESET_REGION_SELECTOR */.E + mapId);
            getStoreList();
        } else {
            console.log("[store-locator][searchThisArea][getBounds]", "地图异常，请刷新再试");
        }
    };
    (0,react.useEffect)(()=>{
        // mobile or tablet 切换地图视角，重置按钮隐藏状态
        if (isMobileOrTablet && (selectTabIndex === 0 || selectTabIndex === 1)) {
            setSearchThisAreaBtn(false);
        }
    }, [
        isMobileOrTablet,
        selectTabIndex
    ]);
    const changeSearchThisAreaBtn = (0,react.useCallback)(()=>{
        setSearchThisAreaBtn(true);
    }, []);
    const SearchThisArea = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (store_locator_map_index_module_default()).searchThisArea,
            onClick: searchThisArea,
            children: "搜索此区域"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()((store_locator_map_index_module_default()).wrapper, wrapperClassName),
        style: wrapperStyle,
        children: [
            isZoomBtnInvisible && /*#__PURE__*/ (0,jsx_runtime.jsx)(ZoomBtn, {}),
            searchThisAreaBtn && isSearchThisAreaBtnInvisible && /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchThisArea, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(baidu_map/* Map */.D, {
                onRef: map,
                baiDuMapId: mapId,
                className: (store_locator_map_index_module_default()).storeLocatorMapBox,
                dataList: storeLocatorList,
                selectedData: selectedStoreData,
                setSelectedData: setSelectedStoreData,
                selectedIndex: selectedStoreIndex,
                setSelectedIndex: setSelectedStoreIndex,
                defaultPosition: defaultPosition,
                defaultZoomNumber: defaultZoomNumber,
                zoomInNumber: zoomInNumber,
                iconConfig: iconConfig,
                infoBoxCallback: infoBoxCallback,
                mapClickEventRegistration: mapClickEventRegistration,
                getStoreParams: getStoreParams,
                setIsStoreCardVisible: setIsStoreCardVisible,
                mapMove: changeSearchThisAreaBtn,
                isAutoZoomToShowAllStores: isAutoZoomToShowAllStores
            }),
            (isMobile || isTablet) && selectedStoreData && isStoreCardVisible && selectTabIndex === SelectTypes.selectMap ? /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(store_list_item/* StoreListItem */.O, {
                    className: classnames_default()((store_locator_map_index_module_default()).override, (store_locator_map_index_module_default()).storeListItem),
                    store: selectedStoreData,
                    handleClickDetail: goToStoreDetail,
                    handleClickAppointment: makeAnAppointment,
                    inMap: true,
                    storeIndex: selectedStoreIndex,
                    handleClickClose: handleClickClose
                })
            }) : null
        ]
    });
};

// EXTERNAL MODULE: ./layouts/default-layout.tsx + 2 modules
var default_layout = __webpack_require__(65353);
// EXTERNAL MODULE: ./pages/_error.tsx
var _error = __webpack_require__(69770);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/head.js
var head = __webpack_require__(31852);
var head_default = /*#__PURE__*/__webpack_require__.n(head);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/dynamic.js
var dynamic = __webpack_require__(56170);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./features/store-locator/index.tsx















const StoreAppointmentDialog = dynamic_default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 38948)).then((mod)=>mod.StoreAppointmentDialog), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(38948)
            ]
    },
    ssr: false
});
const StoreLocatorWrapper = ()=>{
    const { isServerErrorStatus, selectedStoreData } = (0,store_locator_context/* useStoreLocator */.k)();
    const { topHeight } = (0,module_height/* useModuleHeight */.l)();
    const wrapperEl = (0,react.useRef)(null);
    const [isDialogVisible, setIsDialogVisible] = (0,react.useState)(false);
    const baiDuMapDomId = "container";
    const [city, setCity] = (0,react.useState)(undefined);
    const [region, setRegion] = (0,react.useState)(undefined);
    const [country, setCountry] = (0,react.useState)(undefined);
    const isAutoZoomToShowAllStores = (0,react.useMemo)(()=>{
        return !!((country === null || country === void 0 ? void 0 : country.id) && !(city === null || city === void 0 ? void 0 : city.id));
    }, [
        city === null || city === void 0 ? void 0 : city.id,
        country === null || country === void 0 ? void 0 : country.id
    ]);
    const openDialog = (0,react.useCallback)(()=>{
        setIsDialogVisible(true);
    }, [
        setIsDialogVisible
    ]);
    const closeDialog = (0,react.useCallback)(()=>{
        setIsDialogVisible(false);
    }, [
        setIsDialogVisible
    ]);
    (0,react.useEffect)(()=>{
        (0,event_bus/* $on */.Zn)(store_locator_enum/* StoreAppointmentDialogEnum */.t.OPEN_DIALOG, openDialog);
        return ()=>{
            (0,event_bus/* $off */.M5)(store_locator_enum/* StoreAppointmentDialogEnum */.t.OPEN_DIALOG, openDialog);
        };
    }, [
        openDialog
    ]);
    if (isServerErrorStatus) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(_error["default"], {
            statusCode: isServerErrorStatus
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(default_layout/* DefaultLayout */.H, {
        headerNoOverlap: true,
        footerClassName: (index_module_default()).footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("title", {
                        children: "寻找专卖店 | YSL.CN"
                    }, "title"),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "description",
                        content: "SAINT LAURENT STORE CONCEPT 寻找专卖店"
                    }, "description"),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("link", {
                        rel: "canonical",
                        href: "".concat("https://www.ysl.cn", "/store-locator")
                    }, "canonical")
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()((index_module_default()).wrapper, "storeLocatorContainer"),
                ref: wrapperEl,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(by_breakpoints/* ByBreakpoints */.W, {
                        breakpoints: [
                            "desktop"
                        ],
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classnames_default()((index_module_default()).left, "storeLocatorLeftMapContainer"),
                            style: {
                                height: "calc(100vh - ".concat(topHeight + 80, "px)"),
                                top: "".concat(topHeight + 80, "px")
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StoreLocatorMap, {
                                defaultPosition: {
                                    lng: 113.6313494733,
                                    lat: 34.753487882409
                                },
                                baiDuMapId: baiDuMapDomId,
                                region: region,
                                city: city,
                                country: country,
                                isAutoZoomToShowAllStores: isAutoZoomToShowAllStores
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FindStore, {
                        baiDuMapDomId: baiDuMapDomId,
                        setCity: setCity,
                        setRegion: setRegion,
                        setCountry: setCountry
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(StoreAppointmentDialog, {
                isVisible: isDialogVisible,
                storeDetail: selectedStoreData,
                onClose: closeDialog
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/store-locator/index.tsx



const StoreLocator = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(store_locator_context/* StoreLocatorProvider */.b, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StoreLocatorWrapper, {})
    });
};
/* harmony default export */ var store_locator = (StoreLocator);


/***/ }),

/***/ 73601:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"find-store_textFontWeight__f_nR0","findStoreWrapper":"find-store_findStoreWrapper__EfDRi","content":"find-store_content__C7EQb","title":"find-store_title__h1OvW","searchResultTipText":"find-store_searchResultTipText__Sf6MB","geolocationBtn":"find-store_geolocationBtn__DcyyA","text":"find-store_text__BjmWi","switchTab":"find-store_switchTab__S_SP7","tabHidden":"find-store_tabHidden__aavhm","stickySign":"find-store_stickySign__2pYTC","filter":"find-store_filter__XamcY","mapContainer":"find-store_mapContainer__588Ny","mapContainerPlaceholder":"find-store_mapContainerPlaceholder__8BEdu","button-hover":"find-store_button-hover__Q7WFH"};

/***/ }),

/***/ 45170:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"store-locator_textFontWeight__EJhDU","wrapper":"store-locator_wrapper__4IKKD","left":"store-locator_left__8rire","footer":"store-locator_footer__rK6kB","button-hover":"store-locator_button-hover__8bs7f"};

/***/ }),

/***/ 13393:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"store-locator-map_textFontWeight__69Ce3","wrapper":"store-locator-map_wrapper__SFOPO","storeLocatorMapBox":"store-locator-map_storeLocatorMapBox__Mq221","zoomBtn":"store-locator-map_zoomBtn__2ITCb","zoomBtnLine":"store-locator-map_zoomBtnLine__ZwJOC","btn":"store-locator-map_btn__NFKPt","zoomBtnItem":"store-locator-map_zoomBtnItem__dm0XW","plus":"store-locator-map_plus__B_k70","searchThisArea":"store-locator-map_searchThisArea__bhqtr","messageBox":"store-locator-map_messageBox__jmg_2","storeListItemMap":"store-locator-map_storeListItemMap__NQbao","storeListItem":"store-locator-map_storeListItem__yLxhX","override":"store-locator-map_override__zl6zA","button-hover":"store-locator-map_button-hover__nnxM4"};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [8259,2888,9774,179], function() { return __webpack_exec__(92991); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);