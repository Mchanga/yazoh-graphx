import PageFrame from "../components/PageFrame.jsx";

function SpeakingPage() {
  return (
    <PageFrame
      eyebrow="SPEAKING & COLLABORATIONS"
      title="Tushirikiane kwenye ubunifu."
      introduction="Kwa mazungumzo, warsha au ushirikiano wa ubunifu, nitumie maelezo ya tukio au mradi wako."
    >
      <div className="page-contact-card">
        <div>
          <p className="eyebrow">SPEAKING · WORKSHOPS · COLLABS</p>
          <h2>Wazo la ushirikiano?</h2>
          <p>
            Tuma ujumbe wenye maelezo ya tukio, hadhira na tarehe unayopanga.
          </p>
        </div>
        <a
          className="button page-button"
          href="https://wa.me/255683525016"
          target="_blank"
          rel="noreferrer"
        >
          TUONGEE WHATSAPP <span aria-hidden="true">↗</span>
        </a>
      </div>
    </PageFrame>
  );
}

export default SpeakingPage;
