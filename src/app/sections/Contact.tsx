"use client";

import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const links = [
  { icon: Mail, href: "mailto:benjamin@brakatu.dev", label: "Email" },
  { icon: Github, href: "https://github.com/siriusbrak7", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com/siriusbrak", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/in/benjaminbrakatu", label: "LinkedIn" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-16 border-t border-[var(--muted)]/10">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium text-[var(--muted)] mb-8 tracking-wider uppercase">Get in Touch</h2>
        
        <p className="text-2xl sm:text-3xl leading-relaxed mb-12">
          Have a project in mind? Want to collaborate on edtech or AI tools? 
          <br />
          <span className="text-[var(--accent)]">Let&apos;s build something together.</span>
        </p>

        <div className="flex flex-wrap gap-4">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--muted)]/20 hover:border-[var(--accent)]/50 hover:text-[var(--accent)] transition-all text-sm"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
