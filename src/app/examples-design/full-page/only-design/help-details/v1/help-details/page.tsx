/*
|-----------------------------------------
| setting up Help Detail Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DetailCard from "./detail-card";
import "./page.css";

const Page = () => {
  return (
    <div className="mb-[950px] mt-8 min-h-screen text-white md:mb-[850px]">
      <div className="text-center">
        <div className="mx-2">
          <div className="flex w-full items-center justify-center">
            <div className="help-details-bg-img mb-12 h-[580px] w-full max-w-[1100px] rounded-3xl">
              <div className=" h-full w-full rounded-3xl backdrop-blur">
                <div className="pt-32">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-4xl font-bold md:text-5xl lg:text-6xl">
                      How Can We Help You?
                    </div>
                    <div className=" mx-auto my-8 w-[90%] max-w-[532px] rounded-lg border border-slate-100 p-3 text-black">
                      <div className="w-500px relative mx-auto">
                        <Input
                          placeholder="Search question"
                          className="bg-dark mx-auto w-full max-w-[500px]"
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
                    <DetailCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
