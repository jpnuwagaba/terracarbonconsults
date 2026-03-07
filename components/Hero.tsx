import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <div className="grid min-h-[calc(100vh-84px)] md:grid-cols-2">
                <div className="bg-chart">
                    <div className="mx-auto flex h-full w-full max-w-3xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
                        <h1 className="max-w-[18ch] text-4xl font-bold leading-[1.03] tracking-tight text-primary sm:text-5xl lg:text-7xl">
                            Building High-Integrity Carbon Projects for Africa
                        </h1>

                        <p className="mt-8 max-w-[36ch] text-base leading-8 text-primary/80 sm:text-xl">
                            We help climate projects move from early concept to verified carbon credits
                            through expert project development, rigorous monitoring, and trusted market
                            connections.
                        </p>

                        <button
                            type="button"
                            className="mt-10 inline-flex w-fit rounded-full bg-primary px-8 py-4 text-sm font-bold tracking-wide text-secondary shadow-lg shadow-primary/25 transition-opacity hover:opacity-90"
                        >
                            Explore Our Services
                        </button>
                    </div>
                </div>

                <div className="relative bg-chart">
                    <div className="absolute inset-y-0 left-0 hidden w-px bg-linear-to-b from-chart-1 to-chart md:block" />

                    <div className="relative flex h-full items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
                        <div className="absolute h-[78%] w-[70%] max-w-[420px] rounded-3xl bg-card/40" />
                        <Image
                            src="/assets/carbon-graphic.svg"
                            alt="Carbon project package artwork"
                            fill
                            priority
                            sizes="(min-width: 1024px) 34vw, (min-width: 768px) 42vw, 100vw"
                            className="object-contain p-2"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
