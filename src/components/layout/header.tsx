import Link from "next/link";

export function Header() {
  return (
    <div className='w-full flex justify-between items-center bg-secondarycolor h-[7.2rem] px-[4rem]'>
      <Link
        href='/'
        className='text-[2rem] font-medium text-fontPrimary'
      >
        Movie App
      </Link>
      <div className='uppercase flex justify-center items-center w-[3.8rem] h-[3.8rem] rounded-full text-[1.4rem] bg-blue-700 text-white'>
        un
      </div>
    </div>
  );
}
