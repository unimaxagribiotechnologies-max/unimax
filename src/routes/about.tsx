import {
  Award,
  BadgeCheck,
  Building2,
  Eye,
  Factory,
  Globe2,
  Handshake,
  Heart,
  Microscope,
  ShieldCheck,
  Sprout,
  Target,
  UsersRound,
  Warehouse,
} from "lucide-react";

import { CtaBanner, PageHero, SectionHead } from "@/components/site/Layout";
import { breadcrumbImages, companyImages } from "@/lib/site";

const portfolio = [
  "Biological and Organic Plant Growth Promoters",
  "Advanced Bio-Stimulants & Soil Health Enhancers",
  "Nutrient Management & Uptake Improvers",
  "Plant Protectors & Plant Metabolism Improvers",
  "Micronutrients & Speciality Water Soluble Fertilizers",
  "Adjuvants, Bio-Fertilizers and Miscellaneous Agri Inputs for Organic as well as Conventional Farming",
];

const pillars = [
  { icon: Target, title: "Dynamic Management Team", text: "With a clear vision for sustainable agriculture." },
  { icon: Microscope, title: "Strong Agronomy Department", text: "Bridging science and field practices." },
  { icon: UsersRound, title: "Farmer Support Executives", text: "On-ground support for every farmer." },
  { icon: Handshake, title: "Sales & Marketing Team", text: "Taking innovation to the last mile." },
  { icon: ShieldCheck, title: "System-Driven Teams", text: "Accounts, Admin and HR working with clarity." },
  { icon: Factory, title: "Operations Team", text: "Service-oriented and skillful execution." },
];

const departments = [
  { icon: Building2, title: "Projects", text: "Coordinating initiatives that support the company's growth." },
  { icon: Factory, title: "Production", text: "Turning carefully developed formulations into reliable products." },
  { icon: ShieldCheck, title: "Quality Assurance", text: "Maintaining systems and processes that build confidence." },
  { icon: BadgeCheck, title: "Quality Control", text: "Checking product consistency at every important stage." },
  { icon: Microscope, title: "Research & Development", text: "Connecting technical knowledge with field requirements." },
  { icon: Handshake, title: "Marketing", text: "Bringing practical agricultural solutions closer to farmers and partners." },
  { icon: Building2, title: "Finance", text: "Supporting disciplined, responsible business operations." },
];

