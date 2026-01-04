"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';

type QuestionProps = {
  onYes: () => void;
  onNo: () => void;
  onInstagram: () => void;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      damping: 12,
      stiffness: 100,
    } 
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function Question({ onYes, onNo, onInstagram }: QuestionProps) {
  return (
    <SectionWrapper>
      <motion.div 
        className="text-center z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-5xl font-headline font-bold max-w-4xl mb-12 leading-tight"
        >
          Will you, Samikshya Subedi, be my Nitish's girlfriend… and someday, my wife and the mother of my children?
        </motion.h2>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          variants={containerVariants}
        >
          <motion.div variants={buttonVariants}>
            <Button onClick={onYes} size="lg" className="shadow-lg">
              YES 💖
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Button onClick={onNo} size="lg" variant="secondary">
              NO
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Button onClick={onInstagram} size="lg" variant="outline">
              I WILL TELL YOU ON INSTAGRAM 📩
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
