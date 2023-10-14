import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {" "}
      <div className='w-full sticky top-0 z-[1000] flex justify-between items-center bg-secondarycolor h-[7.2rem] px-[4rem]'>
        <Link
          href='/movie'
          className='text-[2rem] font-medium text-fontPrimary'
        >
          Movie App
        </Link>
        <div className='uppercase flex justify-center items-center w-[3.8rem] h-[3.8rem] rounded-full text-[1.2rem] bg-blue-700 text-white'>
          un
        </div>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
