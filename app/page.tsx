import About from '@/components/About';
import Approach from '@/components/Approach';
import CTA from '@/components/CTA';
import FocusAreas from '@/components/FocusAreas';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import TypewriterText from '@/components/TypewriterText';
import Palette from '@/components/ui/Palette';
import WhyTerraCarbon from '@/components/WhyTerraCarbon';
import React from 'react';

export default function Page() {
	return (
		<>
			<Hero
				bgImg="https://images.unsplash.com/photo-1727584552853-eb8e709aa2aa?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				heading={
					<>
						Building High-Integrity Climate Solutions for{' '}
						<TypewriterText className='text-chart-1' words={['Business', 'The World', 'You']} />
					</>
				}
				paragraph="We help climate projects move from early concept to verified carbon credits through expert project development, rigorous monitoring, and trusted market connections."
			/>
			<About />
			{/* <Palette /> */}
			<Services />
			<WhyTerraCarbon />
			<Approach />
			<FocusAreas />
			<CTA />
		</>
	);
}
