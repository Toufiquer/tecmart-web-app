/*
|-----------------------------------------
| setting up sidebar hover items for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

"use client";

import Link from "next/link";
import { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Url } from "url";

export type LINKTYPE = {
  name: string;
  link: Url | string;
  badge?: string;
  id?: string | number;
  icon?: ReactNode | string;
};
export type SIDEBARTYPE = {
  name: string;
  icon?: ReactNode | null;
  content: Array<LINKTYPE>;
  isDropdown?: boolean;
  isActive?: boolean;
  link?: Url | string;
};

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const SidebarHoverItem = ({
  children,
  data,
  className,
}: {
  children?: ReactNode | null;
  data?: ReactNode | null | SIDEBARTYPE;
  className?: string | null;
}) => {
  const {
    name,
    icon,
    isDropdown = true,
    isActive = false,
    content,
    link = "/",
  } = data as SIDEBARTYPE;
  const cardContent = (
    <>
      <div className={`${content.length > 0 && "border-b"} min-py-2`}>
        {link !== "" ? (
          <Link href={`${link}`}>
            <h2 className="w-full py-2 pl-4">{name}</h2>
          </Link>
        ) : (
          <h2 className="w-full py-2 pl-4">{name}</h2>
        )}
      </div>
      <div className="relative -right-6 top-0 z-50 w-full max-w-[230px]">
        <div className="fixed left-[36px] top-[-30px] h-4 w-4 rotate-45 animate-none border-b border-l bg-[#fff]" />
        <div className="right-0 -ml-6 flex flex-col overflow-hidden">
          {content?.map((curr: LINKTYPE, index: number) => {
            return (
              <Link
                key={curr.id || index}
                href={`${curr.link}`}
                className="flex items-center justify-start gap-2 rounded py-[.35rem] pl-[35px] hover:bg-[#eff2f6] hover:text-[#3874ff]"
              >
                <span className="flex items-center gap-2">
                  {curr.icon} {curr.name}{" "}
                </span>
                {curr.badge && (
                  <Badge
                    variant="outline"
                    className="rounded-[.25rem] border border-[#96d9ff] bg-[#c7ebff] py-0 text-[.60rem] text-[#005585]"
                  >
                    {curr.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="daauk-animation-none flex min-h-[22px] w-full cursor-pointer items-center justify-center rounded-[.5rem] py-2 hover:bg-[#eff2f6]">
          <div className="relative py-1">
            {icon}
            {isActive && (
              <div className="absolute right-[-3px] top-[-3px] h-[6px] w-[6px] rounded-full bg-[#3874ff]" />
            )}
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="daauk-animation-none -top-[45px] left-[43px] block animate-none rounded-lg p-0 py-2 text-[.8rem] md:absolute">
        {cardContent}
      </HoverCardContent>
    </HoverCard>
  );
};
export default SidebarHoverItem;
SidebarHoverItem.defaultProps = { children: "", data: "", className: "" };
