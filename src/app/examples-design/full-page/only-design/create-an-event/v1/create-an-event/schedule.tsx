/*
|-----------------------------------------
| setting up Schedule for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import VariantMultiselect from "./variant-multiselect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import DisplayImage from "./display-image";
import TimePicker from "./time-picker";
import { DatePicker } from "./date-picker";

const multiselectData: string[] = ["CONNCEERT", "MUSIC", "PHOTOSHOT"];

const Schedule = () => {
  return (
    <main className="mt-12 flex w-full flex-col">
      <h2 className="py-4 text-2xl font-semibold">Schedule</h2>
      <div className="flex gap-2">
        <div className="flex w-full flex-col gap-2">
          <div className=" text-[.7rem]">START DATE</div>
          <DatePicker />
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className=" text-[.7rem]">START TIME</div>
          <TimePicker />
        </div>
      </div>
      <div className="mt-4 flex gap-2 ">
        <div className="flex w-full flex-col gap-2">
          <div className=" text-[.7rem]">END DATE</div>
          <DatePicker />
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className=" text-[.7rem]">END TIME</div>
          <TimePicker />
        </div>
      </div>
      <div className="mt-4 flex gap-2 ">
        <div className="flex w-full flex-col">
          <div className="pb-2 text-[.7rem]">TIME ZONE</div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an event" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option">Option 1</SelectItem>
              <SelectItem value="option">Option 2</SelectItem>
              <SelectItem value="option">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full flex-col gap-2">
          <div className=" text-[.7rem]">REGISTRATION DADELINE</div>
          <DatePicker />
        </div>
      </div>
      <div className="mt-4 flex w-full flex-col">
        <div className="pb-1 text-[.7rem]">DESCRIPTION</div>
        <Textarea />
      </div>
      <div className="mt-4 flex gap-2 ">
        <div className="input-with-placeholder mt-4 cursor-text rounded-lg border">
          <input className=" cursor-text" type="text" id="organizers" />
          <label className="cursor-text text-[.7rem]" htmlFor="organizers">
            ORGANIZERS
          </label>
        </div>
        <div className="input-with-placeholder mt-4 cursor-text rounded-lg border">
          <input className=" cursor-text" type="text" id="span" />
          <label className="cursor-text text-[.7rem]" htmlFor="span">
            SPONSORS
          </label>
        </div>
      </div>
      <div className="mt-8">
        <DisplayImage />
      </div>
      <div className="mt-8">
        <VariantMultiselect options={multiselectData} title="ADD TAG" />
      </div>
    </main>
  );
};
export default Schedule;
