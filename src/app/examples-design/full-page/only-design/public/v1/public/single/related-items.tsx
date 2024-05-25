/*
|-----------------------------------------
| setting up RelatedItems for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineStar,
  AiTwotoneStar,
} from "react-icons/ai";
import { BiPound } from "react-icons/bi";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";

const CreateItem = ({ url, idx }: { idx: number; url: string }) => (
  <div className="w-full rounded-lg border px-6 pb-4 pt-8 duration-300 hover:border-green-400 hover:shadow-xl">
    {idx <= 4 &&
      (idx % 3 === 0 ? (
        <div className="w-fit rounded-lg bg-green-400 px-2 py-1 text-[10px] font-semibold text-white">
          14%
        </div>
      ) : (
        <div>
          {idx % 2 === 0 ? (
            <div className="w-fit rounded-lg bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white">
              Sale
            </div>
          ) : (
            <div className="w-fit rounded-lg bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white">
              Hot
            </div>
          )}
        </div>
      ))}
    <Link href="/#" className="group relative">
      <Image
        height={200}
        width={120}
        src={`/${url}`}
        alt="Slider"
        className="h-auto w-full rounded-lg"
      />
      <div className="left80 invisible absolute bottom-8 h-auto w-full duration-100 group-hover:visible">
        <div className="my-auto flex items-center justify-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex h-8 items-center justify-center rounded bg-green-50 px-2 shadow-lg hover:bg-green-400">
                  <AiOutlineEye />
                </div>
              </TooltipTrigger>
              <TooltipContent className="rounded-lg border-0 bg-slate-700 px-2 py-1 text-xs text-white">
                <p>Quick View</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex h-8 items-center justify-center rounded bg-green-50 px-2 shadow-lg hover:bg-green-400">
                  <AiOutlineHeart />
                </div>
              </TooltipTrigger>
              <TooltipContent className="rounded-lg border-0 bg-slate-700 px-2 py-1 text-xs text-white">
                <p>WishList</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex h-8 items-center justify-center rounded bg-green-50 px-2 shadow-lg hover:bg-green-400">
                  <HiOutlineArrowsRightLeft />
                </div>
              </TooltipTrigger>
              <TooltipContent className="rounded-lg border-0 bg-slate-700 px-2 py-1 text-xs text-white">
                <p>Compare</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </Link>
    <p className="text-xs text-slate-400">Bakery & Biscuits</p>
    <h4 className="py-1 text-sm font-semibold">Haldiram&aposs Sev Bhujia</h4>
    <div className="flex gap-1 text-orange-500">
      <AiTwotoneStar />
      <AiTwotoneStar />
      <AiTwotoneStar />
      <AiTwotoneStar />
      <AiOutlineStar />
      <span className="text-xs text-slate-400">4.5 (149)</span>
    </div>
    <div className="mt-4 flex w-full items-center justify-between">
      <div className="flex h-full items-center gap-2">
        <h3 className="flex items-center text-sm">
          <BiPound /> 45
        </h3>
      </div>
      <Button
        size="sm"
        className="flex h-[28px] items-center gap-1 bg-green-500 py-0 text-xs hover:bg-green-600"
      >
        <AiOutlinePlus /> Add
      </Button>
    </div>
  </div>
);

const RelatedItems = () => {
  return (
    <main className="flex w-full flex-col py-4">
      <h2 className="py-6 text-2xl font-semibold">Related Items</h2>
      <div className="mx-0 my-4 px-2">
        <div className="grid w-full grid-cols-2 justify-center gap-4 md:grid-cols-3 lg:grid-cols-5 xl:justify-between">
          {["1.png", "1.png", "1.png", "1.png", "1.png"].map((curr, idx) => (
            <CreateItem key={idx} url={curr} idx={idx} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default RelatedItems;
