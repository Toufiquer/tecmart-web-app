/*
|-----------------------------------------
| setting up store-columns for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import Image from "next/image";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";

import { RatingStar } from "./rating-star";
import DropdownItem from "./dropdown-item";

import { Url } from "url";

export type VENDOR = {
  id: number;
  name: string;
  store: number;
  rating: number;
  orders: string;
  total_spent: number;
  last_order: string;
  img: string;
  productUrl: string | Url;
};

const optionData = [
  { id: 1, name: "View" },
  { id: 2, name: "Export" },
  { id: 3, name: "Remove" },
];
export const columns: ColumnDef<VENDOR>[] = [
  {
    accessorKey: "img",
    header: "",
    cell: (info) => (
      <Image
        width={50}
        height={20}
        src={info.getValue() as string}
        alt="product picture"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "VENDOR",
    cell: (info) => (
      <Link
        className="text-blue-700 duration-200 hover:underline"
        href={info.row.original.productUrl}
      >
        {info.getValue() as string}
      </Link>
    ),
  },

  {
    accessorKey: "rating",
    header: "STORE RATING",
    cell: (info) => <RatingStar num={info.getValue() as number} />,
  },
  {
    accessorKey: "orders",
    header: "ORDERS",
    cell: (info) => (
      <span className="text-blue-600">{info.getValue() as string}</span>
    ),
  },
  { accessorKey: "total_spent", header: "TOTAL SPENT" },
  { accessorKey: "last_order", header: "LAST ORDER" },
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
