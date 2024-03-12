import { useTranslation } from "react-i18next";

export const Panaderia = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("titleBakery")}</h1>
    </div>
  );
};
