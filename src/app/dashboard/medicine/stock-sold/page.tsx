"use client";
import Table from "@/components/Table";
import Link from "next/link";
import React from "react";

const stockSold = [
  {
    code: "10001210210",
    name: "Augmentin 625 Duo Tablet",
    unit: "ST30",
    movement: "Very Fast",
    soldAmount: 150,
    totalSales: 1888567,
    realStock: 150,
  },
  {
    code: "10001121728",
    name: "Asifit Kaplet-Blister",
    unit: "ST30",
    movement: "Very Fast",
    soldAmount: 150,
    totalSales: 1322456,
    realStock: 150,
  },
  {
    code: "10001819291",
    name: "Fituno Kaplet-Blister",
    unit: "ST30",
    movement: "Fast",
    soldAmount: 150,
    totalSales: 7892666,
    realStock: 150,
  },
  {
    code: "10001210201",
    name: "Zink 20 mg",
    unit: "ST30",
    movement: "Fast",
    soldAmount: 150,
    totalSales: 2987654,
    realStock: 150,
  },
  {
    code: "10001212678",
    name: "Desoximetason Cream",
    unit: "ST30",
    movement: "Normal",
    soldAmount: 150,
    totalSales: 7543210,
    realStock: 150,
  },
  {
    code: "10001213132",
    name: "Aspilet",
    unit: "ST30",
    movement: "Normal",
    soldAmount: 150,
    totalSales: 1281976,
    realStock: 150,
  },
  {
    code: "10001162192",
    name: "Tramadal 50 mg",
    unit: "ST30",
    movement: "Slow",
    soldAmount: 150,
    totalSales: 2678965,
    realStock: 150,
  },
  {
    code: "100017230823",
    name: "Aminofisin Hepar",
    unit: "ST30",
    movement: "Very Slow",
    soldAmount: 150,
    totalSales: 2345678,
    realStock: 150,
  },
];

