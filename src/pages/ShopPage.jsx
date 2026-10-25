import PageFrame, { PageLink } from "../components/PageFrame.jsx";
import logo from "../assets/logo.jpeg";

function ShopPage() {
  return (
    <PageFrame
      eyebrow="SHOP"
      title="Oda maalum zinakuja punde si punde."
      introduction="Tunatayarisha sehemu ya oda maalum za ubunifu za Yazoh Graphx. Rudi tena hivi karibuni."
    >
      <div className="page-shop-card">
        <div className="shop-art">
          <img src={logo} alt="Logo ya Yazoh Graphx" />
        </div>
        <div>
          <p className="eyebrow">ODA MAALUM · ZINAKUJA HIVI KARIBUNI</p>
          <h2>Oda maalum zinakuja punde si punde.</h2>
          <p>
            Shop inaandaliwa kwa sasa. Hivi karibuni utaweza kuagiza kazi maalum
            na bidhaa za Yazoh Graphx. Kwa sasa, wasiliana nami ikiwa una wazo
            maalum unalotaka kulijadili.
          </p>
          <PageLink href="https://wa.me/255687624801">
            WASILIANA NAMI · +255687624801
          </PageLink>
        </div>
      </div>
    </PageFrame>
  );
}

export default ShopPage;
