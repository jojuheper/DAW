import { useTranslation } from "react-i18next";
import { LeftCompose } from "../components/content/LeftCompose";
import { RightCompose } from "../components/content/RightCompose";
import { SummaryTable } from "../components/content/SummaryTable";
import empanada1 from "../resources/img/ProductPie/01_tuna_empanada.webp";
import empanada2 from "../resources/img/ProductPie/02_prawn_pie.webp";
import empanada3 from "../resources/img/ProductPie/03_Meat_pie.webp";
import empanada4 from "../resources/img/ProductPie/04_Galician_pie.webp";

export const Empanadas = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="fw-bold">{t("empanada.titleEmpanada")}</h1>
      {/* Summary and Caption for table information */}
      <SummaryTable />
      {/* We do it rough and then we make the component */}
      <LeftCompose title={t("empanada.product.1.title")} text={t("empanada.product.1.text")} url={empanada1} alt={t("empanada.product.1.title")}/>
      <RightCompose title={t("empanada.product.2.title")} text={t("empanada.product.2.text")} url={empanada2} alt={t("empanada.product.2.title")}/>
      <LeftCompose title={t("empanada.product.3.title")} text={t("empanada.product.3.text")} url={empanada3} alt={t("empanada.product.3.title")}/>
      <RightCompose title={t("empanada.product.4.title")} text={t("empanada.product.4.text")} url={empanada4} alt={t("empanada.product.4.title")}/>
    </div>
  );
};
