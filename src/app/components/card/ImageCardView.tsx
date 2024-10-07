import { ImageCardViewProps } from '@/types/types';
import Image from 'next/image';
import React from 'react';

export const ImageCardView: React.FC<ImageCardViewProps> = ({
  imageSrc,
  title,
  description,
  content,
}) => {
  return (
    <div className='max-w-96 h-[32rem] rounded overflow-hidden shadow-md border-b border-gray-200 m-1'>
      {/* 이미지 영역 */}
      <Image
        className='w-full'
        src={imageSrc}
        alt={title}
        width={520}
        height={379}
      />

      {/* 하단 내용 */}
      <div className='px-6 py-4'>
        {/* 제목 */}
        <div className='font-bold text-xl mb-2'>{title}</div>

        {/* 본문 */}
        <p className='text-black text-sm tracking-[-0.42px] leading-[21px]'>
          {content}
        </p>
        {/* 선택적 디스크립션 */}
        {description && (
          <p className='text-gray-600 text-sm mt-2 tracking-[-0.06px] leading-[18px]'>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
