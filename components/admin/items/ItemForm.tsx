"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Input, Select, SelectItem, Button, Switch, Textarea } from "@heroui/react";
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
  const [itemType, setItemType] = useState<ItemType | "">((initial?.itemType as ItemType) ?? "");
  const [status, setStatus] = useState<ItemStatus | "">((initial?.status as ItemStatus) ?? "AVAILABLE");
  const [categories, setCategories] = useState((initial?.categories ?? []).join(", "));
  const [languages, setLanguages] = useState((initial?.languages ?? []).join(", "));
  const [yearPublished, setYearPublished] = useState(initial?.yearPublished?.toString() ?? "");
  const [edition, setEdition] = useState(initial?.edition ?? "");
  const [shelfLocation, setShelfLocation] = useState(initial?.shelfLocation ?? "");
  const [isReference, setIsReference] = useState(Boolean(initial?.isReference));
  const [coverImage, setCoverImage] = useState(initial?.coverImage ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");

  const isValid = useMemo(() => title.trim() && author.trim() && itemType, [title, author, itemType]);

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
    <form className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2" onSubmit={onSubmit}>
      <Input isRequired label="Title" value={title} onValueChange={setTitle} />
      <Input isRequired label="Author" value={author} onValueChange={setAuthor} />
      <Input label="Publisher" value={publisher} onValueChange={setPublisher} />
      <Input label="ISBN" value={isbn} onValueChange={setIsbn} />

      <Select
        label="Item Type"
        isRequired
        selectedKeys={itemType ? [itemType] : []}
        onChange={(e) => setItemType((e.target.value as ItemType) || "")}
      >
        {itemTypeOptions.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </Select>

      <Select
        label="Status"
        selectedKeys={status ? [status] : []}
        onChange={(e) => setStatus((e.target.value as ItemStatus) || "")}
      >
        {statusOptions.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </Select>

      <Input
        label="Categories"
        description="Comma separated"
        value={categories}
        onValueChange={setCategories}
      />
      <Input
        label="Languages"
        description="Comma separated"
        value={languages}
        onValueChange={setLanguages}
      />

      <Input
        label="Year Published"
        type="number"
        value={yearPublished}
        onValueChange={setYearPublished}
      />
      <Input label="Edition" value={edition} onValueChange={setEdition} />

      <Input
        label="Shelf Location"
        value={shelfLocation}
        onValueChange={setShelfLocation}
      />

      <div className="flex items-center gap-3">
        <Switch isSelected={isReference} onValueChange={setIsReference}>
          Reference only
        </Switch>
      </div>

      <Input label="Cover Image URL" value={coverImage} onValueChange={setCoverImage} />

      <div className="md:col-span-2">
        <Textarea
          label="Description"
          minRows={4}
          value={description}
          onValueChange={setDescription}
        />
      </div>

      <div className="md:col-span-2 flex justify-end gap-2">
        <Button variant="flat" onPress={() => router.push("/admin/items")}>Cancel</Button>
        <Button color="primary" type="submit" isLoading={submitting} isDisabled={!isValid}>
          {mode === "create" ? "Create" : "Save"}
        </Button>
      </div>
    </form>
  );
}

