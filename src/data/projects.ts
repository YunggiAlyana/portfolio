export const projects = [
  {
    title: "CertifYT",
    subtitle: "YouTube Playlist Certificate Generator",
    slug: "certifyt", // <--- Slug URL
    date: "Nov 2025 - Present",
    desc: "A web application that converts self-taught learning effort on YouTube into valid certificates of achievement. Automates total duration calculation and generates unique QR codes for verification.",
    tags: ["Next.js", "TypeScript", "YouTube Data API", "Supabase", "CSS Print"],
    color: "emerald",
    github: "https://github.com/YunggiAlyana/certifyt",
    demo: "#", // Kalau ada link demo
    features: ["Automates duration calculation", "Advanced CSS Print for PDF", "1-click LinkedIn add"],
    content: `
      <h2>The Problem</h2>
      <p>Self-taught developers watch hundreds of hours of tutorials on YouTube but have no "proof" of their learning compared to paid platforms like Udemy or Coursera.</p>
      
      <h2>The Solution</h2>
      <p>CertifYT bridges this gap by using the <b>YouTube Data API</b> to fetch playlist details, calculate the total learning hours, and generate a professional PDF certificate with a verifiable QR code.</p>

      <h2>Technical Highlights</h2>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><b>Next.js App Router:</b> For fast server-side rendering of certificate pages.</li>
        <li><b>Supabase:</b> Storing user generation limits and certificate validation records.</li>
        <li><b>Puppeteer (planned):</b> To automate high-quality PDF generation server-side.</li>
      </ul>
    `
  },
  {
    title: "TelcoSense",
    subtitle: "Capstone Project (ML Integrated)",
    slug: "telcosense",
    date: "Sep 2025 - Dec 2025",
    desc: "A product recommendation system for Telco services using Machine Learning. Architected the core backend and integrated ML services for personalized offers.",
    tags: ["React", "Hapi.js", "Python (FastAPI)", "MongoDB"],
    color: "blue",
    github: "#", 
    demo: "#",
    features: ["Project Manager & Backend Lead", "Hapi.js Core Architecture", "Python/FastAPI ML Microservice"],
    content: `
      <h2>Overview</h2>
      <p>As the <b>Project Manager and Backend Lead</b> for this Capstone Project, I orchestrated a team of 5 to build an intelligent recommendation engine for Telecommunication providers.</p>

      <h2>Architecture</h2>
      <p>We used a microservices approach:</p>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><b>Core Backend (Hapi.js):</b> Handled user authentication, business logic, and transaction history.</li>
        <li><b>ML Service (FastAPI):</b> A Python service hosting the Scikit-Learn model that predicts user preferences based on usage data.</li>
        <li><b>Frontend (React):</b> A dashboard for users to view personalized packages.</li>
      </ul>
    `
  },
  {
    title: "Bookshelf API",
    subtitle: "RESTful Backend Service",
    slug: "bookshelf-api",
    date: "Apr 2025",
    desc: "A robust backend service designed to manage book data with full CRUD functionality. Focused on secure data handling and RESTful standards compliance.",
    tags: ["Node.js", "Hapi.js", "RESTful API"],
    color: "yellow",
    github: "https://github.com/YunggiAlyana/BOOKSHELF-API",
    demo: "#",
    features: ["Full CRUD functionality", "Secure data handling", "Strict RESTful standards"],
    content: `
      <h2>Objective</h2>
      <p>To build a standard-compliant REST API without using heavy frameworks like NestJS, focusing on pure architectural understanding using Hapi.js.</p>
      <h2>Key Features</h2>
      <p>The API passes all Postman integration tests for adding, reading, updating, and deleting book records with proper HTTP status codes (200, 201, 404, 500).</p>
    `
  },
  {
    title: "Barcode Lookup Tool",
    subtitle: "Operational Efficiency Tool",
    slug: "barcode-lookup",
    date: "Mar 2025",
    desc: "A lightweight search tool developed to solve operational inefficiencies in retail inventory management. Reduces product search time for store staff.",
    tags: ["HTML", "JavaScript", "CSS"],
    color: "pink",
    github: "https://github.com/YunggiAlyana/Pencari-Barcode",
    demo: "#",
    features: ["Instant PLU/Barcode access", "Lightweight execution", "Real-world problem solver"],
    content: `
      <h2>Background</h2>
      <p>During my time in Retail Operations, I noticed staff wasting minutes searching for PLU codes in physical manuals. I built this tool to solve that specific pain point.</p>
      <h2>Impact</h2>
      <p>Reduced search time from ~2 minutes to <5 seconds per query, significantly improving cashier efficiency during peak hours.</p>
    `
  }
];