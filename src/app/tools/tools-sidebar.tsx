/*
|-----------------------------------------
| setting up ToolsSidebar for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useToolsStorage } from "./page-utils/useToolsStorage";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Link from "next/link";
 

const ToolsSidebar = ({ spyDiv }: { spyDiv: string }) => {
  const isFilter = useToolsStorage((storage) => storage.isFilter);
  const setIsFilter = useToolsStorage((storage) => storage.setIsFilter);
  const toolsStorage = useToolsStorage((storage) => storage.toolsStorage);

  const data =
    (toolsStorage?.data && toolsStorage?.data[0]?.context) || "not found";
  const handleFilter = () => {
    setIsFilter(!isFilter);
  };
  return (
    <main>
      <div className="flex items-center justify-between space-x-2 border-slate-700 py-2 border-b px-6">
        <Label htmlFor="airplane-mode">
          <div className="flex gap-1">
            <p>
              {isFilter ? "All" : "Important"}
              <sub className=" text-[10px] font-normal">
                {" "}
                (
                {
                  data
                    .filter((curr) => isFilter || curr.important)
                    .filter((curr) => curr.id !== "").length
                }
                )
              </sub>
            </p>
          </div>
        </Label>
        <Switch
          id="airplane-mode"
          onClick={handleFilter}
          className="border border-slate-600"
        />
      </div>
      <ScrollArea className="w-full h-[86vh]">
        <div className="pb-12 pt-2">
          {data
            .filter((curr) => isFilter || curr.important)
            .filter((curr) => curr.id !== "")
            .sort((a, b) => a.title?.localeCompare(b.title || "") || 1)
            .map((curr, idx) => (
              <div key={curr.id} className="px-4">
                <Link
                  href={`#${curr.title
                    ?.toLocaleLowerCase()
                    .replace("-", "_")
                    .replace(" ", "_")}`}
                >
                  <p
                    className={`cursor-pointer mt-1 w-full border-slate-500 px-4 rounded-lg py-1 text-sm hover:border-b hover:bg-slate-800 ${
                      spyDiv.toLocaleLowerCase() ===
                        curr.title?.toLocaleLowerCase() && " bg-slate-800 "
                    }`}
                  >
                    {idx + 1}. {curr.title}
                  </p>
                </Link>
              </div>
            ))}
        </div>
      </ScrollArea>
    </main>
  );
};
export default ToolsSidebar;
