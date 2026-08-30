import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import { testimonialsPlaceholder } from "@/lib/data";
import { mediaAssets } from "@/lib/media";
import { TrophyIcon, ChatIcon } from "@/components/ui/Icons";

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
            Espaço reservado para antes/depois e depoimentos reais de alunos — atualizado
            conforme novos resultados são registrados.
          </p>
        </Reveal>

        {/* Before / After grid — placeholder, replace with real transformation photos */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {testimonialsPlaceholder.map((item, i) => (
            <Reveal key={`ba-${item.id}`} direction="scale" delay={i * 0.06}>
              <div className="flex aspect-[3/4] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-gold/25 bg-obsidian-800/40 p-4 text-center">
                <TrophyIcon className="h-6 w-6 text-gold/50" />
                <p className="text-xs text-mist-500">Antes / Depois {i + 1}</p>
                <p className="text-[0.65rem] text-mist-700">Foto do aluno em breve</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonials grid — placeholder, replace with real testimonials */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {testimonialsPlaceholder.map((item, i) => (
            <Reveal key={`t-${item.id}`} direction="up" delay={i * 0.06}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-dashed border-gold/20 bg-obsidian-800/30 p-7">
                <ChatIcon className="h-5 w-5 text-gold/50" />
                <p className="text-sm italic text-mist-500">
                  "Espaço reservado para o depoimento real de um aluno da consultoria Monte
                  Olimpo."
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full border border-dashed border-gold/30" />
                  <div>
                    <p className="text-xs text-mist-400">Nome do aluno</p>
                    <p className="text-[0.65rem] text-mist-700">Depoimento em breve</p>
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
