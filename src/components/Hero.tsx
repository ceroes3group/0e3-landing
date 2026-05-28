"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Accesos", href: "#accesos" },
  { label: "Productos", href: "#productos" },
  { label: "Filosofía", href: "#filosofia" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-3">
          <Image
            src="/logo/0e3-logo.png"
            alt="0E3"
            width={120}
            height={40}
            className="h-8 w-auto object-contain md:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contacto" variant="secondary">
            Contactar
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[520px] -translate-x-1/2 rounded-full glow-orb blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-32 h-72 w-72 rounded-full bg-accent-deep/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_#1E90FF]" />
            {site.legalName}
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
            {site.tagline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted md:text-xl">
            Software, automatización e inteligencia artificial pensados para
            simplificar operaciones reales.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#accesos">Ver accesos</Button>
            <Button href="#productos" variant="secondary">
              Ver productos
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl" />
          <div className="card-surface animate-float relative overflow-hidden rounded-[1.75rem] p-4 md:p-5">
            <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-4">
              <div>
                <p className="text-sm font-medium text-white">0E3 Control</p>
                <p className="text-xs text-muted">Panel operativo</p>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {[
                { label: "Ventas hoy", value: "$ 842K" },
                { label: "Sucursales", value: "12" },
                { label: "Automatización", value: "94%" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/5 bg-surface p-4"
                >
                  <p className="text-xs text-muted">{metric.label}</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/5 bg-surface p-4">
              <div className="mb-4 flex items-end gap-2">
                {[38, 62, 48, 78, 56, 88, 64].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-full bg-gradient-to-t from-accent-deep to-accent"
                    style={{ height: `${height}px`, opacity: 0.35 + index * 0.08 }}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between text-xs text-muted">
                <span>Actividad semanal</span>
                <span className="text-accent">+18.4%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
