/*
|-----------------------------------------
| setting up Header for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GoSearch } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { BiPound } from "react-icons/bi";
import { BsArrowRightShort, BsCircle, BsCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="mt-4">
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
      <div className="relative py-1">
        <Image
          height={1080}
          width={500}
          src="https://i.ibb.co/r3JKcHj/slider-2.jpg"
          alt="Slider"
          className="h-[330px] w-full rounded-lg object-cover md:h-auto"
        />
        <div className="absolute inset-x-0 top-0 h-full w-full ">
          <div className="flex h-full w-full flex-col items-center justify-start">
            <div className="my-auto h-auto w-full">
              <div className="max-w-6xl pl-2 md:pl-12">
                <p className="mb-2 w-fit rounded-lg bg-orange-400 p-1 px-2 text-[10px] font-semibold">
                  Opening Sale Discount 50%
                </p>
                <div className="mt-6 max-w-[250px] text-3xl font-bold lg:max-w-[400px] lg:text-5xl">
                  <div className="flex flex-col items-center gap-2">
                    <h2>Free Shipping on</h2>
                    <div className="flex w-full items-center justify-between">
                      <h2>order over </h2>
                      <div className="pt-2">
                        <span className="flex items-center font-extrabold text-green-500">
                          <BiPound />
                          100
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600 drop-shadow-2xl lg:text-xl">
                  Free Shipping to First-Time Customers Only, After <br />{" "}
                  promotions and discounts are applied.
                </p>
                <Button className="mt-4 flex items-center gap-2">
                  Shop now{" "}
                  <span className="text-xl">
                    <BsArrowRightShort />
                  </span>
                </Button>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 w-full">
              <div className="flex w-full items-center justify-center gap-2 text-xs">
                <span className="cursor-pointer">
                  <BsCircleFill />
                </span>
                <span className="cursor-pointer">
                  <BsCircle />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
