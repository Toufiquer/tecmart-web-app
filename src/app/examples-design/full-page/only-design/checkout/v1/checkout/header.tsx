/*
|-----------------------------------------
| setting up Header for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Laptop1040, Laptop1440, Mobile, Tablet768 } from "./menu-item";
import { BiMenu } from "react-icons/bi";

const LinkItem = () => (
  <p className="cursor-pointer rounded px-4 py-1 hover:bg-blue-100">
    sub title
  </p>
);
const CategoryItem = () => (
  <div className="mt-8 flex min-w-[180px] flex-col gap-2">
    <div className="flex items-center gap-2 font-semibold">
      <span className="pl-3 text-blue-700">
        <BiMenu />
      </span>
      Category
    </div>
    <LinkItem />
    <LinkItem />
    <LinkItem />
    <LinkItem />
    <LinkItem />
  </div>
);

const Header = () => {
  return (
    <header className=" bg-white py-2">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between pr-6 text-sm">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex cursor-pointer items-center gap-2 pl-[25px]">
                <BiMenu /> Category
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="border-0 border-none bg-transparent pb-0 pl-6 pt-4 shadow-none">
              <div className="left-[25px] top-[42px] mb-8 mr-1 max-h-[400] min-h-[200px] min-w-[400px] max-w-[660px] rounded border bg-white">
                <div className="relative">
                  <div className="absolute left-[30px] top-[-11px] h-5 w-5 rotate-45 border border-b-0 border-r-0 bg-white" />
                </div>
                <ScrollArea className="h-[400px] min-w-[400px] max-w-[660px]">
                  <div className="mb-8 flex flex-wrap items-center gap-6 px-8">
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                    <CategoryItem />
                  </div>
                </ScrollArea>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Mobile className="block md:hidden" />
          <Tablet768 className="md:block hidden lg:hidden" />
          <Laptop1040 className="hidden lg:block xl:hidden" />
          <Laptop1440 className="hidden xl:block " />
        </div>
      </div>
    </header>
  );
};
export default Header;
