import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Reveal } from "@/components/animations/reveal";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and write-ups on data science, machine learning, and software engineering.",
};

export default function BlogPage() {
  return (
    <div className="section-padding container-max min-h-screen pt-32">
      <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent-violet">
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>

      <Reveal>
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">
          Blog<span className="text-gradient">.</span>
        </h1>
        <p className="mt-4 max-w-xl text-ink-muted">
          Write-ups on data science, ML experiments, and engineering — coming soon.
        </p>
      </Reveal>

      {blogPosts.length === 0 ? (
        <div className="glass mt-16 flex flex-col items-center gap-3 rounded-2xl p-16 text-center">
          <FileText className="h-8 w-8 text-ink-faint" />
          <p className="text-ink-muted">No posts published yet — check back soon.</p>
        </div>
      ) : (
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass card-hover rounded-2xl p-6"
            >
              <h2 className="font-display text-lg font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
              <div className="mt-4 font-mono text-xs text-ink-faint">
                {post.date} · {post.readingTime}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
