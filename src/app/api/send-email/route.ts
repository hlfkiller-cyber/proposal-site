import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.EMAIL_FROM;
const toEmail = process.env.EMAIL_TO;


export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY || !fromEmail || !toEmail) {
    console.error("Missing email environment variables. Skipping email.");
    return NextResponse.json(
      { success: false, error: "Email configuration is missing." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { response } = body;

    let subject = "";
    switch (response) {
      case "Yes":
        subject = "Congratulations – She Said YES 💕";
        break;
      case "No":
        subject = "Response Received – No";
        break;
      case "Instagram":
        subject = "Response Received – INSTAGRAM 📩";
        break;
      default:
        subject = "A Response Was Received";
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: subject,
      html: `
        <h2>A response was received 💌</h2>
        <p><strong>Response:</strong> ${response}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Email failed to send." },
      { status: 500 }
    );
  }
}
