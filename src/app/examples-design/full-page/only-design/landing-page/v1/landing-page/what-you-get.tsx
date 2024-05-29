/*
|-----------------------------------------
| setting up WhatYouGet for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Link from "next/link";
import { Check } from "lucide-react";

import FAQAccordion from "./faq-accordion";
import { Button } from "@/components/ui/button";

const allFAQ = [
  {
    id: 1,
    question: "How do I place an order?",
    answer: "You can place an order on our website by following these steps",
    answerList: [
      "Go to our website and create an account.",
      "Select the restaurant and dishes you want to order.",
      "Enter your delivery address and payment information.",
      "Review your order and submit it.",
    ],
  },
  {
    id: 2,
    question: "Is there a delivery fee?",
    answer:
      "Yes, there is a delivery fee for all orders. The delivery fee is calculated based on the distance from the restaurant to your delivery address.",
    answerList: [],
  },
  {
    question: "How long does it take to deliver my order?",
    answer:
      "The delivery time varies depending on the distance from the restaurant to your delivery address and the time of day. However, most orders are delivered within 30 minutes.",
    answerList: [],
    id: 3,
  },
  {
    question: "How can I track my order?",
    answer:
      "Once you have placed your order, you can track its status by logging into your account. You will be able to see the estimated delivery time and the location of your driver.",
    answerList: [],
    id: 4,
  },
  {
    question: "How do I pay for my order?",
    answer:
      "We accept a variety of payment methods, including credit cards, debit cards, and PayPal. You can choose your preferred payment method when you place your order.",
    answerList: [],
    id: 5,
  },
  {
    question: "What are your hours of operation?",
    answer:
      "Our hours of operation vary depending on the restaurant. You can see the hours of operation for each restaurant on their page.",
    answerList: [],
    id: 6,
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact customer support by email or phone. Our contact information is available on our website.",
    answerList: [],
    id: 7,
  },
];

const WhatYouGet = () => {
  return (
    <main className="mb-12 mt-12 flex min-h-[80vh] w-full flex-col px-4 text-xl text-slate-500">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-8 w-full py-4 text-center text-4xl font-extrabold text-rose-500 md:text-7xl">
          What you get
        </h2>
        <div className="flex items-center justify-start gap-4 py-2">
          <Check className="text-green-500" />{" "}
          <p>Your business on the Just Eat app and website</p>
        </div>
        <div className="flex items-center justify-start gap-4 py-2">
          <Check className="text-green-500" />{" "}
          <p>
            An Orderpad tablet and printer for receiving and managing orders
          </p>
        </div>
        <div className="flex items-center justify-start gap-4 py-2">
          <Check className="text-green-500" />
          <p>Personalised data, insights and business best practice</p>
        </div>
        <div className="flex items-center justify-start gap-4 py-2">
          <Check className="text-green-500" />{" "}
          <p>Up to £1,000 off electric delivery bikes and scooters</p>
        </div>
        <div className="flex items-center justify-start gap-4 py-2">
          <Check className="text-green-500" />{" "}
          <p>An average saving of £1,150 a year on energy bills</p>
        </div>
        <div className="flex items-center justify-start gap-4 py-2">
          <Check className="text-green-500" />
          <p>Free Just Eat merchandising</p>
        </div>
      </div>
      <h2 className="mt-12 w-full py-16 text-center text-4xl font-normal text-rose-500 md:text-7xl">
        Frequently asked questions
      </h2>
      <div className="mx-auto h-12 w-full max-w-7xl border-b" />
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        {allFAQ.length > 0 &&
          allFAQ.map((curr) => <FAQAccordion data={curr} key={curr.id} />)}
      </div>
      <div className="mx-auto my-12 flex max-w-7xl flex-col gap-12 py-12 text-center">
        <h2 className="text-2xl font-semibold text-slate-600">
          We can help you identify and eliminate unnecessary costs in your
          business by conducting a cost analysis. We can also help you negotiate
          with vendors to get better prices on goods and services. And we can
          help you implement new technologies that can streamline your
          operations and reduce costs.
        </h2>
        <Link href="/#joinUs">
          <Button className="mx-auto min-w-[300px] max-w-[400px] bg-rose-500 text-xl font-bold hover:bg-rose-600">
            Join us today
          </Button>
        </Link>
        <h2 className="text-2xl text-slate-600">
          Any questions? Call us on{" "}
          <strong className="text-slate-950">0123 456 789</strong>
        </h2>
      </div>
    </main>
  );
};
export default WhatYouGet;
