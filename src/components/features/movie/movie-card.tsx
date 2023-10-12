"use client";
import Image from "next/image";

interface MovieCardProps {
  data: {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
  };
}
export function MovieCard(props: MovieCardProps) {
  const { data } = props;
  return (
    <div className='bg-secondarycolor cursor-pointer  w-[20rem] h-[30rem]'>
      <div className='h-full w-full flex justify-center'>
        <Image
          src={data?.Poster}
          alt={data?.Title}
          width={200}
          height={250}
        />
      </div>
      <div className='text-fontPrimary'>
        <h4 className='text-[2.2rem] font-normal mb-[1rem] whitespace-normal'>
          {data?.Title}
        </h4>
        <p>{data?.Year}</p>
      </div>
    </div>
  );
}
