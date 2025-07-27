"use client";

import LoginForm from "@/components/auth/loginform";
import { ToastHandler } from "@/components/auth/successtoast";

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <ToastHandler />
    </>
  );
}
