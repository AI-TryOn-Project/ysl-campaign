# AI and Frontend Implementation Guidelines

This document defines the implementation rules for the Saint Laurent Qixi campaign app. It is written for both human developers and AI coding agents working in this repository.

## Media Asset Rules

### README and Documentation Media

When README or documentation needs to reference video, GIF, or large image assets:

- Upload the asset to Vercel Blob first.
- Reference the public Blob URL in Markdown.
- Do not reuse homepage or campaign page local assets as README-only documentation media.
- Do not add README-only screenshots, videos, or demos under `public/assets`.
- Do not point documentation media at `/assets/...` paths, because those paths are part of the app runtime bundle.

Recommended Blob path pattern:

```text
ysl-campaign/docs/<topic>/<filename>
ysl-campaign/valentine/motion/<filename>
```

For runtime campaign video assets, prefer Vercel Blob URLs in `src/data/campaign.ts`. Keep `public/assets` for small product/editorial images that are required for first-screen rendering or static fallback.

### Frontend Media Loading

- Do not mount offscreen autoplay videos.
- For inactive sections, render poster images instead of `<video>`.
- Only create video elements when the section, modal, or page is active.
- Use `preload="metadata"` for campaign videos unless the current screen needs immediate playback.
- Keep posters local or lightweight so the first viewport stays responsive.

The Valentine Style Guide currently follows this pattern through `Media` and `StyleGuideSection`: inactive cards render posters; active cards can mount video.

## AI Integration Rules

The YSL campaign frontend must not own model credentials, tool execution, database access, or product-search logic.

The frontend AI flow should remain:

```text
ysl-campaign frontend
  -> useChat + DefaultChatTransport
  -> faishion-web-app /api/public/ysl-chat
  -> ToolLoopAgent
  -> searchProducts
  -> streamed UIMessage parts
  -> ysl-campaign parser/rendering
```

Rules:

- Use `@ai-sdk/react` `useChat` for the public concierge flow.
- Keep `NEXT_PUBLIC_YSL_CHAT_API_URL` as the frontend override for the public endpoint.
- Do not invent a custom streaming protocol unless the backend contract changes.
- Do not call OpenAI, Cohere, Prisma, or product-search services directly from `ysl-campaign`.
- Parse streamed tool results in `src/lib/ysl-chat.ts`.
- Treat `tool-searchProducts` as the source of remote recommendation products.
- Keep product rendering resilient: show loading skeletons while the tool is running, show a clear error state if the tool fails, and keep local starter products as a fallback before search starts.

The public API can return HTTP 200 while a downstream tool fails. If the UI shows `Search failed`, inspect the WebApp search path first: embedding, proxy, fallback DB query, and Prisma schema alignment.

## Frontend Architecture Rules

The Valentine page is a composed interactive demo, not a landing-page template. Preserve the component boundaries.

Core structure:

- `ValentinePage.tsx` orchestrates the shell, provider, header, pager, sections, and overlays.
- `ValentineContext.tsx` owns page-level UI state, chat state, and derived recommendation state.
- `SnapPager` and `useSnapPager` own page navigation, wheel/pointer behavior, and snap transitions.
- Each section under `src/components/valentine/sections/` should remain a focused page component.
- Shared UI lives under `src/components/valentine/ui/`.
- Campaign data, products, media manifests, and featured IDs live in `src/data/campaign.ts`.

Implementation rules:

- Keep one snap page as one section component.
- Do not collapse the Valentine flow into a monolithic component.
- Keep heavy media, product grids, and modals behind active-state gates where possible.
- Preserve `SNAP_SECTION_IDS` and `SNAP_SCENES` alignment when adding, removing, or reordering pages.
- Do not attach wheel or pointer handlers inside individual sections; keep pager interaction in `useSnapPager`.
- Keep text reveal effects scoped through `BlurRevealText`, `.letter-reveal`, and `.lr-char`.
- Avoid global CSS churn. Prefer targeted class changes under `.valentine-shell`.

## Performance Rules

Before marking a frontend change complete:

- Run `npm run build`.
- Check that no new README-only media was added under `public/assets`.
- Check that large videos are on Vercel Blob, not in newly added local runtime paths.
- Verify inactive sections do not autoplay or decode large videos.
- If changing snap behavior, test repeated wheel/pointer navigation in both directions.
- If changing chat behavior, verify the three-stage flow: input, concierge reply, product results.

For local China-based development, outbound API or Blob checks may need:

```bash
export https_proxy=http://127.0.0.1:8118
export http_proxy=http://127.0.0.1:8118
```

Do not treat network failures as product logic failures until proxy and environment variables are checked.
