export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  name: string;
  skills: Skill[];
}

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageHint: string;
  githubUrl: string;
  liveUrl?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string[];
};
