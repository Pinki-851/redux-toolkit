import { ReduxProvider } from "@/store/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie",
  description: "Movie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} no-scrollbar bg-primarycolor`}>
        <ReduxProvider>
          <Fragment>
            <main className='w-full  overflow-y-auto'>{children}</main>
          </Fragment>
        </ReduxProvider>
      </body>
    </html>
  );
}
