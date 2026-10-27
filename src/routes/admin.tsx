import { useEffect, useState, type ChangeEvent } from "react";
import {
  BarChart3,
  BookOpen,
  Image,
  Leaf,
  MessageSquare,
  Plus,
  RotateCcw,
  Save,
  Trash2,
  Users,
} from "lucide-react";

import {
  useEnquiries,
  useManagedContent,
  resetContent,
  updateEnquiry,
  deleteEnquiry,
  type Enquiry,
  type ManagedContent,
} from "@/lib/content-store";
import type { Post, Product, Testimonial } from "@/lib/site";

type Tab = "overview" | "products" | "posts" | "gallery" | "testimonials" | "enquiries";

const tabs: { id: Tab; label: string; icon: typeof BarChart3 }[] = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "products", label: "Products", icon: Leaf },
  { id: "posts", label: "Blog posts", icon: BookOpen },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "testimonials", label: "Testimonials", icon: Users },
  { id: "enquiries", label: "Enquiries", icon: MessageSquare },
];

const inputClass =
  "mt-1.5 w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30";
const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors";

export default function Admin() {
  const [tab, setTab] = useState<Tab>("overview");
  const { content, setContent } = useManagedContent();
  const enquiries = useEnquiries();

  const update = (next: ManagedContent) => setContent(next);

  return (
    <section className="min-h-[70vh] bg-secondary/50">
      <div className="container-x py-10 md:py-14">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Unimax workspace</p>
            <h1 className="text-h2 mt-2 text-primary">Admin dashboard</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Manage the content shown on the website and keep track of incoming enquiries.
            </p>
          </div>
          <button
            className={`${buttonClass} border bg-card text-foreground hover:border-accent`}
            onClick={() => {
              if (
                window.confirm(
                  "Reset products, posts, gallery and testimonials to the supplied sample content?",
                )
              )
                resetContent();
            }}
          >
            <RotateCcw className="size-4" /> Reset samples
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <aside className="card-animate h-fit rounded-2xl border bg-card p-2 shadow-soft">
            <nav className="grid gap-1" aria-label="Admin sections">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors ${tab === id ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-primary"}`}
                >
                  <Icon className="size-4" />
                  {label}
                  {id === "enquiries" && enquiries.length > 0 && (
                    <span className="ml-auto rounded-full bg-gold px-2 py-0.5 text-xs text-gold-foreground">
                      {enquiries.length}
                    </span>
                  )}
                </button>
              ))}
            </nav>
            <p className="mt-5 border-t p-3 text-xs leading-relaxed text-muted-foreground">
              This local admin workspace stores changes in this browser. Connect a cloud database
              before using it as a multi-user production dashboard.
            </p>
          </aside>

          <div className="min-w-0">
            {tab === "overview" && (
              <Overview content={content} enquiries={enquiries} onNavigate={setTab} />
            )}
            {tab === "products" && (
              <CollectionEditor
                title="Products"
                description="Update product names, categories, images and summaries."
                items={content.products}
                kind="products"
                onChange={(products) => update({ ...content, products: products as Product[] })}
              />
            )}
            {tab === "posts" && (
              <CollectionEditor
                title="Blog posts"
                description="Manage the article cards shown on the blog and home page."
                items={content.posts}
                kind="posts"
                onChange={(posts) => update({ ...content, posts: posts as Post[] })}
              />
            )}
            {tab === "gallery" && (
              <GalleryEditor
                gallery={content.gallery}
                onChange={(gallery) => update({ ...content, gallery })}
              />
            )}
            {tab === "testimonials" && (
              <CollectionEditor
                title="Testimonials"
                description="Publish only verified customer feedback."
                items={content.testimonials}
                kind="testimonials"
                onChange={(testimonials) =>
                  update({ ...content, testimonials: testimonials as Testimonial[] })
                }
              />
            )}
            {tab === "enquiries" && <EnquiriesPanel enquiries={enquiries} />}
          </div>
        </div>
      </div>
    </section>
  );
}

