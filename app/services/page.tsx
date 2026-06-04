import Link from 'next/link';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

const ServicesPage = async () => {

    return (
        <>
            <Hero
                bgImg="https://plus.unsplash.com/premium_photo-1678743133528-9afcd2b72b70?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                heading="Our Services"
                paragraph="Comprehensive solutions for the entire carbon project
lifecycle, bridging the gap between ecological
preservation and global carbon markets."
            />
            <Services />
        </>
    )
}

export default ServicesPage
