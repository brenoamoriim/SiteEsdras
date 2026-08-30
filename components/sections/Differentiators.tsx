import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import { differentiators } from "@/lib/data";
import { mediaAssets } from "@/lib/media";
import { iconMap, IconKey } from "@/components/ui/Icons";

export default function Differentiators() {
  return (
    <section id="diferenciais" className="relative overflow-hidden bg-obsidian-900 py-28 md:py-36">
      <BackgroundVideo
        src={mediaAssets.diferenciais.video}
        poster={mediaAssets.diferenciais.poster}
        overlayClassName="bg-obsidian-900/90"
      />
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal direction="left">
            <SectionLabel>Diferenciais</SectionLabel>
            <h2 className="mt-6 max-w-lg font-display text-4xl leading-tight text-ivory md:text-5xl">
              Por que treinar com a{" "}
              <span className="italic text-gradient-gold">Monte Olimpo</span>
            </h2>
          </Reveal>
          <Reveal direction="right" delay={0.1}>
            <p className="max-w-sm text-mist-300">
              Cada detalhe da consultoria existe para blindar seu progresso — do planejamento
              à execução.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => {
            const Icon = iconMap[item.icon as IconKey];
            return (
              <Reveal key={item.title} direction="up" delay={i * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-gold/10 bg-gradient-to-b from-obsidian-800/80 to-obsidian-900 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/10" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 text-gold-light">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-ivory">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-300">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
