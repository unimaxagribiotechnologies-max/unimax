import { company, companyImages, heroBackground, posts, products } from "@/lib/site";

const siteDescription =
  "Unimax Agri Bio-Technologies (I) PVT LTD manufactures bio-fertilizers, bio-stimulants, micronutrients, water-soluble fertilizers and organic agricultural inputs for Indian farms.";

type PageSeo = {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  noindex?: boolean;
};

const routeSeo: Record<string, PageSeo> = {
  "/": {
    title: "Agri-Biotech Solutions for Indian Farms",
    description: siteDescription,
    image: heroBackground,
    keywords: "agricultural biotechnology, bio-fertilizers, micronutrients, bio-stimulants, Maharashtra",
  },
  "/about": {
    title: "About Unimax Agri Bio-Technologies (I) PVT LTD",
    description: "Learn about Unimax Agri Bio-Technologies (I) PVT LTD, our manufacturing facility, R&D capabilities and farmer-focused approach from Maharashtra, India.",
    image: companyImages.about,
    keywords: "Unimax Agri Bio-Technologies (I) PVT LTD, agri input manufacturer Maharashtra, agricultural R&D",
  },
  "/products": {
    title: "Bio-Fertilizers, Micronutrients & Agri Inputs",
    description: "Explore Unimax agricultural products including bio-fertilizers, micronutrients, water-soluble fertilizers, plant growth regulators, organic fertilizers and bio-stimulants.",
    image: "/assets/breadcrubs/products.jpeg",
    keywords: "bio-fertilizers, micronutrient fertilizers, water-soluble fertilizers, organic fertilizers, crop solutions",
  },
  "/solutions": {
    title: "Agricultural Solutions & Farmer Support",
    description: "Discover practical agricultural product information, crop nutrition guidance and support for farmers, dealers and distributors from Unimax.",
    image: "/assets/breadcrubs/solutions.jpeg",
    keywords: "crop nutrition guidance, farmer support, agricultural solutions, agri input dealer",
  },
  "/gallery": {
    title: "Agricultural Gallery",
    description: "View field, laboratory, product and agricultural outreach moments from Unimax Agri Bio-Technologies (I) PVT LTD.",
    image: "/assets/breadcrubs/gallery.jpeg",
  },
  "/blog": {
    title: "Agriculture & Farming Insights",
    description: "Read agriculture, soil health and agri-biotechnology insights from Unimax Agri Bio-Technologies (I) PVT LTD.",
    image: "/assets/breadcrubs/blog.jpeg",
    keywords: "agriculture blog, soil health, modern farming, agri-biotechnology",
  },
  "/testimonials": {
    title: "Farmer & Partner Testimonials",
    description: "Read verified feedback and field experiences from farmers, dealers and agricultural partners working with Unimax.",
    image: "/assets/breadcrubs/testimonials.jpeg",
  },
  "/contact": {
    title: "Contact Unimax Agri Bio-Technologies (I) PVT LTD",
    description: "Contact Unimax Agri Bio-Technologies (I) PVT LTD at Diksal, Karjat, Ahmednagar, Maharashtra for product, farmer, dealer and distributor enquiries.",
    image: "/assets/breadcrubs/contact%20us.jpeg",
    keywords: "contact agricultural company Maharashtra, Unimax enquiry, agri product enquiry",
  },
  "/awards": {
    title: "Awards & Recognition",
    description: "Learn about Unimax Agri Bio-Technologies (I) PVT LTD's recognition for innovation and contribution to agriculture.",
  },
  "/certification": {
    title: "Quality Certifications",
    description: "Review Unimax Agri Bio-Technologies (I) PVT LTD's quality management and agricultural registrations.",
  },
  "/csr": {
    title: "Corporate Social Responsibility",
    description: "Explore Unimax initiatives and values supporting responsible, sustainable agricultural growth.",
  },
  "/laboratory": {
    title: "Agricultural R&D Laboratory",
    description: "See how Unimax develops and validates agricultural formulations through research, testing and field-focused quality systems.",
  },
  "/video": {
    title: "Unimax Agricultural Videos",
    description: "Watch company, product and agricultural videos from Unimax Agri Bio-Technologies (I) PVT LTD.",
  },
  "/news-events": {
    title: "Agricultural News & Events",
    description: "See Unimax agricultural exhibitions, farmer outreach and company event updates.",
  },
};

