(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4600],{

/***/ 91879:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: function() { return /* binding */ CMS_LOOK_CONTENT_EVENT; }
/* harmony export */ });
const CMS_LOOK_CONTENT_EVENT = "cmsLookContent";


/***/ }),

/***/ 34600:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o: function() { return /* binding */ CMSComponent; }
});

// UNUSED EXPORTS: DynamicHeaderInlinePlaceHolder

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(11527);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(50959);
// EXTERNAL MODULE: ./components/cms/cms.module.scss
var cms_module = __webpack_require__(4511);
var cms_module_default = /*#__PURE__*/__webpack_require__.n(cms_module);
// EXTERNAL MODULE: ./packages/loading/index.tsx + 1 modules
var loading = __webpack_require__(59830);
// EXTERNAL MODULE: ./utils/constant.ts
var constant = __webpack_require__(64825);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+eagle_china-package-api@2.332.0/node_modules/@kering-technologies/eagle_china-package-api/dist/index.mjs
var dist = __webpack_require__(65943);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+eagle_china-package-web_cms@2.188.1_events@3.3.0_next@14.2.33_react-dom@18.2.0_react@18.2.0/node_modules/@kering-technologies/eagle_china-package-web_cms/dist/index.js
var eagle_china_package_web_cms_dist = __webpack_require__(78340);
// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-utils@1.16.0_events@3.3.0/node_modules/@kering-technologies/ec_china-package-utils/dist/index.esm.js
var index_esm = __webpack_require__(80811);
// EXTERNAL MODULE: ./node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__(84875);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/router.js
var next_router = __webpack_require__(69132);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/link.js
var next_link = __webpack_require__(60806);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/controls/button.tsx
var controls_button = __webpack_require__(78001);
;// CONCATENATED MODULE: ./hooks/use-memoized-fn.ts

function useMemoizedFn(fn) {
    const fnRef = (0,react.useRef)(fn);
    fnRef.current = (0,react.useMemo)(()=>fn, [
        fn
    ]);
    const memoizedFn = (0,react.useRef)();
    if (!memoizedFn.current) {
        memoizedFn.current = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return fnRef.current.apply(this, args);
        };
    }
    return memoizedFn.current;
}


// EXTERNAL MODULE: ./components/cms/cms-normalize-h2.module.scss
var cms_normalize_h2_module = __webpack_require__(5626);
var cms_normalize_h2_module_default = /*#__PURE__*/__webpack_require__.n(cms_normalize_h2_module);
;// CONCATENATED MODULE: ./components/cms/cms-normalize-h2.tsx




const NormalizeH2 = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { children, className, ...restProps } = props;
    const allProps = {
        ...restProps,
        className: classnames_default()(className, (cms_normalize_h2_module_default()).heading),
        ref
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
        ...allProps,
        children: children
    });
});
NormalizeH2.displayName = "NormalizeH2";


// EXTERNAL MODULE: ./contexts/newsletter.tsx + 2 modules
var newsletter = __webpack_require__(18493);
// EXTERNAL MODULE: ./components/cms/clickable-text.module.scss
var clickable_text_module = __webpack_require__(62529);
var clickable_text_module_default = /*#__PURE__*/__webpack_require__.n(clickable_text_module);
;// CONCATENATED MODULE: ./components/cms/clickable-text.tsx










const ClickableText = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { clickableConfig, as = "div", divClassName, spanClassName, h2ClassName, ctaClassName, style, openPanelDrawer, linkClassName, onClickLink, cursorDefault } = param;
    const clickBehavior = clickableConfig.clickBehavior;
    const specialClickBehavior = (0,eagle_china_package_web_cms_dist/* IsSpecialClickBehavior */.Rw)(clickBehavior);
    const LinkDisplay = {
        h2: "block",
        div: "block",
        span: "inline",
        cta: "inline-block"
    };
    const handleClick = useCMSOnClick({
        clickBehavior,
        openPanelDrawer
    });
    const handleLinkClick = (0,react.useCallback)((e)=>{
        handleClick(e);
        onClickLink === null || onClickLink === void 0 ? void 0 : onClickLink(clickableConfig.wording || "");
    }, [
        clickableConfig.wording,
        handleClick,
        onClickLink
    ]);
    const linkProps = {
        style: {
            display: LinkDisplay[as],
            ...style,
            ...(0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(clickableConfig.style)
        },
        target: clickBehavior.isNewWindow ? "_blank" : "_self",
        onClick: handleClick
    };
    const textProps = {
        dangerouslySetInnerHTML: {
            __html: clickableConfig.wording || ""
        }
    };
    const textOrBtn = as === "div" ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: divClassName,
        ...textProps,
        onClick: ()=>{
            onClickLink === null || onClickLink === void 0 ? void 0 : onClickLink(clickableConfig.wording || "");
        }
    }) : as === "span" ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: spanClassName,
        ...textProps,
        onClick: ()=>{
            onClickLink === null || onClickLink === void 0 ? void 0 : onClickLink(clickableConfig.wording || "");
        }
    }) : as === "h2" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalizeH2, {
        className: h2ClassName,
        ...textProps,
        onClick: ()=>{
            onClickLink === null || onClickLink === void 0 ? void 0 : onClickLink(clickableConfig.wording || "");
        }
    }) : as === "cta" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(controls_button/* CMSButton */.D, {
        style: {
            ...style,
            ...(0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(clickableConfig.style)
        },
        className: ctaClassName,
        target: clickBehavior.isNewWindow ? "_blank" : "_self",
        onClick: handleLinkClick,
        text: clickableConfig.wording
    }) : null;
    const isLegacyBehavior = as === "cta";
    if (!clickableConfig.wording) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
        ...isLegacyBehavior ? null : linkProps,
        href: clickBehavior.url,
        passHref: isLegacyBehavior && !specialClickBehavior,
        legacyBehavior: isLegacyBehavior,
        ref: ref,
        className: classnames_default()(linkClassName, cursorDefault ? (clickable_text_module_default()).cursorDefault : ""),
        children: textOrBtn
    });
});
ClickableText.displayName = "ClickableText";
const useCMSOnClick = (param)=>{
    let { clickBehavior, openPanelDrawer } = param;
    const isSpecial = (0,eagle_china_package_web_cms_dist/* IsSpecialClickBehavior */.Rw)(clickBehavior);
    const isDisabled = (0,eagle_china_package_web_cms_dist/* checkDisabled */.R9)(clickBehavior);
    const { setIsNewsletterVisible, setSubscriptionLocation } = (0,newsletter/* useNewsletter */.u)();
    const createOnClick = (clickBehavior, isDisabled, isSpecial)=>(e)=>{
            if (isDisabled || isSpecial) {
                e.preventDefault();
                if (isSpecial) {
                    switch(clickBehavior.type){
                        case "openPanelDrawer":
                            openPanelDrawer === null || openPanelDrawer === void 0 ? void 0 : openPanelDrawer();
                            return;
                        case eagle_china_package_web_cms_dist/* EventType */.tw.newsletter:
                            setSubscriptionLocation("subscription from a block");
                            setIsNewsletterVisible(true);
                            break;
                        default:
                            throw new Error("need to resolve special event: " + clickBehavior.type);
                    }
                }
            }
        };
    return useMemoizedFn(createOnClick(clickBehavior, isDisabled, isSpecial));
};

// EXTERNAL MODULE: ./components/cms/cms-cta.module.scss
var cms_cta_module = __webpack_require__(23337);
var cms_cta_module_default = /*#__PURE__*/__webpack_require__.n(cms_cta_module);
;// CONCATENATED MODULE: ./adapters/use-cms-home-cta-click.ts


const useHomepageCTAOnClick = (componentIndex)=>{
    const { onEvent } = (0,eagle_china_package_web_cms_dist/* useCMSConfig */.E0)();
    const homepageCTAOnClick = (0,react.useCallback)(function(text) {
        let trackSwiperIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1, innerIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -1;
        if (!text) return;
        onEvent(eagle_china_package_web_cms_dist/* EventType */.tw.homepageCTAOnClick, {
            text: "".concat(text || "").concat(trackSwiperIndex > -1 ? "_".concat(trackSwiperIndex + 1) : "").concat(innerIndex > -1 ? "_".concat(innerIndex + 1) : ""),
            index: componentIndex || 0
        });
    }, [
        onEvent,
        componentIndex
    ]);
    return {
        homepageCTAOnClick
    };
};

;// CONCATENATED MODULE: ./components/cms/cms-cta.tsx







const CTA = (props)=>{
    const { config, componentID, paddingMargin } = props;
    const { onEvent } = (0,eagle_china_package_web_cms_dist/* useCMSConfig */.E0)();
    const { homepageCTAOnClick } = useHomepageCTAOnClick(props.componentIndex);
    const clickLink = (0,react.useCallback)(()=>{
        onEvent(eagle_china_package_web_cms_dist/* EventType */.tw.ctaClick, {
            component: config,
            text: config.wording,
            index: props.componentIndex || 0
        });
        homepageCTAOnClick(config.wording || "");
    }, [
        config,
        homepageCTAOnClick,
        onEvent,
        props.componentIndex
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        id: componentID,
        style: {
            textAlign: config.alignment,
            ...paddingMargin
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableText, {
            clickableConfig: {
                clickBehavior: config.clickBehavior,
                style: config.wordingStyle,
                wording: config.wording
            },
            as: "cta",
            ctaClassName: classnames_default()({
                [(cms_cta_module_default()).yslLink]: config.style === "yslLink",
                [(cms_cta_module_default()).yslPrimary]: config.style === "yslPrimary",
                [(cms_cta_module_default()).unClickable]: config.clickBehavior.type === "unClickable",
                [(cms_cta_module_default()).isCursor]: config.clickBehavior.type !== "unClickable"
            }),
            onClickLink: clickLink
        })
    });
};
const CmsCTA = (0,eagle_china_package_web_cms_dist/* dynamicHeaderHOC */.WP)(CTA);


// EXTERNAL MODULE: ./hooks/use-breakpoints.ts
var use_breakpoints = __webpack_require__(21525);
// EXTERNAL MODULE: ./store/features/customized-header.ts
var customized_header = __webpack_require__(32084);
// EXTERNAL MODULE: ./store/hooks.ts
var hooks = __webpack_require__(88945);
// EXTERNAL MODULE: ./contexts/module-height.tsx
var module_height = __webpack_require__(80388);
// EXTERNAL MODULE: ./components/cms/cms-editable-content/editable-in-full-screen.module.scss
var editable_in_full_screen_module = __webpack_require__(29128);
var editable_in_full_screen_module_default = /*#__PURE__*/__webpack_require__.n(editable_in_full_screen_module);
// EXTERNAL MODULE: ./node_modules/.pnpm/swiper@8.4.7/node_modules/swiper/react/swiper-react.js + 15 modules
var swiper_react = __webpack_require__(59164);
// EXTERNAL MODULE: ./node_modules/.pnpm/swiper@8.4.7/node_modules/swiper/swiper.esm.js + 94 modules
var swiper_esm = __webpack_require__(27915);
// EXTERNAL MODULE: ./components/basic-image.tsx
var basic_image = __webpack_require__(81892);
;// CONCATENATED MODULE: ./components/cms/cms-video.type.ts
const defaultVideoData = {
    width: "fullWidth",
    widthCustomized: "",
    videoName: "video",
    heightCustomized: "",
    alignment: "left",
    headerChanging: false,
    headerChangingOffset: 0,
    videoCover: "",
    title: {},
    cta1: {},
    cta2: {},
    ctasDisplay: "sideBySide",
    ctaSpace: "",
    customizedControlBar: null,
    sourceType: "",
    muted: true
};
const paddingItem = {
    paddingTop: "0px",
    paddingRight: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px"
};
const paddingData = {
    large: paddingItem,
    desktop: paddingItem,
    tablet: paddingItem,
    mobile: paddingItem
};
const marginItem = {
    marginTop: "0px",
    marginRight: "0px",
    marginBottom: "0px",
    marginLeft: "0px"
};
const marginData = {
    large: marginItem,
    desktop: marginItem,
    tablet: marginItem,
    mobile: marginItem
};

// EXTERNAL MODULE: ./components/cms/cms-video.module.scss
var cms_video_module = __webpack_require__(60064);
var cms_video_module_default = /*#__PURE__*/__webpack_require__.n(cms_video_module);
;// CONCATENATED MODULE: ./assets/svg/video-play.svg
var _rect, _rect2, _rect3;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var SvgVideoPlay = function SvgVideoPlay(_ref, ref) {
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
  }, title) : null, _rect || (_rect = /*#__PURE__*/react.createElement("rect", {
    opacity: 0.2,
    width: 24,
    height: 24,
    rx: 12,
    fill: "black"
  })), _rect2 || (_rect2 = /*#__PURE__*/react.createElement("rect", {
    x: 8,
    y: 8,
    width: 3,
    height: 8,
    fill: "white"
  })), _rect3 || (_rect3 = /*#__PURE__*/react.createElement("rect", {
    x: 13,
    y: 8,
    width: 3,
    height: 8,
    fill: "white"
  })));
};
var ForwardRef = /*#__PURE__*/(0,react.forwardRef)(SvgVideoPlay);
/* harmony default export */ var video_play = (ForwardRef);
;// CONCATENATED MODULE: ./assets/svg/video-pause.svg
var video_pause_rect, _path;
var video_pause_excluded = ["title", "titleId"];
function video_pause_extends() { video_pause_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return video_pause_extends.apply(this, arguments); }
function video_pause_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = video_pause_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function video_pause_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var SvgVideoPause = function SvgVideoPause(_ref, ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = video_pause_objectWithoutProperties(_ref, video_pause_excluded);
  return /*#__PURE__*/react.createElement("svg", video_pause_extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, video_pause_rect || (video_pause_rect = /*#__PURE__*/react.createElement("rect", {
    opacity: 0.2,
    width: 24,
    height: 24,
    rx: 12,
    fill: "black"
  })), _path || (_path = /*#__PURE__*/react.createElement("path", {
    d: "M18 12L9 17V7L18 12Z",
    fill: "white"
  })));
};
var video_pause_ForwardRef = /*#__PURE__*/(0,react.forwardRef)(SvgVideoPause);
/* harmony default export */ var video_pause = (video_pause_ForwardRef);
// EXTERNAL MODULE: ./components/client-only.tsx
var client_only = __webpack_require__(80887);
// EXTERNAL MODULE: ./adapters/gtm-adapter.tsx + 4 modules
var gtm_adapter = __webpack_require__(3054);
// EXTERNAL MODULE: ./adapters/sensors/services/index.ts + 2 modules
var services = __webpack_require__(67893);
;// CONCATENATED MODULE: ./components/cms/cms-video.tsx











const CmsVideo = (param)=>{
    let { config, videoFullDomHeight = false, videoHeight, isClickable = false, setTitleVisible, brandControlBar, isFullScreen, activity = undefined, playIconRightPosition = 12, playIconBottomPosition = 12, isVideoDisabled = false, isEditableContent = false, videoCLick, isGridFullDom = false, videoDomClick, wrapperClassName } = param;
    var _config_video, _config_video1, _config_video2, _config_video3, _config_video4, _config_video5, _config_video6;
    const playerRef = (0,react.useRef)(null);
    const [isPlaying, setIsPlaying] = (0,react.useState)(false);
    const { videoEvent } = (0,gtm_adapter/* useGtm */.u)();
    /** 自动播放的话 = 播到100%后就不再传  用户手动点击播放重新开始埋点 */ const autoPlayReplay = (0,react.useRef)(false);
    const isBrandControlBar = ((_config_video = config.video) === null || _config_video === void 0 ? void 0 : _config_video.controlBar) === "brandControlBar";
    const brandNativeControlBar = ((_config_video1 = config.video) === null || _config_video1 === void 0 ? void 0 : _config_video1.controlBar) === "brandNativeControlBar";
    const brandNativeControlBarOrNativeControlBar = brandNativeControlBar || ((_config_video2 = config.video) === null || _config_video2 === void 0 ? void 0 : _config_video2.controlBar) === "nativeControlBar";
    const setAutoPlayReplay = ()=>{
        autoPlayReplay.current = true;
    };
    const videoData = (0,react.useMemo)(()=>{
        var _config_video, _config_video1, _config_video2, _config_video3, _config_video4;
        const videoData = {
            controlBar: brandNativeControlBarOrNativeControlBar ? "native" : "",
            controlBarBrandTemplate: "",
            clickBehavior: {},
            isLoop: true,
            /**
       * 根据活动状态设置视频播放模式。
       * 如果活动状态为 true，则设置播放模式为 "autoPlay"；
       * 如果活动状态为 false，则设置播放模式为 "manuallyPlay"；
       * 否则，将播放模式设置为 config.video?.playMode
       */ playMode: activity === true ? "autoPlay" : activity === false ? "manuallyPlay" : (_config_video = config.video) === null || _config_video === void 0 ? void 0 : _config_video.playMode,
            videoSrc: (_config_video1 = config.video) === null || _config_video1 === void 0 ? void 0 : _config_video1.videoSrc,
            videoCover: (_config_video2 = config.video) === null || _config_video2 === void 0 ? void 0 : _config_video2.videoCover,
            videoName: ((_config_video3 = config.video) === null || _config_video3 === void 0 ? void 0 : _config_video3.videoName) || ((_config_video4 = config.video) === null || _config_video4 === void 0 ? void 0 : _config_video4.name) || "video",
            height: videoHeight || "fullHeight"
        };
        const data = {
            ...defaultVideoData,
            ...videoData
        };
        return {
            identifier: "video",
            type: "video",
            large: data,
            desktop: data,
            tablet: data,
            mobile: data,
            margin: marginData,
            padding: paddingData,
            blockId: "",
            ...videoData
        };
    }, [
        activity,
        config,
        videoHeight
    ]);
    const handleOnPlay = ()=>{
        try {
            videoEvent({
                videoLabel: (videoData === null || videoData === void 0 ? void 0 : videoData.videoName) || "",
                videoAction: "plays",
                videoValue: ""
            });
        } catch (e) {
            console.error("[GTM][videoEvent]", e);
        }
        setIsPlaying(true);
    };
    const handleOnPause = ()=>{
        try {
            videoEvent({
                videoLabel: (videoData === null || videoData === void 0 ? void 0 : videoData.videoName) || "",
                videoAction: "pause",
                videoValue: ""
            });
        } catch (e) {
            console.error("[GTM][videoEvent]", e);
        }
        setIsPlaying(false);
    };
    (0,react.useEffect)(()=>{
        var _playerRef_current;
        /**
     * 如果活动状态为 true 并且播放器引用存在且未暂停，则根据配置的视频播放模式进行播放；
     * 否则，暂停播放器。
     */ if (!playerRef.current || activity === undefined) return;
        if (activity && ((_playerRef_current = playerRef.current) === null || _playerRef_current === void 0 ? void 0 : _playerRef_current.paused())) {
            var _config_video, _playerRef_current1;
            if (((_config_video = config.video) === null || _config_video === void 0 ? void 0 : _config_video.playMode) === "autoPlay") (_playerRef_current1 = playerRef.current) === null || _playerRef_current1 === void 0 ? void 0 : _playerRef_current1.play();
        } else {
            var _playerRef_current2;
            (_playerRef_current2 = playerRef.current) === null || _playerRef_current2 === void 0 ? void 0 : _playerRef_current2.pause();
        }
    }, [
        activity,
        (_config_video3 = config.video) === null || _config_video3 === void 0 ? void 0 : _config_video3.playMode,
        playerRef
    ]);
    const togglePlay = (e)=>{
        var _playerRef_current, _playerRef_current1, _playerRef_current2, _config_video;
        ((_playerRef_current = playerRef.current) === null || _playerRef_current === void 0 ? void 0 : _playerRef_current.paused()) ? (_playerRef_current1 = playerRef.current) === null || _playerRef_current1 === void 0 ? void 0 : _playerRef_current1.play() : (_playerRef_current2 = playerRef.current) === null || _playerRef_current2 === void 0 ? void 0 : _playerRef_current2.pause();
        const behavior = (_config_video = config.video) === null || _config_video === void 0 ? void 0 : _config_video.clickBehavior;
        if (isVideoDisabled || !!(behavior === null || behavior === void 0 ? void 0 : behavior.url)) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    const handleOnReady = (player)=>{
        var _config_video;
        playerRef.current = player;
        /**
     * for the native control bar would have sound with mute/unmute
     * if it is in manual mode, click the cover could play it in unmute mode
     */ playerRef.current.muted(!(brandNativeControlBarOrNativeControlBar && ((_config_video = config.video) === null || _config_video === void 0 ? void 0 : _config_video.playMode) === "manuallyPlay"));
        playerRef.current.on("play", ()=>{
            autoPlayReplay.current = false;
        });
        /** 神策 */ services/* videoProgress */.cj({
            videoData,
            player: playerRef.current,
            isAutoPlay: true,
            autoPlayReplay: autoPlayReplay.current,
            setAutoPlayReplay
        });
    };
    const handleVideoClick = (0,react.useCallback)(()=>{
        videoCLick === null || videoCLick === void 0 ? void 0 : videoCLick(videoData.videoName || "");
    }, [
        videoCLick,
        videoData.videoName
    ]);
    const handleVideoDomClick = (0,react.useCallback)((e)=>{
        var _config_video;
        if (!((_config_video = config.video) === null || _config_video === void 0 ? void 0 : _config_video.controlBar) || isBrandControlBar) {
            var _e_target_tagName, _e_target;
            if ((e === null || e === void 0 ? void 0 : (_e_target = e.target) === null || _e_target === void 0 ? void 0 : (_e_target_tagName = _e_target.tagName) === null || _e_target_tagName === void 0 ? void 0 : _e_target_tagName.toUpperCase()) === "VIDEO" || e === "VIDEO") {
                videoDomClick === null || videoDomClick === void 0 ? void 0 : videoDomClick();
            }
        }
    }, [
        config,
        isBrandControlBar,
        videoDomClick
    ]);
    (0,react.useEffect)(()=>{
        var _config_video, _config_video1;
        // cms-horizontal-single 组件 视频手动播放且有封面时，视频播放时，视频上方的标题消失
        if (isPlaying && ((_config_video = config.video) === null || _config_video === void 0 ? void 0 : _config_video.playMode) !== "autoPlay" && ((_config_video1 = config.video) === null || _config_video1 === void 0 ? void 0 : _config_video1.videoCover) && setTitleVisible) {
            setTitleVisible(false);
        }
    }, [
        (_config_video4 = config.video) === null || _config_video4 === void 0 ? void 0 : _config_video4.playMode,
        (_config_video5 = config.video) === null || _config_video5 === void 0 ? void 0 : _config_video5.videoCover,
        isPlaying,
        setTitleVisible
    ]);
    const videoConfig = brandNativeControlBar ? {
        controlBar: {
            fullscreenToggle: true,
            pictureInPictureToggle: false,
            volumePanel: {
                inline: true
            },
            currentTimeDisplay: true,
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            children: [
                "playToggle",
                "progressControl",
                "currentTimeDisplay",
                "timeDivider",
                "durationDisplay",
                "volumePanel",
                "fullscreenToggle"
            ]
        }
    } : {};
    if (!((_config_video6 = config.video) === null || _config_video6 === void 0 ? void 0 : _config_video6.videoSrc)) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(client_only/* ClientOnly */.q, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classnames_default()((cms_video_module_default()).cmsVideoWrapper, wrapperClassName),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()((cms_video_module_default()).videoContainer, {
                    [(cms_video_module_default()).isFullScreen]: isFullScreen,
                    [(cms_video_module_default()).clickable]: isClickable,
                    [(cms_video_module_default()).isEditableContent]: // 使用原生 nativeControlBar 时，不使用pointer-events: none; 因为原生controlBar会消失，导致点击无法重新唤起，而品牌的controlBar不会消失
                    brandNativeControlBarOrNativeControlBar ? false : isEditableContent,
                    [(cms_video_module_default()).isGridFullDom]: isGridFullDom
                }),
                onClick: handleVideoClick,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* Video */.nk, {
                        config: videoData,
                        className: classnames_default()((cms_video_module_default()).cmsVideo, {
                            [(cms_video_module_default()).brandNativeControlBar]: brandNativeControlBar,
                            [(cms_video_module_default()).isFullScreen]: isFullScreen,
                            [(cms_video_module_default()).isEditableContent]: // 使用原生 nativeControlBar 时，不使用pointer-events: none; 因为原生controlBar会消失，导致点击无法重新唤起，而品牌的controlBar不会消失
                            brandNativeControlBarOrNativeControlBar ? false : isEditableContent,
                            [(cms_video_module_default()).isGridFullDom]: isGridFullDom
                        }),
                        onPlay: handleOnPlay,
                        onPause: handleOnPause,
                        onReady: handleOnReady,
                        showBvPlayIcon: false,
                        noHeader: true,
                        videoFullDomHeight: videoFullDomHeight,
                        // 使用原生 nativeControlBar 并且是全屏翻页 并且是EditableContent组件 时，在移动端和ipad端的touchend事件中，不使用点击暂停与播放的功能，只有点击controlBar的时候生效，其他的品牌只有点击播放暂停按钮生效
                        mobileAndTabletDisabledVideoClickPlayOrPause: isEditableContent && isFullScreen && brandNativeControlBarOrNativeControlBar ? true : false,
                        ...videoConfig
                    }),
                    isVideoDisabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            width: "100%",
                            height: "100%",
                            opacity: 0,
                            position: "absolute",
                            inset: 0,
                            zIndex: 1
                        }
                    }) : null,
                    videoDomClick && !isEditableContent && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (cms_video_module_default()).videoCover,
                        onClick: ()=>{
                            handleVideoDomClick("VIDEO");
                        }
                    }),
                    brandControlBar || isBrandControlBar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(VideoControlBtn, {
                        isPlaying: isPlaying,
                        onTogglePlay: togglePlay,
                        playIconRightPosition: playIconRightPosition,
                        playIconBottomPosition: playIconBottomPosition,
                        isEditableContent: isEditableContent
                    }) : null
                ]
            })
        })
    });
};
const SvgPic = (param)=>{
    let { SvgPath, onTogglePlay, playIconRightPosition, playIconBottomPosition, isFullScreen, isEditableContent } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SvgPath, {
        className: classnames_default()((cms_video_module_default()).videoControlIcon, {
            [(cms_video_module_default()).isFullScreen]: isFullScreen,
            [(cms_video_module_default()).isEditableContent]: isEditableContent
        }),
        onClick: onTogglePlay,
        width: "24",
        height: "24",
        style: {
            right: "".concat(playIconRightPosition, "px"),
            bottom: "".concat(playIconBottomPosition, "px")
        }
    });
};
const VideoControlBtn = (param)=>{
    let { isPlaying, onTogglePlay, playIconRightPosition, playIconBottomPosition, isFullScreen, isEditableContent } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SvgPic, {
        SvgPath: isPlaying ? video_play : video_pause,
        onTogglePlay: onTogglePlay,
        playIconRightPosition: playIconRightPosition,
        playIconBottomPosition: playIconBottomPosition,
        isFullScreen: isFullScreen,
        isEditableContent: isEditableContent
    });
};

