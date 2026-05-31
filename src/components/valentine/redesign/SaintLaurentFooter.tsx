"use client";

import { type Lang } from "@/lib/use-language";

const content = {
  en: {
    shippingTo: "Shipping To",
    region: "United States $ / EN >",
    clientService: "Client Service",
    shippingReturns: "Shipping & Returns",
    trackOrder: "Track Order",
    returnOrder: "Return Your Order",
    appointment: "Make an Appointment >",
    legalNotices: "Legal Notices",
    cookiesSettings: "Cookies Settings and Do Not Sell or Share",
    cookiePolicy: "Cookie Policy",
    accessibility: "Accessibility",
    career: "Career",
    newsletter: "Subscribe to the Newsletter >",
    copyright: "© 2026 Saint Laurent — Qixi Campaign Demo",
    subtitle: "Next.js editorial commerce prototype",
  },
  zh: {
    shippingTo: "配送至",
    region: "中国大陆 ¥ / 中文 >",
    clientService: "客户服务",
    shippingReturns: "配送与退货",
    trackOrder: "追踪订单",
    returnOrder: "退货申请",
    appointment: "预约到店 >",
    legalNotices: "法律声明",
    cookiesSettings: "Cookie 设置及数据共享选项",
    cookiePolicy: "Cookie 政策",
    accessibility: "无障碍访问",
    career: "加入我们",
    newsletter: "订阅品牌通讯 >",
    copyright: "© 2026 圣罗兰 — 七夕限定活动",
    subtitle: "Next.js 品牌电商原型",
  },
};

// Saint Laurent-style editorial footer. Static, full-width, bottom of page only.
export function SaintLaurentFooter({ lang }: { lang: Lang }) {
  const T = content[lang];

  return (
    <footer className="vl-ed-footer" aria-label="Site footer">
      <div className="vl-ed-footer-grid">
        <section className="vl-ed-footer-col">
          <h3 className="vl-ed-footer-title">{T.shippingTo}</h3>
          <button className="vl-ed-footer-link" type="button">{T.region}</button>
        </section>

        <section className="vl-ed-footer-col">
          <h3 className="vl-ed-footer-title">{T.clientService}</h3>
          <ul className="vl-ed-footer-list">
            <li><button className="vl-ed-footer-link" type="button">{T.shippingReturns}</button></li>
            <li><button className="vl-ed-footer-link" type="button">{T.trackOrder}</button></li>
            <li><a className="vl-ed-footer-link" href="tel:+16468891961">+1 646 889 1961</a></li>
            <li><button className="vl-ed-footer-link" type="button">{T.returnOrder}</button></li>
            <li><button className="vl-ed-footer-link" type="button">{T.appointment}</button></li>
          </ul>
        </section>

        <section className="vl-ed-footer-col">
          <h3 className="vl-ed-footer-title">{T.legalNotices}</h3>
          <ul className="vl-ed-footer-list">
            <li><button className="vl-ed-footer-link" type="button">{T.cookiesSettings}</button></li>
            <li><button className="vl-ed-footer-link" type="button">{T.cookiePolicy}</button></li>
            <li><button className="vl-ed-footer-link" type="button">{T.accessibility}</button></li>
            <li><button className="vl-ed-footer-link" type="button">{T.career}</button></li>
          </ul>
        </section>

        <section className="vl-ed-footer-col">
          <button className="vl-ed-footer-link vl-ed-footer-link--strong" type="button">
            {T.newsletter}
          </button>
        </section>
      </div>

      <div className="vl-ed-footer-legal">
        <span>{T.copyright}</span>
        <span>{T.subtitle}</span>
      </div>
    </footer>
  );
}
