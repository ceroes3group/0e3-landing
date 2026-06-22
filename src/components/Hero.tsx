"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  MonitorSmartphone,
  Package,
  ShoppingCart,
  Wallet,
} from "lucide-react";
import { liveUrls, posBenefits, site } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const benefitIcons = [ShoppingCart, Package, Wallet, BarChart3, MonitorSmartphone];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full glow-orb blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--glow)]" />
            {site.legalName} · {site.tagline}
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
            {site.heroTitle}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted md:text-xl">
            {site.heroSubtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={liveUrls.posSignup}>Probar 0E3 POS</Button>
            <Button href="/precios/" variant="secondary">
              Ver planes
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted">
            Para despensas, kioscos, minimercados y comercios que quieren orden sin planillas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl" />
          <div className="card-surface relative overflow-hidden rounded-[1.75rem] p-5 md:p-6">
            <div className="mb-5 border-b border-white/5 pb-4">
              <p className="text-sm font-medium text-white">0E3 POS</p>
              <p className="text-xs text-muted">Lo esencial para tu comercio</p>
            </div>

            <ul className="space-y-3">
              {posBenefits.map((benefit, index) => {
                const Icon = benefitIcons[index] ?? ShoppingCart;
                return (
                  <li
                    key={benefit.title}
                    className="flex gap-3 rounded-2xl border border-white/5 bg-surface p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {benefit.title}
                      </p>
                      <p className="mt-1 text-xs leading-6 text-muted">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
