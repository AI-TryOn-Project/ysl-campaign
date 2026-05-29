"use client";

import { useValentine } from "../ValentineContext";
import { openProductDetail } from "@/lib/product-link";
import { GiftSection } from "../ui/GiftSection";

export function GiftsForHerSection({ active }: { active: boolean }) {
  const { featuredHer, addItem } = useValentine();

  return (
    <GiftSection
      id="gifts-for-her"
      eyebrow="For Her"
      title="Luxurious Gifts, Undeniably Hers"
      body="Transform a simple gift into a grand gesture with sculptural bags, silk textures, and gold-toned details."
      products={featuredHer}
      tone="light"
      active={active}
      onBag={(product) => addItem("bag", product)}
      onWishlist={(product) => addItem("wishlist", product)}
      onDetail={openProductDetail}
    />
  );
}
