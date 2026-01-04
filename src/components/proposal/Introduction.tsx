"use client";
import React, { useState } from 'react';
import TypingAnimation from '@/components/animations/TypingAnimation';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

type IntroductionProps = {
  onContinue: () => void;
};

export function Introduction({ onContinue }: IntroductionProps) {
  const [contentVisible, setContentVisible] = useState(false);

  return (
    <SectionWrapper>
      <div className="text-center z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-headline mb-8 h-24 flex items-center">
          <TypingAnimation
            text="Hey Samikshya 🌸"
            onCompleted={() => setTimeout(() => setContentVisible(true), 500)}
          />
        </h1>
        {contentVisible && (
          <div className="animate-fade-in">
            <p className="text-lg md:text-xl max-w-2xl mb-4">
              I didn’t want to say this casually in a chat.
            </p>
            <p className="text-lg md:text-xl max-w-2xl mb-4">
              I wanted to do it in a way that truly shows how much you mean to me.
            </p>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              You’re kind, thoughtful, and effortlessly special. Being around you makes things feel lighter, calmer, and happier.
            </p>
            <Button onClick={onContinue} size="lg">
              Continue <ArrowRight className="ml-2" />
            </Button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
