"use server";

import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcrypt";
// import { cookies } from "next/headers";

import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
  const prisma = new PrismaClient();
  const firstname = formData.get("firstname") as string;
  const lastname = formData.get("lastname") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Missing fields");
  }

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error("User already exists");
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

//   (await cookies()).set("signup_toast", "true", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "strict",
//     maxAge: 5,
//     path: "/login",
//   });
  redirect("/login");
}
