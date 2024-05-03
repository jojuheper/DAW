import { useTranslation } from "react-i18next";

export const SummaryTable = () => {
  const { t } = useTranslation();
  return (
    <details className="d-none">
      <summary>{t("product.table.caption")}</summary>
      {t("product.table.summary")}
    </details>
  );
};
