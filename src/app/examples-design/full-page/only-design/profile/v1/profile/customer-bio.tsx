/*
|-----------------------------------------
| setting up customer-bio for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BiLogoFacebookCircle, BiLogoLinkedin } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";

const CustomerBio = () => {
  return (
    <main className="flex w-full flex-col rounded-lg bg-white p-4 ">
      <div className="mb-2 border-b border-dashed border-slate-300 pb-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-[160px] w-[160px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Image</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold">Ansolo Lazinatov</h2>
            <p className="text-slate-700">Joined 3 months ago</p>
            <div className="mt-4 flex text-xl text-slate-500">
              <span className="cursor-pointer hover:text-blue-700">
                <BiLogoLinkedin />
              </span>
              <span className="cursor-pointer px-3 hover:text-blue-700">
                <BiLogoFacebookCircle />
              </span>
              <span className="cursor-pointer hover:text-blue-700">
                <BsTwitter />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <p className="font-semibold">Total Spent</p>
          <p className="text-thin text-2xl text-slate-600"> &#163; 297</p>
        </div>
        <div className="pt-2">
          <p className="font-semibold">Last Order</p>
          <p className="text-thin text-2xl text-slate-600">1 week ago</p>
        </div>
        <div className="pt-2">
          <p className="font-semibold">Total Orders</p>
          <p className="text-thin text-2xl text-slate-600">97</p>
        </div>
      </div>
    </main>
  );
};

export default CustomerBio;
