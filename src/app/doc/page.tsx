/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import Header from "@/components/common/header";
import { ScrollArea } from "@/components/ui/scroll-area";

const data = [
  { id: 1, title: "1. Check tec inside tools page" },
  { id: 2, title: "2. If exist then you can implement it with global" },
  { id: 3, title: "2. If exist then you can implement it with boiler-plate" },
  { id: 4, title: "2. If exist then you can implement it with components" },
  { id: 5, title: "2. If exist then you can implement it with page" },
];

const Page = () => {
  return (
    <main className="bg-slate-800 text-white">
      <Header />
      <ScrollArea className="w-full h-screen">
        <main className="w-full min-h-screen flex flex-col gap-4 items-center justify-center py-4">
          <main className="w-full min-h-screen flex flex-col gap-4 max-w-[700px] justify-start items-start  py-4">
            <div className="text-sm">
              If you want to add new tec flow the instruction
            </div>
            {data.map((curr) => (
              <div
                key={curr.id}
                className="py-2 text-start text-xl text-slate-500"
              >
                {curr.title}
              </div>
            ))}
          </main>
        </main>
      </ScrollArea>
    </main>
  );
};
export default Page;
