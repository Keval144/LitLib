"use client";

import React, { useEffect, useMemo, useState } from "react";
import {
  Input,
  Select,
  SelectItem,
  Button,
  Switch,
  Textarea,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import type { ItemStatus, ItemType, LibraryItemDTO } from "./ItemTable";

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

export default function ItemForm({
  mode,
  initial,
}: {
  mode: "create" | "edit";
  initial?: Partial<LibraryItemDTO> & { id?: number };
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const [title, setTitle] = useState(initial?.title ?? "");
  const [author, setAuthor] = useState(initial?.author ?? "");
  const [publisher, setPublisher] = useState(initial?.publisher ?? "");
  const [isbn, setIsbn] = useState(initial?.isbn ?? "");
  const [itemType, setItemType] = useState<ItemType | "">(
    (initial?.itemType as ItemType) ?? "",
  );
  const [status, setStatus] = useState<ItemStatus | "">(
    (initial?.status as ItemStatus) ?? "AVAILABLE",
  );
  const [categories, setCategories] = useState(
    (initial?.categories ?? []).join(", "),
  );
  const [languages, setLanguages] = useState(
    (initial?.languages ?? []).join(", "),
  );
  const [yearPublished, setYearPublished] = useState(
    initial?.yearPublished?.toString() ?? "",
  );
  const [edition, setEdition] = useState(initial?.edition ?? "");
  const [shelfLocation, setShelfLocation] = useState(
    initial?.shelfLocation ?? "",
  );
  const [isReference, setIsReference] = useState(
    Boolean((initial as any)?.isReference),
  );
  const [coverImage, setCoverImage] = useState(initial?.coverImage ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");

  const isValid = useMemo(
    () => title.trim() && author.trim() && itemType,
    [title, author, itemType],
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setSubmitting(true);
    try {
      const payload = {
        title: title.trim(),
        author: author.trim(),
        publisher: publisher.trim() || null,
        isbn: isbn.trim() || null,
        itemType,
        status,
        categories: categories
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        languages: languages
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
        yearPublished: yearPublished ? Number(yearPublished) : null,
        edition: edition.trim() || null,
        shelfLocation: shelfLocation.trim() || null,
        isReference,
        coverImage: coverImage.trim() || null,
        description: description.trim() || null,
      };

      const res = await fetch(
        mode === "create" ? "/api/items" : `/api/items/${initial?.id}`,
        {
          method: mode === "create" ? "POST" : "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        alert(err.error || "Failed to save item");
        return;
      }

      router.push("/admin/items");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <form
        className="z-2 grid w-full grid-cols-1 gap-6 p-6 md:grid-cols-2"
        onSubmit={onSubmit}
      >
        {/* --- Basic Info --- */}
        <div className="mb-2 border-b pb-2 md:col-span-2">
          <h3 className="text-sm font-semibold text-gray-600">Basic Info</h3>
        </div>

        <Input
          autoFocus
          isRequired
          label="Title"
          placeholder="Enter the item title"
          value={title}
          onValueChange={setTitle}
          variant="bordered"
          size="sm"
          className="w-full"
        />
        <Input
          isRequired
          label="Author"
          placeholder="Author name"
          value={author}
          onValueChange={setAuthor}
          variant="bordered"
          size="sm"
          className="w-full"
        />

        {/* --- Publication Info --- */}
        <div className="mb-2 mt-4 border-b pb-2 md:col-span-2">
          <h3 className="text-sm font-semibold text-gray-600">
            Publication Info
          </h3>
        </div>

        <Input
          label="Publisher"
          placeholder="Penguin Books"
          value={publisher}
          onValueChange={setPublisher}
          variant="bordered"
          size="sm"
          className="w-full"
        />
        <Input
          label="ISBN"
          placeholder="978-3-16-148410-0"
          value={isbn}
          onValueChange={setIsbn}
          variant="bordered"
          size="sm"
          className="w-full"
        />
        <Input
          label="Year Published"
          type="number"
          placeholder="e.g. 2023"
          value={yearPublished}
          onValueChange={setYearPublished}
          variant="bordered"
          size="sm"
          className="w-full"
        />
        <Input
          label="Edition"
          placeholder="1st, 2nd, etc."
          value={edition}
          onValueChange={setEdition}
          variant="bordered"
          size="sm"
          className="w-full"
        />

        {/* --- Library Details --- */}
        <div className="mb-2 mt-4 border-b pb-2 md:col-span-2">
          <h3 className="text-sm font-semibold text-gray-600">
            Library Details
          </h3>
        </div>

        <Select
          label="Item Type"
          isRequired
          selectedKeys={itemType ? [itemType] : []}
          onChange={(e) => setItemType((e.target.value as ItemType) || "")}
          variant="bordered"
          size="sm"
          className="w-full"
        >
          {itemTypeOptions.map((opt) => (
            <SelectItem key={opt.value}>{opt.label}</SelectItem>
          ))}
        </Select>

        <Select
          label="Status"
          selectedKeys={status ? [status] : []}
          onChange={(e) => setStatus((e.target.value as ItemStatus) || "")}
          variant="bordered"
          size="sm"
          isDisabled={mode === "create"}
          className="w-full"
        >
          {statusOptions.map((opt) => (
            <SelectItem key={opt.value}>{opt.label}</SelectItem>
          ))}
        </Select>

        <Input
          label="Categories"
          description="Separate multiple with commas (e.g. Fiction, Mystery)"
          value={categories}
          onValueChange={setCategories}
          variant="bordered"
          size="sm"
          className="w-full"
        />
        <Input
          label="Languages"
          description="Separate multiple with commas (e.g. English, French)"
          value={languages}
          onValueChange={setLanguages}
          variant="bordered"
          size="sm"
          className="w-full"
        />

        <Input
          label="Shelf Location"
          placeholder="A1-23"
          value={shelfLocation}
          onValueChange={setShelfLocation}
          variant="bordered"
          size="sm"
          className="w-full"
        />

        <div className="mt-2 flex items-center gap-3 md:col-span-2">
          <Switch
            isSelected={isReference}
            onValueChange={setIsReference}
            color="success"
          >
            Reference only
          </Switch>
        </div>

        <div className="mt-4 flex flex-col justify-end gap-3 md:col-span-2 md:flex-row">
          <Button variant="flat" onPress={() => router.push("/admin/items")}>
            Cancel
          </Button>
          <Button
            color="primary"
            type="submit"
            isLoading={submitting}
            isDisabled={!isValid}
          >
            {mode === "create" ? "Create" : "Save"}
          </Button>
        </div>
        {/* --- Actions --- */}
      </form>
    </div>
  );
}
