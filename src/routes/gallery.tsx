import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { useManagedContent } from "@/lib/content-store";
import { breadcrumbImages, images } from "@/lib/site";
export default function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  const { content } = useManagedContent();
  const galleryItems = content.gallery.length < 5 ? [...content.gallery, images.farmer] : content.gallery;
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments from the field." text="A visual glimpse into Unimax Agri Bio-Technologies and our work in agriculture." img={breadcrumbImages.gallery} />
      <section className="container-x section-y grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((g, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setOpen(g)}
            aria-label={`Open Unimax Agri gallery image ${i + 1}`}
            className="card-animate card-animate-hover group block aspect-[4/3] w-full overflow-hidden rounded-2xl"
          >
            <img src={g} alt={`Unimax Agri gallery image ${i + 1}`} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
