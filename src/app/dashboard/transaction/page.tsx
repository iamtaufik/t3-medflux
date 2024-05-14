"use client";
import Label from "@/components/Label";
import id from "date-fns/locale/id";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import {
  Card,
  DonutChart,
  DatePicker,
  AreaChart,
  BarChart,
  DateRangePicker,
  SearchSelect,
  SearchSelectItem,
  LineChart,
  type CustomTooltipProps,
} from "@tremor/react";
import React, { type LegacyRef, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { api } from "@/trpc/react";
import { LabelSkeleton } from "@/components/Skeletons";
import { toast } from "react-toastify";

const genders = [
  { name: "Laki - Laki", value: 40 },
  { name: "Perempuan", value: 60 },
];

const transactions = [
  {
    date: "1 Dec",
    value: 24,
  },
  {
    date: "2 Dec",
    value: 33,
  },
  {
    date: "3 Dec",
    value: 57,
  },
  {
    date: "4 Dec",
    value: 62,
  },
  {
    date: "5 Dec",
    value: 40,
  },
  {
    date: "6 Dec",
    value: 21,
  },
  {
    date: "7 Dec",
    value: 30,
  },
  {
    date: "8 Dec",
    value: 18,
  },
];

const payments = [
  {
    name: "Qris",
    value: 26.3,
  },
  {
    name: "Kredit",
    value: 25.7,
  },
  {
    name: "Transfer",
    value: 25.3,
  },
  {
    name: "Tunai",
    value: 22.8,
  },
];

const buyerDiseases = [
  {
    name: "Diare",
    value: 260,
  },
  {
    name: "Hipertensi",
    value: 213,
  },
  {
    name: "Nyeri",
    value: 255,
  },
  {
    name: "Infeksi Kulit",
    value: 111,
  },
  {
    name: "Infeksi Bakteri",
    value: 125,
  },
  {
    name: "Gangguan Pernaafsan",
    value: 127,
  },
  {
    name: "Pascaoperasi",
    value: 158,
  },
];

const positions = [
  {
    lat: -7.797068,
    lng: 110.370529,
  },
  {
    lat: -7.797667547998971,
    lng: 110.36837653846591,
  },
];

const chartdata = [
  {
    month: "Jul",
    profit: 1000000,
  },
  {
    month: "Aug",
    profit: 2000000,
  },
  {
    month: "Sep",
    profit: 3500000,
  },
  {
    month: "Oct",
    profit: 3000000,
  },
  {
    month: "Nov",
    profit: 4500000,
  },
  {
    month: "Dec",
    profit: 6000000,
  },
];

const valueFormatter = (value: number) => {
  return `${value.toString()}%`;
};

const ComponentToPrint = React.forwardRef(
  (props, ref: LegacyRef<HTMLDivElement>) => {
    const [markers, setMarkers] = useState(positions);
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: String(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY),
    });

    const {
      data: transactionStatus,
      isLoading,
      isError,
    } = api.transaction.status.useQuery();

    const {
      data: profits
    } = api.transaction.profit.useQuery({
      start: "2017-01-01",
      end: "2017-12-31",
    });
    console.log(profits)
    if (isError) {
      toast.error("Error fetching data");
    }

    return (
      <div ref={ref} className="flex flex-col">
        <div className="my-10 flex flex-col gap-8 px-4 text-black md:flex-row md:px-10">
          {isLoading ? (
            <LabelSkeleton />
          ) : (
            <Label
              dataAos="fade-right"
              title="Total Revenue"
              value={`Rp. ${transactionStatus?.revenue.toLocaleString("id-ID")}`}
              icon={
                <div className="flex items-center rounded-full bg-[#FFA800] bg-opacity-10 p-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.4624 17.0242L11.8631 12.6044L15.7421 15.6515L19.07 11.3564"
                      stroke="#FFA800"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="22.949"
                      cy="5.00227"
                      r="2.18391"
                      stroke="#FFA800"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.1874 3.77539H8.93018C5.50872 3.77539 3.38721 6.19849 3.38721 9.61995V18.8028C3.38721 22.2242 5.46712 24.6369 8.93018 24.6369H18.7058C22.1272 24.6369 24.2488 22.2242 24.2488 18.8028V10.8055"
                      stroke="#FFA800"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              }
            />
          )}

          {isLoading ? (
            <LabelSkeleton />
          ) : (
            <Label
              dataAos="fade-down"
              title="Total Expenses"
              value="Rp. 9.400.500"
              icon={
                <div className="flex items-center rounded-full bg-[#FFA800] bg-opacity-10 p-4">
                  <svg
                    width="30"
                    height="22"
                    viewBox="0 0 30 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.3335 13.6663V2.99967C24.3335 1.53301 23.1335 0.333008 21.6668 0.333008H3.00016C1.5335 0.333008 0.333496 1.53301 0.333496 2.99967V13.6663C0.333496 15.133 1.5335 16.333 3.00016 16.333H21.6668C23.1335 16.333 24.3335 15.133 24.3335 13.6663ZM21.6668 13.6663H3.00016V2.99967H21.6668V13.6663ZM12.3335 4.33301C10.1202 4.33301 8.3335 6.11967 8.3335 8.33301C8.3335 10.5463 10.1202 12.333 12.3335 12.333C14.5468 12.333 16.3335 10.5463 16.3335 8.33301C16.3335 6.11967 14.5468 4.33301 12.3335 4.33301ZM29.6668 4.33301V18.9997C29.6668 20.4663 28.4668 21.6663 27.0002 21.6663H4.3335C4.3335 20.333 4.3335 20.4663 4.3335 18.9997H27.0002V4.33301C28.4668 4.33301 28.3335 4.33301 29.6668 4.33301Z"
                      fill="#FFA800"
                    />
                  </svg>
                </div>
              }
            />
          )}

          {isLoading ? (
            <LabelSkeleton />
          ) : (
            <Label
              dataAos="fade-left"
              title="Drug Stock Sold"
              value={`${transactionStatus?.sold.toLocaleString()}`}
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
              linkName="View Detail"
            />
          )}
        </div>
        <div
          id="element-to-print"
          className="flex flex-col gap-8 px-4 md:flex-row md:px-10"
        >
          <Card className="w-full md:w-1/3" data-aos="fade-right">
            <h2 className="text-xl font-semibold md:text-2xl">
              Monthly Activities
            </h2>
            <div className="my-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium md:text-xl">
                    Total Profit
                  </h3>
                  <div className=" flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4  text-[#0A9D4C]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                    <p className="font-semibold text-[#0A9D4C]">2.5%</p>
                  </div>
                </div>
                <h2 className="text-3xl font-semibold">Rp. 3.341.888</h2>
                <p className="text-xl font-semibold text-gray-300">
                  Result Obtained in December
                </p>
                <hr />
              </div>
              <div className="flex flex-col gap-4">
                <hr />
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold md:text-2xl">
                    Cost Saving
                  </h3>
                  <div className=" flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-4 w-4  text-[#0A9D4C]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                    <p className="font-semibold text-[#0A9D4C]">1.5%</p>
                  </div>
                </div>
                <h2 className="text-3xl font-semibold">Rp. 2.253.000</h2>
                <p className="text-xl font-semibold text-gray-300">
                  Maximize cost efficiency
                </p>
              </div>
            </div>
          </Card>
          <Card className="w-full md:w-2/3" data-aos="fade-left">
            <h2 className="text-xl font-bold md:text-2xl">Profit Chart</h2>
            <div className="my-4 flex w-full justify-end gap-2">
              <div>
                <DatePicker
                  className="max-w-min"
                  locale={id}
                  defaultValue={new Date()}
                  placeholder="Date Range"
                />
              </div>
            </div>
            <LineChart
              data={chartdata}
              index="month"
              categories={["profit"]}
              colors={["blue"]}
              yAxisWidth={100}
              customTooltip={customTooltip}
              valueFormatter={(val) => `Rp. ${val / 1000000} Milion`}
            />
          </Card>
        </div>
        <div className="my-10 flex flex-col gap-8 px-4 md:flex-row md:px-10">
          <Card className="md:w-1/3" data-aos='fade-up'>
            <h2 className="text-xl font-bold md:text-2xl">Gender</h2>
            <DonutChart
              className="mt-6 h-[250px]"
              data={genders}
              category="value"
              index="name"
              valueFormatter={valueFormatter}
              colors={["blue", "cyan"]}
              showLabel={false}
              variant="donut"
              showAnimation={true}
            />
            <div className="mt-4 flex items-center justify-center gap-4 text-sm">
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#3b82f6] "></span>{" "}
                Laki- Laki
              </p>
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#06b6d4] "></span>{" "}
                Perempuan
              </p>
            </div>
          </Card>
          <Card className="md:w-2/3" data-aos='fade-down'>
            <h2 className="text-xl font-bold md:text-2xl">
              Transaction - Time Series
            </h2>
            <div className="my-4 flex w-full flex-col justify-end gap-2 md:flex-row">
              <div>
                <DateRangePicker
                  className="max-w-min"
                  locale={id}
                  defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }}
                  enableSelect={false}
                  placeholder="Date Range"
                />
              </div>
              <div className="max-w-md">
                <SearchSelect placeholder="Drug Name">
                  <SearchSelectItem value="1">Paracetamol</SearchSelectItem>
                  <SearchSelectItem value="2">Ambroxol</SearchSelectItem>
                  <SearchSelectItem value="3">CTM</SearchSelectItem>
                </SearchSelect>
              </div>
            </div>
            <AreaChart
              className="mt-4 h-72"
              data={transactions}
              index="date"
              categories={["value"]}
              colors={["cyan"]}
              valueFormatter={(value: number) => value.toString()}
              showAnimation={true}
              curveType="natural"
            />
          </Card>
        </div>
        <div className="flex flex-col gap-8 px-4 md:flex-row md:px-10">
          <Card className="md:w-1/3">
            <h2 className="text-xl font-bold md:text-2xl">Payment Method</h2>
            <DonutChart
              className="mt-6 h-[250px]"
              data={payments}
              category="value"
              index="name"
              valueFormatter={valueFormatter}
              colors={["blue", "cyan", "fuchsia", "orange"]}
              showLabel={true}
              variant="pie"
              showAnimation={true}
            />
            <div className="mt-4 flex items-center justify-center gap-4 text-sm">
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#3b82f6] "></span>{" "}
                Qris
              </p>
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#06b6d4] "></span>{" "}
                Kredit
              </p>
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#d946ef] "></span>{" "}
                Transfer
              </p>
              <p className="flex items-center gap-2 text-center">
                <span className="inline-block h-4 w-4 bg-[#f97316] "></span>{" "}
                Tunai
              </p>
            </div>
          </Card>
          <Card className="md:w-2/3">
            <h2 className="text-xl font-bold  md:text-2xl">
              Transaction - Buyer Disease
            </h2>
            <div className="my-4 flex w-full justify-end gap-2">
              <div>
                <DateRangePicker
                  className="max-w-min"
                  locale={id}
                  defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }}
                  enableSelect={false}
                  placeholder="Date Range"
                />
              </div>
            </div>
            <BarChart
              className="mt-6"
              data={buyerDiseases}
              index="name"
              categories={["value"]}
              colors={["blue"]}
              valueFormatter={(val) => val.toString()}
            />
          </Card>
        </div>
        <div className="my-10 px-4 md:px-10">
          <Card>
            <h2 className="text-xl font-bold  md:text-2xl">
              Transaction - Buyer Disease
            </h2>
            <div className="my-4 flex w-full justify-end gap-2">
              <div>
                <button className="rounded-3xl border px-4 py-2">
                  View Full Map
                </button>
              </div>
            </div>
            <div className="h-[450px] w-full">
              {isLoaded && (
                <GoogleMap
                  center={{
                    lat: -7.797068,
                    lng: 110.370529,
                  }}
                  zoom={13}
                  mapContainerStyle={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {markers.map((marker, index) => (
                    <MarkerF
                      key={index}
                      position={{ lat: marker.lat, lng: marker.lng }}
                      icon={{
                        url: "/marker.png",
                      }}
                    />
                  ))}
                </GoogleMap>
              )}
            </div>
          </Card>
        </div>
      </div>
    );
  },
);

const customTooltip = ({ payload, active }: CustomTooltipProps) => {
  if (!active || !payload) return null;
  return (
    <div className="rounded-tremor-default border border-tremor-border bg-tremor-content-emphasis px-4 py-2 text-tremor-default shadow-tremor-dropdown ">
      {payload.map((category, idx: number) => (
        <div key={idx}>
          <p className="font-medium text-tremor-background ">
            Rp. {category.value?.toLocaleString("id-ID")}{" "}
          </p>
        </div>
      ))}
    </div>
  );
};

const Page = () => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="flex flex-col justify-between gap-4 px-4 md:flex-row md:items-center md:px-10">
        <div>
          <h1 className="text-xl font-bold md:text-2xl">Transaction</h1>
          <p className="text-base font-normal">
            Sales transaction report of the pharmacy
          </p>
        </div>
        <div>
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
        </div>
      </div>
      <ComponentToPrint ref={componentRef} />
    </>
  );
};

export default Page;
