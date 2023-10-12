import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ReduxProvider } from "@/store/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fragment } from "react";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
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
      <body className={`${inter.className} bg-primarycolor`}>
        <ReduxProvider>
          <Fragment>
            <Header />
            {children}
          </Fragment>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
