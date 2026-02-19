"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-16 py-4 transition-all duration-300 ${
        scrolled 
          ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--muted)]/10" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl flex items-center justify-between">
        <a href="#hero" className="font-semibold text-lg tracking-tight">
          BB
        </a>
        
        <ul className="flex items-center gap-6 sm:gap-8">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a 
                href={href}
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
