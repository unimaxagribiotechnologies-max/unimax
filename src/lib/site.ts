import hero from "@/assets/hero.jpg";
import lab from "@/assets/lab.jpg";
import farmer from "@/assets/farmer.jpg";
import soil from "@/assets/soil.jpg";

export const images = { hero, lab, farmer, soil };

export const heroBackground = "/assets/54c2bb1f-37f0-4b01-af30-3a0ee8e95d13.png";

export const companyImages = {
  logo: "/assets/logo-transparent.png",
  values: "/assets/company-values.jpeg",
  profile: "/assets/company-profile.jpeg",
  brand: "/assets/unimax-brand.jpeg",
};

export const breadcrumbImages = {
  about: "/assets/breadcrubs/about.png",
  blog: "/assets/breadcrubs/blog.png",
  contact: "/assets/breadcrubs/contact%20us.png",
  gallery: "/assets/breadcrubs/gallery.png",
  products: "/assets/breadcrubs/products.png",
  solutions: "/assets/breadcrubs/solutions.png",
  testimonials: "/assets/breadcrubs/testimonials.png",
};

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

export const resourceNav = [
  { to: "/awards", label: "Awards" },
  { to: "/certification", label: "Certification" },
  { to: "/csr", label: "CSR" },
  { to: "/laboratory", label: "Laboratory" },
  { to: "/video", label: "Video" },
  { to: "/news-events", label: "News / Events" },
] as const;

// Illustrative categories only — not confirmed Unimax offerings. Replace with approved content.
export type Product = {
  slug: string;
  name: string;
  category: string;
  img: string;
  summary: string;
  catalog?: string;
  range?: string[];
  highlights?: string[];
};

export const categories = [
  {
    slug: "bio-fertilizers",
    title: "Bio-Fertilizers",
    desc: "Microbial and biological solutions for nutrient availability, root development, soil health and crop growth.",
    img: soil,
    catalog: "/assets/catalogs/bio-fertilizers.docx",
    range: ["MAX AZOS (Azospirillum)", "MAXRHIZO (Rhizobium)", "MAXAZO (Azotobacter)", "ULTRA POTASH (KMB)", "ULTRA PHOS (PSB)", "MAXMAZIC (NPK Consortia)", "MAXZINKA (ZSB)", "MAXSULFA (SSB)", "SHUGARSHINE (Acetobacter)", "MAXVAM (Mycorrhiza)", "TRICON (Trichoderma)", "MAX N-P-K (NPK Liquid Consortia)", "PSUMOTO", "MAXPACINO", "RUCO POTASH", "CORAL MYCORRHIZA"],
    highlights: ["Nitrogen, phosphate, potash, zinc and sulphur mobilization", "Root-zone microbial support for stronger crop growth", "Biological alternatives for improved nutrient availability"],
  },
  {
    slug: "micro-nutrients",
    title: "Micro-Nutrients",
    desc: "Water-soluble and suspension micronutrient products for correcting deficiencies and supporting crop quality.",
    img: hero,
    catalog: "/assets/catalogs/micro-nutrients.docx",
    range: ["VERA GOLD COMBI (Powder)", "VERA GOLD DRIP (Powder)", "VERAZIN (Zinc 12%)", "VERABOR (Boron 20%)", "VERAFER (Ferrous 12%)", "VERA GOLD COMBI (Liquid)", "VERACAL", "TONICAL (Liquid Calcium 11%)", "TYSON-B10 (Boron Ethanol Amine 10%)", "TOKOZIN 70", "TYSIL (Orthosilicic Acid)", "VERA GOLD MAGNESIUM SULPHATE", "VERA GOLD SOIL", "VERA GOLD FEROUS SULPHATE", "VERA GOLD ZINC SULPHATE"],
    highlights: ["Support for healthy roots, leaves and plant structure", "Micronutrient correction for stronger, more productive crops", "Products supplied in powder, liquid and suspension formats"],
  },
  {
    slug: "water-soluble-fertilizers",
    title: "Water Soluble Fertilizers",
    desc: "NPK, sulphur and fertigation products designed for efficient nutrient delivery through drip and foliar application.",
    img: lab,
    catalog: "/assets/catalogs/water-soluble-fertilizers.docx",
    range: ["TYSON 00:42:47 + TE", "TYSON 00:48:47 + TE", "TYSULF (Sulphur 90% Powder)", "TYSON N-21", "TYSON 00:60:20 + TE", "TYSON 14:48:00 + TE", "TYSON 00:09:46 + TE", "TYSON 05:55:17 + TE", "TYSON 00:40:37 + TE", "TYSON 10:54:10 + TE", "N:P:K 10:09:16:3:13 + TE", "ANWAKEN (N:P:K 8:8:8 Liquid)"],
    highlights: ["Faster and stronger root growth", "Improved flowering, fruiting and crop quality", "Suitable for fertigation and selected foliar applications"],
  },
  {
    slug: "plant-growth-regulators",
    title: "Plant Growth Regulators",
    desc: "Growth-stage support for stronger plants and improved photosynthesis, crop health and harvest potential.",
    img: farmer,
    catalog: "/assets/catalogs/plant-growth-regulators.docx",
    range: ["LIRA (Gibberellic Acid 0.001% L)"],
    highlights: ["Boosts plant growth and crop development", "Supports photosynthesis and overall plant health", "Helps maintain steady growth over time"],
  },
  {
    slug: "organic-fertilizers",
    title: "Organic Fertilizers",
    desc: "Granular soil-conditioning products that support organic carbon, nutrient availability, root growth and soil fertility.",
    img: soil,
    catalog: "/assets/catalogs/organic-fertilizers.docx",
    range: ["GRIPPER GR", "SOIL POWER"],
    highlights: ["Supports organic carbon and nitrogen balance", "Improves physical, biological and chemical soil properties", "Encourages white-root growth and crop productivity"],
  },
  {
    slug: "bio-stimulants",
    title: "Bio-Stimulants",
    desc: "Herbal extracts, amino acids, seaweed, humic substances and specialty products for crop vigour, quality and stress support.",
    img: lab,
    catalog: "/assets/catalogs/bio-stimulants.docx",
    range: ["UNI K UPTEK", "UNIMAX FISH OIL", "FASTER", "UNI ROOT KING", "UNI-SIL", "UNI-ZYME", "STAR GOLD", "GRIPPER", "B-VITA", "AMINO GOLD", "AM-SIL", "UNI DAMAN", "BIO-9", "SUPER SIZE DRIP", "ROOT CONNECTOR", "BACTRA", "DR.PH", "GRIPPER DF", "ONEPLUS", "MARKUS", "DELMA GOLD", "VERA", "FULVIGROW", "LITO", "POWER PLUS", "JEFHA MAX PRO", "ZULEMA KELP SL", "ONICATOR"],
    highlights: ["Supports nutrient absorption, flowering and fruit development", "Helps improve crop quality, colour, sweetness and shelf life", "Specialty solutions for stress, soil, water and pest-management support"],
  },
];

