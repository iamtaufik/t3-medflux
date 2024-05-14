"use client";
import Label from "@/components/Label";
import Table from "@/components/Table";
import { api } from "@/trpc/react";
import Link from "next/link";
import React from "react";

const stocks = [
  {
    code: "OB12121219",
    name: "Vitamin B Complex",
    disease: "Suplemen Vitamin K",
    price: 100000,
    unit: "ST30",
    enter: "01-Jul-2023",
    check: "09-Aug-2023",
    expired: "01-Jan-2024",
    remain: 148,
    stockSystem: 150,
    stockReal: 150,
  },
  {
    code: "OB12121219",
    name: "Augmentin 6250 Duo Tablet",
    disease: "Suplemen Vitamin K",
    price: 208000,
    unit: "ST30",
    enter: "01-Jul-2023",
    check: "09-Aug-2023",
    expired: "01-Jan-2024",
    remain: 148,
    stockSystem: 150,
    stockReal: 150,
  },
  {
    code: "OB12121219",
    name: "Augmentin 6250 Duo Tablet",
    disease: "Suplemen Vitamin K",
    price: 208000,
    unit: "ST30",
    enter: "01-Jul-2023",
    check: "09-Aug-2023",
    expired: "01-Jan-2024",
    remain: 148,
    stockSystem: 150,
    stockReal: 150,
  },
  {
    code: "OB17298127",
    name: "Augmentin 6250 Duo Tablet",
    disease: "Suplemen Vitamin K",
    price: 200000,
    unit: "ST30",
    enter: "01-Jul-2023",
    check: "09-Aug-2023",
    expired: "01-Jan-2024",
    remain: 200,
    stockSystem: 200,
    stockReal: 200,
  },
  {
    code: "OB12121219",
    name: "Augmentin 6250 Duo Tablet",
    disease: "Suplemen Vitamin K",
    price: 208000,
    unit: "ST30",
    enter: "01-Jul-2023",
    check: "09-Aug-2023",
    expired: "01-Jan-2024",
    remain: 148,
    stockSystem: 150,
    stockReal: 150,
  },
  {
    code: "OB17298127",
    name: "Augmentin 6250 Duo Tablet",
    disease: "Suplemen Vitamin K",
    price: 200000,
    unit: "ST30",
    enter: "01-Jul-2023",
    check: "09-Aug-2023",
    expired: "01-Jan-2024",
    remain: 200,
    stockSystem: 200,
    stockReal: 200,
  },
  {
    code: "OB12121219",
    name: "Augmentin 6250 Duo Tablet",
    disease: "Suplemen Vitamin K",
    price: 208000,
    unit: "ST30",
    enter: "01-Jul-2023",
    check: "09-Aug-2023",
    expired: "01-Jan-2024",
    remain: 148,
    stockSystem: 150,
    stockReal: 150,
  },
  {
    code: "OB17298127",
    name: "Augmentin 6250 Duo Tablet",
    disease: "Suplemen Vitamin K",
    price: 202120,
    unit: "ST30",
    enter: "01-Jul-2023",
    check: "09-Aug-2023",
    expired: "01-Jan-2024",
    remain: 200,
    stockSystem: 200,
    stockReal: 200,
  },
];

