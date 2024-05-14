import React from "react";

export const LabelSkeleton = () => {
  return (
    <div
      role="status"
      className="min-h-max w-full space-y-7 rounded-3xl border p-4  md:w-1/3 md:px-8 md:py-6"
    >
      <div className="mb-2 flex animate-pulse  items-center gap-4 whitespace-nowrap ">
        <div className="flex items-center justify-center  rounded-full bg-gray-300 p-4  dark:bg-gray-700">
          <svg
            width="28"
            height="28"
            className=" text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="h-3 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="w-full">
        <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export const RecomendationSkeleton = () => {
  return (
    <>
      <div role="status" className=" space-y-3">
        <div className="flex items-center gap-4 py-6">
          <div className="mb-2 flex  animate-pulse items-center whitespace-nowrap">
            <div className="flex items-center justify-center  rounded-full bg-gray-300 p-3  dark:bg-gray-700">
              <svg
                width="22"
                height="22"
                className=" text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-4 h-3 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-2.5 h-2 w-64 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
        <hr />
      </div>
      <div role="status" className=" space-y-3">
        <div className="flex items-center gap-4 py-6">
          <div className="mb-2 flex  animate-pulse items-center whitespace-nowrap">
            <div className="flex items-center justify-center  rounded-full bg-gray-300 p-3  dark:bg-gray-700">
              <svg
                width="22"
                height="22"
                className=" text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
          <div className="w-full">
            <div className="mb-4 h-3 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-2.5 h-2 w-64 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
        <hr />
      </div>
    </>
  );
};

export const DetailMedicalSkeleton = () => {
  return (
    <>
      <div className=" animate-pulse  py-2">
        <div className="h-3 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className=" animate-pulse py-2">
        <div className="h-3 w-40 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </>
  );
};
