import PageFrame, { ProjectGallery } from "../components/PageFrame.jsx";
import { projectCategories } from "../components/ProjectCategories.jsx";

function MotionPage() {
  return (
    <PageFrame
      eyebrow="PORTFOLIO · MOTION"
      title="Mawazo yanayopata mwendo."
      introduction="Motion graphics na animation zinazounganisha typography, rhythm na simulizi."
    >
      <nav className="project-filters" aria-label="Kategoria za miradi">
        <a className="project-filter" href="/projects">Miradi yote</a>
        <a className="project-filter" href="/projects/graphics">Graphics</a>
        <a className="project-filter is-active" href="/projects/motion" aria-current="page">Motion Graphics</a>
        <a className="project-filter" href="/projects/branding">Branding</a>
        <a className="project-filter" href="/projects/video">Video</a>
      </nav>
      <ProjectGallery category={{ projects: projectCategories["Motion Graphics"] }} />
    </PageFrame>
  );
}

export default MotionPage;
