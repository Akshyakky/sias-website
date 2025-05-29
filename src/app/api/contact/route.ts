// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create reusable transporter object using Office 365 SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "info@siasaccounting.com",
    pass: "Z@825056871242ar",
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  debug: true, // Enable debug logs
});

// Verify SMTP connection configuration
transporter.verify(function (error) {
  if (error) {
    console.error("SMTP Verification Error:", error);
  } else {
    console.log("SMTP Server is ready to take our messages");
  }
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, message } = body;

    // Log the incoming request data
    console.log("Received form submission:", { firstName, lastName, phone, email });

    // Email to the admin
    const adminMailOptions = {
      from: {
        name: "SIAS Accounting Website",
        address: "info@siasaccounting.com",
      },
      to: "info@siasaccounting.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send admin email first
    console.log("Sending admin email...");
    const adminResult = await transporter.sendMail(adminMailOptions);
    console.log("Admin email sent:", adminResult);

    // Auto-reply to the user
    const userMailOptions = {
      from: {
        name: "SIAS Accounting Services",
        address: "info@siasaccounting.com",
      },
      to: email,
      subject: "Thank you for contacting SIAS Accounting Services",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your message and will get back to you shortly.</p>
        <p>Here's a summary of your request:</p>
        <p><strong>Message:</strong> ${message}</p>
        <br>
        <p>Best regards,</p>
        <p>SIAS Accounting Services Team</p>
      `,
    };

    // Send user email
    console.log("Sending user email...");
    const userResult = await transporter.sendMail(userMailOptions);
    console.log("User email sent:", userResult);

    return NextResponse.json(
      {
        message: "Message sent successfully",
        adminMailId: adminResult.messageId,
        userMailId: userResult.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Detailed error:", error);

    // More detailed error response
    const errorMessage = error instanceof Error ? `${error.name}: ${error.message}` : "Failed to send message";

    return NextResponse.json(
      {
        message: errorMessage,
        error: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
