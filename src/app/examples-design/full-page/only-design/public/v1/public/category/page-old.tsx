/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Header from "./header";
import ItemsGrid from "./items-grid";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsGrid, BsGrid3X3Gap } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";

const Page = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="grid w-full grid-cols-1 md:grid-cols-[300px_1fr]">
          <div className="hidden md:block">
            <ScrollArea className="h-[580px] w-full pr-3">Side Bar</ScrollArea>
          </div>
          <ScrollArea className="h-[580px] w-full pr-3">
            <div className="flex w-full flex-col">
              <h2 className="rounded-lg bg-green-50 p-8 text-3xl font-semibold">
                Snacks & Munchies
              </h2>
              <div className="mt-2 flex items-center justify-between py-4">
                <p className="min-w-[180px] text-sm">24 Products found</p>
                <div className="flex w-full items-center justify-end gap-4 text-sm">
                  <div className="cursor-pointer">
                    <TfiMenuAlt />
                  </div>
                  <div className="cursor-pointer">
                    <BsGrid3X3Gap />
                  </div>
                  <div className="cursor-pointer">
                    <BsGrid />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="rounded-lg border p-2 px-4">
                      <span className="flex items-center gap-2">
                        Show: 50 <GoTriangleDown />
                      </span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="cursor-pointer">
                        100
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        200
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        500
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="rounded-lg border p-2 px-4">
                      <span className="flex items-center gap-2">
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
              </div>
              <ItemsGrid />
            </div>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};
export default Page;
