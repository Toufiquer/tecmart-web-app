/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import Header from "./header";
import Content from "./content";

const Page = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-[1200px] py-4">
          <Header />
          <Content />
        </div>
      </div>
    </main>
  );
};
export default Page;
