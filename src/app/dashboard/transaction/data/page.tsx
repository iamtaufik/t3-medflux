"use client";
import SearchIcon from "@/components/SearchIcon";
import Table from "@/components/Table";
import { ShowTransactionModal } from "@/components/TransactionModal";
import { api } from "@/trpc/react";
import { DateRangePicker, Select, SelectItem, TextInput } from "@tremor/react";
import id from "date-fns/locale/id";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";

const transactionData = [
  {
    date: "11/10/2023-16:30",
    name: "Augmentin 6250 Duo Tablet",
    struct: "10001210210",
    totalSales: 1244023,
  },
  {
    date: "11/10/2023-17:30",
    name: "Asfifit Kaplet-Blister",
    struct: "10001210211",
    totalSales: 2383775,
  },
  {
    date: "11/10/2023-16:30",
    name: "Fituno Kaplet-Blister",
    struct: "10001210212",
    totalSales: 1900000,
  },
  {
    date: "11/10/2023-17:30",
    name: "Zink 20 mg",
    struct: "10001210213",
    totalSales: 2000000,
  },
  {
    date: "11/10/2023-16:30",
    name: "Desoximetason Cream",
    struct: "10001210214",
    totalSales: 1233678,
  },
  {
    date: "11/10/2023-17:30",
    name: "Aspilet",
    struct: "10001210215",
    totalSales: 2345672,
  },
  {
    date: "11/10/2023-16:30",
    name: "Tramadal 50 mg",
    struct: "10001210216",
    totalSales: 1672928,
  },
  {
    date: "11/10/2023-17:30",
    name: "Aminofisin Hepar",
    struct: "10001210217",
    totalSales: 1789000,
  },
];
const Page = () => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(transactionData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "transactions.xlsx");
  };
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const startIndex = (page - 1) * limit;

  const handleAddTransaction = () => {
    ShowTransactionModal();
    toast.success("Transaction Added Succesfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const { data: transactions, isLoading } = api.transaction.getAll.useQuery({
    limit: limit,
    page: page,
    sort: "desc",
  });

  const { data: totalTransactions } = api.transaction.total.useQuery();

  return (
    <>
      <div className="flex flex-col justify-between gap-4 px-4 md:flex-row md:items-center md:px-10">
        <div>
          <h1 className="text-xl font-bold md:text-2xl">
            <Link className="text-gray-300" href={"/dashboard/transaction"}>
              Transaction
            </Link>{" "}
            {">"} <span className="text-black">Data Transaction</span>
          </h1>
          <p className="text-base font-normal">
            Sales transaction report of the pharmacy
          </p>
        </div>
        <div className="flex justify-between gap-6 md:justify-normal">
          <button
            onClick={exportToExcel}
            className="flex items-center gap-2 rounded-3xl border border-primary px-4 py-2 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span>Download Report</span>
          </button>
          <button
            onClick={handleAddTransaction}
            className="flex items-center gap-2 rounded-3xl border border-primary bg-primary px-4 py-2 text-white transition-colors duration-300 hover:bg-[#13668D] hover:text-white"
          >
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 "
            >
              <path
                d="M11.1429 6.85714H6.85714V11.1429C6.85714 11.6143 6.47143 12 6 12C5.52857 12 5.14286 11.6143 5.14286 11.1429V6.85714H0.857143C0.385714 6.85714 0 6.47143 0 6C0 5.52857 0.385714 5.14286 0.857143 5.14286H5.14286V0.857143C5.14286 0.385714 5.52857 0 6 0C6.47143 0 6.85714 0.385714 6.85714 0.857143V5.14286H11.1429C11.6143 5.14286 12 5.52857 12 6C12 6.47143 11.6143 6.85714 11.1429 6.85714Z"
                fill="white"
              />
            </svg>
            <span>Transaction</span>
          </button>
        </div>
      </div>
      <div className="my-10 flex flex-col justify-between gap-4 px-4 md:flex-row md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:gap-10">
          <div className="w-full md:max-w-xs ">
            <TextInput
              className="px-4"
              icon={SearchIcon}
              placeholder="Search Transaction..."
            />
          </div>
          <div className="w-full md:max-w-[290px] ">
            <DateRangePicker
              locale={id}
              defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }}
              enableSelect={false}
              placeholder="Date Range"
              displayFormat="dd MMM yyyy"
            />
          </div>
        </div>
        <div className="w-full md:max-w-[250px]">
          <Select placeholder="Select sort">
            <SelectItem value="1">Ascending</SelectItem>
            <SelectItem value="2">Descending</SelectItem>
          </Select>
        </div>
      </div>
      <div className="mb-10 px-4 md:px-10">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Table
            paggination={{
              total: totalTransactions!,
              page: page,
              limit: limit,
              setLimit: (limit: number) => {
                setLimit(limit);
              },
              setOffset: (page: number) => {
                setPage(page);
              },
            }}
          >
            <thead className="border-b ">
              <tr className="whitespace-nowrap">
                <th scope="col" className="px-6 py-3 ">
                  No
                </th>
                <th scope="col" className="px-6 py-3 ">
                  <div className="flex items-center justify-center gap-1 ">
                    <span>Date Time</span>
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                  <div className="flex items-center justify-center gap-1 ">
                    <span>Medicine Name</span>
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                  <div className="flex items-center justify-center gap-1 ">
                    <span>Struct Number</span>
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                  <div className="flex items-center justify-center gap-1 ">
                    <span>Total Sales</span>
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions!.map((data, index) => (
                <tr
                  key={index}
                  className="whitespace-nowrap border text-center font-normal "
                >
                  <td className="px-6 py-3">{startIndex + index + 1}</td>
                  <td className="px-6 py-3">
                    {data.dateTime.toLocaleDateString()}
                  </td>
                  <td className="px-6 py-3">{data.medicine_name}</td>
                  <td className="px-6 py-3">{data.structNumber}</td>
                  <td className="px-6 py-3">
                    Rp. {data.totalPrice.toLocaleString("id-ID")}
                  </td>
                  <td className="px-6 py-3">
                    <button className="flex items-center gap-2">
                      View Full Detail
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                          />
                        </svg>
                      </div>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default Page;
