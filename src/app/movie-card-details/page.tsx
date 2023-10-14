"use client";
import {
  BottomDataWrapper,
  RatingWrapper,
} from "@/components/features/movie/movie-details-wrapper";
import { Spinner } from "@/components/features/movie/spinner";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  fetchAsyncMovieDetails,
  removeSelectedMovieOrShow,
} from "@/store/movie-slice";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Fragment, useEffect } from "react";
import { FaCalendar, FaStar } from "react-icons/fa";
import { HiThumbUp } from "react-icons/hi";
import { RiFileListFill } from "react-icons/ri";

export default function MovieCardDetails() {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => {
    return { showDetails: state.movieSliceReducer.showAndMovieDetails };
  });

  const { showDetails }: any = state;
  const id = searchParams.get("id");

  useEffect(() => {
    dispatch(fetchAsyncMovieDetails(id));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, []);

  return (
    <div className='flex p-[2.4rem] no-scrollbar h-[calc(100vh-14.4rem)] justify-start items-start gap-[3.2rem] '>
      {Object?.keys(showDetails)?.length === 0 ? (
        <div className='w-screen h-full flex justify-center items-center'>
          <Spinner className='w-[10rem] h-[10rem] fill-fontPrimary' />
        </div>
      ) : (
        <Fragment>
          <div className='w-[60%]'>
            <h3 className='text-fontPrimary text-[2rem]'>
              {showDetails?.Title}
            </h3>
            <div className='flex justify-start items-center gap-[2.4rem] my-[1.6rem]'>
              <RatingWrapper
                heding='IMDB Rating'
                icon={
                  <FaStar
                    fill={"#ff9e00"}
                    className='w-[1.2rem] h-[1.2rem]'
                  />
                }
                value={showDetails?.imdbRating}
              />
              <RatingWrapper
                heding='IMDB Votes'
                icon={
                  <HiThumbUp
                    fill={"#fafafa"}
                    className='w-[1.4rem] h-[1.4rem]'
                  />
                }
                value={showDetails?.imdbVotes}
              />
              <RatingWrapper
                heding='Runtime'
                icon={
                  <RiFileListFill
                    fill={"rgb(191,213,214)"}
                    className='w-[1.2rem] h-[1.2rem]'
                  />
                }
                value={showDetails?.Runtime}
              />
              <RatingWrapper
                heding='Year'
                icon={
                  <FaCalendar
                    fill={"#efeaaa"}
                    className='w-[1.2rem] h-[1.2rem]'
                  />
                }
                value={showDetails?.Year}
              />
            </div>

            <p className='text-fontPrimary text-[1.4rem] my-[1.4rem] '>
              {showDetails?.Plot}
            </p>
            <BottomDataWrapper
              heding='Director'
              value={showDetails?.Director}
            />
            <BottomDataWrapper
              heding='Stars'
              value={showDetails?.Actors}
            />
            <BottomDataWrapper
              heding='Generes'
              value={showDetails?.Genre}
            />
            <BottomDataWrapper
              heding='Language'
              value={showDetails?.Language}
            />
            <BottomDataWrapper
              heding='Awards'
              value={showDetails?.Awards}
            />
          </div>
          <div className='w-[40rem] h-[40rem] bg-red-400 relative'>
            <Image
              src={showDetails?.Poster}
              alt={showDetails?.Title ?? "image"}
              fill
            />
          </div>
        </Fragment>
      )}
    </div>
  );
}
