"use server";

import nodemailer from "nodemailer";

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const date = formData.get("date") as string;
  const time = formData.get("time") as string;

  try {
    const mailOptions = {
      from: process.env.SMTP_FROM || email,
      to: process.env.SMTP_TO_EMAIL || "jameeshpm@gmail.com",
      subject: "Booking request",
      html: `
        <h1>Booking request</h1>
        <p>Hi Amara</p>
        <p>A booking has been requested for the following:</p>
        <ul>
          <li>Customer Name: ${name}</li>
          <li>Service: ${service}</li>
          <li>Date: ${date}</li>
          <li>Time: ${time}</li>
        </ul>
        <p>Please contact me at ${phone} for more details.</p>
        <p>Thank you !</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, data: info };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}
