import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IntroBannerItem } from './banner/IntroBannerItem';
import { Autoplay } from 'swiper/modules';

export const IntroSection = ({}): JSX.Element => {
  const chatBubbleImgUrl = '/images/intro_chat_bubble.png'; //'/images/intro_chat_bubble.svg';
  const bannerImages: string[] = [
    '/images/intro_banner/00_intro_banner_01.png',
    '/images/intro_banner/00_intro_banner_02.png',
    '/images/intro_banner/00_intro_banner_03.png',
    '/images/intro_banner/00_intro_banner_04.png',
    '/images/intro_banner/00_intro_banner_05.png',
    '/images/intro_banner/00_intro_banner_06.png',
    '/images/intro_banner/00_intro_banner_07.png',
    '/images/intro_banner/00_intro_banner_08.png',
    '/images/intro_banner/00_intro_banner_09.png',
    '/images/intro_banner/00_intro_banner_10.png',
  ];
  return (
    <div className='w-full  bg-white'>
      <div className='w-full flex flex-col md:flex-row md:justify-between p-4 gap-4'>
        {/* 좌측 날개 */}
        <div className='pt-[8%]'>
          <div className="[-webkit-text-stroke:1px_#000000] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-white text-[40px] md:text-[78px] tracking-[0] leading-[56px] md:leading-[109.2px] whitespace-nowrap">
            강을 닮은 사람들
            <br />
            삶을 담은 작품들
          </div>
          <div className='flex items-center gap-1'>
            <div className=" [-webkit-text-stroke:1px_#000000] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-black text-[40px] md:text-[78px] tracking-[0] leading-[56px] md:leading-[109.2px] whitespace-nowrap">
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
        {/* 우측 날개 Mobile*/}
        <div className="block md:hidden pt-[15%] text-[15px] font-light text-black tracking-[-0.45px] leading-[15px]  [font-family:'Noto_Sans_KR',Helvetica]">
          <span className='tracking-[-0.07px] leading-[22.5px]'>
            문호리 리버마켓은 2014년 양평에서 시작된
            <br />
            플리마켓으로,현재는 경기/강원 지역을 대표하는
            <br />
            국내 최대 규모의 마켓으로 성장했습니다.
            <br />
            전국 10여 개 지역에서 주말마다 열리며
            <br />
            핸드메이드 작가와 농부들이 직접 만든 수제 먹거리와
            <br />
            수공예품, 도자기 등을 판매합니다.
            <br />
          </span>
          <br />
          <br />
          <span className='tracking-[-0.07px] leading-[22.5px]'>
            자연 속에서 여유롭게 쇼핑을 즐기고 다양한 체험과
            <br />
            공연을 경험할 수 있는 리버마켓은
            <br />
            &apos;공감과 소통&apos;, &apos;배려와 존중&apos;을 중심으로 한
            따뜻한
            <br />
            공동체 마켓입니다.
          </span>
        </div>

        {/* 우측 날개 PC*/}
        <div className="hidden md:block pt-[15%] md:pt-[27.7%] font-normal text-black text-sm md:text-xl tracking-[-0.60px] md:leading-5  [font-family:'Noto_Sans_KR',Helvetica]">
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
      {/* 작업중인 배너 - 애니메이션 일단 제외 */}

      <Swiper
        spaceBetween={10}
        freeMode
        speed={11000}
        slidesPerView={6.2}
        autoplay={{
          delay: 0.05,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop
      >
        {bannerImages.map((imgSrc, idx) => (
          <SwiperSlide key={idx}>
            <IntroBannerItem idx={idx} imgSrc={imgSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
