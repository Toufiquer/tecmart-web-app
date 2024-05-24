/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Button } from "@/components/ui/button";
import EventDetails from "./event-details";
import Schedule from "./schedule";
import Privacy from "./privacy";
import TicketPricing from "./ticket-pricing";
import CustomFields from "./custom-fields";
import "./page.css";

const Page = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <div className="px-2">
          <div className="flex w-full items-center justify-between">
            <h2 className="mb-4 w-full py-4 text-4xl font-semibold">
              Create an Event
            </h2>
            <div className="mb-4 flex w-full max-w-[400px] gap-2 py-8">
              <Button className="w-[110px] text-blue-500" variant="outline">
                Save
              </Button>
              <Button className="w-full bg-blue-400 hover:bg-blue-500">
                Publish event
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 pb-8 lg:grid-cols-[1fr_400px]">
            <div className="flex flex-col">
              <EventDetails />
              <Schedule />
            </div>
            <div className="flex flex-col pl-2">
              <Privacy />
              <TicketPricing />
              <CustomFields />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Page;
