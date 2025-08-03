// app/(auth)/signup/page.tsx
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import authOptions from "@/lib/auth";
import SignUpForm from "@/components/auth/signupform";

export const metadata = {
  title: "Sign Up",
  description: "Sign up Page for Patreon to Join Library",
};

export default async function SignUp() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/unauthorised");
  }

  return <SignUpForm />;
}
