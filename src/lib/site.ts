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
const productImage = (slug: string, index: number, extension: "png" | "jpeg") =>
  `/assets/products/${slug}-${String(index).padStart(2, "0")}.${extension}`;

const productImageSeries = (slug: string, extensions: ("png" | "jpeg")[]) =>
  extensions.map((extension, index) => productImage(slug, index + 1, extension));

const productImages = {
  bioFertilizers: productImageSeries("bio-fertilizers", [
    "png", "png", "png", "png", "png", "png", "png", "png",
    "png", "png", "png", "png", "png", "png", "jpeg", "jpeg",
  ]),
  microNutrients: productImageSeries("micro-nutrients", [
    "jpeg", "png", "png", "png", "png", "png", "png", "png",
    "png", "png", "png", "jpeg", "jpeg", "jpeg", "jpeg",
  ]),
  waterSoluble: productImageSeries("water-soluble-fertilizers", [
    "png", "png", "png", "png", "png", "jpeg", "png", "png",
    "png", "png", "png", "png",
  ]),
  plantGrowthRegulators: productImageSeries("plant-growth-regulators", ["png"]),
  organicFertilizers: productImageSeries("organic-fertilizers", ["jpeg", "png"]),
  bioStimulants: productImageSeries("bio-stimulants", [
    "png", "jpeg", "png", "jpeg", "jpeg", "png", "png", "png",
    "png", "png", "jpeg", "jpeg", "png", "jpeg", "png", "png",
    "png", "png", "png", "png", "png", "png", "jpeg", "png",
    "png", "png", "png", "jpeg",
  ]),
};

export type CatalogInfo = {
  description?: string;
  dosage?: string;
  packing?: string;
};

