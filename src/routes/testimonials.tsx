import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { CtaBanner, PageHero } from "@/components/site/Layout";
import { images, testimonials } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/testimonials")({
  head: () => seo("Testimonials", "What farmers, dealers and partners say about Unimax Agri Bio-Technologies."),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="Trusted in the field." text="Only verified customer feedback will be published here." img={images.farmer} />
      <section className="container-x section-y grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="rounded-2xl border bg-card p-8 shadow-soft">
            <Quote className="size-8 text-gold" />
            <blockquote className="mt-4 text-foreground/80">{t.quote}</blockquote>
            <figcaption className="mt-6 text-sm"><b className="text-primary">{t.name}</b><span className="block text-muted-foreground">{t.role}</span></figcaption>
          </figure>
        ))}
      </section>
      <CtaBanner />
    </>
  );
}
