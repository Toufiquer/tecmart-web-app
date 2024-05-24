/*
|-----------------------------------------
| setting up CustomFields for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { AiOutlinePlus } from "react-icons/ai";
import FieldsItem from "./fields-item";

const CustomFields = () => {
  return (
    <main className="flex w-full flex-col pb-12">
      <h2 className="pt-2 text-xl font-semibold">Custom fields</h2>
      <FieldsItem />
      <FieldsItem />
      <div className="flex items-center justify-start gap-2 text-[.8rem] text-blue-500 cursor-pointer">
        <AiOutlinePlus /> Add an option
      </div>
    </main>
  );
};
export default CustomFields;
