export interface JournalPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  readTime: string;
  color: string;
  tags: string[];
  excerpt: string;
  content: string; 
}

export const journalPosts: JournalPost[] = [
  {
    title: "Hacking SEO: How I Engineered My Google Search Results",
    slug: "hacking-seo",
    date: "Jan 05, 2026",
    category: "Personal Branding",
    readTime: "5 min read",
    color: "blue",
    tags: ["SEO", "Career Growth", "Web Development", "Security"],
    excerpt: "A year ago, searching my name returned nothing. Today, I dominate the first page. Here is how I treated my digital identity like a software project using Personal SEO, JSON-LD, and a retail-inspired strategy.",
    content: `
## 1. Introduction: The "Google Test"
When a recruiter, client, or fellow developer hears your name, what is the first thing they do? **They Google you.**

A year ago, searching for "Yunggi Alyana Rahman" might have returned a scattered mix of random social media or worse—nothing at all. Today, if you search my name, you will find a curated ecosystem: my LinkedIn, GitHub, portfolio website, and technical articles dominating the entire first page.

![Google Search Result showing Yunggi Alyana ecosystem](/images/journal/google-search-proof.png)
*Figure 1: The ecosystem dominating the search results. My portfolio ranks #1, followed immediately by professional profiles.*

This wasn't luck. It was a deliberate strategy of **Personal SEO (Search Engine Optimization)**. As a developer, I decided to treat my digital identity like a software project: I engineered it.

---

## 2. The Philosophy: From Store Shelves to Google Shelves
You might wonder, why am I so obsessed with organizing search results? Ironically, my previous background in retail operations (Indomaret Group) taught me this.

In retail, we use a **"Planogram"**—a diagram that dictates exactly where every product sits on the shelf to maximize visibility. If a product is hidden at the back or placed too low, it doesn't exist to the customer.

I simply applied the Planogram mentality to my digital career:
- **Google Page 1** is my "Eye-Level Shelf."
- **LinkedIn & Portfolio** are my "Premium Products."
- **Technical Articles** are the "Promotional Items."

## 3. The Strategy: Structured Consistency (The "Hybrid" Approach)
To execute this, I engineered a Hybrid Branding Strategy differentiating between my "Searchable Name" and my "Addressable Handle."

### The Display Name (For Robots)
On high-authority platforms like LinkedIn and certificates, I strictly use my full name: **Yunggi Alyana Rahman**. This maximizes keyword density for specific searches.

### The URL Slug (For Humans)
For URLs (GitHub, TikTok, Custom Domain), I standardized on the shorter version: \`yunggialyana\` (w/o Rahman).

## 4. The Market Analysis: Unique Privilege vs. The K-Pop Giant
I must acknowledge a variable in this equation: My Name.

- **The Unfair Advantage (Long-Tail):** "Yunggi Alyana Rahman" is a Zero-Competition Keyword. Unlike someone named "Rizky Pratama" who fights thousands of others, I face almost no "namespace collision."
- **The Limitation (Short-Tail):** However, if you search for "Yunggi", I lose. The entire first page is dominated by **Min Yoon-gi (Suga from BTS)**. Trying to outrank a global superstar is futile, so I focused on being findable, not famous.

## 5. The Technical Secret Sauce: Structured Data (JSON-LD)
I didn't just rely on text; I spoke Google's native language. On my portfolio website, I implemented **JSON-LD Schema Markup**. This code explicitly tells Google who I am.

> "Hi, this website belongs to Yunggi Alyana Rahman. He is a Software Developer. Here are his verified links..."

\`\`\`json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Yunggi Alyana Rahman",
  "url": "https://yunggialyana.dev",
  "sameAs": [
    "https://www.linkedin.com/in/yunggialyana",
    "https://github.com/yunggialyana",
    "https://www.instagram.com/yunggialyana",
    "https://x.com/yunggialyana"
  ],
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Indomaret Group"
  }
}
</script>
\`\`\`
*Figure 2: The actual JSON-LD code injected into my website head tag.*

By feeding this structured data directly to the search engine, I eliminated ambiguity and accelerated the indexing process.

## 6. The Feedback Loop: Data-Driven Validation
As an engineer, I don't rely on assumptions; I rely on metrics. I monitor my traffic using **Cloudflare Web Analytics** to track requests and geography.

![Cloudflare Analytics Dashboard](/images/journal/cloudflare-analytics.png)
*Figure 3: Tracking 2.87k requests and global distribution to validate visibility.*

This data creates a feedback loop. Whether the traffic comes from recruiters in Indonesia or bots in United States, having visibility allows me to optimize my "digital shelf" constantly.

## 7. SEO as a Defense Mechanism
Finally, as a Security Researcher, I view "Search Engine Domination" as **Defensive Branding**. By filling the first page with legitimate, controlled profiles, I leave no room for impersonators or misinformation.

In cybersecurity terms, I have effectively "hardened" my digital surface area.

---

## 8. Conclusion
Your digital footprint exists whether you manage it or not. I chose to manage mine using the same principles I apply to my code: **Efficiency, Structure, and Security**.

Start by Googling yourself today. If you don't like what you see, start building.
    `
  },
];