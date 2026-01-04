"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from './SectionWrapper';

type QuestionProps = {
  onYes: () => void;
  onNo: () => void;
  onInstagram: () => void;
};

export function Question({ onYes, onNo, onInstagram }: QuestionProps) {
  return (
    <SectionWrapper>
      <div className="text-center z-10 flex flex-col items-center animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-headline font-bold max-w-4xl mb-12 leading-tight">
          Will you, Samikshya Subedi, be my Nitish's girlfriend… and someday, my wife and the mother of my children?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={onYes} size="lg" className="shadow-lg">
            YES 💖
          </Button>
          <Button onClick={onNo} size="lg" variant="secondary">
            NO
          </Button>
          <Button onClick={onInstagram} size="lg" variant="outline">
            I WILL TELL YOU ON INSTAGRAM 📩
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
