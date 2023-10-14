"use client";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import Home from "./movie/page";

export default function page() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
