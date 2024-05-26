/*
|-----------------------------------------
| setting up REFUNDPRODUCT-columns for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import Image from "next/image";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { Url } from "url";

export type REFUNDPRODUCT = {
  id: number;
  name: string;
  color: string;
  price: number;
  size: string;
  img: string | Url;
  productUrl: string | Url;
  quantity: number;
};

export const columns: ColumnDef<REFUNDPRODUCT>[] = [
  {
    accessorKey: "img",
    header: "",
    cell: (info) => (
      <Image
        width={100}
        height={20}
        src={info.getValue() as string}
        alt="product picture"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Products",
    cell: (info) => (
      <Link
        title={info.getValue() as string}
        className="w-[160px] text-blue-700 duration-200 hover:underline"
        href={info.row.original.productUrl}
      >
        {info.getValue().slice(0, 22) as string}
      </Link>
    ),
  },
  { accessorKey: "color", header: "Color" },
  { accessorKey: "size", header: "Size" },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "quantity",
    header: "QUANTITY",
  },
  {
    accessorKey: "id",
    header: "TOTAL",
    cell: (info) => (
      <span>&#163; {info.row.original.price * info.row.original.quantity}</span>
    ),
  },
];
