"use client";

import { motion } from "framer-motion";
import { techBadges } from "@/lib/constants";
import { Section } from "@/components/ui/Section";

export function TechStack() {
  return (
    <Section
      id="tecnologias"
      eyebrow="Stack"
      title="Tecnología clara, confiable y lista para escalar"
      description="Construimos sobre bases modernas para combinar velocidad de producto, operación en la nube e inteligencia aplicada."
      className="border-t border-white/5"
    >
      <div className="flex flex-wrap gap-3">
        {techBadges.map((badge, index) => (
          <motion.div
            key={badge}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            whileHover={{ y: -2 }}
            className="rounded-full border border-white/8 bg-surface px-4 py-2 text-sm text-white/90 transition-colors hover:border-accent/30 hover:bg-accent/5"
          >
            {badge}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
