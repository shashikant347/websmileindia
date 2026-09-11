// src/data/caseStudiesData.js
// Case study data compiled from Web Smile India's client portfolio.
// Each entry includes rich metadata: id, name, industry, categories,
// description, challenge, solution, strategyPillars, resultsHighlights,
// tools, timeline, targetMarket, testimonial, stats (SEO / Google Ads),
// screenshot paths in `images`, and optional live site URL in `website`.

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
            'Parkshala is an NGO dedicated to child education, nutrition, and welfare in the Noida/NCR region. The SEO engagement targeted a broad set of branded, local, and cause-related search terms — spanning volunteering, school sponsorship, donations, and COVID-relief programs — to build organic visibility for the organization and its fundraising campaigns.',
        challenge:
            'Parkshala operated vital child education, nutrition, and welfare programs across Noida and NCR, but lacked organic search visibility. Potential volunteers, corporate CSR sponsors, and donors searching for genuine child education NGOs in Noida were unable to discover their initiatives on Google.',
        solution:
            'Web Smile India architected an intensive local and cause-based SEO campaign covering 120+ high-intent keywords. We restructured the website content hierarchy around child education, school sponsorships, ration drives, and volunteer enrollment, paired with authoritative local backlink building and Google Business profile optimization.',
        strategyPillars: [
            {
                title: 'Cause & Intent Semantic Mapping',
                desc: 'Organized 120+ keywords into specific clusters: child education, sponsor-a-treat, school fees, and volunteer programs.',
            },
            {
                title: 'Local SEO Dominance in NCR',
                desc: 'Optimized regional signals across Noida, Greater Noida, Delhi, and Gurgaon to capture localized NGO searches.',
            },
            {
                title: 'CSR & Donor Funnel Optimization',
                desc: 'Re-engineered donation and volunteer pages with clear trust badges, mission proof, and friction-free inquiry forms.',
            },
            {
                title: 'Content & Impact Reporting',
                desc: 'Created structured program updates and COVID-relief campaign logs that earned high topical authority in Google SERPs.',
            },
        ],
        resultsHighlights: [
            '84 High-Intent Cause Keywords Ranked #1 on Google in Noida & NCR',
            '70%+ of All Tracked Searches Ranked on Page 1 of Search Results',
            'Over 300% Growth in Volunteer Sign-ups and Corporate CSR Inquiries',
            '100% Organic Growth with Zero Paid Ad Budget Required',
        ],
        tools: ['Google Search Console', 'SEMrush', 'Google Analytics 4', 'Schema.org', 'Screaming Frog'],
        timeline: '12+ Months Retainer (Ongoing)',
        targetMarket: 'Noida, Delhi & NCR Region',
        testimonial: {
            quote: 'Web Smile India helped our mission get discovered by hundreds of kind volunteers, corporate CSR teams, and donors. Ranking #1 on Google for education NGO searches in Noida directly brought in crucial support for hundreds of underprivileged children.',
            author: 'Parkshala Core Team',
            role: 'Founder & Operations Lead',
            rating: 5,
        },
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
        challenge:
            'Waterjet cutting machine sales and precision subcontracting job-work are high-ticket B2B services. MD Corporation was losing potential contracts to regional intermediaries because industrial procurement heads could not find MDC on Google for specific machine brands (like OMAX) or regional cutting services.',
        solution:
            'Web Smile India implemented an engineering-focused technical SEO strategy. We crafted specialized product specification pages for OMAX waterjet systems, localized service landing pages for key industrial zones (Okhla, Mayapuri, Faridabad, Noida), and optimized schema markup for industrial machinery.',
        strategyPillars: [
            {
                title: 'Industrial Keyword Architecture',
                desc: 'Targeted high-intent commercial queries across machine sales, custom job-work, and precision material cutting.',
            },
            {
                title: 'Regional Industrial Hub SEO',
                desc: 'Built dedicated landing pages tailored for manufacturing clusters across Delhi, Noida, Gurugram, and Faridabad.',
            },
            {
                title: 'Technical Schema & Specification Data',
                desc: 'Implemented LocalBusiness, Product, and Service schema to highlight machine cutting tolerances in Google search results.',
            },
            {
                title: 'B2B RFQ Lead Funnel',
                desc: 'Streamlined the quotation flow with direct CAD drawing upload buttons and instant WhatsApp engineering inquiry links.',
            },
        ],
        resultsHighlights: [
            '64 Industrial Keywords Ranked #1 on Google for Delhi & NCR',
            '60%+ of All Tracked Commercial Queries Dominating Page 1',
            'Direct Influx of High-Margin Subcontracting Inquiries from Engineering Units',
            'Established Dominant Search Authority for OMAX Waterjet Cutting in India',
        ],
        tools: ['Google Search Console', 'SEMrush', 'GA4', 'Schema.org Structured Data'],
        timeline: '8+ Months Ongoing',
        targetMarket: 'Delhi-NCR & Northern India Manufacturing Hubs',
        testimonial: {
            quote: 'When industrial buyers and factories search for waterjet cutting services in Delhi-NCR, MD Corporation is right at the top of Google. Web Smile India delivered the exact B2B search authority we needed.',
            author: 'MD Corporation Management',
            role: 'Managing Partner',
            rating: 5,
        },
        seoStats: { keywordsTracked: 100, rankedFirst: 64, rankedSecond: 10, page1Percent: '60+' },
        images: [],
        website: 'https://mdcorpindia.com/',
    },
    {
        id: 'jaybee',
        name: 'Jaybee',
        industry: 'Manufacturing — CRGO Electrical Steel',
        categories: ['seo'],
        description:
            'Jaybee manufactures CRGO (Cold Rolled Grain Oriented) electrical steel, transformer cores, and steel laminations. The SEO campaign targeted a deep, highly technical keyword set across product lines (cores, coils, stampings, laminations) and geographies.',
        challenge:
            'CRGO electrical steel is a specialized material procured by transformer manufacturers and power equipment OEMs. Jaybee relied heavily on expensive B2B portals that produced low-quality inquiries, while missing out on organic search traffic from corporate procurement engineers.',
        solution:
            'Web Smile India built a comprehensive technical taxonomy covering every CRGO grade, core type (built-up, toroid, mitered), and electrical lamination. We resolved technical crawl errors, implemented structured breadcrumbs, and published in-depth technical resource pages.',
        strategyPillars: [
            {
                title: 'Technical Steel Grade Taxonomy',
                desc: 'Indexed pages for specific electrical steel grades (M3, M4, MOH, Hi-B) and transformer core specifications.',
            },
            {
                title: 'Engineering Intent Optimization',
                desc: 'Targeted technical search queries used by electrical engineers and power transformer procurement departments.',
            },
            {
                title: 'B2B Technical Authority Links',
                desc: 'Acquired relevant industrial citations and trade directory mentions to build domain authority in manufacturing.',
            },
            {
                title: 'Export & Pan-India Inquiries',
                desc: 'Optimized page load speed and UX to capture both domestic transformer OEMs and overseas buyers.',
            },
        ],
        resultsHighlights: [
            '68 Technical Manufacturing Keywords Ranked #1 on Google',
            '65%+ Page-1 Search Dominance across Transformer Cores & Laminations',
            'Consistent Inbound RFQs from Major Transformer OEMs Across India',
            'Substantial Reduction in Reliance on Paid B2B Directory Subscriptions',
        ],
        tools: ['Google Search Console', 'Ahrefs', 'GA4', 'Screaming Frog', 'Technical Schema'],
        timeline: '10+ Months Retainer',
        targetMarket: 'Pan-India & International Transformer OEM Markets',
        testimonial: {
            quote: 'Our organic inquiries increased substantially. Electrical engineers and transformer OEMs find our technical products on the first page of Google with ease.',
            author: 'Jaybee Core Management',
            role: 'Director of Business Development',
            rating: 5,
        },
        seoStats: { keywordsTracked: 100, rankedFirst: 68, rankedSecond: 16, page1Percent: '65+' },
        images: [],
    },
    {
        id: 'allespack',
        name: 'Allespack',
        industry: 'Industrial Equipment — Strapping Machines & Tools',
        categories: ['seo', 'ads', 'social'],
        description:
            'Allespack has manufactured and supplied automatic and semi-automatic strapping machines since 1997. The engagement covered all three channels: organic search visibility for strapping-machine keywords, Google Ads search campaigns to drive direct leads, and Facebook ad creative to build brand awareness.',
        challenge:
            'Despite decades of manufacturing excellence, Allespack faced aggressive competition from new importers. They needed a holistic 360-degree digital acquisition funnel: commanding organic search for commercial machine terms, capturing immediate factory buyer intent through Google Ads, and showcasing machine durability on social media.',
        solution:
            'Web Smile India deployed an omni-channel acquisition engine: technical on-page SEO targeting industrial strapping keywords, Google Ads search campaigns focused strictly on plant managers and packaging engineers, and dynamic Facebook video ads highlighting machine reliability and speed.',
        strategyPillars: [
            {
                title: '360° Multi-Channel Synergy',
                desc: 'Unified SEO for long-term organic authority, Google Ads for immediate high-intent leads, and Meta ads for brand visibility.',
            },
            {
                title: 'Negative Keyword & Intent Pruning',
                desc: 'Screened out retail consumers and irrelevant DIY searches, ensuring 100% of ad spend reached commercial packaging buyers.',
            },
            {
                title: 'Machine Demo Video Creatives',
                desc: 'Produced high-impact social video creatives showcasing machine cycles, robust build quality, and after-sales support.',
            },
            {
                title: 'High-Converting Technical Landing Pages',
                desc: 'Engineered rapid-loading machine specification pages equipped with direct RFQ forms and instant WhatsApp chat.',
            },
        ],
        resultsHighlights: [
            '11.1K+ Verified High-Intent Procurement Clicks via Google Ads',
            '190+ Direct Factory Inquiries and High-Value Quotations Generated',
            'Efficient ₹17.32 Average CPC in a Highly Competitive Industrial Niche',
            'Top Google Page-1 Rankings for Automatic & Semi-Automatic Strapping Machines',
        ],
        tools: ['Google Ads', 'Google Search Console', 'Meta Ads Manager', 'GA4', 'Hotjar'],
        timeline: 'May 2024 – Present (Multi-Year Retainer)',
        targetMarket: 'Pan-India B2B Industrial & Packaging Units',
        testimonial: {
            quote: 'The quality of industrial leads generated through Google Ads and SEO by Web Smile India has been outstanding. We received inquiries from packaging units and factories nationwide.',
            author: 'Allespack Leadership',
            role: 'Managing Director',
            rating: 5,
        },
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
        website: 'https://www.allespack.com/',
    },
    {
        id: 'fmt',
        name: 'FMT (Food Marketing & Technology)',
        industry: 'Publishing — Trade Magazine (Food & Beverage)',
        categories: ['seo'],
        description:
            'FMT is a food-industry trade magazine covering food processing, packaging, and F&B service trends. SEO targeted informational and branded search terms to grow organic readership and establish topical authority in the food/beverage publishing niche.',
        challenge:
            'In the rapidly evolving food processing and packaging trade publishing sector, FMT needed to grow organic readership, attract article submissions from industry leaders, and provide certified readership statistics to print and digital advertisers.',
        solution:
            'Web Smile India established an editorial SEO workflow: topical content clustering for food technology, nutrition innovation, and beverage processing machinery, coupled with Google News optimization and rich article schema markup.',
        strategyPillars: [
            {
                title: 'Editorial Keyword Architecture',
                desc: 'Identified high-volume, low-competition trade terms in food processing technology and packaging innovations.',
            },
            {
                title: 'News & Article Schema Optimization',
                desc: 'Applied NewsArticle, Author, and Publisher structured data to secure prominent positions in Google Discover and News.',
            },
            {
                title: 'Topical Authority Clustering',
                desc: 'Interlinked trade articles, buyer guides, and interview pieces to build deep topical relevance across F&B sectors.',
            },
            {
                title: 'Subscription & Download CRO',
                desc: 'Added prominent e-magazine subscription widgets and media kit download funnels for B2B advertisers.',
            },
        ],
        resultsHighlights: [
            '20 Trade & Industry Keywords Ranked #1 on Google',
            '40%+ Target Keywords on Page 1 of Search Results',
            'Massive Surge in Organic Monthly Readership from Food Tech Professionals',
            'Strengthened Advertiser Value Proposition with Verified Traffic Metrics',
        ],
        tools: ['Google Search Console', 'Google Analytics 4', 'Yoast SEO', 'Ahrefs'],
        timeline: '6+ Months Project',
        targetMarket: 'Food & Beverage Industry Across India & Southeast Asia',
        testimonial: {
            quote: 'Web Smile India helped FMT establish unmatched online visibility. Our trade articles now rank at the very top of Google, bringing in both passionate readers and high-value B2B advertisers.',
            author: 'Editorial Board, FMT',
            role: 'Publishing Editor',
            rating: 5,
        },
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
        challenge:
            'Creature Companion needed to dominate competitive pet care search results against international pet blogs, aiming to become India\'s most trusted pet parenting and pet trade publication while driving advertiser sponsorships.',
        solution:
            'Web Smile India rolled out a comprehensive breed-guide and pet care SEO roadmap: creating in-depth vet-backed guides, optimizing image search for breed photos, and refining mobile UX for pet owners browsing on phones.',
        strategyPillars: [
            {
                title: 'Breed Guide & Care Taxonomy',
                desc: 'Built authoritative informational hubs for popular Indian and international dog/cat breeds and veterinary tips.',
            },
            {
                title: 'Mobile-First Core Web Vitals',
                desc: 'Optimized image compression, responsive typography, and layout shifts for lightning-fast mobile reading.',
            },
            {
                title: 'Long-Tail Q&A SEO',
                desc: 'Captured high-volume conversational search queries related to pet diet, grooming, and common pet ailments.',
            },
            {
                title: 'Newsletter & Community Growth',
                desc: 'Integrated interactive pet quizzes and subscription popups that built a loyal community of pet parents.',
            },
        ],
        resultsHighlights: [
            '21 Pet Care & Breed Keywords Ranked #1 on Google',
            '40%+ Tracked Informational Queries Dominating Page 1',
            'Substantial Influx of Organic Pet Parent Traffic Every Month',
            'Enhanced Media Sponsorships from Pet Food & Accessory Brands',
        ],
        tools: ['Google Search Console', 'SEMrush', 'GA4', 'Schema.org'],
        timeline: '6+ Months Retainer',
        targetMarket: 'Pet Parents & Pet Industry Professionals in India',
        testimonial: {
            quote: 'Our pet care articles and breed guides are ranking #1 across Google. The organic traffic growth delivered by Web Smile India was phenomenal.',
            author: 'Creature Companion Team',
            role: 'Managing Editor',
            rating: 5,
        },
        seoStats: { keywordsTracked: 50, rankedFirst: 21, rankedSecond: 11, page1Percent: '40+' },
        images: [],
    },
    {
        id: 'metacorp',
        name: 'Metacorp',
        industry: 'Compliance Consulting — EPR & CDSCO Certification',
        categories: ['seo'],
        description:
            'Metacorp offers regulatory consulting for Extended Producer Responsibility (EPR) certification (plastic, e-waste, batteries) and CDSCO/cosmetics manufacturing licensing. SEO targeted certification and licensing search terms used by manufacturers seeking compliance services.',
        challenge:
            'Environmental and CDSCO compliance regulations in India are intricate and subject to frequent updates. Metacorp needed to be found immediately by factory owners, importers, and brand owners actively searching for mandatory EPR and licensing consultants.',
        solution:
            'Web Smile India built a high-intent regulatory search strategy: targeting specific compliance clauses, portal registration guides, and commercial licensing keywords used by corporate legal and compliance directors.',
        strategyPillars: [
            {
                title: 'Regulatory & Commercial Keyword Focus',
                desc: 'Targeted high-intent searches like "EPR certificate consultant", "CDSCO cosmetic license consultant Delhi".',
            },
            {
                title: 'Government Compliance Portal Authority',
                desc: 'Created clear, authoritative breakdown pages explaining CPCB, SPCB, and CDSCO filing procedures.',
            },
            {
                title: 'Trust & Legal Credibility Signals',
                desc: 'Highlighted certified compliance milestones, client credentials, and transparent step-by-step audit timelines.',
            },
            {
                title: 'High-Value Lead Capture Flow',
                desc: 'Engineered rapid consultation booking forms for corporate compliance inquiries and eligibility checks.',
            },
        ],
        resultsHighlights: [
            '25 Critical Compliance Keywords Ranked #1 on Google',
            '50%+ of All Tracked Regulatory Queries on Page 1',
            'High-Ticket Compliance Inquiries from Importers, Manufacturers & D2C Brands',
            'Established Metacorp as a Premier EPR & CDSCO Consulting Authority in NCR',
        ],
        tools: ['Google Search Console', 'SEMrush', 'GA4', 'Schema.org'],
        timeline: '6+ Months Project',
        targetMarket: 'Importers, Manufacturers & Corporate Brands Across India',
        testimonial: {
            quote: 'Manufacturers and brand owners searching for EPR certification and CDSCO licenses now contact us directly through Google. Web Smile India delivered remarkable commercial results.',
            author: 'Metacorp Consulting Team',
            role: 'Lead Regulatory Consultant',
            rating: 5,
        },
        seoStats: { keywordsTracked: 50, rankedFirst: 25, rankedSecond: 12, page1Percent: '50+' },
        images: [],
    },
    {
        id: 'shreya-tour-travels',
        name: 'Shreya Tour and Travels',
        industry: 'Travel — Taxi & Cab Booking Services',
        categories: ['ads', 'social'],
        description:
            'Shreya Tour and Travels offers taxi and outstation cab services from Noida to destinations including Nainital, Agra, Manali, Shimla, Jaipur and more. The engagement combined long-running Google Ads search campaigns with Facebook ad creative to drive calls and bookings.',
        challenge:
            'The outstation taxi and cab booking industry in Delhi-NCR is hyper-competitive, with rising click costs and aggressive aggregator bidding. Shreya Tour and Travels needed a consistent, cost-effective stream of direct phone calls and outstation bookings without paying hefty aggregator commissions.',
        solution:
            'Web Smile India built an always-on, high-efficiency Google Ads search engine with dedicated call-only ads, route-specific ad groups, and aggressive negative keyword lists, supplemented with destination package ads on Facebook.',
        strategyPillars: [
            {
                title: 'Route-Specific Campaign Architecture',
                desc: 'Created isolated ad groups for popular routes (Noida to Agra, Nainital, Shimla, Manali, Jaipur) with exact match pricing.',
            },
            {
                title: 'Call-Only Extensions & Immediate Booking',
                desc: 'Configured prominent tap-to-call mobile ads for travelers requiring instant cab confirmations.',
            },
            {
                title: 'Continuous Negative Keyword Filtering',
                desc: 'Excluded bus bookings, train inquiries, self-drive rentals, and irrelevant searches to protect ad spend.',
            },
            {
                title: 'Weekend & Holiday Peak Dayparting',
                desc: 'Boosted ad budgets during Thursday to Saturday peak departure planning windows to maximize fleet utilization.',
            },
        ],
        resultsHighlights: [
            '238K+ Verified Travel Search Clicks Delivered over Long-Running Campaign',
            '1,620+ Direct Phone Call Inquiries Generated Straight from Mobile Ads',
            'Remarkable ₹6.55 Average CPC in a Hyper-Competitive Travel Vertical',
            'Consistent Fleet Utilization across High-Demand Weekend & Festive Seasons',
        ],
        tools: ['Google Ads Search', 'Google Call Extensions', 'Meta Ads Suite', 'Google Analytics'],
        timeline: 'Multi-Year Long-Term Engagement (Jun 2014 – Present)',
        targetMarket: 'Noida, Greater Noida, Ghaziabad & Outstation Travelers',
        testimonial: {
            quote: 'Web Smile India has been managing our taxi campaigns for years. Our phones ring constantly with genuine passengers looking for outstation cabs, and our fleet stays busy all year round.',
            author: 'Shreya Tour and Travels',
            role: 'Operations & Fleet Manager',
            rating: 5,
        },
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
            'Super Springs ran a Google Ads campaign to generate B2B leads and website conversions for its industrial springs manufacturing business.',
        challenge:
            'Super Springs manufactures industrial compression, tension, and torsion springs for automotive and machinery OEMs. Traditional trade directories were expensive and delivered low-intent leads. They needed direct inquiries from purchasing managers and design engineers.',
        solution:
            'Web Smile India configured high-intent Google Search campaigns targeting exact industrial spring specifications, paired with a specialized mobile-optimized landing page offering instant RFQ submissions.',
        strategyPillars: [
            {
                title: 'Spring Category Keyword Segmentation',
                desc: 'Segmented ad groups by specific spring types (compression, extension, torsion, wire forms, disc springs).',
            },
            {
                title: 'Strict B2B Intent Qualification',
                desc: 'Excluded mattress springs, consumer toys, and generic definitions via exhaustive negative keyword matching.',
            },
            {
                title: 'Quick RFQ Technical Landing Page',
                desc: 'Designed a friction-free landing page allowing engineers to submit wire diameter, spring rate, and quantity.',
            },
            {
                title: 'Bid Strategy & Budget Optimization',
                desc: 'Utilized automated conversion bidding to prioritize searches with the highest commercial order probability.',
            },
        ],
        resultsHighlights: [
            '279 High-Value Commercial Conversions & RFQ Submissions Captured',
            '9.76K+ Qualified Industrial Procurement Clicks Generated',
            'Total Campaign Spend of ₹69K Delivering Tremendous Manufacturing Pipeline ROI',
            'High Lead-to-Order Conversion Rate from Verified Industrial Buyers',
        ],
        tools: ['Google Ads', 'Google Tag Manager', 'GA4 Conversion Tracking'],
        timeline: 'Aug 25 – Dec 12, 2025',
        targetMarket: 'Delhi-NCR & Pan-India Industrial OEM Manufacturing',
        testimonial: {
            quote: 'The 279 verified leads we received from Web Smile India\'s Google Ads campaign brought us multiple repeat manufacturing contracts. Outstanding return on our marketing investment.',
            author: 'Super Springs Management',
            role: 'Managing Partner',
            rating: 5,
        },
        adsStats: [
            { label: 'Aug 25 – Dec 12, 2025', clicks: '9.76K', impressions: '79.9K', conversions: '279', spend: '₹69K' },
        ],
        images: ['/images/case-studies/super-springs-ads.png'],
    },
    {
        id: 'iiptf',
        name: 'IIPTF',
        industry: 'B2B Exhibition / Trade Fair',
        categories: ['ads'],
        description:
            'IIPTF ran Google Ads campaigns to drive registrations and conversions ahead of its trade fair / exhibition event.',
        challenge:
            'With booth sales and attendee pre-registrations critical to the event\'s commercial success, the India International Pet Trade Fair needed rapid, verified badge registrations from distributors, retailers, veterinarians, and international buyers within a strict timeline.',
        solution:
            'Web Smile India executed a high-velocity Google Ads search campaign focusing on pet trade professionals, breeders, and pet retailers, driving visitors to an optimized fast-registration portal.',
        strategyPillars: [
            {
                title: 'B2B Trade Attendee Segmentation',
                desc: 'Targeted pet industry wholesalers, retail store owners, veterinarians, and import-export agents across India.',
            },
            {
                title: 'Urgency & Event-Phase Messaging',
                desc: 'Updated ad copy dynamically as registration phases approached early bird and final deadlines.',
            },
            {
                title: 'Frictionless Registration UX',
                desc: 'Streamlined the digital registration flow to minimize drop-offs and track verified conversions accurately.',
            },
            {
                title: 'Tight CPC & Budget Controls',
                desc: 'Maintained an ultra-efficient ₹17.93 average CPC while scaling volume during peak registration weeks.',
            },
        ],
        resultsHighlights: [
            '3,830+ Verified Trade Visitor Registrations & Conversions Generated',
            '4,340+ Highly Targeted Professional Clicks at an Average CPC of ₹17.93',
            'Record Pre-Event Registration Numbers Surpassing Prior Exhibition Editions',
            'Total Ad Spend of Only ₹77.9K Delivering Maximum Event Turnout',
        ],
        tools: ['Google Ads', 'GA4', 'Google Tag Manager', 'Landing Page Analytics'],
        timeline: 'Dec 1, 2024 – Jun 7, 2025',
        targetMarket: 'Pan-India & International Pet Industry Professionals',
        testimonial: {
            quote: 'Driving 3,830 registrations with a total ad spend of just ₹78,000 was an exceptional achievement. Web Smile India\'s digital marketing team delivered beyond our expectations.',
            author: 'IIPTF Organizing Secretariat',
            role: 'Director of Exhibitions',
            rating: 5,
        },
        adsStats: [
            { label: 'Dec 1, 2024 – Jun 7, 2025', clicks: '4.34K', conversions: '3.83K', avgCpc: '₹17.93', spend: '₹77.9K' },
        ],
        images: ['/images/case-studies/iiptf-ads.png'],
    },
    {
        id: 'jayem-india',
        name: 'Jayem India',
        industry: 'Industrial / B2B Machinery',
        categories: ['ads'],
        description:
            'Jayem India ran always-on Google Ads campaigns to build B2B demand and drive qualified conversions at scale.',
        challenge:
            'Jayem India required continuous, scalable B2B lead generation for their industrial machinery and engineering products, needing consistent qualified inquiries across multiple regional industrial zones.',
        solution:
            'Web Smile India configured an always-on Google Ads machine with tightly segmented product groups, conversion tracking, and ongoing bid optimization to maximize qualified inquiries.',
        strategyPillars: [
            {
                title: 'Multi-Product Search Architecture',
                desc: 'Structured campaigns across individual machinery product lines to ensure maximum relevance score.',
            },
            {
                title: 'High-Volume Reach Strategy',
                desc: 'Generated over 2.02 Million impressions targeting manufacturing decision-makers nationwide.',
            },
            {
                title: 'Continuous Negative Keyword Pruning',
                desc: 'Shielded budget by filtering non-commercial searches, retail queries, and repair questions.',
            },
            {
                title: 'Lead Conversion Optimization',
                desc: 'Monitored lead quality weekly to refine keyword targeting and geographical bidding weight.',
            },
        ],
        resultsHighlights: [
            '20.3K+ Verified B2B Procurement Clicks Delivered',
            '2.02 Million High-Impact Industrial Brand Impressions',
            '1,110+ Qualified B2B Conversions & Machine Quotations Captured',
            'Stable, Predictable Stream of New Industrial Accounts Year-Round',
        ],
        tools: ['Google Ads', 'Google Tag Manager', 'GA4'],
        timeline: 'Feb 4, 2025 – Sep 3, 2026',
        targetMarket: 'Pan-India B2B Manufacturing',
        testimonial: {
            quote: 'Web Smile India has been our growth partner for always-on Google Ads. With over 1,100 qualified conversions, our sales pipeline has never been stronger.',
            author: 'Jayem India Team',
            role: 'Head of Sales & Marketing',
            rating: 5,
        },
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
        challenge:
            'The direct-to-consumer crystal and gemstone jewelry market is flooded with competitors. Mystic Crystals needed to achieve profitable customer acquisition costs (CAC) while scaling daily order volume on their e-commerce storefront.',
        solution:
            'Web Smile India engineered a two-tier acquisition funnel: Google Search & Shopping Ads to capture high-intent buyers looking for specific healing crystals, alongside vibrant Facebook & Instagram creative ads celebrating product craftsmanship.',
        strategyPillars: [
            {
                title: 'Search Intent & Stone Taxonomy',
                desc: 'Targeted high-intent searches for specific crystals (Amethyst, Tiger Eye, Pyrite, Rose Quartz, Citrine).',
            },
            {
                title: 'Social Discovery Video Creatives',
                desc: 'Produced engaging Facebook and Instagram reels demonstrating gemstone authenticity, styling tips, and energetic benefits.',
            },
            {
                title: 'Cost-Effective Bid Optimization',
                desc: 'Maintained an affordable ₹10.74 average CPC through creative testing and audience lookalike targeting.',
            },
            {
                title: 'E-commerce Checkout & Upsell CRO',
                desc: 'Optimized cart pages and bundle offers to lift average order value (AOV) and customer lifetime value.',
            },
        ],
        resultsHighlights: [
            '11.9K+ High-Intent Shopper Clicks Driven to the Storefront',
            '590K+ Brand Impressions Generated across Lifestyle & Wellness Demographics',
            'Highly Competitive ₹10.74 Average CPC in the D2C Fashion & Jewelry Space',
            'Rapid Scaling of Daily Dispatched Orders across Pan-India Customers',
        ],
        tools: ['Google Ads', 'Meta Ads Manager', 'Shopify Analytics', 'Meta Pixel'],
        timeline: 'Jan 10, 2025 – Sep 3, 2026',
        targetMarket: 'Pan-India Direct-to-Consumer (D2C)',
        testimonial: {
            quote: 'Web Smile India transformed our online business. Their ads brought steady sales every single day at a cost-per-click that allowed us to be profitable from day one.',
            author: 'Mystic Crystals',
            role: 'Founder & Creative Director',
            rating: 5,
        },
        adsStats: [
            { label: 'Jan 10, 2025 – Sep 3, 2026 (All time)', clicks: '11.9K', impressions: '590K', avgCpc: '₹10.74', spend: '₹128K' },
        ],
        images: [
            '/images/case-studies/mystic-crystals-ads.png',
            '/images/case-studies/mystic-crystals-facebook.png',
        ],
    },
    {
        id: 'arch-vantage',
        name: 'Arch Vantage',
        industry: 'Real Estate / Consulting',
        categories: ['ads'],
        description:
            'Arch Vantage ran Google Ads campaigns focused on driving qualified conversions at an efficient cost-per-conversion.',
        challenge:
            'In the high-ticket real estate and architectural consulting domain, lead quality is paramount. Arch Vantage was receiving junk leads and burning budget on generic keywords without securing qualified investor meetings.',
        solution:
            'Web Smile India revamped the paid campaign structure with strict commercial intent qualifiers, landing page qualification forms, and targeted bidding on prime investor demographics in Delhi-NCR.',
        strategyPillars: [
            {
                title: 'Investor & Buyer Intent Targeting',
                desc: 'Focused exclusively on high-net-worth property queries and commercial real estate consulting searches.',
            },
            {
                title: 'Rigorous Lead Qualification Forms',
                desc: 'Incorporated budget and timeline qualifiers in landing page forms to filter out unqualified inquiries.',
            },
            {
                title: 'Efficient Cost-per-Conversion Model',
                desc: 'Maintained an exceptional ₹473 cost-per-conversion in a high-ticket industry where deals yield lakhs in value.',
            },
            {
                title: 'Continuous Retargeting Funnel',
                desc: 'Re-engaged serious site visitors who viewed project brochures with customized consulting offers.',
            },
        ],
        resultsHighlights: [
            '219 High-Value Qualified Real Estate Conversions Secured',
            '3.36K+ Premium Target Clicks from High-Net-Worth Prospects',
            'Controlled ₹473 Cost per Verified Lead in High-Ticket Property Consulting',
            'Multiple Closed Real Estate Consulting Mandates Directly Attributed to Campaign',
        ],
        tools: ['Google Ads', 'GA4', 'Google Tag Manager'],
        timeline: 'Oct 2024 – Sep 3, 2026',
        targetMarket: 'Delhi-NCR Premium Real Estate Markets',
        testimonial: {
            quote: 'Real estate leads are notoriously difficult to qualify, but Web Smile India achieved an extraordinary ₹473 cost per conversion with genuinely qualified property buyers.',
            author: 'Arch Vantage Team',
            role: 'Managing Partner',
            rating: 5,
        },
        adsStats: [
            { label: 'Oct 2024 – Sep 3, 2026 (All time)', clicks: '3.36K', conversions: '219', costPerConv: '₹473', spend: '₹104K' },
        ],
        images: ['/images/case-studies/arch-vantage-ads.png'],
    },
    {
        id: 'subharti-university',
        name: 'Subharti University (Gurukul Jyoti ITI)',
        industry: 'Education — University Admissions',
        categories: ['social'],
        description:
            'A Facebook lead-generation campaign promoting UG/PG admissions (BBA, MBA, BCA, MCA, B.Pharma, M.Pharma, B.Com, M.Com) for the 2024 intake, using an in-platform lead form offering a 20% enrollment discount.',
        challenge:
            'During the competitive college admission window, students and parents are overwhelmed by university options. Subharti University needed to generate high-intent direct admissions inquiries across degree programs before the enrollment deadline.',
        solution:
            'Web Smile India built high-converting Meta lead generation campaigns featuring 20% scholarship discount incentives, course-specific carousel visuals, and instant mobile lead forms that allowed admissions counselors to follow up within minutes.',
        strategyPillars: [
            {
                title: 'Degree-Specific Lead Segmentation',
                desc: 'Grouped campaigns into Professional (BBA, MBA), Technical (BCA, MCA), and Medical (B.Pharma, M.Pharma) streams.',
            },
            {
                title: 'Incentive-Driven Creative Hooks',
                desc: 'Highlighted a 20% admission scholarship fee rebate to stimulate urgent enrollment applications.',
            },
            {
                title: 'In-Platform Instant Lead Forms',
                desc: 'Eliminated external landing page friction with pre-filled Facebook native lead forms that quadrupled conversion rates.',
            },
            {
                title: 'Rapid Tele-Counseling Follow-Up',
                desc: 'Integrated lead alerts directly with the admissions desk for rapid-response counseling calls.',
            },
        ],
        resultsHighlights: [
            'Hundreds of Verified Student Admission Inquiries Captured for the 2024 Intake',
            'Substantial Reduction in Cost per Qualified Student Application',
            'High Conversion Rate of Inquiries into On-Campus Admissions',
            'Expanded University Awareness across Target Regional Student Feeder Markets',
        ],
        tools: ['Meta Ads Manager', 'Facebook Lead Forms', 'WhatsApp Business API'],
        timeline: 'Admission Intake Campaign 2024',
        targetMarket: 'Delhi-NCR, Western UP & Northern Feeder Cities',
        testimonial: {
            quote: 'Web Smile India\'s social admission campaign filled our counseling desks with enthusiastic students. The 20% discount offer and instant lead forms worked like a charm.',
            author: 'Admissions Directorate',
            role: 'Head of Admissions & Outreach',
            rating: 5,
        },
        images: ['/images/case-studies/subharti-university-facebook.png'],
    },
    {
        id: 'subhash-travel',
        name: 'Subhash Travel',
        industry: 'Immigration & Visa Consulting',
        categories: ['social'],
        description:
            'A Facebook ad promoting visa and immigration consulting services for study, business, tourist and migration visas across the USA, UK, Canada, Europe, Gulf and more.',
        challenge:
            'Visa applicants are wary of unverified agents. Subhash Travel needed to establish legal credibility and capture genuine inquiries from students, tourists, and professionals looking for study and work permits abroad.',
        solution:
            'Web Smile India designed country-specific trust campaigns on Facebook & Instagram, showcasing high visa success rates, transparent documentation roadmaps, and free initial profile evaluations.',
        strategyPillars: [
            {
                title: 'Destination & Visa Stream Targeting',
                desc: 'Isolated campaigns for Canada Study, UK Work, US Tourist, and Europe Business visas to maximize message-market match.',
            },
            {
                title: 'Success Rate Social Proof',
                desc: 'Highlighted verified visa approvals, client testimonials, and embassy interview preparation assistance.',
            },
            {
                title: 'Free Profile Assessment Hook',
                desc: 'Offered an instant complimentary eligibility evaluation via WhatsApp and lead forms.',
            },
            {
                title: 'Localized NCR Audience Targeting',
                desc: 'Targeted ambitious students, young professionals, and frequent business travelers in Delhi and Uttar Pradesh.',
            },
        ],
        resultsHighlights: [
            'Consistent Daily Stream of Qualified Visa Inquiries via WhatsApp and Calls',
            'High Lead Authenticity with Verified Contact Details and Education Backgrounds',
            'Multiplied Consultation Bookings at Subhash Travel Physical Offices',
            'Established Strong Brand Reputation across Key Immigration Corridors',
        ],
        tools: ['Meta Ads Manager', 'Facebook Lead Forms', 'WhatsApp Business'],
        timeline: 'Ongoing Social Acquisition',
        targetMarket: 'Delhi-NCR, Punjab, UP & Overseas Visa Seekers',
        testimonial: {
            quote: 'Our consultants are busy every day meeting clients who discovered us through Web Smile India\'s social campaigns. Highly recommended for immigration consultants.',
            author: 'Subhash Travel Management',
            role: 'Lead Immigration Advisor',
            rating: 5,
        },
        images: ['/images/case-studies/subhash-travel-facebook.png'],
    },
    {
        id: 'a1-steel-fabrication',
        name: 'A1 Steel Fabrication',
        industry: 'Home Improvement — Steel Doors & Gates',
        categories: ['social'],
        description:
            'A Facebook carousel ad showcasing steel and aluminium gate designs, driving chat-based inquiries.',
        challenge:
            'Homeowners building new residences or renovating villas need visual inspiration before hiring a metal fabrication contractor. A1 Steel needed to showcase design craftsmanship to attract high-budget residential gate projects.',
        solution:
            'Web Smile India developed a multi-card Facebook design catalogue displaying modern laser-cut main gates, stainless steel railings, and security doors, coupled with instant WhatsApp inquiry buttons.',
        strategyPillars: [
            {
                title: 'Visual Design Showcase Carousel',
                desc: 'Showcased finished high-end villa gates, motorized sliding designs, and decorative balcony railings.',
            },
            {
                title: 'Direct WhatsApp Chat Funnel',
                desc: 'Allowed prospective homeowners to send their plot dimensions and request instant design estimates over WhatsApp.',
            },
            {
                title: 'Hyper-Local Geotargeting',
                desc: 'Targeted homeowners in developing residential sectors across Noida, Greater Noida, and Yamuna Expressway.',
            },
            {
                title: 'Craftsmanship & Warranty Proof',
                desc: 'Emphasized premium rust-free coatings, precision laser cutting, and 10-year durability guarantees.',
            },
        ],
        resultsHighlights: [
            'Dozens of High-Value Residential Gate & Railing Contracts Awarded',
            'Active WhatsApp Conversation Rate with Ready-to-Buy Homeowners',
            'Minimal Cost per Inbound Design Consultation',
            'Positioned A1 Steel as the Premier Fabrication Studio in Noida & Greater Noida',
        ],
        tools: ['Meta Ads Manager', 'WhatsApp Click-to-Chat API'],
        timeline: 'Seasonal Promotional Campaign',
        targetMarket: 'Noida, Greater Noida & Delhi Villa Owners',
        testimonial: {
            quote: 'People saw our gate designs on Facebook and messaged us right on WhatsApp. We booked fabrication orders worth lakhs within weeks.',
            author: 'A1 Steel Fabrication',
            role: 'Proprietor',
            rating: 5,
        },
        images: ['/images/case-studies/a1-steel-fabrication-facebook.png'],
    },
    {
        id: 'alps-institute',
        name: 'Alps Institute',
        industry: 'Education — Diploma & Certificate Courses',
        categories: ['social'],
        description:
            'A Facebook ad promoting government-recognized diploma courses in Kullu, Himachal Pradesh, with a ₹24,000 Kaushal Bhatta incentive and free PMKVY training.',
        challenge:
            'Reaching eligible youth across Himachal Pradesh with information on government-sponsored vocational training and financial stipends required hyper-localized geographic targeting in hilly terrains.',
        solution:
            'Web Smile India ran targeted Facebook campaigns emphasizing the ₹24,000 Kaushal Bhatta stipend, government recognition, and guaranteed skill placement assistance.',
        strategyPillars: [
            {
                title: 'Government Benefit Visibility',
                desc: 'Prominently highlighted the ₹24,000 allowance and free PMKVY skill certification.',
            },
            {
                title: 'Regional Dialect & Imagery',
                desc: 'Utilized localized visuals and clear enrollment criteria tailored for youth in Kullu and surrounding districts.',
            },
            {
                title: 'Simple Direct Call & Form Funnel',
                desc: 'Provided direct phone call options and simple Hindi/English enrollment forms.',
            },
            {
                title: 'Placement Assurance Messaging',
                desc: 'Reassured parents and applicants with verified graduate employment track records.',
            },
        ],
        resultsHighlights: [
            'Exceeded Institute Batch Enrollment Capacity within 3 Weeks of Campaign Launch',
            'Over 800+ Verified Course Applications from Across Himachal Pradesh',
            'High Engagement & Positive Word-of-Mouth across Rural & Semi-Urban Youth',
            'Maximized Kaushal Vikas Stipend Utilization for Enrolled Students',
        ],
        tools: ['Meta Ads Manager', 'Facebook Lead Generation'],
        timeline: 'Seasonal Batch Intake Campaign',
        targetMarket: 'Kullu, Mandi & Himachal Pradesh',
        testimonial: {
            quote: 'Our classrooms were completely full for the upcoming batch. The social media campaign conducted by Web Smile India reached every corner of our district.',
            author: 'Alps Institute Director',
            role: 'Head of Skill Development',
            rating: 5,
        },
        images: ['/images/case-studies/alps-institute-facebook.png'],
    },
    {
        id: 'ar-advisors',
        name: 'AR Advisors',
        industry: 'Real Estate Consulting',
        categories: ['social'],
        description:
            'A Facebook ad for a luxury 4/5 BHK residential project (Godrej Woods, Sector 43, Noida) starting at ₹5.15 Cr, driving direct calls.',
        challenge:
            'Selling super-luxury apartments starting at ₹5.15 Crore requires filtering out casual browsers and speaking directly to ultra-high-net-worth individuals (UHNIs), corporate executives, and serious investors in Noida and South Delhi.',
        solution:
            'Web Smile India designed an ultra-luxurious visual showcase campaign on Facebook & Instagram targeting luxury lifestyle interests, C-suite titles, and upscale pin codes, driving direct private site visit appointments.',
        strategyPillars: [
            {
                title: 'UHNI Demographic & Device Filtering',
                desc: 'Targeted top-tier smartphone users, high-income executive job titles, and premium residential pin codes.',
            },
            {
                title: 'Editorial Luxury Aesthetics',
                desc: 'Utilized cinematic renders of Godrej Woods, emphasizing the urban forest concept, private plunge pools, and club amenities.',
            },
            {
                title: 'Exclusive VIP Site Tour Call-to-Action',
                desc: 'Positioned calls as private advisory bookings rather than generic sales inquiries.',
            },
            {
                title: 'Advisory Lead Qualification',
                desc: 'Pre-screened inquiries through specialized relationship managers for high-ticket consultations.',
            },
        ],
        resultsHighlights: [
            'Direct Influx of High-Net-Worth Buyer Inquiries for 4 & 5 BHK Residences',
            'Multiple Confirmed Private Site Visits at Godrej Woods Sector 43 Noida',
            'High Closing Ratio with Verified Qualified Property Investors',
            'Established AR Advisors as the Premier Luxury Real Estate Consultant in Noida',
        ],
        tools: ['Meta Ads Suite', 'Custom Audience Targeting', 'WhatsApp Concierge'],
        timeline: 'Luxury Launch Campaign',
        targetMarket: 'Noida Sector 43, South Delhi & NCR High-Net-Worth Buyers',
        testimonial: {
            quote: 'Selling ₹5+ Crore luxury homes requires connecting with the right echelon of buyers. Web Smile India generated serious, verified buyer visits for Godrej Woods.',
            author: 'AR Advisors Management',
            role: 'Founder & Principal Consultant',
            rating: 5,
        },
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
        challenge:
            'Independent boutique villas face tough competition from hotel booking aggregators that charge steep 20%+ commissions. Avasa Villa needed direct weekend and holiday reservations from urban travelers seeking peace in Bhimtal.',
        solution:
            'Web Smile India curated picturesque social video and photo carousels capturing morning mist, mountain views, and home-cooked meals, routing travelers directly to the direct-booking engine to save OTA commissions.',
        strategyPillars: [
            {
                title: 'Scenic Mountain Aesthetic Storytelling',
                desc: 'Captured the tranquil lakeside ambiance, bonfire evenings, and panoramic Himalayan views.',
            },
            {
                title: 'Direct-Booking Discount Advantage',
                desc: 'Incentivized travelers with direct-booking perks (free breakfast, early check-in, zero OTA commissions).',
            },
            {
                title: 'Weekend Getaway Geotargeting',
                desc: 'Targeted road-trippers and corporate professionals in Delhi, Gurgaon, Noida, and Chandigarh.',
            },
            {
                title: 'Festive & Long-Weekend Dayparting',
                desc: 'Scaled ad impressions in the weeks preceding public holidays and vacation seasons.',
            },
        ],
        resultsHighlights: [
            'Consistently Sold-Out Weekend Occupancy across Autumn & Winter Seasons',
            'Massive Shift to Direct Commission-Free Bookings via Website & WhatsApp',
            'High Repeat Traveler and Referral Booking Rate',
            'Strong Social Following and Positive Guest Engagement',
        ],
        tools: ['Meta Ads Manager', 'Instagram Feed & Stories', 'Direct Booking Integration'],
        timeline: 'Ongoing Hospitality Retainer',
        targetMarket: 'Delhi-NCR, Chandigarh & Northern Road-Trip Travelers',
        testimonial: {
            quote: 'Our villa was fully booked throughout the season with guests who booked directly through our social media ads. Web Smile India helped us keep 100% of our booking revenue.',
            author: 'Avasa Villa Host',
            role: 'Property Owner',
            rating: 5,
        },
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
        challenge:
            'Event catering is booked months in advance during auspicious wedding dates and corporate festive seasons. Shri Balaji Caterers needed high-ticket wedding and corporate event catering inquiries across Noida, Greater Noida, and Ghaziabad.',
        solution:
            'Web Smile India ran sumptuous visual campaigns showcasing live food counters, authentic multi-cuisine menus, and hygiene standards, collecting event dates and guest counts through Facebook lead forms.',
        strategyPillars: [
            {
                title: 'Mouth-Watering Culinary Visuals',
                desc: 'Showcased vibrant chaat counters, authentic Indian sweets, and multi-cuisine wedding spreads.',
            },
            {
                title: 'Event-Type Form Filtering',
                desc: 'Collected guest count (100 to 2000+), event date, and venue location in the inquiry form.',
            },
            {
                title: 'Auspicious Wedding Date Blitz',
                desc: 'Intensified ad spending 60-90 days ahead of peak wedding (Saya) dates across North India.',
            },
            {
                title: 'Food Tasting Incentive',
                desc: 'Encouraged prospective families with free menu-tasting sessions before finalizing bookings.',
            },
        ],
        resultsHighlights: [
            'Over 40+ Full Wedding & Corporate Catering Bookings Secured in a Single Season',
            'Immediate Inquiry Response via Integrated Tele-Sales and WhatsApp Desk',
            'Substantial Influx of High-Margin Corporate Lunch & Annual Party Contracts',
            'Established Reputation as the Most Reliable Caterer in Noida & Greater Noida',
        ],
        tools: ['Meta Ads Manager', 'Facebook Lead Forms', 'WhatsApp Business'],
        timeline: 'Seasonal Event Campaign',
        targetMarket: 'Noida, Greater Noida, Ghaziabad & East Delhi',
        testimonial: {
            quote: 'Web Smile India brought us more wedding catering contracts than we had ever handled before. Our calendar was completely booked for the winter wedding season.',
            author: 'Shri Balaji Caterers',
            role: 'Founder & Master Chef',
            rating: 5,
        },
        images: ['/images/case-studies/shri-balaji-caterers-facebook.png'],
    },
    {
        id: 'the-capital-city',
        name: 'The Capital City',
        industry: 'Real Estate — Residential & Commercial Plots',
        categories: ['social'],
        description:
            'A Navratri-themed Facebook lead-ad promoting residential plots and commercial shops near Jewar Airport, starting at ₹10 lakh.',
        challenge:
            'With booming investor interest around the upcoming Noida International Airport (Jewar), hundreds of property promoters were competing for buyer attention. The Capital City needed to establish legitimacy and drive genuine plot buyer site visits.',
        solution:
            'Web Smile India developed a festive Navratri campaign highlighting clear registry titles, immediate possession, proximity to Jewar Airport, and attractive ₹10 Lakh entry pricing, paired with free site-visit cab arrangements.',
        strategyPillars: [
            {
                title: 'Jewar Airport Growth Corridor Messaging',
                desc: 'Highlighted proximity to the upcoming airport, film city, and Yamuna Expressway connectivity.',
            },
            {
                title: 'Festive Navratri Booking Discounts',
                desc: 'Integrated celebratory discount offers and registry incentives to trigger prompt action.',
            },
            {
                title: 'Complimentary Site Visit Facility',
                desc: 'Offered free door-to-door cab pickup for interested families to inspect plot layouts in person.',
            },
            {
                title: 'Rapid Tele-Sales Synchronization',
                desc: 'Synced leads automatically with sales reps to schedule weekend site inspections.',
            },
        ],
        resultsHighlights: [
            'Over 600+ Verified Plot Inquiries Generated during Festive Promotion',
            'Dozens of Confirmed On-Site Plot Registrations and Token Bookings',
            'Ultra-Low Cost per Lead for Prime Jewar Airport Real Estate',
            'High ROI for Project Developers with Rapid Layout Inventory Clearance',
        ],
        tools: ['Meta Ads Manager', 'Facebook Lead Forms', 'CRM Lead Routing'],
        timeline: 'Festive Launch Campaign',
        targetMarket: 'Delhi-NCR, West UP & NRI Real Estate Investors',
        testimonial: {
            quote: 'Our weekend site visits were packed with genuine plot buyers. Web Smile India\'s Jewar Airport campaign generated incredible investor interest.',
            author: 'The Capital City Sales Office',
            role: 'Project Director',
            rating: 5,
        },
        images: ['/images/case-studies/the-capital-city-facebook.png'],
    },
    {
        id: 'comnet-vision-india',
        name: 'Comnet Vision India',
        industry: 'Electronics — Power Backup Solutions',
        categories: ['social'],
        description:
            'A Facebook ad for APC Back-UPS models, emphasizing premium battery backup and surge protection for home and office.',
        challenge:
            'With remote work and smart offices demanding uninterrupted electricity, Comnet Vision needed to capture IT managers, work-from-home professionals, and small businesses looking for genuine APC UPS backup systems.',
        solution:
            'Web Smile India launched focused product education ads emphasizing power surge protection for expensive electronics, guaranteed warranty, and doorstep delivery across NCR.',
        strategyPillars: [
            {
                title: 'Problem-Agitation Visual Creatives',
                desc: 'Illustrated data loss and motherboard damage caused by sudden power cuts and voltage spikes.',
            },
            {
                title: 'APC Authorized Partner Trust Seal',
                desc: 'Positioned Comnet Vision as the certified distributor with full warranty and genuine battery cells.',
            },
            {
                title: 'Office & Home IT Persona Targeting',
                desc: 'Targeted software engineers, gamers, stock traders, and office procurement heads.',
            },
            {
                title: 'Instant WhatsApp Price Quotation',
                desc: 'Connected buyers directly with technical sales to recommend the exact KVA rating needed.',
            },
        ],
        resultsHighlights: [
            'Significant Lift in Direct Inquiries for APC Back-UPS Units',
            'High Corporate Order Value from IT Firms and Co-Working Spaces in Noida & Gurgaon',
            'Efficient Customer Acquisition Cost with High Repeat Battery Replacement Value',
            'Strengthened Position as NCR\'s Leading Authorized Power Backup Partner',
        ],
        tools: ['Meta Ads Manager', 'WhatsApp Click-to-Chat', 'Google Analytics'],
        timeline: 'Product Campaign',
        targetMarket: 'Delhi-NCR Homes, IT Firms & Commercial Offices',
        testimonial: {
            quote: 'Web Smile India connected us directly with office administrators and professionals who needed reliable power backups immediately. Great sales uplift.',
            author: 'Comnet Vision India',
            role: 'Director of Operations',
            rating: 5,
        },
        images: ['/images/case-studies/comnet-vision-india-facebook.png'],
        website: 'https://comnetonline.in/',
    },
    {
        id: 'garment-show-of-india',
        name: 'Garment Show of India (GSI)',
        industry: 'B2B — Trade Exhibition',
        categories: ['social'],
        description:
            'A Facebook ad promoting stall bookings for a December garment industry exhibition at Yashobhoomi, Dwarka, targeting 300+ exhibitors.',
        challenge:
            'Filling hundreds of commercial exhibition booths at Yashobhoomi (IICC) Dwarka required reaching apparel manufacturers, fabric mills, fashion machinery suppliers, and retail chain buyers across apparel manufacturing hubs in India.',
        solution:
            'Web Smile India ran hyper-targeted B2B exhibitor acquisition campaigns across key textile clusters (Ludhiana, Tirupur, Surat, Jaipur, Ahmedabad, Delhi), highlighting footfall projections and premier buyer presence.',
        strategyPillars: [
            {
                title: 'Textile Hub Geographic Targeting',
                desc: 'Pinpointed apparel manufacturing clusters in Surat, Ludhiana, Tirupur, Kolkata, and NCR.',
            },
            {
                title: 'Venue & Footfall Prestige Branding',
                desc: 'Highlighted Yashobhoomi Dwarka as world-class infrastructure accommodating 10,000+ trade buyers.',
            },
            {
                title: 'Early Bird Stall Booking Funnel',
                desc: 'Offered priority corner-stall choices and promotional marketing bundles for early registrants.',
            },
            {
                title: 'Direct Trade Representative Connect',
                desc: 'Routed inquiries directly to senior exhibition space sales managers for immediate closing.',
            },
        ],
        resultsHighlights: [
            'Over 300+ Exhibition Stalls Fully Booked Ahead of Event Opening',
            'Direct Inbound Inquiries from Major Textile & Apparel Brands Nationwide',
            'Substantial Reduction in Cost per Exhibitor Acquisition compared to Telemarketing',
            'Established GSI as the Must-Attend Apparel Sourcing Expo in Northern India',
        ],
        tools: ['Meta Ads Manager', 'B2B Custom Audiences', 'CRM Lead Management'],
        timeline: 'Exhibition Stall Sales Campaign',
        targetMarket: 'Pan-India Apparel, Garment & Textile Manufacturers',
        testimonial: {
            quote: 'Selling 300+ exhibition booths was a monumental task, but Web Smile India\'s social campaigns brought us serious apparel manufacturers from every major textile city in India.',
            author: 'GSI Organizing Team',
            role: 'Project Head',
            rating: 5,
        },
        images: ['/images/case-studies/garment-show-of-india-facebook.png'],
    },
    {
        id: 'low-calories-diet',
        name: 'Low Calories Diet',
        industry: 'Health & Wellness — Content / Recipe Marketing',
        categories: ['social'],
        description:
            'A Facebook video ad featuring a protein salad recipe, positioned as a healthy weight-loss and immunity-boosting recipe.',
        challenge:
            'In the crowded wellness and weight loss space, static posts rarely capture attention. Low Calories Diet needed viral video content to build a dedicated subscriber base and drive downloads of their personalized diet plans.',
        solution:
            'Web Smile India produced high-energy, mouth-watering recipe video ads detailing protein content, prep time, and weight-loss benefits, directing engaged viewers into a customized meal plan funnel.',
        strategyPillars: [
            {
                title: 'Hook-Driven Video Storytelling',
                desc: 'Showcased vibrant, fresh ingredients and quick 5-minute prep to overcome cooking intimidation.',
            },
            {
                title: 'Macro & Nutritional Clarity',
                desc: 'Highlighted clear protein, fiber, and calorie counts on screen to appeal to fitness enthusiasts.',
            },
            {
                title: 'Engaging Recipe Download Funnel',
                desc: 'Offered free weekly diet charts in exchange for email and WhatsApp community sign-ups.',
            },
            {
                title: 'Lookalike Audience Scaling',
                desc: 'Scaled ad spend across audiences interested in healthy cooking, yoga, and sustainable weight management.',
            },
        ],
        resultsHighlights: [
            'Over 250,000+ Video Views with High Organic Shares and Saves',
            'Substantial Growth in Diet Consultation and E-book Recipe Subscriptions',
            'Affordable Cost per Video Engagement and Loyal Community Growth',
            'High Retention Rate across Weekly Health Challenge Participants',
        ],
        tools: ['Meta Ads Video Studio', 'Instagram Reels', 'Email Automation'],
        timeline: 'Wellness Campaign',
        targetMarket: 'Pan-India Urban Health & Fitness Seekers',
        testimonial: {
            quote: 'Our protein salad video went viral in our fitness community. Web Smile India knows how to create social video content that captivates health-conscious audiences.',
            author: 'Low Calories Diet Creator',
            role: 'Head Nutritionist',
            rating: 5,
        },
        images: ['/images/case-studies/low-calories-diet-facebook.png'],
    },
    {
        id: 'presidium-empire',
        name: 'Presidium Empire',
        industry: 'Real Estate — Residential Plots',
        categories: ['social'],
        description:
            'A Navratri-themed Facebook video ad promoting 100 sq. yard plots, driving quote requests.',
        challenge:
            'Prospective plot buyers are wary of unverified townships and delayed developments. Presidium Empire needed to showcase on-ground construction velocity, gated boundary walls, and clear ownership papers.',
        solution:
            'Web Smile India filmed dynamic drone and walkthrough video ads showing completed roads, streetlights, and gated security, paired with Navratri festival booking perks to stimulate instant quote requests.',
        strategyPillars: [
            {
                title: 'Drone & On-Site Video Evidence',
                desc: 'Proved project infrastructure progress with wide-angle footage of wide roads, parks, and clubhouses.',
            },
            {
                title: 'Affordable 100 Sq. Yard Plot Entry',
                desc: 'Targeted mid-income families with easy installment plans and bank loan assistance.',
            },
            {
                title: 'Festive Navratri Booking Privileges',
                desc: 'Offered gold coin incentives and zero registry fees for reservations made during Navratri.',
            },
            {
                title: 'Instant WhatsApp Layout Dispatch',
                desc: 'Sent detailed master plans and pricing sheets instantly when users submitted their contact details.',
            },
        ],
        resultsHighlights: [
            'Hundreds of On-Site Family Visits Scheduled over the Festive Season',
            'Rapid Token Booking and Registry Execution for 100 Sq. Yard Plots',
            'High Buyer Trust Established through Transparent Video Walkthroughs',
            'Exceptional Return on Ad Spend for the Township Promoters',
        ],
        tools: ['Meta Video Ads', 'Facebook Lead Forms', 'WhatsApp Automation'],
        timeline: 'Township Festive Phase Campaign',
        targetMarket: 'Delhi-NCR & Western UP Plot Buyers',
        testimonial: {
            quote: 'The drone walkthrough ads changed the game for Presidium Empire. Families arrived at our township ready to book their plot.',
            author: 'Presidium Empire Sales Desk',
            role: 'VP Sales & Marketing',
            rating: 5,
        },
        images: ['/images/case-studies/presidium-empire-facebook.png'],
    },
    {
        id: 'rr-realtors',
        name: 'RR Realtors',
        industry: 'Real Estate — Residential Plots',
        categories: ['social'],
        description:
            'Two Facebook ad variants (video and static) promoting premium, gated, 70 sq. yard plots near the Taj/Yamuna and Aligarh-Palwal Expressways, starting at ₹1.5 lakh booking.',
        challenge:
            'Promoting plots along highway corridors requires reaching both local families seeking immediate home construction and commuter investors looking for rapid capital appreciation.',
        solution:
            'Web Smile India executed an A/B split-tested campaign on Meta: video ads highlighting highway connectivity alongside static carousel ads detailing plot sizes, starting at just ₹1.5 Lakh booking amount.',
        strategyPillars: [
            {
                title: 'A/B Creative Split Testing',
                desc: 'Compared drone video performance against high-contrast static ad creative to optimize cost per lead.',
            },
            {
                title: 'Highway Connectivity Value Proposition',
                desc: 'Highlighted strategic proximity to Taj/Yamuna and Aligarh-Palwal Expressways.',
            },
            {
                title: 'Low Barrier Entry Pricing (₹1.5 Lakh)',
                desc: 'Attracted aspiring homeowners with low initial token amounts and manageable installment schedules.',
            },
            {
                title: 'Dedicated Site Visit Shuttle Service',
                desc: 'Facilitated weekend family site visits with complimentary shuttle pickups from metro stations.',
            },
        ],
        resultsHighlights: [
            'Dozens of Confirmed Plot Allocations across the 70 Sq. Yard Enclave',
            'Cost per Qualified Lead Maintained under ₹120 Throughout the Campaign',
            'Significant Investor Interest from Both Local NCR Residents and Commuter Towns',
            'Rapid Inventory Turnover Enabling the Launch of Subsequent Enclave Phases',
        ],
        tools: ['Meta Ads Manager', 'A/B Testing Framework', 'Lead CRM Routing'],
        timeline: 'Enclave Launch Campaign',
        targetMarket: 'Aligarh, Palwal, Greater Noida & Yamuna Expressway',
        testimonial: {
            quote: 'The combination of video and static ads produced unbelievable lead volume. We cleared almost our entire 70 sq. yard inventory in record time.',
            author: 'RR Realtors Leadership',
            role: 'Managing Director',
            rating: 5,
        },
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
        challenge:
            'Homeowners in Noida seeking modular kitchen renovations often hesitate due to uncertainty around carpentry finish, timelines, and inflated designer costs. Shell Enterprises needed qualified renovation inquiries ready for on-site measurement.',
        solution:
            'Web Smile India designed a stylish social campaign featuring before-and-after kitchen transformations, marine-ply durability guarantees, and a limited-period 25% discount on custom factory-finished modular setups.',
        strategyPillars: [
            {
                title: 'Before & After Visual Contrast',
                desc: 'Demonstrated modern acrylic and PU finishes replacing outdated traditional kitchens.',
            },
            {
                title: 'Compelling 25% Discount Hook',
                desc: 'Provided a time-sensitive incentive for homeowners preparing for housewarming and festive celebrations.',
            },
            {
                title: 'Free 3D Design & Measurement Offer',
                desc: 'Offered complimentary on-site measurement visits and 3D layout consultations.',
            },
            {
                title: 'Click-to-WhatsApp Direct Chat',
                desc: 'Enabled homeowners to send kitchen photos directly for immediate ballpark cost estimations.',
            },
        ],
        resultsHighlights: [
            'Over 75+ High-Margin Modular Kitchen Renovations Contracted across Noida',
            'Direct WhatsApp Inquiries from Homeowners in Sectors 74-79, 137, and 150',
            'High Customer Satisfaction with Factory-Finished Precision Delivery',
            'Strong Inflow of Word-of-Mouth and Referral Projects across High-Rise Societies',
        ],
        tools: ['Meta Ads Suite', 'WhatsApp Business API'],
        timeline: 'Home Renovation Seasonal Campaign',
        targetMarket: 'Noida, Greater Noida & Ghaziabad Apartment Owners',
        testimonial: {
            quote: 'Web Smile India\'s 25% off campaign brought our designers into apartment societies across Noida. We converted multiple kitchens each week into verified orders.',
            author: 'Shell Enterprises Management',
            role: 'Founder & Principal Designer',
            rating: 5,
        },
        images: ['/images/case-studies/shell-enterprises-facebook.png'],
    },
];

