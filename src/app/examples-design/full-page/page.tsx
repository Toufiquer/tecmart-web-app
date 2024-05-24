/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import Header from "@/components/common/header";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import FullPageSidebar from "./full-page-sidebar";

import { exampleData } from "./create-example-data";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Page() {
  const [currentUI, setCurrentUI] = useState(exampleData[0].children[0]);
  return (
    <main className="bg-slate-900 text-white">
      <Header />
      <ResizablePanelGroup direction="horizontal" className="min-h-[92vh]">
        <ResizablePanel defaultSize={20}>
          <FullPageSidebar
            data={exampleData}
            currentUI={currentUI}
            setCurrentUI={setCurrentUI}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <div className="w-full flex flex-col gap-4">
            <div className="py-4 border-b flex items-center justify-between">
              <p className="pl-4 text-xs text-slate-200">
                <strong>Path: </strong> {currentUI.path.replaceAll("/", " / ")}
              </p>
              <div className="text-3xl">{currentUI.version}</div>
              <Link target="_blank" href={currentUI.urlPath}>
                <Button className="hover:underline">View Full Demo</Button>
              </Link>
            </div>
            <div className="py-4">{currentUI.component}</div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
