import React from 'react'
import { getSectors } from '@/sanity/lib/sectors';
import Hero3 from '@/components/Hero3';
import PortableTextRenderer from '@/components/PortableTextRenderer';

type SectorPageProps = {
    params: Promise<{
        slug: string
    }>
}

const getTextContent = (value: unknown): string => {
  if (typeof value === 'string') {
    return value;
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === 'string') {
          return item;
        }

        if (item && typeof item === 'object' && 'children' in item) {
          const children = (item as { children?: Array<{ text?: string }> }).children ?? [];
          return children.map((child) => child.text ?? '').join('');
        }

        return '';
      })
      .filter(Boolean)
      .join(' ');
  }

  return '';
};

const page = async ({params}: SectorPageProps) => {
  const { slug } = await params;
  const sectors = await getSectors();
  const sector = sectors.find((s) => s.href === `/sectors/${slug}`);

  if (!sector) {
    return <div>Sector not found</div>;
  }

  const paragraphText = getTextContent(sector.description);

  return (
    <>
        <Hero3
            heroTitle={sector.title}
            bigTxt={sector.heroBigTxt || sector.summary}
            paragraphTxt={paragraphText}
            heroImg={sector.image || ''}
            heroThemeColor={'#0f766e'}
        />
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
            <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-10 prose prose-primary mt-12 prose-headings:font-semibold prose-headings:text-primary mb-12">
                <PortableTextRenderer content={sector.description} />
            </div>
        </div>
    </>
  )
}

export default page