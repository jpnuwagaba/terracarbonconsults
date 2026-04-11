import React from 'react';
import { LineChart, ShieldCheck, Wrench } from 'lucide-react';
import { GiAfrica } from "react-icons/gi";

type Pillar = {
  title: string;
  icon: React.ElementType;
};

const pillars: Pillar[] = [
  { title: 'High-Integrity Carbon Projects', icon: ShieldCheck },
  { title: 'Technical Expertise', icon: Wrench },
  { title: 'Market Readiness', icon: LineChart },
  { title: 'Global-Focused Insight', icon: GiAfrica },
];

type WhyCardProps = {
  title: string;
  icon: React.ElementType;
};

const WhyCard = ({ title, icon: Icon }: WhyCardProps) => {
  return (
    <article className="flex min-h-[220px] flex-col items-center justify-start px-6 py-8 text-center sm:min-h-[240px] sm:px-8">
      <span className="inline-flex size-20 items-center justify-center rounded-full border border-primary/40 text-primary sm:size-24">
        <Icon className="size-9 stroke-[1.5] sm:size-10" />
      </span>
      <h3 className="mt-6 max-w-[16ch] text-xl font-semibold leading-tight text-primary">
        {title}
      </h3>
    </article>
  );
};

const WhyTerraCarbon = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-16 top-10 h-44 w-44 rounded-full bg-chart-2/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-56 w-56 rounded-full bg-chart-3/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
          Why TerraCarbon?
        </p>
        <h2 className="text-center mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
          What Sets Us Apart
        </h2>

        <div className="mt-8 grid overflow-hidden rounded-xs border border-primary/20 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 items-start">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              // bg-background/70
              className={`${index < pillars.length - 1 ? 'border-b border-primary/20' : ''} ${index % 2 === 0 ? 'sm:border-r sm:border-primary/20' : 'sm:border-r-0'} ${index < 2 ? 'sm:border-b sm:border-primary/20' : 'sm:border-b-0'} ${index < pillars.length - 1 ? 'lg:border-r lg:border-primary/20' : 'lg:border-r-0'} lg:border-b-0`}
            >
              <WhyCard title={pillar.title} icon={pillar.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTerraCarbon;
