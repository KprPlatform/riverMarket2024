'use client';
import { useRef } from 'react';

import { Header } from './components/Header';
import { IntroSection } from './components/IntroSection';
import { StorySection } from './components/StorySection';
import CiSection from './components/CiSection';
import { VisionSection } from './components/VisionSection';

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
      <main className='w-full flex flex-col'>
        <section ref={aboutRef}>
          <IntroSection />
        </section>
        <section ref={storyRef}>
          <StorySection />
        </section>
        <section ref={ciRef}>
          <CiSection />
        </section>
        <section className='mt-32 md:mt-48  bg-[#F7F7F7] pr-0' ref={visionRef}>
          <VisionSection />
        </section>
        <section ref={offlineRef}></section>
      </main>
      <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
        footer 영역
      </footer>
    </div>
  );
}
