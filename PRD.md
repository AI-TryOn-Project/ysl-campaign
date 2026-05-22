# Saint Laurent Valentine Gift Campaign Demo PRD

Version: v0.9 bilingual, separated by language
Owner: fAIshion Demo Team
Target Event: Kering China Innovation Day 2026
Primary Page: `valentine.html`
Language Structure: English first, Chinese second

---

# English PRD

## 1. Background

Kering has transferred makeup and beauty line operations to L'Oreal. Therefore, this demo should not design makeup, skincare, or beauty gift flows.

The Valentine campaign demo should focus on Saint Laurent fashion commerce categories:

- Bags
- Accessories
- Ready-to-wear
- Shoes

The campaign goal is sales-oriented: help users discover Valentine gifts, understand why a product fits their need, and move toward wishlist or shopping bag actions.

## 2. Product Goal

Build an interactive live demo that lets Kering brand teams experience a complete AI gift-shopping journey:

```text
User need or scenario -> AI understanding -> Saint Laurent product recommendations -> Product detail -> Wishlist or shopping bag
```

The demo should prove that fAIshion can support a luxury holiday campaign by turning brand-owned product data into guided shopping recommendations.

## 3. Target Users

### End Consumer

Users shopping for Valentine gifts for a partner, friend, or themselves.

### Brand and Retail Team

Kering brand stakeholders evaluating whether the solution can support luxury fashion campaign conversion, clienteling, and product discovery.

## 4. Scope

### In Scope

- Valentine gift recommendation journey
- Natural-language product search
- Style-based product discovery
- Scenario-based product recommendation
- Product cards with image, category, price, style tags, and recommendation reason
- Wishlist and shopping bag interactions
- Demo SKU database with 6-8 products
- Luxury-minimal UI aligned with Saint Laurent tone

### Out of Scope

- Makeup
- Skincare
- Beauty gift sets
- Full checkout
- Payment
- User login
- Real inventory sync
- Real AI API integration for the first demo version

## 5. Product Categories

The demo SKU database should include products across the following categories.

| Category | Example Products |
| --- | --- |
| Bags | Tote, shoulder bag, mini bag, clutch |
| Accessories | Sunglasses, belt, jewelry, small leather goods |
| Ready-to-wear | Jacket, blazer, dress, coat |
| Shoes | Heels, boots, loafers, sandals |

Fragrance should not be the core category for this demo. If included, it should be treated only as an optional add-on and not the main gift flow.

### Three User-Facing Demo Styles

The demo should use only three user-facing style tags. These are intentionally simple consumer terms, while the internal YSL style codes remain available for recommendation logic and pitch explanation.

- **Classic Minimal**
  - Internal YSL style code: Iconic Minimal
  - User meaning: A safe, refined, low-risk gift with a clean Saint Laurent signature.
  - Product direction: Cassandre, Le 5 a 7, Sac de Jour, small leather goods, black or neutral bags.
- **Black & Cool**
  - Internal YSL style code: Dark Leather Edge
  - User meaning: A more attitude-driven gift with a black, leather, sharp, confident feeling.
  - Product direction: Leather pieces, boots, sunglasses, black accessories, evening-ready pieces.
- **Polished Elegance**
  - Internal YSL style code: Sharp Tailoring / Power Elegance
  - User meaning: A mature and polished style for dinner dates, anniversaries, and elevated dressing.
  - Product direction: Tuxedo-inspired jackets, blazers, refined shoes, elegant bags, structured accessories.

## 6. Core Requirements

### A. Basic Search Recommendation

Users can describe what they need in natural language.

Example inputs:

- "Help me choose a Valentine gift for my girlfriend, budget around 5000 RMB, Classic Minimal style."
- "I need a gift for my boyfriend, something Black & Cool but still understated."
- "Recommend a Saint Laurent piece for a Valentine dinner date."

System should extract:

- Recipient
- Budget
- Occasion
- Style preference
- Product category preference, if mentioned

System should return:

- 3-5 recommended products
- Product image
- Product name
- Category
- Price
- Style tags
- Recommendation reason
- CTA: Add to Wishlist / Add to Bag

### B. Style Search Engine

Users can search by aesthetic intent, not only by product name.

Supported user-facing style tags:

- Classic Minimal
- Black & Cool
- Polished Elegance

Rationale:

- The front-end UI should use simple consumer language, not fashion-industry wording.
- Internal YSL style codes can still guide recommendation logic and pitch storytelling.
- Three tags are enough for the demo because they are easier to understand, easier to present, and still cover Saint Laurent's core visual world.

Example:

User selects `Classic Minimal` + `Gift for Her`.

Expected output:

- Black or neutral bag
- Refined accessory
- Elegant shoe or ready-to-wear piece
- Recommendation copy explaining why each item matches the style

### C. Scenario Product Recommendation

Users can browse recommendations by Valentine-related scenarios.

Required scenarios:

- Valentine Gift for Her
- Valentine Gift for Him
- Date Night Outfit
- Anniversary Gift
- Self Gift
- Luxury Gift Under Budget

