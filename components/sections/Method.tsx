import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import MethodCarousel from "@/components/sections/MethodCarousel";
import { methodSteps } from "@/lib/data";
import { mediaAssets } from "@/lib/media";

export default function Method() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-obsidian-950 py-16 md:py-20">
      <BackgroundVideo
        src={mediaAssets.metodo.video}
        poster={mediaAssets.metodo.poster}
        overlayClassName="bg-obsidian-950/85"
      />

      <Container className="relative">
        <Reveal>
          <SectionLabel align="center">Método</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-2xl text-center font-display text-4xl leading-tight text-ivory md:text-5xl">
            O Método <span className="italic text-gradient-gold">Monte Olimpo</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-mist-300">
            Seis etapas que transformam esforço disperso em progresso mensurável.
          </p>
        </Reveal>

        <Reveal direction="scale" delay={0.1} className="mt-12">
          <MethodCarousel steps={methodSteps} />
        </Reveal>
      </Container>
    </section>
  );
}
