"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const token = formData.get("cf-turnstile-response") as string;

  // 1. Validasi Input Sederhana
  if (!name || !email || !message || !token) {
    return { success: false, message: "Please fill in all fields and complete the captcha." };
  }

  // 2. Verifikasi Captcha ke Cloudflare
  try {
    const ip = "127.0.0.1"; // Di production bisa ambil dari headers
    const formDataCF = new URLSearchParams();
    formDataCF.append("secret", process.env.TURNSTILE_SECRET_KEY!);
    formDataCF.append("response", token);
    formDataCF.append("remoteip", ip);

    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const result = await fetch(url, {
      body: formDataCF,
      method: "POST",
    });

    const outcome = await result.json();
    if (!outcome.success) {
      return { success: false, message: "Captcha validation failed. Please try again." };
    }
  } catch (err) {
    return { success: false, message: "Error verifying captcha." };
  }

  // 3. Kirim Email via Resend
  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Ganti dengan 'contact@yunggialyana.dev' setelah domain verified di Resend
      to: ["me@yunggialyana.dev"], 
      subject: `New Message from ${name} (Portfolio)`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (data.error) {
      return { success: false, message: "Failed to send email via provider." };
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    return { success: false, message: "Something went wrong. Please try again later." };
  }
}