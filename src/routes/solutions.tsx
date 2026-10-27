import { createFileRoute, Link } from "@tanstack/react-router";
import { FlaskConical, Handshake, Sprout, Users, ArrowRight } from "lucide-react";
import { CtaBanner, PageHero, SectionHead } from "@/components/site/Layout";
import { images, services } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () => seo("Solutions & Services", "Crop nutrition guidance, product information, farmer support and dealer enquiries from Unimax."),
  component: Solutions,
});

const icons = [Sprout, FlaskConical, Users, Handshake];

function Solutions() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="Support beyond the product." img={images.lab} />
      <section className="container-x section-y">
        <SectionHead eyebrow="What we offer" title="How we help" text="Proposed service areas — to be confirmed by Unimax." />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => {
            const I = icons[i] ?? Sprout;
            return (
              <div key={s.title} className="flex gap-6 rounded-2xl border bg-card p-8 transition-all hover:shadow-lift">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-secondary"><I className="size-7 text-accent" /></span>
                <div>
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
