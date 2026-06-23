"use client";

import { motion } from "framer-motion";
import { merchantDifferenceContent } from "@/lib/constants";

export function MerchantDifference() {
  return (
    <section className="relative border-t border-white/5 px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(30,58,95,0.45),rgba(17,19,24,0.95))] p-10 md:p-14"
        >
          <div className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <h2 className="font-display text-2xl font-semibold leading-tight text-white md:text-4xl">
              {merchantDifferenceContent.titleLead}
            </h2>
            <p className="mt-3 font-display text-2xl font-semibold leading-tight text-accent md:text-4xl">
              {merchantDifferenceContent.titleAccent}
            </p>

            <div className="mt-8 space-y-5 border-t border-white/10 pt-8">
              {merchantDifferenceContent.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-muted md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
