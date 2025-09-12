"use client";

import { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Chip } from "@heroui/react";

interface AdminBorrowingRow {
  id: number;
  user: { firstName: string; lastName: string; email: string };
  item: { title: string; author: string; itemType: string };
  borrowDate: string;
  dueDate: string;
  returnDate?: string | null;
}

export default function AdminBorrowingsTable() {
  const [rows, setRows] = useState<AdminBorrowingRow[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/borrowings");
      const data = await res.json();
      setRows(data.borrowings ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const markReturned = async (id: number) => {
    const res = await fetch(`/api/admin/borrowings/${id}/return`, { method: "POST" });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      alert(j.error || "Failed to return");
    } else {
      load();
    }
  };

  return (
    <div className="p-4">
      <Table aria-label="Borrowings" removeWrapper isStriped>
        <TableHeader>
          <TableColumn>Patron</TableColumn>
          <TableColumn>Item</TableColumn>
          <TableColumn>Borrowed</TableColumn>
          <TableColumn>Due</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Actions</TableColumn>
          <TableColumn>Damage</TableColumn>
        </TableHeader>
        <TableBody isLoading={loading} emptyContent="No borrowings">
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.user.firstName} {r.user.lastName} ({r.user.email})</TableCell>
              <TableCell>{r.item.title} — {r.item.author}</TableCell>
              <TableCell>{new Date(r.borrowDate).toLocaleString()}</TableCell>
              <TableCell>{new Date(r.dueDate).toLocaleString()}</TableCell>
              <TableCell>
                <Chip size="sm" color={r.returnDate ? "success" : "warning"} variant="flat">
                  {r.returnDate ? `Returned ${new Date(r.returnDate).toLocaleDateString()}` : "Checked Out"}
                </Chip>
              </TableCell>
              <TableCell>
                {!r.returnDate && (
                  <Button size="sm" color="success" onPress={() => markReturned(r.id)}>Mark Returned</Button>
                )}
              </TableCell>
              <TableCell>
                {!r.returnDate && (
                  <Button size="sm" color="danger" variant="flat" onPress={async () => {
                    const res = await fetch(`/api/admin/borrowings/${r.id}/damage`, { method: "POST" });
                    if (!res.ok) {
                      const j = await res.json().catch(() => ({}));
                      alert(j.error || "Failed to mark damaged");
                    } else {
                      alert("Marked as damaged and fined 60");
                      load();
                    }
                  }}>Mark Damaged</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

