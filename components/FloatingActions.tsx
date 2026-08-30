"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { waLink } from "@/lib/data";
import { WhatsAppIcon, ArrowUpIcon } from "@/components/ui/Icons";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Voltar ao topo"
            className="focus-gold flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-obsidian-800/90 text-gold-light backdrop-blur-sm transition-colors hover:border-gold hover:bg-obsidian-700"
          >
            <ArrowUpIcon className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={waLink("Olá, Esdras! Quero saber mais sobre a consultoria Monte Olimpo.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.08 }}
        className="focus-gold relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </motion.a>
    </div>
  );
}
