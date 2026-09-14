// src/data/caseStudiesData.js
// Case study data compiled from Web Smile India's client portfolio.
// Each entry: id, name, industry (tagline under the name), categories
// (any of 'seo' | 'ads' | 'social'), description, stats (varies by
// category — SEO clients get keyword stats, Ads clients get campaign
// stats), and `images` — an array of screenshot paths for that client.
//
// Images live in /public/images/case-studies/ — copy the downloaded
// "case-studies-images" folder there so these paths resolve. Pure-SEO
// clients (Parkshala, MDC, Jaybee, FMT, Creature Companion, Metacorp)
// have no screenshots in the source deck, so `images` is left empty —
// the card/detail page falls back to a category icon automatically.
//
// `website`: the client's actual live site, where it's known from the WSI
// portfolio list. When present, cards + the detail page hero pull a live
// screenshot of that homepage instead of (or alongside) the campaign
// screenshots — see src/utils/websiteScreenshot.js. Left undefined for
// clients whose live site wasn't in the portfolio list; add it any time
// you have the URL and the hero image will pick it up automatically.

export const CATEGORIES = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'seo', label: 'SEO' },
    { id: 'ads', label: 'Google Ads' },
    { id: 'social', label: 'Social Media' },
];

export const caseStudies = [
    {
        id: 'parkshala',
        name: 'Parkshala',
        industry: 'NGO — Child Education & Welfare (Noida / NCR)',
        categories: ['seo'],
        description:
            'Parkshala is an NGO focused on child education and welfare in the Noida/NCR region. The SEO engagement targeted a broad set of branded, local, and cause-related search terms — spanning volunteering, school sponsorship, donations, and COVID-relief programs — to build organic visibility for the organization and its fundraising campaigns.',
        seoStats: { keywordsTracked: 120, rankedFirst: 84, rankedSecond: 12, page1Percent: '70+' },
        images: [],
        website: 'https://www.parkshala.com/',
    },
    {
        id: 'mdc',
        name: 'MDC (MD Corporation)',
        industry: 'Industrial Manufacturing — Waterjet Cutting Services',
        categories: ['seo'],
        description:
            'MD Corporation supplies and operates waterjet cutting machines and job-work services out of Delhi/NCR. SEO targeted high-intent commercial keywords across machine sales, job-work services, and location-specific searches across Delhi, Noida, Gurugram and Faridabad.',
        seoStats: { keywordsTracked: 100, rankedFirst: 64, rankedSecond: 10, page1Percent: '60+' },
        images: [],
        website: 'https://mdcnoida.com/',
    },
    {
        id: 'jaybee',
        name: 'Jaybee',
        industry: 'Manufacturing — CRGO Electrical Steel',
        categories: ['seo'],
        description:
            'Jaybee manufactures CRGO (Cold Rolled Grain Oriented) electrical steel, transformer cores, and steel laminations. The SEO campaign targeted a deep, highly technical keyword set across product lines (cores, coils, stampings, laminations) and geographies.',
        seoStats: { keywordsTracked: 100, rankedFirst: 68, rankedSecond: 16, page1Percent: '65+' },
        images: [],
        website: 'https://www.jaybeeindustries.com/',
    },
    {
        id: 'allespack',
        name: 'Allespack',
        industry: 'Industrial Equipment — Strapping Machines & Tools',
        categories: ['seo', 'ads', 'social'],
        description:
            'Allespack has manufactured and supplied automatic and semi-automatic strapping machines since 1997. The engagement covered all three channels: organic search visibility for strapping-machine keywords, Google Ads search campaigns to drive direct leads, and Facebook ad creative to build brand awareness.',
        seoStats: { keywordsTracked: 50, rankedFirst: 15, rankedSecond: 10, page1Percent: '30+' },
        adsStats: [
            { label: 'Sept 7, 2024 – Mar 6, 2025 (Search)', clicks: '9.75K', impressions: '135K', avgCpc: '₹17.32', spend: '₹169K' },
            { label: 'May 2, 2024 – Sep 3, 2026 (All time)', clicks: '11.1K', conversions: '190', avgCpc: '₹24.18', spend: '₹268K' },
        ],
        images: [
            '/images/case-studies/allespack-ads-search.png',
            '/images/case-studies/allespack-ads-alltime.png',
            '/images/case-studies/allespack-facebook.png',
        ],
        website: 'https://www.allespack.in/',
    },
    {
        id: 'fmt',
        name: 'FMT (Food Marketing & Technology)',
        industry: 'Publishing — Trade Magazine (Food & Beverage)',
        categories: ['seo'],
        description:
            'FMT is a food-industry trade magazine covering food processing, packaging, and F&B service trends. SEO targeted informational and branded search terms to grow organic readership and establish topical authority in the food/beverage publishing niche.',
        seoStats: { keywordsTracked: 50, rankedFirst: 20, rankedSecond: 6, page1Percent: '40+' },
        images: [],
    },
    {
        id: 'creature-companion',
        name: 'Creature Companion',
        industry: 'Publishing — Pet Care Magazine',
        categories: ['seo'],
        description:
            'Creature Companion is an online pet-care magazine covering dog and cat breeds, grooming, and pet parenting advice. SEO targeted informational, breed-specific, and care-tip keywords to grow organic readership.',
        seoStats: { keywordsTracked: 50, rankedFirst: 21, rankedSecond: 11, page1Percent: '40+' },
        images: [],
        website: 'https://creature-companions.in/',
    },
    {
        id: 'metacorp',
        name: 'Metacorp',
        industry: 'Compliance Consulting — EPR & CDSCO Certification',
        categories: ['seo'],
        description:
            'Metacorp offers regulatory consulting for Extended Producer Responsibility (EPR) certification (plastic, e-waste, batteries) and CDSCO/cosmetics manufacturing licensing. SEO targeted certification and licensing search terms used by manufacturers seeking compliance services.',
        seoStats: { keywordsTracked: 50, rankedFirst: 25, rankedSecond: 12, page1Percent: '50+' },
        images: [],
        website: 'https://www.metacorp.in/',
    },
    {
        id: 'shreya-tour-travels',
        name: 'Shreya Tour and Travels',
        industry: 'Travel — Taxi & Cab Booking Services',
        categories: ['ads', 'social'],
        description:
            'Shreya Tour and Travels offers taxi and outstation cab services from Noida to destinations including Nainital, Agra, Manali, Shimla, Jaipur and more. The engagement combined long-running Google Ads search campaigns with Facebook ad creative to drive calls and bookings.',
        adsStats: [
            { label: 'All time · Jun 2014 – Sep 2025', clicks: '238K', avgCpc: '₹6.55', spend: '₹15+ Lacs', phoneCalls: '1.62K' },
        ],
        images: [
            '/images/case-studies/shreya-tour-travels-ads.png',
            '/images/case-studies/shreya-tour-travels-facebook.png',
        ],
    },
    {
        id: 'super-springs',
        name: 'Super Springs',
        industry: 'Industrial — Springs Manufacturing',
        categories: ['ads'],
        description:
            'Super Springs ran a Google Ads campaign to generate B2B leads and website conversions for its springs manufacturing business.',
        adsStats: [
            { label: 'Aug 25 – Dec 12, 2025', clicks: '9.76K', impressions: '79.9K', conversions: '279', spend: '₹69K' },
        ],
        images: ['/images/case-studies/super-springs-ads.png'],
        website: 'https://supersprings.co.in/',
    },
    {
        id: 'iiptf',
        name: 'IIPTF',
        industry: 'B2B Exhibition / Trade Fair',
        categories: ['ads'],
        description:
            'IIPTF ran Google Ads campaigns to drive registrations and conversions ahead of its trade fair / exhibition event.',
        adsStats: [
            { label: 'Dec 1, 2024 – Jun 7, 2025', clicks: '4.34K', conversions: '3.83K', avgCpc: '₹17.93', spend: '₹77.9K' },
        ],
        images: ['/images/case-studies/iiptf-ads.png'],
        website: 'https://iiptf.in/',
    },
    {
        id: 'jayem-india',
        name: 'Jayem India',
        industry: 'Industrial / B2B',
        categories: ['ads'],
        description:
            'Jayem India ran always-on Google Ads campaigns to build B2B demand and drive qualified conversions at scale.',
        adsStats: [
            { label: 'Feb 4, 2025 – Sep 3, 2026 (All time)', clicks: '20.3K', impressions: '2.02M', conversions: '1.11K', spend: '₹146K' },
        ],
        images: ['/images/case-studies/jayem-india-ads.png'],
        website: 'https://www.jayemindia.com/',
    },
    {
        id: 'mystic-crystals',
        name: 'Mystic Crystals',
        industry: 'D2C — Wellness Jewelry & Bracelets',
        categories: ['ads', 'social'],
        description:
            'Mystic Crystals sells wellness-themed bracelets and crystal jewelry direct-to-consumer. The engagement combined Google Ads for search intent with Facebook ad creative for social discovery and impulse purchase.',
        adsStats: [
            { label: 'Jan 10, 2025 – Sep 3, 2026 (All time)', clicks: '11.9K', impressions: '590K', avgCpc: '₹10.74', spend: '₹128K' },
        ],
        images: [
            '/images/case-studies/mystic-crystals-ads.png',
            '/images/case-studies/mystic-crystals-facebook.png',
        ],
        website: 'https://mysticcrystals.in/',
    },
    {
        id: 'arch-vantage',
        name: 'Arch Vantage',
        industry: 'Real Estate / Consulting',
        categories: ['ads'],
        description:
            'Arch Vantage ran Google Ads campaigns focused on driving qualified conversions at an efficient cost-per-conversion.',
        adsStats: [
            { label: 'Oct 2024 – Sep 3, 2026 (All time)', clicks: '3.36K', conversions: '219', costPerConv: '₹473', spend: '₹104K' },
        ],
        images: ['/images/case-studies/arch-vantage-ads.png'],
        website: 'https://archvantage.in/',
    },
    {
        id: 'subharti-university',
        name: 'Subharti University (Gurukul Jyoti ITI)',
        industry: 'Education — University Admissions',
        categories: ['social'],
        description:
            'A Facebook lead-generation campaign promoting UG/PG admissions (BBA, MBA, BCA, MCA, B.Pharma, M.Pharma, B.Com, M.Com) for the 2024 intake, using an in-platform lead form offering a 20% enrollment discount.',
        images: ['/images/case-studies/subharti-university-facebook.png'],
        website: 'https://gurukuljyotiiti.com/',
    },
    {
        id: 'subhash-travel',
        name: 'Subhash Travel',
        industry: 'Immigration & Visa Consulting',
        categories: ['social'],
        description:
            'A Facebook ad promoting visa and immigration consulting services for study, business, tourist and migration visas across the USA, UK, Canada, Europe, Gulf and more.',
        images: ['/images/case-studies/subhash-travel-facebook.png'],
    },
    {
        id: 'a1-steel-fabrication',
        name: 'A1 Steel Fabrication',
        industry: 'Home Improvement — Steel Doors & Gates',
        categories: ['social'],
        description:
            'A Facebook carousel ad showcasing steel and aluminium gate designs, driving chat-based inquiries.',
        images: ['/images/case-studies/a1-steel-fabrication-facebook.png'],
    },
    {
        id: 'alps-institute',
        name: 'Alps Institute',
        industry: 'Education — Diploma & Certificate Courses',
        categories: ['social'],
        description:
            'A Facebook ad promoting government-recognized diploma courses in Kullu, Himachal Pradesh, with a ₹24,000 Kaushal Bhatta incentive and free PMKVY training.',
        images: ['/images/case-studies/alps-institute-facebook.png'],
    },
    {
        id: 'ar-advisors',
        name: 'AR Advisors',
        industry: 'Real Estate Consulting',
        categories: ['social'],
        description:
            'A Facebook ad for a luxury 4/5 BHK residential project (Godrej Woods, Sector 43, Noida) starting at ₹5.15 Cr, driving direct calls.',
        images: ['/images/case-studies/ar-advisors-facebook.png'],
        website: 'http://www.aradvisors.in/',
    },
    {
        id: 'avasa-villa',
        name: 'Avasa Villa',
        industry: 'Hospitality — Luxury Villa Rental',
        categories: ['social'],
        description:
            'A Facebook ad promoting an affordable luxury villa stay in Bhimtal, Uttarakhand, linking to direct booking.',
        images: ['/images/case-studies/avasa-villa-facebook.png'],
        website: 'https://www.avasavilla.com/',
    },
    {
        id: 'shri-balaji-caterers',
        name: 'Shri Balaji Caterers',
        industry: 'Event Catering Services',
        categories: ['social'],
        description:
            'A Facebook ad promoting catering services for weddings, family functions, birthdays and office events via an in-platform lead form.',
        images: ['/images/case-studies/shri-balaji-caterers-facebook.png'],
    },
    {
        id: 'the-capital-city',
        name: 'The Capital City',
        industry: 'Real Estate — Residential & Commercial Plots',
        categories: ['social'],
        description:
            'A Navratri-themed Facebook lead-ad promoting residential plots and commercial shops near Jewar Airport, starting at ₹10 lakh.',
        images: ['/images/case-studies/the-capital-city-facebook.png'],
    },
    {
        id: 'comnet-vision-india',
        name: 'Comnet Vision India',
        industry: 'Electronics — Power Backup Solutions',
        categories: ['social'],
        description:
            'A Facebook ad for APC Back-UPS models, emphasizing premium battery backup and surge protection for home and office.',
        images: ['/images/case-studies/comnet-vision-india-facebook.png'],
        website: 'https://www.comnetvisionindia.com/',
    },
    {
        id: 'garment-show-of-india',
        name: 'Garment Show of India (GSI)',
        industry: 'B2B — Trade Exhibition',
        categories: ['social'],
        description:
            'A Facebook ad promoting stall bookings for a December garment industry exhibition at Yashobhoomi, Dwarka, targeting 300+ exhibitors.',
        images: ['/images/case-studies/garment-show-of-india-facebook.png'],
        website: 'https://garmentshowofindia.in/',
    },
    {
        id: 'low-calories-diet',
        name: 'Low Calories Diet',
        industry: 'Health & Wellness — Content / Recipe Marketing',
        categories: ['social'],
        description:
            'A Facebook video ad featuring a protein salad recipe, positioned as a healthy weight-loss and immunity-boosting recipe.',
        images: ['/images/case-studies/low-calories-diet-facebook.png'],
    },
    {
        id: 'presidium-empire',
        name: 'Presidium Empire',
        industry: 'Real Estate — Residential Plots',
        categories: ['social'],
        description:
            'A Navratri-themed Facebook video ad promoting 100 sq. yard plots, driving quote requests.',
        images: ['/images/case-studies/presidium-empire-facebook.png'],
    },
    {
        id: 'rr-realtors',
        name: 'RR Realtors',
        industry: 'Real Estate — Residential Plots',
        categories: ['social'],
        description:
            'Two Facebook ad variants (video and static) promoting premium, gated, 70 sq. yard plots near the Taj/Yamuna and Aligarh-Palwal Expressways, starting at ₹1.5 lakh booking.',
        images: [
            '/images/case-studies/rr-realtors-facebook-video.png',
            '/images/case-studies/rr-realtors-facebook-static.png',
        ],
    },
    {
        id: 'shell-enterprises',
        name: 'Shell Enterprises',
        industry: 'Home Improvement — Modular Kitchens',
        categories: ['social'],
        description:
            'A Facebook ad offering 25% off modular kitchen transformations in Noida, driving calls and WhatsApp chats.',
        images: ['/images/case-studies/shell-enterprises-facebook.png'],
    },
];

export const getCaseStudyById = (id) => caseStudies.find((s) => s.id === id);
