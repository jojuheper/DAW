import { useTranslation } from "react-i18next";

export const Error404 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("titleError404")}</h1>
    </div>
  );
};
