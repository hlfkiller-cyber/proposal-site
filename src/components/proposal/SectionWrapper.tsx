import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <section className={cn(
      "min-h-screen w-full flex flex-col items-center justify-center p-8 relative animate-fade-in",
      className
    )}>
      {children}
    </section>
  );
}
