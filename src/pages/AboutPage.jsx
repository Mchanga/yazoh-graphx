import PageFrame, { PageLink } from "../components/PageFrame.jsx";
import aboutImage from "../assets/about.jpg";

function AboutPage() {
  return (
    <PageFrame
      eyebrow="KUHUSU YAZOH"
      title="Ubunifu unaoonekana. Hadithi inayobaki."
      introduction="Mimi ni Yazoh Graphics mbunifu wa graphic na motion kutoka Dar es Salaam, Tanzania."
    >
      <div className="page-about-layout">
        <figure className="page-about__portrait">
          <img
            src={aboutImage}
            alt="Yazoh Graphx, mbunifu wa graphic na motion"
            loading="lazy"
          />
          <figcaption>YAZOH GRAPHX · DAR ES SALAAM, TANZANIA</figcaption>
        </figure>
        <div className="page-about">
          <p>
            Ninapenda kugeuza mawazo kuwa picha, chapa na video zenye mvuto.
            Ninafanya kazi na biashara, wasanii na watu wenye mawazo mazuri ili
            kutengeneza mawasiliano ya picha yaliyo wazi, yenye ubunifu na ya kipekee.
          </p>

          <p>
            Kila mradi una hadithi yake. Ushirikiano mzuri, mawasiliano ya wazi na
            umakini kwa undani husaidia kuhakikisha kuwa kila hadithi inafika kwa
            watu sahihi kwa njia inayoeleweka na yenye mvuto.
          </p>

          <p>
            Kazi yangu inahusisha graphic design, branding na video production.
            Ninapenda kutengeneza designs ambazo si nzuri kwa kuangalia tu, bali pia
            zina ujumbe unaoeleweka na kusaidia kufikisha malengo ya biashara au brand.
          </p>

          <p>
            Katika kila project, naanza kwa kuelewa wazo, mahitaji na malengo ya
            mteja. Hii hunisaidia kuchagua style, rangi, typography na visual elements
            zinazofaa ili kuleta matokeo yenye ubora na yanayoendana na utambulisho wa brand.
          </p>

          <p>
            Ninaamini kuwa ubunifu mzuri unatokana na kujifunza, kujaribu mawazo mapya
            na kuzingatia details. Kila project ni nafasi ya kuongeza ujuzi, kuboresha
            skills na kutafuta njia mpya za kuwasilisha ujumbe kwa ubunifu zaidi.
          </p>

          <p>
            Lengo langu ni kutengeneza kazi zenye impact, zinazovutia na kubaki kwenye
            kumbukumbu za watu. Iwe ni kutengeneza brand identity, social media content,
            posters au videos, ninajitahidi kuhakikisha kila kazi ina ubora, ina maana
            na inatoa thamani kwa mteja.
          </p>

          <PageLink href="/contact">TUJADILI WAZO LAKO</PageLink>
        </div>
      </div>
    </PageFrame>
  );
}

export default AboutPage;
