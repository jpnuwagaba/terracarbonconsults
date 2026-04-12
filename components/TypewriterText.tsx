'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  holdDelay?: number;
  className?: string;
}

const TypewriterText = ({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  holdDelay = 1400,
  className = '',
}: TypewriterTextProps) => {
  const safeWords = words.length > 0 ? words : [''];
  const [wordIndex, setWordIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = safeWords[wordIndex % safeWords.length] ?? '';

  useEffect(() => {
    const isWordTyped = characterIndex === currentWord.length;
    const isWordDeleted = characterIndex === 0;
    const timeoutDelay = isWordTyped && !isDeleting
      ? holdDelay
      : isDeleting
        ? deletingSpeed
        : typingSpeed;

    const timer = window.setTimeout(() => {
      if (!isDeleting && !isWordTyped) {
        setCharacterIndex((currentIndex) => currentIndex + 1);
        return;
      }

      if (!isDeleting && isWordTyped) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && !isWordDeleted) {
        setCharacterIndex((currentIndex) => currentIndex - 1);
        return;
      }

      setIsDeleting(false);
      setWordIndex((currentIndex) => (currentIndex + 1) % safeWords.length);
    }, timeoutDelay);

    return () => window.clearTimeout(timer);
  }, [
    characterIndex,
    currentWord.length,
    deletingSpeed,
    holdDelay,
    isDeleting,
    safeWords.length,
    typingSpeed,
  ]);

  return (
    <span className={className}>
      <span className="sr-only">{safeWords[0]}</span>
      <span
        aria-hidden="true"
        className="inline-flex min-w-[9ch] items-baseline justify-center whitespace-nowrap"
      >
        {currentWord.slice(0, characterIndex)}
        <span className="ml-1 inline-block h-[0.9em] w-[0.08em] animate-pulse bg-current align-[-0.05em]" />
      </span>
    </span>
  );
};

export default TypewriterText;
