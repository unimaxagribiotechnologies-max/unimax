import { useEffect } from "react";

import { Footer, FloatingContact, Header } from "@/components/site/Layout";
import { normalizePath, useLocation } from "@/lib/router";
import About from "@/routes/about";
import Admin from "@/routes/admin";
import Blog from "@/routes/blog.index";
import BlogPost from "@/routes/blog.$slug";
import Contact from "@/routes/contact";
import Gallery from "@/routes/gallery";
import Home from "@/routes/index";
import Product from "@/routes/products.$slug";
import Products from "@/routes/products.index";
import Solutions from "@/routes/solutions";
import Testimonials from "@/routes/testimonials";
import ResourcePage, { resourceSlugs, type ResourceSlug } from "@/routes/company-resources";

const titles: Record<string, string> = {
  "/": "Agricultural Biotechnology Solutions",
  "/about": "About Us",
  "/products": "Products",
  "/solutions": "Solutions & Services",
  "/gallery": "Gallery",
  "/blog": "Blog",
  "/testimonials": "Testimonials",
  "/contact": "Contact Us",
  "/awards": "Awards",
  "/certification": "Certification",
  "/csr": "CSR",
  "/laboratory": "Laboratory",
  "/video": "Video",
  "/news-events": "News / Events",
  "/admin": "Admin Dashboard",
};

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

function Page() {
  const path = useLocation();
  const cleanPath = normalizePath(path);

  useEffect(() => {
    const base = cleanPath.startsWith("/products/")
      ? "Product"
      : cleanPath.startsWith("/blog/")
        ? "Article"
        : (titles[cleanPath] ?? "Unimax Agri Bio-Technologies");
    document.title = `${base} | Unimax Agri Bio-Technologies`;
  }, [cleanPath]);

  if (cleanPath === "/") return <Home />;
  if (cleanPath === "/about") return <About />;
  if (cleanPath === "/products") return <Products />;
  if (cleanPath.startsWith("/products/"))
    return <Product slug={decodeURIComponent(cleanPath.slice("/products/".length))} />;
  if (cleanPath === "/solutions") return <Solutions />;
  if (cleanPath === "/gallery") return <Gallery />;
  if (cleanPath === "/blog") return <Blog />;
  if (cleanPath.startsWith("/blog/"))
    return <BlogPost slug={decodeURIComponent(cleanPath.slice("/blog/".length))} />;
  if (cleanPath === "/testimonials") return <Testimonials />;
  if (cleanPath === "/contact") return <Contact />;
  const resourceSlug = cleanPath.slice(1) as ResourceSlug;
  if (resourceSlugs.includes(resourceSlug)) return <ResourcePage slug={resourceSlug} />;
  if (cleanPath === "/admin") return <Admin />;
  return <NotFound />;
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Page />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
