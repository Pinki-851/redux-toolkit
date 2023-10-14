import { ReactNode } from "react";

interface RWProps {
  heding: string;
  icon: ReactNode;
  value: string;
}
export function RatingWrapper(props: RWProps) {
  const { heding, icon, value } = props;
  return (
    <div className='flex justify-start items-center gap-[.2rem]'>
      <p className='text-fontSecondary text-[1.4rem]'>{heding}</p>
      {icon}
      <span className='text-fontSecondary'>:</span>
      <p className='text-fontSecondary text-[1.4rem]'>{value}</p>
    </div>
  );
}

interface BDProps {
  heding: string;
  value: string;
}

export function BottomDataWrapper(props: BDProps) {
  const { heding, value } = props;
  return (
    <div className='grid grid-cols-[100px_minmax(200px,_1fr)] gap-[1.4rem] mb-[1rem] '>
      <h4 className='text-fontPrimary text-[1.6rem]'>{heding}</h4>
      <h4 className='text-fontSecondary text-[1.6rem]'>{value}</h4>
    </div>
  );
}