const catalogInfo = {
  bioFertilizers: [
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    { packing: "1 L, 5 L" },
    { packing: "1 L, 5 L" },
    { packing: "1 L, 5 L" },
    { packing: "1 L, 5 L" },
    { packing: "100 g" },
    { packing: "4 kg" },
  ],
  microNutrients: [
    { dosage: "Spray 2 g/L; drip 500 g/acre", packing: "100 g, 250 g, 500 g, 1 kg" },
    { dosage: "Drip 2 kg/acre", packing: "2 kg" },
    { dosage: "Spray 1–1.5 g/L; drip 500–750 g/L", packing: "100 g, 250 g, 500 g" },
    { dosage: "Spray 1–1.5 g/L; drip 500–750 g/L", packing: "250 g, 500 g, 1 kg" },
    { dosage: "Spray 0.5–1 g/L", packing: "100 g, 250 g, 500 g" },
    { dosage: "Spray 2 ml/L; drip 2 L/acre", packing: "250 ml, 500 ml, 1 L, 5 L" },
    { dosage: "Spray 1–1.5 g/L; drip 500–750 g/L", packing: "100 g, 250 g, 500 g" },
    { dosage: "Foliar 1.5–2 ml/L", packing: "250 ml, 500 ml, 1 L" },
    { dosage: "Foliar 1.5–2 ml/L", packing: "250 ml, 500 ml, 1 L" },
    { dosage: "1 ml/L or 200 ml/acre" },
    { dosage: "Dissolve 1–2 ml/L and spray both leaf surfaces", packing: "100 ml, 250 ml, 500 ml, 1 L" },
    { dosage: "25 kg/acre with other fertilizers", packing: "25 kg, 1 kg" },
    { dosage: "10 kg/acre with other fertilizers", packing: "10 kg" },
    { dosage: "10 kg/acre with other fertilizers", packing: "10 kg" },
    { dosage: "10 kg/acre with other fertilizers", packing: "10 kg" },
  ],
  waterSoluble: [
    { packing: "2.5 kg" }, { packing: "2.5 kg" }, { packing: "2.5 kg" },
    { packing: "2.5 kg" }, { packing: "2.5 kg" }, { packing: "2.5 kg" },
    { packing: "2.5 kg" }, { packing: "2.5 kg bucket" }, { packing: "2.5 kg bucket" },
    { packing: "2.5 kg bucket" }, {}, { packing: "1 L, 3 L, 5 L" },
  ],
  plantGrowthRegulators: [
    { packing: "100 ml, 250 ml, 500 ml, 1 L, 5 L" },
  ],
  organicFertilizers: [
    { dosage: "10 kg/acre with other fertilizers", packing: "25 kg" },
    { dosage: "10 kg/acre with other fertilizers", packing: "10 kg" },
  ],
  bioStimulants: [
    { dosage: "Spray 4–5 ml/L; drip 1 L/acre", packing: "500 ml, 1 L, 5 L" },
    { dosage: "Spray 2 ml/L", packing: "250 ml, 500 ml, 1 L" },
    { dosage: "Spray 0.25–0.5 ml/L; drip 500 ml/acre", packing: "50 ml, 100 ml, 250 ml, 500 ml, 1 L, 5 L" },
    { dosage: "Spray 2 g/L; drip 500 g/acre", packing: "250 g, 500 g, 1 kg" },
    { dosage: "Spray 2 g/L; drip 1–2 kg/acre", packing: "100 g, 250 g, 500 g, 1 kg" },
    { dosage: "Spray 2 ml/L; drip 1–2 L/acre", packing: "100 ml, 250 ml, 500 ml, 1 L" },
    { dosage: "Spray 1 ml/L", packing: "100 ml, 250 ml, 500 ml" },
    { dosage: "Spray 2 ml/L; drip 1–2 L/acre", packing: "100 ml, 250 ml, 500 ml, 1 L, 5 L" },
    { dosage: "Spray 2 ml/L; drip 1–2 L/acre", packing: "250 ml, 500 ml, 1 L" },
    { dosage: "Spray 1 g/L; drip 500 g/acre", packing: "100 g, 250 g, 500 g" },
    { dosage: "Spray 1–2 g/L; drip 500 g/acre", packing: "100 g, 250 g, 500 g" },
    { dosage: "Spray 5 ml per 15–20 L water", packing: "5 ml, 25 ml" },
    { dosage: "Spray 1–1.5 ml/L", packing: "100 ml, 250 ml, 500 ml, 1 L" },
    { dosage: "Spray 2–3 L/acre through drip", packing: "1 L, 5 L" },
    { dosage: "Spray 2 ml/L", packing: "250 ml, 500 ml, 1 L, 5 L" },
    { dosage: "Spray 0.20 g/L", packing: "20 g, 80 g" },
    { dosage: "Spray 0.5–1 ml/L", packing: "100 ml, 250 ml, 500 ml, 1 L" },
    { dosage: "2–3 L/acre through drip" },
    { dosage: "5 L/acre through drip", packing: "5 L" },
    { dosage: "5 ml/L to wash the tree trunk", packing: "500 ml, 1 L" },
    { dosage: "Spray 2–3 g/L; drip 500 g/acre", packing: "500 g, 1 kg" },
    { dosage: "Spray 2 ml/L", packing: "250 ml, 500 ml, 1 L" },
    { dosage: "Fulvic Acid 90%: 150–200 g/acre", packing: "250 g, 500 g, 1 kg" },
    { packing: "100 ml, 250 ml, 500 ml, 1 L" },
    { dosage: "Foliar 4–5 ml/L; drip 1 L/acre", packing: "1 L, 3 L, 5 L" },
    { packing: "100 ml, 250 ml, 500 ml, 1 L, 5 L" },
    { dosage: "Foliar 2 ml/L; drip 1 L/acre", packing: "250 ml, 500 ml, 1 L, 5 L" },
    { dosage: "10 kg for 150 bags (5 kg per 5,000 kg onions)", packing: "5 kg" },
  ],
};

