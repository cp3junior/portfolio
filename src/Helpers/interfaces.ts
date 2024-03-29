export interface ContextInterface {
  language: string;
  t: (text: string, key: string) => string;
  changeLanguage: (key: string) => void;
  toggleTheme: () => void;
}

export interface PageInterface {
  name: string;
  path: string;
  key: string;
}

export interface SkillsInterface {
  id: number;
  value: string;
}

export interface ProjectInterface {
  id: number;
  type: string;
  title: string;
  title_fr: string;
  url?: string;
  stack: string;
  image: string;
  thumbnail1: string;
  thumbnail2?: string;
  thumbnail3?: string;
  description: string;
  description_fr: string;
  client: string;
  country: string;
  country_fr: string;
  employer: string;
  key: string;
}

export interface ExperienceInterface {
  key: string;
  start: string;
  start_fr: string;
  end: string;
  end_fr: string;
  title: string;
  title_fr: string;
  subtitle: string;
  subtitle_fr: string;
  description: string;
  description_fr: string;
}

export interface EducationInterface {
  id: number;
  start: string;
  start_fr: string;
  end: string;
  end_fr: string;
  title: string;
  title_fr: string;
  subtitle: string;
  subtitle_fr: string;
  description: string;
  description_fr: string;
}

export interface TranslationInterface {
  [key: string]: string;
}
