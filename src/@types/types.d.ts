type Project = {
  projectName: string;
  projectDescription: string;
  techStack: string[];
  links: Link[];
};

type Link = {
  name: string;
  url: string;
};

type Skill = {
  skillName: string;
  skills: string[];
};

declare module '*.pdf';
