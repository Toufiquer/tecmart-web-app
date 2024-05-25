/*
|-----------------------------------------
| setting up AddToCart for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiOutlineHeart, AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { BiLogoFacebookCircle, BiLogoLinkedin, BiPound } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { GoTriangleDown } from "react-icons/go";
import { BsTwitter } from "react-icons/bs";

const imgStyle = "h-[108px] w-full rounded-lg object-cover md:h-auto";

const AddToCart = () => {
  const [count, setCount] = useState(1);
  const handleCount = (action: string) => {
    if (action === "-") {
      if (count > 1) {
        setCount((pre) => pre - 1);
      }
    } else {
      setCount((pre) => pre + 1);
    }
  };
  return (
    <main className="grid w-full grid-cols-1 gap-4 px-2 lg:grid-cols-2">
      <div className="px-8">
        <div className="flex w-full flex-col gap-4">
          <Image
            height={1080}
            width={500}
            src="https://i.ibb.co/Dgw6Jw5/singer.jpg"
            alt="Watch"
            className={` ${imgStyle} h-auto max-w-full `}
          />
          <div className="grid w-full grid-cols-4 items-center justify-center gap-4">
            <Image
              height={1080}
              width={500}
              src="https://i.ibb.co/Dgw6Jw5/singer.jpg"
              alt="Watch"
              className={`${imgStyle} cursor-pointer rounded-lg border border-green-500`}
            />
            <Image
              height={1080}
              width={500}
              src="https://i.ibb.co/Dgw6Jw5/singer.jpg"
              alt="Watch"
              className={`${imgStyle} cursor-pointer `}
            />
            <Image
              height={1080}
              width={500}
              src="https://i.ibb.co/Dgw6Jw5/singer.jpg"
              alt="Watch"
              className={`${imgStyle} cursor-pointer `}
            />
            <Image
              height={1080}
              width={500}
              src="https://i.ibb.co/Dgw6Jw5/singer.jpg"
              alt="Watch"
              className={`${imgStyle} cursor-pointer `}
            />
          </div>
        </div>
      </div>
      <div className="px-8">
        <div className="flex w-full flex-col py-12 md:py-0">
          <div className="border-b">
            <p className="text-sm text-green-600 ">Bakery Biscuits</p>
            <h3 className="py-2 text-4xl font-bold">Napolitanke Ljesnjak</h3>
            <div className="flex items-center gap-1 text-orange-300">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar />
              <span className="text-xs text-slate-400">
                <span className="text-sm font-semibold text-green-500">
                  (149 reviews)
                </span>
              </span>
            </div>
            <div className="my-4 flex w-full items-center justify-between">
              <div className="flex h-full items-center gap-2">
                <h3 className="flex items-center text-xl font-semibold">
                  <BiPound /> 45
                </h3>
                <h3 className="flex items-center text-xl text-slate-400 line-through">
                  <BiPound /> 48
                </h3>
                <small className="text-xs text-rose-500">26% off</small>
              </div>
            </div>
          </div>
          <div className="py-4">
            <div className="flex w-full items-center justify-start gap-2">
              <div className="cursor-pointer rounded-lg border px-4 py-2 hover:bg-slate-200">
                250g
              </div>
              <div className="cursor-pointer rounded-lg border px-4 py-2 hover:bg-slate-200">
                500g
              </div>
              <div className="cursor-pointer rounded-lg border px-4 py-2 hover:bg-slate-200">
                1kg
              </div>
            </div>

            <div className="flex py-4">
              <Button
                onClick={() => handleCount("-")}
                className="cursor-pointer rounded-none border bg-white p-2 text-slate-800 hover:bg-slate-100"
              >
                {" "}
                -{" "}
              </Button>
              <Button
                disabled
                className=" min-w-[25px] rounded-none border-b border-t border-b-slate-300 border-t-slate-300 bg-white p-2 px-0 text-slate-900 hover:bg-slate-100"
              >
                {" "}
                {count}{" "}
              </Button>
              <Button
                onClick={() => handleCount("+")}
                className="cursor-pointer rounded-none border bg-white p-2 text-slate-800 hover:bg-slate-100"
              >
                {" "}
                +{" "}
              </Button>
            </div>
            <div className=" flex w-full items-center justify-start gap-2 border-b pb-6">
              <Button className="flex min-w-[210px] items-center gap-1 bg-green-500 text-sm font-bold hover:bg-green-600">
                <FiShoppingBag /> Add to cart
              </Button>
              <div className="flex items-center justify-center gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-green-50 px-2 shadow-lg hover:bg-green-400">
                        <HiOutlineArrowsRightLeft />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="rounded-lg border-0 bg-slate-700 px-2 py-1 text-xs text-white">
                      <p>Compare</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-green-50 px-2 shadow-lg hover:bg-green-400">
                        <AiOutlineHeart />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="rounded-lg border-0 bg-slate-700 px-2 py-1 text-xs text-white">
                      <p>WishList</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className="my-4 flex flex-col gap-2 py-2 text-slate-500">
              <p className="flex items-center justify-between">
                <span className="w-full max-w-[200px]">Product Code: </span>
                <span className="flex w-full text-start text-xs">FBB99339</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="w-full max-w-[200px]">Availability: </span>
                <span className="flex w-full text-start text-xs">In Stock</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="w-full max-w-[200px]">Type: </span>
                <span className="flex w-full text-start text-xs">Fruits</span>
              </p>
              <p className="flex items-center justify-between">
                <span className="w-full max-w-[200px]">Shipping: </span>
                <span className="flex w-full text-start text-xs">
                  01 day shipping.( Free pickup today)
                </span>
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center rounded-lg border border-slate-400 px-4 py-2">
                Share{" "}
                <span className="ml-1 mt-[3px] inline-block">
                  <GoTriangleDown />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <span className="flex w-full cursor-pointer items-center justify-start gap-2 text-slate-600">
                    <BiLogoFacebookCircle /> Facebook
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="flex w-full cursor-pointer items-center justify-start gap-2 text-slate-600">
                    <BsTwitter /> Twitter
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span className="flex w-full cursor-pointer items-center justify-start gap-2 text-slate-600">
                    <BiLogoLinkedin /> LinkedIn
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </main>
  );
};
export default AddToCart;
