import { useTranslation } from "react-i18next";
import bread from "../../resources/img/Home_Product/home_bread.webp";
import pastry from "../../resources/img/Home_Product/home_pastries.webp";
import empanada from "../../resources/img/Home_Product/home_empanada.webp";

export const ProductList = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <h1 className="fw-bold">{t("homepage.product.title")}</h1>
      </div>
      <div>
        {/* proudct */}
        <div>
            <img className="rounded-circle" src={bread} alt={t("homepage.product.alt.bread")} width="200" height="200"/>
            <div>{t("homepage.product.name.bread")}</div>
            <div>{t("homepage.product.description.bread")}</div>
        </div>
        <div>
            <img className="rounded-circle" src={pastry} alt={t("homepage.product.alt.pastry")} width="200" height="200"/>
            <div>{t("homepage.product.name.pastry")}</div>
            <div>{t("homepage.product.description.pastry")}</div>
        </div>
        <div>
            <img className="rounded-circle" src={empanada} alt={t("homepage.product.alt.empanada")} width="200" height="200"/>
            <div>{t("homepage.product.name.empanada")}</div>
            <div>{t("homepage.product.description.empanada")}</div>
        </div>
      </div>
    </div>
  );
};
