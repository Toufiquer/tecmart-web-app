import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { z } from "zod";

/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

const data = [
  { id: 1, title: "item 1" },
  { id: 2, title: "item 2" },
  { id: 3, title: "item 3" },
  { id: 4, title: "item 4" },
  { id: 5, title: "item 5" },
  { id: 6, title: "item 6" },
  { id: 7, title: "item 7" },
  { id: 8, title: "item 8" },
  { id: 9, title: "item 9" },
];
const Page = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-slate-800 text-slate-300 font-semibold text-xl">
      <div className="w-full grid grid-cols-2 gap-4 min-h-screen">
        <ScrollArea className="w-full h-screen">
          <div className="p-4 flex flex-col gap-4">
            {data.map((curr) => (
              <Link
                href={`#${curr.title
                  .toLocaleLowerCase()
                  .replace("-", "_")
                  .replace(" ", "_")}`}
                key={curr.id}
                className="py my-4"
              >
                {curr.title}
              </Link>
            ))}
          </div>
        </ScrollArea>
        <ScrollArea className="w-full h-screen">
          <div className="border-l p-4">
            {data.map((curr) => (
              <div
                id={curr.title}
                key={curr.id}
                className="w-full h-screen border"
              >
                <h2 className="py text-4xl flex items-center justify-center w-full h-full">
                  {curr.title}
                </h2>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </main>
  );
};
export default Page;
