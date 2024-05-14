"use client";
import React, { useState } from "react";

interface IProps {
  title: string;
  quantity: number;
  distributors: string[];
  detailLink: string;
}

const Card = ({ title, quantity, distributors, detailLink }: IProps) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  return (
    <>
      <div className="flex flex-col" data-aos="fade-right">
        <div className="flex items-center justify-between py-6">
          <div className="flex gap-4">
            <div className="flex items-center rounded-full bg-primary bg-opacity-10 p-2">
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
            <div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-base">
                Left <span className="font-bold">{quantity}</span> in your
                inventory
              </p>
            </div>
          </div>
          <div
            onClick={() => setShowDetail(!showDetail)}
            className="cursor-pointer"
          >
            {showDetail ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 28 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 14.5L12.9702 2.65223C13.7842 1.77309 15.1832 1.80205 15.9602 2.71411L26 14.5"
                  stroke="#1B81B0"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M15 1.5L8 8.5L1 1.5"
                  stroke="#130F26"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        {showDetail && (
          <div className="mb-4 ml-16 flex flex-col gap-4">
            <div className="flex gap-7">
              <p className="font-light text-gray-400">Distributors: </p>
              <ul className="flex list-disc flex-wrap gap-8 text-primary underline">
                {distributors.map((distributor, i) => {
                  return <li key={i}>{distributor}</li>;
                })}
              </ul>
            </div>
            <div>
              <button className="flex cursor-pointer items-center gap-2 rounded-3xl border border-primary p-1 px-2 text-primary">
                Detail
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    d="M7.58317 2.91699L11.6665 7.00033L7.58317 11.0837M2.9165 2.91699L6.99984 7.00033L2.9165 11.0837"
                    stroke="#1B81B0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}

        <hr />
      </div>
    </>
  );
};

export default Card;
