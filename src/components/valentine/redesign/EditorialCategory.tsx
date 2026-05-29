"use client";

// Large image-led editorial category block (e.g. "QIXI, UNDENIABLY HERS").
export function EditorialCategory({
  id,
  image,
  imageAlt,
  title,
  onView,
}: {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  onView: () => void;
}) {
  return (
    <section className="vl-ed-editorial" id={id} aria-label={title}>
      <button className="vl-ed-editorial-media" type="button" onClick={onView} aria-label={`${title} — view collection`}>
        <img src={image} alt={imageAlt} loading="lazy" />
      </button>
      <div className="vl-ed-editorial-copy">
        <h2 className="vl-ed-editorial-title">{title}</h2>
        <button className="vl-ed-link" type="button" onClick={onView}>
          View
        </button>
      </div>
    </section>
  );
}
