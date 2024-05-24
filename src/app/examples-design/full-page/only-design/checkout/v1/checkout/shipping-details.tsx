/*
|-----------------------------------------
| setting up ShippingDetails for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Details from "./details";

const ShippingDetails = () => {
  return (
    <>
      <h2 className="mb-6 font-semibold">
        <span className="py-4 pr-4 text-2xl font-bold">Shipping Details</span>{" "}
        <span className="text-sm text-blue-700">Edit</span>
      </h2>
      <Details />
    </>
  );
};
export default ShippingDetails;
