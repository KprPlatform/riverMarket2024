import { TagCardViewProps, TagColor } from '@/types/types';
import React, { useEffect, useState } from 'react';
import Title from './text/Title';
import TagCardView from './card/TagCardView';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { styleText } from 'util';

export const VisionSection = () => {
  const [isMobile, setIsMobile] = useState(true);
  const updateDeviceWidth = () => {
    if (window.innerWidth < 768) {
      return setIsMobile(true);
    }
    return setIsMobile(false);
  };

  useEffect(() => {
    updateDeviceWidth();
    window.addEventListener('resize', updateDeviceWidth);

    return () => {
      window.removeEventListener('resize', updateDeviceWidth);
    };
  }, []);
  const cards: TagCardViewProps[] = [
    {
      tag: '공감과 소통',
      tagColor: TagColor.blue,
      description: (
        <>
          리버마켓은 혼자가 아닌 모두 함께
          <br />
          만들어가는 공간입니다. 열린 마음으로 서로의
          <br />
          목소리에 귀를 기울이고,
          <br />
          지속적인 공감과 소통을 통해 성장해 갑니다.
        </>
      ),
    },
    {
      tag: '배려와 존중',
      tagColor: TagColor.green,
      description: (
        <>
          방문자들은 물론, 위버 서로에 대한 배려,
          <br />
          어린이와 약자, 동물까지도 배려하면서
          <br />
          나보다 상대방을 더 아끼고 존중합니다.
        </>
      ),
    },
    {
      tag: '정직과 정성',
      tagColor: TagColor.yellow,
      description: (
        <>
          리버마켓은 시중에서 대량 유통되는 물건은
          <br />
          판매하지 않습니다.
          <br />
          리버마켓 상품에는 위버들의 마음과 정성,
          <br />
          인생과 꿈이 담겨 있습니다.
        </>
      ),
    },
  ];
  return (
    <div className='pl-4 pr-4 md:pr-0 py-24 md:py-40 flex flex-col md:flex-row justify-between items-start'>
      {/* <div className='flex justify-between items-start'> */}
      <div className='w-fit mb-8 md:mb-0'>
        <Title title='비전과 가치' />
        <div className=''>
          시작이 그러했듯이,
          <br />
          지금도 우리는 단순히 물건 판매가 목적이 아닙니다.
          <br />
          여기서 우리는 내려놓는 법을 배우고,
          <br />
          서로를 배려하며 어른이 되는 법을 배웁니다.
          <br />
          <br />
          리버마켓을 방문하는 이들의 시간이 소중하기에
          <br />
          그들에게 작은 위로와 희망을 줄 수 있다면,
          <br />
          그것이 리버마켓이 존재하는 이유입니다.
        </div>
      </div>
      <div className='w-full md:w-2/3'>
        <Swiper
          className='vision-swiper-container'
          slidesPerView={isMobile ? 1 : 2.5}
          spaceBetween={10}
          scrollbar
          modules={[Scrollbar]}
        >
          {cards.map((card, idx) => (
            <SwiperSlide key={idx} className=' md:w-[23.125%] max-w-[444px]'>
              <TagCardView
                tag={card.tag}
                tagColor={card.tagColor}
                description={card.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
