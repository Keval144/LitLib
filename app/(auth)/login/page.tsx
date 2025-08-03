import LoginForm from "@/components/auth/loginform";
import { ToastHandler } from "@/components/auth/successtoast";
import authOptions from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata = {
  title: "Login",
  description: "Login to access thousnad of books",
};
export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/unauthorised");
  }

  return (
    <>
      <LoginForm />
      <Suspense fallback={null}>
        <ToastHandler />
      </Suspense>
    </>
  );
}
