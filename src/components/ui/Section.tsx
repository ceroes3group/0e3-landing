"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("relative px-6 py-24 md:py-32", className)}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          {eyebrow ? (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-7 text-muted md:text-lg">
              {description}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
