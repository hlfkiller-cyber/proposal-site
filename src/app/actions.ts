'use server';

export async function handleYes() {
  console.log("Response: YES. Subject: Congratulations – She Said YES 💕 Email sent to hlfkiller@gmail.com");
  // In a real app, you would use a service like Resend, Nodemailer, or SendGrid
  // e.g., await resend.emails.send({ ... });
  return { success: true };
}

export async function handleNo() {
  console.log("Response: NO. Subject: Response Received – No. Email sent to hlfkiller@gmail.com");
  return { success: true };
}

export async function handleInstagram() {
  console.log("Response: INSTAGRAM. Subject: Response Received – She Will tell you in Instagram. Email sent to hlfkiller@gmail.com");
  return { success: true };
}
