import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import { testimonialsPlaceholder } from "@/lib/data";
import { mediaAssets, antesDepoisImages } from "@/lib/media";
import { ChatIcon } from "@/components/ui/Icons";

export default function Results() {
  return (
    <section id="resultados" className="relative overflow-hidden bg-obsidian-900 py-28 md:py-36">
      <BackgroundVideo
        src={mediaAssets.resultados.video}
        poster={mediaAssets.resultados.poster}
        overlayClassName="bg-obsidian-900/85"
      />
      <Container className="relative">
        <Reveal>
          <SectionLabel align="center">Resultados</SectionLabel>
          <h2 className="mx-auto mt-6 max-w-2xl text-center font-display text-4xl leading-tight text-ivory md:text-5xl">
            Transformações que <span className="italic text-gradient-gold">falam por si</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-center text-mist-300">
            Exemplos ilustrativos de transformação — em breve, substituídos pelos resultados
            reais dos alunos Monte Olimpo.
          </p>
        </Reveal>

        {/* Before / After grid — illustrative examples, not verified Monte Olimpo clients */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {antesDepoisImages.map((src, i) => (
            <Reveal key={src} direction="scale" delay={i * 0.06}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-gold/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Exemplo ilustrativo de transformação física ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian-950/90 to-transparent p-3">
                  <p className="text-[0.65rem] uppercase tracking-wide text-mist-300">
                    Exemplo ilustrativo
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonials grid — clearly-labeled example copy, not real quotes */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {testimonialsPlaceholder.map((item, i) => (
            <Reveal key={`t-${item.id}`} direction="up" delay={i * 0.06}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-dashed border-gold/20 bg-obsidian-800/30 p-7">
                <ChatIcon className="h-5 w-5 text-gold/50" />
                <p className="text-sm italic text-mist-500">
                  "Exemplo de depoimento — aqui aparecerá o relato de um aluno sobre sua
                  experiência com a consultoria Monte Olimpo."
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full border border-dashed border-gold/30" />
                  <div>
                    <p className="text-xs text-mist-400">Exemplo ilustrativo</p>
                    <p className="text-[0.65rem] text-mist-700">Depoimento real em breve</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
