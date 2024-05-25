/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import Header from "./header";
import ProductTable from "./product-table";

const Page = () => {
  return (
    <main className="mb-8 p-4 xl:p-0">
      <div className="max-w-7xl mx-auto">
        <Header />
        <ProductTable />
      </div>
    </main>
  );
};
export default Page;
