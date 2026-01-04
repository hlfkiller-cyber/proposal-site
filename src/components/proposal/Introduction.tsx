"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';

type IntroductionProps = {
  onContinue: () => void;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export function Introduction({ onContinue }: IntroductionProps) {
  return (
    <SectionWrapper>
      <div className="text-center z-10 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-headline mb-8">
            Hey Samikshya 🌸
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mb-4">
            I didn’t want to say this casually in a chat.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mb-4">
            I wanted to do it in a way that truly shows how much you mean to me.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mb-8">
            You’re kind, thoughtful, and effortlessly special. Being around you makes things feel lighter, calmer, and happier.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button onClick={onContinue} size="lg">
              Continue <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
