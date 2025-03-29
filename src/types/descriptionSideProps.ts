import { Project } from "./Project";

export type DescriptionSideProps = Pick<
  Project,
  "name" | "description" | "pageLink" | "code"
>;
