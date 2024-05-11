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

const ToolsSidebar = () => {
  const toolsStorage = useToolsStorage((storage) => storage.toolsStorage);
  const setToolsStorage = useToolsStorage((storage) => storage.setToolsStorage);

  const data =
    (toolsStorage?.data && toolsStorage?.data[0]?.context) || "not found";
  return (
    <main>
      <ScrollArea className="w-full h-screen">
        <div className="pb-12 pt-2">
          {data
            .filter((curr) => curr.id !== "")
            .map((curr) => (
              <div key={curr.id} className="px-4">
                <h2 className="cursor-pointer mt-1 w-full border-slate-500 px-4 rounded-lg py-1 text-sm hover:border-b hover:bg-slate-800">
                  {curr.title}
                </h2>
              </div>
            ))}
        </div>
      </ScrollArea>
    </main>
  );
};
export default ToolsSidebar;
