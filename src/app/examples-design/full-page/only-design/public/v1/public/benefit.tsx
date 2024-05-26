/*
|-----------------------------------------
| setting up Benefit for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/

import { AiOutlineCodeSandbox, AiOutlineGift } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

const data = [
  {
    id: 1,
    title: "10 minute grocery now",
    details:
      "Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.",
    icon: <BsClock />,
  },
  {
    id: 2,
    title: "Best Prices & Offers",
    details:
      "Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.",
    icon: <AiOutlineGift />,
  },
  {
    id: 3,
    title: "Wide Assortment",
    details:
      "Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.",
    icon: <AiOutlineCodeSandbox />,
  },
  {
    id: 4,
    title: "Easy Returns",
    details:
      "Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy.",
    icon: <BiRefresh />,
  },
];
const Benefit = () => {
  return (
    <main className="my-12 px-2">
      <div className="grid grid-cols-1 items-center justify-between gap-8 md:grid-cols-2 lg:grid-cols-4">
        {data.map((curr) => (
          <div key={curr.id} className="flex flex-col gap-4">
            <div className="text-4xl text-green-500">{curr.icon}</div>
            <h2 className="text-lg font-medium">{curr.title}</h2>
            <p className="text-sm text-slate-600">{curr.details}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Benefit;
