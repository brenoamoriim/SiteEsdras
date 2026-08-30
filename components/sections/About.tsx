import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import { aboutContent } from "@/lib/data";
import { mediaAssets } from "@/lib/media";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-obsidian-900 py-28 md:py-36">
      <BackgroundVideo
        src={mediaAssets.sobre.video}
        poster={mediaAssets.sobre.poster}
        overlayClassName="bg-obsidian-900/90"
      />
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal direction="left">
            <SectionLabel>{aboutContent.label}</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight text-ivory md:text-5xl lg:text-[3.4rem]">
              {aboutContent.heading}
            </h2>

            <div className="mt-10 space-y-6">
              {aboutContent.pillars.map((pillar) => (
                <div key={pillar.label} className="border-l border-gold/30 pl-5">
                  <p className="font-accent text-xs uppercase tracking-widest2 text-gold-light">
                    {pillar.label}
                  </p>
                  <p className="mt-1 text-sm text-mist-300">{pillar.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="space-y-6 text-base leading-relaxed text-mist-300 md:text-lg">
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-ivory/90" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-gold/15 bg-obsidian-800/60 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 font-accent text-sm text-gold-light">
                EA
              </div>
              <div>
                <p className="font-display text-lg text-ivory">Esdras Amorim</p>
                <p className="text-xs text-mist-500">
                  Personal Trainer & Consultor de Treinos — CREF 052783G/MG
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
