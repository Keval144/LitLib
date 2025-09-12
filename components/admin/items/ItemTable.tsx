"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Select,
  SelectItem,
  Button,
  Pagination,
  Chip,
} from "@heroui/react";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { FaPlus, FaSearch, FaTrash, FaPen } from "react-icons/fa";

export type ItemType = "BOOK" | "JOURNAL" | "MULTIMEDIA" | "OTHER";
export type ItemStatus =
  | "AVAILABLE"
  | "CHECKED_OUT"
  | "RESERVED"
  | "LOST"
  | "DAMAGED";

export interface LibraryItemDTO {
  id: number;
  title: string;
  author: string;
  publisher?: string | null;
  isbn?: string | null;
  itemType: ItemType;
  status: ItemStatus;
  categories: string[];
  languages: string[];
  yearPublished?: number | null;
  edition?: string | null;
  shelfLocation?: string | null;
  borrowCount: number;
  coverImage?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
}

const itemTypeOptions: { label: string; value: ItemType }[] = [
  { label: "Books", value: "BOOK" },
  { label: "Journal", value: "JOURNAL" },
  { label: "Multi Media", value: "MULTIMEDIA" },
  { label: "Other", value: "OTHER" },
];

const statusOptions: { label: string; value: ItemStatus }[] = [
  { label: "Available", value: "AVAILABLE" },
  { label: "Checked Out", value: "CHECKED_OUT" },
  { label: "Reserved", value: "RESERVED" },
  { label: "Lost", value: "LOST" },
  { label: "Damaged", value: "DAMAGED" },
];

export default function ItemTable() {
  const router = useRouter();

  const [q, setQ] = useState("");
  const [type, setType] = useState<ItemType | "">("");
  const [status, setStatus] = useState<ItemStatus | "">("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [items, setItems] = useState<LibraryItemDTO[]>([]);
  const [loading, setLoading] = useState(false);

  const queryString = useMemo(() => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (type) params.set("type", type);
    if (status) params.set("status", status);
    if (category) params.set("category", category);
    params.set("page", String(page));
    params.set("perPage", String(perPage));
    return params.toString();
  }, [q, type, status, category, page, perPage]);

  useEffect(() => {
    let active = true;
    setLoading(true);
    fetch(`/api/items?${queryString}`)
      .then((r) => r.json())
      .then((data) => {
        if (!active) return;
        setItems(data.items ?? []);
        setTotalPages(data.meta?.totalPages ?? 1);
      })
      .catch((e) => console.error(e))
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, [queryString]);

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this item?")) return;
    const res = await fetch(`/api/items/${id}`, { method: "DELETE" });
    if (res.ok) {
      // refresh list
      fetch(`/api/items?${queryString}`)
        .then((r) => r.json())
        .then((data) => {
          setItems(data.items ?? []);
          setTotalPages(data.meta?.totalPages ?? 1);
        });
    } else {
      alert("Failed to delete");
    }
  };

  return (
    <div className="w-full p-4">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end">
        <Input
          label="Search"
          placeholder="Title, author, ISBN..."
          startContent={<FaSearch />}
          value={q}
          onValueChange={setQ}
          className="md:max-w-xs"
          variant="bordered"
        />
        <Select
          label="Type"
          selectedKeys={type ? [type] : []}
          onChange={(e) => setType((e.target.value as ItemType) || "")}
          className="md:max-w-[200px]"
          variant="bordered"
        >
          {itemTypeOptions.map((opt) => (
            <SelectItem key={opt.value} variant="bordered">
              {opt.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Status"
          selectedKeys={status ? [status] : []}
          onChange={(e) => setStatus((e.target.value as ItemStatus) || "")}
          className="md:max-w-[220px]"
          variant="bordered"
        >
          {statusOptions.map((opt) => (
            <SelectItem key={opt.value}>{opt.label}</SelectItem>
          ))}
        </Select>
        <Input
          label="Category"
          placeholder="Category (exact)"
          value={category}
          onValueChange={setCategory}
          className="md:max-w-[200px]"
          variant="bordered"
        />
        <div className="flex gap-2">
          <Button
            color="success"
            onPress={() => setPage(1)}
            isLoading={loading}
          >
            Apply
          </Button>
          <Button
            variant="flat"
            onPress={() => {
              setQ("");
              setType("");
              setStatus("");
              setCategory("");
              setPage(1);
            }}
          >
            Reset
          </Button>
        </div>
        <div className="grow" />
        <Button
          className="bg-[var(--color-accent)]"
          startContent={<FaPlus />}
          onPress={() => router.push("/admin/items/new")}
        >
          Add Item
        </Button>
      </div>

      <Table aria-label="Items table" isStriped removeWrapper shadow="sm">
        <TableHeader>
          <TableColumn>Title</TableColumn>
          <TableColumn>Author</TableColumn>
          <TableColumn>Type</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Borrowed</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody
          isLoading={loading}
          loadingContent={<div className="p-4">Loading...</div>}
          emptyContent="No items found"
        >
          {items.map((it) => (
            <TableRow key={it.id}>
              <TableCell>
                <div className="flex min-w-[220px] items-center gap-3">
                  {it.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={it.coverImage}
                      alt={it.title}
                      className="h-10 w-8 rounded object-cover"
                    />
                  ) : null}
                  <div>
                    <div className="font-medium">{it.title}</div>
                    <div className="text-xs text-default-500">{it.isbn}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="whitespace-nowrap">{it.author}</TableCell>
              <TableCell>{it.itemType}</TableCell>
              <TableCell>
                <Chip
                  color={
                    it.status === "AVAILABLE"
                      ? "success"
                      : it.status === "CHECKED_OUT"
                        ? "warning"
                        : it.status === "RESERVED"
                          ? "secondary"
                          : "danger"
                  }
                  variant="flat"
                >
                  {it.status}
                </Chip>
              </TableCell>
              <TableCell>{it.borrowCount}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="flat"
                    startContent={<FaPen />}
                    onPress={() => router.push(`/admin/items/${it.id}/edit`)}
                  >
                    Edit
                  </Button>
                  <Button
                    color="danger"
                    startContent={<FaTrash />}
                    onPress={() => handleDelete(it.id)}
                  >
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-default-500">
          Page {page} of {totalPages}
        </div>
        <Pagination
          page={page}
          total={totalPages}
          onChange={setPage}
          showControls
        />
      </div>
    </div>
  );
}