// EXTERNAL MODULE: ./components/cms/cms-editable-content/full-width.module.scss
var full_width_module = __webpack_require__(36279);
var full_width_module_default = /*#__PURE__*/__webpack_require__.n(full_width_module);
// EXTERNAL MODULE: ./assets/svg/logo.svg
var logo = __webpack_require__(32238);
// EXTERNAL MODULE: ./hooks/use-get-device-type.ts
var use_get_device_type = __webpack_require__(89834);
// EXTERNAL MODULE: ./components/aspect-ratio-box.tsx
var aspect_ratio_box = __webpack_require__(54279);
;// CONCATENATED MODULE: ./components/cms/cms-iframe.tsx


const CmsIframe = (param)=>{
    let { iframeSrc, ratio = "", style, className, isNeedRatio = true } = param;
    return iframeSrc ? isNeedRatio ? /*#__PURE__*/ (0,jsx_runtime.jsx)(aspect_ratio_box/* AspectRatioBox */.U, {
        ratio: ratio,
        style: style,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
            allowFullScreen: true,
            "allow-full-screen": "true",
            "moz-allow-full-screen": "true",
            "webkit-allow-full-screen": "true",
            src: iframeSrc,
            className: className
        })
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
        allowFullScreen: true,
        "allow-full-screen": "true",
        "moz-allow-full-screen": "true",
        "webkit-allow-full-screen": "true",
        src: iframeSrc,
        className: className,
        style: style
    }) : null;
};


;// CONCATENATED MODULE: ./components/cms/cms-editable-content/constant.ts
/**
 * 平板中显示一行
 */ const TABLET_ONE_IN_LINE = "1";
var SlideVisibleType;
(function(SlideVisibleType) {
    /** 可见 */ SlideVisibleType["VISIBLE"] = "visible";
    /** 隐藏 */ SlideVisibleType["HIDDEN"] = "hidden";
})(SlideVisibleType || (SlideVisibleType = {}));
var LogoDisplayEnum;
(function(LogoDisplayEnum) {
    /** 可见 */ LogoDisplayEnum["BLOCK"] = "block";
    /** 隐藏 */ LogoDisplayEnum["NONE"] = "none";
})(LogoDisplayEnum || (LogoDisplayEnum = {}));
/** 默认比例 */ const DEFAULT_RATIO = "2/3";

;// CONCATENATED MODULE: ./utils/convert-ratio.ts

function convertRatio(value) {
    if (!value) return "";
    return value.includes(":") ? value.replace(/:/g, "/") : DEFAULT_RATIO;
}

;// CONCATENATED MODULE: ./components/cms/cms-editable-content/full-width.tsx
















const EditableContentItem = (param)=>{
    let { item, displayMode, ratioOfImage, isFullScreen = false, setCenteredTitleVisible, componentIndex, currentSlideIndex } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    const { video, image } = item;
    const handlerClickBehavior = (0,react.useCallback)((clickBehavior)=>{
        if (clickBehavior === null || clickBehavior === void 0 ? void 0 : clickBehavior.url) {
            if (clickBehavior.isNewWindow) {
                window.open(clickBehavior.url, "_blank");
            } else {
                window.location.href = clickBehavior.url;
            }
        }
    }, []);
    const handleCmsLinkClick = (0,react.useCallback)(()=>{
        homepageCTAOnClick((image === null || image === void 0 ? void 0 : image.name) || "", currentSlideIndex);
    }, [
        homepageCTAOnClick,
        image === null || image === void 0 ? void 0 : image.name,
        currentSlideIndex
    ]);
    const isMobile = currentDevice === use_get_device_type/* DeviceType */.Y.MOBILE;
    if ((video === null || video === void 0 ? void 0 : video.sourceType) === eagle_china_package_web_cms_dist/* IEditableContent */.xb.SourceType.Iframe) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsIframe, {
            iframeSrc: video.videoSrc,
            ratio: displayMode === eagle_china_package_web_cms_dist/* IEditableContent */.xb.DisplayMode.FullWidthHeightAuto ? convertRatio(ratioOfImage) || DEFAULT_RATIO : "",
            isNeedRatio: displayMode === eagle_china_package_web_cms_dist/* IEditableContent */.xb.DisplayMode.FullWidthHeightAuto,
            className: classnames_default()((full_width_module_default()).cmsIframe, {
                [(full_width_module_default()).isFullScreen]: isFullScreen
            }, {
                [(full_width_module_default()).fullWidthFullHeight]: isFullScreen || displayMode === eagle_china_package_web_cms_dist/* IEditableContent */.xb.DisplayMode.FullWidthFullHeight
            })
        });
    } else if (video) {
        var _item_video, _item_video1, _item_video_clickBehavior, _item_video2;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsVideo, {
            isEditableContent: !((!((_item_video = item.video) === null || _item_video === void 0 ? void 0 : _item_video.controlBar) || ((_item_video1 = item.video) === null || _item_video1 === void 0 ? void 0 : _item_video1.controlBar) === "brandControlBar") && ((_item_video2 = item.video) === null || _item_video2 === void 0 ? void 0 : (_item_video_clickBehavior = _item_video2.clickBehavior) === null || _item_video_clickBehavior === void 0 ? void 0 : _item_video_clickBehavior.url)),
            config: item,
            playIconRightPosition: isMobile ? 20 : 32,
            playIconBottomPosition: isMobile ? 20 : 32,
            videoHeight: isFullScreen || displayMode === eagle_china_package_web_cms_dist/* IEditableContent */.xb.DisplayMode.FullWidthFullHeight ? "fullHeight" : convertRatio(ratioOfImage) || DEFAULT_RATIO,
            setTitleVisible: setCenteredTitleVisible,
            isFullScreen: isFullScreen,
            videoCLick: (text)=>{
                homepageCTAOnClick(text, currentSlideIndex);
            },
            videoDomClick: ()=>{
                var _item_video;
                const behavior = (_item_video = item.video) === null || _item_video === void 0 ? void 0 : _item_video.clickBehavior;
                (behavior === null || behavior === void 0 ? void 0 : behavior.url) && handlerClickBehavior(behavior);
            }
        });
    } else if (image) {
        const { imageUrl, clickBehavior, name } = image;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* Link */.rU, {
            clickBehavior: clickBehavior,
            onClickLink: handleCmsLinkClick,
            children: isFullScreen || displayMode === eagle_china_package_web_cms_dist/* IEditableContent */.xb.DisplayMode.FullWidthFullHeight ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (full_width_module_default()).imgCon,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                    alt: name,
                    src: imageUrl || "",
                    style: {
                        objectFit: "cover"
                    }
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(aspect_ratio_box/* AspectRatioBox */.U, {
                ratio: convertRatio(ratioOfImage) || DEFAULT_RATIO,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                    alt: name,
                    src: imageUrl || "",
                    style: {
                        objectFit: "cover"
                    }
                })
            })
        });
    } else {
        return null;
    }
};
/**
 * full width 使用fullWidthFullHeight/fullWidthHeightAuto
 * fullWidthFullHeight 全宽全高
 * fullWidthHeightAuto 全宽高用比例（比例必填）
 */ const FullWidth = (param)=>{
    let { list, isFullScreen = false, componentIndex, itemIndex, displayMode, ratioOfImage, currentSlideIndex } = param;
    // title是否显示 (视频手动播放且有封面时，视频播放时，视频上方的标题消失)
    const [centeredTitleVisible, setCenteredTitleVisible] = (0,react.useState)(true);
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    const [isHovered, setIsHovered] = (0,react.useState)(false);
    const handleMouse = (0,react.useCallback)((value)=>{
        setIsHovered(value);
    }, []);
    if (!(0,index_esm/* arrayOrEmpty */.sq)(list).length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: list.map((item, index)=>{
            var _item_title_clickBehavior, _item_title, _item_title_clickBehavior1, _item_title1, _item_title2, _item_title3, _item_cta_clickBehavior, _item_cta, _item_cta_clickBehavior1, _item_cta1;
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (full_width_module_default()).item,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(EditableContentItem, {
                        item: item,
                        displayMode: displayMode,
                        ratioOfImage: ratioOfImage,
                        isFullScreen: isFullScreen,
                        componentIndex: componentIndex,
                        currentSlideIndex: currentSlideIndex,
                        setCenteredTitleVisible: setCenteredTitleVisible
                    }),
                    !!item.brandLogo && item.brandLogo !== "hideHeaderLogo" && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (full_width_module_default()).logoContent,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(logo/* default */.Z, {
                            className: classnames_default()((full_width_module_default()).logo, componentIndex === 0 && itemIndex === 0 ? (full_width_module_default()).isAnimation : ""),
                            style: {
                                color: item.brandLogo === "black" ? "#000" : "#FFF"
                            }
                        })
                    }),
                    item.centeredTitle.wording && centeredTitleVisible ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (full_width_module_default()).centeredTitle,
                        style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(item.centeredTitle.style),
                        dangerouslySetInnerHTML: {
                            __html: item.centeredTitle.wording
                        }
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (full_width_module_default()).wordContent,
                        style: {
                            bottom: item.space
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                style: {
                                    textAlign: item.title.alignment
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    onMouseEnter: ()=>{
                                        handleMouse(true);
                                    },
                                    onMouseLeave: ()=>{
                                        handleMouse(false);
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableText, {
                                        as: "span",
                                        cursorDefault: (item === null || item === void 0 ? void 0 : (_item_title = item.title) === null || _item_title === void 0 ? void 0 : (_item_title_clickBehavior = _item_title.clickBehavior) === null || _item_title_clickBehavior === void 0 ? void 0 : _item_title_clickBehavior.type) === "unClickable" || !(item === null || item === void 0 ? void 0 : (_item_title1 = item.title) === null || _item_title1 === void 0 ? void 0 : (_item_title_clickBehavior1 = _item_title1.clickBehavior) === null || _item_title_clickBehavior1 === void 0 ? void 0 : _item_title_clickBehavior1.url),
                                        clickableConfig: {
                                            clickBehavior: item.title.clickBehavior,
                                            style: isHovered && (item === null || item === void 0 ? void 0 : (_item_title2 = item.title) === null || _item_title2 === void 0 ? void 0 : _item_title2.hoverStyle) ? (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(item.title.hoverStyle) : (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(item.title.style),
                                            wording: item === null || item === void 0 ? void 0 : (_item_title3 = item.title) === null || _item_title3 === void 0 ? void 0 : _item_title3.wording
                                        },
                                        onClickLink: (text)=>{
                                            homepageCTAOnClick(text, currentSlideIndex);
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                style: {
                                    textAlign: item.cta.alignment
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableText, {
                                    as: "span",
                                    cursorDefault: (item === null || item === void 0 ? void 0 : (_item_cta = item.cta) === null || _item_cta === void 0 ? void 0 : (_item_cta_clickBehavior = _item_cta.clickBehavior) === null || _item_cta_clickBehavior === void 0 ? void 0 : _item_cta_clickBehavior.type) === "unClickable" || !(item === null || item === void 0 ? void 0 : (_item_cta1 = item.cta) === null || _item_cta1 === void 0 ? void 0 : (_item_cta_clickBehavior1 = _item_cta1.clickBehavior) === null || _item_cta_clickBehavior1 === void 0 ? void 0 : _item_cta_clickBehavior1.url),
                                    clickableConfig: {
                                        clickBehavior: item.cta.clickBehavior,
                                        style: item.cta.style,
                                        wording: item.cta.wording
                                    },
                                    spanClassName: classnames_default()((full_width_module_default()).linkCta, {
                                        [(full_width_module_default()).yslPrimary]: item.cta.template === eagle_china_package_web_cms_dist/* IEditableContent */.xb.Template.YslPrimary,
                                        [(full_width_module_default()).yslLink]: item.cta.template === eagle_china_package_web_cms_dist/* IEditableContent */.xb.Template.YslLink
                                    }),
                                    onClickLink: (text)=>{
                                        homepageCTAOnClick(text, currentSlideIndex);
                                    }
                                })
                            })
                        ]
                    })
                ]
            }, "".concat(item.sliderType, "-").concat(itemIndex, "-").concat(index, "-"));
        })
    });
};

// EXTERNAL MODULE: ./components/cms/cms-editable-content/single-content.module.scss
var single_content_module = __webpack_require__(60149);
var single_content_module_default = /*#__PURE__*/__webpack_require__.n(single_content_module);
// EXTERNAL MODULE: ./components/cms/cms-editable-content/editable-content-item.module.scss
var editable_content_item_module = __webpack_require__(30662);
var editable_content_item_module_default = /*#__PURE__*/__webpack_require__.n(editable_content_item_module);
;// CONCATENATED MODULE: ./components/cms/cms-editable-content/editable-content-item.tsx















const Item = (param)=>{
    let { item, isFullScreen, ratioOfImage, setCenteredTitleVisible, componentIndex, currentSlideIndex, currentListSlideIndex } = param;
    const { video, image, product } = item;
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    const handleCmsLinkClick = (0,react.useCallback)(()=>{
        homepageCTAOnClick((image === null || image === void 0 ? void 0 : image.name) || "", currentSlideIndex, currentListSlideIndex);
    }, [
        currentListSlideIndex,
        currentSlideIndex,
        homepageCTAOnClick,
        image === null || image === void 0 ? void 0 : image.name
    ]);
    const handlerClickBehavior = (0,react.useCallback)((clickBehavior)=>{
        if (clickBehavior === null || clickBehavior === void 0 ? void 0 : clickBehavior.url) {
            if (clickBehavior.isNewWindow) {
                window.open(clickBehavior.url, "_blank");
            } else {
                window.location.href = clickBehavior.url;
            }
        }
    }, []);
    const handleProductLinkClick = (0,react.useCallback)(()=>{
        var _product_0;
        product && homepageCTAOnClick((_product_0 = product["0"]) === null || _product_0 === void 0 ? void 0 : _product_0.name, currentSlideIndex, currentListSlideIndex);
    }, [
        currentListSlideIndex,
        currentSlideIndex,
        homepageCTAOnClick,
        product
    ]);
    const newStyle = {
        aspectRatio: "".concat(convertRatio(ratioOfImage))
    };
    if ((video === null || video === void 0 ? void 0 : video.sourceType) === eagle_china_package_web_cms_dist/* IEditableContent */.xb.SourceType.Iframe) {
        if (isFullScreen) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()((editable_content_item_module_default()).isFullScreenEle, {
                    [(editable_content_item_module_default()).ratio4x5]: (ratioOfImage === null || ratioOfImage === void 0 ? void 0 : ratioOfImage.trim()) === "4:5"
                }),
                style: newStyle,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("iframe", {
                    allowFullScreen: true,
                    "allow-full-screen": "true",
                    "moz-allow-full-screen": "true",
                    "webkit-allow-full-screen": "true",
                    src: video.videoSrc,
                    style: {
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none"
                    }
                })
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsIframe, {
            iframeSrc: video.videoSrc,
            ratio: convertRatio(ratioOfImage) || DEFAULT_RATIO
        });
    } else if (video) {
        var _item_video, _item_video1, _item_video_clickBehavior, _item_video2;
        if (isFullScreen) {
            var _item_video3, _item_video4, _item_video_clickBehavior1, _item_video5;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()((editable_content_item_module_default()).isFullScreenEle, {
                    [(editable_content_item_module_default()).ratio4x5]: (ratioOfImage === null || ratioOfImage === void 0 ? void 0 : ratioOfImage.trim()) === "4:5"
                }),
                style: newStyle,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsVideo, {
                    wrapperClassName: (editable_content_item_module_default()).videoWrapper,
                    isEditableContent: !((!((_item_video3 = item.video) === null || _item_video3 === void 0 ? void 0 : _item_video3.controlBar) || ((_item_video4 = item.video) === null || _item_video4 === void 0 ? void 0 : _item_video4.controlBar) === "brandControlBar") && ((_item_video5 = item.video) === null || _item_video5 === void 0 ? void 0 : (_item_video_clickBehavior1 = _item_video5.clickBehavior) === null || _item_video_clickBehavior1 === void 0 ? void 0 : _item_video_clickBehavior1.url)),
                    config: item,
                    setTitleVisible: setCenteredTitleVisible,
                    isFullScreen: true,
                    videoFullDomHeight: true,
                    videoCLick: (text)=>{
                        homepageCTAOnClick(text, currentSlideIndex, currentListSlideIndex);
                    },
                    videoDomClick: ()=>{
                        var _item_video;
                        const behavior = (_item_video = item.video) === null || _item_video === void 0 ? void 0 : _item_video.clickBehavior;
                        (behavior === null || behavior === void 0 ? void 0 : behavior.url) && handlerClickBehavior(behavior);
                    }
                })
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsVideo, {
            wrapperClassName: (editable_content_item_module_default()).videoWrapper,
            config: item,
            isEditableContent: !((!((_item_video = item.video) === null || _item_video === void 0 ? void 0 : _item_video.controlBar) || ((_item_video1 = item.video) === null || _item_video1 === void 0 ? void 0 : _item_video1.controlBar) === "brandControlBar") && ((_item_video2 = item.video) === null || _item_video2 === void 0 ? void 0 : (_item_video_clickBehavior = _item_video2.clickBehavior) === null || _item_video_clickBehavior === void 0 ? void 0 : _item_video_clickBehavior.url)),
            videoHeight: convertRatio(ratioOfImage) || DEFAULT_RATIO,
            setTitleVisible: setCenteredTitleVisible,
            videoCLick: (text)=>{
                homepageCTAOnClick(text, currentSlideIndex, currentListSlideIndex);
            },
            videoDomClick: ()=>{
                var _item_video;
                const behavior = (_item_video = item.video) === null || _item_video === void 0 ? void 0 : _item_video.clickBehavior;
                behavior && handlerClickBehavior(behavior);
            }
        });
    } else if (image) {
        const { imageUrl, clickBehavior, name } = image;
        if (isFullScreen) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* Link */.rU, {
                clickBehavior: clickBehavior,
                onClickLink: handleCmsLinkClick,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classnames_default()((editable_content_item_module_default()).isFullScreenEle, {
                        [(editable_content_item_module_default()).ratio4x5]: (ratioOfImage === null || ratioOfImage === void 0 ? void 0 : ratioOfImage.trim()) === "4:5"
                    }),
                    style: newStyle,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                        alt: name,
                        src: imageUrl || ""
                    })
                })
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* Link */.rU, {
            clickBehavior: clickBehavior,
            onClickLink: handleCmsLinkClick,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(aspect_ratio_box/* AspectRatioBox */.U, {
                ratio: convertRatio(ratioOfImage) || DEFAULT_RATIO,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                    alt: name,
                    src: imageUrl || ""
                })
            })
        });
    } else if (product) {
        var _product_0, _product_01, _product_02, _product_03, _product_04, _product_05, _product_06;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                href: (0,index_esm/* pathJoin */.Dy)("/products", (_product_0 = product["0"]) === null || _product_0 === void 0 ? void 0 : _product_0.url),
                onClick: handleProductLinkClick,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(aspect_ratio_box/* AspectRatioBox */.U, {
                        ratio: convertRatio(ratioOfImage) || DEFAULT_RATIO,
                        className: (editable_content_item_module_default()).imageWrapper,
                        style: {
                            backgroundColor: product.extend.backgroundColor || ""
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                            src: product.extend.image || ((_product_01 = product["0"]) === null || _product_01 === void 0 ? void 0 : _product_01.defaultImage) || "",
                            style: {
                                objectFit: "contain"
                            }
                        })
                    }),
                    ((_product_02 = product["0"]) === null || _product_02 === void 0 ? void 0 : _product_02.name) || ((_product_03 = product["0"]) === null || _product_03 === void 0 ? void 0 : _product_03.price) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (editable_content_item_module_default()).productInfo,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (editable_content_item_module_default()).name,
                                children: (_product_04 = product["0"]) === null || _product_04 === void 0 ? void 0 : _product_04.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    (_product_05 = product["0"]) === null || _product_05 === void 0 ? void 0 : _product_05.price,
                                    !!((_product_06 = product["0"]) === null || _product_06 === void 0 ? void 0 : _product_06.markDownPrice) && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (editable_content_item_module_default()).markDownPrice,
                                        children: product["0"].markDownPrice
                                    })
                                ]
                            })
                        ]
                    }) : null
                ]
            })
        });
    } else {
        return null;
    }
};
/**
 * single/double 使用block width 和ratio（两者必填）
 */ const editable_content_item_EditableContentItem = (param)=>{
    let { editableContentItem, isFullScreen, ratioOfImage, componentIndex, currentSlideIndex, currentListSlideIndex } = param;
    var _editableContentItem_title_clickBehavior, _editableContentItem_title, _editableContentItem_title_clickBehavior1, _editableContentItem_title1, _editableContentItem_title2, _editableContentItem_cta_clickBehavior, _editableContentItem_cta, _editableContentItem_cta_clickBehavior1, _editableContentItem_cta1;
    // title是否显示 (视频手动播放且有封面时，视频播放时，视频上方的标题消失)
    const [centeredTitleVisible, setCenteredTitleVisible] = (0,react.useState)(true);
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    const [isHovered, setIsHovered] = (0,react.useState)(false);
    const handleMouse = (0,react.useCallback)((value)=>{
        setIsHovered(value);
    }, []);
    if (!editableContentItem) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (editable_content_item_module_default()).editableContentItem,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Item, {
                        componentIndex: componentIndex,
                        item: editableContentItem,
                        isFullScreen: isFullScreen,
                        ratioOfImage: ratioOfImage,
                        currentSlideIndex: currentSlideIndex,
                        currentListSlideIndex: currentListSlideIndex,
                        setCenteredTitleVisible: setCenteredTitleVisible
                    }),
                    editableContentItem.centeredTitle.wording && centeredTitleVisible ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (editable_content_item_module_default()).centeredTitle,
                        style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(editableContentItem.centeredTitle.style),
                        dangerouslySetInnerHTML: {
                            __html: editableContentItem.centeredTitle.wording
                        }
                    }) : null
                ]
            }),
            !editableContentItem.product && (editableContentItem.title.wording || editableContentItem.cta.wording) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()((editable_content_item_module_default()).wordContent, {
                    [(editable_content_item_module_default()).isFullScreen]: isFullScreen
                }),
                style: {
                    paddingTop: editableContentItem.space
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            textAlign: editableContentItem.title.alignment
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            onMouseEnter: ()=>{
                                handleMouse(true);
                            },
                            onMouseLeave: ()=>{
                                handleMouse(false);
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableText, {
                                as: "span",
                                cursorDefault: (editableContentItem === null || editableContentItem === void 0 ? void 0 : (_editableContentItem_title = editableContentItem.title) === null || _editableContentItem_title === void 0 ? void 0 : (_editableContentItem_title_clickBehavior = _editableContentItem_title.clickBehavior) === null || _editableContentItem_title_clickBehavior === void 0 ? void 0 : _editableContentItem_title_clickBehavior.type) === "unClickable" || !(editableContentItem === null || editableContentItem === void 0 ? void 0 : (_editableContentItem_title1 = editableContentItem.title) === null || _editableContentItem_title1 === void 0 ? void 0 : (_editableContentItem_title_clickBehavior1 = _editableContentItem_title1.clickBehavior) === null || _editableContentItem_title_clickBehavior1 === void 0 ? void 0 : _editableContentItem_title_clickBehavior1.url),
                                clickableConfig: {
                                    clickBehavior: editableContentItem.title.clickBehavior,
                                    style: isHovered && (editableContentItem === null || editableContentItem === void 0 ? void 0 : (_editableContentItem_title2 = editableContentItem.title) === null || _editableContentItem_title2 === void 0 ? void 0 : _editableContentItem_title2.hoverStyle) ? (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(editableContentItem.title.hoverStyle) : (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(editableContentItem.title.style),
                                    wording: editableContentItem.title.wording
                                },
                                onClickLink: (text)=>homepageCTAOnClick(text, currentSlideIndex, currentListSlideIndex)
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            textAlign: editableContentItem.cta.alignment
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableText, {
                            as: "span",
                            cursorDefault: ((_editableContentItem_cta = editableContentItem.cta) === null || _editableContentItem_cta === void 0 ? void 0 : (_editableContentItem_cta_clickBehavior = _editableContentItem_cta.clickBehavior) === null || _editableContentItem_cta_clickBehavior === void 0 ? void 0 : _editableContentItem_cta_clickBehavior.type) === "unClickable" || !((_editableContentItem_cta1 = editableContentItem.cta) === null || _editableContentItem_cta1 === void 0 ? void 0 : (_editableContentItem_cta_clickBehavior1 = _editableContentItem_cta1.clickBehavior) === null || _editableContentItem_cta_clickBehavior1 === void 0 ? void 0 : _editableContentItem_cta_clickBehavior1.url),
                            clickableConfig: {
                                clickBehavior: editableContentItem.cta.clickBehavior,
                                style: editableContentItem.cta.style,
                                wording: editableContentItem.cta.wording
                            },
                            spanClassName: classnames_default()((editable_content_item_module_default()).linkCta, {
                                [(editable_content_item_module_default()).yslPrimary]: editableContentItem.cta.template === eagle_china_package_web_cms_dist/* IEditableContent */.xb.Template.YslPrimary,
                                [(editable_content_item_module_default()).yslLink]: editableContentItem.cta.template === eagle_china_package_web_cms_dist/* IEditableContent */.xb.Template.YslLink
                            }),
                            onClickLink: (text)=>homepageCTAOnClick(text, currentSlideIndex, currentListSlideIndex)
                        })
                    })
                ]
            }) : null
        ]
    });
};

