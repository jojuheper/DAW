import { useTranslation } from "react-i18next";

export const Empanadas = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("titleEmpanada")}</h1>
    </div>
  );
};
