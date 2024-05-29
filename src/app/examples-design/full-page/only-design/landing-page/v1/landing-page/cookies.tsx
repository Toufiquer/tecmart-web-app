/*
|-----------------------------------------
| setting up Cookies for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import useCookies from "./cookies-set-storage";

const Cookies = () => {
  const { cookiesData, setCookies } = useCookies();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (["ok", "essential"].includes(cookiesData.userAction)) {
      setToggle(true);
    }
  }, [cookiesData]);

  const handleToggle = (data: string) => {
    setCookies({ userAction: data });
  };
  const content = toggle ? (
    <main className="hidden">Hidden Element</main>
  ) : (
    <main className="w-full">
      <div className="fixed bottom-0 left-0 z-50 h-full max-h-[200px] min-h-[100px] w-full bg-slate-200 md:max-h-[120px]">
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-8 px-2 md:flex-row">
          <p>
            We use cookies and other technologies to improve and personalize
            your user experience, analytics for optimization and advertisements
            in partnership with parties.{" "}
            <Link className="text-orange-500" href="/#">
              Show more
            </Link>
          </p>
          <div className="flex items-center justify-center gap-8">
            <Button
              className="min-w-[120px] bg-blue-400"
              onClick={() => handleToggle("ok")}
            >
              OK{" "}
            </Button>
            <Button
              variant="outline"
              className="min-w-[120px] border"
              onClick={() => handleToggle("essential")}
            >
              Essential
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
  return content;
};
export default Cookies;
