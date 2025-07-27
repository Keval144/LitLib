"use client";
import { addToast } from "@heroui/react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function ToastHandler() {
  const searchParams = useSearchParams();
  console.log("outside Toast");
  useEffect(() => {
    if (searchParams.has("success")) {
      addToast({
        title: "Signup Successful",
        description: "Please log in to continue.",
        color: "success",
      });
      console.log("inside Toast");
    }
  }, [searchParams]);

  return null;
}
