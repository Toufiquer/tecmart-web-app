/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
"use client";

import { useState } from "react";
import { clsx } from "clsx";

import HeaderHome from "./header-home";
import CardHome from "./card-home";
import JoinUs from "./join-us";
import SignUpBanner from "./sign-up-banner";
import Testimonials from "./testimonials";
import WhatYouGet from "./what-you-get";
import Cookies from "./cookies";

const Page = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div className={clsx("h-full w-full bg-slate-50", auth && "bg-zinc-100")}>
      <HeaderHome />
      <JoinUs />
      <CardHome />
      <SignUpBanner />
      <Testimonials />
      <WhatYouGet />
      <Cookies />
    </div>
  );
};
export default Page;
