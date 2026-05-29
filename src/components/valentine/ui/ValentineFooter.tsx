"use client";

import { useValentine } from "../ValentineContext";

export function ValentineFooter() {
  const { setActiveSection } = useValentine();
  const serviceLinks = ["Client Service", "Delivery", "Returns", "Contact us", "Track order", "Store Locator", "Privacy policy"];

  return (
    <footer className="site-footer valentine-footer">
      <div className="footer-row">
        <span className="footer-region">Shipping to: Mainland China</span>
        <span className="footer-sep" aria-hidden="true" />
        {serviceLinks.map((link) => (
          <button key={link} type="button" onClick={() => setActiveSection("services-section")}>
            {link}
          </button>
        ))}
      </div>
      <div className="footer-legal">
        <span>© 2026 Saint Laurent Qixi Campaign Demo</span>
        <span>Next.js editorial commerce prototype</span>
      </div>
    </footer>
  );
}
