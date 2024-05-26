/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
import { ScrollArea } from "@/components/ui/scroll-area";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "./header";
import Item from "./item";

const createData = (id: number) => ({
  id,
  title: "Nutrient Value & Benefits",
  img: "https://i.ibb.co/CQ5PcKh/2.png",
  weight: ".98/lb",
  price: "5.00",
});

const data = [
  createData(1),
  createData(2),
  createData(3),
  createData(4),
  createData(5),
  createData(6),
  createData(7),
  createData(8),
];

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="flex w-full flex-col px-2">
        <div className="py-4">
          <h2 className="py-2 text-3xl font-bold">Shop Cart</h2>
          <p className="text-slate-500">Shopping in 2343434</p>
        </div>
        <div className="py-4">
          <div className="grid w-full grid-cols-1 lg:grid-cols-[1fr_400px]">
            <div className="flex w-full flex-col py-2">
              <div className="rounded-lg border border-rose-300 bg-rose-200 px-4 py-2 text-sm lg:mr-4">
                You&apos;ve got FREE delivery. Start{" "}
                <strong className="hover-underline-animation text-rose-800 hover:cursor-pointer">
                  Checkout now!
                </strong>
              </div>
              <div className="flex w-full flex-col">
                <ScrollArea className="h-screen w-full md:pr-4">
                  <div className="mx-0 my-4 border-t pl-0 md:mx-4">
                    {data.map((curr) => (
                      <Item key={curr.id} data={curr} />
                    ))}
                  </div>
                </ScrollArea>
                <div className="mt-4 flex w-full flex-col items-center justify-between gap-2 px-4 md:flex-row">
                  <Button className="w-full bg-green-400 hover:bg-green-500 md:w-auto">
                    Continue Shopping
                  </Button>
                  <Button className="w-full md:w-auto">Update Cart</Button>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="ml-2 py-2">
                <div className="rounded-lg border p-4">
                  <h2 className="font-bold">Summery</h2>
                  <div className="flex w-full flex-col py-4">
                    <div className="flex w-full items-center justify-between rounded-lg  rounded-b-none border border-b-0 px-4 py-2">
                      <p>Item Subtotal</p>
                      <p> &#163; 67</p>
                    </div>
                    <div className="flex w-full items-center justify-between border px-4 py-2">
                      <p>Item Subtotal</p>
                      <p> &#163; 67</p>
                    </div>
                    <div className="flex w-full items-center justify-between rounded-lg rounded-t-none border border-t-0 px-4 py-2 font-semibold">
                      <p>Item Subtotal</p>
                      <p> &#163; 67</p>
                    </div>
                  </div>
                  <div className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-t-0 bg-green-400 px-4 py-2 text-sm font-semibold text-white hover:bg-green-500">
                    <p>Go to checkout</p>
                    <p> &#163; 67</p>
                  </div>
                  <p className="mb-4 mt-1 text-xs text-slate-600">
                    By placing your order, you agree to be bound by the
                    Freshcart <strong>Terms of Service</strong> and
                    <strong> Privacy Policy.</strong>
                  </p>
                  <div className="text-[22px] font-semibold">
                    Add Promo or Gift Card
                  </div>
                  <p className="my-4">Email address</p>
                  <Input placeholder="Promo or Gift Card" />
                  <Button
                    variant="outline"
                    className="my-4 w-full border-slate-800"
                  >
                    Redeem
                  </Button>
                  <p className="text-xs text-slate-500">
                    Terms & Conditions apply
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
