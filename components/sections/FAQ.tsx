"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import { faqs } from "@/lib/data";
import { mediaAssets } from "@/lib/media";
import { ChevronDownIcon } from "@/components/ui/Icons";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-obsidian-950 py-28 md:py-36">
      <BackgroundVideo
        src={mediaAssets.faq.video}
        poster={mediaAssets.faq.poster}
        overlayClassName="bg-obsidian-950/90"
      />
      <Container className="relative max-w-4xl">
        <Reveal>
          <SectionLabel align="center">Perguntas Frequentes</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-2xl text-center font-display text-4xl leading-tight text-ivory md:text-5xl">
            Tire suas <span className="italic text-gradient-gold">dúvidas</span>
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-white/5 border-y border-white/5">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="focus-gold flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-base text-ivory md:text-lg">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-gold-light"
                  >
                    <ChevronDownIcon />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-sm leading-relaxed text-mist-300">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
