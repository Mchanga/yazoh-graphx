import PageFrame, { ProjectGallery } from "../components/PageFrame.jsx";
import { projectCategories } from "../components/ProjectCategories.jsx";

function GraphicsPage() {
  return (
    <PageFrame
      eyebrow="PORTFOLIO · GRAPHICS"
      title="Picha zenye ujumbe."
      introduction="Posters, kampeni na majaribio ya 3D kutoka kwenye portfolio ya Yazoh Graphx."
    >
      <nav className="project-filters" aria-label="Kategoria za miradi">
        <a className="project-filter" href="/projects">Miradi yote</a>
        <a className="project-filter is-active" href="/projects/graphics" aria-current="page">Graphics</a>
        <a className="project-filter" href="/projects/motion">Motion Graphics</a>
        <a className="project-filter" href="/projects/branding">Branding</a>
        
      </nav>
      <ProjectGallery category={{ projects: projectCategories.Graphics }} />
    </PageFrame>
  );
}

export default GraphicsPage;
