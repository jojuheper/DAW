import { useTranslation } from "react-i18next";

export const Contacto = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("titleContact")}</h1>
    </div>
  );
};
