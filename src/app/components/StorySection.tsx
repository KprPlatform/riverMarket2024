import React from 'react';
import { ImageCardView } from './card/ImageCardView';
import Title from './text/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
export const StorySection = () => {
  const cards = [
    {
      imageSrc: '/images/01_story_01.png',
      title: '강을 닮다',
      content: [
        '저마다 다른 사연들이 만나 서로를 품는 강이 되었습니다.',
        '그곳에는 혼자가 아니라서 시작할 수 있었던 우리의 이야기가 있습니다.',
        '지치고 힘들었던 마음은 강물에 흘려보내고 기대와 설렘, 희망을 띄워 봅니다.',
        '그 시작이 강줄기를 따라 오랜 인연으로 이어져 오고 있습니다.',
      ],
      description: null,
    },
    {
      imageSrc: '/images/01_story_02.png',
      title: '삶을 닮다',
      content: [
        '꿈꾸던 날에 다가간 행복,',
        '그 속에서 놀던 때의 그리움을 만납니다.',
        '고요했던 마을에 아이들이 뛰노는 소리가 들리고,',
        '사람들의 웃음이 퍼집니다.',
        '마을에 생기가 흐릅니다. 서로를 향한 따뜻한 마음이 느껴집니다.',
        '우리가 함께 그리는, 꿈 같은 날의 아름다움을 전합니다.',
      ],
      description: '',
    },
    {
      imageSrc: '/images/01_story_03.png',
      title: '꿈에 닿다',
      content: [
        '저마다 다른 사연들이 만나 서로를 품는 강이 되었습니다.',
        '그곳에는 혼자가 아니라서 시작할 수 있었던 우리의 이야기가 있습니다.',
        '지치고 힘들었던 마음은 강물에 흘려보내고 기대와 설렘, 희망을 띄워 봅니다.',
        '그 시작이 강줄기를 따라 오랜 인연으로 이어져 오고 있습니다.',
      ],
      description: '',
    },
  ];

  return (
    <div className='container mx-auto px-4 mt-32 md:mt-48'>
      <Title title='리버 스토리' />
      {/* 모바일 - 슬라이드로 노출 */}
      <div className='block md:hidden '>
        <Swiper slidesPerView={1} spaceBetween={20} autoplay loop>
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <ImageCardView
                key={idx}
                imageSrc={card.imageSrc}
                title={card.title}
                content={card.content}
                // description={card.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* PC - 그리드로 노출 */}
      <div className='hidden md:grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-6'>
        {cards.map((card, idx) => (
          <ImageCardView
            key={idx}
            imageSrc={card.imageSrc}
            title={card.title}
            content={card.content}
            // description={card.description}
          />
        ))}
      </div>
    </div>
  );
};
