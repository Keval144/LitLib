
import LoginForm from "@/components/auth/loginform";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login Page to Reserve Books and Library",
};

export default function LoginPage() {
  return (
    <>
      <LoginForm />
    </>
  );
}
