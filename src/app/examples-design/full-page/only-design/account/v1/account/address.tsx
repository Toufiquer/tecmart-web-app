/*
|-----------------------------------------
| setting up Address for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Address = () => {
  return (
    <main className="mb-12 lg:ml-8">
      <RadioGroup defaultValue="address">
        <section className="flex w-full max-w-[800px] flex-col">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-xl font-semibold md:text-3xl">Address</h2>
            <Button
              variant="outline"
              className="mb-4 mt-4 min-w-[230px] max-w-[235px] border-green-400 text-green-500 hover:bg-green-100 hover:text-green-500"
            >
              Add a new address
            </Button>
          </div>
          <div className="mt-12 flex w-full flex-col gap-4 lg:flex-row">
            <div className="flex max-w-[280px] flex-col rounded-lg border p-8 md:min-w-[320px] md:max-w-full">
              <div className="mb-4 flex items-center justify-start gap-2">
                <RadioGroupItem value="home" id="home" />
                <Label htmlFor="home">Home</Label>
              </div>

              <div className="flex flex-col gap-1 text-sm text-slate-600">
                <p>Jitu Chauhan </p>
                <p>4450 North Avenue Oakland,</p>
                <p> Nebraska, United States,</p>
                <p> 402-776-1106</p>
              </div>
              <Button className="my-4 max-w-fit bg-blue-500 py-1 text-xs  font-bold text-white">Default address</Button>
              <div className="flex gap-4">
                <span className="cursor-pointer">Edit</span>
                <span className="cursor-pointer text-rose-500">Delete</span>
              </div>
            </div>
            <div className="flex max-w-[280px] flex-col rounded-lg border p-8 md:min-w-[320px] md:max-w-full">
              <div className="mb-4 flex items-center justify-start gap-2">
                <RadioGroupItem value="office" id="office" />
                <Label htmlFor="office">Office</Label>
              </div>
              <div className="flex flex-col gap-1 text-sm text-slate-600">
                <p>Jitu Chauhan </p>
                <p>4450 North Avenue Oakland,</p>
                <p> Nebraska, United States,</p>
                <p> 402-776-1106</p>
              </div>
              <div className="my-6 flex max-w-fit justify-start border-0 py-1 pl-0 text-sm  font-bold text-green-500">
                Set as Default
              </div>
              <div className="flex gap-4">
                <span className="cursor-pointer">Edit</span>
                <span className="cursor-pointer text-rose-500">Delete</span>
              </div>
            </div>
          </div>
        </section>
      </RadioGroup>
    </main>
  );
};
export default Address;
