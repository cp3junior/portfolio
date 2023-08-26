import { PageInterface, SkillsInterface } from "./interfaces";

export const pages: PageInterface[] = [
  { name: "Home", path: "/", key: "header.home" },
  { name: "Projects", path: "/projects", key: "header.projects" },
];

export const projectImageBasePath = `${process.env.REACT_APP_CDN}Assets/projects/`;

export const skills: SkillsInterface[] = [
  {
    id: 1,
    value: "ReactJS / NextJS",
  },
  {
    id: 2,
    value: "TypeScript / ES6+",
  },
  {
    id: 3,
    value: "NodeJS / ExpressJS",
  },
  {
    id: 4,
    value: "SQL / NoSQL",
  },
  {
    id: 5,
    value: "HTML 5 / CSS 3",
  },
  {
    id: 6,
    value: "React Native",
  },
  {
    id: 7,
    value: "Unit Testing",
  },
  {
    id: 8,
    value: "CI/CD",
  },
  {
    id: 9,
    value: "RESTful API",
  },
  {
    id: 10,
    value: "Git",
  },
  {
    id: 11,
    value: "Agile",
  },
  {
    id: 12,
    value: "Bash",
  },
];
