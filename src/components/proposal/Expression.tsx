"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';

type ExpressionProps = {
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

export function Expression({ onContinue }: ExpressionProps) {
  return (
    <SectionWrapper>
      <div className="text-center z-10 flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-headline mb-8">Why I care about you</motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mb-4">
            What I love about you is not just one thing.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mb-4">
            It’s the way you talk, the way you think, the way you exist.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mb-4">
            I love your Dara , your Voice and everything that your are or have.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mb-4">
            I care about your happiness, your dreams, and your peace.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-2xl mb-8 italic">
            I don’t want to just be someone in your life — I want to be someone who supports you, respects you, and stands beside you.
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