const catalogDescriptions: Record<string, string[]> = {
  bioFertilizers: [
    "Eco-friendly Azospirillum biofertilizer that fixes nitrogen and supports root branching.",
    "Rhizobium biofertilizer for legume crops that supports symbiotic nitrogen fixation.",
    "Azotobacter formulation that supplies atmospheric nitrogen and promotes seed germination and plant vigour.",
    "Potash-mobilizing bacteria that helps make fixed potash available and supports fruit sugar.",
    "Phosphate-solubilizing bacteria that converts insoluble phosphate into a plant-available form.",
    "NPK consortia seed-treatment biofertilizer using mixed inoculants to enrich soil microbes.",
    "Zinc-solubilizing bacteria for improving zinc availability and correcting zinc deficiency.",
    "Sulphur-solubilizing bacteria that mobilizes fixed sulphur for plant uptake.",
    "Acetobacter biofertilizer supporting biological nitrogen fixation in sugarcane and mustard.",
    "Mycorrhizal biofertilizer that improves macro- and micronutrient uptake, crop growth and resilience.",
    "Trichoderma biological product for fungal disease management and crop growth support.",
    "Liquid NPK consortia biofertilizer that improves availability of nitrogen, phosphorus and potash.",
    "Pseudomonas biological control product for soil-borne pathogens and crop growth support.",
    "Paecilomyces lilacinus biological product for nematode and root-zone pest management.",
    "Rhodophyta-derived potash biostimulant and soil conditioner.",
    "Mycorrhizal biofertilizer for supporting nutrient uptake and root-zone health.",
  ],
  microNutrients: [
    "Multi-micronutrient fertilizer containing zinc, manganese, iron, copper, boron and molybdenum.",
    "Water-soluble multi-micronutrient fertilizer containing zinc, manganese, iron, copper and boron for drip use.",
    "Water-soluble chelated zinc formulation for correcting zinc deficiency in crops and soil.",
    "Boron 20% micronutrient supporting cell division, pollen germination, flowering, fruit growth and protein synthesis.",
    "Fine granular Fe-EDTA complex containing 12% iron and fully soluble in water.",
    "Liquid chelated multi-micronutrient blend containing zinc, manganese, iron, copper, boron and molybdenum.",
    "Chelated calcium EDTA 10% micronutrient formulation.",
    "Concentrated liquid calcium 11% formulation for foliar application.",
    "Boron ethanolamine 10% formulation for foliar micronutrient support.",
    "Zinc 39.5% minimum suspension formulation for zinc correction.",
    "Orthosilicic acid that supports stronger plants, root development, stress resistance and nutrient uptake.",
    "Magnesium sulphate fertilizer supplying magnesium and sulphur with other fertilizers.",
    "Soil micronutrient fertilizer applied with other fertilizers to support nutrient availability.",
    "Ferrous sulphate fertilizer for soil application with other fertilizers.",
    "Zinc sulphate fertilizer for soil application with other fertilizers.",
  ],
  waterSoluble: [
    "Water-soluble NPK 00:42:47 supplying phosphorus and potassium.",
    "NPK 00:48:47 for orchards and vegetables, supporting root development through phosphorus and potassium.",
    "Sulphur 90% fertilizer for correcting soil sulphur deficiency.",
    "N-21 nitrogen fertilizer supporting leaf growth and stronger stems.",
    "NPK 00:60:20 for balanced nutrient supply and vegetative growth.",
    "NPK 14:48:00 supporting root development, flowering, fruiting and yield.",
    "NPK 00:09:46 for fruit and vegetable crop development.",
    "Fully water-soluble NPK 05:55:17 supporting roots, flowering, fruit quality and stress tolerance.",
    "NPK 00:40:37 supporting roots, flowering, fruit quality and fertigation or spraying.",
    "NPK 10:54:10 with high phosphorus for early root and flowering support.",
    "NPK with TE supporting roots, greenery, flowers, fruiting, quality and nutrient correction.",
    "Liquid NPK 8:8:8 supporting root growth, flowering, fruit quality and stress tolerance.",
  ],
  plantGrowthRegulators: [
    "Gibberellic Acid 0.001% plant growth regulator that accelerates growth, supports photosynthesis and improves crop quality.",
  ],
  organicFertilizers: [
    "Granular soil conditioner that stabilizes organic carbon and nitrogen, improves nutrient availability and supports white-root growth.",
    "Granular soil conditioner containing humic acid, amino acid and other nutrients to improve soil properties and crop productivity.",
  ],
  bioStimulants: [
    "Supports root flexibility, potash uptake, fruit size, sweetness, colour, shine and early fruit setting.",
    "Biological extract mixed with water for managing sap-sucking insects, harmful fungi and bacteria.",
    "Organic silicon-based spreader that improves spray coverage and the efficiency of medicines and fertilizers.",
    "Potassium humate formulation that promotes white-root growth, soil texture and nutrient availability.",
    "Amorphous silica formulation supporting leaf strength, photosynthesis and crop stress resistance.",
    "Amino acid and nutrient blend supporting branching, flower retention, photosynthesis and nutrient absorption.",
    "Biostimulant with vitamins and nutrients supporting balanced crop nutrition, growth, fruit size and colour.",
    "Natural growth enhancer containing amino, humic, fulvic and seaweed extracts for roots, flowers and fruiting.",
    "Seaweed-based organic product supporting photosynthesis, soil fertility, white roots and fruit set.",
    "L-amino acid 80% formulation supporting photosynthesis, metabolism, flowering, fruit size and quality.",
    "Silica and amino acid blend supporting crop immunity, metabolism and disease-resistant growth.",
    "Biostimulant supporting branching, flower-bud formation and reduced flower shedding.",
    "Residue-free, eco-friendly product for managing sucking insects in vegetables, fruits, cotton, rice and soybean.",
    "Fruit-sizing formulation supporting potash uptake, fruit weight, colour, sweetness and shine.",
    "Humic acid formulation supporting white roots, soil fertility, microorganisms and nutrient absorption.",
    "Preventive product supporting management of bacterial diseases including fruit drop, bacterial smut and Xanthomonas.",
    "Water-quality conditioner that improves spray performance, drip fertilizer availability and reduces salinity.",
    "Seaweed, amino acid, protein and vitamin nutrient mixture supporting crop immunity, flowers and production.",
    "Herbal nutrient enhancer supporting nutrient absorption, fruit quality, uniform growth and beneficial microorganisms.",
    "Natural-extract product for managing pinhole borer in tree trunks.",
    "Soil and root enhancer supporting microorganisms, white roots, nutrient uptake and soil fertility.",
    "Formulation supporting plant metabolism, photosynthesis, IAA and GA production, fruit size and shine.",
    "Fulvic acid 90% formulation supporting crop yield, nutrient use, pH balance and beneficial microbes.",
    "Herbicide booster that improves weed-control performance and helps carry herbicide to weed roots.",
    "Size and growth formulation supporting root flexibility, potassium uptake, fruit size, sweetness and early fruit set.",
    "Universal dispersant that dissolves fertilizers, prevents nozzle and filter blockage and gives a uniform tank mixture.",
    "Seaweed biostimulant supporting growth, crop development, fruiting and staged foliar or drip application.",
    "Onion storage powder helping preserve onions, reduce sprouting and rotting, and maintain quality for longer storage.",
  ],
};

