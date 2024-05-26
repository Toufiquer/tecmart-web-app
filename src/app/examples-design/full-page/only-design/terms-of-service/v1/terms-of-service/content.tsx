/*
|-----------------------------------------
| setting up Content for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

"use client";

import { useState } from "react";

import HotelContent from "./hotel-content";
import FlightContent from "./flight-content";
import TourContent from "./tour-content";
import CabsContent from "./cabs-content";
import { FaCarAlt, FaHotel } from "react-icons/fa";
import { BsAirplaneFill } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

const buttonStyle =
  "text-slate-900 hover:text-violet-700 daauk-flex-center gap-2 py-2 border-b-[4px] px-4 cursor-pointer font-bold";
const activeClass = "text-violet-700 border-violet-700";
const notActiveClass = "border-transparent text-slate-900 ";

const Content = () => {
  const [active, setActive] = useState("hotel");
  return (
    <main>
      <div className="mb-8 flex w-full gap-4 border-b">
        <div
          onClick={() => setActive("hotel")}
          className={`${
            active === "hotel" ? activeClass : notActiveClass
          } ${buttonStyle}`}
        >
          <div className="flex items-center justify-center gap-2">
            <FaHotel /> Hotel
          </div>
        </div>
        <div
          onClick={() => setActive("flight")}
          className={`${
            active === "flight" ? activeClass : notActiveClass
          } ${buttonStyle}`}
        >
          <div className="flex items-center justify-center gap-2">
            <BsAirplaneFill /> Flight
          </div>
        </div>
        <div
          onClick={() => setActive("tour")}
          className={`${
            active === "tour" ? activeClass : notActiveClass
          } ${buttonStyle}`}
        >
          <div className="flex items-center justify-center gap-2">
            <AiOutlineGlobal /> Tour
          </div>
        </div>
        <div
          onClick={() => setActive("cabs")}
          className={`${
            active === "cabs" ? activeClass : notActiveClass
          } ${buttonStyle}`}
        >
          <div className="flex items-center justify-center gap-2">
            <FaCarAlt /> Cabs
          </div>
        </div>
      </div>
      {active === "hotel" && <HotelContent />}
      {active === "flight" && <FlightContent />}
      {active === "tour" && <TourContent />}
      {active === "cabs" && <CabsContent />}
    </main>
  );
};

export default Content;
