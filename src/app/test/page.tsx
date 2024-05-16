/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import ScrollSpy from "react-ui-scrollspy";
import "./test.css";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
const Page = () => {
  const pathName = usePathname();
  console.log("pathName", pathName);
  useEffect(() => {}, [pathName]);
  return (
    <main className="min-h-screen w-full bg-slate-900 text-white">
      <div className="w-full grid grid-cols-[300px_1fr] ">
        <div className="border w-full min-h-screen relative">
          <div className="w-full flex flex-col gap-4 fixed top-0 left-0 p-4">
            <Link href="#dev-1" data-to-scrollspy-id="dev-1">
              Section 1
            </Link>
            <Link href="#dev-2" data-to-scrollspy-id="dev-2">
              Section 2
            </Link>
            <Link href="#dev-3" data-to-scrollspy-id="dev-3">
              Section 3
            </Link>
            <Link href="#dev-4" data-to-scrollspy-id="dev-4">
              Section 4
            </Link>
            <Link href="#dev-5" data-to-scrollspy-id="dev-5">
              Section 5
            </Link>
          </div>
        </div>
        <div className="border w-full min-h-screen">
          <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
            <div id="dev-1" className="h-[120vh] border">
              <h3>Dev 1</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              dolores veritatis doloremque fugit. Soluta aperiam atque inventore
              deleniti, voluptatibus non fuga eos magni natus vel, rerum
              excepturi expedita. Tempore, vero!
            </div>
            <div id="dev-2" className="h-screen border">
              <h3>Dev 2</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              dolores veritatis doloremque fugit. Soluta aperiam atque inventore
              deleniti, voluptatibus non fuga eos magni natus vel, rerum
              excepturi expedita. Tempore, vero!
            </div>
            <div id="dev-3" className="h-screen border">
              <h3>Dev 3</h3>3 Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aut dolores veritatis doloremque fugit. Soluta aperiam atque
              inventore deleniti, voluptatibus non fuga eos magni natus vel,
              rerum excepturi expedita. Tempore, vero!
            </div>
            <div id="dev-4" className="h-screen border">
              <h3>Dev 4</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              dolores veritatis doloremque fugit. Soluta aperiam atque inventore
              deleniti, voluptatibus non fuga eos magni natus vel, rerum
              excepturi expedita. Tempore, vero!
            </div>
            <div id="dev-5" className="h-screen border">
              <h3>Dev 5</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              dolores veritatis doloremque fugit. Soluta aperiam atque inventore
              deleniti, voluptatibus non fuga eos magni natus vel, rerum
              excepturi expedita. Tempore, vero!
            </div>
          </ScrollSpy>
        </div>
      </div>
    </main>
  );
};
export default Page;