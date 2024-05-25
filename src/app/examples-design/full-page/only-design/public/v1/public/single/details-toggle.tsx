/*
|-----------------------------------------
| setting up DetailsToggle for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

"use client";

import { useState } from "react";

import ProductDetails from "./product-details";
import Information from "./information";
import Reviews from "./reviews";
import SellerInfo from "./seller-info";

const buttonStyle =
  "text-green-500 text-sm md:text-[16px] hover:text-green-500 daauk-flex-center gap-2 py-2 border-b-[4px] px-4 cursor-pointer font-bold";
const activeClass = " text-green-500 border-green-500";
const notActiveClass = "border-transparent text-slate-900 ";

const DetailsToggle = () => {
  const [active, setActive] = useState("productDetails");
  return (
    <main>
      <div className="mb-8 flex w-full gap-4 border-b">
        <div
          onClick={() => setActive("productDetails")}
          className={`${active === "productDetails" ? activeClass : notActiveClass} ${buttonStyle}`}
        >
          Product Details
        </div>
        <div
          onClick={() => setActive("Information")}
          className={`${active === "Information" ? activeClass : notActiveClass} ${buttonStyle}`}
        >
          Information
        </div>
        <div
          onClick={() => setActive("Reviews")}
          className={`${active === "Reviews" ? activeClass : notActiveClass} ${buttonStyle}`}
        >
          Reviews
        </div>
        <div
          onClick={() => setActive("SellerInfo")}
          className={`${active === "SellerInfo" ? activeClass : notActiveClass} ${buttonStyle}`}
        >
          Seller Info
        </div>
      </div>
      {active === "productDetails" && <ProductDetails />}
      {active === "Information" && <Information />}
      {active === "Reviews" && <Reviews />}
      {active === "SellerInfo" && <SellerInfo />}
    </main>
  );
};
export default DetailsToggle;
