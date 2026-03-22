import Link from 'next/link';
import React from 'react';
import { Mail } from 'lucide-react';
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#' },
  { label: 'Approach', href: '#' },
  { label: 'Sectors', href: '#' },
  { label: 'Insights', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Partnerships', href: '#' },
  { label: 'Contact', href: '#' },
];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: FaLinkedinIn,
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com',
    icon: FaXTwitter,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com',
    icon: FaYoutube,
  },
  {
    label: 'Email',
    href: 'mailto:info@terracarbonconsults.com',
    icon: Mail,
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-secondary">
      <div aria-hidden className="absolute inset-0">
        <div className="h-full w-full bg-[url('/assets/footer-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-linear-to-br from-chart-5/85 via-chart-5/75 to-chart-4/80" />
      </div>

      <div className="pointer-events-none absolute -right-36 top-10 h-80 w-80 rounded-full bg-chart-4/45 blur-3xl" />
      <div className="pointer-events-none absolute right-14 top-52 h-72 w-72 rounded-full bg-chart-3/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-24 h-72 w-72 rounded-full bg-chart-2/25 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1500px] gap-0 lg:grid-cols-[220px_1fr]">
        <div className="hidden border-r border-secondary/15 px-8 py-16 lg:flex lg:items-center lg:justify-center">
          <p className="[writing-mode:vertical-rl] rotate-180 text-center text-5xl font-bold uppercase tracking-[0.2em] text-secondary/90">
            Climate Solutions Built With Integrity
          </p>
        </div>

        <div className="px-5 pb-10 pt-14 sm:px-8 md:px-10 lg:px-14 xl:px-20">
          <p className="mb-10 text-center text-xs font-semibold uppercase tracking-[0.25em] text-secondary/75 lg:hidden">
            Climate Solutions Built With Integrity
          </p>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1fr_1.2fr] xl:gap-16">
            <div>
              <h3 className="text-3xl font-bold uppercase tracking-[0.08em] text-secondary">Navigate</h3>
              <ul className="mt-6 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-secondary/90 transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold uppercase tracking-[0.08em] text-secondary">Contact</h3>
              <div className="mt-6 space-y-5 text-secondary/90">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-secondary/70">Email</p>
                  <Link
                    href="mailto:info@terracarbonconsults.com"
                    className="mt-2 block text-base font-medium transition-colors hover:text-secondary"
                  >
                    info@terracarbonconsults.com
                  </Link>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-secondary/70">Head Office</p>
                  <p className="mt-2 text-base leading-7">
                    TerraCarbon Consults
                    <br />
                    Kampala, Uganda
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-secondary/70">Regional Engagement</p>
                  <p className="mt-2 text-base leading-7">
                    Supporting carbon projects across
                    <br />
                    Africa&apos;s climate and carbon markets
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-2 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-chart-4"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold uppercase tracking-[0.08em] text-secondary">Social</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-chart-4"
                    >
                      <Icon className="size-5" />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-10">
                <h4 className="text-2xl font-bold uppercase tracking-[0.05em] text-secondary">
                  Join Our Climate Insights
                </h4>
                <p className="mt-4 max-w-md text-base leading-7 text-secondary/90">
                  Receive updates on carbon markets, climate finance opportunities, and insights on
                  developing high-integrity carbon projects across Africa.
                </p>

                <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    name="newsletter-email"
                    type="email"
                    placeholder="Email address"
                    className="h-12 w-full rounded-full border border-border bg-secondary px-5 text-sm text-secondary-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold uppercase tracking-[0.08em] text-primary-foreground transition-colors hover:bg-chart-4"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-secondary/15">
        <div className="mx-auto grid w-full max-w-[1500px] gap-5 px-5 py-6 text-sm text-secondary/80 sm:px-8 md:grid-cols-3 md:items-center md:px-10 lg:px-14 xl:px-20">
          <p className="font-medium text-secondary">TerraCarbon Consults</p>
          <div className="flex gap-5 md:justify-center">
            <Link href="#" className="transition-colors hover:text-secondary">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-secondary">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="md:text-right">&copy; 2026 TerraCarbon Consults. All rights reserved.</p>
        </div>
        <p className="mx-auto max-w-[1500px] px-5 pb-8 text-xs text-secondary/65 sm:px-8 md:px-10 lg:px-14 xl:px-20">
          Advisory services for carbon markets, climate finance, and project development.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
