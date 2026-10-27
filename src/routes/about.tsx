import { Award, BadgeCheck, Eye, Target, Heart } from "lucide-react";
import { CtaBanner, PageHero, Placeholder, SectionHead } from "@/components/site/Layout";
import { breadcrumbImages, company, images } from "@/lib/site";
export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="An agri-biotech company built for Indian farms." img={breadcrumbImages.about} />
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
            <div key={t} className="card-animate card-animate-hover rounded-2xl bg-card p-8 shadow-soft">
              <I className="size-9 text-accent" />
              <h3 className="mt-5 text-2xl font-bold text-primary">Our {t}</h3>
              <p className="mt-3 text-muted-foreground">Our {t.toLowerCase()} statement will be added here once approved by Unimax.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-x section-y">
        <SectionHead
          eyebrow="Certifications"
          title="Built on trust and standards."
          text="Certification details and documents will be added once supplied by Unimax."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { icon: Award, title: "Certification 01" },
            { icon: BadgeCheck, title: "Certification 02" },
          ].map(({ icon: Icon, title }) => (
            <div key={title} className="card-animate card-animate-hover flex items-start gap-5 rounded-2xl border bg-card p-7 shadow-soft">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-secondary">
                <Icon className="size-7 text-accent" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3"><Placeholder>Certificate name, issuer and validity to be supplied</Placeholder></p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="section-y"><CtaBanner /></div>
    </>
  );
}
