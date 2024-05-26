/*
|-----------------------------------------
| setting up PaymentMethod for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
import Image from "next/image";

import { Button } from "@/components/ui/button";

const data = [
  { id: 1, cardName: "Visa Express", expireDate: "10/2026" },
  { id: 2, cardName: "Visa Express", expireDate: "12/2026" },
  { id: 3, cardName: "Visa Express", expireDate: "11/2025" },
  { id: 4, cardName: "Visa Express", expireDate: "10/2020", expire: true },
  { id: 5, cardName: "Visa Express", expireDate: "4/2025" },
  { id: 6, cardName: "Visa Express", expireDate: "1/2027" },
];

const PaymentMethod = () => {
  return (
    <main>
      <section className="lg:px-12">
        <div className="flex w-full flex-col items-start justify-start md:flex-row md:items-center lg:items-center lg:justify-between">
          <h2 className="min-w-[220px] text-xl font-semibold lg:text-3xl">
            Payment Methods
          </h2>
          <Button
            variant="outline"
            className="mb-4 mt-4 w-full min-w-[230px] border-green-400 text-green-500 hover:bg-green-100 hover:text-green-500 lg:max-w-[235px]"
          >
            Add Payment
          </Button>
        </div>
        {data.map((curr) => (
          <div key={curr.id} className="my-8 border-b py-4">
            <div className="flex w-full items-center justify-between">
              <Image
                height={1080}
                width={500}
                src="https://i.ibb.co/fvRN1mm/visa.png"
                alt="Watch"
                className="h-[120px] w-[120px] rounded-lg object-cover md:h-auto"
              />
              <div className="ml-4 flex w-full flex-col items-start justify-start md:flex-row md:items-center md:justify-between lg:ml-0">
                <div className="flex w-full flex-col text-[14px] font-bold text-black">
                  <h2>{curr.cardName}</h2>
                  <div className="flex w-full flex-col gap-x-4 gap-y-1 md:flex-row">
                    <p className="text-slate-600">
                      Expires in {curr.expireDate}
                    </p>
                    {curr.expire && (
                      <span className="w-fit rounded-lg bg-orange-300 px-2 py-0 pt-1 text-[10px] font-normal">
                        This card is expired
                      </span>
                    )}
                  </div>
                </div>
                <Button
                  disabled={curr.id === 1}
                  size="sm"
                  variant="outline"
                  className="mt-2 text-xs md:mt-0"
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
export default PaymentMethod;
