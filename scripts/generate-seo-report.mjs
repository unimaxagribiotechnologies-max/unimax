import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(rootDir, "SEO-Report-Unimax-Agri.pdf");
const pageWidth = 612;
const pageHeight = 792;
const margin = 48;
const colors = {
  ink: "0.12 0.16 0.14",
  muted: "0.36 0.42 0.39",
  green: "0.09 0.30 0.21",
  greenLight: "0.91 0.95 0.91",
  gold: "0.78 0.56 0.16",
  white: "1 1 1",
  line: "0.82 0.85 0.82",
};

function escapePdf(value) {
  return value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}

function text(stream, value, x, y, size = 10, color = colors.ink, font = "F1") {
  stream.push(`${color} rg BT /${font} ${size} Tf ${x} ${y} Td (${escapePdf(value)}) Tj ET`);
}

function line(stream, x1, y1, x2, y2, color = colors.line, width = 1) {
  stream.push(`${color} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S`);
}

function rect(stream, x, y, width, height, color, stroke = false) {
  stream.push(`${color} ${stroke ? "RG" : "rg"} ${x} ${y} ${width} ${height} re ${stroke ? "S" : "f"}`);
}

function wrap(value, maxChars) {
  const words = value.split(/\s+/);
  const lines = [];
  let current = "";
  for (const word of words) {
    if ((current + " " + word).trim().length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = `${current} ${word}`.trim();
    }
  }
  if (current) lines.push(current);
  return lines;
}

function paragraph(stream, value, x, y, widthChars = 92, size = 10, leading = 15, color = colors.muted) {
  let cursor = y;
  for (const row of wrap(value, widthChars)) {
    text(stream, row, x, cursor, size, color);
    cursor -= leading;
  }
  return cursor;
}

function bulletList(stream, items, x, y, widthChars = 84) {
  let cursor = y;
  for (const item of items) {
    const rows = wrap(item, widthChars);
    text(stream, "-", x, cursor, 10, colors.gold, "F2");
    text(stream, rows[0], x + 14, cursor, 10, colors.ink);
    cursor -= 14;
    for (const row of rows.slice(1)) {
      text(stream, row, x + 14, cursor, 10, colors.ink);
      cursor -= 14;
    }
    cursor -= 4;
  }
  return cursor;
}

function pageHeader(stream, pageNumber, section) {
  rect(stream, 0, pageHeight - 64, pageWidth, 64, colors.green);
  text(stream, "UNIMAX AGRI BIO-TECHNOLOGIES", margin, pageHeight - 35, 12, colors.white, "F2");
  text(stream, section.toUpperCase(), pageWidth - margin - section.length * 5.1, pageHeight - 35, 8, "0.82 0.91 0.84", "F2");
  text(stream, `SEO REPORT  |  ${pageNumber}`, margin, 28, 8, colors.muted, "F2");
  line(stream, margin, 40, pageWidth - margin, 40, colors.line, 0.6);
}

function title(stream, value, y) {
  text(stream, value, margin, y, 22, colors.green, "F2");
  line(stream, margin, y - 12, margin + 64, y - 12, colors.gold, 3);
}

const pages = [];

{
  const s = [];
  rect(s, 0, 0, pageWidth, pageHeight, "0.98 0.99 0.97");
  rect(s, 0, pageHeight - 180, pageWidth, 180, colors.green);
  text(s, "SEO AUDIT &", margin, pageHeight - 82, 28, colors.white, "F2");
  text(s, "IMPLEMENTATION REPORT", margin, pageHeight - 119, 28, colors.white, "F2");
  text(s, "UNIMAX AGRI BIO-TECHNOLOGIES (I) PVT LTD", margin, pageHeight - 152, 11, "0.82 0.91 0.84", "F2");
  text(s, "Professional technical SEO readiness review", margin, pageHeight - 220, 14, colors.green, "F2");
  text(s, "https://www.unimaxagri.com/", margin, pageHeight - 245, 11, colors.muted);
  text(s, "Report date: 07 November 2026", margin, pageHeight - 264, 10, colors.muted);
  rect(s, margin, 330, 516, 112, colors.greenLight);
  text(s, "95 / 100", margin + 22, 388, 34, colors.green, "F2");
  text(s, "TECHNICAL SEO READINESS", margin + 190, 401, 12, colors.green, "F2");
  text(s, "Implementation scorecard - not a Lighthouse guarantee", margin + 190, 380, 10, colors.muted);
  paragraph(s, "The website has been upgraded for crawlability, indexability, route-level metadata, structured data, analytics readiness and social sharing. The production deployment was verified after the release.", margin, 280, 86, 11, 17, colors.ink);
  text(s, "Prepared for the Unimax web team", margin, 82, 10, colors.muted, "F2");
  text(s, "Repository release: fb7334a", margin, 64, 9, colors.muted);
  pages.push(s.join("\n"));
}

