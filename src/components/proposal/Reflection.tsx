"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';

type ReflectionProps = {
  onContinue: () => void;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};


export function Reflection({ onContinue }: ReflectionProps) {
  return (
    <SectionWrapper>
      <div className="text-center z-10 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-headline mb-8">A little about me...</motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mb-4">
            I want to be honest with you.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mb-4">
            I’m not perfect — I have ADHD, which sometimes makes me overthink, feel too deeply, or get lost in my thoughts.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mb-4">
            I’ve also been through things in my past that shaped me — made me stronger, more understanding, and more patient.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mb-8">
            I’m still growing, learning, and becoming a better version of myself every day.
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
