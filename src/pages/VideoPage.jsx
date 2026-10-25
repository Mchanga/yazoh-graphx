import PageFrame, { ProjectGallery } from "../components/PageFrame.jsx";
import { projectCategories } from "../components/ProjectCategories.jsx";

function VideoPage() {
  return (
    <PageFrame
      eyebrow="PORTFOLIO · VIDEO"
      title="Picha zinazosimulia."
      introduction="Video editing na kazi za visual zinazowasilisha hadithi kwa namna ya kipekee."
    >
      <nav className="project-filters" aria-label="Kategoria za miradi">
        <a className="project-filter" href="/projects">Miradi yote</a>
        <a className="project-filter" href="/projects/graphics">Graphics</a>
        <a className="project-filter" href="/projects/motion">Motion Graphics</a>
        <a className="project-filter" href="/projects/branding">Branding</a>
        <a className="project-filter is-active" href="/projects/video" aria-current="page">Video</a>
      </nav>
      <ProjectGallery category={{ projects: projectCategories.Video }} />
    </PageFrame>
  );
}

export default VideoPage;
