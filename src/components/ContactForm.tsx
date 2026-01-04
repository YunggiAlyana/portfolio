"use client";

import { useFormStatus } from "react-dom";
import { useActionState, useState, useRef } from "react"; // Update: useActionState dari 'react'
import { Turnstile } from "@marsidev/react-turnstile";
import { sendEmail } from "@/actions/send-email";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

// Tombol Submit dengan State Loading
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin" size={20} /> Sending...
        </>
      ) : (
        <>
          Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
        </>
      )}
    </button>
  );
}

export default function ContactForm() {
  // State untuk Server Action
  // FIX: useFormState diganti useActionState
  const [state, formAction] = useActionState(sendEmail, { success: false, message: "" });
  const formRef = useRef<HTMLFormElement>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Reset form kalau sukses
  if (state.success && formRef.current) {
    formRef.current.reset();
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-6 w-full max-w-lg mx-auto md:mx-0">
      
      {/* Name Input */}
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Name</label>
        <input
          required
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
          className="w-full bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
        />
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Email</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
          className="w-full bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
        />
      </div>

      {/* Message Input */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-mono text-zinc-500 uppercase tracking-widest">Message</label>
        <textarea
          required
          id="message"
          name="message"
          rows={4}
          placeholder="Tell me about your project..."
          className="w-full bg-zinc-900/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
        />
      </div>

      {/* Cloudflare Turnstile */}
      <div className="flex justify-center md:justify-start">
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
          onSuccess={(token) => setCaptchaToken(token)}
          options={{ theme: 'dark' }} // Biar matching sama website
        />
      </div>

      <SubmitButton />

      {/* Feedback Messages */}
      {state.message && (
        <div className={`p-4 rounded-xl flex items-center gap-3 text-sm ${state.success ? 'bg-emerald-900/20 text-emerald-400 border border-emerald-500/20' : 'bg-red-900/20 text-red-400 border border-red-500/20'}`}>
          {state.success ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          {state.message}
        </div>
      )}
    </form>
  );
}
