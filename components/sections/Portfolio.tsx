"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Ensure this is imported

// Registering the plugin is required for ScrollTrigger to work
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS = [
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
            const items = context.selector(".portfolio-reveal");
            if (!items?.length) return;

            gsap.fromTo(
                items,
                {
                    opacity: 0,
                    y: 40,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    stagger: 0.15,
                    immediateRender: false, 
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                        once: true,
                        invalidateOnRefresh: true,
                    },
                }
            );
        },
        { scope: container }
    );


    return (
        <section
            ref={container}
            className="bg-slate-950 px-6 md:px-20 py-28 relative z-10" // Added z-10 to stay above background glows
            id = "work"
        >
            {/* SECTION HEADER */}
            <div className="mb-16 max-w-2xl">
                <h2 className="portfolio-reveal text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    Our Work
                </h2>
                <p className="portfolio-reveal mt-4 text-lg text-slate-400">
                    A few projects we've worked on in the past, converting users into customers.
                </p>
            </div>

            {/* PROJECT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {PROJECTS.map((p, i) => (
                    <article
                        key={i}
                        className="portfolio-reveal group relative h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-xl transition-all duration-500 hover:border-white/20 shadow-2xl"
                    >
                        {/* Gradient Glow - Changed to opacity-20 for a subtle 'always-on' look that intensifies */}
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex h-full flex-col justify-between p-10">
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
                                <h3 className="mb-3 text-3xl font-bold text-white tracking-tight">
                                    {p.title}
                                </h3>
                                <p className="mb-6 max-w-md text-slate-400 text-sm leading-relaxed">
                                    {p.summary}
                                </p>

                                <ul className="flex flex-wrap gap-2">
                                    {p.outcomes.map((o, idx) => (
                                        <li
                                            key={idx}
                                            className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-[10px] font-medium text-slate-300"
                                        >
                                            {o}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                                    {p.status}
                                </span>
                                <span className="text-sm font-semibold text-white flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    View Case Study <span className="text-blue-500">→</span>
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}