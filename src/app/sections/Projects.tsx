"use client";

import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Tutor Platform",
    description: "Personalized learning system using LLMs to adapt content based on student progress and learning style.",
    tags: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind"],
    link: "#",
  },
  {
    title: "STEM Lab Dashboard",
    description: "Real-time monitoring and management system for educational makerspaces and STEM labs.",
    tags: ["React", "Node.js", "MQTT", "Chart.js"],
    link: "#",
  },
  {
    title: "Quiz Engine Pro",
    description: "Interactive assessment platform with adaptive questioning, analytics, and LMS integrations.",
    tags: ["TypeScript", "Firebase", "Next.js"],
    link: "#",
  },
  {
    title: "Code Mentor Bot",
    description: "An AI-powered coding assistant that guides students through programming exercises.",
    tags: ["Python", "FastAPI", "LangChain", "Discord"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-8 lg:px-16 border-t border-[var(--muted)]/10">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium text-[var(--muted)] mb-12 tracking-wider uppercase">Selected Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, i) => (
            <article key={i} className="group">
              <a href={project.link} className="block">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink size={18} className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors flex-shrink-0" />
                </div>
                <p className="mt-2 text-[var(--muted)] leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-1 rounded-full bg-[var(--foreground)]/5 text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
