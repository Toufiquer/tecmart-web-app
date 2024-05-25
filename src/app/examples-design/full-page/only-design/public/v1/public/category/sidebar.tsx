/*
|-----------------------------------------
| setting up sidebar for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import { useState } from "react";

import SidebarAccordion from "./sidebar-accordion";
import { Button } from "@/components/ui/button";
import {
  sidebarDataHome,
  sidebarDataECommerce,
  sidebarDataCRM,
  sidebarDataProjectManagement,
  sidebarDataProjectChat,
  sidebarDataProjectEmail,
  sidebarDataProjectEvents,
  sidebarDataProjectKanban,
  sidebarDataProjectSocial,
  sidebarDataProjectCalendar,
  sidebarDataProjectStarter,
  sidebarDataProjectFaq,
  sidebarDataProjectLoading,
} from "./sidebar-data";

import SidebarHoverItem from "./sidebar-hover-item";
import SidebarExtraFilter from "./sidebar-extra-filter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

const MobileLayout = ({ className }: { className: string }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`${className}`}>
      <div className="fixed left-0 top-0 z-50 w-full bg-white px-2 py-4">
        <div className="flex w-full flex-col items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <h2 className="min-w-[140px]">Dashboard & Filter</h2>
            <div className="flex w-full justify-end">
              <Button
                onClick={() => setToggle((pre) => !pre)}
                className="cursor-pointer bg-white pr-2 text-black hover:bg-white focus:bg-white"
              >
                <span className=" text-2xl md:hidden">
                  {toggle ? (
                    <span className="transition duration-1000">
                      <RxCross2 />
                    </span>
                  ) : (
                    <span className="transition duration-1000">
                      <AiOutlineMenu />
                    </span>
                  )}
                </span>
              </Button>
            </div>
          </div>
          {toggle && (
            <div className="md:none w-full px-2">
              <div className="block h-auto min-h-screen w-full">
                <ScrollArea className="h-[calc(100vh_-_122px)] w-full">
                  <div className="w-full">
                    <SidebarAccordion data={sidebarDataHome} className="pt-4" />
                    <h2 className="mb-2 mt-4 text-[.8rem]">APPS</h2>
                    <SidebarAccordion data={sidebarDataECommerce} />
                    <SidebarAccordion data={sidebarDataCRM} />
                    <SidebarAccordion data={sidebarDataProjectManagement} />
                    <SidebarAccordion data={sidebarDataProjectChat} />
                    <SidebarAccordion data={sidebarDataProjectEmail} />
                    <SidebarAccordion data={sidebarDataProjectEvents} />
                    <SidebarAccordion data={sidebarDataProjectKanban} />
                    <SidebarAccordion data={sidebarDataProjectSocial} />
                    <SidebarAccordion data={sidebarDataProjectCalendar} />

                    <h2 className="mb-2 mt-4 text-[.8rem]">PAGES</h2>
                    <SidebarAccordion data={sidebarDataProjectStarter} />
                    <SidebarAccordion data={sidebarDataProjectFaq} />
                    <SidebarAccordion data={sidebarDataProjectLoading} />
                    <SidebarExtraFilter />
                    <div className="h-[100px]" />
                  </div>
                </ScrollArea>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const TabletLayout = ({
  data,
  className,
}: {
  className: string;
  data: any;
}) => {
  const { toggle, handleToggle } = data || {};
  return (
    <div className={`${className}`}>
      {" "}
      <div className="relative h-[calc(100vh_-_122px)] border border-slate-200 text-slate-600">
        <ScrollArea className="h-[calc(100vh_-_122px)]">
          {toggle ? (
            <div className="ml-3">
              <SidebarAccordion data={sidebarDataHome} className="pt-4" />
              <h2 className="mb-2 mt-4 pl-4 text-[.8rem]">APPS</h2>
              <SidebarAccordion data={sidebarDataECommerce} />
              <SidebarAccordion data={sidebarDataCRM} />
              <SidebarAccordion data={sidebarDataProjectManagement} />
              <SidebarAccordion data={sidebarDataProjectChat} />
              <SidebarAccordion data={sidebarDataProjectEmail} />
              <SidebarAccordion data={sidebarDataProjectEvents} />
              <SidebarAccordion data={sidebarDataProjectKanban} />
              <SidebarAccordion data={sidebarDataProjectSocial} />
              <SidebarAccordion data={sidebarDataProjectCalendar} />

              <h2 className="mb-2 mt-4 pl-4 text-[.8rem]">PAGES</h2>
              <SidebarAccordion data={sidebarDataProjectStarter} />
              <SidebarAccordion data={sidebarDataProjectFaq} />
              <SidebarAccordion data={sidebarDataProjectLoading} />
              <SidebarExtraFilter />
              <div className="h-[100px]" />
            </div>
          ) : (
            <div className="flex flex-col p-2">
              <div className="h-4" />
              <SidebarHoverItem data={sidebarDataHome} />
              <div className="my-4 flex w-full justify-center border-t" />
              <SidebarHoverItem data={sidebarDataECommerce} />
              <SidebarHoverItem data={sidebarDataCRM} />
              <SidebarHoverItem data={sidebarDataProjectManagement} />
              <SidebarHoverItem data={sidebarDataProjectChat} />
              <SidebarHoverItem data={sidebarDataProjectEmail} />
              <SidebarHoverItem data={sidebarDataProjectEvents} />
              <SidebarHoverItem data={sidebarDataProjectKanban} />
              <SidebarHoverItem data={sidebarDataProjectSocial} />
              <SidebarHoverItem data={sidebarDataProjectCalendar} />
              <SidebarHoverItem data={sidebarDataProjectStarter} />
              <SidebarHoverItem data={sidebarDataProjectFaq} />
              <SidebarHoverItem data={sidebarDataProjectLoading} />

              <div className="h-[100px]" />
            </div>
          )}
        </ScrollArea>

        {toggle ? (
          <button
            type="button"
            onClick={handleToggle}
            className="absolute bottom-[-1px] block w-[251px] border-slate-200 text-slate-600"
          >
            <h3 className="flex w-full cursor-pointer items-center justify-start gap-4 border-t border-slate-200 bg-slate-50 py-4 pt-[15px] text-[.8rem]">
              <span className="ml-4">
                <CgArrowLongLeft />
              </span>{" "}
              Collapsed View
            </h3>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleToggle}
            className="absolute bottom-[-8px] block w-[62px] border-l border-r border-slate-200 text-slate-600"
          >
            <h3 className="flex w-full cursor-pointer items-center justify-center border-t border-slate-200 bg-slate-50 py-[18px]">
              <span className="">
                <CgArrowLongRight />
              </span>
            </h3>
          </button>
        )}
      </div>
    </div>
  );
};

const Sidebar = ({
  toggle,
  handleToggle,
}: {
  toggle: boolean;
  handleToggle: () => void;
}) => {
  return (
    <div className="h-full w-full">
      <MobileLayout className=" w-full md:hidden" />
      <TabletLayout
        className="hidden w-full md:inline-block"
        data={{ toggle, handleToggle }}
      />
    </div>
  );
};
export default Sidebar;
