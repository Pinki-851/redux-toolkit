"use client";
import { fetchAsyncMovieData, fetchAsyncShowData } from "@/store/movie-slice";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

export function Header() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("searchval");

  const [serach, setSearch] = useState(query ? query : "");
  const dispatch = useDispatch();
  const pathname = usePathname();

  async function handleSearch() {
    if (serach !== "") {
      await dispatch(fetchAsyncMovieData(serach));
      await dispatch(fetchAsyncShowData(serach));
      push(`${pathname}?searchval=${serach}`);
    }
  }
  return (
    <div className='w-full sticky top-0 z-[1000] flex justify-between items-center bg-secondarycolor h-[7.2rem] px-[4rem]'>
      <Link
        href='/movie'
        className='text-[2rem] font-medium text-fontPrimary'
      >
        Movie App
      </Link>
      <div className='flex justify-start items-center gap-[1.6rem]'>
        <div className='flex justify-start items-center'>
          <input
            type='search'
            placeholder='Search...'
            value={serach}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e?.key === "Enter") {
                handleSearch();
              }
            }}
            className='h-[4rem] p-[1rem] w-[20rem] text-[1.4rem] outline-none rounded-tl-[4px] rounded-bl-[4px] text-primarycolor'
          />
          <button
            onClick={() => {
              handleSearch();
            }}
            className='bg-white h-[4rem] w-[4rem] rounded-tr-[4px] rounded-br-[4px] flex justify-center items-center group hover:bg-primarycolor'
          >
            <IoSearchOutline
              fill={"text-primarycolor"}
              className='w-[1.4rem] h-[1.4rem] group-hover:text-white'
            />
          </button>
        </div>
        <div className='uppercase flex justify-center items-center w-[3.8rem] h-[3.8rem] rounded-full text-[1.2rem] bg-blue-700 text-white'>
          un
        </div>
      </div>
    </div>
  );
}
