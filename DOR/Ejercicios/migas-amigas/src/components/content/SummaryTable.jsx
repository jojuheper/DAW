import { useTranslation } from "react-i18next";

export const SummaryTable = () => {
  const { t } = useTranslation();
  return (
    <details>
      <summary>{t("product.table.caption")}</summary>
      {t("product.table.summary")}
    </details>
  );
};
