"use client";

import { useState, useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        // Entrance animation
        gsap.from(".nav-anim", {
            y: -20,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
        });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-screen fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 md:px-20 ${isScrolled ? "py-4 bg-slate-950/80 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="nav-anim flex items-center gap-2 group cursor-pointer">
                    <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-emerald-400 rounded-lg flex items-center justify-center font-bold text-white shadow-lg group-hover:rotate-12 transition-transform">
                        B
                    </div>
                    <span className="text-xl font-bold text-white tracking-tighter">
                        BrightSite<span className="text-blue-500">.</span>
                    </span>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8">
                    {["Home", "Work", "Process", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="nav-anim text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="nav-anim">
                    <a
                        href="https://wa.me/2348164394476"
                        target="_blank"
                    // className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-bold text-white shadow-[0_0_30px_rgba(34,197,94,0.35)] transition hover:scale-105 hover:bg-green-700"
                    >
                        <button className="rounded-full bg-white/5 border border-white/10 px-5 py-2 text-sm font-bold text-white hover:bg-white/10 transition-all active:scale-95">
                            Let&apos;s Talk
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}