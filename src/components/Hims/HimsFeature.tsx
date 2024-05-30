// featureData.ts
export interface Feature {
  id: number;
  category: string;
  points: string[];
}

export const featuresData: Feature[] = [
  {
    id: 1,
    category: "Overview",
    points: [
      "Focuses on the administrative needs of hospitals.",
      "Comprehensive, integrated information system.",
      "Manages medical, administrative, financial, and legal aspects of hospital operations.",
    ],
  },
  {
    id: 2,
    category: "Importance of Health Services",
    points: [
      "Provides medical assistance to people.",
      "Essential for hospital operations.",
    ],
  },
  {
    id: 3,
    category: "Patient Information Management",
    points: [
      "Central source for patient health history.",
      "Ensures data security and controlled access.",
      "Enhances care coordination with timely access to patient information.",
      "Provides access to laboratory test results and visual data like X-rays.",
    ],
  },
  {
    id: 4,
    category: "Communication",
    points: [
      "Facilitates internal and external communication among healthcare providers.",
    ],
  },
  {
    id: 5,
    category: "Operational Management",
    points: [
      "Manages hospital documentation, financial reports, personal data, utilities, and stock levels.",
      "Secures patient information, medical history, prescriptions, operations, and test results.",
    ],
  },
  {
    id: 6,
    category: "Error Prevention and Efficiency",
    points: [
      "Reduces handwriting errors.",
      "Addresses overstock issues.",
      "Resolves scheduling conflicts.",
      "Minimizes documentation errors, including tax preparation mistakes.",
    ],
  },
];
