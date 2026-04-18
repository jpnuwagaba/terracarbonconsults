const methodologySteps = [
  {
    number: '01',
    title: 'Assessment',
    description:
      'Initial scoping, baseline determination, and rigorous feasibility analysis of the project site.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Developing technical documentation (PDD) aligned with international standards (Verra, Gold Standard).',
  },
  {
    number: '03',
    title: 'Validation',
    description:
      'Engaging third-party auditors to validate project design and carbon sequestration claims.',
  },
  {
    number: '04',
    title: 'Implementation',
    description:
      'Full-scale project execution with integrated digital MRV for real-time data tracking.',
  },
  {
    number: '05',
    title: 'Issuance',
    description:
      'Final verification and successful issuance of high-quality carbon credits to registries.',
  },
];

const Methodology = () => {
  return (
    <section id="methodology" className="bg-muted text-primary">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-5 md:grid-cols-[1fr_minmax(260px,0.42fr)] md:items-end md:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-chart-1">
              Methodology
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              The Pathway to
              <br />
              Issuance
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-primary/75 sm:text-lg md:max-w-sm">
            A rigorous, science-based approach designed to minimize risk and maximize environmental
            integrity.
          </p>
        </div>

        <div className="mt-10 grid border-t border-primary/15 sm:mt-12 md:grid-cols-5">
          {methodologySteps.map((step) => (
            <article
              key={step.number}
              className="relative min-h-[190px] border-t border-primary/15 px-5 pb-6 pt-16 sm:px-6 md:border-t-0"
            >
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 text-5xl font-bold leading-none text-chart-1/35 sm:right-6"
              >
                {step.number}
              </span>
              <h3 className="relative text-xl font-semibold leading-tight text-primary">
                {step.title}
              </h3>
              <p className="relative mt-4 max-w-[15rem] text-sm leading-6 text-primary/75">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
