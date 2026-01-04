"use client";

import React, { useState, useTransition } from 'react';
import { Introduction } from '@/components/proposal/Introduction';
import { Reflection } from '@/components/proposal/Reflection';
import { Expression } from '@/components/proposal/Expression';
import { Question } from '@/components/proposal/Question';
import FloatingElements from '@/components/animations/FloatingElements';
import Confetti from '@/components/animations/Confetti';
import { handleYes, handleNo, handleInstagram } from '@/app/actions';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionWrapper } from '@/components/proposal/SectionWrapper';

type Step = 'intro' | 'reflection' | 'expression' | 'question' | 'response';
type ResponseType = 'yes' | 'no' | 'instagram' | null;

export default function Home() {
  const [step, setStep] = useState<Step>('intro');
  const [responseType, setResponseType] = useState<ResponseType>(null);
  const [responseMessage, setResponseMessage] = useState('');
  const [, startTransition] = useTransition();

  const handleContinue = () => {
    if (step === 'intro') setStep('reflection');
    else if (step === 'reflection') setStep('expression');
    else if (step === 'expression') setStep('question');
  };

  const onYes = () => {
    startTransition(async () => {
      setStep('response');
      setResponseType('yes');
      setResponseMessage("You just made my world brighter 💖");
      await handleYes();
    });
  };

  const onNo = () => {
    startTransition(async () => {
      setStep('response');
      setResponseType('no');
      setResponseMessage('Thank you for being honest. I still wish you happiness 🌸');
      await handleNo();
    });
  };

  const onInstagram = () => {
    startTransition(async () => {
      setStep('response');
      setResponseType('instagram');
      setResponseMessage("Okay… I’ll be waiting for your message on Instagram 😊");
      await handleInstagram();
    });
  };

  const renderStep = () => {
    switch (step) {
      case 'intro':
        return <Introduction onContinue={handleContinue} />;
      case 'reflection':
        return <Reflection onContinue={handleContinue} />;
      case 'expression':
        return <Expression onContinue={handleContinue} />;
      case 'question':
        return <Question onYes={onYes} onNo={onNo} onInstagram={onInstagram} />;
      case 'response':
        return (
          <SectionWrapper>
            <motion.div 
              className="text-center z-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <h2 className="text-3xl md:text-5xl font-headline font-bold max-w-3xl leading-tight">
                {responseMessage}
              </h2>
            </motion.div>
          </SectionWrapper>
        );
      default:
        return null;
    }
  };

  return (
    <main className="relative bg-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-animation" />
      <FloatingElements />
      {responseType === 'yes' && <Confetti />}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="relative z-10"
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
