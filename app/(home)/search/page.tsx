"use client";

import { useEffect, useMemo, useState } from "react";
import { Tabs, Tab, Card, CardBody, Input, Button } from "@heroui/react";
import { FaSearch, FaBook, FaBookOpen, FaMusic, FaEllipsisH } from "react-icons/fa";
import PageHeader from "@/components/common/PageHeader";
type ItemType = "BOOK" | "JOURNAL" | "MULTIMEDIA" | "OTHER";

type LibraryItemDTO = {
  id: number;
  title: string;
  author: string;
  itemType: ItemType;
  status: string;
  coverImage?: string | null;
};

const tabs = [
  { id: "ALL", label: "All", icon: FaSearch },
  { id: "BOOK", label: "Books", icon: FaBook },
  { id: "JOURNAL", label: "Journal", icon: FaBookOpen },
  { id: "MULTIMEDIA", label: "Multi Media", icon: FaMusic },
  { id: "OTHER", label: "Other", icon: FaEllipsisH },
] as const;

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<(typeof tabs)[number]["id"]>("ALL");
  const [items, setItems] = useState<LibraryItemDTO[]>([]);
  const [isPatron, setIsPatron] = useState(false);

  const params = useMemo(() => {
    const sp = new URLSearchParams();
    if (searchTerm) sp.set("q", searchTerm);
    if (selected !== "ALL") sp.set("type", selected);
    // Hide items that are RESERVED or CHECKED_OUT from public search by default
    sp.set("status", "AVAILABLE");
    sp.set("perPage", "20");
    sp.set("page", "1");
    return sp.toString();
  }, [searchTerm, selected]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/items?${params}`);
      const data = await res.json();
      setItems(data.items ?? []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    let active = true;
    fetch("/api/auth/session")
      .then((r) => r.json())
      .then((s) => {
        if (!active) return;
        setIsPatron(Boolean(s?.user && s.user.role === "PATRON"));
      })
      .catch(() => setIsPatron(false));
    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="Search"
      className="relative min-h-[100dvh] w-full bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-card)] px-5 pb-16 pt-32 sm:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl space-y-3">
        <PageHeader title="Search" items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
        <p className="mb text-medium text-gray-600 dark:text-gray-200">
          Find books, journals and more
        </p>

        {/* Search Bar */}
        <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <Input
            isClearable
            value={searchTerm}
            onValueChange={setSearchTerm}
            placeholder="Search items..."
            radius="lg"
            className="w-full sm:w-1/2"
            startContent={<FaSearch className="text-black/50 dark:text-white/90" />}
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
            onClick={fetchItems}
            isLoading={loading}
            className="rounded-lg bg-[var(--color-accent)] px-6 py-2 font-semibold text-white shadow-md transition hover:brightness-110"
          >
            {loading ? "Searching..." : "Search"}
          </Button>
        </div>

        {/* Tabs Section */}
        <Tabs
          selectedKey={selected}
          onSelectionChange={(k) => setSelected(k as any)}
          aria-label="Library Categories"
          color="default"
          variant="bordered"
        >
          {tabs.map((t) => (
            <Tab
              key={t.id}
              title={
                <div className="flex items-center gap-2">
                  <t.icon className="text-[var(--color-accent)] dark:text-blue-400" />
                  <span>{t.label}</span>
                </div>
              }
            >
              <Card className="rounded-xl border border-white/30 bg-[var(--navbar-bg)] shadow-lg">
                <CardBody className="p-4 text-[var(--text-primary)]">
                  {loading ? (
                    <div>Loading...</div>
                  ) : items.length === 0 ? (
                    <div>No items found.</div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {items.map((it) => (
                        <div key={it.id} className="rounded-lg border border-[var(--navbar-border)] bg-[var(--navbar-bg)] p-3">
                          {it.coverImage ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={it.coverImage} alt={it.title} className="mb-2 h-40 w-full rounded object-cover" />
                          ) : null}
                          <div className="font-semibold">{it.title}</div>
                          <div className="text-sm text-default-500">{it.author}</div>
                          <div className="mt-1 text-xs text-default-400">{it.itemType}</div>
                          {isPatron && (
                            <Button
                              size="sm"
                              className="mt-2"
                              onClick={async () => {
                                try {
                                  const res = await fetch("/api/reservations", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({ itemId: it.id }),
                                  });
                                  const data = await res.json();
                                  if (!res.ok) {
                                    alert(data.error || "Failed to reserve");
                                  } else {
                                    alert("Reserved successfully");
                                    fetchItems();
                                  }
                                } catch (e) {
                                  console.error(e);
                                  alert("Failed to reserve");
                                }
                              }}
                            >
                              Reserve
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </CardBody>
              </Card>
            </Tab>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
