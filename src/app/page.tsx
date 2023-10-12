"use client";
import { fetchAsyncMovieData, fetchAsyncShowData } from "@/store/movie-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MovieDetails from "./movie-details/page";

export default function Home() {
  const [finalData, setFinalData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovieData());
    dispatch(fetchAsyncShowData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <main>
      <MovieDetails />
    </main>
  );
}
