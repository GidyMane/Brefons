/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import SideNavbar from "@/components/SideNavbar";
import { Provider } from "react-redux";
import { store } from "@/utils/Redux/Store";
import ReduxProvider from "./ReduxProvider";
import Layout from "@/components/Layout/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BREFONS",
  description: "Developed by Mane Software"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex ",
          inter.className,
          {
            "debug-screens": process.env.NODE_ENV === "development"
          }
        )}
      >
        {/* sidebar */}
        {/* <p className="border">Sidebar</p> */}
        <ReduxProvider>
        <SideNavbar />
        {/* main page */}
        <Layout>
          {children}
        </Layout>
        </ReduxProvider>
      </body>
    </html>
  );
}
