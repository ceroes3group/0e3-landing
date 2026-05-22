"use client";

import { motion } from "framer-motion";
import { philosophyPillars } from "@/lib/constants";
import { Section } from "@/components/ui/Section";

export function Philosophy() {
  return (
    <Section
      id="filosofia"
      eyebrow="Filosofía"
      title="La tecnología debería ayudarte a crecer, no darte más problemas."
      description="0E3 nace para reducir complejidad operativa y devolverle al negocio claridad, control y velocidad."
      className="border-t border-white/5"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {philosophyPillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="rounded-[1.25rem] border border-white/5 bg-surface/80 p-5"
          >
            <div className="mb-4 h-px w-10 bg-gradient-to-r from-accent to-transparent" />
            <h3 className="font-display text-lg font-medium text-white">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