function Overview({
  content,
  enquiries,
  onNavigate,
}: {
  content: ManagedContent;
  enquiries: Enquiry[];
  onNavigate: (tab: Tab) => void;
}) {
  const cards = [
    { label: "Products", value: content.products.length, icon: Leaf, tab: "products" as Tab },
    { label: "Blog posts", value: content.posts.length, icon: BookOpen, tab: "posts" as Tab },
    { label: "Gallery images", value: content.gallery.length, icon: Image, tab: "gallery" as Tab },
    {
      label: "New enquiries",
      value: enquiries.filter((item) => item.status === "New").length,
      icon: MessageSquare,
      tab: "enquiries" as Tab,
    },
  ];
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ label, value, icon: Icon, tab }) => (
          <button
            key={label}
            onClick={() => onNavigate(tab)}
            className="card-animate card-animate-hover rounded-2xl border bg-card p-5 text-left shadow-soft hover:border-accent"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-secondary text-accent">
              <Icon className="size-5" />
            </span>
            <p className="mt-5 text-sm text-muted-foreground">{label}</p>
            <p className="mt-1 text-3xl font-bold text-primary">{value}</p>
          </button>
        ))}
      </div>
      <div className="card-animate rounded-2xl border bg-card p-6 shadow-soft">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Inbox</p>
            <h2 className="mt-2 text-2xl font-bold text-primary">Recent enquiries</h2>
          </div>
          <button
            className={`${buttonClass} bg-primary text-primary-foreground hover:bg-primary/90`}
            onClick={() => onNavigate("enquiries")}
          >
            View all
          </button>
        </div>
        <div className="mt-6 grid gap-3">
          {enquiries.slice(0, 3).map((enquiry) => (
            <EnquiryRow key={enquiry.id} enquiry={enquiry} />
          ))}
          {enquiries.length === 0 && (
            <p className="rounded-xl bg-secondary p-4 text-sm text-muted-foreground">
              No enquiries yet. Submissions from the contact form will appear here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

type CollectionKind = "products" | "posts" | "testimonials";

function CollectionEditor({
  title,
  description,
  items,
  kind,
  onChange,
}: {
  title: string;
  description: string;
  items: Product[] | Post[] | Testimonial[];
  kind: CollectionKind;
  onChange: (items: Product[] | Post[] | Testimonial[]) => void;
}) {
  const [selected, setSelected] = useState(0);
  const current = items[selected];
  useEffect(() => {
    if (selected >= items.length) setSelected(Math.max(0, items.length - 1));
  }, [items.length, selected]);

  const add = () => {
    const item =
      kind === "products"
        ? {
            slug: `new-product-${Date.now()}`,
            name: "New product",
            category: "Uncategorised",
            img: "",
            summary: "Add product details here.",
          }
        : kind === "posts"
          ? {
              slug: `new-post-${Date.now()}`,
              title: "New blog post",
              date: "Draft",
              img: "",
              excerpt: "Add a short article summary here.",
            }
          : {
              name: "New testimonial",
              role: "Customer",
              quote: "Add verified customer feedback here.",
            };
    onChange([...items, item] as Product[] | Post[] | Testimonial[]);
    setSelected(items.length);
  };

  const remove = () => {
    if (!current || !window.confirm(`Delete ${"name" in current ? current.name : current.title}?`))
      return;
    onChange(items.filter((_, index) => index !== selected));
    setSelected(Math.max(0, selected - 1));
  };

  const update = (changes: Partial<Product> | Partial<Post> | Partial<Testimonial>) =>
    onChange(
      items.map((item, index) => (index === selected ? { ...item, ...changes } : item)) as
        Product[] | Post[] | Testimonial[],
    );

  return (
    <div className="grid gap-6 xl:grid-cols-[260px_1fr]">
      <div className="card-animate rounded-2xl border bg-card p-3 shadow-soft">
        <div className="flex items-center justify-between px-2 pb-3">
          <p className="text-sm font-bold text-primary">{items.length} items</p>
          <button
            onClick={add}
            className="grid size-8 place-items-center rounded-lg bg-secondary text-accent hover:bg-accent hover:text-accent-foreground"
            aria-label={`Add ${title}`}
          >
            <Plus className="size-4" />
          </button>
        </div>
        <div className="grid gap-1">
          {items.map((item, index) => (
            <button
              key={"slug" in item ? item.slug : `${item.name}-${index}`}
              onClick={() => setSelected(index)}
              className={`rounded-xl px-3 py-2.5 text-left text-sm ${selected === index ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
            >
              <span className="block truncate font-semibold">
                {"name" in item ? item.name : item.title}
              </span>
              <span
                className={`block truncate text-xs ${selected === index ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {"category" in item ? item.category : "role" in item ? item.role : item.date}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="card-animate rounded-2xl border bg-card p-6 shadow-soft">
        {current ? (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{title}</p>
                <h2 className="mt-2 text-2xl font-bold text-primary">Edit item</h2>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </div>
              <button
                onClick={remove}
                className="grid size-10 place-items-center rounded-xl border text-destructive hover:bg-destructive/10"
                aria-label="Delete item"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
            <div className="mt-7">
              {kind === "products" && <ProductForm item={current as Product} onChange={update} />}
              {kind === "posts" && <PostForm item={current as Post} onChange={update} />}
              {kind === "testimonials" && (
                <TestimonialForm item={current as Testimonial} onChange={update} />
              )}
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Save className="size-3.5" /> Changes save automatically in this browser.
            </p>
          </>
        ) : (
          <p className="text-sm text-muted-foreground">
            No items yet. Use the plus button to add one.
          </p>
        )}
      </div>
    </div>
  );
}

function ProductForm({
  item,
  onChange,
}: {
  item: Product;
  onChange: (changes: Partial<Product>) => void;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <TextField
        label="Product name"
        value={item.name}
        onChange={(value) => onChange({ name: value })}
      />
      <TextField
        label="Category"
        value={item.category}
        onChange={(value) => onChange({ category: value })}
      />
      <TextField
        label="Image URL"
        value={item.img}
        onChange={(value) => onChange({ img: value })}
        className="sm:col-span-2"
      />
      <TextAreaField
        label="Summary"
        value={item.summary}
        onChange={(value) => onChange({ summary: value })}
      />
    </div>
  );
}

function PostForm({ item, onChange }: { item: Post; onChange: (changes: Partial<Post>) => void }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <TextField
        label="Title"
        value={item.title}
        onChange={(value) => onChange({ title: value })}
        className="sm:col-span-2"
      />
      <TextField
        label="Publish label"
        value={item.date}
        onChange={(value) => onChange({ date: value })}
      />
      <TextField
        label="Image URL"
        value={item.img}
        onChange={(value) => onChange({ img: value })}
      />
      <TextAreaField
        label="Excerpt"
        value={item.excerpt}
        onChange={(value) => onChange({ excerpt: value })}
      />
    </div>
  );
}

function TestimonialForm({
  item,
  onChange,
}: {
  item: Testimonial;
  onChange: (changes: Partial<Testimonial>) => void;
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <TextField label="Name" value={item.name} onChange={(value) => onChange({ name: value })} />
      <TextField label="Role" value={item.role} onChange={(value) => onChange({ role: value })} />
      <TextAreaField
        label="Quote"
        value={item.quote}
        onChange={(value) => onChange({ quote: value })}
      />
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <label className={`text-sm font-semibold ${className}`}>
      {label}
      <input
        className={inputClass}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="text-sm font-semibold sm:col-span-2">
      {label}
      <textarea
        rows={5}
        className={inputClass}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function GalleryEditor({
  gallery,
  onChange,
}: {
  gallery: string[];
  onChange: (gallery: string[]) => void;
}) {
  const [url, setUrl] = useState("");
  return (
    <div className="card-animate rounded-2xl border bg-card p-6 shadow-soft">
      <p className="eyebrow">Gallery</p>
      <h2 className="mt-2 text-2xl font-bold text-primary">Manage gallery images</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Use hosted image URLs or paths from your public assets folder.
      </p>
      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <input
          className={`${inputClass} mt-0`}
          placeholder="https://example.com/farm-photo.jpg"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <button
          className={`${buttonClass} shrink-0 bg-primary text-primary-foreground hover:bg-primary/90`}
          onClick={() => {
            if (!url.trim()) return;
            onChange([...gallery, url.trim()]);
            setUrl("");
          }}
        >
          <Plus className="size-4" /> Add image
        </button>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="group relative overflow-hidden rounded-2xl border bg-secondary"
          >
            <img
              src={src}
              alt={`Gallery item ${index + 1}`}
              className="aspect-[4/3] w-full object-cover"
            />
            <button
              onClick={() => onChange(gallery.filter((_, itemIndex) => itemIndex !== index))}
              className="absolute right-3 top-3 grid size-9 place-items-center rounded-xl bg-foreground/80 text-background opacity-0 transition-opacity group-hover:opacity-100"
              aria-label="Remove image"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function EnquiriesPanel({ enquiries }: { enquiries: Enquiry[] }) {
  return (
    <div className="card-animate rounded-2xl border bg-card p-6 shadow-soft">
      <p className="eyebrow">Inbox</p>
      <h2 className="mt-2 text-2xl font-bold text-primary">Saved enquiries</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Every valid contact form submission is saved here before WhatsApp opens.
      </p>
      <div className="mt-7 grid gap-4">
        {enquiries.map((enquiry) => (
          <EnquiryCard key={enquiry.id} enquiry={enquiry} />
        ))}
        {enquiries.length === 0 && (
          <p className="rounded-xl bg-secondary p-5 text-sm text-muted-foreground">
            No saved enquiries yet.
          </p>
        )}
      </div>
    </div>
  );
}

function EnquiryCard({ enquiry }: { enquiry: Enquiry }) {
  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(
    new Date(enquiry.createdAt),
  );
  return (
    <article className="rounded-2xl border p-5">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-primary">
              {enquiry.type}
            </span>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          <h3 className="mt-3 text-lg font-bold text-primary">{enquiry.subject}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {enquiry.name} · {enquiry.mobile} · {enquiry.email}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select
            className="rounded-xl border bg-background px-3 py-2 text-sm"
            value={enquiry.status}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              updateEnquiry(enquiry.id, { status: event.target.value as Enquiry["status"] })
            }
          >
            <option>New</option>
            <option>Contacted</option>
            <option>Resolved</option>
          </select>
          <button
            className="grid size-9 place-items-center rounded-xl border text-destructive hover:bg-destructive/10"
            onClick={() => {
              if (window.confirm("Delete this enquiry?")) deleteEnquiry(enquiry.id);
            }}
            aria-label="Delete enquiry"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>
      <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-foreground/80">
        {enquiry.message}
      </p>
    </article>
  );
}

function EnquiryRow({ enquiry }: { enquiry: Enquiry }) {
  return (
    <div className="flex flex-col justify-between gap-1 rounded-xl bg-secondary/60 px-4 py-3 sm:flex-row sm:items-center">
      <div>
        <p className="font-semibold text-primary">{enquiry.subject}</p>
        <p className="text-xs text-muted-foreground">
          {enquiry.name} · {enquiry.type}
        </p>
      </div>
      <span className="text-xs text-muted-foreground">
        {new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(
          new Date(enquiry.createdAt),
        )}
      </span>
    </div>
  );
}
