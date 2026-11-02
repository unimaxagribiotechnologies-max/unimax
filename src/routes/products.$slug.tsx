import { Link } from "@/lib/router";
import { ArrowLeft, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useManagedContent } from "@/lib/content-store";
import { company } from "@/lib/site";
export default function Product({ slug }: { slug: string }) {
  const { content } = useManagedContent();
  const p = content.products.find((item) => item.slug === slug);

  if (!p) {
    return <section className="container-x section-y"><h1 className="text-h2 text-primary">Product not found</h1><Link to="/products" className="mt-6 inline-flex text-accent">Back to products</Link></section>;
  }

  return (
    <section className="container-x pt-8 pb-16 md:pt-12 md:pb-20">
      <Link to="/products" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"><ArrowLeft className="size-4" /> All products</Link>
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="overflow-hidden rounded-3xl bg-secondary/20 shadow-lift">
            <img src={p.img} alt={p.name} className="min-h-[300px] w-full object-contain bg-secondary/20 p-3 sm:min-h-[380px] lg:min-h-[500px]" />
          </div>
        </div>
        <div>
          <p className="eyebrow">{p.category}</p>
          <h1 className="text-h2 mt-3 text-primary">{p.name}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{p.summary}</p>
          {p.range && (
            <div className="mt-8 rounded-2xl border bg-card p-5 shadow-soft">
              <p className="eyebrow">Catalogue product information</p>
              <div className="mt-4 max-h-[560px] space-y-4 overflow-y-auto pr-2">
                {p.range.map((item, index) => {
                  const info = p.catalogInfo?.[index];
                  return (
                    <article key={item} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <p className="font-bold text-primary">{item}</p>
                      {info?.description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{info.description}</p>}
                      {(info?.dosage || info?.packing) && (
                        <div className="mt-3 grid gap-2 text-xs leading-relaxed text-muted-foreground sm:grid-cols-2">
                          {info.dosage && <p><span className="font-bold text-primary">Dosage:</span> {info.dosage}</p>}
                          {info.packing && <p><span className="font-bold text-primary">Available packing:</span> {info.packing}</p>}
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          )}
          {p.catalog && (
            <a href={p.catalog} download className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl border bg-card px-5 py-3 text-sm font-bold text-primary transition-colors hover:border-accent hover:text-accent">
              <Download className="size-4" /> Download official product catalogue
            </a>
          )}
          <div className="mt-4 flex flex-wrap gap-3">
            <Button asChild variant="brand" size="xl"><Link to="/contact">Enquire Now</Link></Button>
            <Button asChild variant="outline" size="xl" className="rounded-full"><a href={`${company.whatsapp}?text=${encodeURIComponent(`Enquiry about ${p.name}`)}`} target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
          </div>
        </div>
      </div>
      {p.highlights && (
        <section className="mt-16">
          <p className="eyebrow">Why this range</p>
          <h2 className="text-h2 mt-3 text-primary">Designed for practical crop support.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {p.highlights.map((highlight) => <article key={highlight} className="rounded-2xl border bg-card p-6 shadow-soft"><p className="text-sm leading-relaxed text-muted-foreground">{highlight}</p></article>)}
          </div>
        </section>
      )}
      {p.range && (
        <section className="mt-16">
          <p className="eyebrow">Product range</p>
          <h2 className="text-h2 mt-3 text-primary">Products and information from the official catalogue.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.range.map((item, index) => (
              <div key={item} className="overflow-hidden rounded-2xl border bg-card shadow-soft">
                {p.rangeImages?.[index] && <img src={p.rangeImages[index]} alt={`${item} product`} loading="lazy" className="h-56 w-full bg-secondary/20 object-contain p-4 sm:h-64" />}
                <div className="p-5">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-3 font-bold text-primary">{item}</p>
                  {p.catalogInfo?.[index]?.description && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.catalogInfo[index].description}</p>}
                  {(p.catalogInfo?.[index]?.dosage || p.catalogInfo?.[index]?.packing) && (
                    <div className="mt-4 space-y-2 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                      {p.catalogInfo[index].dosage && <p><span className="font-bold text-primary">Dosage:</span> {p.catalogInfo[index].dosage}</p>}
                      {p.catalogInfo[index].packing && <p><span className="font-bold text-primary">Available packing:</span> {p.catalogInfo[index].packing}</p>}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
