/*
|-----------------------------------------
| setting up display image for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { LuImagePlus } from "react-icons/lu";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DisplayImage = () => {
  return (
    <div className="relative grid w-full items-center gap-1.5">
      <span className="absolute left-0 top-0 z-30 flex h-[186px] w-full flex-col items-center justify-center">
        <Label htmlFor="picture">
          Drag you photo here or{" "}
          <span className="text-blue-600">Browse from device</span>{" "}
        </Label>
        <span className="mt-4 text-6xl text-slate-400">
          <LuImagePlus />
        </span>
      </span>
      <Input
        id="picture"
        type="file"
        className="z-40 h-[186px] w-full cursor-pointer border-dashed bg-transparent"
      />
    </div>
  );
};
export default DisplayImage;
