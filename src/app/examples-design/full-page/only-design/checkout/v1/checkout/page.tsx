/*
|-----------------------------------------
| setting up CheckoutPage for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import ShippingDetails from "./shipping-details";
import BillingDetails from "./billing-details";
import PaymentMethod from "./payment-method";
import Summary from "./summary";
import Header from "./header";

const CheckoutPage = () => {
  return (
    <section className="bg-blue-50">
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="px-6">
          <h2 className="pb-8 pt-12 text-3xl font-bold">Check out</h2>
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col">
              <ShippingDetails />
              <BillingDetails />
              <PaymentMethod />
            </div>
            <div className="mb-12 flex w-full items-start justify-center">
              <Summary />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CheckoutPage;
