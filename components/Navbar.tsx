"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig, waLink } from "@/lib/data";
import { mediaAssets } from "@/lib/media";
import Button from "@/components/ui/Button";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";

function Logo({ imgClassName, textClassName }: { imgClassName: string; textClassName: string }) {
  return (
    <span className="relative flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={mediaAssets.logo}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 w-auto -translate-x-1/2 -translate-y-1/2 opacity-60 mix-blend-screen ${imgClassName}`}
      />
      <span className={`relative font-display tracking-wide text-ivory ${textClassName}`}>
        Monte <span className="text-gradient-gold italic">Olimpo</span>
      </span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/15 bg-obsidian-900/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" aria-label="Monte Olimpo — início">
          <Logo imgClassName="h-20 md:h-24" textClassName="text-2xl md:text-3xl" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="focus-gold font-body text-sm text-mist-300 transition-colors duration-300 hover:text-gold-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            href={waLink("Olá, Esdras! Quero saber mais sobre a consultoria Monte Olimpo.")}
            variant="primary"
            size="md"
            target="_blank"
          >
            Falar no WhatsApp
          </Button>
        </div>

        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="focus-gold text-ivory lg:hidden"
        >
          <MenuIcon />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian-950/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4">
              <Logo imgClassName="h-16" textClassName="text-2xl" />
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="focus-gold text-ivory"
              >
                <CloseIcon />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col items-start gap-2 px-8 pt-8"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="w-full border-b border-white/5 py-4"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-ivory hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="px-8 pt-8">
              <Button
                href={waLink("Olá, Esdras! Quero saber mais sobre a consultoria Monte Olimpo.")}
                variant="primary"
                size="lg"
                target="_blank"
                className="w-full"
              >
                Falar no WhatsApp
              </Button>
              <p className="mt-6 text-xs text-mist-500">{siteConfig.cref}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
