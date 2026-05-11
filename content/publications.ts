export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  impactFactor?: number;
  firstAuthor: boolean;
  status?: "published" | "under-review";
  featured?: boolean;
  note?: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    title: "Single Electrode Triboelectric Nanogenerator Integrated Pacemaker Lead for Cardiac Energy Harvesting",
    authors: "Akshpreet Kaur, Shivam Jadaun, Manthan Sharma, Ankur Gupta, Gaurav Sapra",
    journal: "Sensors and Actuators A: Physical",
    year: 2025,
    doi: "10.1016/j.sna.2025.116606",
    impactFactor: 4.9,
    firstAuthor: true,
    status: "published",
    featured: true,
  },
  {
    title: "Simulation and Experimental Evaluation of Freestanding Triboelectric Layer Nanogenerator for Self-powered Electronics",
    authors: "Kuldeep Singh, Akshpreet Kaur, Preetika Sharma, Gaurav Sapra",
    journal: "Molecular Systems Design and Engineering, RSC",
    year: 2025,
    doi: "10.1039/D5ME00055F",
    impactFactor: 3.2,
    firstAuthor: false,
    status: "published",
    note: "Artwork accepted for the journal cover page",
  },
  {
    title: "Smart Wearable Triboelectric Nanogenerator for Self-powered Bioelectronics and Therapeutics",
    authors: "Akshpreet Kaur, Ankur Gupta, Cuifeng Ying, Mohsen Rahmani, Gaurav Sapra",
    journal: "Microelectronic Engineering",
    year: 2023,
    doi: "10.1016/j.mee.2023.111992",
    impactFactor: 3.1,
    firstAuthor: true,
    status: "published",
    featured: true,
    note: "The science behind the Rehab Glove",
  },
  {
    title: "Impact of Deformations on Structural and Electronic Properties of MWCNT-PDMS based Triboelectric Nanogenerator",
    authors: "Akshpreet Kaur, Sukhbir Singh, Shivam Jadaun, Ankur Gupta, Gaurav Sapra",
    journal: "Journal of Materials Science: Materials in Electronics",
    year: 2024,
    doi: "10.1007/s10854-023-11858-w",
    impactFactor: 2.9,
    firstAuthor: true,
    status: "published",
  },
  {
    title: "Density Functional Theory and Experimental Investigations of MWCNT-PDMS based Triboelectric Nanogenerator",
    authors: "Akshpreet Kaur, Sukhbir Singh, Preetika Sharma, Gaurav Sapra, Ankur Gupta",
    journal: "Materials Today Communications",
    year: 2022,
    doi: "10.1016/j.mtcomm.2022.104742",
    impactFactor: 4.5,
    firstAuthor: true,
    status: "published",
    featured: true,
  },
  {
    title: "Recent Progress on Energy Harvesters for Biomedical Applications",
    authors: "Akshpreet Kaur, Gaurav Sapra, Ankur Gupta",
    journal: "Journal of Circuits, Systems and Computers",
    year: 2021,
    doi: "10.1142/S0218126621300105",
    impactFactor: 1.0,
    firstAuthor: true,
    status: "published",
  },
  {
    title: "Design and Development of Sensing Unit for Wire Rope Tester",
    authors: "Sukesha Sharma, Manu Sharma, Nitika Garg, Akshpreet Kaur, Gaurav Sapra, Naveen Aggarwal, JK Goswami",
    journal: "IETE Journal of Research, Taylor and Francis",
    year: 2024,
    doi: "10.1080/03772063.2024.2409716",
    impactFactor: 1.5,
    firstAuthor: false,
    status: "published",
  },
  {
    title: "Non-destructive Evaluation and Development of a New Wire Rope Tester Using Parallely Magnetized NdFeB Magnet Segments",
    authors: "Akshpreet Kaur et al.",
    journal: "Journal of Nondestructive Evaluation",
    year: 2018,
    doi: "10.1007/s10921-018-0516-y",
    impactFactor: 2.8,
    firstAuthor: true,
    status: "published",
  },
  {
    title: "Multi-Phase Triboelectric Nanogenerator for Energy Harvesting and Self-powered Speed Sensing",
    authors: "Kuldeep Singh, Akshpreet Kaur, Preetika Sharma, Gaurav Sapra",
    journal: "physica status solidi (a)",
    year: 2025,
    doi: "",
    impactFactor: 1.9,
    firstAuthor: false,
    status: "under-review",
  },
];

export const SCHOLAR_METRICS = {
  citations: 143,
  hIndex: 8,
  i10Index: 8,
  cumulativeIF: 23.9,
  totalPapers: 9,
  scholarUrl: "https://scholar.google.com/citations?user=dQqEg0EAAAAJ&hl=en",
};
