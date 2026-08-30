import Container from "@/components/ui/Container";
import { footerLinks, siteConfig, waLink } from "@/lib/data";
import { InstagramIcon, WhatsAppIcon, MapPinIcon } from "@/components/ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-obsidian-950 pt-12 pb-6">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <a href="#top" className="font-display text-2xl text-ivory">
              Monte <span className="text-gradient-gold italic">Olimpo</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-500">
              Consultoria online de treino personalizado. Ciência, técnica e disciplina como
              base de toda evolução real.
            </p>
          </div>

          <div>
            <p className="font-accent text-xs uppercase tracking-widest2 text-gold-light">
              Navegação
            </p>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="focus-gold text-sm text-mist-500 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-accent text-xs uppercase tracking-widest2 text-gold-light">
              Profissional
            </p>
            <ul className="mt-4 space-y-3 text-sm text-mist-500">
              <li>{siteConfig.professional}</li>
              <li>{siteConfig.cref}</li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-gold/60" />
                {siteConfig.location}
              </li>
            </ul>
          </div>

          <div>
            <p className="font-accent text-xs uppercase tracking-widest2 text-gold-light">
              Contato
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={waLink("Olá, Esdras! Vim através do site da Monte Olimpo.")}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-gold flex items-center gap-2 text-sm text-mist-500 transition-colors hover:text-gold-light"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {siteConfig.whatsappDisplay}
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-gold flex items-center gap-2 text-sm text-mist-500 transition-colors hover:text-gold-light"
              >
                <InstagramIcon className="h-4 w-4" />
                {siteConfig.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-mist-700 md:flex-row">
          <p>
            © {year} {siteConfig.brand}. Todos os direitos reservados.
          </p>
          <p>{siteConfig.cref} — Registro profissional ativo.</p>
        </div>
      </Container>
    </footer>
  );
}
