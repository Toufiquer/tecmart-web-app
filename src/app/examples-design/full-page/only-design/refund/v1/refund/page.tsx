/*
|-----------------------------------------
| setting up RefundPage for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import Summary from "./summary";
import Header from "./header";
import RefundTable from "./refund-table";

const RefundPage = () => {
  return (
    <section className="overflow-x-hidden bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="px-6">
          <Header />
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px]">
            <div className="mb-8 flex w-full flex-col">
              <RefundTable />
            </div>
            <div className="mb-12 flex w-full flex-col items-start justify-start">
              <Summary />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RefundPage;
