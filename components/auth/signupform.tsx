"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@heroui/input";
import { Tooltip } from "@heroui/react";
import { Divider } from "@heroui/divider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsInfo } from "react-icons/bs";
import { MdOutlineDangerous } from "react-icons/md";
import { form as formClass, button as buttonClass } from "@heroui/theme";
import { signup } from "@/actions/auth/signup";

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
          if (result?.error) {
            setError(result.error);
          } else if (result?.success && result.redirectUrl) {
            router.push(result.redirectUrl);
          }
        })
        .catch((err) => {
          if (err.message !== "NEXT_REDIRECT") {
            setError(err.message || "Something went wrong");
          }
        });
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={formClass({ className: "space-y-4" })}
      >
        {/* First + Last Name */}
        <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
          <Input
            name="firstname"
            type="text"
            label="First Name"
            required
            size="sm"
            variant="bordered"
            className="w-full"
          />
          <Input
            name="lastname"
            type="text"
            label="Last Name"
            required
            size="sm"
            variant="bordered"
            className="w-full"
          />
        </div>

        {/* Email */}
        <Input
          name="email"
          type="email"
          label="Email"
          required
          size="sm"
          variant="bordered"
        />

        {/* Password + Info */}
        <div className="flex min-h-[72px] w-full items-start gap-2">
          <Input
            name="password"
            label="Password"
            required
            type={isVisible ? "text" : "password"}
            size="sm"
            variant="bordered"
            className="flex-1"
            endContent={
              <button
                type="button"
                onClick={toggleVisibility}
                className="focus:outline-none"
              >
                {isVisible ? (
                  <FaEyeSlash className="text-xl text-default-400" />
                ) : (
                  <FaEye className="text-xl text-default-400" />
                )}
              </button>
            }
          />

          <Tooltip
            placement="bottom"
            offset={6}
            content={
              <div className="text-sm text-gray-500 dark:text-gray-100">
                <strong>Password requirements:</strong>
                <ul className="list-inside list-disc">
                  <li>At least 6 characters</li>
                  <li>One uppercase letter</li>
                  <li>One number</li>
                  <li>One special character</li>
                </ul>
              </div>
            }
          >
            <button
              type="button"
              className="mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-gray-200 text-default-400 hover:bg-gray-300"
            >
              <BsInfo className="text-md" />
            </button>
          </Tooltip>
        </div>

        {/* Error Display */}
        {error && (
          <div className="flex w-full items-center gap-3 rounded-2xl bg-red-100 p-3 text-sm text-red-600">
            <MdOutlineDangerous size={20} className="text-red-600" />
            <span className="font-medium">{error}</span>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className={`${buttonClass({ className: "w-full" })} text-white`}
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          {isPending ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      {/* Divider + Link */}
      <div className="py-4">
        <Divider />
        <div className="flex justify-center pt-2 text-sm">
          Already have an account?
          <Link
            href="/login"
            className="pl-2 text-indigo-500 dark:text-indigo-300"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
