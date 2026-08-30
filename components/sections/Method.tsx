import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import BackgroundVideo from "@/components/ui/BackgroundVideo";
import { methodSteps } from "@/lib/data";
import { mediaAssets } from "@/lib/media";

export default function Method() {
  return (
    <section id="metodo" className="relative overflow-hidden bg-obsidian-950 py-28 md:py-36">
      <BackgroundVideo
        src={mediaAssets.metodo.video}
        poster={mediaAssets.metodo.poster}
        overlayClassName="bg-obsidian-950/85"
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/15 to-transparent lg:block hidden" />

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

        <div className="relative mt-20 space-y-12 lg:space-y-0">
          {methodSteps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={step.number}
                className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-8"
              >
                <div className="hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:z-10 lg:block lg:h-3 lg:w-3 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-full lg:border-2 lg:border-gold lg:bg-obsidian-950" />

                <Reveal
                  direction={isEven ? "left" : "right"}
                  className={`${isEven ? "lg:flex lg:justify-end lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}
                >
                  <div className="group max-w-md rounded-2xl border border-gold/10 bg-obsidian-900/60 p-7 transition-all duration-500 hover:border-gold/40 hover:bg-obsidian-800/60">
                    <span className="font-accent text-3xl font-bold text-gold/40 transition-colors duration-500 group-hover:text-gold-light">
                      {step.number}
                    </span>
                    <h3 className="mt-3 font-display text-xl text-ivory md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-300">{step.text}</p>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
