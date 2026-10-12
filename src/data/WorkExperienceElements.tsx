import KBZBankLogo from "@/assets/company/kbz_bank_logo.jpeg";
import BaristaChawSuLogo from "@/assets/company/baristachawsu.png";
import SamsungSDSLogo from "@/assets/company/samsung.jpg";
import SMCLogo from "@/assets/company/smc.jpg";
import StyleNationLogo from "@/assets/company/style-nation.png";
import UCSDLogo from "@/assets/company/ucsd.jpg";
import { StaticImageData } from "next/image";

interface WorkExperienceElement {
  id: number;
  title: string;
  company: string;
  location: string;
  year: string;
  period: string;
  type: string;
  image: StaticImageData;
  description: string[];
}

const workExperienceElements: WorkExperienceElement[] = [
  {
    id: 0,
    title: "Student Assistant - STDT 4 RRSS Human Resources",
    company: "University of California, San Diego",
    location: "San Diego, California, United States",
    year: "2025",
    period: "Oct 2025 - Present",
    type: "Part-time",
    image: UCSDLogo,
    description: [
      "• Found onboarding, separations, and employee lookups done by hand and, outside the student assistant role, independently proposed and built an internal automation platform for UCPath, I-9, CRM, and EDMS.",
      "• Led onboarding for 200+ employees per quarter and automated account provisioning, validation checks, system access setup, and document routing, cutting hours of coordination per hiring cycle.",
      "• Migrated 1000+ department's paper records into EDMS with standardized naming conventions and automation-assisted document handling, reducing record lookup from a manual search to a keyword query.",
    ],
  },
  {
    id: 1,
    title: "Student Assistant - Insurance Claims",
    company: "Santa Monica College (Emeritus)",
    location: "Los Angeles, California, United States",
    year: "2024",
    period: "Dec 2024 - Aug 2025",
    type: "Part-time",
    image: SMCLogo, // Placeholder for company logo
    description: [
      "• Built Scribe, a shared, timestamped log any teammate could pick up, after handwritten voicemail notes left no trace of who worked a claim or where they stopped, saving 10+ hours a week.",
      "• Wrote Scribe in Python and FastAPI to pull claim voicemails from an Outlook mailbox through Microsoft Graph with OAuth client credentials, transcribe them with Azure Speech-to-Text, and log each call to a shared tracker.",
      "• Administered the Supplemental Job Displacement Benefits program for 300+ active claims and $100K+ in benefits, handling invoices and adjuster communication, and resolved 100+ weekly inquiries at 90% first-contact resolution.",
    ],
  },
  {
    id: 2,
    title: "Barista & Social Media Coordinator",
    company: "Tell Us Cafe",
    location: "Mandalay, Myanmar",
    year: "2023",
    period: "Sep 2023 - Nov 2023",
    type: "Full-time",
    image: BaristaChawSuLogo, // Placeholder for company logo
    description: [
      "• Delivered high-quality service to 120+ customers daily by accurately fulfilling orders, operating POS systems, and maintaining a friendly, professional environment.",
      "• Reduced product waste by 35% through daily restocking, inventory rotation, and proper handling of short-date items during opening and closing procedures.",
      "• Increased customer engagement by 40% by managing the café’s Facebook page, posting weekly content, updating menus, and responding to messages and reviews.",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing & Sales Lead",
    company: "Style Nation",
    location: "Mandalay, Myanmar",
    year: "2023",
    period: "July 2021 - Nov 2023",
    type: "Hybrid",
    image: StyleNationLogo,
    description: [
      "• Designed and launched a responsive website to showcase the car showroom, improving brand credibility and contributing to a 30% increase in online inquiries through linked social media and contact channels.",
      "• Managed and delegated daily tasks to a 5-person team, coordinating responsibilities across scheduling, showroom upkeep, and customer assistance, leading to a 40% improvement in task completion efficiency.",
      "• Sold 15+ vehicles in the owner’s absence by handling customer walk-ins, conducting vehicle walkthroughs, and closing sales, while managing a Facebook account with 2,000+ followers to post listings and engage with prospective buyers.",
    ],
  },
  {
    id: 4,
    title: "Software & Technology Intern",
    company: "KBZ Bank",
    location: "Yangon, Myanmar",
    year: "2023",
    period: "May 2023 - Aug 2023",
    type: "Internship",
    image: KBZBankLogo,
    description: [
      "• Wrote SQL queries joining transaction and account tables, using aggregations and date-range filtering to produce summary reports of customer activity for internal reporting.",
      "• Wrote JUnit unit tests for a Java/Spring Boot service class and REST endpoint, covering business logic and request handling in a system processing live financial data.",
      "• Implemented Burmese/English localization in the web frontend by externalizing UI text into translation resource files and adding a language switcher, so the interface could be used in either language.",
    ],
  },
  {
    id: 5,
    title: "Operations Management Intern",
    company: "SAMSUNG SDS THAILAND",
    location: "Bangkok City, Thailand",
    year: "2022",
    period: "Mar 2022 - Jun 2022",
    type: "Internship",
    image: SamsungSDSLogo, // Placeholder for company logo
    description: [
      "• Improved internal employee satisfaction rating from 3.8 to 4.3 stars (+13%) by assisting in onboarding and supporting staff with Samsung's internal CRM and Slack.",
      "• Delivered software training sessions for new employees on Slack and Microsoft Teams, streamlining team communication from day one.",
      "• Designed a new operational scheme for the cloud Storage department.",
    ],
  },
];

export default workExperienceElements;
