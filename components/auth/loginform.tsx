"use client";

import { useEffect, useState, useTransition } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@heroui/input";
import { form as formClass, button as buttonClass } from "@heroui/theme";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdOutlineDangerous } from "react-icons/md";
import { Divider } from "@heroui/divider";
import Link from "next/link";

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const err = params.get("error");
    if (err) setErrorMsg(err);
  }, [params]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    startTransition(async () => {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/dashboard",
      });

      if (res?.error) {
        // NextAuth returns the Error.message you threw in authorize()
        setErrorMsg(res.error);
      } else {
        router.push(res?.url || "/dashboard");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={formClass({ className: "space-y-4" })}
    >
      <Input
        label="Email"
        name="email"
        type="email"
        required
        variant="bordered"
        size="sm"
      />

      <Input
        label="Password"
        name="password"
        type={isVisible ? "text" : "password"}
        required
        variant="bordered"
        size="sm"
        className="w-full"
        endContent={
          <button
            type="button"
            onClick={() => setIsVisible((v) => !v)}
            className="focus:outline-none"
          >
            {isVisible ? (
              <FaEyeSlash className="text-2xl" />
            ) : (
              <FaEye className="text-2xl" />
            )}
          </button>
        }
      />

      {errorMsg && (
        <div className="flex items-center gap-2 text-red-600 bg-red-100 p-2 rounded">
          <MdOutlineDangerous size={20} /> <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className={`${buttonClass({ className: "w-full" })} text-white`}
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        {isPending ? "Logging in…" : "Log in"}
      </button>

      <Divider className="h-[0.5] text-black" />
      <div className="flex align-center justify-center pt-2 text-sm w-full">
        Don't have an Account ?
        <Link
          href="/signup"
          className="text-indigo-500 dark:text-indigo-300 pl-2"
        >
          Sign Up
        </Link>
      </div>
    </form>
  );
}
