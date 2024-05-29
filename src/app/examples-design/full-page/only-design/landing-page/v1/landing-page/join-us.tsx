/*
|-----------------------------------------
| setting up JoinUs for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Circle } from "lucide-react";

import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";

const JoinUs = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center" id="joinUs">
      <div className="max-w-7xl mx-auto">
        <div className="grid w-full grid-cols-1 md:grid-cols-[1fr_minmax(50px,60px)_1fr]">
          <div className="py-2 pl-4">
            <h2 className="mt-12 py-4 text-4xl font-extrabold text-rose-500 md:mt-0 md:text-7xl">
              Already registered?
            </h2>
            <h2 className="mb-2 mt-4 text-sm font-normal text-slate-500">Please continue where you left off</h2>

            <div className="mt-4">
              <h2 className="mb-2 font-bold text-slate-600">Email</h2>
              <Input placeholder="Enter Your Email" type="email" />
            </div>
            <div className="mt-4">
              <h2 className="mb-2 font-bold text-slate-600">Password</h2>
              <Input placeholder="******" type="password" />
            </div>
            <Button
              variant="outline"
              className="mt-4 w-full bg-rose-500 font-semibold text-white hover:bg-rose-600 hover:text-white"
            >
              Log In
            </Button>
          </div>
          <div className="relative flex h-full w-full items-center justify-center gap-4 py-12 pl-4 md:flex-col md:py-0">
            <div className="inline-block h-[1px] w-[100px] bg-rose-500 md:hidden" />
            <div className="hidden h-[32%] w-[1px] bg-rose-500 md:inline-block" />
            <Circle />

            <div className="inline-block h-[1px] w-[100px] bg-rose-500 md:hidden" />
            <div className="hidden h-[32%] w-[1px] bg-rose-500 md:inline-block" />
          </div>
          <div className="py-2">
            <h2 className="py-4 text-4xl font-extrabold text-rose-500 md:text-7xl">Join us today</h2>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              <div className="mt-4">
                <h2 className="mb-2 font-bold text-slate-600">Your business name</h2>
                <Input placeholder="Business name" />
              </div>
              <div className="mt-4">
                <h2 className="mb-2 font-bold text-slate-600">Your business street address</h2>
                <Input placeholder="123 Heigh Street" />
              </div>
              <div className="mt-4">
                <h2 className="mb-2 font-bold text-slate-600">Contact number</h2>
                <Input placeholder="123 Heigh Street" />
              </div>
              <div className="mt-4">
                <h2 className="mb-2 font-bold text-slate-600">Email address</h2>
                <Input placeholder="123 Heigh Street" />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="mb-2 font-bold text-slate-600">Business Type</h2>
              <Input placeholder="123 Heigh Street" />
            </div>
            <Button
              variant="outline"
              className="mt-4 w-full bg-rose-500 font-semibold text-white hover:bg-rose-600 hover:text-white"
            >
              Start
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default JoinUs;
