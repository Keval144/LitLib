"use client";

import { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@heroui/react";

interface AdminReservationRow {
  id: number;
  reservationDate: string;
  expiryDate: string;
  user: { id: number; firstName: string; lastName: string; email: string };
  item: { id: number; title: string; author: string; itemType: string };
}

export default function AdminReservationTable() {
  const [rows, setRows] = useState<AdminReservationRow[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/reservations");
      const data = await res.json();
      setRows(data.reservations ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const checkout = async (id: number) => {
    const res = await fetch(`/api/admin/reservations/${id}/checkout`, { method: "POST" });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      alert(j.error || "Failed to checkout");
    } else {
      load();
    }
  };

  return (
    <div className="p-4">
      <Table aria-label="Reservations" removeWrapper isStriped>
        <TableHeader>
          <TableColumn>Patron</TableColumn>
          <TableColumn>Item</TableColumn>
          <TableColumn>Reserved</TableColumn>
          <TableColumn>Expires</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody isLoading={loading} emptyContent="No reservations">
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.user.firstName} {r.user.lastName} ({r.user.email})</TableCell>
              <TableCell>{r.item.title} — {r.item.author}</TableCell>
              <TableCell>{new Date(r.reservationDate).toLocaleString()}</TableCell>
              <TableCell>{new Date(r.expiryDate).toLocaleString()}</TableCell>
              <TableCell>
                <Button color="primary" size="sm" onPress={() => checkout(r.id)}>Checkout</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

