"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cloud,
  Radar,
  Sparkles,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import { products, statusStyles } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const iconMap = {
  store: Store,
  utensils: UtensilsCrossed,
  sparkles: Sparkles,
  cloud: Cloud,
  radar: Radar,
};

export function Products() {
  return (
    <Section
      id="productos"
      eyebrow="Ecosistema"
      title="Productos diseñados para operar mejor"
      description="Una suite modular que crece con tu negocio. Cada producto resuelve una capa concreta de la operación."
      className="border-t border-white/5 bg-[linear-gradient(180deg,rgba(11,31,51,0.18),transparent)]"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => {
          const Icon = iconMap[product.icon as keyof typeof iconMap];
          const CardInner = (
            <>
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium ring-1",
                    statusStyles[product.status],
                  )}
                >
                  {product.status}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {product.description}
              </p>
              {product.href ? (
                <p className="mt-4 text-sm font-medium text-accent">
                  Ver ficha →
                </p>
              ) : (
                <p className="mt-4 text-xs text-muted">Próximamente</p>
              )}
            </>
          );

          return (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="group card-surface rounded-[1.5rem] p-6 transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(30,144,255,0.08)]"
            >
              {product.href ? (
                <Link href={product.href} className="block">
                  {CardInner}
                </Link>
              ) : (
                CardInner
              )}
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
