import PageFrame, { PageLink } from "../components/PageFrame.jsx";

function NotFoundPage() {
  return (
    <PageFrame
      eyebrow="404 · UKURASA HAUJAPATIKANA"
      title="Hatujaona ukurasa huo."
      introduction="Kiungo ulichofungua hakipo au kimehamishwa."
    >
      <PageLink href="/">RUDI MWANZO</PageLink>
    </PageFrame>
  );
}

export default NotFoundPage;