;// CONCATENATED MODULE: ./components/cms/cms-editable-content/single-content.tsx




const SingleContent = (param)=>{
    let { item, isFullScreen = false, componentIndex, currentSlideIndex } = param;
    if (!item) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((single_content_module_default()).wrapper, {
            [(single_content_module_default()).isFullScreen]: isFullScreen
        }),
        children: item.list.map((i, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()((single_content_module_default()).item, {
                    [(single_content_module_default()).ratio4x5]: item.ratioOfImage.trim() === "4:5"
                }),
                style: !isFullScreen ? {
                    width: item.blockWidth
                } : {},
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(editable_content_item_EditableContentItem, {
                    currentSlideIndex: currentSlideIndex,
                    currentListSlideIndex: item.list.length < 2 ? -1 : index,
                    componentIndex: componentIndex,
                    editableContentItem: i,
                    ratioOfImage: item.ratioOfImage,
                    isFullScreen: isFullScreen
                })
            }, "".concat(i.sliderType, "-").concat(index)))
    });
};

// EXTERNAL MODULE: ./components/cms/cms-editable-content/double-content.module.scss
var double_content_module = __webpack_require__(65182);
var double_content_module_default = /*#__PURE__*/__webpack_require__.n(double_content_module);
;// CONCATENATED MODULE: ./components/cms/cms-editable-content/double-content.tsx







const DoubleContent = (param)=>{
    let { item, isFullScreen = false, componentIndex, currentSlideIndex } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const isMobile = currentDevice === use_get_device_type/* DeviceType */.Y.MOBILE;
    if (!item) return null;
    // 一行两个
    const isDesktopOrTablet2Layout = !isMobile && item.tabletLayout !== TABLET_ONE_IN_LINE;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((double_content_module_default()).container, {
            [(double_content_module_default()).isFullScreen]: isFullScreen
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classnames_default()((double_content_module_default()).wrapper, {
                [(double_content_module_default()).desktopOrTablet2Layout]: isDesktopOrTablet2Layout
            }),
            style: {
                columnGap: isDesktopOrTablet2Layout ? item.blockPadding : "",
                rowGap: !isDesktopOrTablet2Layout ? item.blockPadding : ""
            },
            children: item.list.map((i, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classnames_default()((double_content_module_default()).item, {
                        [(double_content_module_default()).ratio4x5]: item.ratioOfImage.trim() === "4:5"
                    }),
                    style: !isFullScreen ? {
                        width: item.blockWidth
                    } : {},
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(editable_content_item_EditableContentItem, {
                        componentIndex: componentIndex,
                        currentSlideIndex: currentSlideIndex,
                        currentListSlideIndex: item.list.length < 2 ? -1 : index,
                        editableContentItem: i,
                        isFullScreen: isFullScreen,
                        ratioOfImage: item.ratioOfImage
                    })
                }, "".concat(i.sliderType, "-").concat(index)))
        })
    });
};

;// CONCATENATED MODULE: ./components/cms/cms-editable-content/editable-no-full-screen.tsx







const EditableNoFullScreen = (param)=>{
    let { config, componentIndex } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const addDynamicHeader = (0,eagle_china_package_web_cms_dist/* useDynamicHeader */.vT)();
    const editableList = (0,react.useMemo)(()=>{
        if (!currentDevice) return [];
        return config[currentDevice];
    }, [
        config,
        currentDevice
    ]);
    const columnSlideMargin = currentDevice && config["".concat(currentDevice, "SlideMargin")];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: (0,index_esm/* arrayOrEmpty */.sq)(editableList).map((item, index)=>{
            var _arrayOrEmpty;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* DynamicHeaderContainer */.h9, {
                    addDynamicHeader: addDynamicHeader,
                    headerChanging: item.headerChanging,
                    headerChangingOffset: config.headerChangingOffset,
                    currentDevice: currentDevice,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            marginBottom: index !== ((_arrayOrEmpty = (0,index_esm/* arrayOrEmpty */.sq)(editableList)) === null || _arrayOrEmpty === void 0 ? void 0 : _arrayOrEmpty.length) - 1 ? columnSlideMargin : 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EditableItem, {
                            item: item,
                            componentIndex: componentIndex,
                            currentSlideIndex: index,
                            itemIndex: index
                        })
                    })
                })
            }, "".concat(config.identifier).concat(index));
        })
    });
};
const EditableItem = /*#__PURE__*/ (0,react.memo)((param)=>{
    let { item, componentIndex, itemIndex, isFullScreen = false, currentSlideIndex = 0 } = param;
    switch(item.slideTemplate){
        case eagle_china_package_web_cms_dist/* IEditableContent */.xb.SlideTemplate.FullWidth:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(FullWidth, {
                list: item.list,
                componentIndex: componentIndex,
                currentSlideIndex: currentSlideIndex,
                itemIndex: itemIndex,
                isFullScreen: isFullScreen,
                displayMode: item.displayMode,
                ratioOfImage: item.ratioOfImage
            });
        case eagle_china_package_web_cms_dist/* IEditableContent */.xb.SlideTemplate.SingleContent:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(SingleContent, {
                componentIndex: componentIndex,
                currentSlideIndex: currentSlideIndex,
                item: item,
                isFullScreen: isFullScreen
            });
        default:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(DoubleContent, {
                componentIndex: componentIndex,
                currentSlideIndex: currentSlideIndex,
                item: item,
                isFullScreen: isFullScreen
            });
    }
});
EditableItem.displayName = "EditableItem";

// EXTERNAL MODULE: ./features/header/index.tsx + 12 modules
var header = __webpack_require__(40390);
// EXTERNAL MODULE: ./features/footer/index.tsx + 4 modules
var footer = __webpack_require__(69148);
;// CONCATENATED MODULE: ./assets/svg/editable-in-full-arrow.svg
var editable_in_full_arrow_path;
var editable_in_full_arrow_excluded = ["title", "titleId"];
function editable_in_full_arrow_extends() { editable_in_full_arrow_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return editable_in_full_arrow_extends.apply(this, arguments); }
function editable_in_full_arrow_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = editable_in_full_arrow_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function editable_in_full_arrow_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var SvgEditableInFullArrow = function SvgEditableInFullArrow(_ref, ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = editable_in_full_arrow_objectWithoutProperties(_ref, editable_in_full_arrow_excluded);
  return /*#__PURE__*/react.createElement("svg", editable_in_full_arrow_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 10,
    height: 6,
    viewBox: "0 0 10 6",
    fill: "none",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, editable_in_full_arrow_path || (editable_in_full_arrow_path = /*#__PURE__*/react.createElement("path", {
    d: "M9 1L4.99997 5L1 1",
    stroke: "currentColor"
  })));
};
var editable_in_full_arrow_ForwardRef = /*#__PURE__*/(0,react.forwardRef)(SvgEditableInFullArrow);
/* harmony default export */ var editable_in_full_arrow = (editable_in_full_arrow_ForwardRef);
;// CONCATENATED MODULE: ./components/cms/cms-editable-content/editable-in-full-screen.tsx

















const EditableInFullScreen = (param)=>{
    let { config, componentIndex } = param;
    var _headerConfig_, _headerConfig_1;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const lastMovedTime = (0,react.useRef)(0);
    const [currentSlideIndex, setCurrentSlideIndex] = (0,react.useState)(0);
    const swiperRef = (0,react.useRef)();
    const lastSwiper = (0,react.useRef)();
    const headerConfig = (0,hooks/* useAppSelector */.C)(customized_header/* getHeaderConfig */.Mq);
    const timerRef = (0,react.useRef)(null);
    const defaultTextColor = ((_headerConfig_ = headerConfig[0]) === null || _headerConfig_ === void 0 ? void 0 : _headerConfig_.theme) === dist/* HeaderThemeType */.IU.LIGHT ? "#FFF" : "#000";
    const changedTextColor = ((_headerConfig_1 = headerConfig[1]) === null || _headerConfig_1 === void 0 ? void 0 : _headerConfig_1.theme) === dist/* HeaderThemeType */.IU.DARK ? "#000" : "#FFF";
    const editableList = (0,react.useMemo)(()=>{
        var _config_currentDevice, _config_currentDevice1;
        if (!currentDevice) return [];
        const list = currentDevice === use_get_device_type/* DeviceType */.Y.MOBILE ? (_config_currentDevice = config[currentDevice]) === null || _config_currentDevice === void 0 ? void 0 : _config_currentDevice.flatMap((item)=>{
            return item.list.map((listItem)=>({
                    slideTemplate: item.slideTemplate,
                    list: [
                        listItem
                    ],
                    headerChanging: item.headerChanging,
                    blockWidth: item.blockWidth,
                    blockPadding: item.blockPadding,
                    tabletLayout: item.tabletLayout,
                    displayMode: item.displayMode,
                    ratioOfImage: item.ratioOfImage
                }));
        }) : currentDevice === use_get_device_type/* DeviceType */.Y.TABLET ? (_config_currentDevice1 = config[currentDevice]) === null || _config_currentDevice1 === void 0 ? void 0 : _config_currentDevice1.flatMap((item)=>{
            if (item.tabletLayout !== TABLET_ONE_IN_LINE) {
                return item;
            }
            return item.list.map((listItem)=>({
                    slideTemplate: item.slideTemplate,
                    list: [
                        listItem
                    ],
                    headerChanging: item.headerChanging,
                    blockWidth: item.blockWidth,
                    blockPadding: item.blockPadding,
                    tabletLayout: item.tabletLayout,
                    displayMode: item.displayMode,
                    ratioOfImage: item.ratioOfImage
                }));
        }) : config[currentDevice];
        return list;
    }, [
        config,
        currentDevice
    ]);
    const scrollArrowConfig = (0,react.useMemo)(()=>{
        if (!currentDevice) return null;
        const data = {
            scrollArrow: (config === null || config === void 0 ? void 0 : config["".concat(currentDevice, "ScrollArrow")]) || "",
            scrollArrowMargin: (config === null || config === void 0 ? void 0 : config["".concat(currentDevice, "ScrollArrowMargin")]) || ""
        };
        return data;
    }, [
        config,
        currentDevice
    ]);
    // 处理 Swiper 的 change 事件
    const handleSwiperChange = (swiper)=>{
        var _arrayOrEmpty_swiper_realIndex, _currentItem_list_;
        setCurrentSlideIndex(swiper.realIndex);
        // 全屏切，只需取出当前组件的header changing即可，无需计算路过header的位置多少
        const headerChanging = (_arrayOrEmpty_swiper_realIndex = (0,index_esm/* arrayOrEmpty */.sq)(editableList)[swiper.realIndex]) === null || _arrayOrEmpty_swiper_realIndex === void 0 ? void 0 : _arrayOrEmpty_swiper_realIndex.headerChanging;
        (0,header/* setGlobalHeaderTextStyle */.BV)(headerChanging ? changedTextColor : defaultTextColor);
        const currentItem = (0,index_esm/* arrayOrEmpty */.sq)(editableList)[swiper.realIndex];
        if ((currentItem === null || currentItem === void 0 ? void 0 : currentItem.slideTemplate) === eagle_china_package_web_cms_dist/* IEditableContent */.xb.SlideTemplate.FullWidth && (currentItem === null || currentItem === void 0 ? void 0 : (_currentItem_list_ = currentItem.list[0]) === null || _currentItem_list_ === void 0 ? void 0 : _currentItem_list_.brandLogo)) {
            (0,header/* setHeaderLogoDisplayStyle */.ex)(LogoDisplayEnum.NONE);
        } else {
            (0,header/* setHeaderLogoDisplayStyle */.ex)(LogoDisplayEnum.BLOCK);
        }
    };
    (0,react.useEffect)(()=>{
        var _arrayOrEmpty_;
        const firstHeaderChanging = (_arrayOrEmpty_ = (0,index_esm/* arrayOrEmpty */.sq)(editableList)[0]) === null || _arrayOrEmpty_ === void 0 ? void 0 : _arrayOrEmpty_.headerChanging;
        const firstSlideItem = (0,index_esm/* arrayOrEmpty */.sq)(editableList)[0];
        timerRef.current = setTimeout(()=>{
            var _firstSlideItem_list_;
            (0,header/* setGlobalHeaderTextStyle */.BV)(firstHeaderChanging ? changedTextColor : defaultTextColor);
            if ((firstSlideItem === null || firstSlideItem === void 0 ? void 0 : firstSlideItem.slideTemplate) === eagle_china_package_web_cms_dist/* IEditableContent */.xb.SlideTemplate.FullWidth && (firstSlideItem === null || firstSlideItem === void 0 ? void 0 : (_firstSlideItem_list_ = firstSlideItem.list[0]) === null || _firstSlideItem_list_ === void 0 ? void 0 : _firstSlideItem_list_.brandLogo)) {
                (0,header/* setHeaderLogoDisplayStyle */.ex)(LogoDisplayEnum.NONE);
            } else {
                (0,header/* setHeaderLogoDisplayStyle */.ex)(LogoDisplayEnum.BLOCK);
            }
        }, 500);
        return ()=>{
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
            (0,header/* setHeaderLogoDisplayStyle */.ex)(LogoDisplayEnum.BLOCK);
        };
    }, [
        changedTextColor,
        defaultTextColor,
        editableList
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(swiper_react/* Swiper */.tq, {
        onSwiper: (swiper)=>swiperRef.current = swiper,
        onSliderMove: ()=>{
            lastMovedTime.current = new Date().getTime();
        },
        onSlideChange: handleSwiperChange,
        className: (editable_in_full_screen_module_default()).swiper,
        direction: "vertical",
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: [
                    0,
                    "-10%",
                    -1
                ],
                opacity: 0
            },
            next: {
                translate: [
                    0,
                    "100%",
                    0
                ],
                opacity: 1
            }
        },
        modules: [
            swiper_esm/* EffectCreative */.gI,
            swiper_esm/* Mousewheel */.Gk
        ],
        mousewheel: {
            releaseOnEdges: true
        },
        // https://v8.swiperjs.com/swiper-api#param-focusableElements
        // 需要从中去除video, 否则聚焦视频元素之后无法滑动
        focusableElements: "input, select, option, textarea, button, label",
        speed: 500,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                (0,index_esm/* arrayOrEmpty */.sq)(editableList).map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(swiper_react/* SwiperSlide */.o5, {
                        className: classnames_default()((editable_in_full_screen_module_default()).swiperSlide),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EditableItem, {
                                item: item,
                                componentIndex: componentIndex,
                                currentSlideIndex: currentSlideIndex,
                                itemIndex: index,
                                isFullScreen: true
                            }),
                            index === 0 && scrollArrowConfig && scrollArrowConfig.scrollArrow && /*#__PURE__*/ (0,jsx_runtime.jsx)(editable_in_full_arrow, {
                                className: classnames_default()((editable_in_full_screen_module_default()).scrollArrow),
                                style: {
                                    color: scrollArrowConfig.scrollArrow,
                                    bottom: scrollArrowConfig.scrollArrowMargin || ""
                                }
                            })
                        ]
                    }, "".concat(config.identifier).concat(index))),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(swiper_react/* SwiperSlide */.o5, {
                    className: classnames_default()((editable_in_full_screen_module_default()).swiperSlide, (editable_in_full_screen_module_default()).lastSlide),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(swiper_react/* Swiper */.tq, {
                        direction: "vertical",
                        nested: true,
                        slidesPerView: "auto",
                        className: (editable_in_full_screen_module_default()).swiper,
                        onSwiper: (swiper)=>lastSwiper.current = swiper,
                        modules: [
                            swiper_esm/* FreeMode */.Rv,
                            swiper_esm/* Mousewheel */.Gk
                        ],
                        freeMode: {
                            enabled: currentSlideIndex !== (0,index_esm/* arrayOrEmpty */.sq)(editableList).length - 1
                        },
                        mousewheel: {
                            releaseOnEdges: true
                        },
                        speed: 500,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(swiper_react/* SwiperSlide */.o5, {
                            className: (editable_in_full_screen_module_default()).lastSwiperSlide,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(footer/* Footer */.$, {
                                footerSwiper: lastSwiper.current
                            })
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./utils/get-component-id.ts
const getID = (config)=>"YSL-Redesign-".concat(config.type, "-").concat(config.identifier);


;// CONCATENATED MODULE: ./utils/get-padding-margin-style.ts
const getPaddingMarginStyle = (config, currentDevice)=>{
    const css = {};
    if (currentDevice) {
        Object.assign(css, config.padding[currentDevice]);
        Object.assign(css, config.margin[currentDevice]);
    }
    return css;
};


// EXTERNAL MODULE: ./node_modules/.pnpm/@kering-technologies+ec_china-package-hooks@1.17.0_lodash.debounce@4.0.8_lodash.throttle@4.1._nnr3xwofk5oatghfixxbrp4jym/node_modules/@kering-technologies/ec_china-package-hooks/dist/index.esm.js
var dist_index_esm = __webpack_require__(59265);
;// CONCATENATED MODULE: ./components/cms/cms-editable-content/index.tsx








const CmsEditableContent = (param)=>{
    let { config, componentIndex } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const slideInFullScreenVisible = config.slideInFullScreen;
    const height = (0,dist_index_esm/* useWindowHeight */.AS)();
    (0,react.useEffect)(()=>{
        const computedHeight = document.querySelector(".cms-editable-content-placeholder").offsetHeight;
        const root = document.querySelector(":root");
        root.style.setProperty("--root-cms-editable-content-height", computedHeight + "px");
    }, [
        height
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: componentID,
        style: {
            ...paddingMargin
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "cms-editable-content-placeholder",
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: -1
                }
            }),
            slideInFullScreenVisible ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EditableInFullScreen, {
                config: config,
                componentIndex: componentIndex
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EditableNoFullScreen, {
                config: config,
                componentIndex: componentIndex
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/cms/cms-second-menu/index.module.scss
var index_module = __webpack_require__(55302);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./components/scrollX-view.tsx
var scrollX_view = __webpack_require__(64328);
;// CONCATENATED MODULE: ./components/cms/cms-second-menu/index.tsx










const CmsSecondMenu = (param)=>{
    let { config, componentIndex } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const menuList = config.list;
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        id: componentID,
        style: {
            ...paddingMargin
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(scrollX_view/* ScrollXView */.g, {
            slidesPerView: "auto",
            isCenter: true,
            listData: menuList,
            swiperSlideClassName: (index_module_default()).swiperSlide,
            spaceBetween: 24,
            swiperContainerClassName: (index_module_default()).swiperContainer,
            swiperClassName: classnames_default()((index_module_default()).override, (index_module_default()).swiper),
            arrowVisibleMode: "hidden",
            freeMode: true,
            items: (item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableText, {
                        as: "span",
                        clickableConfig: {
                            clickBehavior: item.clickBehavior,
                            style: item.titleStyle === "active" ? config.activeTextStyle : config.inactiveTextStyle,
                            wording: item.wording
                        },
                        onClickLink: (text)=>homepageCTAOnClick(text || "", index),
                        spanClassName: (index_module_default()).item
                    })
                }, "".concat(item.wording, "|").concat(index))
        })
    });
};

// EXTERNAL MODULE: ./components/by-breakpoints.tsx
var by_breakpoints = __webpack_require__(25073);
// EXTERNAL MODULE: ./components/cms/cms-product-cards/index.module.scss
var cms_product_cards_index_module = __webpack_require__(28591);
var cms_product_cards_index_module_default = /*#__PURE__*/__webpack_require__.n(cms_product_cards_index_module);
// EXTERNAL MODULE: ./adapters/sensors/use-view-item-list.tsx
var use_view_item_list = __webpack_require__(37569);
// EXTERNAL MODULE: ./adapters/sensors/use-map-sensors-events.ts + 7 modules
var use_map_sensors_events = __webpack_require__(94278);
;// CONCATENATED MODULE: ./components/cms/cms-product-cards/index.tsx













const CmsProductCardsItem = (param)=>{
    let { onClick, item, index, backgroundColor, isCmsProduct } = param;
    const handleColorCount = (product)=>{
        var _product_attributes_find_values, _product_attributes_find, _product_attributes_find1, _product_attributes;
        return ((_product_attributes = product.attributes) === null || _product_attributes === void 0 ? void 0 : (_product_attributes_find1 = _product_attributes.find) === null || _product_attributes_find1 === void 0 ? void 0 : (_product_attributes_find = _product_attributes_find1.call(_product_attributes, (i)=>i.code === "color")) === null || _product_attributes_find === void 0 ? void 0 : (_product_attributes_find_values = _product_attributes_find.values) === null || _product_attributes_find_values === void 0 ? void 0 : _product_attributes_find_values.length) || 0;
    };
    const wrapperRef = (0,use_view_item_list/* useViewItemList */.A)(item, index, "", false, "");
    return /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
        href: (0,index_esm/* pathJoin */.Dy)("/products", item.url),
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            ref: wrapperRef,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(aspect_ratio_box/* AspectRatioBox */.U, {
                    ratio: 4 / 5,
                    className: (cms_product_cards_index_module_default()).imageWrapper,
                    style: {
                        backgroundColor
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                        src: item.defaultImage,
                        alt: item.name,
                        style: {
                            objectFit: "contain"
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(by_breakpoints/* ByBreakpoints */.W, {
                    breakpoints: isCmsProduct ? [
                        "mobile",
                        "tablet",
                        "desktop"
                    ] : [
                        "desktop"
                    ],
                    children: (!!item.name || !!item.price || handleColorCount(item) > 1 || !!item.tag) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (cms_product_cards_index_module_default()).info,
                        children: [
                            !!item.name && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (cms_product_cards_index_module_default()).name,
                                children: item.name
                            }),
                            !!item.price && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (cms_product_cards_index_module_default()).price,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: item.price
                                    }),
                                    !!item.markDownPrice && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: (cms_product_cards_index_module_default()).markDownPrice,
                                        children: item.markDownPrice
                                    })
                                ]
                            }),
                            (handleColorCount(item) > 1 || !!item.tag) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (cms_product_cards_index_module_default()).color,
                                children: [
                                    handleColorCount(item) > 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            handleColorCount(item),
                                            " 种颜色"
                                        ]
                                    }),
                                    item.tag && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (cms_product_cards_index_module_default()).tag,
                                        children: item.tag
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }, "".concat(item.name, "|").concat(index));
};
const CmsProductCards = (param)=>{
    let { config } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const products = config.products;
    const { onEvent } = (0,eagle_china_package_web_cms_dist/* useCMSConfig */.E0)();
    const { selectItem } = (0,use_map_sensors_events/* useMapSensorsEvents */.U)();
    const columnGapStyle = currentDevice && config["".concat(currentDevice, "Gutter")];
    const rowGapStyle = currentDevice && config["".concat(currentDevice, "LineSpace")];
    (0,react.useEffect)(()=>{
        (0,index_esm/* arrayOrEmpty */.sq)(products).length && onEvent(eagle_china_package_web_cms_dist/* EventType */.tw.componentInit, {
            component: config
        });
    }, [
        config,
        onEvent,
        products
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        id: componentID,
        style: {
            ...paddingMargin
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (cms_product_cards_index_module_default()).content,
            style: {
                columnGap: columnGapStyle,
                rowGap: rowGapStyle
            },
            id: "productList",
            children: (0,index_esm/* arrayOrEmpty */.sq)(products).map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CmsProductCardsItem, {
                    backgroundColor: config.backgroundColor,
                    item: item,
                    index: index,
                    onClick: ()=>{
                        onEvent(eagle_china_package_web_cms_dist/* EventType */.tw.productClick, {
                            component: config,
                            product: item,
                            index: index
                        });
                        selectItem(item, index);
                    }
                }, "".concat(item.name, "|").concat(index)))
        })
    });
};

