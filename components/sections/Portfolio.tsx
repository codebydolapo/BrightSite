"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { ProjectCard } from "@/components/reusables/ProjectCard";

const PROJECTS = [
  {
    title: "Rabiu Autos",
    type: "Commercial",
    summary: "Car dealership website for a leading automotive retailer, showcasing inventory and services.",
    outcomes: ["Real-time analytics", "Custom workflows", "Cloud-native"],
    status: "Completed",
    gradient: "from-purple-500/20 to-blue-500/20",
    image: "/portfolio/rabiu-autos.png",
    deployment: "https://rabiu-autos-832j.vercel.app/",
  },
  {
    title: "Oge's Closet",
    type: "Commercial",
    summary: "E-commerce platform for a trendy fashion boutique, featuring product listings and secure checkout.",
    outcomes: ["Real-time analytics", "Custom workflows", "Cloud-native"],
    status: "Completed",
    gradient: "from-green-500/20 to-blue-500/20",
    image: "/portfolio/oges-closet.png",
    deployment: "https://oge-s-closet.vercel.app/",
  },
  {
    title: "Lumina",
    type: "Commercial",
    summary: "Solar panel installation website for a top renewable energy company.",
    outcomes: ["Real-time analytics", "Custom workflows", "Cloud-native"],
    status: "Completed",
    gradient: "from-cyan-500/20 to-blue-500/20",
    image: "/portfolio/lumina.png",
    deployment: "https://lumina-tau-mauve.vercel.app/",
  },
  {
    title: "Tiny Wags",
    type: "Commercial",
    summary: "Pet care service website for a local business, featuring booking and service details.",
    outcomes: ["Real-time analytics", "Custom workflows", "Cloud-native"],
    status: "Completed",
    gradient: "from-green-500/20 to-blue-500/20",
    image: "/portfolio/tiny-wags.png",
    deployment: "https://tiny-wags.vercel.app/",
  },
  {
    title: "Your Brand Here",
    type: "Next Project",
    summary: "This spot is open for your business.",
    outcomes: ["Clean UI", "Fast delivery", "Built to convert"],
    status: "Available",
    isDummy: true,
    image: "/portfolio/your-site.webp",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export default function Portfolio() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".portfolio-reveal",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
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
    <section
      ref={container}
      id="work"
      className="relative z-10 bg-slate-950 px-3 md:px-20 py-24"
    >
      {/* Header */}
      <div className="mb-14 max-w-2xl">
        <h2 className="portfolio-reveal text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Our Work
        </h2>
        <p className="portfolio-reveal mt-4 text-lg text-slate-400">
          A few projects we’ve worked on, turning users into customers.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
