import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import {getServices, type Service} from '@/sanity/lib/services';

const toPascalCase = (value: string) =>
  value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

const isLucideIcon = (icon: unknown): icon is LucideIcon =>
  typeof icon === 'object' && icon !== null && '$$typeof' in icon && 'render' in icon;

const getIconComponent = (icon?: string): LucideIcon => {
  if (!icon) {
    return LucideIcons.Sparkles;
  }

  const iconName = toPascalCase(icon);
  const iconComponent = LucideIcons[iconName as keyof typeof LucideIcons];

  return isLucideIcon(iconComponent) ? iconComponent : LucideIcons.Sparkles;
};

type ServiceCardProps = {
  service: Service & {
    iconComponent: LucideIcon;
  };
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const IconComponent = service.iconComponent;
  return (
    <Link
      href={service.href}
      className="group relative flex min-h-[220px] flex-col items-start gap-6 border border-secondary/15 bg-chart-4/24 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-chart-4/16 sm:p-8"
    >
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col items-start gap-3">
          <IconComponent className="size-14 text-secondary/70 inline-flex shrink-0 items-center justify-center text-secondary/85 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-secondary group-hover:translate-x-4 group-hover:-rotate-10" />
          <h3 className="mt-4 text-3xl font-semibold leading-tight text-secondary sm:text-4xl">{service.title}</h3>
        </div>
        {/* <span className="inline-flex shrink-0 items-center justify-center text-secondary/85 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-secondary -rotate-45 group-hover:rotate-0">
          <ArrowRight className="size-8 stroke-[1.35]" />
        </span> */}
      </div>
      <div>
        <p className="mt-4 text-base leading-7 text-secondary/85 sm:text-lg">{service.description}</p>
      </div>
    </Link>
  );
};

const getServiceCards = async (): Promise<ServiceCardProps['service'][]> => {
  const services = await getServices();

  return services.map((service) => ({
    ...service,
    iconComponent: getIconComponent(service.icon),
  }));
};

const Services = async () => {
  const services = await getServiceCards();

  return (
    <section id="services" className="relative overflow-hidden py-14 text-secondary sm:py-16 lg:py-20">
      <div aria-hidden className="absolute inset-0">
        <div className="h-full w-full bg-[url('https://images.pexels.com/photos/243138/pexels-photo-243138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-chart-5/80" />
      </div>

      <div className="pointer-events-none absolute -left-20 top-12 h-52 w-52 rounded-full bg-chart-3/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-chart-2/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-secondary/70">Services</p>
        <h2 className="text-center mt-4 text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
          Carbon advisory and project delivery
        </h2>

        <div className="mt-10 grid overflow-hidden border border-secondary/15 md:grid-cols-2 lg:mt-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
