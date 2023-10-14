export function Footer() {
  return (
    <div className='bg-secondarycolor text-fontPrimary text-[1.4rem] w-full h-[7.2rem] flex flex-col justify-center items-center text-[1.2rem]'>
      <h3>Movie App</h3>
      <div className='text-[1.2rem]'>
        {" "}
        &copy;{new Date().getFullYear()},Movie,Inc or it&apos;s affilates
      </div>
    </div>
  );
}
