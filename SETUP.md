# PerfMonk Marketing Site — Setup Guide

## Stack
Next.js 14 · TypeScript · Tailwind CSS v3 · Framer Motion · shadcn/ui

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and add your values
cp .env.local.example .env.local

# 3. Run dev server
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Full site URL, e.g. https://www.perfmonk.in |
| `RESEND_API_KEY` | No | Resend API key for email. Without it, contact page uses mailto. |

## Deploy to Vercel

```bash
# Install Vercel CLI (first time only)
npm i -g vercel

# Deploy
vercel --prod
```

Set env vars in Vercel Dashboard → Project → Settings → Environment Variables.

## Pages

| Route | Description |
|---|---|
| `/` | Landing page (all sections) |
| `/contactus` | Contact page with mailto |
| `/pricing` | Full pricing page with comparison |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog post |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |
| `/cookies` | Cookie Policy |

## Contact Email
All contact links open `mailto:perfmonk@perfmonk.in` — no backend needed.

---

## Push to GitHub (run these from your terminal)

```bash
cd ~/startup/perfmonk/perfsite/frontend

# 1. Create the repo on GitHub (requires gh CLI — install: https://cli.github.com)
gh repo create perfmonk-site --public --description "PerfMonk marketing site"

# 2. Set remote and push
git remote add origin git@github.com:YOUR_USERNAME/perfmonk-site.git
git push -u origin main
```

Or create manually on GitHub at https://github.com/new, then:
```bash
git remote add origin https://github.com/YOUR_USERNAME/perfmonk-site.git
git push -u origin main
```

## Deploy to Vercel (after GitHub push)

```bash
npm i -g vercel
vercel --prod
```

Or connect at https://vercel.com/new → Import Git Repository → Select your repo.

Set these env vars in Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL` = `https://www.perfmonk.in`
- `RESEND_API_KEY` = your Resend key (optional)
