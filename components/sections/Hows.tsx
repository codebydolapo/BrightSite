"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";


const STEPS = [
  {
    title: "Discover",
    desc: "We try to understand your business goals, your target audience and who your competitors are, to map out a winning strategy.",
    number: "01",
  },
  {
    title: "Design",
    desc: "Brand visuals are everything, and we boost your brand's visibility with a clean, high-conversion UI that works across all devices.",
    number: "02",
  },
  {
    title: "Build",
    desc: "Our websites are fast and SEO-optimized code using the latest industry-standard technologies. You do not have to worry!",
    number: "03",
  },
  {
    title: "Launch",
    desc: "We test our products rigorously before delivering your brand new website! We don't just help you make sales, we set you up for growth.",
    number: "04",
  },
];

export default function Hows() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".step-card", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      gsap.from(".process-line", {
        width: 0,
        duration: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 1,
        },
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="bg-slate-950 px-6 md:px-20 py-32 relative overflow-hidden min-h-[670px] hidden md:block" id = "process">
      <div className="mb-20">
        <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">
          Our Process
        </h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          How we bring your <br /> ideas to life.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute top-[26px] left-0 w-full h-[1px] bg-white/5 hidden md:block" />
        <div className="process-line absolute top-[26px] left-0 h-[1px] bg-gradient-to-r from-blue-500 to-emerald-400 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {STEPS.map((step) => (
            <div key={step.title} className="step-card group cursor-default">
              <div className="relative mb-8">
                <div className="h-14 w-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-white font-mono font-bold transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                  {step.number}
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-blue-500 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {step.title}
              </h4>
              
              {/* HOVER DESCRIPTION LOGIC */}
              <div className="overflow-hidden">
                <p className="text-slate-400 text-sm leading-relaxed 
                  opacity-0 max-h-0 translate-y-2
                  group-hover:opacity-100 group-hover:max-h-32 group-hover:translate-y-0
                  transition-all duration-500 ease-in-out">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}