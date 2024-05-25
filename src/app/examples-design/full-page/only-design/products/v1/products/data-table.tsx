/*
|-----------------------------------------
| setting up data table | Main table for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import AddOrders from "./add-orders";
import ButtonGroup from "./button-group";
import { FaFileExport } from "react-icons/fa";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <>
      <div className="flex items-center justify-start gap-4">
        {" "}
        <div className="flex text-sm ">Total:{` (${data.length})`}</div>
        <div className="flex text-sm ">
          <span className="text-blue-500">Published:</span>
          {` (${data.length})`}
        </div>
        <div className="flex text-sm ">
          <span className="text-blue-500">Drafts:</span>
          {` (${data.length})`}
        </div>
        <div className="flex text-sm ">
          <span className="text-blue-500">On discount:</span>
          {` (${data.length})`}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-4 xl:flex-row">
        <Input
          placeholder="Filter "
          value={filtering}
          onChange={(event) => setFiltering(event.target.value)}
          className="mb-4 w-full border-slate-300 xl:mb-0 xl:w-[700px]"
        />
        <div className="flex w-full flex-wrap items-center justify-between gap-2 xl:ml-6">
          <ButtonGroup />
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Columns
                  <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline">
              <span className="justify flex min-w-[70px] items-center gap-2">
                <FaFileExport /> Export{" "}
              </span>
            </Button>
            <AddOrders />
          </div>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {
                        { asc: "↑", desc: "↓" }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p>
          <strong>
            Page No: {table.getState().pagination.pageIndex + 1} out of{" "}
            {table.getPageCount()}
          </strong>
        </p>
        <div className="flex items-center justify-end gap-2">
          <Button
            className=""
            variant="outline"
            onClick={() => table.setPageIndex(0)}
          >
            <AiOutlineDoubleLeft />
          </Button>
          <Button
            className=""
            variant="outline"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            <AiOutlineLeft />
          </Button>
          <Button
            className=""
            variant="outline"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            <AiOutlineRight />
          </Button>
          <Button
            className=""
            variant="outline"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            <AiOutlineDoubleRight />
          </Button>
        </div>
      </div>
    </>
  );
};
export default DataTable;
