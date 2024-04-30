/*
|-----------------------------------------
| setting up Header for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/


import Image from "next/image";

import Link from "next/link";

const Header = () => {
  return (
    <div className="border-b w-full h-[8vh]">
      <div className="flex items-center justify-between pr-4">
        <div className="flex items-center justify-start w-[70vw]">
          <div className=" px-4 py-1">
            <Image width={40} height={40} alt="Logo" src="/profile.png"></Image>
          </div>
          <Link
            href="/"
            className="text-2xl uppercase font-semibold text-start"
          >
            Tec Mart
          </Link>
        </div>
        <div className="flex items-center justify-end w-[30vw]">
          <Link
            href="/tools"
            className="px-2 hover:underline"
            title="Example Design"
          >
            Tools
          </Link>
          <Link
            href="/examples-design/full-page"
            className="px-2 hover:underline"
            title="Example Design"
          >
            Page
          </Link>
          <Link
            href="/examples-design/components"
            className="px-2 hover:underline"
            title="Example Design"
          >
            Components
          </Link>
          <Link href="/boilerplate" className="px-2 hover:underline">
            Boilerplate
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
