import { Award, BadgeCheck, Eye, Target, Heart, ShieldCheck } from "lucide-react";
import { CtaBanner, PageHero, Placeholder, SectionHead } from "@/components/site/Layout";
import { breadcrumbImages, company, companyImages, images } from "@/lib/site";
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
          text="Quality standards and agricultural registrations shared in the Unimax company profile."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Award,
              tag: "Quality management",
              title: "ISO 9001:2015",
              detail: "Certified company",
              image: companyImages.brand,
              imageAlt: "Unimax agricultural brand certificate reference",
              text: "Unimax Agri Bio-Technologies (I) Pvt. Ltd. is identified as an ISO 9001:2015 certified company in the supplied company profile.",
            },
            {
              icon: ShieldCheck,
              tag: "Agricultural registration",
              title: "Bio-Stimulant Licence",
              detail: "LCBWD0620250025",
              image: companyImages.profile,
              imageAlt: "Unimax company profile and registration reference",
              text: "The Bio-Stimulant Licence number is listed in the supplied company profile for company reference.",
            },
          ].map(({ icon: Icon, tag, title, detail, image, imageAlt, text }) => (
            <article key={title} className="card-animate card-animate-hover relative overflow-hidden rounded-3xl border bg-card p-7 shadow-soft md:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-gold to-primary" aria-hidden />
              <div className="grid gap-6 sm:grid-cols-[150px_1fr] sm:items-start">
                <a href={image} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-2xl border bg-secondary/50 p-2" aria-label={`Open ${title} image`}>
                  <img src={image} alt={imageAlt} loading="lazy" className="h-52 w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-105" />
                </a>
                <div className="min-w-0">
                  <span className="mb-4 grid size-12 place-items-center rounded-2xl bg-secondary"><Icon className="size-6 text-accent" /></span>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{tag}</p>
                  <h3 className="mt-2 text-xl font-bold text-primary">{title}</h3>
                  <p className="mt-1 text-sm font-semibold text-foreground/70">{detail}</p>
                </div>
              </div>
              <p className="mt-6 border-t pt-5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-primary"><BadgeCheck className="size-4 text-accent" /> Company profile reference</div>
            </article>
          ))}
        </div>
      </section>
      <div className="section-y"><CtaBanner /></div>
    </>
  );
}
