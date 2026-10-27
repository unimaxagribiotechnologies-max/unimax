import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => loaderData ? seo(loaderData.post.title, loaderData.post.excerpt) : { meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }] },
  component: Post,
});

function Post() {
  const { post } = Route.useLoaderData();
  return (
    <article className="container-x section-y max-w-3xl">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent"><ArrowLeft className="size-4" /> All articles</Link>
      <p className="eyebrow mt-8">{post.date}</p>
      <h1 className="text-h2 mt-3 text-primary">{post.title}</h1>
      <img src={post.img} alt="" className="mt-8 aspect-[16/9] w-full rounded-3xl object-cover" />
      <p className="mt-8 text-lg text-muted-foreground">{post.excerpt}</p>
      <p className="mt-4 text-muted-foreground">Full article content will be published here once written and approved.</p>
    </article>
  );
}
