"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Contact() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="bg-slate-900 px-6 md:px-20 py-28"
      id = "contact"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* LEFT — PITCH */}
        <div className="space-y-8">
          <h2 className="contact-reveal text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Let’s build something that actually works.
          </h2>

          <p className="contact-reveal text-lg text-slate-400 leading-relaxed">
            We handle all kinds of websites, whether a business website, landing page, or a full product. Are you a model, artist, or content creator? We’ve got you covered too! 
            {/* Above all,
            we focus on speed, clarity, and conversions — not just visuals. */}
          </p>

          {/* TRUST POINTS */}
          <ul className="contact-reveal space-y-4">
            {[
              "Transparent pricing (starting from ₦50,000)",
              "Fast turnaround & clear communication",
              "Built for performance on mobile & desktop",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-300">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>

          {/* WHATSAPP CTA */}
          <div className="contact-reveal pt-6">
            <a
              href="https://wa.me/2348164394476"
              target="_blank"
              className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-[0_0_30px_rgba(34,197,94,0.35)] transition hover:scale-105 hover:bg-green-700"
            >
              Chat on WhatsApp
              <span className="text-sm font-normal opacity-80">
                <Image src="/whatsapp-icon.webp" alt="WhatsApp" width={20} height={20} />
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="contact-reveal rounded-3xl border border-white/10 bg-slate-950/70 backdrop-blur p-8 shadow-2xl">
          <h3 className="mb-6 text-2xl font-bold text-white">
            Start your project
          </h3>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Business Email
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-400">
                Project Details
              </label>
              <textarea
                rows={4}
                placeholder="Tell us what you're trying to build…"
                className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.35)] transition hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98]"
            >
              Send Message
            </button>

            {/* MICRO TRUST */}
            <p className="text-center text-xs text-slate-500">
              No spam. You’ll get a response within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
