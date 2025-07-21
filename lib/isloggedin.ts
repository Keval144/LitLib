"use client";

import { useSession } from "next-auth/react";

export function IsUserLoggedIn(): boolean {
  const { status } = useSession();
  return status === "authenticated";
}
