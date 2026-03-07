import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Palette from '@/components/ui/Palette';
import React from 'react';

export default function Page() {
	return (
		<>
			<Navbar />
			<Hero />
			<Palette />
		</>
	);
}