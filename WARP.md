# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- LitLib is a Next.js (App Router) + TypeScript web app for library management. UI uses HeroUI and Tailwind. Auth is powered by NextAuth with a Prisma (PostgreSQL) data layer. The app ships both public pages and an admin dashboard with analytics.

Key commands
- Install dependencies:
```bash path=null start=null
npm install
```
- Environment setup (create .env as per README):
```bash path=null start=null
# .env
DATABASE_URL=""
IMAGEKIT_PRIVATE_KEY=""
NEXT_PUBLIC_PUBLIC_KEY=""
NEXT_PUBLIC_URL_ENDPOINT=""
NEXTAUTH_URL=""
NEXTAUTH_SECRET=""
NODE_ENV=""
```
- Generate Prisma client (first run and whenever prisma/schema.prisma changes):
```bash path=null start=null
npm exec prisma generate
```
- Start the dev server (Turbopack):
```bash path=null start=null
npm run dev
```
- Build for production:
```bash path=null start=null
npm run build
```
- Start production server:
```bash path=null start=null
npm run start
```
- Lint (auto-fix enabled):
```bash path=null start=null
npm run lint
```
- Tests: not configured in this repo.

High-level architecture
- Framework/runtime
  - Next.js App Router (TypeScript). Tailwind CSS and HeroUI for UI. Path alias configured via tsconfig ("@/*" → repo root).
  - next.config.js allows images from ik.imagekit.io.

- App composition (routing and layouts)
  - Root layout (app/layout.tsx) sets metadata/viewport, applies global styles, and wraps the tree with Providers (app/providers.tsx) which compose HeroUIProvider and next-themes. ReactLenis provides smooth scrolling; Vercel Analytics/Speed Insights are enabled.
  - Route groups organize features:
    - app/(auth): shared auth layout with carousel + theme switch; contains login and signup pages.
    - app/(home): shared layout and a role-aware landing page that dispatches to the admin dashboard for administrators or the public hero/features for general users.

- Authentication
  - NextAuth is configured in lib/auth.ts using the PrismaAdapter and a Credentials provider (email/password with bcrypt). Sessions use the "jwt" strategy.
  - JWT and session are enriched with user id and role via callbacks. Types are augmented in types/auth.d.ts so session.user includes id and role.
  - The NextAuth route handler is exposed via app/api/auth/[...nextauth]/route.ts.

- Data layer (Prisma + PostgreSQL)
  - prisma/schema.prisma targets a Postgres database. The Prisma client output is configured to generated/prisma and the app imports it from there (lib/prisma.ts uses "import { PrismaClient } from '@/generated/prisma'" and caches the client in dev).
  - Core domain models include: User (with role enum), LibraryItem (with status/type), Borrowing (with due/return and renewal tracking), Reservation, Fine, Notification, Blog, and Announcement. These support library inventory, lending, reservations, fines, and content.

- Server logic (APIs and actions)
  - app/api/dashboard/route.ts computes dashboard analytics (totals, popular items by borrow count, recent activity, monthly borrowing counts, distribution by type/role) and returns JSON for the admin UI.
  - actions/auth/signup.ts is a server action that validates input with zod, hashes passwords with bcrypt, and creates users with a default role.

- UI structure
  - Common components include a glass navbar (components/common/navbar.tsx) with NextAuth session-aware controls and a theme switch. Home UI is composed from hero and features sections. Admin layout/components live under modules/admin.
  - Email templates (email/) include OTP and due reminder templates.

Notes sourced from README.md
- After installing dependencies and setting up .env, the recommended local workflow is to generate the Prisma client and start dev:
```bash path=null start=null
prisma generate && npm run dev
```
(Equivalently, use "npm exec prisma generate" on systems where the prisma binary isn’t on PATH.)

