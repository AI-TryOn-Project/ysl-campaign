import { describe, expect, it } from "vitest";
import type { Product } from "@/data/campaign";
import {
  getChatProductChipTooltip,
  getChatProductDisplayName,
  getChatProductSku,
} from "./chat-product-display";
import type { YslChatProduct } from "./ysl-chat";

const campaignProduct: Product = {
  id: "ysl-w-s26-872469aaduu1000",
  sku: "872469AADUU1000",
  name: "LE 5 À 7 Supple Small in Grained Leather",
  gender: "women",
  category: "bags",
  categoryLabel: "Bags",
  price: 20500,
  image: "/assets/products/872469aaduu1000.jpg",
  detailPath: "https://www.ysl.cn/products/872469aaduu1000.html",
  styleTags: [],
  occasionTags: [],
  description: "",
  reason: "",
  material: "",
  styling: "",
};

const remoteProduct: YslChatProduct = {
  id: "851689AAANG1000",
  name: "Qixi Heart Pendant",
  img: "https://example.com/pendant.jpg",
  crawledSkuId: "851689AAANG1000",
};

describe("chat product display helpers", () => {
  it("uses campaign sku for local products", () => {
    expect(getChatProductSku(campaignProduct)).toBe("872469AADUU1000");
  });

  it("uses crawled sku for remote concierge products", () => {
    expect(getChatProductSku(remoteProduct)).toBe("851689AAANG1000");
  });

  it("shows readable product names instead of sku codes", () => {
    expect(getChatProductDisplayName(campaignProduct)).toBe("LE 5 À 7 Supple Small in Grained Leather");
    expect(getChatProductDisplayName(remoteProduct)).toBe("Qixi Heart Pendant");
  });

  it("truncates long names with an ellipsis", () => {
    expect(getChatProductDisplayName(campaignProduct, 24)).toBe("LE 5 À 7 Supple Small i…");
  });

  it("builds tooltip copy with full name and sku", () => {
    expect(getChatProductChipTooltip(remoteProduct)).toBe("Qixi Heart Pendant · SKU 851689AAANG1000");
  });
});