// EXTERNAL MODULE: ./components/cms/cms-redirection/index.module.scss
var cms_redirection_index_module = __webpack_require__(992);
var cms_redirection_index_module_default = /*#__PURE__*/__webpack_require__.n(cms_redirection_index_module);
// EXTERNAL MODULE: ./components/cms/cms-detail-panel/index.module.scss
var cms_detail_panel_index_module = __webpack_require__(2822);
var cms_detail_panel_index_module_default = /*#__PURE__*/__webpack_require__.n(cms_detail_panel_index_module);
;// CONCATENATED MODULE: ./components/cms/cms-source-item.tsx








const CmsSourceItem = (param)=>{
    let { item, DEFAULT_SQUARE_RATIO = "1/1", setCenteredTitleVisible, ratioOfImage, videoFullDomHeight, isFullScreen, swiperHasAnimation = false, currentSlideIndex, slideIndex, playIconRightPosition, playIconBottomPosition, isVideoDisabled, isIframeClickable, basicImagePriority = false } = param;
    var _item_video;
    const [activity, setActivity] = (0,react.useState)(undefined);
    (0,react.useEffect)(()=>{
        /**
     * 如果currentSlideIndex和slideIndex相等且当前轮播图的视频播放模式为 "autoPlay"，则设置活动状态为 true；
     * 否则，设置活动状态为 false。
     */ if (currentSlideIndex === undefined || slideIndex === undefined) return;
        if (currentSlideIndex === slideIndex) {
            var _item_video;
            if ((item === null || item === void 0 ? void 0 : (_item_video = item.video) === null || _item_video === void 0 ? void 0 : _item_video.playMode) === "autoPlay") setActivity(true);
        } else {
            setActivity(false);
        }
    }, [
        currentSlideIndex,
        item === null || item === void 0 ? void 0 : (_item_video = item.video) === null || _item_video === void 0 ? void 0 : _item_video.playMode,
        slideIndex
    ]);
    if (!item) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(aspect_ratio_box/* AspectRatioBox */.U, {
            ratio: convertRatio(ratioOfImage) || DEFAULT_SQUARE_RATIO
        });
    }
    const { video, image } = item;
    if ((video === null || video === void 0 ? void 0 : video.sourceType) === eagle_china_package_web_cms_dist/* IEditableContent */.xb.SourceType.Iframe) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsIframe, {
            iframeSrc: video.videoSrc,
            ratio: convertRatio(ratioOfImage) || DEFAULT_SQUARE_RATIO,
            style: !isIframeClickable ? {
                pointerEvents: "none"
            } : {}
        });
    } else if (video) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsVideo, {
            config: item,
            brandControlBar: true,
            isClickable: !swiperHasAnimation,
            videoFullDomHeight: videoFullDomHeight,
            isFullScreen: isFullScreen,
            videoHeight: convertRatio(ratioOfImage) || DEFAULT_SQUARE_RATIO,
            setTitleVisible: setCenteredTitleVisible,
            activity: activity,
            playIconRightPosition: playIconRightPosition,
            playIconBottomPosition: playIconBottomPosition,
            isVideoDisabled: isVideoDisabled
        });
    } else if (image) {
        const { imageAlt, imageUrl } = image;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(aspect_ratio_box/* AspectRatioBox */.U, {
            ratio: convertRatio(ratioOfImage) || DEFAULT_SQUARE_RATIO,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                alt: imageAlt,
                src: imageUrl || "",
                style: {
                    objectPosition: "center top",
                    objectFit: "cover"
                },
                priority: basicImagePriority
            })
        });
    } else {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(aspect_ratio_box/* AspectRatioBox */.U, {
            ratio: convertRatio(ratioOfImage) || DEFAULT_SQUARE_RATIO
        });
    }
};

// EXTERNAL MODULE: ./hooks/use-query.ts
var use_query = __webpack_require__(73524);
;// CONCATENATED MODULE: ./components/cms/cms-detail-panel/detail-pane-item.tsx








// 弹层中的redirection
const DetailPanelLabelItem = (param)=>{
    let { item, label, identifier } = param;
    var _item_clickBehavior_url, _item_clickBehavior;
    const [isHovered, setIsHovered] = (0,react.useState)(false);
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const { addQuery } = (0,use_query/* useQuery */.a)();
    const handleMouse = (value)=>{
        // pc端添加hover效果
        currentDevice && [
            "desktop",
            "large"
        ].includes(currentDevice) && setIsHovered(value);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((cms_detail_panel_index_module_default()).label),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            onMouseEnter: ()=>{
                handleMouse(true);
            },
            onMouseLeave: ()=>{
                handleMouse(false);
            },
            className: classnames_default()((cms_detail_panel_index_module_default()).redirectionLabelText, {
                [(cms_detail_panel_index_module_default()).isCursor]: item.clickBehavior.url
            }),
            style: isHovered ? (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(label === null || label === void 0 ? void 0 : label.hoverLabelStyle) : (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(label === null || label === void 0 ? void 0 : label.defaultLabelStyle),
            children: !((_item_clickBehavior = item.clickBehavior) === null || _item_clickBehavior === void 0 ? void 0 : (_item_clickBehavior_url = _item_clickBehavior.url) === null || _item_clickBehavior_url === void 0 ? void 0 : _item_clickBehavior_url.includes("/")) ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                onClick: ()=>{
                    if (!item.clickBehavior.url) return;
                    addQuery({
                        otherQuery: {
                            cmsDetailPanel: item.clickBehavior.url,
                            isSameComponent: item.clickBehavior.url.split("-")[0] === identifier ? "1" : "0"
                        }
                    });
                },
                children: item.categoryName
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* Link */.rU, {
                clickBehavior: item.clickBehavior,
                children: item.categoryName
            })
        })
    });
};
const DetailPanelItemLeft = (param)=>{
    let { item } = param;
    const [centeredTitleVisible, setCenteredTitleVisible] = (0,react.useState)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsSourceItem, {
                item: item,
                videoFullDomHeight: true,
                isFullScreen: true,
                swiperHasAnimation: true,
                ratioOfImage: (item === null || item === void 0 ? void 0 : item.ratioOfImage) || "",
                setCenteredTitleVisible: setCenteredTitleVisible
            }),
            !!(item === null || item === void 0 ? void 0 : item.centeredTitle) && centeredTitleVisible && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (cms_detail_panel_index_module_default()).centeredTitle,
                style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(item.centeredTitleStyle),
                dangerouslySetInnerHTML: {
                    __html: item.centeredTitle
                }
            })
        ]
    });
};
const DetailPanelItemRight = (param)=>{
    let { item, identifier } = param;
    var _item_redirection, _item_redirection1, _item_redirection2, _item_redirection3, _item_redirection_labels, _item_redirection4;
    if (!item) return null;
    const isTopHasData = !!(item === null || item === void 0 ? void 0 : item.text);
    const isBottomHasData = !!(item === null || item === void 0 ? void 0 : (_item_redirection = item.redirection) === null || _item_redirection === void 0 ? void 0 : _item_redirection.titleWording) || (0,index_esm/* arrayOrEmpty */.sq)(item === null || item === void 0 ? void 0 : (_item_redirection1 = item.redirection) === null || _item_redirection1 === void 0 ? void 0 : _item_redirection1.labels).length > 0;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: isTopHasData || isBottomHasData ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (cms_detail_panel_index_module_default()).rightCon,
            children: [
                !!(item === null || item === void 0 ? void 0 : item.text) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: isBottomHasData ? (cms_detail_panel_index_module_default()).rightTop : "",
                    dangerouslySetInnerHTML: {
                        __html: item === null || item === void 0 ? void 0 : item.text
                    }
                }),
                isBottomHasData ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (cms_detail_panel_index_module_default()).rightBottom,
                    style: {
                        textAlign: item === null || item === void 0 ? void 0 : (_item_redirection2 = item.redirection) === null || _item_redirection2 === void 0 ? void 0 : _item_redirection2.alignment
                    },
                    children: [
                        !!(item === null || item === void 0 ? void 0 : (_item_redirection3 = item.redirection) === null || _item_redirection3 === void 0 ? void 0 : _item_redirection3.titleWording) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (cms_detail_panel_index_module_default()).redirectionTitle,
                            style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(item === null || item === void 0 ? void 0 : item.redirection.titleStyle),
                            dangerouslySetInnerHTML: {
                                __html: (item === null || item === void 0 ? void 0 : item.redirection.titleWording) || ""
                            }
                        }),
                        item === null || item === void 0 ? void 0 : (_item_redirection4 = item.redirection) === null || _item_redirection4 === void 0 ? void 0 : (_item_redirection_labels = _item_redirection4.labels) === null || _item_redirection_labels === void 0 ? void 0 : _item_redirection_labels.map((label, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DetailPanelLabelItem, {
                                item: label,
                                label: item === null || item === void 0 ? void 0 : item.redirection,
                                identifier: identifier
                            }, index))
                    ]
                }) : null
            ]
        }) : null
    });
};
const DetailPanelItem = (param)=>{
    let { item, identifier, index } = param;
    if (!item) return null;
    return /*#__PURE__*/ _jsxs("div", {
        className: classNames(styles.item, "body-scroll-lock-ignore"),
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: classNames(styles.left, "detail-panel-left-item-".concat(identifier, "-").concat(index)),
                children: /*#__PURE__*/ _jsx(DetailPanelItemLeft, {
                    item: item
                })
            }),
            /*#__PURE__*/ _jsx(DetailPanelItemRight, {
                item: item
            })
        ]
    });
};

// EXTERNAL MODULE: ./assets/svg/close.svg
var svg_close = __webpack_require__(97682);
// EXTERNAL MODULE: ./components/create-portal.tsx
var create_portal = __webpack_require__(77470);
;// CONCATENATED MODULE: ./components/cms/cms-detail-panel/index.tsx












