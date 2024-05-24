/*
|-----------------------------------------
| setting up ContactFrom for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactFrom = () => {
  return (
    <main className="mt-10">
      <div className="flex w-full flex-col gap-4 py-8">
        <div className="flex w-full items-center gap-4">
          <div className=" grid w-full items-center gap-1.5">
            <div className="relative w-fit">
              <div className="absolute right-[-10px] top-0 text-rose-400">
                *
              </div>
              <Label htmlFor="firstName" className="text-sm text-slate-600">
                First Name
              </Label>
            </div>
            <Input
              type="text"
              id="firstName"
              placeholder="Enter Your First Name"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <div className="relative w-fit">
              <div className="absolute right-[-10px] top-0 text-rose-400">
                *
              </div>
              <Label htmlFor="lastName " className="text-sm text-slate-600">
                Last Name
              </Label>
            </div>
            <Input
              type="text"
              id="lastName"
              placeholder="Enter Your Last Name"
            />
          </div>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <div className="relative w-fit">
            <div className="absolute right-[-10px] top-0 text-rose-400">*</div>
            <Label htmlFor="company " className="text-sm text-slate-600">
              Company
            </Label>
          </div>
          <Input type="text" id="company" placeholder="Your Company" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title " className="text-sm text-slate-600">
            Title
          </Label>

          <Input type="text" id="title" placeholder="Your Title" />
        </div>
        <div className="flex w-full items-center gap-4">
          <div className="grid w-full items-center gap-1.5">
            <div className="relative w-fit">
              <div className="absolute right-[-10px] top-0 text-rose-400">
                *
              </div>
              <Label htmlFor="email " className="text-sm text-slate-600">
                Email
              </Label>
            </div>
            <Input type="email" id="email" placeholder="Enter Your Email" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="phone " className="text-sm text-slate-600">
              Phone
            </Label>

            <Input type="phone" id="phone" placeholder="Your Phone Number" />
          </div>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="comments " className="text-sm text-slate-600">
            Comments
          </Label>

          <Textarea
            id="comments"
            placeholder="Type your additional Comments."
          />
        </div>
        <Button className=" w-full bg-green-400 font-semibold hover:bg-green-500 md:w-1/2">
          Submit
        </Button>
      </div>
    </main>
  );
};
export default ContactFrom;
