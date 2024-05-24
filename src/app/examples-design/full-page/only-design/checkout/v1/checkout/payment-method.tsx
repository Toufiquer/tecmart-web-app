/*
|-----------------------------------------
| setting up PaymentMethod for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RiMastercardFill, RiVisaFill } from "react-icons/ri";
import { FaCcDiscover } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const commonInputStyle =
  "w-full focus:outline-none py-2 text-sm text-gray-900 border border-gray-300 bg-white focus:ring-slate-400 focus:border-slate-400 ps-2 rounded-lg";
const PaymentMethod = () => {
  const [payment, setPayment] = useState("creditCard");
  return (
    <main className="mb-12">
      <h2 className="mb-2 font-semibold">
        <span className="py-4 pr-4 text-2xl font-bold">Payment Method</span>
      </h2>
      <div className="flex flex-col w-full flex-wrap">
        <div className="mb-4 flex flex-col md:flex-row justify-between">
          <div className="flex items-center gap-2">
            <div
              onClick={() => setPayment("creditCard")}
              className="flex items-center gap-2"
            >
              <input checked={payment === "creditCard"} type="radio" />{" "}
              <span> Credit card</span>
            </div>
            <span className="ml-2 text-2xl">
              <RiVisaFill />
            </span>
            <span className="ml-2 text-2xl">
              <RiMastercardFill />
            </span>
            <span className="ml-2 text-2xl">
              <FaCcDiscover />
            </span>
            <span className="ml-2 text-2xl">
              <SiAmericanexpress />
            </span>
          </div>
          <div onClick={() => setPayment("paypal")} className="flex gap-2">
            <input checked={payment === "paypal"} type="radio" />{" "}
            <span>Paypal</span>
          </div>
          <div onClick={() => setPayment("coupon")} className="flex gap-2">
            <input checked={payment === "coupon"} type="radio" />{" "}
            <span>Coupon</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="mb-4 mt-2 flex w-full flex-col">
          <div className="text sm font-semibold">Select card</div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="visa">Visa</SelectItem>
              <SelectItem value="Discover">Discover</SelectItem>
              <SelectItem value="masterCard">Master Card</SelectItem>
              <SelectItem value="americanExpress">American Express</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4 mt-2 flex w-full flex-col">
          <div className="text sm font-semibold">Card number</div>
          <input
            type="text"
            placeholder="Card number"
            className={commonInputStyle}
          />
        </div>
      </div>
      <div className="mb-4 mt-2 flex flex-col">
        <div className="text sm font-semibold">Full name</div>
        <input
          type="text"
          placeholder="Full name"
          className={commonInputStyle}
        />
      </div>
      <div className="flex w-full  flex-col md:flex-row ">
        <div className="flex flex-col w-full">
          <div className="flex w-full font-semibold">Expires on</div>
          <div className="flex w-full gap-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="January">January</SelectItem>
                <SelectItem value="February">February</SelectItem>
                <SelectItem value="March">March</SelectItem>
                <SelectItem value="April">April</SelectItem>
                <SelectItem value="May">May</SelectItem>
                <SelectItem value="June">June</SelectItem>
                <SelectItem value="July">July</SelectItem>
                <SelectItem value="August">August</SelectItem>
                <SelectItem value="September">September</SelectItem>
                <SelectItem value="October">October</SelectItem>
                <SelectItem value="November">November</SelectItem>
                <SelectItem value="December">December</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2010">2010</SelectItem>
                <SelectItem value="2011">2011</SelectItem>
                <SelectItem value="2012">2012</SelectItem>
                <SelectItem value="2013">2013</SelectItem>
                <SelectItem value="2014">2014</SelectItem>
                <SelectItem value="2015">2015</SelectItem>
                <SelectItem value="2016">2016</SelectItem>
                <SelectItem value="2017">2017</SelectItem>
                <SelectItem value="2018">2018</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="md:ml-2 mt-2 md:mt-0 flex w-full flex-col">
          <div className="text sm font-semibold">CVC</div>
          <input
            type="number"
            placeholder="CVC Number"
            className={commonInputStyle}
          />
        </div>
      </div>
      <div className="items-top mb-6 mt-8 flex space-x-2">
        <Checkbox />
        <div className="grid gap-1.5 leading-none">
          <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Save Card Details
          </p>
        </div>
      </div>
      <div className="flex w-full gap-4">
        <div className="gap-2 flex-col md:flex-row flex w-full">
          <Button className="w-full" variant="default">
            Pay &#163;695.2
          </Button>
          <Button className="min-w-[200px]" variant="outline">
            Save Order and Exit
          </Button>
        </div>
      </div>
    </main>
  );
};
export default PaymentMethod;
