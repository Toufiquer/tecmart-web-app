/*
|-----------------------------------------
| setting up CardHome for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Image from "next/image";

const CardHome = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-12">
      <main className="flex w-full flex-col gap-12 py-12">
        <section className="grid w-full grid-cols-1 md:grid-cols-2">
          <div className="order-1 flex items-center justify-center ">
            <div className="h-auto w-full min-w-[400px] min-h-[400px] max-w-[400px] relative">
              <Image
                src="https://i.ibb.co/09xXLZ7/customers.png"
                alt="customers image"
                fill
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="order-2 flex max-w-[600px] flex-col items-start justify-center py-12">
            <div className="text-4xl font-semibold text-orange-500">
              Get more customers
            </div>
            <p className="pt-4 text-xl text-slate-500">
              Supercharge your business with Just Eat! Our platform connects
              businesses to an average of 4,000 orders annually. Gain an edge
              over the competition as we put your store in front of more
              potential customers than anyone else. Experience the power of Just
              Eat and watch your sales soar!
            </p>
          </div>
        </section>
        <section className="grid w-full grid-cols-1 md:grid-cols-2">
          <div className="order-2 flex items-center justify-center md:order-1">
            <div className="h-auto w-full max-w-[600px]">
              <div className="flex max-w-[600px] flex-col items-start justify-center py-12">
                <div className="text-4xl font-semibold text-orange-500">
                  We&lsquo;ll do the marketing
                </div>
                <p className="pt-4 text-xl text-slate-500">
                  Join the thriving community of Just Eat, where over 12 million
                  hungry individuals visit each month. Our commitment to
                  continuous marketing investments and enhanced products and
                  services ensures that these customers not only return but also
                  keep coming back for more. Experience the benefits of our
                  platform, catering to both customers and businesses alike.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 flex items-center justify-center md:order-2 ">
            <div className="h-auto w-full min-w-[400px] min-h-[400px] max-w-[400px] relative">
              <Image
                src="https://i.ibb.co/j3Z3BK6/marketing.png"
                alt="customers image"
                fill
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>
        <section className="grid w-full grid-cols-1 md:grid-cols-2">
          <div className="order-1 flex items-center justify-center ">
            <div className="h-auto w-full min-w-[400px] min-h-[400px] max-w-[400px] relative">
              <Image
                src="https://i.ibb.co/2hD2wsy/delivery.png"
                alt="customers image"
                fill
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="order-2 flex max-w-[600px] flex-col items-start justify-center py-12">
            <div className="text-4xl font-semibold text-orange-500">
              Join the UK‘s leading takeaway platform
            </div>
            <p className="pt-4 text-xl text-slate-500">
              Introducing Meal Night, the pioneering and largest online food
              delivery company in the UK. With our cutting-edge delivery system,
              we assign drivers in advance, guaranteeing seamless and efficient
              delivery of your products. Trust us to handle your deliveries with
              utmost care and precision, ensuring customer satisfaction every
              step of the way.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};
export default CardHome;
