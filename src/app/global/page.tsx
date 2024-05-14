/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import Header from "@/components/common/header";

import Nav from "./nav/nav";
import SiteNavLayoutClick from "./site-nav-layout-click";
import SiteNavLayoutResizable from "./site-nav-layout-resizable";

export default function Page() {
  return (
    <main className="bg-slate-900 text-white">
      <Header />
      <div className=" border-0 border-y border-slate-700 py-12 text-sm text-center">
        Example of Navigation
      </div>
      <Nav />
      <div className=" border-0 border-y border-slate-700 py-12 text-sm text-center">
        Example Side Bar with child [ResizableHandle]
      </div>
      <SiteNavLayoutResizable />
      <div className=" border-0 border-y border-slate-700 py-12 text-sm text-center">
        Example Side Bar with child [Click button || Bottom]
      </div>
      <SiteNavLayoutClick />
    </main>
  );
}
