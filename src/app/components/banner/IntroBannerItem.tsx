import Image from 'next/image';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

interface BannerItemProps {
  idx: number;
  imgSrc: string;
}
export const IntroBannerItem: React.FC<BannerItemProps> = ({ imgSrc, idx }) => {
  const isOddNum = idx % 2 !== 0;
  return (
    <Image
      className={`${isOddNum ? 'mt-20' : 'mb-20'} floating`}
      alt='리버마켓 배너 이미지 : 판매 상품 이미지'
      width={240}
      height={432}
      src={imgSrc}
    />
  );
};
