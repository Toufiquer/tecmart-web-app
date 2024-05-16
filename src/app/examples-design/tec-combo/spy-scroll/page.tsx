/*
|-----------------------------------------
| setting up SpyScrollPage for the App
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
import SpyScrollWrapper from "./spy-scroll-wrapper";
import { useState } from "react";
import Link from "next/link";
import "./style.css";
const divData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const SpyScrollPage = () => {
  const [spyDiv, setSpyDiv] = useState("");
  return (
    <main className="min-h-screen w-full bg-slate-900 text-white">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <ScrollArea className="w-full h-screen">
            {divData.map((curr) => (
              <div className="w-full p-4 my-4 border h-[60px]" key={curr}>
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
              <SpyScrollWrapper
                key={curr}
                refId={curr + ""}
                setSpyDiv={setSpyDiv}
              >
                <div className="h-screen">div {curr}</div>
              </SpyScrollWrapper>
            ))}
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};
export default SpyScrollPage;
