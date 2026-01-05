export interface Project {
  title: string;
  subtitle: string;
  slug: string;
  date: string;
  desc: string;
  tags: string[];
  color: string;
  github: string;
  demo: string;
  features: string[];
  content: string; 
}

export const projects: Project[] = [
  {
    title: "CertifYT",
    subtitle: "YouTube Playlist Certificate Generator",
    slug: "certifyt",
    date: "Nov 2025 - Present",
    desc: "A web application that converts self-taught learning effort on YouTube into valid certificates of achievement. Automates total duration calculation and generates unique QR codes for verification.",
    tags: ["Next.js", "TypeScript", "YouTube Data API", "Supabase", "CSS Print"],
    color: "emerald",
    github: "https://github.com/YunggiAlyana/certifyt",
    demo: "#", 
    features: ["Automates duration calculation", "Advanced CSS Print for PDF", "1-click LinkedIn add"],
    content: `
## The Problem
Self-taught developers watch hundreds of hours of tutorials on YouTube but have no "proof" of their learning compared to paid platforms like Udemy or Coursera.

## The Solution
CertifYT bridges this gap by using the **YouTube Data API** to fetch playlist details, calculate the total learning hours, and generate a professional PDF certificate with a verifiable QR code.

## Technical Highlights
- **Next.js App Router:** For fast server-side rendering of certificate pages.
- **Supabase:** Storing user generation limits and certificate validation records.
- **Puppeteer (planned):** To automate high-quality PDF generation server-side.
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
## Overview
As the **Project Manager and Backend Lead** for this Capstone Project, I orchestrated a team of 5 to build an intelligent recommendation engine for Telecommunication providers.

## Architecture
We used a microservices approach:
- **Core Backend (Hapi.js):** Handled user authentication, business logic, and transaction history.
- **ML Service (FastAPI):** A Python service hosting the Scikit-Learn model that predicts user preferences based on usage data.
- **Frontend (React):** A dashboard for users to view personalized packages.
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
## Objective
To build a standard-compliant REST API without using heavy frameworks like NestJS, focusing on pure architectural understanding using Hapi.js.

## Key Features
The API passes all Postman integration tests for adding, reading, updating, and deleting book records with proper HTTP status codes (200, 201, 404, 500).
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
## Background
During my time in Retail Operations, I noticed staff wasting minutes searching for PLU codes in physical manuals. I built this tool to solve that specific pain point.

## Impact
Reduced search time from ~2 minutes to <5 seconds per query, significantly improving cashier efficiency during peak hours.
    `
  }
];