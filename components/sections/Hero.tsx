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
      // Handle both Mouse and slight movement feel for Touch
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

      // Basic Touch support for the glow/parallax
      const onTouchMove = (e: TouchEvent) => {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("touchmove", onTouchMove);

      /* Entrance Sequence */
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      })
        .from(".floating-card", {
          scale: 0.8,
          opacity: 0,
          duration: 1,
        }, "-=0.5");

      /* Gentle Floating Loop */
      gsap.to(".floating-card", {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
        force3D: false, // Prevents sub-pixel blurring during animation
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

      {/* CURSOR GLOW (Hidden on small touch devices to save perf) */}
      <div ref={glow} className="pointer-events-none absolute z-0 hidden md:block h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-[120px]" />

      {/* GHOST TEXT - Adjusted size for mobile */}
      <h2 className="ghost-text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] lg:text-[25vw] font-black tracking-tighter text-white/[0.02] select-none pointer-events-none whitespace-nowrap z-0">
        BRIGHT
      </h2>

      <div className="relative z-10 grid w-full grid-cols-1 gap-12 lg:grid-cols-2 items-center max-w-8xl mx-auto">

        {/* CONTENT */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-8 lg:space-y-12 order-2 lg:order-1 min-w-1/2">
          <h1 className="reveal text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-[1.1]">
            Get a banger website
            <br />
              <span className="text-xl md:text-4xl align-end">
                from {" "}
              </span>
              <br className="hidden md:flex"/>
            <span className=" text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
              ₦50,000
            </span>
          </h1>

          <div className="reveal space-y-4 max-w-lg">
            <p className="italic text-xs md:text-sm text-grey-400/80 font-light">
              Pushing your business out to the world no gats hard!
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed hidden md:flex">
              We build powerful websites for business owners who want to convert visitors into customers.
            </p>
          </div>

          <div className="reveal flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">

            <a
              href="https://wa.me/2348164394476"
              target="_blank"
            >
              <button className="w-full sm:w-auto rounded-full bg-blue-600 px-10 py-4 font-bold text-white shadow-[0_15px_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:bg-blue-500 active:scale-95">
                Get Started
              </button>
            </a>

            <div className=" hidden md:flex flex-col items-center sm:items-start">
              <span className="text-white font-medium italic text-sm">&quot;Exceptional quality&quot;</span>
              <span className="text-xs text-slate-500">— Happy Client</span>
            </div>
          </div>
        </div>

        {/* HERO MOCKUP - Now visible and scaled for mobile */}
        <div className="floating-card relative flex items-center justify-center z-20 w-full max-w-[500px] lg:max-w-none mx-auto order-1 lg:order-2 px-4 lg:px-0">
          <div className="relative w-full">
            <Image
              src="/heroLaptop2.png"
              alt="Website Showcase"
              width={1200} // Increase width for higher density
              height={780}
            />
            {/* Mobile specific glow behind image */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[60px] z-[-1] lg:hidden" />
          </div>
        </div>

      </div>
    </section>
  );
}