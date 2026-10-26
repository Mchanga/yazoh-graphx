import { useState } from "react";
import backgroundVideo from "../assets/back.mp4";
import yazzoh from "../assets/yazzoh.jpeg";
import { categories, projects, services } from "../portfolioData.js";
import InstagramLink from "./InstagramLink.jsx";

const currentYear = new Date().getFullYear();

function ArrowIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function Home() {
  const [activeCategory, setActiveCategory] = useState("All work");
  const [selectedService, setSelectedService] = useState("01");

  const categoryGroups = categories
    .filter((category) => category !== "All work")
    .map((category) => {
      const items = projects.filter((project) => project.category === category);
      const featured = items[0] || {
        category,
        title: category,
        description: "Creative portfolio work",
        mediaType: "image",
        src: "",
        alt: `${category} portfolio preview`,
        tag: category.toUpperCase(),
      };

      return {
        ...featured,
        title: featured.title || category,
        description:
          items.length > 1
            ? `${items.length} pieces in this collection`
            : "1 piece in this collection",
        category,
        tag: category.toUpperCase(),
        totalItems: items.length,
        items,
      };
    });

  const visibleProjects =
    activeCategory === "All work"
      ? categoryGroups
      : projects
          .filter((project) => project.category === activeCategory)
          .map((project) => ({ ...project, totalItems: projects.filter((item) => item.category === activeCategory).length }));

  return (
    <main>
      <section className="hero" id="home" aria-label="Yazoh Graphx">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={yazzoh}
          className="hero__video"
          aria-hidden="true"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="hero__shade" />
        <div className="hero__content">
          <p className="eyebrow hero__eyebrow">CREATIVE DESIGNER · DAR ES SALAAM</p>
          <h1>
            Ideas in
            <br />
            <span>motion.</span>
          </h1>
          <p className="hero__intro">
            Graphics zenye maana. Motion yenye hisia.
            <br className="desktop-break" /> Kazi nzuri inayoacha alama.
          </p>
          <a className="button button--light" href="#projects">
            TAZAMA KAZI ZANGU <ArrowIcon className="button__icon" />
          </a>
        </div>
        <div className="hero__footer">
          <span>DESIGN · MOTION · VISUAL STORIES</span>
          <a href="#about">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
        </div>
        <span className="hero__index" aria-hidden="true">
          01 / 04
        </span>
      </section>

      <section className="about section-wrap" id="about">
        <div className="about__image-wrap">
          <img src={yazzoh} alt="Yazoh Graphx, mbunifu wa Yazoh Graphx" />
          <span className="about__image-caption">YAZOH GRAPHX · DSM, TZ</span>
        </div>
        <div className="about__copy">
          <p className="eyebrow">HABARI, MIMI NI YAZOH</p>
          <h2>
            Ubunifu unaoonekana.
            <br />
            <span>Hadithi inayobaki.</span>
          </h2>
          <p>
            Mimi ni Yazoh Graphx, mbunifu wa graphic na motion kutoka Dar es
            Salaam. Ninasaidia biashara, wasanii na watu wenye mawazo mazuri
            kuyageuza kuwa picha, chapa na video zenye mvuto.
          </p>
          <p>
            Kila mradi ni nafasi ya kujaribu kitu kipya 
            kuanzia poster ya
            kwanza hadi utambulisho kamili wa chapa(logo). Ninapenda kazi iliyo wazi,
            yenye ujasiri na inayozungumza na watu wake.
          </p>
          <a className="text-link" href="#contact">
            TUJADILI WAZO LAKO <ArrowIcon className="text-link__icon" />
          </a>
          <div className="about__stats">
            <div>
              <strong>Graphics</strong>
              <span>Ubunifu wa posters</span>
            </div>
            <div>
              <strong>Motion Graphics</strong>
              <span>Video Graphics na animation</span>
            </div>
             <div>
              <strong>Branding Identity</strong>
              <span>Logo na utambulisho wa Biashara</span>
            </div>
            <div>
              <strong>DSM</strong>
              <span>Tanzania</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services section-wrap" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">NINACHOFANYA</p>
            <h2>
              Mawazo yako,
              <br />
              <span>kwa lugha ya picha.</span>
            </h2>
          </div>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const isOpen = selectedService === service.number;

            return (
              <article
                className={`service-card${isOpen ? " is-open" : ""}`}
                key={service.number}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
              >
                <span className="service-card__number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>

                {isOpen && <p className="service-card__details-copy">{service.description}</p>}

                <button
                  type="button"
                  className="service-card__toggle"
                  aria-label={isOpen ? `Hide details for ${service.title}` : `Show details for ${service.title}`}
                  onClick={() => setSelectedService(isOpen ? "" : service.number)}
                >
                  <ArrowIcon className="service-card__icon" />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="projects section-wrap" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">KAZI NILIZOFANYA</p>
            <h2>
              Miradi ya
              <br />
              <span>aina tofauti.</span>
            </h2>
          </div>
        </div>

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

        <div className="project-grid" aria-live="polite">
          {visibleProjects.map((project, index) => {
            const isCategoryPreview = activeCategory === "All work" && Array.isArray(project.items);

            return (
              <article
                className="project-card"
                key={project.title || `${project.category}-${index}`}
                onClick={() => {
                  if (isCategoryPreview) {
                    setActiveCategory(project.category);
                  }
                }}
                onKeyDown={(event) => {
                  if (isCategoryPreview && (event.key === "Enter" || event.key === " ")) {
                    event.preventDefault();
                    setActiveCategory(project.category);
                  }
                }}
                tabIndex={isCategoryPreview ? 0 : undefined}
                role={isCategoryPreview ? "button" : undefined}
                aria-label={isCategoryPreview ? `Open ${project.category} projects` : undefined}
              >
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
                    {String(project.totalItems || visibleProjects.length).padStart(2, "0")}
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
            );
          })}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact__inner">
          <p className="eyebrow">UNA WAZO? TULIFANYE KAZI.</p>
          <h2>
            Kitu kizuri
            <br />
            <span>kinaanza na mazungumzo.</span>
          </h2>
          <p className="contact__copy">
            Una mradi, ushirikiano au swali? Nitumie ujumbe nitafurahi kusikia
            kutoka kwako.
          </p>
          <div className="contact__actions">
            <a
              className="button button--light"
              href="https://wa.me/255687624801"
              target="_blank"
              rel="noreferrer"
            >
              +255687624801 <ArrowIcon className="button__icon" />
            </a>
              <InstagramLink className="site-footer__instagram" />
            <span className="contact__location">DAR ES SALAAM · TANZANIA</span>
          </div>
        </div>
        <footer className="site-footer">
          <a href="#home">YAZOH GRAPHX</a>
          <span>
            © {currentYear} Created by{" "}
            <a
              href="https://sandistech.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              Sandistech
            </a>{" "}
            · DODOMA
          </span>
           
            <a href="#home">RUDI JUU ↑</a>
        </footer>
      </section>
    </main>
  );
}

export default Home;
