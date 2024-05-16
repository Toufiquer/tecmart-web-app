/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Header from "@/components/common/header";

import ToolsOutlet from "./tools-outlet";
import ToolsSidebar from "./tools-sidebar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.css";
import { useState } from "react";

export default function Page() {
  const [spyDiv, setSpyDiv] = useState("");
  return (
    <main className="bg-slate-900 text-white min-h-screen">
      <Header />
      <ResizablePanelGroup direction="horizontal" className="min-h-[90vh]">
        <ResizablePanel defaultSize={30}>
          <div className="w-full h-screen relative">
            <div className="sticky top-0">
              <ToolsSidebar spyDiv={spyDiv} />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <ToolsOutlet setSpyDiv={setSpyDiv} />
        </ResizablePanel>
      </ResizablePanelGroup>

      <ToastContainer />
    </main>
  );
}
