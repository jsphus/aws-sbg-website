# AWS Student Builder Group — Landing Page

Static marketing site for the AWS Student Builder Group community. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 + shadcn/ui (base-nova style)
- **Analytics:** Vercel Analytics (production only)
- **Fonts:** Inter, JetBrains Mono, Press Start 2P

## Meetup Events Integration

The Events section automatically pulls upcoming events from your Meetup group's public iCal feed. No manual copy-pasting required.

### How It Works

- The site fetches your Meetup group's iCal export URL (a free, official Meetup feature)
- Events are parsed and displayed on the home page and `/events` page
- Next.js caches the response and revalidates it in the background every 6 hours — no cron job, no database needed

### Setup

1. **Get your iCal URL:**
   - Go to your Meetup group page
   - Click the **Events** tab
   - Click **Calendar/export**
   - Copy the **iCal** link (looks like `https://www.meetup.com/your-group/events/ical/`)

2. **Set the environment variable:**
   - In Vercel: go to **Project Settings → Environment Variables**
   - Add `MEETUP_ICAL_URL` with your iCal feed URL for Production
   - For local development, copy `.env.local.example` to `.env.local` and fill in your URL

3. **Deploy** — the site will start showing live events automatically.

### Refresh Interval

The `revalidate` value (in seconds) controls how often the cached events refresh:

| Value   | Interval  |
|---------|-----------|
| `3600`  | Hourly    |
| `21600` | 6 hours (default) |
| `86400` | Daily     |

This is set in both `app/api/events/route.ts` and the events page/component files.

### API Endpoint

A JSON endpoint is available at `GET /api/events`:

```json
{
  "events": [...],
  "fetchedAt": "2026-08-03T01:00:00.000Z"
}
```

Returns `502` with an empty events array if the feed is unreachable.

## Project Structure

```
app/
  layout.tsx          # Root layout — fonts, metadata, analytics
  page.tsx            # Home page
  globals.css         # Tailwind v4 imports, shadcn theme tokens
  about/page.tsx      # /about
  events/page.tsx     # /events
  partners/page.tsx   # /partners
  api/events/route.ts # Events JSON endpoint
components/
  ui/                 # shadcn primitives
  *.tsx               # Feature sections (hero, stats, events, etc.)
lib/
  meetup.ts           # iCal feed fetcher and parser
  events-data.ts      # Mock event data and types
  utils.ts            # cn() helper
public/images/        # Static assets
```

## Commands

```bash
npm run dev      # Dev server
npm run build    # Production build
npm run lint     # ESLint
```

## Notes

- **Dark-only theme.** The site uses a pinned dark mode — no light mode support.
- **Images unoptimized.** Suitable for static export or CDN hosting.
- **No typecheck script.** `next.config.mjs` has `ignoreBuildErrors: true`.
