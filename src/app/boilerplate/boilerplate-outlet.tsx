/*
|-----------------------------------------
| setting up BoilerplateOutlet for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useBoilerStorage } from "./page-utils/useBoilerPlateStorage";
import Link from "next/link";
import { LuCopy } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BoilerplateOutlet = () => {
  const boilerStorage = useBoilerStorage(
    (storage) => storage.boilerPlateStorage
  );
  const isFilter = useBoilerStorage((storage) => storage.isFilter);

  const data =
    (boilerStorage?.data && boilerStorage?.data[0]?.context) || "not found";

  const handleCopy = (data: string) => {
    toast.success(`Copy, ${data}`, { autoClose: 1000, theme: "dark" });
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
              // .sort((a, b) => a.title?.localeCompare(b.title || "") || 1)
              .map((curr, idx) => (
                <div key={curr.id} className="p-8 mb-12 pb-12">
                  <h2 className="cursor-pointer mt-1 w-full border-slate-500 rounded-lg py-1 text-xl text-slate-200 ">
                    {idx + 1}. {curr.title}
                  </h2>
                  {curr.examplePath && (
                    <div className="text-sm text-slate-100">
                      example Path : {curr.examplePath}
                    </div>
                  )}
                  <div className="  mb-4">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          <p className="text-slate-200 text-sm">Basic Info </p>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="text-slate-400 text-sm">
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
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  {curr.boilerPlate?.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-800 p-4 my-4 rounded-lg"
                    >
                      <h2 className="text-xl uppercase text-slate-200">
                        {item.name}
                      </h2>
                      <div className="text-xs text-slate-400 mb-2">
                        {item.description}
                      </div>
                      <div>
                        {item.content.map((i) => (
                          <div
                            key={i.id}
                            className="relative my-2 mb-4 p-1 rounded-lg border border-slate-500"
                          >
                            <div className="pl-2 text-slate-300">{i.name}</div>
                            <div className="pl-2 text-slate-400 text-xs mb-1">
                              {i.fileName}
                            </div>
                            <div
                              onClick={() => handleCopy(i.code.join(" ") || "")}
                              className="w-full relative flex items-center justify-between bg-slate-950 p-2 text-sm rounded-lg cursor-pointer"
                            >
                              <code className="w-full flex flex-col gap-2">
                                {i.code.map((c) => (
                                  <span key={c}>{c}</span>
                                ))}
                              </code>
                              <div className="top-4 absolute right-4">
                                <LuCopy />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </ScrollArea>
    </main>
  );
};
export default BoilerplateOutlet;
