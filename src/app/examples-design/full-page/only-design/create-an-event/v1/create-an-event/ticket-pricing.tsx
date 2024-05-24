/*
|-----------------------------------------
| setting up TicketPricing for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { AiOutlinePlus } from "react-icons/ai";

const TicketPricing = () => {
  return (
    <main className="my-12 flex w-full flex-col border-b pb-12">
      <h2 className="py-2 text-xl font-semibold">Ticket pricing</h2>
      <RadioGroup defaultValue="comfortable">
        <div className=" flex gap-4 py-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="free" id="free" />
            <Label htmlFor="free">Free</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paid" id="paid" />
            <Label htmlFor="paid">Paid</Label>
          </div>
        </div>
      </RadioGroup>
      <div className="mt-4 grid grid-cols-[1fr_130px] gap-2">
        <div className="flex flex-col gap-2">
          <h3 className="text-[.7rem]">Option</h3>
          <Input type="text" placeholder="Top Gallery" />
          <Input type="text" placeholder="VIP" />
          <Input type="text" placeholder="Front row" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[.7rem]">Option</h3>
          <Input type="number" placeholder="&#163; 0.0" />
          <Input type="number" placeholder="&#163; 0.0" />
          <Input type="number" placeholder="&#163; 0.0" />
        </div>
      </div>
      <div className="mt-2 flex cursor-pointer items-center justify-start gap-2 text-[.8rem] text-blue-500">
        <AiOutlinePlus /> Add an option
      </div>
    </main>
  );
};
export default TicketPricing;
