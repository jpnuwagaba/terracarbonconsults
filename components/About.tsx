import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const stats = [
  {
    label: 'Research Excellence',
    caption: 'Data-led carbon innovation with scientific rigor.',
  },
  {
    label: 'Strategic Partnerships',
    caption: 'Collaborating with academic, public, and private leaders.',
  },
  {
    label: 'Impact Delivery',
    caption: 'Turning ideas into verified, measurable climate outcomes.',
  },
];

const About = () => {
  return (
    <section className="bg-linear-to-b from-background via-chart-1/5 to-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground">About Our Institute</p>            
            <p className="mt-6 text-base leading-8 text-primary/80 sm:text-lg">
              Founded to accelerate the transition to a sustainable future, our institute combines rigorous
              science with market-focused expertise. We develop climate solutions that are technically robust,
              commercially viable, and designed to deliver measurable emissions reduction.
            </p>
            <p className="mt-5 text-base leading-8 text-primary/80 sm:text-lg">
              Our multidisciplinary team works across research, engineering, and policy to create practical
              pathways for clean energy, nature-based solutions, and circular systems that build long-term value.
            </p>

            {/* <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-primary/15 bg-background/80 p-6 shadow-sm shadow-chart-2/10">
                  <p className="text-lg font-semibold tracking-tight text-primary">{item.label}</p>
                  <p className="mt-3 text-sm leading-7 text-primary/75">{item.caption}</p>
                </div>
              ))}
            </div> */}

            <div className="mt-10">
              <Link
                href="about"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-chart-4"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-[1.05fr_0.95fr] lg:gap-6">
            <div className="relative overflow-hidden rounded-xs bg-background/90 shadow-xl shadow-chart-4/10 lg:-translate-y-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1677849935697-94cea04f344a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
                alt="Sustainable agricultural landscape with wind turbines"
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-xs bg-background/90 shadow-xl shadow-chart-4/10 lg:translate-y-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1680206588050-82f95cc7237b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8"
                alt="Solar panel structure against a clear blue sky"
                width={700}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
