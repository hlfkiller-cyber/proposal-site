'use server';
/**
 * @fileOverview Generates a personalized celebration animation message.
 *
 * - generateCelebrationAnimation - A function that generates a celebration message.
 * - GenerateCelebrationAnimationInput - The input type for the generateCelebrationAnimation function.
 * - GenerateCelebrationAnimationOutput - The return type for the generateCelebrationAnimation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCelebrationAnimationInputSchema = z.object({
  userName: z.string().describe('The name of the user who accepted the proposal.'),
  proposerName: z.string().describe('The name of the person proposing.'),
});
export type GenerateCelebrationAnimationInput = z.infer<typeof GenerateCelebrationAnimationInputSchema>;

const GenerateCelebrationAnimationOutputSchema = z.object({
  celebrationMessage: z.string().describe('A personalized celebration message.'),
});
export type GenerateCelebrationAnimationOutput = z.infer<typeof GenerateCelebrationAnimationOutputSchema>;

export async function generateCelebrationAnimation(input: GenerateCelebrationAnimationInput): Promise<GenerateCelebrationAnimationOutput> {
  return generateCelebrationAnimationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCelebrationAnimationPrompt',
  input: {schema: GenerateCelebrationAnimationInputSchema},
  output: {schema: GenerateCelebrationAnimationOutputSchema},
  prompt: `You are a creative assistant tasked with writing a joyful and heartfelt celebration message.
The message is for {{{userName}}}, who has just accepted a marriage proposal from {{{proposerName}}}.

Please craft a message that is:
- Extremely happy and celebratory.
- Short and impactful (2-3 sentences).
- Personalized with their names.
- Expresses the beginning of a beautiful journey together.

Example tone: "And so the adventure begins! Congratulations, [userName] and [proposerName]! Wishing you a lifetime of love and laughter."
`,
});

const generateCelebrationAnimationFlow = ai.defineFlow(
  {
    name: 'generateCelebrationAnimationFlow',
    inputSchema: GenerateCelebrationAnimationInputSchema,
    outputSchema: GenerateCelebrationAnimationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
