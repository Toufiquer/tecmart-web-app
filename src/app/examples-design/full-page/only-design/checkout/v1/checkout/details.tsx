/*
|-----------------------------------------
| setting up Details for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { AiOutlineHome } from "react-icons/ai";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RxAvatar } from "react-icons/rx";

const Details = () => {
  return (
    <main className="mb-12 border-b">
      <div className="my-4 flex flex-col gap-4 font-bold">
        <div className="flex">
          <div className="mr-4 flex w-[200px] justify-between">
            <div className="flex w-full justify-between gap-2">
              <span className="flex items-center gap-2">
                <RxAvatar />
                Name
              </span>
              <span>:</span>
            </div>
          </div>
          <p className="font-normal">Shatinon Mekalan</p>
        </div>
        <div className="flex">
          <div className="mr-4 flex w-[200px] justify-between">
            <div className="flex w-full justify-between gap-2">
              <span className="flex items-center gap-2">
                <AiOutlineHome /> Address
              </span>
              <span>:</span>
            </div>
          </div>
          <p className="font-normal">
            Apt: 6/B, 192 Edsel Road, Van Nuys <br />
            California, USA 96580
          </p>
        </div>
        <div className="flex">
          <div className="mr-4 flex w-[200px] justify-between">
            <div className="flex w-full justify-between gap-2">
              <span className="flex items-center gap-2">
                <TfiHeadphoneAlt /> Phone
              </span>
              <span>:</span>
            </div>
          </div>
          <p className="font-normal">818-414-4092</p>
        </div>
      </div>
    </main>
  );
};
export default Details;
