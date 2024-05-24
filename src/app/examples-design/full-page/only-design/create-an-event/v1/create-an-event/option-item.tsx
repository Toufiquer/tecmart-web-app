/*
|-----------------------------------------
| setting up Option Item for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { RxCross2 } from "react-icons/rx";

const OptionItem = ({
  name,
  handleRemove,
}: {
  handleRemove: () => void;
  name: string;
}) => (
  <div className="rounded-lg bg-blue-200 px-2 py-[2px] text-[.85rem]">
    <p className="flex items-center gap-1">
      {name}
      <span className="mt-[3px] cursor-pointer" onClick={handleRemove}>
        <RxCross2 />
      </span>
    </p>
  </div>
);
export default OptionItem;
