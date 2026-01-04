"use client";
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <motion.section 
      className={cn(
        "min-h-screen w-full flex flex-col items-center justify-center p-8 relative",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <AnimatePresence>
        {children}
      </AnimatePresence>
    </motion.section>
  );
}
