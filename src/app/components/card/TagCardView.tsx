import { TagCardViewProps } from '@/types/types';
import React from 'react';

const TagCardView = ({ tagColor, tag, description }: TagCardViewProps) => {
  return (
    <div className='w-full px-[1.875rem] md:px-12 py-[2.5rem] md:py-[5rem] h-[15rem] md:h-[21.5rem] bg-white border border-solid border-[#efefef]'>
      <div
        className={`w-fit rounded-full px-3 py-1.5 mb-4`}
        style={{ borderColor: tagColor, color: tagColor, borderWidth: 1 }}
      >
        <p className='text-lg tracking-[0] leading-7'>{tag}</p>
      </div>
      <div className='md:mt-[2rem] text-black text-[13px] md:text-base font-light tracking-[0] leading-[22.1px] md:leading-7'>
        {description}
      </div>
    </div>
  );
};

export default TagCardView;
