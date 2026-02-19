"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-8 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[var(--accent)] font-medium mb-4 tracking-wide text-sm">
          STEM Educator • AI Engineer • Edtech Builder
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          Benjamin Brakatu
        </h1>
        <p className="text-[var(--muted)] text-lg sm:text-xl max-w-2xl leading-relaxed">
          I build tools that teach. Full-stack developer focused on edtech, 
          AI systems, and accessible learning experiences. Currently shipping 
          projects that bridge education and technology.
        </p>
      </div>
      
      <div className="absolute bottom-12 left-6 sm:left-8 lg:left-16">
        <a 
          href="#about" 
          className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <span className="text-sm">Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
