"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { getWhatsAppHref, site } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const whatsappHref = getWhatsAppHref(
    "Hola, tengo un comercio y quiero consultar por 0E3 POS.",
  );

  const channels = [
    ...(whatsappHref
      ? [
          {
            label: "WhatsApp",
            value: "Escribinos por WhatsApp",
            href: whatsappHref,
            icon: MessageCircle,
            external: true,
          },
        ]
      : []),
    {
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
      icon: Mail,
      external: false,
    },
  ];

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Te orientamos con el plan correcto"
      description="Contanos qué tipo de negocio tenés y te orientamos con el plan correcto. Sin formularios complicados: hablá con nosotros directo."
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
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noopener noreferrer" : undefined}
                  className="group rounded-2xl border border-white/5 bg-surface/80 p-5 transition-colors hover:border-primary/20 hover:bg-primary/5"
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
          {!whatsappHref ? (
            <p className="mt-6 text-xs text-muted">
              Por ahora escribinos por email. Pronto sumamos WhatsApp.
            </p>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="flex flex-col justify-between rounded-[1.75rem] border border-white/5 bg-[linear-gradient(180deg,rgba(30,58,95,0.55),rgba(17,19,24,0.95))] p-8"
        >
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">
              ¿Listo para probar 0E3 POS?
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted">
              Creá tu cuenta y explorá el sistema. Si preferís que te guiemos
              antes, escribinos y te ayudamos a elegir entre START, PRO o
              EMPRESA.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/precios/" variant="secondary">
              Ver planes
            </Button>
            {whatsappHref ? (
              <Button href={whatsappHref}>WhatsApp</Button>
            ) : (
              <Button href={`mailto:${site.email}`}>Escribinos</Button>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
