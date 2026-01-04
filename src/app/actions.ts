'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

async function sendResponseEmail(subject: string, body: string) {
  if (!process.env.RESEND_API_KEY || !fromEmail || !toEmail) {
    console.error("Missing email environment variables. Skipping email.");
    return;
  }
  
  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: subject,
      html: `<p>${body}</p>`,
    });
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Failed to send email:", error);
  }
}

export async function handleYes() {
  const subject = "Response Received: YES 💕";
  const body = "She said yes! Congratulations!";
  console.log("==================================");
  console.log(subject);
  console.log(body);
  console.log("==================================");
  await sendResponseEmail(subject, body);
  return { success: true };
}

export async function handleNo() {
  const subject = "Response Received: NO";
  const body = "Response was no. Reaching out might be a good idea.";
  console.log("==================================");
  console.log(subject);
  console.log(body);
  console.log("==================================");
  await sendResponseEmail(subject, body);
  return { success: true };
}

export async function handleInstagram() {
  const subject = "Response Received: INSTAGRAM 📩";
  const body = "She will respond on Instagram. Keep an eye on your DMs!";
  console.log("==================================");
  console.log(subject);
  console.log(body);
  console.log("==================================");
  await sendResponseEmail(subject, body);
  return { success: true };
}
