/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import Agreement from "./agreement";
import Content from "./content";
import Header from "./header";

const Page = () => {
  return (
    <main className="mb-12 mt-12 flex w-full flex-row justify-center gap-8">
      <div className="min-w-[700px] max-w-[1000px] px-2 text-start text-slate-800">
        <Header />
        <Content />
        <Agreement />
      </div>
    </main>
  );
};

export default Page;