Optional filters:

- Recipient: Her / Him / Neutral
- Age range: 20s / 30s / 40s
- Budget: Under RMB 3,000 / RMB 3,000-8,000 / RMB 8,000+
- Style: Classic Minimal / Black & Cool / Polished Elegance

Expected output:

- 1 hero product
- 2-4 supporting products
- Clear sales-oriented recommendation reason
- Wishlist and shopping bag actions

### D. AI Concierge UX Principle: Not a Traditional Survey

The AI Gift Finder must not behave like a traditional survey, filter tree, or chatbot transcript. Its value is to reduce decision effort: understand natural language, infer missing context, recommend immediately, and support fast refinement.

Traditional survey behavior to avoid:

- Asking users to complete a fixed sequence before showing any product.
- Making gender, budget, category, and style feel like mandatory form fields.
- Showing a long chat history with user bubbles and AI reply bubbles.
- Returning a cold product list without gift logic or recommendation reasons.

AI concierge behavior to design:

- Natural language first, structured chips second.
- User can type one sentence and see products immediately.
- AI extracts visible intent chips such as recipient, occasion, budget, style, and category.
- AI can infer missing context instead of blocking the flow.
- Product images appear as the main result, not a text reply.
- Each recommendation includes a short reason connected to gifting, style, and Saint Laurent product logic.
- Refinement actions appear after results, such as `Make it cooler`, `Show bags only`, `Higher budget`, or `More formal`.
- The page can show a current intent summary, but should not show traditional chat history.

### E. Three Demo Storyline UX

These three storylines map directly to the three user needs: basic search recommendation, style search engine, and scenario product recommendation. Each story should be fast enough to complete in a live booth demo.

#### Storyline A: One-Sentence Gift Brief

User need: Basic search recommendation.

User mindset: "I know who I am buying for, but I do not know which Saint Laurent item to choose."

Entry point: Hero AI Gift Finder prompt.

Example prompt: "I need a Valentine's gift for my girlfriend, around RMB 5,000, something Classic Minimal."

AI behavior:

- Extract recipient, budget, occasion, and style from the sentence.
- Infer missing context, such as Valentine's gifting and suitable categories.
- Avoid asking a full survey before showing products.
- Return a balanced gift shortlist across bags, accessories, shoes, and small leather goods.

UX sequence:

1. User enters one sentence in the AI Gift Finder.
2. System converts the sentence into intent chips: `Gift for Her`, `Valentine`, `Classic Minimal`, `RMB 3,000-8,000`.
3. Product results appear immediately with large YSL product images.
4. Each product card shows one short gifting reason.
5. User can refine with quick actions: `Lower budget`, `More iconic`, `Show bags only`, `More understated`.
6. User opens product detail and adds to wishlist or shopping bag.

Success signal: The user gets a credible gift shortlist without manually filling out a survey.

#### Storyline B: Style Mood Search

User need: Style search engine.

User mindset: "I know the feeling I want, but I do not know the product name."

Entry point: Three style chips plus optional prompt.

Supported style chips:

- Classic Minimal
- Black & Cool
- Polished Elegance

Example prompt: "Something Black & Cool for him, but not too loud."

AI behavior:

- Translate aesthetic intent into YSL product codes and categories.
- Use the internal style mapping to connect user words with YSL house codes.
- Recommend products that match the mood, not only exact keywords.

UX sequence:

1. User taps a style chip or writes a style phrase.
2. System highlights the interpreted mood and explains it with short chips, not long copy.
3. Product grid updates instantly with matching YSL items.
4. Results can mix categories when the user did not specify a category.
5. User refines the mood with actions: `More classic`, `More evening`, `Less bold`, `Add leather`.
6. Product cards keep the focus on image, style fit, price, and CTA.

Success signal: The user can shop by aesthetic intent instead of knowing exact product names.

#### Storyline C: Occasion Gift Edit

User need: Scenario product recommendation.

User mindset: "I am shopping for a Valentine scenario and want a curated gift edit."

Entry point: Occasion cards.

Required occasion cards:

- Valentine Gift for Her
- Valentine Gift for Him
- Date Night Outfit
- Anniversary Gift
- Self Gift
- Luxury Gift Under Budget

AI behavior:

- Treat the occasion as the primary context.
- Use recipient, age range, budget, and style as optional signals, not mandatory survey steps.
- Create a curated edit with one hero product and supporting products.
- Explain how the products work together as a gift or outfit story.

UX sequence:

1. User selects one occasion card, such as `Valentine Gift for Him`.
2. System offers optional lightweight chips for recipient, budget, and style.
3. If the user skips chips, AI still returns a recommendation edit.
4. Result section shows one hero product plus 2-4 supporting items.
5. Each item has a sales-oriented reason, such as why it fits Valentine gifting or date-night dressing.
6. User can refine the edit with actions: `More Black & Cool`, `Under RMB 8,000`, `More formal`, `Only accessories`.
7. User opens product detail or adds items to wishlist or shopping bag.

