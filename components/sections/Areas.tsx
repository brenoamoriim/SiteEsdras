import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import { areas } from "@/lib/data";
import { mediaAssets } from "@/lib/media";
import { iconMap, IconKey } from "@/components/ui/Icons";

export default function Areas() {
  return (
    <section id="areas" className="relative overflow-hidden bg-obsidian-950 py-28 md:py-36">
      <BackgroundVideo
        src={mediaAssets.areas.video}
        poster={mediaAssets.areas.poster}
        overlayClassName="bg-obsidian-950/85"
      />
      <div className="section-divider absolute top-0" />
      <Container className="relative">
        <Reveal>
          <SectionLabel align="center">Áreas de Atuação</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-2xl text-center font-display text-4xl leading-tight text-ivory md:text-5xl">
            Treino direcionado para o seu{" "}
            <span className="italic text-gradient-gold">objetivo real</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-gold/10 bg-gold/10 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => {
            const Icon = iconMap[area.icon as IconKey];
            return (
              <Reveal key={area.title} direction="up" delay={i * 0.06} className="h-full">
                <div className="group flex h-full items-start gap-4 bg-obsidian-950/85 p-8 transition-colors duration-500 hover:bg-obsidian-900/85">
                  <Icon className="mt-1 h-6 w-6 shrink-0 text-gold transition-transform duration-500 group-hover:scale-110" />
                  <div>
                    <h3 className="font-display text-lg text-ivory">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-300">{area.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
