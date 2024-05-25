/*
|-----------------------------------------
| setting up Banner for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <section className="px-2">
      <main className="my-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative mt-4">
          <Image
            height={1080}
            width={500}
            src="https://i.ibb.co/S3Pf4cK/banner.png"
            alt="Slider"
            className="h-auto w-full rounded-lg"
          />
          <div className="absolute inset-x-0 top-0 h-full w-full ">
            <div className="flex h-full w-full flex-col items-center justify-start">
              <div className="my-auto h-auto w-full pl-8">
                <h2 className="text-2xl font-bold">Fruits & Vegetables</h2>
                <p className="mt-2 text-slate-500">Get Upto 30% Off</p>
                <Button className="mt-4 flex items-center gap-2">
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-4">
          <Image
            height={1080}
            width={500}
            src="https://i.ibb.co/S3Pf4cK/banner.png"
            alt="Slider"
            className="h-auto w-full rounded-lg"
          />
          <div className="absolute inset-x-0 top-0 h-full w-full ">
            <div className="flex h-full w-full flex-col items-center justify-start">
              <div className="my-auto h-auto w-full pl-8">
                <h2 className="text-2xl font-bold">Fruits & Vegetables</h2>
                <p className="mt-2 text-slate-500">Get Upto 30% Off</p>
                <Button className="mt-4 flex items-center gap-2">
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
export default Banner;