Success signal: The user feels guided by a Saint Laurent gift editor, not forced through a questionnaire.

## 7. User Journey

1. User lands on the Valentine Gift Campaign page.
2. User sees the AI Gift Finder as the primary interaction.
3. User chooses one of three paths: Search by Need, Search by Style, or Shop by Occasion.
4. System collects or infers recipient, occasion, budget, and style.
5. System recommends products from bags, accessories, ready-to-wear, and shoes.
6. User opens a product detail card.
7. User adds one or more products to wishlist or shopping bag.

### BC-Inspired Interaction UX

The flow should reference Brunello Cucinelli AI at the interaction-pattern level only. BC is not the Valentine gifting story, not the campaign theme, and not the sales objective. It should not be copied as a narrative model.

Use BC as a UX and motion reference for AI-guided navigation. The YSL demo must tell its own Valentine gifting story: sales-oriented gift discovery, Saint Laurent products, and clear wishlist or shopping-bag conversion.

BC-inspired UX behaviors to keep:

- Prompt-first AI assistant entry.
- Guided choices after the first user intent, instead of a blank chatbot-only experience.
- Progressive clarification for recipient, budget, style, and occasion.
- Product cards that connect each recommendation to a visible reason.
- Refinement loop, so the user can adjust style, recipient, budget, or occasion after seeing results.
- Subtle transition and reveal motion inspired by guided product exploration.
- Clear transition from recommendation to product detail, wishlist, and shopping bag.

Do not copy from BC:

- BC's story, theme, or website-navigation objective.
- BC's brand identity, product imagery, tone, typography, or color palette.
- A slow lifestyle exploration flow that delays product recommendation.

YSL campaign principle:

```text
Reference BC's UX pattern and motion rhythm. Build YSL's own Valentine gifting story and commerce path.
```

### User Flow Diagram

```mermaid
flowchart TD
  A["Enter YSL Valentine Campaign"] --> B["AI Gift Finder<br/>BC-style prompt entry"]
  B --> C["Guided entry choices<br/>Need / Style / Occasion"]
  C --> D1["Search by Need<br/>natural-language prompt"]
  C --> D2["Search by Style<br/>3 style chips"]
  C --> D3["Shop by Occasion<br/>gift scenarios"]

  D1 --> E["Guided clarification<br/>recipient / budget / style / occasion"]
  D2 --> E
  D3 --> E

  E --> F["YSL product matching<br/>official assets + demo SKU data"]
  F --> G["Recommendation cards<br/>image / price / style / reason"]
  G --> H{"User action"}
  H --> I["Refine intent<br/>adjust style / budget / occasion"]
  I --> E
  H --> J["Open product detail"]
  J --> K1["Add to Wishlist"]
  J --> K2["Add to Bag"]
  K1 --> L["Sales-oriented gift discovery completed"]
  K2 --> L
```

## 8. Page Structure

### Hero / First Screen

- Campaign title: Saint Laurent Valentine Gift Edit
- AI Gift Finder search bar
- Three entry points: Search by Need, Search by Style, Shop by Occasion
- Visual should be product-led, not video-only.

### Gift Categories

Show four category entry points:

- Bags
- Accessories
- Ready-to-wear
- Shoes

### AI Recommendation Results

Display product cards generated from the selected flow or user input.

Each card includes:

- Product image
- Product name
- Category
- Price
- Style tags
- Recommendation reason
- Add to Wishlist
- Add to Bag

### Product Detail

Includes:

- Large product image
- Product name
- Price
- Materials
- Styling recommendation
- Gift recommendation reason
- CTA actions

## 9. Recommendation Logic for Demo V0.1

The first demo does not require a live AI model. It can use deterministic matching rules for stability and speed.

Recommended data fields:

```js
{
  id: "sl-bag-001",
  name: "Le 5 a 7 Shoulder Bag",
  category: "Bags",
  price: 22500,
  image: "...",
  tags: ["classic-minimal", "iconic-minimal", "gift-for-her", "evening"],
  occasions: ["valentine", "anniversary", "date-night"],
  recipients: ["her", "neutral"],
  reason: "A compact Saint Laurent signature bag that feels personal, polished, and easy to wear beyond Valentine's Day."
}
```

Matching rules:

1. Match occasion first.
2. Then match recipient.
3. Then match budget.
4. Then match style tags.
5. If no exact result exists, return the closest category match with explanation.

## 10. UX and Visual Direction

Design principles:

- Luxury minimal
- Black, white, neutral beige, restrained gold accents
- Product-first composition
- Clear sales actions
- Fast, booth-ready interaction

Avoid:

- Rose icon as primary UI
- Heavy red or pink Valentine graphics
- Makeup or beauty gift framing
- Long paragraphs inside the interface
- Video-only demo experience

The experience should feel like a Saint Laurent digital sales associate, not a generic chatbot.

## 11. Demo Success Criteria

