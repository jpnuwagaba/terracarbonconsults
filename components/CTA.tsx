import Link from 'next/link';
import React from 'react';

const CTA = () => {
  return (
    <section className="bg-background py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-10">
        <Link
          href="#"
          className="group relative flex min-h-[170px] w-full items-center justify-center overflow-hidden rounded-xs bg-chart-1 px-6 py-10 text-center transition-transform duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:scale-[1.01] sm:min-h-[190px] lg:min-h-[210px]"
        >
          <span className="pointer-events-none absolute inset-0 bg-chart-1 transition-transform duration-700 group-hover:scale-105" />
          <span className="pointer-events-none absolute inset-0 scale-90 opacity-0 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,var(--color-chart-1)_0%,var(--color-chart-2)_38%,var(--color-chart-4)_100%)]" />
          <span className="relative text-4xl font-semibold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
            Contact us
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
