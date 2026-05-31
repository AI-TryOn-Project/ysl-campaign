import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/campaign";
import { SaintLaurentMark } from "@/components/SaintLaurentMark";
import { findProductBySlug, slugifyProductName } from "@/lib/product-link";

type PageParams = { slug: string };

export function generateStaticParams(): PageParams[] {
  const seen = new Set<string>();
  const params: PageParams[] = [];
  for (const product of PRODUCTS) {
    const slug = slugifyProductName(product.name);
    if (seen.has(slug)) continue;
    seen.add(slug);
    params.push({ slug });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = findProductBySlug(slug);
  if (!product) return { title: "Saint Laurent" };
  return {
    title: `${product.name} — Saint Laurent`,
    description: product.description,
  };
}

function formatPrice(value: number | null): string {
  if (value == null) return "Price upon request";
  return `¥${value.toLocaleString("en-US")}`;
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const product = findProductBySlug(slug);

  if (!product) notFound();

  const related = PRODUCTS.filter(
    (entry) => entry.category === product.category && entry.id !== product.id,
  ).slice(0, 4);

  return (
    <div className="vl-pdp">
      <header className="vl-pdp-topbar">
        <Link className="vl-pdp-back" href="/valentine">
          &lt; Back
        </Link>
        <Link className="vl-pdp-brand" href="/" aria-label="Saint Laurent home">
          <SaintLaurentMark />
        </Link>
        <span className="vl-pdp-topbar-spacer" aria-hidden="true" />
      </header>

      <main className="vl-pdp-main">
        <section className="vl-pdp-gallery" aria-label={`${product.name} imagery`}>
          <div className="vl-pdp-frame">
            <img src={product.image} alt={product.name} />
          </div>
        </section>

        <section className="vl-pdp-info">
          <p className="vl-pdp-category">{product.categoryLabel}</p>
          <h1 className="vl-pdp-name">{product.name}</h1>
          <p className="vl-pdp-price">{formatPrice(product.price)}</p>

          <p className="vl-pdp-description">{product.description}</p>

          <a
            className="vl-pdp-cta"
            href={product.detailPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            Shop on Saint Laurent
          </a>

          <dl className="vl-pdp-specs">
            <div className="vl-pdp-spec">
              <dt>Reference</dt>
              <dd>{product.sku}</dd>
            </div>
            <div className="vl-pdp-spec">
              <dt>Material</dt>
              <dd>{product.material}</dd>
            </div>
            <div className="vl-pdp-spec">
              <dt>Styling</dt>
              <dd>{product.styling}</dd>
            </div>
            <div className="vl-pdp-spec">
              <dt>Why we love it for Qixi</dt>
              <dd>{product.reason}</dd>
            </div>
          </dl>
        </section>
      </main>

      {related.length ? (
        <section className="vl-pdp-related" aria-label="Related products">
          <h2 className="vl-pdp-related-title">You May Also Like</h2>
          <div className="vl-pdp-related-grid">
            {related.map((entry) => (
              <Link
                key={entry.id}
                className="vl-pdp-related-card"
                href={`/products/${slugifyProductName(entry.name)}`}
              >
                <span className="vl-pdp-related-media">
                  <img src={entry.image} alt={entry.name} loading="lazy" />
                </span>
                <span className="vl-pdp-related-name">{entry.name}</span>
                <span className="vl-pdp-related-price">{formatPrice(entry.price)}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
