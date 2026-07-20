"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Handshake, Store, UtensilsCrossed, Wrench } from "lucide-react";
import { products, statusStyles } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const iconMap = {
  store: Store,
  utensils: UtensilsCrossed,
  handshake: Handshake,
  wrench: Wrench,
};

function isExternalHref(href: string) {
  return /^(mailto:|https?:|tel:)/i.test(href);
}

export function Products() {
  return (
    <Section
      id="productos"
      eyebrow="0E3"
      title="Lo que necesitás para vender"
      description="0E3 es la marca. 0E3 POS es donde empezás — Gastro y Aliados cuando tu negocio lo pida."
      className="border-t border-white/5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {products.map((product, index) => {
          const Icon = iconMap[product.icon as keyof typeof iconMap];
          const ctaLabel =
            "ctaLabel" in product && typeof product.ctaLabel === "string"
              ? product.ctaLabel
              : product.href
                ? "Ver más →"
                : "Próximamente";
          const secondaryCta =
            "secondaryCta" in product &&
            product.secondaryCta &&
            typeof product.secondaryCta === "object" &&
            "href" in product.secondaryCta &&
            "label" in product.secondaryCta
              ? product.secondaryCta
              : null;
          const CardBody = (
            <>
              <div className="mb-5 flex items-start justify-between gap-4">
                <div
                  className={cn(
                    "flex h-11 w-11 items-center justify-center rounded-2xl ring-1",
                    product.featured
                      ? "bg-primary/10 ring-primary/25"
                      : "bg-white/5 ring-white/10",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5",
                      product.featured ? "text-primary" : "text-muted",
                    )}
                  />
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
              whileHover={product.href ? { y: -4 } : undefined}
              className={cn(
                "card-surface rounded-[1.5rem] p-6 transition-shadow duration-300",
                product.featured &&
                  "ring-1 ring-primary/20 hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)]",
                product.id === "pos" && "md:col-span-2",
              )}
            >
              {product.href ? (
                <>
                  {isExternalHref(product.href) ? (
                    <a href={product.href} className="block">
                      {CardBody}
                      <p className="mt-4 text-sm font-medium text-accent">{ctaLabel}</p>
                    </a>
                  ) : (
                    <Link href={product.href} className="block">
                      {CardBody}
                      <p className="mt-4 text-sm font-medium text-accent">{ctaLabel}</p>
                    </Link>
                  )}
                  {secondaryCta ? (
                    <a
                      href={secondaryCta.href}
                      className="mt-2 inline-block text-sm font-medium text-muted underline-offset-4 hover:text-white hover:underline"
                    >
                      {secondaryCta.label}
                    </a>
                  ) : null}
                </>
              ) : (
                <>
                  {CardBody}
                  <p className="mt-4 text-xs text-muted">{ctaLabel}</p>
                </>
              )}
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
