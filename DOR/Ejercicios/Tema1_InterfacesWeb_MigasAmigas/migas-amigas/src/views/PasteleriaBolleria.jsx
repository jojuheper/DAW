import { useTranslation } from "react-i18next";

export const PasteleriaBolleria = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("titlePatisserieBoulangerie")}</h1>
    </div>
  );
};
