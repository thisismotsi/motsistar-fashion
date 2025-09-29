import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, role, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Name, email, and message are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MOTSISTAR Contact Form" <${email}>`,
      to: "info@motsistar.com",
      cc: "blessingtatendamotsi@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "-"}
Role: ${role || "-"}
Message: ${message}
      `,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send message." }, { status: 500 });
  }
}
