export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl: string;
  secondaryImages: string[];
  link?: string;
  github?: string;
  year: string;
  category: string;
  color: string;
}