const CmsDetailPanel = (param)=>{
    let { list, identifier } = param;
    const [isVisible, setIsVisible] = (0,react.useState)(false);
    const [isLoaded, setIsLoaded] = (0,react.useState)(false);
    const [isComplete, setIsComplete] = (0,react.useState)(false);
    const bodyScrollLocker = (0,dist_index_esm/* useBodyScrollLocker */.Pr)(!!isComplete);
    const swiperTimerRef = (0,react.useRef)(null);
    const [currentDetailPanelIdentifierAndIndex, setCurrentDetailPanelIdentifierAndIndex] = (0,react.useState)(0);
    const router = (0,next_router.useRouter)();
    const routerData = (0,index_esm/* getQueryWithoutUrl */.Z7)(router.query);
    const queryRef = (0,react.useRef)(routerData);
    const [currentSlideIndex, setCurrentSlideIndex] = (0,react.useState)(0);
    const controlledSwiper = (0,react.useRef)();
    const swiperRef = (0,react.useRef)();
    const { deleteQuery, addQuery } = (0,use_query/* useQuery */.a)();
    (0,react.useEffect)(()=>{
        if (router.query.cmsDetailPanel) {
            setIsLoaded(true);
            const cmsDetailPanelIdentifierAndIndex = router.query.cmsDetailPanel.split("-");
            if ((cmsDetailPanelIdentifierAndIndex === null || cmsDetailPanelIdentifierAndIndex === void 0 ? void 0 : cmsDetailPanelIdentifierAndIndex[0]) && (cmsDetailPanelIdentifierAndIndex === null || cmsDetailPanelIdentifierAndIndex === void 0 ? void 0 : cmsDetailPanelIdentifierAndIndex[1]) && Number(cmsDetailPanelIdentifierAndIndex === null || cmsDetailPanelIdentifierAndIndex === void 0 ? void 0 : cmsDetailPanelIdentifierAndIndex[1]) > 0) {
                if (cmsDetailPanelIdentifierAndIndex[0] === identifier) {
                    if (!isVisible) {
                        setTimeout(()=>{
                            setIsVisible(true);
                            // 当页面swiper打开此组件的时候，同时对 body 加锁，当给 body 切换overflow:hidden和 overflow：auto的时候，swiper 元素会闪动
                            // 当页面内容都出来后，再延迟对 body 加锁
                            setTimeout(()=>{
                                setIsComplete(true);
                            }, 800);
                        }, 500);
                    }
                } else {
                    setIsLoaded(false);
                    setIsVisible(false);
                    setIsComplete(false);
                }
                setCurrentDetailPanelIdentifierAndIndex(Number(cmsDetailPanelIdentifierAndIndex[1]) - 1);
                if (router.query.isSameComponent && router.query.isSameComponent === "1") {
                    setTimeout(()=>{
                        var _swiperRef_current_slideTo, _swiperRef_current;
                        (_swiperRef_current = swiperRef.current) === null || _swiperRef_current === void 0 ? void 0 : (_swiperRef_current_slideTo = _swiperRef_current.slideTo) === null || _swiperRef_current_slideTo === void 0 ? void 0 : _swiperRef_current_slideTo.call(_swiperRef_current, Number(cmsDetailPanelIdentifierAndIndex[1]) - 1);
                    }, 2 * 100);
                }
            } else {
                setIsVisible(false);
                setIsComplete(false);
            }
        } else {
            setIsVisible(false);
            setIsComplete(false);
            setTimeout(()=>{
                setIsLoaded(false);
            }, 4 * 100);
        }
        return ()=>{
            swiperTimerRef.current && clearTimeout(swiperTimerRef.current);
        };
    }, [
        identifier,
        isVisible,
        router.query.cmsDetailPanel,
        router.query.isSameComponent
    ]);
    const handleSwiperChange = (swiper)=>{
        addQuery({
            otherQuery: {
                ...queryRef.current,
                cmsDetailPanel: "".concat(identifier, "-").concat(swiper.realIndex + 1)
            },
            isExtendBeforeQuery: false
        });
        setCurrentSlideIndex(swiper.realIndex);
    };
    const colorWhite = "#fff";
    return isLoaded && list && list.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classnames_default()((cms_detail_panel_index_module_default()).wrapper, isVisible ? (cms_detail_panel_index_module_default()).show : (cms_detail_panel_index_module_default()).hide),
            ref: bodyScrollLocker,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (cms_detail_panel_index_module_default()).content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(svg_close/* default */.Z, {
                        className: (cms_detail_panel_index_module_default()).closeIcon,
                        onClick: ()=>{
                            deleteQuery({
                                key: "cmsDetailPanel"
                            });
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classnames_default()((cms_detail_panel_index_module_default()).item, "body-scroll-lock-ignore"),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (cms_detail_panel_index_module_default()).left,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(scrollX_view/* ScrollXView */.g, {
                                    swiperContainerClassName: (cms_detail_panel_index_module_default()).swiperContainer,
                                    swiperClassName: classnames_default()((cms_detail_panel_index_module_default()).override, (cms_detail_panel_index_module_default()).swiper),
                                    listData: list,
                                    swiperNextClassName: (cms_detail_panel_index_module_default()).nextIcon,
                                    swiperPrevClassName: (cms_detail_panel_index_module_default()).prevIcon,
                                    effect: "fade",
                                    loop: true,
                                    speed: 700,
                                    initialSlide: currentDetailPanelIdentifierAndIndex,
                                    onSlideChange: handleSwiperChange,
                                    allowTouchMove: false,
                                    onSwiper: (swiper)=>swiperRef.current = swiper,
                                    controller: {
                                        control: controlledSwiper.current
                                    },
                                    arrowColor: colorWhite,
                                    items: (item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                            children: isLoaded && currentSlideIndex === index ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DetailPanelItemLeft, {
                                                item: item.drawer
                                            }) : null
                                        })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (cms_detail_panel_index_module_default()).right,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(scrollX_view/* ScrollXView */.g, {
                                    listData: list,
                                    swiperNextClassName: (cms_detail_panel_index_module_default()).nextIcon,
                                    swiperPrevClassName: (cms_detail_panel_index_module_default()).prevIcon,
                                    effect: "fade",
                                    loop: true,
                                    speed: 700,
                                    arrowVisibleMode: "hidden",
                                    initialSlide: currentDetailPanelIdentifierAndIndex,
                                    allowTouchMove: false,
                                    onSwiper: (swiper)=>controlledSwiper.current = swiper,
                                    autoHeight: true,
                                    items: (item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DetailPanelItemRight, {
                                            item: item.drawer,
                                            identifier: identifier
                                        })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }) : null;
};

;// CONCATENATED MODULE: ./components/cms/cms-redirection/index.tsx












const LabelItem = (param)=>{
    let { item, label, currentDevice, openPanelDrawer, componentIndex, currentSlideIndex } = param;
    const [isHovered, setIsHovered] = (0,react.useState)(false);
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    const handleMouse = (value)=>{
        [
            "desktop",
            "large"
        ].includes(currentDevice) && setIsHovered(value);
    };
    //#region 分端获取默认以及hover样式
    const currentHoverStyle = label["".concat(currentDevice, "HoverTextStyle")];
    const currentDefaultStyle = label["".concat(currentDevice, "DefaultTextStyle")];
    //#endregion
    const handleVideoClick = (0,react.useCallback)(()=>{
        homepageCTAOnClick((item === null || item === void 0 ? void 0 : item.categoryName) || "", currentSlideIndex);
    }, [
        currentSlideIndex,
        homepageCTAOnClick,
        item === null || item === void 0 ? void 0 : item.categoryName
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (cms_redirection_index_module_default()).label,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            onMouseEnter: ()=>{
                handleMouse(true);
            },
            onMouseLeave: ()=>{
                handleMouse(false);
            },
            className: (cms_redirection_index_module_default()).labelText,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableText, {
                as: "span",
                clickableConfig: {
                    clickBehavior: item.clickBehavior,
                    style: isHovered ? currentHoverStyle : currentDefaultStyle,
                    wording: item.categoryName
                },
                openPanelDrawer: openPanelDrawer,
                linkClassName: classnames_default()((cms_redirection_index_module_default()).linkText),
                onClickLink: handleVideoClick
            })
        })
    });
};
const CmsRedirection = (param)=>{
    let { config, componentIndex } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const { addQuery } = (0,use_query/* useQuery */.a)();
    const openPanelDrawer = (index)=>{
        addQuery({
            otherQuery: {
                cmsDetailPanel: "".concat(config.identifier, "-").concat(index + 1)
            }
        });
    };
    //#region 分端获取数据
    const currentData = currentDevice && config[currentDevice];
    const currentTitleStyle = currentDevice && config.title["".concat(currentDevice, "TextStyle")];
    const currentTitle = currentDevice && config.title["".concat(currentDevice, "Title")];
    //#endregion
    if (!currentDevice) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: componentID,
        style: {
            ...paddingMargin,
            textAlign: currentData === null || currentData === void 0 ? void 0 : currentData.alignment,
            backgroundColor: currentData === null || currentData === void 0 ? void 0 : currentData.backgroundColor
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (cms_redirection_index_module_default()).title,
                style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(currentTitleStyle),
                children: currentTitle
            }),
            (0,index_esm/* arrayOrEmpty */.sq)(currentData === null || currentData === void 0 ? void 0 : currentData.list).map((item, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(LabelItem, {
                    componentIndex: componentIndex,
                    item: item,
                    currentSlideIndex: i,
                    label: config.label,
                    currentDevice: currentDevice,
                    openPanelDrawer: ()=>openPanelDrawer(i)
                }, i)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsDetailPanel, {
                list: (0,index_esm/* arrayOrEmpty */.sq)(currentData === null || currentData === void 0 ? void 0 : currentData.list),
                identifier: config.identifier
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/cms/cms-horizontal-single/index.module.scss
var cms_horizontal_single_index_module = __webpack_require__(53239);
var cms_horizontal_single_index_module_default = /*#__PURE__*/__webpack_require__.n(cms_horizontal_single_index_module);
;// CONCATENATED MODULE: ./components/cms/cms-horizontal-single/index.tsx













// 媒体组件
const MediaComponent = (param)=>{
    let { value, windowHeight, setTitleVisible, componentIndex, title, iframeInSwiper = false, isInGridOrSlider = false } = param;
    const { assetType, video, image } = value;
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    const handleCmsLinkClick = (0,react.useCallback)(()=>{
        homepageCTAOnClick(title || (image === null || image === void 0 ? void 0 : image.imageAlt) || "");
    }, [
        homepageCTAOnClick,
        title,
        image === null || image === void 0 ? void 0 : image.imageAlt
    ]);
    const videoStyle = (video === null || video === void 0 ? void 0 : video.displayMode) == eagle_china_package_web_cms_dist/* IEditableContent */.xb.DisplayMode.FullWidthFullHeight ? {
        height: isInGridOrSlider ? "100%" : windowHeight
    } : {};
    const isGridFullDom = !!((video === null || video === void 0 ? void 0 : video.displayMode) === eagle_china_package_web_cms_dist/* IEditableContent */.xb.DisplayMode.FullWidthFullHeight && isInGridOrSlider);
    const imageStyle = (image === null || image === void 0 ? void 0 : image.displayMode) == eagle_china_package_web_cms_dist/* IEditableContent */.xb.DisplayMode.FullWidthFullHeight ? {
        height: isInGridOrSlider ? "100%" : windowHeight
    } : {};
    if (assetType === "video") {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classnames_default()((cms_horizontal_single_index_module_default()).mediaWrap, isInGridOrSlider && (video === null || video === void 0 ? void 0 : video.displayMode) === eagle_china_package_web_cms_dist/* IEditableContent */.xb.DisplayMode.FullWidthFullHeight ? (cms_horizontal_single_index_module_default()).isFullHeightInGridOrInSlider : ""),
            style: video.widthOfBrowser ? {
                width: video.widthOfBrowser + "%"
            } : {},
            children: video.sourceType === "iframe" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsIframe, {
                iframeSrc: video.videoSrc,
                ratio: (video === null || video === void 0 ? void 0 : video.displayMode) == "fullWidthFullHeight" ? "" : video === null || video === void 0 ? void 0 : video.ratioOfImage.replace(/:/g, "/"),
                style: {
                    ...videoStyle,
                    pointerEvents: iframeInSwiper ? "none" : "auto"
                }
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsVideo, {
                config: value,
                isClickable: true,
                videoHeight: video.displayMode == "fullWidthFullHeight" ? "fullHeight" : video.ratioOfImage,
                videoFullDomHeight: isGridFullDom,
                setTitleVisible: setTitleVisible,
                videoCLick: (text)=>homepageCTAOnClick(text || ""),
                // 如果video有比例，则直接设置比例即可，如果是全高的需要设置为grid的100%
                isGridFullDom: isGridFullDom
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((cms_horizontal_single_index_module_default()).mediaWrap, isInGridOrSlider && (image === null || image === void 0 ? void 0 : image.displayMode) === eagle_china_package_web_cms_dist/* IEditableContent */.xb.DisplayMode.FullWidthFullHeight ? (cms_horizontal_single_index_module_default()).isFullHeightInGridOrInSlider : ""),
        style: image.widthOfBrowser ? {
            width: image.widthOfBrowser + "%"
        } : {},
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* Link */.rU, {
            clickBehavior: image === null || image === void 0 ? void 0 : image.imageClickBehavior,
            onClickLink: handleCmsLinkClick,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(aspect_ratio_box/* AspectRatioBox */.U, {
                ratio: (image === null || image === void 0 ? void 0 : image.displayMode) == "fullWidthFullHeight" ? "" : image === null || image === void 0 ? void 0 : image.ratioOfImage.replace(/:/g, "/"),
                style: imageStyle,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                    alt: image === null || image === void 0 ? void 0 : image.imageAlt,
                    src: (image === null || image === void 0 ? void 0 : image.imageSource) || ""
                })
            })
        })
    });
};
const CmsHorizontalSingle = (param)=>{
    let { config, componentIndex, isGrid, iframeInSwiper = false, isInSlider = false } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const windowHeight = (0,dist_index_esm/* useWindowHeightPageScrollDisableRefresh */.EK)();
    // title是否显示   (视频手动播放且有封面时，视频播放时，视频上方的标题消失)
    const [titleVisible, setTitleVisible] = (0,react.useState)(true);
    const currentData = currentDevice && config[currentDevice];
    if (!currentData) return null;
    const isFullHeight = currentData.assetType === "image" ? currentData.image.displayMode === eagle_china_package_web_cms_dist/* IEditableContent */.xb.DisplayMode.FullWidthFullHeight : currentData.assetType === "video" ? currentData.video.displayMode === eagle_china_package_web_cms_dist/* IEditableContent */.xb.DisplayMode.FullWidthFullHeight : false;
    const isInGridOrSlider = isGrid || isInSlider;
    // 将该组件直接配置在grid并且配置FullWidthFullHeight，设置height100%
    // 将该组件配置在slider并且配置FullWidthFullHeight，设置height100%
    // 组件直接展示在页面中，则height为windowHeight
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: componentID,
        className: classnames_default()((cms_horizontal_single_index_module_default()).wrap, isInGridOrSlider && isFullHeight ? (cms_horizontal_single_index_module_default()).isFullHeightInGridOrInSlider : ""),
        style: {
            ...paddingMargin
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()((cms_horizontal_single_index_module_default()).mediaComponentWrap, isInGridOrSlider && isFullHeight ? (cms_horizontal_single_index_module_default()).isFullHeightInGridOrInSlider : ""),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MediaComponent, {
                        componentIndex: componentIndex,
                        value: currentData,
                        title: currentData.titleWording || "",
                        windowHeight: windowHeight,
                        setTitleVisible: setTitleVisible,
                        iframeInSwiper: iframeInSwiper,
                        isInGridOrSlider: isInGridOrSlider
                    }),
                    currentData.titleWording && titleVisible && !isGrid ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (cms_horizontal_single_index_module_default()).title,
                        style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(currentData.titleWordingStyle),
                        dangerouslySetInnerHTML: {
                            __html: currentData.titleWording
                        }
                    }) : null
                ]
            }),
            currentData.textWording && !isGrid ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (cms_horizontal_single_index_module_default()).textWord,
                style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(currentData.textWordingStyle),
                dangerouslySetInnerHTML: {
                    __html: currentData.textWording
                }
            }) : null
        ]
    });
};

// EXTERNAL MODULE: ./components/cms/cms-look-content/index.module.scss
var cms_look_content_index_module = __webpack_require__(61173);
var cms_look_content_index_module_default = /*#__PURE__*/__webpack_require__.n(cms_look_content_index_module);
// EXTERNAL MODULE: ./utils/is-development.ts
var is_development = __webpack_require__(22832);
;// CONCATENATED MODULE: ./utils/log-in-dev.ts

const createLog = (scope)=>(0,is_development/* isDev */.r)() ? console.log.bind(console, "%c".concat(scope ? "[".concat(scope, "]") : ""), "color:darkorange; font-weight: bold;") : ()=>{};
const log = createLog();

// EXTERNAL MODULE: ./assets/svg/plus-sign.svg
var plus_sign = __webpack_require__(23660);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@14.2.33_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0_sass@1.66.1/node_modules/next/dynamic.js
var dynamic = __webpack_require__(56170);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./components/cms/cms-look-content/enum.ts
var cms_look_content_enum = __webpack_require__(91879);
;// CONCATENATED MODULE: ./components/cms/cms-look-content/index.tsx

















const ProductSlide = dynamic_default()(()=>Promise.all(/* import() */[__webpack_require__.e(9442), __webpack_require__.e(2120)]).then(__webpack_require__.bind(__webpack_require__, 72120)).then((mod)=>mod.ProductSlide), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(72120)
            ]
    },
    ssr: false
});
const cms_look_content_log = createLog("lookContent");
const SingleTemplate = (param)=>{
    let { item, first, onClick } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (cms_look_content_index_module_default()).singleImageWrapper,
        onClick: ()=>{
            onClick === null || onClick === void 0 ? void 0 : onClick(first);
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(aspect_ratio_box/* AspectRatioBox */.U, {
            ratio: 4 / 5,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                    src: item.large.imageUrl,
                    alt: item.large.imageAlt
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(plus_sign/* default */.Z, {
                    className: (cms_look_content_index_module_default()).plusSign,
                    style: {
                        color: item.large.expendIconColor
                    }
                })
            ]
        })
    });
};
const DoubleTemplate = (param)=>{
    let { item, mobileSpace, tabletSpace, first, last, onClick } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const isMobile = currentDevice === use_get_device_type/* DeviceType */.Y.MOBILE;
    const isTablet = currentDevice === use_get_device_type/* DeviceType */.Y.TABLET;
    const { desktopDisplayRule, mobileDisplayRule } = item;
    const justifyContent = isMobile || isTablet ? {
        display: "flex",
        justifyContent: mobileDisplayRule === eagle_china_package_web_cms_dist/* ILookContent */.GW.MobileDisplayRuleType.largeCenterSmallLeft ? "left" : mobileDisplayRule === eagle_china_package_web_cms_dist/* ILookContent */.GW.MobileDisplayRuleType.largeCenterSmallRight ? "right" : "center"
    } : {};
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (cms_look_content_index_module_default()).doubleImageWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (cms_look_content_index_module_default()).doubleImageItem,
                style: justifyContent,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(aspect_ratio_box/* AspectRatioBox */.U, {
                    ratio: 4 / 5,
                    className: desktopDisplayRule === eagle_china_package_web_cms_dist/* ILookContent */.GW.DesktopDisplayRuleType.largeLeftSmallRight ? (cms_look_content_index_module_default()).largeImageWrapper : (cms_look_content_index_module_default()).smallImageWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                            src: item[desktopDisplayRule === eagle_china_package_web_cms_dist/* ILookContent */.GW.DesktopDisplayRuleType.largeLeftSmallRight ? "large" : "small"].imageUrl,
                            alt: item[desktopDisplayRule === eagle_china_package_web_cms_dist/* ILookContent */.GW.DesktopDisplayRuleType.largeLeftSmallRight ? "large" : "small"].imageAlt,
                            onClick: ()=>{
                                onClick === null || onClick === void 0 ? void 0 : onClick(first);
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(plus_sign/* default */.Z, {
                            className: (cms_look_content_index_module_default()).plusSign,
                            style: {
                                color: desktopDisplayRule === eagle_china_package_web_cms_dist/* ILookContent */.GW.DesktopDisplayRuleType.largeLeftSmallRight ? item.large.expendIconColor : item.small.expendIconColor || "#000"
                            },
                            onClick: ()=>{
                                onClick === null || onClick === void 0 ? void 0 : onClick(first);
                            }
                        })
                    ]
                })
            }),
            isMobile || isTablet ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    height: isTablet ? tabletSpace || "68px" : mobileSpace || "20px"
                }
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (cms_look_content_index_module_default()).doubleImageItem,
                style: justifyContent,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(aspect_ratio_box/* AspectRatioBox */.U, {
                    ratio: 4 / 5,
                    className: desktopDisplayRule === eagle_china_package_web_cms_dist/* ILookContent */.GW.DesktopDisplayRuleType.largeLeftSmallRight ? (cms_look_content_index_module_default()).smallImageWrapper : (cms_look_content_index_module_default()).largeImageWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                            src: item[desktopDisplayRule === eagle_china_package_web_cms_dist/* ILookContent */.GW.DesktopDisplayRuleType.largeLeftSmallRight ? "small" : "large"].imageUrl,
                            alt: item[desktopDisplayRule === eagle_china_package_web_cms_dist/* ILookContent */.GW.DesktopDisplayRuleType.largeLeftSmallRight ? "small" : "large"].imageAlt,
                            onClick: ()=>{
                                onClick === null || onClick === void 0 ? void 0 : onClick(last);
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(plus_sign/* default */.Z, {
                            className: (cms_look_content_index_module_default()).plusSign,
                            style: {
                                color: desktopDisplayRule === eagle_china_package_web_cms_dist/* ILookContent */.GW.DesktopDisplayRuleType.largeLeftSmallRight ? item.small.expendIconColor : item.large.expendIconColor || "#000"
                            },
                            onClick: ()=>{
                                onClick === null || onClick === void 0 ? void 0 : onClick(last);
                            }
                        })
                    ]
                })
            })
        ]
    });
};
const CmsLookContent = (param)=>{
    let { config } = param;
    const { list, desktopLineSpace, largeLineSpace, mobileLineSpace, tabletLineSpace, mobileSpace, tabletSpace, headerChangingOffset = 0, headerChanging = false, productStatus } = config;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const windowWidth = (0,dist_index_esm/* useWindowWidth */.Lm)();
    const isMobile = currentDevice === use_get_device_type/* DeviceType */.Y.MOBILE;
    const isTablet = currentDevice === use_get_device_type/* DeviceType */.Y.TABLET;
    const isDesktop = currentDevice === use_get_device_type/* DeviceType */.Y.DESKTOP;
    const isLargeDesktop = windowWidth >= 1366;
    const addDynamicHeader = (0,eagle_china_package_web_cms_dist/* useDynamicHeader */.vT)();
    let originalIndex = -1;
    const { onEvent } = (0,eagle_china_package_web_cms_dist/* useCMSConfig */.E0)();
    const { addQuery } = (0,use_query/* useQuery */.a)();
    (0,react.useEffect)(()=>{
        cms_look_content_log("config", config);
    }, [
        config
    ]);
    const productSlideList = (0,react.useMemo)(()=>{
        const data = [];
        list.map((item)=>{
            if (item.template === "single") {
                data.push(item.large);
            }
            if (item.template === "double") {
                const _item = item;
                if (eagle_china_package_web_cms_dist/* ILookContent */.GW.DesktopDisplayRuleType.largeLeftSmallRight === _item.desktopDisplayRule) {
                    data.push(_item.large);
                    data.push(_item.small);
                } else {
                    data.push(_item.small);
                    data.push(_item.large);
                }
            }
        });
        return data;
    }, [
        list
    ]);
    const clickImage = (index)=>{
        var _productSlideList_index;
        const value = "".concat(config.identifier, "-").concat(index + 1);
        (0,index_esm/* $emit */.Qy)(cms_look_content_enum/* CMS_LOOK_CONTENT_EVENT */.n + config.identifier, value);
        addQuery({
            otherQuery: {
                cmsLookPanel: value
            }
        });
        const productList = ((_productSlideList_index = productSlideList[index]) === null || _productSlideList_index === void 0 ? void 0 : _productSlideList_index.product) || [];
        (0,index_esm/* arrayOrEmpty */.sq)(productList).length && onEvent(eagle_china_package_web_cms_dist/* EventType */.tw.componentInit, {
            component: config,
            productList
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* DynamicHeaderContainer */.h9, {
        addDynamicHeader: addDynamicHeader,
        currentDevice: currentDevice,
        headerChangingOffset: headerChangingOffset,
        headerChanging: headerChanging,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            id: componentID,
            style: {
                ...paddingMargin
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (cms_look_content_index_module_default()).content,
                    style: {
                        rowGap: isLargeDesktop ? largeLineSpace || "68px" : isDesktop ? desktopLineSpace || "72px" : isTablet ? tabletLineSpace || "100px" : isMobile ? mobileLineSpace || "100px" : "100px"
                    },
                    children: list.map((item, index)=>{
                        let first = 0, last = 0;
                        if (item.template === "single") {
                            originalIndex = originalIndex + 1;
                            first = originalIndex;
                        }
                        if (item.template === "double") {
                            first = originalIndex + 1;
                            last = originalIndex + 2;
                            originalIndex = originalIndex + 2;
                        }
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: (cms_look_content_index_module_default()).itemContent,
                            children: item.template === "single" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SingleTemplate, {
                                item: item,
                                first: first,
                                onClick: clickImage
                            }) : item.template === "double" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DoubleTemplate, {
                                item: item,
                                first: first,
                                last: last,
                                mobileSpace: mobileSpace,
                                tabletSpace: tabletSpace,
                                onClick: clickImage
                            }) : null
                        }, index);
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(create_portal/* CreatePortal */.z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProductSlide, {
                        list: productSlideList,
                        identifier: config.identifier,
                        productStatus: productStatus
                    })
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./components/cms/cms-visual-card/index.module.scss
var cms_visual_card_index_module = __webpack_require__(7351);
var cms_visual_card_index_module_default = /*#__PURE__*/__webpack_require__.n(cms_visual_card_index_module);
;// CONCATENATED MODULE: ./components/cms/cms-visual-card/index.tsx













const VisualCardItem = (param)=>{
    let { item, index, identifier, onClickLink } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(eagle_china_package_web_cms_dist/* Link */.rU, {
        clickBehavior: item.image.clickBehavior,
        onClickLink: onClickLink,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "cms-visual-card-".concat(identifier, "-").concat(index),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(aspect_ratio_box/* AspectRatioBox */.U, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                        priority: true,
                        alt: item.image.imageAlt,
                        src: item.image.imageUrl,
                        style: {
                            objectPosition: "center top",
                            objectFit: "cover"
                        }
                    })
                })
            }),
            item.title ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (cms_visual_card_index_module_default()).title,
                style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(item.titleStyle),
                dangerouslySetInnerHTML: {
                    __html: item.title
                }
            }) : null
        ]
    });
};
const CmsVisualCard = (param)=>{
    let { config, componentIndex } = param;
    var _arrayOrEmpty;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const isMobile = currentDevice === use_get_device_type/* DeviceType */.Y.MOBILE;
    const isTablet = currentDevice === use_get_device_type/* DeviceType */.Y.TABLET;
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const [itemHeight, setItemHeight] = (0,react.useState)(0);
    const [itemWidth, setItemWidth] = (0,react.useState)(0);
    const timerRef = (0,react.useRef)(null);
    const windowWidth = (0,dist_index_esm/* useWindowWidth */.Lm)();
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    (0,react.useEffect)(()=>{
        timerRef.current = setTimeout(()=>{
            // 获取轮播图容器元素和子元素
            const swiperEl = document.querySelector(".cms-visual-card-swiper-".concat(config.identifier));
            const itemEl = document.querySelector(".cms-visual-card-".concat(config.identifier, "-0"));
            // 计算并设置元素高度
            setItemHeight((itemEl === null || itemEl === void 0 ? void 0 : itemEl.offsetHeight) / 2 - 12);
            if (swiperEl && (swiperEl === null || swiperEl === void 0 ? void 0 : swiperEl.offsetWidth) > 0) {
                // 在移动设备上显示时的宽度计算
                isMobile && setItemWidth(((swiperEl === null || swiperEl === void 0 ? void 0 : swiperEl.offsetWidth) - (itemEl === null || itemEl === void 0 ? void 0 : itemEl.offsetWidth) - 20 * 2) / 2);
                // 在平板设备上显示时的宽度计算
                isTablet && setItemWidth(((swiperEl === null || swiperEl === void 0 ? void 0 : swiperEl.offsetWidth) - (itemEl === null || itemEl === void 0 ? void 0 : itemEl.offsetWidth) - 32 * 2) / 2);
                // 在桌面设备上显示时的宽度计算
                !isMobile && !isTablet && setItemWidth(((swiperEl === null || swiperEl === void 0 ? void 0 : swiperEl.offsetWidth) - (itemEl === null || itemEl === void 0 ? void 0 : itemEl.offsetWidth) * 2 - 68 * 3) / 2);
            }
        }, 100);
        return ()=>{
            timerRef.current && clearTimeout(timerRef.current);
        };
    }, [
        config.identifier,
        currentDevice,
        isMobile,
        isTablet,
        itemWidth,
        windowWidth
    ]);
    const list = currentDevice && config[currentDevice];
    const spaceBetween = isMobile ? 20 : isTablet ? 32 : 68;
    if (!list || !((_arrayOrEmpty = (0,index_esm/* arrayOrEmpty */.sq)(list)) === null || _arrayOrEmpty === void 0 ? void 0 : _arrayOrEmpty.length)) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        id: componentID,
        style: {
            ...paddingMargin
        },
        className: (cms_visual_card_index_module_default()).wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(scrollX_view/* ScrollXView */.g, {
            isCenter: false,
            listData: list,
            swiperContainerClassName: "cms-visual-card-swiper-".concat(config.identifier),
            swiperSlideClassName: (cms_visual_card_index_module_default()).swiperSlide,
            spaceBetween: spaceBetween,
            arrowVisibleMode: isMobile || isTablet ? "hidden" : "hoverVisible",
            loop: true,
            slidesOffsetBefore: itemWidth > 0 ? itemWidth + spaceBetween : 0,
            arrowColor: config.arrowStyle,
            swiperPrevClassName: (cms_visual_card_index_module_default()).prevIcon,
            swiperNextClassName: (cms_visual_card_index_module_default()).nextIcon,
            swiperPrevStyle: {
                top: "".concat(itemHeight, "px")
            },
            swiperNextStyle: {
                top: "".concat(itemHeight, "px")
            },
            items: (item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(VisualCardItem, {
                    item: item,
                    index: index,
                    identifier: config.identifier,
                    onClickLink: ()=>homepageCTAOnClick((item === null || item === void 0 ? void 0 : item.title) || "", index)
                })
        })
    });
};

// EXTERNAL MODULE: ./components/cms/cms-editor-timeline/index.module.scss
var cms_editor_timeline_index_module = __webpack_require__(239);
var cms_editor_timeline_index_module_default = /*#__PURE__*/__webpack_require__.n(cms_editor_timeline_index_module);
;// CONCATENATED MODULE: ./components/cms/cms-editor-timeline/index.tsx













