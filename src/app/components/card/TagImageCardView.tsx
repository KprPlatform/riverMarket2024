import { Size, TagImageCardViewProps } from '@/types/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const TagImageCardView: React.FC<TagImageCardViewProps> = ({
  tag,
  imageSrc,
  mobileImageSrc,
  description,
  size,
}) => {
  const [currentImageSrc, setCurrentImageSrc] = useState(imageSrc);
  const updateImageSrc = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      );

    // 모바일 디바이스이거나 창 크기가 768px 미만일 때 모바일로 간주

    if (mobileImageSrc && (isMobileDevice || window.innerWidth < 768)) {
      return setCurrentImageSrc(mobileImageSrc);
      //mobile환경에서도 Pc와 동일한 리소스 사용하는 경우도 있음.
    }
    return setCurrentImageSrc(imageSrc);
  };
  useEffect(() => {
    //초기화
    updateImageSrc();
    //화면크기 변경 감지
    window.addEventListener('resize', updateImageSrc);

    // 컴포넌트 언마운트시 제거
    return () => {
      window.removeEventListener('resize', updateImageSrc);
    };
  }, [imageSrc, mobileImageSrc]);
  const isSmall = size === Size.Small;
  return (
    <div
      className={`w-full  ${
        isSmall ? 'md:max-w-[21%]' : 'md:max-w-[38%] '
      } w-full relative min-h-[360px] max-h-[50rem] md:h-[522px] border border-[#EFEFEF] bg-[#FCFCFC] p-6 flex flex-col justify-start items-start gap-8`}
    >
      {/* 태그 아이콘 */}
      <div className='text-sm text-gray-700 font-semibold bg-gray-200 rounded-full px-3 py-1 inline-block mb-4'>
        {tag}
      </div>
      {/* 투명 배경 이미지*/}
      <div
        className={`w-full flex-1 max-h-[45rem] flex justify-center items-center`}
      >
        <Image
          layout='relative'
          objectFit='contain'
          width={isSmall ? 195 : 551}
          height={isSmall ? 84 : 220}
          src={currentImageSrc}
          alt={tag}
          className={`w-full${
            isSmall
              ? 'max-w-[6rem] max-h-[4.5rem] md:max-w-[195px] md:max-h-[84px]'
              : 'max-w-[18rem] md:max-w-[650px]'
          }   object-contain bg-transparent`}
        ></Image>
      </div>
      {/* 설명글 - 볼드체 포함 */}
      <div
        className={`   text-gray-700 text-sm tracking-[-1px] leading-[21px] md:leading-relaxed md:tracking-normal`}
      >
        {description}
      </div>
    </div>
  );
};
