export const siteConfig = {
  brand: "Monte Olimpo",
  professional: "Esdras Amorim",
  role: "Personal Trainer & Consultor de Treinos",
  cref: "CREF 052783G/MG",
  whatsappDisplay: "(35) 99146-5990",
  whatsappNumber: "5535991465990",
  instagramHandle: "@esdras_tarsos",
  instagramUrl: "https://www.instagram.com/esdras_tarsos/",
  location: "Itapeva - MG",
  domain: "monteolimpo.com.br",
};

export function waLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Método", href: "#metodo" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Áreas", href: "#areas" },
  { label: "Consultoria", href: "#consultoria" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
];

export const heroIndicators = [
  "Atendimento Online",
  "Personal Trainer",
  "CREF Ativo",
  "Acompanhamento Individual",
];

export const heroStats = [
  { value: 100, suffix: "%", decimals: 0, label: "Consultoria Online" },
  { value: 1, suffix: ":1", decimals: 0, label: "Acompanhamento Individual" },
  { value: 100, suffix: "%", decimals: 0, label: "Plano Personalizado" },
];

export const aboutContent = {
  label: "Sobre",
  heading: "Disciplina que virou propósito.",
  paragraphs: [
    "Esdras Amorim construiu a Monte Olimpo sobre uma convicção simples: treino sério exige método, não sorte. Cada programa nasce da ciência do exercício, da biomecânica e do respeito à individualidade biológica de quem está do outro lado da tela.",
    "Formado e registrado no CREF (052783G/MG), Esdras dedica seu trabalho a transformar treinos aleatórios em planos de ação — estruturados, mensuráveis e ajustados semana a semana conforme o corpo do aluno responde.",
    "A missão é clara: levar acompanhamento de alto nível para qualquer pessoa, em qualquer cidade do Brasil, sem depender de estar na mesma academia. Ciência, técnica e disciplina como base de toda evolução real.",
  ],
  pillars: [
    { label: "Missão", text: "Democratizar o acompanhamento profissional de alta performance." },
    { label: "Filosofia", text: "Individualidade biológica acima de fórmulas prontas." },
    { label: "Padrão", text: "Técnica impecável antes de carga. Sempre." },
  ],
};

export const methodSteps = [
  {
    number: "01",
    title: "Avaliação Inicial",
    text: "Levantamento completo de histórico, rotina, objetivos e limitações físicas.",
  },
  {
    number: "02",
    title: "Planejamento Personalizado",
    text: "Estratégia desenhada com base em biomecânica e individualidade biológica.",
  },
  {
    number: "03",
    title: "Treino Individualizado",
    text: "Programação exclusiva — nada de planilhas genéricas ou fórmulas prontas.",
  },
  {
    number: "04",
    title: "Acompanhamento Semanal",
    text: "Check-ins constantes para ajustar carga, volume e intensidade.",
  },
  {
    number: "05",
    title: "Correções Técnicas",
    text: "Análise de execução para blindar articulações e maximizar resultado.",
  },
  {
    number: "06",
    title: "Resultados Sustentáveis",
    text: "Evolução construída para durar — sem atalhos, sem efeito sanfona.",
  },
];

export const differentiators = [
  {
    title: "Treinos Personalizados",
    text: "Programas desenhados 100% para o seu corpo, sua rotina e seu objetivo.",
    icon: "target",
  },
  {
    title: "Biomecânica Aplicada",
    text: "Cada exercício escolhido com base em como o seu corpo se move — não no que é tendência.",
    icon: "bone",
  },
  {
    title: "Correção Técnica",
    text: "Vídeos e feedback direto sobre execução para treinar com segurança.",
    icon: "check",
  },
  {
    title: "Suporte Online",
    text: "Canal direto com o profissional para dúvidas durante toda a consultoria.",
    icon: "chat",
  },
  {
    title: "Atualização Constante",
    text: "Treinos revisados periodicamente conforme sua evolução real.",
    icon: "refresh",
  },
  {
    title: "Resultados Sustentáveis",
    text: "Foco em progresso que se mantém — física e mentalmente.",
    icon: "trophy",
  },
];

