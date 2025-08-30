"use server";

import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

export async function getUserRole() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return { role: null, authorised: false };
  }

  return {
    role: session.user?.role || "user",
    authorised: true,
  };
}
