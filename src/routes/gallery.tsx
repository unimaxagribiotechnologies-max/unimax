import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { gallery, images } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => seo("Gallery", "Photos from the fields, farms and work of Unimax Agri Bio-Technologies."),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments from the field." text="Representative images — company photos will replace these." img={images.hero} />
      <section className="container-x section-y columns-1 gap-4 sm:columns-2 lg:columns-3">
        {gallery.map((g, i) => (
          <button key={i} onClick={() => setOpen(g)} className="mb-4 block w-full overflow-hidden rounded-2xl">
            <img src={g} alt="Gallery image" loading="lazy" className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
          </button>
        ))}
      </section>
      {open && (
        <div role="dialog" aria-modal className="fixed inset-0 z-[60] grid place-items-center bg-foreground/90 p-6" onClick={() => setOpen(null)}>
          <button className="absolute right-6 top-6 text-background" aria-label="Close"><X className="size-8" /></button>
          <img src={open} alt="" className="max-h-[85vh] rounded-2xl" />
        </div>
      )}
    </>
  );
}
