import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'lucide-react';

type Service = {
  title: string;
  description: string;
  href: string;
};

const services: Service[] = [
  {
    title: 'Carbon Project Development',
    description:
      'We support carbon projects from early assessment and methodology selection to design, validation, and registration.',
    href: '#',
  },
  {
    title: 'MRV & Carbon Accounting',
    description:
      'We build reliable monitoring, reporting, and verification systems backed by strong data and carbon accounting practices.',
    href: '#',
  },
  {
    title: 'Climate Finance Advisory',
    description:
      'We help make projects investment-ready through financial modelling, structuring, and access to climate finance opportunities.',
    href: '#',
  },
  {
    title: 'Carbon Markets & Policy',
    description:
      'We advise on carbon trading, Article 6, market frameworks, and regulatory pathways for credible market participation.',
    href: '#',
  },
  {
    title: 'Net-Zero & Corporate Advisory',
    description:
      'We support organizations in measuring emissions, shaping decarbonization pathways, and working toward carbon neutrality goals.',
    href: '#',
  },
  {
    title: 'Capacity Building & Training',
    description:
      'We deliver training, workshops, and advisory support to strengthen carbon market knowledge across teams and institutions.',
    href: '#',
  },
];

type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col min-h-[220px] items-start justify-between gap-6 border border-secondary/15 bg-chart-4/10 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-chart-3/20 sm:p-8"
    >
      <div className="flex flex-row items-start justify-between">
        <h3 className="text-3xl font-semibold leading-tight text-secondary sm:text-4xl">{service.title}</h3>
        <span className="inline-flex shrink-0 items-center justify-center text-secondary/85 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-secondary -rotate-45 group-hover:rotate-0">
          <ArrowRight className="size-14 stroke-[1.35] sm:size-16" />
        </span>
      </div>
      <div><p className="mt-4 text-base leading-7 text-secondary/85 sm:text-lg">{service.description}</p></div>
    </Link>
  );
};

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-chart-5 py-14 text-secondary sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-20 top-12 h-52 w-52 rounded-full bg-chart-3/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-chart-2/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-secondary/70">Services</p>
        <h2 className="text-center mt-4 text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
          Carbon Advisory and Project Delivery
        </h2>

        <div className="mt-10 grid overflow-hidden border border-secondary/15 md:grid-cols-2 lg:mt-12">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
