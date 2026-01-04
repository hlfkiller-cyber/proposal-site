'use server';

export async function handleYes() {
  // In a real app, you would integrate an email service like Resend or SendGrid here.
  // For now, we log the response to the server console.
  console.log("==================================");
  console.log("Response Received: YES 💕");
  console.log("She said yes! Congratulations!");
  console.log("==================================");
  return { success: true };
}

export async function handleNo() {
  console.log("==================================");
  console.log("Response Received: NO");
  console.log("Response was no. Reaching out might be a good idea.");
  console.log("==================================");
  return { success: true };
}

export async function handleInstagram() {
  console.log("==================================");
  console.log("Response Received: INSTAGRAM 📩");
  console.log("She will respond on Instagram. Keep an eye on your DMs!");
  console.log("==================================");
  return { success: true };
}
