"use client";

import { motion } from "framer-motion";
import { realBusinessContent } from "@/lib/constants";

export function RealBusiness() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end"
        >
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Para vos
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {realBusinessContent.title}
            </h2>

            <div className="mt-10 space-y-3">
              {realBusinessContent.lines.map((line) => (
                <p
                  key={line}
                  className="text-lg leading-relaxed text-muted md:text-xl"
                >
                  {line}
                </p>
              ))}
            </div>

            <p className="mt-8 max-w-xl text-base leading-8 text-white md:text-lg">
              {realBusinessContent.body}
            </p>
          </div>

          <div className="card-surface rounded-[1.75rem] p-8 md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              Ideal para
            </p>
            <ul className="mt-6 space-y-3">
              {realBusinessContent.idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white md:text-base"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 border-t border-white/5 pt-8 font-display text-xl font-medium leading-snug text-accent md:text-2xl">
              {realBusinessContent.closing}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
