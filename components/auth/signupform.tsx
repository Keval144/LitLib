"use client";

import { Input } from "@heroui/input";
import { form as formClass, button as buttonClass } from "@heroui/theme";
import { useState, useTransition } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Divider } from "@heroui/divider";
import Link from "next/link";
import { signup } from "@/actions/auth/signup";
import { useRouter } from "next/navigation";
import { BsInfo } from "react-icons/bs";
import { Tooltip } from "@heroui/react";

export default function SignUpForm() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(() => {
      signup(formData)
        .then((result) => {
          if (result?.redirectTo) {
            router.push(result.redirectTo);
          } else if (result?.error) {
            setError(result.error);
          }
        })
        .catch((err) => {
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
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            label="First Name"
            type="text"
            required
            variant="bordered"
            size="sm"
            name="firstname"
          />
          <Input
            label="Last Name"
            type="text"
            required
            variant="bordered"
            size="sm"
            name="lastname"
          />
        </div>

        <Input
          label="Email"
          type="email"
          required
          variant="bordered"
          size="sm"
          name="email"
        />

        <div className="flex items-end gap-2 w-full">
          <Input
            label="Password"
            type={isVisible ? "text" : "password"}
            variant="bordered"
            size="sm"
            required
            name="password"
            className="flex-1"
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

          <Tooltip
            content={
              <div className="text-sm text-gray-500 dark:text-gray-100">
                <p>
                  <strong>Password requirements:</strong>
                </p>
                <ul className="list-disc list-inside">
                  <li>At least 6 characters</li>
                  <li>One uppercase letter</li>
                  <li>One number</li>
                  <li>One special character</li>
                </ul>
              </div>
            }
            placement="bottom"
          >
            <button
              type="button"
              className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-default-400 rounded-full h-7 w-7 transition shrink-0   mb-2"
            >
              <BsInfo className="text-md" />
            </button>
          </Tooltip>
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          disabled={isPending}
          className={`${buttonClass({ className: "w-full" })} text-white`}
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          {isPending ? "Creating Account..." : "Sign Up"}
        </button>
      </form>
      <br />
      <Divider className="h-[0.5] text-black" />
      <div className="flex align-center justify-center pt-3 text-sm">
        Already have an Account ?
        <Link
          href="/login"
          className="text-indigo-500 dark:text-indigo-300 pl-2"
        >
          Login
        </Link>
      </div>
    </>
  );
}
