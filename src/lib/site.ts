import hero from "@/assets/hero.jpg";
import lab from "@/assets/lab.jpg";
import farmer from "@/assets/farmer.jpg";
import soil from "@/assets/soil.jpg";

export const images = { hero, lab, farmer, soil };

export const company = {
  name: "Unimax Agri Bio-Technologies Pvt. Ltd.",
  short: "Unimax Agri Bio-Tech",
  contact: "Bhausaheb Ladhane",
  phone: "+91 9561196030",
  phoneHref: "tel:+919561196030",
  whatsapp: "https://wa.me/919561196030",
  email: "unimaxagribiotechnologies@gmail.com",
  location: "Ahmednagar, Maharashtra, India",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/solutions", label: "Solutions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

// Illustrative categories only — not confirmed Unimax offerings. Replace with approved content.
export const categories = [
  { slug: "bio-fertilizers", title: "Bio-Fertilizers", desc: "Placeholder description for biological nutrient solutions.", img: soil },
  { slug: "bio-stimulants", title: "Bio-Stimulants", desc: "Placeholder description for plant vigour and stress support.", img: lab },
  { slug: "micronutrients", title: "Micronutrients", desc: "Placeholder description for essential trace nutrition.", img: hero },
  { slug: "plant-growth-promoters", title: "Plant Growth Promoters", desc: "Placeholder description for growth-stage support.", img: farmer },
  { slug: "crop-nutrition", title: "Crop Nutrition", desc: "Placeholder description for balanced crop feeding.", img: hero },
  { slug: "soil-health", title: "Soil Health Solutions", desc: "Placeholder description for soil conditioning.", img: soil },
];

export type Product = {
  slug: string; name: string; category: string; img: string; summary: string;
};

export const products: Product[] = categories.map((c, i) => ({
  slug: `sample-product-${i + 1}`,
  name: `Sample Product ${i + 1}`,
  category: c.title,
  img: c.img,
  summary: "Product details pending client approval. Composition, dosage, crops and pack sizes will be added here.",
}));

export const services = [
  { title: "Crop Nutrition Guidance", desc: "Proposed service — guidance on choosing suitable nutrition for your crop stage." },
  { title: "Agricultural Product Information", desc: "Proposed service — clear information on product use and application." },
  { title: "Farmer Support", desc: "Proposed service — direct line for farmers to ask questions and get help." },
  { title: "Dealer & Distributor Enquiries", desc: "Proposed service — partnership enquiries for dealers and distributors." },
];

export const posts = [
  { slug: "understanding-soil-health", title: "Understanding Soil Health: A Farmer's Primer", date: "Sample article", img: soil, excerpt: "Placeholder article. Healthy soil is the foundation of every productive harvest — this sample shows how blog posts will appear." },
  { slug: "role-of-biotechnology-in-farming", title: "The Role of Biotechnology in Modern Farming", date: "Sample article", img: lab, excerpt: "Placeholder article showing how educational content about agri-biotech will be presented to readers." },
  { slug: "season-planning-tips", title: "Planning Your Crop Season", date: "Sample article", img: hero, excerpt: "Placeholder article. Seasonal planning tips and agricultural updates will be published here." },
];

export const testimonials = [
  { name: "Testimonial placeholder", role: "Farmer, Maharashtra", quote: "Real customer feedback will appear here once supplied and approved by Unimax." },
  { name: "Testimonial placeholder", role: "Dealer", quote: "This space is reserved for verified dealer and distributor testimonials." },
  { name: "Testimonial placeholder", role: "Agri business", quote: "Verified reviews only — no invented testimonials are published." },
];

export const gallery = [hero, farmer, lab, soil, hero, farmer, soil, lab];
