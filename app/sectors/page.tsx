import React from 'react'
import Image from 'next/image'
import { ShieldCheck } from 'lucide-react'
import Hero from '@/components/Hero'
import SectorsCTA from '@/components/SectorsCTA'

import { getSectors, type Sector } from '@/sanity/lib/sectors';
import Link from 'next/link';

type FocusCardProps = {
    area: Sector;
    index: number;
};

const getDescriptionText = (description: unknown): string => {
    if (typeof description === 'string') {
        return description;
    }

    if (Array.isArray(description)) {
        return description
            .map((item) => {
                if (typeof item === 'string') {
                    return item;
                }

                if (item && typeof item === 'object' && 'children' in item) {
                    const children = (item as { children?: Array<{ text?: string }> }).children ?? [];
                    return children.map((child) => child.text ?? '').join('');
                }

                return '';
            })
            .filter(Boolean)
            .join(' ');
    }

    return '';
};

const FocusCard = ({ area, index }: FocusCardProps) => {
    return (
        <Link href={area.href} className="group relative block cursor-pointer h-full">
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
                    <p className="mt-3 text-base leading-7 text-primary/80">{getDescriptionText(area.description)}</p>
                </div>
            </article>
        </Link>
    );
};

const page = async () => {
    const focusAreas = await getSectors();

    return (
        <>
            <Hero
                bgImg="https://images.unsplash.com/photo-1635695604201-2b718204bccb?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                heading="Focus Areas"
                paragraph="Our delivery model adapts to high-impact sectors where strong project design and measurable outcomes are critical for sustainable global transitions."
            />
            <section className="bg-[#f7f8f6] py-20 sm:py-24 lg:py-28">
                <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.08fr] lg:gap-20 lg:px-10">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                            Cross-Sector Expertise
                        </p>
                        <h2 className="mt-6 max-w-xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                            Driving impact across the climate economy.
                        </h2>
                        <p className="mt-8 max-w-xl text-base leading-8 text-foreground/80">
                            Global climate targets require a multifaceted approach. By
                            applying rigorous scientific methodologies across diverse
                            industries, we ensure that every ton of carbon reduced or removed
                            is scientifically valid, economically viable, and environmentally
                            sound.
                        </p>

                        <div className="mt-12 flex items-center gap-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                                <ShieldCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground">
                                    Verified Outcomes
                                </h3>
                                <p className="mt-1 text-sm text-foreground/75">
                                    Bankable, durable credits.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-xl">
                        <div className="overflow-hidden rounded-xs bg-white shadow-2xl shadow-black/15">
                            <div className="relative mx-auto sm:min-h-[430px] lg:min-h-[560px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1520121401995-928cd50d4e27?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Close-up of a green leaf showing its veins"
                                    fill
                                    sizes="(min-width: 1024px) 48vw, 92vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="focus-areas" className="relative overflow-hidden bg-white py-16 sm:py-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:gap-8 items-stretch">
                    {focusAreas.map((area, index) => (
                        <FocusCard key={area.title} area={area} index={index} />
                    ))}
                </div>
            </section>
            <SectorsCTA />
        </>
    )
}

export default page
