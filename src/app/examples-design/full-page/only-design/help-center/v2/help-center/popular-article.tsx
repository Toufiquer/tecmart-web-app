/*
|-----------------------------------------
| setting up PopularArticle for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import SingleCard from "./single-card";

const PopularArticle = () => {
  return (
    <>
      <div className="mb-8 mt-12 text-center text-3xl font-bold text-slate-700">
        Popular Article
      </div>
      <main className="mx-auto mb-12 flex w-full max-w-[1100px] flex-wrap lg:flex-row">
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </main>
    </>
  );
};
export default PopularArticle;
