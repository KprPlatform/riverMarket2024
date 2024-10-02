import React from 'react';

const Title = ({ title = '제목' }) => {
  return (
    <div className="mb-7 md:mb-11 [font-family:'Noto_Sans_KR',Helvetica] font-bold text-black text-[28px] md:text-[40px] tracking-[0] leading-10 whitespace-nowrap">
      {title}
    </div>
  );
};

export default Title;
