"use client";

import { useValentine } from "../ValentineContext";
import { type DrawerKind, type Product } from "../ValentineContext";

export function Drawer({
  kind,
  products,
  onClose,
  onRemove,
  onDetail,
}: {
  kind: DrawerKind;
  products: Product[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onDetail: (product: Product) => void;
}) {
  const { money } = useValentine();

  return (
    <div className="modal-backdrop" role="presentation">
      <aside
        className="drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label={kind === "bag" ? "Shopping bag" : "Wishlist"}
      >
        <header>
          <h2>{kind === "bag" ? "Shopping Bag" : "Wishlist"}</h2>
          <button type="button" onClick={onClose} aria-label="Close drawer">
            ×
          </button>
        </header>
        {products.length ? (
          <div className="drawer-list">
            {products.map((product) => (
              <article key={product.id} className="drawer-item">
                <button type="button" onClick={() => onDetail(product)}>
                  <img src={product.image} alt={product.name} />
                </button>
                <div>
                  <p>{product.categoryLabel}</p>
                  <h3>{product.name}</h3>
                  <span>{money(product.price)}</span>
                  <button type="button" onClick={() => onRemove(product.id)}>
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty-state">No pieces yet.</p>
        )}
      </aside>
    </div>
  );
}
