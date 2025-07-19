"use server";

import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcrypt";

import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const prisma = new PrismaClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Missing Fields");
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (!existingUser) {
    throw new Error("User Not Found");
  }

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid) {
    throw new Error("Invalid Password");
  }

  redirect("/dashboard");
}
