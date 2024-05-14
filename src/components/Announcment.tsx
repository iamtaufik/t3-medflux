import { useState } from 'react';

interface IProps {
  value: string;
  detail: string;
}

const Announcment = ({ value, detail }: IProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <div onClick={() => setIsClicked(true)} data-aos='fade-left' className={`flex  border rounded-2xl px-4 py-3 justify-between items-center  ${isClicked ? '' : 'bg-[#F0483E] bg-opacity-10 border-[#F0483E]'}`}>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-semibold">{value}</h3>
          <p className="text-base font-extralight">Products</p>
        </div>
        <p className="text-base font-normal">{detail}</p>
      </div>
      <div>
        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L8 8.5L1 15.5" stroke="#313C4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default Announcment;
