/*
|-----------------------------------------
| setting up product-table for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/

"use client";

import { data } from "./products-data";
import DataTable from "./data-table";
import { columns } from "./product-columns";

const ProductTable = () => {
  return <DataTable columns={columns} data={data} />;
};
export default ProductTable;
