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
      <head>
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1426495303323810'
          crossOrigin='anonymous'
        ></script>
        <meta
          name='google-adsense-account'
          content='ca-pub-5503726254989659'
        ></meta>
      </head>
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