export const areas = [
  {
    title: "Hipertrofia",
    text: "Ganho de massa muscular com progressão de carga controlada e técnica refinada.",
    icon: "muscle",
  },
  {
    title: "Emagrecimento",
    text: "Composição corporal trabalhada com estratégia, não com treinos aleatórios.",
    icon: "flame",
  },
  {
    title: "Condicionamento",
    text: "Capacidade física e resistência elevadas de forma progressiva e segura.",
    icon: "pulse",
  },
  {
    title: "Correção Postural",
    text: "Reequilíbrio muscular para reverter compensações do dia a dia.",
    icon: "spine",
  },
  {
    title: "Performance",
    text: "Treinos direcionados para atletas e praticantes que buscam alto rendimento.",
    icon: "bolt",
  },
  {
    title: "Reabilitação Preventiva",
    text: "Fortalecimento estrutural para reduzir risco de lesões futuras.",
    icon: "shield",
  },
];

export const consultingSteps = [
  { number: "01", title: "Contato", text: "Você chama no WhatsApp e conta seu objetivo." },
  { number: "02", title: "Avaliação", text: "Levantamento do seu histórico e ponto de partida." },
  { number: "03", title: "Questionário", text: "Detalhamento de rotina, preferências e limitações." },
  { number: "04", title: "Planejamento", text: "Montagem da estratégia personalizada de treino." },
  { number: "05", title: "Entrega", text: "Seu plano é entregue com orientação completa de execução." },
  { number: "06", title: "Acompanhamento", text: "Ajustes semanais e suporte contínuo até o resultado." },
];

export const educationalPillars = [
  { title: "Biomecânica", text: "Como o corpo se move e por que isso muda tudo no treino." },
  { title: "Anatomia Muscular", text: "Entenda o que você está treinando — e por quê." },
  { title: "Exercícios Corretivos", text: "Ajustes técnicos para treinar sem dor e sem risco." },
  { title: "Dicas de Treino", text: "Conteúdo prático direto do que funciona de verdade." },
  { title: "Suplementação", text: "Informação baseada em evidência, sem modismo." },
  { title: "Execução Técnica", text: "Detalhes que separam treino bom de treino ótimo." },
];

export const faqs = [
  {
    q: "Como funciona a consultoria online?",
    a: "Após o contato inicial, é feita uma avaliação completa do seu histórico e objetivos. A partir disso, um plano de treino individualizado é montado e entregue com todas as orientações de execução, com acompanhamento e ajustes periódicos.",
  },
  {
    q: "O atendimento é 100% online?",
    a: "Sim. Toda a consultoria — avaliação, planejamento, entrega do treino e acompanhamento — acontece à distância, permitindo atender alunos em qualquer cidade do Brasil.",
  },
  {
    q: "Quanto tempo dura a consultoria?",
    a: "Os ciclos são definidos conforme o objetivo do aluno durante a avaliação inicial. O acompanhamento é contínuo, com revisões periódicas do plano.",
  },
  {
    q: "Vou receber suporte durante o processo?",
    a: "Sim. Você tem um canal direto para tirar dúvidas sobre execução, ajustes e qualquer ponto do seu treino durante toda a consultoria.",
  },
  {
    q: "Posso treinar em casa?",
    a: "Sim. O plano é adaptado à sua estrutura disponível, seja em casa, em uma academia completa ou com equipamentos limitados.",
  },
  {
    q: "Preciso treinar em academia?",
    a: "Não é obrigatório. O planejamento leva em conta onde e como você treina para montar a estratégia mais adequada.",
  },
  {
    q: "Como é feita a correção dos exercícios?",
    a: "Você envia vídeos da sua execução e recebe feedback técnico direto, com ajustes para treinar com segurança e eficiência.",
  },
  {
    q: "A consultoria é indicada para iniciantes?",
    a: "Sim. O plano é construído a partir do seu nível atual, seja você iniciante ou já experiente em treinos de força.",
  },
  {
    q: "Preciso de exames ou liberação médica?",
    a: "Recomenda-se sempre acompanhamento médico paralelo, especialmente em caso de condições de saúde específicas. A avaliação inicial ajuda a identificar pontos de atenção.",
  },
  {
    q: "Como inicio minha consultoria?",
    a: "Basta clicar em qualquer botão do site para abrir uma conversa direta no WhatsApp e dar o primeiro passo da sua evolução.",
  },
];

export const testimonialsPlaceholder = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

export const footerLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Método", href: "#metodo" },
  { label: "Consultoria", href: "#consultoria" },
  { label: "FAQ", href: "#faq" },
];
