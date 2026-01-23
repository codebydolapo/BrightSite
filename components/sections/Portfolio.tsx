"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Lumina",
    type: "SaaS Dashboard",
    summary: "Solar panel installation website for a top renewable energy company.",
    outcomes: ["Real-time analytics", "Custom workflows", "Cloud-native"],
    status: "Completed",
    gradient: "from-cyan-500/20 to-blue-500/20",
    image: "/portfolio/lumina.png",
    deployment: "https://lumina-tau-mauve.vercel.app/"
  },
  {
    title: "EcoDrive Nigeria",
    type: "Logistics Platform",
    summary: "A fast, mobile-first logistics platform built for scale.",
    outcomes: ["+42% conversions", "1.8s load time", "SEO-ready"],
    status: "Completed",
    gradient: "from-blue-500/20 to-emerald-500/20",
  },
  {
    title: "Your Brand Here",
    type: "Next Project",
    summary: "This spot is open for your business.",
    outcomes: ["Clean UI", "Fast delivery", "Built to convert"],
    status: "Available",
    isDummy: true,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    (context) => {
      const items = context.selector?.(".portfolio-reveal");
      if (!items?.length) return;

      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-slate-950 px-6 md:px-20 py-28 relative z-10" id="work">
      <div className="mb-16 max-w-2xl">
        <h2 className="portfolio-reveal text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Our Work
        </h2>
        <p className="portfolio-reveal mt-4 text-lg text-slate-400">
          A few projects we&apos;ve worked on in the past, converting users into customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((p, i) => (
          <article
            key={i}
            className="portfolio-reveal group relative h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-xl transition-all duration-500 hover:border-white/20 shadow-2xl"
          >
            {/* BACKGROUND IMAGE LAYER */}
            {p.image && (
              <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Added a dark tint overlay so the image doesn't clash with borders */}
                <div className="absolute inset-0 bg-slate-950/20 z-[1]" />
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 2} // Priority for top images
                  className="object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:blur-sm group-hover:opacity-40"
                />
              </div>
            )}
            {/* HOVER GRADIENT GLOW */}
            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-[1]`} />

            {/* CONTENT LAYER - Fades in on hover if there's an image, otherwise stays visible */}
            <div className={`relative z-10 flex h-full flex-col justify-between p-10 transition-all duration-500 ${p.image ? "opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0" : "opacity-100"}`}>
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white border border-white/5">
                  {p.type}
                </span>
                {p.isDummy && (
                  <span className="text-xs font-bold uppercase tracking-tight text-blue-400 animate-pulse">
                    Open Slot
                  </span>
                )}
              </div>

              <div>
                <h3 className="mb-3 text-3xl font-bold text-white tracking-tight">{p.title}</h3>
                <p className="mb-6 max-w-md text-slate-400 text-sm leading-relaxed">{p.summary}</p>
                <ul className="flex flex-wrap gap-2">
                  {p.outcomes.map((o, idx) => (
                    <li key={idx} className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-medium text-slate-300">
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">{p.status}</span>
                <a
                  href={p.deployment || "#"}
                  // target="_blank"
                // className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-[0_0_30px_rgba(34,197,94,0.35)] transition hover:scale-105 hover:bg-green-700"
                >
                  <span className="text-sm font-semibold text-white flex items-center gap-2">
                    View Live Site <span className="text-blue-500 group-hover:translate-x-1 transition transform">→</span>
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}