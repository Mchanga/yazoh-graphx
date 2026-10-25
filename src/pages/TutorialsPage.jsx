import PageFrame, { ContentList } from "../components/PageFrame.jsx";

const entries = [
  [
    "01",
    "Misingi ya poster design",
    "Jifunze kupanga taarifa kwenye poster ili ujumbe muhimu uonekane kwanza na usomeke kwa urahisi.",
    [
      "Andika lengo la poster na ujumbe mmoja mkuu unaotaka watu wakumbuke.",
      "Panga taarifa kwa umuhimu: kichwa, maelezo ya kusaidia, tarehe/mahali na njia ya mawasiliano.",
      "Chagua picha moja kuu inayosaidia ujumbe badala ya kujaza poster kwa picha nyingi.",
      "Tumia fonti zisizozidi mbili; fanya kichwa kiwe kikubwa na maelezo yawe na ukubwa unaosomeka.",
      "Tengeneza contrast ya kutosha kati ya maandishi na background, kisha acha nafasi tupu ili muundo upumue.",
      "Kagua poster kwenye ukubwa wa simu na ukubwa wa mwisho wa uchapishaji; rekebisha maandishi na vipimo kabla ya export.",
    ],
  ],
  [
    "02",
    "Kuanza na motion graphics",
    "Hatua za kutengeneza animation fupi yenye mwanzo, ujumbe mkuu na mwisho ulio wazi.",
    [
      "Chagua wazo moja na liandike kama sentensi fupi; hili ndilo litakaloongoza animation.",
      "Gawa ujumbe katika scene chache na chora storyboard ya kile mtazamaji ataona kwa mpangilio.",
      "Andaa maandishi, picha, rangi na vipimo vya video kulingana na jukwaa litakapotumika.",
      "Weka keyframe ya mwanzo na mwisho kwa kila kipengele, kisha ongeza keyframes za mpito inapohitajika.",
      "Rekebisha timing na easing ili mwendo uanze na kusimama kwa ulaini; panga mabadiliko ya picha na sauti kama ipo.",
      "Tazama preview yote, hakikisha maandishi yanasomeka na ujumbe unaeleweka, kisha export kwa format na resolution inayofaa.",
    ],
  ],
  [
    "03",
    "Kuchagua rangi za chapa",
    "Jenga palette inayowakilisha tabia ya brand na kubaki wazi kwenye matumizi tofauti.",
    [
      "Eleza tabia ya brand kwa maneno machache, kwa mfano ya kuaminika, changamfu au ya kifahari.",
      "Chunguza hadhira na mazingira ya biashara ili rangi zilingane na hisia unayotaka kuwasilisha.",
      "Chagua rangi kuu moja, kisha ongeza rangi saidizi moja au mbili na neutral kwa background au maandishi.",
      "Jaribu mchanganyiko wa rangi kwenye logo, poster na maudhui ya mitandao badala ya kuangalia swatches pekee.",
      "Kagua contrast na usomaji, hasa maandishi madogo na button, ili palette itumike kwa urahisi.",
      "Andika color values za matumizi ya screen na print, kisha hifadhi palette kama sehemu ya brand guide.",
    ],
  ],
];

function TutorialsPage() {
  return (
    <PageFrame
      eyebrow="TUTORIALS"
      title="Jifunze kwa kujaribu."
      introduction="Tutorial hizi zinaeleza hatua kwa hatua unachofanya, kwa nini hatua hiyo ni muhimu, na jinsi ya kukagua matokeo yako."
    >
      <ContentList entries={entries} />
    </PageFrame>
  );
}

export default TutorialsPage;
