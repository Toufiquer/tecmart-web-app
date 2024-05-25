/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { allFAQ } from "./faq-data";
import FAQAccordion from "./faq-accordion";
import Header from "./header";
import ContactTicket from "./contact-ticket";
import PopularArticle from "./popular-article";

const Page = () => {
  return (
    <main className="py-12">
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto mb-12 mt-[545px] w-full max-w-[1200px] px-4 lg:mt-0">
          <div className="mb-4 text-center text-3xl font-bold text-slate-700">
            Frequently Asked Questions
          </div>
          <div className="w-full border-b" />
          {allFAQ.length > 0 &&
            allFAQ.map((curr) => (
              <FAQAccordion data={curr} key={curr.id} className="" />
            ))}
        </div>
        <ContactTicket />
        <PopularArticle />
      </div>
    </main>
  );
};
export default Page;
