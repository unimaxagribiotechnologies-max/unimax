import hero from "@/assets/hero.jpg";
import lab from "@/assets/lab.jpg";
import farmer from "@/assets/farmer.jpg";
import soil from "@/assets/soil.jpg";

export const images = { hero, lab, farmer, soil };

export const heroBackground = "/assets/hero-background.jpeg";

export const companyImages = {
  logo: "/assets/logo-transparent.png",
  about: "/assets/about-us.jpeg",
  corporateOffice: "/assets/corporate-office.jpg",
  values: "/assets/company-values.jpeg",
  profile: "/assets/company-profile.jpeg",
  brand: "/assets/unimax-brand.jpeg",
};

export const breadcrumbImages = {
  about: "/assets/breadcrubs/about.jpeg",
  blog: "/assets/breadcrubs/blog.jpeg",
  contact: "/assets/breadcrubs/contact%20us.jpeg",
  gallery: "/assets/breadcrubs/gallery.jpeg",
  products: "/assets/breadcrubs/products.jpeg",
  solutions: "/assets/breadcrubs/solutions.jpeg",
  testimonials: "/assets/breadcrubs/testimonials.jpeg",
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
    "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg",
    "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg",
  ]),
  microNutrients: productImageSeries("micro-nutrients", [
    "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg",
    "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg",
  ]).concat("/assets/products/bio-fertilizers-15.jpeg"),
  waterSoluble: productImageSeries("water-soluble-fertilizers", [
    "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg",
    "jpeg", "jpeg", "jpeg", "jpeg",
  ]),
  plantGrowthRegulators: productImageSeries("plant-growth-regulators", ["jpeg"]),
  organicFertilizers: productImageSeries("organic-fertilizers", ["jpeg", "jpeg"]),
  bioStimulants: productImageSeries("bio-stimulants", [
    "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg",
    "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg",
    "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg", "jpeg",
    "jpeg", "jpeg", "jpeg", "jpeg",
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
    { packing: "100 g" },
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
    "MAX AZOS is an eco-friendly biofertilizer formulation based on symbiotic nitrogen-fixing bacteria found around plant roots and root surfaces.\nIt produces indole acetic acid (IAA), gibberellins, thiamine and niacin, helping increase root branching and mineral-water absorption.\nIt can replace 25–30% of the chemical nitrogen required by plants.",
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
    "Multi-micronutrient fertilizer containing zinc, manganese, iron, copper, boron and molybdenum, complying with relevant state notifications.\nIt improves plant growth and vigour, increases yield potential, and helps prevent nutritional imbalance by correcting deficiencies.",
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
    "Rhodophyta-derived potash biostimulant and soil conditioner.",
  ],
  waterSoluble: [
    "TYSON (00:42:47) is a water-soluble NPK fertilizer supplying phosphorus and potassium to crops.\nIt dissolves easily, is simple to apply, and supports root development and nutrient uptake.\nSuitable for orchards, vegetables and other crops requiring balanced nutrition.",
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
    "LIRA contains Gibberellic Acid 0.001% and works as an effective plant growth regulator.\nIt works with plant metabolism to accelerate growth, support photosynthesis and improve overall plant health.\nIt helps develop larger leaves, stronger roots, better-quality produce and higher yield.",
  ],
  organicFertilizers: [
    "GRIPPER GR is a granular soil conditioner that stabilizes organic carbon and nitrogen in the soil.\nIt improves nutrient availability and supports healthy plant growth.\nIt helps make phosphorus and calcium available, encourages white-root growth and supports higher yield.",
    "Granular soil conditioner containing humic acid, amino acid and other nutrients to improve soil properties and crop productivity.",
  ],
  bioStimulants: [
    "UNI K UPTEK improves root flexibility and increases potash uptake.\nIt supports fruit size, weight, sweetness, colour and shine, while improving sugar content and cane firmness.\nIt helps promote early flowering and fruit setting, micronutrient absorption and photosynthesis.",
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

const catalogDescriptionsFull: Record<string, string[]> = {
  "bioFertilizers": [
    "MAX AZOS is an eco-friendly biofertilizer formulation. It is used in the complete soil and root bacterium. It is a symbiotic nitrogen fixing bacteria and is found in the soil around the roots and root surfaces of plants. It also produces indole acetic acid (IAA) gibberellins. ,thiamine and niacin.As a result, the root branches grow which increases the amount of mineral water. It can replace 25-30% of the chemical nitrogen required by the plants.",
    "MAXRHIZO is an eco-friendly biofertilizer, which contains Rhizobium, a biological nitrogen fixing bacteria for legume crops. It is capable of fixing nitrogen in the symbiotic relationship of legumes. MAXRHIZO is the ideal value of excellent solutions.Because the use of nitrogenous.fertilizers causes unacceptable levels of water pollution.",
    "MAXAZO is an eco friendly bio fertilizers formulation.MAXAZO provides directly nitrogen to the plant from atmosphere.It also secrets variousgrowth promoting harmonies like IAA,Gibbrellic acid ,cytokinin and vitamines which promotes seeds germination and increase vigor of the plants.MAXAZO produce abundant slime which helps in soil aggregations.",
    "POTASH MOBILIZING BACTERIA(KMB)\nULTRA POTASH it is an eco friendly bio-fertilizers.Ultra potash is potash mobilizing bacteria as a bio fertilizers is the newer microbial inaulate that can be  of greater use in reducing the cost of chemical potash ferilizers. ULTRA POTASH  has the mobilizing power so high that it can save up to 50-60% of chemical potassium fertilizers.Potash is the also use increase the sugar level in the fruits.",
    "PHOSPHATE SOLUBILIZING BACTERIA(PSB)\nULTRA PHOS is an eco friendlyBio-fertilizers formulation of phosphate solubilizing bacteria .ULTRA PHOS play vital role in converting insoluble phosphatic compound in to available form and contains very effective cell mass of phosphorous solubilizing bacteria produce organic acid that converts insoluble inorganic phosphate in to  simple and soluble form amd make its available to the plant. Plant acquire phosphorous form soil solution and it is the least mobile elements in plant and soil contract to other micro-nutrients.",
    "SEED TREATMENT KIT(NPK CONSORTIA BIO-FERTILIZER)\nMAXMAZIC recently included in FCO 1985 in liquid forms & stands as mixed inoculant and proved beneficial over single inocilant to harvest growing fixed nutrient reserve.Microbial enrichment of soil is the only option in future agriculture. The following is the unique features of product.",
    "ZINC SOLUBLIZINC BACTERIA(ZSB)\nMAXZINKA a non-symbiotic free living soil bacteria (Zinc Solubilizing Bacteria) is an ideal and effective solution for zinc deficiency problems. Zinc one of the eight essential trace elements or micro nutnents required for the normal healthy growth and reproduction of crop plants is required in relatively small concentrations in plant tissues. The Major reason for the widespread occurrence of zinc deficiency is the low solubility of zinc in the soil.",
    "SULFER SOLUBIZINC BACTERIA (SSB)\nMAXSULFA Sulphur is the most abundant and widely distributed element on the earth. Sulphur like nitrogen now a days is an essential element for plant health. A Pivotal ecological role of MAXSULFA results from their participation in the sulphur cycle results mobilizing of fixed sulphur and makes it available to the plant.",
    "ACETOBACTER\nSUGARSHINE it is a ecofriendl useful biofertilizer. Nitrogen fixing bacteria are commonly found in association with the roots of diverse plants. Recently stands as biological nitrogen fixation in sugarcane and mustard crop more effectively by colonizing the internal tissues of the plant. SUGARSHINE is also known as glucon Azotobactor diazotrophicus.",
    "MYCORRHIZA\nMAXVAM it is a ecofriendl Biofertilizer. MAXVAM a soil based biological biofertilizer, containing spores infected roots and propagules of beneficial mycorrhizal fungit incresses uptake of macro & micronutrients, improve crop growth, impact disease and pest ressistance to plant, save water and also conditions of the soil.",
    "Trichoderma fungus is mainly used to control fungal diseases and improve crop growth. It is a natural fungus that helps in controlling pathogenic fungi in the soil.",
    "MAX-NPK consortia is a Completely Eco-friendly Chemical Free bio fertilizer and 100% Organic Solution. It is a cost effective biofertiliser Best for Domestic Purposes like home garden Kitchen Terrace Garden , Nursery & Agriculture Practices.it is a natural replacementto Chemical NPK fertilizers.NPK Consortia is a biofertilizer, which is produced with the help of various\nmicroorganisms. This fertilizer increases the availability of three essential nutrients - Nitrogen (N), Phosphorus (P) and Potassium (K), which improves the growth and yield of crops.",
    "This is a type of bacteria that can benefit plants by controlling diseases and promoting growth.In the context of plant protection, \"Pseudomonas\" is used as a biological control agent to combat various plant diseases, especially those caused by soil-borne pathogens or fungi.It is also known as a \"biological fungicide\"or \"biological insecticide\"  i.e. a biological fungicide or insecticide, respectively.",
    "Paecilomyces lilacinus (Paecilomyces lilacinus) is a natural fungus that grows in a variety of soils. It is useful for controlling root rot. This fungus kills nematodes and inhibits their growth by growing inside their bodies.",
    "Mycorrhizal biofertilizer supporting nutrient uptake and root-zone health. Available packing: 4 kg."
  ],
  "microNutrients": [
    "Composition:-\nMulti-micronutrient fertilizer containing zn,mn,fe,cu,b and mo. Complies with relevant state notifications.\nBenefits:-\nImproved growth, increased vigor leads to increased yield. Nutritional imbalance is avoided and also starvation, as deficiencies are controlled by good quality produce.",
    "Composition:-\nMulti-micronutrient fertilizer containing zn,mn,fe,cu and B complying with the relevant state instructions.\nBenefits:-\nImproved growth, increased vigor leads to increased yield. Nutritional imbalance is avoided and also starvation, as deficiencies are controlled with good quality produce.",
    "Benefits:-\nZinc is an essential micronutrient for all types of crops.Plants require zinc as it activates enzymes. Verazin is an ideal micronutrient which is water soluble chelated.Verazin reduces zinc deficiency in crops and soil which helps in increasing the yield.",
    "Benefits:-\nVerabor is an essential micronutrient for all types of crops. Verabor plays an important role in division, pollen germination, flower and fruit growth as well as protein synthesis.Verabor deficiency causes symptoms like cracking of fruits, dropping of flowers, yellowing and deformation of young leaves etc. Verabor is an ideal micronutrient fertilizer containing water soluble boron 20. % min. Reducing boron deficiency in crop soil which helps in increasing yield.",
    "A soluble fine granular FE-EDTA complex containing minimum 12.0% iron. Iron is fully chelated with EDTA and 100% soluble in water.PH stability range: 4.0-7.5 in aqueous solution.\nFor foliar application:- Use 600-1250 gm spray per hectare on standing crops.",
    "Chilled Micro Nutrient Blend Fertilizer (As per Maharashtra State Grade-2)\nComposition:-\nMulti-micronutrient fertilizer containing zn,mn,fe,cu,b and mo. Complies with relevant state notifications.\nBenefits:-\nImproved growth, increased vigor leading to increased yield.Nutritional imbalance is avoided and also starvation, as deficiencies are controlled with good quality produce.",
    "Calcium EDTA 10%(W/W) Chelated\nBenefits:-\nIt is an essential micronutrient calcium, chelated with EDTA, an excellent depressant and chelating agent.",
    "One of the secondary nutrients in crop growth. Improves pest and disease resistance. Helps in fruit set when sprayed at flowering stage. Tonical with its concentrated liquid calcium formulation is a highly effective nutrient source for a wide range of crops.This fertilizer addresses many important aspects of plant growth, from cell formation to enzyme activity and disease resistance.",
    "TYSON-B10 fertilizer contains Boron Ethanol Amine 10% EC, which is essential for balanced growth. It plays an important role in cell wall formation, sugar transport and protein synthesis.",
    "Tokozin70 is a fully formulated flowable Zn SC 39.5% liquid micronutrient fertilizer. It contains high concentration of zinc for foliar application which can penetrate into the plant with good mobility to prevent and treat zinc deficiency on a wide range of crops.It is a 100% water soluble formula that increases chloroplast and enzyme production. Tocozin 70 (Zinc Oxide 39.5% SC) can be used with agrochemicals in tank mixes.\nBenefits:-\n• It participates in N2 metabolism and stimulates amino acids to form proteins.\n• It contains 39.5% min Zn, more than any other type of zinc nutrition.\n• Stable suspensions and concentrated formulations help produce enzymes that regulate plant life.\n• Excellent product to reduce zinc deficiency in a short time.",
    "Orthosilicic Acid offers many benefits to plants and humans. It strengthens plants, reduces stress, and boosts immunity. In humans, it is useful for skin health, as well as bone strength.\n1)Strong and Healthy Crop:-Orthosilicic acid strengthens plants, making them stronger and more energetic.\n2)Root Development:-It helps improve root development, which leads to better crop growth. Stress Resistance:\n3)It helps plants tolerate environmental stresses (e.g. drought, disease).\n4)Disease and Pest Control:-Spraying with orthosilicic acid reduces the incidence of pests and diseases, which protects crops.\n5)Crop Nutrition:-It helps plants absorb essential nutrients, which improves their growth.",
    "Micronutrient fertilizer for soil application containing magnesium and sulphur. It supports membrane stability, cell division, cell expansion and pollen-tube growth, helping with seed and fruit setting.",
    "Composition:-\nMulti-micronutrient fertilizers containing zn,mn,fe,cu and B complying with the relevant state instructions.\nBenefits:-\nImproved growth, increased vigor leads to increased yield. Nutritional imbalance is avoided and also starvation, as deficiencies are controlled with good quality produce.",
    "Micronutrient fertilizers for soil application (Fe-19% min and Sulphur-10.5% min.)\nBenefits:-\nIt increases membrane stability.\nSupports functional integrity of plant cell membrane structure.\nFerrous is required for cell division and expansion.\nIt is required for pollen tube growth along with seed/fruit set.",
    "Micronutrient fertilizers for soil application (ZN-21% min and Sulphur-10% min.)\nBenefits:-\nIt increases membrane stability.\nSupports plant cell membrane structure functional integrity.\nZINC is required for cell division and expansion.\nIt is required for pollen tube growth along with seed/fruit set.",
    "Rhodophyta (red algae) extracts and components are widely used in agriculture and plant care as natural biostimulants, soil conditioners and stress-tolerance boosters."
  ],
  "waterSoluble": [
    "TYSON(00:42:47) Soluble fertilizer (NPK 0:42:47) is a chemical fertilizer that provides phosphorus (phosphorus) and potassium (potassium) in the form of pharmaceutical products. It is easily available, selective and easy to use.",
    "00:48:47 Fertilizer Uses:\nRoot Growth:-Phosphorus is essential for root development and provides the crop with strong roots, which allows it to absorb more nutrients.",
    "Sulphur-90% fertilizer is a sulphur-containing fertilizer containing 90% sulphur. This fertilizer is especially used to replenish sulphur deficiency in the soil, which improves crop growth and increases yield.",
    "N-21 is used as a nitrogen (N) fertilizer in agriculture. This fertilizer provides nitrogen required for crop growth, which promotes good leaf growth and strengthens stems.",
    "NPK (00:60:20) is a pre-formulated fertilizer that provides them with the nutrients and qualities necessary for their comprehensive growth and development.This well-calibrated ratio contains nitrogen (N), phosphorus (P), and potassium (K), which each play a key role in supporting various physiological processes essential to plant vitality.The nitrogen component of NPK (00:60:20) is central to promoting strong vegetative growth and overall plant development.",
    "14:48:00 Fertilizer is useful for orchards, vegetables and floriculture crops. This fertilizer helps in root development, flower and fruit production. Also, 14:48:00 Fertilizer fulfills the nutritional needs of crops and helps in improving the yield.",
    "NPK 05:55:17 is a fully water-soluble fertilizer. It promotes faster and stronger root growth, improves flowering and fruiting, helps reduce flower and fruit drop, supports vigorous crop growth, improves fruit size, colour, taste and quality, and increases crop stress tolerance. Suitable for drip fertigation.",
    "NPK 00:40:37 improves root growth and strength, flowering, fruiting, fruit size, colour, sweetness and quality. It helps reduce flower and fruit drop, improves crop stress tolerance, and can be used for fertigation and foliar spraying.",
    "NPK 00:40:37 improves root growth and strength, flowering, fruiting, fruit size, colour, sweetness and quality. It helps reduce flower and fruit drop, improves crop stress tolerance, and can be used for fertigation and foliar spraying.",
    "Main Benefits:-\n1) Rapid and strong root growth, as it is very high in phosphorus (54%).\n2) Helps in increasing flowering and fruiting.\n3) Improves post-plant growth of plants and is useful in the initial stages.\n4) Increases the ability of plants to absorb nutrients.\n5) Used for vegetables, orchards, sugarcane, cotton, chilli, pomegranate, grapes and many other crops.",
    "is a fertilizer rich in phosphorus, potash, magnesium, sulfur and micronutrients (TE) and is useful for flowering, fruiting and production\nMain benefits:\n1) Improves root growth.\n2) Increases vigorous growth and greenery of plants.\n3) Increases the number and durability of flowers.\n4) Improves fruiting and reduces fruit drop.\n5) Improves the size, color, shine and quality of fruits.\n6) Helps increase immunity.\n7) TE (micronutrients) fills the nutrient deficiency in plants.\n8) Suitable for both Fertigation and Foliar Spray.\n9) Helps increase production and market value.",
    "ANWAKEN NPK 8:8:8 liquid supports faster and stronger root growth, flowering and fruiting, helps reduce flower and fruit drop, promotes vigorous crop growth, improves fruit size, colour, taste and quality, and increases crop stress tolerance. Suitable for drip fertigation."
  ],
  "plantGrowthRegulators": [
    "Gibberellic Acid 0.001% L is a highly effective plant growth regulator containing Gibberellic Acid 0.001% as the active ingredient.Gibberellic Acid 0.001% L acts synergistically with plant metabolism and accelerates the growth functions of the plant.\nBenefits:-\nLIRA contains Gibberellic Acid, which helps plants grow better and stay healthy.\nIt boosts plant growth and increases the amount of crops you can harvest.\nIt makes plants stronger and keeps them growing well over time.\nLIRA helps plants make more food through photosynthesis and improves their overall health.\nIt helps plants grow bigger leaves and roots, producing better quality produce and higher yields.\nDOSE:- 2 ml per liter of water"
  ],
  "organicFertilizers": [
    "1) Gripper GR works to stabilize the amount of organic carbon and nitrogen in granular soil.\n2) Gripper GR increases the availability of nutrients in the soil.\n3) The use of Gripper GR leads to healthy growth of plants and a significant increase in production.\n4) Use of Gripper Gripper GRGR makes phosphorus and calcium available to the crops.\n5) Use of Gripper increases white roots and makes the crops grow strong.",
    "1) Soil Power Granular works to stabilize the amount of organic carbon and nitrogen in the soil.\n2) Soil Power Granular increases the availability of nutrients in the soil.\n3) Soil Power Granular increases the physical, biological and chemical properties of the soil.\n4) Soil Power Granular increases fertility and crop production.\n5) Soil Power Granular contains a mixture of humic acid, amino acid and other nutrients which helps in increasing the productivity of crops."
  ],
  "bioStimulants": [
    "1) The use of UNI K Uptake increases the flexibility of the roots and thus the amount of potash increases to a large extent.\n2) The use of UNI K Uptake increases the size, weight, sweetness, color, and shine of the fruits.\n3) The use of Uni K Uptake increases the sugar content in the fruits, helps in increasing the weight and firmness of the cane, and helps in early flowering and fruit set.\n4) Uni K Uptake helps in absorbing micronutrients.\n5) The use of Uni K Uptake increases the photosynthesis activity of the trees and promotes vigorous growth of the trees.\n6) Uni K uptake increases the cation and anion uptake capacity of the roots of the plants, due to which the uptake of heavy elements like potash increases quickly and the size of the fruits increases.",
    "1) Unimax Fish Oil is an extract prepared from biological ingredients and can be easily mixed with water and sprayed for effective management of various types of sap-sucking insects.\n2) Unimax Fish Oil is very useful for the management of various types of harmful fungi and bacteria along with insects.\n3) Spraying Unimax Fish Oil reduces the respiratory capacity of insects. The ability of sap-sucking\ninsects to carry viruses is affected, thus reducing the spread of viral diseases.\n4) Unimax Fish Oil is useful for the management of various diseases and pests like aphids, spider mites, grasshoppers, mealybugs, white flies.",
    "(Organic Silicon Based Spreader a Wetting penetrating & dispersing agent.)\n1) Faster reduces the surface tension of water and helps in spreading the sprayed medicine on the leaves. This saves medicine.\n2) Faster increases the efficiency of medicine and fertilizers.\n3) If fed to the crop through drip, the water given near the tree trunk helps in reaching the roots. This improves the soil texture.\n4) The use of Faster helps in dissolving the soil and increases the absorption of nutrients.\n5) The use of Faster increases the efficiency of pesticides, fungicides and herbicides.",
    "1) Uni Root King promotes vigorous growth of white roots and aerates the soil,\n2) Uni Root King contains potassium humate and other nutrients, which helps in soil texture and root growth.\n3) Uni Root King promotes seed germination in a short time.\n4) Uni Root King is a humic acid in the form of flakes, so it is absorbed by the roots immediately.\n5) There is vigorous growth of white roots. Along with this, the availability of potassium increases and it dissolves quickly in water.",
    "1) Silicon is a very important nutrient and its availability increases leaf thickness, strengthens cell walls, and increases the ability of crops to resist diseases and pests.\n2) The use of Unisil increases the stress resistance of the plant and the speed of photosynthesis.\n3) Unisil helps in replenishing the deficiency of phosphorus and potassium in the crops. It protects the crops from the outbreak of fungus and downy disease.\n4) Uniseal increases the resistance of crops to extreme temperatures.",
    "1) Uni-Zyme is a high-quality blend of amino acids and other nutrients. It helps plants grow by providing nutrients.\n2) Uni-Zyme increases branching of plants, increases flower retention and helps reduce flower drop.\n3) Uni-Zyme is useful for photosynthesis and food production.\n4) Unizyme stimulates the plant to absorb nutrients.",
    "1) Star Gold is a product based on biostimulants, vitamins, and nutrients which helps in providing balanced nutrition to the crop. It increases biochemical reactions and promotes cell division.\n2) Star Gold improves the overall growth of the crop and improves the size, color, and texture of the fruit.\n3) Star Gold is a state-of-the-art biostimulant, its use improves branching growth of crops and provides high-quality exportable products.",
    "1) Gripper is a natural growth enhancer containing amino, humic, fulvic, seaweed.\n2) Gripper is primarily an organic extract made from compounds such as various amino acids and micronutrients.Therefore, the number of white roots of plants increases due to the presence of natural phosphorus and potash. It also increases the ability to absorb all the nutrients from the soil.\n3) The number of flowers increases and fruiting increases.\n4) The use of Gripper increases the green matter in the crops and increases photosynthesis and metabolism.",
    "1) B-Vita is an organic product made from seaweed. It increases the photosynthesis process and increases the green matter in the leaves of plants and the growth of crops and the crops become dark.\n2) B-Vita helps in increasing the productivity and fertility of the soil.\n3) B-Vita promotes rapid growth of white roots.\n4) B-Vita significantly increases fruit set by stopping the flowering process, and gives fruits and flowers impressive attractiveness and shine.",
    "1) Amino Gold contains 17 types of L-amino acids which increase the photosynthesis activity of crops rapidly. Due to this, the production of carbohydrates is improved. The availability of nutrients increases. Flowering and fruiting become uniform.\n2) The metabolism and cell division of crops improves.\n3) Improves the size, quality and luster of fruits.\n4) Improves the swelling and quality of fruits.",
    "1) Amsil increases the immunity of crops.\n2) The amino acids in Amsil improve metabolism and food production, leading to vigorous and disease-resistant growth of crops.\n3) Amsil is a product that is a mixture of silica and amino acids. Silica and these amino acids are important nutrients for plants. Silica increases the strength and immunity of crops.",
    "1) Uni Daman helps in increasing the branching growth of vegetable crops, flowers, fruit trees etc. to increase flower buds and stop flower shedding.",
    "1) Bio-9 is useful for protecting vegetables, fruits, cotton, rice, soybeans, flowers, etc. from sucking insects.\n2) Bio-9 protects crops from various insects, aphids, and grasshoppers that are hostile to the environment.\n3) Bio-9 is a residue-free and eco-friendly product.",
    "1) Super Size Drip increases the ability to absorb potash. Due to this, the size of the fruit and fruits increases. Disease resistance increases.\n2) The weight of the fruit increases due to the increase in sugar content,\n3) Super Size Drip helps in strengthening the cane. Due to this, fruit setting occurs early.\n4) Super size drip increases the color, sweetness and shine of fruits by absorbing primary and secondary nutrients.",
    "1) Root Connector promotes the growth of white roots, which aerates the soil and helps in the movement of microorganisms.\n2) Promotes the growth of white roots, which increases the absorption of nutrients.\n3) Promotes the growth of microorganisms in the soil.\n4) Root connector increases soil fertility and improves soil texture.",
    "1) Acts as a preventive against bacterial diseases like fruit drop, bacterial smut, Xanthomonas etc.\n2) Protects crops from various bacterial diseases.",
    "1) DR.PH is  balances the water content and improves the quality of water used for spraying.\n2) Increases the efficiency of pesticides, herbicides, and tonics used in spraying.\n3) Increases production by increasing the efficiency of drugs.\n4) If DR.PH is used through drip, the fertilizers used in the drip become fully available to the crops and the growth of the crops becomes vigorous.\n5) DR.PH reduces the salinity of the water.\n6) DR.PH reduces the thickness of the water.",
    "1) Gripper DF is a nutrient mixture made from seaweed, amino acids, proteins, vitamins and supplements necessary for crop growth.\n2) The use of Gripper DF increases the amount of humus in the soil.\n3) Gripper DF increases the immunity of plants, thus reducing the incidence of diseases on the plant.\n4) The use of Gripper DF improves the quality of flowers and increases production.",
    "1) One Plus increases the nutrient absorption capacity of crops.\n2) Improves the size, color of fruits by increasing the absorption of major and micronutrients.\n3) Helps in uniform growth of crops and helps in flowering and fruiting.\n4) One Plus, when applied through the soil, creates a favorable environment for the growth of beneficial microorganisms.\n5) Soil productivity increases, increasing the disease resistance of crops.\n6) One Plus increases the flexibility of roots, which leads to greater absorption of potassium.\n7) One Plus increases the shelf life of fruits and flowers and promotes vigorous growth of crops.",
    "1) Markus is a product made from natural extracts.\n2) Markus is used to control pinhole borer in tree trunks.\n3) The use of Markus helps in the early emergence of pinhole borer in the trunk.",
    "1) Delma Gold promotes the growth of microorganisms in the soil.\n2) Delma Gold promotes the growth of white roots, and increases the absorption of nutrients by the crop.\n3) Delma Gold increases the uptake of nutrients and improves the texture of the soil, thereby increasing the reproductive capacity.\n4) Delma Gold increases soil fertility and increases production significantly.",
    "1) The use of Vera improves the metabolism and photosynthesis of plants.\n2) The use of Vera helps in the production of IAA, GA etc. compounds in the crop.\n3) The use of Vera increases the quality of fruits. The size and shine of the fruits increase.",
    "Humates like fulvic and humic acids are extremely important for agriculture and plant life. These complex acids cannot be synthesized in the laboratory. Instead, humus develops over a long period of time through a natural cycle of growth and decay.\n• Increases crop weight and yield\n• Promotes important metabolic processes for improved performance across all growth metrics.\n• Improves the efficiency of nutrient utilization by increasing their bioavailability and facilitating their absorption and distribution throughout the plant.\n• Prevents carbonation and alkali build-up by acting as a pH buffer.\n• Supports beneficial microbes important in plant-microbe symbiosis\nDose : –1)Fulvic Acid 90% – 150 gm – 200 gm/Acre.",
    "Lito is a booster that increases the effectiveness of herbicides. The use of Lito gives rapid effect to the herbicide and completely destroys weeds even in rainy weather. Lito contains free nitrogen which acts as a carrier of herbicides.Due to which the herbicide is transported to the root of the weed quickly after spraying, thus destroying the weed quickly and protecting the crop.",
    "1) The use of Power Plus increases root flexibility and significantly boosts potassium levels.\n2) Using Power Plus enhances the size, weight, sweetness, color, and luster of the fruit.\n3) Power Plus increases sugar content and fruit weight, aids in the maturation of shoots, and promotes earlier flowering and fruit setting.\n4) Power Plus facilitates the absorption of micronutrients.\n5) The use of Power Plus enhances the plant's photosynthesis process, leading to vigorous growth.\n6) Power Plus enhances the cation and anion exchange capacity of plant roots; this accelerates the uptake of heavy elements like potassium, resulting in increased fruit size.\nAvailable packaging: 1 liter, 3 liters, and 5 liters.",
    "JEFHA MAX PRO is a universal dispersant that dissolves fertilizers completely without lumps, prevents nozzle, pipe and filter blockage, and ensures a uniform tank mixture. It saves time and labour, works for drip and foliar applications, and is compatible with NPK, MAP, MKP, SOP, MOP and other fertilizers.",
    "Zulema is a natural biostimulant containing a concentrated extract of seaweed, it is a foliar product that can be used on a variety of crops including fruits, trees, vegetables and field crops. It helps improve plant growth and development and it can help in crop production.It is a liquid formulation containing seaweed extract. The seaweed extract in Zulema is a complete and balanced blend of nutrients including amino acids, vitamins, minerals and growth regulators.\nFoliar spray:- Dissolve 2 ml in one liter of water.\nFirst spray:-Growing stage.\nSecond spray:-Flowering stage.\nThird spray:-Fruit development stage.\nFor drip application:-1 liter per acre",
    "• Using onion storage powder keeps onions fresh for 6 to 7 months or more.\n• This powder reduces the risk of sprouting, rotting or other problems in onions.\n• Using onion storage powder maintains the quality of the onion, meaning the appearance, color, and flavor of the onion remain intact.\n• The cost of onion storage is reduced, as the onion lasts longer and less onion spoils.\nQuantity:-10 kg for 150 bags (5 kg powder for 5000 kgonion)"
  ]
};
const withCatalogDescriptions = (slug: string, info: CatalogInfo[], descriptions = catalogDescriptionsFull[slug]) =>
  info.map((item, index) => ({ ...item, description: descriptions?.[index] }));

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
    range: ["MAX AZOS (Azospirillum)", "MAXRHIZO (Rhizobium)", "MAXAZO (Azotobacter)", "ULTRA POTASH (KMB)", "ULTRA PHOS (PSB)", "MAXMAZIC (NPK Consortia)", "MAXZINKA (ZSB)", "MAXSULFA (SSB)", "SHUGARSHINE (Acetobacter)", "MAXVAM (Mycorrhiza)", "TRICON (Trichoderma)", "MAX N-P-K (NPK Liquid Consortia)", "PSUMOTO", "MAXPACINO", "CORAL MYCORRHIZA"],
    rangeImages: productImages.bioFertilizers.filter((_, index) => index !== 14),
    catalogInfo: withCatalogDescriptions("bioFertilizers", catalogInfo.bioFertilizers.filter((_, index) => index !== 14)),
    highlights: ["Nitrogen, phosphate, potash, zinc and sulphur mobilization", "Root-zone microbial support for stronger crop growth", "Biological alternatives for improved nutrient availability"],
  },
  {
    slug: "micro-nutrients",
    title: "Micro-Nutrients",
    desc: "Water-soluble and suspension micronutrient products for correcting deficiencies and supporting crop quality.",
    img: productImages.microNutrients[0],
    catalog: "/assets/catalogs/micro-nutrients.docx",
    range: ["VERA GOLD COMBI (Powder)", "VERA GOLD DRIP (Powder)", "VERAZIN (Zinc 12%)", "VERABOR (Boron 20%)", "VERAFER (Ferrous 12%)", "VERA GOLD COMBI (Liquid)", "VERACAL", "TONICAL (Liquid Calcium 11%)", "TYSON-B10 (Boron Ethanol Amine 10%)", "TOKOZIN 70", "TYSIL (Orthosilicic Acid)", "VERA GOLD MAGNESIUM SULPHATE", "VERA GOLD SOIL", "VERA GOLD FEROUS SULPHATE", "VERA GOLD ZINC SULPHATE", "RUCO POTASH (Potash Derived From Rhodophyta)"],
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
  { length: 116 },
  (_, index) => `/assets/gallery/gallery-${String(index + 1).padStart(3, "0")}.jpeg`,
);

export const gallery = galleryImages;
