"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Step = {
  number: string;
  title: string;
  text: string;
};

export default function MethodCarousel({ steps }: { steps: Step[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gold/15 bg-obsidian-950/70">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8 text-center md:px-16"
          >
            <span className="font-accent text-4xl font-bold text-gold/50 md:text-5xl">
              {steps[index].number}
            </span>
            <h3 className="font-display text-2xl text-ivory md:text-3xl">
              {steps[index].title}
            </h3>
            <p className="max-w-lg text-sm leading-relaxed text-mist-300 md:text-base">
              {steps[index].text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {steps.map((step, i) => (
          <button
            key={step.number}
            onClick={() => setIndex(i)}
            aria-label={`Ir para a etapa ${step.number}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-gold" : "w-2 bg-gold/25 hover:bg-gold/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
