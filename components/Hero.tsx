import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-chart">
      <div className="mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-[1600px] md:grid-cols-2 lg:min-h-[calc(100vh-84px)]">
        <div>
          <div className="mx-auto flex h-full w-full max-w-3xl flex-col justify-center px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <h1 className="max-w-[18ch] text-[clamp(2rem,8vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-primary">
              Building High-Integrity Carbon Projects for Africa
            </h1>

            <p className="mt-6 max-w-[40ch] text-sm leading-7 text-primary/85 sm:text-lg sm:leading-8 lg:text-xl">
              We help climate projects move from early concept to verified carbon credits through expert
              project development, rigorous monitoring, and trusted market connections.
            </p>

            <button
              type="button"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold tracking-wide text-secondary shadow-lg shadow-primary/20 transition-opacity hover:opacity-90 sm:w-fit sm:py-4"
            >
              Explore Our Services
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 hidden w-px bg-linear-to-b from-chart-1 to-chart md:block" />

          <div className="relative flex min-h-[300px] items-center justify-center px-5 pb-12 pt-2 sm:min-h-[360px] sm:px-10 sm:pb-16 lg:min-h-full lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute h-[68%] w-[72%] max-w-[440px] rounded-3xl bg-card/45 sm:h-[74%] sm:w-[66%]" />

            <div className="relative h-[240px] w-full max-w-[560px] sm:h-[300px] md:h-[360px] lg:h-[420px]">
              <Image
                src="/assets/carbon-graphic.svg"
                alt="Carbon project package artwork"
                fill
                priority
                sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 40vw, (min-width: 768px) 48vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
