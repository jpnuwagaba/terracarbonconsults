import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import {getSectors, type Sector} from '@/sanity/lib/sectors';

type FocusCardProps = {
  area: Sector;
  index: number;
};

const FocusCard = ({ area, index }: FocusCardProps) => {
  return (
    <Link href="#" className="group relative block cursor-pointer h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-xs border border-primary/20 bg-background/78 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40">
        <div className="relative h-64 overflow-hidden">
          {area.image ? (
            <Image
              src={area.image}
              alt={area.imageAlt}
              fill
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-chart-4/20 px-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-primary/60">
              {area.title}
            </div>
          )}

          <div className="absolute top-4 left-4 bg-teal-500 text-white w-8 h-8 flex items-center justify-center font-mono text-xs font-bold rounded-sm shadow-md">
            0{index + 1}
          </div>
        </div>

        <div className="relative px-5 pb-6 pt-5 sm:px-6">
          <div
            aria-hidden
            className="pointer-events-none absolute right-6 top-0 h-2 w-14 -translate-y-1/2 -skew-x-[35deg] border border-primary/20 bg-chart-1/45"
          />
          <h3 className="text-2xl font-semibold leading-tight text-primary">{area.title}</h3>
          <p className="mt-3 text-base leading-7 text-primary/80">{area.description}</p>
        </div>
      </article>
    </Link>
  );
};

const FocusAreas = async () => {
  const focusAreas = await getSectors();

  return (
    <section id="focus-areas" className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-chart-2/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-chart-3/20 blur-3xl" /> */}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">Focus Areas</p>
        <h2 className="mt-4 text-center text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
          Sectors we work across
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-primary/80 sm:text-lg">
          Our delivery model adapts to high-impact sectors where strong project design and measurable
          outcomes are critical.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:gap-8 items-stretch">
          {focusAreas.map((area, index) => (
            <FocusCard key={area.title} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
