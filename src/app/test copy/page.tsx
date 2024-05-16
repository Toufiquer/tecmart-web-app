/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { z } from "zod";

import ScrollSpy from "react-scrollspy-navigation";

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
const nav = [
  { href: "#section-a1", id: "section-a1", title: "Link A1" },
  { href: "#section-a2", id: "section-a2", title: "Link A2" },
  { href: "#section-a3", id: "section-a3", title: "Link A3" },
  { href: "#section-a4", id: "section-a4", title: "Link A4" },
  { href: "#section-a5", id: "section-a5", title: "Link A5" },
  { href: "#section-a6", id: "section-a6", title: "Link A6" },
];
const Page = () => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-slate-800 text-slate-300 font-semibold text-xl">
      <div className="w-full grid grid-cols-2 gap-4 min-h-screen">
        <ScrollSpy
          activeClass="fg-red-500"
          offsetTop={80}
          rootMargin="-60px 0px 0px 0px"
        >
          <nav className="flex-1 flex justify-center">
            <ul className="flex align-center sx-20 gap-4 flex-col fixed">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex fs-14 fw-500 hover:underline"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ScrollSpy activeClass="fg-blue-500" offsetTop={80}>
            <div className="flex flex-col">
              {nav.map((item) => (
                <div id={item.id} className="min-h-screen" key={item.id}>
                  {" "}
                  {item.title}
                </div>
              ))}
            </div>
          </ScrollSpy>
        </ScrollSpy>
      </div>
    </main>
  );
};
export default Page;
