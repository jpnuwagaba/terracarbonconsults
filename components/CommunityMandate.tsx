import Image from 'next/image';
import { HandCoins, Leaf, ShieldCheck } from 'lucide-react';

const communityPriorities = [
  {
    title: 'Equitable Benefit Sharing',
    description:
      'We support structures that ensure fair distribution of project value to local stakeholders and communities.',
    icon: HandCoins,
  },
  {
    title: 'Social & Environmental Safeguards',
    description:
      'We integrate social, environmental, and governance considerations to ensure responsible and sustainable project outcomes.',
    icon: ShieldCheck,
  },
  {
    title: 'Long-Term Sustainability',
    description:
      'We prioritize project designs that deliver lasting environmental impact and resilient community benefits.',
    icon: Leaf,
  },
];

const CommunityMandate = () => {
  return (
    <section className="bg-chart-1/5 py-16 text-primary sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Integrity & Impact
            </h2>
            <p className="mt-6 text-base leading-8 text-primary/80 sm:text-lg">
              We design carbon projects that balance environmental integrity with meaningful social
              outcomes.
            </p>

            <div className="mt-8 space-y-7">
              {communityPriorities.map((priority) => {
                const Icon = priority.icon;

                return (
                  <article key={priority.title} className="flex gap-5 items-center">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-chart-1 text-primary">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold leading-tight text-primary">
                        {priority.title}
                      </h3>
                      {/* <p className="mt-2 max-w-xl text-sm leading-6 text-primary/80 sm:text-base sm:leading-7">
                        {priority.description}
                      </p> */}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-xs shadow-xl shadow-primary/10 sm:min-h-[430px] lg:min-h-[560px]">
            <Image
              src="https://plus.unsplash.com/premium_photo-1717013838244-19a1941e9e71?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=1200"
              alt="Community representative documenting project details"
              fill
              sizes="(min-width: 1024px) 48vw, 92vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityMandate;
