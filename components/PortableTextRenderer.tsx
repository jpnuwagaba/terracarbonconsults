'use client';

import { PortableText } from '@portabletext/react';
import type { PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@/sanity/lib/services';

type PortableTextRendererProps = {
  content: string | PortableTextBlock[] | unknown;
};

type PortableTextChildrenProps = {
  children?: React.ReactNode;
};

const PortableTextRenderer = ({ content }: PortableTextRendererProps) => {
  // If it's a string, just render it as a paragraph
  if (typeof content === 'string') {
    return <p className="text-lg text-primary/80 leading-relaxed mb-4">{content}</p>;
  }

  // If it's not an array, return null
  if (!Array.isArray(content)) {
    return null;
  }

  // Custom components for portable text blocks
  const components = {
    block: {
      normal: ({ children }) => (
        <p className="text-lg text-primary/80 leading-relaxed mb-4">
          {children}
        </p>
      ),
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold text-primary mt-8 mb-4">
          {children}
        </h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-bold text-primary mt-6 mb-3">
          {children}
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-bold text-primary mt-5 mb-2">
          {children}
        </h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-xl font-bold text-primary mt-4 mb-2">
          {children}
        </h4>
      ),
      h5: ({ children }) => (
        <h5 className="text-lg font-bold text-primary mt-3 mb-2">
          {children}
        </h5>
      ),
      h6: ({ children }) => (
        <h6 className="text-base font-bold text-primary mt-2 mb-1">
          {children}
        </h6>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-primary/30 pl-4 py-2 my-4 italic text-primary/70">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: PortableTextChildrenProps) => (
        <ul className="list-disc list-inside space-y-2 my-4 text-lg text-primary/80 ml-4">
          {children}
        </ul>
      ),
      number: ({ children }: PortableTextChildrenProps) => (
        <ol className="list-decimal list-inside space-y-2 my-4 text-lg text-primary/80 ml-4">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: PortableTextChildrenProps) => (
        <li className="mb-2">{children}</li>
      ),
      number: ({ children }: PortableTextChildrenProps) => (
        <li className="mb-2">{children}</li>
      ),
    },
    marks: {
      strong: ({ children }: PortableTextChildrenProps) => (
        <strong className="font-bold text-primary">{children}</strong>
      ),
      em: ({ children }: PortableTextChildrenProps) => (
        <em className="italic">{children}</em>
      ),
      code: ({ children }: PortableTextChildrenProps) => (
        <code className="bg-primary/10 px-2 py-1 rounded font-mono text-sm">
          {children}
        </code>
      ),
      underline: ({ children }: PortableTextChildrenProps) => (
        <u className="underline">{children}</u>
      ),
    },
  } satisfies PortableTextComponents;

  return (
    <div className="prose prose-primary max-w-none">
      <PortableText value={content as PortableTextBlock[]} components={components} />
    </div>
  );
};

export default PortableTextRenderer;
