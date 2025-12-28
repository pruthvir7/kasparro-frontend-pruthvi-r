# Kasparro – AI-SEO Frontend

**Brand Intelligence for the AI‑First Search Era**

Kasparro is a frontend-only Next.js app that showcases an AI‑native SEO platform. It focuses on a polished marketing site and a dashboard-style UI for exploring audit modules, brands, and metrics using local JSON data.

---


## 🚀 Live Demo

[![Deployed on Render](https://kasparro-frontend-pruthvi-r.onrender.com)](https://kasparro-frontend-pruthvi-r.onrender.com/)

**Live Site:** [https://kasparro-frontend-pruthvi-r.onrender.com/](https://kasparro-frontend-pruthvi-r.onrender.com/)

---

## 🚀 Features

### Marketing Site

- **Hero section** with AI‑SEO positioning and primary CTA.
- **“How Kasparro Works”** flow explaining the 4‑step process.
- **“Why AI‑SEO is Different”** section with cards for rankings vs citations, context over keywords, and trust.
- **Static pages** for:
  - `/` – Home
  - `/platform` – Platform overview
  - `/about` – About page

### Dashboard Experience

- `/dashboard` layout with:
  - Sidebar navigation (`components/layout/DashboardSidebar.tsx`)
  - Top header (`components/layout/Header.tsx`)
  - Footer (`components/layout/Footer.tsx`)
- **Audit module cards** (`ModuleCard.tsx`) driven by JSON data.
- **Module detail view** (`AuditModuleDetail.tsx`) for deeper explanations.
- **Metric cards & progress UI**:
  - `MetricCard.tsx` for key metrics
  - `Progress.tsx` for visual progress bars
- **Pipeline view** (`PipelineFlow.tsx`) to show the audit flow visually.

### UI Components

Located under `components/ui/`:

- `Button.tsx` – Primary/secondary buttons.
- `Card.tsx` – Card container component.
- `Badge.tsx` – Small label badges.
- `Progress.tsx` – Progress bar.
- `Skeleton.tsx` – Skeleton loader for loading states.
- `Toast.tsx` – Toast notification wrapper.

Toast behavior is wired via `lib/useToast.tsx` and `lib/store.ts`.

### Data-Driven Demo

Under `components/data/audit-data/`:

- `modules.json` – List of audit modules (name, description, scores, etc.).
- `brands.json` – List of demo brands that can be selected.

This lets the dashboard feel “live” without any backend.

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router, `app/` directory)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State / Utilities:** Simple custom store (`lib/store.ts`), toast hook (`useToast.tsx`)
- **Data:** Local JSON files under `components/data/audit-data`
- **Tooling:** PostCSS, Tailwind, TypeScript

---

## 📂 Project Structure

High‑level overview based on the current tree:

```
.
├── app/
│   ├── (dashboard)/
│   │   ├── architecture/
│   │   │   └── page.tsx        # Architecture view (dashboard section)
│   │   ├── audit/
│   │   │   └── page.tsx        # Audit modules / results view
│   │   └── dashboard/
│   │       └── page.tsx        # Main dashboard landing
│   ├── (public)/
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   └── platform/
│   │       └── page.tsx        # Platform page
│   ├── globals.css             # Global styles + Tailwind base
│   └── layout.tsx              # Root app layout
│
├── components/
│   ├── features/
│   │   ├── AuditModuleDetail.tsx
│   │   ├── BrandSelector.tsx
│   │   ├── MetricCard.tsx
│   │   ├── ModuleCard.tsx
│   │   └── PipelineFlow.tsx
│   ├── layout/
│   │   ├── DashboardSidebar.tsx
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   ├── ui/
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Progress.tsx
│   │   ├── Skeleton.tsx
│   │   └── Toast.tsx
│   └── data/
│       └── audit-data/
│           ├── brands.json
│           └── modules.json
│
├── lib/
│   ├── store.ts                # Shared store (e.g., selected brand/module)
│   ├── useToast.tsx            # Toast hook
│   └── utils.ts                # Utility helpers (cn, etc.)
│
├── types/
│   └── index.ts                # Shared TypeScript types
│
├── .env.example
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

If your filenames differ slightly, update them here to match.

---

## 📦 Installation & Scripts

### Prerequisites

- Node.js 18+ recommended  
- npm (or another package manager)

### Install

```
git clone https://github.com/your-username/kasparro-frontend.git
cd kasparro-frontend
npm install
```

### Development

```
npm run dev
```

Open `http://localhost:3000` in your browser.

### Production build

```
npm run build
npm start
```

By default this runs on port `3000`.

---

## ⚙️ Configuration

### Environment Variables

The current frontend demo doesn’t require any secrets.  
If you add APIs later, document them here and mirror them in `.env.example`.

Example:

```
# .env.example
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Tailwind

- Configured in `tailwind.config.ts`.
- Global styles and base layer in `app/globals.css`.

---

## 🧪 What Is / Isn’t Implemented

**Implemented:**

- Static marketing pages.
- Dashboard layout with sidebar and feature components.
- Data-driven modules and brands via local JSON.
- UI components (cards, metrics, progress, toast, skeletons).

**Not implemented (yet):**

These are **not** present and should be considered future work if you add them:

- Real audit execution against live data.
- Trust-signal scoring with real E‑E‑A‑T metrics.
- Competitor comparison logic or views backed by an API.
- Per-user audit history or authentication.
- Database persistence (everything is in-memory + JSON at build time).

---

## 🚀 Deployment

You can deploy this app to any Node-compatible host (Render, Vercel, etc.).

Typical settings:

- **Build command:** `npm install && npm run build`
- **Start command:** `npm start`

For Render, create a new Web Service from your Git repo, set these commands, and choose Node as the environment.

---

## 🔮 Future Ideas (Optional Roadmap)

If you keep extending the app, potential next steps:

- Hook the dashboard into a real API.
- Add per-user audit history and persistence.
- Implement trust signals and competitor comparison views.
- Add authentication and role-based access.

---

## 📝 License

Add the license you prefer (e.g., MIT) in a `LICENSE` file and reference it here.

---

## 🙌 Credits

Built with:

- Next.js  
- React  
- Tailwind CSS  

