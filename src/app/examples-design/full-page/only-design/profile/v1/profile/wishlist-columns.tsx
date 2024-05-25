/*
|-----------------------------------------
| setting up wishlist-columns for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import Image from "next/image";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { WISHLIST } from "./wishlist";
import { BsTrash } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const columns: ColumnDef<WISHLIST>[] = [
  {
    accessorKey: "productUrl",
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
        className="text-blue-700 duration-200 hover:underline"
        href={info.row.original.productUrl}
      >
        {info.getValue() as string}
      </Link>
    ),
  },
  { accessorKey: "color", header: "Color" },
  { accessorKey: "size", header: "Size" },
  {
    accessorKey: "price",
    header: "Price",
    cell: (info) => (
      <span className="flex min-w-[80px] items-center">
        &#163; {info.getValue() as string}
      </span>
    ),
  },
  {
    accessorKey: "id",
    header: "",
    cell: (info) => (
      <span className="flex items-center gap-3">
        <span className="cursor-pointer">
          <BsTrash />
        </span>
        <Button
          variant="outline"
          className="flex min-w-[140px] items-center gap-2"
        >
          <AiOutlineShoppingCart /> Add to cart
        </Button>
      </span>
    ),
  },
];
