export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: {
    iconImg: string;
    name: string;
  }[];
  img: string;
  pageLink: string;
  code: string;
}
