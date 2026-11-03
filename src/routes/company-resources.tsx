import { useState } from "react";
import {
  Award,
  BadgeCheck,
  Building2,
  CalendarDays,
  FlaskConical,
  HeartHandshake,
  Leaf,
  Microscope,
  Newspaper,
  PlayCircle,
  ShieldCheck,
  Sprout,
  Trophy,
} from "lucide-react";

import { CtaBanner, SectionHead } from "@/components/site/Layout";
import { companyImages, images } from "@/lib/site";

export const resourceSlugs = ["awards", "certification", "csr", "laboratory", "video", "news-events"] as const;
export type ResourceSlug = (typeof resourceSlugs)[number];

type ResourceCard = { icon: typeof Award; title: string; text: string };
type ResourceImage = { src: string; alt: string; label: string };

const resources: Record<ResourceSlug, {
  eyebrow: string;
  title: string;
  intro: string;
  detail?: string;
  image: string;
  imageAlt: string;
  gallery?: ResourceImage[];
  sectionTitle: string;
  cards: ResourceCard[];
}> = {
  awards: {
    eyebrow: "Awards",
    title: "Award of Appreciation – Startup Conclave & Awards 2024",
    intro: "Recognized for Outstanding Innovation in Agriculture.",
    detail: "Unimax Agri Bio-Technologies (I) Pvt. Ltd. was honored with the Certificate of Appreciation and Appreciation Award at the Startup Conclave & Awards 2024, organized by Vaikunth Mehta National Institute of Cooperative Management (VAMNICOM), Pune, in collaboration with CARE Foundation, on 2nd February 2024.\n\nThis recognition celebrates our commitment to agricultural innovation, technological advancement, and our continuous efforts towards empowering farmers and contributing to the growth of the agricultural sector.",
    image: "/assets/unimax_appreciation_certificate.png",
    imageAlt: "Unimax Certificate of Appreciation from Startup Conclave & Awards 2024",
    gallery: [
      { src: "/assets/unimax_appreciation_award.png", alt: "Unimax Appreciation Award from Startup Conclave & Awards 2024", label: "Appreciation Award" },
    ],
    sectionTitle: "Recognition for agricultural innovation",
    cards: [
      { icon: Trophy, title: "Outstanding innovation", text: "Recognized for innovation and technological advancement in agriculture." },
      { icon: Sprout, title: "Empowering farmers", text: "The award reflects our continued efforts to create meaningful value for farmers." },
      { icon: HeartHandshake, title: "A commitment to progress", text: "We remain focused on contributing to the growth of the agricultural sector." },
    ],
  },
  certification: {
    eyebrow: "Certification",
    title: "Committed to Quality. Driven by Innovation. Dedicated to Farmers.",
    intro: "At Unimax Agri Bio-Technologies (India) Pvt. Ltd., quality is our commitment and innovation is our strength. Our ISO 9001:2015 Quality Management System reflects our dedication to maintaining quality standards in agricultural products and contributing to sustainable agricultural growth.",
    detail: "Certificate of Registration\nISO 9001:2015 Quality Management System\n\nScope: Manufacturing & marketing of micronutrients, organic manure, organic fertilizers, bio fertilizers, seeds, pesticides and plant growth regulators.\n\nCertificate issued by Quality Research Organization (QRO). Certificate date: 13th April 2026. Certificate expiry: 12th April 2029. Certificate number: 3050260413149Q.",
    image: "/assets/certificate.jpeg",
    imageAlt: "Unimax ISO 9001:2015 certificate of registration",
    sectionTitle: "Our ISO 9001:2015 quality commitment",
    cards: [
      { icon: BadgeCheck, title: "ISO 9001:2015", text: "Our Quality Management System supports consistent standards across agricultural product manufacturing and marketing." },
      { icon: ShieldCheck, title: "Quality by process", text: "Defined systems and regular review help us maintain dependable products and responsible operations." },
      { icon: Award, title: "Dedicated to farmers", text: "Quality and innovation guide our continued efforts to support farmers and sustainable agricultural growth." },
    ],
  },
  csr: {
    eyebrow: "CSR",
    title: "Growing communities alongside crops.",
    intro: "Responsible agriculture is about more than inputs. It is about supporting people, protecting resources and sharing useful knowledge.",
    image: companyImages.values,
    imageAlt: "Agricultural values and technology illustration",
    sectionTitle: "Our responsibility focus",
    cards: [
      { icon: HeartHandshake, title: "Farmer-first support", text: "We aim to make useful agricultural information easier to understand and apply in the field." },
      { icon: Leaf, title: "Responsible resource use", text: "Better soil and crop decisions can support healthier farms and more sustainable growth." },
      { icon: Sprout, title: "Knowledge sharing", text: "Practical conversations with farmers and partners help good ideas travel further." },
    ],
  },
  laboratory: {
    eyebrow: "Laboratory",
    title: "Advanced R&D Lab for Testing Micronutrient, Bio-Fertilizers, Water Soluble Fertilizers, Soil, Water and Leaf.",
    intro: "Integrated research facility for Micronutrients & Bio-Fertilizers. We test, formulate & validate every batch for maximum crop yield and soil health.",
    image: "/assets/laboratory/lab-01.jpeg",
    imageAlt: "Unimax laboratory team working in the advanced R&D lab",
    gallery: [
      { src: "/assets/laboratory/lab-02.jpeg", alt: "Unimax laboratory testing equipment and analyst", label: "Laboratory testing and analysis" },
      { src: "/assets/laboratory/lab-03.jpeg", alt: "Unimax analyst working with laboratory equipment", label: "Controlled testing environment" },
      { src: "/assets/laboratory/lab-04.jpeg", alt: "Unimax laboratory incubation and microscopy equipment", label: "Incubation and microscopy" },
      { src: "/assets/laboratory/lab-05.jpeg", alt: "Unimax analyst examining a laboratory sample", label: "Sample examination" },
      { src: "/assets/laboratory/lab-06.jpeg", alt: "Unimax laboratory incubation room", label: "Incubation room" },
      { src: "/assets/laboratory/lab-07.jpeg", alt: "Unimax analyst using laboratory instruments", label: "Instrument-led research" },
      { src: "/assets/laboratory/lab-08.jpeg", alt: "Unimax laboratory bio-fertilizer culture samples", label: "Bio-fertilizer culture work" },
      { src: "/assets/laboratory/lab-09.jpeg", alt: "Unimax laboratory workspace and equipment", label: "Integrated R&D facility" },
      { src: "/assets/laboratory/lab-10.jpeg", alt: "Unimax analyst working with an incubator", label: "Batch development" },
      { src: "/assets/laboratory/lab-11.jpeg", alt: "Unimax researcher holding a laboratory sample", label: "Research in practice" },
      { src: "/assets/laboratory/lab-12.jpeg", alt: "Unimax researcher examining a sample under a microscope", label: "Microscopic analysis" },
      { src: "/assets/laboratory/lab-13.jpeg", alt: "Unimax researcher validating a laboratory sample", label: "Validation and quality checks" },
    ],
    sectionTitle: "From observation to application",
    cards: [
      { icon: Microscope, title: "Micronutrient testing", text: "Our R&D team tests micronutrients and formulations to support consistent agricultural performance." },
      { icon: FlaskConical, title: "Bio-fertilizer research", text: "Integrated research and formulation work helps validate bio-fertilizer quality and reliability." },
      { icon: Building2, title: "Soil, water and leaf analysis", text: "Testing soil, water and leaf samples helps connect product development with crop and soil health." },
    ],
  },
  video: {
    eyebrow: "Video",
    title: "See the ideas behind better harvests.",
    intro: "A video library for company stories, product education and field conversations will be added here as recordings become available.",
    image: companyImages.brand,
    imageAlt: "Unimax agricultural brand artwork",
    sectionTitle: "Video library",
    cards: [
      { icon: PlayCircle, title: "Company introduction", text: "A short overview of Unimax Agri Bio-Technologies and our agricultural focus." },
      { icon: PlayCircle, title: "Product education", text: "Simple, practical explainers for product purpose, timing and application." },
      { icon: PlayCircle, title: "Field conversations", text: "Stories and conversations from the farmers, dealers and partners we serve." },
    ],
  },
  "news-events": {
    eyebrow: "News / Events",
    title: "AGRI EXHIBITION",
    intro: "Unimax participates in agricultural exhibitions and outreach programmes where farmers, dealers and partners can discover practical crop solutions and share field experiences.",
    detail: "UNIMAX AGRI BIO-TECHNOLOGIES (I) PVT LTD stall at Agriculture Exhibition - Displaying our complete range of Bio-fertilizers, Micronutrients & Fruit Quality Enhancers with live crop results.",
    image: "/assets/events/event-01.jpeg",
    imageAlt: "Unimax Agri Bio-Technologies team at an agricultural exhibition",
    gallery: [
      { src: "/assets/events/event-02.jpeg", alt: "Unimax agricultural exhibition stall with products and team members", label: "Product showcase" },
      { src: "/assets/events/event-03.jpeg", alt: "Visitors exploring the Unimax agricultural exhibition stall", label: "Visitors and farmer interactions" },
      { src: "/assets/events/event-04.jpeg", alt: "Visitors meeting the Unimax team at an agriculture event", label: "Agricultural outreach" },
      { src: "/assets/events/event-05.jpeg", alt: "Unimax team presenting products at an agricultural exhibition", label: "Team and product presentation" },
      { src: "/assets/events/event-06.jpeg", alt: "Farmers engaging with the Unimax team at an event", label: "Farmer engagement" },
      { src: "/assets/events/event-07.jpeg", alt: "Agricultural partners discussing products with the Unimax team", label: "Partner conversations" },
      { src: "/assets/events/event-08.jpeg", alt: "Unimax team with agricultural partners at the exhibition stall", label: "Partner welcome" },
      { src: "/assets/events/event-09.jpeg", alt: "Unimax team presenting a bouquet at the agricultural exhibition", label: "Community recognition" },
      { src: "/assets/events/event-10.jpeg", alt: "Unimax team presenting products and welcoming an agricultural guest", label: "Guest interaction" },
      { src: "/assets/events/event-11.jpeg", alt: "Unimax team speaking with visitors at the exhibition stall", label: "Visitor conversations" },
      { src: "/assets/events/event-12.jpeg", alt: "Unimax team with an honoured guest at the agricultural exhibition", label: "Exhibition highlights" },
      { src: "/assets/events/event-13.jpeg", alt: "Unimax team meeting with dealers and agricultural partners", label: "Dealer Meeting" },
    ],
    sectionTitle: "AGRI EXHIBITION",
    cards: [
      { icon: Newspaper, title: "Agricultural exhibitions", text: "Our event stalls bring Unimax products, crop knowledge and practical conversations closer to the farming community." },
      { icon: CalendarDays, title: "Farmer interactions", text: "Events create space to understand field needs and share useful guidance with farmers and agricultural partners." },
      { icon: Sprout, title: "Solutions in the field", text: "We use these conversations to connect product innovation with healthier crops, better yields and sustainable agriculture." },
    ],
  },
};

