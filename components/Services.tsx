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
      className="group relative flex min-h-[220px] flex-col items-center gap-6 bg-white rounded-lg border border-border p-6 transition-all duration-300 hover:border-primary/50 sm:p-8 text-center"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-ring group-hover:bg-primary/20">
        <IconComponent className="h-6 w-6 " />
      </div>
      <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
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
    <section id="services" className="relative overflow-hidden py-14 bg-muted text-secondary sm:py-16 lg:py-20">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-chart-[#eeeeee]" />
      </div>

      {/* <div className="pointer-events-none absolute -left-20 top-12 h-52 w-52 rounded-full bg-chart-3/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-chart-2/15 blur-3xl" /> */}

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Services</p>
        <h2 className="text-center mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
          Carbon advisory and project delivery
        </h2>

        <div className="mt-10 grid overflow-hidden md:grid-cols-2 lg:grid-cols-3 lg:mt-12 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
