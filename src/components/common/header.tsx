/*
|-----------------------------------------
| setting up Header for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/


import Image from "next/image";

import Link from "next/link";

const navData = [
  { id: "1", href: "/tools", name: "Tools", title: "Tools" },
  {
    id: "2",
    href: "/examples-design/full-page",
    name: "Page",
    title: "Example Page Design",
  },
  {
    id: "3",
    href: "/examples-design/components",
    name: "Components",
    title: "Example Components Design",
  },
  { id: "4", href: "/boilerplate", name: "Boilerplate", title: "Boilerplate" },
  { id: "5", href: "/global", name: "Global", title: "Global Template" },
  { id: "6", href: "/test", name: "Test", title: "Test Page" },
];

const Header = () => {
  return (
    <div className="border-b w-full h-[8vh]">
      <div className="flex items-center justify-between pr-4">
        <div className="flex items-center justify-start w-[70vw]">
          <div className=" px-4 py-1 flex items-center justify-center mt-1">
            <Image
              width={40}
              height={40}
              alt="Logo"
              src="/logo-white.svg"
              className="text-white"
            ></Image>
          </div>
          <Link
            href="/"
            className="text-2xl uppercase font-semibold text-start"
          >
            Tec Mart
          </Link>
        </div>
        <div className="flex items-center justify-end w-[30vw]">
          {navData.map((curr) => (
            <Link
              key={curr.id}
              href={curr.href}
              className="px-2 hover:underline"
              title={curr.title}
            >
              {curr.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;
