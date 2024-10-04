import React from 'react';
import Title from './text/Title';
import { TagImageCardView } from './card/TagImageCardView';
import { Size } from '@/types/types';

const CiSection = () => {
  const cards = [
    {
      tag: '#상징',
      imageSrc: '/images/02_ci_01.png',
      description: (
        <>
          어릴 적, 손바닥에 놓고 조심조심 만지던 병아리 <br />
          노란 병아리 위에는 함께 살아가는 우리 이웃인 <br />
          위버를 상징하는 동시에 <br />
          <strong>약해 보이는 것들을 더 소중히 여기겠다는</strong> <br />
          <strong> 마음의 표현</strong>입니다.
        </>
      ),
      size: Size.Small,
    },
    {
      tag: '#상징',
      imageSrc: '/images/02_ci_02.png',
      description: (
        <>
          리버마켓은 <strong>판매 상품은 물론 매장의 장식들도</strong>
          <br />
          <strong>위버의 손으로 직접</strong> 만듭니다.
          <br />
          곳곳에 스며 있는 위버들의 정성스러운 손길과 <br />
          친근함을 리버마켓 로고에도
          <br />
          그대로 담아 표현하였습니다.
        </>
      ),
      size: Size.Small,
    },
    {
      tag: '#위버 이야기',
      imageSrc: '/images/02_ci_03.png',
      mobileImageSrc: '/images/02_mo_ci_03.png',
      description: (
        <>
          리버마켓은 &apos;위버&apos;와 함께 만들어 갑니다.
          <br />
          <strong>강을 닮은 우리, 바로 위버</strong>입니다.
          <br />
          <br />
          <strong>위버의 이름에 걸맞은 좋은 상품만을 판매하겠습니다.</strong>
        </>
      ),
      size: Size.Large,
    },
  ];
  return (
    <div className='px-4 mt-32 md:mt-48'>
      <Title title='리버 CI' />
      <div className='flex flex-wrap justify-center md:justify-between items-center gap-6'>
        {cards.map((card, idx) => (
          <TagImageCardView
            key={idx}
            tag={card.tag}
            imageSrc={card.imageSrc}
            mobileImageSrc={card.mobileImageSrc}
            description={card.description}
            size={card.size}
          />
        ))}
      </div>
    </div>
  );
};

export default CiSection;
