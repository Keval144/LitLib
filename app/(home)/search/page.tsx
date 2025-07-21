"use client";

import { useState } from "react";
import { Tabs, Tab, Card, CardBody, Input, Button } from "@heroui/react";
import {
  FaSearch,
  FaBook,
  FaBookOpen,
  FaMusic,
  FaEllipsisH,
} from "react-icons/fa";

const tabsData = [
  { id: "Books", label: "Books", icon: FaBook, content: "Book tables" },
  {
    id: "Journal",
    label: "Journal",
    icon: FaBookOpen,
    content: "Journal Table",
  },
  {
    id: "Multi Media",
    label: "Multi Media",
    icon: FaMusic,
    content: "MultiMedia Table",
  },
  { id: "Other", label: "Other", icon: FaEllipsisH, content: "Other Table" },
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredTabs, setFilteredTabs] = useState(tabsData);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const filtered = tabsData.filter((tab) =>
        tab.label.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTabs(filtered.length > 0 ? filtered : tabsData);
      setLoading(false);
    }, 800);
  };

  return (
    <section
      id="Search"
      className="relative min-h-screen w-full px-5 sm:px-10 pt-32 pb-16 bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)]"
    >
      <div className="relative max-w-7xl mx-auto space-y-3 z-10">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Search Section
        </h1>
        <p className="text-gray-600 dark:text-gray-200 text-medium mb">
          Search Thousands of Books
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <Input
            isClearable
            value={searchTerm}
            onValueChange={setSearchTerm}
            placeholder="Search items..."
            radius="lg"
            className="w-full sm:w-1/3"
            startContent={
              <FaSearch className="text-black/50 dark:text-white/90" />
            }
            classNames={{
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "bg-[var(--navbar-bg)]",
                "border border-[var(--navbar-border)]",
                "text-black/90 dark:text-white/90",
                "shadow-sm backdrop-blur-sm backdrop-saturate-150",
                "hover:bg-[var(--navbar-bg)]/70 dark:hover:bg-[var(--navbar-bg)]",
                "group-data-[focus=true]:bg-[var(--navbar-bg)]",
                "cursor-text!",
              ],
            }}
          />
          <Button
            onClick={handleSearch}
            isLoading={loading}
            className="bg-[var(--color-accent)] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:brightness-110 transition"
          >
            {loading ? "Searching..." : "Submit"}
          </Button>
        </div>

        {/* Tabs Section */}
        <Tabs
          items={filteredTabs}
          aria-label="Library Categories"
          color="default"
          variant="bordered"
        >
          {(item) => (
            <Tab
              key={item.id}
              title={
                <div className="flex items-center gap-2">
                  <item.icon className="text-[var(--color-accent)] dark:text-blue-400" />
                  <span>{item.label}</span>
                </div>
              }
            >
              <Card className="shadow-lg  bg-[var(--navbar-bg)] border border-white/30 rounded-xl">
                <CardBody className="p-4 text-[var(--text-primary)]">
                  {item.content}
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </section>
  );
}
