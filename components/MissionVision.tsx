import React from 'react';
import { Compass, Globe } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">being us</p>
        <h2 className="mt-4 text-center text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
          Mission & Vision
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14">
          {/* Mission Card */}
          <div className="rounded-2xl border border-primary/15 bg-background/80 p-8 shadow-sm shadow-chart-1/10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-chart-1/15">
              <Compass className="size-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
            <p className="mt-4 text-base leading-7 text-primary/80">
              To be the leading catalyst for high-quality carbon projects in Africa, connecting projects with global markets to
              achieve tangible climate and community benefits.
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-2xl border border-primary/15 bg-background/80 p-8 shadow-sm shadow-chart-1/10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-chart-1/15">
              <Globe className="size-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
            <p className="mt-4 text-base leading-7 text-primary/80">
              A future where Africa leads the global climate economy, powering its development through sustainable, nature-based,
              and renewable energy solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;