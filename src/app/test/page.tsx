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
import { ScrollArea } from "@/components/ui/scroll-area";
import RefDiv from "./ref-div";
import { useState } from "react";
import Link from "next/link";
import "./test.css";
const divData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Page = () => {
  const [spyDiv, setSpyDiv] = useState("");
  return (
    <main className="min-h-screen w-full bg-slate-900 text-white">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <ScrollArea className="w-full h-screen">
            {divData.map((curr) => (
              <div className="w-full p-4 my-4 border h-[600px]" key={curr}>
                <Link
                  href={`#${curr}`}
                  className={`${spyDiv === curr + "" && " text-blue-600 "}`}
                >
                  {curr}
                </Link>
              </div>
            ))}
          </ScrollArea>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <ScrollArea className="w-full h-screen">
            {divData.map((curr) => (
              <RefDiv key={curr} refId={curr + ""} setSpyDiv={setSpyDiv} />
            ))}
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};
export default Page;