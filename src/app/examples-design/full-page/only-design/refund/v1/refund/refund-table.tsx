/*
|-----------------------------------------
| setting up Refund-table for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

"use client";

import { refundProduct } from "./refund";
import DataTable from "./data-table";
import { columns } from "./refund-columns";

const RefundTable = () => {
  return <DataTable columns={columns} data={refundProduct} />;
};
export default RefundTable;
