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
  areas: media("areas"),
  consultoria: media("consultoria"),
  conteudo: media("conteudo"),
  conteudo2: media("conteudo2"),
  resultados: media("resultados"),
  cta: media("cta"),
  logo: `${base}/images/logo.png`,
};

export const antesDepoisImages = [
  `${base}/images/antes-depois-1.jpg`,
  `${base}/images/antes-depois-2.jpg`,
  `${base}/images/antes-depois-3.jpg`,
  `${base}/images/antes-depois-4.jpg`,
];
