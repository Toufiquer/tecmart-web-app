/*
|-----------------------------------------
| setting up FeaturedCategories for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const CreateLink = ({ url }: { url: string }) => (
  <Link
    href="/#"
    className="w-full rounded-lg border px-6 py-8 duration-300 hover:border-green-400 hover:shadow-xl"
  >
    <Image
      height={200}
      width={120}
      src={`/${url}`}
      alt="Slider"
      className="h-auto w-full rounded-lg"
    />
    <p className="text-center">Mobile Care</p>
  </Link>
);

const FeaturedCategories = () => {
  return (
    <section className="my-12 px-2">
      <div className="mb-8 flex w-full items-center justify-between">
        <h2 className="text-xl font-semibold md:text-2xl">
          Featured Categories
        </h2>
        <div className="flex items-center justify-between gap-2">
          <span className="cursor-pointer rounded-full bg-slate-200 p-2 text-xl duration-300 hover:bg-slate-300">
            <BiChevronLeft />
          </span>
          <span className="cursor-pointer rounded-full bg-slate-200 p-2 text-xl duration-300 hover:bg-slate-300">
            <BiChevronRight />
          </span>
        </div>
      </div>
      <div className="flex w-full gap-4 md:hidden">
        {["1.png", "1.png"].map((curr) => (
          <CreateLink url={curr} />
        ))}
      </div>
      <div className="hidden w-full gap-4 md:flex">
        {["1.png", "1.png", "1.png", "1.png", "1.png", "1.png"].map((curr) => (
          <CreateLink url={curr} />
        ))}
      </div>
    </section>
  );
};
export default FeaturedCategories;
