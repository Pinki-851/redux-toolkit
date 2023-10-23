"use client";
import { MovieView } from "@/components/features/movie/movie-view";
import { Spinner } from "@/components/features/movie/spinner";
import { useAppSelector } from "@/store";
import { fetchAsyncMovieData, fetchAsyncShowData } from "@/store/movie-slice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const query = searchParams.get("searchval");

  const movieFilter = query ? query : "Harry";
  const showFilter = query ? query : "friends";
  const loading = useAppSelector((state) => state.movieSliceReducer.loading);

  useEffect(() => {
    dispatch(fetchAsyncMovieData(movieFilter));
    dispatch(fetchAsyncShowData(showFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <main className='no-scrollbar'>
      {loading === true ? (
        <div className='w-screen h-screen flex justify-center items-center'>
          <Spinner className='w-[10rem] h-[10rem] fill-fontPrimary' />
        </div>
      ) : (
        <MovieView />
      )}
    </main>
  );
}
