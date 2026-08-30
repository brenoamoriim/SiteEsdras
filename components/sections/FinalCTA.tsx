import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import { waLink } from "@/lib/data";
import { mediaAssets } from "@/lib/media";

export default function FinalCTA() {
  return (
    <section
      data-persist="true"
      className="relative overflow-hidden bg-obsidian-900 py-28 md:py-40"
    >
      <BackgroundVideo
        src={mediaAssets.cta.video}
        poster={mediaAssets.cta.poster}
        overlayClassName="bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-obsidian-950/50"
      />
      <div className="pointer-events-none absolute inset-0 bg-gold-radial opacity-70" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gold-line" />

      <Container className="relative text-center">
        <Reveal direction="scale">
          <span className="font-accent text-xs uppercase tracking-widest2 text-gold-light">
            Monte Olimpo
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1.05] text-ivory sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            Comece hoje sua <span className="italic text-gradient-gold">evolução.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-mist-300 md:text-lg">
            Sem treinos aleatórios. Sem fórmulas prontas. Apenas um plano construído para o seu
            corpo, com ciência e acompanhamento real — onde você estiver.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              href={waLink("Olá, Esdras! Quero começar hoje minha evolução com a Monte Olimpo.")}
              variant="primary"
              size="lg"
              target="_blank"
              className="px-12 py-5 text-base md:text-lg"
            >
              Quero minha consultoria agora
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
