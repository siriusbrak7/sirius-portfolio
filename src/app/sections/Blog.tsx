"use client";

import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Building AI-Powered Learning Tools",
    date: "2026-02-15",
    readTime: "5 min read",
    excerpt: "Lessons from integrating LLMs into educational workflows and keeping the human touch.",
    slug: "#",
  },
  {
    title: "The STEM Educator's Stack",
    date: "2026-01-28",
    readTime: "8 min read",
    excerpt: "Tools and frameworks I use to build and deploy edtech platforms quickly.",
    slug: "#",
  },
  {
    title: "Why I Ship Before It's Perfect",
    date: "2026-01-10",
    readTime: "4 min read",
    excerpt: "On the value of iteration, feedback loops, and learning in public.",
    slug: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 sm:px-8 lg:px-16 border-t border-[var(--muted)]/10">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium text-[var(--muted)] mb-12 tracking-wider uppercase">Recent Writing</h2>
        
        <div className="space-y-8">
          {posts.map((post, i) => (
            <article key={i}>
              <a href={post.slug} className="group block">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 text-sm text-[var(--muted)] mb-2">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-medium group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                      {post.title}
                      <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="mt-2 text-[var(--muted)] leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            View all posts
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
