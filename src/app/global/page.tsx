/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import Header from "@/components/common/header";
import Outlet from "@/components/common/outlet";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SiteNavLayout from "./site-nav-layout";
import SiteNav from "./site-nav/site-nav";
import { useState } from "react";
import Nav from "./nav/nav";

export default function Page() {
  const [isOpen, setIsOpen] = useState(true);
  const onLayout = (sizes: number[]) => {
    if (sizes[0] <= 6) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };
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
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[92vh]"
        onLayout={onLayout}
      >
        <ResizablePanel defaultSize={16}>
          <SiteNav isOpen={isOpen} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <Outlet title="Global Template" />
        </ResizablePanel>
      </ResizablePanelGroup>
      <div className=" border-0 border-y border-slate-700 py-12 text-sm text-center">
        Example Side Bar with child [Click button || Bottom]
      </div>
      <SiteNavLayout />
    </main>
  );
}
