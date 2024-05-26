/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

"use client";

import { useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Sidebar from "./sidebar";
import Header from "./header";
import ItemsGrid from "./items-grid";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsGrid, BsGrid3X3Gap } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";

const GridBox = () => (
  <div className="flex w-full items-center justify-end gap-4 ">
    <div className="cursor-pointer">
      <TfiMenuAlt />
    </div>
    <div className="cursor-pointer">
      <BsGrid3X3Gap />
    </div>
    <div className="cursor-pointer">
      <BsGrid />
    </div>
  </div>
);

const FilterButton = () => (
  <div className=" flex w-full items-center justify-end gap-1 md:gap-4">
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-lg border p-2 px-4">
        <span className="flex w-full min-w-[85px] items-center justify-end gap-2">
          Show: 50 <GoTriangleDown />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer">100</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">200</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">500</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full rounded-lg border p-2 px-4">
        <span className="flex w-full min-w-[140px] items-center justify-end gap-2">
          Sort by: Featured <GoTriangleDown />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer">
          Price: Heigh to Low
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Price: Low to Heigh
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Release Date
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          Average Rating
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

const MobileLayout = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => (
  <div className={` ${className}`}>
    <div
      className={`mt-2 flex flex-col items-center justify-between py-4 md:flex-row `}
    >
      <div className="flex w-full items-center justify-between">
        <p className="w-full min-w-[180px] text-start text-sm">{title}</p>
        <GridBox />
      </div>
      <div className="mt-4 flex w-full flex-wrap items-center justify-end gap-4 text-sm">
        <div className="grid w-full grid-cols-1 md:grid-cols-2">
          <FilterButton />
        </div>
      </div>
    </div>
  </div>
);
const TabletLayout = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => (
  <div className={` ${className}`}>
    <div
      className={`mt-2 flex flex-col items-center justify-between py-4 md:flex-row `}
    >
      <p className="w-full min-w-[180px] text-start text-sm">{title}</p>
      <div className="flex w-full flex-wrap items-center justify-end gap-4 text-sm">
        <div className="flex w-full items-center justify-between gap-4">
          <GridBox />
          <FilterButton />
        </div>
      </div>
    </div>
  </div>
);
const Page = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };

  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <Header />
        <div
          className={`grid grid-cols-1 ${
            toggle ? "md:grid-cols-[253px_1fr]" : "md:grid-cols-[63px_1fr]"
          }`}
        >
          <ScrollArea>
            <Sidebar toggle={toggle} handleToggle={handleToggle} />
          </ScrollArea>

          <div className="h-auto w-full">
            <ScrollArea className=" h-[calc(100vh_-_122px)] w-full px-3">
              <div className="flex w-full flex-col">
                <h2 className="rounded-lg bg-green-50 p-8 text-2xl font-semibold md:text-3xl">
                  Snacks & Munchies
                </h2>
                <MobileLayout
                  className="block md:hidden"
                  title="24 Products found"
                />
                <TabletLayout
                  className="hidden w-full md:inline-block"
                  title="24 Products found"
                />
                <ItemsGrid />
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Page;
