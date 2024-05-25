/*
|-----------------------------------------
| setting up customer-profile for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import Header from "./header";
import DefaultAddress from "./default-address";
import CustomerBio from "./customer-bio";
import TableContent from "./table-content";

const CustomerDetailsPage = () => {
  return (
    <div className="bg-[#f5f7fa] p-1 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col text-[1rem]">
          <Header />
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 lg:flex-row">
              <CustomerBio />
              <DefaultAddress />
            </div>
            <TableContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsPage;
