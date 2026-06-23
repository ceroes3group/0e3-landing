"use client";

import { motion } from "framer-motion";
import { site, whyZeroE3Content } from "@/lib/constants";

export function WhyZeroE3() {
  return (
    <section
      id="por-que-0e3"
      className="relative border-t border-white/5 px-6 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {whyZeroE3Content.title}
          </p>

          <div className="max-w-2xl border-l-2 border-accent/30 pl-5">
            <p className="font-display text-lg font-medium text-white">
              {whyZeroE3Content.identityLead}
            </p>
            <div className="mt-3 space-y-1">
              {whyZeroE3Content.identityPillars.map((line) => (
                <p key={line} className="text-sm text-muted">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-8 max-w-2xl space-y-2">
            {whyZeroE3Content.origin.map((line) => (
              <p key={line} className="text-base leading-8 text-muted">
                {line}
              </p>
            ))}
          </div>

          <p className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
            {whyZeroE3Content.lead}
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:max-w-3xl">
            <ul className="space-y-2">
              {whyZeroE3Content.less.map((line) => (
                <li key={line} className="text-base text-muted md:text-lg">
                  {line}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {whyZeroE3Content.more.map((line) => (
                <li key={line} className="text-base text-white md:text-lg">
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-10 font-display text-xl font-medium text-accent md:text-2xl">
            {whyZeroE3Content.closing}
          </p>
          <p className="mt-4 text-sm font-medium text-white">
            {site.brandPhrase}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
