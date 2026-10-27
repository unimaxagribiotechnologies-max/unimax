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

const resources: Record<ResourceSlug, {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  sectionTitle: string;
  cards: ResourceCard[];
}> = {
  awards: {
    eyebrow: "Awards",
    title: "Recognition for meaningful agricultural work.",
    intro: "A growing record of trust, innovation and field-first thinking will be shared here as Unimax receives recognition.",
    image: companyImages.values,
    imageAlt: "Unimax values and agricultural technology graphic",
    sectionTitle: "What recognition means to us",
    cards: [
      { icon: Trophy, title: "Farmer impact", text: "Recognition should reflect practical value created for farmers and agricultural communities." },
      { icon: Sprout, title: "Innovation in action", text: "We celebrate ideas that help agriculture become more productive, resilient and sustainable." },
      { icon: HeartHandshake, title: "Trust built over time", text: "Every award is a reminder to keep raising the standard of service and support." },
    ],
  },
  certification: {
    eyebrow: "Certification",
    title: "Standards that build confidence.",
    intro: "Our company profile highlights ISO 9001:2015 certification and the registrations that support our work in agricultural inputs.",
    image: companyImages.profile,
    imageAlt: "Unimax Agri company profile and registration details",
    sectionTitle: "Our certification snapshot",
    cards: [
      { icon: BadgeCheck, title: "ISO 9001:2015", text: "The supplied company profile identifies Unimax as an ISO 9001:2015 certified company." },
      { icon: ShieldCheck, title: "Registered operations", text: "Key registration and licence details are presented in the supplied company profile for reference." },
      { icon: Award, title: "Quality-minded processes", text: "Clear processes help us keep product information, service and support consistent." },
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
    title: "Research that stays close to the field.",
    intro: "Our laboratory and product-development story will bring together testing, crop knowledge and the practical needs of Indian agriculture.",
    image: companyImages.brand,
    imageAlt: "Unimax brand graphic with a growing seedling",
    sectionTitle: "From observation to application",
    cards: [
      { icon: Microscope, title: "Research-led thinking", text: "We connect scientific thinking with the realities of crop stages, soil and local conditions." },
      { icon: FlaskConical, title: "Product understanding", text: "Product information, application guidance and field learning belong together." },
      { icon: Building2, title: "Built for agriculture", text: "Our goal is to turn reliable knowledge into support that farmers and dealers can use." },
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
    title: "Updates from Unimax and the field.",
    intro: "Company announcements, event participation, product updates and agricultural conversations will be collected here.",
    image: companyImages.profile,
    imageAlt: "Unimax company profile graphic",
    sectionTitle: "Latest updates",
    cards: [
      { icon: Newspaper, title: "Company updates", text: "Announcements about Unimax, our work and the people we support." },
      { icon: CalendarDays, title: "Events and outreach", text: "Meetings, field programmes and conversations with agricultural communities." },
      { icon: Sprout, title: "Agriculture insights", text: "Useful updates on crop care, soil health and responsible agricultural practice." },
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
          <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-card p-3 shadow-lift">
            <img src={resource.image} alt={resource.imageAlt} loading="lazy" className="max-h-[560px] w-full rounded-2xl object-contain" />
          </div>
        </div>
        <div className="max-w-2xl lg:py-8">
          <p className="eyebrow">{resource.eyebrow}</p>
          <h1 className="text-h2 mt-3 max-w-3xl text-primary">{resource.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{resource.intro}</p>
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
