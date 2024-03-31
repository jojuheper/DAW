import { useTranslation } from "react-i18next";

export const Principal = () => {
  const { t } = useTranslation(['translation']);
  return (
    <div>
      <h1 className="fw-bold">{t("titlePrincipalpage")}</h1>
    </div>
  );
};
