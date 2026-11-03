import { Link } from "@/lib/router";
import { FlaskConical, Handshake, Sprout, Users, ArrowRight } from "lucide-react";
import { CtaBanner, PageHero, SectionHead } from "@/components/site/Layout";
import { breadcrumbImages, services } from "@/lib/site";
const icons = [Sprout, FlaskConical, Users, Handshake];

export default function Solutions() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="Support beyond the product." img={breadcrumbImages.solutions} />
      <section className="container-x section-y">
        <SectionHead eyebrow="What we offer" title="How we help" text="Proposed service areas — to be confirmed by Unimax." />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const I = icons[i] ?? Sprout;
            return (
              <div key={s.title} className="card-animate card-animate-hover flex min-w-0 gap-4 rounded-2xl border bg-card p-6 sm:gap-6 sm:p-8">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-secondary"><I className="size-7 text-accent" /></span>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-primary">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.desc}</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">Learn more <ArrowRight className="size-4" /></Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
