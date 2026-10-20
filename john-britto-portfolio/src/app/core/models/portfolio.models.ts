export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  approach: string;
  decisions: string[];
  outcome: string;
  technologies: string[];
  lessons: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}
