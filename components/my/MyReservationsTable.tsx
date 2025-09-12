"use client";

import { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Chip } from "@heroui/react";

interface ReservationRow {
  id: number;
  reservationDate: string;
  expiryDate: string;
  item: { id: number; title: string; author: string; itemType: string };
  status: string;
}

export default function MyReservationsTable() {
  const [rows, setRows] = useState<ReservationRow[]>([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/reservations");
      const data = await res.json();
      setRows(data.reservations ?? []);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const cancelReservation = async (id: number) => {
    const res = await fetch(`/api/reservations/${id}`, { method: "DELETE" });
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      alert(j.error || "Cannot cancel reservation");
    } else {
      load();
    }
  };

  return (
    <div className="p-4">
      <Table aria-label="My reservations" removeWrapper isStriped>
        <TableHeader>
          <TableColumn>Item</TableColumn>
          <TableColumn>Reserved</TableColumn>
          <TableColumn>Expires</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody isLoading={loading} emptyContent="No reservations">
          {rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.item.title} — {r.item.author}</TableCell>
              <TableCell>{new Date(r.reservationDate).toLocaleString()}</TableCell>
              <TableCell>{new Date(r.expiryDate).toLocaleString()}</TableCell>
              <TableCell>
                <Chip size="sm" variant="flat" color={r.status === "PENDING" ? "warning" : r.status === "FULFILLED" ? "success" : "default"}>{r.status}</Chip>
              </TableCell>
              <TableCell>
                {r.status === "PENDING" && (
                  <Button size="sm" color="danger" onPress={() => cancelReservation(r.id)}>Cancel</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

