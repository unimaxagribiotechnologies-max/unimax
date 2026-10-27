import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Layout";
import { images, posts } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () => seo("Blog", "Agricultural news, updates and educational articles from Unimax Agri Bio-Technologies."),
  component: Blog,
});

function Blog() {
  return (
    <>
      <PageHero eyebrow="Blog" title="Insights for modern farming." img={images.soil} />
      <section className="container-x section-y grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lift">
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
