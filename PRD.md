# Saint Laurent Valentine Gift Campaign Demo PRD

Version / 版本: v0.2 bilingual  
Owner / 负责人: fAIshion Demo Team  
Target Event / 目标活动: Kering China Innovation Day 2026  
Primary Page / 主要页面: `valentine.html`

---

## 1. Background / 项目背景

EN: Kering has transferred makeup and beauty line operations to L'Oreal. Therefore, this demo should not design makeup, skincare, or beauty gift flows.

中文：Kering 已将彩妆和美妆线运营转移至 L'Oreal。因此，本次 Demo 不设计 makeup、skincare 或 beauty gift 相关流程。

EN: The Valentine campaign demo should focus on Saint Laurent fashion commerce categories:

中文：本次情人节 Campaign Demo 应聚焦 Saint Laurent 时尚电商品类：

- Bags / 包袋
- Accessories / 配饰
- Ready-to-wear / 成衣
- Shoes / 鞋履

EN: The campaign goal is sales-oriented: help users discover Valentine gifts, understand why a product fits their need, and move toward wishlist or shopping bag actions.

中文：本次 Campaign 的目标是销售转化导向：帮助用户发现适合作为情人节礼物的商品，理解推荐理由，并完成收藏或加入购物袋等购买前动作。

---

## 2. Product Goal / 产品目标

EN: Build an interactive live demo that lets Kering brand teams experience a complete AI gift-shopping journey:

中文：构建一个可现场操作的交互式 Live Demo，让 Kering 品牌团队体验完整的 AI 礼品导购路径：

```text
User need or scenario -> AI understanding -> Saint Laurent product recommendations -> Product detail -> Wishlist or shopping bag
用户需求或场景 -> AI 理解 -> Saint Laurent 商品推荐 -> 商品详情 -> 收藏或加入购物袋
```

EN: The demo should prove that fAIshion can support a luxury holiday campaign by turning brand-owned product data into guided shopping recommendations.

中文：Demo 需要证明 fAIshion 可以将品牌商品数据转化为节日 Campaign 中可落地的导购推荐体验，帮助奢侈品牌提升商品发现和销售转化。

---

## 3. Target Users / 目标用户

### End Consumer / 终端消费者

EN: Users shopping for Valentine gifts for a partner, friend, or themselves.

中文：为伴侣、朋友或自己选购情人节礼物的消费者。

### Brand / Retail Team / 品牌与零售团队

EN: Kering brand stakeholders evaluating whether the solution can support luxury fashion campaign conversion, clienteling, and product discovery.

中文：评估该方案是否能支持奢侈品节日 Campaign 转化、客户经营和商品发现的 Kering 品牌相关团队。

---

## 4. Scope / 项目范围

### In Scope / 本期范围

- EN: Valentine gift recommendation journey  
  中文：情人节礼品推荐路径
- EN: Natural-language product search  
  中文：自然语言商品搜索
- EN: Style-based product discovery  
  中文：基于风格的商品发现
- EN: Scenario-based product recommendation  
  中文：基于场景的商品推荐
- EN: Product cards with image, category, price, style tags, and recommendation reason  
  中文：包含图片、品类、价格、风格标签和推荐理由的商品卡片
- EN: Wishlist and shopping bag interactions  
  中文：收藏和购物袋交互
- EN: Demo SKU database with 6-8 products  
  中文：包含 6-8 个商品的 Demo SKU 数据库
- EN: Luxury-minimal UI aligned with Saint Laurent tone  
  中文：符合 Saint Laurent 调性的极简奢侈品 UI

### Out of Scope / 不在本期范围

- Makeup / 彩妆
- Skincare / 护肤
- Beauty gift sets / 美妆礼盒
- Full checkout / 完整结账流程
- Payment / 支付
- User login / 用户登录
- Real inventory sync / 实时库存同步
- Real AI API integration for the first demo version / 第一版 Demo 暂不接入真实 AI API

---

## 5. Product Categories / 商品品类

EN: The demo SKU database should include products across the following categories.

中文：Demo SKU 数据库应覆盖以下商品品类。

| Category / 品类 | Example Products / 示例商品 |
| --- | --- |
| Bags / 包袋 | Tote, shoulder bag, mini bag, clutch / 托特包、肩背包、迷你包、手拿包 |
| Accessories / 配饰 | Sunglasses, belt, jewelry, small leather goods / 墨镜、皮带、首饰、小皮具 |
| Ready-to-wear / 成衣 | Jacket, blazer, dress, coat / 夹克、西装外套、连衣裙、大衣 |
| Shoes / 鞋履 | Heels, boots, loafers, sandals / 高跟鞋、靴子、乐福鞋、凉鞋 |

