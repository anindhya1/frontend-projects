# Acme Dashboard

A full-stack invoice and customer management dashboard built with Next.js 16, featuring authentication, real-time search, and a PostgreSQL backend.

**Live Demo**: [https://nextjs-dashboard-2-psi-rouge.vercel.app/](https://nextjs-dashboard-2-psi-rouge.vercel.app/)

> Demo credentials — Email: `user@nextmail.com` | Password: `123456`

---

## Features

- **Authentication** — Credential-based login with NextAuth.js v5; protected dashboard routes
- **Invoice Management** — Create, view, edit, and delete invoices with status tracking (paid / pending)
- **Customer Management** — Browse customers with aggregated invoice analytics
- **Revenue Tracking** — Monthly revenue chart on the dashboard overview
- **Search & Pagination** — Debounced search across invoices; 6 results per page
- **Server-side Validation** — Zod schemas validate all form submissions on the server
- **Streaming UI** — Suspense boundaries with skeleton loaders for progressive rendering
- **SEO Metadata** — Per-page metadata for improved search visibility

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) with Turbopack |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Auth | NextAuth.js v5 (Credentials provider) |
| Database | PostgreSQL via Supabase |
| DB Client | `postgres` (serverless-compatible) |
| Validation | Zod |
| Icons | Heroicons |
| Package Manager | pnpm |

---

## Project Structure

```
nextjs-dashboard/
├── app/
│   ├── dashboard/
│   │   ├── (overview)/        # Dashboard home — cards, revenue chart, latest invoices
│   │   ├── invoices/          # Invoice list, create, and edit pages
│   │   └── customers/         # Customer listing
│   ├── login/                 # Login page
│   ├── lib/
│   │   ├── data.ts            # Database query functions
│   │   ├── actions.ts         # Server actions (mutations)
│   │   ├── definitions.ts     # TypeScript types
│   │   └── utils.ts           # Utility helpers
│   ├── ui/                    # Reusable React components
│   └── seed/                  # Database seed endpoint
├── auth.ts                    # NextAuth configuration
├── auth.config.ts             # Auth callbacks and protected routes
└── proxy.ts                   # Middleware matcher
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)
- A PostgreSQL database (e.g., [Supabase](https://supabase.com))

### Installation

```bash
git clone <repo-url>
cd nextjs-dashboard
pnpm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
# PostgreSQL connection strings
POSTGRES_URL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=

# NextAuth
AUTH_SECRET=          # Generate with: openssl rand -base64 32
```

### Database Setup

Seed the database with sample data by visiting `/seed` in your browser after starting the dev server, or via:

```bash
curl http://localhost:3000/seed
```

This creates the `users`, `customers`, `invoices`, and `revenue` tables and populates them with demo data.

### Development

```bash
pnpm dev      # Start dev server at http://localhost:3000 (Turbopack)
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

---

## Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push the repository to GitHub.
2. Import the project in the [Vercel dashboard](https://vercel.com/new).
3. Add all environment variables under **Settings → Environment Variables**.
4. Deploy.

---

## Database Schema

| Table | Key Columns |
|---|---|
| `users` | `id`, `name`, `email`, `password` (bcrypt hashed) |
| `customers` | `id`, `name`, `email`, `image_url` |
| `invoices` | `id`, `customer_id`, `amount` (cents), `status`, `date` |
| `revenue` | `month`, `revenue` |

---

## Acknowledgements

Built by following the [Next.js Learn Course](https://nextjs.org/learn) by Vercel, with additional features and customizations layered on top.
