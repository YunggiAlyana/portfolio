export const journalPosts = [
  // --- ARTIKEL UTAMA (Hacking SEO) ---
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
      <h2>1. Introduction: The "Google Test"</h2>
      <p>
        When a recruiter, client, or fellow developer hears your name, what is the first thing they do? <b>They Google you.</b>
      </p>
      <p>
        A year ago, searching for "Yunggi Alyana Rahman" might have returned a scattered mix of random social media or worse—nothing at all. Today, if you search my name, you will find a curated ecosystem: my LinkedIn, GitHub, portfolio website, and technical articles dominating the entire first page.
      </p>

      <div class="my-6">
        <img 
          src="/images/journal/google-search-proof.png" 
          alt="Google Search Result showing Yunggi Alyana ecosystem" 
          class="w-full rounded-xl border border-white/10 shadow-2xl"
        />
        <p class="text-center text-xs text-zinc-500 italic mt-2">Figure 1: The ecosystem dominating the search results. My portfolio ranks #1, followed immediately by professional profiles.</p>
      </div>

      <p>
        This wasn't luck. It was a deliberate strategy of <b>Personal SEO (Search Engine Optimization)</b>. As a developer, I decided to treat my digital identity like a software project: I engineered it.
      </p>

      <hr class="my-8 border-white/10" />

      <h2>2. The Philosophy: From Store Shelves to Google Shelves</h2>
      <p>
        You might wonder, why am I so obsessed with organizing search results? Ironically, my previous background in retail operations (Indomaret Group) taught me this.
      </p>
      <p>
        In retail, we use a <b>"Planogram"</b>—a diagram that dictates exactly where every product sits on the shelf to maximize visibility. If a product is hidden at the back or placed too low, it doesn't exist to the customer.
      </p>
      <p>I simply applied the Planogram mentality to my digital career:</p>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><b>Google Page 1</b> is my "Eye-Level Shelf."</li>
        <li><b>LinkedIn & Portfolio</b> are my "Premium Products."</li>
        <li><b>Technical Articles</b> are the "Promotional Items."</li>
      </ul>

      <h2>3. The Strategy: Structured Consistency (The "Hybrid" Approach)</h2>
      <p>
        To execute this, I engineered a Hybrid Branding Strategy differentiating between my "Searchable Name" and my "Addressable Handle."
      </p>
      
      <h3 class="text-xl font-bold text-white mt-6 mb-2">The Display Name (For Robots)</h3>
      <p>
        On high-authority platforms like LinkedIn and certificates, I strictly use my full name: <b>Yunggi Alyana Rahman</b>. This maximizes keyword density for specific searches.
      </p>

      <h3 class="text-xl font-bold text-white mt-6 mb-2">The URL Slug (For Humans)</h3>
      <p>
        For URLs (GitHub, TikTok, Custom Domain), I standardized on the shorter version: <code>yunggialyana</code> (w/o Rahman).
      </p>

      <h2>4. The Market Analysis: Unique Privilege vs. The K-Pop Giant</h2>
      <p>I must acknowledge a variable in this equation: My Name.</p>
      <ul class="list-disc pl-5 space-y-4 mb-6">
        <li>
          <b>The Unfair Advantage (Long-Tail):</b> "Yunggi Alyana Rahman" is a Zero-Competition Keyword. Unlike someone named "Rizky Pratama" who fights thousands of others, I face almost no "namespace collision."
        </li>
        <li>
          <b>The Limitation (Short-Tail):</b> However, if you search for "Yunggi", I lose. The entire first page is dominated by <b>Min Yoon-gi (Suga from BTS)</b>. Trying to outrank a global superstar is futile, so I focused on being findable, not famous.
        </li>
      </ul>

      <h2>5. The Technical Secret Sauce: Structured Data (JSON-LD)</h2>
      <p>
        I didn't just rely on text; I spoke Google's native language. On my portfolio website, I implemented <b>JSON-LD Schema Markup</b>. This code explicitly tells Google who I am.
      </p>
      <blockquote class="border-l-4 border-blue-500 pl-4 italic bg-white/5 p-4 rounded-r-lg my-4">
        "Hi, this website belongs to Yunggi Alyana Rahman. He is a Software Developer. Here are his verified links..."
      </blockquote>

      <div class="my-6 bg-[#0a0a0a] border border-white/10 rounded-xl p-4 overflow-x-auto">
        <pre><code class="text-sm font-mono text-blue-400">&lt;script type="application/ld+json"&gt;
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
&lt;/script&gt;</code></pre>
        <p class="text-center text-xs text-zinc-500 italic mt-4">Figure 2: The actual JSON-LD code injected into my website head tag.</p>
      </div>

      <p>
        By feeding this structured data directly to the search engine, I eliminated ambiguity and accelerated the indexing process.
      </p>

      <h2>6. The Feedback Loop: Data-Driven Validation</h2>
      <p>
        As an engineer, I don't rely on assumptions; I rely on metrics. I monitor my traffic using <b>Cloudflare Web Analytics</b> to track requests and geography.
      </p>

      <div class="my-6">
        <img 
          src="/images/journal/cloudflare-analytics.png" 
          alt="Cloudflare Analytics Dashboard" 
          class="w-full rounded-xl border border-white/10 shadow-2xl"
        />
        <p class="text-center text-xs text-zinc-500 italic mt-2">Figure 3: Tracking 1.35k requests and global distribution to validate visibility.</p>
      </div>

      <p>
        This data creates a feedback loop. Whether the traffic comes from recruiters in Indonesia or bots in Sweden, having visibility allows me to optimize my "digital shelf" constantly.
      </p>

      <h2>7. SEO as a Defense Mechanism</h2>
      <p>
        Finally, as a Security Researcher, I view "Search Engine Domination" as <b>Defensive Branding</b>. By filling the first page with legitimate, controlled profiles, I leave no room for impersonators or misinformation.
      </p>
      <p>In cybersecurity terms, I have effectively "hardened" my digital surface area.</p>

      <hr class="my-8 border-white/10" />

      <h2>8. Conclusion</h2>
      <p>
        Your digital footprint exists whether you manage it or not. I chose to manage mine using the same principles I apply to my code: <b>Efficiency, Structure, and Security</b>.
      </p>
      <p>Start by Googling yourself today. If you don't like what you see, start building.</p>
    `
  },
];