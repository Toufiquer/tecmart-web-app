/*
|-----------------------------------------
| setting up default-address for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

import { MdEdit } from "react-icons/md";

const DefaultAddress = () => {
  return (
    <main className="flex h-auto w-full flex-col rounded-lg bg-white p-4 lg:max-w-[400px]">
      <div className="mb-2 pb-6">
        <div className="flex items-center justify-start border-b border-dashed pb-4  text-2xl font-semibold">
          <h2>Default Address</h2>
          <span className="ml-4 mt-[5px] cursor-pointer text-sm text-slate-700">
            <MdEdit />
          </span>
        </div>
        <div className="mb-6 mt-4 flex justify-between">
          <h2 className="w-[180px] font-semibold">Address</h2>
          <div className="w-full text-slate-700">
            <p>Shatinon Mekalan Vancouver, British Columbia,</p>
            <p>Canada</p>
          </div>
        </div>
        <div className=" border-t border-dashed">
          <div className="mt-4 flex justify-between">
            <h2 className="w-[180px] font-semibold ">Email</h2>
            <div className="w-full text-blue-700">
              <p>shatinon@gmail.com</p>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <h2 className="w-[180px] font-semibold ">Phone</h2>
            <div className="w-full text-slate-700">
              <p>+123456789</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DefaultAddress;
