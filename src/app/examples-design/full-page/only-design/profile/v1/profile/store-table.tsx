/*
|-----------------------------------------
| setting up store-table for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

"use client";

import { vendors } from "./vendor";
import DataTable from "./data-table";
import { columns } from "./store-columns";

const StoreTable = () => {
  return <DataTable columns={columns} data={vendors} />;
};
export default StoreTable;
