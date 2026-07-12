import React from 'react';

type Hero3Props = {
    heroTitle?: string;
    bigTxt?: string;
    paragraphTxt?: string;
    heroImg?: string;
    heroThemeColor?: string;
};

export default function Hero3({
    heroTitle,
    bigTxt,
    paragraphTxt,
    heroImg,
    heroThemeColor
}: Hero3Props) {
    return (
        <section className="relative z-0 w-full bg-white pt-16 pb-16 md:pt-24 md:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
                    <div className="lg:col-span-7 space-y-4">
                        <div className="inline-flex text-muted-foreground text-md font-semibold tracking-wider uppercase">
                            {heroTitle}
                        </div>
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
                            style={{ color: heroThemeColor }}
                        >
                            {bigTxt}
                        </h1>
                    </div>

                    <div className="lg:col-span-5 lg:pt-14">
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                            {paragraphTxt}
                        </p>
                    </div>
                </div>

                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl group">
                    <img
                        src={heroImg}
                        alt="Hero visual"
                        className="w-full h-full object-cover brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20" />
                </div>
            </div>

            <div
                className="absolute bottom-0 left-0 right-0 h-24 md:h-72 -z-10"
                style={{ backgroundColor: heroThemeColor }}
            />
        </section>
    );
}