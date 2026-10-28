import { Link } from "@/lib/router";
import { ArrowRight, BadgeCheck, FlaskConical, Handshake, HeartHandshake, Leaf, Microscope, Newspaper, PlayCircle, Settings2, ShieldCheck, Sprout, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner, SectionHead } from "@/components/site/Layout";
import { useManagedContent } from "@/lib/content-store";
import { categories, company, heroBackground, images, resourceNav, services } from "@/lib/site";
const strengths = [
  { icon: Microscope, title: "Science-Led Approach", text: "Biotechnology-inspired thinking applied to everyday farming." },
  { icon: Sprout, title: "Farmer Focused", text: "Solutions shaped around real field conditions." },
  { icon: ShieldCheck, title: "Quality Commitment", text: "A clear focus on consistency and trust." },
  { icon: Leaf, title: "Sustainable Growth", text: "Healthier soil today for better harvests tomorrow." },
];

const heroFeatures = [
  { icon: Sprout, title: "Innovative", subtitle: "Solutions" },
  { icon: Settings2, title: "Farmer", subtitle: "Focused" },
  { icon: Users, title: "Sustainable", subtitle: "Agriculture" },
  { icon: FlaskConical, title: "Research", subtitle: "Driven" },
];

const resourceIcons = [Trophy, BadgeCheck, HeartHandshake, Microscope, PlayCircle, Newspaper];

export default function Home() {
  const { content } = useManagedContent();
  const homeGallery = content.gallery.length < 5 ? [...content.gallery, images.farmer] : content.gallery;

  return (
    <>
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
        <img src={heroBackground} alt="Farmer standing in a green agricultural field at sunrise" width={1672} height={941} className="absolute inset-0 -z-10 size-full object-cover" />
        <div className="absolute inset-y-0 left-0 -z-10 w-full bg-gradient-to-r from-background/95 via-background/75 to-transparent lg:w-[68%]" />
        <div className="container-x relative z-10 animate-rise py-20 text-primary md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow flex items-center gap-3 text-primary"><span className="h-px w-8 bg-gold" />Agricultural Biotechnology · Ahmednagar</p>
            <h1 className="text-display mt-5 max-w-3xl">Science that grows <span className="text-gold">stronger harvests.</span></h1>
            <p className="mt-6 max-w-xl text-lg text-primary/80">Unimax Agri Bio-Technologies brings modern agri-biotech solutions to farmers, dealers and agricultural businesses.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="xl"><Link to="/products">Explore Products <ArrowRight /></Link></Button>
              <Button asChild variant="outline" size="xl" className="border-primary/40 bg-background/30 text-primary hover:bg-background/60"><Link to="/contact">Contact Us <ArrowRight /></Link></Button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 border-t border-primary/20 pt-6 sm:grid-cols-4 sm:border-t-0 sm:pt-0">
              {heroFeatures.map(({ icon: Icon, title, subtitle }) => (
                <div key={title} className="flex items-center gap-3 border-primary/20 py-3 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-0">
                  <Icon className="size-7 shrink-0 text-primary" />
                  <span className="text-sm font-semibold leading-tight text-primary"><span className="block">{title}</span><span className="block">{subtitle}</span></span>
                </div>
              ))}
            </div>
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
          <p className="mt-4 text-muted-foreground">Led by Managing Director Mr. Bhausaheb Ladhane, our technically sound and dedicated team brings experience from projects, production, quality, research and development, marketing and finance to support the future of sustainable agriculture.</p>
          <Button asChild variant="brand" size="xl" className="mt-8"><Link to="/about">About Us <ArrowRight /></Link></Button>
        </div>
      </section>

      <section className="bg-secondary section-y">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((s) => (
            <div key={s.title} className="card-animate card-animate-hover rounded-2xl border bg-card p-7">
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
            <Link key={c.slug} to="/products" className="card-animate card-animate-hover group overflow-hidden rounded-2xl border bg-card hover:border-accent">
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
              const Icon = [Sprout, FlaskConical, Users, Handshake][i] ?? Sprout;
              return (
                <div key={s.title} className="card-animate rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur transition-colors hover:bg-primary-foreground/10">
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
        <SectionHead eyebrow="More from Unimax" title="Explore our company, work and updates." text="Discover the people, standards and stories behind our agricultural focus." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resourceNav.map((item, index) => {
            const Icon = resourceIcons[index] ?? Leaf;
            return (
              <Link key={item.to} to={item.to} className="card-animate card-animate-hover group flex items-center gap-4 rounded-2xl border bg-card p-6 shadow-soft">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-accent transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-6" /></span>
                <span className="min-w-0"><span className="block text-lg font-bold text-primary">{item.label}</span><span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-accent">Discover <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHead eyebrow="Gallery" title="From the field" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {homeGallery.slice(0, 5).map((g, i) => <img key={i} src={g} alt="" loading="lazy" className={`w-full rounded-2xl object-cover ${i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"}`} />)}
        </div>
      </section>

      <section className="bg-secondary section-y">
        <div className="container-x">
          <SectionHead eyebrow="Testimonials" title="Voices from the field" center />
          <div className="grid gap-6 md:grid-cols-3">
            {content.testimonials.map((t, i) => (
              <figure key={i} className="card-animate card-animate-hover rounded-2xl bg-card p-8 shadow-soft">
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
          {content.posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="card-animate card-animate-hover group rounded-2xl p-2">
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
