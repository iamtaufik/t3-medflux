"use client";
import id from "date-fns/locale/id";
import { Card, DonutChart, AreaChart, DateRangePicker } from "@tremor/react";
import React, { type LegacyRef, useRef } from "react";
import { ShowModal } from "@/components/Modal";
import Label from "@/components/Label";
import { useRouter } from "next/navigation";
import { useReactToPrint } from "react-to-print";
import { api } from "@/trpc/react";

const disease = [
  {
    name: "Luka Bakar",
    value: 123,
  },
  {
    name: "Sakit Maag",
    value: 245,
  },
  {
    name: "Sakit Kepala",
    value: 200,
  },
  {
    name: "Sakit Gigi",
    value: 231,
  },
  {
    name: "Sakit Mata",
    value: 124,
  },
  {
    name: "Sakit Telinga",
    value: 111,
  },
  {
    name: "Sakit Perut",
    value: 150,
  },
  {
    name: "Lainnya",
    value: 235,
  },
];

const stocks = [
  {
    date: "1 Dec",
    value: 200,
  },
  {
    date: "2 Dec",
    value: 235,
  },
  {
    date: "3 Dec",
    value: 308,
  },
  {
    date: "4 Dec",
    value: 489,
  },
  {
    date: "5 Dec",
    value: 225,
  },
  {
    date: "6 Dec",
    value: 356,
  },
  {
    date: "7 Dec",
    value: 498,
  },
  {
    date: "8 Dec",
    value: 200,
  },
];

const ComponentToPrint = React.forwardRef(
  (props, ref: LegacyRef<HTMLDivElement>) => {
    const router = useRouter();

    const medicine = api.medicine.status.useQuery();

    return (
      <div ref={ref} className="flex flex-col">
        <div className="my-10 flex flex-col gap-8 px-4 md:flex-row md:px-10">
          <Label
            title="Medicine Available"
            value={medicine.data?.available.toString() ?? "0"}
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
            onClick={() => router.push("/dashboard/medicine/avaliable")}
            linkName="Check"
          />

          <div className=" flex max-h-[170px] w-full justify-between gap-8 rounded-3xl border p-4 transition-colors duration-300 hover:border-primary hover:bg-primary hover:bg-opacity-10 md:w-1/2 md:px-8 md:py-6">
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
                <li className="flex items-center gap-4">
                  <span>1</span>
                  <span>Aminofisin Hepar</span>
                  <span className="text-sm text-red-500">(01 Jan 2024)</span>
                </li>
                <hr />
                <li className="flex gap-4">
                  <span>2</span>
                  <span>Tramadal 50 mg</span>
                  <span className="text-sm text-red-500">(01 Jun 2024)</span>
                </li>
                <hr />
                <li className="flex gap-4">
                  <span>3</span>
                  <span>Desoxmentason Cream</span>
                  <span className="text-sm text-red-500">(01 Aug 2024)</span>
                </li>
                <hr />
                <li className="flex gap-4">
                  <span>4</span>
                  <span>Asifit Kaplet-Blister</span>
                  <span className="text-sm text-red-500">(01 Dec 2024)</span>
                </li>
                <hr />
                <li className="flex gap-4">
                  <span>5</span>
                  <span>Asifit Kaplet-Blister</span>
                  <span className="text-sm text-red-500">(01 Nov 2024)</span>
                </li>
                <hr />
              </ul>
            </div>
          </div>

          <Label
            title="Medicine Expired"
            value={medicine.data?.expired.toString() ?? "0"}
            icon={
              <div className="flex items-center rounded-full bg-[#F0483E] bg-opacity-10 p-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                >
                  <path
                    d="M16.0002 7.98699L26.0402 25.3337H5.96016L16.0002 7.98699ZM16.0002 2.66699L1.3335 28.0003H30.6668L16.0002 2.66699ZM17.3335 21.3337H14.6668V24.0003H17.3335V21.3337ZM17.3335 13.3337H14.6668V18.667H17.3335V13.3337Z"
                    fill="#F0483E"
                  />
                </svg>
              </div>
            }
            onClick={() => router.push("/dashboard/medicine/expired")}
            linkName="Check"
          />
        </div>
        <div className="mb-10 flex flex-col justify-between gap-8 px-4 md:flex-row md:px-10">
          <Card className="md:w-1/3">
            <h2 className="text-xl font-bold md:text-2xl">
              Distribution of Disease
            </h2>
            <DonutChart
              className="mt-6 h-[250px]"
              data={disease}
              category="value"
              index="name"
              valueFormatter={(val) => `${val.toString()}%`}
              colors={[
                "blue",
                "cyan",
                "fuchsia",
                "orange",
                "green",
                "red",
                "yellow",
                "purple",
              ]}
              showLabel={true}
              variant="pie"
              showAnimation={true}
            />
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm">
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#3b82f6] "></span>{" "}
                Luka Bakar
              </p>
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#06b6d4] "></span>{" "}
                Sakit Maag
              </p>
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#d946ef] "></span>{" "}
                Sakit Kepala
              </p>
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#f97316] "></span>{" "}
                Sakit Gigi
              </p>
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#22c55e] "></span>{" "}
                Sakit Mata
              </p>
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#ef4444] "></span>{" "}
                Sakit Telinga
              </p>
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#eab308] "></span>{" "}
                Sakit Perut
              </p>
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#a855f7] "></span>{" "}
                Lainnya
              </p>
            </div>
          </Card>
          <Card className="md:w-2/3">
            <h2 className="text-xl font-bold md:text-2xl">Stock - History</h2>
            <div className="my-4 flex w-full justify-end gap-2">
              <div className="w-full max-w-xs">
                <DateRangePicker
                  className="w-full "
                  locale={id}
                  defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }}
                  enableSelect={false}
                  placeholder="Date Range"
                />
              </div>
            </div>
            <AreaChart
              className="mt-4 h-72"
              data={stocks}
              index="date"
              categories={["value"]}
              colors={["cyan"]}
              valueFormatter={(value: number) => value.toString()}
              showAnimation={true}
              curveType="natural"
            />
            <div className="mt-4 flex items-center justify-center gap-2 rounded-xl  bg-[#E95D32] bg-opacity-10 py-2 text-[#E95D32]">
              <div className="rounded-full bg-[#E95D32] p-1 text-white">
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
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </div>
              <p className="w-max">
                <span className="font-bold">Diarrhea</span> casses increase in
                your area! Check{" "}
                <a href="" className="underline">
                  <span className="font-bold">Imodium</span> stock avability now
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    );
  },
);

