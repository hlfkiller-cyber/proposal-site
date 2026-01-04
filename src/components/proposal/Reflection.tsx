"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

type ReflectionProps = {
  onContinue: () => void;
};

export function Reflection({ onContinue }: ReflectionProps) {
  return (
    <SectionWrapper>
      <div className="text-center z-10 flex flex-col items-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-headline mb-8">A little about me...</h2>
          <p className="text-lg md:text-xl max-w-2xl mb-4">
            I want to be honest with you.
          </p>
          <p className="text-lg md:text-xl max-w-2xl mb-4">
            I’m not perfect — I have ADHD, which sometimes makes me overthink, feel too deeply, or get lost in my thoughts.
          </p>
          <p className="text-lg md:text-xl max-w-2xl mb-4">
            I’ve also been through things in my past that shaped me — made me stronger, more understanding, and more patient.
          </p>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            I’m still growing, learning, and becoming a better version of myself every day.
          </p>
          <Button onClick={onContinue} size="lg">
            Continue <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