- A first-time user can complete a recommendation path without guidance.
- All three paths, A/B/C, are usable.
- Recommendations only include bags, accessories, ready-to-wear, and shoes.
- User can add recommended products to wishlist or shopping bag.
- The page is fast enough for booth usage.
- The visual design feels luxury, minimal, and Saint Laurent-aligned.
- The demo clearly shows end-to-end logic for Kering reviewers.

## 12. First Build Checklist

- Replace rose-based chat button with minimal AI Gift Finder entry.
- Rewrite hero section around Valentine Gift Edit and sales discovery.
- Add three primary paths: need, style, occasion.
- Create 6-8 product records across allowed categories.
- Replace generic chatbot responses with product recommendation outputs.
- Add recommendation result section.
- Ensure wishlist and shopping bag work from recommendation cards.
- Remove makeup, skincare, beauty gift, and rose-led campaign language.
- Test desktop and mobile usability.

## 13. Milestones

| Date | Deliverable |
| --- | --- |
| June 5, 2026 | First rehearsal: basic live demo path and draft pitch |
| June 16, 2026 | Complete demo and final pitch deck |
| July 3, 2026 | Booth-ready interactive demo |

## 14. Design References and Product Assets

### Brunello Cucinelli AI Reference

Reference folder: `references/brunello-cucinelli-ai/`

Use Brunello Cucinelli AI as the UI/UX workflow reference only.

Reference points:

- AI assistant entry point and discovery workflow
- Prompt-driven product exploration
- Guided recommendation path from user intent to product results
- Subtle guided-interaction motion and reveal rhythm

Do not copy:

- Brunello Cucinelli story, campaign purpose, or website-navigation objective
- Brunello Cucinelli brand identity
- Brunello Cucinelli typography, palette, imagery, product style, or brand tone

### Saint Laurent China Reference

Reference folder: `references/saint-laurent-cn/`

Use Saint Laurent China official website as the primary brand, visual, and commerce reference.

Reference points:

- Typography, header, footer, navigation, spacing, and layout rhythm
- Luxury-minimal black-and-white visual tone
- Official product imagery and commerce category presentation
- Product categories: bags, accessories, ready-to-wear, shoes

Implementation principle:

```text
BC informs the UX pattern and motion rhythm. YSL defines the Valentine gifting story, product logic, and brand expression.
```

### Saint Laurent Official Product Assets

Asset folder: `ysl官网素材/`

Use the saved Saint Laurent China official website product-page assets as the primary product image and category reference for the Valentine Gift Campaign demo.

Asset structure:

| Folder | Included Product Pages | Demo Usage |
| --- | --- | --- |
| `ysl官网素材/女/` | Homepage, ready-to-wear, shoes, accessories, small leather goods | Gift for Her, date-night outfit, self gift |
| `ysl官网素材/男/` | Summer 26 men, travel bags, shoes, accessories, small leather goods | Gift for Him, understated luxury, classic accessories |

Required usage:

- Product imagery should come from `ysl官网素材/` when building recommendation cards, category tiles, and product detail modules.
- Product selection should stay within bags, accessories, ready-to-wear, shoes, and small leather goods.
- Men's and women's journeys should use the corresponding official asset folders to preserve product relevance.
- Product names, visual hierarchy, spacing, product-card rhythm, header, and footer should align with Saint Laurent official site references.

Do not use:

- Makeup, skincare, beauty gift sets, or fragrance-led gifting as the main flow.
- Brunello Cucinelli product imagery, color palette, typography, or brand tone in the final YSL demo UI.
- Generic stock images when an official YSL product asset is available.

Product asset mapping:

| Demo Category | Recommended Asset Source |
| --- | --- |
| Bags | Men's travel bags and women's official homepage/category imagery |
| Accessories | Men's and women's accessories folders |
| Ready-to-wear | Women's ready-to-wear and men's Summer 26 collection |
| Shoes | Men's and women's shoes folders |
| Small leather goods | Men's and women's small leather goods folders |

---

# 中文 PRD

## 1. 项目背景

Kering 已将彩妆和美妆线运营转移至 L'Oreal。因此，本次 Demo 不设计 makeup、skincare 或 beauty gift 相关流程。

本次情人节 Campaign Demo 应聚焦 Saint Laurent 时尚电商品类：

- 包袋
- 配饰
- 成衣
- 鞋履

本次 Campaign 的目标是销售转化导向：帮助用户发现适合作为情人节礼物的商品，理解推荐理由，并完成收藏或加入购物袋等购买前动作。

## 2. 产品目标

构建一个可现场操作的交互式 Live Demo，让 Kering 品牌团队体验完整的 AI 礼品导购路径：

```text
用户需求或场景 -> AI 理解 -> Saint Laurent 商品推荐 -> 商品详情 -> 收藏或加入购物袋
```

Demo 需要证明 fAIshion 可以将品牌商品数据转化为节日 Campaign 中可落地的导购推荐体验，帮助奢侈品牌提升商品发现和销售转化。

