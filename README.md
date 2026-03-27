# Frontend Projects

A collection of frontend projects spanning vanilla HTML/CSS/JS, React, and Next.js — built as part of learning and practicing modern web development.

---

## Projects

### 1. JavaScript Amazon Clone — `javascript-amazon-project/`

A multi-page Amazon-style shopping experience built entirely with vanilla JavaScript (ES Modules). Covers the full shopping flow from browsing to order tracking.

**Features:**
- Product listing page with ratings and price display
- Add to cart with quantity selector
- Checkout page with order summary
- Orders history page
- Order tracking page
- Cart and product data managed via JS modules

**Stack:** HTML, CSS, vanilla JS (ES Modules)

**Pages:** `amazon.html`, `checkout.html`, `orders.html`, `tracking.html`

---

### 2. React Chatbot — `react-projects/chatbot-project/`

A React chatbot UI that sends and receives messages. Uses the `supersimpledev` Chatbot library for AI responses.

**Features:**
- Scrollable message thread with user/bot distinction
- Controlled input with send-on-click
- Live bot responses via `Chatbot.getResponse()`

**Stack:** React 19, Vite

**Run locally:**
```bash
cd react-projects/chatbot-project
npm install
npm run dev
```

---

### 3. React Ecommerce — `react-projects/ecomerce-project/`

A full-stack ecommerce app with a React frontend and a local backend API. Supports browsing products, managing a cart, placing orders, and viewing order history.

**Features:**
- Product grid fetched from a REST API
- Cart management (add, view, update)
- Multi-page routing: Home, Checkout, Orders
- Date formatting with Day.js
- Unit tests with Vitest

**Stack:** React 19, React Router 7, Axios, Day.js, Vite, Vitest

**Run locally:**
```bash
cd react-projects/ecomerce-project
npm install
npm run dev      # Frontend at http://localhost:5173
# Start the backend separately at http://localhost:3000
```

---

### 4. Acme Dashboard — `nextjs_project/nextjs-dashboard/`

A full-stack invoice and customer management dashboard built with Next.js. The most complete project in the collection.

**Live Demo:** [https://nextjs-dashboard-2-psi-rouge.vercel.app/](https://nextjs-dashboard-2-psi-rouge.vercel.app/)
> Demo credentials — Email: `user@nextmail.com` | Password: `123456`

**Features:**
- Credential-based authentication with NextAuth.js v5
- Invoice CRUD with paid/pending status tracking
- Customer management with aggregated analytics
- Monthly revenue chart
- Debounced search with pagination
- Server-side form validation via Zod
- Streaming UI with Suspense skeleton loaders
- SEO metadata per page

**Stack:** Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS, NextAuth.js v5, PostgreSQL (Supabase), Zod, pnpm

**Run locally:**
```bash
cd nextjs_project/nextjs-dashboard
pnpm install
# Add a .env file with POSTGRES_URL, AUTH_SECRET, etc. (see project README)
pnpm dev         # http://localhost:3000
```

---

## Standalone React/Chatbot Demos — `react-projects/`

A few standalone HTML files used for learning React basics before the full Vite setup:

| File | Description |
|---|---|
| `react-basics.html` / `react-basics .html` | React fundamentals explored in a single HTML file |
| `chatbot.html` + `chatbot.js` | Chatbot UI prototype before the React/Vite version |

---

## Repository Structure

```
frontend-projects/
├── javascript-amazon-project/        # Vanilla JS Amazon clone
├── react-projects/
│   ├── chatbot-project/              # React chatbot (Vite)
│   ├── ecomerce-project/             # React ecommerce (Vite + backend)
│   ├── chatbot.html / chatbot.js     # Standalone chatbot demo
│   └── react-basics.html            # React basics demo
└── nextjs_project/
    └── nextjs-dashboard/             # Acme Dashboard (Next.js, live on Vercel)
```
