/*
|-----------------------------------------
| setting up Header for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import CardBox from "./card-box";

const Header = () => {
  return (
    <header className="mb-[230px] mt-8 min-h-screen text-white">
      <div className="text-center">
        <div className="">
          <div className="flex w-full items-center justify-center">
            <div className="daauk-help-img mx-auto mb-12 h-[580px] w-full min-w-[760px] max-w-[1200px] rounded-3xl">
              <div className=" h-full w-full rounded-3xl backdrop-blur">
                <div className="pt-32 ">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-6xl font-bold">How Can We Help You?</h2>
                    <div className=" mx-auto my-8 w-[532px] rounded-lg border border-slate-100 p-3 text-black">
                      <div className="w-500px relative mx-auto">
                        <Input
                          placeholder="Search question"
                          className="bg-dark mx-auto w-[500px]"
                        />
                        <div className=" absolute right-0 top-0">
                          <Button variant="outline" className="border-l">
                            Search
                          </Button>
                        </div>
                      </div>
                    </div>
                    <p className="text-bold font-xl mt-2">Popular questions</p>
                    <div className="mx-auto mt-6 flex w-full max-w-[580px] flex-wrap justify-center gap-4 gap-y-6 [&>*:last-child]:no-underline [&>*]:text-[1rem] [&>*]:underline [&>*]:shadow-md">
                      <Link href="#">How can we help?</Link>
                      <Link href="#">How to upload data to the system?</Link>
                      <Link href="#">Installation Guide?</Link>
                      <Link href="#">How to view expired tickets?</Link>
                      <Link href="#">View all question</Link>
                    </div>
                    <CardBox />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
