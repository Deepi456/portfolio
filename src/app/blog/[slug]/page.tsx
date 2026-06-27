import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/data/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="section-padding container-max max-w-3xl pt-32">
      <Link href="/blog" className="mb-10 inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent-violet">
        <ArrowLeft className="h-4 w-4" /> Back to blog
      </Link>
      <h1 className="font-display text-4xl font-semibold">{post.title}</h1>
      <div className="mt-3 font-mono text-xs text-ink-faint">
        {post.date} · {post.readingTime}
      </div>
      <div className="prose prose-invert mt-10 max-w-none text-ink-muted">{post.content}</div>
    </article>
  );
}