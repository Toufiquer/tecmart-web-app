/*
|-----------------------------------------
| setting up OurTeam for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Link from "next/link";

import { AiOutlineRight } from "react-icons/ai";

import SingleCard from "./single-card";

const OurTeam = () => {
  return (
    <main>
      <div className="flex w-full flex-col text-center">
        <h4 className="text-sm font-semibold">OUR REAM</h4>
        <h2 className="my-4 mb-8 text-2xl font-semibold">Creative minds</h2>
        <div className="max-w-960px flex flex-wrap items-center justify-center gap-4 ">
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </div>
        <div className="my-12 flex w-full items-center justify-center">
          <div className="flex items-center gap-4 rounded-full border p-4">
            <div className="text-slate-700">Want to work with us?</div>
            <Link className="text-blue-500" href="/about-us/#">
              We are hiring
            </Link>
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </main>
  );
};
export default OurTeam;
