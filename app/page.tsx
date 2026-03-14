import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import WhyTerraCarbon from '@/components/WhyTerraCarbon';
import React from 'react';

export default function Page() {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<WhyTerraCarbon />
			<CTA />
		</>
	);
}
