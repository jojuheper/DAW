import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("titleFooter")}</h1>
    </div>
  );
};
