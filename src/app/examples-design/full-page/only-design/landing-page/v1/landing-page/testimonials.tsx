/*
|-----------------------------------------
| setting up Testimonials for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Circle, Minus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-transparent px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col items-center justify-center py-12">
            <div className="relative w-full text-center">
              <div
                className="absolute left-[-130px] top-0 h-[300px] w-[300px] bg-no-repeat"
                style={{
                  backgroundImage: `url("https://i.ibb.co/XXx1Ykh/quote-l.png")`,
                }}
              />
              <div
                className="absolute right-[-230px] top-0 h-[300px] w-[300px] bg-no-repeat"
                style={{
                  backgroundImage: `url("https://i.ibb.co/D1Mhs5N/quote-r.png")`,
                }}
              />
              <div className=" w-full max-w-7xl text-slate-900">
                <p className="text-uppercase text-xl font-extrabold text-[#ff4904]">
                  TESTIMONIALS
                </p>
                <p className=" text-uppercase my-4 text-6xl font-extrabold">
                  CUSTOMER&apos;S AWESOME
                </p>
                <p className="text-uppercase text-5xl font-extrabold text-[#ff4904]">
                  FEEDBACK.
                </p>
              </div>
            </div>
            <Avatar className="mb-8 mt-12 h-[140px] w-[140px]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="mt-4 max-w-[700px] text-justify">
              There are many variations of passages of Lorem Ipsum available,
              the majority have suffered alteration in some form, by injected
              humour. randomised words which look even slightly believable. It
              uses a dictionary of over 200 Latin words,{" "}
            </p>
            <h2 className="mt-4 text-2xl font-bold">Nirob Aronno</h2>
            <p className="mb-4">Marketing Manager</p>
            <div className="flex w-full items-center justify-center text-slate-600">
              <Circle className=" cursor-pointer rounded-full hover:text-[#ff4904]" />
              <Minus />

              <Circle className=" cursor-pointer rounded-full hover:text-[#ff4904]" />
              <Minus />
              <Circle className="cursor-pointer  rounded-full text-[#ff4904]" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Testimonials;