## 3. 目标用户

### 终端消费者

为伴侣、朋友或自己选购情人节礼物的消费者。

### 品牌与零售团队

评估该方案是否能支持奢侈品节日 Campaign 转化、客户经营和商品发现的 Kering 品牌相关团队。

## 4. 项目范围

### 本期范围

- 情人节礼品推荐路径
- 自然语言商品搜索
- 基于风格的商品发现
- 基于场景的商品推荐
- 包含图片、品类、价格、风格标签和推荐理由的商品卡片
- 收藏和购物袋交互
- 包含 6-8 个商品的 Demo SKU 数据库
- 符合 Saint Laurent 调性的极简奢侈品 UI

### 不在本期范围

- 彩妆
- 护肤
- 美妆礼盒
- 完整结账流程
- 支付
- 用户登录
- 实时库存同步
- 第一版 Demo 暂不接入真实 AI API

## 5. 商品品类

Demo SKU 数据库应覆盖以下商品品类。

| 品类 | 示例商品 |
| --- | --- |
| 包袋 | 托特包、肩背包、迷你包、手拿包 |
| 配饰 | 墨镜、皮带、首饰、小皮具 |
| 成衣 | 夹克、西装外套、连衣裙、大衣 |
| 鞋履 | 高跟鞋、靴子、乐福鞋、凉鞋 |

香水不作为本次 Demo 的核心品类。如需保留，可作为附加推荐出现，但不应成为主礼品路径。

### 三个用户可理解的 Demo 风格

Demo 前台只使用三个用户可理解的风格标签。这三个词应是用户能马上理解的消费语言；内部 YSL 风格代码仍可用于推荐逻辑、商品归类和 Pitch 讲述。

- **经典极简**
  - 内部 YSL 风格代码：Iconic Minimal
  - 用户理解：安全、精致、不容易出错，适合作为低调有质感的礼物。
  - 商品方向：Cassandre、Le 5 a 7、Sac de Jour、小皮具、黑色或中性色包袋。
- **黑色酷感**
  - 内部 YSL 风格代码：Dark Leather Edge
  - 用户理解：更有态度，带有黑色、皮革、利落和自信的感觉。
  - 商品方向：皮革单品、靴子、墨镜、黑色配饰、适合夜晚场景的单品。
- **利落优雅**
  - 内部 YSL 风格代码：Sharp Tailoring / Power Elegance
  - 用户理解：更成熟、精致，适合约会晚餐、纪念日和正式穿搭场景。
  - 商品方向：西装外套、tuxedo 灵感剪裁、精致鞋履、优雅包袋、结构感配饰。

## 6. 核心需求

### A. 基础搜索推荐

用户可以用自然语言描述自己的送礼需求。

示例输入：

- “帮我选一个送女朋友的情人节礼物，预算 5000 元左右，风格经典极简。”
- “我想给男朋友选一件黑色酷感但低调的礼物。”
- “推荐一个适合情人节晚餐约会的 Saint Laurent 单品。”

系统需要识别：

- 送礼对象
- 预算
- 场景
- 风格偏好
- 用户提到的商品品类偏好

系统需要返回：

- 3-5 个推荐商品
- 商品图片
- 商品名称
- 商品品类
- 价格
- 风格标签
- 推荐理由
- CTA：加入收藏 / 加入购物袋

### B. 风格搜索引擎

用户不仅可以按商品名称搜索，也可以通过审美意图和风格关键词查找商品。

支持的用户前台风格标签：

- 经典极简
- 黑色酷感
- 利落优雅

分析依据：

- 前台 UI 应使用用户能马上理解的词汇，而不是时装行业内部语言。
- 内部 YSL 风格代码仍可用于推荐逻辑、商品归类和 Pitch 讲述。
- 三个标签足够支撑 Demo，因为它们更容易理解和演示，同时仍覆盖 Saint Laurent 的核心视觉世界。

示例：

用户选择 `经典极简` + `送给她`。

预期输出：

- 黑色或中性色包袋
- 精致配饰
- 优雅鞋履或成衣单品
- 解释每个商品为何符合该风格的推荐文案

### C. 场景推荐单品

用户可以基于情人节相关场景浏览商品推荐。

必备场景：

- 情人节礼物：送给她
- 情人节礼物：送给他
- 约会晚宴穿搭
- 纪念日礼物
- 犒赏自己
- 预算内奢侈礼物

可选筛选条件：

- 送礼对象：她 / 他 / 中性
- 年龄段：20+ / 30+ / 40+
- 预算：3000 元以下 / 3000-8000 元 / 8000 元以上
- 风格：经典极简 / 黑色酷感 / 利落优雅

预期输出：

- 1 个主推商品
- 2-4 个辅助推荐商品
- 明确的销售导向推荐理由
- 收藏和购物袋操作

### D. AI 导购 UX 原则：不是传统问卷

AI Gift Finder 不应表现为传统问卷、筛选树或聊天记录。它的价值是降低用户决策成本：理解自然语言、推断缺失上下文、即时推荐商品，并支持快速微调。

