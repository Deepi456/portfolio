import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium font-mono transition-colors",
  {
    variants: {
      variant: {
        default: "border-accent-violet/30 bg-accent-violet/10 text-accent-violet",
        outline: "border-white/15 bg-white/[0.02] text-ink-muted",
        blue: "border-accent-blue/30 bg-accent-blue/10 text-accent-blue",
        cyan: "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
