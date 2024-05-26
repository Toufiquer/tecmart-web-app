/*
|-----------------------------------------
| setting up DashboardPeopleDetails for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

"use client";

import { useDashboardStore } from "../dashboard-store";
const DashboardPeopleDetails = () => {
  const dashboardData = useDashboardStore((store) => store.dashboardData);
  return (
    <main>
      <div className="flex flex-col items-center justify-center w-full text-4xl h-screen">
        Dashboard People Details
        <h4 className="">{dashboardData?.peopleData?.name}</h4>
      </div>
    </main>
  );
};
export default DashboardPeopleDetails;
