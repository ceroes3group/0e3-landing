"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { painPointsContent } from "@/lib/constants";

export function PainPoints() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            En el día a día
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {painPointsContent.title}
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.75rem] border border-white/5 bg-surface/50 p-8"
          >
            <p className="text-sm font-medium text-muted">
              {painPointsContent.before.label}
            </p>
            <ul className="mt-6 space-y-4">
              {painPointsContent.before.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-muted md:text-base"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-[1.75rem] border border-primary/20 bg-[linear-gradient(180deg,rgba(37,99,235,0.08),rgba(17,19,24,0.6))] p-8 ring-1 ring-primary/10"
          >
            <p className="text-sm font-medium text-accent">
              {painPointsContent.after.label}
            </p>
            <ul className="mt-6 space-y-4">
              {painPointsContent.after.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-7 text-white md:text-base"
                >
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
