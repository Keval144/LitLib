"use client";

import LoginForm from "@/components/auth/loginform";
import { ToastHandler } from "@/components/auth/successtoast";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <Suspense fallback={null}>
        <ToastHandler />
      </Suspense>
    </>
  );
}
