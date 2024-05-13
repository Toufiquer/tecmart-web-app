/*
|-----------------------------------------
| setting up SiteNavLayout for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useState } from "react";

import Sidebar from "./site-nav/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

const SiteNavLayout = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((pre) => !pre);
  };
  return (
    <main className="w-full min-h-screen">
      <div className="py-12 text-4xl text-center">Side Bar with child</div>
      <div
        className={`grid grid-cols-1 ${
          toggle ? "md:grid-cols-[253px_1fr]" : "md:grid-cols-[63px_1fr]"
        }`}
      >
        <ScrollArea className="w-full h-screen">
          <Sidebar toggle={toggle} handleToggle={handleToggle} />
        </ScrollArea>

        <div className="h-[calc(100vh_-_62px)] w-full border-l border-slate-200">
          <ScrollArea className="h-[calc(100vh_-_62px)] ">
            <ScrollArea>
              <div className="text-4xl w-full h-screen flex items-center justify-center">
                Children side nav layout
              </div>
            </ScrollArea>
          </ScrollArea>
        </div>
      </div>
    </main>
  );
};
export default SiteNavLayout;