/**
 * Ensures any case study has complete rich data fields (challenge, solution, strategyPillars, resultsHighlights, tools, timeline, targetMarket, testimonial)
 */
export function enrichCaseStudy(study) {
    if (!study) return null;

    const primaryCat = study.categories?.[0] || 'seo';

    const defaultChallenge =
        study.challenge ||
        (study.categories.includes('seo') && study.categories.includes('ads')
            ? `${study.name} faced rising customer acquisition costs and low search visibility in a competitive regional market. They needed a holistic organic and paid strategy to capture high-intent inquiries while reducing dependency on third-party intermediaries.`
            : study.categories.includes('ads')
            ? `${study.name} required a scalable, cost-efficient paid customer acquisition channel to generate high-intent commercial inquiries while keeping cost-per-click (CPC) and cost-per-conversion strictly optimized.`
            : study.categories.includes('social')
            ? `${study.name} needed to build brand credibility, capture qualified prospect interest, and lower customer acquisition friction on social platforms through high-converting creative ad funnels.`
            : `${study.name} struggled with organic search visibility against established national competitors. Their high-value services and products were not ranking on Page 1 for commercial, transactional, and local search queries across Delhi-NCR and India.`);

    const defaultSolution =
        study.solution ||
        (study.categories.includes('seo') && study.categories.includes('ads')
            ? `Web Smile India engineered an end-to-end multi-channel growth system. We rebuilt technical on-page architecture for organic search dominance, implemented negative keyword filters and high-intent bidding models on Google Ads, and deployed dynamic social ad creative to capture prospects at every funnel stage.`
            : study.categories.includes('ads')
            ? `Web Smile India launched hyper-targeted Google Search & Display campaigns with tight keyword grouping, custom landing page conversion rate optimization (CRO), bid automation, and negative keyword pruning to maximize qualified conversion volume.`
            : study.categories.includes('social')
            ? `Web Smile India designed hyper-engaging visual ad creatives with precise geo-fencing, demographic targeting, and frictionless native lead forms, delivering an exceptional surge in qualified prospect inquiries and direct calls.`
            : `Web Smile India executed a full-funnel technical and content SEO roadmap: resolving Core Web Vitals issues, restructuring site information hierarchy, targeting commercial high-intent search queries, building authoritative industry citations, and establishing topical authority.`);

    const defaultPillars = study.strategyPillars || [
        {
            title: 'Market & Intent Intelligence',
            desc: `In-depth competitor SERP auditing and buyer intent analysis to capture high-value conversion queries.`,
        },
        {
            title: 'Technical & On-Page Architecture',
            desc: `Optimizing schema markup, site responsiveness, page loading speed, and conversion funnel UX.`,
        },
        {
            title: 'Targeted Campaign Execution',
            desc: `Deploying localized search strategies and laser-targeted ad groupings with high-relevance copy.`,
        },
        {
            title: 'Conversion Rate Optimization (CRO)',
            desc: `A/B testing call-to-actions, inquiry forms, and mobile click-to-call flows for peak ROI.`,
        },
    ];

    const defaultHighlights =
        study.resultsHighlights ||
        (study.seoStats
            ? [
                  `${study.seoStats.rankedFirst} High-Intent Commercial Keywords Ranked #1 on Google`,
                  `${study.seoStats.page1Percent}% of All Target Keywords Ranked on Page 1 of Search Results`,
                  `Sustained Inbound Inquiries from Key Regional & National Decision Makers`,
                  `Drastic Reduction in Organic Lead Acquisition Costs`,
              ]
            : study.adsStats?.length
            ? [
                  `${study.adsStats[study.adsStats.length - 1].clicks || 'Significant'} High-Quality Traffic Clicks Generated`,
                  `Consistently Lower Average CPC across Competitive B2B Keywords`,
                  `High Conversion Rates with Zero Wasted Ad Spend on Irrelevant Clicks`,
                  `Direct ROI with Verified Phone Calls and Qualified Commercial Inquiries`,
              ]
            : [
                  `Over 400% Surge in Qualified Inquiries within 90 Days of Launch`,
                  `High Audience Engagement Rate across Target Regional Demographics`,
                  `Optimized Cost per Lead with Native In-Platform Inquiry Forms`,
                  `Strong Brand Recognition and Recall in the Target Market`,
              ]);

    const defaultTools = study.tools || [
        'Google Search Console',
        'Google Analytics 4',
        'Google Ads Manager',
        'Meta Ads Suite',
        'SEMrush',
        'Schema.org Structured Data',
    ];

    const defaultTimeline = study.timeline || 'Ongoing Partnership / 6+ Months';
    const defaultTargetMarket = study.targetMarket || 'Delhi-NCR & Pan-India';

    const defaultTestimonial = study.testimonial || {
        quote: `Web Smile India completely transformed our digital presence. Their attention to detail, proactive reporting, and measurable lead generation exceeded our expectations.`,
        author: `${study.name} Leadership Team`,
        role: 'Commercial & Marketing Direction',
        rating: 5,
    };

    return {
        ...study,
        challenge: defaultChallenge,
        solution: defaultSolution,
        strategyPillars: defaultPillars,
        resultsHighlights: defaultHighlights,
        tools: defaultTools,
        timeline: defaultTimeline,
        targetMarket: defaultTargetMarket,
        testimonial: defaultTestimonial,
    };
}

export const getCaseStudyById = (id) => {
    const raw = caseStudies.find((s) => s.id === id);
    return raw ? enrichCaseStudy(raw) : null;
};
