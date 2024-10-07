import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-16 w-full h-40 bg-[#111111] flex justify-start items-center  gap-24 px-[15rem] py-[10rem]'>
      <Image
        className='object-contain'
        alt='Layer'
        width={148}
        height={64}
        src='/images/footer_logo.svg'
      />
      <div className='flex flex-col gap-4'>
        <a
          className='flex-auto text-white block'
          href='https://cafe.naver.com/theseojong'
        >
          네이버 카페 : [ 문호리 리버마켓 ] cafe.naver.com/theseojong
        </a>
        <p className='text-[#7D7D7D]'>
          Copyright ⓒ (주)케이피알앤드어소시에이츠 All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
