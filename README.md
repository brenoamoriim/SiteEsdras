# Monte Olimpo — Site Institucional

Landing page de alta conversão para a consultoria online de Esdras Amorim (Personal Trainer, CREF 052783G/MG). Construído com **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** e **Framer Motion**.

## Rodando o projeto

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para gerar a build de produção:

```bash
npm run build
npm run start
```

## Estrutura

```
app/
  layout.tsx        Fontes, metadata, SEO, Schema.org (LocalBusiness + Person)
  page.tsx           Monta todas as seções na ordem final
  globals.css        Tokens de design, scrollbar, grain, utilitários
  sitemap.ts / robots.ts

components/
  Navbar.tsx         Navbar fixa + menu mobile
  Footer.tsx
  FloatingActions.tsx  Botão WhatsApp flutuante + voltar ao topo
  sections/          Uma seção por arquivo (Hero, About, Method, ...)
  ui/                Átomos reutilizáveis (Button, Reveal, Icons, AnimatedCounter...)

lib/data.ts          TODA a copy e os dados do site (edite aqui primeiro)
lib/media.ts         Caminhos dos vídeos/imagens de cada seção (public/media/...)

public/media/
  videos/            Vídeos de fundo otimizados para web (h264, ~720p, sem áudio)
  images/            Poster/fallback de cada vídeo (mostrado antes do vídeo carregar)
```

## Mídia (vídeos e fotos)

Todos os vídeos e fotos fornecidos por Esdras já estão integrados e otimizados:

| Seção | Vídeo | Tratamento |
|---|---|---|
| Hero | `hero.mp4` | Fundo full-bleed com overlay em gradiente |
| Sobre | `sobre.mp4` | Painel emoldurado na coluna esquerda |
| Método | `metodo.mp4` | Banner acima da timeline |
| Diferenciais | `diferenciais.mp4` | Fundo ambiente atrás dos cards |
| Áreas de Atuação | `areas.mp4` | Banner acima da grade |
| Como Funciona | `consultoria.mp4` | Banner acima da timeline horizontal |
| Conteúdo Educativo | `conteudo.mp4` | Painel emoldurado na coluna esquerda |
| Resultados | `resultados.mp4` | Banner acima dos cards de depoimento |
| FAQ | `faq.mp4` | Fundo ambiente atrás do accordion |
| CTA Final | `cta.mp4` | Fundo full-bleed cinematográfico |
| Footer | `footer.jpg` | Textura de fundo sutil (25% opacidade) |

Os vídeos originais (enviados em `imagens site esdras/videos/`, até 14MB e 4K) foram recomprimidos para ~720p/H.264 sem áudio (`components/ui/BackgroundVideo.tsx` e `components/ui/VideoPanel.tsx`), caindo de ~36MB para ~10MB no total. Todo vídeo fora do Hero só carrega quando a seção se aproxima da viewport (lazy load via `IntersectionObserver`), para não pesar o carregamento inicial da página.

**A foto `aluno.jpg` foi propositalmente deixada de fora do site**, conforme pedido.

## O que ainda falta trocar antes de publicar

1. **Depoimentos e antes/depois reais** — `components/sections/Results.tsx`. Os cards com borda tracejada e texto "em breve" são placeholders propositais (não inventamos depoimentos). Substitua por fotos e depoimentos reais dos alunos (com autorização deles).
2. **Favicon e imagem de Open Graph** — adicione `public/favicon.ico` e `public/og-image.jpg` (1200×630). Já estão referenciados em `app/layout.tsx`.
3. **Domínio real** — `siteConfig.domain` em `lib/data.ts` está como `monteolimpo.com.br`. Ajuste para o domínio definitivo (usado no SEO, sitemap e Schema.org).
4. **Google Analytics / Meta Pixel** (opcional) — ainda não incluído; posso adicionar quando houver os IDs.

## Conteúdo (copy)

Toda a copy do site — headlines, cards, FAQ, timeline — está centralizada em `lib/data.ts`. Editar texto não requer mexer nos componentes.

## Design

- **Paleta**: preto fosco (`obsidian`), dourado (`gold`), marfim (`ivory`) — definida em `tailwind.config.ts`.
- **Tipografia**: Fraunces (display/serifada, títulos), Work Sans (corpo), Big Shoulders Display (números/labels), carregadas via `next/font`.
- **Animações**: Framer Motion — revelações no scroll, contadores animados, accordion do FAQ, menu mobile.

## Deploy

Recomendado: [Vercel](https://vercel.com) (criador do Next.js) — `vercel --prod` ou conectar o repositório Git direto no dashboard. Nenhuma configuração adicional é necessária além das variáveis de ambiente que forem criadas no futuro (ex: Analytics).
