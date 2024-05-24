/*
|-----------------------------------------
| setting up MenuItem for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Url } from "url";
import { ReactNode } from "react";
import { GoTriangleDown } from "react-icons/go";

export type LINKTYPE = {
  name: string;
  link: Url | string;
  badge?: string;
  id?: string | number;
  icon?: ReactNode | string;
};

export const categoryLink: LINKTYPE[] = [
  { id: 1, name: "Home", link: "/checkout" },
  { id: 2, name: "My Favorites", link: "/checkout" },
  { id: 3, name: "Products", link: "/checkout" },
  { id: 4, name: "Wishlist", link: "/checkout" },
  { id: 5, name: "Shipping Info", link: "/checkout" },
  { id: 6, name: "Be a vendor", link: "/checkout" },
  { id: 7, name: "Tracker order", link: "/checkout" },
  { id: 7, name: "Checkout", link: "/checkout" },
];

const distributedLink = (link: LINKTYPE[], viewItem: number = 2) => {
  const viewLink: LINKTYPE[] = [];
  const dropdownLink: LINKTYPE[] = [];
  link.forEach((curr, idx) => {
    if (idx < viewItem) {
      viewLink.push(curr);
    } else {
      dropdownLink.push(curr);
    }
  });
  return { viewLink, dropdownLink };
};

const DropDownMenu = ({ data }: { data: LINKTYPE[] }) => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <span className="flex items-center gap-2">
        More <GoTriangleDown />
      </span>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="mr-1">
      {data.map((curr) => (
        <DropdownMenuItem>
          <Link key={curr.id} href={curr.link}>
            {curr.name}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export const Tablet768 = ({ className }: { className: string }) => {
  const { viewLink, dropdownLink } = distributedLink(categoryLink);
  return (
    <div className={`${className}`}>
      <div className="flex gap-4">
        {viewLink.map((curr) => (
          <Link key={curr.id} href={curr.link}>
            {curr.name}
          </Link>
        ))}
        {dropdownLink.length > 0 && <DropDownMenu data={dropdownLink} />}
      </div>
    </div>
  );
};

export const Laptop1040 = ({ className }: { className: string }) => {
  const { viewLink, dropdownLink } = distributedLink(categoryLink, 4);
  return (
    <div className={`${className}`}>
      <div className="flex gap-4">
        {viewLink.map((curr) => (
          <Link key={curr.id} href={curr.link}>
            {curr.name}
          </Link>
        ))}
        {dropdownLink.length > 0 && <DropDownMenu data={dropdownLink} />}
      </div>
    </div>
  );
};

export const Laptop1440 = ({ className }: { className: string }) => (
  <div className={`${className}`}>
    <div className="flex gap-4">
      {categoryLink.map((curr) => (
        <Link key={curr.id} href={curr.link}>
          {curr.name}
        </Link>
      ))}
    </div>
  </div>
);
