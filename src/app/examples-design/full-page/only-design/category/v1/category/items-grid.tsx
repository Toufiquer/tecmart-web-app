/*
|-----------------------------------------
| setting up ItemsGrid for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { BiChevronLeft, BiChevronRight, BiPound } from "react-icons/bi";

const pgnBthStyle =
  "cursor-pointer rounded-lg border px-3 py-1 text-sm hover:bg-green-400 bg-white text-black font-semibold";

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
        src={url}
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
const ItemsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setToalPage] = useState(12);
  const [productPerPage, setProductPerPage] = useState(50);
  return (
    <div className="mb-12 flex w-full flex-col py-4">
      <div className="grid w-full grid-cols-1 flex-wrap justify-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:justify-between">
        {[
          "https://i.ibb.co/xLbNqc4/1.png",
          "https://i.ibb.co/CQ5PcKh/2.png",
          "https://i.ibb.co/bL4F59C/3.png",
          "https://i.ibb.co/xLbNqc4/1.png",
          "https://i.ibb.co/CQ5PcKh/2.png",
          "https://i.ibb.co/bL4F59C/3.png",
          "https://i.ibb.co/xLbNqc4/1.png",
          "https://i.ibb.co/CQ5PcKh/2.png",
          "https://i.ibb.co/bL4F59C/3.png",
        ].map((curr, idx) => (
          <CreateItem key={idx} url={curr} idx={idx} />
        ))}
      </div>
      <div className="flex gap-2 py-8 font-semibold text-black">
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className={`${pgnBthStyle} `}
        >
          <BiChevronLeft />
        </Button>
        {totalPage <= 5 ? (
          Array.from({ length: totalPage }, (_, curr) => (
            <Button
              onClick={() => setCurrentPage(curr + 1)}
              className={`${pgnBthStyle} ${
                currentPage === curr + 1 && "bg-green-400"
              }`}
            >
              {curr + 1}
            </Button>
          ))
        ) : (
          <div className="flex gap-2">
            {currentPage < 3 &&
              Array.from({ length: 2 }, (_, curr) => (
                <Button
                  onClick={() => setCurrentPage(curr + 1)}
                  className={`${pgnBthStyle} ${
                    currentPage === curr + 1 && "bg-green-400"
                  }`}
                >
                  {curr + 1}
                </Button>
              ))}

            {currentPage >= 3 && (
              <>
                {currentPage === totalPage && (
                  <Button
                    onClick={() => setCurrentPage(currentPage - 2)}
                    className={`${pgnBthStyle}`}
                  >
                    {currentPage - 2}
                  </Button>
                )}
                <Button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className={`${pgnBthStyle}`}
                >
                  {currentPage - 1}
                </Button>
                {currentPage !== totalPage && (
                  <Button
                    onClick={() => setCurrentPage(currentPage)}
                    className={`${pgnBthStyle} bg-green-400`}
                  >
                    {currentPage}
                  </Button>
                )}
              </>
            )}
            <Button className={`${pgnBthStyle}`} disabled>
              ...
            </Button>
            <Button
              onClick={() => setCurrentPage(totalPage)}
              className={`${pgnBthStyle} ${
                totalPage === currentPage && "bg-green-400"
              } `}
            >
              {totalPage}
            </Button>
          </div>
        )}
        <Button
          disabled={totalPage === currentPage}
          onClick={() => setCurrentPage(currentPage + 1)}
          className={`${pgnBthStyle}`}
        >
          <BiChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default ItemsGrid;
