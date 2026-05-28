"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Handshake, Mail, Smartphone, Store } from "lucide-react";
import {
  ecosystemHub,
  statusStyles,
  type HubLink,
} from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const iconMap = {
  handshake: Handshake,
  store: Store,
  smartphone: Smartphone,
  mail: Mail,
};

function HubLinkItem({ link }: { link: HubLink }) {
  const isExternal =
    link.external || link.href.startsWith("http") || link.href.startsWith("mailto:");

  return (
    <Link
      href={link.href}
      target={isExternal && link.href.startsWith("http") ? "_blank" : undefined}
      rel={isExternal && link.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-surface/70 px-4 py-3 transition-colors hover:border-accent/20 hover:bg-accent/5"
    >
      <span className="text-sm font-medium text-white group-hover:text-accent">
        {link.label}
      </span>
      {link.status ? (
        <span
          className={cn(
            "shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium ring-1",
            statusStyles[link.status],
          )}
        >
          {link.status}
        </span>
      ) : (
        <span className="text-xs text-muted transition-colors group-hover:text-accent">
          →
        </span>
      )}
    </Link>
  );
}

export function EcosystemAccess() {
  return (
    <Section
      id="accesos"
      eyebrow="Accesos"
      title="Todo el ecosistema 0E3, en un solo lugar"
      description="Entrá directo a aliados comerciales, sistemas para negocios, apps personales y canales de contacto."
      className="border-t border-white/5"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {ecosystemHub.map((hub, index) => {
          const Icon = iconMap[hub.icon as keyof typeof iconMap];

          return (
            <motion.article
              key={hub.id}
              id={hub.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-surface rounded-[1.5rem] p-6 md:p-7"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 ring-1 ring-accent/20">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {hub.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {hub.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-2">
                {hub.links.map((link) => (
                  <HubLinkItem key={link.label} link={link} />
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
