export interface ProjectSection {
  title: string;
  id: string;
  content: string;
  points?: string[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  caseStudy: string;
  shortDescription: string;
  description: string;
  icon: string;
  sections: ProjectSection[];
  dataBox?: {
    title: string;
    headers: string[];
    rows: string[][];
  };
}
