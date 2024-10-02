// src/types/types.ts
export enum Size {
  Small = 'small',
  Large = 'large',
}

export interface TagImageCardViewProps {
  tag: string;
  imageSrc: string;
  mobileImageSrc?: string;
  description: React.ReactNode;
  size: Size; // enum을 사용하여 제한된 값만 허용
}
