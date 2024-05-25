/*
|-----------------------------------------
| setting up SidebarExtraFilter for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

"use client";

import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { BiPound } from "react-icons/bi";
import { BsDashLg } from "react-icons/bs";

const data = [
  "E-Grocery",
  "Deal Share",
  "DMart",
  "Blanket",
  "StoreFront",
  "Online Grocery",
];
const getStar = (num: number) => {
  const content = [];
  for (let i = 1; i <= 5; i += 1) {
    if (num < i) {
      content.push(<AiOutlineStar />);
    } else {
      content.push(<AiTwotoneStar />);
    }
  }
  return content;
};
const SidebarExtraFilter = () => {
  const [price, setPrice] = useState([50, 100]);
  const handleChange = (event: number[]) => {
    setPrice(event);
  };
  return (
    <main className="flex h-auto w-full flex-col gap-4 px-2 pr-4">
      <div className="flex w-full flex-col gap-2">
        <h2 className="mt-8 text-xl font-semibold">Stores</h2>
        <Input type="text" placeholder="Search Your Products" />
        {data.map((i) => (
          <div key={i} className="flex items-center space-x-2 py-1">
            <Checkbox id={i} />
            <label
              htmlFor={i}
              className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {i}
            </label>
          </div>
        ))}
        <h2 className="mt-8 text-xl font-semibold">Price</h2>
        <Slider
          thumb={true}
          defaultValue={[25, 75]}
          step={10}
          minStepsBetweenThumbs={1}
          onValueChange={handleChange}
          max={300}
          className="cursor-pointer"
        />
        <div className="flex w-full items-center justify-between py-2 text-xs ">
          price:
          <span className="flex h-auto items-center justify-center">
            <span className="mt-[-3px] inline-block">
              <BiPound />
            </span>
            {price[0]}
            <span className="px-2">
              <BsDashLg />
            </span>
            <span className="mt-[-3px] inline-block">
              <BiPound />
            </span>
            {price[1]}
          </span>
        </div>
        <div className="flex w-full flex-col">
          {[5, 4, 3, 2, 1].map((i) => (
            <div key={i} className="flex items-center space-x-2 py-1">
              <Checkbox id={i} />
              <label
                htmlFor={i}
                className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                <span className="flex items-center text-orange-400">
                  {getStar(i)}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default SidebarExtraFilter;
