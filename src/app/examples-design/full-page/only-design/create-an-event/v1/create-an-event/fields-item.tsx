/*
|-----------------------------------------
| setting up FieldsItem for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FieldsItem = () => {
  return (
    <div className="my-6 flex w-full flex-col gap-2">
      <div className="flex w-full gap-2">
        <div className="flex w-full flex-col gap-2">
          <h3 className="text-[.7rem]">NAME</h3>
          <Input type="text" placeholder="Top Gallery" />
        </div>
        <div className="flex w-full flex-col">
          <h3 className="text-[.7rem]">TYPE</h3>
          <div className=" flex w-full flex-col gap-2 py-2 text-[.82rem]">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[.7rem]">FIELD OPTIONS</h3>
        <Textarea placeholder="Description" />
      </div>
    </div>
  );
};
export default FieldsItem;
