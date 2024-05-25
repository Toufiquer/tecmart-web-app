/*
|-----------------------------------------
| setting up PrivacyPolicy for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import Header from "./header";
import BookingPolicy from "./booking-policy";
import CancellationPolicy from "./cancellation-policy";
import SpecialRequest from "./special-request";
import DateChangePolicy from "./date-change-policy";

const PrivacyPolicy = () => {
  return (
    <main className="mb-12 mt-12 flex w-full flex-row justify-center gap-8 px-2">
      <div className="w-full min-w-[700px] max-w-[1000px] text-start text-slate-800">
        <Header />
        <BookingPolicy />
        <CancellationPolicy />
        <DateChangePolicy />
        <SpecialRequest />
      </div>
    </main>
  );
};

export default PrivacyPolicy;
