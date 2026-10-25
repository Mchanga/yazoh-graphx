import { useEffect, useState } from "react";
import PageFrame, { PageLink } from "../components/PageFrame.jsx";
import { projects, services } from "../portfolioData.js";

const serviceDetails = {
  "Graphic design": {
    anchor: "graphic-design",
    category: "Graphics",
    projectsHref: "/projects/graphics",
    focus: "Ujumbe wako uwe wazi, wa kuvutia na rahisi kukumbukwa.",
   
paragraphs: [
  "Ubunifu wa picha ni sehemu muhimu ya kujenga utambulisho wa biashara na kuwasilisha ujumbe kwa njia inayoeleweka na yenye mvuto. Kupitia huduma za Graphic Design, tunasaidia biashara, brands na watu binafsi kugeuza mawazo yao kuwa designs zenye ubora, zinazovutia na zinazoendana na malengo yao. Kazi zilizopo kwenye portfolio ya Graphics zinatumika kama rejea ya style, creativity na kiwango cha ubora wa kazi tunazoweza kuzalisha kulingana na mahitaji yako.",

  "Huduma hii inajumuisha utengenezaji wa posters, flyers, banners, social media graphics, matangazo ya biashara, event promotions, marketing materials na designs maalum kwa ajili ya kampeni mbalimbali. Kila design hutengenezwa kwa kuzingatia visual hierarchy, color combination, typography, layout na consistency ya brand ili kuhakikisha ujumbe muhimu unawafikia walengwa kwa urahisi na kwa wakati unaofaa.",

  "Kila project huanza kwa kuelewa wazo lako, malengo ya biashara, aina ya hadhira unayolenga na ujumbe unaotaka kuwasilisha. Taarifa hizi hutusaidia kuchagua creative direction inayofaa na kuunda design yenye muonekano unaoendana na identity ya brand yako. Lengo ni kuhakikisha matokeo ya mwisho hayavutii kwa muonekano pekee, bali pia yanawasilisha ujumbe kwa usahihi na kusaidia kufikia malengo yaliyokusudiwa.",

  "Katika hatua ya ubunifu, tunazingatia kila detail kuanzia uchaguzi wa rangi, font styles, picha na icons hadi mpangilio wa maandishi na vipengele vingine vya design. Tunahakikisha kila element ina nafasi na kazi yake ndani ya muundo mzima. Kwa kufanya hivyo, tunatengeneza designs zilizo clear, balanced, professional na zenye uwezo wa kuvutia umakini wa hadhira bila kupoteza maana ya ujumbe.",

  "Pia, tunazingatia matumizi ya design kwenye majukwaa tofauti, ikiwemo Instagram, Facebook, WhatsApp, websites na vifaa vya uchapishaji. Kila kazi huandaliwa kwa kuzingatia ukubwa, format na mahitaji ya jukwaa husika ili kudumisha ubora wa picha na urahisi wa kusoma. Hii husaidia kuhakikisha design yako inaonekana vizuri iwe inatumika kwenye simu, kompyuta, matangazo ya mtandaoni au kwenye print materials.",

  "Tunathamini mawasiliano ya wazi, ushirikiano na feedback katika kila hatua ya project. Baada ya kuandaa initial concept, tunapitia muundo pamoja na mteja na kufanya maboresho yanayohitajika kabla ya kukamilisha kazi. Mwisho wa mchakato, tunalenga kutoa design yenye ubora, inayowakilisha brand yako kwa ufasaha na iliyo tayari kutumika. Iwe unahitaji design moja au mfululizo wa graphics kwa ajili ya kampeni, tunajitahidi kuleta matokeo yenye creativity, consistency na impact."
],

  },
  "Motion graphics": {
    anchor: "motion-graphics",
    category: "Motion Graphics",
    projectsHref: "/projects/motion",
    focus: "Geuza wazo tuli kuwa simulizi lenye mwendo na hisia.",
    
paragraphs: [
  "Motion Graphics ni njia ya kuunganisha picha, maandishi, shapes na movement ili kuwasilisha ujumbe kwa namna inayovutia na rahisi kueleweka. Kupitia animation na visual storytelling, tunageuza mawazo ya kawaida kuwa maudhui yenye uhai, yanayovutia umakini na kuacha taswira nzuri kwa watazamaji. Kazi zilizopo kwenye portfolio ya Motion Graphics zinaonyesha namna ubunifu, timing na movement vinavyoweza kutumika kuwasilisha ujumbe kwa ufanisi.",

  "Huduma hii inafaa kwa matangazo ya biashara, product promotions, logo reveals, animated titles, explainer videos, event promotions na maudhui ya mitandao ya kijamii. Pia inaweza kutumika kutambulisha huduma mpya, kueleza jinsi bidhaa inavyofanya kazi au kuwasilisha taarifa muhimu kwa njia fupi na yenye mvuto. Kila video hupangwa kulingana na malengo ya project, aina ya hadhira na jukwaa ambalo maudhui yatatumika.",

  "Kila project huanza kwa kuelewa wazo lako, ujumbe unaotaka kufikisha na matokeo unayotarajia kupata. Kutokana na taarifa hizo, tunapanga creative direction na mtiririko wa simulizi ili kuhakikisha video ina mwanzo unaovutia, maelezo yaliyo wazi na mwisho unaoacha ujumbe muhimu kwenye kumbukumbu ya mtazamaji. Mchakato huu husaidia kuunganisha ubunifu na malengo halisi ya biashara au brand yako.",

  "Katika hatua ya production, tunatumia animation, typography, transitions, visual effects na movement ili kujenga mtiririko unaoeleweka na wenye mvuto. Tunazingatia timing, spacing, composition na consistency ya visual elements ili kila sehemu ya video iendane na nyingine. Kila movement ina kusudi lake, iwe ni kuvuta umakini, kusisitiza ujumbe au kumsaidia mtazamaji kuelewa taarifa inayowasilishwa.",

  "Sauti na muziki vinaweza kuongezwa pale vinapohitajika ili kuboresha experience ya mtazamaji na kuimarisha ujumbe wa video. Tunazingatia sound effects, background music na synchronization ya sauti na animation ili kupata matokeo yenye mtiririko mzuri. Pia, video huandaliwa kwa kuzingatia format, aspect ratio na duration inayofaa kwa majukwaa kama Instagram, Facebook, TikTok, YouTube na websites.",

  "Tunathamini mawasiliano ya wazi na feedback katika kila hatua ya project, kuanzia kupanga concept hadi kukamilisha animation. Baada ya kuandaa initial version, tunapitia matokeo na kufanya maboresho yanayohitajika ili kuhakikisha video inaendana na mahitaji yako. Lengo letu ni kutoa Motion Graphics yenye ubora, creativity na impact, inayosaidia brand yako kuwasiliana kwa ufanisi, kutofautisha maudhui yake na kuwafanya watazamaji waendelee kuwa na hamu ya kutazama."
],

  },
  "Brand identity": {
    anchor: "brand-identity",
    category: "Branding",
    projectsHref: "/projects/branding",
    focus: "Jenga chapa yenye sura thabiti na inayotambulika.",
   
paragraphs: [
  "Brand Identity ni zaidi ya logo; ni mfumo wa utambulisho unaoipa biashara sura ya kipekee na kusaidia watu kuitambua, kuitofautisha na washindani wake na kuikumbuka kwa urahisi. Kupitia huduma za Branding, tunasaidia biashara, startups na taasisi kujenga utambulisho unaoendana na maono, thamani na malengo yao. Kazi zilizopo kwenye portfolio ya Branding zinaonyesha jinsi ubunifu na mpangilio mzuri wa visual elements unavyoweza kuunda utambulisho wenye mvuto na unaoeleweka.",

  "Huduma hii inajumuisha Logo Design, uchaguzi wa rangi za chapa (Brand Colors), typography, visual elements na Brand Guidelines zinazoelekeza namna utambulisho wa biashara unavyopaswa kutumika. Kila kipengele huchaguliwa kwa kuzingatia tabia ya brand, aina ya wateja inayolenga na ujumbe unaotaka kuwasilisha. Lengo ni kujenga mfumo unaounganisha vipengele hivi kwa namna inayofanya biashara yako iwe na mwonekano unaotambulika na unaoaminika.",

  "Mchakato wa Branding huanza kwa kuelewa biashara yako, historia yake, maono, mission, thamani na soko inalolenga. Pia tunazingatia mahitaji ya wateja, ushindani uliopo na nafasi ambayo brand yako inataka kuwa nayo sokoni. Uelewa huu husaidia kuweka creative direction sahihi na kuhakikisha utambulisho unaoundwa unaendana na malengo ya biashara badala ya kufuata muonekano unaovutia pekee.",

  "Katika hatua ya ubunifu, tunatengeneza logo concepts na kuchagua visual style inayowakilisha tabia na ujumbe wa brand yako. Tunazingatia color psychology, typography, spacing, proportions na matumizi ya alama ili kupata muundo wenye uwiano na unaosomeka vizuri. Kila element hupangwa kwa kusudi maalum ili kuunda Brand Identity iliyo professional, yenye upekee na inayoweza kutumika kwa muda mrefu bila kupoteza uhalisia wake.",

  "Tunazingatia pia namna Brand Identity itakavyotumika kwenye mazingira tofauti, ikiwemo social media, websites, business cards, letterheads, packaging, signage, matangazo na vifaa vingine vya biashara. Kupitia Brand Guidelines, tunaweka maelekezo ya matumizi ya logo, rangi, font styles na vipengele vingine muhimu ili kudumisha consistency kwenye mawasiliano yote ya brand. Hii husaidia biashara kuwa na mwonekano unaofanana na unaotambulika kwenye majukwaa mbalimbali.",

  "Ushirikiano na mawasiliano ya wazi ni sehemu muhimu ya mchakato mzima wa Branding. Tunapitia concepts pamoja na mteja, kupokea feedback na kufanya maboresho yanayohitajika kabla ya kukamilisha mfumo wa utambulisho. Lengo letu ni kutoa Brand Identity yenye ubora, inayowakilisha thamani za biashara, kuimarisha utambulisho wake sokoni na kujenga msingi mzuri wa mawasiliano ya muda mrefu kati ya brand na wateja wake."
],

  },
};

