const PRODUCTS = [
  {
    "name": "SAP MATTY (Mars Knit)",
    "desc": "Soft-textured, matte-finish polyester knit using full-dull microfiber yarn.",
    "features": [
      "Breathable",
      "Durable",
      "Moisture-wicking",
      "Colour fast",
      "Versatile"
    ],
    "applications": [
      "Polos",
      "Sportswear",
      "Uniforms"
    ],
    "composition": "100% Polyester (Full Dull Micro Poly)",
    "img": "https://via.placeholder.com/800x500?text=SAP+Matty",
    "tags": [
      "Polyester",
      "Matte",
      "Sportswear",
      "Uniforms"
    ],
    "slug": "sap-matty-mars-knit"
  },
  {
    "name": "Spun Honeycomb",
    "desc": "Honeycomb structure knit that enhances airflow and heat dissipation.",
    "features": [
      "Lightweight",
      "Strong",
      "Excellent air circulation"
    ],
    "applications": [
      "Sportswear"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=Spun+Honeycomb",
    "tags": [
      "Polyester",
      "Breathable",
      "Sportswear"
    ],
    "slug": "spun-honeycomb"
  },
  {
    "name": "Spun P.Knit",
    "desc": "Soft, breathable knit made from spun polyester yarn—great for comfort wear.",
    "features": [
      "Soft & Comfortable",
      "Durable",
      "Breathable"
    ],
    "applications": [
      "T-shirts & Polos",
      "Leggings & Track Pants",
      "Loungewear"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=Spun+P.Knit",
    "tags": [
      "Polyester",
      "Everyday",
      "Tops",
      "Bottoms"
    ],
    "slug": "spun-p-knit"
  },
  {
    "name": "Spun Sinker",
    "desc": "Soft, durable, breathable fabric made using sinker knitting machines.",
    "features": [
      "Moisture absorbent",
      "Air permeable",
      "Soft & Comfortable",
      "Durable"
    ],
    "applications": [
      "T-shirts & Polos",
      "Track Pants & Leggings",
      "Innerwear & Uniforms",
      "Light Home Textiles"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=Spun+Sinker",
    "tags": [
      "Polyester",
      "Breathable",
      "Everyday"
    ],
    "slug": "spun-sinker"
  },
  {
    "name": "SAP Waffle",
    "desc": "Full dull polyester knit with a waffle texture, matte appearance & high absorbency.",
    "features": [
      "Matte finish",
      "Highly absorbent",
      "Good air circulation",
      "Shrink-resistant",
      "Non-shiny"
    ],
    "applications": [
      "T-shirts",
      "Activewear",
      "Towels & Bathrobes"
    ],
    "composition": "100% Polyester (Full Dull)",
    "img": "https://via.placeholder.com/800x500?text=SAP+Waffle",
    "tags": [
      "Polyester",
      "Waffle",
      "Home Textiles",
      "Activewear"
    ],
    "slug": "sap-waffle"
  },
  {
    "name": "Mini Waffle",
    "desc": "Fine, 3D-textured waffle knit with lightweight and quick-dry performance.",
    "features": [
      "Enhanced absorbency",
      "Quick drying",
      "Lightweight",
      "Good air circulation"
    ],
    "applications": [
      "Activewear",
      "Loungewear",
      "Home Textiles",
      "T-shirts"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=Mini+Waffle",
    "tags": [
      "Polyester",
      "Waffle",
      "Activewear"
    ],
    "slug": "mini-waffle"
  },
  {
    "name": "Dot Knit (Full Dull)",
    "desc": "Matte dotted-knit fabric offering comfort, easy care, and good airflow.",
    "features": [
      "Full dull finish",
      "Moisture-wicking",
      "Wrinkle resistant",
      "Easy care"
    ],
    "applications": [
      "Activewear",
      "Dresses",
      "Fashion Accessories",
      "T-shirts"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=Dot+Knit",
    "tags": [
      "Polyester",
      "Matte",
      "Activewear",
      "Fashion"
    ],
    "slug": "dot-knit-full-dull"
  },
  {
    "name": "Micro Dot Knit",
    "desc": "Micro-dotted textured polyester knit with shiny finish and high durability.",
    "features": [
      "Shiny finish",
      "Lightweight",
      "Breathable",
      "Durable"
    ],
    "applications": [
      "Sportswear",
      "Apparel",
      "Clothing"
    ],
    "composition": "100% Polyester (Micro Yarn)",
    "img": "https://via.placeholder.com/800x500?text=Micro+Dot+Knit",
    "tags": [
      "Polyester",
      "Shiny",
      "Sportswear"
    ],
    "slug": "micro-dot-knit"
  },
  {
    "name": "Rice Knit",
    "desc": "Rice-grain textured knit with moisture wicking and superior durability.",
    "features": [
      "Soft texture",
      "Attractive appearance",
      "Moisture wicking",
      "Durable",
      "Easy Care"
    ],
    "applications": [
      "Sportswear",
      "Activewear",
      "Casual wear"
    ],
    "composition": "100% Polyester (Micro Yarn)",
    "img": "https://via.placeholder.com/800x500?text=Rice+Knit",
    "tags": [
      "Polyester",
      "Textured",
      "Activewear"
    ],
    "slug": "rice-knit"
  },
  {
    "name": "Micro P.P.",
    "desc": "Lightweight polypropylene knit with matte finish and fast-drying nature.",
    "features": [
      "Soft & Comfortable",
      "Lightweight",
      "Quick drying",
      "Chemical resistant"
    ],
    "applications": [
      "Activewear",
      "Casual Wear",
      "Sportswear",
      "T-shirts"
    ],
    "composition": "100% Polypropylene",
    "img": "https://via.placeholder.com/800x500?text=Micro+PP",
    "tags": [
      "Polypropylene",
      "Quick Dry",
      "Activewear"
    ],
    "slug": "micro-p-p"
  },
  {
    "name": "Zig Zag",
    "desc": "Distinctive zig-zag textured knit made using full dull yarn for a premium cotton-like feel.",
    "features": [
      "Soft matte cotton-like feel",
      "High tensile strength",
      "Good stretch & flexibility",
      "Retains colour well"
    ],
    "applications": [
      "Athletic & Activewear",
      "Home Textiles"
    ],
    "composition": "100% Polyester (Full Dull)",
    "img": "https://via.placeholder.com/800x500?text=Zig+Zag",
    "tags": [
      "Polyester",
      "Matte",
      "Textured",
      "Activewear"
    ],
    "slug": "zig-zag"
  },
  {
    "name": "Kit Kat",
    "desc": "Popular textured knit construction known for durability and a unique structured feel.",
    "features": [
      "High strength",
      "Moisture wicking",
      "Anti-bacterial & anti-pilling",
      "Eco friendly"
    ],
    "applications": [
      "Sportswear",
      "Athleisure",
      "T-shirts",
      "Tops"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=Kit+Kat",
    "tags": [
      "Polyester",
      "Sportswear",
      "Athleisure"
    ],
    "slug": "kit-kat"
  },
  {
    "name": "Milano",
    "desc": "Fine vertical ribbed structure with diagonal reverse, offering strength and UV protection.",
    "features": [
      "Strong & resilient",
      "Wrinkle & shrink resistant",
      "UV protection"
    ],
    "applications": [
      "Activewear",
      "Home Textiles",
      "Uniforms"
    ],
    "composition": "100% Polyester (Full Dull)",
    "img": "https://via.placeholder.com/800x500?text=Milano",
    "tags": [
      "Polyester",
      "UV Protection",
      "Uniforms"
    ],
    "slug": "milano"
  },
  {
    "name": "Valencia",
    "desc": "Full dull textured knit offering a natural feel with great elasticity and strong covering.",
    "features": [
      "Matte finish",
      "Good elasticity",
      "Strong covering",
      "Visually appealing"
    ],
    "applications": [
      "Apparel",
      "Home Textiles",
      "Technical Textiles"
    ],
    "composition": "100% Polyester (Full Dull)",
    "img": "https://via.placeholder.com/800x500?text=Valencia",
    "tags": [
      "Polyester",
      "Matte",
      "Apparel"
    ],
    "slug": "valencia"
  },
  {
    "name": "Towel Knit",
    "desc": "Loop-structured knit with excellent absorbency and soft matte finish.",
    "features": [
      "High strength",
      "Soft & comfortable",
      "Versatile",
      "Good drape"
    ],
    "applications": [
      "Towels",
      "Bathrobes",
      "Sportswear & Activewear"
    ],
    "composition": "100% Polyester (Full Dull)",
    "img": "https://via.placeholder.com/800x500?text=Towel+Knit",
    "tags": [
      "Polyester",
      "Loops",
      "Home Textiles"
    ],
    "slug": "towel-knit"
  },
  {
    "name": "Crochet Knit",
    "desc": "Soft matte-textured knit made using a crochet-like interlocking loop structure.",
    "features": [
      "Soft",
      "Good drape",
      "High tenacity"
    ],
    "applications": [
      "Activewear",
      "Home Textiles"
    ],
    "composition": "100% Polyester (Full Dull)",
    "img": "https://via.placeholder.com/800x500?text=Crochet+Knit",
    "tags": [
      "Polyester",
      "Matte",
      "Textured"
    ],
    "slug": "crochet-knit"
  },
  {
    "name": "Owl Knit",
    "desc": "Specialty knit featuring an owl-inspired pattern with matte cotton-like appearance.",
    "features": [
      "Soft texture",
      "Cotton-like look",
      "High strength",
      "Breathable"
    ],
    "applications": [
      "Activewear",
      "Casual T-shirts"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=Owl+Knit",
    "tags": [
      "Polyester",
      "Pattern",
      "Casual"
    ],
    "slug": "owl-knit"
  },
  {
    "name": "Popcorn Knit",
    "desc": "Raised bumpy knit texture providing natural stretch, breathability, and durability.",
    "features": [
      "Soft hand feel",
      "Natural stretch",
      "Low maintenance",
      "Lightweight & breathable"
    ],
    "applications": [
      "Activewear",
      "Sportswear",
      "Loungewear"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=Popcorn+Knit",
    "tags": [
      "Polyester",
      "Textured",
      "Loungewear"
    ],
    "slug": "popcorn-knit"
  },
  {
    "name": "Sarina",
    "desc": "Lightweight, colourfast polyester fabric with excellent durability.",
    "features": [
      "Lightweight",
      "Colourfast",
      "Wrinkle resistant",
      "Durable"
    ],
    "applications": [
      "Activewear",
      "Clothing",
      "Home Decor"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=Sarina",
    "tags": [
      "Polyester",
      "Lightweight",
      "Home Decor"
    ],
    "slug": "sarina"
  },
  {
    "name": "Nirmal",
    "desc": "High-quality plain knit fabric known for softness, moisture management, and durability.",
    "features": [
      "Soft & Comfortable",
      "Moisture management",
      "Lightweight & durable",
      "Wrinkle resistant",
      "Easy care"
    ],
    "applications": [
      "Apparel",
      "Clothing",
      "Sportswear"
    ],
    "composition": "100% Micro Poly Yarn",
    "img": "https://via.placeholder.com/800x500?text=Nirmal",
    "tags": [
      "Polyester",
      "Plain",
      "Everyday"
    ],
    "slug": "nirmal"
  },
  {
    "name": "Football Knit",
    "desc": "Performance knit for athletic jerseys with moisture control and odor resistance.",
    "features": [
      "Soft & comfortable",
      "Moisture management",
      "Odour control",
      "Durable & wrinkle resistant",
      "Easy care"
    ],
    "applications": [
      "Football Jerseys",
      "Sports Uniforms"
    ],
    "composition": "100% Micro Poly Yarn",
    "img": "https://via.placeholder.com/800x500?text=Football+Knit",
    "tags": [
      "Polyester",
      "Sportswear",
      "Uniforms"
    ],
    "slug": "football-knit"
  },
  {
    "name": "PC Tencel",
    "desc": "Blended fabric combining polyester and cotton for comfort, durability, and temperature regulation.",
    "features": [
      "Pleasant to skin",
      "Moisture wicking",
      "Body temperature regulation",
      "Wrinkle resistant",
      "Low maintenance"
    ],
    "applications": [
      "Activewear",
      "Lowers"
    ],
    "composition": "Poly + Cotton Blend",
    "img": "https://via.placeholder.com/800x500?text=PC+Tencel",
    "tags": [
      "Blend",
      "Comfort",
      "Everyday"
    ],
    "slug": "pc-tencel"
  },
  {
    "name": "PC Birdeye",
    "desc": "Birdeye-knit structure featuring tiny dot patterns, offering breathability and durability.",
    "features": [
      "Pleasant to skin",
      "Moisture wicking",
      "Breathable & lightweight",
      "Durable"
    ],
    "applications": [
      "Activewear",
      "Sportswear",
      "Uniforms"
    ],
    "composition": "Poly + Cotton Blend",
    "img": "https://via.placeholder.com/800x500?text=PC+Birdeye",
    "tags": [
      "Blend",
      "Breathable",
      "Uniforms"
    ],
    "slug": "pc-birdeye"
  },
  {
    "name": "PC Interlock",
    "desc": "Thick, stable double-knit fabric offering smooth feel on both sides with great flexibility.",
    "features": [
      "Thicker & stable",
      "Soft & comfortable",
      "Good air circulation",
      "Wrinkle resistant"
    ],
    "applications": [
      "Hoodies",
      "Underwear",
      "Sportswear",
      "Sleepwear"
    ],
    "composition": "Poly + Cotton Blend",
    "img": "https://via.placeholder.com/800x500?text=PC+Interlock",
    "tags": [
      "Blend",
      "Double Knit",
      "Warm"
    ],
    "slug": "pc-interlock"
  },
  {
    "name": "PC Sinker",
    "desc": "Smooth, firm-textured fabric made using sinker knitting with a soft & flexible feel.",
    "features": [
      "Soft & gentle",
      "Strong & resilient",
      "Good flexibility"
    ],
    "applications": [
      "T-shirts & Tops",
      "Lowers",
      "Activewear",
      "Night suits",
      "School uniforms"
    ],
    "composition": "Poly + Cotton Blend",
    "img": "https://via.placeholder.com/800x500?text=PC+Sinker",
    "tags": [
      "Blend",
      "Everyday",
      "Uniforms"
    ],
    "slug": "pc-sinker"
  },
  {
    "name": "PC Pique",
    "desc": "Textured knit fabric with a waffle or honeycomb-like appearance ideal for polos & uniforms.",
    "features": [
      "Comfortable",
      "Moisture wicking",
      "Shape retaining"
    ],
    "applications": [
      "Uniforms",
      "Polo Shirts",
      "Sportswear"
    ],
    "composition": "Poly + Cotton Blend",
    "img": "https://via.placeholder.com/800x500?text=PC+Pique",
    "tags": [
      "Blend",
      "Pique",
      "Uniforms"
    ],
    "slug": "pc-pique"
  },
  {
    "name": "Airjet Sinker",
    "desc": "Polyester blend fabric combining airjet and sinker knitting for comfort and durability.",
    "features": [
      "Soft & comfortable",
      "Durable",
      "Breathable",
      "Colourfast & anti-bubbling"
    ],
    "applications": [
      "Nightsuits",
      "T-shirts",
      "Uniforms"
    ],
    "composition": "Airjet + Spun Yarn Blend",
    "img": "https://via.placeholder.com/800x500?text=Airjet+Sinker",
    "tags": [
      "Blend",
      "Airjet",
      "Everyday"
    ],
    "slug": "airjet-sinker"
  },
  {
    "name": "Airjet Matty",
    "desc": "Textured matty weave combined with airjet yarn for strong, breathable knit structure.",
    "features": [
      "3D textured surface",
      "Resistant to pilling",
      "Moisture absorbent",
      "Easy care"
    ],
    "applications": [
      "T-shirts",
      "School & Corporate Uniforms",
      "Activewear",
      "Sportswear"
    ],
    "composition": "Airjet + Spun Yarn Blend",
    "img": "https://via.placeholder.com/800x500?text=Airjet+Matty",
    "tags": [
      "Blend",
      "Matty",
      "Uniforms"
    ],
    "slug": "airjet-matty"
  },
  {
    "name": "Loop Knit",
    "desc": "Knit fabric featuring looped texture with great shape retention and quick drying.",
    "features": [
      "Unique textured look",
      "Soft & comfortable",
      "Maintains elasticity",
      "Quick drying"
    ],
    "applications": [
      "T-shirts",
      "Track pants",
      "Joggers",
      "Hoodies",
      "Sportswear"
    ],
    "composition": "Airjet + Spun Yarn Blend",
    "img": "https://via.placeholder.com/800x500?text=Loop+Knit",
    "tags": [
      "Blend",
      "Loops",
      "Activewear"
    ],
    "slug": "loop-knit"
  },
  {
    "name": "Russian Fleece",
    "desc": "Warm, soft, insulating fleece made for cold-weather activewear and winter clothing.",
    "features": [
      "Soft & warm",
      "Moisture wicking",
      "Durable"
    ],
    "applications": [
      "Jackets",
      "Sportswear",
      "Blankets"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=Russian+Fleece",
    "tags": [
      "Polyester",
      "Fleece",
      "Warm"
    ],
    "slug": "russian-fleece"
  },
  {
    "name": "Spun Fleece",
    "desc": "Cozy, lightweight fleece knit from spun polyester offering softness and breathable warmth.",
    "features": [
      "Warm & lightweight",
      "Soft & comfortable",
      "Breathable",
      "Durable"
    ],
    "applications": [
      "Jackets",
      "Sweatshirts",
      "Blankets"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=Spun+Fleece",
    "tags": [
      "Polyester",
      "Fleece",
      "Warm"
    ],
    "slug": "spun-fleece"
  },
  {
    "name": "PC Fleece",
    "desc": "Cotton-poly blend fleece combining the softness of cotton with the durability of polyester.",
    "features": [
      "Warm",
      "Soft & comfortable",
      "Versatile",
      "Durable"
    ],
    "applications": [
      "Loungewear",
      "Activewear",
      "Blankets"
    ],
    "composition": "Polyester + Cotton Blend",
    "img": "https://via.placeholder.com/800x500?text=PC+Fleece",
    "tags": [
      "Blend",
      "Fleece",
      "Warm"
    ],
    "slug": "pc-fleece"
  },
  {
    "name": "SAP Fleece",
    "desc": "Synthetic artificial polyester fleece offering superior warmth with breathable comfort.",
    "features": [
      "Warm & insulating",
      "Moisture wicking",
      "Breathable",
      "Durable"
    ],
    "applications": [
      "Hoodies",
      "Sweatshirts",
      "Blankets"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=SAP+Fleece",
    "tags": [
      "Polyester",
      "Fleece",
      "Warm"
    ],
    "slug": "sap-fleece"
  },
  {
    "name": "Thermal",
    "desc": "Soft, lightweight thermal knit designed for warmth, layering, and outdoor usage.",
    "features": [
      "Warm & lightweight",
      "Quick drying",
      "Breathable"
    ],
    "applications": [
      "Vests",
      "Blankets",
      "Linings",
      "Outdoor wear"
    ],
    "composition": "100% Polyester",
    "img": "https://via.placeholder.com/800x500?text=Thermal",
    "tags": [
      "Polyester",
      "Thermal",
      "Warm"
    ],
    "slug": "thermal"
  },
  {
    "name": "Airjet Print",
    "desc": "Printed airjet-spun knit offering smooth feel, vibrant prints, and long-lasting comfort.",
    "features": [
      "Smooth texture",
      "Colourfast printing",
      "Breathable",
      "Durable"
    ],
    "applications": [
      "T-shirts",
      "Fashion wear",
      "Kidswear"
    ],
    "composition": "Airjet Yarn Blend",
    "img": "https://via.placeholder.com/800x500?text=Airjet+Print",
    "tags": [
      "Blend",
      "Printed",
      "Fashion"
    ],
    "slug": "airjet-print"
  },
  {
    "name": "Rib",
    "desc": "Stretchy, elastic rib-knit commonly used for collars, cuffs, waistbands, and fitted garments.",
    "features": [
      "Excellent elasticity",
      "Durable",
      "Soft feel",
      "Shape retaining"
    ],
    "applications": [
      "Cuffs & Collars",
      "Waistbands",
      "T-shirts",
      "Kidswear"
    ],
    "composition": "Polyester / Cotton / Spandex Blends",
    "img": "https://via.placeholder.com/800x500?text=Rib",
    "tags": [
      "Rib",
      "Elastic",
      "Trims"
    ],
    "slug": "rib"
  },
  {
    "name": "Cali Knit",
    "desc": "Premium structured knit known for its rich texture and comfortable drape.",
    "features": [
      "Soft & comfortable",
      "Good drape",
      "Durable"
    ],
    "applications": [
      "Apparel",
      "Activewear",
      "Fashion wear"
    ],
    "composition": "Various Blends (Poly / Cotton)",
    "img": "https://via.placeholder.com/800x500?text=Cali+Knit",
    "tags": [
      "Blend",
      "Premium",
      "Fashion"
    ],
    "slug": "cali-knit"
  },
  {
    "name": "Seer Sucker",
    "desc": "Puckered textured knit offering lightweight comfort and excellent airflow.",
    "features": [
      "Puckered texture",
      "Lightweight",
      "Breathable",
      "Wrinkle resistant"
    ],
    "applications": [
      "Summer wear",
      "Shirts",
      "Fashion garments"
    ],
    "composition": "Polyester / Cotton Blends",
    "img": "https://via.placeholder.com/800x500?text=Seer+Sucker",
    "tags": [
      "Blend",
      "Lightweight",
      "Breathable"
    ],
    "slug": "seer-sucker"
  },
  {
    "name": "Other Fabrics",
    "desc": "Additional specialty knits and textures suitable for varied garment and textile applications.",
    "features": [
      "Novelty knits",
      "Seasonal releases",
      "Special rib variants",
      "Additional airjet designs"
    ],
    "applications": [
      "Varied garment uses"
    ],
    "composition": "Various blends based on fabric type",
    "img": "https://via.placeholder.com/800x500?text=Other+Fabrics",
    "tags": [
      "Misc",
      "Special"
    ],
    "slug": "other-fabrics"
  }
];

// --- DOM refs ---
const grid = document.querySelector('.grid');
const q = document.querySelector('#search');
const filterBox = document.querySelector('.chips');

// Build filter chips from tags
const tagSet = new Set();
PRODUCTS.forEach(p => (p.tags||[]).forEach(t => tagSet.add(t)));
const tags = Array.from(tagSet).sort();

function chip(t){return `<label><input type="checkbox" value="${t}"> ${t}</label>`}
filterBox.innerHTML = tags.map(chip).join('');

function render(list){
  grid.innerHTML = list.map(p => `
    <div class="product-card">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="desc">${p.desc}</p>
      <h4>Key Characteristics:</h4>
      <ul>${(p.features||[]).map(f=>`<li>${f}</li>`).join('')}</ul>
      <h4>Applications:</h4>
      <ul>${(p.applications||[]).map(a=>`<li>${a}</li>`).join('')}</ul>
      <p class="comp"><strong>Composition:</strong> ${p.composition}</p>
      <div class="badges">${(p.tags||[]).map(t=>`<span>${t}</span>`).join('')}</div>
      <div style="margin-top:10px">
        <a class="btn" href="./products/${p.slug}.html">View details</a>
      </div>
    </div>
  `).join('');
}

function activeTags(){
  return Array.from(document.querySelectorAll('.chips input:checked')).map(i=>i.value);
}

function matches(p, query, tags){
  const text = (p.name + ' ' + p.desc + ' ' + (p.features||[]).join(' ') + ' ' + (p.applications||[]).join(' ') + ' ' + (p.tags||[]).join(' ')).toLowerCase();
  const qok = !query || text.includes(query.toLowerCase());
  const tok = tags.length===0 || tags.every(t => (p.tags||[]).includes(t));
  return qok && tok;
}

function applyFilters(){
  const list = PRODUCTS.filter(p => matches(p, q.value.trim(), activeTags()));
  render(list);
}

q.addEventListener('input', applyFilters);
filterBox.addEventListener('change', applyFilters);

// Init
render(PRODUCTS);