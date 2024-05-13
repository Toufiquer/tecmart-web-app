/*
|-----------------------------------------
| setting up ToolsOutlet for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useToolsStorage } from "./page-utils/useToolsStorage";
import Link from "next/link";
import { LuCopy } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

const ToolsOutlet = () => {
  const toolsStorage = useToolsStorage((storage) => storage.toolsStorage);
  const isFilter = useToolsStorage((storage) => storage.isFilter);

  const data =
    (toolsStorage?.data && toolsStorage?.data[0]?.context) || "not found";

  const handleCopy = (data: string) => {
    toast.success(`Copy, ${data}`, { autoClose: 1000 });
    copy(data);
  };
  return (
    <main>
      <ScrollArea className="w-full h-[90vh]">
        <div>
          <div className="pb-12 mb-12 pt-2">
            {data
              .filter((curr) => isFilter || curr.important)
              .filter((curr) => curr.id !== "")
              .map((curr, idx) => (
                <div key={curr.id} className="px-4 mb-12 pb-12">
                  <h2 className="cursor-pointer mt-1 w-full border-slate-500 px-4 rounded-lg py-1 text-xl text-slate-200 hover:border-b hover:bg-slate-800">
                    {idx + 1}. {curr.title}
                  </h2>
                  <div className="text-slate-400 text-sm pl-4">
                    {curr?.description?.map((d) => (
                      <h4>{d}</h4>
                    ))}
                  </div>

                  <div className="text-slate-400 underline font-semibold mt-4 text-sm pl-4">
                    Documentation
                  </div>
                  <div className="text-sm pl-4 flex gap-4 w-full">
                    {curr?.documentation?.map((d) => (
                      <Link
                        href={d.url || ""}
                        target="_blank"
                        className="text-blue-600 hover:text-blue-500 py-1 rounded-lg"
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                  <div className="text-slate-400 underline font-semibold mt-4 text-sm pl-4">
                    Installation
                  </div>
                  <div className="text-sm pl-4 flex gap-4 w-full flex-col mt-2">
                    {curr?.code?.map((d) => (
                      <div className="">
                        {d.Terminal && (
                          <div
                            onClick={() => handleCopy(d.Terminal || "")}
                            className="w-full flex items-center justify-between bg-slate-800 p-4 rounded-lg cursor-pointer"
                          >
                            <p>{d.Terminal}</p>
                            <div className="">
                              <LuCopy />
                            </div>
                          </div>
                        )}
                        {d.npm && (
                          <div
                            onClick={() => handleCopy(d.npm || "")}
                            className="w-full flex items-center justify-between bg-slate-800 p-4 rounded-lg cursor-pointer"
                          >
                            <p>{d.npm}</p>
                            <div className="">
                              <LuCopy />
                            </div>
                          </div>
                        )}
                        {d.yarn && (
                          <div
                            onClick={() => handleCopy(d.yarn || "")}
                            className="w-full flex items-center justify-between bg-slate-800 p-4 rounded-lg cursor-pointer"
                          >
                            <p>{d.yarn}</p>
                            <div className="">
                              {/* <LuCopy /> */}
                              <LuCopyCheck />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </ScrollArea>
    </main>
  );
};
export default ToolsOutlet;
