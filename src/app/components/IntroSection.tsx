import Image from 'next/image';
import React from 'react';

export const IntroSection = ({}): JSX.Element => {
  const chatBubbleImgUrl = '/images/intro_chat_bubble.png'; //'/images/intro_chat_bubble.svg';

  return (
    <section className='w-full  bg-white'>
      <div className='max-w-[1920px] min-w-[720px] mx-auto w-full flex flex-col md:flex-row md:justify-between p-4 gap-4'>
        {/* 좌측 날개 */}
        <div className='pt-[8%]'>
          <div className=" [-webkit-text-stroke:1px_#000000] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-white text-[40px] md:text-[78px] tracking-[0] leading-[56px] md:leading-[109.2px]">
            강을 닮은 사람들
            <br />
            삶을 담은 작품들
          </div>
          <div className='flex items-center gap-1'>
            <div className=" [-webkit-text-stroke:1px_#000000] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-black text-[40px] md:text-[78px] tracking-[0] leading-[56px] md:leading-[109.2px]">
              리버마켓
            </div>
            <Image
              className='w-[92px] h-[27px] md:w-[170px] md:h-[50px]'
              width={170}
              height={50}
              src={chatBubbleImgUrl}
              alt='리버마켓 - 만들고, 놀고, 꿈꾸고...'
            ></Image>
          </div>
        </div>

        {/* 우측 날개 */}
        <div className="pt-[15%] md:pt-[27.7%] font-normal text-black text-sm md:text-xl tracking-[-0.60px] md:leading-5  [font-family:'Noto_Sans_KR',Helvetica]">
          <span className='tracking-[-0.12px] md:leading-[30px]'>
            문호리 리버마켓은 2014년 양평에서 시작된 플리마켓으로,
            <br />
            현재는 경기/강원 지역을 대표하는 국내 최대 규모의 마켓으로
            성장했습니다.
            <br />
            전국 10여 개 지역에서 주말마다 열리며 핸드메이드 작가와 농부들이
            직접 만든
            <br />
            수제 먹거리와 수공예품, 도자기 등을 판매합니다.
            <br />
          </span>
          <br />
          <br />
          <span className='tracking-[-0.12px] md:leading-[30px]'>
            자연 속에서 여유롭게 쇼핑을 즐기고 다양한 체험과
            <br />
            공연을 경험할 수 있는 리버마켓은
            <br />
            &apos;공감과 소통&apos;, &apos;배려와 존중&apos;을 중심으로 한
            따뜻한 공동체 마켓입니다.
          </span>
          <span className='tracking-[-0.12px] leading-[30px]'></span>
        </div>
      </div>

      {/* 배너 */}
      {/* 임시 이미지 */}
      <div>
        <img src='images/00_tmp_benner.jpg'></img>
      </div>
      {/* <div className=' w-[1920px] h-[512px] top-[690px] left-[140px]'>
        <img
          className=' w-60 h-[432px] top-0 left-[560px]'
          alt='Image'
          src='/images/image-17909.png'
        />
        <img
          className=' w-60 h-[432px] top-20 left-[280px]'
          alt='Image'
          src='/images/image-17910.png'
        />
        <img
          className=' w-60 h-[432px] top-20 left-[840px]'
          alt='Image'
          src='/images/image-17911.png'
        />
        <img
          className=' w-60 h-[432px] top-0 left-[1120px] object-cover'
          alt='Image'
          src='/images/image-17912.png'
        />
        <img
          className=' w-60 h-[432px] top-20 left-[1400px]'
          alt='Image'
          src='/images/image-17913.png'
        />
        <img
          className=' w-60 h-[432px] top-0 left-0'
          alt='Image'
          src='/images/image-17914.png'
        />
        <img
          className=' w-[100px] h-[432px] top-0 left-[1680px]'
          alt='Image'
          src='/images/image-17914-1.png'
        />
      </div> */}
    </section>
  );
};
