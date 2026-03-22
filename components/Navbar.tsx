'use client';

import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import {
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
  Compass,
  DecimalsArrowRight,
  Hexagon,
  Leaf,
  Menu,
  PersonStanding,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Sprout,
  Workflow,
  X,
} from 'lucide-react';

type DropdownKey = 'what-we-do' | 'how-we-work' | 'focus-areas';

type DropdownItem = {
  title: string;
  icon: React.ElementType;
};

type DropdownContent = {
  heading: string;
  description: string;
  items: DropdownItem[];
  imageSrc: `/${string}` | `http${string}`;
  imageAlt: string;
};

const dropdownContent: Record<DropdownKey, DropdownContent> = {
  'what-we-do': {
    heading: 'What We Do',
    description:
      'We design and deliver carbon market solutions that help climate projects move from early concept to verified impact and market readiness. Our team supports developers, investors, and institutions across the full carbon project lifecycle, from structuring and certification to monitoring, compliance, and credit commercialization.',
    items: [
      { title: 'Carbon Project Development', icon: BriefcaseBusiness },
      { title: 'MRV & Carbon Accounting', icon: DecimalsArrowRight },
      { title: 'Climate Finance Advisory', icon: Sprout },
      { title: 'Carbon Markets & Policy', icon: Hexagon },
      { title: 'Corporate Net-Zero Advisory', icon: Scale },
      { title: 'Capacity Building', icon: PersonStanding },
    ],
    imageSrc:
      'https://images.pexels.com/photos/3727689/pexels-photo-3727689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Global climate and carbon market illustration',
  },
  'how-we-work': {
    heading: 'How We Work',
    description:
      'Our approach combines technical rigor, transparent processes, and strong market insight to ensure carbon projects deliver real environmental and social value. We guide partners through each stage of development with clear methodologies, robust verification frameworks, and trusted engagement with global carbon standards.',
    items: [
      { title: 'Collaborative Discovery and Scoping', icon: Compass },
      { title: 'Iterative Delivery with Clear Milestones', icon: Workflow },
      { title: 'Long-Term Capacity Building', icon: ShieldCheck },
    ],
    imageSrc:
      'https://images.pexels.com/photos/6153362/pexels-photo-6153362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Structured approach and delivery illustration',
  },
  'focus-areas': {
    heading: 'Focus Areas',
    description:
      'We work across key sectors where carbon markets can deliver measurable climate impact and sustainable development benefits. Our focus includes nature-based solutions, clean energy transitions, and emerging digital tools that strengthen carbon measurement, reporting, and long-term project integrity.',
    items: [
      { title: 'Nature-Based Carbon Projects', icon: Leaf },
      { title: 'Community-Centered Climate Impact', icon: Sparkles },
      { title: 'Scalable Regional Portfolios', icon: Compass },
    ],
    imageSrc:
      'https://images.pexels.com/photos/243138/pexels-photo-243138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Focus areas and growth illustration',
  },
};

