import Image from 'next/image';
import React from 'react';

interface ImageCardViewProps {
  imageSrc: string;
  title: string;
  content: string[];
  description?: string;
}

export const ImageCardView: React.FC<ImageCardViewProps> = ({
  imageSrc,
  title,
  description,
  content,
}) => {
  return (
    <div className=' rounded overflow-hidden shadow-md border-b border-gray-200 m-1'>
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
          {Array.isArray(content)
            ? content.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))
            : content}
        </p>
        {/* 선택적 디스크립션 */}
        {description && (
          <p className='text-gray-600 text-sm mt-2'>{description}</p>
        )}
      </div>
    </div>
  );
};