需要避免的传统问卷行为：

- 用户必须完成固定步骤后才能看到商品。
- 把性别、预算、品类、风格做成必须填写的表单。
- 展示一长串用户气泡和 AI 回复气泡。
- 只返回冷冰冰的商品列表，没有送礼逻辑和推荐理由。

需要设计的 AI 导购行为：

- 自然语言优先，结构化 chips 在后。
- 用户输入一句话后，应立即看到商品。
- AI 抽取可见 intent chips，例如送礼对象、场景、预算、风格和品类。
- AI 可以推断用户没说完整的信息，而不是阻塞流程。
- 结果应以商品图为主，不是以长文本回复为主。
- 每个推荐商品给出一句简短理由，连接送礼场景、风格和 Saint Laurent 商品逻辑。
- 结果后提供快速微调动作，例如 `更酷一点`、`只看包袋`、`提高预算`、`更正式一点`。
- 页面可以显示 current intent summary，但不做传统 chat history。

### E. 三条 Demo 故事线 UX

这三条故事线分别对应用户提出的三个需求：基础搜索推荐、风格搜索引擎、场景推荐单品。每条故事线都要适合现场 Demo，在短时间内跑完从需求到商品推荐再到收藏或购物袋的路径。

#### 故事线 A：一句话礼物需求

用户需求：基础搜索推荐。

用户心态：“我知道要送给谁，但不知道该选 Saint Laurent 的哪个单品。”

入口：首屏 AI Gift Finder prompt。

示例输入：“帮我选一个送女朋友的情人节礼物，预算 5000 元左右，风格经典极简。”

AI 行为：

- 从一句话里识别送礼对象、预算、场景和风格。
- 自动推断情人节送礼语境和适合的商品品类。
- 不要求用户先填完整问卷。
- 返回覆盖包袋、配饰、鞋履、小皮具的礼品短名单。

UX 顺序：

1. 用户在 AI Gift Finder 输入一句话。
2. 系统转换为 intent chips：`送给她`、`情人节`、`经典极简`、`3000-8000 元`。
3. 页面立即展示带有 YSL 商品大图的推荐结果。
4. 每张商品卡给出一句简短送礼理由。
5. 用户可以用快捷动作微调：`降低预算`、`更经典`、`只看包袋`、`更低调`。
6. 用户打开商品详情，并加入收藏或购物袋。

成功信号：用户不用手动填问卷，也能快速得到可信的礼品短名单。

#### 故事线 B：风格意图搜索

用户需求：风格搜索引擎。

用户心态：“我知道想要什么感觉，但不知道商品名字。”

入口：三个风格 chips + 可选 prompt。

支持的风格 chips：

- 经典极简
- 黑色酷感
- 利落优雅

示例输入：“送男朋友，黑色酷感，但不要太张扬。”

AI 行为：

- 把用户的审美意图翻译成 YSL 风格代码和商品方向。
- 用内部风格映射连接用户语言和 YSL house codes。
- 推荐符合 mood 的商品，而不是只做关键词匹配。

UX 顺序：

1. 用户点击一个风格 chip，或输入一句风格描述。
2. 系统用短 chips 展示理解到的 mood，不用大段文字解释。
3. 商品 grid 立即更新为符合该风格的 YSL 商品。
4. 如果用户没有指定品类，结果可以混合包袋、配饰、鞋履和小皮具。
5. 用户可以继续微调：`更经典`、`更适合晚宴`、`不要太夸张`、`加入皮革单品`。
6. 商品卡始终突出图片、风格匹配理由、价格和 CTA。

成功信号：用户无需知道商品名，也能通过审美意图找到合适单品。

#### 故事线 C：场景礼品 Edit

用户需求：场景推荐单品。

用户心态：“我在为一个情人节场景购物，希望看到被策划好的礼品组合。”

入口：场景卡片。

必备场景卡：

- 情人节礼物：送给她
- 情人节礼物：送给他
- 约会晚宴穿搭
- 纪念日礼物
- 犒赏自己
- 预算内奢侈礼物

AI 行为：

- 把场景作为第一上下文。
- 送礼对象、年龄段、预算和风格只作为可选信号，不做强制问卷步骤。
- 生成一个主推商品 + 2-4 个辅助商品的 curated edit。
- 解释这些商品如何组成一个礼品故事或穿搭故事。

UX 顺序：

1. 用户选择一个场景卡，例如 `情人节礼物：送给他`。
2. 系统提供轻量 chips，可选送礼对象、预算和风格。
3. 用户即使跳过 chips，AI 也直接返回推荐 edit。
4. 推荐区展示 1 个主推商品和 2-4 个辅助商品。
5. 每个商品都有销售导向理由，解释为什么适合情人节送礼或约会晚宴穿搭。
6. 用户可以微调：`更黑色酷感`、`8000 元以内`、`更正式一点`、`只看配饰`。
7. 用户打开商品详情，或把商品加入收藏/购物袋。

