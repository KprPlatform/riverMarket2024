import type { Metadata } from 'next';
import './globals.css';
import 'swiper/swiper-bundle.css';

export const metadata: Metadata = {
  title: '리버마켓 스토리',
  description: '리버마켓을 소개합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased max-w-fit min-w-full'>{children}</body>
    </html>
  );
}
