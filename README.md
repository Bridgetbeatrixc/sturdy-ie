# Sturdy.ie

Personal website for Jason Sturdy, with every page section editable through a headless CMS.

**Live site:** https://sturdy-ie-66rb.vercel.app

## What's inside

- **Frontend:** a Next.js site with sections for the hero, services, expertise, case studies, ventures, insights and blog, team, FAQ and contact. Content is fetched from the CMS, with live preview while editing.
- **CMS backend:** Payload CMS on Next.js with 20+ content collections (hero, about, case studies, ventures, insights, FAQ, footer and more), PostgreSQL storage and S3 media uploads.
- **Contact form:** validated with React Hook Form and Zod, delivered by email through Resend.

## Tech stack

| Part | Stack |
|---|---|
| Frontend | Next.js, React, TypeScript, Tailwind CSS, Motion, React Hook Form, Zod, Resend |
| Backend | Payload CMS, Next.js, PostgreSQL, S3 storage, GraphQL, Vitest, Playwright |
| Deployment | Vercel (frontend), Docker on Railway (CMS) |

## Project structure

```text
frontend/   Next.js website
backend/    Payload CMS (collections, migrations, tests)
Dockerfile  Production image for the CMS
```

## Running locally

```bash
# CMS (needs DATABASE_URL, PAYLOAD_SECRET and S3 storage settings in backend/.env)
cd backend
npm install
npm run dev

# Website (needs PAYLOAD_API_URL / NEXT_PUBLIC_PAYLOAD_API_URL and RESEND_API_KEY in frontend/.env.local)
cd frontend
npm install
npm run dev
```
