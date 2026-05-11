export type Recognition = {
  year: number;
  body: string;
  achievement: string;
  category: "award" | "platform" | "exchange" | "talk";
  location?: string;
};

export const RECOGNITIONS: Recognition[] = [
  {
    year: 2026,
    body: "Department of Science and Technology, Government of India",
    achievement: "Visvesvaraya Postdoctoral Fellowship",
    category: "award",
  },
  {
    year: 2025,
    body: "University of Cambridge, UK",
    achievement: "Poster and innovation pitch at the Cambridge Wearable Innovation Forum",
    category: "platform",
    location: "Cambridge",
  },
  {
    year: 2025,
    body: "International Workshop of Advanced Materials, Ras Al Khaimah",
    achievement: "Travel Award for MWCNT-PDMS TENG biomedical research",
    category: "award",
    location: "UAE",
  },
  {
    year: 2024,
    body: "University of Oxford, UK",
    achievement: "Oral talk at the Inaugural Annual Podium Institute Conference on Sports Medicine and Technology",
    category: "talk",
    location: "Oxford",
  },
  {
    year: 2024,
    body: "Nottingham Trent University, UK",
    achievement: "Visiting Exchange Student under UKIERI-SPARC",
    category: "exchange",
    location: "Nottingham",
  },
  {
    year: 2024,
    body: "Edinburgh Napier University, Scotland",
    achievement: "Joint talk on triboelectric nanogenerators for wearable and implantable devices",
    category: "talk",
    location: "Edinburgh",
  },
  {
    year: 2024,
    body: "Government of India, DST THSTI",
    achievement: "Best Poster, Young Scientist Conference at India International Science Festival",
    category: "award",
    location: "Faridabad",
  },
  {
    year: 2024,
    body: "PEC University of Technology",
    achievement: "Best Poster, Engineered Materials for Sustainable Development conference",
    category: "award",
    location: "Chandigarh",
  },
  {
    year: 2023,
    body: "IIT Madras",
    achievement: "Best Poster, International Conference on Thin Films and Nanotechnology (ICTN-KLC)",
    category: "award",
    location: "Chennai",
  },
  {
    year: 2023,
    body: "Government of India",
    achievement: "First Prize, India International Science Festival 2022, theme THE FIRE",
    category: "award",
    location: "MANIT Bhopal",
  },
];

export const FUNDING = [
  {
    name: "UKIERI-SPARC",
    title: "Self-powered Wearable Biosensor Integrated with Nanopore and Triboelectric Nanogenerator",
    amounts: "£55,780 plus Rs 5,962,700",
    role: "Proposal contributor, technical and budget sections",
  },
  {
    name: "PUAARG",
    title: "Design and Development of an Artificial Cardiac Model for Self-Powered Implantable Cardiac Pacemaker",
    amounts: "Rs 50,000",
    role: "PhD project lead",
  },
];
