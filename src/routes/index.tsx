import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, Handshake, Leaf, Microscope, ShieldCheck, Sprout, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner, Placeholder, SectionHead } from "@/components/site/Layout";
import { categories, company, gallery, images, posts, services, testimonials } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Agricultural Biotechnology Solutions", "Unimax Agri Bio-Technologies — science-driven agricultural solutions for farmers, dealers and distributors across Maharashtra."),
  component: Home,
});

const strengths = [
  { icon: Microscope, title: "Science-Led Approach", text: "Biotechnology-inspired thinking applied to everyday farming." },
  { icon: Sprout, title: "Farmer Focused", text: "Solutions shaped around real field conditions." },
  { icon: ShieldCheck, title: "Quality Commitment", text: "A clear focus on consistency and trust." },
  { icon: Leaf, title: "Sustainable Growth", text: "Healthier soil today for better harvests tomorrow." },
];

function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
        <img src={images.hero} alt="Green farmland at sunrise in Maharashtra" width={1920} height={1088} className="absolute inset-0 -z-10 size-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0 -z-10" />
        <div className="container-x animate-rise py-24 text-primary-foreground">
          <p className="eyebrow !text-gold">Agricultural Biotechnology · Ahmednagar</p>
          <h1 className="text-display mt-5 max-w-4xl">Science that grows <span className="text-gold">stronger harvests.</span></h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">Unimax Agri Bio-Technologies brings modern agri-biotech solutions to farmers, dealers and agricultural businesses.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl"><Link to="/products">Explore Products <ArrowRight /></Link></Button>
            <Button asChild variant="glass" size="xl"><Link to="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>

      <section className="container-x section-y grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <img src={images.lab} alt="Seedling held in a lab" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-card p-5 shadow-lift md:block">
            <FlaskConical className="size-7 text-accent" />
            <p className="mt-2 font-display font-bold text-primary">Agri + Biotech</p>
          </div>
        </div>
        <div>
          <SectionHead eyebrow="Welcome to Unimax" title="Rooted in agriculture. Driven by science." />
          <p className="text-lg text-muted-foreground">{company.name} is an agricultural biotechnology company based in {company.location}. We are focused on supporting productive, sustainable farming.</p>
          <p className="mt-4"><Placeholder>Company story, history and mission to be supplied</Placeholder></p>
          <Button asChild variant="brand" size="xl" className="mt-8"><Link to="/about">About Us <ArrowRight /></Link></Button>
        </div>
      </section>

      <section className="bg-secondary section-y">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-lift">
              <s.icon className="size-9 text-accent" />
              <h3 className="mt-5 text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHead eyebrow="Products for Modern Agriculture" title="Explore Our Agricultural Solutions" text="Illustrative categories — final product range to be confirmed by Unimax." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.slug} to="/products" className="group overflow-hidden rounded-2xl border bg-card transition-all hover:border-accent hover:shadow-lift">
              <div className="overflow-hidden"><img src={c.img} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-deep relative section-y overflow-hidden text-primary-foreground">
        <div className="bg-dots absolute inset-0" aria-hidden />
        <div className="container-x relative">
          <p className="eyebrow !text-gold">Solutions</p>
          <h2 className="text-h2 mt-3 max-w-2xl">Support for every link in the farming chain.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const Icon = [Sprout, FlaskConical, Users, Handshake][i];
              return (
                <div key={s.title} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur transition-colors hover:bg-primary-foreground/10">
                  <Icon className="size-8 text-gold" />
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/70">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHead eyebrow="Gallery" title="From the field" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.slice(0, 4).map((g, i) => <img key={i} src={g} alt="" loading="lazy" className={`w-full rounded-2xl object-cover ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`} />)}
        </div>
      </section>

      <section className="bg-secondary section-y">
        <div className="container-x">
          <SectionHead eyebrow="Testimonials" title="Voices from the field" center />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="rounded-2xl bg-card p-8 shadow-soft">
                <blockquote className="text-foreground/80">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-sm"><b className="text-primary">{t.name}</b><span className="block text-muted-foreground">{t.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHead eyebrow="Insights" title="Latest from the blog" />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group">
              <img src={p.img} alt="" loading="lazy" className="aspect-[16/10] w-full rounded-2xl object-cover transition-opacity group-hover:opacity-90" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-accent">{p.date}</p>
              <h3 className="mt-2 text-xl font-bold text-primary group-hover:underline">{p.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
