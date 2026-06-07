import React from 'react'
import { getServices, type Service } from '@/sanity/lib/services';
import PortableTextRenderer from '@/components/PortableTextRenderer';

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
    <div className="min-h-screen py-20">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-10">
        <h1 className="text-4xl font-bold text-primary mb-4">{service.title}</h1>
        <div className="prose prose-primary max-w-none">
          <PortableTextRenderer content={service.description} />
        </div>
      </div>
    </div>
  )
}

export default page