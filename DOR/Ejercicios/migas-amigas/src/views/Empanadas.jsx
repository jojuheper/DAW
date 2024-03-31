import { useTranslation } from "react-i18next";
import { LeftCompose } from "../components/content/LeftCompose";
import { RightCompose } from "../components/content/RightCompose";
import { SummaryTable } from "../components/content/SummaryTable";

export const Empanadas = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="fw-bold">{t("empanada.titleEmpanada")}</h1>
      {/* Summary and Caption for table information */}
      <SummaryTable />
      {/* We do it rough and then we make the component */}
      <LeftCompose />
      <RightCompose />
      <LeftCompose />
      <RightCompose />
    </div>
  );
};
