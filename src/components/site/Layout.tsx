import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Leaf, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, nav } from "@/lib/site";

function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Unimax home">
      <span className="grid size-10 place-items-center rounded-xl bg-deep text-gold shadow-soft">
        <Leaf className="size-5" />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-extrabold ${light ? "text-primary-foreground" : "text-primary"}`}>UNIMAX</span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Agri Bio-Technologies</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f(); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-primary-deep text-primary-foreground/85 md:block">
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <div className="flex gap-6">
            <a href={company.phoneHref} className="flex items-center gap-1.5 hover:text-gold"><Phone className="size-3.5" />{company.phone}</a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-gold"><Mail className="size-3.5" />{company.email}</a>
          </div>
          <span className="flex items-center gap-1.5"><MapPin className="size-3.5" />{company.location}</span>
        </div>
      </div>
      <div className={`border-b transition-all ${scrolled ? "border-border bg-background/95 shadow-soft backdrop-blur" : "border-transparent bg-background"}`}>
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Brand />
          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary data-[status=active]:bg-secondary data-[status=active]:text-primary">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="brand" className="hidden rounded-full px-5 sm:inline-flex"><Link to="/contact">Get in Touch</Link></Button>
            <button className="grid size-10 place-items-center rounded-full border xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="container-x grid gap-1 pb-6 xl:hidden" aria-label="Mobile">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }}
                className="rounded-lg px-4 py-3 font-medium data-[status=active]:bg-secondary data-[status=active]:text-primary">{n.label}</Link>
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
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Brand light />
          <p className="text-sm text-primary-foreground/70">Agricultural biotechnology solutions for modern Indian farming, from Ahmednagar, Maharashtra.</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Explore</h3>
          <ul className="grid gap-2 text-sm text-primary-foreground/75">
            {nav.slice(0, 5).map((n) => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Resources</h3>
          <ul className="grid gap-2 text-sm text-primary-foreground/75">
            {nav.slice(5).map((n) => <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-gold">Contact</h3>
          <ul className="grid gap-3 text-sm text-primary-foreground/75">
            <li>{company.contact}</li>
            <li><a href={company.phoneHref} className="hover:text-gold">{company.phone}</a></li>
            <li><a href={`mailto:${company.email}`} className="break-all hover:text-gold">{company.email}</a></li>
            <li>{company.location}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-primary-foreground/10">
        <div className="container-x py-6 text-xs text-primary-foreground/60">© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a href={company.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="grid size-13 place-items-center rounded-full bg-accent text-accent-foreground shadow-lift transition-transform hover:scale-105"><MessageCircle className="size-6" /></a>
      <a href={company.phoneHref} aria-label="Call us" className="grid size-13 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105"><Phone className="size-6" /></a>
    </div>
  );
}

export function PageHero({ eyebrow, title, text, img }: { eyebrow: string; title: string; text?: string; img: string }) {
  return (
    <section className="relative isolate overflow-hidden">
      <img src={img} alt="" className="absolute inset-0 -z-10 size-full object-cover" />
      <div className="bg-hero-overlay absolute inset-0 -z-10" />
      <div className="container-x animate-rise py-24 text-primary-foreground md:py-32">
        <p className="eyebrow !text-gold">{eyebrow}</p>
        <h1 className="text-display mt-4 max-w-3xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">{text}</p>}
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
      <div className="bg-deep relative overflow-hidden rounded-3xl px-8 py-14 text-primary-foreground shadow-lift md:px-16">
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
