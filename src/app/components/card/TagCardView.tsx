import { TagCardViewProps } from '@/types/types';
import React from 'react';

const TagCardView = ({ tagColor, tag, description }: TagCardViewProps) => {
  return (
    <div className='w-full px-12 py-[4.5rem] bg-white border border-solid border-[#efefef]'>
      <div
        className={`w-fit rounded-full px-3 py-1.5 mb-4`}
        style={{ borderColor: tagColor, color: tagColor, borderWidth: 1 }}
      >
        <p className='text-sm '>{tag}</p>
      </div>
      <div className='text-black text-sm font-light tracking-[0] leading-[22px]'>
        {description}
      </div>
    </div>
  );
};

export default TagCardView;
