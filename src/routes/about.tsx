import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, Heart } from "lucide-react";
import { CtaBanner, PageHero, Placeholder, SectionHead } from "@/components/site/Layout";
import { company, images } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("About Us", "Learn about Unimax Agri Bio-Technologies Pvt. Ltd., an agri-biotech company in Ahmednagar, Maharashtra."),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="An agri-biotech company built for Indian farms." img={images.farmer} />
      <section className="container-x section-y grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Who we are" title={company.name} />
          <p className="text-lg text-muted-foreground">Based in {company.location}, Unimax works in agriculture and agricultural biotechnology. Led by {company.contact}.</p>
          <p className="mt-6"><Placeholder>Company history, founding year and facilities to be supplied</Placeholder></p>
        </div>
        <img src={images.soil} alt="Seedling in soil" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
      </section>
      <section className="bg-secondary section-y">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[{ i: Target, t: "Mission" }, { i: Eye, t: "Vision" }, { i: Heart, t: "Values" }].map(({ i: I, t }) => (
            <div key={t} className="rounded-2xl bg-card p-8 shadow-soft">
              <I className="size-9 text-accent" />
              <h3 className="mt-5 text-2xl font-bold text-primary">Our {t}</h3>
              <p className="mt-3 text-muted-foreground">Our {t.toLowerCase()} statement will be added here once approved by Unimax.</p>
            </div>
          ))}
        </div>
      </section>
      <div className="section-y"><CtaBanner /></div>
    </>
  );
}
