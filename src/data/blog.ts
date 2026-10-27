export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  intro: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "meesho-product-title-seo-guide",
    title: "How to Write Meesho Product Titles That Get Found and Clicked",
    description:
      "A practical guide to writing Meesho product titles, descriptions and attributes that match buyer searches and improve your listing visibility.",
    date: "2026-10-06",
    readTime: "7 min read",
    category: "Listings",
    intro:
      "Most Meesho buyers find products through search and category browsing. If your title and attributes do not match the words a buyer types, your product may never be shown, no matter how good the price is. This guide explains how to build titles that are clear for buyers and useful for the marketplace's search system.",
    sections: [
      {
        heading: "Why the title matters more than you think",
        paragraphs: [
          "On a mobile-first marketplace, buyers scan quickly. The first few words of a title appear in search results and decide whether someone taps your product or scrolls past it. At the same time, the words in your title and attributes help the platform understand what you are selling and which searches your product is relevant for.",
          "A weak title such as \"New Stylish Product Best Quality\" tells neither the buyer nor the search system anything useful. A strong title such as \"Women's Rayon Printed Straight Kurti with Pockets, Navy Blue\" answers the buyer's questions immediately: who it is for, what it is made of, what style it is and which colour it comes in.",
        ],
      },
      {
        heading: "A simple title formula that works",
        paragraphs: [
          "You do not need to stuff every keyword into the title. Use a consistent structure so every listing in your catalog is easy to read:",
        ],
        bullets: [
          "Who it is for: Women's, Men's, Kids', Baby, Unisex",
          "Material or key feature: Cotton, Rayon, Stainless Steel, Waterproof",
          "Product type: Kurti, Saree, Bedsheet, Water Bottle, Phone Cover",
          "Style or use: Printed, Embroidered, Anarkali, Double Bed, For Gym",
          "Variant detail: colour, size range or pack size (Pack of 2, 1 Litre)",
        ],
      },
      {
        heading: "Find the words buyers actually use",
        paragraphs: [
          "Sellers often describe products in factory language, while buyers search in everyday language. Type the start of your product name into the Meesho search bar and note the suggestions that appear. These suggestions reflect real search behaviour and are an excellent free source of keywords.",
          "Also look at the top-ranking listings in your category. You are not copying them; you are learning which terms are common. If every successful listing says \"Straight Kurti\" and you say \"Long Top\", you may be missing the most popular search phrase.",
        ],
      },
      {
        heading: "Fill every attribute honestly",
        paragraphs: [
          "Attributes such as fabric, pattern, sleeve length, occasion and size are used for filters. When a buyer filters for \"Cotton\" and \"Full Sleeve\", listings with missing attributes simply do not appear. Completing every relevant attribute is one of the easiest visibility wins available to a seller.",
          "Accuracy matters just as much as completeness. If you mark a polyester product as cotton, you may get the click but you will also get the return, the bad rating and the lost trust. Wrong attributes are one of the most common causes of \"product not as described\" returns.",
        ],
      },
      {
        heading: "Write descriptions that answer questions",
        paragraphs: [
          "Your description should reduce doubt. Mention measurements, fabric feel, wash care, what is included in the package and what is not. If a dupatta is not included, say so clearly. Short, scannable lines work better on mobile than long paragraphs.",
        ],
        bullets: [
          "Mention exact size measurements, not only S/M/L",
          "List package contents (for example: 1 kurti, no pant, no dupatta)",
          "Add care instructions such as hand wash or dry clean",
          "Avoid claims you cannot prove, such as \"100% original\" or \"best in India\"",
        ],
      },
      {
        heading: "Common title mistakes to avoid",
        paragraphs: [
          "Avoid ALL CAPS titles, repeated keywords, competitor brand names, emojis and promotional phrases like \"Sale\" or \"Lowest Price\". These make listings look spammy, can break marketplace content rules and rarely improve ranking. Keep it clean, specific and honest.",
          "Finally, review your titles every few weeks. Seasons change search behaviour. \"Woollen\" and \"Winter\" terms rise in November, while \"Cotton\" and \"Summer\" rise in March. Small, timely updates keep your catalog relevant all year.",
        ],
      },
    ],
  },
  {
    slug: "meesho-profit-calculation-guide",
    title: "Meesho Pricing Guide: How to Calculate Your Real Profit Per Order",
    description:
      "Learn how to price products on Meesho by including product cost, packaging, shipping, returns, ad spend and GST so you know your true profit.",
    date: "2026-10-10",
    readTime: "8 min read",
    category: "Pricing",
    intro:
      "Many sellers look at their sales numbers and feel successful, only to realise at the end of the month that very little money is left. The problem is usually pricing that ignores hidden costs. This guide walks through a simple way to calculate real profit per order before you set a price.",
    sections: [
      {
        heading: "Revenue is not profit",
        paragraphs: [
          "The amount a buyer pays is not the amount you keep. Between the selling price and your bank account sit several costs: the product itself, packaging, shipping, returns, advertising and taxes. Ignoring even one of these can turn a profitable-looking product into a loss-maker.",
          "Meesho has promoted a zero-commission model for sellers, which is a real advantage. However, zero commission does not mean zero cost. Always check the latest fee, shipping and penalty terms inside your Supplier Panel, because marketplace policies can change.",
        ],
      },
      {
        heading: "The costs you must include",
        paragraphs: ["Build a small sheet for every product and add these lines:"],
        bullets: [
          "Product cost: purchase or manufacturing cost per unit",
          "Packaging: polybag, box, tape, labels and filler material",
          "Shipping: forward shipping charge based on weight and package size",
          "Returns and RTO: the cost of products that come back, including reverse shipping and damaged units",
          "Advertising: average ad spend per order if you run campaigns",
          "GST and other taxes applicable to your category",
          "Overheads: labour, rent and electricity spread across monthly orders",
        ],
      },
      {
        heading: "A worked example",
        paragraphs: [
          "Imagine a kurti that costs you ₹220 to buy. Packaging costs ₹12. Suppose shipping for your package size works out to around ₹70. You run ads and spend about ₹15 per order on average. Out of every 100 orders, 15 are returned, and each return costs you roughly ₹90 in reverse shipping and damage. That is ₹13.50 per order when spread across all orders.",
          "Your total cost per delivered order is about 220 + 12 + 70 + 15 + 13.5 = ₹330.50 before tax and overheads. If you price this kurti at ₹349, your margin is very thin. If you price it at ₹399, you have room to breathe. These numbers are only an illustration; use your own figures from your settlement reports.",
        ],
      },
      {
        heading: "Find your lowest safe price",
        paragraphs: [
          "Your lowest safe price is the price at which you break even after every cost. Never go below it, even during a price war. If a competitor sells far below your safe price, they may be using cheaper material, ignoring returns in their calculation, or clearing old stock. Matching them blindly is how sellers lose money on every order.",
          "Once you know the safe price, add your target profit on top. Many small sellers aim for a margin that still leaves profit even if return rates rise by a few percentage points during the season.",
        ],
      },
      {
        heading: "Reduce shipping cost through packaging",
        paragraphs: [
          "Shipping charges usually depend on weight and package dimensions. A slightly smaller box or a well-folded polybag can move your product into a lower shipping slab. Weigh your packed product, try two or three packaging options, and compare the shipping charge shown for each. Small savings per order add up quickly across hundreds of orders.",
        ],
      },
      {
        heading: "Review prices every month",
        paragraphs: [
          "Costs move. Raw material prices change, shipping rules get updated and return rates shift with seasons. Download your payment and return reports every month and recalculate your per-order profit for your top products. A simple monthly review protects your margin far better than guessing.",
        ],
      },
    ],
  },
  {
    slug: "reduce-returns-rto-meesho",
    title: "How to Reduce Returns and RTO on Meesho: 10 Practical Steps",
    description:
      "Returns and RTO quietly destroy seller profit. Learn ten practical ways to reduce customer returns and undelivered orders on Meesho.",
    date: "2026-10-14",
    readTime: "7 min read",
    category: "Operations",
    intro:
      "For many fashion and home sellers, returns are the single biggest profit leak. Every returned order means lost shipping, possible product damage and blocked inventory. The good news is that a large share of returns can be prevented with better listings, packaging and quality control.",
    sections: [
      {
        heading: "Understand the two types of returns",
        paragraphs: [
          "A customer return happens when a buyer receives the product and sends it back, usually because of size, quality, colour difference or a change of mind. RTO (return to origin) happens when the order is never delivered, for example because the buyer refused it, was unavailable or gave a wrong address.",
          "These problems have different causes, so they need different solutions. Start by downloading your return report and grouping returns by reason. You will often find that two or three reasons cause most of your losses.",
        ],
      },
      {
        heading: "Fix the listing first",
        paragraphs: [
          "Most \"not as expected\" returns start with the listing. If your images make a fabric look shinier than it is, or your size chart is missing, buyers fill the gaps with their own assumptions.",
        ],
        bullets: [
          "1. Use real product photos in natural light, so the colour matches what arrives",
          "2. Add a clear size chart with measurements in inches and centimetres",
          "3. Show close-up images of fabric, stitching and print quality",
          "4. State package contents clearly to avoid \"item missing\" complaints",
        ],
      },
      {
        heading: "Improve quality control before dispatch",
        paragraphs: [
          "Damaged, stained or wrong-size products almost always come back. A short checklist before packing can prevent this.",
        ],
        bullets: [
          "5. Check every unit for stains, loose threads and damage",
          "6. Match the size and colour on the label with the order before sealing",
          "7. Use packaging strong enough to survive transit without crushing",
        ],
      },
      {
        heading: "Reduce RTO with smart choices",
        paragraphs: [
          "RTO is often linked to impulse orders, unrealistic delivery expectations or very low-priced products that buyers forget about. While you cannot control every buyer, you can reduce risk.",
        ],
        bullets: [
          "8. Dispatch quickly; long delays increase order refusals",
          "9. Watch RTO rates by product and pause items with consistently high RTO",
          "10. Avoid misleading discounts that create impulse orders buyers later refuse",
        ],
      },
      {
        heading: "Track progress every week",
        paragraphs: [
          "Choose your top ten products and track their return rate weekly. When you change images, sizing or packaging, note the date so you can see whether the change helped. Over a few months, even a five-point drop in return rate can make a large difference to your profit.",
          "Remember to handle returned stock carefully too. Inspect every returned item, repack good-condition products for resale and raise claims through the official seller support process when you receive a wrong or damaged return.",
        ],
      },
    ],
  },
  {
    slug: "product-photography-for-meesho-sellers",
    title: "Product Photography for Meesho Sellers: Better Images on a Small Budget",
    description:
      "Simple, low-cost photography tips to create clean, accurate product images for Meesho using only a smartphone and natural light.",
    date: "2026-10-18",
    readTime: "6 min read",
    category: "Images",
    intro:
      "On a marketplace, the image is the product. Buyers cannot touch the fabric or check the finish, so they rely entirely on what your photos show. You do not need an expensive studio. A modern smartphone, natural light and a few simple habits are enough to create images that build trust.",
    sections: [
      {
        heading: "Start with light, not the camera",
        paragraphs: [
          "Natural daylight from a window is the best free light source. Place the product near a large window, avoid direct harsh sunlight, and shoot during the day. Turn off yellow room lights, because mixing light sources changes colours and leads to \"colour different from image\" returns.",
          "If you shoot often, a pair of affordable LED panels with a daylight colour temperature gives consistent results regardless of weather.",
        ],
      },
      {
        heading: "Use a clean background",
        paragraphs: [
          "A plain white or light grey background keeps attention on the product. A white chart paper sheet curved from the wall to the table creates a seamless backdrop for small items. For clothing, a clean wall or a simple mannequin works well.",
        ],
      },
      {
        heading: "The image set every listing needs",
        paragraphs: ["Plan a consistent set of images for each product so buyers find answers quickly:"],
        bullets: [
          "Front view on a clean background as the main image",
          "Back and side views",
          "Close-up of fabric, texture, stitching or material",
          "Product in use or worn, to show scale and fit",
          "Size chart or dimension image",
          "Package contents image, if multiple items are included",
        ],
      },
      {
        heading: "Keep images honest",
        paragraphs: [
          "Editing should improve clarity, not change reality. Adjust brightness and crop neatly, but do not over-saturate colours or use filters that make a product look premium when it is not. Inaccurate images may increase clicks in the short term, but they raise returns and damage ratings in the long term.",
          "Never use photos copied from other sellers, brands or websites. Besides being unfair, it can violate copyright and marketplace policies, and buyers can often tell when an image does not match the product they receive.",
        ],
      },
      {
        heading: "Think about shipping while you photograph",
        paragraphs: [
          "Photograph the product exactly as it will be shipped when you create package-content images. This is also a good moment to test folding and packaging, because a more compact package can reduce your shipping cost.",
          "With a repeatable setup, you can photograph a new product in minutes and keep your entire catalog looking consistent and professional.",
        ],
      },
    ],
  },
  {
    slug: "meesho-ads-beginners-guide",
    title: "Meesho Ads for Beginners: How to Run Campaigns Without Wasting Money",
    description:
      "A beginner-friendly guide to planning, launching and measuring Meesho ad campaigns, including budget setting, product selection and ROAS.",
    date: "2026-10-22",
    readTime: "7 min read",
    category: "Advertising",
    intro:
      "Advertising can push a good product in front of more buyers, but it can also burn money quickly if used on the wrong products. This guide explains how beginners can approach marketplace ads in a careful, measurable way.",
    sections: [
      {
        heading: "Fix the product before you advertise it",
        paragraphs: [
          "Ads send traffic; they do not fix a weak listing. Before you spend on a product, make sure the title is clear, images are accurate, attributes are complete, the price is competitive and the rating is healthy. If buyers click and do not purchase, you are paying for visits that never convert.",
        ],
      },
      {
        heading: "Choose the right products to promote",
        paragraphs: ["Start with products that already show some organic demand:"],
        bullets: [
          "Products that already receive orders without ads",
          "Products with good ratings and low return rates",
          "Products with enough margin to absorb ad cost",
          "Products with enough stock to handle a sudden rise in orders",
        ],
      },
      {
        heading: "Understand the key numbers",
        paragraphs: [
          "Return on ad spend (ROAS) compares the revenue generated by ads with what you spent. If you spend ₹1,000 and get ₹5,000 in ad-attributed sales, your ROAS is 5. But ROAS alone can mislead. A product with a thin margin may lose money even at a decent ROAS, so always compare ad cost per order with the profit per order from your pricing sheet.",
          "Also watch click-through rate and conversion. A low click-through rate suggests the main image or price is not attractive. A good click-through rate with low conversion suggests the listing page, reviews or price is not convincing buyers.",
        ],
      },
      {
        heading: "Start small and scale slowly",
        paragraphs: [
          "Begin with a modest daily budget on a handful of products and let campaigns run long enough to collect meaningful data, usually at least a week. Increase budget gradually on products with profitable results and pause products that keep spending without orders.",
          "Avoid changing many settings at once. If you change price, images and budget on the same day, you will not know which change caused the result.",
        ],
      },
      {
        heading: "Review weekly, not hourly",
        paragraphs: [
          "Daily fluctuations are normal. Set a fixed weekly review: check spend, orders, ROAS and profit per order for each promoted product. Keep a simple log of the decisions you make. Over time, this habit turns advertising from guesswork into a repeatable system.",
          "Always follow the advertising terms published in your seller dashboard, because available campaign types, bidding options and reporting can change over time.",
        ],
      },
    ],
  },
  {
    slug: "festival-season-selling-plan-meesho",
    title: "Festival Season Selling Plan for Meesho Sellers: Inventory, Pricing and Timing",
    description:
      "Prepare for Diwali, wedding season and other peak periods with a step-by-step plan for inventory, pricing, listings and dispatch on Meesho.",
    date: "2026-10-26",
    readTime: "8 min read",
    category: "Growth",
    intro:
      "Festival seasons bring the highest demand of the year for many categories, from ethnic wear and home décor to gifting and kitchen products. Sellers who prepare early capture this demand, while sellers who react late often run out of stock or sell at a loss. Here is a practical plan.",
    sections: [
      {
        heading: "Plan six to eight weeks ahead",
        paragraphs: [
          "Buyers start browsing well before the festival date, and the platform needs time to understand and rank new listings. Upload festival products early, collect a few orders and reviews, and let them gain visibility before peak days arrive.",
        ],
      },
      {
        heading: "Pick products using last year's data",
        paragraphs: [
          "Look at your sales reports from the same period last year. Which products sold fastest? Which sizes and colours ran out? Which products were returned the most? This data is the best guide for what to stock this year.",
          "If you are new, study the category: look for festive keywords in the search bar suggestions and note which styles appear repeatedly in popular listings.",
        ],
      },
      {
        heading: "Stock smartly, not heavily",
        paragraphs: [
          "Overstocking is as dangerous as running out. Unsold festive stock can become dead inventory for a full year. Order your best sellers deeper, test new designs in smaller quantities and keep a reorder plan with your supplier for fast restocking.",
        ],
        bullets: [
          "Calculate average daily orders for each product",
          "Estimate the festival uplift based on past seasons",
          "Add a safety buffer for supplier delays",
          "Set a clear cut-off date after which you stop reordering festive-only items",
        ],
      },
      {
        heading: "Price with your margin protected",
        paragraphs: [
          "Festive demand can tempt sellers into deep discounts. Before joining any sale or reducing prices, revisit your profit sheet and make sure your festival price stays above your lowest safe price. Remember that return rates and shipping volumes can also rise during peak season.",
        ],
      },
      {
        heading: "Prepare operations for the rush",
        paragraphs: [
          "Peak days test your dispatch capacity. Pre-pack fast-moving items, keep packaging material in stock, and arrange extra hands if needed. Late dispatch during festivals can affect your seller performance and increase cancellations.",
        ],
        bullets: [
          "Stock up on packaging material before suppliers get busy",
          "Pre-print size and product labels for top sellers",
          "Fix a daily dispatch cut-off time and stick to it",
          "Keep a quality check step even when you are busy",
        ],
      },
      {
        heading: "Review after the season",
        paragraphs: [
          "When the season ends, record what worked: best-selling products, stock-outs, return rates and profit per product. These notes become your plan for next year and help you start the next festival season with confidence.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