const EditorTimelineItem = (param)=>{
    let { item, index, identifier, componentIndex } = param;
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    const handleLinkClick = (0,react.useCallback)(()=>{
        homepageCTAOnClick("阅读更多", index);
    }, [
        homepageCTAOnClick,
        index
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()((cms_editor_timeline_index_module_default()).editorTimelineItem, "cms-editor-timeline-".concat(identifier, "-").concat(index)),
        style: {
            backgroundColor: (item === null || item === void 0 ? void 0 : item.grayBackground) || "#f8f7f5"
        },
        children: [
            !!(item === null || item === void 0 ? void 0 : item.year) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()((cms_editor_timeline_index_module_default()).year, (cms_editor_timeline_index_module_default()).overStyle),
                dangerouslySetInnerHTML: {
                    __html: item === null || item === void 0 ? void 0 : item.year
                }
            }),
            !!(item === null || item === void 0 ? void 0 : item.title) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()((cms_editor_timeline_index_module_default()).title, (cms_editor_timeline_index_module_default()).overStyle),
                dangerouslySetInnerHTML: {
                    __html: item === null || item === void 0 ? void 0 : item.title
                }
            }),
            !!(item === null || item === void 0 ? void 0 : item.description) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()((cms_editor_timeline_index_module_default()).description, (cms_editor_timeline_index_module_default()).overStyle),
                dangerouslySetInnerHTML: {
                    __html: item === null || item === void 0 ? void 0 : item.description
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (cms_editor_timeline_index_module_default()).readMore,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableText, {
                    as: "div",
                    clickableConfig: {
                        clickBehavior: item === null || item === void 0 ? void 0 : item.clickBehavior,
                        wording: "阅读更多"
                    },
                    divClassName: (cms_editor_timeline_index_module_default()).readMoreBorder,
                    onClickLink: handleLinkClick
                })
            })
        ]
    });
};
const CmsEditorTimeline = (param)=>{
    let { config, componentIndex } = param;
    var _arrayOrEmpty;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const isMobile = currentDevice === use_get_device_type/* DeviceType */.Y.MOBILE;
    const isTablet = currentDevice === use_get_device_type/* DeviceType */.Y.TABLET;
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const [itemHeight, setItemHeight] = (0,react.useState)(0);
    const [itemWidth, setItemWidth] = (0,react.useState)(0);
    const timerRef = (0,react.useRef)(null);
    const windowWidth = (0,dist_index_esm/* useWindowWidth */.Lm)();
    const spaceBetween = isMobile ? 20 : isTablet ? 32 : 68;
    (0,react.useEffect)(()=>{
        timerRef.current = setTimeout(()=>{
            const itemEl = document.querySelector(".cms-editor-timeline-".concat(config === null || config === void 0 ? void 0 : config.identifier, "-0"));
            const wrapperEl = document.querySelector(".cms-editor-timeline-".concat(config.identifier));
            setItemHeight((itemEl === null || itemEl === void 0 ? void 0 : itemEl.offsetHeight) / 2 - 12);
            if (windowWidth && windowWidth > 0) {
                if (isMobile) {
                    setItemWidth(((wrapperEl === null || wrapperEl === void 0 ? void 0 : wrapperEl.offsetWidth) - (itemEl === null || itemEl === void 0 ? void 0 : itemEl.offsetWidth) - 20 * 2) / 2);
                } else if (isTablet) {
                    setItemWidth(((wrapperEl === null || wrapperEl === void 0 ? void 0 : wrapperEl.offsetWidth) - (itemEl === null || itemEl === void 0 ? void 0 : itemEl.offsetWidth) - 32 * 2) / 2);
                } else {
                    setItemWidth(((wrapperEl === null || wrapperEl === void 0 ? void 0 : wrapperEl.offsetWidth) - (itemEl === null || itemEl === void 0 ? void 0 : itemEl.offsetWidth) - 68 * 2) / 2);
                }
            }
        }, 100);
        return ()=>{
            timerRef.current && clearTimeout(timerRef.current);
        };
    }, [
        config.identifier,
        currentDevice,
        isMobile,
        isTablet,
        itemWidth,
        windowWidth
    ]);
    if (!(config === null || config === void 0 ? void 0 : config.list) || !((_arrayOrEmpty = (0,index_esm/* arrayOrEmpty */.sq)(config === null || config === void 0 ? void 0 : config.list)) === null || _arrayOrEmpty === void 0 ? void 0 : _arrayOrEmpty.length)) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        id: componentID,
        style: {
            ...paddingMargin
        },
        className: (cms_editor_timeline_index_module_default()).wrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(scrollX_view/* ScrollXView */.g, {
            swiperContainerClassName: "cms-editor-timeline-".concat(config.identifier),
            isCenter: false,
            listData: config === null || config === void 0 ? void 0 : config.list,
            swiperSlideClassName: (cms_editor_timeline_index_module_default()).swiperSlide,
            spaceBetween: spaceBetween,
            arrowVisibleMode: isMobile || isTablet ? "hidden" : "hoverVisible",
            slidesOffsetBefore: itemWidth > 0 ? itemWidth + spaceBetween : 0,
            swiperPrevId: "cms-editor-timeline-swiper-prev_".concat(config.identifier),
            swiperNextId: "cms-editor-timeline-swiper-next_".concat(config.identifier),
            swiperPrevStyle: {
                top: "".concat(itemHeight, "px")
            },
            swiperNextStyle: {
                top: "".concat(itemHeight, "px")
            },
            loop: true,
            items: (item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(EditorTimelineItem, {
                    componentIndex: componentIndex,
                    item: item,
                    index: index,
                    identifier: config === null || config === void 0 ? void 0 : config.identifier
                })
        })
    });
};

// EXTERNAL MODULE: ./components/cms/cms-editorial-square/index.module.scss
var cms_editorial_square_index_module = __webpack_require__(9384);
var cms_editorial_square_index_module_default = /*#__PURE__*/__webpack_require__.n(cms_editorial_square_index_module);
// EXTERNAL MODULE: ./components/cms/cms-dialog.module.scss
var cms_dialog_module = __webpack_require__(74655);
var cms_dialog_module_default = /*#__PURE__*/__webpack_require__.n(cms_dialog_module);
;// CONCATENATED MODULE: ./components/cms/cms-dialog.tsx





const CmsDialog = (param)=>{
    let { children, isVisible, onClose, contentClassName } = param;
    const bodyScrollLocker = (0,dist_index_esm/* useBodyScrollLocker */.Pr)(!!isVisible);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((cms_dialog_module_default()).wrapper, isVisible ? (cms_dialog_module_default()).show : (cms_dialog_module_default()).hide),
        ref: bodyScrollLocker,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classnames_default()((cms_dialog_module_default()).content, contentClassName),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(svg_close/* default */.Z, {
                    className: (cms_dialog_module_default()).closeIcon,
                    onClick: onClose
                }),
                children
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/cms/cms-editorial-square/index.tsx











const CmsEditorialSquare = (param)=>{
    let { config, componentIndex } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const list = currentDevice && config[currentDevice];
    const [isDialogVisible, setIsDialogVisible] = (0,react.useState)(false);
    const [panelDrawerItem, setPanelDrawerItem] = (0,react.useState)(null);
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    const openPanelDrawer = (item)=>{
        setIsDialogVisible(true);
        setPanelDrawerItem(item.drawer);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: componentID,
        style: {
            ...paddingMargin
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (cms_editorial_square_index_module_default()).wrapper,
                children: list === null || list === void 0 ? void 0 : list.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (cms_editorial_square_index_module_default()).item,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsSourceItem, {
                                item: item,
                                ratioOfImage: item.ratioOfImage,
                                isIframeClickable: true
                            }),
                            (!!item.title || !!item.text) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: (cms_editorial_square_index_module_default()).content,
                                children: [
                                    !!item.title && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (cms_editorial_square_index_module_default()).title,
                                        style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(item.titleStyle),
                                        dangerouslySetInnerHTML: {
                                            __html: item.title
                                        }
                                    }),
                                    !!item.text && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(item.textStyle),
                                        dangerouslySetInnerHTML: {
                                            __html: item.text
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableText, {
                                spanClassName: classnames_default()((cms_editorial_square_index_module_default()).cta, {
                                    [(cms_editorial_square_index_module_default()).yslLink]: item.cta.template === "yslLink",
                                    [(cms_editorial_square_index_module_default()).yslPrimary]: item.cta.template === "yslPrimary"
                                }),
                                as: "span",
                                clickableConfig: {
                                    clickBehavior: item.cta.clickBehavior,
                                    style: item.cta.style,
                                    wording: item.cta.wording
                                },
                                openPanelDrawer: ()=>openPanelDrawer(item),
                                onClickLink: ()=>homepageCTAOnClick(item.cta.wording || "", index)
                            })
                        ]
                    }, "".concat(config.identifier, "|").concat(index)))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsDialog, {
                isVisible: isDialogVisible,
                onClose: ()=>{
                    setIsDialogVisible(false);
                    homepageCTAOnClick("");
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classnames_default()((cms_editorial_square_index_module_default()).dialogContent, "body-scroll-lock-ignore"),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsSourceItem, {
                            item: panelDrawerItem,
                            ratioOfImage: (panelDrawerItem === null || panelDrawerItem === void 0 ? void 0 : panelDrawerItem.ratioOfImage) || "",
                            DEFAULT_SQUARE_RATIO: "16/9",
                            isIframeClickable: true
                        }),
                        (!!(panelDrawerItem === null || panelDrawerItem === void 0 ? void 0 : panelDrawerItem.title) || !!(panelDrawerItem === null || panelDrawerItem === void 0 ? void 0 : panelDrawerItem.text)) && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classnames_default()((cms_editorial_square_index_module_default()).content, (cms_editorial_square_index_module_default()).textCon),
                            children: [
                                !!(panelDrawerItem === null || panelDrawerItem === void 0 ? void 0 : panelDrawerItem.title) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: (cms_editorial_square_index_module_default()).title,
                                    style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(panelDrawerItem === null || panelDrawerItem === void 0 ? void 0 : panelDrawerItem.titleStyle),
                                    dangerouslySetInnerHTML: {
                                        __html: panelDrawerItem === null || panelDrawerItem === void 0 ? void 0 : panelDrawerItem.title
                                    }
                                }),
                                !!(panelDrawerItem === null || panelDrawerItem === void 0 ? void 0 : panelDrawerItem.text) && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(panelDrawerItem === null || panelDrawerItem === void 0 ? void 0 : panelDrawerItem.textStyle),
                                    dangerouslySetInnerHTML: {
                                        __html: panelDrawerItem === null || panelDrawerItem === void 0 ? void 0 : panelDrawerItem.text
                                    }
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/cms/cms-editor-story/index.module.scss
var cms_editor_story_index_module = __webpack_require__(5474);
var cms_editor_story_index_module_default = /*#__PURE__*/__webpack_require__.n(cms_editor_story_index_module);
;// CONCATENATED MODULE: ./components/cms/cms-editor-story/index.tsx













const CmsEditorStory = (param)=>{
    let { config, componentIndex } = param;
    var _arrayOrEmpty;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const isMobile = currentDevice === use_get_device_type/* DeviceType */.Y.MOBILE;
    const isTablet = currentDevice === use_get_device_type/* DeviceType */.Y.TABLET;
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const list = currentDevice && config[currentDevice];
    const timerRef = (0,react.useRef)(null);
    const [itemHeight, setItemHeight] = (0,react.useState)(0);
    const [centeredTitleVisible, setCenteredTitleVisible] = (0,react.useState)(true);
    const controlledSwiper = (0,react.useRef)();
    const [currentSlideIndex, setCurrentSlideIndex] = (0,react.useState)(0);
    const { addQuery } = (0,use_query/* useQuery */.a)();
    const viewPortWidth = config["".concat(currentDevice, "ViewportWidth")];
    const getRatioOfImage = ()=>{
        if (!currentDevice) return "";
        return config["".concat(currentDevice, "RatioOfImage")];
    };
    (0,react.useEffect)(()=>{
        timerRef.current = setTimeout(()=>{
            const itemEl = document.querySelector(".cms-editor-story-".concat(config.identifier, "-0"));
            setItemHeight((itemEl === null || itemEl === void 0 ? void 0 : itemEl.offsetHeight) / 2 - 12);
        }, 100);
        return ()=>{
            timerRef.current && clearTimeout(timerRef.current);
        };
    }, [
        config.identifier,
        currentDevice
    ]);
    const openPanelDrawer = (index)=>{
        addQuery({
            otherQuery: {
                cmsDetailPanel: "".concat(config.identifier, "-").concat(index + 1)
            }
        });
    };
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    if (!list || !((_arrayOrEmpty = (0,index_esm/* arrayOrEmpty */.sq)(list)) === null || _arrayOrEmpty === void 0 ? void 0 : _arrayOrEmpty.length)) return null;
    const handleSwiperChange = (swiper)=>{
        setCurrentSlideIndex(swiper.realIndex);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: componentID,
        style: {
            ...paddingMargin
        },
        className: (cms_editor_story_index_module_default()).editorStory,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    width: viewPortWidth
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(scrollX_view/* ScrollXView */.g, {
                        listData: list,
                        swiperContainerClassName: (cms_editor_story_index_module_default()).swiperContainer,
                        swiperClassName: (cms_editor_story_index_module_default()).swiper,
                        swiperSlideClassName: (cms_editor_story_index_module_default()).swiperSlide,
                        arrowVisibleMode: isMobile || isTablet ? "hidden" : "hoverVisible",
                        swiperPrevClassName: (cms_editor_story_index_module_default()).prevIcon,
                        swiperNextClassName: (cms_editor_story_index_module_default()).nextIcon,
                        swiperPrevStyle: {
                            top: "".concat(itemHeight, "px")
                        },
                        swiperNextStyle: {
                            top: "".concat(itemHeight, "px")
                        },
                        loop: true,
                        speed: 700,
                        autoplay: config.autoplay ? {
                            delay: config.autoplayDuration ? Number(config.autoplayDuration) : 3000,
                            stopOnLastSlide: false,
                            disableOnInteraction: false
                        } : false,
                        controller: {
                            control: controlledSwiper.current
                        },
                        pagination: {
                            clickable: true
                        },
                        onSlideChange: handleSwiperChange,
                        items: (item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (cms_editor_story_index_module_default()).item,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(eagle_china_package_web_cms_dist/* Link */.rU, {
                                    clickBehavior: item.clickBehavior,
                                    onOpenPanelDrawer: ()=>openPanelDrawer(index),
                                    onClickLink: ()=>{
                                        var _item_image;
                                        return homepageCTAOnClick((item === null || item === void 0 ? void 0 : item.centeredTitle) || (item === null || item === void 0 ? void 0 : (_item_image = item.image) === null || _item_image === void 0 ? void 0 : _item_image.imageAlt) || "", index);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: "cms-editor-story-".concat(config.identifier, "-0"),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsSourceItem, {
                                                item: item,
                                                setCenteredTitleVisible: setCenteredTitleVisible,
                                                ratioOfImage: getRatioOfImage(),
                                                currentSlideIndex: currentSlideIndex,
                                                slideIndex: index,
                                                playIconRightPosition: isMobile ? 20 : 32,
                                                playIconBottomPosition: isMobile || isTablet ? 40 : 52,
                                                isVideoDisabled: item.clickBehavior.type !== "unClickable",
                                                basicImagePriority: true
                                            })
                                        }),
                                        !!item.centeredTitle && centeredTitleVisible && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: (cms_editor_story_index_module_default()).centeredTitle,
                                            style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(item.centeredTitleStyle),
                                            dangerouslySetInnerHTML: {
                                                __html: item.centeredTitle
                                            }
                                        })
                                    ]
                                })
                            }, "".concat(config.identifier, "|").concat(index))
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(scrollX_view/* ScrollXView */.g, {
                        swiperPrevId: "cms-editor-story-swiper-prev_".concat(config.identifier),
                        swiperNextId: "cms-editor-story-swiper-next_".concat(config.identifier),
                        listData: list,
                        swiperContainerClassName: (cms_editor_story_index_module_default()).swiperContainer,
                        swiperClassName: (cms_editor_story_index_module_default()).swiper,
                        swiperSlideClassName: (cms_editor_story_index_module_default()).swiperSlide,
                        effect: "fade",
                        loop: true,
                        speed: 700,
                        onSwiper: (swiper)=>controlledSwiper.current = swiper,
                        arrowVisibleMode: "hidden",
                        items: (item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: (cms_editor_story_index_module_default()).item,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* Link */.rU, {
                                    clickBehavior: item.clickBehavior,
                                    onOpenPanelDrawer: ()=>openPanelDrawer(index),
                                    onClickLink: ()=>homepageCTAOnClick((item === null || item === void 0 ? void 0 : item.text) || "", index),
                                    children: !!item.text && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: (cms_editor_story_index_module_default()).text,
                                        style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(item.textStyle),
                                        dangerouslySetInnerHTML: {
                                            __html: item.text
                                        }
                                    })
                                })
                            }, "".concat(config.identifier, "|").concat(index))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsDetailPanel, {
                list: list,
                identifier: config.identifier
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/cms/cms-look-carousel/index.module.scss
var cms_look_carousel_index_module = __webpack_require__(39775);
var cms_look_carousel_index_module_default = /*#__PURE__*/__webpack_require__.n(cms_look_carousel_index_module);
;// CONCATENATED MODULE: ./components/cms/cms-look-carousel/index.tsx












const SliderItem = (param)=>{
    let { item, setTitleVisible, componentIndex } = param;
    const { sliderType, video, image, sliderWidth } = item;
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    if (sliderType === "video") {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            style: {
                width: sliderWidth,
                height: "100%"
            },
            children: video.sourceType === "iframe" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsIframe, {
                iframeSrc: video.videoSrc,
                style: {
                    height: "100%",
                    // swiper 中阻止Iframe的鼠标事件 否则swiper无法滑动
                    pointerEvents: "none"
                }
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsVideo, {
                config: item,
                isClickable: true,
                setTitleVisible: setTitleVisible,
                brandControlBar: true,
                isFullScreen: true,
                videoFullDomHeight: true,
                videoCLick: homepageCTAOnClick
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
        tag: "img",
        alt: image === null || image === void 0 ? void 0 : image.imageAlt,
        src: (image === null || image === void 0 ? void 0 : image.imageUrl) || "",
        style: {
            objectFit: "contain"
        }
    });
};
const SliderItemContent = (param)=>{
    let { item, titleType, index, componentIndex, currentIndex, listLength, isMobile } = param;
    var _conditions_find;
    // title是否显示   (视频手动播放且有封面时，视频播放时，视频上方的标题消失)
    const [titleVisible, setTitleVisible] = (0,react.useState)(true);
    /**
   * @description 每次只加载当前slide的前10个以及后面10个，为了防止配置过多在ios上滑动网页崩溃
   * 1. 当前展示的slide的数量： currentIndex +-length
   * 2. 可供测试的cms id： 363
   */ const length = 10;
    const conditions = [
        {
            /** 当前slide的index处于开头 0至展示长度之间 */ conditionOne: currentIndex >= 0 && currentIndex <= length,
            /** 其余处于 currentIndex +-length 外的index数据使用空标签占位 */ conditionTwo: index < listLength - length + currentIndex && index > currentIndex + length
        },
        {
            /** 当前slide的index处于末尾  加上展示长度后大于数据长度时 */ conditionOne: currentIndex + length > listLength,
            /** 其余处于 currentIndex +-length 外的index 数据使用空标签占位 */ conditionTwo: index > currentIndex + length - listLength && index < currentIndex - length
        },
        {
            /** 除开头末尾的正常数据 */ conditionOne: true,
            /** 其余处于 currentIndex +-length 外的index 数据使用空标签占位 */ conditionTwo: index > currentIndex + length || index < currentIndex - length
        }
    ];
    if (((_conditions_find = conditions.find((condition)=>condition.conditionOne)) === null || _conditions_find === void 0 ? void 0 : _conditions_find.conditionTwo) && isMobile && listLength > 20) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (cms_look_carousel_index_module_default()).sliderItem,
            style: {
                width: item.sliderWidth
            }
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (cms_look_carousel_index_module_default()).itemWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SliderItem, {
                        componentIndex: componentIndex,
                        item: item,
                        setTitleVisible: setTitleVisible
                    }),
                    titleVisible && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: (cms_look_carousel_index_module_default()).centeredTitle,
                        style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(item.centeredTitleStyle),
                        dangerouslySetInnerHTML: {
                            __html: item.centeredTitle
                        }
                    })
                ]
            }),
            titleType === "text" ? item.text ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (cms_look_carousel_index_module_default()).title,
                style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(item.textStyle),
                dangerouslySetInnerHTML: {
                    __html: item.text
                }
            }) : null : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (cms_look_carousel_index_module_default()).title,
                children: [
                    "LOOK ",
                    index + 1
                ]
            })
        ]
    });
};
const SliderItemWrap = (props)=>{
    var _item_image, _item_image1;
    const { item, componentIndex, currentIndex } = props;
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    const handleCmsLinkClick = (0,react.useCallback)(()=>{
        var _item_image;
        homepageCTAOnClick((item === null || item === void 0 ? void 0 : item.centeredTitle) || ((_item_image = item.image) === null || _item_image === void 0 ? void 0 : _item_image.imageAlt) || "", currentIndex);
    }, [
        currentIndex,
        homepageCTAOnClick,
        (_item_image = item.image) === null || _item_image === void 0 ? void 0 : _item_image.imageAlt,
        item === null || item === void 0 ? void 0 : item.centeredTitle
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (cms_look_carousel_index_module_default()).sliderItem,
        style: {
            width: item.sliderWidth
        },
        children: item.sliderType === "video" ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SliderItemContent, {
            ...props
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* Link */.rU, {
            clickBehavior: (_item_image1 = item.image) === null || _item_image1 === void 0 ? void 0 : _item_image1.clickBehavior,
            onClickLink: handleCmsLinkClick,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SliderItemContent, {
                ...props
            })
        })
    });
};
const CmsLookCarousel = (param)=>{
    let { config, componentIndex } = param;
    /** 当前停留slide index */ const [currentIndex, setCurrentIndex] = (0,react.useState)(0);
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const componentID = getID(config);
    const isMobile = currentDevice === use_get_device_type/* DeviceType */.Y.MOBILE;
    const isTablet = currentDevice === use_get_device_type/* DeviceType */.Y.TABLET;
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const list = currentDevice && config[currentDevice];
    // 不同设备arrow color
    const arrowColor = currentDevice && config["".concat(currentDevice, "ArrowStyle")];
    // 不同设备title类型
    const titleType = currentDevice && config["".concat(currentDevice, "TitleStyle")];
    // 不同设备 slider间距
    const spaceBetween = isMobile ? 20 : isTablet ? 32 : 68;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        id: componentID,
        style: {
            ...paddingMargin
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (cms_look_carousel_index_module_default()).wrapper,
            children: list && /*#__PURE__*/ (0,jsx_runtime.jsx)(scrollX_view/* ScrollXView */.g, {
                listData: list,
                swiperNextClassName: (cms_look_carousel_index_module_default()).nextIcon,
                swiperPrevClassName: (cms_look_carousel_index_module_default()).prevIcon,
                swiperClassName: (cms_look_carousel_index_module_default()).swiper,
                swiperContainerClassName: (cms_look_carousel_index_module_default()).swiperContainer,
                swiperSlideClassName: (cms_look_carousel_index_module_default()).slide,
                loop: true,
                arrowColor: arrowColor,
                arrowVisibleMode: isMobile || isTablet ? "hidden" : "hoverVisible",
                items: (item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            padding: "0 ".concat(spaceBetween / 2, "px")
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SliderItemWrap, {
                            componentIndex: componentIndex,
                            item: item,
                            titleType: titleType,
                            index: index,
                            currentIndex: currentIndex,
                            listLength: list.length - 1,
                            isMobile: isMobile
                        })
                    }),
                freeMode: isMobile || isTablet ? {
                    momentumRatio: 0.8
                } : false,
                speed: isMobile || isTablet ? 2000 : 300,
                centeredSlides: true,
                onSlideChange: (slider)=>{
                    setCurrentIndex(slider.realIndex);
                }
            })
        })
    });
};

