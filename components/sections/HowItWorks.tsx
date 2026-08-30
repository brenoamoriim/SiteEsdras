import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import { consultingSteps, waLink } from "@/lib/data";
import { mediaAssets } from "@/lib/media";

export default function HowItWorks() {
  return (
    <section id="consultoria" className="relative overflow-hidden bg-obsidian-900 py-28 md:py-36">
      <BackgroundVideo
        src={mediaAssets.consultoria.video}
        poster={mediaAssets.consultoria.poster}
        overlayClassName="bg-obsidian-900/90"
      />
      <Container className="relative">
        <Reveal>
          <SectionLabel align="center">Como Funciona</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-2xl text-center font-display text-4xl leading-tight text-ivory md:text-5xl">
            Da conversa ao <span className="italic text-gradient-gold">primeiro treino</span>
          </h2>
        </Reveal>

        <div className="relative mt-20 grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-6">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent lg:block" />

          {consultingSteps.map((step, i) => (
            <Reveal key={step.number} direction="up" delay={i * 0.08} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-obsidian-900 font-accent text-lg text-gold-light">
                {step.number}
              </div>
              <h3 className="mt-5 font-display text-base text-ivory md:text-lg">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-mist-300 md:text-sm">{step.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16 flex justify-center">
          <Button
            href={waLink("Olá, Esdras! Quero iniciar minha consultoria Monte Olimpo.")}
            variant="primary"
            size="lg"
            target="_blank"
          >
            Iniciar minha consultoria
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
