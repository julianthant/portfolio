import SMC from "@/assets/company/smc.jpg";
import UCSD from "@/assets/company/ucsd.jpg";
import { StaticImageData } from "next/image";

export interface EducationElement {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  image: StaticImageData;
}

const educationElements: EducationElement[] = [
  {
    id: 1,
    institution: "UC San Diego",
    degree: "Bachelor of Computer Science",
    field: "Computer Science",
    period: "Expected Jun 2028",
    location: "San Diego, CA",
    image: UCSD,
  },
  {
    id: 2,
    institution: "Santa Monica College",
    degree: "Associate of Science - AS",
    field: "Computer Science",
    period: "Aug 2025 · GPA 3.6",
    location: "Santa Monica, CA",
    image: SMC,
  },
];

export default educationElements;
