"use client";

import { motion } from "framer-motion";
import { familiarRoutineContent } from "@/lib/constants";

export function FamiliarRoutine() {
  return (
    <section className="relative border-t border-white/5 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {familiarRoutineContent.title}
          </h2>

          <div className="mt-8 space-y-1.5">
            {familiarRoutineContent.steps.map((step) => (
              <p key={step} className="text-base leading-8 text-muted md:text-lg">
                {step}
              </p>
            ))}
          </div>

          <p className="mt-8 text-base text-muted md:text-lg">
            {familiarRoutineContent.punchline}
          </p>
          <p className="mt-2 font-display text-xl font-medium leading-snug text-white md:text-2xl">
            {familiarRoutineContent.closing}
          </p>

          <p className="mt-10 text-base font-medium text-accent">
            {familiarRoutineContent.bridge}
          </p>
          <p className="mt-3 text-base leading-8 text-white md:text-lg">
            {familiarRoutineContent.payoff}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
