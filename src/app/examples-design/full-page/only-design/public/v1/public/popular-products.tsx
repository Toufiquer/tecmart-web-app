/*
|-----------------------------------------
| setting up PopularProducts for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
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
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { BiPound } from "react-icons/bi";

const CreateItem = ({ url, idx }: { idx: number; url: string }) => (
  <div className="w-full min-w-[230px] rounded-lg border px-6 pb-4 pt-8 duration-300 hover:border-green-400 hover:shadow-xl md:max-w-[234px]">
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
        <h3 className="flex items-center text-sm text-slate-400 line-through">
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

const PopularProducts = () => {
  return (
    <section className="my-12 px-2">
      <div className="mb-8 flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold">Popular Products</h2>
      </div>
      <div className="flex w-full flex-wrap justify-center gap-4 xl:justify-between">
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
          <CreateItem url={curr} idx={idx} />
        ))}
      </div>
    </section>
  );
};
export default PopularProducts;
