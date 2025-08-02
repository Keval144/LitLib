"use client";
import { addToast } from "@heroui/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function ToastHandler() {
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.has("success")) {
      addToast({
        title: "Signup Successful",
        description: "Please log in to continue.",
        color: "success",
      });
    }
  }, [searchParams]);

  return null;
}