const withCatalogDescriptions = (slug: string, info: CatalogInfo[]) =>
  info.map((item, index) => ({ ...item, description: catalogDescriptions[slug]?.[index] }));

export type Product = {
  slug: string;
  name: string;
  category: string;
  img: string;
  summary: string;
  catalog?: string;
  range?: string[];
  rangeImages?: string[];
  catalogInfo?: CatalogInfo[];
  highlights?: string[];
};

export const categories = [
  {
    slug: "bio-fertilizers",
    title: "Bio-Fertilizers",
    desc: "Microbial and biological solutions for nutrient availability, root development, soil health and crop growth.",
    img: productImages.bioFertilizers[0],
    catalog: "/assets/catalogs/bio-fertilizers.docx",
    range: ["MAX AZOS (Azospirillum)", "MAXRHIZO (Rhizobium)", "MAXAZO (Azotobacter)", "ULTRA POTASH (KMB)", "ULTRA PHOS (PSB)", "MAXMAZIC (NPK Consortia)", "MAXZINKA (ZSB)", "MAXSULFA (SSB)", "SHUGARSHINE (Acetobacter)", "MAXVAM (Mycorrhiza)", "TRICON (Trichoderma)", "MAX N-P-K (NPK Liquid Consortia)", "PSUMOTO", "MAXPACINO", "RUCO POTASH", "CORAL MYCORRHIZA"],
    rangeImages: productImages.bioFertilizers,
    catalogInfo: withCatalogDescriptions("bioFertilizers", catalogInfo.bioFertilizers),
    highlights: ["Nitrogen, phosphate, potash, zinc and sulphur mobilization", "Root-zone microbial support for stronger crop growth", "Biological alternatives for improved nutrient availability"],
  },
  {
    slug: "micro-nutrients",
    title: "Micro-Nutrients",
    desc: "Water-soluble and suspension micronutrient products for correcting deficiencies and supporting crop quality.",
    img: productImages.microNutrients[0],
    catalog: "/assets/catalogs/micro-nutrients.docx",
    range: ["VERA GOLD COMBI (Powder)", "VERA GOLD DRIP (Powder)", "VERAZIN (Zinc 12%)", "VERABOR (Boron 20%)", "VERAFER (Ferrous 12%)", "VERA GOLD COMBI (Liquid)", "VERACAL", "TONICAL (Liquid Calcium 11%)", "TYSON-B10 (Boron Ethanol Amine 10%)", "TOKOZIN 70", "TYSIL (Orthosilicic Acid)", "VERA GOLD MAGNESIUM SULPHATE", "VERA GOLD SOIL", "VERA GOLD FEROUS SULPHATE", "VERA GOLD ZINC SULPHATE"],
    rangeImages: productImages.microNutrients,
    catalogInfo: withCatalogDescriptions("microNutrients", catalogInfo.microNutrients),
    highlights: ["Support for healthy roots, leaves and plant structure", "Micronutrient correction for stronger, more productive crops", "Products supplied in powder, liquid and suspension formats"],
  },
  {
    slug: "water-soluble-fertilizers",
    title: "Water Soluble Fertilizers",
    desc: "NPK, sulphur and fertigation products designed for efficient nutrient delivery through drip and foliar application.",
    img: productImages.waterSoluble[0],
    catalog: "/assets/catalogs/water-soluble-fertilizers.docx",
    range: ["TYSON 00:42:47 + TE", "TYSON 00:48:47 + TE", "TYSULF (Sulphur 90% Powder)", "TYSON N-21", "TYSON 00:60:20 + TE", "TYSON 14:48:00 + TE", "TYSON 00:09:46 + TE", "TYSON 05:55:17 + TE", "TYSON 00:40:37 + TE", "TYSON 10:54:10 + TE", "N:P:K 10:09:16:3:13 + TE", "ANWAKEN (N:P:K 8:8:8 Liquid)"],
    rangeImages: productImages.waterSoluble,
    catalogInfo: withCatalogDescriptions("waterSoluble", catalogInfo.waterSoluble),
    highlights: ["Faster and stronger root growth", "Improved flowering, fruiting and crop quality", "Suitable for fertigation and selected foliar applications"],
  },
  {
    slug: "plant-growth-regulators",
    title: "Plant Growth Regulators",
    desc: "Growth-stage support for stronger plants and improved photosynthesis, crop health and harvest potential.",
    img: productImages.plantGrowthRegulators[0],
    catalog: "/assets/catalogs/plant-growth-regulators.docx",
    range: ["LIRA (Gibberellic Acid 0.001% L)"],
    rangeImages: productImages.plantGrowthRegulators,
    catalogInfo: withCatalogDescriptions("plantGrowthRegulators", catalogInfo.plantGrowthRegulators),
    highlights: ["Boosts plant growth and crop development", "Supports photosynthesis and overall plant health", "Helps maintain steady growth over time"],
  },
  {
    slug: "organic-fertilizers",
    title: "Organic Fertilizers",
    desc: "Granular soil-conditioning products that support organic carbon, nutrient availability, root growth and soil fertility.",
    img: productImages.organicFertilizers[0],
    catalog: "/assets/catalogs/organic-fertilizers.docx",
    range: ["GRIPPER GR", "SOIL POWER"],
    rangeImages: productImages.organicFertilizers,
    catalogInfo: withCatalogDescriptions("organicFertilizers", catalogInfo.organicFertilizers),
    highlights: ["Supports organic carbon and nitrogen balance", "Improves physical, biological and chemical soil properties", "Encourages white-root growth and crop productivity"],
  },
  {
    slug: "bio-stimulants",
    title: "Bio-Stimulants",
    desc: "Herbal extracts, amino acids, seaweed, humic substances and specialty products for crop vigour, quality and stress support.",
    img: productImages.bioStimulants[0],
    catalog: "/assets/catalogs/bio-stimulants.docx",
    range: ["UNI K UPTEK", "UNIMAX FISH OIL", "FASTER", "UNI ROOT KING", "UNI-SIL", "UNI-ZYME", "STAR GOLD", "GRIPPER", "B-VITA", "AMINO GOLD", "AM-SIL", "UNI DAMAN", "BIO-9", "SUPER SIZE DRIP", "ROOT CONNECTOR", "BACTRA", "DR.PH", "GRIPPER DF", "ONEPLUS", "MARKUS", "DELMA GOLD", "VERA", "FULVIGROW", "LITO", "POWER PLUS", "JEFHA MAX PRO", "ZULEMA KELP SL", "ONICATOR"],
    rangeImages: productImages.bioStimulants,
    catalogInfo: withCatalogDescriptions("bioStimulants", catalogInfo.bioStimulants),
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
  rangeImages: c.rangeImages,
  catalogInfo: c.catalogInfo,
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
  { length: 109 },
  (_, index) => `/assets/gallery/gallery-${String(index + 1).padStart(3, "0")}.jpeg`,
);

export const gallery = galleryImages;
