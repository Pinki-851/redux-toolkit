"use client";
import { Footer } from "@/components/layout/footer";
import { useRouter } from "next/navigation";
// import { Router } from "next/router";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <div>
      {" "}
      <div className='w-full sticky top-0 z-[1000] flex justify-between items-center bg-secondarycolor h-[7.2rem] px-[4rem]'>
        <button
          // href={{router.Goback()}}
          className='text-[2rem] font-medium text-fontPrimary'
          onClick={() => {
            router.back();
          }}
        >
          Movie App
        </button>
        <div className='uppercase flex justify-center items-center w-[3.8rem] h-[3.8rem] rounded-full text-[1.2rem] bg-blue-700 text-white'>
          un
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
