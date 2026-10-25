import { projects } from "../portfolioData.js";

export const projectCategories = {
  "All work": projects,
  Graphics: projects.filter((project) => project.category === "Graphics"),
  "Motion Graphics": projects.filter(
    (project) => project.category === "Motion Graphics",
  ),
  Branding: projects.filter((project) => project.category === "Branding"),
  Video: projects.filter((project) => project.category === "Video"),
};
