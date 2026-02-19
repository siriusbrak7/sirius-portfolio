"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 sm:px-8 lg:px-16 border-t border-[var(--muted)]/10">
      <div className="max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          © {year} Benjamin Brakatu. Built with Next.js.
        </p>
        <p className="text-sm text-[var(--muted)]">
          <a 
            href="https://github.com/siriusbrak7/sirius-portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            View source →
          </a>
        </p>
      </div>
    </footer>
  );
}
