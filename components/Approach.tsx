import Link from 'next/link';
import React from 'react';
import { ArrowRight, HandFist, ChartNoAxesGantt, DecimalsArrowRight, CircleDollarSign } from 'lucide-react';

type ApproachStep = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
};

const approachSteps: ApproachStep[] = [
  { id: 1, title: 'Opportunity', description: 'Feasibility & assessment', icon: HandFist },
  { id: 2, title: 'Design', description: 'Certification & structuring', icon: ChartNoAxesGantt },
  { id: 3, title: 'MRV', description: 'Monitoring & reporting', icon: DecimalsArrowRight },
  { id: 4, title: 'Market', description: 'Issuance & trading', icon: CircleDollarSign },
];

type StepTileProps = {
  step: ApproachStep;
};

const StepTile = ({ step }: StepTileProps) => {
  const IconComponent = step.icon;
  return (
    <div className="relative pt-3 pr-3">
      {/* <div
        aria-hidden
        className="pointer-events-none absolute left-2 right-3 top-0 h-3 -skew-x-[36deg] border border-primary/20 bg-chart-1/40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-3 right-0 top-2 w-3 skew-y-[38deg] border border-primary/20 bg-chart-2/35"
      /> */}

      <article className="relative z-10 flex h-full min-h-[190px] flex-col justify-between rounded-xs border border-primary/50 bg-background/80 p-6 backdrop-blur-[2px] transition-all duration-300 hover:border-primary/45 hover:bg-background/72">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/65">Step {step.id}</p>
          <div className="mt-3 flex items-center gap-3">
            <IconComponent className="size-6 text-primary/70" />
            <h3 className="text-2xl font-semibold leading-tight text-primary">{step.title}</h3>
          </div>
        </div>
        <p className="mt-6 text-base leading-7 text-primary/80">{step.description}</p>
      </article>
    </div>
  );
};

const Approach = () => {
  return (
    <section
      id="approach"
      className="relative overflow-hidden py-16 sm:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(16,52,57,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,52,57,0.08)_1px,transparent_1px)] bg-[size:34px_34px]"
      />
      {/* <div className="pointer-events-none absolute -right-24 top-16 h-64 w-64 rounded-full bg-chart-2/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-56 w-56 rounded-full bg-chart-3/20 blur-3xl" /> */}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">Our Approach</p>
        <h2 className="mt-4 text-center text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
          A structured path from opportunity to market
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-primary/80 sm:text-lg">
          A clear, end-to-end workflow that takes projects from initial potential through technical
          design, robust monitoring, and market participation.
        </p>

        <ol className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-6">
          {approachSteps.map((step, index) => (
            <li key={step.title} className="relative flex-1">
              <StepTile step={step} />

              {index < approachSteps.length - 1 && (
                <>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-[calc(100%+4px)] h-6 w-px -translate-x-1/2 bg-primary/35 lg:hidden"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-[-22px] top-1/2 hidden h-px w-12 -translate-y-1/2 bg-primary/35 lg:block"
                  />
                  <ArrowRight
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-[calc(100%+22px)] size-4 -translate-x-1/2 rotate-90 text-primary/65 lg:left-auto lg:right-[-20px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:rotate-0"
                  />
                </>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 flex justify-center">
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-chart-4"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Approach;
