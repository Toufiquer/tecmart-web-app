/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Header from "./header";
import Description from "./description";
import AboutThisEvent from "./about-this.event";
import OrganizedBy from "./organized-by";

const Page = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col px-2">
          <Header />
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px]">
            <div className="my-8 min-h-screen border-r-0 pr-0 xl:border-r xl:pr-6">
              <Description />
              <AboutThisEvent />
            </div>
            <div className="flex flex-col">
              <div className="mt-8 pl-0 xl:pl-6">
                <OrganizedBy />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Page;