const certifications = [
  {
    icon: Award,
    tag: "Quality management",
    title: "ISO 9001:2015",
    detail: "Certified company",
    image: companyImages.brand,
    imageAlt: "Unimax agricultural brand certificate reference",
    text: "Unimax Agri Bio-Technologies (I) PVT LTD is identified as an ISO 9001:2015 certified company in the supplied company profile.",
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
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="An agri-biotech company built for Indian farms." img={breadcrumbImages.about} />

      <section className="container-x section-y grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="eyebrow">About Unimax</p>
          <h2 className="text-h2 mt-3 max-w-3xl text-primary">Nurturing growth, empowering farmers, sustaining the future.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">We are an established and rapidly growing manufacturer of proprietary formulated agricultural inputs, dedicated to sustainable farming.</p>
          <p className="mt-5 text-muted-foreground">Since our inception in 2016, we have been committed to providing innovative, effective and eco-friendly solutions that enhance farm productivity while preserving soil health. What started with a strong presence in Maharashtra, Gujarat and Madhya Pradesh has now expanded into a Pan-India network covering major agricultural markets of Central, Southern and Northern India, with a clear vision to expand globally.</p>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 border-t pt-6">
            {[
              ["2016", "Established"],
              ["Pan-India", "Market network"],
              ["Global", "Expansion vision"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-2xl font-extrabold text-primary">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-secondary/70" aria-hidden />
          <img src={companyImages.about} alt="The foundation of Unimax's success" loading="lazy" className="aspect-[4/3] w-full rounded-[1.75rem] border bg-card p-3 object-cover shadow-lift" />
        </div>
      </section>

      <section className="bg-secondary section-y !pb-[clamp(2.5rem,5vw,4rem)]">
        <div className="container-x">
          <SectionHead eyebrow="Who we are" title="A partner in the farmer's journey towards prosperity." text="We are not just an agri-input manufacturing company. Every product is designed to address a real field problem and deliver visible results." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item, index) => (
              <article key={item} className="card-animate card-animate-hover rounded-2xl border bg-card p-7 shadow-soft">
                <span className="grid size-11 place-items-center rounded-xl bg-secondary text-accent"><Sprout className="size-5" /></span>
                <p className="mt-5 text-sm font-semibold leading-relaxed text-primary">{item}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">Portfolio focus {String(index + 1).padStart(2, "0")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x section-y !pt-[clamp(2.5rem,5vw,4rem)]">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="relative overflow-hidden rounded-3xl bg-deep p-8 text-primary-foreground shadow-lift md:p-10">
            <div className="bg-dots absolute inset-0 opacity-60" aria-hidden />
            <div className="relative">
              <p className="eyebrow !text-gold">Leadership</p>
              <h2 className="text-h2 mt-3">Experience that gives the team direction.</h2>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">Mr. Bhausaheb Ladhane, Managing Director of the Company, holds a BBM (Agri) and a postgraduate MBA in Marketing from Pune. He brings vast industrial experience and a clear understanding of the agricultural sector.</p>
              <div className="mt-8 flex items-center gap-3 border-t border-primary-foreground/15 pt-6">
                <UsersRound className="size-7 text-gold" />
                <p className="text-sm font-semibold text-primary-foreground/80">A well-groomed, technically sound and dedicated team is the backbone of Unimax.</p>
              </div>
            </div>
          </article>
          <div>
                <SectionHead eyebrow="Our people" title="Specialists working together for better agriculture." text="The people at Unimax Agri Bio-Technologies (I) PVT LTD come from diverse streams of the industry, bringing wide experience in their respective fields." />
            <div className="grid gap-4 sm:grid-cols-2">
              {departments.map(({ icon: Icon, title, text }) => (
                <article key={title} className="card-animate card-animate-hover rounded-2xl border bg-card p-5 shadow-soft">
                  <Icon className="size-6 text-accent" />
                  <h3 className="mt-4 text-base font-bold text-primary">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x section-y grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="mx-auto aspect-[4/3] w-full max-w-[500px] overflow-hidden rounded-3xl border bg-card p-3 shadow-lift">
          <img src={companyImages.profile} alt="Unimax company profile and manufacturing facility" loading="lazy" className="size-full rounded-2xl object-contain" />
        </div>
        <div>
          <SectionHead eyebrow="Manufacturing & Infrastructure" title="Built for quality, coordination and timely availability." />
          <p className="text-lg leading-relaxed text-muted-foreground">We operate a state-of-the-art manufacturing facility at Diksal, Karjat, Dist. Ahilyanagar, Maharashtra. Strategically located with excellent connectivity to Pune and Ahilyanagar, our facility is equipped with modern formulation technology, quality control systems and bulk storage capabilities.</p>
          <p className="mt-5 text-muted-foreground">Our Corporate Office and Central Sales Office are also based at Diksal, ensuring seamless coordination between manufacturing, R&amp;D and market operations. Branch Offices, Warehouses and a robust network of Dealers, Distributors and Retailers help ensure timely product availability across India.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Building2, label: "Corporate office" },
              { icon: Warehouse, label: "Warehouses" },
              { icon: Globe2, label: "Pan-India network" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-2xl bg-secondary p-4"><Icon className="size-6 text-accent" /><p className="mt-3 text-sm font-bold text-primary">{label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep relative overflow-hidden section-y text-primary-foreground">
        <div className="bg-dots absolute inset-0" aria-hidden />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow !text-gold">Research &amp; Development</p>
            <h2 className="text-h2 mt-3 max-w-2xl">Innovation is in our DNA.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">All our distinguished products are self-formulated in our own well-equipped R&amp;D Centre and rigorously field-tested by our own Agronomy Department under diverse agro-climatic conditions before reaching the market.</p>
            <p className="mt-5 max-w-2xl text-primary-foreground/70">To ensure scientific validation and efficacy, some of our products are regularly tested by various State Agricultural Universities and Research Centres. Our biggest validation comes from the field—millions of satisfied farmers who have adopted our products and are promoting them through word-of-mouth for sustainable farming.</p>
          </div>
          <div className="aspect-[4/3] rounded-3xl border border-primary-foreground/15 bg-primary-foreground/10 p-4 backdrop-blur">
            <img src={companyImages.brand} alt="Unimax research and agricultural brand graphic" loading="lazy" className="size-full rounded-2xl object-contain" />
          </div>
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHead eyebrow="Our pillars" title="Our growth is driven by our people." text="Farmers, retailers and distributors are part of our extended family, continuously helping us reach new horizons." center />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card-animate card-animate-hover rounded-2xl border bg-card p-7 shadow-soft">
              <Icon className="size-8 text-accent" />
              <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary section-y">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {[
            { icon: Eye, eyebrow: "Our vision", title: "A globally recognized Indian agri-input company.", text: "Known for innovative, sustainable and farmer-centric solutions." },
            { icon: Target, eyebrow: "Our mission", title: "Empowering farmers to grow better.", text: "We help increase yield, quality and profitability through scientifically formulated, affordable and environmentally responsible agricultural inputs." },
            { icon: Heart, eyebrow: "Our core values", title: "Quality. Innovation. Integrity.", text: "Farmer First and Sustainability guide the way we build products, partnerships and progress." },
          ].map(({ icon: Icon, eyebrow, title, text }) => (
            <article key={eyebrow} className="card-animate card-animate-hover rounded-3xl bg-card p-8 shadow-soft">
              <Icon className="size-9 text-accent" />
              <p className="eyebrow mt-6">{eyebrow}</p>
              <h3 className="mt-3 text-2xl font-bold text-primary">{title}</h3>
              <p className="mt-4 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-x section-y">
        <SectionHead eyebrow="Certifications" title="Built on trust and standards." text="Quality standards and agricultural registrations shared in the Unimax company profile." />
        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map(({ icon: Icon, tag, title, detail, image, imageAlt, text }) => (
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

      <section className="bg-deep relative overflow-hidden section-y text-primary-foreground">
        <div className="bg-dots absolute inset-0" aria-hidden />
        <div className="container-x relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow !text-gold">Going global</p>
            <h2 className="text-h2 mt-3 max-w-3xl">Made in India, made for farmers, ready for the world.</h2>
            <p className="mt-5 max-w-3xl text-lg text-primary-foreground/75">With a strong domestic foundation, we have initiated groundwork and market surveys for international markets. With a positive response to our speciality products, we are poised to enter the export market.</p>
          </div>
          <div className="grid size-24 place-items-center rounded-full border border-gold/40 bg-gold/10"><Globe2 className="size-11 text-gold" /></div>
        </div>
      </section>

      <div className="section-y"><CtaBanner /></div>
    </>
  );
}