// EXTERNAL MODULE: ./components/cms/cms-recommend-products/index.module.scss
var cms_recommend_products_index_module = __webpack_require__(7326);
var cms_recommend_products_index_module_default = /*#__PURE__*/__webpack_require__.n(cms_recommend_products_index_module);
// EXTERNAL MODULE: ./features/product-card/index.tsx
var product_card = __webpack_require__(73210);
// EXTERNAL MODULE: ./features/product-card/index.module.scss
var product_card_index_module = __webpack_require__(55926);
var product_card_index_module_default = /*#__PURE__*/__webpack_require__.n(product_card_index_module);
;// CONCATENATED MODULE: ./components/cms/cms-recommend-products/index.tsx















const CmsRecommendProductsItem = (param)=>{
    let { item, index, onClick } = param;
    const wrapperRef = (0,use_view_item_list/* useViewItemList */.A)(item, index, "", false, "");
    return /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
        className: classnames_default()((cms_recommend_products_index_module_default()).item, (product_card_index_module_default()).simpleWrapper),
        href: (0,index_esm/* pathJoin */.Dy)("/products", item.url),
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            ref: wrapperRef,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(aspect_ratio_box/* AspectRatioBox */.U, {
                ratio: 4 / 5,
                className: (cms_recommend_products_index_module_default()).image,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                        className: (cms_recommend_products_index_module_default()).image,
                        alt: item.name,
                        src: item.defaultImage,
                        style: {
                            objectFit: "contain"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(product_card/* ProductInfo */.ww, {
                        product: item,
                        productInfoClassName: (cms_recommend_products_index_module_default()).productMainContent
                    })
                ]
            })
        })
    }, "".concat(item.name, "|").concat(index));
};
const CmsRecommendProducts = (param)=>{
    let { config } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const products = (0,react.useMemo)(()=>(config === null || config === void 0 ? void 0 : config.products) || [], [
        config
    ]);
    const { selectItem } = (0,use_map_sensors_events/* useMapSensorsEvents */.U)();
    const { onEvent } = (0,eagle_china_package_web_cms_dist/* useCMSConfig */.E0)();
    (0,react.useEffect)(()=>{
        (0,index_esm/* arrayOrEmpty */.sq)(products).length && onEvent(eagle_china_package_web_cms_dist/* EventType */.tw.componentInit, {
            component: config
        });
    }, [
        config,
        onEvent,
        products
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        id: componentID,
        style: {
            ...paddingMargin
        },
        children: [
            (config === null || config === void 0 ? void 0 : config.title) ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()((cms_recommend_products_index_module_default()).titleBox, (cms_recommend_products_index_module_default()).fontWeight),
                dangerouslySetInnerHTML: {
                    __html: config.title
                }
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: (cms_recommend_products_index_module_default()).content,
                children: (0,index_esm/* arrayOrEmpty */.sq)(products).map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CmsRecommendProductsItem, {
                        item: item,
                        index: index,
                        onClick: ()=>{
                            onEvent(eagle_china_package_web_cms_dist/* EventType */.tw.productClick, {
                                component: config,
                                product: item,
                                index: index
                            });
                            selectItem(item, index);
                        }
                    }, "".concat(item.name, "|").concat(index)))
            })
        ]
    });
};

// EXTERNAL MODULE: ./components/cms/cms-editorial-account-content/single-content.module.scss
var cms_editorial_account_content_single_content_module = __webpack_require__(27211);
var cms_editorial_account_content_single_content_module_default = /*#__PURE__*/__webpack_require__.n(cms_editorial_account_content_single_content_module);
// EXTERNAL MODULE: ./components/cms/cms-editorial-account-content/editable-content-item.module.scss
var cms_editorial_account_content_editable_content_item_module = __webpack_require__(17);
var cms_editorial_account_content_editable_content_item_module_default = /*#__PURE__*/__webpack_require__.n(cms_editorial_account_content_editable_content_item_module);
// EXTERNAL MODULE: ./components/rendered-node.tsx
var rendered_node = __webpack_require__(25351);
;// CONCATENATED MODULE: ./components/cms/cms-editorial-account-content/editable-content-item.tsx












const editable_content_item_DEFAULT_RATIO = "4/5";
const editable_content_item_Item = (param)=>{
    let { item, ratioOfImage, componentIndex } = param;
    const { video, image } = item;
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    const handleCmsLinkClick = (0,react.useCallback)(()=>{
        homepageCTAOnClick((image === null || image === void 0 ? void 0 : image.imageAlt) || "");
    }, [
        homepageCTAOnClick,
        image === null || image === void 0 ? void 0 : image.imageAlt
    ]);
    if (video) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsVideo, {
            isEditableContent: true,
            config: item,
            videoHeight: convertRatio(ratioOfImage) || editable_content_item_DEFAULT_RATIO,
            videoCLick: homepageCTAOnClick
        });
    } else if (image) {
        const { imageSource, imageClickBehavior, imageAlt } = image;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* Link */.rU, {
            clickBehavior: imageClickBehavior,
            onClickLink: handleCmsLinkClick,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(aspect_ratio_box/* AspectRatioBox */.U, {
                ratio: convertRatio(ratioOfImage) || editable_content_item_DEFAULT_RATIO,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(basic_image/* BasicImage */.t, {
                    alt: imageAlt,
                    src: imageSource || "",
                    style: {
                        objectPosition: "center top",
                        objectFit: "cover"
                    }
                })
            })
        });
    } else {
        return null;
    }
};
const cms_editorial_account_content_editable_content_item_EditableContentItem = (param)=>{
    let { editableContentItem, domWidth, source, componentIndex, currentSlideIndex } = param;
    const { homepageCTAOnClick } = useHomepageCTAOnClick(componentIndex);
    const handleCmsLinkClick = (0,react.useCallback)(()=>{
        homepageCTAOnClick(editableContentItem.cta.wording || "", currentSlideIndex);
    }, [
        homepageCTAOnClick,
        editableContentItem.cta.wording,
        currentSlideIndex
    ]);
    if (!editableContentItem) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (cms_editorial_account_content_editable_content_item_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (cms_editorial_account_content_editable_content_item_module_default()).editableContentItem,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                        vIf: editableContentItem.title.wording,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classnames_default()((cms_editorial_account_content_editable_content_item_module_default()).titleBox, (cms_editorial_account_content_editable_content_item_module_default()).fontWeight),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableText, {
                                as: "span",
                                cursorDefault: !editableContentItem.title.clickBehavior.url,
                                clickableConfig: {
                                    clickBehavior: editableContentItem.title.clickBehavior,
                                    style: editableContentItem.title.style,
                                    wording: editableContentItem.title.wording
                                },
                                onClickLink: handleCmsLinkClick
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(editable_content_item_Item, {
                        componentIndex: componentIndex,
                        item: editableContentItem,
                        ratioOfImage: domWidth === null || domWidth === void 0 ? void 0 : domWidth.ratioOfImage
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                vIf: editableContentItem.text.wording,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classnames_default()((cms_editorial_account_content_editable_content_item_module_default()).text, source === "double" ? (cms_editorial_account_content_editable_content_item_module_default()).double : ""),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        style: (0,eagle_china_package_web_cms_dist/* normalizeTextStyle */.tT)(editableContentItem.text.style),
                        dangerouslySetInnerHTML: {
                            __html: editableContentItem.text.wording
                        }
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(rendered_node/* RenderedNode */.r, {
                vIf: editableContentItem.cta.wording,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableText, {
                    as: "div",
                    linkClassName: classnames_default()((cms_editorial_account_content_editable_content_item_module_default()).cta),
                    divClassName: classnames_default()((cms_editorial_account_content_editable_content_item_module_default()).catText),
                    cursorDefault: !editableContentItem.cta.clickBehavior.url,
                    clickableConfig: {
                        clickBehavior: editableContentItem.cta.clickBehavior,
                        style: editableContentItem.cta.style,
                        wording: editableContentItem.cta.wording
                    },
                    onClickLink: handleCmsLinkClick
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/cms/cms-editorial-account-content/single-content.tsx




const single_content_SingleContent = (param)=>{
    let { item, domWidth, componentIndex } = param;
    if (!item) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: item.list.map((i, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()((cms_editorial_account_content_single_content_module_default()).item),
                style: (domWidth === null || domWidth === void 0 ? void 0 : domWidth.elementWidth) ? {
                    width: domWidth.elementWidth
                } : {},
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(cms_editorial_account_content_editable_content_item_EditableContentItem, {
                    componentIndex: componentIndex,
                    currentSlideIndex: index,
                    editableContentItem: i,
                    domWidth: domWidth
                })
            }, index))
    });
};

// EXTERNAL MODULE: ./components/cms/cms-editorial-account-content/double-content.module.scss
var cms_editorial_account_content_double_content_module = __webpack_require__(53918);
var cms_editorial_account_content_double_content_module_default = /*#__PURE__*/__webpack_require__.n(cms_editorial_account_content_double_content_module);
;// CONCATENATED MODULE: ./components/cms/cms-editorial-account-content/double-content.tsx






const double_content_DoubleContent = (param)=>{
    let { item, domWidth, componentIndex } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    if (!item) return null;
    // 一行两个
    const isDesktopLayout = currentDevice === use_get_device_type/* DeviceType */.Y.DESKTOP || currentDevice === "large";
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()((cms_editorial_account_content_double_content_module_default()).container),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classnames_default()((cms_editorial_account_content_double_content_module_default()).wrapper, {
                [(cms_editorial_account_content_double_content_module_default()).desktopLayout]: isDesktopLayout
            }),
            style: (domWidth === null || domWidth === void 0 ? void 0 : domWidth.blockPadding) ? {
                columnGap: domWidth.blockPadding,
                rowGap: domWidth.blockPadding
            } : {},
            children: item.list.map((i, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: (cms_editorial_account_content_double_content_module_default()).item,
                    style: domWidth.elementWidth ? {
                        width: domWidth.elementWidth
                    } : {},
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(cms_editorial_account_content_editable_content_item_EditableContentItem, {
                        componentIndex: componentIndex,
                        currentSlideIndex: index,
                        editableContentItem: i,
                        domWidth: domWidth,
                        source: "double"
                    })
                }, index))
        })
    });
};

;// CONCATENATED MODULE: ./components/cms/cms-editorial-account-content/index.tsx







const CmsEditorialAccountContent = (param)=>{
    let { config, componentIndex } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const domWidth = (0,react.useMemo)(()=>{
        if (!currentDevice) return {
            elementWidth: "",
            ratioOfImage: "",
            blockPadding: ""
        };
        return config[currentDevice];
    }, [
        config,
        currentDevice
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        id: componentID,
        style: {
            ...paddingMargin
        },
        children: config.template === eagle_china_package_web_cms_dist/* IEditorialAccountContent */.xy.SlideTemplate.SingleContent ? /*#__PURE__*/ (0,jsx_runtime.jsx)(single_content_SingleContent, {
            componentIndex: componentIndex,
            item: config,
            domWidth: domWidth
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(double_content_DoubleContent, {
            componentIndex: componentIndex,
            item: config,
            domWidth: domWidth
        })
    });
};

// EXTERNAL MODULE: ./features/category/enum.ts
var category_enum = __webpack_require__(58020);
;// CONCATENATED MODULE: ./components/cms/cms-product/index.tsx








const CmsProduct = (param)=>{
    let { config } = param;
    const { currentDevice } = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const componentID = getID(config);
    const paddingMargin = getPaddingMarginStyle(config, currentDevice);
    const { onEvent } = (0,eagle_china_package_web_cms_dist/* useCMSConfig */.E0)();
    const { selectItem } = (0,use_map_sensors_events/* useMapSensorsEvents */.U)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        id: componentID,
        style: {
            ...paddingMargin
        },
        children: config.template === eagle_china_package_web_cms_dist/* IProductComponent */.Z1.ProductTemplate.YSL_PLP ? /*#__PURE__*/ (0,jsx_runtime.jsx)(product_card/* ProductCard */.Il, {
            product: config.products[0],
            index: 1,
            isNameVisible: config.productStatus.productName,
            isPriceVisible: config.productStatus.price,
            isColorVisible: config.productStatus.color,
            isTagVisible: config.productStatus.tag
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsProductCardsItem, {
            backgroundColor: category_enum/* PRODUCT_CARD_BACKGROUND_COLOR */.$6,
            item: config.products[0],
            onClick: ()=>{
                onEvent(eagle_china_package_web_cms_dist/* EventType */.tw.productClick, {
                    component: config,
                    product: config.products[0],
                    index: 1
                });
                selectItem(config.products[0], 1);
            },
            isCmsProduct: true
        })
    });
};

;// CONCATENATED MODULE: ./components/cms/cms-slider/index.tsx



const CmsSlider = (param)=>{
    let { config, isGrid } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* Slider */.iR, {
        config: config,
        isGrid: isGrid,
        items: (item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CmsHorizontalSingle, {
                config: item,
                isGrid: isGrid,
                isInSlider: true,
                iframeInSwiper: true
            }, index)
    });
};

// EXTERNAL MODULE: ./adapters/sensors/index.tsx + 2 modules
var sensors = __webpack_require__(64068);
;// CONCATENATED MODULE: ./components/cms/cms.tsx


































/** 埋点处理，可由使用组件的页面主动传入 */ const analyticsForLive = {
    onCTAClick () {},
    componentInit () {},
    productClick () {},
    homepageCTAOnClick () {}
};
const CMSComponent = (param)=>{
    let { className, enableHeaderChanging = true, inline = true, components: componentList, title, identifier, isPreview = false, analytics = analyticsForLive, isGrid = false, isCategoryPreviewPage = false } = param;
    var _components__device_currentDevice_components__device_currentDevice_assetType, _components__device_currentDevice, _components__device_currentDevice1;
    const headerConfig = (0,hooks/* useAppSelector */.C)(customized_header/* getHeaderConfig */.Mq);
    const isHeaderDataBack = (0,hooks/* useAppSelector */.C)(customized_header/* getIsHeaderDataBack */.d6);
    const { informativeBannerHeight, headerHeight, informativeOccupyPosition } = (0,module_height/* useModuleHeight */.l)();
    const router = (0,next_router.useRouter)();
    const { startLoading, finishLoading } = (0,loading/* useLoading */.r$)();
    const cmsRef = (0,react.useRef)(null);
    const [keyToRefresh, setKeyToRefresh] = (0,react.useState)(0);
    const isMounted = (0,react.useRef)(false);
    const { isMobile } = (0,use_breakpoints/* useBreakpoints */.k)();
    const cmsHeaderChangeConfigRef = (0,react.useRef)("");
    const { setIsNewsletterVisible, setSubscriptionLocation } = (0,newsletter/* useNewsletter */.u)();
    const device = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    const { videoEvent } = (0,gtm_adapter/* useGtm */.u)();
    const { videoProgress } = (0,sensors/* useSensors */.D)();
    const components = (0,react.useMemo)(()=>{
        const cmsComponents = (0,eagle_china_package_web_cms_dist/* filterAndMapToGridComponent */.U8)(componentList);
        return cmsComponents;
    }, [
        componentList
    ]);
    const cmsHeaderChangeConfig = (0,react.useMemo)(()=>{
        var _headerConfig_, _headerConfig_1, _headerConfig_2, _headerConfig_3;
        const defaultTextColor = ((_headerConfig_ = headerConfig[0]) === null || _headerConfig_ === void 0 ? void 0 : _headerConfig_.theme) === dist/* HeaderThemeType */.IU.LIGHT ? "#FFF" : "#000";
        const defaultBgColor = ((_headerConfig_1 = headerConfig[0]) === null || _headerConfig_1 === void 0 ? void 0 : _headerConfig_1.theme) === dist/* HeaderThemeType */.IU.LIGHT ? "#000" : "#FFF";
        const changedTextColor = ((_headerConfig_2 = headerConfig[1]) === null || _headerConfig_2 === void 0 ? void 0 : _headerConfig_2.theme) === dist/* HeaderThemeType */.IU.DARK ? "#000" : "#FFF";
        const changedBgColor = ((_headerConfig_3 = headerConfig[1]) === null || _headerConfig_3 === void 0 ? void 0 : _headerConfig_3.theme) === dist/* HeaderThemeType */.IU.DARK ? "#FFF" : "#000";
        const headerChangeConfig = {
            defaultTextColor,
            defaultBgColor,
            changedTextColor,
            changedBgColor
        };
        if (cmsHeaderChangeConfigRef.current !== JSON.stringify(headerChangeConfig)) {
            setKeyToRefresh((prev)=>prev + 1);
        }
        cmsHeaderChangeConfigRef.current = JSON.stringify(headerChangeConfig);
        return headerChangeConfig;
    }, [
        headerConfig
    ]);
    const isSlideInFullScreen = (0,react.useMemo)(()=>{
        var _components_, _components_1;
        return (components === null || components === void 0 ? void 0 : (_components_ = components[0]) === null || _components_ === void 0 ? void 0 : _components_.type) === "editableContent" && (components === null || components === void 0 ? void 0 : (_components_1 = components[0]) === null || _components_1 === void 0 ? void 0 : _components_1.slideInFullScreen);
    }, [
        components
    ]);
    const setSubscriptionLocationForNewsletter = (0,react.useCallback)(()=>{
        try {
            setSubscriptionLocation(router.pathname === "/" ? "subscription from homepage" : "subscription from a block");
        } catch (error) {
            console.error("[error][setSubscriptionLocationForNewsletter]", error);
        }
    }, [
        router.pathname,
        setSubscriptionLocation
    ]);
    (0,react.useEffect)(()=>{
        if (!(router === null || router === void 0 ? void 0 : router.isReady)) return;
        if (isMounted.current) {
            setKeyToRefresh((prev)=>prev + 1);
        } else {
            isMounted.current = true;
        }
    }, [
        router === null || router === void 0 ? void 0 : router.isReady,
        router.pathname
    ]);
    const loadMore = (0,react.useCallback)(async (blockIdentifier, page)=>{
        const fn = isPreview ? dist/* api */.hi.cms.getPagePreviewByID : dist/* api */.hi.cms.getPageDetailByID;
        const { data: res } = await fn(identifier, {
            page,
            blockId: blockIdentifier
        });
        if ((res === null || res === void 0 ? void 0 : res.status) && (0,index_esm/* arrayOrEmpty */.sq)(res.data.children) && (0,index_esm/* arrayOrEmpty */.sq)(res.data.children).length) {
            return res.data.children[0];
        }
        throw Error();
    }, [
        identifier,
        isPreview
    ]);
    const onEvent = (0,react.useCallback)((event, payload)=>{
        const payloadWithText = payload;
        const payloadWithStatus = payload;
        switch(event){
            case eagle_china_package_web_cms_dist/* EventType */.tw.videoProgress:
                var _getPlpOrPdpCategory;
                videoProgress({
                    item_category: ((_getPlpOrPdpCategory = (0,services/* getPlpOrPdpCategory */.Sq)()) === null || _getPlpOrPdpCategory === void 0 ? void 0 : _getPlpOrPdpCategory.item_category) || "",
                    video_action: "Play,".concat((payload === null || payload === void 0 ? void 0 : payload.progress) || 0, "%"),
                    video_label: (payload === null || payload === void 0 ? void 0 : payload.text) || ""
                });
                break;
            case eagle_china_package_web_cms_dist/* EventType */.tw.ctaClick:
                var _analytics_onCTAClick;
                (_analytics_onCTAClick = analytics.onCTAClick) === null || _analytics_onCTAClick === void 0 ? void 0 : _analytics_onCTAClick.call(analytics, payloadWithText.index || 0, payloadWithText.text);
                break;
            case eagle_china_package_web_cms_dist/* EventType */.tw.video:
                videoEvent({
                    videoLabel: payloadWithStatus.title,
                    videoAction: payloadWithStatus.status === "pause" ? "pause" : "plays",
                    videoValue: ""
                });
                break;
            case eagle_china_package_web_cms_dist/* EventType */.tw.newsletter:
                setSubscriptionLocationForNewsletter();
                setIsNewsletterVisible(true);
                break;
            case eagle_china_package_web_cms_dist/* EventType */.tw.startLoading:
                startLoading();
                break;
            case eagle_china_package_web_cms_dist/* EventType */.tw.finishLoading:
                finishLoading();
                break;
            case eagle_china_package_web_cms_dist/* EventType */.tw.componentInit:
                var _analytics_componentInit;
                (_analytics_componentInit = analytics.componentInit) === null || _analytics_componentInit === void 0 ? void 0 : _analytics_componentInit.call(analytics, payload);
                break;
            case eagle_china_package_web_cms_dist/* EventType */.tw.productClick:
                var _analytics_productClick;
                (_analytics_productClick = analytics.productClick) === null || _analytics_productClick === void 0 ? void 0 : _analytics_productClick.call(analytics, payload);
                break;
            case eagle_china_package_web_cms_dist/* EventType */.tw.homepageCTAOnClick:
                var _analytics_homepageCTAOnClick;
                (_analytics_homepageCTAOnClick = analytics.homepageCTAOnClick) === null || _analytics_homepageCTAOnClick === void 0 ? void 0 : _analytics_homepageCTAOnClick.call(analytics, payload);
                break;
            default:
                console.log("unsolved event: ", event);
        }
    }, [
        analytics,
        components,
        startLoading,
        finishLoading
    ]);
    const renderComponents = (components)=>{
        return (0,index_esm/* arrayOrEmpty */.sq)(components).map((component, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            height: "0"
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            id: "position-".concat(component.identifier, "-anchorPoint"),
                            className: (cms_module_default()).anchorPoint
                        })
                    }),
                    (()=>{
                        switch(component.type){
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.Grid:
                                {
                                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* GridComponent */.Mw, {
                                        config: component,
                                        componentIndex: index,
                                        CMSComponent: CMSComponent
                                    }, "".concat(index));
                                }
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.CTA:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsCTA, {
                                    config: component,
                                    componentIndex: index
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.editableContent:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsEditableContent, {
                                    config: component,
                                    componentIndex: index
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.secondMenu:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsSecondMenu, {
                                    componentIndex: index,
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.productCards:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsProductCards, {
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.redirection:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsRedirection, {
                                    componentIndex: index,
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.horizontalSingle:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsHorizontalSingle, {
                                    componentIndex: index,
                                    config: component,
                                    isGrid: isGrid
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.paragraph:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* Paragraph */.nv, {
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.lookContent:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsLookContent, {
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.visualCard:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsVisualCard, {
                                    componentIndex: index,
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.editorTimeline:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsEditorTimeline, {
                                    componentIndex: index,
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.editorialSquare:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsEditorialSquare, {
                                    componentIndex: index,
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.editorStory:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsEditorStory, {
                                    componentIndex: index,
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.flexible:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* Flexible */.eO, {
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.lookCarousel:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsLookCarousel, {
                                    componentIndex: index,
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.recommendProducts:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsRecommendProducts, {
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.editorialAccountContent:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsEditorialAccountContent, {
                                    componentIndex: index,
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.product:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsProduct, {
                                    config: component
                                }, "".concat(index));
                            case eagle_china_package_web_cms_dist/* ComponentType */.re.slider:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CmsSlider, {
                                    isGrid: isGrid,
                                    config: component
                                }, "".concat(index));
                            default:
                                return undefined;
                        }
                    })()
                ]
            }, "".concat(index));
        });
    };
    const cmsConfigProps = {
        brand: "ysl",
        brandName: constant/* BrandName */.rV,
        pageTitle: "".concat(title, " | ").concat(constant/* BrandName */.rV),
        loadMore: loadMore,
        onEvent: onEvent,
        /** 顶部 banner 的高度，影响全高元素、headerChange 计算 */ bannerHeight: informativeOccupyPosition ? informativeBannerHeight || 0 : 0,
        /** 检测区域高度 72 */ headerHeight: headerHeight || 72,
        /** 桌面端检测位置 header 的 25 - 60 位置， 移动端 16 - 35 */ verticalIntersectionDetectStart: isMobile ? 14 * window.innerWidth / 390 : 20,
        /** 桌面端检测位置 header 的 25 - 60 位置， 移动端 16 - 35 */ verticalIntersectionDetectEnd: isMobile ? 46 * window.innerWidth / 390 : 52,
        componentsRender: renderComponents,
        enableHeaderChanging: enableHeaderChanging && isHeaderDataBack,
        ...cmsHeaderChangeConfig,
        largeDesktopMinWidth: 1366
    };
    // 由于页面依赖header数据，防止header数据未请求到，页面会先render一次，预览页面没有header，所以预览页面不需要进入这个判断
    if (!isHeaderDataBack && !isCategoryPreviewPage) return null;
    // 在grid中的组件，并且组件设置了fullWidthFullHeight，则高度设置为100%（目前是slider和horizontalSingle）
    const cmsInGridStyle = isGrid && (0,index_esm/* arrayOrEmpty */.sq)(components).length === 1 ? components[0].type === eagle_china_package_web_cms_dist/* ComponentType */.re.horizontalSingle && ((_components__device_currentDevice1 = components[0][device.currentDevice]) === null || _components__device_currentDevice1 === void 0 ? void 0 : (_components__device_currentDevice_components__device_currentDevice_assetType = _components__device_currentDevice1[(_components__device_currentDevice = components[0][device.currentDevice]) === null || _components__device_currentDevice === void 0 ? void 0 : _components__device_currentDevice.assetType]) === null || _components__device_currentDevice_components__device_currentDevice_assetType === void 0 ? void 0 : _components__device_currentDevice_components__device_currentDevice_assetType.displayMode) === "fullWidthFullHeight" || components[0].type === eagle_china_package_web_cms_dist/* ComponentType */.re.slider && components[0].displayMode === "fullWidthFullHeight" ? {
        height: "100%"
    } : {} : {};
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()(className, (cms_module_default()).cms),
        ref: cmsRef,
        style: cmsInGridStyle,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(eagle_china_package_web_cms_dist/* CMSConfigProvider */.HI, {
            ...cmsConfigProps,
            children: [
                inline && /*#__PURE__*/ (0,jsx_runtime.jsx)(DynamicHeaderInlinePlaceHolder, {}),
                renderComponents(components),
                !isSlideInFullScreen && /*#__PURE__*/ (0,jsx_runtime.jsx)(DynamicHeaderInlinePlaceHolder, {
                    isStart: false
                })
            ]
        })
    }, keyToRefresh);
};
function DynamicHeaderInlinePlaceHolder(param) {
    let { isStart = true } = param;
    const addDynamicHeader = (0,eagle_china_package_web_cms_dist/* useDynamicHeader */.vT)();
    const device = (0,eagle_china_package_web_cms_dist/* useDeviceType */.hU)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(eagle_china_package_web_cms_dist/* DynamicHeaderContainer */.h9, {
        addDynamicHeader: addDynamicHeader,
        currentDevice: device.currentDevice,
        headerChangingOffset: 0,
        headerChanging: false,
        className: isStart ? (cms_module_default()).cmsInlineStartContent : (cms_module_default()).cmsInlineEndContent,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (cms_module_default()).cmsInlinePlaceHolder
        })
    });
}


/***/ }),

