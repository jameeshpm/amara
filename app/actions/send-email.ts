"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const service = formData.get("service") as string
  const date = formData.get("date") as string
  const time = formData.get("time") as string

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Booking Confirmation",
      html: `
        <h1>Booking Confirmation</h1>
        <p>Dear ${name},</p>
        <p>Your booking has been confirmed for the following:</p>
        <ul>
          <li>Service: ${service}</li>
          <li>Date: ${date}</li>
          <li>Time: ${time}</li>
        </ul>
        <p>We'll contact you at ${phone} if we need any additional information.</p>
        <p>Thank you for choosing our service!</p>
      `,
    })

    return { success: true, data }
  } catch (error) {
    return { success: false, error }
  }
}