EN: Fragrance should not be the core category for this demo. If included, it should be treated only as an optional add-on and not the main gift flow.

中文：香水不作为本次 Demo 的核心品类。如需保留，可作为附加推荐出现，但不应成为主礼品路径。

---

## 6. Core Requirements / 核心需求

### A. Basic Search Recommendation / 基础搜索推荐

EN: Users can describe what they need in natural language.

中文：用户可以用自然语言描述自己的送礼需求。

Example inputs / 示例输入：

- EN: "Help me choose a Valentine gift for my girlfriend, budget around 5000 RMB, minimal style."  
  中文：“帮我选一个送女朋友的情人节礼物，预算 5000 元左右，风格简约。”
- EN: "I need a gift for my boyfriend, something understated and classic."  
  中文：“我想给男朋友选一件低调经典的礼物。”
- EN: "Recommend a Saint Laurent piece for a Valentine dinner date."  
  中文：“推荐一个适合情人节晚餐约会的 Saint Laurent 单品。”

System should extract / 系统需要识别：

- Recipient / 送礼对象
- Budget / 预算
- Occasion / 场景
- Style preference / 风格偏好
- Product category preference, if mentioned / 用户提到的商品品类偏好

System should return / 系统需要返回：

- 3-5 recommended products / 3-5 个推荐商品
- Product image / 商品图片
- Product name / 商品名称
- Category / 商品品类
- Price / 价格
- Style tags / 风格标签
- Recommendation reason / 推荐理由
- CTA: Add to Wishlist / Add to Bag  
  CTA：加入收藏 / 加入购物袋

### B. Style Search Engine / 风格搜索引擎

EN: Users can search by aesthetic intent, not only by product name.

中文：用户不仅可以按商品名称搜索，也可以通过审美意图和风格关键词查找商品。

Supported style tags / 支持的风格标签：

- Minimal / 简约
- Elegant / 优雅
- Classic / 经典
- Cool / 酷感
- Bold / 大胆
- Statement / 高辨识度
- Evening / 晚宴
- Understated luxury / 低调奢华

Example / 示例：

EN: User selects `Minimal` + `Gift for Her`.

中文：用户选择 `简约` + `送给她`。

Expected output / 预期输出：

- EN: Black or neutral bag  
  中文：黑色或中性色包袋
- EN: Refined accessory  
  中文：精致配饰
- EN: Elegant shoe or ready-to-wear piece  
  中文：优雅鞋履或成衣单品
- EN: Recommendation copy explaining why each item matches the style  
  中文：解释每个商品为何符合该风格的推荐文案

### C. Scenario Product Recommendation / 场景推荐单品

EN: Users can browse recommendations by Valentine-related scenarios.

中文：用户可以基于情人节相关场景浏览商品推荐。

Required scenarios / 必备场景：

- Valentine Gift for Her / 情人节礼物：送给她
- Valentine Gift for Him / 情人节礼物：送给他
- Date Night Outfit / 约会晚宴穿搭
- Anniversary Gift / 纪念日礼物
- Self Gift / 犒赏自己
- Luxury Gift Under Budget / 预算内奢侈礼物

Optional filters / 可选筛选条件：

- Recipient: Her / Him / Neutral  
  送礼对象：她 / 他 / 中性
- Age range: 20s / 30s / 40s  
  年龄段：20+ / 30+ / 40+
- Budget: Under RMB 3,000 / RMB 3,000-8,000 / RMB 8,000+  
  预算：3000 元以下 / 3000-8000 元 / 8000 元以上
- Style: Minimal / Classic / Statement / Cool  
  风格：简约 / 经典 / 高辨识度 / 酷感

Expected output / 预期输出：

- 1 hero product / 1 个主推商品
- 2-4 supporting products / 2-4 个辅助推荐商品
- Clear sales-oriented recommendation reason / 明确的销售导向推荐理由
- Wishlist and shopping bag actions / 收藏和购物袋操作

---

## 7. User Journey / 用户路径

1. EN: User lands on the Valentine Gift Campaign page.  
   中文：用户进入情人节礼品 Campaign 页面。
2. EN: User sees the AI Gift Finder as the primary interaction.  
   中文：用户第一眼看到 AI Gift Finder 作为核心交互入口。
3. EN: User chooses one of three paths: Search by Need, Search by Style, or Shop by Occasion.  
   中文：用户选择三种路径之一：按需求搜索、按风格搜索、按场景推荐。
4. EN: System collects or infers recipient, occasion, budget, and style.  
   中文：系统收集或推断送礼对象、场景、预算和风格。
