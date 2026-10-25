import InstagramLink from "./InstagramLink.jsx";

const currentYear = new Date().getFullYear();

function PageFrame({ eyebrow, title, introduction, children }) {
  return (
    <main className="page-main">
      <section className="page-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__intro">{introduction}</p>
      </section>
      <section className="page-content">{children}</section>
      <footer className="page-footer">
        <span>
          © {currentYear} Created by{" "}
          <a
            href="https://sanistech-portfolio-hnvi.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            Sandistech
          </a>{" "}
          · DODOMA
        </span>
        <InstagramLink />
      </footer>
    </main>
  );
}

export function PageLink({ href, children }) {
  return (
    <a className="button page-button" href={href}>
      {children} <span aria-hidden="true">→</span>
    </a>
  );
}

export function ProjectGallery({ category }) {
  return (
    <div className="project-grid">
      {category.projects.map((project, index) => (
        <article className="project-card" key={project.title}>
          <div className="project-art project-art--media">
            {project.mediaType === "video" ? (
              <video
                className="project-art__media project-art__media--video"
                src={project.src}
                controls
                muted
                playsInline
                preload="metadata"
                aria-label={project.title}
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
              {String(category.projects.length).padStart(2, "0")}
            </span>
            <span className="project-art__tag">{project.tag}</span>
          </div>
          <div className="project-card__details">
            <div>
              <p>{project.category}</p>
              <h3>{project.title}</h3>
            </div>
            <span>{project.description}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ContentList({ entries }) {
  return (
    <div className="page-entry-list">
      {entries.map(([number, title, description, steps]) => (
        <article key={number}>
          <span>{number}</span>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
            {steps && (
              <ol>
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default PageFrame;
