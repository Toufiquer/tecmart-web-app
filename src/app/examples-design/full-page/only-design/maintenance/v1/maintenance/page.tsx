/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Image from "next/image";

const Page = () => {
  return (
    <main className="max-h-screen">
      <div className="py-4">
        <div className="px-auto">
          <Image
            priority={false}
            quality={75}
            src="https://i.ibb.co/h7G5Khf/maintenance.jpg"
            width={500}
            height={200}
            className="mx-auto rounded-3xl"
            alt="Privacy Page Image"
          />
        </div>
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-4xl font-semibold">
            We&apos;re just tuning up a few things.
          </h2>
          <p className="text-slate-600">
            We apologize for the inconvenience but Front is currently undergoing{" "}
            <br /> planned maintenance. Stay tuned!
          </p>
        </div>
      </div>
    </main>
  );
};
export default Page;
