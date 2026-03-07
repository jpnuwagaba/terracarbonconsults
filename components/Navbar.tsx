'use client';

import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import {
	BriefcaseBusiness,
	ChevronDown,
	ChevronUp,
	Compass,
	Leaf,
	Search,
	ShieldCheck,
	Sparkles,
	Workflow,
    DecimalsArrowRight,
    Sprout,
    Hexagon,
    Scale,
    PersonStanding,
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
			'We design and deliver carbon market solutions that help climate projects move from early concept to verified impact and market readiness. Our team supports developers, investors, and institutions across the full carbon project lifecycle — from structuring and certification to monitoring, compliance, and credit commercialization.',
		items: [
			{ title: 'Carbon Project Development', icon: BriefcaseBusiness },
			{ title: 'MRV & Carbon Accounting', icon: DecimalsArrowRight },
			{ title: 'Climate Finance Advisory', icon: Sprout  },
			{ title: 'Carbon Markets & Policy', icon: Hexagon  },
			{ title: 'Corporate Net-Zero Advisory', icon: Scale  },
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
		imageSrc: 'https://images.pexels.com/photos/6153362/pexels-photo-6153362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
		imageSrc: 'https://images.pexels.com/photos/243138/pexels-photo-243138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		imageAlt: 'Focus areas and growth illustration',
	},
};

const Navbar = () => {
	const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);

	const activeSections = useMemo(() => {
		if (!activeDropdown) return null;
		return dropdownContent[activeDropdown];
	}, [activeDropdown]);

	const navItems: Array<{ label: string; key?: DropdownKey }> = [
		{ label: 'Services', key: 'what-we-do' },
		{ label: 'Approach', key: 'how-we-work' },
		{ label: 'Sectors', key: 'focus-areas' },
		{ label: 'About' },
	];

  return (
    <>
		<div className="relative" onMouseLeave={() => setActiveDropdown(null)}>
			<div className="grid grid-cols-3 bg-[#f1f1f1] px-10 py-5">
				{/* navbar list items */}
				<div className="flex flex-row items-center gap-5 text-sm font-bold text-primary justify-start">
					{navItems.map((item) => {
						const isActive = activeDropdown === item.key;
						const canOpen = Boolean(item.key);
						return (
							<span
								key={item.label}
								onMouseEnter={() => item.key && setActiveDropdown(item.key)}
								className={`inline-flex items-center gap-1 cursor-pointer transition-opacity ${canOpen ? 'hover:opacity-70' : ''} ${isActive ? 'opacity-70' : ''}`}
							>
								{item.label}
								{canOpen &&
									(isActive ? (
										<ChevronUp className="size-4" />
									) : (
										<ChevronDown className="size-4" />
									))}
							</span>
						);
					})}
				</div>
				{/* logo */}
				<div className="flex items-center justify-center">
					<span className="text-xl font-bold text-primary">CarbonTech</span>
				</div>
				{/* icons */}
				<div className="flex items-center gap-5 justify-end">
					<div className="bg-primary p-2 rounded-full">
						<Search className="text-secondary size-5" />
					</div>
				</div>
			</div>

			{activeDropdown && activeSections && (
				<div className="absolute left-0 top-full z-40 w-full border-t border-black/10 bg-white px-10 py-8 shadow-md">
					<div className="mx-auto max-w-7xl">
						<div className="grid items-stretch gap-8 md:grid-cols-[1.05fr_1fr_1px_1fr]">
							<div className="pt-2">
								<h3 className="text-xl font-bold text-primary">{activeSections.heading}</h3>
								<p className="mt-4 max-w-md text-sm leading-6 text-primary/80">
									{activeSections.description}
								</p>
							</div>

							<ul className="space-y-4">
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

							<div className="hidden bg-black/10 md:block" />

							<div className="rounded-2xl border border-black/10 bg-[#f4f5f2] p-1">
								<div className="relative h-full w-full min-h-[220px] overflow-hidden rounded-xl bg-white">
									<Image
										src={activeSections.imageSrc}
										alt={activeSections.imageAlt}
										fill
										sizes="(min-width: 768px) 33vw, 100vw"
										className="object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
    </>
  );
};

export default Navbar;
