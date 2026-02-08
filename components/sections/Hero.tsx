"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const handleMove = (x: number, y: number) => {
        const xPos = x - window.innerWidth / 2;
        const yPos = y - window.innerHeight / 2;

        gsap.to(glow.current, {
          x: x - 150,
          y: y - 150,
          duration: 1.2,
          ease: "power3.out",
        });

        gsap.to(".ghost-text", {
          x: xPos * 0.04,
          y: yPos * 0.04,
          duration: 2,
          ease: "power2.out",
        });

        gsap.to(".floating-card", {
          rotateY: xPos * 0.01,
          rotateX: yPos * -0.01,
          duration: 2,
        });
      };

      const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
      const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX, e.touches[0].clientY);

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      })
      .from(".floating-card", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
      }, "-=0.6")
      .from(".uvp-tag", {
        x: -20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8
      }, "-=0.5");

      // Floating loop for the mockup
      gsap.to(".floating-card", {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("touchmove", onTouchMove);
      };
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-20 flex items-center justify-center lg:px-20 lg:py-0"
    >
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />

      <div ref={glow} className="pointer-events-none absolute z-0 hidden md:block h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[120px]" />

      <h2 className="ghost-text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] lg:text-[25vw] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none whitespace-nowrap z-0">
        BRIGHT
      </h2>

      <div className="relative z-10 grid w-full grid-cols-1 gap-16 lg:grid-cols-2 items-center max-w-8xl mx-auto">

        {/* CONTENT */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
          
          {/* THE KICKER (Pre-headline) */}
          <p className="reveal inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-400">
             Pushing your business no gats hard
          </p>

          <h1 className="reveal flex flex-col gap-2">
            <span className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Get a banger website
            </span>
            <div className="flex flex-col md:flex-row md:items-baseline gap-2">
              <span className="text-slate-400 text-lg md:text-2xl font-medium">starting from</span>
              <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 drop-shadow-2xl">
                ₦60,000
              </span>
            </div>
          </h1>

          <p className="reveal text-sm md:text-lg text-slate-400 leading-relaxed max-w-md">
            We build high-performance digital engines designed to turn 
            <span className="text-white font-semibold"> visitors into customers</span>.
          </p>

          <div className="reveal flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto pt-4">
            <a href="https://wa.me/2348164394476" target="_blank" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto rounded-xl bg-blue-600 px-10 py-5 font-bold text-white shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all hover:scale-105 hover:bg-blue-500 active:scale-95 text-lg">
                Start Your Project
              </button>
            </a>
          </div>
        </div>

        {/* VISUAL SECTION */}
        <div className="relative order-1 lg:order-2 flex items-center justify-center">
            
            {/* THE MOCKUP IMAGE */}
            <div className="floating-card relative z-20 w-full max-w-[600px] perspective-1000">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                    <Image
                        src="/portfolio/rabiu-autos.png" 
                        alt="Project Showcase"
                        width={1200}
                        height={800}
                        className="transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                </div>

                {/* UVP FLOATING CARDS (Glassmorphism) */}
                <div className="uvp-tag absolute -bottom-6 -left-6 md:-left-12 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl z-30 md:flex hidden">
                    <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">Benefit</p>
                    <p className="text-white text-sm font-medium">1 Year Maintenance</p>
                </div>

                <div className="uvp-tag absolute -top-8 -right-4 md:-right-8 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl z-30 md:flex hidden">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <p className="text-white text-sm font-medium italic">Free Hosting Included</p>
                    </div>
                </div>
            </div>

            {/* BACK GLOW */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full scale-75" />
        </div>

      </div>
    </section>
  );
}