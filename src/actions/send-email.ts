"use server";

import ContactEmailTemplate from "@/components/email-template/contact-form-email-template";
import { Resend } from "resend";

type Response = {
  success: boolean;
  error: boolean;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(
  formData: FormData
): Promise<Response> {
  const name = formData.get("name")?.toString().trim() as string;
  const email = formData.get("email")?.toString().trim() as string;
    const message = formData.get("message")?.toString().trim() as string;
    
  if (!name || !email || !message)
    return {
      success: false,
      error: true,
      message: "Missing required fields",
    };

  try {
    const { data, error } = await resend.emails.send({
      from: `Portfolio Site <hello@shresthaprajwol.com.np>`,
      to: "hello@shresthaprajwol.com.np",
      subject: "New Message from Portfolio Site",
      react: ContactEmailTemplate({ name, email, message }),
      replyTo: email,
    });
      
      console.log(error, 'error')

    if (error) {
      return {
        success: false,
        error: true,
        message: error.message,
      };
    }

    return {
      success: true,
      error: false,
      message: "Email sent successfully. I will get back to you shortly.",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
      message: "Something went wrong. Please try again later.",};
  }
}
