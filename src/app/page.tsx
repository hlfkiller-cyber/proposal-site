"use client";

import React, { useState, useTransition } from 'react';
import { Introduction } from '@/components/proposal/Introduction';
import { Reflection } from '@/components/proposal/Reflection';
import { Expression } from '@/components/proposal/Expression';
import { Question } from '@/components/proposal/Question';
import FloatingElements from '@/components/animations/FloatingElements';
import Confetti from '@/components/animations/Confetti';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionWrapper } from '@/components/proposal/SectionWrapper';
import { PasswordPrompt } from '@/components/proposal/PasswordPrompt';

type Step = 'password' | 'intro' | 'reflection' | 'expression' | 'question' | 'response';
type ResponseType = 'yes' | 'no' | 'instagram' | null;

export default function Home() {
  const [step, setStep] = useState<Step>('password');
  const [responseType, setResponseType] = useState<ResponseType>(null);
  const [responseMessage, setResponseMessage] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleCorrectPassword = () => {
    setStep('intro');
  };

  const handleContinue = () => {
    if (step === 'intro') setStep('reflection');
    else if (step === 'reflection') setStep('expression');
    else if (step === 'expression') setStep('question');
  };

  const handleResponse = async (response: 'Yes' | 'No' | 'Instagram') => {
    startTransition(async () => {
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ response }),
        });
      } catch (error) {
        console.error('Failed to send email:', error);
      }
    });

    setStep('response');

    if (response === 'Yes') {
      setResponseType('yes');
      setResponseMessage("You just made my world brighter 💖");
    } else if (response === 'No') {
      setResponseType('no');
      setResponseMessage('Thank you for being honest. I still wish you happiness 🌸');
    } else {
      setResponseType('instagram');
      setResponseMessage("Okay… I’ll be waiting for your message on Instagram 😊");
    }
  };

  const onYes = () => handleResponse('Yes');
  const onNo = () => handleResponse('No');
  const onInstagram = () => handleResponse('Instagram');


  const renderStep = () => {
    switch (step) {
      case 'password':
        return <PasswordPrompt onCorrectPassword={handleCorrectPassword} />;
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