const Page = () => {
  const medicines = api.medicine.getAll.useQuery();
  return (
    <>
      <div className="flex flex-col justify-between gap-4 px-4 md:flex-row md:items-center md:px-10">
        <div>
          <h1 className="text-xl font-bold md:text-2xl">
            <Link className="text-gray-300" href={"/dashboard"}>
              Dashboard
            </Link>
            {">"}
            <span className="text-black">Medicine Available</span>
          </h1>
          <p className="text-base font-normal">
            List of medicines that avaliable
          </p>
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
      <div className="my-10 flex flex-col gap-8 px-4 md:flex-row md:px-10">
        <Label
          title="Medicine Available"
          value="312"
          icon={
            <div className="flex items-center rounded-full bg-primary bg-opacity-10 p-4">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
              >
                <path
                  d="M24.6665 6.00033H19.3332V3.33366C19.3332 1.86699 18.1332 0.666992 16.6665 0.666992H11.3332C9.8665 0.666992 8.6665 1.86699 8.6665 3.33366V6.00033H3.33317C1.8665 6.00033 0.666504 7.20033 0.666504 8.66699V24.667C0.666504 26.1337 1.8665 27.3337 3.33317 27.3337H24.6665C26.1332 27.3337 27.3332 26.1337 27.3332 24.667V8.66699C27.3332 7.20033 26.1332 6.00033 24.6665 6.00033ZM11.3332 3.33366H16.6665V6.00033H11.3332V3.33366ZM24.6665 24.667H3.33317V8.66699H24.6665V24.667Z"
                  fill="#03A9F5"
                />
                <path
                  d="M15.3332 11.334H12.6665V15.334H8.6665V18.0007H12.6665V22.0007H15.3332V18.0007H19.3332V15.334H15.3332V11.334Z"
                  fill="#03A9F5"
                />
              </svg>
            </div>
          }
        />
        <AlmostExpiredMedicine />
      </div>
      <div className="px-4 md:px-10">
        <Table
          paggination={{
            total: 10,
            page: 1,
            limit: 8,
            setLimit: (limit: number) => {console.log(limit)},
            setOffset: (offset: number) => {console.log(offset)},
          }}
        >
          <thead className="border-b">
            <tr className="whitespace-nowrap">
              <th scope="col" className="px-6 py-3 ">
                No
              </th>
              <th scope="col" className="px-6 py-3 ">
                Medicine Code
              </th>
              <th scope="col" className="px-6 py-3 ">
                Medicine Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Disease
              </th>
              <th scope="col" className="px-6 py-3 ">
                Purchase Price
              </th>
              <th scope="col" className="px-6 py-3 ">
                Unit
              </th>
              <th scope="col" className="px-6 py-3 ">
                Enter
              </th>
              <th scope="col" className="px-6 py-3 ">
                Check
              </th>
              <th scope="col" className="px-6 py-3 ">
                Expired
              </th>
              <th scope="col" className="px-6 py-3 ">
                Remain
              </th>
              <th scope="col" className="px-6 py-3 ">
                Stock on System
              </th>
              <th scope="col" className="px-6 py-3 ">
                Real Stock
              </th>
              <th scope="col" className="px-6 py-3 ">
                Detail
              </th>
            </tr>
          </thead>
          <tbody>
            {medicines.data?.map((medicine, index) => (
              <tr
                key={index}
                className="h-10 whitespace-nowrap border text-center  font-normal "
              >
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{medicine.medicineCode}</td>
                <td className="px-6 py-3">{medicine.name}</td>
                <td className="px-6 py-3">{medicine.disease}</td>
                <td className="px-6 py-3">
                  Rp. {medicine.price.toLocaleString("id-ID")}
                </td>
                <td className="px-6 py-3">{medicine.unit}</td>
                <td className="px-6 py-3">
                  {medicine.entryDate.toLocaleDateString()}
                </td>
                <td className="px-6 py-3">
                  {medicine.lastCheckDate.toLocaleDateString()}
                </td>
                <td className="px-6 py-3">
                  {medicine.expiryDate.toLocaleDateString()}
                </td>
                <td className="px-6 py-3">{medicine.stock}</td>
                <td className="px-6 py-3">{medicine.maxStock}</td>
                <td className="px-6 py-3">{medicine.maxStock}</td>
                <td className="px-6 py-3">
                  <Link
                    href={`/dashboard/stock/data/detail/${medicine.medicineCode}`}
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

const AlmostExpiredMedicine = () => {
  const { data: medicines } = api.medicine.almostExpired.useQuery();

  return (
    <div className=" flex max-h-[170px] w-full justify-between gap-8 rounded-3xl border px-8 py-6 transition-colors duration-300 hover:border-primary hover:bg-primary hover:bg-opacity-10 md:w-1/2">
      <div className="flex w-4/12 items-center gap-4 md:gap-10">
        <div className="flex items-center rounded-full bg-[#F5CE00] bg-opacity-10 p-4">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.1044 3.38477H9.43431C5.71596 3.38477 3.38477 6.01752 3.38477 9.74325V19.7967C3.38477 23.5224 5.70489 26.1552 9.43431 26.1552H20.1032C23.8338 26.1552 26.1552 23.5224 26.1552 19.7967V9.74325C26.1552 6.01752 23.8338 3.38477 20.1044 3.38477Z"
              stroke="#F5CE00"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7634 19.6929V14.7695"
              stroke="#F5CE00"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.7572 10.0978H14.7695"
              stroke="#F5CE00"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-lg font-medium">Almost Expired</h2>
      </div>

      <div className="scroll relative w-8/12 overflow-y-scroll px-4 py-2">
        <ul className="flex flex-col gap-6 text-base font-normal ">
          {medicines?.map((medicine, index) => (
            <>
              <li key={index} className="flex items-center gap-4">
                <span>{index + 1}</span>
                <span>{medicine.name}</span>
                <span className="text-sm text-red-500">
                  ({medicine.expiryDate.toLocaleDateString()})
                </span>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