const navItems: Array<{ label: string; key?: DropdownKey }> = [
  { label: 'Services', key: 'what-we-do' },
  { label: 'Approach', key: 'how-we-work' },
  { label: 'Sectors', key: 'focus-areas' },
  { label: 'About' },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<DropdownKey | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSections = useMemo(() => {
    if (!activeDropdown) return null;
    return dropdownContent[activeDropdown];
  }, [activeDropdown]);

  useEffect(() => {
    const onScroll = () => {
      const shouldShrink = window.scrollY > 20;
      setIsScrolled((prev) => (prev === shouldShrink ? prev : shouldShrink));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f1f1f1]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f1f1f1]/90 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-none'}`}
      >
        <div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
          <div
            className={`mx-auto hidden w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-8 transition-[height] duration-300 lg:grid xl:px-10 ${isScrolled ? 'h-[70px]' : 'h-[84px]'}`}
          >
            <nav
              className={`flex items-center font-bold text-primary transition-[gap,font-size] duration-300 ${isScrolled ? 'gap-4 text-[13px]' : 'gap-5 text-sm'}`}
            >
              {navItems.map((item) => {
                const isActive = activeDropdown === item.key;
                const canOpen = Boolean(item.key);
                return (
                  <button
                    key={item.label}
                    type="button"
                    onMouseEnter={() => item.key && setActiveDropdown(item.key)}
                    onFocus={() => item.key && setActiveDropdown(item.key)}
                    className={`inline-flex items-center gap-1 transition-opacity ${canOpen ? 'cursor-pointer hover:opacity-70' : 'cursor-default'} ${isActive ? 'opacity-70' : ''}`}
                  >
                    {item.label}
                    {canOpen &&
                      (isActive ? (
                        <ChevronUp className="size-4" />
                      ) : (
                        <ChevronDown className="size-4" />
                      ))}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center justify-center">
              <span
                className={`whitespace-nowrap text-center font-bold text-primary transition-[font-size] duration-300 ${isScrolled ? 'text-base xl:text-lg' : 'text-lg xl:text-xl'}`}
              >
                TerraCarbonConsults
              </span>
            </div>

            <div className="flex items-center justify-end gap-2">
              <button
                  type="button"
                  className={`rounded-full bg-primary ${isScrolled ? 'py-1.5' : 'py-2'} transition-[padding,opacity] duration-300 px-3 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-chart-4`}
                >
                 Email Us
                </button>
              <button
                type="button"
                aria-label="Search"
                className={`rounded-full bg-primary transition-[padding,opacity] duration-300 hover:opacity-90 ${isScrolled ? 'p-1.5' : 'p-2'}`}
              >
                <Search
                  className={`text-secondary transition-[width,height] duration-300 ${isScrolled ? 'size-4.5' : 'size-5'}`}
                />
              </button>
            </div>
          </div>

          <div
            className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 transition-[height,padding] duration-300 sm:px-6 lg:hidden ${isScrolled ? 'h-14 py-2' : 'h-16 py-3'}`}
          >
            <span
              className={`font-bold tracking-tight text-primary transition-[font-size] duration-300 ${isScrolled ? 'text-sm sm:text-base' : 'text-base sm:text-lg'}`}
            >
              TerraCarbonConsults
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Search"
                className={`rounded-full bg-primary transition-[padding,opacity] duration-300 hover:opacity-90 ${isScrolled ? 'p-1.5' : 'p-2'}`}
              >
                <Search
                  className={`text-secondary transition-[width,height] duration-300 ${isScrolled ? 'size-4' : 'size-4 sm:size-5'}`}
                />
              </button>
              <button
                type="button"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => {
                  setIsMobileMenuOpen((prev) => !prev);
                  setMobileExpandedSection(null);
                }}
                className={`rounded-full border border-primary/20 bg-white text-primary transition-[padding,background-color] duration-300 hover:bg-primary/5 ${isScrolled ? 'p-1.5' : 'p-2'}`}
              >
                {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div
              id="mobile-navigation"
              className="border-t border-black/10 bg-white/95 px-4 pb-5 pt-4 shadow-sm sm:px-6 lg:hidden"
            >
              <nav className="space-y-3">
                {navItems.map((item) => {
                  if (!item.key) {
                    return (
                      <button
                        key={item.label}
                        type="button"
                        className="w-full rounded-lg border border-black/10 px-4 py-3 text-left text-sm font-semibold text-primary"
                      >
                        {item.label}
                      </button>
                    );
                  }

                  const content = dropdownContent[item.key];
                  const isExpanded = mobileExpandedSection === item.key;

                  return (
                    <div key={item.label} className="rounded-lg border border-black/10 px-4 py-3">
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpandedSection((prev) => (prev === item.key ? null : item.key as DropdownKey | null))
                        }
                        className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-primary"
                      >
                        {item.label}
                        {isExpanded ? (
                          <ChevronUp className="size-4 shrink-0" />
                        ) : (
                          <ChevronDown className="size-4 shrink-0" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-4 space-y-4 rounded-lg bg-[#f4f5f2] p-3 sm:p-4">
                          <p className="text-xs leading-6 text-primary/80 sm:text-sm">{content.description}</p>

                          <ul className="grid gap-2 sm:grid-cols-2">
                            {content.items.map((entry) => {
                              const Icon = entry.icon;
                              return (
                                <li key={entry.title} className="flex items-center gap-2">
                                  <span className="flex size-8 items-center justify-center rounded-full border border-primary/20 bg-white">
                                    <Icon className="size-4 text-primary" />
                                  </span>
                                  <span className="text-xs font-medium text-primary/90 sm:text-sm">
                                    {entry.title}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>

                          <div className="relative h-40 overflow-hidden rounded-xl border border-black/10 bg-white">
                            <Image
                              src={content.imageSrc}
                              alt={content.imageAlt}
                              fill
                              sizes="100vw"
                              className="object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          )}

          {activeDropdown && activeSections && (
            <div className="absolute left-0 top-full z-40 hidden w-full border-t border-black/10 bg-white px-8 py-8 shadow-md lg:block xl:px-10">
              <div className="mx-auto max-w-7xl">
                <div className="grid items-stretch gap-8 xl:grid-cols-[1.05fr_1fr_1px_1fr]">
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-primary">{activeSections.heading}</h3>
                    <p className="mt-4 max-w-md text-sm leading-6 text-primary/80">
                      {activeSections.description}
                    </p>
                  </div>

                  <ul className="grid content-start gap-4 md:grid-cols-2 xl:grid-cols-1">
                    {activeSections.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.title} className="flex items-center gap-3">
                          <span className="flex size-9 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
                            <Icon className="size-4 text-primary" />
                          </span>
                          <span className="text-sm font-medium text-primary/90">{item.title}</span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="hidden bg-black/10 xl:block" />

                  <div className="rounded-2xl border border-black/10 bg-[#f4f5f2] p-1">
                    <div className="relative h-full w-full min-h-[220px] overflow-hidden rounded-xl bg-white">
                      <Image
                        src={activeSections.imageSrc}
                        alt={activeSections.imageAlt}
                        fill
                        sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 36vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <div
        aria-hidden
        className={`transition-[height] duration-300 ${isScrolled ? 'h-14 lg:h-[70px]' : 'h-16 lg:h-[84px]'}`}
      />
    </>
  );
};

export default Navbar;
