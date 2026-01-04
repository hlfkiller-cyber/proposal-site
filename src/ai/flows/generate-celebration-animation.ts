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
  prompt: `You are a creative assistant helping to generate a personalized celebration message for a user who has accepted a proposal.

  The user's name is: {{{userName}}}.
  The proposer's name is: {{{proposerName}}}.

  Create a short, joyful, and heartfelt celebration message that acknowledges their acceptance.
  The message should express excitement and happiness.
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
