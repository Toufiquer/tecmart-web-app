/*
|-----------------------------------------
| setting up Description for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Button } from "@/components/ui/button";
import { BiLike } from "react-icons/bi";
import { BsCalendarDate, BsClock } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";

const Description = () => {
  return (
    <main className="rounded-lg bg-blue-50 p-4">
      <h2 className="text-2xl font-semibold">
        Brandmyth presents- Shironamhin 25 years celebration with symphony
        orchestra
      </h2>
      <p className="mb-2 py-2 text-[1rem] text-slate-800">
        Tavern on the Greend, New York
      </p>
      <div className="mb-4 flex w-full rounded-lg border p-4">
        <div className="flex w-full">
          <div className="flex flex-col">
            <h2 className="mb-2 flex items-center justify-start gap-2 text-xl font-semibold">
              <span className="rounded-lg bg-blue-200 p-2 ">
                <CiLocationOn />
              </span>{" "}
              Location
            </h2>
            <p className="py-2 text-[1rem] text-slate-800">
              36/4A, James Tiberius Auditorium, Vancouver, British Columbia,
              Canada
            </p>
          </div>
        </div>
        <div className="mx-2 flex h-auto items-center">
          <div className="h-12 w-[2px] border" />
        </div>
        <div className="flex w-full pl-4">
          <div className="flex flex-col">
            <h2 className="mb-2 flex items-center justify-start gap-2 text-xl font-semibold">
              {" "}
              <span className="rounded-lg bg-blue-200 p-2 ">
                <BsClock />
              </span>
              Date & Time
            </h2>
            <p className="py-2 text-[1rem] text-slate-800">
              28th June - 2nd July 2022, 10 am - 4 pm Eastern Daylight Time
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-2">
        <Button className="w-full bg-blue-500 text-xs hover:bg-blue-600">
          Get Tickets
        </Button>
        <Button
          className="flex w-[300px] items-center justify-center gap-2 text-xs text-blue-500 hover:text-blue-600"
          variant="outline"
        >
          <BsCalendarDate /> Add to Calendar
        </Button>
        <Button
          className="flex w-[140px] items-center justify-center gap-2 text-xs text-blue-500 hover:text-blue-600"
          variant="outline"
        >
          <BiLike /> 3677
        </Button>
        <Button
          className="flex w-[140px] items-center justify-center gap-2 text-xs text-blue-500 hover:text-blue-600"
          variant="outline"
        >
          <IoShareSocialOutline /> 4477
        </Button>
      </div>
    </main>
  );
};
export default Description;
