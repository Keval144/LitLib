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
        className="fixed bottom-5 p-0 overflow-hidden end-5 z-50 h-10 w-10 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-700 transition duration-200 ease-in-out flex items-center justify-center"
      >
        <BsArrowUpCircle size={30} />
      </button>
    </Tooltip>
  );
}
