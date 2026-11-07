import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteOrigin = "https://www.unimaxagri.com";
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const template = await readFile(path.join(distDir, "index.html"), "utf8");

const pages = [
  ["/", "Agri-Biotech Solutions for Indian Farms | Unimax", "Unimax Agri Bio-Technologies (I) PVT LTD manufactures bio-fertilizers, bio-stimulants, micronutrients, water-soluble fertilizers and organic agricultural inputs for Indian farms."],
  ["/about", "About Unimax Agri Bio-Technologies (I) PVT LTD", "Learn about Unimax Agri Bio-Technologies (I) PVT LTD, our manufacturing facility, R&D capabilities and farmer-focused approach from Maharashtra, India."],
  ["/products", "Bio-Fertilizers, Micronutrients & Agri Inputs", "Explore Unimax agricultural products including bio-fertilizers, micronutrients, water-soluble fertilizers, plant growth regulators, organic fertilizers and bio-stimulants."],
  ["/solutions", "Agricultural Solutions & Farmer Support", "Discover practical agricultural product information, crop nutrition guidance and support for farmers, dealers and distributors from Unimax."],
  ["/gallery", "Agricultural Gallery", "View field, laboratory, product and agricultural outreach moments from Unimax Agri Bio-Technologies (I) PVT LTD."],
  ["/blog", "Agriculture & Farming Insights", "Read agriculture, soil health and agri-biotechnology insights from Unimax Agri Bio-Technologies (I) PVT LTD."],
  ["/testimonials", "Farmer & Partner Testimonials", "Read verified feedback and field experiences from farmers, dealers and agricultural partners working with Unimax."],
  ["/contact", "Contact Unimax Agri Bio-Technologies (I) PVT LTD", "Contact Unimax Agri Bio-Technologies (I) PVT LTD at Diksal, Karjat, Ahmednagar, Maharashtra for product, farmer, dealer and distributor enquiries."],
  ["/awards", "Awards & Recognition", "Learn about Unimax Agri Bio-Technologies (I) PVT LTD's recognition for innovation and contribution to agriculture."],
  ["/certification", "Quality Certifications", "Review Unimax Agri Bio-Technologies (I) PVT LTD's quality management and agricultural registrations."],
  ["/csr", "Corporate Social Responsibility", "Explore Unimax initiatives and values supporting responsible, sustainable agricultural growth."],
  ["/laboratory", "Agricultural R&D Laboratory", "See how Unimax develops and validates agricultural formulations through research, testing and field-focused quality systems."],
  ["/video", "Unimax Agricultural Videos", "Watch company, product and agricultural videos from Unimax Agri Bio-Technologies (I) PVT LTD."],
  ["/news-events", "Agricultural News & Events", "See Unimax agricultural exhibitions, farmer outreach and company event updates."],
  ["/products/bio-fertilizers", "Bio-Fertilizers | Unimax Agricultural Products", "Microbial and biological solutions for nutrient availability, root development, soil health and crop growth."],
  ["/products/micro-nutrients", "Micro-Nutrients | Unimax Agricultural Products", "Water-soluble and suspension micronutrient products for correcting deficiencies and supporting crop quality."],
  ["/products/water-soluble-fertilizers", "Water Soluble Fertilizers | Unimax Agricultural Products", "NPK, sulphur and fertigation products designed for efficient nutrient delivery through drip and foliar application."],
  ["/products/plant-growth-regulators", "Plant Growth Regulators | Unimax Agricultural Products", "Growth-stage support for stronger plants and improved photosynthesis, crop health and harvest potential."],
  ["/products/organic-fertilizers", "Organic Fertilizers | Unimax Agricultural Products", "Granular soil-conditioning products that support organic carbon, nutrient availability, root growth and soil fertility."],
  ["/products/bio-stimulants", "Bio-Stimulants | Unimax Agricultural Products", "Herbal extracts, amino acids, seaweed, humic substances and specialty products for crop vigour, quality and stress support."],
  ["/blog/understanding-soil-health", "Understanding Soil Health: A Farmer's Primer", "Practical agriculture insight from Unimax on soil health and productive farming."],
  ["/blog/role-of-biotechnology-in-farming", "The Role of Biotechnology in Modern Farming", "Agriculture and agri-biotechnology insight from Unimax Agri Bio-Technologies."],
  ["/blog/season-planning-tips", "Planning Your Crop Season", "Practical seasonal planning tips for farmers from Unimax Agri Bio-Technologies."],
];

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function pageHtml(route, title, description) {
  const url = `${siteOrigin}${route === "/" ? "/" : route}`;
  const breadcrumb = route === "/"
    ? null
    : {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteOrigin}/` },
          { "@type": "ListItem", position: 2, name: title.split(" | ")[0], item: url },
        ],
      };
  let html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`);

  if (breadcrumb) {
    html = html.replace("</head>", `<script type="application/ld+json" data-prerender-seo>${JSON.stringify(breadcrumb)}</script>\n  </head>`);
  }
  return html;
}

for (const [route, title, description] of pages) {
  const outputDir = path.join(distDir, route.slice(1));
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), pageHtml(route, title, description));
}

console.log(`Generated SEO-ready HTML for ${pages.length} public routes.`);
