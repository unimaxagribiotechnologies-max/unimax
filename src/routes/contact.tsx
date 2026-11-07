import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/Layout";
import { saveEnquiry } from "@/lib/content-store";
import { breadcrumbImages, company } from "@/lib/site";
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  mobile: z.string().trim().regex(/^[+\d\s-]{10,15}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  type: z.enum(["General Enquiry", "Product Enquiry", "Dealer / Distributor Enquiry", "Other"]),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(5, "Please write a message").max(2000),
});
type Form = z.infer<typeof schema>;

const field = "w-full rounded-xl border bg-card px-4 py-3 outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Form>({ resolver: zodResolver(schema), defaultValues: { type: "General Enquiry" } });
  const onSubmit = (d: Form) => {
    saveEnquiry(d);
    const text = `${d.type}\nName: ${d.name}\nMobile: ${d.mobile}\nEmail: ${d.email}\nSubject: ${d.subject}\n\n${d.message}`;
    window.open(`${company.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };
  const err = (k: keyof Form) => errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]?.message}</p>;
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's talk agriculture." img={breadcrumbImages.contact} />
      <section className="container-x section-y grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {[
            { i: User, l: "Contact Person", v: company.contact },
            { i: Phone, l: "Phone", v: company.phone, h: company.phoneHref },
            { i: Mail, l: "Email", v: company.email, h: `mailto:${company.email}` },
            { i: MapPin, l: "Location", v: company.location },
          ].map(({ i: I, l, v, h }) => (
            <div key={l} className="card-animate card-animate-hover flex gap-4 rounded-2xl border bg-card p-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary"><I className="size-5 text-accent" /></span>
              <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{l}</p>
                {h ? <a href={h} className="break-all font-semibold text-primary hover:underline">{v}</a> : <p className="font-semibold text-primary">{v}</p>}</div>
            </div>
          ))}
          <div className="overflow-hidden rounded-2xl border bg-card">
            <iframe title="Map of Unimax Agri Bio-Technologies" className="h-64 w-full border-0" loading="lazy" src={company.mapEmbedUrl} />
            <a href={company.mapUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary hover:text-accent">
              <span>Open Unimax location in Google Maps</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-animate rounded-3xl border bg-card p-5 shadow-soft sm:p-8 md:p-10" noValidate>
          <h2 className="text-2xl font-bold text-primary">Send an enquiry</h2>
          {sent && <p className="mt-4 rounded-xl bg-secondary p-4 text-sm text-primary">Thank you! Your enquiry has been saved and opened in WhatsApp — press send there to deliver it.</p>}
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">Full Name<input className={`${field} mt-1.5`} {...register("name")} />{err("name")}</label>
            <label className="text-sm font-medium">Mobile Number<input className={`${field} mt-1.5`} inputMode="tel" {...register("mobile")} />{err("mobile")}</label>
            <label className="text-sm font-medium">Email Address<input className={`${field} mt-1.5`} type="email" {...register("email")} />{err("email")}</label>
            <label className="text-sm font-medium">Enquiry Type<select className={`${field} mt-1.5`} {...register("type")}>
              {schema.shape.type.options.map((o) => <option key={o}>{o}</option>)}</select></label>
            <label className="text-sm font-medium sm:col-span-2">Subject<input className={`${field} mt-1.5`} {...register("subject")} />{err("subject")}</label>
            <label className="text-sm font-medium sm:col-span-2">Message<textarea rows={5} className={`${field} mt-1.5`} {...register("message")} />{err("message")}</label>
          </div>
          <Button type="submit" variant="brand" size="xl" className="mt-6">Send Enquiry</Button>
        </form>
      </section>
    </>
  );
}
