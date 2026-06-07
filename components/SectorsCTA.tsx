import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SectorsCTA = () => {
  return (
    <section className="bg-[#f7f8f6] px-4 py-20 text-center sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          Ready to advance your sector&apos;s climate goals?
        </h2>
        <p className="mt-9 max-w-2xl text-base font-medium leading-7 text-foreground/60">
          Connect with our advisory team to discuss tailoring a high-integrity carbon project
          strategy specific to your industry&apos;s unique challenges and opportunities.
        </p>
        <Link
          href="#"
          className="group mt-11 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-primary px-8 text-base font-bold text-white shadow-sm transition-colors duration-300 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f8f6]"
        >
          Contact Advisory Team
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default SectorsCTA;
