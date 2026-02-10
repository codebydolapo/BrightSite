"use client";

import Image from "next/image";

type Project = {
  title: string;
  type: string;
  summary: string;
  outcomes: string[];
  status: string;
  gradient: string;
  image?: string;
  deployment?: string;
  isDummy?: boolean;
};

export function ProjectCard({ project }: { project: Project }) {
  const hasImage = Boolean(project.image);

  return (
    <article
      className="
        portfolio-reveal
        group
        relative
        flex flex-col
        min-h-[450px]
        rounded-[2.5rem]
        overflow-hidden
        bg-slate-900/40
        border border-white/10
        hover:border-white/20
        transition-all duration-500
        md:py-2 py-3
      "
    >
      {/* Content Top Section */}
      <div className="relative z-20 p-8 pb-0">
        <div className="flex items-center gap-3 mb-4">
          <span className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-white/10">
            {project.type}
          </span>
          {project.isDummy && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
              Available
            </span>
          )}
        </div>

        <h3 className="text-3xl font-bold text-white tracking-tight mb-3">
          {project.title}
        </h3>
        
        <p className="max-w-[80%] text-slate-400 text-sm leading-relaxed mb-6">
          {project.summary}
        </p>

        {project.deployment && (
          <a
            href={project.deployment}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
          >
            View Live
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        )}
      </div>

      {/* Image / Mockup Area */}
      <div className="relative mt-auto pt-10 px-8 overflow-hidden">
        {/* Glow behind the image */}
        <div 
          className={`absolute -bottom-20 -right-20 w-64 h-64 blur-[100px] opacity-20 bg-gradient-to-br ${project.gradient}`} 
        />
        
        <div className="relative aspect-16/8 w-full rounded-t-xl overflow-hidden border-x border-t border-white/10 shadow-2xl transition-transform duration-700 group-hover:translate-y-[-8px] group-hover:scale-[1.02]">
           {hasImage ? (
             <a
            href={project.deployment}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
          >
            <Image
               src={project.image!}
               alt={project.title}
               fill
               className="object-cover object-top"
             />
          </a>
           ) : (
            null
           )}
        </div>
      </div>
      
      {/* Subtle Bottom Overlay to ground the image */}
      <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[2.5rem]" />
    </article>
  );
}