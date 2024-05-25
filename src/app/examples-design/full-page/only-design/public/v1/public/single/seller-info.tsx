/*
|-----------------------------------------
| setting up SellerInfo for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
import Image from "next/image";
import { AiTwotoneStar } from "react-icons/ai";

const SellerInfo = () => {
  return (
    <section className="flex flex-col px-4">
      <main className="border-b pb-4">
        <div className="mt-4 flex w-full flex-col items-start justify-start md:flex-row">
          <div className="mt-1 w-full md:w-[180px]">
            <Image
              height={1080}
              width={500}
              src="https://i.ibb.co/Dgw6Jw5/singer.jpg"
              alt="Watch"
              className={` h-full w-full max-w-full `}
            />
          </div>
          <div className="flex w-full flex-col md:pl-4">
            <div className="mt-2 flex w-full flex-col items-start justify-start md:mt-0 md:flex-row md:items-center md:justify-between">
              <div className="mb-2">
                <h2 className="w-full text-start text-[18px] font-bold">
                  Shop Name or Customer Name
                </h2>
                <p className="text-xs">
                  <span className="text-slate-500">
                    {" "}
                    from 20th November 2014{" "}
                  </span>
                  <span className="ml-4 font-bold text-green-400">
                    Veirfied Seller
                  </span>
                </p>
              </div>
              <div className="mb-2 mt-1">
                <div className="flex items-center gap-1 text-[18px] text-orange-300">
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <AiTwotoneStar />
                  <p className="ml-1 text-xs font-bold text-slate-600">
                    (25 review)
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-slate-400">
                Product quality is good. But, weight seemed less than 1kg. Since
                it is being sent in open package, there is a possibility of
                pilferage in between. FreshCart sends the veggies and fruits
                through sealed plastic covers and Barcode on the weight etc.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
          <div className="w-full py-2">
            <h2 className="text-[18px] font-bold">Contact Information</h2>
            <div className="my-2 flex max-w-[600px] items-center justify-between">
              <div className="w-1/4  font-semibold">Email </div>
              <div className="w-full text-start">example@gmail.com</div>
            </div>
            <div className="my-2 flex max-w-[600px] items-center justify-between">
              <div className="w-1/4  font-semibold">Phone</div>
              <div className="w-full text-start">+00 12345 6789</div>
            </div>
            <div className="my-2 flex max-w-[600px] items-center justify-between">
              <div className="w-1/4  font-semibold">Country</div>
              <div className="w-full text-start">United Kingdom</div>
            </div>
            <div className="my-2 flex max-w-[600px] items-center justify-between">
              <div className="w-1/4  font-semibold">State</div>
              <div className="w-full text-start">Belfast</div>
            </div>
          </div>
          <div className="w-full py-2">
            <iframe
              title="Google map"
              className="h-[200px] w-full md:min-w-[500px]"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20+(UK)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
          </div>
        </div>
      </main>
    </section>
  );
};
export default SellerInfo;
