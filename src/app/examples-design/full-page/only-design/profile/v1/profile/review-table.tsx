/*
|-----------------------------------------
| setting up review-table for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

"use client";

import { reviews } from "./reviews";
import DataTable from "./data-table";
import { columns } from "./review-columns";

const ReviewTable = () => {
  return <DataTable columns={columns} data={reviews} />;
};
export default ReviewTable;
