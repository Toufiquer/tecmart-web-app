/*
|-----------------------------------------
| setting up OrderTable for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

"use client";

import { orders } from "./orders";
import DataTable from "./data-table";
import { columns } from "./order-columns";

const OrderTable = () => {
  return <DataTable columns={columns} data={orders} />;
};
export default OrderTable;
