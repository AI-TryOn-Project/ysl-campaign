"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1394],{

/***/ 78340:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E0: function() { return /* binding */ useCMSConfig; },
/* harmony export */   GW: function() { return /* binding */ lookContent; },
/* harmony export */   GZ: function() { return /* binding */ productList; },
/* harmony export */   HI: function() { return /* binding */ CMSConfigProvider; },
/* harmony export */   Mw: function() { return /* binding */ GridComponent; },
/* harmony export */   R9: function() { return /* binding */ checkDisabled; },
/* harmony export */   Rw: function() { return /* binding */ IsSpecialClickBehavior; },
/* harmony export */   U8: function() { return /* binding */ filterAndMapToGridComponent; },
/* harmony export */   WP: function() { return /* binding */ dynamicHeaderHOC; },
/* harmony export */   Z1: function() { return /* binding */ product; },
/* harmony export */   eO: function() { return /* binding */ Flexible$1; },
/* harmony export */   h9: function() { return /* binding */ DynamicHeaderContainer; },
/* harmony export */   hU: function() { return /* binding */ useDeviceType; },
/* harmony export */   iR: function() { return /* binding */ Slider; },
/* harmony export */   nk: function() { return /* binding */ Video$1; },
/* harmony export */   nv: function() { return /* binding */ Paragraph; },
/* harmony export */   rU: function() { return /* binding */ Link; },
/* harmony export */   re: function() { return /* binding */ ComponentType; },
/* harmony export */   tT: function() { return /* binding */ normalizeTextStyle; },
/* harmony export */   tw: function() { return /* binding */ EventType; },
/* harmony export */   vT: function() { return /* binding */ useDynamicHeader; },
/* harmony export */   xb: function() { return /* binding */ editableContent; },
/* harmony export */   xy: function() { return /* binding */ editorialAccountContent; }
/* harmony export */ });
/* unused harmony exports Alignment, ArchiveLook, BioStory, CMS, CMSConfigContext, CTA, IArchiveLook, IBioStory, ICTA, ICollectionLook, IEditorStory, IEditorTimeline, IEditorialSquare, IHorizontalSingle, IIframe, IImage, IImageList, IImageWithHotArea, IImageWithTextList, ILookCarousel, IMediaList, INewLook, INewsletterSubscription, IParagraph, IParagraphColumns, IProductCards, IProductListWithAssets, IRecommendProducts, IRedirection, IRowOf3Blocks, ISecondMenu, IShopTheCollection, ISlider, ITextBanner, IVerticalPhotoGallery, IVideo, IVisualCard, IVisualSlideShow, Iframe, Image, ImageList, ImageWithHotArea, ImageWithTextList, MediaList, NewLook, NewsletterSubscription, ParagraphColumns2, ProductComponent, ProductList, ProductListWithAssets, RowOf3Blocks, ShopTheCollection, Soundtrack, TFlexible, TextBanner, VerticalPhotoGallery, VisualBanner, VisualSlideShow, ZoomPanel, hasBorderBottom, noopForAnchor, useMemoizedFn, usePagination */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50959);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84875);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11527);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60806);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63645);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9995);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21801);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58000);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(84614);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5187);
/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30095);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41843);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15870);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10422);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27915);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59164);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69132);

















const dynamicHeaderContainer$1 = "_dynamicHeaderContainer_c9yp3_18";
const styles$M = {
  dynamicHeaderContainer: dynamicHeaderContainer$1,
  "button-hover": "_button-hover_c9yp3_1"
};
const DynamicHeaderContainer = ({
  children,
  className,
  addDynamicHeader,
  headerChanging,
  headerChangingOffset,
  currentDevice,
  exclude
}) => {
  const css = {
    left: 0,
    width: "100%",
    pointerEvents: "none",
    maxHeight: "100%",
    position: "absolute"
  };
  const [containerEl, setContainerEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [containerHeight, setContainerHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [includesStartEnd, setIncludesStartEnd] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!containerEl)
      return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerHeight(entry.contentRect.height);
        if (exclude) {
          const excludeElements = typeof exclude === "string" ? [...containerEl.querySelectorAll(exclude)] : [exclude];
          const parentTop = entry.target.getBoundingClientRect().top;
          const allExcludeStartEnd = excludeElements.map((el) => {
            const {
              top,
              bottom
            } = el.getBoundingClientRect();
            return [top - parentTop, bottom - parentTop];
          });
          const allIncludeStartEnd = [];
          allExcludeStartEnd.forEach(([start2, end2], index, arr) => {
            if (start2 > 0) {
              const includeStart = index === 0 ? 0 : arr[index - 1][1];
              const includeEnd = start2;
              allIncludeStartEnd.push([includeStart, includeEnd]);
              if (index === arr.length - 1) {
                const parentHeight = entry.contentRect.height;
                if (end2 < parentHeight) {
                  allIncludeStartEnd.push([end2, parentHeight]);
                }
              }
            }
          });
          setIncludesStartEnd(allIncludeStartEnd);
        }
      }
    });
    resizeObserver.observe(containerEl);
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerEl, exclude]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__("dynamicHeaderContainer", styles$M.dynamicHeaderContainer, className),
    ref: setContainerEl,
    children: [children, headerChanging && headerChangingOffset ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: {
          ...css,
          height: `${headerChangingOffset}px`,
          top: 0
        },
        ref: addDynamicHeader()
      }), !!containerHeight && new Array(Math.ceil((containerHeight - headerChangingOffset) / window.innerHeight)).fill(window.innerHeight).map((height, index, _arr) => {
        if (index === _arr.length - 1) {
          return (containerHeight - headerChangingOffset) % window.innerHeight || window.innerHeight;
        }
        return height;
      }).map((height, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: {
          ...css,
          height: `${height}px`,
          top: `${headerChangingOffset + index * window.innerHeight}px`
        },
        ref: addDynamicHeader({
          headerChanging
        })
      }, index))]
    }) : !!containerHeight ? !includesStartEnd.length ? new Array(Math.ceil(containerHeight / window.innerHeight)).fill(window.innerHeight).map((height, index, _arr) => {
      if (index === _arr.length - 1) {
        return containerHeight % window.innerHeight || window.innerHeight;
      }
      return height;
    }).map((height, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      ref: !(headerChanging && headerChangingOffset) && currentDevice ? addDynamicHeader({
        headerChanging
      }) : void 0,
      style: {
        ...css,
        height: `${height}px`,
        top: `${index * window.innerHeight}px`
      }
    }, index)) : includesStartEnd.map((section) => {
      const sectionHeight = section[1] - section[0];
      const offset = section[0];
      return new Array(Math.ceil(sectionHeight / window.innerHeight)).fill(window.innerHeight).map((height, index, _arr) => {
        if (index === _arr.length - 1) {
          return sectionHeight % window.innerHeight || window.innerHeight;
        }
        return height;
      }).map((height, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        ref: !(headerChanging && headerChangingOffset) && currentDevice ? addDynamicHeader({
          headerChanging
        }) : void 0,
        style: {
          ...css,
          height: `${height}px`,
          top: `${index * window.innerHeight + offset}px`
        }
      }, index));
    }) : null]
  });
};
var EventType = /* @__PURE__ */ ((EventType2) => {
  EventType2["startHoverAudio"] = "startHoverAudio";
  EventType2["startNewLookBookAudio"] = "startNewLookBookAudio";
  EventType2["screensaverAvailable"] = "screensaverAvailable";
  EventType2["startLoading"] = "startLoading";
  EventType2["finishLoading"] = "finishLoading";
  EventType2["ctaClick"] = "ctaClick";
  EventType2["newsletter"] = "newsletter";
  EventType2["video"] = "video";
  EventType2["componentInit"] = "componentInit";
  EventType2["productClick"] = "productClick";
  EventType2["homepageCTAOnClick"] = "homepageCTAOnClick";
  EventType2["videoProgress"] = "videoProgress";
  return EventType2;
})(EventType || {});
const noop = () => {
};
const initData = {
  cmsData: [],
  brand: "bv",
  brandName: "",
  pageTitle: "",
  headerChanging: true,
  enableHeaderChanging: true,
  bannerHeight: 0,
  headerHeight: 80,
  verticalIntersectionDetectStart: 20,
  verticalIntersectionDetectEnd: 60,
  horizontalIntersectionDetect: 0,
  imageScroller: null,
  thresholdInterval: 5,
  componentsRender: () => void 0,
  PLPRender: () => void 0,
  ProductListItem: () => void 0,
  newsletterRender: () => void 0,
  onEvent: noop,
  onDynamicHeaderActive: void 0,
  defaultTextColor: "black",
  defaultBgColor: "white",
  changedTextColor: "white",
  changedBgColor: "black",
  noDefaultHeaderColor: false,
  mobileMaxWidth: 767,
  tabletMaxWidth: 1023,
  largeDesktopMinWidth: 1440
};
const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
const useCMSConfig = () => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  if (!context) {
    console.warn("[web-cms] useCMSConfig can not find context, use initData instead");
  }
  return context || initData;
};
const CMSConfigProvider = ({
  children,
  brand = initData.brand,
  brandName = initData.brandName,
  pageTitle = initData.pageTitle,
  headerChanging = initData.headerChanging,
  enableHeaderChanging = initData.enableHeaderChanging,
  bannerHeight = initData.bannerHeight,
  headerHeight = initData.headerHeight,
  verticalIntersectionDetectEnd = initData.verticalIntersectionDetectEnd,
  horizontalIntersectionDetect = initData.horizontalIntersectionDetect,
  imageScroller = initData.imageScroller,
  thresholdInterval = initData.thresholdInterval,
  verticalIntersectionDetectStart = initData.verticalIntersectionDetectStart,
  componentsRender = initData.componentsRender,
  PLPRender = initData.PLPRender,
  ProductListItem = initData.ProductListItem,
  newsletterRender = initData.newsletterRender,
  loadMore: loadMore2 = initData.loadMore,
  onEvent = initData.onEvent,
  cmsData = initData.cmsData,
  onDynamicHeaderActive = initData.onDynamicHeaderActive,
  changedBgColor = initData.changedBgColor,
  changedTextColor = initData.changedTextColor,
  defaultBgColor = initData.defaultBgColor,
  defaultTextColor = initData.defaultTextColor,
  noDefaultHeaderColor = initData.noDefaultHeaderColor,
  mobileMaxWidth = initData.mobileMaxWidth,
  tabletMaxWidth = initData.tabletMaxWidth,
  largeDesktopMinWidth = initData.largeDesktopMinWidth
}) => {
  const memoedContextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    brand,
    brandName,
    pageTitle,
    headerChanging,
    enableHeaderChanging,
    bannerHeight,
    headerHeight,
    verticalIntersectionDetectEnd,
    horizontalIntersectionDetect,
    imageScroller,
    thresholdInterval,
    verticalIntersectionDetectStart,
    componentsRender,
    PLPRender,
    ProductListItem,
    newsletterRender,
    loadMore: loadMore2,
    onEvent,
    cmsData,
    onDynamicHeaderActive,
    changedBgColor,
    changedTextColor,
    defaultBgColor,
    defaultTextColor,
    noDefaultHeaderColor,
    mobileMaxWidth,
    tabletMaxWidth,
    largeDesktopMinWidth,
    isBV: brand === "bv"
  }), [brand, brandName, pageTitle, headerChanging, enableHeaderChanging, bannerHeight, headerHeight, verticalIntersectionDetectEnd, horizontalIntersectionDetect, imageScroller, thresholdInterval, verticalIntersectionDetectStart, componentsRender, PLPRender, ProductListItem, newsletterRender, loadMore2, onEvent, cmsData, onDynamicHeaderActive, changedBgColor, changedTextColor, defaultBgColor, defaultTextColor, noDefaultHeaderColor, mobileMaxWidth, tabletMaxWidth, largeDesktopMinWidth]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Context.Provider, {
    value: memoedContextValue,
    children
  });
};
const specialClickBehaviors = [
  "newsletter",
  "imageZoom",
  "openPanelDrawer"
];
const IsSpecialClickBehavior = (clickBehavior) => specialClickBehaviors.includes(clickBehavior.type);
const noopForAnchor = "javascript:void(0)";
const checkDisabled = (clickBehavior) => clickBehavior.type === "unClickable" || !clickBehavior.url && !specialClickBehaviors.includes(clickBehavior.type);
const link$2 = "_link_1ir3v_18";
const disabled$5 = "_disabled_1ir3v_24";
const styles$L = {
  link: link$2,
  disabled: disabled$5,
  "button-hover": "_button-hover_1ir3v_1"
};
function checkAncestorForClassName(element, className) {
  var _a;
  if (!element || !(className == null ? void 0 : className.length))
    return false;
  let result = false;
  for (let index = 0; index < className.length; index++) {
    const item2 = className[index];
    if ((_a = element.classList) == null ? void 0 : _a.contains(item2))
      return result = true;
  }
  if (result)
    return true;
  return checkAncestorForClassName(element.parentNode, className);
}
const Link = ({
  clickBehavior,
  children,
  className,
  style,
  onZoom,
  onOpenPanelDrawer,
  enable = true,
  notTriggerEventsClassName,
  comData,
  onClickLink
}) => {
  const {
    onEvent
  } = useCMSConfig();
  const isDisabled2 = checkDisabled(clickBehavior) || clickBehavior.type === "goToNextSlides";
  if (!enable)
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children
    });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
    href: clickBehavior.url,
    legacyBehavior: true,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      style,
      rel: "noreferrer",
      target: clickBehavior.isNewWindow ? "_blank" : "_self",
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(className, styles$L.link, {
        [styles$L.disabled]: isDisabled2
      }),
      onClick: (e) => {
        const hasClassName = checkAncestorForClassName(e.target, notTriggerEventsClassName);
        if (hasClassName) {
          e.preventDefault();
        }
        if (isDisabled2) {
          e.preventDefault();
          return;
        }
        if (clickBehavior.type === "newsletter") {
          onEvent(EventType.newsletter, {
            component: comData
          });
          e.preventDefault();
        }
        if (clickBehavior.type === "imageZoom") {
          onZoom == null ? void 0 : onZoom();
          e.preventDefault();
        }
        if (clickBehavior.type === "openPanelDrawer") {
          onOpenPanelDrawer == null ? void 0 : onOpenPanelDrawer();
          e.preventDefault();
        }
        onClickLink == null ? void 0 : onClickLink(clickBehavior);
      },
      ...IsSpecialClickBehavior(clickBehavior) ? {
        href: noopForAnchor
      } : null,
      children
    })
  });
};
const mimeTypeList = {
  mp2: "video/mpeg",
  mpa: "video/mpeg",
  mpe: "video/mpeg",
  mpeg: "video/mpeg",
  mpg: "video/mpeg",
  mpv2: "video/mpeg",
  mov: "video/quicktime",
  qt: "video/quicktime",
  lsf: "video/x-la-asf",
  lsx: "video/x-la-asf",
  asf: "video/x-ms-asf",
  asr: "video/x-ms-asf",
  asx: "video/x-ms-asf",
  avi: "video/x-msvideo",
  movie: "video/x-sgi-movie",
  pvx: "video/x-pv-pvx",
  rv: "video/vnd.rn-realvideo",
  vdo: "video/vdo",
  viv: "video/vivo",
  vivo: "video/vivo",
  wm: "video/x-ms-wm",
  wmx: "video/x-ms-wmx",
  wv: "video/wavelet",
  wvx: "video/x-ms-wvx",
  "3gp": "video/3gpp",
  fvi: "video/isivideo",
  mng: "video/x-mng",
  mp4: "video/mp4",
  mpg4: "video/mp4",
  ogv: "video/ogg",
  flv: "video/x-flv",
  ogg: "audio/ogg",
  m3u8: "application/x-mpegURL"
};
const handleUrl = (url) => {
  let pureURL;
  try {
    pureURL = new URL(url).pathname;
  } catch (e) {
    pureURL = "";
  }
  return pureURL;
};
function getMimeType(filePath) {
  const url = handleUrl(filePath);
  const startIndex = url.lastIndexOf(".");
  if (startIndex != -1) {
    const extension = url.substring(startIndex + 1, url.length).toLowerCase();
    return mimeTypeList[extension] || "video/mp4";
  }
  return "video/mp4";
}
const resolveAutoPlay = (player, options) => {
  const onClick = () => {
    player.muted(false);
    window.removeEventListener("click", onClick);
  };
  const onTouch = () => {
    player.muted(false);
    window.removeEventListener("touchstart", onTouch);
  };
  player.on("ready", () => {
    var _a;
    if (options.autoPlay) {
      if (options.autoPlayWithMute) {
        player.muted(true);
      }
      (_a = player.play()) == null ? void 0 : _a.catch(() => {
        player.muted(true);
        player.play();
        if (player && !options.muted && !options.autoPlayWithMute) {
          window.addEventListener("click", onClick);
          window.addEventListener("touchstart", onTouch);
        }
      }).catch((err) => {
        console.error("[resolveAutoPlay]", err);
      });
    }
  });
};
function useLatest(value) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
  ref.current = value;
  return ref;
}
var CONTROL_BAR_THEME = /* @__PURE__ */ ((CONTROL_BAR_THEME2) => {
  CONTROL_BAR_THEME2["white"] = "white";
  CONTROL_BAR_THEME2["black"] = "black";
  return CONTROL_BAR_THEME2;
})(CONTROL_BAR_THEME || {});
var CTAS_DISPLAY = /* @__PURE__ */ ((CTAS_DISPLAY2) => {
  CTAS_DISPLAY2["sideBySide"] = "sideBySide";
  CTAS_DISPLAY2["oneAboveTheOther"] = "oneAboveTheOther";
  return CTAS_DISPLAY2;
})(CTAS_DISPLAY || {});
var POSITION = /* @__PURE__ */ ((POSITION2) => {
  POSITION2["left"] = "left";
  POSITION2["right"] = "right";
  return POSITION2;
})(POSITION || {});
const video$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONTROL_BAR_THEME,
  CTAS_DISPLAY,
  POSITION
}, Symbol.toStringTag, { value: "Module" }));
function isBrowser() {
  return typeof window !== "undefined";
}
const useIsomorphicLayoutEffect = isBrowser() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
function useDebounce(func, wait, options) {
  const funcRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(func);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    funcRef.current = func;
  }, [func]);
  const debounced = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)((...args) => funcRef.current(...args), wait, options);
  }, [wait, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      debounced.cancel();
    };
  }, [debounced]);
  return debounced;
}
var DeviceTypeEnum = /* @__PURE__ */ ((DeviceTypeEnum2) => {
  DeviceTypeEnum2["MOBILE"] = "mobile";
  DeviceTypeEnum2["TABLET"] = "tablet";
  DeviceTypeEnum2["DESKTOP"] = "desktop";
  DeviceTypeEnum2["LARGE"] = "large";
  return DeviceTypeEnum2;
})(DeviceTypeEnum || {});
const useDeviceType = (aspectCb) => {
  const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
  const { mobileMaxWidth, tabletMaxWidth, largeDesktopMinWidth } = useCMSConfig();
  const computedAspectCb = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => !aspectCb && context ? context.deviceTypeAspectCb : aspectCb, [aspectCb, context]);
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ hasResult: false, canHover: true });
  const check = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    var _a;
    if (window == null ? void 0 : window.isVideoFullscreen)
      return;
    let { isMobile, isTablet, isDesktop, isLargeDesktop } = (_a = computedAspectCb == null ? void 0 : computedAspectCb()) != null ? _a : {};
    isMobile = isMobile != null ? isMobile : window.matchMedia(`(max-width: ${mobileMaxWidth}px)`).matches;
    isTablet = isTablet != null ? isTablet : window.matchMedia(`(min-width: ${mobileMaxWidth + 1}px) and (max-width: ${tabletMaxWidth}px)`).matches;
    isDesktop = isDesktop != null ? isDesktop : window.matchMedia(`(min-width: ${tabletMaxWidth + 1}px)`).matches;
    isLargeDesktop = isLargeDesktop != null ? isLargeDesktop : window.matchMedia(`(min-width: ${largeDesktopMinWidth}px)`).matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setData((prev2) => {
      if (prev2.isDesktop === isDesktop && prev2.isTablet === isTablet && prev2.isMobile === isMobile && prev2.isLargeDesktop === isLargeDesktop) {
        return prev2;
      }
      const currentDevice = isLargeDesktop ? "large" : isDesktop ? "desktop" : isTablet ? "tablet" : "mobile";
      return {
        isMobile,
        isTablet,
        isDesktop,
        isLargeDesktop,
        currentDevice,
        hasResult: true,
        canHover
      };
    });
  }, [computedAspectCb, context]);
  const debouncedCheck = useDebounce(check, 500);
  useIsomorphicLayoutEffect(check, [check]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("resize", debouncedCheck);
    window.addEventListener("orientationchange", debouncedCheck);
    document.addEventListener("fullscreenchange", debouncedCheck);
    return () => {
      window.removeEventListener("resize", debouncedCheck);
      window.removeEventListener("orientationchange", debouncedCheck);
      document.removeEventListener("fullscreenchange", debouncedCheck);
    };
  }, [debouncedCheck]);
  return data;
};
const isDev = "production" === "development";
const isDebug = () => isDev && isBrowser() && !!new URL(location.href).searchParams.get("debug") || isBrowser() && new URL(location.href).searchParams.get("debugCMS") === "f27e26";
const createLog = (scope) => isDev ? console.log.bind(console, `%c${scope ? `[${scope}]` : ""}`, "color:darkorange; font-weight: bold;") : (...args) => {
};
createLog();
const opt = { trailing: true };
function useWindowHeight() {
  const [windowHeight, setWindowHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setWindowHeight(window.innerHeight);
  }, []);
  const handleResize = () => {
    if (window == null ? void 0 : window.isVideoFullscreen)
      return;
    setWindowHeight(window.innerHeight);
  };
  const debounceFunc = useDebounce(handleResize, 50, opt);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("resize", debounceFunc);
    document.addEventListener("fullscreenchange", debounceFunc);
    return () => {
      window.removeEventListener("resize", debounceFunc);
      document.removeEventListener("fullscreenchange", debounceFunc);
    };
  }, [debounceFunc]);
  return windowHeight;
}
const CSS_VAR_BG_COLOR = "--gui-header-background-color";
const CSS_VAR_TEXT_COLOR = "--gui-header-text-color";
const DOM_ATTR_HEADER_CHANGE = "data-header-change";
const devClassName = "devDynamicHeader";
const devDataAttr = "data-dev-info";
const addDevStyle = () => {
  if (isBrowser() && isDebug()) {
    const style = document.createElement("style");
    style.innerHTML = `
    .${devClassName} {
      position: relative;
      border: 2px dashed red;
      overflow: hidden;
      z-index: 5;
    }
    .${devClassName}::before {
      content: attr(${devDataAttr});
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: rgba(0,0,0,0.3);
      transform: translate(-50%, -50%);
      color: white;
      z-index: 1;
      white-space: pre-wrap;
      text-align: left;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.8);
      pointer-events: none;
    }
    `;
    document.head.appendChild(style);
  }
};
addDevStyle();
const createThreshold = (thresholdInterval) => {
  const interval = thresholdInterval / window.innerHeight;
  const start2 = Array(Math.floor(1 / interval) + 1).fill(0).map((i, index) => parseFloat((i + interval * index).toFixed(3)));
  return [...start2];
};
const useDynamicHeader = ({
  scrollType = "vertical",
  horizontalCheck,
  ...restProps
} = {}) => {
  const [targets, setTargets] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const windowHeight = useWindowHeight();
  const {
    bannerHeight: _bannerHeight,
    verticalIntersectionDetectEnd: _verticalIntersectionDetectEnd,
    verticalIntersectionDetectStart: _verticalIntersectionDetectStart,
    headerHeight: _headerHeight,
    headerChanging: deprecatedHeaderChanging,
    enableHeaderChanging,
    thresholdInterval,
    onDynamicHeaderActive: _onDynamicHeaderActive,
    defaultBgColor,
    defaultTextColor,
    changedBgColor,
    changedTextColor,
    noDefaultHeaderColor
  } = useCMSConfig();
  const isEnableHeaderChanging = deprecatedHeaderChanging && enableHeaderChanging;
  const bannerHeight = restProps.bannerHeight || _bannerHeight;
  const headerHeight = restProps.headerHeight || _headerHeight;
  const verticalIntersectionDetectEnd = restProps.verticalIntersectionDetectEnd || _verticalIntersectionDetectEnd;
  const verticalIntersectionDetectStart = restProps.verticalIntersectionDetectStart || _verticalIntersectionDetectStart;
  const onDynamicHeaderActive = useLatest(restProps.onDynamicHeaderActive || _onDynamicHeaderActive);
  const targetPreIntersectionHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(/* @__PURE__ */ new WeakMap());
  const setGlobalStyleVar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((isChange) => {
    const nextBgColor = isChange ? changedBgColor : defaultBgColor;
    const nextTextColor = isChange ? changedTextColor : defaultTextColor;
    document.documentElement.style.setProperty(CSS_VAR_BG_COLOR, nextBgColor);
    document.documentElement.style.setProperty(CSS_VAR_TEXT_COLOR, nextTextColor);
  }, [changedBgColor, changedTextColor, defaultBgColor, defaultTextColor]);
  const setColorFromTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((target) => {
    const isHeaderChange = !!target.getAttribute(DOM_ATTR_HEADER_CHANGE);
    setGlobalStyleVar(isHeaderChange);
  }, [setGlobalStyleVar]);
  const handleDynamicHeaderActive = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((target) => {
    onDynamicHeaderActive.current ? onDynamicHeaderActive.current(target) : setColorFromTarget(target);
  }, [onDynamicHeaderActive, setColorFromTarget]);
  const intersectionCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((entries) => {
    entries.forEach((entry) => {
      var _a, _b, _c, _d, _e;
      if (entry.intersectionRatio > 0) {
        if (isDebug()) {
          entry.target.classList.add(devClassName);
          entry.target.setAttribute(devDataAttr, `headerChanging: ${entry.target.getAttribute(DOM_ATTR_HEADER_CHANGE) ? "\u2705" : "\u274E"}
Ratio: ${entry.intersectionRatio.toFixed(3)} Top: ${entry.intersectionRect.top.toFixed(0)}
Root: top: ${(_a = entry.rootBounds) == null ? void 0 : _a.top} , bottom: ${(_b = entry.rootBounds) == null ? void 0 : _b.bottom}, height: ${(_c = entry.rootBounds) == null ? void 0 : _c.height}`);
        }
        const fixedTop = Math.max(entry.intersectionRect.top - (((_d = entry.rootBounds) == null ? void 0 : _d.top) || 0), 0);
        const fixedBottom = entry.intersectionRect.bottom - (((_e = entry.rootBounds) == null ? void 0 : _e.top) || 0);
        const prevInterSectionHeight = targetPreIntersectionHeight.current.get(entry.target) || 0;
        const currentInterSectionHeight = entry.intersectionRect.height;
        if (prevInterSectionHeight <= currentInterSectionHeight && (fixedTop > 0 && fixedTop < verticalIntersectionDetectEnd || fixedTop <= 0 && fixedBottom > verticalIntersectionDetectStart)) {
          const target = entry.target;
          if (horizontalCheck && scrollType === "horizontal") {
            if (horizontalCheck({
              target: entry.target,
              top: fixedTop,
              bottom: fixedBottom,
              verticalIntersectionDetectEnd
            })) {
              handleDynamicHeaderActive(target);
            }
          } else {
            handleDynamicHeaderActive(target);
          }
        }
        targetPreIntersectionHeight.current.set(entry.target, currentInterSectionHeight);
      }
    });
  }, [
    handleDynamicHeaderActive,
    horizontalCheck,
    scrollType,
    verticalIntersectionDetectEnd,
    verticalIntersectionDetectStart
  ]);
  const addTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((config2) => (target) => {
    if (!target)
      return;
    if (config2 == null ? void 0 : config2.headerChanging) {
      target.setAttribute(DOM_ATTR_HEADER_CHANGE, "true");
    } else {
      target.removeAttribute(DOM_ATTR_HEADER_CHANGE);
    }
    setTargets((targets2) => {
      if (!targets2.includes(target)) {
        target.style.borderColor = `#${(Math.random() * 16777215 << 0).toString(16)}`;
        return [...targets2, target];
      }
      return targets2;
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (noDefaultHeaderColor)
      return;
    setGlobalStyleVar();
    return () => setGlobalStyleVar();
  }, [noDefaultHeaderColor, setGlobalStyleVar]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isEnableHeaderChanging)
      return;
    const observer = new IntersectionObserver(intersectionCallback, {
      threshold: createThreshold(thresholdInterval),
      rootMargin: `${bannerHeight * -1}px 0px ${(window.innerHeight - bannerHeight - headerHeight) * -1}px 0px`
    });
    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
    };
  }, [
    windowHeight,
    targets,
    intersectionCallback,
    bannerHeight,
    headerHeight,
    isEnableHeaderChanging,
    thresholdInterval
  ]);
  const resizeCallBack = useDebounce(() => {
    if (window == null ? void 0 : window.isVideoFullscreen)
      return;
    if (!isEnableHeaderChanging)
      return;
    targets.forEach((target) => {
      if (scrollType === "vertical") {
        if (target.getBoundingClientRect().top - bannerHeight <= verticalIntersectionDetectEnd && target.getBoundingClientRect().bottom - bannerHeight > verticalIntersectionDetectEnd) {
          handleDynamicHeaderActive(target);
        }
      }
    });
  }, 1e3);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("resize", resizeCallBack);
    document.addEventListener("fullscreenchange", resizeCallBack);
    return () => {
      window.removeEventListener("resize", resizeCallBack);
      document.removeEventListener("fullscreenchange", resizeCallBack);
    };
  }, [targets, resizeCallBack]);
  return addTarget;
};
useDynamicHeader.CSS_VAR_BG_COLOR = CSS_VAR_BG_COLOR;
useDynamicHeader.CSS_VAR_TEXT_COLOR = CSS_VAR_TEXT_COLOR;
useDynamicHeader.DOM_ATTR_HEADER_CHANGE = DOM_ATTR_HEADER_CHANGE;
const getPaddingMarginStyle = (config2, currentDevice) => {
  const css = {};
  if (!(config2 == null ? void 0 : config2.padding) && !(config2 == null ? void 0 : config2.margin))
    return css;
  if (currentDevice) {
    Object.assign(css, config2.padding[currentDevice]);
    Object.assign(css, config2.margin[currentDevice]);
  }
  return css;
};
const buttonSecondary = "_buttonSecondary_oi6em_18";
const bv$7 = "_bv_oi6em_18";
const isDisabled$5 = "_isDisabled_oi6em_53";
const bal$5 = "_bal_oi6em_60";
const buttonText$2 = "_buttonText_oi6em_86";
const styles$K = {
  buttonSecondary,
  bv: bv$7,
  isDisabled: isDisabled$5,
  bal: bal$5,
  buttonText: buttonText$2,
  "button-hover": "_button-hover_oi6em_1"
};
const ButtonSecondary = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  style,
  isDisabled: isDisabled2 = false,
  onClick,
  className,
  href,
  target,
  onMouseEnter,
  brand = "bv"
}, ref) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$K.buttonSecondary, styles$K[brand], className, {
      [styles$K.isDisabled]: isDisabled2
    }),
    style,
    onClick,
    onMouseEnter,
    target,
    href,
    ref,
    children: typeof children === "string" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: styles$K.buttonText,
      dangerouslySetInnerHTML: {
        __html: children
      }
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: styles$K.buttonText,
      children
    })
  });
});
const SvgSoundOn = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M6.00003 17V11H10L13.2 8.59999C13.5297 8.35278 14 8.58796 14 8.99998L14.0002 19C14.0002 19.412 13.5298 19.6472 13.2002 19.4L10 17H6.00003Z",
  fill: "black"
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M16.4219 9.75739C16.979 10.3145 17.421 10.976 17.7225 11.7039C18.024 12.4319 18.1792 13.2121 18.1792 14C18.1792 14.788 18.024 15.5682 17.7225 16.2961C17.421 17.0241 16.979 17.6855 16.4219 18.2427",
  stroke: "black",
  strokeWidth: 1.5
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M18.4324 7.55847C19.2783 8.40439 19.9493 9.40864 20.4071 10.5139C20.8649 11.6191 21.1006 12.8037 21.1006 14C21.1006 15.1963 20.8649 16.3809 20.4071 17.4862C19.9493 18.5914 19.2783 19.5957 18.4324 20.4416",
  stroke: "black",
  strokeWidth: 1.5
}));
const SvgSoundOff = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M23.1304 20.3004L14.0001 14.1852L14.0002 19C14.0002 19.412 13.5298 19.6472 13.2002 19.4L10 17H6L6 11H9.24439L6.51317 9.17074L7.32524 7.95826L23.9098 19.1367L23.1304 20.3004ZM14 10.6483L12.1403 9.39481L13.2 8.6C13.5296 8.35279 14 8.58798 14 9L14 10.6483Z",
  fill: "black"
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M16.4219 9.75739C16.979 10.3145 17.421 10.976 17.7225 11.7039C18.024 12.4319 18.1792 13.2121 18.1792 14C18.1792 14.788 18.024 15.5682 17.7225 16.2961C17.421 17.0241 16.979 17.6855 16.4219 18.2427",
  stroke: "black",
  strokeWidth: 1.5
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M18.4324 7.55847C19.2783 8.40439 19.9493 9.40864 20.4071 10.5139C20.8649 11.6191 21.1006 12.8037 21.1006 14C21.1006 15.1963 20.8649 16.3809 20.4071 17.4862C19.9493 18.5914 19.2783 19.5957 18.4324 20.4416",
  stroke: "black",
  strokeWidth: 1.5
}));
const SvgVideoPauseBal = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M10 9.5C10 9.22386 10.2239 9 10.5 9H12.5C12.7761 9 13 9.22386 13 9.5V18.5C13 18.7761 12.7761 19 12.5 19H10.5C10.2239 19 10 18.7761 10 18.5V9.5Z",
  fill: "black"
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  x: 15,
  y: 9,
  width: 3,
  height: 10,
  rx: 0.5,
  fill: "black"
}));
const SvgVideoPlayBal = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M19.2854 14.4287L10.7572 19.5457C10.424 19.7456 10 19.5056 10 19.1169V8.88309C10 8.49445 10.424 8.25439 10.7572 8.45435L19.2854 13.5713C19.6091 13.7655 19.6091 14.2345 19.2854 14.4287Z",
  fill: "black"
}));
const SvgVideoLargePlay = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 60,
  height: 60,
  viewBox: "0 0 60 60",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  x: 0.5,
  y: 0.5,
  width: 59,
  height: 59,
  rx: 29.5,
  fill: "white",
  stroke: "black"
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M37.551 30.6125L25.3679 37.9223C24.8918 38.208 24.2861 37.8651 24.2861 37.3098V22.6901C24.2861 22.1349 24.8918 21.792 25.3679 22.0776L37.551 29.3875C38.0134 29.6649 38.0134 30.335 37.551 30.6125Z",
  fill: "black"
}));
const SvgBvPlay = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: "1.6em",
  height: "1.7em",
  viewBox: "0 0 16 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  clipPath: "url(#clip0_2304_67684)"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M1.35023 14.2077V1.80674L13.8302 8.54104L1.35023 15.2753V14.2077ZM15.9902 8.54104C15.9902 8.13041 15.7502 7.80191 15.4302 7.71978L1.35023 0.082102C1.11023 -2.35867e-05 0.870234 -2.35867e-05 0.630234 0.082102C0.390234 0.164228 0.230234 0.328479 0.0702344 0.574856L-0.00976562 0.739107V14.2077V16.343L0.0702344 16.5072C0.150234 16.7536 0.390234 16.9179 0.630234 17C0.710234 17 0.870234 17.0821 0.950234 17.0821C1.11023 17.0821 1.27023 17.0821 1.35023 17L15.4302 9.3623C15.7502 9.19804 15.9902 8.86954 15.9902 8.54104Z",
  fill: "currentColor"
})), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
  id: "clip0_2304_67684"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 16,
  height: 17,
  fill: "currentColor"
}))));
const SvgBvPause = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: "1.6em",
  height: "1.7em",
  viewBox: "0 0 20 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  clipPath: "url(#clip0_2314_79317)"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M19.8002 21.6342H12.2002V1.03418H19.8002V21.6342ZM13.8002 20.0342H18.2002V2.63418H13.8002V20.0342ZM7.80019 21.6342H0.200195V1.03418H7.80019V21.6342ZM1.80019 20.0342H6.2002V2.63418H1.80019V20.0342Z",
  fill: "currentColor"
})), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
  id: "clip0_2314_79317"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  width: 20,
  height: 21,
  fill: "transparent",
  transform: "translate(0 0.833984)"
}))));
const SvgBvMute = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: "1.8em",
  height: "1.7em",
  viewBox: "0 0 18 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M3.10435 6.0125H3.33353L3.51833 5.87696L9.64783 1.38148V15.6185L3.51833 11.123L3.3333 10.9875H3.10435H0.7V6.0125H3.10435Z",
  stroke: "currentColor",
  strokeWidth: 1.4
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M16.9611 5.91309L15.1522 7.72308L13.3433 5.91309L12.5652 6.69115L14.3752 8.50004L12.5652 10.3089L13.3433 11.087L15.1522 9.27701L16.9611 11.087L17.7392 10.3089L15.9292 8.50004L17.7392 6.69115L16.9611 5.91309Z",
  fill: "currentColor"
}));
const SvgBvUnmute = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: "1.8em",
  height: "1.7em",
  viewBox: "0 0 26 26",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M5.02501 9.58803H5.25419L5.43899 9.45249L13.7167 3.38148V22.6602L5.43899 16.5892L5.25419 16.4537H5.02501H1.7V9.58803H5.02501Z",
  stroke: "currentColor",
  strokeWidth: 1.4
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M21.9658 7C23.7891 8.15132 25.0001 10.5 25.0001 13.5C25.0001 16.5 23.7891 18.8487 21.9658 20",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round"
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M19.9492 11C20.5975 11.6353 20.9997 12.5207 20.9997 13.5C20.9997 14.4793 20.5975 15.3647 19.9492 16",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round"
}));
const formatStringToCamelCase = (str) => {
  const splitted = str.split("-");
  if (splitted.length === 1)
    return splitted[0];
  return splitted[0] + splitted.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join("");
};
const parseCSSString = (str) => {
  const style = {};
  try {
    str.split(";").forEach((el) => {
      const [property, value] = el.split(":");
      if (!property)
        return;
      const formattedProperty = formatStringToCamelCase(property.trim());
      style[formattedProperty] = value.trim();
    });
    return style;
  } catch (e) {
    console.warn("parseCSSString:", str, e);
    return {};
  }
};
const normalizeStyle = (style) => {
  if (!style || typeof style !== "object")
    return {};
  const css = Object.assign(style, style.fontWeight ? null : { fontWeight: style.fontStyle }, style.underscore ? { textDecoration: "underline" } : null);
  style.underscore !== void 0 && delete css.underscore;
  delete css.iconType;
  return css;
};
const normalizeTextStyle = (style) => {
  if (!style)
    return {};
  const clonedStyle = { ...style };
  const otherCSSObj = parseCSSString(clonedStyle.otherStyle || "");
  delete clonedStyle.otherStyle;
  const cssObj = Object.assign({}, clonedStyle, otherCSSObj);
  return cssObj;
};
const buttonPrimary = "_buttonPrimary_1gnxm_18";
const bv$6 = "_bv_1gnxm_18";
const isDisabled$4 = "_isDisabled_1gnxm_58";
const bal$4 = "_bal_1gnxm_65";
const buttonText$1 = "_buttonText_1gnxm_90";
const styles$J = {
  buttonPrimary,
  bv: bv$6,
  isDisabled: isDisabled$4,
  bal: bal$4,
  buttonText: buttonText$1,
  "button-hover": "_button-hover_1gnxm_1"
};
const ButtonPrimary = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  style,
  isDisabled: isDisabled2 = false,
  onClick,
  className,
  href,
  target,
  onMouseEnter,
  brand = "bv"
}, ref) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
    onMouseEnter,
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$J.buttonPrimary, styles$J[brand], className, {
      [styles$J.isDisabled]: isDisabled2
    }),
    style,
    onClick,
    target,
    href,
    ref,
    children: typeof children === "string" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: styles$J.buttonText,
      dangerouslySetInnerHTML: {
        __html: children
      }
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: styles$J.buttonText,
      children
    })
  });
});
const stretch = "_stretch_ig0pm_18";
const isDisabled$3 = "_isDisabled_ig0pm_42";
const bv$5 = "_bv_ig0pm_46";
const styles$I = {
  stretch,
  isDisabled: isDisabled$3,
  bv: bv$5,
  "button-hover": "_button-hover_ig0pm_1"
};
const ButtonStretch = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  style,
  isDisabled: isDisabled2 = false,
  onClick,
  className,
  href,
  target,
  onMouseEnter,
  brand = "bv"
}, ref) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$I.stretch, styles$I[brand], className, {
      [styles$I.isDisabled]: isDisabled2
    }),
    style,
    onClick,
    onMouseEnter,
    target,
    href,
    ref,
    children: typeof children === "string" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: styles$I.buttonText,
      dangerouslySetInnerHTML: {
        __html: children
      }
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: styles$I.buttonText,
      children
    })
  });
});
const homepageCta = "_homepageCta_7tj58_18";
const ctaContent = "_ctaContent_7tj58_21";
const bv$4 = "_bv_7tj58_26";
const buttonText = "_buttonText_7tj58_39";
const styles$H = {
  homepageCta,
  ctaContent,
  bv: bv$4,
  buttonText,
  "button-hover": "_button-hover_7tj58_1"
};
const ButtonHomepage = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  style,
  isDisabled: isDisabled2 = false,
  onClick,
  className,
  href,
  target,
  onMouseEnter,
  brand = "bv"
}, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
  className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$H.homepageCta),
  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$H.ctaContent, styles$H[brand], className, {
      [styles$H.isDisabled]: isDisabled2
    }),
    style,
    onClick,
    onMouseEnter,
    target,
    href,
    ref,
    children: typeof children === "string" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: styles$H.buttonText,
      dangerouslySetInnerHTML: {
        __html: children
      }
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: styles$H.buttonText,
      children
    })
  })
}));
const buttonLink = "_buttonLink_t1hib_18";
const bv$3 = "_bv_t1hib_18";
const isDisabled$2 = "_isDisabled_t1hib_45";
const withIcon = "_withIcon_t1hib_50";
const bal$3 = "_bal_t1hib_54";
const styles$G = {
  buttonLink,
  bv: bv$3,
  isDisabled: isDisabled$2,
  withIcon,
  bal: bal$3,
  "button-hover": "_button-hover_t1hib_1"
};
const ButtonLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  style,
  isDisabled: isDisabled2 = false,
  onClick,
  className,
  href,
  target,
  onMouseEnter,
  brand = "bv"
}, ref) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
    onMouseEnter,
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$G.buttonLink, styles$G[brand], className, {
      [styles$G.isDisabled]: isDisabled2
    }),
    style,
    onClick,
    target,
    href,
    ref,
    children: typeof children === "string" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      dangerouslySetInnerHTML: {
        __html: children
      }
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children
    })
  });
});
const ButtonLinkWithIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  className,
  ...rest
}, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonLink, {
  className: classnames__WEBPACK_IMPORTED_MODULE_1__(className, styles$G.withIcon),
  ...rest,
  ref,
  children
}));
const prefix = "web-cms";
const export_module = {
  prefix,
  "button-hover": "_button-hover_1pt2f_1"
};
const getID = (config2) => `${prefix}-${config2.type}-${config2.identifier}`;
const cta$9 = "_cta_bvo56_18";
const hiddenLink = "_hiddenLink_bvo56_22";
const twoCta = "_twoCta_bvo56_26";
const ctaButton = "_ctaButton_bvo56_26";
const styles$F = {
  cta: cta$9,
  hiddenLink,
  twoCta,
  ctaButton,
  "button-hover": "_button-hover_bvo56_1"
};
const functional = "_functional_ezxg4_18";
const bv$2 = "_bv_ezxg4_18";
const isDisabled$1 = "_isDisabled_ezxg4_31";
const styles$E = {
  functional,
  bv: bv$2,
  isDisabled: isDisabled$1,
  "button-hover": "_button-hover_ezxg4_1"
};
const ButtonFunctional = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  style,
  isDisabled: isDisabled2 = false,
  onClick,
  className,
  href,
  target,
  onMouseEnter,
  brand = "bv"
}, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
  className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$E.functional, styles$E[brand], className, {
    [styles$E.isDisabled]: isDisabled2
  }),
  style,
  onClick,
  onMouseEnter,
  target,
  href,
  ref,
  children: typeof children === "string" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: styles$E.buttonText,
    dangerouslySetInnerHTML: {
      __html: children
    }
  }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: styles$E.buttonText,
    children
  })
}));
const editorial = "_editorial_1nglb_18";
const bv$1 = "_bv_1nglb_18";
const isDisabled = "_isDisabled_1nglb_33";
const styles$D = {
  editorial,
  bv: bv$1,
  isDisabled,
  "button-hover": "_button-hover_1nglb_1"
};
const ButtonEditorial = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  style,
  isDisabled: isDisabled2 = false,
  onClick,
  className,
  href,
  target,
  onMouseEnter,
  brand = "bv"
}, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
  className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$D.editorial, styles$D[brand], className, {
    [styles$D.isDisabled]: isDisabled2
  }),
  style,
  onClick,
  onMouseEnter,
  target,
  href,
  ref,
  children: [typeof children === "string" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: styles$D.buttonText,
    dangerouslySetInnerHTML: {
      __html: children
    }
  }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    className: styles$D.buttonText,
    children
  }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg", {
    width: "0.75em",
    height: "0.75em",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path", {
      d: "M15 7.35029L8.475 0.825293L7.425 1.80029L12.3 6.67529L6.55671e-07 6.67529L5.31094e-07 8.10029L12.3 8.10029L7.2 13.2003L8.25 14.1753L15 7.35029Z",
      fill: "currentColor"
    })
  })]
})));
const useHomepageCTAOnClick = (componentIndex) => {
  const { onEvent } = useCMSConfig();
  const homepageCTAOnClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((text2, trackSwiperIndex = -1, innerIndex = -1) => {
    if (!text2)
      return;
    onEvent(EventType.homepageCTAOnClick, {
      text: `${text2 || ""}${trackSwiperIndex > -1 ? `_${trackSwiperIndex + 1}` : ""}${innerIndex > -1 ? `_${innerIndex + 1}` : ""}`,
      index: componentIndex || 0
    });
  }, [onEvent, componentIndex]);
  return {
    homepageCTAOnClick
  };
};
const log$n = createLog("cta");
const getCTARender = (config2) => {
  switch (config2.style) {
    case "bvLink":
      return ButtonLink;
    case "bvLinkWithIcon":
      return ButtonLinkWithIcon;
    case "bvPrimary":
    case "balDark":
    case "balDarkIconRight":
      return ButtonPrimary;
    case "bvSecondary":
    case "balLight":
    case "balLightIconRight":
      return ButtonSecondary;
    case "bvStretch":
      return ButtonStretch;
    case "functionalBorn":
      return ButtonFunctional;
    case "editorialBorn":
      return ButtonEditorial;
    case "bvHomepage":
      return ButtonHomepage;
    default:
      return ButtonPrimary;
  }
};
const CtaLink = ({
  data,
  config: config2,
  isTouchableBv,
  componentIndex,
  trackSwiperIndex,
  brand
}) => {
  const Button = getCTARender(data);
  const isDisabled2 = checkDisabled(data.clickBehavior);
  const {
    onEvent
  } = useCMSConfig();
  const hiddenLinkRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const trackHomepageCTAOnClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((text2) => {
    homepageCTAOnClick(text2 || "", trackSwiperIndex);
  }, [homepageCTAOnClick, trackSwiperIndex]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
    href: data.clickBehavior.url,
    passHref: !IsSpecialClickBehavior(data.clickBehavior) && !isTouchableBv,
    legacyBehavior: true,
    children: isTouchableBv ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
        href: data.clickBehavior.url,
        className: styles$F.hiddenLink,
        ref: hiddenLinkRef,
        onClick: () => trackHomepageCTAOnClick(data.clickBehavior.url)
      }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
        className: styles$F.ctaButton,
        style: normalizeTextStyle(data.wordingStyle),
        brand,
        isDisabled: isDisabled2,
        target: data.clickBehavior.isNewWindow ? "_blank" : "_self",
        onClick: createCTACallBack({
          config: config2,
          clickBehavior: data.clickBehavior,
          text: data.wording,
          isDisabled: isDisabled2,
          onEvent,
          isTouchableBv,
          hiddenLinkRef,
          trackHomepageCTAOnClick
        }),
        onMouseEnter: () => onEvent(EventType.startHoverAudio, {
          component: config2
        }),
        children: data.wording
      })]
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
      className: styles$F.ctaButton,
      style: normalizeTextStyle(data.wordingStyle),
      brand,
      isDisabled: isDisabled2,
      target: data.clickBehavior.isNewWindow ? "_blank" : "_self",
      onClick: createCTACallBack({
        config: config2,
        clickBehavior: data.clickBehavior,
        text: data.wording,
        isDisabled: isDisabled2,
        onEvent,
        isTouchableBv,
        hiddenLinkRef,
        trackHomepageCTAOnClick
      }),
      onMouseEnter: () => onEvent(EventType.startHoverAudio, {
        component: config2
      }),
      children: data.wording
    })
  });
};
const CTA = ({
  config: config2,
  componentIndex,
  trackSwiperIndex
}) => {
  var _a, _b, _c, _d;
  const device = useDeviceType();
  const paddingMargin2 = getPaddingMarginStyle(config2, device.currentDevice);
  const {
    brand
  } = useCMSConfig();
  const addDynamicHeaderTarget = useDynamicHeader();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$n("config:", config2);
  }, [config2]);
  const isTouchableBv = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => brand === "bv" && (device.isMobile || device.isTablet), [brand, device.isMobile, device.isTablet]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    addDynamicHeader: addDynamicHeaderTarget,
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    children: brand === "bv" || ((_a = config2 == null ? void 0 : config2.cta2) == null ? void 0 : _a.wording) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      id: getID(config2),
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$F.cta, {
        [styles$F.twoCta]: (_b = config2 == null ? void 0 : config2.cta2) == null ? void 0 : _b.wording
      }),
      style: {
        textAlign: config2.alignment,
        ...paddingMargin2
      },
      children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CtaLink, {
        data: config2,
        config: config2,
        isTouchableBv,
        componentIndex,
        trackSwiperIndex,
        brand
      }), (device.currentDevice === "mobile" || device.currentDevice === "tablet") && ((_c = config2 == null ? void 0 : config2.cta2) == null ? void 0 : _c.wording) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}) : null, ((_d = config2 == null ? void 0 : config2.cta2) == null ? void 0 : _d.wording) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CtaLink, {
        data: config2.cta2,
        config: config2,
        isTouchableBv,
        componentIndex,
        trackSwiperIndex,
        brand
      }) : null]
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: getID(config2),
      className: styles$F.cta,
      style: {
        textAlign: config2.alignment,
        ...paddingMargin2
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CtaLink, {
        data: config2,
        config: config2,
        isTouchableBv,
        componentIndex,
        trackSwiperIndex,
        brand
      })
    })
  });
};
function createCTACallBack({
  config: config2,
  clickBehavior,
  text: text2,
  isDisabled: isDisabled2,
  onEvent,
  isTouchableBv = false,
  hiddenLinkRef,
  trackHomepageCTAOnClick
}) {
  return (e) => {
    var _a, _b;
    if (isDisabled2) {
      e.preventDefault();
      return;
    }
    if (clickBehavior.type === "newsletter") {
      onEvent(EventType.newsletter, {
        component: config2,
        text: text2
      });
      e.preventDefault();
    }
    onEvent(EventType.ctaClick, {
      component: config2,
      text: text2
    });
    trackHomepageCTAOnClick && trackHomepageCTAOnClick(text2);
    isTouchableBv && ((_b = (_a = hiddenLinkRef == null ? void 0 : hiddenLinkRef.current) == null ? void 0 : _a.click) == null ? void 0 : _b.call(_a));
  };
}
const renderChildren = (children, config2) => {
  if (typeof children === "function")
    return children(config2);
  return children;
};
const container$4 = "_container_1gptg_18";
const isInGridFullHeight$1 = "_isInGridFullHeight_1gptg_24";
const video$2 = "_video_1gptg_28";
const bvSoundIcon = "_bvSoundIcon_1gptg_78";
const bvTemplate = "_bvTemplate_1gptg_84";
const bvPlayIcon = "_bvPlayIcon_1gptg_144";
const bvPauseIcon = "_bvPauseIcon_1gptg_147";
const bvMuteIcon = "_bvMuteIcon_1gptg_168";
const bvUnMuteIcon = "_bvUnMuteIcon_1gptg_171";
const black = "_black_1gptg_183";
const bvNative = "_bvNative_1gptg_200";
const videoLinkMask = "_videoLinkMask_1gptg_203";
const playIcon$1 = "_playIcon_1gptg_207";
const noControl = "_noControl_1gptg_218";
const withControl = "_withControl_1gptg_231";
const vjsControlBarPlaceholder = "_vjsControlBarPlaceholder_1gptg_235";
const bal$2 = "_bal_1gptg_249";
const balBigPlayButton = "_balBigPlayButton_1gptg_252";
const title$8 = "_title_1gptg_258";
const buttonGroup$1 = "_buttonGroup_1gptg_280";
const btn$1 = "_btn_1gptg_293";
const largePlayIcon = "_largePlayIcon_1gptg_312";
const iconWrapper = "_iconWrapper_1gptg_328";
const soundIcon = "_soundIcon_1gptg_341";
const playIconBal = "_playIconBal_1gptg_351";
const titleCtaWrapper = "_titleCtaWrapper_1gptg_363";
const inSlide = "_inSlide_1gptg_372";
const native = "_native_1gptg_375";
const styles$C = {
  container: container$4,
  isInGridFullHeight: isInGridFullHeight$1,
  video: video$2,
  bvSoundIcon,
  bvTemplate,
  bvPlayIcon,
  bvPauseIcon,
  bvMuteIcon,
  bvUnMuteIcon,
  black,
  bvNative,
  videoLinkMask,
  playIcon: playIcon$1,
  noControl,
  withControl,
  vjsControlBarPlaceholder,
  bal: bal$2,
  balBigPlayButton,
  title: title$8,
  buttonGroup: buttonGroup$1,
  btn: btn$1,
  largePlayIcon,
  iconWrapper,
  soundIcon,
  playIconBal,
  titleCtaWrapper,
  inSlide,
  native,
  "button-hover": "_button-hover_1gptg_1"
};
const textWrapper = "_textWrapper_blyz7_18";
const title$7 = "_title_blyz7_31";
const ctas$1 = "_ctas_blyz7_32";
const sliderContainer$1 = "_sliderContainer_blyz7_51";
const ctaWrapper$1 = "_ctaWrapper_blyz7_60";
const flexEnd = "_flexEnd_blyz7_64";
const center$1 = "_center_blyz7_67";
const allBVHomepageCta = "_allBVHomepageCta_blyz7_74";
const defaultDistance = "_defaultDistance_blyz7_74";
const ctaTwoColumnWrapper = "_ctaTwoColumnWrapper_blyz7_78";
const styles$B = {
  textWrapper,
  title: title$7,
  ctas: ctas$1,
  sliderContainer: sliderContainer$1,
  ctaWrapper: ctaWrapper$1,
  flexEnd,
  center: center$1,
  allBVHomepageCta,
  defaultDistance,
  ctaTwoColumnWrapper,
  "button-hover": "_button-hover_blyz7_1"
};
const buttonTitle = "_buttonTitle_1x9h5_18";
const bv = "_bv_1x9h5_18";
const styles$A = {
  buttonTitle,
  bv,
  "button-hover": "_button-hover_1x9h5_1"
};
const ButtonTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  style,
  isDisabled: isDisabled2 = false,
  onClick,
  className,
  href,
  target,
  onMouseEnter,
  brand = "bv"
}, ref) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
    onMouseEnter,
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$A.buttonTitle, styles$A[brand], className, {
      [styles$A.isDisabled]: isDisabled2
    }),
    style,
    onClick,
    target,
    href,
    ref,
    children: typeof children === "string" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      dangerouslySetInnerHTML: {
        __html: children
      }
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      children
    })
  });
});
function BV_CTA({
  clickBehavior,
  text: text2,
  onEvent,
  config: config2,
  className,
  children,
  style,
  type = "bvPrimary",
  componentIndex,
  trackSwiperIndex = -1
}) {
  const isDisabled2 = checkDisabled(clickBehavior);
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const trackHomepageCTAOnClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((text22) => {
    homepageCTAOnClick(text22, trackSwiperIndex);
  }, [homepageCTAOnClick, trackSwiperIndex]);
  const getButton = (type2) => {
    switch (type2) {
      case "bvLink":
        return ButtonLink;
      case "bvLinkWithIcon":
        return ButtonLinkWithIcon;
      case "bvPrimary":
        return ButtonPrimary;
      case "bvSecondary":
        return ButtonSecondary;
      case "bvStretch":
        return ButtonStretch;
      case "functionalBorn":
        return ButtonFunctional;
      case "editorialBorn":
        return ButtonEditorial;
      case "bvHomepage":
        return ButtonHomepage;
      case "bvTitle":
        return ButtonTitle;
      default:
        return ButtonPrimary;
    }
  };
  const Button = getButton(type);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
    href: clickBehavior.url,
    passHref: !IsSpecialClickBehavior(clickBehavior),
    legacyBehavior: true,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
      isDisabled: isDisabled2,
      className,
      target: clickBehavior.isNewWindow ? "_blank" : "_self",
      style,
      brand: "bv",
      onClick: createCTACallBack({
        config: config2,
        clickBehavior,
        text: text2,
        isDisabled: isDisabled2,
        onEvent,
        trackHomepageCTAOnClick
      }),
      children: children || text2
    })
  });
}
const BvImageAndVideoCtaGroup = ({
  config: config2,
  brand,
  onEvent,
  wrapperClassName,
  source,
  trackSwiperIndex,
  componentIndex
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
  const device = useDeviceType();
  const {
    currentDevice,
    isDesktop
  } = device;
  const [ctaWidth, setCtaWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("auto");
  const isInImage = config2.hasOwnProperty("ctaDisplay");
  const [isAllBVHomepageCta, setIsAllBVHomepageCta] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const textWrapperClass = (config2 == null ? void 0 : config2.parentIdentifier) ? `textWrapper-${config2.parentIdentifier}-${config2.identifier}` : `textWrapper-${config2.identifier}`;
  const {
    title: title2,
    ctas: ctas2,
    ctaSpace,
    ctasWrap
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _a2, _b2, _c2, _d2;
    if (!currentDevice) {
      return {};
    }
    if (isInImage) {
      const ctasDisplay = config2[`${currentDevice}2CtasDisplay`] || "sideBySide";
      return {
        title: config2[`${currentDevice}Title`] && ((_a2 = config2[`${currentDevice}Title`]) == null ? void 0 : _a2.wording) ? config2[`${currentDevice}Title`] : null,
        ctas: (_d2 = (_c2 = currentDevice === "desktop" ? config2 == null ? void 0 : config2.cta : ((_b2 = config2[`${currentDevice}Cta`]) == null ? void 0 : _b2.length) ? config2[`${currentDevice}Cta`] : []) == null ? void 0 : _c2.filter((ctaItem) => Boolean(ctaItem.wording))) == null ? void 0 : _d2.slice(0, 2),
        ctaSpace: config2[`${currentDevice}2CtaSpace`] || 0,
        ctasWrap: ctasDisplay === "oneAboveTheOther"
      };
    }
    const videoCurrentConfig = config2[currentDevice];
    const videoCta1 = videoCurrentConfig.cta1;
    const videoCta2 = videoCurrentConfig.cta2;
    const ctaList2 = [];
    if (videoCta1 == null ? void 0 : videoCta1.wording) {
      ctaList2.push(videoCta1);
    }
    if (videoCta2 == null ? void 0 : videoCta2.wording) {
      ctaList2.push(videoCta2);
    }
    const videoCtasDisplay = videoCurrentConfig.ctasDisplay || CTAS_DISPLAY.sideBySide;
    return {
      title: !!videoCurrentConfig.title.wording ? videoCurrentConfig.title : null,
      ctas: ctaList2,
      ctaSpace: videoCurrentConfig.ctaSpace || 0,
      ctasWrap: videoCtasDisplay === CTAS_DISPLAY.oneAboveTheOther
    };
  }, [config2, currentDevice, isInImage]);
  let sameTitleDirection = false;
  if (ctas2) {
    for (let index = 0; index < (ctas2 == null ? void 0 : ctas2.length); index++) {
      const element = ctas2[index];
      if ((title2 == null ? void 0 : title2.position) === (element == null ? void 0 : element.position)) {
        sameTitleDirection = true;
      }
    }
  }
  const sameCtaDirection = !!ctas2 && ((_a = ctas2[0]) == null ? void 0 : _a.position) === ((_b = ctas2[1]) == null ? void 0 : _b.position);
  const setOverflowClip = (parentElement, className) => {
    const allElement = parentElement.querySelectorAll(className);
    allElement.forEach((element) => {
      const ele = element;
      if (ele) {
        ele.style.overflow = "clip";
      }
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if ((ctas2 || []).length < 2)
      return;
    const ctaElements = document.querySelectorAll(`.${textWrapperClass} .custom-cta`);
    const textWrapperElement = document.querySelector(`.${textWrapperClass}`);
    const ctaMaxWidth = ((textWrapperElement == null ? void 0 : textWrapperElement.offsetWidth) - parseFloat((ctaSpace || 0) + "")) / 2;
    const ctasWidth = [];
    ctaElements.forEach((cta2) => {
      const _width = cta2 == null ? void 0 : cta2.offsetWidth;
      ctasWidth.push(_width);
    });
    const maxWidth = Math.max(...ctasWidth);
    setCtaWidth(maxWidth > 0 ? `${maxWidth > ctaMaxWidth ? ctaMaxWidth : maxWidth}px` : "auto");
  }, [setCtaWidth, ctas2, config2 == null ? void 0 : config2.parentIdentifier, config2.identifier, ctaSpace, textWrapperClass]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (componentIndex !== 0)
      return;
    const componentsWrap2 = document.querySelector(".componentsWrap");
    const firstElement = componentsWrap2 == null ? void 0 : componentsWrap2.querySelector(":first-child");
    if (firstElement && brand === "bv") {
      firstElement.style.overflow = "clip";
      setOverflowClip(firstElement, ".videoComponent");
      setOverflowClip(firstElement, ".dynamicHeaderContainer");
      const swiper2 = firstElement.querySelector(".swiper");
      if (swiper2) {
        swiper2.style.overflow = "clip";
      }
      const allAnchorElements = firstElement.querySelectorAll(".link");
      allAnchorElements.forEach((element) => {
        const ele = element;
        if (ele) {
          ele.style.display = "block";
          ele.style.overflow = "hidden";
          ele.style.height = "100%";
        }
      });
      const dualityBanner = firstElement.querySelector(".dualityBanner");
      if (dualityBanner) {
        dualityBanner.style.overflow = "clip";
      }
      setTimeout(() => {
        const allSameClassElements = firstElement.querySelectorAll(".bv-image-and-video-cta-group");
        allSameClassElements.forEach((element) => {
          const ele = element;
          if (ele) {
            const elementHeight = ele.offsetHeight;
            ele.style.marginTop = -elementHeight + "px";
            ele.style.position = "sticky";
            ele.style.bottom = "0";
            ele.style.padding = "0 15px 24px";
          }
        });
      }, 200);
    }
  }, [brand, componentIndex, config2.type, ctas2]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!(ctas2 || []).length)
      return;
    const _isAllBVHomepageCta = (ctas2 || []).every((item2) => item2.template === "bvHomepage");
    setIsAllBVHomepageCta(_isAllBVHomepageCta);
  }, [ctas2, setIsAllBVHomepageCta]);
  if (brand !== "bv" && isInImage && (config2 == null ? void 0 : config2.ctaDisplay) !== "dedicatedForDevice" || !currentDevice || !ctas2)
    return null;
  const TitleDom = () => title2 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BV_CTA, {
    type: "bvTitle",
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.title),
    style: normalizeTextStyle(title2.style),
    clickBehavior: title2 == null ? void 0 : title2.clickBehavior,
    config: config2,
    text: title2 == null ? void 0 : title2.wording,
    onEvent,
    componentIndex,
    trackSwiperIndex
  }) : null;
  const ctaDom = (ctaItem) => (ctaItem == null ? void 0 : ctaItem.wording) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BV_CTA, {
    type: (ctaItem == null ? void 0 : ctaItem.template) || "editorialBorn",
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctas, "custom-cta"),
    style: {
      width: ctaWidth,
      ...normalizeTextStyle(ctaItem.style)
    },
    clickBehavior: ctaItem == null ? void 0 : ctaItem.clickBehavior,
    config: config2,
    text: ctaItem == null ? void 0 : ctaItem.wording,
    onEvent,
    componentIndex,
    trackSwiperIndex
  }) : null;
  const CenterDom = ({
    children,
    position
  }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [position !== "left" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), children, position !== "right" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
  });
  const TitleAutoAlignDom = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: styles$B.ctaWrapper,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
      position: title2 == null ? void 0 : title2.position,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
    })
  });
  const style = {
    display: "flex",
    gap: ctaSpace || 0
  };
  const Gap = () => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    style: {
      width: ctaSpace || 0,
      height: 0,
      display: "inline-block"
    }
  });
  const status = `isDesktop=${!!isDesktop}&titleVisible=${!!title2}&ctaLength=${ctas2 == null ? void 0 : ctas2.length}&sameTitleDirection=${sameTitleDirection}&sameCtaDirection=${sameCtaDirection}&ctasWrap=${ctasWrap}&title=${title2 == null ? void 0 : title2.position}&cta1=${(_c = ctas2[0]) == null ? void 0 : _c.position}&cta2=${(_d = ctas2[1]) == null ? void 0 : _d.position}`;
  const dom = /* @__PURE__ */ new Map([
    [
      /^isDesktop=(true|false)&titleVisible=true&ctaLength=0.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=1.*?&title=left&cta1=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {}), ctaDom(ctas2[0])]
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=1.*?&title=(left|right)&cta1=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: (_e = ctas2[0]) == null ? void 0 : _e.position,
            children: ctaDom(ctas2[0])
          })
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=1.*?&title=center&cta1=(left|center|right).*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: (_f = ctas2[0]) == null ? void 0 : _f.position,
            children: ctaDom(ctas2[0])
          })
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=1.*?&title=right&cta1=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})]
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=1.*?&title=left&cta1=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: ctaDom(ctas2[0])
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=1.*?&title=right&cta1=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[0])]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false&title=left&cta1=right&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper),
            style,
            children: [ctaDom(ctas2[0]), ctaDom(ctas2[1])]
          })]
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false&title=right&cta1=left&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: styles$B.ctaWrapper,
            style,
            children: [ctaDom(ctas2[0]), ctaDom(ctas2[1])]
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})]
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&title=(left|center|right)&cta1=left&cta2=(center|right).*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleAutoAlignDom, {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper),
          style,
          children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaTwoColumnWrapper),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
              position: (_g = ctas2[1]) == null ? void 0 : _g.position,
              children: ctaDom(ctas2[1])
            })
          })]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&title=(left|right)&cta1=right&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [(title2 == null ? void 0 : title2.position) === "right" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [ctaDom(ctas2[1]), ctaDom(ctas2[0])]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&cta1=right&cta2=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaTwoColumnWrapper),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
              position: (_h = ctas2[1]) == null ? void 0 : _h.position,
              children: ctaDom(ctas2[1])
            })
          }), ctaDom(ctas2[0])]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&cta1=center&cta2=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.center),
          style,
          children: [ctaDom(ctas2[0]), ctaDom(ctas2[1])]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false&title=left&cta1=left&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: {
              textAlign: "left"
            },
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
          })
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false&title=right&cta1=right&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: {
              textAlign: "right"
            },
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
          })]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false&title=left&cta1=center&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [ctaDom(ctas2[1]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaTwoColumnWrapper),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
              position: (_i = ctas2[0]) == null ? void 0 : _i.position,
              children: ctaDom(ctas2[0])
            })
          })]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false&title=left&cta1=center&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaTwoColumnWrapper),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
              position: (_j = ctas2[1]) == null ? void 0 : _j.position,
              children: ctaDom(ctas2[1])
            })
          })]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false&title=center&cta1=left&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style,
            children: [ctaDom(ctas2[0]), ctaDom(ctas2[1])]
          })
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false&title=center&cta1=right&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style,
            children: [ctaDom(ctas2[0]), ctaDom(ctas2[1])]
          })]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false&title=center&cta1=right&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [ctaDom(ctas2[1]), ctaDom(ctas2[0])]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false&title=center&cta1=center&cta2=(left|right).*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [((_k = ctas2[1]) == null ? void 0 : _k.position) === "left" && ctaDom(ctas2[1]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaTwoColumnWrapper),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
              position: (_l = ctas2[0]) == null ? void 0 : _l.position,
              children: ctaDom(ctas2[0])
            })
          }), ((_m = ctas2[1]) == null ? void 0 : _m.position) === "right" && ctaDom(ctas2[1])]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=false&title=right&cta1=center&cta2=(left|right).*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [((_n = ctas2[1]) == null ? void 0 : _n.position) === "left" && ctaDom(ctas2[1]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaTwoColumnWrapper),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
              position: (_o = ctas2[0]) == null ? void 0 : _o.position,
              children: ctaDom(ctas2[0])
            })
          }), ((_p = ctas2[1]) == null ? void 0 : _p.position) === "right" && ctaDom(ctas2[1])]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true&title=left&cta1=left&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.defaultDistance),
          children: ctaDom(ctas2[0])
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: ctaDom(ctas2[1])
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true&title=right&cta1=right&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.defaultDistance),
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[0])]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[1])]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true&title=left&cta1=right&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.defaultDistance),
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[0])]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {}), ctaDom(ctas2[1])]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true&title=right&cta1=left&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.defaultDistance),
          children: ctaDom(ctas2[0])
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [ctaDom(ctas2[1]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true.*?&cta1=left&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleAutoAlignDom, {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: ctaDom(ctas2[0])
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[1])]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true.*?&cta1=left&cta2=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleAutoAlignDom, {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: ctaDom(ctas2[0])
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[1]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true.*?&cta1=center&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleAutoAlignDom, {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [ctaDom(ctas2[1]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true.*?&cta1=center&cta2=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleAutoAlignDom, {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.defaultDistance),
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[1]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true.*?&cta1=center&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[1])]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true.*?&cta1=right&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleAutoAlignDom, {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[0])]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: ctaDom(ctas2[1])
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true.*?&cta1=right&cta2=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleAutoAlignDom, {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: (_q = ctas2[1]) == null ? void 0 : _q.position,
            children: ctaDom(ctas2[1])
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: ctaDom(ctas2[0])
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true.*?&title=(left|center)&cta1=left&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleAutoAlignDom, {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.defaultDistance),
          children: ctaDom(ctas2[0])
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: ctaDom(ctas2[1])
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=true&ctaLength=2.*?&ctasWrap=true.*?&title=(right|center)&cta1=right&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleAutoAlignDom, {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.defaultDistance),
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[0])]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[1])]
        })]
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=false&ctaLength=1.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: (_r = ctas2[0]) == null ? void 0 : _r.position,
            children: ctaDom(ctas2[0])
          })
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=left&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [ctaDom(ctas2[0]), ctaDom(ctas2[1])]
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=left&cta2=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: styles$B.ctaWrapper,
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.ctaTwoColumnWrapper, styles$B.center),
            children: ctaDom(ctas2[1])
          })]
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=center&cta2=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.center),
          style,
          children: [ctaDom(ctas2[0]), ctaDom(ctas2[1])]
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=center&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: styles$B.ctaWrapper,
            children: [ctaDom(ctas2[1]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.ctaTwoColumnWrapper, styles$B.center),
            children: ctaDom(ctas2[0])
          })]
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=right&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [ctaDom(ctas2[1]), ctaDom(ctas2[0])]
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=left&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: {
              textAlign: "left"
            },
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
          })
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=right&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: {
              textAlign: "right"
            },
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
          })]
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=center&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.ctaTwoColumnWrapper, styles$B.center),
            children: ctaDom(ctas2[0])
          }), ctaDom(ctas2[1])]
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=right&cta2=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.ctaTwoColumnWrapper, styles$B.center),
            children: ctaDom(ctas2[1])
          }), ctaDom(ctas2[0])]
        })
      }, status)
    ],
    [
      /^isDesktop=true&titleVisible=false&ctaLength=2.*?&ctasWrap=true.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.defaultDistance),
          style,
          children: [((_s = ctas2[0]) == null ? void 0 : _s.position) !== "left" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[0]), ((_t = ctas2[0]) == null ? void 0 : _t.position) !== "right" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [((_u = ctas2[1]) == null ? void 0 : _u.position) !== "left" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[1]), ((_v = ctas2[1]) == null ? void 0 : _v.position) !== "right" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=1.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: (_w = ctas2[0]) == null ? void 0 : _w.position,
            children: ctaDom(ctas2[0])
          })
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&title=(left|center)&cta1=left&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: {
              textAlign: "left"
            },
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
          })
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&title=(right|center)&cta1=right&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: {
              textAlign: "right"
            },
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
          })]
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&cta1=center&cta2=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: {
              textAlign: "center"
            },
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&cta1=left&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [ctaDom(ctas2[0]), ctaDom(ctas2[1])]
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&cta1=right&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [ctaDom(ctas2[1]), ctaDom(ctas2[0])]
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&cta1=(left|right)&cta2=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [((_x = ctas2[0]) == null ? void 0 : _x.position) === "left" && ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.ctaTwoColumnWrapper, styles$B.center),
            style,
            children: ctaDom(ctas2[1])
          }), ((_y = ctas2[0]) == null ? void 0 : _y.position) === "right" && ctaDom(ctas2[0])]
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&title=center&cta1=center&cta2=(left|right).*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [((_z = ctas2[1]) == null ? void 0 : _z.position) === "left" && ctaDom(ctas2[1]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.ctaTwoColumnWrapper, styles$B.center),
            children: ctaDom(ctas2[0])
          }), ((_A = ctas2[1]) == null ? void 0 : _A.position) === "right" && ctaDom(ctas2[1])]
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&title=center&cta1=right&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&title=right&cta1=left&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
          })
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&title=left&cta1=right&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
          })]
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=2.*?&ctasWrap=false.*?&title=left&cta1=center&cta2=(right|left).*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [((_B = ctas2[1]) == null ? void 0 : _B.position) === "left" && ctaDom(ctas2[1]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.ctaTwoColumnWrapper, styles$B.center),
            style,
            children: ctaDom(ctas2[0])
          }), ((_C = ctas2[1]) == null ? void 0 : _C.position) === "right" && ctaDom(ctas2[1])]
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=true&ctaLength=2.*?&ctasWrap=true.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: title2 == null ? void 0 : title2.position,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TitleDom, {})
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.defaultDistance),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: (_D = ctas2[0]) == null ? void 0 : _D.position,
            children: ctaDom(ctas2[0])
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: (_E = ctas2[1]) == null ? void 0 : _E.position,
            children: ctaDom(ctas2[1])
          })
        })]
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=false&ctaLength=1.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: (_F = ctas2[0]) == null ? void 0 : _F.position,
            children: ctaDom(ctas2[0])
          })
        })
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=left&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper),
          children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
        })
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=center&cta2=center$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper, styles$B.center),
          children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
        })
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=left&cta2=center$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper),
          children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaTwoColumnWrapper),
            children: ctaDom(ctas2[1])
          })]
        })
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=right&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [ctaDom(ctas2[1]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[0])]
        })
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=center&cta2=(left|right).*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          style,
          children: [((_G = ctas2[1]) == null ? void 0 : _G.position) === "left" && ctaDom(ctas2[1]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaTwoColumnWrapper, styles$B.center),
            children: ctaDom(ctas2[0])
          }), ((_H = ctas2[1]) == null ? void 0 : _H.position) === "right" && ctaDom(ctas2[1])]
        })
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=center&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaTwoColumnWrapper),
            children: ctaDom(ctas2[0])
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
        })
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=left&cta2=left.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: {
              textAlign: "left"
            },
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
        })
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=center&cta2=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$B.ctaWrapper,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            style: {
              textAlign: "left"
            },
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {})]
        })
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=right&cta2=right.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper),
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), ctaDom(ctas2[1])]
          })]
        })
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=false&ctaLength=2.*?&ctasWrap=false.*?&cta1=right&cta2=center.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaWrapper),
          children: [ctaDom(ctas2[0]), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Gap, {}), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.ctaTwoColumnWrapper, styles$B.center),
            children: ctaDom(ctas2[1])
          })]
        })
      }, status)
    ],
    [
      /^isDesktop=false&titleVisible=false&ctaLength=2.*?&ctasWrap=true.*$/,
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: (_I = ctas2[0]) == null ? void 0 : _I.position,
            children: ctaDom(ctas2[0])
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$B.ctaWrapper,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CenterDom, {
            position: (_J = ctas2[1]) == null ? void 0 : _J.position,
            children: ctaDom(ctas2[1])
          })
        })]
      }, status)
    ],
    [/^.*$/, null]
  ]);
  const CTA_SPACE = "--cta-space";
  const wrapperStyle = {
    [CTA_SPACE]: ctaSpace
  };
  const getDome = (val) => {
    var _a2, _b2;
    return (_b2 = (_a2 = [...dom].find(([regex]) => regex.test(val))) == null ? void 0 : _a2[1]) != null ? _b2 : null;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$B.textWrapper, textWrapperClass, "bv-image-and-video-cta-group", source === "sliderContainer" ? styles$B.sliderContainer : "", wrapperClassName, isAllBVHomepageCta && ctasWrap && styles$B.allBVHomepageCta),
    style: wrapperStyle,
    children: getDome(status)
  });
};
const WhetherToUseDynamicHeaderContainer = (props2) => {
  return props2.useDynamicHeaderContainer ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    ...props2,
    children: props2 == null ? void 0 : props2.children
  }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: props2 == null ? void 0 : props2.children
  });
};
const testIOS = () => CSS.supports("(-webkit-touch-callout: none)");
function useWindowHeightPageScrollDisableRefresh() {
  const [windowHeight, setWindowHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (testIOS()) {
      const div = document.createElement("div");
      Object.assign(div.style, {
        width: "100%",
        height: "-webkit-fill-available",
        pointerEvents: "none"
      });
      document.body.appendChild(div);
      const { height } = div.getBoundingClientRect();
      setWindowHeight(height || window.innerHeight);
      div.remove();
    } else {
      setWindowHeight(window.innerHeight);
    }
  }, []);
  const handleResize = () => {
    if (window == null ? void 0 : window.isVideoFullscreen)
      return;
    if (window.innerWidth < 768 || testIOS()) {
      return;
    }
    setWindowHeight(window.innerHeight);
  };
  const debounceFunc = useDebounce(handleResize);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("resize", debounceFunc);
    document.addEventListener("fullscreenchange", debounceFunc);
    return () => {
      window.removeEventListener("resize", debounceFunc);
      document.removeEventListener("fullscreenchange", debounceFunc);
    };
  }, [debounceFunc]);
  return windowHeight;
}
const videoFullScreenChange = (player) => {
  const isVideoFullscreen = player == null ? void 0 : player.isFullscreen();
  window.isVideoFullscreen = isVideoFullscreen;
  if (isVideoFullscreen)
    return;
  const fullscreenChangeEvent = new Event("fullscreenchange");
  document.dispatchEvent(fullscreenChangeEvent);
};
const log$m = createLog("video");
const Video$1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  className,
  headerClassName,
  config: config2,
  onLoad,
  onReady,
  onPlay,
  onPause,
  onEnd,
  source,
  noHeader,
  children,
  currentActive,
  showBvPlayIcon = true,
  videoFullDomHeight = false,
  componentIndex,
  trackSwiperIndex = -1,
  mobileAndTabletDisabledVideoClickPlayOrPause = false,
  desktopDisabledVideoClickPlayOrPause = false,
  controlBar,
  isGrid = false,
  isNativeControlBarCustomBottom = true
}, ref) => {
  var _a, _b, _c, _d, _e;
  const {
    brand,
    onEvent,
    bannerHeight
  } = useCMSConfig();
  const {
    currentDevice,
    isMobile,
    isTablet
  } = useDeviceType();
  const onLoadRef = useLatest(onLoad);
  const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const playerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const videoWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const addDynamicHeader = useDynamicHeader();
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const autoPlayReplay = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const progressData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const setAutoPlayReplay = () => {
    autoPlayReplay.current = true;
  };
  const currentConfig = config2[currentDevice || "desktop"];
  const isBVHPStyle = currentConfig.controlBar === "customized" && brand === "bv";
  const isBVTemplateStyle = currentConfig.controlBar === "brandTemplate" && brand === "bv";
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const handleCmsLinkClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    var _a2;
    homepageCTAOnClick(((_a2 = config2.title) == null ? void 0 : _a2.wording) || "", trackSwiperIndex);
  }, [homepageCTAOnClick, trackSwiperIndex]);
  const unTouchableBv = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => brand === "bv" && (isMobile || isTablet), [brand, isMobile, isTablet]);
  const canClickURL = currentConfig.clickBehavior.type !== "unClickable" && !!currentConfig.clickBehavior.url;
  const showBALBigPlayBtn = brand === "bal" && (!currentConfig.controlBar || currentConfig.controlBar === "native") && currentConfig.playMode === "manuallyPlay";
  const videoOpt = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const isAutoPlay = currentConfig.playMode === "autoPlay";
    return {
      muted: isAutoPlay,
      autoplay: isAutoPlay,
      loop: brand === "bv" ? !!currentConfig.isLoop : isAutoPlay
    };
  }, [brand, currentConfig.isLoop, currentConfig.playMode]);
  const [isMuted, setIsMuted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(videoOpt.muted || false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsMuted(videoOpt.muted);
  }, [videoOpt.muted]);
  const videoName = currentConfig.videoName;
  const handlePlay = () => {
    var _a2;
    (_a2 = playerRef.current) == null ? void 0 : _a2.play();
  };
  const handlePause = () => {
    var _a2;
    (_a2 = playerRef.current) == null ? void 0 : _a2.pause();
  };
  const handleReady = useLatest((player) => {
    if (!player) {
      return;
    }
    onReady == null ? void 0 : onReady(player);
    player.on("play", () => {
      setIsPlaying(true);
      onPlay == null ? void 0 : onPlay();
      onEvent(EventType.video, {
        component: config2,
        status: "play",
        title: videoName
      });
    });
    player.on("pause", () => {
      setIsPlaying(false);
      onPause == null ? void 0 : onPause();
      onEvent(EventType.video, {
        component: config2,
        status: "pause",
        title: videoName
      });
    });
    !unTouchableBv && !mobileAndTabletDisabledVideoClickPlayOrPause && player.on("touchend", (event) => {
      if (event.target.classList.contains("vjs-poster") && source !== "sliderContainer") {
        player.play();
        return;
      }
      if (event.target.nodeName === "VIDEO" && source !== "sliderContainer") {
        player.paused() ? player.play() : player.pause();
      }
    });
    !desktopDisabledVideoClickPlayOrPause && player.on("click", (event) => {
      if (event.target.classList.contains("vjs-poster")) {
        player.play();
        return;
      }
      if (event.target.nodeName === "VIDEO" && currentConfig.controlBar !== "native" && !isBVTemplateStyle && !isBVHPStyle) {
        player.paused() ? player.play() : player.pause();
      }
    });
    player.on("ended", function() {
      onEnd == null ? void 0 : onEnd();
      if (currentConfig.controlBar === "shortLoopVideo") {
        player.currentTime(0);
        player.hasStarted(false);
        player.trigger("ready");
      }
    });
    player.on("fullscreenchange", function() {
      videoFullScreenChange(player);
    });
  });
  const isFill = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (!currentDevice)
      return false;
    return currentConfig.height === "customized" || currentConfig.height === "fullHeight";
  }, [currentDevice, currentConfig.height]);
  const videoProgress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
    player,
    isAutoPlay,
    autoPlayReplay: autoPlayReplay2,
    setAutoPlayReplay: setAutoPlayReplay2
  }) => {
    const tracker = (progress) => {
      if (progressData.current.includes(progress))
        return;
      onEvent(EventType.videoProgress, {
        component: config2,
        progress,
        text: currentConfig.videoName || ""
      });
      progressData.current.push(progress);
    };
    player.on("timeupdate", function() {
      if (isAutoPlay && autoPlayReplay2)
        return;
      const progress = Number((player.currentTime() / player.duration()).toFixed(2));
      if (progress >= 0.25) {
        tracker(25);
      }
      if (progress >= 0.5) {
        tracker(50);
      }
      if (progress >= 0.75) {
        tracker(75);
      }
      if (progress >= 0.99) {
        tracker(100);
      }
      if (isAutoPlay && progress === 1) {
        setAutoPlayReplay2();
        progressData.current = [];
      }
    });
  }, []);
  const videoPlayBv = (player) => {
    if (brand !== "bv")
      return;
    player.on("play", () => {
      autoPlayReplay.current = false;
    });
    videoProgress({
      player,
      isAutoPlay: !!videoOpt.autoplay,
      autoPlayReplay: autoPlayReplay.current,
      setAutoPlayReplay
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a2;
    const videoElement = videoRef.current;
    if (!videoElement || !currentDevice) {
      return;
    }
    log$m("config", config2);
    if (!playerRef.current) {
      playerRef.current = (0,video_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(videoElement, {
        responsive: true,
        preload: "auto",
        controlBar: controlBar ? controlBar : isBVTemplateStyle || isBVHPStyle ? {
          pictureInPictureToggle: false,
          fullscreenToggle: false,
          volumePanel: {
            inline: true
          },
          remainingTimeDisplay: false
        } : {
          pictureInPictureToggle: false,
          fullscreenToggle: true,
          volumePanel: {
            inline: false
          }
        },
        bigPlayButton: !isBVTemplateStyle && !isBVHPStyle,
        controls: currentConfig.controlBar === "native" || isBVTemplateStyle || isBVHPStyle,
        ...videoOpt
      }, function() {
        const playButtonEl = this.el().querySelector(".vjs-big-play-button");
        playButtonEl && (playButtonEl.innerHTML = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__/* .renderToString */ .Dq)(brand === "bv" && showBvPlayIcon ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvPlay, {
          className: styles$C.playIcon
        }) : showBALBigPlayBtn ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgVideoLargePlay, {
          className: styles$C.largePlayIcon
        }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {})));
        if (isBVHPStyle) {
          const iconConfig = currentConfig.customizedControlBar;
          const playControlEl = this.el().querySelector(".vjs-play-control .vjs-icon-placeholder");
          playControlEl.innerHTML = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__/* .renderToString */ .Dq)(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              className: styles$C.bvPlayIcon,
              src: iconConfig.playIcon,
              style: {
                width: iconConfig.playIconWidth,
                height: iconConfig.playIconHeight
              }
            }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              className: styles$C.bvPauseIcon,
              src: iconConfig.pauseIcon,
              style: {
                width: iconConfig.pauseIconWidth,
                height: iconConfig.pauseIconHeight
              }
            })]
          }));
          const muteControlEl = this.el().querySelector(".vjs-mute-control .vjs-icon-placeholder");
          muteControlEl.innerHTML = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__/* .renderToString */ .Dq)(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              className: styles$C.bvMuteIcon,
              src: iconConfig.muteIcon,
              style: {
                width: iconConfig.muteIconWidth,
                height: iconConfig.muteIconHeight
              }
            }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              className: styles$C.bvUnMuteIcon,
              src: iconConfig.unMuteIcon,
              style: {
                width: iconConfig.unMuteIconWidth,
                height: iconConfig.unMuteIconHeight
              }
            })]
          }));
        }
        if (isBVTemplateStyle) {
          const playControlEl = this.el().querySelector(".vjs-play-control .vjs-icon-placeholder");
          playControlEl.innerHTML = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__/* .renderToString */ .Dq)(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvPlay, {
              className: styles$C.bvPlayIcon
            }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvPause, {
              className: styles$C.bvPauseIcon
            })]
          }));
          const muteControlEl = this.el().querySelector(".vjs-mute-control .vjs-icon-placeholder");
          muteControlEl.innerHTML = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_5__/* .renderToString */ .Dq)(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvMute, {
              className: styles$C.bvMuteIcon
            }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvUnmute, {
              className: styles$C.bvUnMuteIcon
            })]
          }));
        }
        if (currentConfig.controlBar) {
          setTimeout(() => {
            const controlBarEl = this.el().querySelector(".vjs-control-bar");
            const containerEl = containerRef.current;
            const videoHeight = this.el().clientHeight;
            if (controlBarEl && containerEl && videoHeight) {
              const containerPadding = config2.padding[currentDevice || "desktop"];
              const containerPaddingTop = Number.parseFloat(containerPadding.paddingTop.replace("px", ""));
              const containerPaddingBottom = Number.parseFloat(containerPadding.paddingBottom.replace("px", ""));
              const containerContentHeight = containerEl.clientHeight - containerPaddingTop - containerPaddingBottom;
              controlBarEl.style.bottom = `${videoHeight - containerContentHeight + (source === "sliderContainer" && isNativeControlBarCustomBottom ? currentConfig.controlBar === "native" ? 47 : 30 : 0)}px`;
            }
          }, 300);
        }
        handleReady.current(this);
        playerRef.current && brand !== "bv" && videoProgress({
          player: playerRef.current,
          isAutoPlay: !!videoOpt.autoplay,
          autoPlayReplay: autoPlayReplay.current,
          setAutoPlayReplay
        });
      });
      (_a2 = onLoadRef.current) == null ? void 0 : _a2.call(onLoadRef);
      videoPlayBv(playerRef.current);
    }
  }, [videoOpt, handleReady, onLoadRef, currentDevice, isBVHPStyle, config2, brand, showBALBigPlayBtn, isBVTemplateStyle, currentConfig.customizedControlBar, currentConfig.controlBar, source, showBvPlayIcon]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      var _a2;
      (_a2 = playerRef.current) == null ? void 0 : _a2.dispose();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!playerRef.current || !currentDevice) {
      return;
    }
    const videoSrc = currentConfig.videoSrc || config2.desktop.videoSrc;
    playerRef.current.src({
      src: videoSrc,
      type: getMimeType(videoSrc)
    });
    playerRef.current.poster(currentConfig.videoCover || config2.desktop.videoCover);
    playerRef.current.fluid(!isFill);
    playerRef.current.fill(isFill);
    const height = currentConfig.height;
    const aspect = !isFill && height !== "customized" && height !== "fullHeight" ? height.split("/").join(":") : void 0;
    aspect && playerRef.current.aspectRatio(aspect);
    resolveAutoPlay(playerRef.current, {
      autoPlay: !!videoOpt.autoplay,
      muted: videoOpt.muted,
      autoPlayWithMute: true
    });
  }, [playerRef, videoOpt, config2, currentDevice, isFill, currentConfig.videoSrc, currentConfig.videoCover, currentConfig.height]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    pause: handlePause,
    play: handlePlay
  }));
  const handleVideoMutedOrNot = () => {
    if (!playerRef.current)
      return;
    if (isMuted) {
      playerRef.current.muted(false);
    } else {
      playerRef.current.muted(true);
    }
    setIsMuted(playerRef.current.muted());
  };
  const handleVideoPlayOrPause = () => {
    if (!playerRef.current)
      return;
    if (!playerRef.current.paused()) {
      playerRef.current.pause();
    } else {
      playerRef.current.play();
    }
  };
  const widthConfig = currentDevice ? currentConfig.width : void 0;
  const heightConfig = currentDevice ? currentConfig.height : void 0;
  const customizedStyle = Object.assign({}, widthConfig === "customized" ? {
    width: config2[currentDevice].widthCustomized
  } : {}, heightConfig === "customized" ? {
    height: config2[currentDevice].heightCustomized
  } : {});
  const containerStyle = {
    justifyContent: currentDevice ? currentConfig.alignment : "center",
    ...getPaddingMarginStyle(config2, currentDevice)
  };
  const {
    headerChangingOffset = 0,
    headerChanging = false
  } = currentDevice ? currentConfig : {};
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a2;
    if (source !== "sliderContainer")
      return;
    currentActive === false && ((_a2 = playerRef.current) == null ? void 0 : _a2.pause());
  }, [currentActive, source]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a2;
    if (source !== "sliderContainer")
      return;
    currentActive && currentConfig.playMode === "autoPlay" && ((_a2 = playerRef.current) == null ? void 0 : _a2.play());
  }, [currentActive, currentConfig.playMode, source]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(WhetherToUseDynamicHeaderContainer, {
    addDynamicHeader,
    currentDevice,
    headerChangingOffset,
    headerChanging,
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(headerClassName, isGrid && currentConfig.height === "fullHeight" ? styles$C.isInGridFullHeight : ""),
    useDynamicHeaderContainer: !noHeader,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: getID(config2),
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(prefix, styles$C.container, className, "videoComponent", isGrid && currentConfig.height === "fullHeight" ? styles$C.isInGridFullHeight : ""),
      style: containerStyle,
      ref: containerRef,
      onClick: handleCmsLinkClick,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$C.video, styles$C[brand], !!currentConfig.controlBar ? "" : styles$C.noControl, {
          [styles$C.balBigPlayButton]: showBALBigPlayBtn,
          [styles$C.bvTemplate]: isBVTemplateStyle || isBVHPStyle,
          [styles$C.bvSoundIcon]: brand === "bv" && currentDevice === "mobile",
          [styles$C.bvNative]: brand === "bv" && currentConfig.controlBar === "native",
          [styles$C.black]: (currentConfig == null ? void 0 : currentConfig.controlBarBrandTemplate) === CONTROL_BAR_THEME.black || ((_a = currentConfig == null ? void 0 : currentConfig.customizedControlBar) == null ? void 0 : _a.videoProgressionBar) === CONTROL_BAR_THEME.black
        }),
        style: {
          ...customizedStyle,
          ...currentConfig.height === "fullHeight" && !source && !isGrid ? {
            height: windowHeight - bannerHeight
          } : null,
          ...videoFullDomHeight ? {
            height: "100%"
          } : {}
        },
        ref: videoWrapperRef,
        children: [currentDevice && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__("video-js", "vjs-default-skin"),
          poster: currentConfig.videoCover || config2.desktop.videoCover,
          ref: videoRef,
          src: currentConfig.videoSrc || config2.desktop.videoSrc,
          disablePictureInPicture: true,
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "webkit-playsinline": "true",
          playsInline: true
        }), renderChildren(children, config2), isPlaying && (brand !== "bv" || !currentConfig.controlBar) && canClickURL && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
          href: currentConfig.clickBehavior.url,
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$C.videoLinkMask, {
            [styles$C.withControl]: !!currentConfig.controlBar
          }),
          target: currentConfig.clickBehavior.isNewWindow ? "_blank" : "_self",
          rel: "noreferrer",
          onClick: () => homepageCTAOnClick("", trackSwiperIndex)
        }), brand === "bv" && !!currentConfig.controlBar && ((_b = videoWrapperRef.current) == null ? void 0 : _b.firstElementChild) && ((_c = containerRef.current) == null ? void 0 : _c.clientHeight) && canClickURL && (0,react_dom__WEBPACK_IMPORTED_MODULE_8__.createPortal)(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
          href: currentConfig.clickBehavior.url,
          className: styles$C.videoLinkMask,
          target: currentConfig.clickBehavior.isNewWindow ? "_blank" : "_self",
          rel: "noreferrer",
          style: {
            height: (_d = containerRef.current) == null ? void 0 : _d.clientHeight
          },
          onClick: () => homepageCTAOnClick("", trackSwiperIndex)
        }), (_e = videoWrapperRef.current) == null ? void 0 : _e.firstElementChild), brand === "bal" && currentConfig.controlBar && currentConfig.controlBar !== "native" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BAL, {
          currentDevice,
          onEvent,
          config: config2,
          isMuted,
          isPlaying,
          handleVideoPlayOrPause,
          handleVideoMutedOrNot,
          componentIndex,
          trackSwiperIndex
        }) : null, brand === "bv" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BvImageAndVideoCtaGroup, {
          config: config2,
          brand,
          onEvent,
          componentIndex,
          trackSwiperIndex,
          wrapperClassName: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$C.titleCtaWrapper, {
            [styles$C.withControl]: !!currentConfig.controlBar,
            [styles$C.inSlide]: source === "sliderContainer",
            [styles$C.native]: currentConfig.controlBar === "native"
          })
        })]
      })
    })
  });
});
function BAL({
  config: config2,
  isPlaying,
  isMuted,
  handleVideoPlayOrPause,
  handleVideoMutedOrNot,
  onEvent,
  currentDevice,
  componentIndex,
  trackSwiperIndex
}) {
  var _a, _b, _c, _d, _e;
  const isTwoCTA = !!((_a = config2.cta1) == null ? void 0 : _a.wording) && !!((_b = config2.cta2) == null ? void 0 : _b.wording);
  return config2[currentDevice || "desktop"].controlBar === "longVideo" ? !isPlaying ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgVideoLargePlay, {
    className: styles$C.largePlayIcon,
    onClick: handleVideoPlayOrPause
  }) : null : config2[currentDevice || "desktop"].controlBar === "shortLoopVideo" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [!!((_c = config2.title) == null ? void 0 : _c.wording) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$C.title),
      style: {
        ...normalizeStyle(config2.title.style),
        ...config2.title.fontColor ? {
          color: config2.title.fontColor
        } : null,
        ...normalizeTextStyle(config2.title.textStyle)
      },
      dangerouslySetInnerHTML: {
        __html: config2.title.wording.substring(0, 35)
      }
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: styles$C.buttonGroup,
      children: [!!((_d = config2.cta1) == null ? void 0 : _d.wording) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BALCTA, {
        style: normalizeTextStyle(config2.cta1.style),
        config: config2,
        onEvent,
        text: config2.cta1.wording.substring(0, isTwoCTA ? 10 : 20),
        clickBehavior: config2.cta1.clickBehavior,
        componentIndex,
        trackSwiperIndex
      }), !!((_e = config2.cta2) == null ? void 0 : _e.wording) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BALCTA, {
        style: normalizeTextStyle(config2.cta2.style),
        config: config2,
        onEvent,
        text: config2.cta2.wording.substring(0, isTwoCTA ? 10 : 20),
        clickBehavior: config2.cta2.clickBehavior,
        componentIndex,
        trackSwiperIndex
      })]
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$C.iconWrapper),
      children: [isPlaying ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgVideoPauseBal, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$C.playIconBal),
        onClick: handleVideoPlayOrPause
      }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgVideoPlayBal, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$C.playIconBal),
        onClick: handleVideoPlayOrPause
      }), isMuted ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgSoundOff, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$C.soundIcon),
        onClick: handleVideoMutedOrNot
      }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgSoundOn, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$C.soundIcon),
        onClick: handleVideoMutedOrNot
      })]
    })]
  }) : null;
}
function BALCTA({
  clickBehavior,
  text: text2,
  onEvent,
  config: config2,
  className,
  children,
  style,
  type = "light",
  componentIndex,
  trackSwiperIndex
}) {
  const isDisabled2 = checkDisabled(clickBehavior);
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const trackHomepageCTAOnClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((text22) => {
    homepageCTAOnClick(text22, trackSwiperIndex);
  }, [homepageCTAOnClick, text2, trackSwiperIndex]);
  const Button = type === "light" ? ButtonSecondary : type === "link" ? ButtonLink : ButtonPrimary;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
    href: clickBehavior.url,
    passHref: !IsSpecialClickBehavior(clickBehavior),
    legacyBehavior: true,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Button, {
      isDisabled: isDisabled2,
      className: className || styles$C.btn,
      target: clickBehavior.isNewWindow ? "_blank" : "_self",
      style,
      brand: "bal",
      onClick: createCTACallBack({
        config: config2,
        clickBehavior,
        text: text2,
        isDisabled: isDisabled2,
        onEvent,
        trackHomepageCTAOnClick
      }),
      children: children || text2
    })
  });
}
Video$1.displayName = "Video";
function useThrottle(func, wait, options) {
  const funcRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(func);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    funcRef.current = func;
  }, [func]);
  const throttled = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)((...args) => funcRef.current(...args), wait, options);
  }, [wait, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    throttled.cancel();
  }, [throttled]);
  return throttled;
}
const wrapper$8 = "_wrapper_1535c_18";
const slide$2 = "_slide_1535c_25";
const currentSlide = "_currentSlide_1535c_35";
const preSlide = "_preSlide_1535c_46";
const nextSlide = "_nextSlide_1535c_51";
const swiperItem = "_swiperItem_1535c_56";
const image$g = "_image_1535c_67";
const productWrapper = "_productWrapper_1535c_73";
const productList$1 = "_productList_1535c_80";
const plpInterSectionTarget = "_plpInterSectionTarget_1535c_85";
const inActiveLink = "_inActiveLink_1535c_94";
const lastCarousel = "_lastCarousel_1535c_99";
const plpSection = "_plpSection_1535c_103";
const cta$8 = "_cta_1535c_107";
const contentWrap = "_contentWrap_1535c_138";
const styles$z = {
  wrapper: wrapper$8,
  slide: slide$2,
  currentSlide,
  preSlide,
  nextSlide,
  swiperItem,
  image: image$g,
  productWrapper,
  productList: productList$1,
  plpInterSectionTarget,
  inActiveLink,
  lastCarousel,
  plpSection,
  cta: cta$8,
  contentWrap,
  "button-hover": "_button-hover_1535c_1"
};
function mergeRefs(refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}
const log$l = createLog("VerticalPhotoGallery");
const ANIMATION_DURATION = 600;
const COLD_DOWN_DURATION = 200;
const VerticalPhotoGallery = ({
  className,
  config: config2,
  onInfiniteScroll,
  onStartHomeAudio,
  stateToRefreshAutoScroll,
  children,
  onChange,
  onClick,
  footer: footer2,
  waterMarkContainerRef = {
    current: null
  },
  waterMarkContainerRefSecond = {
    current: null
  },
  componentIndex
}) => {
  const hasPlp = !!children;
  const [list2, setList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(config2.desktop);
  const part1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => list2.slice(0, list2.length - 1), [list2]);
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const productsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const lastAnimationTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const lastMouseWheel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const lastWheelDelta = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const autoScrollTimer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    bannerHeight,
    ...restCMSConfig
  } = useCMSConfig();
  const [contentHeight, setContentHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(windowHeight - bannerHeight);
  const [isPassive, setIsPassive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [direction, setDirection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("forward");
  const productWrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const plpRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [rootEl, setRootEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const addInterSectionObserverTarget = useDynamicHeader();
  const plpHasMoved = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const [hasBackToLastItem, setHasBackLastItem] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const memoedCMSConfig = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    ...restCMSConfig,
    bannerHeight,
    imageScroller: productWrapperRef.current
  }), [bannerHeight, restCMSConfig]);
  const {
    isDesktop,
    isLargeDesktop,
    isMobile,
    isTablet,
    hasResult: hasDeviceResult
  } = useDeviceType();
  const [isGetCorrectConfig, setIsGetCorrectConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  useIsomorphicLayoutEffect(() => {
    if (!hasDeviceResult)
      return;
    const targetList = isMobile ? config2.mobile : isTablet ? config2.tablet : isLargeDesktop ? config2.largeDesktop : isDesktop ? config2.desktop : config2.desktop;
    setList(targetList);
    setIsGetCorrectConfig(true);
    log$l("init data:", config2);
  }, [isDesktop, isLargeDesktop, isMobile, isTablet]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentIndex >= part1.length) {
      plpHasMoved.current = false;
    }
  }, [currentIndex, part1]);
  const isAnimationColdDown = () => new Date().getTime() > lastAnimationTime.current + ANIMATION_DURATION + COLD_DOWN_DURATION;
  const setLastAnimationTime = () => lastAnimationTime.current = new Date().getTime();
  const productScrollTo = useThrottle(() => {
    if (isDesktop || !part1.length)
      return;
    try {
      productWrapperRef.current.scrollTo({
        top: 10
      });
    } catch (error) {
      console.log("[swiper][next]", error);
    }
  }, 300);
  const next2 = () => {
    const listLen = part1.length;
    if (currentIndex >= listLen) {
      return;
    }
    productScrollTo();
    setCurrentIndex((_) => _ + 1);
    setDirection("forward");
    setLastAnimationTime();
  };
  const pre = () => {
    if (currentIndex <= 0) {
      return;
    }
    setCurrentIndex((_) => _ - 1);
    setDirection("backward");
    setLastAnimationTime();
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isGetCorrectConfig)
      return;
    onChange == null ? void 0 : onChange(currentIndex, list2);
    log$l("onChange:", list2, currentIndex);
  }, [currentIndex, onChange, isGetCorrectConfig]);
  const bodyTouchMove = (e) => {
    var _a;
    const isDisableTouch = !((_a = e.target.dataset) == null ? void 0 : _a.disable);
    setIsPassive(isDisableTouch);
    e.preventDefault();
  };
  const setAutoScroll = useLatest(() => {
    if (!config2.autoplay)
      return;
    autoScrollTimer.current = setTimeout(() => {
      if (currentIndex >= part1.length) {
        if (plpHasMoved.current)
          return;
        productWrapperRef.current.scrollTo({
          top: contentHeight,
          behavior: "smooth"
        });
        return;
      }
      next2();
    }, config2.autoplayDuration * 1e3 || 3e3);
    return () => autoScrollTimer.current && clearTimeout(autoScrollTimer.current);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return setAutoScroll.current();
  }, [currentIndex, list2, stateToRefreshAutoScroll, hasBackToLastItem, setAutoScroll]);
  const [touchImgStartX, setTouchImgStartX] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  let touchImgEndX = 0, touchImgXDistance = 0;
  const onTouchImgStart = (e) => {
    setTouchImgStartX(e.touches[0].clientY);
  };
  const onTouchImgMove = (e) => {
    touchImgEndX = e.touches[0].clientY;
    touchImgXDistance = touchImgStartX - touchImgEndX;
  };
  const onTouchEnd = async (_e, target) => {
    const top = productsRef.current.getBoundingClientRect().top - bannerHeight;
    if (!isAnimationColdDown())
      return;
    if (target === "plp") {
      if (top >= 0 && touchImgXDistance < -50) {
        pre();
      }
      return;
    }
    if (touchImgXDistance > 100) {
      next2();
      return;
    }
    if (touchImgXDistance < -100 && (top >= 0 || !hasPlp)) {
      pre();
      return;
    }
  };
  const handleClick = (index, item2, buttonText2) => {
    if (isMobile && index === 0) {
      onStartHomeAudio == null ? void 0 : onStartHomeAudio();
    }
    onClick == null ? void 0 : onClick(currentIndex, list2);
    homepageCTAOnClick == null ? void 0 : homepageCTAOnClick(buttonText2 || "", currentIndex);
  };
  const onScroll = useThrottle(() => {
    onInfiniteScroll == null ? void 0 : onInfiniteScroll();
    if (!productsRef.current)
      return;
    const boundingClientRectTop = productsRef.current.getBoundingClientRect().top - bannerHeight;
    if (boundingClientRectTop <= 0 && boundingClientRectTop > -10) {
      productScrollTo();
    }
    if (boundingClientRectTop < -10) {
      !plpHasMoved.current && (plpHasMoved.current = true);
    }
    if (boundingClientRectTop >= -10 && boundingClientRectTop <= 0) {
      setHasBackLastItem({});
      plpHasMoved.current = false;
    }
  }, 300);
  const fixMomentumScroll = (e) => {
    const currentTime = new Date().getTime();
    const scrollInterval = currentTime - lastMouseWheel.current;
    lastMouseWheel.current = currentTime;
    if (scrollInterval < 50) {
      const needTrigger = Math.abs(e.deltaY) - Math.abs(lastWheelDelta.current) > 30 && isAnimationColdDown();
      return needTrigger;
    }
    return true;
  };
  const onMouseWheel = useDebounce((e) => {
    e = e;
    Promise.resolve().then(() => lastWheelDelta.current = e.deltaY);
    if (!fixMomentumScroll(e))
      return;
    if (!isAnimationColdDown())
      return;
    const offsetTop = productsRef.current.offsetTop;
    const top = productsRef.current.getBoundingClientRect().top - offsetTop;
    const wheelDelta = e.deltaY;
    if (top < -5) {
      return;
    }
    if (wheelDelta < 0) {
      pre();
      return;
    }
    next2();
  }, 0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!rootEl)
      return;
    rootEl.addEventListener("wheel", onMouseWheel);
    return () => {
      rootEl.removeEventListener("wheel", onMouseWheel);
    };
  }, [onMouseWheel, rootEl]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setContentHeight(windowHeight - bannerHeight);
  }, [windowHeight, bannerHeight]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const listLen = part1.length;
    setIsPassive(currentIndex === listLen);
  }, [currentIndex, part1]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    document.body.addEventListener("touchmove", bodyTouchMove, {
      passive: isPassive
    });
    return () => {
      document.body.removeEventListener("touchmove", bodyTouchMove);
    };
  }, [isPassive, productsRef]);
  const lastItem = list2[list2.length - 1];
  const getImage = (imageItemConfig) => {
    var _a;
    return (imageItemConfig == null ? void 0 : imageItemConfig.imageUrl) || ((_a = config2.desktop[list2.indexOf(imageItemConfig)]) == null ? void 0 : _a.imageUrl);
  };
  const imageAlt = restCMSConfig.brandName && restCMSConfig.pageTitle ? `${restCMSConfig.brandName} ${restCMSConfig.pageTitle}` : "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$z.wrapper, prefix, className),
    style: {
      height: `calc(${contentHeight}px)`,
      touchAction: "none"
    },
    ref: setRootEl,
    id: getID(config2),
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: styles$z.slide,
      style: {
        height: `calc(${contentHeight * (part1.length + 1)}px)`,
        transform: `translateY(-${contentHeight * currentIndex}px)`
      },
      "data-direction": direction,
      children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: styles$z.contentWrap,
        ref: mergeRefs([waterMarkContainerRef]),
        children: part1.map((item2, index) => {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$z.swiperItem, currentIndex === index ? styles$z.currentSlide : "", currentIndex === index + 1 ? styles$z.preSlide : "", currentIndex === index - 1 ? styles$z.nextSlide : ""),
            style: {
              height: `calc(${contentHeight}px)`
            },
            onTouchStart: onTouchImgStart,
            onTouchMove: onTouchImgMove,
            onTouchEnd: (e) => onTouchEnd(),
            ref: addInterSectionObserverTarget(item2),
            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
              href: item2.clickBehavior.url || "/",
              className: classnames__WEBPACK_IMPORTED_MODULE_1__({
                [styles$z.inActiveLink]: item2.clickBehavior.type === "unClickable" || !item2.clickBehavior.url
              }),
              target: item2.clickBehavior.isNewWindow ? "_blank" : "_self",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: getImage(item2),
                "data-disable": "true",
                alt: imageAlt,
                className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$z.image),
                onClick: () => handleClick(index, item2, imageAlt)
              })
            }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
              className: styles$z.cta,
              clickBehavior: item2.cta.clickBehavior,
              style: normalizeTextStyle(item2.cta.style),
              onClickLink: () => {
                var _a;
                return homepageCTAOnClick(((_a = lastItem == null ? void 0 : lastItem.cta) == null ? void 0 : _a.wording) || "", currentIndex);
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                dangerouslySetInnerHTML: {
                  __html: item2.cta.wording || ""
                }
              })
            })]
          }, index);
        })
      }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$z.swiperItem, styles$z.productWrapper),
        style: {
          height: `calc(${contentHeight}px)`
        },
        ref: productWrapperRef,
        onScroll,
        onTouchStart: onTouchImgStart,
        onTouchMove: onTouchImgMove,
        onTouchEnd: (e) => onTouchEnd(e, "plp"),
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          ref: mergeRefs([productsRef, waterMarkContainerRefSecond]),
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$z.productList),
          children: [!!lastItem ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              style: {
                height: `calc(${contentHeight}px)`
              },
              className: styles$z.lastCarousel,
              ref: addInterSectionObserverTarget(lastItem),
              children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
                href: lastItem.clickBehavior.url || "/",
                className: classnames__WEBPACK_IMPORTED_MODULE_1__({
                  [styles$z.inActiveLink]: lastItem.clickBehavior.type === "unClickable" || !lastItem.clickBehavior.url
                }),
                target: lastItem.clickBehavior.isNewWindow ? "_blank" : "_self",
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: getImage(lastItem),
                  alt: imageAlt,
                  className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$z.image),
                  onClick: () => handleClick(part1.length + 1, lastItem, imageAlt)
                })
              }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
                className: styles$z.cta,
                clickBehavior: lastItem.cta.clickBehavior,
                style: normalizeTextStyle(lastItem.cta.style),
                onClickLink: () => {
                  var _a;
                  return homepageCTAOnClick(((_a = lastItem == null ? void 0 : lastItem.cta) == null ? void 0 : _a.wording) || "", currentIndex);
                },
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                  dangerouslySetInnerHTML: {
                    __html: lastItem.cta.wording || ""
                  }
                })
              })]
            })
          }) : null, hasPlp && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: styles$z.plpSection,
            ref: plpRef,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CMSConfigProvider, {
              ...memoedCMSConfig,
              children
            })
          })]
        }), footer2]
      })]
    })
  });
};
const useIsMounted = () => {
  const [isMounted2, setIsMounted2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsMounted2(true);
  }, []);
  return isMounted2;
};
const paragraph$2 = "_paragraph_135a9_18";
const autoWrap = "_autoWrap_135a9_28";
const paragraphCol$2 = "_paragraphCol_135a9_28";
const styles$y = {
  paragraph: paragraph$2,
  autoWrap,
  paragraphCol: paragraphCol$2,
  "button-hover": "_button-hover_135a9_1"
};
const log$k = createLog("ParagraphColumns2");
const Paragraph$1 = ({
  config: config2
}) => {
  const device = useDeviceType();
  const paddingMargin2 = getPaddingMarginStyle(config2, device.currentDevice);
  const addDynamicHeader = useDynamicHeader();
  const isMounted2 = useIsMounted();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$k("config:", config2);
  }, [config2]);
  const {
    headerChangingOffset = 0,
    headerChanging = false
  } = config2;
  const getSpaceLeftRight = (paragraph2) => [device.currentDevice ? paragraph2[device.currentDevice + "SpaceLeft"] : "", device.currentDevice ? paragraph2[device.currentDevice + "SpaceRight"] : ""];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    addDynamicHeader,
    currentDevice: device.currentDevice,
    headerChangingOffset,
    headerChanging,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: getID(config2),
      style: {
        ...paddingMargin2,
        backgroundColor: config2.backgroundColor
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$y.paragraph, {
          [styles$y.autoWrap]: config2.mobileColumn1
        }),
        children: [config2.leftParagraph, config2.rightParagraph].map((col, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$y.paragraphCol,
          children: col.map((paragraphItem, index2) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: styles$y.paragraphItem,
            style: isMounted2 ? {
              textAlign: paragraphItem.alignment,
              color: paragraphItem.color,
              marginBottom: paragraphItem.spaceBetween,
              paddingLeft: getSpaceLeftRight(paragraphItem)[0],
              paddingRight: getSpaceLeftRight(paragraphItem)[1],
              ...normalizeStyle(paragraphItem.style),
              ...normalizeTextStyle(paragraphItem.wordingStyle)
            } : void 0,
            dangerouslySetInnerHTML: {
              __html: paragraphItem.wording
            }
          }, index2))
        }, index))
      })
    })
  });
};
const container$3 = "_container_9vbqz_18";
const styles$x = {
  container: container$3,
  "button-hover": "_button-hover_9vbqz_1"
};
const CUSTOM_PROPERTY_NAME = "--aspect-ratio";
const AspectRatioBox = (props2) => {
  const {
    className,
    children,
    ratio = 1,
    style,
    ...restProps
  } = props2;
  const newStyle = {
    ...style,
    [CUSTOM_PROPERTY_NAME]: `(${ratio})`
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$x.container, className),
    style: newStyle,
    ...restProps,
    children
  });
};
let vanillaLazyLoadInstance = null;
const lazyLoadClassName = "lazy-load-image";
const immediateLoadClassName = "immediate-load-image";
const lazyLoadOptions = {
  elements_selector: `.${lazyLoadClassName}`,
  callback_error(el) {
    if (el.dataset.fallback) {
      el.src = el.dataset.fallback;
    }
  }
};
const immediateLoadOptions = {
  ...lazyLoadOptions,
  elements_selector: `.${immediateLoadClassName}`
};
const LazyLoadImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((LazyLoadImageProps, ref) => {
  const immediate = LazyLoadImageProps.immediate || false;
  const alt = LazyLoadImageProps.alt;
  const src = LazyLoadImageProps.src || "__not_set__";
  const placeholder = LazyLoadImageProps.placeholder;
  const fallback = LazyLoadImageProps.fallback;
  const className = LazyLoadImageProps.className;
  const props2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const result = {
      ...LazyLoadImageProps
    };
    delete result.immediate;
    delete result.alt;
    delete result.src;
    delete result.placeholder;
    delete result.fallback;
    delete result.className;
    return result;
  }, [LazyLoadImageProps]);
  const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const srcRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(src);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    try {
      if (!vanillaLazyLoadInstance) {
        vanillaLazyLoadInstance = new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_6__(lazyLoadOptions);
      } else {
        vanillaLazyLoadInstance.update();
      }
    } catch (error) {
      console.log("[LazyLoadImage]", error);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (immediate) {
      try {
        vanilla_lazyload__WEBPACK_IMPORTED_MODULE_6__.load(imgRef.current, immediateLoadOptions);
      } catch (error) {
        console.log("[LazyLoadImage]", error);
      }
    }
  }, [immediate]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a;
    if (srcRef.current !== src) {
      if (immediate || ((_a = imgRef.current) == null ? void 0 : _a.classList.contains("entered"))) {
        vanilla_lazyload__WEBPACK_IMPORTED_MODULE_6__.load(imgRef.current, immediateLoadOptions);
      }
    }
    srcRef.current = src;
  }, [src, immediate]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
    ref: mergeRefs([ref, imgRef]),
    ...props2,
    src: placeholder,
    "data-src": src,
    "data-fallback": fallback,
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(className, immediate ? immediateLoadClassName : lazyLoadClassName),
    alt
  });
});
const image$f = "_image_1jy6c_18";
const styles$w = {
  image: image$f,
  "button-hover": "_button-hover_1jy6c_1"
};
const LazyImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props2, ref) => {
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LazyLoadImage, {
    ...props2,
    fallback: "/logo.svg",
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(props2.className, styles$w.image),
    ref
  });
});
const usePagination = (options) => {
  const {
    loadMore: loadMore2,
    currentPage: initCurrentPage,
    config: config2,
    getData,
    totalPages,
    onDataLoad,
    onStartLoading,
    onFinishLoading
  } = options;
  const currentPageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initCurrentPage);
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => getData(config2));
  const loadMoreRef = useLatest(loadMore2);
  const onDataLoadRef = useLatest(onDataLoad);
  const getDataRef = useLatest(getData);
  const onStartLoadingRef = useLatest(onStartLoading);
  const onFinishLoadingRef = useLatest(onFinishLoading);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const isLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(isLoading);
  const [isNoMore, setIsNoMore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initCurrentPage >= totalPages);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setData(() => getData(config2));
    setIsNoMore(initCurrentPage >= totalPages);
    currentPageRef.current = initCurrentPage;
    return () => {
      setIsLoading(false);
      isLoadingRef.current = false;
    };
  }, [config2]);
  const nextPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    var _a, _b;
    if (isNoMore || isLoadingRef.current)
      return;
    if (currentPageRef.current <= totalPages) {
      setIsLoading(true);
      isLoadingRef.current = true;
      (_a = onStartLoadingRef.current) == null ? void 0 : _a.call(onStartLoadingRef);
      (_b = loadMoreRef.current) == null ? void 0 : _b.call(loadMoreRef, config2.blockId, currentPageRef.current + 1, false).then((res) => {
        var _a2;
        const moreData = getDataRef.current(res);
        if (!Array.isArray(moreData))
          return;
        (_a2 = onDataLoadRef.current) == null ? void 0 : _a2.call(onDataLoadRef, moreData, res);
        setData((prev2) => prev2.concat(moreData));
        currentPageRef.current++;
        if (currentPageRef.current >= totalPages)
          setIsNoMore(true);
      }).catch((e) => {
        console.log("usePagination loadMore error", e);
      }).finally(() => {
        var _a2;
        (_a2 = onFinishLoadingRef.current) == null ? void 0 : _a2.call(onFinishLoadingRef);
        setIsLoading(false);
        isLoadingRef.current = false;
      });
    }
  }, [
    config2,
    loadMoreRef,
    getDataRef,
    onDataLoadRef,
    onStartLoadingRef,
    onFinishLoadingRef,
    totalPages,
    isNoMore
  ]);
  const getBeforeCurrentPageAllData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ page, callback }) => {
    var _a, _b;
    if (isNoMore || isLoadingRef.current || !loadMoreRef.current)
      return;
    currentPageRef.current = page;
    if (currentPageRef.current <= totalPages) {
      setIsLoading(true);
      isLoadingRef.current = true;
      (_a = onStartLoadingRef.current) == null ? void 0 : _a.call(onStartLoadingRef);
      (_b = loadMoreRef.current) == null ? void 0 : _b.call(loadMoreRef, config2.blockId, page, true).then((res) => {
        const beforeCurrentPageAllData = getDataRef.current(res);
        if (!Array.isArray(beforeCurrentPageAllData))
          return;
        setData(beforeCurrentPageAllData);
        callback == null ? void 0 : callback();
        if (currentPageRef.current >= totalPages)
          setIsNoMore(true);
      }).catch((e) => {
        console.log("usePagination getBeforeCurrentPageAllData error", e);
      }).finally(() => {
        var _a2;
        (_a2 = onFinishLoadingRef.current) == null ? void 0 : _a2.call(onFinishLoadingRef);
        setIsLoading(false);
        isLoadingRef.current = false;
      });
    }
  }, [config2, loadMoreRef, getDataRef, onStartLoadingRef, onFinishLoadingRef, totalPages, isNoMore]);
  const nextAll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    var _a;
    if (isNoMore || isLoadingRef.current || !loadMoreRef.current)
      return;
    if (currentPageRef.current <= totalPages) {
      setIsLoading(true);
      isLoadingRef.current = true;
      (_a = onStartLoadingRef.current) == null ? void 0 : _a.call(onStartLoadingRef);
      Promise.all(new Array(totalPages - currentPageRef.current).fill(void 0).map((_, index) => loadMoreRef.current(config2.identifier, currentPageRef.current + index + 1))).then((allRes) => {
        allRes.forEach((res) => {
          var _a2;
          const moreData = getDataRef.current(res);
          if (!Array.isArray(moreData))
            return;
          (_a2 = onDataLoadRef.current) == null ? void 0 : _a2.call(onDataLoadRef, moreData, res);
          setData((prev2) => prev2.concat(moreData));
        });
        currentPageRef.current = totalPages;
        setIsNoMore(true);
      }).catch((e) => {
        console.log("usePagination loadMore error", e);
      }).finally(() => {
        var _a2;
        (_a2 = onFinishLoadingRef.current) == null ? void 0 : _a2.call(onFinishLoadingRef);
        setIsLoading(false);
        isLoadingRef.current = false;
      });
    }
  }, [
    config2,
    loadMoreRef,
    getDataRef,
    onDataLoadRef,
    onStartLoadingRef,
    onFinishLoadingRef,
    totalPages,
    isNoMore
  ]);
  return {
    data,
    nextPage,
    isLoading,
    isNoMore,
    nextAll,
    getBeforeCurrentPageAllData,
    currentLookPage: currentPageRef.current
  };
};
var ComponentType = /* @__PURE__ */ ((ComponentType2) => {
  ComponentType2["video"] = "video";
  ComponentType2["verticalPhotoGallery"] = "verticalPhotoGallery";
  ComponentType2["paragraphColumns2"] = "paragraphColumns2";
  ComponentType2["CTA"] = "CTA";
  ComponentType2["imageList"] = "imageList";
  ComponentType2["image"] = "image";
  ComponentType2["visualSlideshow"] = "visualSlideshow";
  ComponentType2["productList"] = "productList";
  ComponentType2["productListWithAssets"] = "productListWithAssets";
  ComponentType2["soundtrack"] = "soundtrack";
  ComponentType2["bioStory"] = "bioStory";
  ComponentType2["iframe"] = "iframe";
  ComponentType2["newLook"] = "newLook";
  ComponentType2["archiveLook"] = "archiveLook";
  ComponentType2["paragraph"] = "paragraph";
  ComponentType2["newsletterSubscription"] = "newsletterSubscription";
  ComponentType2["visualBanner"] = "visualBanner";
  ComponentType2["textBanner"] = "textBanner";
  ComponentType2["mediaList"] = "mediaList";
  ComponentType2["shopTheCollection"] = "shopTheCollection";
  ComponentType2["rowOf3Blocks"] = "rowOf3Blocks";
  ComponentType2["flexible"] = "flexibleComponent";
  ComponentType2["imageWithHotArea"] = "imageWithHotArea";
  ComponentType2["imageWithTextList"] = "imageWithTextList";
  ComponentType2["dualityBanner"] = "dualityBanner";
  ComponentType2["lookBookComponent"] = "lookBookComponent";
  ComponentType2["editableContent"] = "editableContent";
  ComponentType2["secondMenu"] = "secondMenu";
  ComponentType2["productCards"] = "productCards";
  ComponentType2["redirection"] = "redirection";
  ComponentType2["horizontalSingle"] = "horizontalSingle";
  ComponentType2["lookContent"] = "lookContent";
  ComponentType2["visualCard"] = "visualCard";
  ComponentType2["editorTimeline"] = "editorTimeline";
  ComponentType2["editorialSquare"] = "editorialSquare";
  ComponentType2["editorStory"] = "editorStory";
  ComponentType2["lookCarousel"] = "lookCarousel";
  ComponentType2["recommendProducts"] = "recommendProducts";
  ComponentType2["editorialAccountContent"] = "editorialAccountContent";
  ComponentType2["lookBook"] = "lookBook";
  ComponentType2["blocksComponent"] = "blocksComponent";
  ComponentType2["collectionLookComponent"] = "collectionLookComponent";
  ComponentType2["Grid"] = "Grid";
  ComponentType2["product"] = "product";
  ComponentType2["slider"] = "slider";
  return ComponentType2;
})(ComponentType || {});
var Alignment = /* @__PURE__ */ ((Alignment2) => {
  Alignment2["left"] = "left";
  Alignment2["center"] = "center";
  Alignment2["right"] = "right";
  return Alignment2;
})(Alignment || {});
const hasBorderBottom = (config2, cmsData) => false;
const imageList$1 = "_imageList_18wqk_18";
const alignLeft = "_alignLeft_18wqk_24";
const bal$1 = "_bal_18wqk_27";
const imageWrapper$3 = "_imageWrapper_18wqk_31";
const twoColumn = "_twoColumn_18wqk_38";
const twoColumnPro = "_twoColumnPro_18wqk_46";
const balDefaultLookBook = "_balDefaultLookBook_18wqk_54";
const twoColumnProBal = "_twoColumnProBal_18wqk_80";
const balImage = "_balImage_18wqk_98";
const amqDesktop2Tablet1 = "_amqDesktop2Tablet1_18wqk_108";
const amqDesktop4Tablet2 = "_amqDesktop4Tablet2_18wqk_116";
const placeHolderForAMQ = "_placeHolderForAMQ_18wqk_125";
const imageLink$1 = "_imageLink_18wqk_134";
const image$e = "_image_18wqk_18";
const amqImage$2 = "_amqImage_18wqk_144";
const placeHolder$1 = "_placeHolder_18wqk_125";
const imageCTA = "_imageCTA_18wqk_152";
const imageTitle = "_imageTitle_18wqk_171";
const loadMore = "_loadMore_18wqk_190";
const loadMoreBtn = "_loadMoreBtn_18wqk_201";
const withBottomBorder = "_withBottomBorder_18wqk_212";
const cta$7 = "_cta_18wqk_216";
const styles$v = {
  imageList: imageList$1,
  alignLeft,
  bal: bal$1,
  imageWrapper: imageWrapper$3,
  twoColumn,
  twoColumnPro,
  balDefaultLookBook,
  twoColumnProBal,
  balImage,
  amqDesktop2Tablet1,
  amqDesktop4Tablet2,
  placeHolderForAMQ,
  imageLink: imageLink$1,
  image: image$e,
  amqImage: amqImage$2,
  placeHolder: placeHolder$1,
  imageCTA,
  imageTitle,
  loadMore,
  loadMoreBtn,
  withBottomBorder,
  cta: cta$7,
  "button-hover": "_button-hover_18wqk_1"
};
const useImageOnLoad = () => {
  const [isLoad, setIsLoad] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const onLoad = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setIsLoad(true);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a;
    ((_a = ref.current) == null ? void 0 : _a.complete) && onLoad();
  }, [onLoad]);
  return { isLoad, onLoad, imgRef: ref };
};
const log$j = createLog("image-list");
const ImageList = ({
  config: config2,
  imgChildrenRender,
  componentPosition,
  onCTAClick,
  componentIndex
}) => {
  const {
    brandName,
    pageTitle,
    brand
  } = useCMSConfig();
  const device = useDeviceType();
  const [imageList2, setImageList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(config2.desktop);
  const {
    onEvent,
    loadMore: loadMore2,
    cmsData
  } = useCMSConfig();
  const addDynamicHeader = useDynamicHeader();
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const updateImageList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!device.currentDevice)
      return;
    const images = config2[device.currentDevice].map((image2, index) => {
      var _a;
      if (!image2.imageUrl) {
        image2.imageUrl = (_a = config2.desktop[index]) == null ? void 0 : _a.imageUrl;
      }
      return image2;
    });
    setImageList(images);
  }, [device.currentDevice, config2]);
  const {
    isNoMore,
    nextPage,
    nextAll
  } = usePagination({
    currentPage: config2.currentPage,
    totalPages: config2.totalPages,
    config: config2,
    loadMore: loadMore2,
    getData: (config22) => config22[device.currentDevice || "desktop"],
    onDataLoad: (data, res) => {
      console.log("onDataLoadAll");
      config2.large.push(...res.large);
      config2.desktop.push(...res.desktop);
      config2.tablet.push(...res.tablet);
      config2.mobile.push(...res.mobile);
      updateImageList();
    },
    onStartLoading: () => {
      onEvent(EventType.startLoading, {
        component: config2
      });
    },
    onFinishLoading: () => {
      onEvent(EventType.finishLoading, {
        component: config2
      });
    }
  });
  const isBalLookBookORGallery = ["4", "5", "lookbook", "lookbookSimplified"].includes(config2.template);
  const isBalLookBook = ["lookbook", "lookbookSimplified"].includes(config2.template);
  const isDefaultLookBook = config2.template === "lookbook";
  const isBalDefaultLookBookLayout = isDefaultLookBook || config2.template === "4";
  const perRowNum = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (isBalDefaultLookBookLayout) {
      if (device.isMobile) {
        return 2;
      }
      if (device.currentDevice && ["tablet", "desktop"].includes(device.currentDevice)) {
        return 3;
      }
      if (device.isLargeDesktop)
        return 4;
      return 3;
    }
    if (config2.template === "lookbookSimplified" || config2.template === "5") {
      if (!device.isMobile) {
        return 2;
      }
    }
    return 1;
  }, [device, isBalDefaultLookBookLayout, config2.template]);
  const imagesWithPlaceholder = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const images = [...imageList2];
    if (images.length % perRowNum) {
      const placeholders = new Array(perRowNum - images.length % perRowNum).fill(void 0);
      images.push(...placeholders);
    }
    return images;
  }, [perRowNum, imageList2]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateImageList();
  }, [updateImageList]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$j(config2);
  }, [config2]);
  const css = getPaddingMarginStyle(config2, device.currentDevice);
  const gutterCSSVar = device.currentDevice ? {
    "--image-list-gutter": config2[device.currentDevice + "Gutter"]
  } : {};
  const classnames = classnames__WEBPACK_IMPORTED_MODULE_1__(styles$v.imageWrapper, {
    [styles$v.twoColumn]: config2.template === "2",
    [styles$v.twoColumnPro]: config2.template === "3",
    [styles$v.twoColumnProBal]: config2.template === "lookbookSimplified" || config2.template === "5",
    [styles$v.balDefaultLookBook]: isBalDefaultLookBookLayout,
    [styles$v.balImage]: isBalLookBookORGallery,
    [styles$v.amqDesktop2Tablet1]: config2.template === "amqImageListTemplate",
    [styles$v.amqDesktop4Tablet2]: config2.template === "amqLookbookTemplate"
  });
  const imageAlt = brandName && pageTitle ? `${brandName} ${pageTitle}` : "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(DynamicHeaderContainer, {
    addDynamicHeader,
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      id: getID(config2),
      style: {
        ...css,
        ...gutterCSSVar
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$v.imageList, {
        [styles$v.withBottomBorder]: isBalLookBookORGallery && isNoMore && hasBorderBottom(),
        [styles$v.alignLeft]: isBalLookBookORGallery,
        [styles$v.bal]: isBalLookBookORGallery
      }),
      children: [imagesWithPlaceholder.map((image2, index) => {
        var _a, _b;
        if (isBalLookBookORGallery) {
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
            ratio: "2 / 3",
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(classnames, image2 === void 0 ? styles$v.placeHolder : ""),
            children: image2 === void 0 ? null : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
                clickBehavior: image2.clickBehavior,
                className: styles$v.imageLink,
                onClickLink: () => {
                  var _a2;
                  return homepageCTAOnClick(((_a2 = image2 == null ? void 0 : image2.title) == null ? void 0 : _a2.wording) || imageAlt, index);
                },
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LazyImage, {
                  immediate: true,
                  className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$v.image, brand === "amq" ? styles$v.amqImage : ""),
                  src: image2.imageUrl
                })
              }), !!((_a = image2.title) == null ? void 0 : _a.wording) && isBalLookBook && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: styles$v.imageTitle,
                style: {
                  ...normalizeStyle(image2.title.style),
                  color: image2.title.color,
                  ...normalizeTextStyle(image2.title.textStyle),
                  ...image2.titleBottomSpace ? {
                    bottom: image2.titleBottomSpace + "%"
                  } : null
                },
                dangerouslySetInnerHTML: {
                  __html: image2.title.wording
                }
              }), !!((_b = image2.cta) == null ? void 0 : _b.wording) && isBalLookBook && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BALCTA, {
                className: styles$v.imageCTA,
                style: {
                  ...normalizeStyle(image2.cta.style),
                  ...image2.cta.color ? {
                    color: image2.cta.color
                  } : {},
                  ...normalizeTextStyle(image2.cta.textStyle),
                  ...image2.ctaBottomSpace ? {
                    bottom: image2.ctaBottomSpace + "%"
                  } : {}
                },
                componentIndex,
                text: image2.cta.wording.substring(0, 20),
                config: config2,
                onEvent,
                clickBehavior: image2.cta.clickBehavior,
                trackSwiperIndex: index
              })]
            })
          }, index);
        } else {
          return image2 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NormalImageItem, {
            brand,
            className: classnames,
            config: config2,
            imgChildrenRender,
            image: image2,
            imageAlt,
            onEvent,
            componentPosition,
            trackSwiperIndex: index,
            componentIndex,
            onCTAClick
          }, index) : null;
        }
      }), config2.template === "amqLookbookTemplate" && new Array(4).fill(void 0).map((i, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
        className: styles$v.placeHolderForAMQ
      }, index))]
    }), isBalLookBookORGallery && !isNoMore && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$v.loadMore, {
        [styles$v.withBottomBorder]: hasBorderBottom()
      }),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonSecondary, {
        className: styles$v.loadMoreBtn,
        brand: "bal",
        onClick: () => {
          nextPage();
          homepageCTAOnClick("\u52A0\u8F7D\u66F4\u591A");
        },
        children: "\u52A0\u8F7D\u66F4\u591A"
      })
    })]
  });
};
function NormalImageItem({
  className,
  image: image2,
  imageAlt,
  brand,
  config: config2,
  imgChildrenRender,
  onEvent,
  componentPosition,
  onCTAClick,
  componentIndex,
  trackSwiperIndex
}) {
  const {
    imgRef,
    isLoad,
    onLoad
  } = useImageOnLoad();
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
      clickBehavior: image2.clickBehavior,
      className: styles$v.imageLink,
      onClickLink: () => {
        var _a;
        return homepageCTAOnClick(((_a = image2 == null ? void 0 : image2.title) == null ? void 0 : _a.wording) || imageAlt, trackSwiperIndex);
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        ref: imgRef,
        onLoad,
        src: image2.imageUrl,
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$v.image, brand === "amq" ? styles$v.amqImage : ""),
        alt: imageAlt
      })
    }), brand === "bv" && (image2.ctaGroup || []).filter((ctaItem) => Boolean(ctaItem.wording)).map((ctaItem, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BV_CTA, {
      type: ctaItem.template,
      className: styles$v.cta,
      style: normalizeTextStyle(ctaItem.textStyle),
      clickBehavior: ctaItem.clickBehavior,
      config: config2,
      text: ctaItem.wording,
      onEvent,
      componentIndex,
      trackSwiperIndex
    }, index)), isLoad && (imgChildrenRender == null ? void 0 : imgChildrenRender(config2, image2, componentPosition, onCTAClick))]
  });
}
const getTargetImage = (config2, device) => {
  return (device.isLargeDesktop ? config2.largeDesktopImageUrl : device.isDesktop ? config2.desktopImageUrl : device.isTablet ? config2.tabletImageUrl : device.isMobile ? config2.mobileImageUrl : config2.desktopImageUrl) || config2.desktopImageUrl;
};
const ClientOnlyPortal = ({
  children,
  selector
}) => {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);
  return mounted && ref.current ? (0,react_dom__WEBPACK_IMPORTED_MODULE_8__.createPortal)(children, ref.current) : null;
};
const SvgBalLogo = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 137,
  height: 16,
  viewBox: "0 0 137 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M130.161 2.75862H130.253C130.469 3.77011 130.561 4.22989 130.777 4.96552L132.04 9.93104H128.343L129.606 4.96552C129.791 4.22989 129.914 3.77011 130.161 2.75862ZM133.519 15.7854H137L132.625 0.306513H127.881L123.476 15.7854H126.772L127.758 12.3218H132.533L133.519 15.7854ZM115.928 16C117.838 16 119.686 15.5402 120.888 15.0498V7.29502H115.527V9.77778H117.715V13.2414C117.314 13.4866 116.636 13.6398 115.897 13.6398C113.617 13.6398 112.909 12.5057 112.909 9.22605V7.23372C112.909 3.98468 113.586 2.39081 115.681 2.39081C117.129 2.39081 117.622 3.37165 117.653 4.4138H120.949C120.919 1.68583 118.947 0 115.681 0C111.122 0 109.458 2.63601 109.458 6.89655V9.16476C109.427 13.7931 110.999 16 115.928 16ZM100.493 2.75862H100.586C100.801 3.77011 100.894 4.22989 101.11 4.96552L102.373 9.93104H98.6757L99.9388 4.96552C100.124 4.22989 100.247 3.77011 100.493 2.75862ZM103.851 15.7854H107.333L102.958 0.306513H98.2136L93.8082 15.7854H97.1046L98.0904 12.3218H102.866L103.851 15.7854ZM87.2154 15.7854H90.5118V0.306513H87.2154V15.7854ZM78.1581 16C81.8242 16 83.611 14.3142 83.7034 11.1571H80.3762C80.3146 12.6897 79.8217 13.6398 78.2505 13.6398C76.4637 13.6398 75.7859 12.3831 75.7859 9.16476V6.89655C75.7859 3.64751 76.4637 2.42146 78.2505 2.42146C79.9141 2.42146 80.1914 3.52491 80.253 4.68966H83.5802C83.5494 1.99234 82.009 0.0613064 78.1581 0.0613064C73.8759 0.0613064 72.3047 2.72797 72.3047 6.89655V9.16476C72.3047 13.364 73.8759 16 78.1581 16ZM55.8536 15.7854H58.7803V6.8046C58.7803 5.5479 58.7187 4.01532 58.6571 2.75862H58.7495C59.2116 4.35249 59.4581 5.18008 59.8894 6.37548L63.309 15.7854H68.1149V0.306513H65.1882V8.91954C65.1882 10.0536 65.219 11.5556 65.2498 12.9962H65.1574C64.9109 11.9234 64.6953 10.8506 64.0483 9.10345L60.8444 0.306513H55.8228V15.7854H55.8536ZM42.4216 15.7854H51.3866V13.3027H45.718V9.0115H50.8628V6.49809H45.718V2.75862H51.1709V0.275869H42.4216V15.7854ZM30.376 15.7854H39.002V13.3027H33.6724V0.306513H30.376V15.7854ZM20.148 2.75862H20.2404C20.456 3.77011 20.5485 4.22989 20.7641 4.96552L22.0272 9.93104H18.3303L19.5934 4.96552C19.7783 4.22989 19.9015 3.77011 20.148 2.75862ZM23.506 15.7854H26.9872L22.6125 0.306513H17.8682L13.4628 15.7854H16.7592L17.745 12.3218H22.5201L23.506 15.7854ZM3.32718 13.4253V8.91954H5.32966C7.02406 8.91954 7.82505 9.68582 7.82505 11.1877C7.82505 12.8429 6.77761 13.4559 5.26805 13.4559H3.32718V13.4253ZM3.32718 6.55939V2.66667H5.39127C6.90083 2.66667 7.54779 3.341 7.54779 4.5977C7.54779 5.8544 6.80841 6.55939 5.42208 6.55939H3.32718ZM0.0308092 15.7854H5.85338C9.11896 15.7854 11.1214 14.6207 11.1214 11.4023C11.1214 9.34866 9.91995 7.9387 7.70182 7.72414V7.63219C9.67349 7.29502 10.8442 6.22222 10.8442 4.16858C10.8442 1.50192 9.3038 0.306513 6.00742 0.306513H0V15.7854H0.0308092Z",
  fill: "black"
}));
const SvgBalClose = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M8 8C8.18462 8.18462 16.0769 16.0769 20 20",
  stroke: "black",
  strokeWidth: 1.5
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M8 20C8.18462 19.8154 16.0769 11.9231 20 8",
  stroke: "black",
  strokeWidth: 1.5
}));
function isiOS() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const imageWrapper$2 = "_imageWrapper_1u5ve_18";
const image$d = "_image_1u5ve_18";
const withZoom = "_withZoom_1u5ve_33";
const isInGridFullHeight = "_isInGridFullHeight_1u5ve_38";
const fullWidth = "_fullWidth_1u5ve_42";
const animationWrapper = "_animationWrapper_1u5ve_47";
const cta$6 = "_cta_1u5ve_51";
const zoom = "_zoom_1u5ve_58";
const logo = "_logo_1u5ve_79";
const closeIcon = "_closeIcon_1u5ve_96";
const wrapperClass = "_wrapperClass_1u5ve_111";
const zoomImageWrapper = "_zoomImageWrapper_1u5ve_114";
const zoomImage = "_zoomImage_1u5ve_114";
const styles$u = {
  imageWrapper: imageWrapper$2,
  image: image$d,
  withZoom,
  isInGridFullHeight,
  fullWidth,
  animationWrapper,
  cta: cta$6,
  zoom,
  logo,
  closeIcon,
  wrapperClass,
  zoomImageWrapper,
  zoomImage,
  "button-hover": "_button-hover_1u5ve_1"
};
function useLockedBody(initialLocked = false) {
  const [locked, setLocked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialLocked);
  useIsomorphicLayoutEffect(() => {
    if (!locked) {
      return;
    }
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollBarWidth) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      document.documentElement.style.setProperty("--body-padding-right", `${scrollBarWidth}px`);
    }
    return () => {
      document.body.style.overflow = originalOverflow;
      if (scrollBarWidth) {
        document.body.style.paddingRight = originalPaddingRight;
        document.documentElement.style.removeProperty("--body-padding-right");
      }
    };
  }, [locked]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
  }, [initialLocked]);
  return [locked, setLocked];
}
const ZoomPanel = ({
  image: image2,
  isDesktop,
  isMobile,
  onClose,
  isVisible = false
}) => {
  const lastTouched = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const closeTimer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const windowHeight = useWindowHeight();
  useLockedBody(isDesktop && isVisible);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_14__/* .AnimatePresence */ .M, {
    children: isVisible && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ClientOnlyPortal, {
      selector: "body",
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_15__/* .motion */ .E.div, {
        className: styles$u.zoom,
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        onClick: () => {
          if (lastTouched.current && +new Date() - lastTouched.current < 200) {
            closeTimer.current && clearTimeout(closeTimer.current);
          } else {
            closeTimer.current = setTimeout(() => {
              onClose();
            }, 200);
          }
          lastTouched.current = new Date().getTime();
        },
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBalLogo, {
          className: styles$u.logo,
          onClick: (e) => e.stopPropagation()
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBalClose, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$u.closeIcon),
          onClick: onClose
        }), !isDesktop ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_7__/* .TransformWrapper */ .d$, {
          maxScale: 4,
          centerZoomedOut: true,
          centerOnInit: true,
          alignmentAnimation: {
            sizeX: 0,
            sizeY: 0
          },
          minScale: 1,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_7__/* .TransformComponent */ .Uv, {
            wrapperClass: styles$u.wrapperClass,
            contentClass: styles$u.contentClass,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: styles$u.zoomImageWrapper,
              style: {
                height: isMobile && isiOS() ? "100vh" : windowHeight
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: image2,
                className: styles$u.zoomImage
              })
            })
          })
        }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          onClick: onClose,
          src: image2,
          className: styles$u.image
        })]
      }, "modal")
    })
  });
};
gsap__WEBPACK_IMPORTED_MODULE_16__/* .gsap */ .p8.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_17__.ScrollTrigger);
const log$i = createLog("image");
const gsapLog = createLog("gsap");
const getParsedCSS = (property, val) => {
  const isPosition = !!property.match(/^position/);
  const isScale = property === "scale";
  const newProperty = property.replace("position", "");
  return {
    [isPosition || isScale ? "transform" : newProperty]: isPosition ? `translate${newProperty}(${val.toFixed(3)}px)` : isScale ? `scale(${(val / 100).toFixed(3)})` : (val / 100).toFixed(3)
  };
};
const getBaseFromConfig = (animations) => {
  return animations.reduce((prev2, animation) => {
    const css = getParsedCSS(animation.property, animation.startValue);
    css.transition = "unset";
    prev2.transform && (css.transform = prev2.transform + " " + css.transform);
    return Object.assign(prev2, css);
  }, {});
};
const getBaseToConfig = (animations) => {
  const getCSS = (animation) => {
    const isPosition = !!animation.property.match(/^position/);
    const isScale = animation.property === "scale";
    const property = animation.property.replace("position", "");
    return {
      ...getParsedCSS(animation.property, animation.endValue),
      transition: `${isPosition || isScale ? "transform" : property} ${animation.duration}ms ${animation.easingCurveCustomized || animation.easingCurve} ${animation.startTime}ms`
    };
  };
  return animations.reduce((prev2, animation) => {
    const css = getCSS(animation);
    prev2.transition && (css.transition = prev2.transition + "," + css.transition);
    prev2.transform && (css.transform = prev2.transform + " " + css.transform);
    return Object.assign(prev2, css);
  }, {});
};
const getProgressVal = (from, to, progress) => {
  return from + (to - from) * progress;
};
const BVCta = (props2) => {
  const {
    config: config2,
    brand,
    onEvent
  } = props2;
  if (brand !== "bv")
    return null;
  if ((config2 == null ? void 0 : config2.ctaDisplay) === "dedicatedForDevice") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BvImageAndVideoCtaGroup, {
      ...props2
    });
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: (config2.cta || []).filter((ctaItem) => Boolean(ctaItem.wording)).map((ctaItem, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BV_CTA, {
      type: ctaItem.template,
      className: styles$u.cta,
      style: normalizeTextStyle(ctaItem.style),
      clickBehavior: ctaItem.clickBehavior,
      config: config2,
      text: ctaItem.wording,
      onEvent,
      componentIndex: props2.componentIndex,
      trackSwiperIndex: props2.trackSwiperIndex
    }, index))
  });
};
const Image$1 = ({
  config: config2,
  children,
  source,
  wrapperClassName,
  componentIndex,
  trackSwiperIndex = -1,
  isGrid = false
}) => {
  const {
    imgRef,
    isLoad: isImageLoaded,
    onLoad
  } = useImageOnLoad();
  const [isZoomPanelVisible, setIsZoomPanelVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const animationEl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const device = useDeviceType();
  const addDynamicHeader = useDynamicHeader();
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const {
    bannerHeight,
    imageScroller,
    brandName,
    pageTitle,
    onEvent,
    brand
  } = useCMSConfig();
  const fixedTop = bannerHeight / windowHeight;
  const [isMounted2, setIsMounded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const prevAnimationState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("initial");
  const scrollTriggerIns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  const [stateToUpdateGsap, setStateToUpdateGsap] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const resetScrollTrigger = useLatest(() => {
    scrollTriggerIns.current.forEach((ins) => ins.refresh());
  });
  const isVisualSlideShowSliderContainerMode = source === "sliderContainer";
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const handleCmsLinkClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((text2) => {
    homepageCTAOnClick(text2 || "", trackSwiperIndex);
  }, [homepageCTAOnClick, trackSwiperIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$i(config2);
  }, [config2]);
  useIsomorphicLayoutEffect(() => {
    setIsMounded(true);
  }, []);
  const handleLoaded = () => {
    onLoad();
  };
  const updateScrollTriggerAfterAnimation = useLatest(() => {
    animationEl.current.addEventListener("transitionend", function cb() {
      resetScrollTrigger.current();
      animationEl.current.removeEventListener("transitionend", cb);
    });
  });
  const handleGsapUpdate = useLatest((position) => (self) => {
    if (!config2.motion)
      return;
    const direction = self.direction > 0 ? "\u2191" : "\u2193";
    const action = position === "top" ? direction === "\u2191" ? "\u6B63\u5411\u79BB\u573A" : "\u53CD\u5411\u8FDB\u573A" : direction === "\u2193" ? "\u53CD\u5411\u79BB\u573A" : "\u6B63\u5411\u8FDB\u573A";
    const progress = self.progress.toFixed(3);
    const el = animationEl.current;
    isDebug() && gsapLog("progress:", progress, "direction:", direction, "action:", action);
    if (position === "bottom") {
      if (direction === "\u2191") {
        if (parseFloat(progress) * 100 > parseFloat(config2.motion.revealTriggerTiming)) {
          if (prevAnimationState.current === "\u6B63\u5411\u8FDB\u573A")
            return;
          const css = getBaseToConfig(config2.motion.reveal || []);
          gsapLog("\u6B63\u5411\u8FDB\u573A css:", css);
          Object.assign(el.style, css);
          updateScrollTriggerAfterAnimation.current();
          prevAnimationState.current = "\u6B63\u5411\u8FDB\u573A";
        }
        return;
      }
      if (direction === "\u2193") {
        prevAnimationState.current = "\u53CD\u5411\u79BB\u573A";
        return;
      }
    } else if (position === "top") {
      if (direction === "\u2191") {
        if (parseFloat(progress) * 100 > parseFloat(config2.motion.unrevealTriggerTiming)) {
          if (config2.motion.unrevealTriggerType === "time") {
            if (prevAnimationState.current === "\u6B63\u5411\u79BB\u573A")
              return;
            const css = getBaseToConfig(config2.motion.unreveal || []);
            gsapLog("\u6B63\u5411\u79BB\u573A css:", css);
            Object.assign(el.style, css);
            updateScrollTriggerAfterAnimation.current();
          } else if (config2.motion.unrevealTriggerType === "scroll") {
            const cssConfig = (config2.motion.unreveal || []).map((animation) => ({
              property: animation.property,
              from: animation.startValue,
              to: animation.endValue
            }));
            const relativeProgress = (parseFloat(progress) * 100 - parseFloat(config2.motion.unrevealTriggerTiming)) / (100 - parseFloat(config2.motion.unrevealTriggerTiming));
            const cssArr = cssConfig.map((item2) => {
              return getParsedCSS(item2.property, getProgressVal(item2.from, item2.to, relativeProgress));
            });
            const css = cssArr.reduce((prev2, cssItem) => {
              prev2.transform && cssItem.transform && (cssItem.transform = prev2.transform + " " + cssItem.transform);
              return Object.assign(prev2, cssItem);
            }, {});
            css.transition = "unset";
            Object.assign(el.style, css);
            if (relativeProgress === 1) {
              resetScrollTrigger.current();
            }
          }
          prevAnimationState.current = "\u6B63\u5411\u79BB\u573A";
        }
        return;
      }
      if (direction === "\u2193") {
        if ((1 - parseFloat(progress)) * 100 > parseFloat(config2.motion.revealTriggerTiming)) {
          if (prevAnimationState.current === "\u53CD\u5411\u8FDB\u573A")
            return;
          const css = getBaseToConfig(config2.motion.reveal || []);
          gsapLog("\u53CD\u5411\u8FDB\u573A css:", css);
          Object.assign(el.style, css);
          updateScrollTriggerAfterAnimation.current();
          prevAnimationState.current = "\u53CD\u5411\u8FDB\u573A";
        }
        return;
      }
    }
  });
  const initCSS = useLatest(() => {
    var _a;
    if (!animationEl.current || !device.currentDevice || !isImageLoaded || !((_a = config2.motion) == null ? void 0 : _a.reveal))
      return;
    const css = getBaseFromConfig(config2.motion.reveal);
    Object.assign(animationEl.current.style, css);
    resetScrollTrigger.current();
    gsapLog("init css:", css);
  });
  const handleGsapToggle = useLatest((self) => {
    if (!self.isActive && prevAnimationState.current === "\u53CD\u5411\u79BB\u573A") {
      initCSS.current();
    }
    !self.isActive && (prevAnimationState.current = "initial");
    isDebug() && gsapLog("toggled, isActive:", self.isActive);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isVisualSlideShowSliderContainerMode)
      return;
    initCSS.current();
  }, [initCSS, animationEl, device.currentDevice, isImageLoaded, config2, isVisualSlideShowSliderContainerMode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!animationEl.current || !device.currentDevice || !isImageLoaded || !config2.motion || isVisualSlideShowSliderContainerMode)
      return;
    const el = animationEl.current;
    const scroller = imageScroller || void 0;
    const topIns = gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_17__.ScrollTrigger.create({
      trigger: el,
      scroller,
      markers: isDebug(),
      start: `top ${imageScroller ? "top" : `${fixedTop * 100}%`}`,
      end: `bottom ${imageScroller ? "top" : `${fixedTop * 100}%`}`,
      onToggle: handleGsapToggle.current,
      onUpdate: handleGsapUpdate.current("top")
    });
    scrollTriggerIns.current.push(topIns);
    const bottomIns = gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_17__.ScrollTrigger.create({
      scroller,
      trigger: el,
      start: "top bottom",
      end: "bottom bottom",
      onToggle: handleGsapToggle.current,
      onUpdate: handleGsapUpdate.current("bottom")
    });
    scrollTriggerIns.current.push(bottomIns);
    return () => {
      scrollTriggerIns.current.forEach((ins) => ins.kill());
      scrollTriggerIns.current.length = 0;
    };
  }, [config2, handleGsapUpdate, handleGsapToggle, device.currentDevice, isImageLoaded, fixedTop, imageScroller, isVisualSlideShowSliderContainerMode]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      scrollTriggerIns.current.forEach((ins) => ins.kill());
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (stateToUpdateGsap || !isImageLoaded)
      return;
    const handleScroll = () => {
      resetScrollTrigger.current();
      setStateToUpdateGsap(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stateToUpdateGsap, isImageLoaded, resetScrollTrigger]);
  const src = getTargetImage(config2, device);
  const paddingMarginCSS = getPaddingMarginStyle(config2, device.currentDevice);
  const imageCSS = brand === "amq" ? {
    objectFit: "cover",
    objectPosition: "top center"
  } : {};
  const isFullHeight = config2.template === "fullHeight";
  const sizeCSS = config2.template === "centered" ? {
    height: "auto",
    width: config2[device.currentDevice + "Width"] || "100%"
  } : config2.template === "fullWidth" ? {
    width: "100%",
    height: "auto"
  } : isFullHeight ? {
    height: source === "sliderContainer" || isGrid ? `100%` : `${windowHeight - bannerHeight}px`,
    width: source === "sliderContainer" ? `auto` : "100%"
  } : {};
  const imageAlt = brandName && pageTitle ? `${brandName} ${pageTitle}` : "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(WhetherToUseDynamicHeaderContainer, {
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    addDynamicHeader,
    useDynamicHeaderContainer: !isVisualSlideShowSliderContainerMode,
    className: isGrid && isFullHeight ? styles$u.isInGridFullHeight : "",
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: getID(config2),
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$u.imageWrapper, wrapperClassName, isGrid && isFullHeight ? styles$u.isInGridFullHeight : ""),
      style: paddingMarginCSS,
      children: isMounted2 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        ref: animationEl,
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$u.fullWidth, styles$u.animationWrapper),
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
          clickBehavior: config2.clickBehavior,
          onZoom: () => setIsZoomPanelVisible(true),
          comData: config2,
          onClickLink: () => {
            var _a;
            return handleCmsLinkClick(((_a = config2.title) == null ? void 0 : _a.wording) || config2.imageAlt || imageAlt);
          },
          className: "link",
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            ref: imgRef,
            alt: config2.imageAlt || imageAlt,
            src,
            onLoad: handleLoaded,
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$u.image, {
              [styles$u.withZoom]: config2.clickBehavior.type === "imageZoom"
            }),
            style: {
              ...sizeCSS,
              ...imageCSS
            }
          })
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BVCta, {
          config: config2,
          onEvent,
          brand,
          source,
          componentIndex,
          trackSwiperIndex
        }), isImageLoaded && renderChildren(children, config2)]
      }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        alt: imageAlt,
        src,
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$u.image),
        style: {
          ...sizeCSS,
          ...imageCSS
        }
      })
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ZoomPanel, {
      isVisible: isZoomPanelVisible,
      image: src,
      isDesktop: device.isDesktop,
      isMobile: device.isMobile,
      onClose: () => setIsZoomPanelVisible(false)
    })]
  });
};
var VISUAL_SLIDE_SHOW_TEMPLATE = /* @__PURE__ */ ((VISUAL_SLIDE_SHOW_TEMPLATE2) => {
  VISUAL_SLIDE_SHOW_TEMPLATE2["campaignPage"] = "campaignPage";
  VISUAL_SLIDE_SHOW_TEMPLATE2["sliderContainer"] = "sliderContainer";
  VISUAL_SLIDE_SHOW_TEMPLATE2["balTemplate"] = "balTemplate";
  return VISUAL_SLIDE_SHOW_TEMPLATE2;
})(VISUAL_SLIDE_SHOW_TEMPLATE || {});
const visualSlideShow$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VISUAL_SLIDE_SHOW_TEMPLATE
}, Symbol.toStringTag, { value: "Module" }));
const visualSlideShow = "_visualSlideShow_5l8m8_18";
const canToNext = "_canToNext_5l8m8_38";
const image$c = "_image_5l8m8_42";
const sliderContainer = "_sliderContainer_5l8m8_49";
const dynamicHeaderContainer = "_dynamicHeaderContainer_5l8m8_54";
const fullWidthFullHeight$2 = "_fullWidthFullHeight_5l8m8_57";
const styles$t = {
  visualSlideShow,
  canToNext,
  image: image$c,
  sliderContainer,
  dynamicHeaderContainer,
  fullWidthFullHeight: fullWidthFullHeight$2,
  "dotsOnMobile-left": "_dotsOnMobile-left_5l8m8_96",
  "bvDots-left": "_bvDots-left_5l8m8_97",
  "dotsOnMobile-right": "_dotsOnMobile-right_5l8m8_105",
  "bvDots-right": "_bvDots-right_5l8m8_106",
  "button-hover": "_button-hover_5l8m8_1"
};
swiper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.use([swiper__WEBPACK_IMPORTED_MODULE_9__/* .EffectCreative */ .gI, swiper__WEBPACK_IMPORTED_MODULE_9__/* .Autoplay */ .pt, swiper__WEBPACK_IMPORTED_MODULE_9__/* .Pagination */ .tl]);
const log$h = createLog("visualSlideShow");
const SlideChangeAttr$3 = "data-active-time";
const SliderContent = ({
  isFullHeight,
  children,
  ratioOfImage,
  isGrid = false
}) => {
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const {
    bannerHeight
  } = useCMSConfig();
  const fullHeightStyle = isGrid ? {
    height: "100%",
    position: "absolute",
    inset: 0
  } : {
    height: `calc(${windowHeight - bannerHeight}px)`
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: isFullHeight ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cmsSliderWrapperFullHeight",
      style: fullHeightStyle,
      children
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
      className: "cmsSliderWrapperAspectRatioBox",
      ratio: ratioOfImage.replace(":", "/"),
      children
    })
  });
};
const SliderContainer$1 = ({
  config: config2,
  stateToRefreshAutoScroll,
  componentIndex,
  isGrid = false
}) => {
  var _a, _b, _c, _d, _e;
  const {
    autoplay,
    autoplayDuration,
    multiDisplayMode,
    dotsOnMobile,
    dotsPosition
  } = config2;
  const {
    currentDevice,
    isMobile,
    isTablet
  } = useDeviceType();
  const dotsOnMobileCss = (currentDevice === "mobile" || currentDevice === "tablet") && dotsOnMobile ? styles$t["dotsOnMobile-" + dotsOnMobile] : "";
  let ratioOfImage = "";
  let displayMode = "";
  if (currentDevice && multiDisplayMode && multiDisplayMode[currentDevice]) {
    ratioOfImage = ((_a = multiDisplayMode[currentDevice]) == null ? void 0 : _a.ratioOfImage) || ((_b = multiDisplayMode == null ? void 0 : multiDisplayMode.desktop) == null ? void 0 : _b.ratioOfImage);
    displayMode = ((_c = multiDisplayMode[currentDevice]) == null ? void 0 : _c.displayMode) || ((_d = multiDisplayMode == null ? void 0 : multiDisplayMode.desktop) == null ? void 0 : _d.displayMode);
  }
  const {
    brand
  } = useCMSConfig();
  const isFullHeight = displayMode === "fullWidthFullHeight";
  const [sliderCurrentIndex, setSliderCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const lastMovedTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [swiperInit, setSwiperInit] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const addDynamicHeader = useDynamicHeader({
    scrollType: "horizontal",
    horizontalCheck: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
      target,
      top,
      bottom,
      verticalIntersectionDetectEnd
    }) => {
      const targetSwiperSlide = target.closest(".swiper-slide");
      if (!targetSwiperSlide.classList.contains("swiper-slide-active"))
        return false;
      if (new Date().getTime() - Number(targetSwiperSlide.getAttribute(SlideChangeAttr$3) || 0) < 1100 || new Date().getTime() - lastMovedTime.current < 1e3) {
        if (!(top < verticalIntersectionDetectEnd && bottom > verticalIntersectionDetectEnd)) {
          return false;
        }
      }
      return true;
    }, [lastMovedTime])
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$h("config", config2);
  }, [config2]);
  const handleSwiperChange = (swiper2) => {
    setSliderCurrentIndex(swiper2.realIndex);
    swiper2.slides[swiper2.activeIndex].setAttribute(SlideChangeAttr$3, new Date().getTime().toString());
  };
  const autoScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (swiperRef.current && autoplay && autoplayDuration) {
      timerRef.current = setInterval(() => {
        var _a2;
        try {
          (_a2 = swiperRef.current) == null ? void 0 : _a2.slideNext();
        } catch (error) {
        }
      }, autoplayDuration);
    }
    return () => {
      timerRef.current && clearInterval(timerRef.current);
    };
  }, [autoplay, autoplayDuration]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a2;
    if (stateToRefreshAutoScroll == null ? void 0 : stateToRefreshAutoScroll.noAutoScroll) {
      timerRef.current && clearInterval(timerRef.current);
      return;
    }
    if (autoplay && autoplayDuration && swiperInit && ((_a2 = config2 == null ? void 0 : config2.slides) == null ? void 0 : _a2.length) > 1) {
      timerRef.current && clearInterval(timerRef.current);
      autoScroll();
    }
  }, [autoScroll, autoplay, autoplayDuration, config2.slides.length, stateToRefreshAutoScroll, swiperInit]);
  if (!currentDevice)
    return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
    id: getID(config2),
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$t.visualSlideShow, styles$t.sliderContainer, dotsOnMobileCss, styles$t[`${brand}Dots-${isMobile || isTablet ? dotsOnMobile : dotsPosition}`]),
    spaceBetween: 0,
    onSliderMove: () => {
      lastMovedTime.current = new Date().getTime();
    },
    loop: ((_e = config2 == null ? void 0 : config2.slides) == null ? void 0 : _e.length) > 1,
    speed: 1750,
    onSlideChange: handleSwiperChange,
    allowTouchMove: true,
    onSwiper: (swiper2) => {
      swiperRef.current = swiper2;
      setSwiperInit(true);
    },
    onTouchStart: () => timerRef.current && clearInterval(timerRef.current),
    onTouchEnd: autoScroll,
    pagination: {
      clickable: true
    },
    focusableElements: "input, select, option, textarea, button, label",
    children: config2.slides.slice(0, 5).map((slide2, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$t.swiperSlide),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
          addDynamicHeader,
          headerChanging: slide2.hasOwnProperty("headerChanging") ? slide2.headerChanging : slide2[currentDevice].headerChanging,
          headerChangingOffset: config2.headerChangingOffset,
          currentDevice,
          className: styles$t.dynamicHeaderContainer,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SliderContent, {
            isFullHeight,
            ratioOfImage,
            isGrid,
            children: slide2.type === ComponentType.image ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Image$1, {
              config: slide2,
              wrapperClassName: styles$t.fullWidthFullHeight,
              source: "sliderContainer",
              componentIndex,
              trackSwiperIndex: sliderCurrentIndex
            }) : slide2.type === ComponentType.video ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Video$1, {
              config: slide2,
              className: styles$t.fullWidthFullHeight,
              source: "sliderContainer",
              noHeader: true,
              currentActive: sliderCurrentIndex === index,
              componentIndex,
              trackSwiperIndex: sliderCurrentIndex
            }) : null
          })
        })
      }, index);
    })
  });
};
swiper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.use([swiper__WEBPACK_IMPORTED_MODULE_9__/* .EffectCreative */ .gI, swiper__WEBPACK_IMPORTED_MODULE_9__/* .Autoplay */ .pt]);
const log$g = createLog("visualSlideShow");
const SlideChangeAttr$2 = "data-active-time";
const DefaultVisualSlideShow = ({
  config: config2,
  componentIndex
}) => {
  const device = useDeviceType();
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const {
    bannerHeight,
    brandName,
    pageTitle
  } = useCMSConfig();
  const lastMovedTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [resetAutoScroll, setResetAutoScroll] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const [swiperIndex, setSwiperIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const addDynamicHeader = useDynamicHeader({
    scrollType: "horizontal",
    horizontalCheck: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
      target,
      top,
      bottom,
      verticalIntersectionDetectEnd
    }) => {
      const targetSwiperSlide = target.closest(".swiper-slide");
      if (!targetSwiperSlide.classList.contains("swiper-slide-active"))
        return false;
      if (new Date().getTime() - Number(targetSwiperSlide.getAttribute(SlideChangeAttr$2) || 0) < 1100 || new Date().getTime() - lastMovedTime.current < 1e3) {
        if (!(top < verticalIntersectionDetectEnd && bottom > verticalIntersectionDetectEnd)) {
          return false;
        }
      }
      return true;
    }, [lastMovedTime])
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$g("config", config2);
  }, [config2]);
  const autoScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    let clean;
    const timer = setTimeout(() => {
      var _a;
      (_a = swiperRef.current) == null ? void 0 : _a.slideNext();
      clean = autoScroll();
    }, config2.autoplayDuration);
    return () => {
      clearTimeout(timer);
      clean == null ? void 0 : clean();
    };
  }, [config2.autoplayDuration]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (config2.autoplay && config2.autoplayDuration) {
      return autoScroll();
    }
  }, [config2, autoScroll, resetAutoScroll]);
  const getImgURL = (slide2) => {
    const curDevice = device.currentDevice;
    return (curDevice === "large" ? slide2.largeImageUrl : curDevice === "desktop" ? slide2.desktopImageUrl : curDevice === "tablet" ? slide2.tabletImageUrl : curDevice === "mobile" ? slide2.mobileImageUrl : slide2.desktopImageUrl) || slide2.desktopImageUrl;
  };
  const isFullHeight = config2.displayMode === "fullWidthFullHeight";
  const imageCSS = isFullHeight ? {
    width: "100%",
    height: `calc(${windowHeight - bannerHeight}px)`
  } : {
    width: "100%",
    height: "auto"
  };
  const paddingMarginCSS = getPaddingMarginStyle(config2, device.currentDevice);
  const handleClick = (slide2) => {
    if (slide2.slides[slide2.activeIndex].getAttribute("data-next") === "true") {
      slide2.slideNext();
      setResetAutoScroll({});
    }
  };
  const handleSwiperChange = (swiper2) => {
    setSwiperIndex(swiper2.realIndex);
    swiper2.slides[swiper2.activeIndex].setAttribute(SlideChangeAttr$2, new Date().getTime().toString());
  };
  const imageAlt = brandName && pageTitle ? `${brandName} ${pageTitle}` : "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
    id: getID(config2),
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$t.visualSlideShow),
    direction: "horizontal",
    spaceBetween: 0,
    speed: 1e3,
    allowSlidePrev: false,
    mousewheel: false,
    effect: `creative`,
    onSliderMove: () => {
      lastMovedTime.current = new Date().getTime();
    },
    creativeEffect: {
      prev: {
        shadow: false,
        origin: "right center",
        translate: ["-100%", 0, 0],
        rotate: [0, -90, 0],
        scale: 1
      },
      next: {
        origin: "center right",
        translate: ["100%", 0, 0],
        rotate: [0, 0, 0],
        scale: 1
      },
      perspective: false
    },
    loop: true,
    onClick: handleClick,
    onSlideChange: handleSwiperChange,
    allowTouchMove: true,
    onSwiper: (swiper2) => swiperRef.current = swiper2,
    children: config2.slides.map((slide2, index) => {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$t.swiperSlide, {
          [styles$t.canToNext]: slide2.sliderRedirect.type === "goToNextSlides"
        }),
        "data-next": slide2.sliderRedirect.type === "goToNextSlides" ? "true" : "false",
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
          addDynamicHeader,
          headerChanging: slide2.headerChanging,
          headerChangingOffset: config2.headerChangingOffset,
          currentDevice: device.currentDevice,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            style: paddingMarginCSS,
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
              clickBehavior: slide2.sliderRedirect,
              onClickLink: () => homepageCTAOnClick(imageAlt, swiperIndex),
              children: isFullHeight ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: getImgURL(slide2),
                alt: imageAlt,
                className: styles$t.image,
                style: imageCSS
              }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
                ratio: config2.ratioOfImage.replace(":", "/"),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  src: getImgURL(slide2),
                  alt: imageAlt,
                  className: styles$t.image
                })
              })
            })
          })
        })
      }, index);
    })
  });
};
const wrapper$7 = "_wrapper_1s9ve_18";
const upLine = "_upLine_1s9ve_21";
const downLine = "_downLine_1s9ve_24";
const swiper$4 = "_swiper_1s9ve_27";
const slide$1 = "_slide_1s9ve_61";
const image$b = "_image_1s9ve_67";
const contentWrapper = "_contentWrapper_1s9ve_73";
const title$6 = "_title_1s9ve_88";
const text$2 = "_text_1s9ve_96";
const linkWrapper = "_linkWrapper_1s9ve_104";
const link$1 = "_link_1s9ve_104";
const prev = "_prev_1s9ve_121";
const next = "_next_1s9ve_129";
const styles$s = {
  wrapper: wrapper$7,
  upLine,
  downLine,
  swiper: swiper$4,
  slide: slide$1,
  image: image$b,
  contentWrapper,
  title: title$6,
  text: text$2,
  linkWrapper,
  link: link$1,
  prev,
  next,
  "button-hover": "_button-hover_1s9ve_1"
};
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  const handleResize = () => {
    if (window == null ? void 0 : window.isVideoFullscreen)
      return;
    setWindowWidth(window.innerWidth);
  };
  const debounceFunc = useDebounce(handleResize);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener("resize", debounceFunc);
    document.addEventListener("fullscreenchange", debounceFunc);
    return () => {
      window.removeEventListener("resize", debounceFunc);
      document.removeEventListener("fullscreenchange", debounceFunc);
    };
  }, [debounceFunc]);
  return windowWidth;
}
const SvgBalArrowLeft = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M16 8L10 14L16 20",
  stroke: "black",
  strokeWidth: 1.5,
  strokeLinecap: "square"
}));
const SvgBalArrowRight = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 28,
  height: 28,
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M12 8L18 14L12 20",
  stroke: "black",
  strokeWidth: 1.5,
  strokeLinecap: "square"
}));
const CoutureSlider = ({
  config: config2,
  componentIndex
}) => {
  const {
    imageContainerWidthDesktop,
    imageContainerWidthMobile,
    imageContainerPortion,
    upLine: upLine2,
    downLine: downLine2
  } = config2;
  const slides = config2.slides;
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const [swiperIndex, setSwiperIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    currentDevice,
    isDesktop
  } = useDeviceType();
  const windowWidth = useWindowWidth();
  const [arrowTop, setArrowTop] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("50%");
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const paddingMargin2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => getPaddingMarginStyle(config2, currentDevice), [config2, currentDevice]);
  const imageWidth = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (currentDevice === "mobile")
      return imageContainerWidthMobile === "fullWidth" ? "100%" : imageContainerWidthMobile || "100%";
    return imageContainerWidthDesktop === "fullWidth" ? "100%" : imageContainerWidthDesktop || "540px";
  }, [currentDevice, imageContainerWidthDesktop, imageContainerWidthMobile]);
  const aspectRatio = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (imageContainerPortion || "1:1").replace(":", "/"), [imageContainerPortion]);
  const handleSlideChange = (swiper2) => {
    setSwiperIndex(swiper2.realIndex);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTimeout(() => {
      if (!imageRef.current)
        return;
      setArrowTop(`calc(50% + ${imageRef.current.getBoundingClientRect().width}px / (${aspectRatio}) / 2)`);
    }, 200);
  }, [aspectRatio]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: getID(config2),
    style: paddingMargin2,
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$s.wrapper, {
      [styles$s.upLine]: upLine2,
      [styles$s.downLine]: downLine2
    }),
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
      className: styles$s.swiper,
      style: {
        width: imageWidth
      },
      modules: [swiper__WEBPACK_IMPORTED_MODULE_9__/* .Navigation */ .W_, swiper__WEBPACK_IMPORTED_MODULE_9__/* .Pagination */ .tl],
      navigation: {
        prevEl: `.prev-${config2.identifier}`,
        nextEl: `.next-${config2.identifier}`
      },
      pagination: {
        clickable: true
      },
      loop: true,
      allowTouchMove: !isDesktop,
      onSlideChange: handleSlideChange,
      children: [slides == null ? void 0 : slides.map((slide2, index) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
          className: styles$s.slide,
          children: [slide2.imageUrl && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            className: styles$s.image,
            src: slide2.imageUrl,
            alt: (_b = (_a = slide2.title) == null ? void 0 : _a.wording) != null ? _b : "",
            style: {
              aspectRatio
            },
            width: windowWidth || 375,
            height: windowWidth || 375,
            ...index === 0 ? {
              ref: imageRef
            } : null
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: styles$s.contentWrapper,
            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              children: [((_c = slide2.title) == null ? void 0 : _c.wording) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: styles$s.title,
                style: normalizeStyle((_d = slide2.title) == null ? void 0 : _d.style),
                children: slide2.title.wording
              }), ((_e = slide2.text) == null ? void 0 : _e.wording) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: styles$s.text,
                style: normalizeStyle((_f = slide2.text) == null ? void 0 : _f.style),
                children: slide2.text.wording
              })]
            }), ((_g = slide2.link) == null ? void 0 : _g.wording) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: styles$s.linkWrapper,
              children: ((_h = slide2.link) == null ? void 0 : _h.clickBehavior) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
                clickBehavior: slide2.link.clickBehavior,
                onClickLink: () => {
                  var _a2;
                  return homepageCTAOnClick(((_a2 = slide2 == null ? void 0 : slide2.link) == null ? void 0 : _a2.wording) || "", swiperIndex);
                },
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: styles$s.link,
                  style: normalizeStyle((_i = slide2.link) == null ? void 0 : _i.style),
                  children: slide2.link.wording
                })
              }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: styles$s.link,
                style: normalizeStyle((_j = slide2.link) == null ? void 0 : _j.style),
                children: slide2.link.wording
              })
            })]
          })]
        }, index);
      }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBalArrowLeft, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$s.prev, `prev-${config2.identifier}`),
        style: {
          top: arrowTop
        }
      }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBalArrowRight, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$s.next, `next-${config2.identifier}`),
        style: {
          top: arrowTop
        }
      })]
    })
  });
};
const coutureSlider = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(CoutureSlider);
const TEMPLATE_MAP = {
  [VISUAL_SLIDE_SHOW_TEMPLATE.campaignPage]: DefaultVisualSlideShow,
  [VISUAL_SLIDE_SHOW_TEMPLATE.sliderContainer]: SliderContainer$1,
  [VISUAL_SLIDE_SHOW_TEMPLATE.balTemplate]: coutureSlider
};
const VisualSlideShow = ({
  config: config2,
  stateToRefreshAutoScroll,
  componentIndex,
  isGrid = false
}) => {
  const [tmpConfig, setTmpConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(config2);
  const {
    isBV
  } = useCMSConfig();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isBV || !(config2 == null ? void 0 : config2.slides.length))
      return;
    const tmpSlides = config2.slides.map((slide2) => {
      return {
        ...slide2 || {},
        parentIdentifier: config2.identifier
      };
    });
    setTmpConfig({
      ...config2,
      slides: tmpSlides
    });
  }, [config2, setTmpConfig, isBV]);
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => TEMPLATE_MAP[config2.template], [config2.template]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, {
    ...config2.template === VISUAL_SLIDE_SHOW_TEMPLATE.sliderContainer ? {
      config: tmpConfig,
      stateToRefreshAutoScroll,
      componentIndex,
      isGrid
    } : {
      config: tmpConfig,
      componentIndex
    }
  });
};
const cta$5 = "_cta_9jefj_18";
const ctaWrapper = "_ctaWrapper_9jefj_26";
const ctaUnderAssets = "_ctaUnderAssets_9jefj_26";
const styles$r = {
  cta: cta$5,
  ctaWrapper,
  ctaUnderAssets,
  "button-hover": "_button-hover_9jefj_1"
};
const log$f = createLog("ProductList");
const ProductList = ({
  config: config2,
  componentIndex
}) => {
  const addDynamicHeader = useDynamicHeader();
  const device = useDeviceType();
  const {
    PLPRender,
    loadMore: loadMore2,
    onEvent
  } = useCMSConfig();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$f(config2);
  }, [config2]);
  const pagination = usePagination({
    config: config2,
    currentPage: config2.currentPage || 1,
    totalPages: config2.totalPages || 1,
    getData: (config22) => config22.products || [],
    loadMore: loadMore2,
    onStartLoading: () => {
      onEvent(EventType.startLoading, {
        component: config2
      });
    },
    onFinishLoading: () => {
      onEvent(EventType.finishLoading, {
        component: config2
      });
    }
  });
  const defaultCtaList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item2) => {
    if (!("type" in item2 && item2.type === "assets"))
      return;
    const isTextOnImage = !(item2 == null ? void 0 : item2.ctaUnderAssets);
    return (item2.cta || []).filter((ctaItem) => Boolean(ctaItem.wording)).map((ctaItem, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BV_CTA, {
      componentIndex,
      type: ctaItem.template,
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$r.ctaWrapper, isTextOnImage ? styles$r.cta : styles$r.ctaUnderAssets),
      style: normalizeTextStyle(ctaItem.style),
      clickBehavior: ctaItem.clickBehavior,
      config: config2,
      text: ctaItem.wording,
      onEvent
    }, index));
  }, [config2, onEvent]);
  const ctaList2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return (config2.products || []).map(defaultCtaList);
  }, [config2.products, defaultCtaList]);
  const updateCtaList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((products2) => {
    return (products2 || []).map(defaultCtaList);
  }, [defaultCtaList]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    addDynamicHeader,
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: getID(config2),
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$r.productList),
      style: getPaddingMarginStyle(config2, device.currentDevice),
      children: PLPRender == null ? void 0 : PLPRender({
        config: config2,
        products: config2.products || [],
        template: config2.template,
        pagination,
        ctaList: ctaList2,
        updateCtaList
      })
    })
  });
};
const dynamicHeaderHOC = (WrappedComponent, componentConfig = {}) => {
  const {
    componentName,
    getHeaderChangingOffset,
    getHeaderChanging
  } = componentConfig;
  return function DynamicHeaderHOC({
    config: config2,
    ...restProps
  }) {
    const device = useDeviceType();
    const addDynamicHeader = useDynamicHeader();
    const cmsConfig = useCMSConfig();
    const isMountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
      if (isMountedRef.current)
        return;
      createLog(componentName || config2.type)(config2);
      isMountedRef.current = true;
    }, [config2]);
    const headerChangingOffset = getHeaderChangingOffset ? getHeaderChangingOffset(config2, device) : config2.headerChangingOffset;
    const headerChanging = getHeaderChanging ? getHeaderChanging(config2, device) : config2.headerChanging;
    const props2 = {
      config: config2,
      device,
      cmsConfig,
      componentID: getID(config2),
      paddingMargin: getPaddingMarginStyle(config2, device.currentDevice),
      ...restProps
    };
    const {
      headerChanging: deprecatedHeaderChanging,
      enableHeaderChanging
    } = cmsConfig;
    const isEnableHeaderChanging = deprecatedHeaderChanging && enableHeaderChanging;
    if (!isEnableHeaderChanging) {
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(WrappedComponent, {
        ...props2
      });
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
      addDynamicHeader,
      currentDevice: device.currentDevice,
      headerChangingOffset,
      headerChanging,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(WrappedComponent, {
        ...props2
      })
    });
  };
};
const item$4 = "_item_19hec_19";
const subItem$1 = "_subItem_19hec_25";
const productBox = "_productBox_19hec_47";
const image$a = "_image_19hec_69";
const textAtTheBottom = "_textAtTheBottom_19hec_76";
const title$5 = "_title_19hec_103";
const cta$4 = "_cta_19hec_124";
const ctas = "_ctas_19hec_137";
const noTitle = "_noTitle_19hec_158";
const styles$q = {
  item: item$4,
  subItem: subItem$1,
  productBox,
  image: image$a,
  textAtTheBottom,
  title: title$5,
  cta: cta$4,
  ctas,
  noTitle,
  "button-hover": "_button-hover_19hec_1"
};
const fullWidthFullHeight$1 = "_fullWidthFullHeight_15wmv_18";
const styles$p = {
  fullWidthFullHeight: fullWidthFullHeight$1,
  "button-hover": "_button-hover_15wmv_1"
};
const defaultVideoData = {
  width: "fullWidth",
  widthCustomized: "",
  videoName: "video",
  height: "fullHeight",
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
  sourceType: ""
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
const ClpVideo = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(({
  config: config2,
  componentIndex,
  trackSwiperIndex = -1
}) => {
  const device = useDeviceType();
  const videoData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _a;
    const currentDeviceData = device.currentDevice == "desktop" || device.currentDevice == "large" ? config2.desktopVideo : ((_a = config2 == null ? void 0 : config2.mobileVideo) == null ? void 0 : _a.videoSrc) ? config2.mobileVideo : config2.desktopVideo;
    const videoData2 = {
      controlBar: (currentDeviceData == null ? void 0 : currentDeviceData.controlBar) ? "brandTemplate" : "",
      controlBarBrandTemplate: (currentDeviceData == null ? void 0 : currentDeviceData.controlBar) || "",
      clickBehavior: currentDeviceData == null ? void 0 : currentDeviceData.clickBehavior,
      isLoop: currentDeviceData.loopMode,
      playMode: currentDeviceData.playMode,
      videoSrc: currentDeviceData.videoSrc
    };
    const data = {
      ...defaultVideoData,
      ...videoData2
    };
    return {
      identifier: "video",
      type: ComponentType.video,
      large: data,
      desktop: data,
      tablet: data,
      mobile: data,
      videoCover: "",
      margin: marginData,
      padding: paddingData,
      blockId: "",
      ...videoData2
    };
  }, [config2.desktopVideo, config2.mobileVideo, device.currentDevice]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Video$1, {
    config: videoData,
    className: styles$p.fullWidthFullHeight,
    noHeader: true,
    showBvPlayIcon: false,
    videoFullDomHeight: true,
    componentIndex,
    trackSwiperIndex
  });
});
const log$e = createLog("ProductListWithAssets");
const ProductListWithAssets = ({
  config: config2,
  componentIndex
}) => {
  const {
    list: list2
  } = config2;
  const {
    currentDevice
  } = useDeviceType();
  const {
    ProductListItem,
    onEvent
  } = useCMSConfig();
  const [heights, setHeights] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const windowWidth = useWindowWidth();
  const desktop = "desktop";
  const isPc = windowWidth >= 1024 ? desktop : "mobile";
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$e(config2);
  }, [config2]);
  const getDeviceImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((data) => {
    return data[`${currentDevice}Image`] || data.desktopImage;
  }, [currentDevice]);
  const TitleDom = (title2) => (title2 == null ? void 0 : title2.wording) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BV_CTA, {
    type: "bvLink",
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$q.title),
    style: normalizeTextStyle(title2.style),
    clickBehavior: title2 == null ? void 0 : title2.clickBehavior,
    config: config2,
    text: title2 == null ? void 0 : title2.wording,
    onEvent
  }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {});
  const CtaDom = (ctaItem, titleData, trackSwiperIndex) => (ctaItem == null ? void 0 : ctaItem.wording) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$q.cta, !(titleData == null ? void 0 : titleData.wording) ? styles$q.noTitle : ""),
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BV_CTA, {
      type: (ctaItem == null ? void 0 : ctaItem.style) || "editorialBorn",
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$q.ctas),
      style: normalizeTextStyle(ctaItem == null ? void 0 : ctaItem.wordingStyle),
      clickBehavior: ctaItem == null ? void 0 : ctaItem.clickBehavior,
      config: config2,
      text: ctaItem == null ? void 0 : ctaItem.wording,
      onEvent,
      componentIndex,
      trackSwiperIndex
    })
  }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {});
  const getProductImageHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index, className) => {
    var _a, _b;
    const height = ((_a = document.querySelector(`#${getID(config2)} .${className} .productListItemFrame`)) == null ? void 0 : _a.getBoundingClientRect().height) || 0;
    const itemHeight = ((_b = document.querySelector(`#${getID(config2)} .${className}`)) == null ? void 0 : _b.getBoundingClientRect().height) || 0;
    setHeights((val) => {
      return {
        ...val,
        [index]: itemHeight - (itemHeight / 2 - height) || "auto"
      };
    });
  }, [config2]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (windowWidth && isPc == desktop) {
      setTimeout(() => {
        list2.map((item2, index) => {
          const isProduct = item2.template === "4GridsLeft" || item2.template === "4GridsRight";
          if (isProduct) {
            getProductImageHeight(index, `item${index}`);
          }
        });
      }, 300);
    }
  }, [getProductImageHeight, isPc, list2, windowWidth]);
  if (!windowWidth)
    return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    style: {
      ...getPaddingMarginStyle(config2, currentDevice)
    },
    id: getID(config2),
    className: styles$q.wrapper,
    children: list2.map((item2, index) => {
      const arrayData = [item2.left, item2.right];
      const isProduct = item2.template === "4GridsLeft" || item2.template === "4GridsRight";
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$q.item, "item" + index),
        children: arrayData.map((el, i) => {
          let dom = null;
          if (el.type === "image") {
            const data = el;
            const imageDom = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
              alt: data.imageAlt,
              src: getDeviceImage(data),
              className: styles$q.image
            });
            dom = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
                clickBehavior: data.clickBehavior,
                onClickLink: () => {
                  var _a;
                  return homepageCTAOnClick(((_a = data == null ? void 0 : data.title) == null ? void 0 : _a.wording) || (data == null ? void 0 : data.imageAlt), index);
                },
                children: isPc == desktop && isProduct ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  style: isProduct && (heights == null ? void 0 : heights[index]) ? {
                    height: heights == null ? void 0 : heights[index]
                  } : {},
                  children: imageDom
                }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
                  ratio: isPc == desktop ? "684 / 966" : "343 / 404",
                  children: imageDom
                })
              }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: styles$q.textAtTheBottom,
                children: [TitleDom(data.title), CtaDom(data.cta, data.title, index)]
              })]
            });
          }
          if (el.type === "video") {
            const data = el;
            dom = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
              children: [isPc == desktop && isProduct ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                style: isProduct && (heights == null ? void 0 : heights[index]) ? {
                  height: heights == null ? void 0 : heights[index]
                } : {},
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ClpVideo, {
                  config: data,
                  componentIndex,
                  trackSwiperIndex: index
                })
              }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
                ratio: isPc == desktop ? "684 / 966.5" : "343 / 404",
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ClpVideo, {
                  config: data,
                  componentIndex,
                  trackSwiperIndex: index
                })
              }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: styles$q.textAtTheBottom,
                children: [TitleDom(data.title), CtaDom(data.cta, data.title, index)]
              })]
            });
          }
          if (!(el == null ? void 0 : el.type)) {
            const data = el;
            dom = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$q.productBox),
              children: data.length && data.slice(0, 4).map((nextData, productIndex) => {
                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                  children: ProductListItem({
                    item: nextData,
                    index: productIndex + 1
                  })
                }, productIndex);
              })
            });
          }
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$q.subItem),
            children: dom
          }, i);
        })
      }, index);
    })
  });
};
const ProductListWithAssets$1 = dynamicHeaderHOC(ProductListWithAssets);
const Video = ({
  src,
  autoPlay = true,
  controls = false,
  loop = true,
  muted = true,
  playsInline = true,
  className,
  poster
}) => {
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const playerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!videoRef.current)
      return;
    if (!playerRef.current) {
      playerRef.current = (0,video_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(videoRef.current, {
        responsive: true,
        preload: "auto",
        controlBar: {
          pictureInPictureToggle: false,
          fullscreenToggle: true,
          volumePanel: {
            inline: false
          }
        },
        controls,
        autoplay: autoPlay,
        fill: true,
        loop,
        muted,
        poster,
        sources: [{
          src,
          type: getMimeType(src)
        }]
      }, function() {
        const player = playerRef.current = this;
        player.on("fullscreenchange", function() {
          videoFullScreenChange(player);
        });
      });
    } else {
      playerRef.current.autoplay(autoPlay);
      playerRef.current.src({
        src,
        type: getMimeType(src)
      });
      playerRef.current.controls(controls);
      playerRef.current.loop(loop);
      playerRef.current.muted(muted);
      poster && playerRef.current.poster(poster);
    }
  }, [src, autoPlay, controls, loop, muted, poster]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return () => {
      var _a;
      !isDev && ((_a = playerRef.current) == null ? void 0 : _a.dispose());
    };
  }, []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
    autoPlay,
    controls,
    "x5-playsinline": `${playsInline}`,
    playsInline,
    "webkit-playsinline": `${playsInline}`,
    loop,
    muted,
    className,
    ref: videoRef,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("source", {
      src,
      type: getMimeType(src)
    })
  });
};
const wrapper$6 = "_wrapper_j4n5s_18";
const video$1 = "_video_j4n5s_24";
const audioControl = "_audioControl_j4n5s_37";
const playIcon = "_playIcon_j4n5s_59";
const pauseIcon = "_pauseIcon_j4n5s_67";
const footer$1 = "_footer_j4n5s_76";
const styles$o = {
  wrapper: wrapper$6,
  video: video$1,
  audioControl,
  playIcon,
  pauseIcon,
  footer: footer$1,
  "button-hover": "_button-hover_j4n5s_1"
};
const SvgSoundtrackPlay = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  id: "Livello_1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 59 63",
  style: {
    enableBackground: "new 0 0 59 63"
  },
  xmlSpace: "preserve",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M0,63V0l59,31.5L0,63z M3,5v53l49.6-26.5L3,5z"
})));
const SvgVideoPause = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  id: "Livello_1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 20 21",
  style: {
    enableBackground: "new 0 0 20 21"
  },
  xmlSpace: "preserve",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  id: "Symbols"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  id: "Footer_x2F_Large-Desktop",
  transform: "translate(-1397.000000, -27.000000)"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  id: "Group-8",
  transform: "translate(1367.000000, 27.000000)"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  id: "Group-7"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  id: "Fill-5"
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M49.8,20.8h-7.6V0.2h7.6V20.8z M43.8,19.2h4.4V1.8h-4.4V19.2z M37.8,20.8h-7.6V0.2h7.6V20.8z M31.8,19.2h4.4V1.8h-4.4 C31.8,1.8,31.8,19.2,31.8,19.2z"
})))))));
const log$d = createLog("soundtrack");
function Soundtrack({
  config: config2,
  componentIndex
}) {
  const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [audioPlay, setAudioPlay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    currentDevice
  } = useDeviceType();
  const {
    audioSource,
    pauseIcon: pauseIcon2,
    pauseHoverIcon,
    playIcon: playIcon2,
    playHoverIcon,
    collectionName,
    title: title2,
    titleStyle
  } = config2;
  const addDynamicHeader = useDynamicHeader();
  const {
    bannerHeight
  } = useCMSConfig();
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const handleVideoClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    homepageCTAOnClick(title2 || "", componentIndex);
  }, [homepageCTAOnClick, componentIndex]);
  const {
    headerChangingOffset = 0,
    headerChanging = false
  } = config2;
  const containerStyle = getPaddingMarginStyle(config2, currentDevice);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$d(config2);
  }, [config2]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!audioRef.current)
      return;
    audioPlay ? audioRef.current.play() : audioRef.current.pause();
  }, [audioPlay]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    [playIcon2, playHoverIcon, pauseIcon2, pauseHoverIcon].forEach((src2) => {
      if (!src2)
        return;
      const img = new Image();
      img.src = src2;
    });
  }, [playIcon2, playHoverIcon, pauseIcon2, pauseHoverIcon]);
  const playIconVar = {
    ["--soundtrack-play-icon"]: `url(${playIcon2})`,
    ["--soundtrack-play-hover-icon"]: `url(${playHoverIcon || playIcon2})`
  };
  const pauseIconVar = {
    ["--soundtrack-pause-icon"]: `url(${pauseIcon2})`,
    ["--soundtrack-pause-hover-icon"]: `url(${pauseHoverIcon || pauseIcon2})`
  };
  const src = config2[currentDevice + "VideoSrc"] || config2.videoSrc;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    addDynamicHeader,
    currentDevice,
    headerChangingOffset,
    headerChanging,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      id: getID(config2),
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$o.wrapper),
      style: {
        height: `${windowHeight - bannerHeight}px`,
        ...containerStyle
      },
      onClick: handleVideoClick,
      children: [!!currentDevice ? currentDevice === "mobile" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Video, {
        src,
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$o.video)
      }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Video, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$o.video),
        src
      }) : null, /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: styles$o.footer,
        style: normalizeTextStyle(titleStyle),
        dangerouslySetInnerHTML: {
          __html: collectionName || title2
        }
      }), audioSource && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("audio", {
          ref: audioRef,
          src: audioSource,
          preload: "auto",
          onEnded: () => setAudioPlay(false),
          children: "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 audio \u6807\u7B7E\u3002"
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          onClick: () => setAudioPlay(!audioPlay),
          children: audioPlay ? pauseIcon2 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$o.audioControl, styles$o.pauseIcon),
            style: {
              height: config2.pauseIconHeight,
              width: config2.pauseIconWidth,
              ...pauseIconVar
            }
          }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgVideoPause, {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$o.audioControl),
            style: {
              height: config2.pauseIconHeight,
              width: config2.pauseIconWidth
            }
          }) : playIcon2 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$o.audioControl, styles$o.playIcon),
            style: {
              height: config2.playIconHeight,
              width: config2.playIconWidth,
              ...playIconVar
            }
          }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgSoundtrackPlay, {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$o.audioControl),
            style: {
              height: config2.playIconHeight,
              width: config2.playIconWidth
            }
          })
        })]
      })]
    })
  });
}
const story = "_story_iohh9_18";
const swiper$3 = "_swiper_iohh9_25";
const swiperSlide$2 = "_swiperSlide_iohh9_31";
const image$9 = "_image_iohh9_57";
const textContent = "_textContent_iohh9_63";
const styles$n = {
  story,
  swiper: swiper$3,
  swiperSlide: swiperSlide$2,
  image: image$9,
  textContent,
  "button-hover": "_button-hover_iohh9_1"
};
const log$c = createLog("bio-story");
const AnimationTime = 700;
const BioStory = ({
  config: config2
}) => {
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const {
    bannerHeight,
    onEvent,
    brandName,
    pageTitle
  } = useCMSConfig();
  const device = useDeviceType();
  const addDynamicHeader = useDynamicHeader();
  const autoScrollTimer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [swiperDom, setSwiperDom] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const handleClick = (_, event) => {
    if (event.target.nodeName === "A") {
      return;
    }
    const currentEl = _.clickedSlide.querySelector("div." + styles$n.textContent);
    setTimeout(() => {
      currentEl == null ? void 0 : currentEl.scroll({
        top: 0
      });
    }, AnimationTime);
    swiperDom == null ? void 0 : swiperDom.slideNext();
  };
  const setAutoScroll = () => {
    if (!config2.autoSwitchTiming)
      return;
    autoScrollTimer.current && clearTimeout(autoScrollTimer.current);
    autoScrollTimer.current = setTimeout(() => {
      if (!swiperDom || swiperDom.destroyed)
        return;
      const currentSlide2 = swiperDom.slides[swiperDom.activeIndex];
      const currentEl = currentSlide2.querySelector("div." + styles$n.textContent);
      setTimeout(() => {
        currentEl == null ? void 0 : currentEl.scroll({
          top: 0
        });
      }, AnimationTime);
      swiperDom == null ? void 0 : swiperDom.slideNext();
    }, config2.autoSwitchTiming);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a;
    if (!swiperDom)
      return;
    const currentSlideData = config2.bioStory[0];
    if ((currentSlideData == null ? void 0 : currentSlideData.bioType) === "image") {
      setAutoScroll();
      if ((_a = audioRef.current) == null ? void 0 : _a.paused) {
        audioRef.current.currentTime = 0;
        const playPromise = audioRef.current.play();
        if (playPromise !== void 0) {
          playPromise.then(() => {
            var _a2;
            (_a2 = audioRef.current) == null ? void 0 : _a2.play();
          }).catch(() => {
          });
        }
      }
    } else {
      autoScrollTimer.current && clearTimeout(autoScrollTimer.current);
    }
  }, [swiperDom]);
  const handleChange = (swiper2) => {
    const currentSlide2 = swiper2.slides[swiper2.activeIndex];
    const index = currentSlide2 == null ? void 0 : currentSlide2.getAttribute("data-swiper-slide-index");
    const currentSlideData = index !== void 0 ? config2.bioStory[Number(index)] : void 0;
    if ((currentSlideData == null ? void 0 : currentSlideData.bioType) === "image") {
      setAutoScroll();
    } else {
      autoScrollTimer.current && clearTimeout(autoScrollTimer.current);
    }
    if (!audioRef.current)
      return;
    if ((currentSlideData == null ? void 0 : currentSlideData.bioType) === "image") {
      if (audioRef.current.paused) {
        audioRef.current.currentTime = 0;
        const playPromise = audioRef.current.play();
        if (playPromise !== void 0) {
          playPromise.then(() => {
            var _a;
            (_a = audioRef.current) == null ? void 0 : _a.play();
          }).catch(() => {
          });
        }
      }
    } else {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$c(config2);
  }, [config2]);
  const imageAlt = brandName && pageTitle ? `${brandName} ${pageTitle}` : "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: styles$n.story,
    style: {
      height: `calc(${windowHeight - bannerHeight}px)`
    },
    id: getID(config2),
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$n.swiper),
      direction: `vertical`,
      spaceBetween: 0,
      speed: AnimationTime,
      allowSlidePrev: false,
      roundLengths: true,
      mousewheel: false,
      loop: true,
      onSwiper: (swiper2) => setSwiperDom(swiper2),
      allowTouchMove: false,
      onClick: handleClick,
      onSlideChange: handleChange,
      children: config2.bioStory.map((item2, index) => {
        const imageSrc = getTargetImage(item2, device);
        const child = item2.bioType === "wording" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: Object.assign({
            height: `calc(${windowHeight - bannerHeight}px)`
          }, item2.alignment ? {
            textAlign: item2.alignment
          } : null, item2.color ? {
            color: item2.color
          } : null, normalizeStyle(item2.style) || null, normalizeTextStyle(item2.wordingStyle)),
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$n.swiperSlide, styles$n.textContent),
          dangerouslySetInnerHTML: {
            __html: item2.wording || ""
          }
        }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$n.swiperSlide),
          style: {
            height: `calc(${windowHeight - bannerHeight}px)`
          },
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$n.image, styles$n.defaultImage),
            src: imageSrc,
            alt: imageAlt
          })
        });
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
            addDynamicHeader,
            headerChanging: item2.headerChanging,
            headerChangingOffset: config2.headerChangingOffset,
            currentDevice: device.currentDevice,
            children: child
          })
        }, index);
      })
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("audio", {
      ref: audioRef,
      src: config2.music,
      onEnded: () => {
        onEvent(EventType.screensaverAvailable, {
          component: config2,
          status: true
        });
      },
      onPlay: () => onEvent(EventType.screensaverAvailable, {
        component: config2,
        status: true
      }),
      onPause: () => onEvent(EventType.screensaverAvailable, {
        component: config2,
        status: false
      }),
      children: "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 audio \u6807\u7B7E\u3002"
    })]
  });
};
const styles$m = {
  "button-hover": "_button-hover_oh673_1"
};
const log$b = createLog("Iframe");
const Iframe = ({
  config: config2
}) => {
  const addDynamicHeader = useDynamicHeader();
  const device = useDeviceType();
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const {
    desktopUrl,
    mobileUrl
  } = config2;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$b(config2);
  }, [config2]);
  const paddingMarginCSS = getPaddingMarginStyle(config2, device.currentDevice);
  const width = device.currentDevice ? config2.width[device.currentDevice].width === "fullWidth" ? "100%" : config2.width[device.currentDevice].widthCustomized : "100%";
  const height = device.currentDevice ? config2.height[device.currentDevice].height === "fullHeight" ? windowHeight : config2.height[device.currentDevice].heightCustomized : windowHeight;
  const iframeSrc = device.isMobile ? mobileUrl || desktopUrl : desktopUrl;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    headerChangingOffset: config2.headerChangingOffset,
    headerChanging: config2.headerChanging,
    addDynamicHeader,
    currentDevice: device.currentDevice,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: getID(config2),
      style: {
        ...paddingMarginCSS,
        display: "flex",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$m.container),
        style: {
          height,
          width
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("iframe", {
          src: iframeSrc,
          className: styles$m.iframe,
          width: "100%",
          height: "100%",
          frameBorder: "0",
          scrolling: "no",
          allowFullScreen: true
        })
      })
    })
  });
};
const wrapper$5 = "_wrapper_1ykna_18";
const overflowVisible = "_overflowVisible_1ykna_24";
const item$3 = "_item_1ykna_28";
const oneColumnItem = "_oneColumnItem_1ykna_39";
const isActive = "_isActive_1ykna_44";
const isLeave = "_isLeave_1ykna_49";
const itemWrapper = "_itemWrapper_1ykna_54";
const imageWrapper$1 = "_imageWrapper_1ykna_61";
const fullScreenItem = "_fullScreenItem_1ykna_68";
const image$8 = "_image_1ykna_61";
const store = "_store_1ykna_82";
const linkList = "_linkList_1ykna_96";
const placeHolder = "_placeHolder_1ykna_121";
const linkInner = "_linkInner_1ykna_126";
const linkItem$1 = "_linkItem_1ykna_149";
const disabled$4 = "_disabled_1ykna_165";
const leftColumn = "_leftColumn_1ykna_170";
const rightColumn = "_rightColumn_1ykna_178";
const fullHeight = "_fullHeight_1ykna_186";
const styles$l = {
  wrapper: wrapper$5,
  overflowVisible,
  item: item$3,
  oneColumnItem,
  isActive,
  isLeave,
  itemWrapper,
  imageWrapper: imageWrapper$1,
  fullScreenItem,
  image: image$8,
  store,
  linkList,
  "in": "_in_1ykna_112",
  placeHolder,
  linkInner,
  linkItem: linkItem$1,
  disabled: disabled$4,
  leftColumn,
  rightColumn,
  fullHeight,
  "button-hover": "_button-hover_1ykna_1"
};
const log$a = createLog("new look");
const EnablePlaceHolder = false;
const throttleOption = {
  trailing: false
};
const ANIMATION_SECONDS = 0.8;
const OneColumn = ({
  config: config2,
  item: item2,
  onActiveIndexChange,
  height,
  onCTAChange,
  marginTop,
  wrapperRef,
  componentIndex,
  newLookIndex
}) => {
  const device = useDeviceType();
  const [isStoresVisible, setIsStoresVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    onEvent,
    brandName,
    pageTitle
  } = useCMSConfig();
  const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => onCTAChange(isStoresVisible.some((i) => i)), [onCTAChange, isStoresVisible]);
  const handleClick = useThrottle((images2) => {
    if (activeIndex === images2.length - 1) {
      onActiveIndexChange();
      setIsStoresVisible([]);
      setTimeout(() => {
        setActiveIndex(0);
      }, ANIMATION_SECONDS * 1e3);
    } else {
      setActiveIndex((prev2) => prev2 + 1);
    }
    onEvent(EventType.startNewLookBookAudio, {
      component: config2
    });
  }, ANIMATION_SECONDS * 1e3, throttleOption);
  const images = (item2.desktopImageUrl || []).filter(Boolean).map((img, index) => {
    return {
      largeDesktopImageUrl: (item2.largeDesktopImageUrl || [])[index],
      desktopImageUrl: img,
      tabletImageUrl: (item2.tabletImageUrl || [])[index],
      mobileImageUrl: (item2.mobileImageUrl || [])[index]
    };
  });
  const allCTA = new Array(images.length).fill(void 0).map((_, imageIndex) => {
    const CTAs = new Array(5).fill(void 0).map((i, ctaIndex) => {
      var _a, _b, _c, _d;
      return {
        url: ((_a = item2[`cta${ctaIndex + 1}Redirect`]) == null ? void 0 : _a[imageIndex]) || "",
        text: ((_b = item2[`cta${ctaIndex + 1}Wording`]) == null ? void 0 : _b[imageIndex]) || "",
        newTab: ((_c = item2[`cta${ctaIndex + 1}OpenNewWindow`]) == null ? void 0 : _c[imageIndex]) === "1" || false,
        style: ((_d = item2[`cta${ctaIndex + 1}WordingStyle`]) == null ? void 0 : _d[imageIndex]) || void 0
      };
    }).filter((i) => !!i.text);
    return CTAs;
  });
  const createVisibleConfig = (index) => {
    const arr = new Array(images.length).fill(false);
    arr[index] = true;
    return arr;
  };
  const imageAlt = brandName && pageTitle ? `${brandName} ${pageTitle}` : "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: getID(config2),
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$l.itemWrapper),
    style: {
      height
    },
    children: images.map((img, index) => {
      const isStoreVisible = isStoresVisible[index];
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$l.imageWrapper, styles$l.oneColumnItem, styles$l.fullScreenItem, index === activeIndex ? styles$l.isActive : "", index < activeIndex ? styles$l.isLeave : "", images.length > 1 && index === images.length - 1 && activeIndex === 0 && images.length > 1 ? styles$l.isLeave : ""),
        style: {
          height
        },
        onClick: () => {
          handleClick(images);
        },
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: styles$l.image,
          src: getTargetImage(img, device),
          alt: imageAlt,
          onClick: () => homepageCTAOnClick(imageAlt, newLookIndex, index)
        }), allCTA[index].length ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$l.store,
          onClick: (e) => {
            setIsStoresVisible(createVisibleConfig(index));
            e.stopPropagation();
            homepageCTAOnClick("\u8FDB\u5165\u5546\u5E97", newLookIndex, index);
          },
          children: "\u8FDB\u5165\u5546\u5E97"
        }) : null, /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$l.linkList, isStoreVisible ? styles$l.in : styles$l.out),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: styles$l.linkInner,
            ref: (ref) => {
              if (!ref)
                return;
              if (isStoreVisible) {
                ref.parentElement.style.setProperty("--link-inner-height", `${ref.getBoundingClientRect().height}px`);
              } else {
                ref.parentElement.style.setProperty("--link-inner-height", `0px`);
              }
            },
            onClick: (e) => e.stopPropagation(),
            children: allCTA[index].map((link2, index2) => {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
                style: normalizeTextStyle(link2.style),
                href: link2.url,
                className: classnames__WEBPACK_IMPORTED_MODULE_1__(link2.url ? "" : styles$l.disabled, styles$l.linkItem),
                rel: "noreferrer",
                target: link2.newTab ? "_blank" : "_self",
                onClick: (e) => {
                  if (!link2.url)
                    e.preventDefault();
                  e.stopPropagation();
                  onEvent(EventType.ctaClick, {
                    component: config2,
                    text: link2.text
                  });
                  homepageCTAOnClick(link2.text, newLookIndex, index2);
                },
                ref: (ref) => {
                  if (!ref)
                    return;
                  const rect = ref.getBoundingClientRect();
                  if (rect.height > 60 && isStoreVisible) {
                    ref.innerHTML = ref.innerHTML.replaceAll("\n", "");
                    ref.innerHTML += "\n";
                    let next2 = ref.nextSibling;
                    while (next2) {
                      next2.style.display = "none";
                      next2 = next2.nextSibling;
                    }
                  }
                },
                children: link2.text
              }, index2);
            })
          })
        }), !!wrapperRef.current && EnablePlaceHolder && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: react_dom__WEBPACK_IMPORTED_MODULE_8__.createPortal(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$l.linkList, styles$l.placeHolder, isStoreVisible ? styles$l.in : styles$l.out),
            style: {
              marginTop: height + marginTop
            },
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: styles$l.linkInner,
              ref: (ref) => {
                if (!ref)
                  return;
                if (isStoreVisible) {
                  ref.parentElement.style.setProperty("--link-inner-height", `${ref.getBoundingClientRect().height}px`);
                } else {
                  ref.parentElement.style.setProperty("--link-inner-height", `0px`);
                }
              },
              children: allCTA[activeIndex].map((link2, index2) => {
                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                  className: styles$l.linkItem,
                  href: link2.url,
                  onClick: () => homepageCTAOnClick(link2 == null ? void 0 : link2.text, newLookIndex, index2),
                  children: link2.text
                }, index2);
              })
            })
          }), wrapperRef.current)
        })]
      }, index);
    })
  });
};
const Column = ({
  config: config2,
  column,
  activeIndex,
  marginTop,
  onChangeActiveIndex,
  onCTAChange,
  isParentActive,
  wrapperRef,
  height,
  isLeft,
  onLeftCTAShow,
  isRight,
  isLeftCTAShow,
  componentIndex,
  trackSwiperIndex = 1,
  newLookIndex = 0
}) => {
  const [isStoresVisible, setIsStoresVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const device = useDeviceType();
  const {
    onEvent,
    brandName,
    pageTitle
  } = useCMSConfig();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isLeft) {
      onLeftCTAShow == null ? void 0 : onLeftCTAShow(isStoresVisible.some((i) => i));
    }
  }, [isStoresVisible, onLeftCTAShow, isLeft]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    onCTAChange(isStoresVisible.some((i) => i));
  }, [onCTAChange, isStoresVisible]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isParentActive) {
      setIsStoresVisible([]);
    }
  }, [isParentActive]);
  const createVisibleConfig = (index) => {
    const arr = new Array(column.length).fill(false);
    arr[index] = true;
    return arr;
  };
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const imageAlt = brandName && pageTitle ? `${brandName} ${pageTitle}` : "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: styles$l.column,
    children: column.map((item2, index) => {
      const CTAs = new Array(5).fill(void 0).map((i, index2) => {
        return {
          url: item2[`cta${index2 + 1}Redirect`],
          text: item2[`cta${index2 + 1}Wording`],
          newTab: item2[`cta${index2 + 1}OpenNewWindow`] === "1",
          style: item2[`cta${index2 + 1}WordingStyle`]
        };
      }).filter((i) => !!i.text);
      const isStoreVisible = isStoresVisible[index];
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$l.item, index === activeIndex ? styles$l.isActive : "", index < activeIndex ? styles$l.isLeave : "", index === column.length - 1 && activeIndex === 0 && column.length > 1 ? styles$l.isLeave : ""),
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$l.imageWrapper,
          onClick: () => {
            onChangeActiveIndex();
            onEvent(EventType.startNewLookBookAudio, {
              component: config2
            });
          },
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            className: styles$l.image,
            src: getTargetImage(item2, device),
            alt: imageAlt,
            onClick: () => homepageCTAOnClick(imageAlt, newLookIndex, trackSwiperIndex)
          }), CTAs.length ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: styles$l.store,
            onClick: (e) => {
              setIsStoresVisible(createVisibleConfig(index));
              e.stopPropagation();
              homepageCTAOnClick("\u8FDB\u5165\u5546\u5E97", newLookIndex, trackSwiperIndex);
            },
            children: "\u8FDB\u5165\u5546\u5E97"
          }) : null, /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            onClick: (e) => e.stopPropagation(),
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$l.linkList, isStoreVisible ? styles$l.in : styles$l.out),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: styles$l.linkInner,
              ref: (ref) => {
                if (!ref)
                  return;
                if (isStoreVisible) {
                  ref.parentElement.style.setProperty("--link-inner-height", `${ref.getBoundingClientRect().height}px`);
                } else {
                  ref.parentElement.style.setProperty("--link-inner-height", `0px`);
                }
              },
              children: CTAs.map((link2, index2) => {
                return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
                  style: normalizeTextStyle(link2.style),
                  href: link2.url,
                  rel: "noreferrer",
                  className: classnames__WEBPACK_IMPORTED_MODULE_1__(link2.url ? "" : styles$l.disabled, styles$l.linkItem),
                  target: link2.newTab ? "_blank" : "_self",
                  onClick: (e) => {
                    if (!link2.url)
                      e.preventDefault();
                    e.stopPropagation();
                    if (link2.url) {
                      onEvent(EventType.ctaClick, {
                        component: config2,
                        text: link2.text
                      });
                      homepageCTAOnClick(link2 == null ? void 0 : link2.text, newLookIndex, trackSwiperIndex);
                    }
                  },
                  ref: (ref) => {
                    if (!ref)
                      return;
                    const rect = ref.getBoundingClientRect();
                    if (rect.height > 60 && isStoreVisible) {
                      ref.innerHTML = ref.innerHTML.replaceAll("\n", "");
                      ref.innerHTML += "\n";
                      let next2 = ref.nextSibling;
                      while (next2) {
                        next2.style.display = "none";
                        next2 = next2.nextSibling;
                      }
                    }
                  },
                  children: link2.text
                }, index2);
              })
            })
          })]
        }), !!wrapperRef.current && EnablePlaceHolder && react_dom__WEBPACK_IMPORTED_MODULE_8__.createPortal(/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          "data-index": index,
          "data-left": isLeft,
          "data-right": isRight,
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$l.linkList, styles$l.placeHolder, isStoreVisible ? styles$l.in : styles$l.out),
          style: Object.assign({
            marginTop: height + marginTop
          }, isRight && !isLeftCTAShow ? {
            position: "relative",
            left: wrapperRef.current.getBoundingClientRect().width / 2 || 0
          } : {}, isStoreVisible ? {
            width: "50%"
          } : {}),
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: styles$l.linkInner,
            ref: (ref) => {
              if (!ref)
                return;
              if (isStoreVisible) {
                ref.parentElement.style.setProperty("--link-inner-height", `${ref.getBoundingClientRect().height}px`);
              } else {
                ref.parentElement.style.setProperty("--link-inner-height", `0px`);
              }
            },
            children: CTAs.map((link2, index2) => {
              return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                className: styles$l.linkItem,
                href: link2.url,
                onClick: () => homepageCTAOnClick(link2 == null ? void 0 : link2.text, newLookIndex, trackSwiperIndex),
                children: link2.text
              }, index2);
            })
          })
        }), wrapperRef.current)]
      }, index);
    })
  });
};
const TwoColumn = ({
  config: config2,
  item: item2,
  isActive: isActive2,
  onActiveIndexChange,
  height,
  marginTop,
  onCTAChange,
  wrapperRef,
  componentIndex,
  newLookIndex
}) => {
  const leftColumn2 = (item2.desktopImageUrlLeft || []).filter(Boolean).map((image2, index) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
    return {
      largeDesktopImageUrl: (item2.largeDesktopImageUrlLeft || [])[index],
      desktopImageUrl: image2,
      tabletImageUrl: (item2.tabletImageUrlLeft || [])[index],
      mobileImageUrl: (item2.mobileImageUrlLeft || [])[index],
      cta1Wording: ((_a = item2.cta1WordingLeft) == null ? void 0 : _a[index]) || "",
      cta1Redirect: ((_b = item2.cta1RedirectLeft) == null ? void 0 : _b[index]) || "",
      cta2Wording: ((_c = item2.cta2WordingLeft) == null ? void 0 : _c[index]) || "",
      cta2Redirect: ((_d = item2.cta2RedirectLeft) == null ? void 0 : _d[index]) || "",
      cta3Wording: ((_e = item2.cta3WordingLeft) == null ? void 0 : _e[index]) || "",
      cta3Redirect: ((_f = item2.cta3RedirectLeft) == null ? void 0 : _f[index]) || "",
      cta4Wording: ((_g = item2.cta4WordingLeft) == null ? void 0 : _g[index]) || "",
      cta4Redirect: ((_h = item2.cta4RedirectLeft) == null ? void 0 : _h[index]) || "",
      cta5Wording: ((_i = item2.cta5WordingLeft) == null ? void 0 : _i[index]) || "",
      cta5Redirect: ((_j = item2.cta5RedirectLeft) == null ? void 0 : _j[index]) || "",
      cta1OpenNewWindow: ((_k = item2.cta1OpenNewWindowLeft) == null ? void 0 : _k[index]) || "0",
      cta2OpenNewWindow: ((_l = item2.cta2OpenNewWindowLeft) == null ? void 0 : _l[index]) || "0",
      cta3OpenNewWindow: ((_m = item2.cta3OpenNewWindowLeft) == null ? void 0 : _m[index]) || "0",
      cta4OpenNewWindow: ((_n = item2.cta4OpenNewWindowLeft) == null ? void 0 : _n[index]) || "0",
      cta5OpenNewWindow: ((_o = item2.cta5OpenNewWindowLeft) == null ? void 0 : _o[index]) || "0",
      cta1WordingStyle: ((_p = item2.cta1WordingLeftStyle) == null ? void 0 : _p[index]) || void 0,
      cta2WordingStyle: ((_q = item2.cta2WordingLeftStyle) == null ? void 0 : _q[index]) || void 0,
      cta3WordingStyle: ((_r = item2.cta3WordingLeftStyle) == null ? void 0 : _r[index]) || void 0,
      cta4WordingStyle: ((_s = item2.cta4WordingLeftStyle) == null ? void 0 : _s[index]) || void 0,
      cta5WordingStyle: ((_t = item2.cta5WordingLeftStyle) == null ? void 0 : _t[index]) || void 0
    };
  });
  const rightColumn2 = (item2.desktopImageUrlRight || []).filter(Boolean).map((image2, index) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
    return {
      largeDesktopImageUrl: (item2.largeDesktopImageUrlRight || [])[index],
      desktopImageUrl: image2,
      tabletImageUrl: (item2.tabletImageUrlRight || [])[index],
      mobileImageUrl: (item2.mobileImageUrlRight || [])[index],
      cta1Wording: ((_a = item2.cta1WordingRight) == null ? void 0 : _a[index]) || "",
      cta1Redirect: ((_b = item2.cta1RedirectRight) == null ? void 0 : _b[index]) || "",
      cta2Wording: ((_c = item2.cta2WordingRight) == null ? void 0 : _c[index]) || "",
      cta2Redirect: ((_d = item2.cta2RedirectRight) == null ? void 0 : _d[index]) || "",
      cta3Wording: ((_e = item2.cta3WordingRight) == null ? void 0 : _e[index]) || "",
      cta3Redirect: ((_f = item2.cta3RedirectRight) == null ? void 0 : _f[index]) || "",
      cta4Wording: ((_g = item2.cta4WordingRight) == null ? void 0 : _g[index]) || "",
      cta4Redirect: ((_h = item2.cta4RedirectRight) == null ? void 0 : _h[index]) || "",
      cta5Wording: ((_i = item2.cta5WordingRight) == null ? void 0 : _i[index]) || "",
      cta5Redirect: ((_j = item2.cta5RedirectRight) == null ? void 0 : _j[index]) || "",
      cta1OpenNewWindow: ((_k = item2.cta1OpenNewWindowRight) == null ? void 0 : _k[index]) || "0",
      cta2OpenNewWindow: ((_l = item2.cta2OpenNewWindowRight) == null ? void 0 : _l[index]) || "0",
      cta3OpenNewWindow: ((_m = item2.cta3OpenNewWindowRight) == null ? void 0 : _m[index]) || "0",
      cta4OpenNewWindow: ((_n = item2.cta4OpenNewWindowRight) == null ? void 0 : _n[index]) || "0",
      cta5OpenNewWindow: ((_o = item2.cta5OpenNewWindowRight) == null ? void 0 : _o[index]) || "0",
      cta1WordingStyle: ((_p = item2.cta1WordingRightStyle) == null ? void 0 : _p[index]) || void 0,
      cta2WordingStyle: ((_q = item2.cta2WordingRightStyle) == null ? void 0 : _q[index]) || void 0,
      cta3WordingStyle: ((_r = item2.cta3WordingRightStyle) == null ? void 0 : _r[index]) || void 0,
      cta4WordingStyle: ((_s = item2.cta4WordingRightStyle) == null ? void 0 : _s[index]) || void 0,
      cta5WordingStyle: ((_t = item2.cta5WordingRightStyle) == null ? void 0 : _t[index]) || void 0
    };
  });
  const [leftActiveIndex, setLeftActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [rightActiveIndex, setRightActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const device = useDeviceType();
  const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [isLeftCTAShow, setIsLeftCTAShow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const changeRightActiveIndex = useThrottle(() => {
    if (rightActiveIndex < rightColumn2.length - 1) {
      setRightActiveIndex((activeIndex) => activeIndex + 1);
    }
    if (rightActiveIndex === rightColumn2.length - 1) {
      if (device.isDesktop) {
        onActiveIndexChange();
      } else {
        if (leftActiveIndex === leftColumn2.length - 1) {
          onActiveIndexChange();
        } else {
          changeLefActiveIndex();
        }
      }
    }
  }, ANIMATION_SECONDS * 1e3, throttleOption);
  const changeLefActiveIndex = useThrottle(() => {
    if (leftActiveIndex < leftColumn2.length - 1) {
      setLeftActiveIndex((activeIndex) => activeIndex + 1);
    }
    if (leftActiveIndex === leftColumn2.length - 1) {
      if (device.isDesktop) {
        onActiveIndexChange();
      } else {
        if (rightActiveIndex === rightColumn2.length - 1 && (device.isMobile || device.isTablet)) {
          onActiveIndexChange();
        } else {
          changeRightActiveIndex();
        }
      }
    }
  }, ANIMATION_SECONDS * 1e3, throttleOption);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isActive2) {
      return;
    }
    onCTAChange(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setLeftActiveIndex(0);
      setRightActiveIndex(0);
    }, ANIMATION_SECONDS * 1e3);
  }, [isActive2, onCTAChange]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$l.itemWrapper),
    style: {
      height
    },
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: styles$l.leftColumn,
      style: {
        height
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Column, {
        config: config2,
        isLeft: true,
        onLeftCTAShow: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((show2) => setIsLeftCTAShow(show2), []),
        height,
        isParentActive: isActive2,
        onCTAChange,
        column: leftColumn2,
        activeIndex: leftActiveIndex,
        onChangeActiveIndex: changeLefActiveIndex,
        wrapperRef,
        marginTop,
        componentIndex,
        trackSwiperIndex: 0,
        newLookIndex
      })
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: styles$l.rightColumn,
      style: {
        height
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Column, {
        config: config2,
        isRight: true,
        isLeftCTAShow,
        height,
        isParentActive: isActive2,
        onCTAChange,
        column: rightColumn2,
        activeIndex: rightActiveIndex,
        onChangeActiveIndex: changeRightActiveIndex,
        wrapperRef,
        marginTop,
        componentIndex,
        trackSwiperIndex: 1,
        newLookIndex
      })
    })]
  });
};
const SlideChangeAttr$1 = "data-active-time";
const SlideActiveAttr = "data-active";
const NewLook = ({
  config: config2,
  componentIndex
}) => {
  const [activeIndex, setActiveIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const {
    bannerHeight
  } = useCMSConfig();
  const [isShowCTA, setIsShowCTA] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isMounted2 = useIsMounted();
  const addDynamicHeader = useDynamicHeader({
    scrollType: "horizontal",
    horizontalCheck: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
      target,
      top,
      bottom,
      verticalIntersectionDetectEnd
    }) => {
      var _a;
      const targetSlide = (_a = target.parentElement) == null ? void 0 : _a.parentElement;
      if ((targetSlide == null ? void 0 : targetSlide.getAttribute(SlideActiveAttr)) !== "true")
        return false;
      if (new Date().getTime() - Number(targetSlide.getAttribute(SlideChangeAttr$1) || 0) < ANIMATION_SECONDS * 1e3) {
        if (!(top < verticalIntersectionDetectEnd && bottom > verticalIntersectionDetectEnd)) {
          return false;
        }
      }
      return true;
    }, [])
  });
  const addDynamicHeaderForMargin = useDynamicHeader();
  const device = useDeviceType();
  const changeActiveIndex = useThrottle(() => {
    if (activeIndex < config2.newLook.length - 1) {
      setActiveIndex((_) => _ + 1);
    }
    if (activeIndex === config2.newLook.length - 1) {
      setActiveIndex(0);
    }
  }, ANIMATION_SECONDS * 1e3, throttleOption);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$a(config2);
  }, [config2]);
  const {
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    ...padding
  } = getPaddingMarginStyle(config2, device.currentDevice);
  const wrapperHeight = windowHeight - bannerHeight + parseFloat(String(marginTop) || "0");
  const imageHeight = windowHeight - bannerHeight;
  const handleCTAChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((val) => setIsShowCTA(val), []);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$l.wrapper, styles$l.overflowVisible),
    style: {
      minHeight: isNaN(wrapperHeight) ? 0 : wrapperHeight,
      marginBottom,
      marginLeft,
      marginRight
    },
    ref: wrapperRef,
    children: [config2.newLook.map((item2, index) => {
      return /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$l.item, index === activeIndex ? styles$l.isActive : "", index < activeIndex ? styles$l.isLeave : "", config2.newLook.length > 1 && index === config2.newLook.length - 1 && activeIndex === 0 ? styles$l.isLeave : ""),
        [SlideActiveAttr]: index === activeIndex ? "true" : "",
        [SlideChangeAttr$1]: index === activeIndex && isMounted2 ? new Date().getTime() : 0,
        key: index
      }, /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$l.fullHeight, styles$l.overflowVisible),
        addDynamicHeader,
        headerChanging: item2.headerChanging,
        headerChangingOffset: item2.headerChangingOffset,
        currentDevice: device.currentDevice,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: {
            paddingTop: marginTop
          },
          children: item2.newLookType === "fullScreen" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(OneColumn, {
            config: config2,
            height: imageHeight,
            marginTop: parseFloat(String(marginTop) || "0"),
            item: item2,
            onActiveIndexChange: changeActiveIndex,
            onCTAChange: handleCTAChange,
            wrapperRef,
            componentIndex,
            newLookIndex: index
          }) : item2.newLookType === "independent" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TwoColumn, {
            config: config2,
            marginTop: parseFloat(String(marginTop) || "0"),
            height: imageHeight,
            item: item2,
            onCTAChange: handleCTAChange,
            isActive: activeIndex === index,
            onActiveIndexChange: changeActiveIndex,
            wrapperRef,
            componentIndex,
            newLookIndex: index
          }) : null
        })
      }));
    }), !!parseFloat(String(marginBottom) || "0") && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        position: "absolute",
        bottom: "-" + marginBottom,
        height: marginBottom,
        width: "100%",
        pointerEvents: "none"
      },
      ref: addDynamicHeaderForMargin({
        headerChanging: config2.newLook[activeIndex].headerChanging
      })
    })]
  });
};
var ProductStatus = /* @__PURE__ */ ((ProductStatus2) => {
  ProductStatus2["UnSellable"] = "UnSellable";
  ProductStatus2["UnSellableWithOtherChannelExclusive"] = "UnSellableWithOtherChannelExclusive";
  ProductStatus2["Regular"] = "Regular";
  ProductStatus2["Preorder"] = "Preorder";
  ProductStatus2["ShipFromStore"] = "ShipFromStore";
  ProductStatus2["ComingSoon"] = "ComingSoon";
  ProductStatus2["OutOfStock"] = "OutOfStock";
  ProductStatus2["BackInStock"] = "BackInStock";
  return ProductStatus2;
})(ProductStatus || {});
const productList = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProductStatus
}, Symbol.toStringTag, { value: "Module" }));
const list$1 = "_list_bhg46_18";
const item$2 = "_item_bhg46_24";
const ctaList$1 = "_ctaList_bhg46_34";
const disabled$3 = "_disabled_bhg46_39";
const start$1 = "_start_bhg46_47";
const end$1 = "_end_bhg46_51";
const anchor = "_anchor_bhg46_54";
const itemImageLink = "_itemImageLink_bhg46_60";
const image$7 = "_image_bhg46_65";
const content$2 = "_content_bhg46_72";
const thumbnailBar$2 = "_thumbnailBar_bhg46_102";
const thumbnailItem$2 = "_thumbnailItem_bhg46_113";
const thumbnailImage$2 = "_thumbnailImage_bhg46_123";
const thumbnailContent$1 = "_thumbnailContent_bhg46_137";
const linkItem = "_linkItem_bhg46_151";
const bottomBtn$1 = "_bottomBtn_bhg46_182";
const load = "_load_bhg46_194";
const loading$1 = "_loading_bhg46_213";
const styles$k = {
  list: list$1,
  item: item$2,
  ctaList: ctaList$1,
  disabled: disabled$3,
  start: start$1,
  end: end$1,
  anchor,
  itemImageLink,
  image: image$7,
  content: content$2,
  thumbnailBar: thumbnailBar$2,
  thumbnailItem: thumbnailItem$2,
  thumbnailImage: thumbnailImage$2,
  thumbnailContent: thumbnailContent$1,
  linkItem,
  bottomBtn: bottomBtn$1,
  load,
  loading: loading$1,
  "button-hover": "_button-hover_bhg46_1"
};
const log$9 = createLog("ArchiveLook");
const ArchiveLook = ({
  config: config2,
  componentIndex
}) => {
  const addDynamicHeader = useDynamicHeader();
  const {
    loadMore: loadMore2,
    bannerHeight,
    onEvent,
    brandName,
    pageTitle
  } = useCMSConfig();
  const [canLoadMore, setCanLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    data: archiveLook2,
    nextPage,
    isLoading
  } = usePagination({
    loadMore: loadMore2,
    config: config2,
    currentPage: config2.currentPage,
    totalPages: config2.totalPages,
    getData: (config22) => config22.archiveLook
  });
  const device = useDeviceType();
  const listRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [isLoopSwiper, setIsLoopSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const swiperIns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const handleSlideClick = (item2, index, buttonText2) => () => {
    homepageCTAOnClick(buttonText2 || "", index);
    location.hash = `list-${config2.identifier}-${index}`;
    setTimeout(() => {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }, 100);
  };
  const getImage = (archiveItem) => {
    var _a;
    if (archiveItem.archiveType === "image") {
      return device.currentDevice ? archiveItem[device.currentDevice].imageUrl || archiveItem.desktop.imageUrl : archiveItem.desktop.imageUrl;
    } else {
      const product2 = (_a = archiveItem.products) == null ? void 0 : _a[0];
      if (device.isMobile) {
        return product2 == null ? void 0 : product2.mobileImage;
      }
      return product2 == null ? void 0 : product2.defaultImage;
    }
  };
  const getProductURL = (item2) => {
    var _a, _b;
    return `/products${(_b = (_a = item2.products) == null ? void 0 : _a[0]) == null ? void 0 : _b.url}`;
  };
  const canShop = (item2) => {
    if (!item2.products)
      return false;
    const smc = item2.products[0];
    return [ProductStatus.Regular, ProductStatus.Preorder, ProductStatus.ShipFromStore].includes(smc == null ? void 0 : smc.status);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$9(config2);
  }, [config2]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handler = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const list2 = Array.from(listRef.current.children);
          if (list2.indexOf(entry.target) === list2.length - 1 && entry.intersectionRatio >= 0.5) {
            canLoadMore && nextPage();
          }
        }
      });
    };
    const interSectionObserver = new IntersectionObserver(handler, {
      threshold: [0, 0.5, 1]
    });
    if (listRef.current) {
      Array.from(listRef.current.children).forEach((li) => {
        interSectionObserver.observe(li);
      });
    }
    return () => interSectionObserver.disconnect();
  }, [archiveLook2, nextPage, canLoadMore]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    return;
  }, [archiveLook2]);
  const handleSwiperChange = (swiper2) => {
    const slidesWidth = swiper2["slidesSizesGrid"].reduce((prev2, cur) => cur + prev2, 0);
    if (swiper2.width < slidesWidth) {
      setIsLoopSwiper(true);
    }
  };
  const getImageConfig = (item2) => item2[device.currentDevice || "desktop"];
  const imageAlt = brandName && pageTitle ? `${brandName} ${pageTitle}` : "";
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    addDynamicHeader,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: getPaddingMarginStyle(config2, device.currentDevice),
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$k.achieveLook),
      id: getID(config2),
      children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
        className: styles$k.thumbnailBar,
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: isLoopSwiper,
        onAfterInit: handleSwiperChange,
        onUpdate: handleSwiperChange,
        onSwiper: (ins) => swiperIns.current = ins,
        children: archiveLook2.map((item2, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
          className: styles$k.thumbnailItem,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            alt: imageAlt,
            src: getImage(item2),
            className: styles$k.thumbnailImage,
            onClick: handleSlideClick(item2, index, imageAlt || "")
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: styles$k.thumbnailContent,
            style: normalizeTextStyle(item2.contentStyle),
            dangerouslySetInnerHTML: {
              __html: item2.content
            }
          })]
        }, index))
      }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$k.list),
        ref: listRef,
        style: {
          "--banner-height": `${bannerHeight}px`
        },
        children: archiveLook2.map((item2, index) => {
          const CTAs = item2.cta.filter((i) => !!i.wording);
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$k.item, ""),
            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: styles$k.anchor,
              id: `list-${config2.identifier}-${index}`
            }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
              ratio: "720 / 1080",
              children: item2.archiveType === "image" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
                clickBehavior: getImageConfig(item2).clickBehavior,
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  alt: imageAlt,
                  src: getImage(item2),
                  className: styles$k.image,
                  onClick: () => homepageCTAOnClick(imageAlt || "")
                })
              }) : canShop(item2) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
                href: getProductURL(item2),
                className: styles$k.itemImageLink,
                onClick: () => homepageCTAOnClick(imageAlt || ""),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  alt: imageAlt,
                  src: getImage(item2),
                  className: styles$k.image
                })
              }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                alt: imageAlt,
                src: getImage(item2),
                className: styles$k.image
              })
            }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: styles$k.content,
              children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                style: normalizeTextStyle(item2.contentStyle),
                dangerouslySetInnerHTML: {
                  __html: item2.content
                }
              }), !!CTAs.length && (item2.archiveType === "image" || item2.archiveType === "product" && canShop(item2)) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: styles$k.ctaList,
                children: CTAs.map((cta2, index2) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
                  href: cta2.redirect,
                  className: classnames__WEBPACK_IMPORTED_MODULE_1__(cta2.redirect ? "" : styles$k.disabled, styles$k.linkItem),
                  style: normalizeTextStyle(cta2.style),
                  target: cta2.openNewWindow ? "_blank" : "_self",
                  rel: "noreferrer",
                  onClick: (e) => {
                    if (!cta2.redirect) {
                      e.preventDefault();
                      return;
                    }
                    onEvent(EventType.ctaClick, {
                      component: config2,
                      text: cta2.wording
                    });
                    homepageCTAOnClick(cta2.wording);
                  },
                  children: cta2.wording
                }, index2))
              })]
            })]
          }, index);
        })
      }), !canLoadMore && config2.currentPage < config2.totalPages && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: styles$k.bottomBtn,
        onClick: () => {
          setCanLoadMore(true);
          nextPage();
          homepageCTAOnClick((config2 == null ? void 0 : config2.loadMoreCta) || "");
        },
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$k.load,
          children: config2.loadMoreCta
        })
      }), isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: styles$k.bottomBtn,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$k.load, styles$k.loading),
          children: "\u52A0\u8F7D\u4E2D..."
        })
      })]
    })
  });
};
const paragraph$1 = "_paragraph_sr49h_18";
const paragraphCol$1 = "_paragraphCol_sr49h_29";
const styles$j = {
  paragraph: paragraph$1,
  paragraphCol: paragraphCol$1,
  "button-hover": "_button-hover_sr49h_1"
};
const log$8 = createLog("Paragraph");
const Paragraph = ({
  config: config2
}) => {
  const {
    currentDevice
  } = useDeviceType();
  const paddingMargin2 = getPaddingMarginStyle(config2, currentDevice);
  const addDynamicHeader = useDynamicHeader();
  const isMounted2 = useIsMounted();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$8("config:", config2);
  }, [config2]);
  const {
    headerChangingOffset = 0,
    headerChanging = false
  } = config2;
  const getSpaceBetween = (item2) => {
    if (!currentDevice)
      return;
    return item2[`${currentDevice}SpaceBetween`] || item2.desktopSpaceBetween;
  };
  const getAlignment = (item2) => {
    if (!currentDevice)
      return;
    return item2[`${currentDevice}Alignment`] || item2.desktopAlignment;
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    addDynamicHeader,
    currentDevice,
    headerChangingOffset,
    headerChanging,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: getID(config2),
      style: {
        ...paddingMargin2
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$j.paragraph),
        style: {
          backgroundColor: config2.backgroundColor
        },
        children: config2.paragraph.map((paragraphItem, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$j.paragraphCol,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: styles$j.paragraphItem,
            style: isMounted2 ? {
              color: paragraphItem.color,
              textAlign: getAlignment(paragraphItem),
              marginBottom: getSpaceBetween(paragraphItem),
              ...normalizeStyle(paragraphItem.style),
              ...normalizeTextStyle(paragraphItem.wordingStyle)
            } : void 0,
            dangerouslySetInnerHTML: {
              __html: paragraphItem.wording
            }
          }, index)
        }, index))
      })
    })
  });
};
const log$7 = createLog("NewsletterSubscription");
const NewsletterSubscription = ({
  config: config2
}) => {
  const device = useDeviceType();
  const {
    newsletterRender
  } = useCMSConfig();
  const addDynamicHeader = useDynamicHeader();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$7(config2);
  }, [config2]);
  const css = getPaddingMarginStyle(config2, device.currentDevice);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    addDynamicHeader,
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: getID(config2),
      style: css,
      children: newsletterRender == null ? void 0 : newsletterRender(config2)
    })
  });
};
const visualBanner = "_visualBanner_ezceo_18";
const image$6 = "_image_ezceo_23";
const title$4 = "_title_ezceo_27";
const buttonGroup = "_buttonGroup_ezceo_50";
const btn = "_btn_ezceo_65";
const styles$i = {
  visualBanner,
  image: image$6,
  title: title$4,
  buttonGroup,
  btn,
  "button-hover": "_button-hover_ezceo_1"
};
const log$6 = createLog("visualBanner");
const VisualBanner = ({
  config: config2,
  componentIndex
}) => {
  var _a;
  const addDynamicHeader = useDynamicHeader();
  const device = useDeviceType();
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const {
    bannerHeight,
    onEvent
  } = useCMSConfig();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$6(config2);
  }, [config2]);
  const src = config2.image[device.currentDevice || "desktop"] || config2.image.desktop;
  const paddingMargin2 = getPaddingMarginStyle(config2, device.currentDevice);
  const isFullHeight = config2.displayMode === "fullWidthFullHeight";
  const imageCSS = isFullHeight ? {
    width: "100%",
    height: `calc(${windowHeight - bannerHeight}px)`
  } : {
    width: "100%",
    height: "auto"
  };
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const handleCmsLinkClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((clickBehavior) => {
    homepageCTAOnClick("");
  }, [homepageCTAOnClick]);
  const isTwoCTA = config2.cta1.wording && config2.cta2.wording;
  const ratio = (_a = config2.ratioOfImage === "customized" ? config2.ratioOfImageCustomized[device.currentDevice || "desktop"] || config2.ratioOfImageCustomized.desktop : config2.ratioOfImage) == null ? void 0 : _a.replace(":", "/");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    addDynamicHeader,
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      id: getID(config2),
      className: styles$i.visualBanner,
      style: paddingMargin2,
      children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
        clickBehavior: config2.bannerClick,
        onClickLink: handleCmsLinkClick,
        children: isFullHeight ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          src,
          style: imageCSS,
          className: styles$i.image
        }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
          ratio,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src,
            className: styles$i.image
          })
        })
      }), config2.title.wording && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: styles$i.title,
        style: {
          ...normalizeStyle(config2.title.style),
          ...config2.title.color ? {
            color: config2.title.color
          } : null,
          ...normalizeTextStyle(config2.title.textStyle)
        },
        dangerouslySetInnerHTML: {
          __html: config2.title.wording.substring(0, 35)
        }
      }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: styles$i.buttonGroup,
        children: [!!config2.cta1.wording && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BALCTA, {
          className: styles$i.btn,
          config: config2,
          onEvent,
          type: "light",
          style: {
            ...config2.cta1.color ? {
              color: config2.cta1.color
            } : {},
            ...normalizeTextStyle(config2.cta1.style)
          },
          text: config2.cta1.wording.substring(0, isTwoCTA ? 10 : 20),
          clickBehavior: config2.cta1.clickBehavior,
          componentIndex
        }), !!config2.cta2.wording && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BALCTA, {
          className: styles$i.btn,
          config: config2,
          onEvent,
          type: "light",
          style: {
            ...config2.cta2.color ? {
              color: config2.cta2.color
            } : {},
            ...normalizeTextStyle(config2.cta2.style)
          },
          text: config2.cta2.wording.substring(0, isTwoCTA ? 10 : 20),
          clickBehavior: config2.cta2.clickBehavior,
          componentIndex
        })]
      })]
    })
  });
};
const textBanner$1 = "_textBanner_1ee29_18";
const container$2 = "_container_1ee29_23";
const content$1 = "_content_1ee29_35";
const title$3 = "_title_1ee29_45";
const text$1 = "_text_1ee29_18";
const cta$3 = "_cta_1ee29_74";
const containerLink = "_containerLink_1ee29_87";
const contentLink = "_contentLink_1ee29_93";
const styles$h = {
  textBanner: textBanner$1,
  container: container$2,
  content: content$1,
  title: title$3,
  text: text$1,
  cta: cta$3,
  containerLink,
  contentLink,
  "button-hover": "_button-hover_1ee29_1"
};
const log$5 = createLog("textBanner");
const TextBanner = ({
  config: config2,
  componentIndex
}) => {
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const {
    onEvent
  } = useCMSConfig();
  const device = useDeviceType();
  const {
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    ...paddingCSS
  } = getPaddingMarginStyle(config2, device.currentDevice);
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const addDynamicHeader = useDynamicHeader();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$5(config2);
  }, [config2]);
  const isFull = config2.template === "fullScreenWidthHeight";
  const content2 = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: styles$h.content,
    children: [!!config2.descriptionText.wording && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: styles$h.title,
      style: {
        ...normalizeStyle(config2.title.style),
        ...config2.title.color ? {
          color: config2.title.color
        } : null,
        ...normalizeTextStyle(config2.title.textStyle)
      },
      dangerouslySetInnerHTML: {
        __html: config2.title.wording
      },
      onClick: () => {
        var _a;
        return homepageCTAOnClick((_a = config2 == null ? void 0 : config2.title) == null ? void 0 : _a.wording);
      }
    }), !!config2.descriptionText.wording && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: styles$h.text,
      style: {
        ...normalizeStyle(config2.descriptionText.style),
        ...config2.descriptionText.color ? {
          color: config2.descriptionText.color
        } : null,
        ...normalizeTextStyle(config2.descriptionText.textStyle)
      },
      dangerouslySetInnerHTML: {
        __html: config2.descriptionText.wording
      },
      onClick: () => {
        var _a;
        return homepageCTAOnClick((_a = config2 == null ? void 0 : config2.descriptionText) == null ? void 0 : _a.wording);
      }
    }), !!config2.cta.wording && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BALCTA, {
      style: {
        ...config2.cta.color ? {
          color: config2.cta.color
        } : null,
        ...normalizeTextStyle(config2.cta.style)
      },
      onEvent,
      className: styles$h.cta,
      clickBehavior: config2.cta.clickBehavior,
      config: config2,
      text: config2.cta.wording,
      type: "link",
      componentIndex
    })]
  });
  const isDisabled2 = checkDisabled(config2.componentClickBehavior);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    addDynamicHeader,
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: getID(config2),
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$h.textBanner),
      style: {
        marginTop,
        marginBottom,
        marginLeft,
        marginRight
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
        enable: !isDisabled2,
        className: styles$h.containerLink,
        clickBehavior: config2.componentClickBehavior,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$h.container),
          style: {
            ...paddingCSS,
            ...config2.background === "color" ? {
              backgroundColor: config2.backgroundInput
            } : {
              backgroundImage: `url(${config2.backgroundInput})`
            },
            height: isFull ? windowHeight : config2.customizedHeight[device.currentDevice || "desktop"] || config2.customizedHeight.desktop,
            width: isFull ? "100%" : config2.customizedWidth[device.currentDevice || "desktop"] || config2.customizedWidth.desktop
          },
          children: checkDisabled(config2.componentClickBehavior) ? content2 : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
            className: styles$h.contentLink,
            clickBehavior: config2.componentClickBehavior,
            children: content2
          })
        })
      })
    })
  });
};
const mediaList$1 = "_mediaList_1iewc_18";
const aspectWrapper = "_aspectWrapper_1iewc_23";
const fixVideoContainer = "_fixVideoContainer_1iewc_28";
const hoverController = "_hoverController_1iewc_32";
const videoFix = "_videoFix_1iewc_32";
const hasHoverLayer = "_hasHoverLayer_1iewc_39";
const image$5 = "_image_1iewc_39";
const videoContent = "_videoContent_1iewc_40";
const hoverLayer = "_hoverLayer_1iewc_43";
const hoverImg = "_hoverImg_1iewc_46";
const hoverText = "_hoverText_1iewc_70";
const show = "_show_1iewc_82";
const imageLink = "_imageLink_1iewc_94";
const canClick = "_canClick_1iewc_108";
const videoWrapper = "_videoWrapper_1iewc_112";
const video = "_video_1iewc_32";
const interActive = "_interActive_1iewc_120";
const videoLink = "_videoLink_1iewc_126";
const styles$g = {
  mediaList: mediaList$1,
  aspectWrapper,
  fixVideoContainer,
  hoverController,
  videoFix,
  hasHoverLayer,
  image: image$5,
  videoContent,
  hoverLayer,
  hoverImg,
  hoverText,
  show,
  imageLink,
  canClick,
  videoWrapper,
  video,
  interActive,
  videoLink,
  "button-hover": "_button-hover_1iewc_1"
};
const CommonVideo = (props2) => {
  const {
    className,
    src,
    poster = "",
    autoplay = true,
    muted = true,
    loop = true,
    controls = false,
    canInterActive = true,
    clickBehavior
  } = props2;
  const [isPlaying, setIsPlaying] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const playerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(props2 == null ? void 0 : props2.componentIndex);
  const handleCmsLinkClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    homepageCTAOnClick("", props2 == null ? void 0 : props2.trackSwiperIndex);
  }, [homepageCTAOnClick, props2 == null ? void 0 : props2.trackSwiperIndex]);
  const handleVideoLoad = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function() {
    const player = playerRef.current = this;
    player.on("play", () => {
      var _a;
      setIsPlaying(true);
      (_a = props2.onPlay) == null ? void 0 : _a.call(props2);
    });
    player.on("pause", () => {
      var _a;
      setIsPlaying(false);
      (_a = props2.onPause) == null ? void 0 : _a.call(props2);
    });
    player.on("touchend", (event) => {
      if (event.target.classList.contains("vjs-poster")) {
        player.play();
        return;
      }
      if (event.target.nodeName === "VIDEO") {
        player.paused() ? player.play() : canInterActive && player.pause();
      }
    });
    player.on("click", (event) => {
      if (event.target.classList.contains("vjs-poster")) {
        player.play();
        return;
      }
      if (event.target.nodeName === "VIDEO") {
        player.paused() ? player.play() : canInterActive && player.pause();
      }
    });
    player.on("fullscreenchange", function() {
      videoFullScreenChange(player);
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!videoRef.current)
      return;
    const player = playerRef.current;
    if (!playerRef.current) {
      playerRef.current = (0,video_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(videoRef.current, {
        preload: "auto",
        controlBar: {
          pictureInPictureToggle: false,
          fullscreenToggle: true,
          volumePanel: {
            inline: false
          }
        },
        poster,
        muted,
        loop,
        autoplay,
        fill: true,
        controls,
        sources: [{
          src,
          type: getMimeType(src)
        }]
      }, handleVideoLoad);
    }
    return () => {
      !isDev && (player == null ? void 0 : player.dispose());
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!playerRef.current)
      return;
    playerRef.current.poster(poster);
    playerRef.current.muted(muted);
    playerRef.current.loop(loop);
    playerRef.current.controls(controls);
    playerRef.current.src({
      src,
      type: getMimeType(src)
    });
  }, [controls, loop, muted, poster, src]);
  const canClickURL = clickBehavior && clickBehavior.type !== "unClickable" && !!clickBehavior.url;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$g.videoWrapper, className),
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("video", {
      ref: videoRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$g.video, "video-js", "vjs-default-skin", {
        [styles$g.interActive]: canInterActive
      }),
      disablePictureInPicture: true,
      "x5-playsinline": "true",
      "x5-video-player-type": "h5",
      "webkit-playsinline": "true",
      playsInline: true,
      onClick: () => homepageCTAOnClick("")
    }), isPlaying && canClickURL && clickBehavior && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
      className: styles$g.videoLink,
      clickBehavior,
      onClickLink: handleCmsLinkClick
    })]
  });
};
function useEventListener(eventName, handler, element, options) {
  const savedHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(handler);
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a;
    const targetElement = (_a = element == null ? void 0 : element.current) != null ? _a : window;
    if (!(targetElement && targetElement.addEventListener))
      return;
    const listener = (event) => savedHandler.current(event);
    targetElement.addEventListener(eventName, listener, options);
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}
function useOnClickOutside(ref, handler, mouseEvent = "mousedown") {
  useEventListener(mouseEvent, (event) => {
    const el = ref == null ? void 0 : ref.current;
    if (!el || el.contains(event.target)) {
      return;
    }
    handler(event);
  });
}
const log$4 = createLog("media-list");
const MediaItem = ({
  media,
  imageAlt,
  device,
  onPause,
  onPlay,
  componentIndex,
  index
}) => {
  const [isShowHover, setIsShowHover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    canHover
  } = device;
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (canHover)
      return;
    setIsShowHover(true);
  }, [canHover]);
  useOnClickOutside(containerRef, () => {
    if (canHover)
      return;
    setIsShowHover(false);
  });
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
    ratio: 1,
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$g.aspectWrapper, {
      [styles$g.fixVideoContainer]: media.assetBlock === "video"
    }),
    children: media.assetBlock === "image" ? (() => {
      const imageData = media[device.currentDevice || "desktop"];
      const hasHoverLayer2 = !!(imageData.imageUrlHover || media.desktop.imageUrlHover);
      const disableLink = hasHoverLayer2 && !canHover && !isShowHover;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        ref: containerRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$g.hoverController, {
          [styles$g.show]: isShowHover,
          [styles$g.hasHoverLayer]: hasHoverLayer2
        }),
        onClick: handleClick,
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
          enable: !disableLink,
          clickBehavior: media.desktop.clickBehavior,
          className: styles$g.imageLink,
          onClickLink: () => {
            var _a;
            return homepageCTAOnClick(((_a = imageData == null ? void 0 : imageData.imageTitle) == null ? void 0 : _a.wording) || imageAlt, index);
          },
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            src: imageData.imageUrl || media.desktop.imageUrl,
            className: styles$g.image,
            alt: imageAlt
          })
        }), hasHoverLayer2 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$g.hoverLayer,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            className: styles$g.hoverImg,
            src: imageData.imageUrlHover || media.desktop.imageUrlHover
          }), !!imageData.imageTitle.wording && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: styles$g.hoverText,
            style: {
              ...parseCSSString(imageData.imageTitle.style),
              ...normalizeTextStyle(imageData.imageTitle.titleStyle)
            },
            dangerouslySetInnerHTML: {
              __html: imageData.imageTitle.wording
            },
            onClick: () => {
              var _a;
              return homepageCTAOnClick((_a = imageData == null ? void 0 : imageData.imageTitle) == null ? void 0 : _a.wording, index);
            }
          })]
        })]
      });
    })() : (() => {
      const videoData = media[device.currentDevice || "desktop"];
      const hasHoverLayer2 = !!(videoData.videoHover || media.desktop.videoHover);
      const disableLink = hasHoverLayer2 && !canHover && !isShowHover;
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        ref: containerRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$g.hoverController, styles$g.videoFix, {
          [styles$g.show]: isShowHover,
          [styles$g.hasHoverLayer]: hasHoverLayer2
        }),
        onClick: handleClick,
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CommonVideo, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$g.videoContent, {
            [styles$g.canClick]: isShowHover || canHover || !hasHoverLayer2
          }),
          onPause,
          onPlay,
          canInterActive: false,
          src: videoData.video || media.desktop.video,
          clickBehavior: disableLink ? void 0 : media.clickBehavior,
          componentIndex,
          trackSwiperIndex: index
        }), hasHoverLayer2 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$g.hoverLayer,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
            className: styles$g.hoverImg,
            src: videoData.videoHover || media.desktop.videoHover
          }), !!videoData.wording && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: styles$g.hoverText,
            style: {
              ...parseCSSString(videoData.style),
              ...normalizeTextStyle(videoData.titleStyle)
            },
            dangerouslySetInnerHTML: {
              __html: videoData.wording
            }
          })]
        })]
      });
    })()
  });
};
const MediaList = ({
  config: config2,
  componentIndex
}) => {
  const {
    brandName,
    pageTitle,
    onEvent
  } = useCMSConfig();
  const device = useDeviceType();
  const addDynamicHeader = useDynamicHeader();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$4(config2);
  }, [config2]);
  const onPlay = () => {
    onEvent(EventType.video, {
      component: config2,
      status: "play",
      title: ""
    });
  };
  const onPause = () => {
    onEvent(EventType.video, {
      component: config2,
      status: "pause",
      title: ""
    });
  };
  const listCSS = {};
  const imageAlt = brandName && pageTitle ? `${brandName} ${pageTitle}` : "";
  const numPerRow = Number(device.currentDevice ? config2[`${device.currentDevice}LinePagination`] : config2.desktopLinePagination);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    addDynamicHeader,
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: getID(config2),
      style: {
        ...listCSS,
        ...{
          ["--num-per-row"]: numPerRow
        }
      },
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$g.mediaList),
      children: config2.mediaList.map((media, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaItem, {
          media,
          device,
          imageAlt,
          onPause,
          onPlay,
          componentIndex,
          index
        }, index);
      })
    })
  });
};
const row3OfBlocks = "_row3OfBlocks_bhbcw_18";
const borderBottom$1 = "_borderBottom_bhbcw_28";
const paragraphCol = "_paragraphCol_bhbcw_32";
const wrapper$4 = "_wrapper_bhbcw_56";
const title$2 = "_title_bhbcw_73";
const text = "_text_bhbcw_85";
const cta$2 = "_cta_bhbcw_95";
const styles$f = {
  row3OfBlocks,
  borderBottom: borderBottom$1,
  paragraphCol,
  wrapper: wrapper$4,
  title: title$2,
  text,
  cta: cta$2,
  "button-hover": "_button-hover_bhbcw_1"
};
const log$3 = createLog("row 3 Paragraph");
const RowThreeBlock = ({
  config: config2,
  componentIndex
}) => {
  const {
    onEvent,
    cmsData
  } = useCMSConfig();
  const {
    currentDevice
  } = useDeviceType();
  const paddingMargin2 = getPaddingMarginStyle(config2, currentDevice);
  const withBorderBottom = hasBorderBottom();
  const addDynamicHeader = useDynamicHeader();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$3("config:", config2);
  }, [config2]);
  const {
    headerChangingOffset = 0,
    headerChanging = false
  } = config2;
  const blocks = [config2.block1, config2.block2, config2.block3];
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    addDynamicHeader,
    currentDevice,
    headerChangingOffset,
    headerChanging,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: getID(config2),
      style: {
        ...paddingMargin2
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$f.row3OfBlocks, {
          [styles$f.borderBottom]: withBorderBottom
        }),
        children: blocks.map((block, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$f.paragraphCol,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: styles$f.wrapper,
            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              style: normalizeTextStyle(block.titleStyle),
              className: styles$f.title,
              dangerouslySetInnerHTML: {
                __html: block.title || " "
              }
            }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: styles$f.text,
              style: normalizeTextStyle(block.textStyle),
              dangerouslySetInnerHTML: {
                __html: block.text
              }
            }, index), !!block.cta && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BALCTA, {
              type: "link",
              className: styles$f.cta,
              text: block.cta,
              onEvent,
              clickBehavior: block.ctaClickBehavior,
              style: normalizeTextStyle(block.ctaStyle),
              config: config2,
              componentIndex
            })]
          })
        }, index))
      })
    })
  });
};
const sizeOrColorWrapper = "_sizeOrColorWrapper_t28nt_18";
const sizeWrapper = "_sizeWrapper_t28nt_36";
const colorWrapper = "_colorWrapper_t28nt_37";
const size = "_size_t28nt_18";
const disabled$2 = "_disabled_t28nt_57";
const color = "_color_t28nt_37";
const styles$e = {
  sizeOrColorWrapper,
  sizeWrapper,
  colorWrapper,
  size,
  disabled: disabled$2,
  color,
  "button-hover": "_button-hover_t28nt_1"
};
const ColorAndSize = ({
  product: product2,
  onClick,
  className
}) => {
  var _a, _b;
  if (!product2)
    return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$e.sizeOrColorWrapper, className),
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: styles$e.sizeWrapper,
      children: (_a = (product2.attributes || []).filter((item2) => item2.code == "size")[0]) == null ? void 0 : _a.values.map((item2, index) => {
        return item2.label === "U" ? null : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$e.size, item2.isOutOfStock ? styles$e.disabled : ""),
          onClick: (e) => {
            if (item2.isOutOfStock) {
              e.preventDefault();
              return;
            }
            onClick == null ? void 0 : onClick();
          },
          href: {
            pathname: `/products${product2.url}`,
            query: {
              size: item2.label
            }
          },
          children: item2.label
        }, index);
      })
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: styles$e.colorWrapper,
      children: (_b = (product2.attributes || []).filter((item2) => item2.code == "color")[0]) == null ? void 0 : _b.values.map((item2, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$e.color),
          style: {
            backgroundColor: item2.backgroundColor,
            display: "block"
          },
          href: {
            pathname: `/products${product2.url}`,
            query: {
              color: item2.id
            }
          },
          onClick
        }, index);
      })
    })]
  });
};
const shopTheCollection$1 = "_shopTheCollection_1rg4s_18";
const borderTop = "_borderTop_1rg4s_18";
const borderBottom = "_borderBottom_1rg4s_21";
const title$1 = "_title_1rg4s_24";
const balTitle = "_balTitle_1rg4s_53";
const swiperWrapper = "_swiperWrapper_1rg4s_62";
const navIcon = "_navIcon_1rg4s_68";
const swiperSlider = "_swiperSlider_1rg4s_71";
const swiperImage = "_swiperImage_1rg4s_87";
const bal = "_bal_1rg4s_53";
const productSlider = "_productSlider_1rg4s_115";
const disabledClass$2 = "_disabledClass_1rg4s_125";
const prevIcon$1 = "_prevIcon_1rg4s_141";
const nextIcon$1 = "_nextIcon_1rg4s_144";
const products = "_products_1rg4s_147";
const product$1 = "_product_1rg4s_115";
const colorAndSize = "_colorAndSize_1rg4s_158";
const productInfo = "_productInfo_1rg4s_161";
const productImage = "_productImage_1rg4s_166";
const name = "_name_1rg4s_192";
const statusTag = "_statusTag_1rg4s_203";
const isCustomizedTag = "_isCustomizedTag_1rg4s_213";
const colorCount = "_colorCount_1rg4s_217";
const price = "_price_1rg4s_218";
const errorImage = "_errorImage_1rg4s_222";
const productInfoWrapper = "_productInfoWrapper_1rg4s_226";
const markDownPrice = "_markDownPrice_1rg4s_245";
const styles$d = {
  shopTheCollection: shopTheCollection$1,
  borderTop,
  borderBottom,
  title: title$1,
  balTitle,
  swiperWrapper,
  navIcon,
  swiperSlider,
  swiperImage,
  bal,
  productSlider,
  disabledClass: disabledClass$2,
  prevIcon: prevIcon$1,
  nextIcon: nextIcon$1,
  products,
  product: product$1,
  colorAndSize,
  productInfo,
  productImage,
  name,
  statusTag,
  isCustomizedTag,
  colorCount,
  price,
  errorImage,
  productInfoWrapper,
  markDownPrice,
  "button-hover": "_button-hover_1rg4s_1"
};
swiper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.use([swiper__WEBPACK_IMPORTED_MODULE_9__/* .Navigation */ .W_]);
const log$2 = createLog("shop-the-collection");
const mapPriceToNumber = (source) => {
  return Number(String(source).replace(/[^0-9\.\-\+]/g, ""));
};
const transformPrice = (price2) => {
  const transformPrice2 = `${mapPriceToNumber(price2)}`;
  if (transformPrice2.length > 7) {
    let index = 0;
    let number = 0;
    const string = "0123456789";
    for (let i = 0; i < price2.length; i++) {
      if (string.includes(price2[i])) {
        number += 1;
        if (number === 7) {
          index = i;
        }
      }
    }
    return `${price2.substring(0, index + 1)}...`;
  }
  return price2;
};
const handleColorCount = (item2) => {
  var _a;
  return ((_a = item2.attributes.find((item22) => item22.code === "color")) == null ? void 0 : _a.values.length) || 0;
};
const ShopTheCollection = ({
  config: config2,
  componentIndex
}) => {
  const {
    brand,
    pageTitle,
    cmsData
  } = useCMSConfig();
  const addDynamicHeader = useDynamicHeader();
  const device = useDeviceType();
  const swiperIns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const withBorderBottom = hasBorderBottom();
  const [swiperCurrentIndex, setSwiperCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const uniqueId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(Math.random().toString(36).substr(2));
  const isBal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => brand === "bal", [brand]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$2("config:", config2);
  }, [config2]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a;
    if (device.canHover) {
      ((_a = swiperIns.current) == null ? void 0 : _a.navigation).enable();
    }
  }, [device.canHover]);
  const imageAlt = brand && pageTitle ? `${brand} ${pageTitle}` : "";
  const containerCSS = getPaddingMarginStyle(config2, device.currentDevice);
  const isAllProducts = !config2.list.some((i) => i.slotAssetType === "image");
  const handleChange = (swiper2) => {
    setSwiperCurrentIndex(swiper2.realIndex);
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    addDynamicHeader,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      id: getID(config2),
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$d.shopTheCollection, {
        [styles$d.borderTop]: isBal ? config2.upLine && !!config2.title.wording : !!config2.title.wording,
        [styles$d.borderBottom]: isBal ? config2.downLine : withBorderBottom,
        [styles$d.products]: isAllProducts
      }),
      style: containerCSS,
      children: [!!config2.title.wording && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$d.title, {
          [styles$d.balTitle]: isBal
        }),
        style: normalizeTextStyle(config2.title.style),
        dangerouslySetInnerHTML: {
          __html: config2.title.wording
        }
      }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$d.swiperWrapper, {
          [styles$d.borderTop]: isBal ? config2.upLine : true
        }),
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
          slidesPerView: "auto",
          onSwiper: (ins) => swiperIns.current = ins,
          centerInsufficientSlides: true,
          navigation: {
            prevEl: ".prevIcon_" + uniqueId.current,
            nextEl: ".nextIcon_" + uniqueId.current,
            disabledClass: styles$d.disabledClass
          },
          onSlideChange: handleChange,
          children: config2.list.filter((i) => i.slotAssetType === "image" || i.slotAssetType === "product" && i.product).map((item2, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$d.swiperSlider, {
              [styles$d.productSlider]: item2.slotAssetType === "product",
              [styles$d.bal]: isBal,
              [styles$d.allProducts]: isAllProducts
            }),
            children: item2.slotAssetType === "image" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
              clickBehavior: item2.imageClickBehavior,
              onClickLink: () => homepageCTAOnClick(imageAlt, swiperCurrentIndex),
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                alt: imageAlt,
                src: item2.imageSource,
                className: styles$d.swiperImage
              })
            }) : item2.product && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: styles$d.product,
              children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
                href: `/products${item2.product.url}`,
                onClick: () => homepageCTAOnClick(imageAlt, swiperCurrentIndex),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  alt: imageAlt,
                  src: item2.product.defaultImage,
                  className: styles$d.productImage
                })
              }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: styles$d.productInfoWrapper,
                children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: styles$d.productInfo,
                  children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: styles$d.name,
                    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
                      href: `/products${item2.product.url}`,
                      onClick: () => {
                        var _a;
                        return homepageCTAOnClick(((_a = item2 == null ? void 0 : item2.product) == null ? void 0 : _a.name) || "");
                      },
                      children: item2.product.name
                    })
                  }), isBal && item2.product.tag && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$d.statusTag, {
                      [styles$d.isCustomizedTag]: item2.product.isCustomizedTag
                    }),
                    children: item2.product.tag
                  }), (!isBal || handleColorCount(item2.product) > 1) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: styles$d.colorCount,
                    children: [handleColorCount(item2.product), "\u79CD\u989C\u8272"]
                  }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: styles$d.price,
                    children: [transformPrice(item2.product.price), item2.product.markDownPrice ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                      children: [" ", /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                        className: styles$d.markDownPrice,
                        children: transformPrice(item2.product.markDownPrice)
                      })]
                    }) : null]
                  })]
                }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ColorAndSize, {
                  className: styles$d.colorAndSize,
                  product: item2.product
                })]
              })]
            })
          }, index))
        }), device.canHover && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBalArrowLeft, {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$d.navIcon, "prevIcon_" + uniqueId.current, styles$d.prevIcon)
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBalArrowRight, {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$d.navIcon, "nextIcon_" + uniqueId.current, styles$d.nextIcon)
          })]
        })]
      })]
    })
  });
};
const flexible$1 = "_flexible_l0pih_18";
const styles$c = {
  flexible: flexible$1,
  "button-hover": "_button-hover_l0pih_1"
};
const Flexible = (props) => {
  const {
    config,
    paddingMargin,
    componentID
  } = props;
  const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsMounted(true);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isMounted)
      return;
    if (config.script) {
      eval(config.script);
    }
  }, [isMounted, config.script]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isMounted)
      return;
    if (config.style) {
      const styleTag = document.createElement("style");
      const head = document.head || document.getElementsByTagName("head")[0];
      styleTag.appendChild(document.createTextNode(config.style));
      head.appendChild(styleTag);
      return () => {
        head.removeChild(styleTag);
      };
    }
  }, [isMounted, config.style]);
  if (!config.content)
    return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: componentID,
    style: paddingMargin,
    className: styles$c.flexible,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      dangerouslySetInnerHTML: {
        __html: config.content
      }
    })
  });
};
const Flexible$1 = dynamicHeaderHOC(Flexible);
const imageWithHotArea$1 = "_imageWithHotArea_1ws3f_18";
const imageWrapper = "_imageWrapper_1ws3f_22";
const image$4 = "_image_1ws3f_18";
const link = "_link_1ws3f_32";
const disabled$1 = "_disabled_1ws3f_36";
const debug = "_debug_1ws3f_40";
const styles$b = {
  imageWithHotArea: imageWithHotArea$1,
  imageWrapper,
  image: image$4,
  link,
  disabled: disabled$1,
  debug,
  "button-hover": "_button-hover_1ws3f_1"
};
const log$1 = createLog("image-with-hot-area");
const ImageWithHotArea = ({
  config: config2,
  componentIndex
}) => {
  const addDynamicHeader = useDynamicHeader();
  const device = useDeviceType();
  const [enableDebug, setEnableDebug] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const handleCmsLinkClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((clickBehavior) => {
    homepageCTAOnClick((clickBehavior == null ? void 0 : clickBehavior.url) || "");
  }, [homepageCTAOnClick]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log$1(config2);
    setEnableDebug(isDebug());
  }, [config2]);
  const paddingMarginCSS = getPaddingMarginStyle(config2, device.currentDevice);
  const src = getTargetImage(config2, device);
  const imageSize = {
    height: config2.width === "fullWidthFullHeight" ? windowHeight : "auto"
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    headerChangingOffset: config2.headerChangingOffset,
    headerChanging: config2.headerChanging,
    addDynamicHeader,
    currentDevice: device.currentDevice,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      id: getID(config2),
      className: styles$b.imageWithHotArea,
      style: {
        ...paddingMarginCSS,
        display: "flex",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: styles$b.imageWrapper,
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
          className: styles$b.image,
          src,
          style: imageSize
        }), config2.hotArea.map((area, index) => {
          const {
            x: _startX,
            y: _startY
          } = area.start;
          const startX = parseFloat(_startX || "");
          const startY = parseFloat(_startY || "");
          const {
            x: _endX,
            y: _endY
          } = area.end;
          const endX = parseFloat(_endX || "");
          const endY = parseFloat(_endY || "");
          const style = {
            top: startY + "%",
            left: startX + "%",
            width: endX - startX + "%",
            height: endY - startY + "%"
          };
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_3__, {
            onClick: () => handleCmsLinkClick(area.clickBehavior),
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$b.link, {
              [styles$b.debug]: enableDebug,
              [styles$b.disabled]: area.clickBehavior.type === "unClickable"
            }),
            style,
            href: area.clickBehavior.url,
            ref: (el) => {
              if (enableDebug)
                el == null ? void 0 : el.style.setProperty("--debug-color", `#${(Math.random() * 16777215 << 0).toString(16)}`);
            }
          }, index);
        })]
      })
    })
  });
};
const wrapper$3 = "_wrapper_1nry4_18";
const item$1 = "_item_1nry4_23";
const subItem = "_subItem_1nry4_29";
const image$3 = "_image_1nry4_38";
const amqImage$1 = "_amqImage_1nry4_44";
const html = "_html_1nry4_48";
const styles$a = {
  wrapper: wrapper$3,
  item: item$1,
  subItem,
  image: image$3,
  amqImage: amqImage$1,
  html,
  "button-hover": "_button-hover_1nry4_1"
};
const content = "_content_1f2qj_18";
const swiper$2 = "_swiper_1f2qj_27";
const swiperSlide$1 = "_swiperSlide_1f2qj_62";
const fullScreen = "_fullScreen_1f2qj_66";
const halfScreen = "_halfScreen_1f2qj_70";
const styles$9 = {
  content,
  swiper: swiper$2,
  swiperSlide: swiperSlide$1,
  fullScreen,
  halfScreen,
  "button-hover": "_button-hover_1f2qj_1"
};
const htmlWrapper = "_htmlWrapper_zhvqx_18";
const amqBorderBox = "_amqBorderBox_zhvqx_30";
const borderBox = "_borderBox_zhvqx_37";
const topLeft = "_topLeft_zhvqx_44";
const topRight = "_topRight_zhvqx_58";
const bottomLeft = "_bottomLeft_zhvqx_72";
const bottomRight = "_bottomRight_zhvqx_86";
const htmlBox = "_htmlBox_zhvqx_101";
const image$2 = "_image_zhvqx_110";
const amqImage = "_amqImage_zhvqx_115";
const styles$8 = {
  htmlWrapper,
  amqBorderBox,
  borderBox,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  htmlBox,
  image: image$2,
  amqImage,
  "button-hover": "_button-hover_zhvqx_1"
};
const EditorialContentSlideItems = ({
  item: item2,
  componentIndex,
  trackSwiperIndex = -1
}) => {
  const {
    currentDevice
  } = useDeviceType();
  const {
    brand
  } = useCMSConfig();
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  if (!currentDevice) {
    return null;
  }
  if (item2.type === "image") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
      clickBehavior: item2.clickBehavior,
      onClickLink: () => homepageCTAOnClick("", trackSwiperIndex),
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$8.image, brand === "amq" ? styles$8.amqImage : ""),
        src: item2[`${currentDevice}Image`] || item2.desktopImage,
        alt: ""
      })
    });
  }
  if (item2.type === "html") {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: styles$8.htmlWrapper,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: brand == "amq" ? styles$8.amqBorderBox : styles$8.borderBox,
        children: [brand == "amq" ? null : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
            className: styles$8.topLeft
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
            className: styles$8.topRight
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
            className: styles$8.bottomLeft
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i", {
            className: styles$8.bottomRight
          })]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$8.htmlBox,
          dangerouslySetInnerHTML: {
            __html: item2[`${currentDevice}Html`] || item2.desktopHtml
          }
        })]
      })
    });
  }
  return null;
};
function isNumber(str) {
  return /^-?\d+(\.\d+)?$/.test(str);
}
swiper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.use([swiper__WEBPACK_IMPORTED_MODULE_9__/* .Pagination */ .tl, swiper__WEBPACK_IMPORTED_MODULE_9__/* .Autoplay */ .pt]);
const EditorialContent = ({
  config: config2,
  componentIndex
}) => {
  const {
    list: slideList
  } = config2;
  const {
    isMobile,
    isTablet
  } = useDeviceType();
  const [swiperCurrentIndex, setSwiperCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const getStyle = (item2) => {
    const newStyle = {
      ["--swiper-pagination-color"]: `${item2.selectPaginationBarColor}` || "#FFF",
      ["--swiper-pagination-bullet-inactive-color"]: `${item2.unselectPaginationBarColor}` || "#FFFFFF80"
    };
    return newStyle;
  };
  const getAutoplayDuration = (autoplayTime) => {
    return isNumber(autoplayTime) ? Number(autoplayTime) : 0;
  };
  const handleSlideChange = (swiper2) => {
    setSwiperCurrentIndex(swiper2.realIndex);
  };
  if (!slideList.length) {
    return null;
  }
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: slideList.map((item2, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: item2.list.length > 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: styles$9.content,
        style: getStyle(item2),
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
          className: styles$9.swiper,
          pagination: item2.list.length > 1 ? {
            clickable: true
          } : false,
          slidesPerView: item2.list.length < 2 || item2.type === "fullScreen" || isMobile || isTablet ? 1 : 2,
          centerInsufficientSlides: true,
          grabCursor: false,
          allowTouchMove: true,
          autoplay: !!getAutoplayDuration(item2.autoplayTime) ? {
            delay: getAutoplayDuration(item2.autoplayTime) * 1e3,
            stopOnLastSlide: false,
            disableOnInteraction: false
          } : false,
          onSlideChange: handleSlideChange,
          children: item2.list.map((el, index2) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$9.swiperSlide, item2.list.length < 2 || item2.type === "fullScreen" || isMobile || isTablet ? styles$9.fullScreen : styles$9.halfScreen),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(EditorialContentSlideItems, {
              item: el,
              componentIndex,
              trackSwiperIndex: swiperCurrentIndex
            })
          }, index2))
        })
      }) : null
    }, index))
  });
};
const ImageWithTextList = (props2) => {
  const {
    config: config2,
    paddingMargin: paddingMargin2,
    componentID: componentID2
  } = props2;
  const {
    brand
  } = useCMSConfig();
  const device = useDeviceType();
  const isAmqImageWithList = brand == "amq" && config2.template === "amqImageWithTextList";
  const isBvImageWithTextList = brand == "bv" && config2.template === "bvImageVideoWithTextList";
  const windowWidth = useWindowWidth();
  const desktop = "desktop";
  const isPc = windowWidth >= 1024 ? desktop : "mobile";
  const [list2, setList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(props2.componentIndex);
  const updateList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!device.currentDevice)
      return;
    const list22 = config2.list.map((ele) => {
      const item2 = ele.list.map((i) => {
        i.imageUrl = device.currentDevice && i[`${device.currentDevice}Image`] || i.desktopImage || "";
        i.html = device.currentDevice && i[`${device.currentDevice}Html`] || "";
        return i;
      });
      return item2;
    });
    setList(list22);
  }, [device.currentDevice, config2]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateList();
  }, [updateList]);
  const gutterCSSVar = device.currentDevice ? {
    "--image-with-text-list-gutter": config2[device.currentDevice + "Gutter"]
  } : {};
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    id: componentID2,
    style: {
      ...paddingMargin2,
      ...gutterCSSVar
    },
    className: styles$a.wrapper,
    children: isBvImageWithTextList || isAmqImageWithList ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: list2.map((item2, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$a.item,
          children: item2.length > 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: item2.map((el, i) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: styles$a.subItem,
              children: el.type === "image" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
                clickBehavior: el.clickBehavior,
                onClickLink: () => homepageCTAOnClick((el == null ? void 0 : el.imageAlt) || "", index),
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                  alt: el.imageAlt,
                  src: el.imageUrl,
                  className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$a.image, brand === "amq" ? styles$a.amqImage : "")
                })
              }) : el.type === "video" && brand == "bv" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
                ratio: isPc == desktop ? "684 / 804" : "343 / 404",
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ClpVideo, {
                  config: el,
                  componentIndex: props2.componentIndex,
                  trackSwiperIndex: index
                })
              }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: styles$a.html,
                dangerouslySetInnerHTML: {
                  __html: el.html
                }
              })
            }, i))
          }) : null
        }, index);
      })
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(EditorialContent, {
      config: config2,
      componentIndex: props2.componentIndex
    })
  });
};
const ImageWithTextList$1 = dynamicHeaderHOC(ImageWithTextList);
const cms = "_cms_16rke_18";
const verticalPhotoGallery$1 = "_verticalPhotoGallery_16rke_25";
const footer = "_footer_16rke_30";
const fixedOnMobileFooter = "_fixedOnMobileFooter_16rke_30";
const fixed = "_fixed_16rke_30";
const componentsWrap = "_componentsWrap_16rke_50";
const styles$7 = {
  cms,
  verticalPhotoGallery: verticalPhotoGallery$1,
  footer,
  fixedOnMobileFooter,
  fixed,
  componentsWrap,
  "button-hover": "_button-hover_16rke_1"
};
var DISPLAY_MODE = /* @__PURE__ */ ((DISPLAY_MODE2) => {
  DISPLAY_MODE2["fullWidthFullHeight"] = "fullWidthFullHeight";
  DISPLAY_MODE2["fullWidthHeightAuto"] = "fullWidthHeightAuto";
  return DISPLAY_MODE2;
})(DISPLAY_MODE || {});
var BANNER_DISPLAY_MODE = /* @__PURE__ */ ((BANNER_DISPLAY_MODE2) => {
  BANNER_DISPLAY_MODE2["theOneAboveTheOther"] = "theOneAboveTheOther";
  BANNER_DISPLAY_MODE2["carousel"] = "carousel";
  return BANNER_DISPLAY_MODE2;
})(BANNER_DISPLAY_MODE || {});
var DOTS_ON_MOBILE = /* @__PURE__ */ ((DOTS_ON_MOBILE2) => {
  DOTS_ON_MOBILE2["left"] = "left";
  DOTS_ON_MOBILE2["right"] = "right";
  return DOTS_ON_MOBILE2;
})(DOTS_ON_MOBILE || {});
const wrapper$2 = "_wrapper_1axmx_18";
const container$1 = "_container_1axmx_23";
const full$1 = "_full_1axmx_29";
const swiper$1 = "_swiper_1axmx_30";
const slide = "_slide_1axmx_31";
const rightDots = "_rightDots_1axmx_67";
const styles$6 = {
  wrapper: wrapper$2,
  container: container$1,
  full: full$1,
  swiper: swiper$1,
  slide,
  rightDots,
  "bv-center-Dots": "_bv-center-Dots_1axmx_71",
  "bv-left-Dots": "_bv-left-Dots_1axmx_75",
  "bv-right-Dots": "_bv-right-Dots_1axmx_79",
  "button-hover": "_button-hover_1axmx_1"
};
const SlideChangeAttr = "data-active-time";
const MobileDuality = ({
  config: config2,
  componentIndex
}) => {
  const {
    brand
  } = useCMSConfig();
  const {
    bannerDisplayMode,
    dotsOnMobile,
    banners
  } = config2;
  const [sliderCurrentIndex, setSliderCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const lastMovedTime = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const {
    currentDevice
  } = useDeviceType();
  const {
    wrapperStyle
  } = useWrapperStyle(config2);
  const addDynamicHeader = useDynamicHeader({
    scrollType: "horizontal",
    horizontalCheck: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({
      target,
      top,
      bottom,
      verticalIntersectionDetectEnd
    }) => {
      const targetSwiperSlide = target.closest(".swiper-slide");
      if (!targetSwiperSlide.classList.contains("swiper-slide-active"))
        return false;
      if (new Date().getTime() - Number(targetSwiperSlide.getAttribute(SlideChangeAttr) || 0) < 1100 || new Date().getTime() - lastMovedTime.current < 1e3) {
        if (!(top < verticalIntersectionDetectEnd && bottom > verticalIntersectionDetectEnd)) {
          return false;
        }
      }
      return true;
    }, [lastMovedTime])
  });
  const onSlideChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((swiper2) => {
    setSliderCurrentIndex(swiper2.realIndex);
    swiper2.slides[swiper2.activeIndex].setAttribute(SlideChangeAttr, new Date().getTime().toString());
  }, []);
  if (!currentDevice)
    return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$6.wrapper, "dualityBanner"),
    style: wrapperStyle,
    children: bannerDisplayMode === BANNER_DISPLAY_MODE.theOneAboveTheOther ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: styles$6.container,
        style: brand === "bv" ? {
          marginBottom: (config2 == null ? void 0 : config2.bannerSpace) || "12px"
        } : {},
        children: banners[0].assetStyle === "image" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Image$1, {
          config: banners[0].component,
          wrapperClassName: styles$6.full,
          source: "sliderContainer",
          componentIndex,
          trackSwiperIndex: 0
        }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Video$1, {
          config: banners[0].component,
          headerClassName: styles$6.full,
          source: "container",
          componentIndex,
          trackSwiperIndex: 0
        })
      }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: styles$6.container,
        children: banners[1].assetStyle === "image" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Image$1, {
          config: banners[1].component,
          wrapperClassName: styles$6.full,
          source: "sliderContainer",
          componentIndex,
          trackSwiperIndex: 1
        }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Video$1, {
          config: banners[1].component,
          headerClassName: styles$6.full,
          source: "container",
          componentIndex,
          trackSwiperIndex: 1
        })
      })]
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$6.swiper, {
        [styles$6.rightDots]: dotsOnMobile === DOTS_ON_MOBILE.right
      }, styles$6[`${brand}-${dotsOnMobile}-Dots`]),
      pagination: {
        clickable: true
      },
      modules: [swiper__WEBPACK_IMPORTED_MODULE_9__/* .Pagination */ .tl],
      loop: true,
      focusableElements: "input, select, option, textarea, button, label",
      speed: 1750,
      onSlideChange,
      onSliderMove: () => {
        lastMovedTime.current = new Date().getTime();
      },
      children: banners == null ? void 0 : banners.map((banner, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
        className: styles$6.slide,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
          addDynamicHeader,
          headerChanging: banner.component.hasOwnProperty("headerChanging") ? banner.component.headerChanging : banner.component[currentDevice].headerChanging,
          headerChangingOffset: config2.headerChangingOffset,
          currentDevice,
          className: styles$6.full,
          children: banner.assetStyle === "image" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Image$1, {
            config: banner.component,
            wrapperClassName: styles$6.full,
            source: "sliderContainer",
            componentIndex,
            trackSwiperIndex: sliderCurrentIndex
          }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Video$1, {
            config: banner.component,
            headerClassName: styles$6.full,
            source: "sliderContainer",
            noHeader: true,
            currentActive: sliderCurrentIndex === index,
            componentIndex,
            trackSwiperIndex: sliderCurrentIndex
          })
        })
      }, `${index}-${banner.assetStyle}`))
    })
  });
};
const MobileDuality$1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(MobileDuality);
const wrapper$1 = "_wrapper_1ly62_18";
const container = "_container_1ly62_25";
const full = "_full_1ly62_30";
const styles$5 = {
  wrapper: wrapper$1,
  container,
  full,
  "button-hover": "_button-hover_1ly62_1"
};
const DesktopDuality = ({
  config: config2,
  componentIndex
}) => {
  const {
    banners
  } = config2;
  const {
    brand
  } = useCMSConfig();
  const {
    wrapperStyle
  } = useWrapperStyle(config2);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: styles$5.wrapper,
    style: wrapperStyle,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: styles$5.container,
      style: brand === "bv" ? {
        paddingRight: (config2 == null ? void 0 : config2.bannerSpace) || "12px"
      } : {},
      children: banners[0].assetStyle === "image" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Image$1, {
        config: banners[0].component,
        wrapperClassName: styles$5.full,
        source: "sliderContainer",
        componentIndex,
        trackSwiperIndex: 0
      }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Video$1, {
        config: banners[0].component,
        headerClassName: styles$5.full,
        source: "container",
        componentIndex,
        trackSwiperIndex: 0
      })
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: styles$5.container,
      children: banners[1].assetStyle === "image" ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Image$1, {
        config: banners[1].component,
        wrapperClassName: styles$5.full,
        source: "sliderContainer",
        componentIndex,
        trackSwiperIndex: 1
      }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Video$1, {
        config: banners[1].component,
        headerClassName: styles$5.full,
        source: "container",
        componentIndex,
        trackSwiperIndex: 1
      })
    })]
  });
};
const DesktopDuality$1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(DesktopDuality);
function arrayOrEmpty$1(input) {
  return Array.isArray(input) ? input : [];
}
const useWrapperStyle = (config2) => {
  const {
    bannerDisplayMode
  } = config2;
  const {
    currentDevice,
    isMobile,
    isTablet
  } = useDeviceType();
  const {
    bannerHeight
  } = useCMSConfig();
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const {
    displayMode,
    ratioOfImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => currentDevice ? {
    displayMode: config2[`${currentDevice}DisplayMode`],
    ratioOfImage: config2[`${currentDevice}RatioOfImage`]
  } : {}, [config2, currentDevice]);
  const wrapperHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    var _a;
    const isDouble = (isMobile || isTablet) && bannerDisplayMode === BANNER_DISPLAY_MODE.theOneAboveTheOther;
    if (displayMode === DISPLAY_MODE.fullWidthHeightAuto) {
      const [widthStr, heightStr] = (_a = ratioOfImage == null ? void 0 : ratioOfImage.split(":")) != null ? _a : [];
      const width = Number.parseFloat(widthStr);
      const height = Number.parseFloat(heightStr);
      if (width && height) {
        return `${height / width * (isDouble ? 200 : 100)}vw`;
      } else {
        return `${isDouble ? 200 : 100}vw`;
      }
    } else {
      const fullHeight2 = windowHeight - bannerHeight;
      return `${isDouble ? fullHeight2 * 2 : fullHeight2}px`;
    }
  }, [bannerDisplayMode, bannerHeight, displayMode, isMobile, isTablet, ratioOfImage, windowHeight]);
  const wrapperStyle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => ({
    height: wrapperHeight,
    ...getPaddingMarginStyle(config2, currentDevice)
  }), [config2, currentDevice, wrapperHeight]);
  return {
    wrapperStyle
  };
};
const DualityBanner = ({
  config: config2,
  componentIndex
}) => {
  const {
    headerChanging,
    headerChangingOffset
  } = config2;
  const addDynamicHeader = useDynamicHeader();
  const {
    currentDevice,
    isMobile,
    isTablet
  } = useDeviceType();
  const [tmpConfig, setTmpConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(config2);
  const {
    isBV
  } = useCMSConfig();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isBV || !arrayOrEmpty$1(config2 == null ? void 0 : config2.banners).length)
      return;
    const tmpBanners = config2.banners.map((banner) => {
      banner.component.parentIdentifier = config2.identifier;
      return banner;
    });
    setTmpConfig({
      ...config2,
      banners: tmpBanners
    });
  }, [config2, setTmpConfig, isBV]);
  if (!currentDevice)
    return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    addDynamicHeader,
    headerChanging,
    headerChangingOffset,
    currentDevice,
    children: isMobile || isTablet ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MobileDuality$1, {
      config: tmpConfig,
      componentIndex
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DesktopDuality$1, {
      config: tmpConfig,
      componentIndex
    })
  });
};
const DualityBanner$1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(DualityBanner);
var ColumnTemplate = /* @__PURE__ */ ((ColumnTemplate2) => {
  ColumnTemplate2["desktop2GridAndMobile1Grid"] = "desktop2GridAndMobile1Grid";
  ColumnTemplate2["desktop3GridAndMobile2Grid"] = "desktop3GridAndMobile2Grid";
  return ColumnTemplate2;
})(ColumnTemplate || {});
const listCarousel = "_listCarousel_1itn3_18";
const swiperTop = "_swiperTop_1itn3_29";
const productListCarouselSwiperTop = "_productListCarouselSwiperTop_1itn3_45";
const title = "_title_1itn3_59";
const arrow$1 = "_arrow_1itn3_80";
const disabledClass$1 = "_disabledClass_1itn3_93";
const line = "_line_1itn3_98";
const thumbnailBar$1 = "_thumbnailBar_1itn3_113";
const thumbnailItem$1 = "_thumbnailItem_1itn3_132";
const thumbnailImage$1 = "_thumbnailImage_1itn3_143";
const thumbnailContent = "_thumbnailContent_1itn3_151";
const list = "_list_1itn3_18";
const item = "_item_1itn3_191";
const itemNumber = "_itemNumber_1itn3_200";
const itemIcon = "_itemIcon_1itn3_201";
const disabled = "_disabled_1itn3_93";
const ctaList = "_ctaList_1itn3_265";
const start = "_start_1itn3_269";
const end = "_end_1itn3_273";
const productTitle = "_productTitle_1itn3_282";
const productListCarousel = "_productListCarousel_1itn3_45";
const productLineSwiper = "_productLineSwiper_1itn3_305";
const image$1 = "_image_1itn3_318";
const bottomBtn = "_bottomBtn_1itn3_325";
const lineOpen = "_lineOpen_1itn3_357";
const loading = "_loading_1itn3_361";
const swiperTopWrapper = "_swiperTopWrapper_1itn3_369";
const styles$4 = {
  listCarousel,
  swiperTop,
  productListCarouselSwiperTop,
  title,
  arrow: arrow$1,
  disabledClass: disabledClass$1,
  line,
  thumbnailBar: thumbnailBar$1,
  thumbnailItem: thumbnailItem$1,
  thumbnailImage: thumbnailImage$1,
  thumbnailContent,
  list,
  item,
  itemNumber,
  itemIcon,
  disabled,
  ctaList,
  start,
  end,
  productTitle,
  productListCarousel,
  productLineSwiper,
  image: image$1,
  bottomBtn,
  lineOpen,
  loading,
  swiperTopWrapper,
  "button-hover": "_button-hover_1itn3_1"
};
const SvgPlus = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 22,
  height: 22,
  viewBox: "0 0 22 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  x: 10,
  width: 2,
  height: 22,
  fill: "currentColor"
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  x: 22,
  y: 10,
  width: 2,
  height: 22,
  transform: "rotate(90 22 10)",
  fill: "currentColor"
}));
const SvgReduce = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 22,
  height: 22,
  viewBox: "0 0 22 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  x: 22,
  y: 10,
  width: 2,
  height: 22,
  transform: "rotate(90 22 10)",
  fill: "currentColor"
}));
const SvgBvLeft = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 10,
  height: 17,
  viewBox: "0 0 10 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M1 8.42899L9 15.2861",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M1 8.42871L9 1.00014",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const SvgBvRight = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 10,
  height: 17,
  viewBox: "0 0 10 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M9 7.85714L1 1",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M9 7.85742L1 15.286",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
const defaultProductData = {
  title: "title",
  titleStyle: { opacity: 0 },
  list: new Array(5).fill({
    isHidden: true,
    cached: 0,
    id: "465",
    sku: "605722VCPQ49674",
    type: "configurable",
    isPreSale: false,
    isSalable: false,
    hasStock: false,
    isDefaultWebsite: false,
    isAppletWebsite: true,
    name: "\u53CC\u6298\u94B1\u5305\uFF0C\u914D\u6709\u96F6\u94B1\u888B\u662F\u5426\u611F\u5230\u9644\u5C5E\u56FD\u8C46\u8150\u5E72\u5927\u5E08\u5085\u83B7\u5F97\u66F4\u5927\u6B65\u4F10111AAAsdfaafadddddd",
    nameEn: "BI-FOLD WALLET WITH COIN PURSE",
    rootCategoryCn: "\u7537\u58EB",
    macroCategoryCn: "\u5C0F\u76AE\u5177",
    superMicroCategoryCn: null,
    microCategoryCn: "\u5C0F\u53F7\u94B1\u5305",
    rootCategoryEn: "Men",
    macroCategoryEn: "Small Leather Goods",
    superMicroCategoryEn: null,
    microCategoryEn: "Small Wallets",
    macroCategory: "bv_macro_men_slg",
    superMicroCategory: null,
    microCategory: "bv_micro_men_small_wallets",
    colorEn: null,
    colorCodeId: "9674",
    size: false,
    materialEn: "100% Calfskin",
    rootCategory: "\u7537\u58EB",
    url: "/bi-fold-wallet-with-coin-purse-605722vcpq49674.html",
    defaultImage: "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Medium-605722VCPQ49674_A.jpg",
    mobileImage: "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Small-605722VCPQ49674_A.jpg",
    switchImage: "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Medium-605722VCPQ49674_A.jpg",
    channelAssortments: ["retail", "applet", "tmall"],
    isCurrentChannelSellable: false,
    isDefaultExclusive: false,
    isAppletExclusive: false,
    isTmallExclusive: false,
    isRetailExclusive: false,
    isChannelExclusive: false,
    channelExclusiveTag: "",
    isOutOfStock: false,
    videoUrl: null,
    mobileVideoUrl: null,
    videoPosterUrl: null,
    videoMobilePosterUrl: null,
    isWFP: false,
    tags: [],
    customTag: [],
    attributes: [
      {
        id: "93",
        code: "color",
        label: "\u989C\u8272",
        values: [
          {
            label: "\u84DD\u8272",
            sortOrder: 4,
            valueIndex: "5479",
            image: null,
            imageList: {
              desktopImageList: [
                "https://bottegaveneta-sandbox.getbynder.com/m/1cfee681908c78d6/Medium-605722VCPQ44270_A.jpg",
                "https://bottegaveneta-sandbox.getbynder.com/m/30095cb6a8e6bd3b/Medium-605722VCPQ44270_M.jpg"
              ],
              mobileImageList: [
                "https://bottegaveneta-sandbox.getbynder.com/m/1cfee681908c78d6/Medium-605722VCPQ44270_A.jpg",
                "https://bottegaveneta-sandbox.getbynder.com/m/30095cb6a8e6bd3b/Medium-605722VCPQ44270_M.jpg"
              ]
            },
            labelCn: "\u84DD\u8272",
            backgroundColor: "#1822de",
            smc: "605722VCPQ44270",
            isSelected: false,
            id: "5479",
            defaultLabel: "\u84DD\u8272",
            storeLabel: "\u84DD\u8272"
          },
          {
            label: "\u77F3\u818F\u8272",
            sortOrder: 18,
            valueIndex: "5567",
            image: null,
            imageList: {
              desktopImageList: [
                "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Medium-605722VCPQ49674_A.jpg",
                "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Medium-605722VCPQ49674_A.jpg"
              ],
              mobileImageList: [
                "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Medium-605722VCPQ49674_A.jpg",
                "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Medium-605722VCPQ49674_A.jpg"
              ]
            },
            labelCn: "\u77F3\u818F\u8272",
            backgroundColor: "#DCD6C5",
            smc: "605722VCPQ49674",
            isSelected: true,
            id: "5567",
            defaultLabel: "\u77F3\u818F\u8272",
            storeLabel: "\u77F3\u818F\u8272"
          }
        ],
        storeLabel: "\u989C\u8272"
      },
      {
        id: "263",
        code: "size",
        label: "\u5C3A\u7801",
        values: [
          {
            label: "U",
            sortOrder: 48,
            valueIndex: "5542",
            isOutOfStock: true,
            id: "5542",
            defaultLabel: "U",
            storeLabel: "U"
          }
        ],
        storeLabel: "\u5C3A\u7801"
      }
    ],
    updatedAt: "2023-08-15 20:43:16",
    riveDroite: false,
    estimateShippingDate: null,
    preOrderShippingNote: null,
    excluRiveDroiteDisplay: false,
    excluRiveDroiteLogoUrl: "",
    disableVideo: false,
    video: {
      videoHasSound: false,
      videoIsAutoplay: true,
      videoIsAutoLoop: false,
      videoHasControlBar: false,
      videoDisplayMethod: "cover"
    },
    personalization: false,
    icon3D: null,
    virtualTryOn: null,
    genericTag: null,
    price: "\xA54,300",
    percentOff: "",
    privateSaleTag: "",
    status: "UnSellable",
    tag: "find in store",
    isCustomizedTag: false,
    isDefaultChannel: false,
    isAppletChannel: true,
    isTmallChannel: true,
    customTags: [],
    markDownPrice: "",
    imageList: {
      desktopImageList: [
        "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Medium-605722VCPQ49674_A.jpg",
        "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Medium-605722VCPQ49674_A.jpg"
      ],
      mobileImageList: [
        "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Medium-605722VCPQ49674_A.jpg",
        "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Medium-605722VCPQ49674_A.jpg"
      ],
      changeViewImage: {
        desktopImage: "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Medium-605722VCPQ49674_A.jpg",
        mobileImage: "https://bottegaveneta-sandbox.getbynder.com/m/5928151a91ce3a71/Medium-605722VCPQ49674_A.jpg"
      }
    }
  })
};
swiper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.use([swiper__WEBPACK_IMPORTED_MODULE_9__/* .Scrollbar */ .LW, swiper__WEBPACK_IMPORTED_MODULE_9__/* .Navigation */ .W_]);
const log = createLog("LookBook");
const LookBook = ({
  config: config2,
  componentIndex
}) => {
  var _a;
  const addDynamicHeader = useDynamicHeader();
  const {
    brandName,
    pageTitle,
    ProductListItem
  } = useCMSConfig();
  const [canLoadMore, setCanLoadMore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const listBottomRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    list: lookBook,
    pagination: defaultPagination
  } = config2;
  const pagination = defaultPagination || 9999999;
  const swiperIns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const swiperChildrenIns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const device = useDeviceType();
  const windowWidth = useWindowWidth();
  const currentDevice = windowWidth >= 1024 ? "desktop" : "mobile";
  const [currentLine, setCurrentLine] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [currentItemProductData, setCurrentItemProductData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultProductData);
  const [lineOpen2, setLineOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [lineHight, setLineHight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [swiperSlideData, setSwiperSlideData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [currentPageSwiperSlideData, setCurrentPageSwiperSlideData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const oneLineHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const topHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
  const [productHeight, setProductHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [productKey, setProductKey] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [swiperCurrentSlide, setSwiperCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    log(config2);
  }, [config2]);
  const nextPage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((page) => {
    setIsLoading(true);
    setTimeout(() => {
      page ? setCurrentPage(page) : setCurrentPage((val) => val + 1);
      setIsLoading(false);
    }, 300);
  }, [setCurrentPage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const defaultSwiperSlideData = [];
    const defaultCurrentPageSwiperSlideData = [];
    lookBook.map((item2, index) => {
      const data = item2[currentDevice];
      for (let i = 0; i < (data == null ? void 0 : data.length); i++) {
        const e = data[i];
        const page = Math.floor(index / pagination + 1);
        const listData = {
          ...e,
          template: item2.template,
          isLast: i === (data == null ? void 0 : data.length) - 1,
          line: index,
          page
        };
        defaultSwiperSlideData.push(listData);
        if (page <= currentPage) {
          defaultCurrentPageSwiperSlideData.push(listData);
        }
      }
    });
    setSwiperSlideData(defaultSwiperSlideData);
    setCurrentPageSwiperSlideData(defaultCurrentPageSwiperSlideData);
  }, [lookBook, currentPage, windowWidth, pagination, currentDevice]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!listBottomRef.current)
      return;
    let buttonObserverValue = null;
    const buttonObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        if ((swiperSlideData == null ? void 0 : swiperSlideData.length) !== (currentPageSwiperSlideData == null ? void 0 : currentPageSwiperSlideData.length) && !isLoading) {
          canLoadMore && nextPage();
        }
      }
    }, {
      rootMargin: "0px 0px 200px 0px"
    });
    buttonObserver.observe(listBottomRef.current);
    buttonObserverValue = listBottomRef.current;
    return () => {
      if (!buttonObserverValue)
        return;
      buttonObserver.unobserve(buttonObserverValue);
    };
  }, [lookBook, nextPage, canLoadMore, swiperSlideData, currentPageSwiperSlideData, isLoading]);
  const handleSlideClick = (item2, index) => () => {
    if (item2.page > currentPage) {
      nextPage(item2.page);
      setTimeout(() => {
        location.hash = `list-${config2.identifier}-${index}`;
        setTimeout(() => {
          history.pushState("", document.title, window.location.pathname + window.location.search);
        }, 100);
      }, 500);
      return;
    }
    location.hash = `list-${config2.identifier}-${index}`;
    setTimeout(() => {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }, 100);
  };
  const imageAlt = brandName && pageTitle ? `${brandName} ${pageTitle}` : "";
  const getListItemColumn = (item2) => {
    if (currentDevice == "desktop") {
      return item2.template === ColumnTemplate.desktop2GridAndMobile1Grid ? {
        gridColumnStart: "span 3"
      } : {
        gridColumnStart: "span 2"
      };
    }
    return item2.template === ColumnTemplate.desktop2GridAndMobile1Grid ? {
      gridColumnStart: "span 6"
    } : {
      gridColumnStart: "span 3"
    };
  };
  const getsScrollbar = (val) => {
    if (!val)
      return {};
    return {
      scrollbar: val
    };
  };
  const changeTopHeight = (item2) => {
    setTimeout(() => {
      var _a2;
      const height = (_a2 = document.querySelector(`.line-${item2.line} .${styles$4.swiperTopWrapper}`)) == null ? void 0 : _a2.offsetHeight;
      if (height < topHeight.current) {
        setLineHight((val) => {
          return val - (topHeight.current - height);
        });
      } else if (height > topHeight.current) {
        setLineHight((val) => {
          return val + (height - topHeight.current);
        });
      }
    }, 300);
  };
  const clickPlusIcon = (item2, index) => {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    if (!((_b = (_a2 = item2 == null ? void 0 : item2.product) == null ? void 0 : _a2.list) == null ? void 0 : _b.length))
      return;
    let height = oneLineHeight.current || ((_c = document.querySelector(`.line-${item2.line}`)) == null ? void 0 : _c.offsetHeight) || 0;
    const prodcutTopHeight = topHeight.current || ((_d = document.querySelector(`.line-${item2.line} .${styles$4.swiperTopWrapper}`)) == null ? void 0 : _d.offsetHeight);
    if (!oneLineHeight.current) {
      oneLineHeight.current = height;
    }
    if (!topHeight.current) {
      topHeight.current = prodcutTopHeight;
    }
    if (currentDevice !== "desktop" && ((_f = (_e = item2 == null ? void 0 : item2.product) == null ? void 0 : _e.list) == null ? void 0 : _f.length) < 3) {
      const productSwiperSlideElement = document.querySelector(".productSwiperSlide");
      const productSwiperSlideHeight = ((productSwiperSlideElement == null ? void 0 : productSwiperSlideElement.offsetHeight) || 0) / 2;
      height -= productSwiperSlideHeight;
    }
    if (((_h = (_g = item2 == null ? void 0 : item2.product) == null ? void 0 : _g.list) == null ? void 0 : _h.length) < 5) {
      height -= currentDevice !== "desktop" ? 33 : 54;
    }
    setLineHight(height);
    setTimeout(() => {
      setLineOpen(true);
      setCurrentLine(item2.line);
      setCurrentIndex(index);
      setSwiperCurrentSlide(0);
      setTimeout(() => {
        var _a3;
        setCurrentItemProductData(item2.product);
        setProductKey((key) => key + 1);
        const productSwiperHeight = ((_a3 = document.querySelector(`#${getID(config2)} .${styles$4.lineOpen} .${styles$4.productLineSwiper}`)) == null ? void 0 : _a3.getBoundingClientRect().height) || 0;
        setProductHeight(productSwiperHeight);
        changeTopHeight(item2);
      }, lineOpen2 ? 200 : 1200);
    }, 100);
  };
  const clickReduceIcon = () => {
    setCurrentItemProductData(defaultProductData);
    setCurrentIndex(null);
    setTimeout(() => {
      setLineOpen(false);
      setSwiperCurrentSlide(0);
      setCurrentLine(null);
    }, 100);
  };
  const handleChange = (swiper2) => {
    const currentSlide2 = swiper2.activeIndex;
    if (swiperCurrentSlide < currentSlide2) {
      setSwiperCurrentSlide(currentSlide2);
    }
  };
  const swiperSlideStyles = {
    display: "grid",
    gridTemplateRows: `repeat(2, 1fr)`,
    gridTemplateColumns: "repeat(2, calc((100% - 15px) / 2))",
    gridColumnGap: "15px"
  };
  if (!windowWidth)
    return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    addDynamicHeader,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: getPaddingMarginStyle(config2, device.currentDevice),
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$4.achieveLook),
      id: getID(config2),
      children: [config2.productCarousel && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: styles$4.listCarousel,
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$4.swiperTop,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: styles$4.title,
            style: normalizeTextStyle((_a = config2.title) == null ? void 0 : _a.style),
            dangerouslySetInnerHTML: {
              __html: config2.title.wording
            }
          }), (swiperSlideData == null ? void 0 : swiperSlideData.length) > 6 && currentDevice == "desktop" && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: styles$4.arrow,
            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvLeft, {
              className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$4.icon, styles$4.prevIcon, `swiper-prev-${config2.identifier}`)
            }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvRight, {
              className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$4.icon, styles$4.nextIcon, `swiper-next-${config2.identifier}`)
            })]
          })]
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
          className: styles$4.thumbnailBar,
          spaceBetween: currentDevice == "desktop" ? 24 : 15,
          slidesPerView: currentDevice == "desktop" ? 6 : 2,
          onSwiper: (ins) => swiperIns.current = ins,
          ...getsScrollbar((swiperSlideData == null ? void 0 : swiperSlideData.length) > 6),
          navigation: {
            prevEl: ".swiper-prev-" + config2.identifier,
            nextEl: ".swiper-next-" + config2.identifier,
            disabledClass: styles$4.disabledClass
          },
          children: swiperSlideData.map((item2, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
            className: styles$4.thumbnailItem,
            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
              ratio: currentDevice == "desktop" ? "212 / 318" : "164 / 246",
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                alt: imageAlt,
                src: item2.imageUrl,
                className: styles$4.thumbnailImage,
                onClick: handleSlideClick(item2, index)
              })
            }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: styles$4.thumbnailContent,
              children: index + 1
            })]
          }, index))
        })]
      }, swiperSlideData == null ? void 0 : swiperSlideData.length), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$4.list),
        children: currentPageSwiperSlideData.map((item2, index) => {
          var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              id: `list-${config2.identifier}-${index}`,
              className: styles$4.item,
              style: getListItemColumn(item2),
              children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
                ratio: currentDevice == "desktop" ? item2.template === ColumnTemplate.desktop2GridAndMobile1Grid ? "714 / 1070" : "472 / 708" : item2.template === ColumnTemplate.desktop2GridAndMobile1Grid ? "375 / 562" : "180 / 270",
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
                  clickBehavior: item2 == null ? void 0 : item2.clickBehavior,
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    alt: imageAlt,
                    src: item2.imageUrl,
                    className: styles$4.image,
                    onClick: () => homepageCTAOnClick(imageAlt)
                  })
                })
              }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
                className: styles$4.itemNumber,
                style: {
                  color: item2.numberColor || "#fff"
                },
                children: index + 1
              }), ((_b = (_a2 = item2 == null ? void 0 : item2.product) == null ? void 0 : _a2.list) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: currentIndex === index ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgReduce, {
                  className: styles$4.itemIcon,
                  style: {
                    color: item2.iconColor || "#fff"
                  },
                  onClick: clickReduceIcon
                }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgPlus, {
                  className: styles$4.itemIcon,
                  style: {
                    color: item2.iconColor || "#fff"
                  },
                  onClick: () => clickPlusIcon(item2, index)
                })
              })]
            }), item2.isLast && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$4.line),
              style: {
                height: currentLine === item2.line && (currentItemProductData == null ? void 0 : currentItemProductData.list) && lineOpen2 ? lineHight : "0"
              },
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1__(`line-${item2.line}`, currentLine === item2.line && (currentItemProductData == null ? void 0 : currentItemProductData.list) && lineOpen2 ? styles$4.lineOpen : ""),
                style: {
                  height: "auto",
                  overflow: "hidden",
                  position: "relative"
                },
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$4.listCarousel, styles$4.productListCarousel),
                  children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$4.swiperTopWrapper),
                    children: ((_c = currentItemProductData == null ? void 0 : currentItemProductData.list) == null ? void 0 : _c.length) && ((_d = currentItemProductData == null ? void 0 : currentItemProductData.list) == null ? void 0 : _d.length) > 4 || (currentItemProductData == null ? void 0 : currentItemProductData.title) ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$4.swiperTop, styles$4.productListCarouselSwiperTop),
                      children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                        className: styles$4.title,
                        style: normalizeTextStyle(currentItemProductData == null ? void 0 : currentItemProductData.titleStyle),
                        dangerouslySetInnerHTML: {
                          __html: currentItemProductData.title || ""
                        }
                      }), ((_e = currentItemProductData == null ? void 0 : currentItemProductData.list) == null ? void 0 : _e.length) && ((_f = currentItemProductData == null ? void 0 : currentItemProductData.list) == null ? void 0 : _f.length) > 4 || !lineOpen2 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                        className: styles$4.arrow,
                        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvLeft, {
                          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$4.icon, styles$4.prevIcon, `swiper-prev-line-${item2.line}-${config2.identifier}`)
                        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvRight, {
                          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$4.icon, styles$4.nextIcon, `swiper-next-line-${item2.line}-${config2.identifier}`)
                        })]
                      }) : null]
                    }) : null
                  }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    style: {
                      height: "auto",
                      overflow: "hidden"
                    },
                    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
                      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$4.thumbnailBar, styles$4.productLineSwiper),
                      spaceBetween: currentDevice == "desktop" ? 24 : 15,
                      slidesPerView: currentDevice == "desktop" ? 4 : 1,
                      onSwiper: (ins) => swiperChildrenIns.current = ins,
                      onSlideChange: (swiper2) => handleChange(swiper2),
                      ...getsScrollbar(((_g = currentItemProductData == null ? void 0 : currentItemProductData.list) == null ? void 0 : _g.length) ? ((_h = currentItemProductData == null ? void 0 : currentItemProductData.list) == null ? void 0 : _h.length) > 4 : false),
                      navigation: {
                        prevEl: ".swiper-prev-line-" + item2.line + "-" + config2.identifier,
                        nextEl: ".swiper-next-line-" + item2.line + "-" + config2.identifier,
                        disabledClass: styles$4.disabledClass
                      },
                      children: currentItemProductData == null ? void 0 : currentItemProductData.list.map((productItem2, productIndex) => {
                        if (currentDevice == "desktop") {
                          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
                            className: styles$4.thumbnailItem,
                            style: (productItem2 == null ? void 0 : productItem2.isHidden) ? {
                              opacity: 0
                            } : {
                              height: productHeight
                            },
                            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                              style: {
                                display: "none"
                              },
                              children: [productIndex, "-", swiperCurrentSlide]
                            }), productIndex < swiperCurrentSlide + 6 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                              children: ProductListItem({
                                item: productItem2,
                                index: productIndex
                              })
                            }) : null]
                          }, productIndex + productKey);
                        }
                        if (productIndex % 4 !== 0)
                          return null;
                        const nextData = (currentItemProductData == null ? void 0 : currentItemProductData.list[productIndex + 1]) || null;
                        const nextData2 = (currentItemProductData == null ? void 0 : currentItemProductData.list[productIndex + 2]) || null;
                        const nextData3 = (currentItemProductData == null ? void 0 : currentItemProductData.list[productIndex + 3]) || null;
                        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
                          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$4.thumbnailItem, "productSwiperSlide"),
                          style: (productItem2 == null ? void 0 : productItem2.isHidden) ? {
                            opacity: 0,
                            pointerEvents: "none",
                            ...swiperSlideStyles
                          } : productHeight ? {
                            height: productHeight,
                            ...swiperSlideStyles
                          } : {},
                          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                            style: {
                              display: "none"
                            },
                            children: [productIndex + 3, "-", (swiperCurrentSlide + 1) * 4]
                          }), productIndex + 3 < (swiperCurrentSlide + 1) * 4 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                            children: [ProductListItem({
                              item: productItem2,
                              index: productIndex
                            }), nextData && ProductListItem({
                              item: nextData,
                              index: productIndex + 1
                            }), nextData2 && ProductListItem({
                              item: nextData2,
                              index: productIndex + 2
                            }), nextData3 && ProductListItem({
                              item: nextData3,
                              index: productIndex + 3
                            })]
                          }) : null]
                        }, productIndex + productKey);
                      })
                    }), ((_i = currentItemProductData == null ? void 0 : currentItemProductData.list[0]) == null ? void 0 : _i.isHidden) && currentIndex !== null && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                      className: styles$4.loading,
                      children: "\u52A0\u8F7D\u4E2D..."
                    })]
                  }, productKey)]
                }, currentIndex)
              })
            })]
          }, index);
        })
      }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        ref: listBottomRef,
        style: {
          display: "flex",
          justifyContent: "center"
        },
        children: [!canLoadMore && currentPageSwiperSlideData < swiperSlideData && !isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$4.bottomBtn,
          onClick: () => {
            setCanLoadMore(true);
            nextPage();
            homepageCTAOnClick("\u67E5\u770B\u66F4\u591A");
          },
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: "\u67E5\u770B\u66F4\u591A"
          })
        }), isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: styles$4.bottomBtn,
          children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: "\u52A0\u8F7D\u4E2D..."
          })
        })]
      })]
    })
  });
};
const lookBookRedesign = "_lookBookRedesign_i6mhi_31";
const lookBookRedesignCarousel = "_lookBookRedesignCarousel_i6mhi_35";
const lookNameCarousel = "_lookNameCarousel_i6mhi_44";
const lookName = "_lookName_i6mhi_44";
const thumbnailBar = "_thumbnailBar_i6mhi_100";
const isCenter = "_isCenter_i6mhi_105";
const thumbnailItem = "_thumbnailItem_i6mhi_108";
const arrow = "_arrow_i6mhi_123";
const hide = "_hide_i6mhi_131";
const nextIcon = "_nextIcon_i6mhi_134";
const icon = "_icon_i6mhi_137";
const prevIcon = "_prevIcon_i6mhi_141";
const disabledClass = "_disabledClass_i6mhi_144";
const thumbnailImage = "_thumbnailImage_i6mhi_147";
const lookBookRedesignGrid = "_lookBookRedesignGrid_i6mhi_153";
const active = "_active_i6mhi_153";
const lookBookRedesignItemTile = "_lookBookRedesignItemTile_i6mhi_153";
const cursorDefault = "_cursorDefault_i6mhi_172";
const lookBookRedesignItemTileDetail = "_lookBookRedesignItemTileDetail_i6mhi_175";
const operateIcon = "_operateIcon_i6mhi_193";
const productSwiper = "_productSwiper_i6mhi_197";
const productSwiperSlide = "_productSwiperSlide_i6mhi_212";
const lookBookRedesignItemProducts = "_lookBookRedesignItemProducts_i6mhi_235";
const lookBookRedesignItemProductsCarousel = "_lookBookRedesignItemProductsCarousel_i6mhi_247";
const productItem = "_productItem_i6mhi_263";
const loadMoreWrapper = "_loadMoreWrapper_i6mhi_272";
const styles$3 = {
  lookBookRedesign,
  lookBookRedesignCarousel,
  lookNameCarousel,
  lookName,
  thumbnailBar,
  isCenter,
  thumbnailItem,
  arrow,
  hide,
  nextIcon,
  icon,
  prevIcon,
  disabledClass,
  thumbnailImage,
  lookBookRedesignGrid,
  active,
  lookBookRedesignItemTile,
  cursorDefault,
  lookBookRedesignItemTileDetail,
  operateIcon,
  productSwiper,
  productSwiperSlide,
  lookBookRedesignItemProducts,
  lookBookRedesignItemProductsCarousel,
  productItem,
  loadMoreWrapper,
  "button-hover": "_button-hover_i6mhi_1"
};
const SvgBvArrow = (props2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: 22,
  height: 22,
  viewBox: "0 0 22 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...props2
}, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M14.6557 10.9957L7.34793 3.68205",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "square"
}), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M14.6569 10.9958L7.34914 18.3046",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "square"
}));
let startTime = null;
let requestId;
function checkElementLoaded(domId, callback) {
  const check = (timestamp) => {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsedTime = timestamp - startTime;
    if (elapsedTime < 1e4) {
      const element = document.getElementById(domId);
      if (element) {
        callback(element);
        startTime = null;
        cancelAnimationFrame(requestId);
      } else {
        requestId = requestAnimationFrame(check);
      }
    } else {
      cancelAnimationFrame(requestId);
      startTime = null;
    }
  };
  requestAnimationFrame(check);
}
var events = { exports: {} };
var R = typeof Reflect === "object" ? Reflect : null;
var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};
var ReflectOwnKeys;
if (R && typeof R.ownKeys === "function") {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys2(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys2(target) {
    return Object.getOwnPropertyNames(target);
  };
}
function ProcessEmitWarning(warning) {
  if (console && console.warn)
    console.warn(warning);
}
var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
  return value !== value;
};
function EventEmitter() {
  EventEmitter.init.call(this);
}
events.exports = EventEmitter;
events.exports.once = once;
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = void 0;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = void 0;
var defaultMaxListeners = 10;
function checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}
Object.defineProperty(EventEmitter, "defaultMaxListeners", {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
    }
    defaultMaxListeners = arg;
  }
});
EventEmitter.init = function() {
  if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
    this._events = /* @__PURE__ */ Object.create(null);
    this._eventsCount = 0;
  }
  this._maxListeners = this._maxListeners || void 0;
};
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
  }
  this._maxListeners = n;
  return this;
};
function _getMaxListeners(that) {
  if (that._maxListeners === void 0)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}
EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};
EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++)
    args.push(arguments[i]);
  var doError = type === "error";
  var events2 = this._events;
  if (events2 !== void 0)
    doError = doError && events2.error === void 0;
  else if (!doError)
    return false;
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      throw er;
    }
    var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
    err.context = er;
    throw err;
  }
  var handler = events2[type];
  if (handler === void 0)
    return false;
  if (typeof handler === "function") {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners2 = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners2[i], this, args);
  }
  return true;
};
function _addListener(target, type, listener, prepend) {
  var m;
  var events2;
  var existing;
  checkListener(listener);
  events2 = target._events;
  if (events2 === void 0) {
    events2 = target._events = /* @__PURE__ */ Object.create(null);
    target._eventsCount = 0;
  } else {
    if (events2.newListener !== void 0) {
      target.emit("newListener", type, listener.listener ? listener.listener : listener);
      events2 = target._events;
    }
    existing = events2[type];
  }
  if (existing === void 0) {
    existing = events2[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === "function") {
      existing = events2[type] = prepend ? [listener, existing] : [existing, listener];
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      w.name = "MaxListenersExceededWarning";
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }
  return target;
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};
function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}
function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: void 0, target, type, listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}
EventEmitter.prototype.once = function once2(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};
EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  checkListener(listener);
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list2, events2, position, i, originalListener;
  checkListener(listener);
  events2 = this._events;
  if (events2 === void 0)
    return this;
  list2 = events2[type];
  if (list2 === void 0)
    return this;
  if (list2 === listener || list2.listener === listener) {
    if (--this._eventsCount === 0)
      this._events = /* @__PURE__ */ Object.create(null);
    else {
      delete events2[type];
      if (events2.removeListener)
        this.emit("removeListener", type, list2.listener || listener);
    }
  } else if (typeof list2 !== "function") {
    position = -1;
    for (i = list2.length - 1; i >= 0; i--) {
      if (list2[i] === listener || list2[i].listener === listener) {
        originalListener = list2[i].listener;
        position = i;
        break;
      }
    }
    if (position < 0)
      return this;
    if (position === 0)
      list2.shift();
    else {
      spliceOne(list2, position);
    }
    if (list2.length === 1)
      events2[type] = list2[0];
    if (events2.removeListener !== void 0)
      this.emit("removeListener", type, originalListener || listener);
  }
  return this;
};
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners2, events2, i;
  events2 = this._events;
  if (events2 === void 0)
    return this;
  if (events2.removeListener === void 0) {
    if (arguments.length === 0) {
      this._events = /* @__PURE__ */ Object.create(null);
      this._eventsCount = 0;
    } else if (events2[type] !== void 0) {
      if (--this._eventsCount === 0)
        this._events = /* @__PURE__ */ Object.create(null);
      else
        delete events2[type];
    }
    return this;
  }
  if (arguments.length === 0) {
    var keys2 = Object.keys(events2);
    var key;
    for (i = 0; i < keys2.length; ++i) {
      key = keys2[i];
      if (key === "removeListener")
        continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners("removeListener");
    this._events = /* @__PURE__ */ Object.create(null);
    this._eventsCount = 0;
    return this;
  }
  listeners2 = events2[type];
  if (typeof listeners2 === "function") {
    this.removeListener(type, listeners2);
  } else if (listeners2 !== void 0) {
    for (i = listeners2.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners2[i]);
    }
  }
  return this;
};
function _listeners(target, type, unwrap) {
  var events2 = target._events;
  if (events2 === void 0)
    return [];
  var evlistener = events2[type];
  if (evlistener === void 0)
    return [];
  if (typeof evlistener === "function")
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}
EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};
EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};
EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === "function") {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};
EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events2 = this._events;
  if (events2 !== void 0) {
    var evlistener = events2[type];
    if (typeof evlistener === "function") {
      return 1;
    } else if (evlistener !== void 0) {
      return evlistener.length;
    }
  }
  return 0;
}
EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};
function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}
function spliceOne(list2, index) {
  for (; index + 1 < list2.length; index++)
    list2[index] = list2[index + 1];
  list2.pop();
}
function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}
function once(emitter, name2) {
  return new Promise(function(resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name2, resolver);
      reject(err);
    }
    function resolver() {
      if (typeof emitter.removeListener === "function") {
        emitter.removeListener("error", errorListener);
      }
      resolve([].slice.call(arguments));
    }
    eventTargetAgnosticAddListener(emitter, name2, resolver, { once: true });
    if (name2 !== "error") {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}
function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === "function") {
    eventTargetAgnosticAddListener(emitter, "error", handler, flags);
  }
}
function eventTargetAgnosticAddListener(emitter, name2, listener, flags) {
  if (typeof emitter.on === "function") {
    if (flags.once) {
      emitter.once(name2, listener);
    } else {
      emitter.on(name2, listener);
    }
  } else if (typeof emitter.addEventListener === "function") {
    emitter.addEventListener(name2, function wrapListener(arg) {
      if (flags.once) {
        emitter.removeEventListener(name2, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}
function arrayOrEmpty(input) {
  return Array.isArray(input) ? input : [];
}
const getQueryWithoutUrl = (query) => {
  const queryWithoutUrl = {};
  Object.keys(query).forEach((key) => {
    if (key === "url") {
      return;
    }
    queryWithoutUrl[key] = query[key];
  });
  return queryWithoutUrl;
};
const getUrlWithQuery = (url, query) => {
  let queryString = "";
  Object.keys(query).forEach((key) => {
    if (queryString) {
      queryString += "&";
    }
    queryString += `${key}=${encodeURIComponent(query[key])}`;
  });
  return `${url}?${queryString}`;
};
"production" === "development";
new events.exports.EventEmitter();
swiper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.use([swiper__WEBPACK_IMPORTED_MODULE_9__/* .Scrollbar */ .LW, swiper__WEBPACK_IMPORTED_MODULE_9__/* .Navigation */ .W_, swiper__WEBPACK_IMPORTED_MODULE_9__/* .Virtual */ .eZ]);
const ProductSlideItem = ({
  products: products2,
  identifier,
  isDesktopOrLargeDesktop,
  currentIndex,
  index,
  isActive: isActive2,
  isMobile
}) => {
  var _a, _b, _c, _d, _e, _f;
  const {
    ProductListItem
  } = useCMSConfig();
  const getScrollbar = (val) => {
    if (!val)
      return {};
    return {
      scrollbar: val
    };
  };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$3.lookBookRedesignItemProducts, `lookBookRedesignItemProducts-${identifier}-${index}`, {
      [styles$3.active]: currentIndex === index && isActive2
    }),
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$3.lookBookRedesignItemProductsCarousel),
      children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$3.arrow, !(((_a = arrayOrEmpty$1(products2)) == null ? void 0 : _a.length) > 4 && isDesktopOrLargeDesktop) ? styles$3.hide : ""),
        children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvArrow, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$3.icon, styles$3.prevIcon, `swiper-product-prev-${identifier}-${index}`)
        }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvArrow, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$3.icon, styles$3.nextIcon, `swiper-product-next-${identifier}-${index}`)
        })]
      }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
        virtual: true,
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$3.productSwiper, styles$3.thumbnailBar, {
          [styles$3.isCenter]: isDesktopOrLargeDesktop && ((_b = arrayOrEmpty$1(products2)) == null ? void 0 : _b.length) < 4 || !isDesktopOrLargeDesktop && ((_c = arrayOrEmpty$1(products2)) == null ? void 0 : _c.length) < 3
        }),
        slidesPerView: isDesktopOrLargeDesktop ? 4 : isMobile ? 2.27 : 2.38,
        navigation: {
          prevEl: ".swiper-product-prev-" + identifier + "-" + index,
          nextEl: ".swiper-product-next-" + identifier + "-" + index,
          disabledClass: styles$3.disabledClass
        },
        ...getScrollbar(isDesktopOrLargeDesktop ? ((_d = arrayOrEmpty$1(products2)) == null ? void 0 : _d.length) > 4 : ((_e = arrayOrEmpty$1(products2)) == null ? void 0 : _e.length) > 2),
        children: (_f = arrayOrEmpty$1(products2)) == null ? void 0 : _f.map((productItem2, productIndex) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
          className: styles$3.productSwiperSlide,
          children: ProductListItem({
            item: productItem2,
            index: productIndex,
            wrapperClassName: styles$3.productItem,
            isSlidePaginationHidden: !isDesktopOrLargeDesktop,
            isSlideNoSwiping: !isDesktopOrLargeDesktop
          })
        }, `${identifier}-${productItem2.id}-${productIndex}`))
      })]
    })
  });
};
const LookBookRedesign = ({
  config: config2,
  componentIndex
}) => {
  var _a;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
  const url = router.query.url.join("/");
  const routerData = getQueryWithoutUrl(router.query);
  const queryRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(routerData);
  const swiperIns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const device = useDeviceType();
  const isDesktopOrLargeDesktop = device.currentDevice === "desktop" || device.currentDevice === "large";
  const isMobile = device.currentDevice === "mobile";
  const {
    brandName,
    pageTitle,
    loadMore: loadMore2
  } = useCMSConfig();
  const addDynamicHeader = useDynamicHeader();
  const {
    homepageCTAOnClick
  } = useHomepageCTAOnClick(componentIndex);
  const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isActive2, setIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const listRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    allList,
    currentPage,
    totalPages,
    pageSize
  } = config2;
  const loadMoreRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const timerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const {
    data: lookBookRedesignList,
    nextPage,
    isLoading,
    getBeforeCurrentPageAllData,
    currentLookPage
  } = usePagination({
    loadMore: loadMore2,
    config: config2,
    currentPage,
    totalPages,
    getData: (config22) => config22.list
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!loadMoreRef.current)
      return;
    let loadMoreObserverValue = null;
    const loadMoreObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0)
        return;
      !isLoading && nextPage();
    }, {
      rootMargin: "0px 0px 200px 0px"
    });
    loadMoreObserver.observe(loadMoreRef.current);
    loadMoreObserverValue = loadMoreRef.current;
    return () => {
      if (!loadMoreObserverValue)
        return;
      loadMoreObserver.unobserve(loadMoreObserverValue);
    };
  }, [nextPage, isLoading]);
  const handleSlideClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((index) => {
    if (totalPages !== 1 && index + 1 > currentLookPage * pageSize) {
      const currentLookSlidePage = Math.ceil((index + 1) / pageSize);
      getBeforeCurrentPageAllData({
        page: currentLookSlidePage,
        callback: () => {
          const domId = `lookBookRedesignList-${config2.identifier}-${index}`;
          checkElementLoaded(domId, (element2) => {
            element2 == null ? void 0 : element2.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          });
        }
      });
      return;
    }
    const element = document.getElementById(`lookBookRedesignList-${config2.identifier}-${index}`);
    element == null ? void 0 : element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, [config2.identifier, currentLookPage, getBeforeCurrentPageAllData, pageSize, totalPages]);
  const imageAlt = brandName && pageTitle ? `${brandName} ${pageTitle}` : "";
  const handleClickItemTile = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((item2, index) => {
    var _a2;
    if (!((_a2 = arrayOrEmpty$1(item2 == null ? void 0 : item2.product)) == null ? void 0 : _a2.length)) {
      return;
    }
    setCurrentIndex(index);
    setIsActive((val) => currentIndex === index ? !val : true);
    if (Object.keys(window).includes("cms") && Object.prototype.toString.call(window.cms) === "[object Object]") {
      window.cms.bvLookBookRedesignList = "bvLookBookRedesignList";
    } else {
      window.cms = {};
      window.cms.bvLookBookRedesignList = "bvLookBookRedesignList";
    }
    const currentLookPage2 = totalPages !== 1 ? Math.ceil((index + 1) / pageSize) : 1;
    queryRef.current = {
      ...queryRef.current,
      cmsBlockId: config2.blockId,
      page: currentLookPage2,
      [`lookBookActive-${config2.identifier}`]: index + 1
    };
    const updatedUrl = getUrlWithQuery(url, queryRef.current);
    router.replace(updatedUrl, void 0, {
      scroll: false,
      shallow: true
    });
  }, [config2.blockId, config2.identifier, currentIndex, pageSize, totalPages]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a2;
    const activeLookIndex = (_a2 = router.query) == null ? void 0 : _a2[`lookBookActive-${config2.identifier}`];
    if (activeLookIndex) {
      setCurrentIndex(Number(activeLookIndex) - 1);
      setIsActive(true);
    } else {
      setCurrentIndex(null);
      setIsActive(false);
    }
  }, [config2, config2.identifier, router.query]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    timerRef.current = setTimeout(() => {
      var _a2;
      const productSwiperElement = document.querySelector(`#${getID(config2)} .lookBookRedesignItemProducts-${config2.identifier}-${currentIndex}`);
      const productSwiperElementHeight = (_a2 = productSwiperElement == null ? void 0 : productSwiperElement.getBoundingClientRect()) == null ? void 0 : _a2.height;
      productSwiperElementHeight && (productSwiperElement == null ? void 0 : productSwiperElement.scrollIntoView({
        behavior: "smooth",
        block: "end"
      }));
    }, 1500);
    return () => {
      timerRef.current && clearTimeout(timerRef.current);
    };
  }, [config2, currentIndex]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _a2, _b, _c;
    if (currentIndex === null) {
      return;
    }
    if (isActive2 === false) {
      if ((_a2 = queryRef.current) == null ? void 0 : _a2[`lookBookActive-${config2.identifier}`]) {
        (_b = queryRef.current) == null ? true : delete _b[`lookBookActive-${config2.identifier}`];
      }
      const updatedUrl = getUrlWithQuery(url, queryRef.current);
      router.replace(updatedUrl, void 0, {
        scroll: false,
        shallow: true
      });
      if ((_c = window == null ? void 0 : window.cms) == null ? void 0 : _c.bvLookBookRedesignList) {
        window.cms.bvLookBookRedesignList = "";
      }
    }
  }, [config2.identifier, currentIndex, isActive2]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    addDynamicHeader,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: getPaddingMarginStyle(config2, device.currentDevice),
      id: getID(config2),
      children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: styles$3.lookBookRedesign,
        children: [config2.productCarousel ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$3.lookBookRedesignCarousel,
          children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$3.arrow, !(((_a = arrayOrEmpty$1(allList)) == null ? void 0 : _a.length) > 10 && isDesktopOrLargeDesktop) ? styles$3.hide : ""),
            children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvArrow, {
              className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$3.icon, styles$3.prevIcon, `swiper-prev-${config2.identifier}`)
            }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgBvArrow, {
              className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$3.icon, styles$3.nextIcon, `swiper-next-${config2.identifier}`)
            })]
          }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
            className: styles$3.thumbnailBar,
            slidesPerView: "auto",
            onSwiper: (ins) => swiperIns.current = ins,
            navigation: {
              prevEl: ".swiper-prev-" + config2.identifier,
              nextEl: ".swiper-next-" + config2.identifier,
              disabledClass: styles$3.disabledClass
            },
            children: allList.map((item2, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
              className: styles$3.thumbnailItem,
              onClick: () => {
                handleSlideClick(index);
              },
              children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
                ratio: isDesktopOrLargeDesktop ? "139 / 208" : "144 / 216",
                children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LazyImage, {
                  alt: imageAlt,
                  src: item2.imageSource,
                  immediate: true,
                  className: styles$3.thumbnailImage
                })
              }), item2.lookName ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$3.lookName, styles$3.lookNameCarousel),
                dangerouslySetInnerHTML: {
                  __html: item2.lookName
                }
              }) : null]
            }, `${config2.identifier}-${index}`))
          })]
        }) : null, /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$3.lookBookRedesignGrid, {
            [styles$3.active]: isActive2
          }),
          ref: listRef,
          children: lookBookRedesignList.map((item2, index) => {
            var _a2;
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$3.lookBookRedesignItemTile, {
                  [styles$3.active]: currentIndex === index && isActive2,
                  [styles$3.cursorDefault]: ((_a2 = arrayOrEmpty$1(item2.product)) == null ? void 0 : _a2.length) <= 0
                }),
                id: `lookBookRedesignList-${config2.identifier}-${index}`,
                onClick: () => {
                  handleClickItemTile(item2, index);
                },
                children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
                  ratio: isDesktopOrLargeDesktop ? "448 / 672" : "375 / 562",
                  children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LazyImage, {
                    alt: imageAlt,
                    src: item2.imageSource,
                    immediate: true,
                    className: styles$3.thumbnailImage,
                    onClick: () => homepageCTAOnClick(imageAlt)
                  })
                }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: styles$3.lookBookRedesignItemTileDetail,
                  children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                    className: styles$3.lookName,
                    dangerouslySetInnerHTML: {
                      __html: item2.lookName
                    }
                  }), arrayOrEmpty$1(item2 == null ? void 0 : item2.product).length > 0 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                    children: currentIndex === index && isActive2 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgReduce, {
                      className: styles$3.operateIcon
                    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SvgPlus, {
                      className: styles$3.operateIcon
                    })
                  })]
                })]
              }), arrayOrEmpty$1(item2.product).length > 0 ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProductSlideItem, {
                products: item2.product,
                currentIndex,
                identifier: config2.identifier,
                isDesktopOrLargeDesktop,
                isMobile,
                index,
                isActive: isActive2
              }) : null]
            }, `${config2.identifier}-${item2.lookName}-${index}`);
          })
        })]
      }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        ref: loadMoreRef,
        className: styles$3.loadMoreWrapper,
        children: isLoading && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          children: "\u52A0\u8F7D\u4E2D..."
        })
      })]
    })
  });
};
const wrapper = "_wrapper_17kyl_18";
const row = "_row_17kyl_26";
const blockItem = "_blockItem_17kyl_38";
const center = "_center_17kyl_57";
const right = "_right_17kyl_61";
const cta$1 = "_cta_17kyl_65";
const blockText = "_blockText_17kyl_68";
const styles$2 = {
  wrapper,
  row,
  blockItem,
  center,
  right,
  cta: cta$1,
  blockText,
  "button-hover": "_button-hover_17kyl_1"
};
const BlocksComponent = ({
  componentIndex,
  config: config2
}) => {
  const {
    currentDevice,
    isDesktop
  } = useDeviceType();
  const containerCSS = getPaddingMarginStyle(config2, currentDevice);
  const BlockRowWrapper = ({
    rowContent
  }) => {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: styles$2.row,
      children: config2.list.map((item2, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$2.blockItem, isDesktop ? styles$2.desktop : styles$2.mobile),
          children: rowContent({
            item: item2,
            index
          })
        }, index);
      })
    });
  };
  if (!arrayOrEmpty$1(config2.list).length)
    return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    style: containerCSS,
    className: styles$2.wrapper,
    children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BlockRowWrapper, {
      rowContent: ({
        item: item2
      }) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: styles$2.blockInfo,
          children: [(item2 == null ? void 0 : item2.imageUrl) && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Link, {
              clickBehavior: item2.clickBehavior,
              children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                src: item2.imageUrl,
                className: styles$2.img,
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }
              })
            })
          }), item2.text.wording && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: styles$2.blockText,
            style: normalizeTextStyle(item2.text.style),
            dangerouslySetInnerHTML: {
              __html: item2.text.wording
            }
          })]
        });
      }
    }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BlockRowWrapper, {
      rowContent: ({
        item: item2
      }) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
          children: item2.cta.wording && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$2[config2.ctaAlignment]),
            children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BV_CTA, {
              className: styles$2.cta,
              clickBehavior: item2.clickBehavior,
              text: item2.cta.wording,
              style: normalizeTextStyle(item2.cta.style),
              onEvent: () => {
              },
              config: config2,
              type: item2.cta.template
            })
          })
        });
      }
    })]
  }, componentIndex);
};
({
  type: "Grid",
  identifiers: "unknow",
  gridString: JSON.stringify({})
});
({
  type: "Grid",
  identifiers: "unknow",
  gridString: JSON.stringify([])
});
const keys = Object.keys;
const toLowerCase = (value) => {
  if (typeof value !== "string") {
    return String(value);
  }
  return value.toLowerCase();
};
const isRelativeValue = (value) => /\d(%|vh|vw|px|rpx)$/g.test(value);
const countRelativeValue = (value) => {
  const result = {
    isRelative: false,
    endChar: "",
    value
  };
  if (typeof result.value === "string" && result.value.includes("rpx")) {
    result.value = value.replace(/rpx/gi, "px");
  }
  if (isRelativeValue(value)) {
    const isPercentage = /\d%$/g.test(value);
    result.isRelative = true;
    result.endChar = isPercentage ? value.substr(-1) : value.substr(-2);
    result.value = isPercentage ? value.slice(0, -1) : value.slice(0, -2);
    return result;
  }
  return result;
};
const getContainerSize = ({ height, row: row2, rowGap }) => {
  const isPercentage = /\d%$/g.test(height);
  const _height = countRelativeValue(height);
  if (_height.value === "auto") {
    return { height: _height.value };
  }
  const _gapRelative = countRelativeValue(rowGap);
  const _heightValue = isPercentage ? 100 / row2 : _height.value / row2;
  const _countGap = _gapRelative.value - _gapRelative.value / row2;
  const _value = `calc(${_height.isRelative ? [_heightValue, _height.endChar].join("") : [_heightValue, "px"].join("")} - ${_countGap}${_gapRelative.endChar || "px"})`;
  return {
    height: _value
  };
};
const getStyleSize = (property) => {
  return isRelativeValue(property) ? property : `${property}${property === "auto" ? "" : "px"}`;
};
const getPreviewStyle = ({ x, y, row: row2, column, horizontal, vertical }, { background }) => {
  return {
    area: {
      gridArea: `${y + 1} / ${x + 1} / ${y + row2 + 1} / ${x + column + 1}`
    },
    position: {
      display: "flex",
      justifyContent: horizontal || "center",
      alignItems: vertical || "center",
      background: background || "transparent"
    }
  };
};
const convertStyle = (styles2) => {
  if (!styles2 || "object" !== typeof styles2 || !keys(styles2).length) {
    return {};
  }
  keys(styles2).forEach((propertyName) => {
    styles2[propertyName] = getStyleSize(styles2[propertyName]);
  });
  return styles2;
};
const getGapValue = (value) => isRelativeValue(value) ? value : `${value || 0}px`;
const handleGridData = (item2, contextComponentsMap) => {
  if (!item2 || !item2.boxSizing) {
    return { gridConfig: { list: [] } };
  }
  const { boxSizing, gridConfig } = item2;
  const width = boxSizing.width || boxSizing.gridWidth;
  const height = boxSizing.height || boxSizing.gridHeight;
  if (boxSizing.gridWidth) {
    delete boxSizing.gridWidth;
    delete boxSizing.gridHeight;
    boxSizing.width = width;
    boxSizing.height = height;
  }
  const gridGaps = (gridConfig.gridGapCache ? gridConfig.gridGapCache.replace(/\，/g, ",").split(",") : [gridConfig.gridGap, gridConfig.gridGap]).map((item22) => {
    if (typeof item22 === "string" && item22.includes("rpx")) {
      return item22.replace(/rpx/gi, "px");
    }
    return item22;
  });
  const boxSize = getContainerSize({
    height,
    row: gridConfig.gridRow,
    rowGap: gridGaps[0]
  });
  item2.containerStyle = convertStyle(boxSizing);
  item2.gridContainerStyle = {
    rowGap: getGapValue(gridGaps[0]),
    columnGap: getGapValue(gridGaps[1] || gridGaps[0]),
    gridTemplateColumns: `repeat(${gridConfig.gridColumn}, 1fr)`,
    gridTemplateRows: boxSize.height === "auto" ? "auto" : `repeat(${gridConfig.gridRow}, ${boxSize.height})`
  };
  if (gridConfig.borderColor) {
    const cssVarLineOffset = (gap) => {
      if (!gap || gap === "0" || gap === "0px" || gap === "px") {
        return "1px";
      }
      return gap;
    };
    item2.gridContainerStyle["--line-offset-row"] = `calc(${cssVarLineOffset(item2.gridContainerStyle.rowGap)})`;
    item2.gridContainerStyle["--line-offset-column"] = `calc(${cssVarLineOffset(item2.gridContainerStyle.columnGap)})`;
    item2.gridContainerStyle["--grid-border-color"] = gridConfig.borderColor;
  }
  gridConfig.list.forEach((item22) => {
    const selectComp = contextComponentsMap[item22.value];
    const isSimpleComp = selectComp && /^(image|video|cta|paragraph|horizontalsingle|product|slider|visualslideshow)/.test(toLowerCase(selectComp.comp.type));
    if (item22.value && isSimpleComp) {
      const itemStyle = getPreviewStyle(item22, gridConfig);
      item22.gridItemStyle = itemStyle.area;
      item22.positionStyle = itemStyle.position;
      item22.components = [selectComp.comp];
      selectComp.innerGrid = true;
    }
  });
  return item2;
};
const filterAndMapToGridComponent = (componentList) => {
  if (!componentList || componentList.length === 0) {
    return [];
  }
  const tabContainers = [];
  const contextComponentsMap = {};
  let gridComponents = [];
  componentList.forEach((comp) => {
    const compType = toLowerCase(comp.type);
    if (compType === "grid") {
      gridComponents.push(comp);
    } else {
      compType === "tabcontainer" && tabContainers.push(comp);
      contextComponentsMap[comp.identifier] = {
        comp,
        innerGrid: false
      };
    }
  });
  tabContainers.forEach((comp) => {
    comp.list.length && comp.list.forEach((subComp) => {
      (subComp == null ? void 0 : subComp.components.length) && subComp.components.forEach((elem) => {
        if (toLowerCase(elem.type) === "grid") {
          gridComponents.push(elem);
        } else {
          contextComponentsMap[elem.identifier] = {
            comp: elem,
            innerGrid: false
          };
        }
      });
    });
  });
  try {
    gridComponents = gridComponents.map((item2) => {
      const _gridString = typeof item2.gridString === "string" ? JSON.parse(item2.gridString) : item2.gridString;
      item2.gridString = Array.isArray(_gridString) ? _gridString.map((subItem2) => {
        const _temp = subItem2.gridData ? subItem2 : _gridString.find((item22) => item22.value === "desktop");
        subItem2.gridData = handleGridData(_temp.gridData, contextComponentsMap);
        return subItem2;
      }) : handleGridData(_gridString, contextComponentsMap);
      return item2;
    });
  } catch (e) {
    console.log("[Grid][filterAndMapToGridComponent]", e);
  }
  return componentList.filter((comp) => toLowerCase(comp.type) === "grid" || contextComponentsMap[comp.identifier] && !contextComponentsMap[comp.identifier].innerGrid);
};
const ProductComponent = ({
  config: config2
}) => {
  const device = useDeviceType();
  const {
    ProductListItem
  } = useCMSConfig();
  const addDynamicHeader = useDynamicHeader();
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DynamicHeaderContainer, {
    headerChanging: config2.headerChanging,
    headerChangingOffset: config2.headerChangingOffset,
    currentDevice: device.currentDevice,
    addDynamicHeader,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: getPaddingMarginStyle(config2, device.currentDevice),
      id: getID(config2),
      children: ProductListItem({
        item: config2.products[0],
        index: 1,
        isNameVisible: config2.productStatus.productName,
        isPriceVisible: config2.productStatus.price,
        isColorVisible: config2.productStatus.color,
        isTagVisible: config2.productStatus.tag
      })
    })
  });
};
const fullWidthFullHeight = "_fullWidthFullHeight_1misx_18";
const swiper = "_swiper_1misx_19";
const swiperSlide = "_swiperSlide_1misx_20";
const ysl = "_ysl_1misx_62";
const amq = "_amq_1misx_104";
const styles$1 = {
  fullWidthFullHeight,
  swiper,
  swiperSlide,
  ysl,
  amq,
  "button-hover": "_button-hover_1misx_1"
};
swiper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP.use([swiper__WEBPACK_IMPORTED_MODULE_9__/* .EffectCreative */ .gI, swiper__WEBPACK_IMPORTED_MODULE_9__/* .Autoplay */ .pt, swiper__WEBPACK_IMPORTED_MODULE_9__/* .Pagination */ .tl]);
const SliderContainer = ({
  isFullHeight,
  children,
  ratioOfImage,
  isGrid,
  config: config2
}) => {
  const windowHeight = useWindowHeightPageScrollDisableRefresh();
  const fullHeightStyle = isGrid ? {
    height: "100%"
  } : {
    height: windowHeight + "px"
  };
  const device = useDeviceType();
  const baseStyle = getPaddingMarginStyle(config2, device.currentDevice);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: isFullHeight ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cmsSliderWrapperFullHeight",
      style: {
        ...fullHeightStyle,
        ...baseStyle
      },
      children
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "cmsSliderWrapperAspectRatioBox",
      style: baseStyle,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AspectRatioBox, {
        ratio: ratioOfImage.replace(":", "/"),
        children
      })
    })
  });
};
const Slider = ({
  items,
  componentIndex,
  config: config2,
  isGrid
}) => {
  var _a, _b;
  const {
    displayMode,
    autoplay,
    autoplayDuration,
    ratioOfImage,
    sliderBarHeight
  } = config2;
  const {
    brand
  } = useCMSConfig();
  const [sliderCurrentIndex, setSliderCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const isFullHeight = displayMode === "fullWidthFullHeight";
  const device = useDeviceType();
  const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleSwiperChange = (swiper2) => {
    setSliderCurrentIndex(swiper2.realIndex);
  };
  const swiperStyle = {
    "--swiper-pagination-bottom": sliderBarHeight || "initial"
  };
  if (brand === "bv")
    return null;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(SliderContainer, {
    isFullHeight,
    ratioOfImage,
    isGrid,
    config: config2,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .Swiper */ .tq, {
      id: getID(config2),
      style: swiperStyle,
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$1.swiper, styles$1[brand]),
      loop: ((_a = config2 == null ? void 0 : config2.slides) == null ? void 0 : _a.length) > 1,
      allowTouchMove: true,
      onSlideChange: handleSwiperChange,
      onSwiper: (swiper2) => {
        swiperRef.current = swiper2;
      },
      autoplay: !!autoplay ? {
        delay: autoplayDuration ? Number(autoplayDuration) : 3e3,
        stopOnLastSlide: false,
        disableOnInteraction: false
      } : false,
      pagination: {
        clickable: true
      },
      focusableElements: "input, select, option, textarea, button, label",
      children: (_b = config2 == null ? void 0 : config2.slides) == null ? void 0 : _b.map((slide2, index) => {
        var _a2;
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(swiper_react__WEBPACK_IMPORTED_MODULE_10__/* .SwiperSlide */ .o5, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$1.swiperSlide),
          children: items ? items(slide2, index) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
            children: slide2.type === ComponentType.image ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Image$1, {
              config: slide2,
              wrapperClassName: slide2.template === "fullHeight" ? styles$1.fullWidthFullHeight : "",
              source: "sliderContainer",
              componentIndex
            }) : slide2.type === ComponentType.video ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Video$1, {
              config: slide2,
              className: device.currentDevice && ((_a2 = slide2[device.currentDevice]) == null ? void 0 : _a2.height) === "fullHeight" ? styles$1.fullWidthFullHeight : "",
              source: "sliderContainer",
              noHeader: true,
              currentActive: sliderCurrentIndex === index,
              componentIndex,
              isNativeControlBarCustomBottom: false
            }) : null
          })
        }, index);
      })
    })
  });
};
const CMS = (props2) => {
  var _a;
  const {
    className,
    components,
    footer: footer2,
    stateToRefreshAutoScroll,
    waterMarkContainerRef,
    waterMarkContainerRefSecond,
    customComponent,
    isGrid = false,
    ...CMSProviderConfig
  } = props2;
  const {
    brand
  } = useCMSConfig();
  const device = useDeviceType();
  console.log("\u{1F680} ~ CMS ~ brand:", brand);
  const verticalPhotoGalleryComponentConfig = arrayOrEmpty(components)[0] && components[0].type === ComponentType.verticalPhotoGallery ? components[0] : null;
  const componentsWithoutVerticalPhotoGallery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const hasGrid = arrayOrEmpty(components).some((item2) => item2.type.toLocaleLowerCase() === "grid");
    const cmsComponents = hasGrid ? filterAndMapToGridComponent(arrayOrEmpty(components)) : arrayOrEmpty(components);
    return cmsComponents.filter((component, index) => !(component.type === ComponentType.verticalPhotoGallery && index === 0));
  }, [components]);
  if (!components || !components.length) {
    return null;
  }
  const renderComponents = (components2, shimNum = 0) => {
    if (!components2.length)
      return;
    return components2.map((comp, index) => {
      switch (comp.type) {
        case ComponentType.video:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Video$1, {
            componentIndex: index + shimNum,
            config: comp,
            isGrid
          }, index);
        case ComponentType.verticalPhotoGallery:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(VerticalPhotoGallery, {
            config: comp,
            componentIndex: index + shimNum,
            stateToRefreshAutoScroll
          }, index);
        case ComponentType.Grid:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(GridComponent, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.paragraphColumns2:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Paragraph$1, {
            config: comp
          }, index);
        case ComponentType.CTA:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CTA, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.image:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Image$1, {
            componentIndex: index + shimNum,
            config: comp,
            isGrid
          }, index);
        case ComponentType.imageList:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ImageList, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.visualSlideshow:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(VisualSlideShow, {
            config: comp,
            componentIndex: index + shimNum,
            stateToRefreshAutoScroll,
            isGrid
          }, index);
        case ComponentType.productList:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProductList, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.productListWithAssets:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProductListWithAssets$1, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.soundtrack:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Soundtrack, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.bioStory:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BioStory, {
            config: comp
          }, index);
        case ComponentType.iframe:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Iframe, {
            config: comp
          }, index);
        case ComponentType.newLook:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NewLook, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.archiveLook:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ArchiveLook, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.paragraph:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Paragraph, {
            config: comp
          }, index + shimNum);
        case ComponentType.newsletterSubscription:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(NewsletterSubscription, {
            config: comp
          }, index + shimNum);
        case ComponentType.visualBanner:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(VisualBanner, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.textBanner:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TextBanner, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.mediaList:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MediaList, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.shopTheCollection:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ShopTheCollection, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.rowOf3Blocks:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(RowThreeBlock, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.flexible:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Flexible$1, {
            config: comp
          }, index + shimNum);
        case ComponentType.imageWithHotArea:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ImageWithHotArea, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.imageWithTextList:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ImageWithTextList$1, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.dualityBanner:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DualityBanner$1, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.lookBookComponent:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LookBook, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.lookBook:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LookBookRedesign, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.blocksComponent:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BlocksComponent, {
            componentIndex: index + shimNum,
            config: comp
          }, index);
        case ComponentType.product:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProductComponent, {
            config: comp
          }, index);
        case ComponentType.slider:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Slider, {
            componentIndex: index + shimNum,
            config: comp,
            isGrid
          }, index);
        case ComponentType.collectionLookComponent:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            children: customComponent == null ? void 0 : customComponent({
              componentIndex: index + shimNum,
              config: {
                ...comp
              }
            })
          }, index);
        default:
          return null;
      }
    });
  };
  const isFixedOnMobileFooter = components.length === 1 && [ComponentType.visualSlideshow].includes(components[0].type);
  const isFixedFooter = components.length === 1 && [ComponentType.soundtrack].includes(components[0].type);
  if (!device.currentDevice)
    return null;
  const cmsInGridStyle = isGrid && arrayOrEmpty(components).length === 1 && (brand === "bal" && components[0].type === ComponentType.slider && components[0].displayMode === "fullWidthFullHeight" || brand === "bv" && components[0].type === ComponentType.visualSlideshow && ((_a = components[0].multiDisplayMode) == null ? void 0 : _a[device.currentDevice].displayMode) === "fullWidthFullHeight" || components[0].type === ComponentType.image && components[0].template === "fullHeight" || components[0].type === ComponentType.video && components[0][device.currentDevice].height === "fullHeight") ? {
    height: "100%"
  } : {};
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CMSConfigProvider, {
    ...CMSProviderConfig,
    cmsData: components,
    componentsRender: renderComponents,
    children: verticalPhotoGalleryComponentConfig ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(VerticalPhotoGallery, {
      className: styles$7.verticalPhotoGallery,
      config: verticalPhotoGalleryComponentConfig,
      stateToRefreshAutoScroll,
      footer: footer2,
      waterMarkContainerRef,
      waterMarkContainerRefSecond,
      children: renderComponents(componentsWithoutVerticalPhotoGallery, 1)
    }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      id: prefix,
      className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$7.cms, className),
      style: cmsInGridStyle,
      children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        ref: waterMarkContainerRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$7.componentsWrap, "componentsWrap"),
        style: cmsInGridStyle,
        children: renderComponents(componentsWithoutVerticalPhotoGallery)
      }), !!components.length && footer2 && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles$7.footer, {
          [styles$7.fixedOnMobileFooter]: isFixedOnMobileFooter,
          [styles$7.fixed]: isFixedFooter
        }),
        children: footer2
      })]
    })
  });
};
const componentGrid = "_componentGrid_1v7ua_18";
const gridContainer = "_gridContainer_1v7ua_22";
const gridItem = "_gridItem_1v7ua_28";
const gridBorderItem = "_gridBorderItem_1v7ua_32";
const emptyComponent = "_emptyComponent_1v7ua_56";
const gridBorderShadow = "_gridBorderShadow_1v7ua_64";
const styles = {
  componentGrid,
  gridContainer,
  gridItem,
  gridBorderItem,
  emptyComponent,
  gridBorderShadow,
  "button-hover": "_button-hover_1v7ua_1"
};
const GridComponent = (props2) => {
  const {
    config: config2,
    CMSComponent
  } = props2;
  const {
    brand,
    bannerHeight,
    ...CMSProviderConfig
  } = useCMSConfig();
  const device = useDeviceType();
  const [gridComponentConfig, setGridComponentConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    containerStyle: {},
    gridContainerStyle: {},
    gridConfig: {
      list: [],
      borderColor: ""
    }
  });
  const updateList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (!Array.isArray(config2.gridString) && (config2 == null ? void 0 : config2.gridString.length)) {
      return;
    }
    const type = device.currentDevice && device.currentDevice === DeviceTypeEnum.LARGE ? "largeDesktop" : device.currentDevice || DeviceTypeEnum.DESKTOP;
    const targetConfig = config2.gridString.find((item2) => item2.value === type && item2.gridData.gridConfig.list.length);
    const desktopConfig = config2.gridString.find((item2) => item2.value === DeviceTypeEnum.DESKTOP && item2.gridData.gridConfig.list.length);
    const currentConfig = targetConfig || desktopConfig;
    (currentConfig == null ? void 0 : currentConfig.gridData) && setGridComponentConfig(currentConfig.gridData);
  }, [device.currentDevice, config2]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    updateList();
  }, [updateList]);
  if (!config2 || !config2.gridString) {
    return null;
  }
  const {
    containerStyle,
    gridContainerStyle,
    gridConfig
  } = gridComponentConfig;
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: styles.componentGrid,
    style: containerStyle,
    children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: styles.gridContainer,
      style: gridContainerStyle,
      children: gridConfig.list.map((item2, index) => {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles.gridItem, gridConfig.borderColor ? styles.gridBorderItem : "", !item2.components || !item2.components.length ? styles.emptyComponent : ""),
          style: item2.gridItemStyle,
          children: [gridConfig.borderColor ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1__(styles.gridBorderShadow, !item2.components || !item2.components.length ? styles.emptyComponent : "")
          }) : null, /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
            className: "grid-cms-wrapper",
            style: item2.positionStyle,
            children: CMSComponent ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CMSComponent, {
              ...CMSProviderConfig,
              ...item2,
              brand,
              bannerHeight,
              isGrid: true
            }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CMS, {
              ...CMSProviderConfig,
              components: item2.components,
              brand,
              bannerHeight,
              isGrid: true
            })
          })]
        }, index);
      })
    })
  });
};
function useMemoizedFn(fn) {
  const fnRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn);
  fnRef.current = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => fn, [fn]);
  const memoizedFn = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  if (!memoizedFn.current) {
    memoizedFn.current = function(...args) {
      return fnRef.current.apply(this, args);
    };
  }
  return memoizedFn.current;
}
const verticalPhotoGallery = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const paragraphColumns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const cta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const imageList = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const image = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const bioStory = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const iframe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const newLook = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const archiveLook = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const paragraph = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const newsletterSubscription = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const textBanner = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const mediaList = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const shopTheCollection = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const rowOf3Blocks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const flexible = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const imageWithHotArea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const imageWithTextList = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var Template = /* @__PURE__ */ ((Template2) => {
  Template2["YslPrimary"] = "yslPrimary";
  Template2["YslLink"] = "yslLink";
  Template2["Text"] = "text";
  return Template2;
})(Template || {});
var DisplayMode = /* @__PURE__ */ ((DisplayMode2) => {
  DisplayMode2["FullWidthFullHeight"] = "fullWidthFullHeight";
  DisplayMode2["FullWidthHeightAuto"] = "fullWidthHeightAuto";
  return DisplayMode2;
})(DisplayMode || {});
var SliderType$1 = /* @__PURE__ */ ((SliderType2) => {
  SliderType2["Image"] = "image";
  SliderType2["Video"] = "video";
  return SliderType2;
})(SliderType$1 || {});
var PlayMode$1 = /* @__PURE__ */ ((PlayMode2) => {
  PlayMode2["AutoPlay"] = "autoPlay";
  PlayMode2["ManuallyPlay"] = "manuallyPlay";
  return PlayMode2;
})(PlayMode$1 || {});
var SourceType$1 = /* @__PURE__ */ ((SourceType2) => {
  SourceType2["Brightcove"] = "brightcove";
  SourceType2["Iframe"] = "iframe";
  SourceType2["Local"] = "local";
  return SourceType2;
})(SourceType$1 || {});
var SlideTemplate$1 = /* @__PURE__ */ ((SlideTemplate2) => {
  SlideTemplate2["DoubleContent"] = "doubleContent";
  SlideTemplate2["FullWidth"] = "fullWidth";
  SlideTemplate2["SingleContent"] = "singleContent";
  return SlideTemplate2;
})(SlideTemplate$1 || {});
const editableContent = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Template,
  DisplayMode,
  SliderType: SliderType$1,
  PlayMode: PlayMode$1,
  SourceType: SourceType$1,
  SlideTemplate: SlideTemplate$1
}, Symbol.toStringTag, { value: "Module" }));
const secondMenu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const productCards = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const redirection = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const horizontalSingle = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var DesktopDisplayRuleType = /* @__PURE__ */ ((DesktopDisplayRuleType2) => {
  DesktopDisplayRuleType2["largeRightSmallLeft"] = "largeRightSmallLeft";
  DesktopDisplayRuleType2["largeLeftSmallRight"] = "largeLeftSmallRight";
  return DesktopDisplayRuleType2;
})(DesktopDisplayRuleType || {});
var MobileDisplayRuleType = /* @__PURE__ */ ((MobileDisplayRuleType2) => {
  MobileDisplayRuleType2["largeCenterSmallLeft"] = "largeCenterSmallLeft";
  MobileDisplayRuleType2["largeCenterSmallRight"] = "largeCenterSmallRight";
  MobileDisplayRuleType2["largeCenterSmallCenter"] = "largeCenterSmallCenter";
  return MobileDisplayRuleType2;
})(MobileDisplayRuleType || {});
const lookContent = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DesktopDisplayRuleType,
  MobileDisplayRuleType
}, Symbol.toStringTag, { value: "Module" }));
const visualCard = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const editorTimeline = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const editorialSquare = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var SliderType = /* @__PURE__ */ ((SliderType2) => {
  SliderType2["Image"] = "image";
  SliderType2["Video"] = "video";
  return SliderType2;
})(SliderType || {});
const editorStory = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SliderType
}, Symbol.toStringTag, { value: "Module" }));
var TitleStyle = /* @__PURE__ */ ((TitleStyle2) => {
  TitleStyle2["LookCounter"] = "lookCounter";
  TitleStyle2["Text"] = "text";
  return TitleStyle2;
})(TitleStyle || {});
const lookCarousel = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TitleStyle
}, Symbol.toStringTag, { value: "Module" }));
const recommendProducts = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var AssetType = /* @__PURE__ */ ((AssetType2) => {
  AssetType2["Image"] = "image";
  AssetType2["Video"] = "video";
  return AssetType2;
})(AssetType || {});
var PlayMode = /* @__PURE__ */ ((PlayMode2) => {
  PlayMode2["AutoPlay"] = "autoPlay";
  PlayMode2["ManuallyPlay"] = "manuallyPlay";
  return PlayMode2;
})(PlayMode || {});
var SourceType = /* @__PURE__ */ ((SourceType2) => {
  SourceType2["Brightcove"] = "brightcove";
  SourceType2["Local"] = "local";
  return SourceType2;
})(SourceType || {});
var SlideTemplate = /* @__PURE__ */ ((SlideTemplate2) => {
  SlideTemplate2["DoubleContent"] = "doubleContent";
  SlideTemplate2["SingleContent"] = "singleContent";
  return SlideTemplate2;
})(SlideTemplate || {});
const editorialAccountContent = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssetType,
  PlayMode,
  SourceType,
  SlideTemplate
}, Symbol.toStringTag, { value: "Module" }));
const collectionLook = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var ProductTemplate = /* @__PURE__ */ ((ProductTemplate2) => {
  ProductTemplate2["YSL_DEFAULT"] = "yslDefault";
  ProductTemplate2["YSL_PLP"] = "yslPLP";
  return ProductTemplate2;
})(ProductTemplate || {});
const product = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProductTemplate
}, Symbol.toStringTag, { value: "Module" }));
const slider = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const version = () => createLog(prefix)("version:", "2.188.1", " hash:", "f27e26");
version();

//# sourceMappingURL=index.js.map


/***/ })

}]);