import { useTranslation } from "react-i18next";

export const Principal = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("titlePrincipalpage")}</h1>
    </div>
  );
};
