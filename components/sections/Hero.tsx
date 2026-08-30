"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import { heroIndicators, heroStats, waLink } from "@/lib/data";
import { mediaAssets } from "@/lib/media";
import { CheckIcon, ChevronDownIcon } from "@/components/ui/Icons";

const headlineWords = ["Treine", "com", "estratégia.", "Evolua", "com", "ciência."];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-obsidian-950 pt-28 pb-16 md:pt-32"
    >
      <BackgroundVideo
        src={mediaAssets.hero.video}
        poster={mediaAssets.hero.poster}
        priority
        overlayClassName="bg-gradient-to-r from-obsidian-950 via-obsidian-950/75 to-obsidian-950/30 md:via-obsidian-950/70 md:to-obsidian-950/10"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/40" />

      <Container className="relative">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="font-accent text-xs uppercase tracking-widest2 text-gold-light">
              Consultoria Online de Elite
            </span>
          </motion.div>

          <h1 className="font-display text-[2.75rem] leading-[1.02] tracking-tight text-ivory sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`mr-4 inline-block ${
                  word === "ciência." ? "italic text-gradient-gold" : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-mist-300 md:text-lg"
          >
            Consultoria online de treino personalizado com Esdras Amorim — biomecânica,
            individualidade biológica e acompanhamento real para transformar sua rotina em
            resultado. Em qualquer cidade do Brasil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              href={waLink("Olá, Esdras! Quero minha consultoria Monte Olimpo.")}
              variant="primary"
              size="lg"
              target="_blank"
            >
              Quero minha consultoria
            </Button>
            <Button href="#metodo" variant="secondary" size="lg">
              Conheça o método
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-12 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4"
          >
            {heroIndicators.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-mist-300">
                <CheckIcon className="h-4 w-4 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="mt-16 grid w-full grid-cols-3 gap-4 rounded-2xl border border-gold/15 bg-obsidian-950/85 p-6 shadow-gold md:p-8"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-accent text-2xl font-bold text-gold-light md:text-3xl">
                <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-[0.65rem] uppercase leading-tight tracking-wide text-mist-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist-500 hover:text-gold-light md:flex"
        aria-label="Rolar para a seção Sobre"
      >
        <span className="font-accent text-[0.65rem] uppercase tracking-widest2">Rolar</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDownIcon className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