export default function ResourcePage({ slug }: { slug: ResourceSlug }) {
  const resource = resources[slug];
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const isVideo = slug === "video";

  return (
    <>
      <ResourceHero resource={resource} />
      <section className="container-x section-y grid items-center gap-12 lg:grid-cols-[minmax(300px,0.75fr)_minmax(0,1.25fr)] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[500px]">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-secondary/70" aria-hidden />
          <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border/80 bg-card p-3 shadow-lift">
            <img
              src={resource.image}
              alt={resource.imageAlt}
              loading="lazy"
              className="size-full rounded-2xl bg-secondary/30 object-contain object-center"
            />
          </div>
        </div>
        <div className="max-w-2xl lg:py-8">
          <p className="eyebrow">{resource.eyebrow}</p>
          <h1 className="text-h2 mt-3 max-w-3xl text-primary">{resource.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{resource.intro}</p>
          {resource.detail && <p className="mt-5 whitespace-pre-line leading-relaxed text-muted-foreground">{resource.detail}</p>}
          <div className="mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-secondary/60 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Focus</p>
              <p className="mt-2 font-semibold text-primary">Practical agriculture</p>
            </div>
            <div className="rounded-2xl bg-secondary/60 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Approach</p>
              <p className="mt-2 font-semibold text-primary">Science with purpose</p>
            </div>
          </div>
        </div>
      </section>
      {resource.gallery && (
        <section className="container-x pb-4">
          <div className="grid gap-6 md:grid-cols-2">
            {resource.gallery.map((item) => (
              <figure key={item.src} className="overflow-hidden rounded-3xl border bg-card p-3 shadow-soft">
                <a href={item.src} target="_blank" rel="noreferrer" aria-label={`Open ${item.label} image`} className="block aspect-[4/3]">
                  <img src={item.src} alt={item.alt} loading="lazy" className="size-full rounded-2xl bg-secondary/30 object-contain" />
                </a>
                <figcaption className="px-2 pb-2 pt-4 text-sm font-bold text-primary">{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      <section className="bg-secondary section-y">
        <div className="container-x">
          <SectionHead eyebrow={resource.eyebrow} title={resource.sectionTitle} />
          <div className="grid gap-6 md:grid-cols-3">
            {resource.cards.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="card-animate card-animate-hover rounded-2xl border bg-card p-7 shadow-soft">
                <Icon className="size-9 text-accent" />
                <h2 className="mt-5 text-xl font-bold text-primary">{title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{text}</p>
                {isVideo && (
                  <button type="button" onClick={() => setActiveVideo(index)} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-primary">
                    <PlayCircle className="size-4" /> Video coming soon
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
      {activeVideo !== null && (
        <div role="dialog" aria-modal="true" aria-label="Video placeholder" className="fixed inset-0 z-[60] grid place-items-center bg-foreground/80 p-6" onClick={() => setActiveVideo(null)}>
          <div className="max-w-md rounded-3xl bg-card p-8 text-center shadow-lift" onClick={(event) => event.stopPropagation()}>
            <PlayCircle className="mx-auto size-14 text-accent" />
            <h2 className="mt-5 text-2xl font-bold text-primary">Video coming soon</h2>
            <p className="mt-3 text-muted-foreground">The {resource.cards[activeVideo].title.toLowerCase()} will be published when the final recording is available.</p>
            <button type="button" onClick={() => setActiveVideo(null)} className="mt-6 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground">Close</button>
          </div>
        </div>
      )}
    </>
  );
}

function ResourceHero({ resource }: { resource: (typeof resources)[ResourceSlug] }) {
  return (
    <section className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-deep sm:min-h-[360px]">
      <img src={images.hero} alt="Green agricultural field at sunrise" className="absolute inset-0 -z-10 size-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-deep/95 via-primary-deep/75 to-primary-deep/30" aria-hidden />
      <div className="container-x py-16 text-primary-foreground sm:py-20">
        <p className="eyebrow !text-gold">Unimax Agri Bio-Technologies</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{resource.title}</h1>
        <p className="mt-5 max-w-2xl text-base text-primary-foreground/75 sm:text-lg">{resource.intro}</p>
      </div>
    </section>
  );
}
