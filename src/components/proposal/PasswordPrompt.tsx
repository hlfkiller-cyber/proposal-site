"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';

type PasswordPromptProps = {
  onCorrectPassword: () => void;
};

const correctPassword = "14/02/2005";

export function PasswordPrompt({ onCorrectPassword }: PasswordPromptProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (password === correctPassword) {
      onCorrectPassword();
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Card className="w-full max-w-sm z-10">
          <CardHeader>
            <CardTitle className="text-2xl font-headline">A Special Message</CardTitle>
            <CardDescription>
              Please enter the password to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubmit} className="w-full">
              Enter
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </SectionWrapper>
  );
}
