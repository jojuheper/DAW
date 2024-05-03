import { useTranslation } from "react-i18next";
import { LeftCompose } from "../components/content/LeftCompose";
import { RightCompose } from "../components/content/RightCompose";
import { SummaryTable } from "../components/content/SummaryTable";
import pastry1 from "../resources/img/ProductPastries/01_napolitan_cream.webp";
import pastry2 from "../resources/img/ProductPastries/02_cinnamon_conch.webp";
import pastry3 from "../resources/img/ProductPastries/03_Glazed_palm.webp";
import pastry4 from "../resources/img/ProductPastries/04_chocolate_muffin.webp";
import pastry5 from "../resources/img/ProductPastries/05_chocolate_doughnuts.webp";
import pastry6 from "../resources/img/ProductPastries/06_Puff_pastry_ribbon_with_almonds.webp";
import pastry7 from "../resources/img/ProductPastries/07_Cream_Bamba.webp";
import pastry8 from "../resources/img/ProductPastries/08_millefeuille.webp";

export const PasteleriaBolleria = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="pastisserie__title fs-3 p-3 fw-bold">{t("patisserie.titlePatisserieBoulangerie")}</div>
      {/* Summary and Caption for table information */}
      <SummaryTable />
      {/* We do it rough and then we make the component */}
      <LeftCompose title={t("patisserie.product.1.title")} text={t("patisserie.product.1.text")} url={pastry1} alt={t("patisserie.product.1.title")}/>
      <RightCompose title={t("patisserie.product.2.title")} text={t("patisserie.product.2.text")} url={pastry2} alt={t("patisserie.product.2.title")}/>
      <LeftCompose title={t("patisserie.product.3.title")} text={t("patisserie.product.3.text")} url={pastry3} alt={t("patisserie.product.3.title")}/>
      <RightCompose title={t("patisserie.product.4.title")} text={t("patisserie.product.4.text")} url={pastry4} alt={t("patisserie.product.4.title")}/>
      <LeftCompose title={t("patisserie.product.5.title")} text={t("patisserie.product.5.text")} url={pastry5} alt={t("patisserie.product.5.title")}/>
      <RightCompose title={t("patisserie.product.6.title")} text={t("patisserie.product.6.text")} url={pastry6} alt={t("patisserie.product.6.title")}/>
      <LeftCompose title={t("patisserie.product.7.title")} text={t("patisserie.product.7.text")} url={pastry7} alt={t("patisserie.product.7.title")}/>
      <RightCompose title={t("patisserie.product.8.title")} text={t("patisserie.product.8.text")} url={pastry8} alt={t("patisserie.product.8.title")}/>
      
    </div>
  );
};
