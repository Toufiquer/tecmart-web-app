/*
|-----------------------------------------
| setting up TimePicker for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const hours: number[] = [];
const minutes: number[] = [];
for (let i = 1; i <= 12; i += 1) {
  hours.push(i);
}
for (let i = 1; i <= 59; i += 1) {
  minutes.push(i);
}

const TimePicker = () => {
  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(30);
  const [amPm, setAmPm] = useState("PM");
  return (
    <div className="flex w-full justify-center rounded border pb-[6px] pl-4">
      <div className="mt-2 w-full">
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger>{hour}</DropdownMenuTrigger>
            <DropdownMenuContent>
              <ScrollArea className="h-[200px] w-[350px] rounded-md p-4">
                {hours.map((curr) => (
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => setHour(curr)}
                    key={curr}
                  >
                    {curr}
                  </DropdownMenuItem>
                ))}
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>

          <span className="mx-2">:</span>
          <DropdownMenu>
            <DropdownMenuTrigger>{minute}</DropdownMenuTrigger>
            <DropdownMenuContent>
              <ScrollArea className="h-[200px] w-[350px] rounded-md p-4">
                {minutes.map((curr) => (
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => setMinute(curr)}
                    key={curr}
                  >
                    {curr}
                  </DropdownMenuItem>
                ))}
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>

          <span className="ml-2 " />
          <DropdownMenu>
            <DropdownMenuTrigger>{amPm}</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setAmPm("AM")}
              >
                AM
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setAmPm("PM")}
              >
                PM
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
export default TimePicker;
