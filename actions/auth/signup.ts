//actions/auth/signup.ts
"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { z } from "zod";
import { redirect } from "next/navigation";


const schema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z
    .string()
    .email("Invalid email format")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(12, { message: "Password is too long maximum characters are 12" })
    .refine((val) => /[A-Z]/.test(val), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((val) => /\d/.test(val), {
      message: "Password must contain at least one number",
    })
    .refine((val) => /[@#$%^&+=!]/.test(val), {
      message: "Password must contain at least one special character ",
    }),
});

export async function signup(formData: FormData) {
  try {
    const data = {
      firstname: formData.get("firstname") as string,
      lastname: formData.get("lastname") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      return { error: parsed.error.issues[0].message };
    }

    const { firstname, lastname, email, password } = parsed.data;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return { error: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        firstName: firstname,
        lastName: lastname,
        email,
        role: "PATRON",
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.error("Signup failed:", error);
    return { error: "Internal server error" };
  } finally {
    redirect("/login");
  }
}
