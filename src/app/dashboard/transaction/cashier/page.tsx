'use client';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <>
      <div className="px-4 md:px-10">
        <h1 className="text-xl md:text-2xl font-bold">
          <Link className="text-gray-300" href={'/dashboard/transaction'}>
            Transaction
          </Link>{' '}
          {'>'} <span className="text-black">Cashier</span>
        </h1>
        <p className="text-base font-normal">Sales transaction report of the pharmacy</p>
      </div>
      <div className="px-4 md:px-10 flex gap-10 my-10 flex-col md:flex-row">
        <div className="w-full md:w-9/12 border rounded-xl overflow-hidden">
          <div className="relative w-full scroll-x overflow-x-auto py-2">
            <table className="table-auto  w-full ">
              <thead className="border-b ">
                <tr className="whitespace-nowrap">
                  <th scope="col" className="px-6 py-3 ">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Unit
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Pricing Options
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Selling Price
                  </th>
                  <th scope="col" className="px-6 py-3 ">
                    Sub Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center border font-normal whitespace-nowrap ">
                  <td className="px-6 py-3">1</td>
                  <td className="px-6 py-3">Augmentin</td>
                  <td className="px-6 py-3">625</td>
                  <td className="px-6 py-3">ST30</td>
                  <td className="px-6 py-3">Rp. 1,240,455</td>
                  <td className="px-6 py-3">Rp. 1,240,455</td>
                  <td className="px-6 py-3">Rp. 1,240,455</td>
                </tr>
                <tr className="text-center border font-normal whitespace-nowrap ">
                  <td className="px-6 py-3">2</td>
                  <td className="px-6 py-3">Augmentin</td>
                  <td className="px-6 py-3">625</td>
                  <td className="px-6 py-3">ST30</td>
                  <td className="px-6 py-3">Rp. 1,240,455</td>
                  <td className="px-6 py-3">Rp. 1,240,455</td>
                  <td className="px-6 py-3">Rp. 1,240,455</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full md:w-3/12  rounded-xl flex flex-col border justify-between ">
          <div>
            <h2 className="text-xl font-semibold p-4">Cashier Information</h2>
            <hr />
            <ul className="font-normal text-base flex flex-col gap-3">
              <hr />
              <li className="px-4 py-2 flex justify-between">
                <p>Sub Total</p>
                <p>Rp. 1.240.000</p>
              </li>
              <hr />
              <li className="px-4 py-2 flex justify-between">
                <p>Biaya Service</p>
                <p>Rp. 1.240.000</p>
              </li>
              <hr />
              <li className="px-4 py-2 flex justify-between">
                <p>Biaya Embalase</p>
                <p>Rp. 1.240.000</p>
              </li>
              <hr />
              <li className="px-4 py-2 flex justify-between">
                <p>Ongkos Kirim</p>
                <p>Rp. 1.240.000</p>
              </li>
              <hr />
              <li className="px-4 py-2 flex justify-between">
                <p>Biaya Lainnya</p>
                <p>Rp. 1.240.000</p>
              </li>
            </ul>
          </div>
          <hr />
          <div className=" p-4  text-black flex flex-col gap-10">
            <div className="font-bold flex gap-2">
              <p className="text-sm">Rp.</p>
              <p className="text-5xl">6.200.000</p>
            </div>
            <div className="flex justify-between">
              <button className="flex gap-2 text-primary px-4 py-2 border border-primary rounded-3xl transition-colors duration-300 hover:bg-primary hover:text-white">
                <span>Cancel</span>
                <span className='bg-primary rounded-md text-white px-1 font-semibold'>F4</span>
              </button>
              <button className="flex gap-2 text-white px-4 py-2 border bg-primary border-primary rounded-3xl items-center transition-colors duration-300 hover:bg-[#13668D] hover:text-white">
                <span>Pay Now</span>
                <span className='bg-white rounded-md text-primary px-1 font-semibold'>F2</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