{
  const s = [];
  pageHeader(s, 2, "Scorecard");
  title(s, "SEO readiness scorecard", 710);
  text(s, "Weighted implementation review across the core technical SEO controls.", margin, 676, 10, colors.muted);
  const rows = [
    ["Crawlability", "20 / 20", "Live robots.txt and XML sitemap with 23 public URLs."],
    ["Indexability", "20 / 20", "Production canonicals, route HTML, robots directives and admin exclusion."],
    ["On-page metadata", "20 / 20", "Unique title and description coverage for all public routes."],
    ["Structured data", "15 / 15", "Organization, WebSite and BreadcrumbList JSON-LD coverage."],
    ["Analytics readiness", "10 / 10", "GTM container installed with SPA virtual_page_view events."],
    ["Quality validation", "10 / 15", "Production and build checks pass; external Lighthouse was rate-limited."],
  ];
  let y = 630;
  rect(s, margin, y, 516, 30, colors.green);
  text(s, "AREA", margin + 12, y + 10, 9, colors.white, "F2");
  text(s, "SCORE", margin + 170, y + 10, 9, colors.white, "F2");
  text(s, "EVIDENCE", margin + 245, y + 10, 9, colors.white, "F2");
  y -= 30;
  for (const [area, score, evidence] of rows) {
    rect(s, margin, y - 44, 516, 44, y % 88 === 0 ? "0.96 0.98 0.95" : "1 1 1");
    text(s, area, margin + 12, y - 18, 10, colors.ink, "F2");
    text(s, score, margin + 170, y - 18, 10, colors.green, "F2");
    paragraph(s, evidence, margin + 245, y - 15, 47, 9, 12, colors.muted);
    y -= 44;
  }
  rect(s, margin, y - 54, 516, 54, colors.greenLight);
  text(s, "TOTAL TECHNICAL SEO READINESS", margin + 12, y - 22, 11, colors.green, "F2");
  text(s, "95 / 100", margin + 415, y - 22, 13, colors.green, "F2");
  paragraph(s, "This score is a transparent engineering scorecard. It does not replace a Google Lighthouse or PageSpeed score, which also depends on hosting latency, Core Web Vitals, third-party scripts and device conditions.", margin, 270, 88, 9, 13, colors.muted);
  pages.push(s.join("\n"));
}

{
  const s = [];
  pageHeader(s, 3, "Implemented");
  title(s, "Implemented SEO improvements", 710);
  text(s, "Changes are committed and pushed to the production repository.", margin, 676, 10, colors.muted);
  let y = 638;
  y = bulletList(s, [
    "Added the GTM container GTM-PR7GN274 using the official head script and noscript fallback.",
    "Added SPA virtual_page_view dataLayer events so route navigation can be measured by the GTM container.",
    "Added route-level prerendered HTML metadata for 23 public URLs so crawlers receive unique titles, descriptions, canonicals and social metadata before JavaScript runs.",
    "Added page-specific keyword targeting for brand, product, location, farming, soil health and agri-biotechnology search intent.",
    "Added XML sitemap at /sitemap.xml and linked it from /robots.txt.",
    "Added canonical production URLs using https://www.unimaxagri.com/.",
    "Added Googlebot preview controls, Open Graph title/description/image/url and Twitter card metadata.",
    "Added Organization, WebSite and BreadcrumbList JSON-LD structured data.",
    "Preserved /admin exclusion in robots.txt and kept admin out of the public sitemap.",
  ], margin, y, 83);
  text(s, "Key files", margin, 270, 13, colors.green, "F2");
  bulletList(s, [
    "index.html - GTM, canonical, social metadata and baseline JSON-LD",
    "src/lib/seo.ts - runtime SEO and SPA analytics events",
    "scripts/generate-seo-pages.mjs - route prerendering at build time",
    "public/sitemap.xml and public/robots.txt - crawl discovery controls",
    "package.json - SEO prerender included in the production build",
  ], margin, 245, 83);
  pages.push(s.join("\n"));
}