成功信号：用户感受到的是 Saint Laurent 礼品编辑的策划感，而不是被迫填问卷。

## 7. 用户路径

1. 用户进入情人节礼品 Campaign 页面。
2. 用户第一眼看到 AI Gift Finder 作为核心交互入口。
3. 用户选择三种路径之一：按需求搜索、按风格搜索、按场景推荐。
4. 系统收集或推断送礼对象、场景、预算和风格。
5. 系统从包袋、配饰、成衣和鞋履中推荐商品。
6. 用户打开商品详情卡片。
7. 用户将一个或多个商品加入收藏或购物袋。

### 参考 BC 的交互 UX

流程图应参考 Brunello Cucinelli AI 的交互模式，但只参考交互方式。BC 不是情人节送礼故事，不是本次 Campaign 主题，也不是销售目标，因此不能把 BC 当成叙事模板照搬。

这里参考的是 BC 的 AI 导航、动效节奏和引导式交互。YSL Demo 必须讲自己的情人节礼品故事：以销售转化为目标，突出 Saint Laurent 商品，并清楚走向收藏或购物袋。

需要保留的 BC 交互特点：

- 以 prompt-first 的 AI 助手入口开始。
- 用户表达初始意图后，用引导式选项继续推进，而不是只有空白聊天框。
- 逐步澄清送礼对象、预算、风格和场景。
- 推荐商品卡片要给出清晰推荐理由。
- 保留 refinement loop，让用户看到结果后可以继续调整风格、预算、对象或场景。
- 参考引导式商品探索中的轻量转场和内容 reveal 动效。
- 从推荐结果顺滑进入商品详情、收藏和购物袋。

不复制 BC：

- 不复制 BC 的故事、主题或官网导航目标。
- 不复制 BC 的品牌视觉、商品图、语气、字体或色彩。
- 不复制会拖慢商品推荐的慢生活方式探索路径。

YSL Campaign 原则：

```text
参考 BC 的 UX 模式和动效节奏；YSL 自己定义情人节礼品故事和电商转化路径。
```

### 用户流程图

```mermaid
flowchart TD
  A["进入 YSL 情人节 Campaign"] --> B["AI Gift Finder<br/>参考 BC 的 prompt 入口"]
  B --> C["引导式入口选择<br/>需求 / 风格 / 场景"]
  C --> D1["按需求搜索<br/>自然语言输入"]
  C --> D2["按风格搜索<br/>三个风格标签"]
  C --> D3["按场景推荐<br/>送礼场景"]

  D1 --> E["逐步澄清<br/>对象 / 预算 / 风格 / 场景"]
  D2 --> E
  D3 --> E

  E --> F["匹配 YSL 商品<br/>官网素材 + Demo SKU 数据"]
  F --> G["推荐卡片<br/>商品图 / 价格 / 风格 / 理由"]
  G --> H{"用户下一步"}
  H --> I["继续细化需求<br/>调整风格 / 预算 / 场景"]
  I --> E
  H --> J["打开商品详情"]
  J --> K1["加入收藏"]
  J --> K2["加入购物袋"]
  K1 --> L["完成销售导向礼品发现路径"]
  K2 --> L
```

## 8. 页面结构

### 首屏

- Campaign 标题：Saint Laurent Valentine Gift Edit
- AI Gift Finder 搜索框
- 三个入口：按需求搜索、按风格搜索、按场景推荐
- 视觉应以商品和 Campaign 为主，而不是只展示视频。

### 礼品品类区

展示四个品类入口：

- 包袋
- 配饰
- 成衣
- 鞋履

### AI 推荐结果区

展示根据用户选择路径或输入内容生成的商品推荐卡片。

每张卡片包含：

- 商品图片
- 商品名称
- 品类
- 价格
- 风格标签
- 推荐理由
- 加入收藏
- 加入购物袋

### 商品详情

包含：

- 商品大图
- 商品名称
- 价格
- 材质
- 搭配建议
- 礼品推荐理由
- 行动按钮

## 9. Demo V0.1 推荐逻辑

第一版 Demo 不需要接入真实 AI 模型。为了保证现场稳定性和速度，可先使用规则匹配推荐逻辑。

推荐数据字段：

```js
{
  id: "sl-bag-001",
  name: "Le 5 a 7 Shoulder Bag",
  category: "Bags",
  price: 22500,
  image: "...",
  tags: ["classic-minimal", "iconic-minimal", "gift-for-her", "evening"],
  occasions: ["valentine", "anniversary", "date-night"],
  recipients: ["her", "neutral"],
  reason: "A compact Saint Laurent signature bag that feels personal, polished, and easy to wear beyond Valentine's Day."
}
```

匹配规则：

1. 优先匹配场景。
2. 其次匹配送礼对象。
3. 再匹配预算。
4. 最后匹配风格标签。
5. 如果没有完全匹配结果，返回最接近的品类匹配，并说明推荐原因。

## 10. 体验与视觉方向

