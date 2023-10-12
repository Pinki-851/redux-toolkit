"use client";

import { MovieCard } from "@/components/features/movie/movie-card";
import { useAppSelector } from "@/store";
import { Fragment } from "react";

export default function MovieDetails() {
  // const state=useSelector((state)=>{state.})
  const data: any = useAppSelector((state) => {
    return {
      movieData: state.movieSliceReducer.movieData,
      showData: state.movieSliceReducer.showData,
    };
  });
  console.log("data", data);
  return (
    <div className='p-[1.6rem]'>
      <h2 className='text-fontSecondary text-center mb-[1rem] text-[1.6rem]'>
        Movies
      </h2>
      {data?.movieData?.Response === "True" ? (
        <div className='flex justify-start flex-wrap items-center gap-[2.4rem]'>
          {data?.movieData?.Search?.map((movie: any, index: number) => {
            return (
              <Fragment key={index}>
                <MovieCard data={movie} />
              </Fragment>
            );
          })}
        </div>
      ) : (
        <div>Somthing went wrong...</div>
      )}
      <h2 className='text-fontSecondary text-center mb-[1rem] text-[1.6rem]'>
        Shows
      </h2>
      {data?.showData?.Response === "True" ? (
        <div className='flex justify-start flex-wrap items-center gap-[2.4rem]'>
          {data?.showData?.Search?.map((movie: any, index: number) => {
            return (
              <Fragment key={index}>
                <MovieCard data={movie} />
              </Fragment>
            );
          })}
        </div>
      ) : (
        <div>Somthing went wrong...</div>
      )}
    </div>
  );
}
