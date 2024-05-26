/*
|-----------------------------------------
| setting up Summary for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUk, September, 2023
|-----------------------------------------
*/

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Summary = () => {
  return (
    <div className="flex w-full flex-col justify-between gap-4 pl-4 md:flex-row xl:flex-col">
      <main className="mx-auto mb-4 w-full rounded bg-white p-8 lg:max-w-[400px]">
        <div className="flex flex-col">
          <div className="border-dot mb-12 border-b">
            <h2 className="mb-2 flex w-full items-center justify-between font-semibold">
              <span className="py-4 pr-4 text-2xl font-bold">Summary</span>
            </h2>
          </div>
          <div className="mb-4 flex flex-col gap-2 border-b pb-4">
            <div className="flex justify-between">
              <h3>Items subtotal: </h3>
              <span className="text-xl">&#163; 398</span>{" "}
            </div>
            <div className="flex justify-between">
              <h3>Discount: </h3>
              <span className="text-xl text-red-500"> - &#163; 398</span>{" "}
            </div>
            <div className="flex justify-between">
              <h3>Tax: </h3>
              <span className="text-xl">&#163; 398</span>{" "}
            </div>
            <div className="flex justify-between">
              <h3>Subtotal: </h3>
              <span className="text-xl">&#163; 398</span>{" "}
            </div>
            <div className="flex justify-between">
              <h3>Shipping Cost : </h3>
              <span className="text-xl">&#163; 398</span>{" "}
            </div>
          </div>
          <div className="flex justify-between text-xl font-semibold">
            <h3>Total: </h3>
            <span className="text-xl">&#163; 398</span>{" "}
          </div>
        </div>
      </main>
      <main className="mx-auto mb-4 w-full rounded bg-white p-8 lg:max-w-[400px]">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Refund Amount</h2>
          <Input type="number" placeholder="Amount" className="my-4" />
          <Button> Refund &#163; 500</Button>
        </div>
      </main>
    </div>
  );
};
export default Summary;
