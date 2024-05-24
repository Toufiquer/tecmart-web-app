/*
|-----------------------------------------
| setting up EventDetails for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const EventDetails = () => {
  return (
    <main className="flex w-full flex-col">
      <h2 className="py-2 text-2xl font-semibold">Event Details</h2>

      <div className="input-with-placeholder mt-4 cursor-text rounded-lg border">
        <input className=" cursor-text" type="text" id="eventTitle" />
        <label className="cursor-text text-[.7rem]" htmlFor="eventTitle">
          EVENT TITLE
        </label>
      </div>

      <div className="mt-4 flex w-full gap-4">
        <div className="flex w-full flex-col">
          <div className="pb-1 text-[.7rem]">TYPE</div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an event" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technical">Technical</SelectItem>
              <SelectItem value="external">External</SelectItem>
              <SelectItem value="organizational">Organizational</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full flex-col">
          <div className="pb-1 text-[.7rem]">TOPIC</div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an event" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technical">Technical</SelectItem>
              <SelectItem value="external">External</SelectItem>
              <SelectItem value="organizational">Organizational</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <RadioGroup defaultValue="comfortable">
        <div className=" flex gap-4 py-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </div>
      </RadioGroup>

      <div className="input-with-placeholder mt-4 cursor-text rounded-lg border">
        <input className=" cursor-text" type="text" id="venue" />
        <label className="cursor-text text-[.7rem]" htmlFor="venue">
          VENUE
        </label>
      </div>

      <div className="mt-4 flex w-full gap-4">
        <div className="flex w-full flex-col">
          <div className="pb-1 text-[.7rem]">COUNTRY</div>
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
        <div className="flex w-full flex-col">
          <div className="pb-1 text-[.7rem]">STATE</div>
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
        <div className="flex w-full flex-col">
          <div className="pb-1 text-[.7rem]">CUTY</div>
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
      </div>
    </main>
  );
};
export default EventDetails;
