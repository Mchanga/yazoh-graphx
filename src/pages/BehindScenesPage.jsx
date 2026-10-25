import PageFrame, { ContentList } from "../components/PageFrame.jsx";

const entries = [
  [
    "01",
    "Kutoka sketch hadi poster",
    "Namna wazo la kampeni linavyogeuzwa kuwa poster iliyo tayari kutumika.",
    [
      "Kukusanya maelezo ya mradi: lengo la poster, hadhira, ujumbe na mahali itakapoonekana.",
      "Kutafuta rejea za picha, rangi na mtindo unaolingana na ujumbe bila kunakili kazi nyingine.",
      "Kuchora michoro ya awali na kujaribu mpangilio tofauti wa kichwa, picha na taarifa muhimu.",
      "Kuchagua rangi na fonti zenye contrast nzuri ili maandishi yasomeke kwa haraka.",
      "Kukamilisha muundo, kukagua tahajia na vipimo, kisha kuandaa faili kwa matumizi ya kidijitali au uchapishaji.",
    ],
  ],
  [
    "02",
    "Kujaribu mwendo",
    "Mchakato wa kupanga animation ili picha na maandishi viwasilishe ujumbe kwa wakati unaofaa.",
    [
      "Kufafanua ujumbe mkuu na urefu wa kipande cha motion.",
      "Kupanga storyboard rahisi inayoonyesha mfuatano wa matukio na mabadiliko ya picha.",
      "Kuweka keyframes za mwanzo na mwisho ili kuamua nafasi na mwendo wa kila kipengele.",
      "Kujaribu timing, easing na transitions ili mwendo uwe laini na usisumbue ujumbe.",
      "Kukagua preview, kurekebisha sehemu zinazokwenda haraka au polepole, kisha kutoa video kwa ukubwa unaofaa.",
    ],
  ],
  [
    "03",
    "Mwelekeo wa chapa",
    "Jinsi maamuzi ya awali ya utambulisho yanavyounda sura thabiti ya brand.",
    [
      "Kuelewa biashara, thamani zake, wateja wake na tofauti yake sokoni.",
      "Kukusanya visual references zinazoonyesha hisia na mwelekeo unaotakiwa.",
      "Kujaribu alama, rangi na typography zinazoweza kuwakilisha tabia ya chapa.",
      "Kulinganisha chaguo kwenye matumizi tofauti kama profile ya mitandao, poster au kifungashio.",
      "Kuchagua mwelekeo mmoja na kuandaa kanuni za msingi za matumizi ili brand ibaki na mwonekano mmoja.",
    ],
  ],
];

function BehindScenesPage() {
  return (
    <PageFrame
      eyebrow="BEHIND THE SCENES"
      title="Jinsi wazo linavyokuwa kazi."
      introduction="Fuata hatua za kazi za ubunifu: kuanzia kuelewa brief na kujaribu mawazo, hadi kukagua na kuandaa kazi ya mwisho."
    >
      <ContentList entries={entries} />
    </PageFrame>
  );
}

export default BehindScenesPage;