5. EN: System recommends products from bags, accessories, ready-to-wear, and shoes.  
   中文：系统从包袋、配饰、成衣和鞋履中推荐商品。
6. EN: User opens a product detail card.  
   中文：用户打开商品详情卡片。
7. EN: User adds one or more products to wishlist or shopping bag.  
   中文：用户将一个或多个商品加入收藏或购物袋。

---

## 8. Page Structure / 页面结构

### Hero / First Screen / 首屏

- EN: Campaign title: Saint Laurent Valentine Gift Edit  
  中文：Campaign 标题：Saint Laurent Valentine Gift Edit
- EN: AI Gift Finder search bar  
  中文：AI Gift Finder 搜索框
- EN: Three entry points: Search by Need, Search by Style, Shop by Occasion  
  中文：三个入口：按需求搜索、按风格搜索、按场景推荐
- EN: Visual should be product-led, not video-only.  
  中文：视觉应以商品和 Campaign 为主，而不是只展示视频。

### Gift Categories / 礼品品类区

Show four category entry points / 展示四个品类入口：

- Bags / 包袋
- Accessories / 配饰
- Ready-to-wear / 成衣
- Shoes / 鞋履

### AI Recommendation Results / AI 推荐结果区

EN: Display product cards generated from the selected flow or user input.

中文：展示根据用户选择路径或输入内容生成的商品推荐卡片。

Each card includes / 每张卡片包含：

- Product image / 商品图片
- Product name / 商品名称
- Category / 品类
- Price / 价格
- Style tags / 风格标签
- Recommendation reason / 推荐理由
- Add to Wishlist / 加入收藏
- Add to Bag / 加入购物袋

### Product Detail / 商品详情

Includes / 包含：

- Large product image / 商品大图
- Product name / 商品名称
- Price / 价格
- Materials / 材质
- Styling recommendation / 搭配建议
- Gift recommendation reason / 礼品推荐理由
- CTA actions / 行动按钮

---

## 9. Recommendation Logic for Demo V0.1 / Demo V0.1 推荐逻辑

EN: The first demo does not require a live AI model. It can use deterministic matching rules for stability and speed.

中文：第一版 Demo 不需要接入真实 AI 模型。为了保证现场稳定性和速度，可先使用规则匹配推荐逻辑。

Recommended data fields / 推荐数据字段：

```js
{
  id: "sl-bag-001",
  name: "Le 5 a 7 Shoulder Bag",
  category: "Bags",
  price: 22500,
  image: "...",
  tags: ["minimal", "classic", "gift-for-her", "evening"],
  occasions: ["valentine", "anniversary", "date-night"],
  recipients: ["her", "neutral"],
  reason: "A compact Saint Laurent signature bag that feels personal, polished, and easy to wear beyond Valentine's Day."
}
```

Matching rules / 匹配规则：

1. EN: Match occasion first.  
   中文：优先匹配场景。
2. EN: Then match recipient.  
   中文：其次匹配送礼对象。
3. EN: Then match budget.  
   中文：再匹配预算。
4. EN: Then match style tags.  
   中文：最后匹配风格标签。
5. EN: If no exact result exists, return the closest category match with explanation.  
   中文：如果没有完全匹配结果，返回最接近的品类匹配，并说明推荐原因。

---

## 10. UX / Visual Direction / 体验与视觉方向

Design principles / 设计原则：

- Luxury minimal / 奢侈品极简感
- Black, white, neutral beige, restrained gold accents / 黑、白、中性米色、克制金色点缀
- Product-first composition / 商品优先的页面构图
- Clear sales actions / 清晰的销售转化动作
- Fast, booth-ready interaction / 适合展台现场的快速交互

Avoid / 避免：

- Rose icon as primary UI / 用玫瑰图标作为主要 UI
- Heavy red or pink Valentine graphics / 过重的红色或粉色情人节视觉
- Makeup or beauty gift framing / 彩妆、美妆礼品叙事
- Long paragraphs inside the interface / 页面内出现大段文字
- Video-only demo experience / 只有视频、无法互动的 Demo 体验

EN: The experience should feel like a Saint Laurent digital sales associate, not a generic chatbot.

中文：整体体验应像一位 Saint Laurent 数字销售顾问，而不是普通客服机器人。

---

## 11. Demo Success Criteria / Demo 验收标准

- EN: A first-time user can complete a recommendation path without guidance.  
  中文：首次使用者无需讲解即可完成一次推荐路径。
- EN: All three paths, A/B/C, are usable.  
  中文：A/B/C 三条路径均可操作。
