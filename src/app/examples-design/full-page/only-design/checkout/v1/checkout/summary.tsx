/*
|-----------------------------------------
| setting up Summary for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Image from "next/image";

const SummeryItem = ({ src }: { src?: string }) => (
  <div className="flex justify-between">
    <div className="flex max-w-[250px] items-center justify-between gap-2 text-sm">
      <Image
        width="55"
        height="88"
        alt="Product Image"
        src={src || "https://i.ibb.co/LNmV8kr/1.png"}
      />
      <h2 className="mx-2 text-[13px] ">
        Fitbit Sense Advanced Smartwatch with...
      </h2>
      <span className="text-sm">x1</span>
    </div>
    <span className="ml-4 flex items-center gap-4 text-xl">&#163; 398</span>
  </div>
);

const Summary = () => {
  return (
    <main className="h-[645px] w-full rounded bg-white p-8 lg:max-w-[400px]">
      <div className="flex flex-col">
        <div className="border-dot mb-12 border-b">
          <h2 className="mb-2 flex w-full items-center justify-between font-semibold">
            <span className="py-4 pr-4 text-2xl font-bold">Summary</span>
            <span className="text-sm text-blue-700">Edit cart</span>
          </h2>
          <div className="mb-8 flex flex-col gap-4">
            <SummeryItem src="https://i.ibb.co/LNmV8kr/1.png" />
            <SummeryItem src="https://i.ibb.co/SJYy2CY/2.png" />
            <SummeryItem src="https://i.ibb.co/9pzc4Db/3.png" />
          </div>
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
  );
};
export default Summary;
SummeryItem.defaultProps = {
  src: "",
};
