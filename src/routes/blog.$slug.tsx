import { Link } from "@/lib/router";
import { ArrowLeft } from "lucide-react";
import { useManagedContent } from "@/lib/content-store";
export default function BlogPost({ slug }: { slug: string }) {
  const { content } = useManagedContent();
  const post = content.posts.find((item) => item.slug === slug);

  if (!post) {
    return <section className="container-x section-y"><h1 className="text-h2 text-primary">Article not found</h1><Link to="/blog" className="mt-6 inline-flex text-accent">Back to blog</Link></section>;
  }

  return (
    <article className="container-x section-y max-w-3xl">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent"><ArrowLeft className="size-4" /> All articles</Link>
      <p className="eyebrow mt-8">{post.date}</p>
      <h1 className="text-h2 mt-3 text-primary">{post.title}</h1>
      <img src={post.img} alt={`${post.title} - Unimax agriculture insight`} className="mt-8 aspect-[16/9] w-full rounded-3xl object-cover" />
      <p className="mt-8 text-lg text-muted-foreground">{post.excerpt}</p>
      <p className="mt-4 text-muted-foreground">Full article content will be published here once written and approved.</p>
    </article>
  );
}