设计原则：

- 奢侈品极简感
- 黑、白、中性米色、克制金色点缀
- 商品优先的页面构图
- 清晰的销售转化动作
- 适合展台现场的快速交互

避免：

- 用玫瑰图标作为主要 UI
- 过重的红色或粉色情人节视觉
- 彩妆、美妆礼品叙事
- 页面内出现大段文字
- 只有视频、无法互动的 Demo 体验

整体体验应像一位 Saint Laurent 数字销售顾问，而不是普通客服机器人。

## 11. Demo 验收标准

- 首次使用者无需讲解即可完成一次推荐路径。
- A/B/C 三条路径均可操作。
- 推荐结果只包含包袋、配饰、成衣和鞋履。
- 用户可以将推荐商品加入收藏或购物袋。
- 页面响应速度足够支持展台现场使用。
- 视觉设计符合奢侈品、极简和 Saint Laurent 调性。
- Demo 能清楚展示给 Kering 评审完整的端到端逻辑。

## 12. 第一版开发清单

- 将玫瑰聊天按钮替换为极简 AI Gift Finder 入口。
- 重写首屏，围绕 Valentine Gift Edit 和销售型商品发现展开。
- 增加三条主路径：需求、风格、场景。
- 创建 6-8 个覆盖允许品类的商品数据。
- 将普通聊天回复替换为商品推荐结果。
- 增加推荐结果展示区域。
- 确保推荐卡片上的收藏和购物袋操作可用。
- 移除 makeup、skincare、beauty gift 以及以玫瑰为核心的 Campaign 文案。
- 测试桌面端和移动端可用性。

## 13. 时间节点

| 日期 | 交付物 |
| --- | --- |
| 2026 年 6 月 5 日 | 第一轮彩排：基础 Live Demo 路径和 Pitch 初稿 |
| 2026 年 6 月 16 日 | 完整 Demo 和最终 Pitch Deck |
| 2026 年 7 月 3 日 | 可用于展台现场体验的交互 Demo |

## 14. 设计参考与商品素材

### Brunello Cucinelli AI 参考

参考目录：`references/brunello-cucinelli-ai/`

Brunello Cucinelli AI 仅作为 UI/UX 工作流参考。

参考重点：

- AI 助手入口和商品发现流程
- 通过 prompt 探索商品的交互方式
- 从用户意图到商品结果的引导式推荐路径
- 引导式商品探索中的轻量动效和内容 reveal 节奏

不复制：

- Brunello Cucinelli 的故事、Campaign 目的或官网导航目标
- Brunello Cucinelli 品牌视觉
- Brunello Cucinelli 字体、色彩、图片、商品风格或品牌语气

### Saint Laurent 中国官网参考

参考目录：`references/saint-laurent-cn/`

Saint Laurent 中国官网作为主要品牌、视觉和电商参考。

参考重点：

- 字体、header、footer、导航、间距和页面节奏
- 黑白极简的奢侈品视觉调性
- 官网商品图片和电商品类展示方式
- 商品品类：包袋、配饰、成衣、鞋履

实施原则：

```text
BC 提供 UX 模式和动效节奏参考；YSL 定义情人节礼品故事、商品逻辑和品牌表达。
```

### Saint Laurent 官网商品素材

素材目录：`ysl官网素材/`

使用已保存的 Saint Laurent 中国官网商品页素材，作为本次情人节礼品 Campaign Demo 的主要商品图片和品类参考。

素材结构：

| 目录 | 包含商品页 | Demo 用途 |
| --- | --- | --- |
| `ysl官网素材/女/` | 官网首页、成衣、鞋履、配饰、小皮具 | 送给她、约会晚宴穿搭、犒赏自己 |
| `ysl官网素材/男/` | 26 夏季男士系列、旅行袋、鞋履、配饰、小皮具 | 送给他、低调奢华、经典配饰 |

必须使用：

- 推荐卡片、品类入口和商品详情模块中的商品图，应优先来自 `ysl官网素材/`。
- 商品选择应保持在包袋、配饰、成衣、鞋履和小皮具范围内。
- 男士和女士路径应使用对应的官网素材目录，确保商品相关性。
- 商品名称、视觉层级、间距、商品卡片节奏、header 和 footer 应贴近 Saint Laurent 官网参考。

不使用：

- 不使用彩妆、护肤、美妆礼盒，香水也不作为主要送礼路径。
- 最终 YSL Demo UI 不使用 Brunello Cucinelli 的商品图片、色彩、字体或品牌调性。
- 如果已有 YSL 官网商品素材，不使用通用图库图片替代。

商品素材映射：

| Demo 品类 | 推荐素材来源 |
| --- | --- |
| 包袋 | 男士旅行袋与女士官网首页、品类图 |
| 配饰 | 男士与女士配饰目录 |
| 成衣 | 女士成衣与男士 26 夏季系列 |
| 鞋履 | 男士与女士鞋履目录 |
| 小皮具 | 男士与女士小皮具目录 |
