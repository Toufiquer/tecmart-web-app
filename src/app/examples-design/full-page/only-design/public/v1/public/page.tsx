/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, October, 2023
|-----------------------------------------
*/
import FeaturedCategories from "./featured-categories";
import PopularProducts from "./popular-products";
import DailyBestSells from "./daily-best-sells";
import Header from "./header";
import Banner from "./banner";
import Benefit from "./benefit";

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full px-2">
        <main className="flex w-full flex-col">
          <Header />
          <FeaturedCategories />
          <Banner />
          <PopularProducts />
          <DailyBestSells />
          <Benefit />
        </main>
      </div>
    </div>
  );
};
export default Page;
