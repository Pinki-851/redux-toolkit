import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie",
  description: "Movie",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='w-full  overflow-y-auto'>{children}</main>
      <Footer />
    </>
  );
}
