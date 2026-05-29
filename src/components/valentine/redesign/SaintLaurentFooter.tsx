"use client";

// Saint Laurent-style editorial footer. Static, full-width, bottom of page only.
export function SaintLaurentFooter() {
  return (
    <footer className="vl-ed-footer" aria-label="Site footer">
      <div className="vl-ed-footer-grid">
        <section className="vl-ed-footer-col">
          <h3 className="vl-ed-footer-title">Shipping To</h3>
          <button className="vl-ed-footer-link" type="button">
            United States $ / EN &gt;
          </button>
        </section>

        <section className="vl-ed-footer-col">
          <h3 className="vl-ed-footer-title">Client Service</h3>
          <ul className="vl-ed-footer-list">
            <li><button className="vl-ed-footer-link" type="button">Shipping &amp; Returns</button></li>
            <li><button className="vl-ed-footer-link" type="button">Track Order</button></li>
            <li><a className="vl-ed-footer-link" href="tel:+16468891961">+1 646 889 1961</a></li>
            <li><button className="vl-ed-footer-link" type="button">Return Your Order</button></li>
            <li><button className="vl-ed-footer-link" type="button">Make an Appointment &gt;</button></li>
          </ul>
        </section>

        <section className="vl-ed-footer-col">
          <h3 className="vl-ed-footer-title">Legal Notices</h3>
          <ul className="vl-ed-footer-list">
            <li><button className="vl-ed-footer-link" type="button">Cookies Settings and Do Not Sell or Share</button></li>
            <li><button className="vl-ed-footer-link" type="button">Cookie Policy</button></li>
            <li><button className="vl-ed-footer-link" type="button">Accessibility</button></li>
            <li><button className="vl-ed-footer-link" type="button">Career</button></li>
          </ul>
        </section>

        <section className="vl-ed-footer-col">
          <button className="vl-ed-footer-link vl-ed-footer-link--strong" type="button">
            Subscribe to the Newsletter &gt;
          </button>
        </section>
      </div>

      <div className="vl-ed-footer-legal">
        <span>© 2026 Saint Laurent — Qixi Campaign Demo</span>
        <span>Next.js editorial commerce prototype</span>
      </div>
    </footer>
  );
}