const Page = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-4 px-4 md:flex-row md:items-center md:px-10">
        <div>
          <h1 className="text-xl font-bold md:text-2xl">
            <Link className="text-gray-300" href={"/dashboard"}>
              Dashboard
            </Link>
            {">"}
            <span className="text-black">Medicine Stock Sold</span>
          </h1>
          <p className="text-base font-normal">List of medicines stock sold</p>
        </div>
        <div>
          <button className="flex gap-2 rounded-3xl border border-primary px-4 py-2 text-primary transition-colors duration-300 hover:bg-primary hover:text-white">
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
        </div>
      </div>
      <div className="my-10 flex flex-col gap-10 px-4 md:flex-row md:px-10">
        <div className=" flex max-h-[170px] w-full justify-between gap-8 rounded-3xl border p-4  transition-colors duration-300 hover:border-primary hover:bg-primary hover:bg-opacity-10 md:w-1/2 md:px-8 md:py-6">
          <div className="flex items-center gap-4 md:w-2/5">
            <div className="flex items-center rounded-full bg-[#F49200] bg-opacity-10 p-4">
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.129 5.6409L18.3783 10.1344C18.5987 10.5755 19.0242 10.8814 19.5176 10.9522L24.5493 11.6764C25.7924 11.8559 26.2871 13.3626 25.3874 14.2259L21.7489 17.7221C21.3914 18.0659 21.2286 18.5601 21.3132 19.0455L22.1719 23.9813C22.3833 25.2023 21.0838 26.1339 19.9726 25.5562L15.4754 23.2242C15.0345 22.9954 14.5065 22.9954 14.0644 23.2242L9.56716 25.5562C8.45599 26.1339 7.15643 25.2023 7.36918 23.9813L8.22658 19.0455C8.31117 18.5601 8.1484 18.0659 7.79083 17.7221L4.15232 14.2259C3.25262 13.3626 3.74733 11.8559 4.9905 11.6764L10.0221 10.9522C10.5156 10.8814 10.9423 10.5755 11.1628 10.1344L13.4107 5.6409C13.9669 4.52986 15.5728 4.52986 16.129 5.6409Z"
                  stroke="#F49200"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-lg font-medium">Top 5 Best Seller</h2>
          </div>

          <div className="scroll relative w-full overflow-y-scroll px-4 py-2 md:w-3/5">
            <ul className="flex flex-col gap-6 whitespace-nowrap text-base font-normal">
              <li className="flex gap-4">
                <span>1</span>
                <span>Augmentin 625 Duo Tablet</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>2</span>
                <span>Asifit Kaplet-Blister</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>3</span>
                <span>Asifit Kaplet-Blister</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>4</span>
                <span>Asifit Kaplet-Blister</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>5</span>
                <span>Asifit Kaplet-Blister</span>
              </li>
              <hr />
            </ul>
          </div>
        </div>
        <div className=" flex max-h-[170px] w-full justify-between gap-8 rounded-3xl border p-4  transition-colors duration-300 hover:border-primary hover:bg-primary hover:bg-opacity-10 md:w-1/2 md:px-8 md:py-6">
          <div className="flex w-2/5 items-center gap-4">
            <div className="flex items-center rounded-full bg-[#F0483E] bg-opacity-10 p-4">
              <svg
                width="23"
                height="28"
                viewBox="0 0 23 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.8451 26.62C11.8451 26.62 21.6104 23.5869 21.6104 15.2253C21.6104 6.86237 21.9642 6.20953 21.1801 5.40523C20.3973 4.60092 13.1256 2 11.8451 2C10.5646 2 3.2928 4.60092 2.50872 5.40523C1.72592 6.20953 2.07977 6.86237 2.07977 15.2253C2.07977 23.5869 11.8451 26.62 11.8451 26.62Z"
                  stroke="#F0483E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 18L8 10"
                  stroke="#F0483E"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 18L16 10"
                  stroke="#F0483E"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-lg font-medium">5 Product Less Popular</h2>
          </div>

          <div className="scroll relative w-3/5 overflow-y-scroll px-4 py-2">
            <ul className="flex flex-col gap-6 whitespace-nowrap text-base font-normal">
              <li className="flex gap-4">
                <span>1</span>
                <span>Aminofisin Hepar</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>2</span>
                <span>Tramadal 50 mg</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>3</span>
                <span>Desoxmentason Cream</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>4</span>
                <span>Asifit Kaplet-Blister</span>
              </li>
              <hr />
              <li className="flex gap-4">
                <span>5</span>
                <span>Asifit Kaplet-Blister</span>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-10 px-4 md:px-10">
        <Table
          paggination={{
            total: 10,
            page: 1,
            limit: 8,
            setLimit: (limit: number) => {
              console.log(limit);
            },
            setOffset: (offset: number) => {
              console.log(offset);
            },
          }}
        >
          <thead className="border-b ">
            <tr className="whitespace-nowrap">
              <th scope="col" className="px-6 py-3 ">
                No
              </th>
              <th scope="col" className="px-6 py-3 ">
                Medicine Code
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
                  <span>Unit</span>
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
                  <span>Sold Amount</span>
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
                  <span>Movement</span>
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
                Real Stock
              </th>
              <th scope="col" className="px-6 py-3 ">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {stockSold.map((stock, index) => (
              <tr
                key={index}
                className="h-10 whitespace-nowrap border text-center  font-normal "
              >
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{stock.code}</td>
                <td className="px-6 py-3">{stock.name}</td>
                <td className="px-6 py-3">{stock.unit}</td>
                <td className="px-6 py-3">{stock.soldAmount}</td>
                <td className="px-6 py-3">{stock.movement}</td>
                <td className="px-6 py-3">
                  Rp. {stock.totalSales.toLocaleString("id-ID")}
                </td>
                <td className="px-6 py-3">{stock.realStock}</td>
                <td className="px-6 py-3">
                  <Link
                    href={`/dashboard/stock/data/detail/${stock.name}`}
                    className="flex items-center gap-2"
                  >
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
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Page;
