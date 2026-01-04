"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type TypingAnimationProps = {
  text: string;
  className?: string;
  speed?: number;
  onCompleted?: () => void;
};

const TypingAnimation = ({ text, className, speed = 100, onCompleted }: TypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsCompleted(false);
    if (text) {
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i > text.length) {
          clearInterval(intervalId);
          setIsCompleted(true);
          if (onCompleted) {
            onCompleted();
          }
        }
      }, speed);
      return () => clearInterval(intervalId);
    }
  }, [text, speed, onCompleted]);

  return (
    <span className={cn(className, 'relative')}>
      {displayedText}
      {!isCompleted && <span className="inline-block w-[3px] h-[1em] ml-1 bg-foreground animate-pulse absolute top-0"></span>}
    </span>
  );
};

export default TypingAnimation;
