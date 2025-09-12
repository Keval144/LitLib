"use client";

import { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";

interface BorrowingRow {
  id: number;
  borrowDate: string;
  dueDate: string;
  returnDate?: string | null;
  item: { id: number; title: string; author: string; itemType: string };
}

export default function MyBorrowingsTable() {
  const [rows, setRows] = useState<BorrowingRow[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/borrowings");
      const data = await res.json();
      setRows(data.borrowings ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-4">
      <Table aria-label="My borrowings" removeWrapper isStriped>
        <TableHeader>
          <TableColumn>Item</TableColumn>
          <TableColumn>Borrowed</TableColumn>
          <TableColumn>Due</TableColumn>
          <TableColumn>Returned</TableColumn>
        </TableHeader>
        <TableBody isLoading={loading} emptyContent="No borrowings">
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.item.title} — {r.item.author}</TableCell>
              <TableCell>{new Date(r.borrowDate).toLocaleString()}</TableCell>
              <TableCell>{new Date(r.dueDate).toLocaleString()}</TableCell>
              <TableCell>{r.returnDate ? new Date(r.returnDate).toLocaleString() : "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

