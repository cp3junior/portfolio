import { PageInterface, SkillsInterface } from "./interfaces";

export const pages: PageInterface[] = [
  { name: "Home", path: "/", key: "header.home" },
  { name: "Projects", path: "/projects", key: "header.projects" },
];

export const skills: SkillsInterface[] = [
  {
    id: 1,
    value: "ReactJS",
  },
  {
    id: 2,
    value: "React Native",
  },
  {
    id: 3,
    value: "TypeScript",
  },
  {
    id: 4,
    value: "Redux",
  },
  {
    id: 5,
    value: "VueJS",
  },
  {
    id: 6,
    value: "NodeJS",
  },
  {
    id: 7,
    value: "MySQL",
  },
  {
    id: 8,
    value: "GraphQL",
  },
  {
    id: 9,
    value: "CI/CD",
  },
  {
    id: 10,
    value: "AWS",
  },
  {
    id: 11,
    value: "SASS",
  },
  {
    id: 12,
    value: "PWA",
  },
];
