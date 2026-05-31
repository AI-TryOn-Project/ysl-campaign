export const i18n = {
  en: {
    // nav
    highlights: "Highlights",
    women: "Women",
    men: "Men",
    gifts: "Gifts",
    laMaison: "La Maison",
    services: "Services",
    login: "Login",
    slProductions: "SL Productions",
    riveDroite: "Rive Droite",
    // home
    banner: "Complimentary standard shipping and returns. The Qixi Gift Edit is now live.",
    exploreNow: "Explore Now",
    homeCaption: "SAINT LAURENT · QIXI 2026",
    exploreEdit: "Explore the Qixi Edit",
    // slides
    womenFall: "Women's Fall 26",
    springSummer: "Spring Summer 26",
    menSummer: "Men's Summer 26",
    riveDroiteSlide: "Rive Droite",
    enterEdit: "Enter the Qixi Gift Edit",
    exploreGifts: "Explore Gifts for Him",
    exploreInspiration: "Explore Inspiration",
    // valentine
    campaignTitle: "Saint Laurent Qixi Campaign",
    heroTitle: "Undeniably Yours",
    heroSubtitle: "For a love that needs no definition",
    heroScroll: "Explore the Qixi Edit",
    qixiHers: "Qixi, Undeniably Hers",
    qixiHis: "Qixi, Unmistakably His",
    viewCollection: "View Collection",
    view: "View",
    selectedForQixi: "Selected for Qixi",
    // footer / misc
    closeNotification: "Close notification",
  },
  zh: {
    // nav
    highlights: "精选",
    women: "女士",
    men: "男士",
    gifts: "礼品",
    laMaison: "品牌故事",
    services: "服务",
    login: "登录",
    slProductions: "圣罗兰影业",
    riveDroite: "右岸精品店",
    // home
    banner: "免费标准配送及退货。七夕礼品特辑现已上线。",
    exploreNow: "立即探索",
    homeCaption: "圣罗兰 · 七夕 2026",
    exploreEdit: "探索七夕特辑",
    // slides
    womenFall: "女士 2026 秋季",
    springSummer: "2026 春夏系列",
    menSummer: "男士 2026 夏季",
    riveDroiteSlide: "右岸精品店",
    enterEdit: "进入七夕礼品特辑",
    exploreGifts: "探索男士礼品",
    exploreInspiration: "发现灵感",
    // valentine
    campaignTitle: "圣罗兰七夕限定",
    heroTitle: "无可取代，只为你",
    heroSubtitle: "献给无需定义的爱",
    heroScroll: "探索七夕特辑",
    qixiHers: "七夕 · 专属于她",
    qixiHis: "七夕 · 专属于他",
    viewCollection: "查看系列",
    view: "查看",
    selectedForQixi: "七夕臻选",
    // footer / misc
    closeNotification: "关闭通知",
  },
} as const;

export type I18nKey = keyof typeof i18n.en;
