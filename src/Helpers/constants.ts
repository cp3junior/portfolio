import { PageInterface, SkillsInterface } from "./interfaces";

export const pages: PageInterface[] = [
  { name: "Home", path: "/", key: "header.home" },
  { name: "Projects", path: "/projects", key: "header.projects" },
];

export const projectImageBasePath = `${process.env.REACT_APP_CDN}Assets/projects/`;

export const skills: SkillsInterface[] = [
  {
    id: 1,
    value: "ReactJS",
  },
  {
    id: 2,
    value: "TypeScript",
  },
  {
    id: 3,
    value: "HTML 5 / CSS 3",
  },
  {
    id: 4,
    value: "NextJS",
  },
  {
    id: 5,
    value: "NodeJS",
  },
  {
    id: 6,
    value: "MySQL",
  },
  {
    id: 7,
    value: "GraphQL",
  },
  {
    id: 8,
    value: "React Native",
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
