import { useState } from "react";
import PageFrame, { ProjectGallery } from "../components/PageFrame.jsx";
import { categories, projects } from "../portfolioData.js";

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All work");
  const categoryPreviews = categories
    .filter((category) => category !== "All work")
    .map((category) => {
      const categoryProjects = projects.filter(
        (project) => project.category === category,
      );

      return {
        ...categoryProjects[0],
        category,
        totalItems: categoryProjects.length,
        projects: categoryProjects,
      };
    })
    .filter((category) => category.projects.length > 0);

  const selectedProjects = projects.filter(
    (project) => project.category === activeCategory,
  );

  return (
    <PageFrame
      eyebrow="PORTFOLIO"
      title="Kila mradi, hadithi yake."
      introduction="Chagua category kuona project ya mfano, kisha fungua kazi zote zinazohusiana nayo."
    >
      <div className="project-filters" role="group" aria-label="Chuja miradi">
        {categories.map((category) => (
          <button
            className={`project-filter${activeCategory === category ? " is-active" : ""}`}
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {activeCategory === "All work" ? (
        <div className="project-grid" aria-live="polite">
          {categoryPreviews.map((project, index) => (
            <article
              className="project-card project-card--selectable"
              key={project.category}
              onClick={() => setActiveCategory(project.category)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveCategory(project.category);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`Fungua miradi ya ${project.category}`}
            >
              <div className="project-art project-art--media">
                {project.mediaType === "video" ? (
                  <video
                    className="project-art__media"
                    src={project.src}
                    muted
                    playsInline
                    autoPlay
                    loop
                    preload="metadata"
                    aria-label={`Mfano wa ${project.category}`}
                  />
                ) : (
                  <img
                    className="project-art__media"
                    src={project.src}
                    alt={project.alt}
                    loading="lazy"
                  />
                )}
                <span className="project-art__index">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(project.totalItems).padStart(2, "0")}
                </span>
                <span className="project-art__tag">{project.category}</span>
              </div>
              <div className="project-card__details">
                <div>
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <span>{project.totalItems} kazi · Bofya kuona zote</span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <ProjectGallery category={{ projects: selectedProjects }} />
      )}
    </PageFrame>
  );
}

export default ProjectsPage;
