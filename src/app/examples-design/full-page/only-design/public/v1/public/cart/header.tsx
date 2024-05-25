/*
|-----------------------------------------
| setting up Header for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

import { Input } from "@/components/ui/input";
import { AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";

const Header = () => {
  return (
    <header className="mt-4 px-2">
      <div className="flex w-full items-center justify-between gap-4 pb-4">
        <div className="flex w-full min-w-[200px] items-center gap-4">
          <div className="relative flex w-full items-center gap-2">
            <Input type="text" placeholder="Search Fresh Food" />
            <div className="absolute right-0 top-0 h-full">
              <div className="flex h-full cursor-pointer items-center pr-4">
                <GoSearch />
              </div>
            </div>
          </div>

          <div className="hidden h-full cursor-pointer items-center rounded-lg border px-4 py-2 hover:bg-slate-100 md:flex">
            <CiLocationOn /> Location
          </div>
        </div>
        <div className="flex w-full max-w-[200px] items-center justify-end gap-1 pr-2 md:max-w-[400px] md:gap-4">
          <div className="relative flex h-10 cursor-pointer items-center rounded-lg text-2xl">
            <AiOutlineHeart />
            <div className="absolute right-[-10px] top-[-5px] rounded-full bg-green-500 px-1 py-[1px] text-xs text-white md:px-2  md:py-1 ">
              5
            </div>
          </div>
          <div className="relative flex h-10 cursor-pointer items-center rounded-lg text-2xl">
            <RxAvatar />
          </div>
          <div className="relative flex h-10 cursor-pointer items-center rounded-lg text-2xl">
            <FiShoppingBag />
            <div className="absolute right-[-10px] top-[-5px] rounded-full bg-green-500 px-1 py-[1px] text-xs text-white md:px-2  md:py-1 ">
              5
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
