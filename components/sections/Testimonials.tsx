"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";


const FEEDBACK = [
  {
    text: "They understood what we wanted almost immediately. The site loads fast, looks clean on mobile, and we started getting enquiries within the first week.",
    name: "EcoDrive Nigeria",
    role: "Logistics Platform",
    initials: "EN",
    rating: 5,
  },
  {
    text: "Very professional team. They explained everything clearly and didn’t make tech sound confusing. From domain to launch, everything was smooth.",
    name: "Lagos Bloom",
    role: "E-commerce Store",
    initials: "LB",
    rating: 4,
  },
  {
    text: "I’ve worked with designers before, but this was different. They focused on what my customers actually need, not just how the site looks.",
    name: "PrimeCare Clinics",
    role: "Healthcare Services",
    initials: "PC",
    rating: 3,
  },
  {
    text: "The turnaround time surprised me. I expected weeks, but they delivered earlier than promised and even helped with content suggestions.",
    name: "SwiftHaul",
    role: "Delivery & Dispatch",
    initials: "SH",
    rating: 4,
  },
];


export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (context) => {
      const cards = context.selector(".testimonial-card");

      if (!cards?.length) return;

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 24,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-950 px-6 py-32 md:px-20"
    >
      {/* Decorative blur */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Trusted by local{" "}
            <span className="text-blue-500">powerhouses.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Your business needs to appear credible, and this is where we come in!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {FEEDBACK.map((item, index) => (
            <article
              key={index}
              className="testimonial-card group relative rounded-3xl border border-white/10 bg-slate-900/40 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-slate-900/60 md:p-10"
            >
              {/* Quote badge */}
              <div className="absolute -left-4 -top-4 flex h-10 w-10 rotate-[-10deg] items-center justify-center rounded-xl bg-blue-600 shadow-lg transition-transform group-hover:rotate-0">
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21V18c0-1.105.895-2 2-2h3c.552 0 1-.448 1-1V9c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v2.5c0 .552-.448 1-1 1h-2V21h3zM5.017 21V18c0-1.105.895-2 2-2h3c.552 0 1-.448 1-1V9c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v2.5c0 .552-.448 1-1 1h-2V21h3z" />
                </svg>
              </div>

              {/* Content */}
              <div className="mb-8">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < item.rating
                          ? "fill-amber-400"
                          : "fill-white/20"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-lg italic leading-relaxed text-slate-200">
                  “{item.text}”
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 font-bold text-blue-400">
                  {item.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
