/*
|-----------------------------------------
| setting up Privacy for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Privacy = () => {
  return (
    <main className="flex w-full flex-col border-b">
      <h2 className="py-2 text-xl font-semibold">Privacy</h2>
      <RadioGroup defaultValue="comfortable">
        <div className=" flex flex-col gap-4 py-4">
          <div className="grid grid-cols-[32px_1fr] items-center justify-start">
            <RadioGroupItem value="default" id="privacy1" className="" />
            <Label htmlFor="privacy1">
              On DaaUK, our distribution partners, and search engines, anybody
              can find the event
            </Label>
          </div>
          <div className="grid grid-cols-[32px_1fr] items-center justify-start">
            <RadioGroupItem value="comfortable" id="privacy2" />
            <Label htmlFor="privacy2">
              Only the individuals you select have access to it.
            </Label>
          </div>
        </div>
      </RadioGroup>
      <div className="my-8 border-t pt-8">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show the number of available tickets
          </label>
        </div>
      </div>
    </main>
  );
};
export default Privacy;
