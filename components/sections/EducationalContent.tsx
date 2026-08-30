import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import VideoPanel from "@/components/ui/VideoPanel";
import { educationalPillars, siteConfig } from "@/lib/data";
import { mediaAssets } from "@/lib/media";
import { InstagramIcon, ArrowRightIcon } from "@/components/ui/Icons";

export default function EducationalContent() {
  return (
    <section id="conteudo" className="bg-obsidian-950 py-28 md:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal direction="left">
            <SectionLabel>Conteúdo Educativo</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight text-ivory md:text-5xl">
              Ciência aplicada, todos os dias, no{" "}
              <span className="italic text-gradient-gold">Instagram</span>
            </h2>
            <p className="mt-5 text-mist-300">
              Conteúdo educativo constante sobre biomecânica, anatomia e técnica — para você
              entender cada decisão do seu treino.
            </p>

            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-gold group mt-8 inline-flex items-center gap-4 rounded-2xl border border-gold/20 bg-obsidian-800/60 p-5 transition-all duration-300 hover:border-[#E1306C]/60 hover:bg-obsidian-800"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-light transition-colors duration-300 group-hover:border-[#E1306C] group-hover:text-[#E1306C]">
                <InstagramIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-display text-lg text-ivory transition-colors duration-300 group-hover:text-[#E1306C]">
                  {siteConfig.instagramHandle}
                </span>
                <span className="text-xs text-mist-500">Siga e acompanhe o método de perto</span>
              </span>
              <ArrowRightIcon className="ml-auto h-5 w-5 shrink-0 text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#E1306C]" />
            </a>
          </Reveal>

          <Reveal direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {educationalPillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className="group rounded-2xl border border-gold/10 bg-obsidian-900/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
                >
                  <span className="font-accent text-xs text-gold/50">{`0${i + 1}`}</span>
                  <h3 className="mt-3 font-display text-base text-ivory">{pillar.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-mist-300">{pillar.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal direction="up" delay={0.2} className="mt-14">
          <div className="grid gap-6 sm:grid-cols-2">
            <VideoPanel
              src={mediaAssets.conteudo.video}
              poster={mediaAssets.conteudo.poster}
              className="aspect-video"
            />
            <VideoPanel
              src={mediaAssets.conteudo2.video}
              poster={mediaAssets.conteudo2.poster}
              className="aspect-video"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
