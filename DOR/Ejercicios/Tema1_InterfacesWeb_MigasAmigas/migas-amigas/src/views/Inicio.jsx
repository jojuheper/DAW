import { useTranslation } from "react-i18next";

export const Inicio = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("titleInitPage")}</h1>
    </div>
  );
};
