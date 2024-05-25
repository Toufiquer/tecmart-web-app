/*
|-----------------------------------------
| setting up DailyBestSells for the App
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

const CreateLink = ({ url }: { url: string }) => (
  <div className="w-full min-w-[290px]  max-w-[355px] rounded-lg border px-6 pb-4 pt-8 duration-300 hover:border-green-400 hover:shadow-xl lg:max-w-[49%] xl:max-w-[300px]">
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
    <div className="flex w-full items-center justify-between gap-4">
      <div className="flex h-full items-center gap-2">
        <h3 className="flex items-center text-sm">
          <BiPound /> 45
        </h3>
        <h3 className="flex items-center text-sm text-slate-400 line-through">
          <BiPound /> 45
        </h3>
      </div>
      <div className="flex text-orange-500">
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiOutlineStar />
        <span className="text-xs text-slate-400">4.5</span>
      </div>
    </div>

    <div className="mt-4 flex w-full items-center justify-between">
      <Button
        size="lg"
        className="flex h-[28px] w-full items-center gap-2 bg-green-500 py-1 text-sm hover:bg-green-600"
      >
        <AiOutlinePlus /> Add
      </Button>
    </div>

    <div className="mt-4 flex w-full items-center justify-between">
      <div className="flex flex-col items-center justify-center rounded-lg border p-3 text-xs">
        <strong>1813</strong>
        <p className="text-slate-500">Days</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg border p-3 text-xs">
        <strong>12</strong>
        <p className="text-slate-500">Hours</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg border p-3 text-xs">
        <strong>33</strong>
        <p className="text-slate-500">Mins</p>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg border p-3 text-xs">
        <strong>22</strong>
        <p className="text-slate-500">Sec</p>
      </div>
    </div>
  </div>
);
const DailyBestSells = () => {
  return (
    <section className="my-12 px-2">
      <div className="mb-8 flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold">Daily BestSells</h2>
      </div>
      <div className="flex w-full flex-wrap justify-center gap-4 xl:justify-between">
        <div className="relative w-full min-w-[290px] max-w-[355px] lg:max-w-[49%] xl:max-w-[300px]">
          <Image
            height={485}
            width={300}
            src="https://i.ibb.co/CWZW1bs/banner-deal.jpg"
            alt="Slider"
            className="h-full w-full min-w-[300px] rounded-lg object-cover"
          />
          <div className="absolute inset-x-0 top-0 h-full w-full ">
            <div className="flex h-full w-full flex-col items-start justify-start">
              <div className="max-w-6xl pl-6 pt-8 text-white">
                <h2 className="text-2xl font-semibold">
                  100% Organic Coffee Beans.{" "}
                </h2>
                <p className="mt-4 text-sm lg:text-sm">
                  Get the best deal before close.
                </p>
                <div className="mt-4 flex w-full items-center justify-between">
                  <Button className="mt-2 flex items-center gap-2 bg-green-400 hover:bg-green-500">
                    Shop now{" "}
                    <span className="text-xl">{iconBsArrowRightShort}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {["1.png", "1.png", "1.png"].map((curr) => (
          <CreateLink url={curr} />
        ))}
      </div>
    </section>
  );
};
export default DailyBestSells;
