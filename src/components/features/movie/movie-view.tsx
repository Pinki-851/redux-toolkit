"use client";

import { MovieCard } from "@/components/features/movie/movie-card";
import { settings } from "@/components/features/movie/slider";
import { Spinner } from "@/components/features/movie/spinner";
import { useAppSelector } from "@/store";
import { Fragment } from "react";
import Slider from "react-slick";

export function MovieView() {
  const data: any = useAppSelector((state) => {
    return {
      movieData: state.movieSliceReducer.movieData,
      showData: state.movieSliceReducer.showData,
    };
  });
  if (Object?.keys(data?.movieData || data?.showData)?.length === 0) {
    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <Spinner className='w-[10rem] h-[10rem] fill-fontPrimary' />
      </div>
    );
  }
  return (
    <div className='p-[3rem]'>
      <h2 className='text-fontSecondary  mb-[1rem] text-[2rem]'>Movies</h2>
      {data?.movieData?.Response === "True" ? (
        <Slider {...settings}>
          {data?.movieData?.Search?.map((movie: any, index: number) => {
            return (
              <Fragment key={index}>
                <MovieCard data={movie} />
              </Fragment>
            );
          })}
        </Slider>
      ) : (
        <div className='text-fontPrimary text-[1.4rem] text-center h-[25vh]'>
          Somthing went wrong...
        </div>
      )}
      <h2 className='text-fontSecondary my-[1rem] text-[2rem] '>Shows</h2>
      {data?.showData?.Response === "True" ? (
        <Slider {...settings}>
          {data?.showData?.Search?.map((movie: any, index: number) => {
            return (
              <Fragment key={index}>
                <MovieCard data={movie} />
              </Fragment>
            );
          })}
        </Slider>
      ) : (
        <div className='text-fontPrimary text-[1.4rem] text-center h-[25vh]'>
          Somthing went wrong...
        </div>
      )}
    </div>
  );
}
