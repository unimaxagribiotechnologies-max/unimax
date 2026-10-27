import { Link } from "@/lib/router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Placeholder } from "@/components/site/Layout";
import { useManagedContent } from "@/lib/content-store";
import { company } from "@/lib/site";
export default function Product({ slug }: { slug: string }) {
  const { content } = useManagedContent();
  const p = content.products.find((item) => item.slug === slug);

  if (!p) {
    return <section className="container-x section-y"><h1 className="text-h2 text-primary">Product not found</h1><Link to="/products" className="mt-6 inline-flex text-accent">Back to products</Link></section>;
  }

  return (
    <section className="container-x section-y">
      <Link to="/products" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"><ArrowLeft className="size-4" /> All products</Link>
      <div className="grid gap-12 lg:grid-cols-2">
        <img src={p.img} alt={p.name} className="aspect-square w-full rounded-3xl object-cover shadow-lift" />
        <div>
          <p className="eyebrow">{p.category}</p>
          <h1 className="text-h2 mt-3 text-primary">{p.name}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{p.summary}</p>
          <dl className="mt-8 divide-y rounded-2xl border bg-card">
            {["Composition", "Recommended crops", "Dosage", "Pack sizes"].map((k) => (
              <div key={k} className="flex justify-between gap-4 p-4 text-sm"><dt className="font-semibold text-primary">{k}</dt><dd><Placeholder>To be supplied</Placeholder></dd></div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="brand" size="xl"><Link to="/contact">Enquire Now</Link></Button>
            <Button asChild variant="outline" size="xl" className="rounded-full"><a href={`${company.whatsapp}?text=${encodeURIComponent(`Enquiry about ${p.name}`)}`} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
