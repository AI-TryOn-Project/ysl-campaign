import { describe, expect, it } from "vitest";
import { extractYslChatSnapshot, getYslProductSku } from "./ysl-chat";

describe("ysl chat selectors", () => {
  it("extracts assistant prose and a loading searchProducts part", () => {
    const snapshot = extractYslChatSnapshot([
      {
        id: "assistant-1",
        role: "assistant",
        parts: [
          { type: "text", text: "A quiet black leather gesture will feel personal tonight." },
          {
            type: "tool-searchProducts",
            toolCallId: "call-1",
            state: "input-available",
            input: { query: "Saint Laurent Qixi gift black leather bag" },
          },
        ],
      },
    ]);

    expect(snapshot.assistantText).toBe("A quiet black leather gesture will feel personal tonight.");
    expect(snapshot.hasSearch).toBe(true);
    expect(snapshot.isSearching).toBe(true);
    expect(snapshot.products).toEqual([]);
  });

  it("extracts products from searchProducts output and prefers crawledSkuId as SKU", () => {
    const snapshot = extractYslChatSnapshot([
      {
        id: "assistant-1",
        role: "assistant",
        parts: [
          { type: "text", text: "I would keep the edit sculptural and restrained." },
          {
            type: "tool-searchProducts",
            toolCallId: "call-1",
            state: "output-available",
            input: { query: "Saint Laurent Qixi gift" },
            output: {
              tool: "searchProducts",
              items: [
                {
                  id: "row-1",
                  name: "LE 5 A 7 small bag",
                  brand: "Saint Laurent",
                  img: "https://cdn.example.com/bag.jpg",
                  crawledSkuId: "872469AADUU1000",
                  skuType: "CRAWLED",
                  summary: "A polished evening bag for a Qixi dinner.",
                },
              ],
            },
          },
        ],
      },
    ]);

    expect(snapshot.isSearching).toBe(false);
    expect(snapshot.products).toHaveLength(1);
    expect(getYslProductSku(snapshot.products[0])).toBe("872469AADUU1000");
  });

  it("surfaces transport errors", () => {
    const snapshot = extractYslChatSnapshot([], new Error("Network failed"));
    expect(snapshot.errorText).toBe("Network failed");
  });

  it("deduplicates repeated streamed assistant text parts", () => {
    const snapshot = extractYslChatSnapshot([
      {
        id: "assistant-1",
        role: "assistant",
        parts: [
          { type: "text", text: "A sculptural small bag keeps the gesture intimate." },
          { type: "text", text: "A sculptural small bag keeps the gesture intimate." },
        ],
      },
    ]);

    expect(snapshot.assistantText).toBe("A sculptural small bag keeps the gesture intimate.");
  });

  it("keeps the focused assistant reply to the first sentence", () => {
    const snapshot = extractYslChatSnapshot([
      {
        id: "assistant-1",
        role: "assistant",
        parts: [
          { type: "text", text: "以圣罗兰的先锋美学，为她选萃一份承载隽永心意的七夕礼赞。 第二句不进入焦点页。" },
        ],
      },
    ]);

    expect(snapshot.assistantText).toBe("以圣罗兰的先锋美学，为她选萃一份承载隽永心意的七夕礼赞。");
  });
});
