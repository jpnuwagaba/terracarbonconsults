import React from 'react'
import { getServices } from '@/sanity/lib/services';
import PortableTextRenderer from '@/components/PortableTextRenderer';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Hero2 from '@/components/Hero2';

type ServicePageProps = {
  params: Promise<{
    slug: string
  }>
}

const page = async ({ params }: ServicePageProps) => {
  const { slug } = await params;
  const services = await getServices();

  // Find the service matching the slug
  const service = services.find((s) => s.href === `/services/${slug}`);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Service not found</p>
      </div>
    );
  }

  return (
    <div className="">
      <Hero2
        bgImg={service.serviceImage ? urlFor(service.serviceImage).width(1200).url() : ''}
        heading={service.title}
        paragraph={service.summary}
      />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">

        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-10 prose prose-primary mt-12 prose-headings:font-semibold prose-headings:text-primary mb-12">
          <PortableTextRenderer content={service.description} />
        </div>
      </div>
    </div>
  )
}

export default page