/***/ 73524:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: function() { return /* binding */ useQuery; }
/* harmony export */ });
/* harmony import */ var _kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80811);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69132);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50959);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5899);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86763);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);





/**
 * 自定义 Hook，用于处理 URL 查询参数的增删操作
 */ const useQuery = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    /**
   * @description 删除指定查询参数的回调函数
   * @param pathnamePre 当前页面的地址
   * @param key string | array, 要删除的参数
   * @param options router配置选项的可选对象
   * @returns void
   */ const deleteQuery = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((param)=>{
        let { pathnamePre, key, options } = param;
        var _router_query_url, _router_query;
        if (!key) return;
        const url = ((_router_query = router.query) === null || _router_query === void 0 ? void 0 : (_router_query_url = _router_query.url) === null || _router_query_url === void 0 ? void 0 : _router_query_url.join("/")) || "";
        const query = (0,_kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_0__/* .getQueryWithoutUrl */ .Z7)(router.query);
        if (Array.isArray(key)) {
            key.forEach((k)=>delete query[k]);
        } else if (typeof key === "string") {
            delete query[key];
        }
        const updatedUrl = (0,_kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_0__/* .getUrlWithQuery */ .bT)(url, query);
        if (pathnamePre && window.location.pathname.startsWith(pathnamePre)) {
            var _options_scroll, _options_shallow;
            router.replace(updatedUrl, undefined, {
                scroll: (_options_scroll = options === null || options === void 0 ? void 0 : options.scroll) !== null && _options_scroll !== void 0 ? _options_scroll : false,
                shallow: (_options_shallow = options === null || options === void 0 ? void 0 : options.shallow) !== null && _options_shallow !== void 0 ? _options_shallow : true
            });
        } else {
            var _options_scroll1, _options_shallow1;
            router.replace(updatedUrl, undefined, {
                scroll: (_options_scroll1 = options === null || options === void 0 ? void 0 : options.scroll) !== null && _options_scroll1 !== void 0 ? _options_scroll1 : false,
                shallow: (_options_shallow1 = options === null || options === void 0 ? void 0 : options.shallow) !== null && _options_shallow1 !== void 0 ? _options_shallow1 : true
            });
        }
    }, [
        router
    ]);
    /**
   * 添加额外的查询参数的回调函数
   */ /**
   * @description 添加额外的查询参数的回调函数
   * @param pathnamePre 当前页面的地址
   * @param otherQuery 要删除的参数
   * @param options router配置选项的可选对象
   * @param isExtendBeforeQuery 是否需要继承之前 url 的 query 数据,默认 true
   * @returns void
   */ const addQuery = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(// 地址栏短时间内多次调用 replace 会有问题，会导致返回上一页无效
    lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()((param)=>{
        let { pathnamePre, otherQuery = {}, options, isExtendBeforeQuery = true } = param;
        var _Object_keys, _router_query_url, _router_query;
        if (((_Object_keys = Object.keys(otherQuery)) === null || _Object_keys === void 0 ? void 0 : _Object_keys.length) == 0) return;
        const url = ((_router_query = router.query) === null || _router_query === void 0 ? void 0 : (_router_query_url = _router_query.url) === null || _router_query_url === void 0 ? void 0 : _router_query_url.join("/")) || "";
        let query = (0,_kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_0__/* .getQueryWithoutUrl */ .Z7)(router.query);
        if (lodash_isequal__WEBPACK_IMPORTED_MODULE_3___default()(query, otherQuery)) return;
        if (isExtendBeforeQuery) {
            query = {
                ...query,
                ...otherQuery
            };
        } else {
            query = otherQuery;
        }
        const updatedUrl = (0,_kering_technologies_ec_china_package_utils__WEBPACK_IMPORTED_MODULE_0__/* .getUrlWithQuery */ .bT)(url, query);
        if (pathnamePre && window.location.pathname.startsWith(pathnamePre)) {
            var _options_scroll, _options_shallow;
            router.replace(updatedUrl, undefined, {
                scroll: (_options_scroll = options === null || options === void 0 ? void 0 : options.scroll) !== null && _options_scroll !== void 0 ? _options_scroll : false,
                shallow: (_options_shallow = options === null || options === void 0 ? void 0 : options.shallow) !== null && _options_shallow !== void 0 ? _options_shallow : true
            });
        } else {
            var _options_scroll1, _options_shallow1;
            router.replace(updatedUrl, undefined, {
                scroll: (_options_scroll1 = options === null || options === void 0 ? void 0 : options.scroll) !== null && _options_scroll1 !== void 0 ? _options_scroll1 : false,
                shallow: (_options_shallow1 = options === null || options === void 0 ? void 0 : options.shallow) !== null && _options_shallow1 !== void 0 ? _options_shallow1 : true
            });
        }
    }, 500), [
        router
    ]);
    return {
        deleteQuery,
        addQuery
    };
};


/***/ }),

/***/ 62529:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"clickable-text_textFontWeight__O_zsl","cursorDefault":"clickable-text_cursorDefault__yDTm1","button-hover":"clickable-text_button-hover__5wsgC"};

/***/ }),

/***/ 23337:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-cta_textFontWeight__8qbtx","yslLink":"cms-cta_yslLink__tJMTv","yslPrimary":"cms-cta_yslPrimary__STE4p","unClickable":"cms-cta_unClickable__1ocvR","isCursor":"cms-cta_isCursor__B_cCI","button-hover":"cms-cta_button-hover__nlTXV"};

/***/ }),

/***/ 2822:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-detail-panel_textFontWeight__w6dHp","wrapper":"cms-detail-panel_wrapper__q9H7_","hide":"cms-detail-panel_hide__hzo_T","show":"cms-detail-panel_show__j6C12","content":"cms-detail-panel_content____IfY","closeIcon":"cms-detail-panel_closeIcon___0K4O","item":"cms-detail-panel_item__JvXtM","swiperContainer":"cms-detail-panel_swiperContainer__jpjaS","imageContainer":"cms-detail-panel_imageContainer___WHx4","iframeContainer":"cms-detail-panel_iframeContainer__UC5Eb","image":"cms-detail-panel_image__L6Nnl","iframe":"cms-detail-panel_iframe__jIIQU","override":"cms-detail-panel_override__J9qhs","swiper":"cms-detail-panel_swiper___uss_","left":"cms-detail-panel_left__cGzGo","right":"cms-detail-panel_right__2Shy5","rightTop":"cms-detail-panel_rightTop__y_2n2","centeredTitle":"cms-detail-panel_centeredTitle__6wK0z","prevIcon":"cms-detail-panel_prevIcon__B9QE_","nextIcon":"cms-detail-panel_nextIcon__PedLH","rightBottom":"cms-detail-panel_rightBottom__9YfUL","isCursor":"cms-detail-panel_isCursor__ON5ci","redirectionTitle":"cms-detail-panel_redirectionTitle__OEOz_","redirectionLabelText":"cms-detail-panel_redirectionLabelText__19XCN","button-hover":"cms-detail-panel_button-hover__bFsYS"};

/***/ }),

/***/ 74655:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-dialog_textFontWeight__MKgyA","wrapper":"cms-dialog_wrapper__168z1","content":"cms-dialog_content__vCZze","hide":"cms-dialog_hide__XJ6pc","show":"cms-dialog_show__B18Pa","closeIcon":"cms-dialog_closeIcon___b_nx","button-hover":"cms-dialog_button-hover__4P3Y3","contentHide":"cms-dialog_contentHide__2qfjk","contentShow":"cms-dialog_contentShow__iaK_j"};

/***/ }),

/***/ 65182:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"double-content_textFontWeight__Q_rxx","item":"double-content_item__St9pd","wrapper":"double-content_wrapper__CYOKl","desktopOrTablet2Layout":"double-content_desktopOrTablet2Layout__jCpR5","container":"double-content_container__YAQmC","isFullScreen":"double-content_isFullScreen__KlCrV","ratio4x5":"double-content_ratio4x5__OZ0A2","button-hover":"double-content_button-hover__yt2VF"};

/***/ }),

/***/ 30662:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"editable-content-item_textFontWeight__6Dtq7","wordContent":"editable-content-item_wordContent__wWhKm","isFullScreen":"editable-content-item_isFullScreen__IJ4AQ","title":"editable-content-item_title__zESiW","linkCta":"editable-content-item_linkCta__VnT0W","yslLink":"editable-content-item_yslLink__3JWtP","yslPrimary":"editable-content-item_yslPrimary__crgPJ","productInfo":"editable-content-item_productInfo__7GVXe","editableContentItem":"editable-content-item_editableContentItem__0jm54","centeredTitle":"editable-content-item_centeredTitle__Jyl8H","name":"editable-content-item_name__B4Pwt","iframe":"editable-content-item_iframe__UQpXC","markDownPrice":"editable-content-item_markDownPrice__kLbPg","isFullScreenEle":"editable-content-item_isFullScreenEle__Nw9CK","ratio4x5":"editable-content-item_ratio4x5__O2Ley","videoWrapper":"editable-content-item_videoWrapper__KGKz9","button-hover":"editable-content-item_button-hover__uyIW5"};

/***/ }),

/***/ 29128:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"editable-in-full-screen_textFontWeight__yfFux","swiper":"editable-in-full-screen_swiper__Qw47T","swiperSlide":"editable-in-full-screen_swiperSlide__zQfGz","scrollArrow":"editable-in-full-screen_scrollArrow__MrMst","item":"editable-in-full-screen_item__7so8i","lastSwiperSlide":"editable-in-full-screen_lastSwiperSlide__atk2d","button-hover":"editable-in-full-screen_button-hover__ZDKy3"};

/***/ }),

/***/ 36279:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"full-width_textFontWeight__TI4pQ","item":"full-width_item__wft25","centeredTitle":"full-width_centeredTitle__wHq6b","logoContent":"full-width_logoContent__tXpFj","logo":"full-width_logo__KmZkF","isAnimation":"full-width_isAnimation__2cxs6","fade-in":"full-width_fade-in__joZ9_","wordContent":"full-width_wordContent__ZZjnr","linkCta":"full-width_linkCta__6qRpp","yslLink":"full-width_yslLink__ZCt_D","yslPrimary":"full-width_yslPrimary__JdweH","imgCon":"full-width_imgCon__YqSMe","cmsIframe":"full-width_cmsIframe__vgpCu","fullWidthFullHeight":"full-width_fullWidthFullHeight__HI2MY","isFullScreen":"full-width_isFullScreen__fnbmF","button-hover":"full-width_button-hover__Jm0hf"};

/***/ }),

/***/ 60149:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"single-content_textFontWeight__yfM8b","wrapper":"single-content_wrapper__aSvdu","item":"single-content_item__ocgct","isFullScreen":"single-content_isFullScreen__i7g2S","ratio4x5":"single-content_ratio4x5__AlObe","button-hover":"single-content_button-hover__x3AjC"};

/***/ }),

/***/ 5474:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-editor-story_textFontWeight__GCAjM","swiperSlide":"cms-editor-story_swiperSlide__a3575","editorStory":"cms-editor-story_editorStory__mKUlD","swiperContainer":"cms-editor-story_swiperContainer__aSBrQ","prevIcon":"cms-editor-story_prevIcon__AjGBd","nextIcon":"cms-editor-story_nextIcon___tai4","item":"cms-editor-story_item__dHXue","centeredTitle":"cms-editor-story_centeredTitle__s8_4s","text":"cms-editor-story_text__82k9a","button-hover":"cms-editor-story_button-hover__j2WUk"};

/***/ }),

/***/ 239:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-editor-timeline_textFontWeight__bQM29","swiperSlide":"cms-editor-timeline_swiperSlide__6w78s","editorTimelineItem":"cms-editor-timeline_editorTimelineItem__vAjAB","year":"cms-editor-timeline_year__d6SuZ","title":"cms-editor-timeline_title__Bk4nT","description":"cms-editor-timeline_description__6V0T8","overStyle":"cms-editor-timeline_overStyle__lZk_s","readMore":"cms-editor-timeline_readMore__Y5GEH","readMoreBorder":"cms-editor-timeline_readMoreBorder__ck8V7","button-hover":"cms-editor-timeline_button-hover__6bgV9"};

/***/ }),

/***/ 53918:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"double-content_textFontWeight__Hum_Y","item":"double-content_item__CXLCV","wrapper":"double-content_wrapper__uhSbQ","desktopLayout":"double-content_desktopLayout__KtaOh","container":"double-content_container__VNy_M","button-hover":"double-content_button-hover__uGmha"};

/***/ }),

/***/ 17:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"editable-content-item_textFontWeight__L3CJk","wrapper":"editable-content-item_wrapper__s4s1O","title":"editable-content-item_title__m8GSR","editableContentItem":"editable-content-item_editableContentItem__vUpx1","titleBox":"editable-content-item_titleBox__nV2qC","fontWeight":"editable-content-item_fontWeight__uowD_","text":"editable-content-item_text__VzM1n","double":"editable-content-item_double__n3MuF","cta":"editable-content-item_cta__ogKBJ","catText":"editable-content-item_catText__RCXx_","button-hover":"editable-content-item_button-hover__DFn3g"};

/***/ }),

/***/ 27211:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"single-content_textFontWeight__yz8Uy","item":"single-content_item__yUKMb","button-hover":"single-content_button-hover__xT1Kc"};

/***/ }),

/***/ 9384:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-editorial-square_textFontWeight__B4A8J","wrapper":"cms-editorial-square_wrapper__gLEA0","content":"cms-editorial-square_content__oJLRr","cta":"cms-editorial-square_cta__wUCkd","yslLink":"cms-editorial-square_yslLink__qs3qs","yslPrimary":"cms-editorial-square_yslPrimary__m1Mvm","dialogContent":"cms-editorial-square_dialogContent__w8Z2w","textCon":"cms-editorial-square_textCon__FEeHf","title":"cms-editorial-square_title__c7Y45","button-hover":"cms-editorial-square_button-hover__JBmHC"};

/***/ }),

/***/ 53239:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-horizontal-single_textFontWeight__E1EsN","wrap":"cms-horizontal-single_wrap__MSOIQ","isInGrid":"cms-horizontal-single_isInGrid__rL7b3","textWord":"cms-horizontal-single_textWord__tEWIY","mediaWrap":"cms-horizontal-single_mediaWrap__clYLy","mediaComponentWrap":"cms-horizontal-single_mediaComponentWrap__K9UgG","isFullHeightInGridOrInSlider":"cms-horizontal-single_isFullHeightInGridOrInSlider__WFFGo","title":"cms-horizontal-single_title__rI38L","button-hover":"cms-horizontal-single_button-hover__OpMLr"};

/***/ }),

/***/ 39775:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-look-carousel_textFontWeight__A4JJw","slide":"cms-look-carousel_slide__wKu2Y","nextIcon":"cms-look-carousel_nextIcon__MgGJY","prevIcon":"cms-look-carousel_prevIcon__7sWTf","sliderItem":"cms-look-carousel_sliderItem__LUi_Y","itemWrapper":"cms-look-carousel_itemWrapper__zqsbw","centeredTitle":"cms-look-carousel_centeredTitle__0NvQQ","title":"cms-look-carousel_title__nvNdL","button-hover":"cms-look-carousel_button-hover__ve18N"};

/***/ }),

/***/ 61173:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-look-content_textFontWeight___O7wQ","content":"cms-look-content_content__60ubK","itemContent":"cms-look-content_itemContent__kTg25","singleImageWrapper":"cms-look-content_singleImageWrapper__ci5yT","plusSign":"cms-look-content_plusSign__ec8jB","doubleImageWrapper":"cms-look-content_doubleImageWrapper__FcrZV","doubleImageItem":"cms-look-content_doubleImageItem__ZXI9R","largeImageWrapper":"cms-look-content_largeImageWrapper__t9Zec","smallImageWrapper":"cms-look-content_smallImageWrapper__6xo2_","button-hover":"cms-look-content_button-hover__h6IUN"};

/***/ }),

/***/ 5626:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-normalize-h2_textFontWeight__XSfMO","heading":"cms-normalize-h2_heading__1271I","button-hover":"cms-normalize-h2_button-hover__Ti8R6"};

/***/ }),

/***/ 28591:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-product-cards_textFontWeight__MoHQO","content":"cms-product-cards_content__5H9Eu","imageWrapper":"cms-product-cards_imageWrapper__PUSnm","info":"cms-product-cards_info__MRsGe","name":"cms-product-cards_name__LGEsO","markDownPrice":"cms-product-cards_markDownPrice__u8cAr","color":"cms-product-cards_color__RJHNZ","button-hover":"cms-product-cards_button-hover__HzI_A"};

/***/ }),

/***/ 7326:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-recommend-products_textFontWeight__WQpQV","titleBox":"cms-recommend-products_titleBox__L2YCX","fontWeight":"cms-recommend-products_fontWeight__g9Yi4","content":"cms-recommend-products_content__pDlt9","item":"cms-recommend-products_item__eSVvO","image":"cms-recommend-products_image__8iyUG","button-hover":"cms-recommend-products_button-hover__czkBS"};

/***/ }),

/***/ 992:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-redirection_textFontWeight__1Zfny","title":"cms-redirection_title__6nK67","label":"cms-redirection_label__fsepU","labelText":"cms-redirection_labelText__3k2ki","linkText":"cms-redirection_linkText__jdj0y","button-hover":"cms-redirection_button-hover__y_Clp"};

/***/ }),

/***/ 55302:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-second-menu_textFontWeight__nfBJz","override":"cms-second-menu_override__S7PHF","swiper":"cms-second-menu_swiper__JzPzh","item":"cms-second-menu_item__LA6Fr","swiperSlide":"cms-second-menu_swiperSlide__hTpSu","button-hover":"cms-second-menu_button-hover__Ael8j"};

/***/ }),

/***/ 60064:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-video_textFontWeight__74Ujz","cmsVideoWrapper":"cms-video_cmsVideoWrapper__NIGng","videoContainer":"cms-video_videoContainer__i3HOH","isGridFullDom":"cms-video_isGridFullDom__VhD5J","isEditableContent":"cms-video_isEditableContent__Zv3Hx","videoCover":"cms-video_videoCover__J__u_","clickable":"cms-video_clickable__Hghr4","isFullScreen":"cms-video_isFullScreen__oHlVb","videoControlIcon":"cms-video_videoControlIcon__IU2Oi","cmsVideo":"cms-video_cmsVideo__LYZ_R","brandNativeControlBar":"cms-video_brandNativeControlBar__ojF0x","button-hover":"cms-video_button-hover__k4HWe"};

/***/ }),

/***/ 7351:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms-visual-card_textFontWeight__T6tsd","swiperSlide":"cms-visual-card_swiperSlide__tTBEl","title":"cms-visual-card_title__NgE7k","button-hover":"cms-visual-card_button-hover__wkuv2"};

/***/ }),

/***/ 4511:
/***/ (function(module) {

// extracted by mini-css-extract-plugin
module.exports = {"textFontWeight":"cms_textFontWeight__FJrh7","cms":"cms_cms__pUoKQ","cmsIsInGrid":"cms_cmsIsInGrid__h0Wp3","cmsInlineStartContent":"cms_cmsInlineStartContent__z5Mry","cmsInlineEndContent":"cms_cmsInlineEndContent__vuZwl","cmsInlinePlaceHolder":"cms_cmsInlinePlaceHolder__jqBdF","anchorPoint":"cms_anchorPoint__Gi4us","button-hover":"cms_button-hover__LPdtZ"};

/***/ })

}]);