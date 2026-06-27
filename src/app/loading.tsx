export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-void">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-accent-violet/30 border-t-accent-violet" />
        <p className="font-mono text-xs text-ink-faint">Loading…</p>
      </div>
    </div>
  );
}
