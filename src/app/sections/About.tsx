"use client";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-16 border-t border-[var(--muted)]/10">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium text-[var(--muted)] mb-8 tracking-wider uppercase">About</h2>
        
        <div className="space-y-6 text-lg leading-relaxed text-[var(--foreground)]/90">
          <p>
            I&apos;m a STEM educator and software engineer building at the intersection of 
            learning and technology. My work focuses on creating accessible edtech tools 
            and AI-powered systems that make complex concepts understandable.
          </p>
          <p>
            Currently, I&apos;m developing platforms that leverage AI to personalize learning 
            experiences and automate educational workflows. I believe technology should 
            reduce barriers to knowledge, not create them.
          </p>
          <p>
            When I&apos;m not coding or teaching, I&apos;m exploring new frameworks, 
            contributing to open-source education projects, or mentoring aspiring developers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            ["5+", "Years Teaching"],
            ["20+", "Projects Shipped"],
            ["1000+", "Students Reached"],
            ["∞", "Curiosity"],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-bold">{num}</div>
              <div className="text-sm text-[var(--muted)]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
