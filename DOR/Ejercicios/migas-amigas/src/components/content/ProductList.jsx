import { useTranslation } from "react-i18next";
import bread from "../../resources/img/Home_Product/home_bread.webp";
import pastry from "../../resources/img/Home_Product/home_pastries.webp";
import empanada from "../../resources/img/Home_Product/home_empanada.webp";
import bg from "../../resources/img/Home_Product/bg_1.svg"

export const ProductList = () => {
  const { t } = useTranslation();
  return (
    <div className="product__container container-fluid m-0 p-0 position-relative d-flex flex-column gap-5 z-0">
      <div className="product__background-container position-absolute top-0 start-0 w-100 h-100 overflow-hidden">
        <img className="product__background position-absolute z-0 overflor-hidden" alt="background salmon" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'repeat-y', backgroundSize: '100% 300px', border: 'none' }}/>
      </div>
      <div className="product__title z-1">
        <h1 className="fw-bold text-capitalize">{t("homepage.product.title")}</h1>
      </div>
      <div className="product__items--container d-flex flex-column flex-md-row justify-content-center gap-5 z-1">
        <div className="product__items--list">
            <img className="rounded-circle border" src={bread} alt={t("homepage.product.alt.bread")} width="200" height="200"/>
            <div className="product__items--list-title fs-4 fw-bold text-capitalize">{t("homepage.product.name.bread")}</div>
            <div className="product__items--list-text">{t("homepage.product.description.bread")}</div>
        </div>
        <div className="product__items--list">
            <img className="rounded-circle border" src={pastry} alt={t("homepage.product.alt.pastry")} width="200" height="200"/>
            <div className="product__items--list-title fs-4 fw-bold text-capitalize">{t("homepage.product.name.pastry")}</div>
            <div className="product__items--list-text">{t("homepage.product.description.pastry")}</div>
        </div>
        <div className="product__items--list">
            <img className="rounded-circle border" src={empanada} alt={t("homepage.product.alt.empanada")} width="200" height="200"/>
            <div className="product__items--list-title fs-4 fw-bold text-capitalize">{t("homepage.product.name.empanada")}</div>
            <div className="product__items--list-text">{t("homepage.product.description.empanada")}</div>
        </div>
      </div>
    </div>
  );
};