const Page = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const handleAddStock = () => {
    ShowModal();
  };
  return (
    <>
      <div className="flex flex-col justify-between gap-4 px-4 md:flex-row md:items-center md:px-10">
        <div>
          <h1 className="text-xl font-bold md:text-2xl">Stock</h1>
          <p className="text-base font-normal">
            Stock of medicines availabel for sales
          </p>
        </div>
        <div className=" flex justify-between gap-4 md:justify-normal">
          <button
            onClick={handlePrint}
            className="flex gap-2 rounded-3xl border border-primary px-4 py-2 text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
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
            onClick={handleAddStock}
            className="flex items-center gap-2 rounded-3xl border border-primary bg-primary px-4 py-2 text-white transition-colors duration-300 hover:bg-[#13668D] hover:text-white"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1429 6.85714H6.85714V11.1429C6.85714 11.6143 6.47143 12 6 12C5.52857 12 5.14286 11.6143 5.14286 11.1429V6.85714H0.857143C0.385714 6.85714 0 6.47143 0 6C0 5.52857 0.385714 5.14286 0.857143 5.14286H5.14286V0.857143C5.14286 0.385714 5.52857 0 6 0C6.47143 0 6.85714 0.385714 6.85714 0.857143V5.14286H11.1429C11.6143 5.14286 12 5.52857 12 6C12 6.47143 11.6143 6.85714 11.1429 6.85714Z"
                fill="white"
              />
            </svg>
            <span>Add Stock</span>
          </button>
        </div>
      </div>
      <ComponentToPrint ref={componentRef} />
    </>
  );
};

export default Page;
