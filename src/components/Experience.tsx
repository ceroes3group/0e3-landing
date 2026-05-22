"use client";

import { motion } from "framer-motion";
import { experienceFeatures } from "@/lib/constants";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experiencia"
      title="Control moderno para operaciones reales"
      description="Interfaces limpias, métricas útiles y automatización aplicada donde realmente importa."
      className="border-t border-white/5 bg-[radial-gradient(circle_at_top,rgba(30,144,255,0.08),transparent_55%)]"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="grid gap-4">
          {experienceFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.25rem] border border-white/5 bg-surface/70 p-5"
            >
              <h3 className="font-display text-lg font-medium text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-surface overflow-hidden rounded-[1.75rem]"
        >
          <div className="border-b border-white/5 px-5 py-4">
            <p className="text-sm font-medium text-white">Operations Hub</p>
            <p className="text-xs text-muted">Vista consolidada del ecosistema</p>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-background/80 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                IA
              </p>
              <p className="mt-3 font-display text-3xl font-semibold text-white">
                24/7
              </p>
              <p className="mt-2 text-sm text-muted">
                Automatización continua de tareas repetitivas.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-background/80 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Cloud
              </p>
              <p className="mt-3 font-display text-3xl font-semibold text-white">
                99.9%
              </p>
              <p className="mt-2 text-sm text-muted">
                Disponibilidad pensada para operación crítica.
              </p>
            </div>
          </div>

          <div className="border-t border-white/5 p-5">
            <div className="space-y-3">
              {[
                "Alertas inteligentes activas",
                "Sincronización multi-sucursal",
                "Panel unificado de métricas",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-surface px-4 py-3 text-sm"
                >
                  <span className="text-muted">{item}</span>
                  <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_#1E90FF]" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
