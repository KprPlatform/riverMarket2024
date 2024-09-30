import Image from 'next/image';
import React from 'react';

interface TagImageCardViewProps {
  tag: string;
  imageSrc: string;
  description: React.ReactNode; // description을 React 요소로 받음
}

export const TagImageCardView: React.FC<TagImageCardViewProps> = ({
  tag,
  imageSrc,
  description,
}) => {
  return (
    <div className='container w-full relative h-[360px] md:h-[522px] border-b border-gray-200 bg-gray-50 p-6 rounded-lg shadow-md max-w-sm mx-auto flex flex-col justify-center items-start'>
      {/* 태그 아이콘 */}
      <div className='text-sm text-gray-700 font-semibold bg-gray-200 rounded-full px-3 py-1 inline-block mb-4'>
        {tag}
      </div>
      {/* 투명 배경 이미지*/}
      <div className='w-full min-w-full max-h-20 flex-1 mt-auto mb-auto relative'>
        <Image
          layout='fill'
          objectFit='contain'
          src={imageSrc}
          alt={tag}
          className='absolute top-0 left-0 w-full h-full object-contain bg-transparent'
        ></Image>
      </div>
      {/* 설명글 - 볼드체 포함 */}
      <div className=' mt-10  text-gray-700 text-sm leading-relaxed'>
        {description}
      </div>
    </div>
  );
};
