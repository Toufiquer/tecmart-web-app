/*
|-----------------------------------------
| setting up order-columns for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import { ColumnDef } from "@tanstack/react-table";

import { ORDERITEM } from "./ORDERTYPE";
import { StatusBox } from "./status-box";
import DropdownItem from "./dropdown-item";

const optionData = [
  { id: 1, name: "View" },
  { id: 2, name: "Export" },
  { id: 3, name: "Remove" },
];
export const columns: ColumnDef<ORDERITEM>[] = [
  {
    accessorKey: "orderNumber",
    header: "ORDER",
    cell: (info) => (
      <span className="text-blue-700">#{info.getValue() as number}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: (info) => (
      <StatusBox
        className="text-[12px]"
        text={(info.getValue() as string) || "not found"}
      />
    ),
  },
  { accessorKey: "deliveryMethod", header: "DELIVERY METHOD" },
  { accessorKey: "deliveryDate", header: "DATE" },
  { accessorKey: "total", header: "TOTAL" },
  {
    accessorKey: "id",
    header: "",
    cell: (info) => (
      <span>
        <DropdownItem title="..." data={optionData} />
      </span>
    ),
  },
];
