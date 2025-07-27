# 📚 LitLib - Modern Library Management System

LitLib is a clean, fast, and feature-rich library management system built using **Next.js 14 App Router**, **HeroUI v2**, and **Tailwind CSS**.

Manage books, members, analytics, and more — all from a beautiful, responsive dashboard.

---

## 🚀 Technologies Used

- [Next.js 14 (App Router)](https://nextjs.org/docs/app)
- [HeroUI v2](https://heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Prisma + Postgress](https://www.prisma.io/)
- [NextAuth.js(JWT)](https://next-auth.js.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 💡 Features

- 📖 Book inventory management
- 👤 Member & user authentication
- 📊 Borrowing analytics dashboard
- 🌗 Theme switching (light/dark)
- 📱 Fully responsive design
- 🔐 Role-based access (admin/librarian/user)
- 💾 Database backup
- 💵 Fine algorithms
- 📨 Email notifications
- ⏳ Rate limiting, access control
- 📤 Image uploads stored in DB

---

## 🛠 Getting Started

### 📦 Install dependencies

```bash
npm install
```

### 🔐 Make .env file

```env
//Database url
DATABASE_URL=""

// Image Auth Keys
IMAGEKIT_PRIVATE_KEY=""
NEXT_PUBLIC_PUBLIC_KEY=""
NEXT_PUBLIC_URL_ENDPOINT=""

NEXTAUTH_URL=""
NEXTAUTH_SECRET=""

NODE_ENV =""
```

### 🏗️ Run Project and generate database

```bash
    prisma generate && npm run dev
```
