/*
|-----------------------------------------
| setting up PopularArticle for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import CardItem from "./card-item";

const PopularArticle = () => {
  return (
    <>
      <div className="mb-8 mt-12 text-center text-3xl font-bold">
        Popular Article
      </div>
      <main className="mx-auto mb-12 grid w-full max-w-[1100px] grid-cols-1 md:grid-cols-3">
        <CardItem />
        <CardItem />
        <CardItem />
      </main>
    </>
  );
};
export default PopularArticle;
