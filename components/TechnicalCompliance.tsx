import { FileCheck2, ShieldCheck, Satellite } from 'lucide-react';

const complianceTags = ['MRV Systems', 'Global Standards', 'Verification Ready'];

const TechnicalCompliance = () => {
  return (
    <section className="bg-background py-16 text-primary sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-center lg:gap-14">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Technical Rigor &
              <br />
              Compliance
            </h2>
            <p className="mt-6 text-base leading-8 text-primary/80 sm:text-lg">
              We don&apos;t just follow standards; we help define the frontier of digital
              verification. Our commitment to the highest global protocols ensures our credits are
              bankable, durable, and transparent.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {complianceTags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex min-h-10 items-center justify-center rounded-xs border border-primary/15 bg-background px-5 text-sm font-semibold text-primary shadow-sm shadow-chart-4/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            <article className="min-h-[220px] rounded-xs bg-primary p-7 text-primary-foreground sm:p-8">
              <h3 className="text-2xl font-semibold leading-tight text-primary-foreground">
                Methodology
                <br />
                Alignment
              </h3>
              <p className="mt-5 max-w-sm text-base leading-7 text-primary-foreground/90">
                We help select and apply suitable carbon methodologies that match project type,
                geography, and reporting requirements.
              </p>
              <Satellite className="mt-8 size-9 text-secondary/80" strokeWidth={1.8} />

            </article>

            <article className="flex min-h-[220px] flex-col rounded-xs bg-muted p-7 text-primary sm:p-8">
              <h3 className="text-2xl font-semibold leading-tight text-primary">
                Verification Readiness
              </h3>
              <p className="mt-5 max-w-sm text-base leading-7 text-primary/80">
                We strengthen documentation, reporting structures, and technical consistency to
                support validation and verification processes.
              </p>
              <ShieldCheck className="mt-8 size-9 text-primary" strokeWidth={1.8} />
            </article>

            <article className="relative min-h-[150px] overflow-hidden rounded-xs bg-chart-5 p-7 text-secondary sm:col-span-2 sm:p-8">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-semibold leading-tight text-secondary">
                  MRV Frameworks
                </h3>
                <p className="mt-4 text-base leading-7 text-secondary/90">
                  We design monitoring, reporting, and verification systems that improve data
                  quality, transparency, and long-term compliance.
                </p>
              </div>

              <FileCheck2 className="mt-8 size-9 text-secondary/80" strokeWidth={1.8} />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalCompliance;
