import { useTranslation } from "react-i18next";
import { LeftCompose } from "../components/content/LeftCompose";
import { RightCompose } from "../components/content/RightCompose";
import { SummaryTable } from "../components/content/SummaryTable";
import bread0 from "../resources/img/ProductBread/01_white_bread.webp";
import bread1 from "../resources/img/ProductBread/02_wholemeal_bread.webp";
import bread2 from "../resources/img/ProductBread/03_rye_bread.webp";
import bread3 from "../resources/img/ProductBread/04_sourdough_bread.webp";
import bread4 from "../resources/img/ProductBread/05_multigrain_bread.webp";
import bread5 from "../resources/img/ProductBread/06_baguette.webp";
import bread6 from "../resources/img/ProductBread/07_ciabatta.webp";
import bread7 from "../resources/img/ProductBread/08_Pumpernickel_bread.webp";
import bread8 from "../resources/img/ProductBread/09_Challah.webp";
import bread9 from "../resources/img/ProductBread/10_brioche.webp";

export const Panaderia = () => {
  const { t } = useTranslation();
  return (
    <div className="panaderia__container">
      <div className="panaderia__title fs-3 p-3 fw-bold">{t("bakery.titleBakery")}</div>
      {/* Products */}
      <LeftCompose
        title={t("bakery.product.1.title")}
        text={t("bakery.product.1.text")}
        url={bread0}
        alt={t("bakery.product.1.title")}
      />
      <RightCompose
        title={t("bakery.product.2.title")}
        text={t("bakery.product.2.text")}
        url={bread1}
        alt={t("bakery.product.2.title")}
      />
      <LeftCompose
        title={t("bakery.product.3.title")}
        text={t("bakery.product.3.text")}
        url={bread2}
        alt={t("bakery.product.3.title")}
      />
      <RightCompose
        title={t("bakery.product.4.title")}
        text={t("bakery.product.4.text")}
        url={bread3}
        alt={t("bakery.product.4.title")}
      />
      <LeftCompose
        title={t("bakery.product.5.title")}
        text={t("bakery.product.5.text")}
        url={bread4}
        alt={t("bakery.product.5.title")}
      />
      <RightCompose
        title={t("bakery.product.6.title")}
        text={t("bakery.product.6.text")}
        url={bread5}
        alt={t("bakery.product.6.title")}
      />
      <LeftCompose
        title={t("bakery.product.7.title")}
        text={t("bakery.product.7.text")}
        url={bread6}
        alt={t("bakery.product.7.title")}
      />
      <RightCompose
        title={t("bakery.product.8.title")}
        text={t("bakery.product.8.text")}
        url={bread7}
        alt={t("bakery.product.8.title")}
      />
      <LeftCompose
        title={t("bakery.product.9.title")}
        text={t("bakery.product.9.text")}
        url={bread8}
        alt={t("bakery.product.9.title")}
      />
      <RightCompose
        title={t("bakery.product.10.title")}
        text={t("bakery.product.10.text")}
        url={bread9}
        alt={t("bakery.product.10.title")}
      />
      {/* Summary and Caption for table information */}
      <SummaryTable />
    </div>
  );
};
