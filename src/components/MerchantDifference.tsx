"use client";

import { motion } from "framer-motion";
import { manifestoContent } from "@/lib/constants";

export function MerchantDifference() {
  return (
    <section className="relative border-t border-white/5 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl rounded-[1.75rem] border border-white/10 bg-surface/40 p-8 md:p-10"
        >
          <p className="font-display text-xl font-semibold leading-snug text-white md:text-2xl">
            {manifestoContent.lead}
          </p>
          <p className="mt-6 text-base leading-8 text-muted md:text-lg">
            {manifestoContent.question}
          </p>
          <p className="mt-4 font-display text-lg font-medium leading-snug text-accent md:text-xl">
            {manifestoContent.test}
          </p>
          <p className="mt-6 text-base leading-8 text-white md:text-lg">
            {manifestoContent.closing}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
