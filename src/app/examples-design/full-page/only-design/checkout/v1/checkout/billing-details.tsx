/*
|-----------------------------------------
| setting up BillingDetails for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { Checkbox } from "@/components/ui/checkbox";
import Details from "./details";

const BillingDetails = () => {
  return (
    <>
      <h2 className="mb-2 font-semibold">
        <span className="py-4 pr-4 text-2xl font-bold">Billing Details</span>
        <span className="text-sm text-blue-700">Edit</span>
      </h2>
      <div className="items-top flex space-x-2">
        <Checkbox />
        <div className="grid gap-1.5 leading-none">
          <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Same as shipping address
          </p>
        </div>
      </div>
      <Details />
    </>
  );
};
export default BillingDetails;