function absoluteUrl(path: string, origin: string) {
  return path.startsWith("http") ? path : `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

function upsertMeta(attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${value}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[data-seo="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    element.dataset.seo = "canonical";
    document.head.appendChild(element);
  }
  element.href = url;
}

function setStructuredData(data: unknown) {
  let element = document.head.querySelector<HTMLScriptElement>('script[data-seo="structured-data"]');
  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.dataset.seo = "structured-data";
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

function getPageSeo(path: string): PageSeo {
  if (path.startsWith("/products/")) {
    const product = products.find((item) => item.slug === decodeURIComponent(path.slice("/products/".length)));
    return product
      ? {
          title: `${product.name} | Agricultural Product Range`,
          description: product.summary,
          image: product.img,
          keywords: `${product.name}, ${product.category}, Unimax agricultural products`,
        }
      : { title: "Product Not Found", description: "The requested Unimax product could not be found.", noindex: true };
  }

  if (path.startsWith("/blog/")) {
    const post = posts.find((item) => item.slug === decodeURIComponent(path.slice("/blog/".length)));
    return post
      ? { title: post.title, description: post.excerpt, image: post.img, type: "article", keywords: "agriculture, farming, agri-biotechnology" }
      : { title: "Article Not Found", description: "The requested Unimax article could not be found.", noindex: true };
  }

  return routeSeo[path] ?? { title: "Page Not Found", description: "The requested Unimax page could not be found.", noindex: true };
}

export function applySeo(path: string) {
  if (typeof window === "undefined") return;

  const origin = window.location.origin;
  const url = `${origin}${path === "/" ? "/" : path}`;
  const page = getPageSeo(path);
  const title = `${page.title} | Unimax Agri Bio-Technologies (I) PVT LTD`;
  const pageImage = absoluteUrl(page.image ?? heroBackground, origin);
  const socialImage = absoluteUrl(companyImages.logo, origin);

  document.title = title;
  upsertMeta("name", "description", page.description);
  upsertMeta("name", "robots", page.noindex ? "noindex, nofollow" : "index, follow");
  upsertMeta("name", "author", company.name);
  upsertMeta("name", "theme-color", "#164d36");
  if (page.keywords) upsertMeta("name", "keywords", page.keywords);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", page.description);
  upsertMeta("property", "og:type", page.type ?? "website");
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:site_name", "Unimax Agri Bio-Technologies (I) PVT LTD");
  upsertMeta("property", "og:image", socialImage);
  upsertMeta("property", "og:image:alt", "Unimax Agri Bio-Technologies logo");
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", page.description);
  upsertMeta("name", "twitter:image", socialImage);
  upsertMeta("name", "twitter:image:alt", "Unimax Agri Bio-Technologies logo");
  setCanonical(url);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": `${origin}/#organization`,
      name: company.name,
      alternateName: company.short,
      url: origin,
      logo: absoluteUrl(companyImages.logo, origin),
      description: siteDescription,
      email: company.email,
      telephone: company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address,
        addressLocality: "Karjat",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
  ];

  if (path === "/") {
    graph.push({ "@type": "WebSite", "@id": `${origin}/#website`, name: company.short, url: origin, publisher: { "@id": `${origin}/#organization` } });
  } else {
    const label = path.startsWith("/products/")
      ? getPageSeo(path).title.split(" | ")[0]
      : path.startsWith("/blog/")
        ? getPageSeo(path).title
        : page.title;
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: origin },
        { "@type": "ListItem", position: 2, name: label, item: url },
      ],
    });
  }

  if (path.startsWith("/products/") && !page.noindex) {
    graph.push({ "@type": "Product", name: page.title.split(" | ")[0], description: page.description, image: pageImage, brand: { "@type": "Brand", name: company.short }, category: "Agricultural inputs" });
  }

  if (path.startsWith("/blog/") && !page.noindex) {
    graph.push({ "@type": "Article", headline: page.title, description: page.description, image: pageImage, author: { "@id": `${origin}/#organization` }, publisher: { "@id": `${origin}/#organization` }, mainEntityOfPage: url });
  }

  setStructuredData({ "@context": "https://schema.org", "@graph": graph });
}
