"use client";
import LoginForm from "@/components/auth/loginform";
import { SessionProvider } from "next-auth/react";

export default function LoginPage() {
  return (
    <>
      <SessionProvider>
        <LoginForm />
      </SessionProvider>
    </>
  );
}
