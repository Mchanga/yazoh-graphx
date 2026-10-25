import PageFrame, { ProjectGallery } from "../components/PageFrame.jsx";
import { projectCategories } from "../components/ProjectCategories.jsx";

function BrandingPage() {
  return (
    <PageFrame
      eyebrow="PORTFOLIO · BRANDING"
      title="Chapa yenye utambulisho."
      introduction="Mifumo ya rangi, alama na picha zinazosaidia chapa kukumbukwa."
    >
      <nav className="project-filters" aria-label="Kategoria za miradi">
        <a className="project-filter" href="/projects">Miradi yote</a>
        <a className="project-filter" href="/projects/graphics">Graphics</a>
        <a className="project-filter" href="/projects/motion">Motion Graphics</a>
        <a className="project-filter is-active" href="/projects/branding" aria-current="page">Branding</a>
      </nav>
      <ProjectGallery category={{ projects: projectCategories.Branding }} />
    </PageFrame>
  );
}

export default BrandingPage;
