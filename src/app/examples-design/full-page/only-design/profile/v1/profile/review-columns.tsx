/*
|-----------------------------------------
| setting up review-columns for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import { ColumnDef } from "@tanstack/react-table";

import { StatusBox } from "./status-box";
import DropdownItem from "./dropdown-item";
import { RatingStar } from "./rating-star";

export type REVIEW = {
  id: number;
  rating: number;
  product: string;
  review: string;
  status: string;
  date: string;
};

const optionData = [
  { id: 1, name: "View" },
  { id: 2, name: "Export" },
  { id: 3, name: "Remove" },
];
export const columns: ColumnDef<REVIEW>[] = [
  {
    accessorKey: "product",
    header: "PRODUCT",
    cell: (info) => (
      <span className="text-blue-700">#{info.getValue() as number}</span>
    ),
  },
  {
    accessorKey: "rating",
    header: "RATING",
    cell: (info) => <RatingStar num={info.getValue() as number} />,
  },
  { accessorKey: "review", header: "REVIEW" },
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
  { accessorKey: "date", header: "DATE" },
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
