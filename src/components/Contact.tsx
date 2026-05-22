"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Briefcase, Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "ceroes3group",
    href: site.github,
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "Próximamente",
    href: site.linkedin,
    icon: Briefcase,
  },
  {
    label: "WhatsApp",
    value: "Próximamente",
    href: site.whatsapp,
    icon: MessageCircle,
  },
];

export function Contact() {
  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Construyamos algo más simple."
      description="Contanos qué operación querés simplificar. Te respondemos con una propuesta clara, sin ruido ni promesas vacías."
      className="border-t border-white/5"
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-surface rounded-[1.75rem] p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <Link
                  key={channel.label}
                  href={channel.href}
                  className="group rounded-2xl border border-white/5 bg-surface/80 p-5 transition-colors hover:border-accent/20 hover:bg-accent/5"
                >
                  <Icon className="mb-4 h-5 w-5 text-accent" />
                  <p className="text-sm text-muted">{channel.label}</p>
                  <p className="mt-1 text-sm font-medium text-white group-hover:text-accent">
                    {channel.value}
                  </p>
                </Link>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="flex flex-col justify-between rounded-[1.75rem] border border-white/5 bg-[linear-gradient(180deg,rgba(11,31,51,0.65),rgba(24,24,27,0.9))] p-8"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-accent">
              CTA
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-white">
              Menos fricción. Más control.
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              Sin formularios conectados por ahora. Usá los canales de contacto
              mientras preparamos el flujo comercial oficial.
            </p>
          </div>
          <div className="mt-8">
            <Button href={`mailto:${site.email}`}>Escribinos</Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