function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const selectServiceFromHash = () => {
      const anchor = window.location.hash.slice(1);
      const service = services.find(
        (item) => serviceDetails[item.title]?.anchor === anchor,
      );
      if (service) setSelectedService(service.number);
    };

    selectServiceFromHash();
    window.addEventListener("hashchange", selectServiceFromHash);
    return () => window.removeEventListener("hashchange", selectServiceFromHash);
  }, []);

  const activeService = services.find(
    (service) => service.number === selectedService,
  );
  const activeDetails = activeService && serviceDetails[activeService.title];
  const featuredProjects = activeDetails
    ? projects
        .filter((project) => project.category === activeDetails.category)
        .slice(0, 2)
    : [];

  return (
    <PageFrame
      eyebrow="HUDUMA"
      title="Ubunifu unaolingana na wazo lako."
      introduction="Chagua huduma unayohitaji. Utapata maelezo, mchakato wa kazi na mifano inayohusiana nayo."
    >
      <div className="page-service-selector" role="group" aria-label="Chagua huduma">
        {services.map((service) => {
          const isSelected = selectedService === service.number;
          const anchor = serviceDetails[service.title].anchor;

          return (
            <button
              aria-pressed={isSelected}
              className={`page-service-selector__item${isSelected ? " is-active" : ""}`}
              id={anchor}
              key={service.number}
              onClick={() => setSelectedService(service.number)}
              type="button"
            >
              <span>{service.number}</span>
              <strong>{service.title}</strong>
              <span aria-hidden="true">{isSelected ? "−" : "+"}</span>
            </button>
          );
        })}
      </div>

      {activeService && activeDetails && (
        <article className="page-service-card" aria-live="polite">
          <div className="page-service-card__top">
            <span>{activeService.number} · HUDUMA</span>
            <span className="page-service-card__badge">YAZOH GRAPHX</span>
          </div>
          <h2>{activeService.title}</h2>
          <p className="page-service-card__focus">{activeDetails.focus}</p>
          <p>{activeService.description}</p>
          {activeDetails.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {featuredProjects.length > 0 && (
            <div className="page-service-work">
              <div className="page-service-work__heading">
                <h3>Mifano ya kazi zangu</h3>
                <span>{activeDetails.category}</span>
              </div>
              <div className="page-service-work__grid">
                {featuredProjects.map((project) => (
                  <figure className="page-service-work__item" key={project.src}>
                    {project.mediaType === "video" ? (
                      <video
                        src={project.src}
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        aria-label={project.title}
                      />
                    ) : (
                      <img src={project.src} alt={project.alt} loading="lazy" />
                    )}
                    <figcaption>{project.title}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          <div className="page-service-card__actions">
            <PageLink href={activeDetails.projectsHref}>ONA KAZI ZANGU</PageLink>
            <PageLink href="/contact">ULIZA HUDUMA</PageLink>
          </div>
        </article>
      )}
    </PageFrame>
  );
}

export default ServicesPage;
