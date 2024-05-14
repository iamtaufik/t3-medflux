"use client";
import { DetailMedicalSkeleton } from "@/components/Skeletons";
import Table from "@/components/Table";
import { api } from "@/trpc/react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import Link from "next/link";
import React from "react";

const distributorsData = [
  {
    name: "PT. Indofarma G.M",
    distance: "1.2 km",
    address: "JL. Kaliurang KM 5,5",
    stock: "Rp. 1,245,000",
  },
  {
    name: "PT. Indofarma G.M",
    distance: "1.2 km",
    address: "JL. Kaliurang KM 5,5",
    stock: "Rp. 1,245,000",
  },
  {
    name: "PT. Indofarma G.M",
    distance: "1.2 km",
    address: "JL. Kaliurang KM 5,5",
    stock: "Rp. 1,245,000",
  },
  {
    name: "PT. Indofarma G.M",
    distance: "1.2 km",
    address: "JL. Kaliurang KM 5,5",
    stock: "Rp. 1,245,000",
  },
  {
    name: "PT. Indofarma G.M",
    distance: "1.2 km",
    address: "JL. Kaliurang KM 5,5",
    stock: "Rp. 1,245,000",
  },
  {
    name: "PT. Indofarma G.M",
    distance: "1.2 km",
    address: "JL. Kaliurang KM 5,5",
    stock: "Rp. 1,245,000",
  },
];

const Page = ({ params }: { params: { code: string } }) => {
  const code = params.code;

  const {
    data: medicine,
    isError,
    isLoading,
  } = api.medicine.getDetail.useQuery({ code });

  if (isError) {
    throw new Error("Medicine not found");
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
  });
  return (
    <>
      <div className="px-4 md:px-10">
        <h1 className="text-xl font-bold md:text-2xl">
          <Link className="text-gray-300" href={"/dashboard/stock"}>
            Stock
          </Link>
          <span className="text-gray-300">{">"}</span>
          <Link className="text-gray-300" href={"/dashboard/stock/data"}>
            Data Stock
          </Link>
          {">"}
          <span className="text-black">Stock Detail Product</span>
        </h1>
        <p className="text-base font-normal">
          Detail information of medicines for sales
        </p>
      </div>
      <div className="my-10 flex flex-col gap-10 px-4 md:flex-row md:px-10">
        <div className="h-full w-full rounded-xl border md:w-1/2">
          <h2 className="px-6 py-4 text-xl font-semibold">
            Detail Product Information
          </h2>
          <hr />
          <ul className="flex flex-col justify-between">
            <li className="flex justify-between px-6 py-4">
              {isLoading ? (
                <DetailMedicalSkeleton />
              ) : (
                <>
                  <span>Medicine Name</span>
                  <span>{medicine?.name}</span>
                </>
              )}
            </li>
            <hr />
            <li className="flex justify-between px-6 py-4">
              {isLoading ? (
                <DetailMedicalSkeleton />
              ) : (
                <>
                  <span>Medicine Code</span>
                  <span className="font-semibold text-cyan-500">
                    {medicine?.medicineCode}
                  </span>
                </>
              )}
            </li>
            <hr />
            <li className="flex justify-between px-6 py-4">
              {isLoading ? (
                <DetailMedicalSkeleton />
              ) : (
                <>
                  <span>Disease</span>
                  <span>{medicine?.disease}</span>
                </>
              )}
            </li>
            <hr />
            <li className="flex justify-between px-6 py-4">
              {isLoading ? (
                <DetailMedicalSkeleton />
              ) : (
                <>
                  <span>Entry Date</span>
                  <span>{medicine?.entryDate.toDateString()}</span>
                </>
              )}
            </li>
            <hr />
            <li className="flex justify-between px-6 py-4">
              {isLoading ? (
                <DetailMedicalSkeleton />
              ) : (
                <>
                  <span>Last Check Date</span>
                  <span>{medicine?.lastCheckDate.toDateString()}</span>
                </>
              )}
            </li>
            <hr />
            <li className="flex justify-between px-6 py-4">
              {isLoading ? (
                <DetailMedicalSkeleton />
              ) : (
                <>
                  <span>Expired Date</span>
                  <span>{medicine?.expiryDate.toDateString()}</span>
                </>
              )}
            </li>
            <hr />
            <li className="flex justify-between px-6 py-4">
              {isLoading ? (
                <DetailMedicalSkeleton />
              ) : (
                <>
                  <span>The Real Stock</span>
                  <span>{medicine?.stock}</span>
                </>
              )}
            </li>
            <hr />
            <li className="flex justify-between px-6 py-4">
              {isLoading ? (
                <DetailMedicalSkeleton />
              ) : (
                <>
                  <span>Max Capacity</span>
                  <span>{medicine?.maxStock}</span>
                </>
              )}
            </li>
          </ul>
        </div>
        <div className="w-full rounded-xl border px-6 pb-6 md:w-1/2">
          <h2 className="py-4 text-xl  font-bold">
            Recomendation Distributors
          </h2>
          <div className="mb-4 flex w-full justify-end gap-2">
            <div>
              <button className="rounded-3xl border px-4 py-2">
                View Full Map
              </button>
            </div>
          </div>
          <div className="h-[380px] w-full">
            {isLoaded && (
              <GoogleMap
                center={{
                  lat: -7.75986442382859,
                  lng: 110.40902667419697,
                }}
                zoom={13}
                mapContainerStyle={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <MarkerF
                  position={{ lat: -7.75986442382859, lng: 110.40902667419697 }}
                />
              </GoogleMap>
            )}
          </div>
        </div>
      </div>
      <div className="mb-10 px-4 md:px-10">
        <Table
          paggination={{
            total: 10,
            page: 1,
            limit: 10,
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
                <div className="flex items-center justify-center gap-1 ">
                  <span>Distributor</span>
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
                  <span>Distance</span>
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
                  <span>Address</span>
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
                  <span>Stock</span>
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
            {distributorsData.map((data, index) => (
              <tr
                key={index}
                className="whitespace-nowrap border text-center font-normal"
              >
                <td scope="col" className="px-6 py-3 ">
                  {index + 1}
                </td>
                <td scope="col" className="px-6 py-3 ">
                  {data.name}
                </td>
                <td scope="col" className="px-6 py-3 ">
                  {data.distance}
                </td>
                <td scope="col" className="px-6 py-3 ">
                  {data.address}
                </td>
                <td scope="col" className="px-6 py-3 ">
                  {data.stock}
                </td>
                <td scope="col" className="px-6 py-3 ">
                  <button className="rounded-full bg-primary px-4 py-2 text-white">
                    Buy Now
                  </button>
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
