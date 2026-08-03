# AGENTS.md

## Project

Static marketing site for an AWS Student Builder Group community. Next.js 16 + React 19 + TypeScript. No backend, no API routes, no database.

## Commands

- `pnpm dev` — dev server (use pnpm, not npm/yarn)
- `pnpm build` — production build
- `pnpm lint` — eslint
- **No typecheck script.** `next.config.mjs` has `ignoreBuildErrors: true` — TypeScript errors will not fail the build.
- **No test infrastructure.** No test files, no test runner configured.

## Key quirks

- **Dark-only theme.** The HTML root has class `dark` and CSS variables are pinned to dark mode in `globals.css`. Do not add light-mode support.
- **shadcn v4, `base-nova` style.** UI components use `@base-ui/react` primitives (not Radix). The `components.json` defines this as `base-nova` style with `lucide` icons. Use `shadcn add <component>` to add new primitives.
- **Images unoptimized.** `next.config.mjs` sets `images: { unoptimized: true }` — suitable for static export or CDN.
- **Path alias.** `@/*` maps to project root (e.g., `@/components/hero`).

## Structure

```
app/
  layout.tsx          # Root layout — fonts, metadata, analytics
  page.tsx            # Home page
  globals.css         # Tailwind v4 imports, shadcn theme tokens, custom utilities
  about/page.tsx      # /about
  events/page.tsx     # /events
  partners/page.tsx   # /partners
components/
  ui/                 # shadcn primitives (only button.tsx so far)
  *.tsx               # Feature sections (hero, stats, events, etc.)
lib/utils.ts          # cn() helper (clsx + tailwind-merge)
public/images/        # Static assets
```

## Conventions

- Components are flat in `components/`, not nested by feature.
- Section components are server components by default; add `'use client'` only when needed (e.g., `site-header.tsx` for scroll/mobile state).
- Each route page wraps the same `SiteHeader` + `SiteFooter` shell.
- Custom CSS utilities in `globals.css`: `.pixel-grid`, `.reveal` (scroll-triggered fade-in), `.no-scrollbar`.
- Fonts loaded in `layout.tsx` via `next/font/google`: Inter (`--font-inter`), JetBrains Mono (`--font-mono`), Press Start 2P (`--font-pixel`).
- Analytics (`@vercel/analytics`) only loads in production.
