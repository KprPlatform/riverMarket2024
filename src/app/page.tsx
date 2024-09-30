'use client';
import { useRef } from 'react';

import { Header } from './components/Header';
import { IntroSection } from './components/IntroSection';
import { StorySection } from './components/StorySection';
import CiSection from './components/CiSection';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const ciRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const offlineRef = useRef<HTMLDivElement>(null);

  return (
    <div className=' bg-white '>
      <Header
        aboutRef={aboutRef}
        storyRef={storyRef}
        ciRef={ciRef}
        visionRef={visionRef}
        offlineRef={offlineRef}
      />
      <main className='w-full px-[7.29%] md:px-[140px]'>
        <section ref={aboutRef}>
          <IntroSection />
        </section>
        <section ref={storyRef}>
          <StorySection />
        </section>
        <section ref={ciRef}>
          <CiSection />
        </section>
        <section ref={visionRef}></section>
        <section ref={offlineRef}></section>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        footer 영역
      </footer>
    </div>
  );
}
