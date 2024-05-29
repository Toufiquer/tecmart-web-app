/*
|-----------------------------------------
| setting up HeaderHome for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";

import { lusitana } from "./fonts";
import { Button } from "@/components/ui/button";

const HeaderHome = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${"https://i.ibb.co/6PTKnHg/banner.webp"})`,
        backgroundAttachment: "fixed",
      }}
      className={`${lusitana.className}  h-screen bg-cover`}
    >
      <div className="flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 ">
        <div className="flex w-full items-center justify-start pl-4 md:pl-12">
          <div className="max-w-[600px] text-4xl font-bold text-white shadow-lg md:text-5xl lg:text-6xl">
            <div className="flex items-center gap-2">
              <div className="grid h-16 grid-cols-2 gap-0 overflow-hidden rounded ">
                <div className="flex h-full w-10 items-center justify-center bg-slate-900 ">
                  <span className="text-lg font-bold text-white">M</span>
                </div>
                <div className="flex h-full w-10 items-center justify-center bg-white ">
                  <span className="text-lg font-bold text-slate-900">N</span>
                </div>
              </div>
              <h2>JUST COOK</h2>
            </div>
            <p className="py-4 text-4xl">
              UK&lsquo;s leading{" "}
              <span className="text-rose-500">takeaway platform</span>
            </p>
            <p className="text-xl">
              You can leave a note about your food allergy while checking out.
              And You can also call the takeaway directly and speak with the
              chef.
            </p>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col items-start justify-start pl-4 text-6xl text-white md:pl-12">
          <p className="pt-4 text-5xl">Become a Partner?</p>

          <Link href="/#joinUs">
            <Button
              className="group border-rose-500 bg-transparent hover:bg-rose-900 hover:bg-opacity-40"
              variant="outline"
            >
              <div className="flex w-full items-center justify-between gap-6 text-rose-500 group-hover:text-white">
                Please Enter Your Business Info
                <BsArrowRightCircle className="cursor-pointer text-rose-500 group-hover:text-white" />
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default HeaderHome;
