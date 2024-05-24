/*
|-----------------------------------------
| setting up OrganizedBy for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CgProfile } from "react-icons/cg";
import { GrDirections } from "react-icons/gr";
import { BsClock, BsThreeDots } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

type ITEM = {
  id: number | string;
  date: string;
  title: string;
  organizedBy: string;
  peopleGoing: number;
  startTime: string;
  endTime: string;
  location: string;
};
const item = (postId: number | string): ITEM => ({
  id: postId,
  date: "MON, FEB 21- MARCH 23",
  title:
    "Brandmyth presents- Shironamhin 25 years celebration with symphony orchestra",
  organizedBy: "IAFM- International Academy of Film and Media",
  peopleGoing: 556,
  startTime: "12.30PM",
  endTime: "10PM",
  location: "Tavern on the Greend, New York",
});
const comingEventData: ITEM[] = [item(1), item(2), item(3)];

const OrganizedBy = () => {
  return (
    <main className="flex flex-col">
      <h3 className="mb-4 text-3xl  font-semibold text-slate-900">
        Organized by
      </h3>
      <h2 className="mb-2 flex items-center justify-start gap-2 text-sm ">
        <Image
          width={0}
          height={0}
          sizes="20vw"
          style={{ width: "100%", height: "auto" }}
          className="max-w-[40px] rounded-lg object-cover"
          src="/vercel.svg"
          alt="organized company"
        />
        <Link href="/event-details/#" className="text-blue-500 hover:underline">
          DaaUK Events INC
        </Link>
      </h2>
      <div className="mt-2 flex items-center text-sm">
        <Link href="/event-details/#" className="hover:underline">
          10k Followers
        </Link>
        <Link
          href="/event-details/#"
          className="ml-4 flex items-center gap-2 rounded-lg border px-4 py-1 text-blue-500 hover:bg-blue-50"
        >
          <CgProfile /> Follow
        </Link>
      </div>
      <h3 className="mb-4 mt-4 text-xl font-bold text-slate-900 ">Location</h3>
      <div
        style={{
          position: "relative",
          textAlign: "right",
          width: "100%",
          height: "300px",
        }}
      >
        <div
          style={{
            background: "none!important",
            overflow: "hidden",
            width: "100%",
            height: "300px",
          }}
        >
          <iframe
            style={{ height: "400px!important" }}
            width="100%"
            frameBorder={0}
            marginHeight={0}
            scrolling="no"
            marginWidth={0}
            title="Google maps"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=London&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
        </div>
      </div>
      <h2 className="mt-2 py-1 text-sm font-semibold">
        James Tiberius Auditorium{" "}
        <span className="text-xs font-normal">Vancouver</span>{" "}
      </h2>
      <Button variant="outline" className="mb-8 mt-4">
        <span className="flex items-center justify-center gap-2 text-blue-500">
          <GrDirections /> Get directions
        </span>
      </Button>
      <h3 className="mb-4 mt-4 text-xl font-semibold text-slate-900">Tags</h3>
      <div className="mb-2 flex gap-3 border-b pb-6 text-[.7rem]">
        {["MUSIC", "CONCERT", "GREATEST SHOW ON EARTH"].map((curr) => (
          <div className="rounded-lg bg-slate-100 px-2 py-1" key={curr}>
            {curr}
          </div>
        ))}
      </div>
      <div className="flex w-full items-center justify-between border-b border-dotted">
        <h3 className="my-4 text-xl font-semibold text-slate-900">
          Upcoming events
        </h3>
        <Link
          className="text-sm text-blue-700 hover:underline"
          href="/event-details/#"
        >
          See more
        </Link>
      </div>
      <div className="mt-2">
        {comingEventData.map((curr) => (
          <div
            key={curr.id}
            className="mb-2 border-b border-dotted px-2 py-2 xl:px-0"
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="my-2 text-[.7rem] text-orange-500">
                  {curr.date}
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <BsThreeDots />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem className="cursor-pointer">
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-red-500 hover:text-red-600">
                      Delete
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Download
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Report abuse
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <Link
                title={curr.title}
                className="mb-2 hover:underline"
                href="/event-details/#"
              >
                {curr.title.length > 43
                  ? `${curr.title.slice(0, 43)} ...`
                  : curr.title}
              </Link>
              <p className="text-[.7rem] text-slate-700">Organized by</p>
              <Link
                title={curr.organizedBy}
                className="text-blue-500 hover:underline"
                href="/event-details/#"
              >
                {curr.organizedBy.length > 43
                  ? `${curr.organizedBy.slice(0, 43)} ...`
                  : curr.organizedBy}
              </Link>
              <p className="my-3 text-[.6rem] text-slate-600">
                {curr.peopleGoing} people going
              </p>
              <h2 className="mb-2 flex items-center justify-start gap-2 text-sm ">
                <BsClock />
                <p className="text-sm text-slate-700">
                  {curr.startTime}-{curr.endTime}
                </p>
              </h2>
              <h2 className="mb-2 flex items-center justify-start gap-2 text-sm ">
                <CiLocationOn />
                <p className="text-sm text-slate-700">{curr.location}</p>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default OrganizedBy;
