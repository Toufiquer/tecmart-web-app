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
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import { LuCopy } from "react-icons/lu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Page() {
  const [currentUI, setCurrentUI] = useState(exampleData[0].children[0]);
  const handleCopy = (data: string) => {
    console.log("click", data);
    toast.success(`Copy, ${data}`, { autoClose: 1000, theme: "dark" });
    copy(data);
  };
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
            {currentUI.cli && currentUI.cli?.length > 0 && (
              <div className="p-4 flex flex-col gap-2">
                {currentUI.cli.map((cliItem) => (
                  <div
                    onClick={() => handleCopy(cliItem)}
                    className="w-full flex items-center justify-between bg-slate-800 p-4 rounded-lg cursor-pointer"
                  >
                    <p>{cliItem}</p>
                    <div className="">
                      <LuCopy />
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="py-4">{currentUI.component}</div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      <ToastContainer />
    </main>
  );
}
