import CurrentPortfolio from "@/assets/current-portfolio.png";
import CoffeeWebsite from "@/assets/coffee-website.png";
import ToDoListWebsite from "@/assets/todolist-website.png";
import CarShowroom from "@/assets/dad-showroom.png";
import SoleSteals from "@/assets/shoe-website.webp";
import Yaps from "@/assets/yaps-website.webp";
import StyleZ from "@/assets/stylez-store.png";
import TwisterCambodia from "@/assets/twistercambodia.png";
import ProjectPlaceholder from "@/assets/project-placeholder.png";
import { StaticImageData } from "next/image";

export interface TimelineElement {
  id: number;
  title: string;
  url?: string;
  year: string;
  duration?: string;
  tag: string;
  category: string;
  languages: string[];
  image: StaticImageData;
  description: string[];
}

let timelineElements: TimelineElement[] = [
  {
    id: 13,
    title: "Tether (In Progress)",
    year: "2026",
    tag: "Tether",
    category: "AI Agents",
    languages: ["Python"],
    image: ProjectPlaceholder,
    description: [
      "Tether is a Python harness, planned with LangGraph and LangChain, that will let an AI coding agent work for hours without free rein over the machine, and will save progress to SQLite so a killed run can resume.",
      "Planner, coder, tester and reviewer agents will send failing tests and review notes back to the coder, while MCP tools keep file access inside one folder, run only approved commands and log each request.",
      "Stack: Python, LangGraph, LangChain, FastMCP, SQLite",
    ],
  },
  {
    id: 12,
    title: "Driftwood (In Progress)",
    year: "2026",
    tag: "Driftwood",
    category: "Quant Research",
    languages: ["Python", "C++"],
    image: ProjectPlaceholder,
    description: [
      "Planned as a Python research pipeline for US stocks, Driftwood will keep daily market data in DuckDB and train linear and LightGBM models on momentum and volatility signals, tested on later periods it never saw.",
      "A C++ simulator called from Python via pybind11 aims to estimate fees and slippage for TWAP, VWAP and immediate orders, and an AI agent will draft research ideas a human approves before Alpaca paper trading.",
      "Stack: Python, C++17, pybind11, DuckDB, LightGBM",
    ],
  },
  {
    id: 11,
    title: "HR-Relay",
    url: "https://github.com/julianthant/hr-relay",
    year: "2026",
    tag: "HR-Relay",
    category: "Automation",
    languages: ["TypeScript"],
    image: ProjectPlaceholder,
    description: [
      "Built an automation tool in TypeScript and Hono, using Playwright to sign into UCPath, CRM and I-9 through Duo to run employee onboardings, separations and lookups, tracked on a live React dashboard.",
      "Guarded against duplicate HR records by pausing for a person when a submission's outcome is unclear, alongside a SQLite queue that survives restarts, dry-run previews, change receipts and about 700 Vitest tests.",
      "Stack: TypeScript, Hono, SQLite, React, Playwright, Vitest",
    ],
  },
  {
    id: 10,
    title: "Scribe",
    year: "2025",
    tag: "Scribe",
    category: "Automation",
    languages: ["Python"],
    image: ProjectPlaceholder,
    description: [
      "Built Scribe, a shared, timestamped log any teammate could pick up, after handwritten voicemail notes left no trace of who worked a claim or where they stopped.",
      "Written in Python and FastAPI to pull claim voicemails from an Outlook mailbox through Microsoft Graph with OAuth client credentials, transcribe them with Azure Speech-to-Text, and log each call to a shared tracker.",
    ],
  },
  {
    id: 9,
    title: "fast-duo",
    url: "https://github.com/julianthant/fast-duo",
    year: "2026",
    tag: "fast-duo",
    category: "Browser Extension",
    languages: ["JavaScript"],
    image: ProjectPlaceholder,
    description: [
      "Manifest V3 Chrome extension for local Duo authentication",
      "Guided WebAuthn enrollment",
      "MIT licensed",
    ],
  },
  {
    id: 8,
    title: "Portfolio",
    url: "https://www.julianzaw.me",
    year: "2025",
    duration: "2 mos",
    tag: "My Portfolio",
    category: "Personal Project",
    languages: ["TypeScript", "JavaScript"],
    image: CurrentPortfolio,
    description: [
      "Frontend: Next.js 15 with React 19",
      "Backend: Next.js API routes with Vercel serverless functions",
      "Database: Vercel Blob for page views tracking",
      "Tailwind CSS for responsive design",
      "Next-themes for dark/light mode toggle",
      "React Simple Typewriter for animated text",
      "React Vertical Timeline for project showcase",
    ],
  },
  {
    id: 7,
    title: "Enterprise Management System",
    url: "https://dev.twistercambodia.com",
    year: "2024 - 2025",
    duration: "8 mos",
    tag: "Twister",
    category: "Enterprise",
    languages: ["TypeScript", "Java"],
    image: TwisterCambodia,
    description: [
      "Frontend: React 18 with Vite",
      "Backend: Spring Boot with RESTful APIs",
      "Database: PostgreSQL with Flyway migrations",
      "TanStack Router/Query/Table for state management",
      "Keycloak OAuth2/OIDC authentication",
      "MinIO S3-compatible object storage service",
      "GitHub Actions CI/CD with automated testing",
      "Docker builds with GitHub Container Registry",
      "Docker Compose for service orchestration",
      "Digital Ocean cloud infrastructure deployment",
    ],
  },
  {
    id: 6,
    title: "Online Clothing Store",
    url: "https://clothes.julianzaw.me",
    year: "2024",
    duration: "3 mos",
    tag: "StyleZ",
    category: "E-Commerce",
    languages: ["TypeScript", "JavaScript"],
    image: StyleZ,
    description: [
      "Frontend: Next.js 14 with React 18",
      "Backend: Next.js API routes with Prisma ORM",
      "Database: PostgreSQL with NextAuth.js adapter",
      "Radix UI components with shadcn/ui design system",
      "NextUI for advanced component library",
      "TanStack Query for server state management",
      "Framer Motion for smooth animations",
      "React Hook Form with Zod validation",
      "Tailwind CSS with custom animations",
      "Sentry for error monitoring and performance",
    ],
  },
  {
    id: 5,
    title: "Real-Time Chat Application",
    url: "https://yaps.julianzaw.me",
    year: "2024",
    duration: "2 mos",
    tag: "Yaps",
    category: "Social",
    languages: ["TypeScript", "JavaScript"],
    image: Yaps,
    description: [
      "Frontend: Next.js 14 with React 18",
      "Backend: Next.js API routes with Pusher integration",
      "Database: Upstash Redis for session storage and caching",
      "NextAuth.js with Upstash Redis adapter",
      "React Hook Form with Zod validation",
      "Headless UI for accessible components",
      "Tailwind CSS with custom forms styling",
      "React Hot Toast for notifications",
      "Vercel Analytics and Speed Insights",
      "Lucide React for consistent iconography",
    ],
  },
  {
    id: 4,
    title: "Online Shoe Store",
    url: "https://solesteals.julianzaw.me",
    year: "2023",
    duration: "2 mos",
    tag: "SoleSteals",
    category: "E-Commerce",
    languages: ["JavaScript"],
    image: SoleSteals,
    description: [
      "Frontend: React 18 with Vite",
      "Backend: Firebase authentication and cloud functions",
      "Database: Firebase Firestore NoSQL database",
      "React Router DOM for client-side routing",
      "Tailwind CSS for utility-first styling",
      "Framer Motion for interactive animations",
      "React Responsive Carousel for product galleries",
      "React Select for enhanced filtering options",
    ],
  },
  {
    id: 3,
    title: "To Do List",
    url: "https://todo.julianzaw.me",
    year: "2023",
    duration: "1 mos",
    tag: "Todoer",
    category: "Utility",
    languages: ["JavaScript"],
    image: ToDoListWebsite,
    description: [
      "Frontend: Vanilla ES6+ features",
      "Backend: Local storage for data persistence",
      "Sass for advanced CSS preprocessing",
      "Autoprefixer for cross-browser compatibility",
      "Browser-sync for live development server",
      "PostCSS with CSSnano for optimization",
      "NPM scripts for automated build pipeline",
    ],
  },
  {
    id: 2,
    title: "Car Showroom Website",
    url: "https://stylenation.netlify.app",
    year: "2023",
    duration: "2 mos",
    tag: "Style Nation",
    category: "Business",
    languages: ["JavaScript"],
    image: CarShowroom,
    description: [
      "Frontend: Astro.js for static site generation",
      "Island architecture for optimized loading",
      "Zero-JS by default with selective hydration",
      "Built-in image optimization and lazy loading",
    ],
  },
  {
    id: 1,
    title: "Coffee Recipe Website",
    url: "https://barista.julianzaw.me",
    year: "2023",
    duration: "1 mos",
    tag: "Barista Chaw Su",
    category: "Educational",
    languages: ["JavaScript"],
    image: CoffeeWebsite,
    description: [
      "Frontend: Astro.js with React components",
      "Material-UI for consistent design system",
      "Framer Motion for smooth animations",
      "Sass for advanced styling capabilities",
    ],
  },
];

export default timelineElements;