- EN: Recommendations only include bags, accessories, ready-to-wear, and shoes.  
  中文：推荐结果只包含包袋、配饰、成衣和鞋履。
- EN: User can add recommended products to wishlist or shopping bag.  
  中文：用户可以将推荐商品加入收藏或购物袋。
- EN: The page is fast enough for booth usage.  
  中文：页面响应速度足够支持展台现场使用。
- EN: The visual design feels luxury, minimal, and Saint Laurent-aligned.  
  中文：视觉设计符合奢侈品、极简和 Saint Laurent 调性。
- EN: The demo clearly shows end-to-end logic for Kering reviewers.  
  中文：Demo 能清楚展示给 Kering 评审完整的端到端逻辑。

---

## 12. First Build Checklist / 第一版开发清单

- EN: Replace rose-based chat button with minimal AI Gift Finder entry.  
  中文：将玫瑰聊天按钮替换为极简 AI Gift Finder 入口。
- EN: Rewrite hero section around Valentine Gift Edit and sales discovery.  
  中文：重写首屏，围绕 Valentine Gift Edit 和销售型商品发现展开。
- EN: Add three primary paths: need, style, occasion.  
  中文：增加三条主路径：需求、风格、场景。
- EN: Create 6-8 product records across allowed categories.  
  中文：创建 6-8 个覆盖允许品类的商品数据。
- EN: Replace generic chatbot responses with product recommendation outputs.  
  中文：将普通聊天回复替换为商品推荐结果。
- EN: Add recommendation result section.  
  中文：增加推荐结果展示区域。
- EN: Ensure wishlist and shopping bag work from recommendation cards.  
  中文：确保推荐卡片上的收藏和购物袋操作可用。
- EN: Remove makeup, skincare, beauty gift, and rose-led campaign language.  
  中文：移除 makeup、skincare、beauty gift 以及以玫瑰为核心的 Campaign 文案。
- EN: Test desktop and mobile usability.  
  中文：测试桌面端和移动端可用性。

---

## 13. Milestones / 时间节点

| Date / 日期 | Deliverable / 交付物 |
| --- | --- |
| June 5, 2026 / 2026 年 6 月 5 日 | First rehearsal: basic live demo path and draft pitch / 第一轮彩排：基础 Live Demo 路径和 Pitch 初稿 |
| June 16, 2026 / 2026 年 6 月 16 日 | Complete demo and final pitch deck / 完整 Demo 和最终 Pitch Deck |
| July 3, 2026 / 2026 年 7 月 3 日 | Booth-ready interactive demo / 可用于展台现场体验的交互 Demo |

---

## 14. Design References / 设计参考

### Brunello Cucinelli AI Reference / Brunello Cucinelli AI 参考

Reference folder / 参考目录: `references/brunello-cucinelli-ai/`

EN: Use Brunello Cucinelli AI as the UI/UX workflow reference only.

中文：Brunello Cucinelli AI 仅作为 UI/UX 工作流参考。

Reference points / 参考重点：

- EN: AI assistant entry point and discovery workflow  
  中文：AI 助手入口和商品发现流程
- EN: Prompt-driven product exploration  
  中文：通过 prompt 探索商品的交互方式
- EN: Guided recommendation path from user intent to product results  
  中文：从用户意图到商品结果的引导式推荐路径

Do not copy / 不复制：

- EN: Brunello Cucinelli brand identity  
  中文：Brunello Cucinelli 品牌视觉
- EN: Brunello Cucinelli typography, palette, imagery, product style, or brand tone  
  中文：Brunello Cucinelli 字体、色彩、图片、商品风格或品牌语气

### Saint Laurent China Reference / Saint Laurent 中国官网参考

Reference folder / 参考目录: `references/saint-laurent-cn/`

EN: Use Saint Laurent China official website as the primary brand, visual, and commerce reference.

中文：Saint Laurent 中国官网作为主要品牌、视觉和电商参考。

Reference points / 参考重点：

- EN: Typography, header, footer, navigation, spacing, and layout rhythm  
  中文：字体、header、footer、导航、间距和页面节奏
- EN: Luxury-minimal black-and-white visual tone  
  中文：黑白极简的奢侈品视觉调性
- EN: Official product imagery and commerce category presentation  
  中文：官网商品图片和电商品类展示方式
- EN: Product categories: bags, accessories, ready-to-wear, shoes  
  中文：商品品类：包袋、配饰、成衣、鞋履

Implementation principle / 实施原则：

```text
BC defines the interaction logic. YSL defines the brand expression.
BC 定义交互逻辑；YSL 定义品牌表达。
```
