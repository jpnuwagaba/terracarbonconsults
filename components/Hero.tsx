import React from 'react';

interface HeroProps {
  bgImg: string;
  heading: React.ReactNode;
  paragraph: string;
}

const Hero = ({ bgImg, heading, paragraph }: HeroProps) => {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImg}')`,
        }}
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-black/30" />

      <div className="relative mx-auto flex min-h-[calc(100vh-64px)] w-full max-w-7xl items-center justify-center px-5 py-24 sm:px-6 sm:py-28 lg:px-8">
        <div className="text-center text-background">
          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-background sm:text-5xl lg:text-[4rem]">
            {heading}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-background/85 sm:text-lg lg:text-xl">
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
