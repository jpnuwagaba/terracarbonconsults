import Approach from '@/components/Approach';
import CTA from '@/components/CTA';
import FocusAreas from '@/components/FocusAreas';
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
			<Approach />
			<FocusAreas />
			<CTA />
		</>
	);
}
