/*
|-----------------------------------------
| setting up Notification for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

const Notification = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <main>
      <section className="px-12">
        <div className="flex w-full flex-col items-start justify-between md:flex-row md:items-center">
          <h2 className="text-xl font-semibold md:text-3xl">Notification settings</h2>
          <Button
            variant="outline"
            className="mb-4 mt-4 min-w-[230px] max-w-[235px] border-green-400 text-green-500 hover:bg-green-100 hover:text-green-500"
          >
            Add Payment
          </Button>
        </div>
        <h2 className="text-xl font-semibold">Email Notification</h2>
        <div className="mb-4 mt-2 w-full border-t" />
        <div className="mb-4 flex w-full items-center justify-between">
          <div className="flex w-full flex-col">
            <h2 className="text-sm font-semibold ">Weekly Notification</h2>
            <p className="text-slate-700">
              Various versions have evolved over the years, sometimes by accident, sometimes on purpose .
            </p>
          </div>
          <div className="w-[80px]">
            <Switch />
          </div>
        </div>
        <div className="mb-4 flex w-full items-center justify-between">
          <div className="flex w-full flex-col">
            <h2 className="text-sm font-semibold ">Account Summary</h2>
            <p className="text-slate-700">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis eguris eu
              sollicitudin massa. Nulla ipsum odio, aliquam in odio et, fermentum blandit nulla.
            </p>
          </div>
          <div className="w-[80px]">
            <Switch checked={toggle} onClick={() => setToggle(!toggle)} />
          </div>
        </div>
        <h2 className="mt-8 text-xl font-semibold">Order updates</h2>
        <div className="mb-4 mt-2 w-full border-t" />
        <div className="mb-4 flex w-full items-center justify-between">
          <div className="flex w-full flex-col">
            <h2 className="text-sm font-semibold ">Text messages</h2>
          </div>
          <div className="w-[80px]">
            <Switch />
          </div>
        </div>
        <div className="mb-4 flex w-full items-center justify-between">
          <div className="flex w-full flex-col">
            <h2 className="text-sm font-semibold ">Call before checkout</h2>
            <p className="text-slate-700">We'll only call if there are pending changes</p>
          </div>
          <div className="w-[80px]">
            <Switch />
          </div>
        </div>
        <h2 className="mt-8 text-xl font-semibold">Website Notification</h2>
        <div className="mb-4 mt-2 w-full border-t" />
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <input type="text" className="hidden" />
              New Follower
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <input type="text" className="hidden" />
              Post Like
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <input type="text" className="hidden" />
              Someone you followed posted
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <input type="text" className="hidden" />
              Post added to collection
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <input type="text" className="hidden" />
              Order Delivery
            </label>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Notification;
