"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { sidebarToggle } from "@/context/sidebarToggle";
import { signOut } from "next-auth/react";
import { api } from "@/trpc/react";

const Sidebar = () => {
  const isActive = sidebarToggle((state) => state.isActive);
  const isDesktopView = sidebarToggle((state) => state.isDesktopView);
  const setIsActive = sidebarToggle((state) => state.setIsActive);
  const setDesktopView = sidebarToggle((state) => state.setDesktopView);
  const [transactionIsOpen, setTransactionIsOpen] = useState<boolean>(false);
  const [stockIsOpen, setStockIsOpen] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const pathname = usePathname();

  const user = api.user.current.useQuery();

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 768;
      setDesktopView(isDesktop);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setDesktopView]);

  useEffect(() => {
    if (!isDesktopView) {
      setIsActive(false);
    }
  }, [isDesktopView, setIsActive]);

  return (
    <div
      className={`fixed z-50 flex min-h-screen flex-col  gap-8 bg-[#283342] py-7 transition-all duration-300 md:w-1/5 ${isActive ? "ml-0" : "-ml-[304px]"}`}
    >
      <div className=" px-6">
        <Image src="/logo-white.svg" alt="Logo" width={170} height={40} />
      </div>
      <div className="relative flex items-center justify-between  gap-2 px-6">
        <div>
          <Image
            src="/prof.jpeg"
            alt="Profile"
            width={42}
            height={42}
            className="aspect-squarep rounded-full"
          />
        </div>
        <div className="whitespace-nowrap text-white">
          <h1 className="text-base">{user.data?.name}</h1>
          <p className="text-xs font-thin">Jl. Affandi No 31, Sleman</p>
        </div>
        <div className="cursor-pointer" onClick={() => setToggle(!toggle)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </div>
        {toggle && (
          <div className="absolute -bottom-20 right-2">
            <ul className="rounded-md bg-white ">
              <li className="flex cursor-pointer items-center gap-2 px-4 py-2">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM3.042 9.768C3.3 9.228 4.872 8.7 6 8.7C7.128 8.7 8.706 9.228 8.958 9.768C8.142 10.416 7.116 10.8 6 10.8C4.884 10.8 3.858 10.416 3.042 9.768ZM9.816 8.898C8.958 7.854 6.876 7.5 6 7.5C5.124 7.5 3.042 7.854 2.184 8.898C1.572 8.094 1.2 7.092 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 7.092 10.428 8.094 9.816 8.898ZM6 2.4C4.836 2.4 3.9 3.336 3.9 4.5C3.9 5.664 4.836 6.6 6 6.6C7.164 6.6 8.1 5.664 8.1 4.5C8.1 3.336 7.164 2.4 6 2.4ZM6 5.4C5.502 5.4 5.1 4.998 5.1 4.5C5.1 4.002 5.502 3.6 6 3.6C6.498 3.6 6.9 4.002 6.9 4.5C6.9 4.998 6.498 5.4 6 5.4Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <span>My Profile</span>
              </li>
              <hr />
              <li>
                <div>
                  <button
                    className="flex cursor-pointer items-center gap-2 px-4 py-2 text-[#F0483E]"
                    onClick={() =>
                      signOut({
                        callbackUrl: "/",
                      })
                    }
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33333 1.33333H5.33333C5.7 1.33333 6 1.03333 6 0.666667C6 0.3 5.7 0 5.33333 0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333 12H5.33333C5.7 12 6 11.7 6 11.3333C6 10.9667 5.7 10.6667 5.33333 10.6667H1.33333V1.33333Z"
                        fill="#F0483E"
                      />
                      <path
                        d="M11.7667 5.76669L9.90667 3.90669C9.69333 3.69335 9.33333 3.84002 9.33333 4.14002V5.33335H4.66667C4.3 5.33335 4 5.63335 4 6.00002C4 6.36669 4.3 6.66669 4.66667 6.66669H9.33333V7.86002C9.33333 8.16002 9.69333 8.30669 9.9 8.09335L11.76 6.23335C11.8933 6.10669 11.8933 5.89335 11.7667 5.76669Z"
                        fill="#F0483E"
                      />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div>
        <ul className="text-white">
          <li
            className={` ${pathname?.startsWith("/dashboard/medicine") || pathname === "/dashboard" ? "bg-primary" : ""}`}
          >
            <Link
              href="/dashboard"
              className="flex h-full w-full cursor-pointer items-center gap-4 px-6 py-4"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M12.4444 0H1.55556C0.7 0 0 0.7 0 1.55556V12.4444C0 13.3 0.7 14 1.55556 14H12.4444C13.3 14 14 13.3 14 12.4444V1.55556C14 0.7 13.3 0 12.4444 0ZM1.55556 12.4444V1.55556H6.22222V12.4444H1.55556ZM12.4444 12.4444H7.77778V7H12.4444V12.4444ZM12.4444 5.44444H7.77778V1.55556H12.4444V5.44444Z"
                  fill="white"
                />
              </svg>
              Dashboard
            </Link>
          </li>
          <li
            className={` ${pathname === "/dashboard/transaction" ? "bg-primary" : ""} ${transactionIsOpen ? "bg-black" : ""}`}
          >
            <div className=" flex items-center gap-4">
              <Link
                href="/dashboard/transaction"
                className="h-ful flex w-full cursor-pointer items-center gap-4 px-6 py-4"
              >
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M9.8231 10.7621V2.81836"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.2017 8.37305L9.82304 10.7628L7.44434 8.37305"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.03159 1.23535V9.17906"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.65283 3.62507L4.03154 1.23535L6.41024 3.62507"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Transaction
              </Link>
              <div
                className="h-max w-max px-6"
                onClick={() => setTransactionIsOpen(!transactionIsOpen)}
              >
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-2 w-2 transition-transform duration-75 ${transactionIsOpen ? "rotate-[360deg]" : "-rotate-180"}`}
                >
                  <path
                    d="M6.77405 0.209396L3.99642 2.98702L1.21879 0.209396C0.939597 -0.0697987 0.488591 -0.0697987 0.209396 0.209396C-0.0697987 0.488591 -0.0697987 0.939597 0.209396 1.21879L3.4953 4.5047C3.7745 4.78389 4.2255 4.78389 4.5047 4.5047L7.7906 1.21879C8.0698 0.939597 8.0698 0.488591 7.7906 0.209396C7.51141 -0.0626398 7.05324 -0.0697987 6.77405 0.209396Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </li>
          <li
            className={` bg-black  ${transactionIsOpen ? "block " : "hidden"}`}
          >
            <ul>
              <li
                className={`cursor-pointer py-4 ${pathname === "/dashboard/transaction/cashier" ? "bg-primary" : ""}`}
              >
                <Link href={"/dashboard/transaction/cashier"} className="px-16">
                  Cashier
                </Link>
              </li>
              <li
                className={`cursor-pointer py-4 ${pathname === "/dashboard/transaction/data" ? "bg-primary" : ""}`}
              >
                <Link href={"/dashboard/transaction/data"} className="px-16">
                  Data Transaction
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={` ${pathname === "/dashboard/stock" ? "bg-primary" : ""} ${stockIsOpen ? "bg-black" : ""}`}
          >
            <div className=" flex items-center gap-4">
              <Link
                href="/dashboard/stock"
                className="flex h-full w-full cursor-pointer items-center gap-4 px-6 py-4"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path
                    d="M12.6 0H1.4C0.7 0 0 0.63 0 1.4V3.507C0 4.011 0.301 4.445 0.7 4.69V12.6C0.7 13.37 1.47 14 2.1 14H11.9C12.53 14 13.3 13.37 13.3 12.6V4.69C13.699 4.445 14 4.011 14 3.507V1.4C14 0.63 13.3 0 12.6 0ZM11.9 12.6H2.1V4.9H11.9V12.6ZM12.6 3.5H1.4V1.4H12.6V3.5Z"
                    fill="white"
                  />
                  <path d="M9.2 8H5V9.4H9.2V8Z" fill="white" />
                  <path
                    d="M6.3999 6.5998L6.3999 10.7998L7.7999 10.7998L7.7999 6.5998L6.3999 6.5998Z"
                    fill="white"
                  />
                </svg>
                Stock
              </Link>
              <div
                className="h-max w-max px-6"
                onClick={() => setStockIsOpen(!stockIsOpen)}
              >
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-2 w-2 transition-transform duration-75 ${stockIsOpen ? "rotate-[360deg]" : "-rotate-180"}`}
                >
                  <path
                    d="M6.77405 0.209396L3.99642 2.98702L1.21879 0.209396C0.939597 -0.0697987 0.488591 -0.0697987 0.209396 0.209396C-0.0697987 0.488591 -0.0697987 0.939597 0.209396 1.21879L3.4953 4.5047C3.7745 4.78389 4.2255 4.78389 4.5047 4.5047L7.7906 1.21879C8.0698 0.939597 8.0698 0.488591 7.7906 0.209396C7.51141 -0.0626398 7.05324 -0.0697987 6.77405 0.209396Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </li>
          <li className={` bg-black  ${stockIsOpen ? "block " : "hidden"}`}>
            <ul>
              <li
                className={`cursor-pointer py-4 ${pathname?.includes("/dashboard/stock/data") ? "bg-primary" : ""}`}
              >
                <Link href={"/dashboard/stock/data"} className="px-16">
                  Data Stock
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={` ${pathname === "/dashboard/suppliers" ? "bg-primary" : ""}`}
          >
            <Link
              href="/dashboard/suppliers"
              className="flex h-full w-full cursor-pointer items-center gap-4 px-6 py-4"
            >
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M1 4.89286H7V5.75H1V4.89286ZM0 2.75H5V3.60714H0V2.75Z"
                  fill="white"
                />
                <path
                  d="M13.9611 5.57044L12.522 2.38893C12.4851 2.30716 12.4236 2.23746 12.3452 2.1885C12.2669 2.13953 12.175 2.11346 12.0812 2.1135H10.642V1.2045C10.642 1.08396 10.5915 0.968356 10.5015 0.88312C10.4115 0.797885 10.2895 0.75 10.1623 0.75H2.4869V1.659H9.68259V7.36572C9.464 7.48598 9.2727 7.64605 9.11972 7.8367C8.96675 8.02735 8.85512 8.2448 8.79128 8.47653H5.77677C5.66001 8.04809 5.38233 7.6747 4.99579 7.42635C4.60925 7.17801 4.14038 7.07176 3.67707 7.12751C3.21375 7.18327 2.78781 7.3972 2.47907 7.72922C2.17033 8.06124 2 8.48854 2 8.93103C2 9.37352 2.17033 9.80082 2.47907 10.1328C2.78781 10.4649 3.21375 10.6788 3.67707 10.7345C4.14038 10.7903 4.60925 10.684 4.99579 10.4357C5.38233 10.1874 5.66001 9.81397 5.77677 9.38553H8.79128C8.89564 9.7756 9.13429 10.1216 9.46949 10.3687C9.80469 10.6158 10.2173 10.75 10.642 10.75C11.0667 10.75 11.4793 10.6158 11.8145 10.3687C12.1497 10.1216 12.3884 9.7756 12.4927 9.38553H13.5203C13.6475 9.38553 13.7695 9.33764 13.8595 9.25241C13.9495 9.16717 14 9.05157 14 8.93103V5.74952C14 5.68794 13.9868 5.62701 13.9611 5.57044ZM3.92604 9.84003C3.73628 9.84003 3.55079 9.78672 3.39301 9.68684C3.23523 9.58695 3.11226 9.44499 3.03964 9.27889C2.96703 9.11279 2.94803 8.93002 2.98505 8.75369C3.02207 8.57736 3.11344 8.41539 3.24762 8.28827C3.3818 8.16114 3.55275 8.07456 3.73886 8.03949C3.92497 8.00442 4.11788 8.02242 4.29319 8.09122C4.46851 8.16002 4.61835 8.27653 4.72377 8.42601C4.82919 8.5755 4.88546 8.75124 4.88546 8.93103C4.88521 9.17204 4.78404 9.4031 4.60417 9.57352C4.4243 9.74394 4.18041 9.83979 3.92604 9.84003ZM10.642 3.02251H11.7645L12.793 5.29502H10.642V3.02251ZM10.642 9.84003C10.4523 9.84003 10.2668 9.78672 10.109 9.68684C9.95121 9.58695 9.82824 9.44499 9.75562 9.27889C9.683 9.11279 9.664 8.93002 9.70102 8.75369C9.73804 8.57736 9.82942 8.41539 9.9636 8.28827C10.0978 8.16114 10.2687 8.07456 10.4548 8.03949C10.6409 8.00442 10.8339 8.02242 11.0092 8.09122C11.1845 8.16002 11.3343 8.27653 11.4397 8.42601C11.5452 8.5755 11.6014 8.75124 11.6014 8.93103C11.6012 9.17204 11.5 9.4031 11.3201 9.57352C11.1403 9.74394 10.8964 9.83979 10.642 9.84003ZM13.0406 8.47653H12.4927C12.3871 8.08721 12.148 7.74213 11.8131 7.49537C11.4782 7.24862 11.0663 7.11414 10.642 7.11302V6.20402H13.0406V8.47653Z"
                  fill="white"
                />
              </svg>
              Suppliers
            </Link>
          </li>

          <li
            className={` ${pathname === "/dashboard/machine-learning" ? "bg-primary" : ""}`}
          >
            <Link
              href="/dashboard/machine-learning"
              className="flex h-full w-full cursor-pointer items-center gap-4 px-6 py-4"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M0 10.8889V12.4444H4.66667V10.8889H0ZM0 1.55556V3.11111H7.77778V1.55556H0ZM7.77778 14V12.4444H14V10.8889H7.77778V9.33333H6.22222V14H7.77778ZM3.11111 4.66667V6.22222H0V7.77778H3.11111V9.33333H4.66667V4.66667H3.11111ZM14 7.77778V6.22222H6.22222V7.77778H14ZM9.33333 4.66667H10.8889V3.11111H14V1.55556H10.8889V0H9.33333V4.66667Z"
                  fill="white"
                />
              </svg>
              Machine Learning
            </Link>
          </li>
        </ul>
      </div>
      <div
        className="absolute bottom-28 right-0 -mr-7  bg-[#455162] px-2 py-5 md:bottom-4"
        onClick={() => setIsActive(!isActive)}
      >
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-3 w-3 -rotate-90`}
        >
          <path
            d="M6.77405 0.209396L3.99642 2.98702L1.21879 0.209396C0.939597 -0.0697987 0.488591 -0.0697987 0.209396 0.209396C-0.0697987 0.488591 -0.0697987 0.939597 0.209396 1.21879L3.4953 4.5047C3.7745 4.78389 4.2255 4.78389 4.5047 4.5047L7.7906 1.21879C8.0698 0.939597 8.0698 0.488591 7.7906 0.209396C7.51141 -0.0626398 7.05324 -0.0697987 6.77405 0.209396Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
