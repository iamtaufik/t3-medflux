/* eslint-disable react/no-unescaped-entities */
"use client";
import Announcment from "@/components/Announcment";
import Card from "@/components/Card";
import Label from "@/components/Label";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { api } from "@/trpc/react";
import { LabelSkeleton, RecomendationSkeleton } from "@/components/Skeletons";
import { toast } from "react-toastify";

const Dashboard = () => {
  const router = useRouter();
  const [isNotify, setIsNotify] = useState<boolean>(true);
  const { data: medicine, isLoading, isError } = api.medicine.status.useQuery();

  if (isError) {
    toast.error("Error fetching data");
  }

  return (
    <>
      <div className="flex flex-col justify-between gap-4 px-4 md:flex-row md:items-center md:px-10">
        <div className="order-2 md:order-1">
          <h1 className="text-xl font-bold md:text-2xl">Dashboard</h1>
          <p className="text-base font-normal">
            A quick data overview of the inventory
          </p>
        </div>

        {isNotify && medicine?.isInventoryLow ? (
          <div className="order-1 flex items-center gap-2 rounded-lg border border-[#F5CE00] bg-[#F5CE00]  bg-opacity-10 p-2 transition duration-300 ease-in-out md:order-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-[#F5CE00]"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>

            <p>
              Your inventory is running low, it's time to restock the items now!{" "}
              <Link href="/dashboard/suppliers" className="font-bold">
                Restock Now
              </Link>
            </p>
            <div className="cursor-pointer" onClick={() => setIsNotify(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-4 w-4 font-bold text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        ) : (
          <div className="order-1 flex w-max items-center gap-2 rounded-2xl bg-primary p-2 text-white md:order-2">
            <div>
              <svg
                width="17"
                height="17"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.4774 9.81576H4.66406"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.4774 7.02474H4.66406"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.50073 4.23958H4.66406"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.60533 0.833008C9.60533 0.833008 4.48733 0.835674 4.47933 0.835674C2.63933 0.847008 1.5 2.05767 1.5 3.90434V10.035C1.5 11.891 2.648 13.1063 4.504 13.1063C4.504 13.1063 9.62133 13.1043 9.63 13.1043C11.47 13.093 12.61 11.8817 12.61 10.035V3.90434C12.61 2.04834 11.4613 0.833008 9.60533 0.833008Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span>Financial Report</span>
          </div>
        )}
      </div>
      <div className="my-6 flex w-full flex-col justify-between gap-6 px-4 md:flex-row md:px-10">
        {isLoading ? (
          <LabelSkeleton />
        ) : (
          <Label
            dataAos="fade-right"
            title="Drug Stock Sold"
            value={medicine?.sold.toLocaleString() ?? "0"}
            icon={
              <div className="flex items-center rounded-full bg-primary bg-opacity-10 p-4">
                <svg
                  width="22"
                  height="28"
                  viewBox="0 0 22 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary "
                >
                  <path
                    d="M9.00016 15.3337H5.66683V11.3337H9.00016V8.00033H13.0002V11.3337H16.3335V15.3337H13.0002V18.667H9.00016V15.3337ZM11.0002 0.666992L0.333496 4.66699V12.787C0.333496 19.5203 4.88016 25.8003 11.0002 27.3337C17.1202 25.8003 21.6668 19.5203 21.6668 12.787V4.66699L11.0002 0.666992ZM19.0002 12.787C19.0002 18.1203 15.6002 23.0537 11.0002 24.5603C6.40016 23.0537 3.00016 18.1337 3.00016 12.787V6.52033L11.0002 3.52033L19.0002 6.52033V12.787Z"
                    fill="#1B81B0"
                  />
                </svg>
              </div>
            }
            percentage="4.8%"
            onClick={() => router.push("/dashboard/medicine/stock-sold")}
          />
        )}

        {isLoading ? (
          <LabelSkeleton />
        ) : (
          <Label
            dataAos="fade-down"
            title="Medicine Available"
            value={medicine?.available.toLocaleString() ?? "0"}
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
        )}

        {isLoading ? (
          <LabelSkeleton />
        ) : (
          <Label
            dataAos="fade-left"
            title="Medicine Expired"
            value={medicine?.expired.toLocaleString() ?? "0"}
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
        )}
      </div>
      <div className="mb-10 flex w-full flex-col justify-between px-4 md:flex-row md:px-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold">Recommendations</h2>
          <p className="mt-2 text-base font-normal">
            Artificial Intelligence Analytics
          </p>
          <div className="my-2 flex flex-col">
            {isLoading && <RecomendationSkeleton />}

            {medicine?.alomostOutStock.map((medicine) => {
              return (
                <Card
                  key={medicine.medicineCode}
                  title={medicine.name}
                  quantity={medicine.stock}
                  distributors={["PT. Kimiafarma", "PBF Bali Jaya Farmasindo"]}
                  detailLink="#"
                />
              );
            })}

            {/* <Card
              title="Asifit Kaplet-Blister"
              quantity={9}
              distributors={["PT. Kimiafarma", "PBF Bali Jaya Farmasindo"]}
              detailLink="#"
            />
            <Card
              title="Fituno Kaplet-Blister"
              quantity={15}
              distributors={["PT. Kimiafarma", "PBF Bali Jaya Farmasindo"]}
              detailLink="#"
            /> */}
          </div>
        </div>
        <div className="w-full md:w-1/3 ">
          <h2 className="text-2xl font-bold">
            Announcement{" "}
            <span className="rounded-3xl bg-[#F0483E]  px-2 text-base text-white">
              2
            </span>
          </h2>
          <p className="mt-2 text-base font-normal">
            Let's check our recomendation
          </p>
          <div className="my-4 flex flex-col gap-6">
            <Announcment value="123" detail="Potential Loss Drugs" />
            <Announcment value="23" detail="Drugs Almost Expired" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
