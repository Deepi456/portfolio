import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="font-display text-7xl font-bold text-gradient">404</span>
      <h1 className="font-display text-2xl font-semibold">This page doesn&apos;t exist</h1>
      <p className="max-w-sm text-ink-muted">
        The page you&apos;re looking for might have been moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-full bg-gradient-to-r from-accent-violet to-accent-blue px-6 py-3 text-sm font-medium text-white shadow-glow"
      >
        Back to Home
      </Link>
    </div>
  );
}