export const products: Product[] = categories.map((c) => ({
  slug: c.slug,
  name: c.title,
  category: c.title,
  img: c.img,
  summary: c.desc,
  catalog: c.catalog,
  range: c.range,
  highlights: c.highlights,
}));

export const services = [
  { title: "Crop Nutrition Guidance", desc: "Proposed service — guidance on choosing suitable nutrition for your crop stage." },
  { title: "Agricultural Product Information", desc: "Proposed service — clear information on product use and application." },
  { title: "Farmer Support", desc: "Proposed service — direct line for farmers to ask questions and get help." },
  { title: "Dealer & Distributor Enquiries", desc: "Proposed service — partnership enquiries for dealers and distributors." },
];

export type Post = {
  slug: string; title: string; date: string; img: string; excerpt: string;
};

export const posts: Post[] = [
  { slug: "understanding-soil-health", title: "Understanding Soil Health: A Farmer's Primer", date: "Sample article", img: soil, excerpt: "Placeholder article. Healthy soil is the foundation of every productive harvest — this sample shows how blog posts will appear." },
  { slug: "role-of-biotechnology-in-farming", title: "The Role of Biotechnology in Modern Farming", date: "Sample article", img: lab, excerpt: "Placeholder article showing how educational content about agri-biotech will be presented to readers." },
  { slug: "season-planning-tips", title: "Planning Your Crop Season", date: "Sample article", img: hero, excerpt: "Placeholder article. Seasonal planning tips and agricultural updates will be published here." },
];

export type Testimonial = {
  name: string; role: string; quote: string;
};

export const testimonials: Testimonial[] = [
  { name: "Testimonial placeholder", role: "Farmer, Maharashtra", quote: "Real customer feedback will appear here once supplied and approved by Unimax." },
  { name: "Testimonial placeholder", role: "Dealer", quote: "This space is reserved for verified dealer and distributor testimonials." },
  { name: "Testimonial placeholder", role: "Agri business", quote: "Verified reviews only — no invented testimonials are published." },
];

export const galleryImages = Array.from(
  { length: 27 },
  (_, index) => `/assets/gallery/gallery-${String(index + 1).padStart(2, "0")}.jpeg`,
);

export const gallery = galleryImages;
