// useLogout.tsx
"use client";

import { signOut } from "next-auth/react";

export function useLogout() {
  return async () => {
    console.log("Logout called");
    await signOut({ callbackUrl: "/" });
  };
}
