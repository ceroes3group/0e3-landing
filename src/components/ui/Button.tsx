"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-accent text-white shadow-[0_0_30px_rgba(30,144,255,0.25)] hover:shadow-[0_0_40px_rgba(30,144,255,0.35)] hover:bg-[#3aa0ff]",
    secondary:
      "bg-white/5 text-white ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20",
    ghost: "text-muted hover:text-white hover:bg-white/5",
  };

  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
          variants[variant],
          className,
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
