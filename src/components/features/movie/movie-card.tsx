"use client";
import Image from "next/image";
import Link from "next/link";

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
    <div className='hover:scale-[1.1] min-h-[30rem] m-[1rem] h-full transition-transform duration-500 bg-secondarycolor cursor-pointer w-[18rem] '>
      <Link
        href={{
          pathname: "/movie-card-details",
          query: { id: data?.imdbID },
        }}
      >
        <div className='h-[20rem] relative w-full flex justify-center'>
          <Image
            src={data?.Poster}
            alt={data?.Title}
            // placeholder='blur'
            // blurDataURL={myBlurDataUrl}
            fill
          />
        </div>
        <div className='text-fontPrimary p-[1rem] text-[1.4rem]'>
          <h4 className='  mb-[1rem] break-words'>{data?.Title}</h4>
          <p className=' text-[1.2rem] mb-[1rem] '>{data?.Year}</p>
        </div>
      </Link>
    </div>
  );
}
