"use client";
import id from "date-fns/locale/id";
import {
  BarChart,
  Card,
  DateRangePicker,
  LineChart,
  AreaChart,
  DatePicker,
} from "@tremor/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { env } from "@/env";

const demandForecast = [
  {
    date: "1 Dec",
    value: 26,
  },
  {
    date: "2 Dec",
    value: 33,
  },
  {
    date: "3 Dec",
    value: 40,
  },
  {
    date: "4 Dec",
    value: 78,
  },
  {
    date: "5 Dec",
    value: 44,
  },
  {
    date: "6 Dec",
    value: 89,
  },
  {
    date: "7 Dec",
    value: 50,
  },
  {
    date: "8 Dec",
    value: 70,
  },
];

const buyerDiseases = [
  {
    name: "Diare",
    "Record Count": 260,
  },
  {
    name: "Hipertensi",
    "Record Count": 201,
  },
  {
    name: "Nyeri",
    "Record Count": 127,
  },
  {
    name: "Infeksi Kulit",
    "Record Count": 143,
  },
  {
    name: "Infeksi Bakteri",
    "Record Count": 122,
  },
  {
    name: "Gangguan Pernaafsan",
    "Record Count": 190,
  },
  {
    name: "Pascaoperasi",
    "Record Count": 125,
  },
];

const stocks = [
  {
    name: "Paracetamol",
    "Avability Stock": 121,
  },
  {
    name: "Amoxilin",
    "Avability Stock": 423,
  },
  {
    name: "Promag",
    "Avability Stock": 124,
  },
  {
    name: "Bodrex",
    "Avability Stock": 432,
  },
  {
    name: "Antangin",
    "Avability Stock": 222,
  },
  {
    name: "Paramex",
    "Avability Stock": 234,
  },
];

type Predict = {
  date: string;
  sales: number;
  sales_lower: number;
  sales_upper: number;
};

const Page = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [data, setData] = useState<Predict[]>([]);
  const [loading, setLoading] = useState(false);

  const getSalesPrediction = async (date: string) => {
    try {
      setLoading(true);
      const response = await axios.post<Predict[]>(
        `${env.NEXT_PUBLIC_ML_ENDPOINT_URL}/api/predict`,
        {
          date_to_predict: date,
        },
      );

      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void getSalesPrediction(date);
  }, [date]);

  return (
    <>
      <div className="px-4 md:px-10">
        <h1 className="text-xl font-bold md:text-2xl">
          Machine Learning Dashboard
        </h1>
        <p className="text-base font-normal">
          A quick recomendations machine learning analytics
        </p>
      </div>
      <div className="my-10 flex flex-col justify-between gap-8 px-4 md:flex-row md:px-10">
        <Card className="w-full">
          <h2 className="text-xl font-bold">Demand Forecasting Model</h2>

          <div className="my-4 flex w-full flex-col items-end  gap-2">
            <div className="w-full ">
              {/* <DateRangePicker
                className="w-full "
                locale={id}
                defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }}
                enableSelect={false}
                placeholder="Date Range"
                onChange={(value) => {
                  console.log({ value });
                }}
              /> */}

              <DatePicker
                className="w-full max-w-[250px]"
                defaultValue={new Date()}
                locale={id}
                onValueChange={(val) =>
                  setDate(
                    val?.toLocaleDateString() ??
                      new Date().toLocaleDateString(),
                  )
                }
              />
            </div>
            {loading && (
              <div>
                <p className="text-center">Fetching..</p>
              </div>
            )}
          </div>
          {/* <LineChart
            data={data}
            index="date"
            categories={["sales", "sales_lower", "sales_upper"]}
            colors={["blue", "green", "red"]}
            valueFormatter={(val) => val.toString()}
            showAnimation={true}
          /> */}
          <AreaChart
            // className="mt-4 h-72"
            data={data}
            index="date"
            categories={["sales", "sales_lower", "sales_upper"]}
            colors={["green", "red", "blue"]}
            onValueChange={(value) => {
              console.log(value);
            }}
            connectNulls={true}
          />
        </Card>
        {/* <Card className="md:w-1/2">
          <h2 className="text-xl font-bold">Disease Trend</h2>
          <div className="my-4 flex w-full justify-end gap-2">
            <div className="w-full max-w-[250px]">
              <DateRangePicker
                className="w-full "
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
            categories={["Record Count"]}
            colors={["blue"]}
            valueFormatter={(val) => val.toString()}
            showAnimation={true}
          />
        </Card> */}
      </div>
      {/* <div className="mb-10 flex flex-col  justify-between gap-8 px-4 md:flex-row md:px-10">
        <Card className="md:w-1/2">
          <h2 className="text-xl font-bold">Stock Trend</h2>
          <div className="my-4 flex w-full justify-end gap-2">
            <div className="w-full max-w-[250px]">
              <DateRangePicker
                className="w-full "
                locale={id}
                defaultValue={{ from: new Date(2023, 1, 1), to: new Date() }}
                enableSelect={false}
                placeholder="Date Range"
              />
            </div>
          </div>
          <BarChart
            className="mt-6"
            data={stocks}
            index="name"
            categories={["Avability Stock"]}
            colors={["blue"]}
            valueFormatter={(val) => val.toString()}
            showAnimation={true}
          />
        </Card>
        <Card className="md:w-1/2">
          <h2 className="text-xl font-bold">Trade Series</h2>
          <div className="my-4 flex w-full justify-end gap-2">
            <div className="w-full max-w-[250px]">
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
            data={demandForecast}
            index="date"
            categories={["value"]}
            colors={["blue"]}
            valueFormatter={(val) => val.toString()}
            showAnimation={true}
          />
        </Card>
      </div> */}
    </>
  );
};

export default Page;
