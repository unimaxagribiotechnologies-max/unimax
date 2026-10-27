import { Link } from "@/lib/router";
import { PageHero } from "@/components/site/Layout";
import { useManagedContent } from "@/lib/content-store";
import { breadcrumbImages } from "@/lib/site";
export default function Blog() {
  const { content } = useManagedContent();

  return (
    <>
      <PageHero eyebrow="Blog" title="Insights for modern farming." img={breadcrumbImages.blog} />
      <section className="container-x section-y grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {content.posts.map((p) => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="card-animate card-animate-hover group overflow-hidden rounded-2xl border bg-card hover:shadow-lift">
            <img src={p.img} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover" />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.date}</p>
              <h2 className="mt-2 text-xl font-bold text-primary group-hover:underline">{p.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
