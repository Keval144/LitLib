"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@heroui/react";

import { RiBookShelfLine, RiDashboardLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { MdPhoneIphone, MdAnalytics } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { HiBolt } from "react-icons/hi2";

export default function Home() {
  const features = [
    {
      icon: <RiBookShelfLine size={40} className="text-primary" />,
      title: "Smart Cataloging",
      desc: "Automatically organize and categorize your entire book collection with intelligent tagging and search capabilities.",
    },
    {
      icon: <FaUsers size={40} className="text-primary" />,
      title: "Member Management",
      desc: "Effortlessly manage member profiles, track borrowing history, and handle renewals with our intuitive interface.",
    },
    {
      icon: <MdPhoneIphone size={40} className="text-primary" />,
      title: "Mobile Ready",
      desc: "Access your library system anywhere with our responsive design that works perfectly on all devices.",
    },
    {
      icon: <MdAnalytics size={40} className="text-primary" />,
      title: "Analytics Dashboard",
      desc: "Get insights into borrowing patterns, popular books, and member engagement with beautiful charts and reports.",
    },
    {
      icon: <FiLock size={40} className="text-primary" />,
      title: "Secure & Reliable",
      desc: "Your data is protected with enterprise-grade security and automated backups to keep everything safe.",
    },
    {
      icon: <HiBolt size={40} className="text-primary" />,
      title: "Lightning Fast",
      desc: "Search through thousands of books instantly with our optimized search engine and fast loading times.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section 1 */}
      <section
        className={clsx(
          "min-h-screen flex items-center justify-center text-center px-5 sm:px-10 pt-32 pb-16",
          "bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)]"
        )}
        id="home"
      >
        <div className="max-w-3xl w-full animate-fadeInUp">
          <h1
            className={clsx(
              "text-[clamp(2.5rem,8vw,5rem)] font-extrabold leading-tight",
              "bg-gradient-to-br from-[var(--color-text)] to-[var(--color-accent)]",
              "bg-clip-text text-transparent"
            )}
          >
            Organize Knowledge. Instantly.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-xl mx-auto">
            LitLib helps libraries manage books, members, and borrowing — fast
            and beautifully.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              as={Link}
              href="#"
              className="rounded-full px-6 py-3 text-base font-semibold text-white shadow-md"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              Get Started
            </Button>
            <Button
              as={Link}
              href="#"
              variant="bordered"
              className="rounded-full px-6 py-3 text-base font-semibold border-[var(--color-border)] text-[var(--color-text)]"
            >
              Documentation
            </Button>
          </div>

          {/* <div
            className={clsx(
              "mt-16 max-w-xl mx-auto h-[400px] bg-[var(--color-card)] border border-[var(--color-border)]",
              "rounded-2xl flex items-center justify-center text-[var(--color-text-secondary)] text-lg shadow-lg relative overflow-hidden"
            )}
          >
            <div className="absolute top-0 left-0 right-0 h-10 bg-[var(--color-border)] rounded-t-2xl" />
            <div className="mt-10">App Screenshot Preview</div>
          </div> */}
        </div>
      </section>

      {/* Hero Section 2 */}
      <section
        className={clsx(
          "py-24 px-5 sm:px-10 bg-[var(--color-bg)]",
          "border-t border-[var(--color-border)]"
        )}
        id="features"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[var(--color-text)] mb-12">
            Why Choose LitLib?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className={clsx(
                  "bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 shadow transition-transform duration-300",
                  "hover:-translate-y-1 hover:shadow-lg"
                )}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-400 text-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
