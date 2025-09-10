"use client";

import dynamic from "next/dynamic";

const ItemTable = dynamic(() => import("@/components/admin/items/ItemTable"), {
  ssr: false,
});

export default function ItemTableWrapper() {
  return <ItemTable />;
}
