'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

type ResponseType = 'Yes' | 'No' | 'Instagram';

async function sendResponseEmail(response: ResponseType) {
  if (!process.env.RESEND_API_KEY || !fromEmail || !toEmail) {
    console.error("Missing email environment variables. Skipping email.");
    return;
  }

  const now = new Date().toLocaleString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  
  let subject = '';
  let body = '';

  switch (response) {
    case 'Yes':
      subject = "Congratulations – She Said YES 💕";
      body = `She said yes! Congratulations!<br/><br/>Response received at: ${now} UTC`;
      break;
    case 'No':
      subject = "Response Received – No";
      body = `The response was no. Reaching out might be a good idea.<br/><br/>Response received at: ${now} UTC`;
      break;
    case 'Instagram':
      subject = "Response Received – INSTAGRAM 📩";
      body = `She will respond on Instagram. Keep an eye on your DMs!<br/><br/>Response received at: ${now} UTC`;
      break;
  }

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: subject,
      html: `<p>${body}</p>`,
    });
    console.log(`Email sent successfully for response: ${response}`);
  } catch (error) {
    console.error(`Failed to send email for response: ${response}:`, error);
    // Even if email fails, we return success to not break the UI flow for the user.
  }
}

export async function handleYes() {
  await sendResponseEmail('Yes');
  return { success: true };
}

export async function handleNo() {
  await sendResponseEmail('No');
  return { success: true };
}

export async function handleInstagram() {
  await sendResponseEmail('Instagram');
  return { success: true };
}
