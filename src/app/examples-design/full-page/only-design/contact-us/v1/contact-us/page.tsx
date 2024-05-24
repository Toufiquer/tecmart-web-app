/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import ContactFrom from "./contact-from";

const Page = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto flex w-full max-w-[960px] flex-col px-4">
          <h2 className="mt-8 text-2xl font-semibold text-slate-800">
            Retailer Inquiries
          </h2>
          <p className="mt-4 text-xl font-[500] text-slate-600">
            This form is for retailer inquiries only. For all other customer or
            shopper support requests, please visit the links below this form.
          </p>
          <ContactFrom />
        </div>
      </div>
    </main>
  );
};
export default Page;
