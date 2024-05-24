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

const exampleData = [
  { id: 1, title: "Name", icon: <RxAvatar />, data: "Shatinon Mekalan" },
  {
    id: 2,
    title: "Address",
    icon: <AiOutlineHome />,
    data: " Apt: 6/B, 192 Edsel Road, Van Nuys, California, USA 96580",
  },
  { id: 3, title: "Phone", icon: <TfiHeadphoneAlt />, data: "818-414-4092" },
];

const Details = () => {
  return (
    <main className="mb-12 border-b">
      <div className="my-4 flex flex-col gap-4 font-bold">
        {exampleData.map((curr) => (
          <div key={curr.id} className="flex flex-col md:flex-row">
            <div className="mr-4 md:flex md:w-[200px] justify-between">
              <div className="flex w-full justify-between gap-2">
                <span className="flex items-center gap-2">
                  {curr.icon}
                  {curr.title}
                </span>
                <span className="hidden md:block">:</span>
              </div>
            </div>
            <p className="font-normal">{curr.data}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Details;
