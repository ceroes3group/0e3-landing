"use client";

import { motion } from "framer-motion";
import { trustSignals } from "@/lib/constants";
import { Section } from "@/components/ui/Section";

export function Trust() {
  return (
    <Section
      id="confianza"
      eyebrow="Confianza"
      title="Menos dudas al cerrar"
      description="Pasás menos tiempo averiguando y más tiempo atendiendo. Eso es lo que buscamos para vos."
      className="border-t border-white/5"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {trustSignals.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="card-surface rounded-[1.25rem] p-5"
          >
            <h3 className="font-display text-lg font-medium text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
