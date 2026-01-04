"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

type ExpressionProps = {
  onContinue: () => void;
};

export function Expression({ onContinue }: ExpressionProps) {
  return (
    <SectionWrapper>
      <div className="text-center z-10 flex flex-col items-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-headline mb-8">Why I care about you</h2>
          <p className="text-lg md:text-xl max-w-2xl mb-4">
            What I love about you is not just one thing.
          </p>
          <p className="text-lg md:text-xl max-w-2xl mb-4">
            It’s the way you talk, the way you think, the way you exist.
          </p>
          <p className="text-lg md:text-xl max-w-2xl mb-4">
            I care about your happiness, your dreams, and your peace.
          </p>
          <p className="text-lg md:text-xl max-w-2xl mb-8 italic">
            I don’t want to just be someone in your life — I want to be someone who supports you, respects you, and stands beside you.
          </p>
          <Button onClick={onContinue} size="lg">
            Continue <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
