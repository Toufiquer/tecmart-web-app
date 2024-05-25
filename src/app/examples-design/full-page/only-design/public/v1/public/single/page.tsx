/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

import Header from "./header";
import AddToCart from "./add-to-cart";
import RelatedItems from "./related-items";
import DetailsToggle from "./details-toggle";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <AddToCart />
      <DetailsToggle />
      <RelatedItems />
    </div>
  );
};
export default Page;
