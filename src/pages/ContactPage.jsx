import PageFrame from "../components/PageFrame.jsx";
import InstagramLink from "../components/InstagramLink.jsx";

function ContactPage() {
  return (
    <PageFrame
      eyebrow="WASILIANA"
      title="Tuanze na mazungumzo."
      introduction="Una wazo la mradi au unahitaji huduma ya ubunifu? Niandikie kupitia njia unayopendelea—tutazungumza kuhusu lengo, mahitaji na hatua zinazofuata."
    >
      <div className="page-contact-card">
        <div className="page-contact-card__intro">
          <p className="eyebrow">TUUNGANE · DAR ES SALAAM, TANZANIA</p>
          <h2>Tupe wazo lako uhai.</h2>
          <p>
            Ili tuanze vizuri, eleza huduma unayohitaji, lengo la kazi, muda
            unaokufaa na maelezo mengine muhimu. Nitakujibu tujadili namna ya
            kuendeleza wazo lako.
          </p>
        </div>
        <div className="page-contact-options">
          <a
            className="page-contact-option page-contact-option--whatsapp"
            href="https://wa.me/255687624801"
            target="_blank"
            rel="noreferrer"
          >
            <span className="page-contact-option__label">WHATSAPP</span>
            <strong>+255 687 624 801</strong>
            <span className="page-contact-option__action">
              TUMA UJUMBE <span aria-hidden="true">↗</span>
            </span>
          </a>
          <div className="page-contact-option page-contact-option--instagram">
            <span className="page-contact-option__label">INSTAGRAM</span>
            <div className="page-contact-option__instagram">
              <InstagramLink />
              <a
                href="https://www.instagram.com/yazohgraphx/"
                target="_blank"
                rel="noreferrer"
                aria-label="Fungua Instagram @yazohgraphx"
              >
                @yazohgraphx
              </a>
            </div>
            <a
              className="page-contact-option__action"
              href="https://www.instagram.com/yazohgraphx/"
              target="_blank"
              rel="noreferrer"
            >
              TEMBELEA PROFILE <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

export default ContactPage;