{
  const s = [];
  pageHeader(s, 4, "Verification");
  title(s, "Verification and next actions", 710);
  text(s, "Production checks completed after deployment propagation.", margin, 676, 10, colors.muted);
  const checks = [
    "[PASS] https://www.unimaxagri.com/robots.txt returns HTTP 200 and references /sitemap.xml.",
    "[PASS] https://www.unimaxagri.com/sitemap.xml returns XML with 23 public URLs.",
    "[PASS] /about and /products return HTTP 200 with route-specific titles, descriptions and canonicals.",
    "[PASS] GTM-PR7GN274 is present in the production HTML.",
    "[PASS] JSON-LD structured data is present in the production HTML.",
    "[PASS] Google Search Console HTML verification file returns HTTP 200 at /google35af0fcb17411993.html.",
    "[PASS] bun run build completes and generates SEO-ready route HTML.",
  ];
  let y = 635;
  for (const check of checks) {
    text(s, check, margin, y, 9.5, colors.ink);
    y -= 22;
  }
  text(s, "Recommended final SEO actions", margin, y - 12, 13, colors.green, "F2");
  bulletList(s, [
    "In Google Tag Manager, confirm a Google tag / GA4 Configuration tag uses the real G-XXXXXXXXXX Measurement ID, then publish the container.",
    "In Google Search Console, click Verify for https://www.unimaxagri.com/; the HTML verification file is already deployed and must remain published.",
    "Submit https://www.unimaxagri.com/sitemap.xml in Google Search Console and Bing Webmaster Tools, then request indexing for the homepage and priority routes.",
    "Run Lighthouse/PageSpeed Insights on mobile and desktop after the CDN cache settles; the public API returned HTTP 429 during this audit.",
    "Monitor Search Console coverage, Core Web Vitals, indexed pages and GA4 acquisition reports for 2-4 weeks.",
  ], margin, y - 38, 82);
  text(s, "Audit note", margin, 190, 11, colors.green, "F2");
  paragraph(s, "A 95+ technical score is now targeted by implementation coverage. Search Console ownership is ready for confirmation by the site owner. Actual Lighthouse SEO scoring should be recorded after the final Vercel deployment and GA4 container publication, because those measurements depend on live network and third-party conditions.", margin, 170, 87, 9, 13, colors.muted);
  text(s, "End of report", margin, 72, 9, colors.muted, "F2");
  pages.push(s.join("\n"));
}

{
  const s = [];
  pageHeader(s, 5, "Keywords & sitemap");
  title(s, "Keyword strategy and sitemap coverage", 710);
  text(s, "Keyword groups are mapped to page intent; sitemap coverage keeps the public URL set discoverable.", margin, 676, 10, colors.muted);
  text(s, "Target keyword clusters", margin, 638, 13, colors.green, "F2");
  bulletList(s, [
    "Brand and local: Unimax Agri Bio-Technologies, agricultural inputs Maharashtra, agri input manufacturer Karjat, Ahmednagar agriculture company.",
    "Commercial product: bio-fertilizers, micronutrient fertilizers, water-soluble fertilizers, organic fertilizers, bio-stimulants, plant growth regulators.",
    "Crop support: crop nutrition guidance, farmer support, fertigation fertilizer, foliar fertilizer, soil conditioner, crop stress support.",
    "Research and trust: agricultural biotechnology, agricultural R&D, fertilizer formulation, ISO agricultural company, product registration.",
    "Information: soil health, sustainable farming, modern agriculture, crop season planning, agri-biotechnology in farming.",
  ], margin, 610, 82);
  text(s, "Sitemap inventory", margin, 385, 13, colors.green, "F2");
  bulletList(s, [
    "Core pages: home, about, products, solutions, gallery, blog, testimonials and contact.",
    "Company pages: awards, certification, CSR, laboratory, video and news-events.",
    "Product pages: bio-fertilizers, micro-nutrients, water-soluble fertilizers, plant growth regulators, organic fertilizers and bio-stimulants.",
    "Article pages: understanding soil health, biotechnology in farming and crop season planning.",
    "Total: 23 public URLs at https://www.unimaxagri.com/sitemap.xml; /admin is excluded.",
  ], margin, 357, 82);
  text(s, "SEO assets included", margin, 190, 13, colors.green, "F2");
  bulletList(s, [
    "public/sitemap.xml, public/robots.txt, Google Search Console verification HTML file",
    "Route keywords in src/lib/seo.ts and prerendered keyword metadata in the production build",
    "Canonical, Open Graph, Twitter, JSON-LD and GTM/GA4-ready metadata",
  ], margin, 162, 82);
  pages.push(s.join("\n"));
}

const objects = [];
function addObject(value) {
  objects.push(value);
  return objects.length;
}

const pagesId = addObject("");
const catalogId = addObject(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
const fontId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
const boldFontId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
const infoId = addObject("<< /Title (Unimax Agri SEO Audit and Implementation Report) /Author (Webakoof) /Subject (Technical SEO readiness report) >>");
const contentIds = pages.map((content) => addObject(`<< /Length ${Buffer.byteLength(content, "ascii")} >>\nstream\n${content}\nendstream`));
const pageIds = contentIds.map((contentId) => addObject(`<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontId} 0 R /F2 ${boldFontId} 0 R >> >> /Contents ${contentId} 0 R >>`));
objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

let pdf = "%PDF-1.4\n%\xE2\xE3\xCF\xD3\n";
const offsets = [0];
objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf, "binary"));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});
const xrefOffset = Buffer.byteLength(pdf, "binary");
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i <= objects.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R /Info ${infoId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

await writeFile(outputPath, Buffer.from(pdf, "binary"));
console.log(`Wrote ${outputPath}`);
