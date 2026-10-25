import PageFrame from "../components/PageFrame.jsx";

function MediaPage() {
  return (
    <PageFrame
      eyebrow="MEDIA"
      title="Mchakato wa ubunifu na mawazo mapya."
      introduction="Maudhui yanayoonyesha nyuma ya pazia, mbinu za kazi na msukumo wa kila siku."
    >
      <div className="page-link-grid">
        <a href="/media/behind-the-scenes">
          <span>01 / PROCESS</span>
          <h2>Behind the scenes</h2>
          <p>Angalia mchakato wa kazi za ubunifu.</p>
          <span className="page-link-arrow">FUNGUA →</span>
        </a>
        <a href="/media/tutorials">
          <span>02 / LEARN</span>
          <h2>Tutorials</h2>
          <p>Mawazo na maelezo ya design na motion.</p>
          <span className="page-link-arrow">FUNGUA →</span>
        </a>
      </div>
    </PageFrame>
  );
}

export default MediaPage;
