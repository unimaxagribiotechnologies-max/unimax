import { Link } from "@/lib/router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CtaBanner, PageHero } from "@/components/site/Layout";
import { useManagedContent } from "@/lib/content-store";
import { breadcrumbImages } from "@/lib/site";
export default function Products() {
  const [cat, setCat] = useState("All");
  const { content } = useManagedContent();
  const productCategories = [...new Set(content.products.map((product) => product.category))];
  const list = cat === "All" ? content.products : content.products.filter((p) => p.category === cat);
  return (
    <>
      <PageHero eyebrow="Products" title="Solutions for modern agriculture." text="Explore the Unimax product range across bio-fertilizers, micronutrients, water-soluble fertilizers, plant growth regulators, organic fertilizers and bio-stimulants." img={breadcrumbImages.products} />
      <section className="container-x section-y">
        <div className="mb-10 flex flex-wrap gap-2">
          {["All", ...productCategories].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${cat === c ? "border-primary bg-primary text-primary-foreground" : "bg-card hover:border-accent"}`}>{c}</button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Link key={p.slug} to={`/products/${p.slug}`} className="card-animate card-animate-hover group overflow-hidden rounded-2xl border bg-card hover:border-accent">
              <div className="overflow-hidden bg-secondary/20"><img src={p.img} alt={`${p.name} product`} loading="lazy" className="aspect-[3/4] w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105" /></div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.category}</p>
                <h3 className="mt-2 text-xl font-bold text-primary">{p.name}</h3>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">View products and details <ArrowRight className="size-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
