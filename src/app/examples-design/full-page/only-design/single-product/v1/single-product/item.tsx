/*
|-----------------------------------------
| setting up Item for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Item = ({ data }: { data: any }) => {
  const { id, img, title, price } = data || {};
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
    <div key={id} className="my-4 flex w-full items-center gap-4 border-b pb-4 md:my-1">
      <div className="w-[140px] md:w-[200px]">
        <Image
          height={1080}
          width={500}
          src={img}
          alt="Watch"
          className="h-[108px] w-full rounded-lg object-cover md:h-auto"
        />
      </div>
      <div className="flex w-full flex-col justify-between md:flex-row">
        <div className="flex flex-col">
          <Link href="/public/single" className="font-semibold text-slate-700">
            {title}
          </Link>
          <p className="text-slate-700">.98 / lb</p>
          <div className="flex w-full items-center justify-between ">
            <div className="flex cursor-pointer items-center justify-start text-xs text-slate-600">X Remove</div>
            <div className="inline-flex w-[120px] justify-end pr-4 text-end md:hidden"> &#163; {price}</div>
          </div>
        </div>
        <div className="flex py-1">
          <Button
            onClick={() => handleCount("-")}
            className="cursor-pointer rounded-none border bg-white p-2 text-slate-800 hover:bg-slate-100"
          >
            {" "}
            -{" "}
          </Button>
          <Button
            disabled
            className=" min-w-[25px] rounded-none border-b border-t border-b-slate-300 border-t-slate-300 bg-white p-2 px-0 text-slate-800 hover:bg-slate-100"
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
      </div>
      <div className="hidden w-[200px] justify-end pr-4 text-end md:inline-flex"> &#163; {price}</div>
    </div>
  );
};
export default Item;
