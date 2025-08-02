"use client";

import { Tooltip } from "@heroui/react";
import { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;
  return (
    <Tooltip content="Scroll back to top">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="z-5 fixed bottom-5 end-5 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-indigo-500 p-0 text-white shadow-lg transition duration-200 ease-in-out hover:bg-indigo-700"
      >
        <BsArrowUpCircle size={30} />
      </button>
    </Tooltip>
  );
}
