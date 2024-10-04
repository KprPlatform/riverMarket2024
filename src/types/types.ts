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

export enum TagColor {
  blue = '#87ADF1',
  green = '#A4CEA3',
  yellow = '#F4C769',
}
export interface TagCardViewProps {
  tagColor: TagColor;
  tag: string;
  description: React.ReactNode;
}
