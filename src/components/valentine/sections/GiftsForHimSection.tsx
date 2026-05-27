"use client";

import { useValentine } from "../ValentineContext";
import { GiftSection } from "../ui/GiftSection";

export function GiftsForHimSection({ active }: { active: boolean }) {
  const { featuredHim, addItem, setSelectedProduct } = useValentine();

  return (
    <GiftSection
      id="gifts-for-him"
      eyebrow="For Him"
      title="Elegant Gifts, Unmistakably His"
      body="For the one drawn to sharp tailoring, black leather, and quiet confidence."
      products={featuredHim}
      tone="dark"
      active={active}
      onBag={(product) => addItem("bag", product)}
      onWishlist={(product) => addItem("wishlist", product)}
      onDetail={setSelectedProduct}
    />
  );
}
