'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Menu, Search, X } from 'lucide-react';
import Link from 'next/link';

const navItems: Array<{ label: string; href: string }> = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Approach', href: '/approach' },
  { label: 'Sectors', href: '/sectors' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        <div className="relative">
          <div
            className={`mx-auto hidden w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-8 transition-[height] duration-300 lg:grid xl:px-10 ${isScrolled ? 'h-[70px]' : 'h-[84px]'}`}
          >
            <div className="flex items-center justify-start">
              <Link
                href={'/'}
                className={`whitespace-nowrap text-center font-bold text-primary transition-[font-size] duration-300 ${isScrolled ? 'text-base xl:text-lg' : 'text-lg xl:text-xl'}`}
              >
                TerraCarbonConsults
              </Link>
            </div>

            <nav
              className={`flex items-center font-bold text-primary transition-[gap,font-size] duration-300 ${isScrolled ? 'gap-4 text-[13px]' : 'gap-5 text-sm'}`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-opacity hover:opacity-70"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-end gap-2">
              <Link className="cursor-pointer" href="mailto:info@terracarbonconsults.com">
                <button
                  type="button"
                  className={`rounded-full bg-primary ${isScrolled ? 'py-1.5' : 'py-2'} transition-[padding,opacity] duration-300 px-3 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-chart-4`}
                >
                  Email Us
                </button>
              </Link>
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
            <Link
              href={'/'}
              className={`font-bold tracking-tight text-primary transition-[font-size] duration-300 ${isScrolled ? 'text-sm sm:text-base' : 'text-base sm:text-lg'}`}
            >
              TerraCarbonConsults
            </Link>

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
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
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
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full rounded-lg border border-black/10 px-4 py-3 text-left text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
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
