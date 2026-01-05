"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

// 1. Definisi Tipe untuk State (agar bisa dipakai di component)
export type FormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    token?: string[];
  };
};

// 2. Skema Validasi Zod
const ContactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  token: z.string().min(1, { message: "Captcha token is missing." }),
});

export async function sendEmail(prevState: FormState, formData: FormData): Promise<FormState> {
  // 3. Validasi Input dengan Zod
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    token: formData.get("cf-turnstile-response"),
  });

  // Jika validasi gagal, kembalikan error spesifik
  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message, token } = validatedFields.data;

  try {
    // 4. Ambil IP Asli (Security)
    const headerList = await headers();
    const ip = headerList.get("x-forwarded-for") || "127.0.0.1";

    // 5. Verifikasi Turnstile
    const formDataCF = new URLSearchParams();
    formDataCF.append("secret", process.env.TURNSTILE_SECRET_KEY!);
    formDataCF.append("response", token);
    formDataCF.append("remoteip", ip);

    const cfResult = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      body: formDataCF,
      method: "POST",
    });

    const cfOutcome = await cfResult.json();
    if (!cfOutcome.success) {
      console.warn("Turnstile Failed:", cfOutcome); // Log untuk debugging
      return { success: false, message: "Captcha validation failed. Please try again." };
    }

    // 6. Kirim Email via Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Ganti jika sudah verify domain
      to: ["me@yunggialyana.dev"],
      subject: `New Message from ${name} (Portfolio)`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (data.error) {
      console.error("Resend Error:", data.error);
      return { success: false, message: "Failed to send email via provider." };
    }

    return { success: true, message: "Message sent successfully!" };

  } catch (error) {
    // 7. Global Error Logging
    console.error("Server Action Error:", error);
    return { success: false, message: "Something went wrong. Please try again later." };
  }
}