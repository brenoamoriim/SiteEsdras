const base = "/media";

function media(name: string) {
  return {
    video: `${base}/videos/${name}.mp4`,
    poster: `${base}/images/${name}.jpg`,
  };
}

export const mediaAssets = {
  hero: media("hero"),
  sobre: media("sobre"),
  metodo: media("metodo"),
  diferenciais: media("diferenciais"),
  areas: media("areas"),
  consultoria: media("consultoria"),
  conteudo: media("conteudo"),
  conteudo2: media("conteudo2"),
  resultados: media("resultados"),
  faq: media("faq"),
  cta: media("cta"),
  logo: `${base}/images/logo.png`,
};
