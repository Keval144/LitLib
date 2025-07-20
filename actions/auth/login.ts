"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return { error: "Missing fields" };
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
      return { error: "User not found" };
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return { error: "Invalid password" };
    }
  } catch (err) {
    console.error("Login error:", err);
    return { error: "Internal server error" };
  } finally {
    redirect("/dashboard");
  }
}
