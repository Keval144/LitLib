import { Metadata } from "next";
import SignUpForm from "@/components/auth/signupform";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up Page for Patreon to Join Library",
};

export default function SignUp() {
  return <SignUpForm />;
}
