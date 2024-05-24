/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import SearchBar from "./search-bar";
import FAQAccordion from "./faq-accordion";
import { allFAQ } from "./faq-data";
import Header from "./header";
import Footer from "./footer";

const Page = () => {
  return (
    <section className="min-h-screen  bg-[#ecf2ff] p-10">
      <Header />
      <SearchBar />
      <div className="max-w-7xl mx-auto">
        <div className="h-12 w-full border-b" />
        {allFAQ.length > 0 &&
          allFAQ.map((curr) => <FAQAccordion data={curr} key={curr.id} />)}
        <Footer />
      </div>
    </section>
  );
};

export default Page;
