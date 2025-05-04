import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "project1",
    title: "IHEC Library",
    shortDescription: "A comprehensive desktop library management system for IHEC institution.",
    fullDescription: "This sophisticated library management system allows librarians and students to efficiently manage and access the institution's vast collection of resources. The system includes features for cataloging, borrowing tracking, search functionality, and detailed analytics about library usage patterns.",
    technologies: ["C#", "React", "SQL", "AspDotnet"],
    imageUrl: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
    secondaryImages: [
      "https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg",
      "https://images.pexels.com/photos/4622893/pexels-photo-4622893.jpeg"
    ],
    link: "https://example.com/ihec-library",
    github: "https://github.com/example/ihec-library",
    year: "2025",
    category: "Web Development • Desktop Application",
    color: "#8B5CF6"
  },
  {
    id: "project2",
    title: "Sustainable City Planning Tool",
    shortDescription: "An urban planning solution that simulates environmental impact of architectural designs.",
    fullDescription: "This advanced tool helps urban planners and architects visualize and measure the environmental impact of their designs. It incorporates real-time climate data, energy usage patterns, and transportation metrics to suggest sustainable alternatives. The tool provides detailed reports and visualizations to help stakeholders make informed decisions about urban development projects.",
    technologies: ["Python", "TensorFlow", "D3.js", "GIS Mapping"],
    imageUrl: "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg",
    secondaryImages: [
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
      "https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg"
    ],
    link: "https://example.com/sustainablecity",
    github: "https://github.com/example/sustainablecity",
    year: "2023",
    category: "Data Visualization",
    color: "#10B981"
  },
  {
    id: "project3",
    title: "Neural Audio Synthesis",
    shortDescription: "A machine learning system that generates unique musical compositions based on emotional inputs.",
    fullDescription: "This innovative audio synthesis system uses neural networks to create original musical compositions based on emotional input parameters. Users can specify moods, energy levels, and stylistic preferences to generate unique pieces of music. The system adapts to user feedback, improving its outputs over time and creating a personalized music creation experience.",
    technologies: ["TensorFlow", "Web Audio API", "React", "Node.js"],
    imageUrl: "https://images.pexels.com/photos/164695/pexels-photo-164695.jpeg",
    secondaryImages: [
      "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
      "https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg"
    ],
    link: "https://example.com/neuralaudio",
    github: "https://github.com/example/neuralaudio",
    year: "2023",
    category: "Artificial Intelligence",
    color: "#F59E0B"
  },
  {
    id: "project4",
    title: "Biometric Authentication System",
    shortDescription: "A secure multi-factor authentication system using facial recognition and behavioral patterns.",
    fullDescription: "This advanced authentication system combines facial recognition technology with behavioral biometrics to create a highly secure yet user-friendly login experience. The system analyzes typing patterns, mouse movements, and other behavioral indicators alongside traditional biometric data to verify user identity. It includes anti-spoofing measures and adapts to gradual changes in user appearance and behavior over time.",
    technologies: ["Computer Vision", "Machine Learning", "React", "Node.js"],
    imageUrl: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    secondaryImages: [
      "https://images.pexels.com/photos/4100654/pexels-photo-4100654.jpeg",
      "https://images.pexels.com/photos/2882553/pexels-photo-2882553.jpeg"
    ],
    link: "https://example.com/biometricauth",
    github: "https://github.com/example/biometricauth",
    year: "2022",
    category: "Security",
    color: "#EC4899"
  }
];