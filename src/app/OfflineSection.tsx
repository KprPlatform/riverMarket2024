import React from 'react';
import Title from './components/text/Title';
import { ImageCardView } from './components/card/ImageCardView';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageCardViewProps } from '@/types/types';
import { ImageGridView } from './components/card/ImageGridView';

export const OfflineSection = () => {
  const cards: ImageCardViewProps[] = [
    {
      imageSrc: '/images/04_offline_01.png',
      title: '문호리',
      content: (
        <>
          리버마켓의 시작이 된 곳입니다. 만들고, 놀고, 꿈꾸며
          <br />
          행복한 추억을 만듭니다.
          <br />
          작은 배려와 따뜻한 정이 넘치고,
          <br />
          함께하는 즐거움이 있는 문호리로 오세요!
        </>
      ),
      description: (
        <>
          장소 &#58; 경기도 양평군 북한강로 941
          <br />
          시간 &#58; 매월 셋째 주말 &#40;현재 중단&#41;
        </>
      ),
    },
    {
      imageSrc: '/images/04_offline_02.png',
      title: '문호리 매일상회',
      content: (
        <>
          코로나19 상황의 절박함이 만들어낸 소통 공간입니다.
          <br />
          2021년 2월 6일 시범 운영을 시작으로
          <br />
          이제는 리버마켓의 상징이 되었습니다.
          <br />
          매일 새로운 매일상회가 여러분을 기다립니다.
        </>
      ),
      description: (
        <>
          장소 &#58; 경기도 양평군 서종면 북한강로 992 테라로사 &#40;입구1&#41;
          <br />
          장소 &#58; 경기도 양평군 서종면 꽃대울2길 12 매일상회 &#40;입구2&#41;
          <br />
          시간 : 매일 오전 10시부터 밤 7시까지
        </>
      ),
    },
    {
      imageSrc: '/images/04_offline_03.png',
      title: '양양 비치마켓',
      content: (
        <>
          리버마켓이 강을 지나 바다로 가서
          <br />
          양양의 비치마켓이 되었습니다.
          <br />
          드넓은 바다 옆에서 잠시 쉬어 갈 수 있는
          <br />
          시원한 비치마켓으로 떠나볼까요?
        </>
      ),
      description: (
        <>
          장소 &#58; 강원도 양양군 동해대로 3276 &#40;후진항, 설악해수욕장&#41;
          <br />
          시간 &#58; 매월 둘째 주말 &#40;토/일&#41;
        </>
      ),
    },
    {
      imageSrc: '/images/04_offline_04.png',
      title: '곤지암',
      content: (
        <>
          쇼핑도 쉼이 되는 곳,
          <br />
          다양한 공연으로 재미까지 있는 곳,
          <br />
          이번 주말은 리버마켓이 열리는 곤지암 도자공원 어때요?
        </>
      ),
      description: (
        <>
          장소 &#58; 경기 광주시 곤이암읍 경충대로 727 &#40;곤지암 도자공원&#41;
          <br />
          시간 &#58; 매월 셋째 주말 &#40;토/일&#41;
          <br />
        </>
      ),
    },
    {
      imageSrc: '/images/04_offline_05.png',
      title: '예스파크',
      content: (
        <>
          도자기를 비롯한 각종 공예품을 만날 수 있는
          <br />
          이천 도자예술마을에서 감성 가득한
          <br />
          눈 호강과 함께 여유로움을 느껴보세요.
          <br />
          리버마켓은 예스파크에서, 예스!
        </>
      ),
      description: (
        <>
          장소 &#58; 경기도 이천시 신둔면 도자예술로 5번길 109
          <br />
          시간 &#58; 비정기 개최 &#40;연계 문화행사&#41;
        </>
      ),
    },
    {
      imageSrc: '/images/04_offline_06.png',
      title: '태백철암 블랙마켓',
      content: (
        <>
          강과 바다를 지나 산으로 간 리버마켓.
          <br />
          태백의 상징 탄광이 있는 곳이라서
          <br />
          블랙마켓이라고 이름지었습니다.
          <br />
          상생의 장이 펼쳐지는 블랙마켓으로 오세요!
        </>
      ),
      description: (
        <>
          장소 &#58; 강원도 태백시 동태백로 404 &#40;철암탄광역사촌 일대&#41;
          <br />
          시간 &#58; 계절별 개최 &#40;지역 상생 활성화 프로그램&#41;
        </>
      ),
    },
    {
      imageSrc: '/images/04_offline_07.png',
      title: '한탄강',
      content: (
        <>
          유네스코가 세계지질공원으로 선정한 명소, <br />
          포천의 한탄강에서도 리버마켓을 만날 수 있습니다. <br />
          아이들과 함께, 반려견도 함께 <br />
          모두가 즐겁게 뛰놀 수 있는 한탄강에서 만나요!
        </>
      ),
      description: (
        <>
          장소 &#58; 경기도 포천시 영북면 북원로 248번길 31-23 &#40;화적연&#41;
          <br />
          시간 &#58; 매월 넷째 주말 &#40;토/일&#41;
        </>
      ),
    },
    {
      imageSrc: '/images/04_offline_08.png',
      title: '자라섬',
      content: (
        <>
          재즈가 생각나는 환상의 섬,
          <br />
          자라섬에서도 리버마켓이 열립니다.
          <br />
          날 좋은 날, 연날리기 등 다양한 체험을 즐기며
          <br />
          도심의 피로까지 날려보세요!
        </>
      ),
      description: (
        <>
          장소 &#58; 경기도 가평군 가평읍 달전리 31 &#40;자라섬&#41;
          <br />
          시간 &#58; 비정기 개최 &#40;연계 문화행사&#41;
        </>
      ),
    },
  ];

  return (
    <div className='px-4 mt-32 md:mt-48'>
      <Title title='모든 리버마켓' />
      {/* 모바일 - 슬라이드로 노출 */}
      <div className='block md:hidden mb-8 md:mb-0'>
        <Swiper slidesPerView={1} spaceBetween={20} loop>
          {cards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <ImageCardView
                title={card.title}
                imageSrc={card.imageSrc}
                content={card.content}
                description={card.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* PC - 그리드로 노출 */}
      <div className='w-full block hidden md:grid grid-flow-row grid-cols-4 gap-6'>
        {cards.map((card, idx) => (
          <ImageGridView
            key={idx}
            title={card.title}
            imageSrc={card.imageSrc}
            content={card.content}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};
