import Image from 'next/image';
import React from 'react';

interface HeaderProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  storyRef: React.RefObject<HTMLDivElement>;
  ciRef: React.RefObject<HTMLDivElement>;
  visionRef: React.RefObject<HTMLDivElement>;
  offlineRef: React.RefObject<HTMLDivElement>;
}
export const Header = ({
  aboutRef,
  storyRef,
  ciRef,
  visionRef,
  offlineRef,
}: HeaderProps): JSX.Element => {
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='w-full bg-white border-b border-solid border-[#e6e5e6]'>
      <div className='max-w-sm min-w-0 md:max-w-[1920px] md:min-w-[720px] mx-auto h-[71px] w-full flex md:justify-center items-center  p-4'>
        <div className='w-[85px] h-[35px] flex-1'>
          <Image
            className='w-full h-full object-contain'
            alt='Layer'
            width={85}
            height={36}
            src='/images/layer-1.svg'
          />
        </div>
        <nav className='hidden md:flex space-x-8 flex-1 m-3'>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className=" h-6  [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-[#1e1e1e] hover:text-[#f9be10] text-base tracking-[0] leading-6 whitespace-nowrap cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(storyRef)}
            className="h-6 [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-[#1e1e1e] hover:text-[#f9be10] text-base tracking-[0] leading-6 whitespace-nowrap cursor-pointer"
          >
            리버 스토리
          </button>
          <button
            onClick={() => scrollToSection(ciRef)}
            className="h-6 [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-[#1e1e1e] hover:text-[#f9be10] text-base tracking-[0] leading-6 whitespace-nowrap cursor-pointer"
          >
            리버 CI
          </button>
          <button
            onClick={() => scrollToSection(visionRef)}
            className="h-6 [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-[#1e1e1e] hover:text-[#f9be10] text-base tracking-[0] leading-6 whitespace-nowrap"
          >
            비전과 가치
          </button>
          <button
            onClick={() => scrollToSection(offlineRef)}
            className="h-6 [font-family:'Noto_Sans_KR-Bold',Helvetica] font-bold text-[#1e1e1e] hover:text-[#f9be10] text-base tracking-[0] leading-6 whitespace-nowrap cursor-pointer"
          >
            모든 리버마켓
          </button>
        </nav>
      </div>
    </header>
  );
};
