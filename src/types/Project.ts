export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: {
    icon: React.FC;
    name: string;
  }[];
  img: string;
  pageLink: string;
  code: string;
}
