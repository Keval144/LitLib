"use client";

import { Input } from "@heroui/input";
import { form as formClass, button as buttonClass } from "@heroui/theme";
import { useState, useTransition } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Divider } from "@heroui/divider";
import Link from "next/link";
import { login } from "@/actions/auth/login";

export default function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(() => {
      login(formData).catch((err) => {
        setError(err.message || "Something went wrong");
      });
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={formClass({ className: "space-y-4" })}
      >
        <Input
          label="Email"
          type="email"
          name="email"
          required
          variant="bordered"
          size="sm"
        />

        <Input
          label="Password"
          type={isVisible ? "text" : "password"}
          name="password"
          variant="bordered"
          size="sm"
          required
          className="w-full"
          endContent={
            <button
              type="button"
              onClick={toggleVisibility}
              className="focus:outline-none"
            >
              {isVisible ? (
                <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <FaEye className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}

        <button
          type="submit"
          className={`${buttonClass({ className: "w-full" })} text-white`}
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          {isPending ? "Logging In..." : "Log In"}
        </button>
      </form>
      <br />
      <Divider className="h-[0.5] text-black" />
      <div className="flex align-center justify-center pt-3 text-sm">
        Don't have an Account ?
        <Link
          href="signup"
          className="text-indigo-500 dark:text-indigo-300 pl-2"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
}
