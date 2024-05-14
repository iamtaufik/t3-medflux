"use client";
import SearchIcon from "@/components/SearchIcon";
import Sidebar from "@/components/Sidebar";
import { sidebarToggle } from "@/context/sidebarToggle";
import * as AOS from "aos";
import { useEffect } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const { isActive, setIsActive } = sidebarToggle();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section className="relative flex">
      <Sidebar />
      <section
        className={`flex min-h-screen w-full flex-col overflow-y-auto overflow-x-hidden bg-white transition-all duration-300 ease-in-out  ${isActive ? "md:ml-72" : "ml-0"}`}
      >
        <div className="mb-6 hidden items-center justify-between bg-[#F7FAFD] px-10 py-8 md:flex">
          <div className="relative w-full max-w-md">
            <input
              type="search"
              className="placeholder:text-muted-foreground flex h-9 w-full  max-w-md rounded-2xl border border-gray-300 bg-[#E3EBF3] px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-500  disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search for anything here..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute right-0 top-1/2  mr-3 h-6 w-6 -translate-y-1/2 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <a
            className="flex cursor-pointer items-center gap-2 rounded-2xl border border-primary px-4 py-2"
            href="https://wa.me/6289512230607"
            target="_blank"
          >
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8926 15.8919C13.3458 18.4389 9.57465 18.9892 6.48852 17.562C6.03293 17.3786 5.65941 17.2303 5.30431 17.2303C4.31524 17.2362 3.08414 18.1952 2.4443 17.5561C1.80447 16.9162 2.76422 15.6842 2.76422 14.6891C2.76422 14.334 2.62185 13.9671 2.43844 13.5106C1.01053 10.425 1.56159 6.65256 4.10839 4.10633C7.3595 0.854019 12.6415 0.854019 15.8926 4.10549C19.1496 7.36283 19.1438 12.6404 15.8926 15.8919Z"
                  stroke="#1B81B0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.92066 12.654C8.92066 12.366 8.94266 12.096 8.98666 11.844C9.03466 11.592 9.12266 11.352 9.25066 11.124C9.35866 10.908 9.48466 10.734 9.62866 10.602C9.77666 10.466 9.93666 10.334 10.1087 10.206C10.2847 10.074 10.4687 9.906 10.6607 9.702C10.8207 9.526 10.9267 9.348 10.9787 9.168C11.0347 8.988 11.0627 8.794 11.0627 8.586C11.0627 8.434 11.0447 8.292 11.0087 8.16C10.9727 8.028 10.9127 7.914 10.8287 7.818C10.7007 7.658 10.5387 7.546 10.3427 7.482C10.1467 7.414 9.94266 7.38 9.73066 7.38C9.53866 7.38 9.35466 7.406 9.17866 7.458C9.00666 7.51 8.86266 7.59 8.74666 7.698C8.62266 7.802 8.53066 7.932 8.47066 8.088C8.41466 8.24 8.38866 8.406 8.39266 8.586H7.07266C7.10466 8.21 7.20066 7.858 7.36066 7.53C7.52066 7.202 7.73666 6.936 8.00866 6.732C8.24066 6.548 8.50466 6.412 8.80066 6.324C9.09666 6.232 9.39266 6.186 9.68866 6.186C10.1127 6.186 10.5127 6.252 10.8887 6.384C11.2687 6.516 11.5847 6.73 11.8367 7.026C12.0207 7.234 12.1587 7.472 12.2507 7.74C12.3467 8.004 12.3947 8.278 12.3947 8.562C12.3947 8.942 12.3127 9.294 12.1487 9.618C11.9887 9.942 11.7827 10.238 11.5307 10.506C11.3987 10.646 11.2647 10.774 11.1287 10.89C10.9927 11.002 10.8667 11.112 10.7507 11.22C10.6347 11.328 10.5387 11.446 10.4627 11.574C10.3547 11.758 10.2927 11.924 10.2767 12.072C10.2607 12.216 10.2527 12.41 10.2527 12.654H8.92066ZM8.92666 15V13.548H10.2527V15H8.92666Z"
                  fill="#1B81B0"
                />
              </svg>
            </div>

            <span className="text-primary">Contact Developer</span>
          </a>
        </div>
        <div className="mb-6 flex justify-between px-4 py-4 md:hidden">
          <div className="max-w-min" onClick={() => setIsActive(!isActive)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="cursor-pointer rounded-full border border-primary p-2"
              href="https://wa.me/6289512230607"
              target="_blank"
            >
              <div>
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.8926 15.8919C13.3458 18.4389 9.57465 18.9892 6.48852 17.562C6.03293 17.3786 5.65941 17.2303 5.30431 17.2303C4.31524 17.2362 3.08414 18.1952 2.4443 17.5561C1.80447 16.9162 2.76422 15.6842 2.76422 14.6891C2.76422 14.334 2.62185 13.9671 2.43844 13.5106C1.01053 10.425 1.56159 6.65256 4.10839 4.10633C7.3595 0.854019 12.6415 0.854019 15.8926 4.10549C19.1496 7.36283 19.1438 12.6404 15.8926 15.8919Z"
                    stroke="#1B81B0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.92066 12.654C8.92066 12.366 8.94266 12.096 8.98666 11.844C9.03466 11.592 9.12266 11.352 9.25066 11.124C9.35866 10.908 9.48466 10.734 9.62866 10.602C9.77666 10.466 9.93666 10.334 10.1087 10.206C10.2847 10.074 10.4687 9.906 10.6607 9.702C10.8207 9.526 10.9267 9.348 10.9787 9.168C11.0347 8.988 11.0627 8.794 11.0627 8.586C11.0627 8.434 11.0447 8.292 11.0087 8.16C10.9727 8.028 10.9127 7.914 10.8287 7.818C10.7007 7.658 10.5387 7.546 10.3427 7.482C10.1467 7.414 9.94266 7.38 9.73066 7.38C9.53866 7.38 9.35466 7.406 9.17866 7.458C9.00666 7.51 8.86266 7.59 8.74666 7.698C8.62266 7.802 8.53066 7.932 8.47066 8.088C8.41466 8.24 8.38866 8.406 8.39266 8.586H7.07266C7.10466 8.21 7.20066 7.858 7.36066 7.53C7.52066 7.202 7.73666 6.936 8.00866 6.732C8.24066 6.548 8.50466 6.412 8.80066 6.324C9.09666 6.232 9.39266 6.186 9.68866 6.186C10.1127 6.186 10.5127 6.252 10.8887 6.384C11.2687 6.516 11.5847 6.73 11.8367 7.026C12.0207 7.234 12.1587 7.472 12.2507 7.74C12.3467 8.004 12.3947 8.278 12.3947 8.562C12.3947 8.942 12.3127 9.294 12.1487 9.618C11.9887 9.942 11.7827 10.238 11.5307 10.506C11.3987 10.646 11.2647 10.774 11.1287 10.89C10.9927 11.002 10.8667 11.112 10.7507 11.22C10.6347 11.328 10.5387 11.446 10.4627 11.574C10.3547 11.758 10.2927 11.924 10.2767 12.072C10.2607 12.216 10.2527 12.41 10.2527 12.654H8.92066ZM8.92666 15V13.548H10.2527V15H8.92666Z"
                    fill="#1B81B0"
                  />
                </svg>
              </div>
            </a>
            <div className="rounded-full bg-[#F7FAFD] p-2">
              <SearchIcon />
            </div>
          </div>
        </div>
        {children}
      </section>
    </section>
  );
};

export default layout;
