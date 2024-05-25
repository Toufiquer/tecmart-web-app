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

import DropdownItem from "./dropdown-item";
import { Checkbox } from "@/components/ui/checkbox";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { Url } from "url";

export type PRODUCTS = {
  id: number;
  product_name: string;
  price: number;
  category: string;
  tags: string[];
  vendor: string;
  published_on: string;
  img: string;
  productUrl: string | Url;
  isRating: boolean;
};
const optionData = [
  { id: 1, name: "View" },
  { id: 2, name: "Export" },
  { id: 3, name: "Remove" },
];
export const columns: ColumnDef<PRODUCTS>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "img",
    header: "",
    cell: (info) => (
      <Image
        className="min-w-[80px]"
        width={50}
        height={20}
        src={info.getValue() as string}
        alt="product picture"
      />
    ),
  },
  {
    accessorKey: "product_name",
    header: "PRODUCTS NAME",
    cell: (info) => (
      <Link
        className="text-blue-700 duration-200 hover:underline"
        href={info.row.original.productUrl}
      >
        {info.getValue() as string}
      </Link>
    ),
  },
  { accessorKey: "price", header: "PRICE" },
  {
    accessorKey: "category",
    header: "CATEGORY",
  },
  {
    accessorKey: "tags",
    header: "TAGS",
    cell: (info) => (
      <div className="flex flex-wrap gap-2">
        {info.getValue().map((curr: string) => (
          <span className="rounded bg-slate-200 px-2 text-[.65rem] font-[500]">
            {curr as string}
          </span>
        ))}
      </div>
    ),
  },
  {
    accessorKey: "isRating",
    header: "",
    cell: (info) => (
      <span className="text-orange-500">
        {info.getValue() ? <AiOutlineStar /> : <AiTwotoneStar />}
      </span>
    ),
  },
  {
    accessorKey: "vendor",
    header: "VENDOR",
    cell: (info) => (
      <span className="text-blue-600">{info.getValue() as string}</span>
    ),
  },
  { accessorKey: "published_on", header: "PUBLISHED ON" },
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
