"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function signup(formData: FormData) {
  try {
    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      return { error: "Missing email or password" };
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { error: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        firstName: firstname,
        lastName: lastname,
        email: email,
        role: "PATRON",
        password: hashedPassword,
      },
    });

    return { success: true, redirectTo: "/login" };
  } catch (error) {
    console.error("Signup failed:", error);
    return { error: "Internal server error" };
  }
}
