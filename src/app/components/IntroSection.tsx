import React from 'react';

export const IntroSection = ({}): JSX.Element => {
  const test = 'g';

  return (
    <section className='w-full  bg-white'>
      <div className='max-w-[1920px] min-w-[720px] mx-auto w-full flex md:just items-center p-4 gap-4'>
        <div className=" flex-auto [-webkit-text-stroke:1px_#000000] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-white text-[78px] tracking-[0] leading-[109.2px]">
          강을 닮은 사람들
          <br />
          삶을 담은 작품들
        </div>
        <div className='space-x-4 flex-1'></div>
        <div className="flex-auto font-normal text-black text-xl tracking-[-0.60px] leading-5  [font-family:'Noto_Sans_KR',Helvetica]">
          <span className='tracking-[-0.12px] leading-[30px]'>
            리버마켓은 공예품과 수공예 제품을 판매하는 플리마켓으로,
            <br />
            창의성, 지속 가능성 그리고 사회적 가치를 중시하는 플랫폼입니다.
            <br />
            소규모 창작자들이 자신만의 독특한 수제 제품을 선보일 수 있도록
            <br />
            돕고 있으며, 지역 시장 및 문화 행사와 연결되어 있습니다.
            <br />
          </span>
          <span className='tracking-[-0.12px] leading-[48.0px]'>
            고객들은 의미 있는 제품을 구매할 수 있는 기회를 제공받고,
            <br />
          </span>
          <span className='tracking-[-0.12px] leading-[30px]'>
            창작자들과 연결될 수 있는 공간을 제공합니다.
          </span>
        </div>
      </div>
      <div className=' w-[1920px] h-[512px] top-[690px] left-[140px]'>
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
      </div>
    </section>
  );
};
