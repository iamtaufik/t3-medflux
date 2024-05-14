import "@/styles/globals.css";

import { TRPCReactProvider } from "@/trpc/react";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MedFlux",
  description: "MedFlux - Medical Record System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} scroll-smooth`}>
        <TRPCReactProvider>
          {children}
          <ToastContainer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
