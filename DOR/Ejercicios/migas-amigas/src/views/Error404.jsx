import { useTranslation } from "react-i18next";
import errorPage from "../resources/img/NotFound/404.webp";

export const Error404 = () => {
  const { t } = useTranslation();
  return (
    <div className="errorPage__container pb-4 w-100 h-100">
      <div className="errorPage__title fw-bold p-4 fs-1">{t("errorPage.titleError404")}</div>
      <img className="errorPage__image w-75 h-75 pt-4" src={errorPage} alt="" />
    </div>
  );
};
