/*
|-----------------------------------------
| setting up TableContent for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

"use client";

import { useState } from "react";

import { orders } from "./orders";
import { reviews } from "./reviews";
import { wishlist } from "./wishlist";
import OrderTable from "./order-table";
import ReviewTable from "./review-table";
import WishListTable from "./wishlist-table";
import StoreTable from "./store-table";
import ProfileInfo from "./profile-info";
import { FaHotel } from "react-icons/fa";

const buttonStyle =
  "hover:text-blue-600 daauk-flex-center gap-2 py-2 border-b-[4px] px-4 cursor-pointer font-bold";
const activeClass = "text-blue-600 border-blue-600";
const inActiveClass = "text-slate-900 border-transparent text-slate-900 ";

const TableContent = () => {
  const [active, setActive] = useState("orders");
  const handleKeyUp = () => {};
  return (
    <div className="mt-12 py-4 text-sm">
      <div className="mb-2 flex w-full gap-1 lg:gap-2 xl:gap-4">
        <div
          onKeyUp={handleKeyUp}
          role="button"
          tabIndex={0}
          onClick={() => setActive("orders")}
          className={`${
            active === "orders" ? activeClass : inActiveClass
          } ${buttonStyle}`}
        >
          <div className="flex items-center justify-center gap-2">
            <FaHotel /> Orders ({orders.length})
          </div>
        </div>
        <div
          onKeyUp={handleKeyUp}
          role="button"
          tabIndex={0}
          onClick={() => setActive("reviews")}
          className={`${
            active === "reviews" ? activeClass : inActiveClass
          } ${buttonStyle}`}
        >
          <div className="flex items-center justify-center gap-2">
            <FaHotel /> Reviews ({reviews.length})
          </div>
        </div>
        <div
          onKeyUp={handleKeyUp}
          role="button"
          tabIndex={0}
          onClick={() => setActive("wishlist")}
          className={`${
            active === "wishlist" ? activeClass : inActiveClass
          } ${buttonStyle}`}
        >
          <div className="flex items-center justify-center gap-2">
            <FaHotel /> Wishlist ({wishlist.length})
          </div>
        </div>
        <div
          onKeyUp={handleKeyUp}
          role="button"
          tabIndex={0}
          onClick={() => setActive("store")}
          className={`${
            active === "store" ? activeClass : inActiveClass
          } ${buttonStyle}`}
        >
          <div className="flex items-center justify-center gap-2">
            <FaHotel /> Store
          </div>
        </div>
        <div
          onKeyUp={handleKeyUp}
          role="button"
          tabIndex={0}
          onClick={() => setActive("personalInfo")}
          className={`${
            active === "personalInfo" ? activeClass : inActiveClass
          } ${buttonStyle}`}
        >
          <div className="flex items-center justify-center gap-2">
            <FaHotel /> Personal info
          </div>
        </div>
      </div>
      {active === "orders" && <OrderTable />}
      {active === "reviews" && <ReviewTable />}
      {active === "wishlist" && <WishListTable />}
      {active === "store" && <StoreTable />}
      {active === "personalInfo" && <ProfileInfo />}
    </div>
  );
};
export default TableContent;
