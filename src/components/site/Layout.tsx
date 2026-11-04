import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, Facebook, Instagram, Mail, MapPin, Menu, Phone, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@/lib/router";
import { company, companyImages, nav, resourceNav } from "@/lib/site";

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex w-full min-w-0 max-w-full items-center gap-2.5" aria-label="Unimax home">
      <img src={companyImages.logo} alt="Unimax Agri Bio-Technologies (I) PVT LTD logo" className={light ? "size-16 shrink-0 object-contain sm:size-20" : "size-14 shrink-0 object-contain sm:size-20"} />
      <span className="min-w-0 leading-tight">
        <span className={`block font-display text-base font-extrabold sm:text-lg ${light ? "text-primary-foreground" : "text-primary"}`}>UNIMAX</span>
        <span className={`block break-words text-[9px] font-semibold uppercase leading-snug tracking-[0.12em] sm:text-[10px] sm:tracking-[0.16em] ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Agri Bio-Technologies (I) PVT LTD</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useLocation();
  const isActive = (to: string) => pathname === to || (to !== "/" && pathname.startsWith(to));

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);

  useEffect(() => {
    if (!moreOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [moreOpen]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-primary-deep text-primary-foreground/85 lg:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex gap-6">
            <a href={company.phoneHref} className="flex items-center gap-1.5 hover:text-gold"><Phone className="size-3.5" />{company.phone}</a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-gold"><Mail className="size-3.5" />{company.email}</a>
          </div>
          <span className="flex items-center gap-1.5"><MapPin className="size-3.5" />{company.location}</span>
        </div>
      </div>
      <div className={`border-b transition-all ${scrolled ? "border-border bg-background/95 shadow-soft backdrop-blur" : "border-transparent bg-background"}`}>
        <div className="container-x flex min-w-0 h-16 items-center gap-2 sm:h-20 sm:gap-6">
          <div className="min-w-0 flex-1 xl:flex-none"><Brand /></div>
          <nav className="hidden min-w-0 flex-1 items-center justify-end gap-1 xl:flex" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.to} to={n.to}
                aria-current={isActive(n.to) ? "page" : undefined}
                className={`relative whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary ${isActive(n.to) ? "bg-secondary text-primary" : ""}`}>
                {n.label}
              </Link>
            ))}
            <div className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
              <button
                type="button"
                onClick={() => setMoreOpen((value) => !value)}
                onFocus={() => setMoreOpen(true)}
                className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary ${resourceNav.some((n) => pathname === n.to) ? "bg-secondary text-primary" : ""}`}
                aria-haspopup="true"
                aria-expanded={moreOpen}
                aria-controls="more-navigation"
              >
                More <ChevronDown aria-hidden className="size-3" />
              </button>
              <div id="more-navigation" role="menu" className={`absolute right-0 top-full z-50 pt-2 transition-all ${moreOpen ? "translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-1 opacity-0"}`}>
                <div className="grid w-52 gap-1 rounded-2xl border bg-card p-2 shadow-lift">
                  {resourceNav.map((n) => (
                    <Link key={n.to} to={n.to} role="menuitem" onClick={() => setMoreOpen(false)} className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary hover:text-primary">{n.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
          <div className="ml-auto flex shrink-0 items-center gap-2">
            <Button asChild variant="brand" className="hidden rounded-full px-5 sm:inline-flex"><Link to="/contact">Get in Touch</Link></Button>
            <button className="grid size-10 place-items-center rounded-full border xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-navigation">
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-navigation" className="container-x grid max-h-[calc(100svh-4rem)] gap-1 overflow-y-auto border-t border-border/60 pb-6 pt-3 xl:hidden" aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                aria-current={isActive(n.to) ? "page" : undefined}
                className={`rounded-xl px-4 py-3 font-medium transition-colors hover:bg-secondary ${isActive(n.to) ? "bg-secondary text-primary" : ""}`}>{n.label}</Link>
            ))}
            <p className="px-4 pt-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">More from Unimax</p>
            {resourceNav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                aria-current={pathname === n.to ? "page" : undefined}
                className={`rounded-xl px-4 py-3 font-medium transition-colors hover:bg-secondary ${pathname === n.to ? "bg-secondary text-primary" : ""}`}>{n.label}</Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep text-primary-foreground">
      <div className="bg-dots absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-12 z-0 overflow-hidden px-4 text-center" aria-hidden>
        <span className="block max-w-full whitespace-normal break-words font-display text-[clamp(1.35rem,4.5vw,4rem)] font-extrabold leading-tight tracking-[-0.04em] text-primary-foreground/[0.045]">UNIMAX AGRI BIO-TECHNOLOGIES (I) PVT LTD</span>
      </div>
      <div className="container-x relative z-10 grid gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-0 space-y-4">
          <Brand light />
          <p className="text-sm text-primary-foreground/70">Agricultural biotechnology solutions for modern Indian farming, from Ahilyanagar, Maharashtra.</p>
          <div className="flex items-center gap-3" aria-label="Social media links">
            <a href="https://www.instagram.com/invites/contact/?utm_content=1122yjd&cplk=ndkorwv6wyc8" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-10 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground">
              <Instagram aria-hidden className="size-5" />
            </a>
            <a href="https://youtube.com/@unimaxagribio-technologies8647?si=jS9rJ-LeE9UQ_jlL" target="_blank" rel="noreferrer" aria-label="YouTube" className="grid size-10 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground">
              <Youtube aria-hidden className="size-5" />
            </a>
            <a href="https://www.facebook.com/share/1HMrkGhzUZ/" target="_blank" rel="noreferrer" aria-label="Facebook" className="grid size-10 place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:border-gold hover:bg-gold hover:text-gold-foreground">
              <Facebook aria-hidden className="size-5" />
            </a>
          </div>
        </div>
        <div className="min-w-0">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Explore</h3>
          <ul className="grid gap-2 text-sm text-primary-foreground/75">
            {nav.slice(0, 5).map((n) => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Resources</h3>
          <ul className="grid gap-2 text-sm text-primary-foreground/75">
            {[...nav.slice(5), ...resourceNav].map((n) => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Contact</h3>
          <ul className="grid gap-3 text-sm text-primary-foreground/75">
            <li>{company.contact}</li>
            <li><a href={company.phoneHref} className="hover:text-gold">{company.phone}</a></li>
            <li><a href={`mailto:${company.email}`} className="break-all hover:text-gold">{company.email}</a></li>
            <li>{company.location}</li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 border-t border-primary-foreground/10">
        <div className="container-x py-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} {company.name} All Rights Reserved. Developed by{" "}
          <a href="https://webakoof.com/" target="_blank" rel="noreferrer" className="font-bold text-primary-foreground hover:text-gold">Webakoof</a>
        </div>
      </div>
    </footer>
  );
}

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-5 sm:right-5">
      <a href={company.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lift ring-4 ring-white/20 transition-transform hover:scale-110 sm:size-14"><WhatsappIcon /></a>
    </div>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-8 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.893c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.478-8.413" />
    </svg>
  );
}

export function PageHero({ eyebrow, title, text, img }: { eyebrow: string; title: string; text?: string; img: string }) {
  return (
    <section aria-labelledby="page-hero-title" className="h-[250px] overflow-hidden sm:h-[300px] lg:h-[360px]">
      <img src={img} alt="" className="block size-full object-cover object-left" />
      <div className="sr-only">
        <p>{eyebrow}</p>
        <h1 id="page-hero-title">{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-h2 mt-3 text-primary">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return <span className="inline-block rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-foreground">{children}</span>;
}

export function CtaBanner() {
  return (
    <section className="container-x pb-24">
      <div className="bg-deep relative overflow-hidden rounded-3xl px-5 py-10 text-primary-foreground shadow-lift sm:px-8 sm:py-14 md:px-16">
        <div className="bg-dots absolute inset-0" aria-hidden />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-h2 max-w-xl">Let's grow better harvests together.</h2>
            <p className="mt-3 text-primary-foreground/75">Farmers, dealers and distributors — reach out today.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl"><Link to="/contact">Send an Enquiry</Link></Button>
            <Button asChild variant="glass" size="xl"><a href={company.phoneHref}>Call {company.phone}</a></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
