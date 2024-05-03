import { useTranslation } from "react-i18next";
import { langs } from "../../constants/langs";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Navbar } from "../navbar/Navbar";
import { Icon } from "../common/icon/Icon";

export const HeaderNav = () => {
  const { i18n, t } = useTranslation(["translation"]);
  const globe = "globe";
  const { language, setLanguage } = useContext(LanguageContext);
  const onChangeLang = ({ target }) => {
    i18n.changeLanguage(target.value);
    setLanguage(target.value);
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language, language, setLanguage]);

  return (
    <div className="header container-fluid py-2 row-cols-1">
      <div className="row align-items-center">
        <div className="col-6 col-md-4">
          <h1 className="header__title text-capitalize fw-bold d-flex">
            {t("header.titleHeader")}
          </h1>
        </div>
        <div className="col-12 col-md-4 order-3 order-md-2">
          <Navbar />
        </div>
        <div className="col-6 col-md-4 order-2 order-md-3 d-flex justify-content-center">
          <div className="d-flex align-items-center gap-2">
            {/* <label className="" htmlFor="language">{t("header.language")}</label> */}
            <Icon icon={globe} />
            <select
              className="header__select"
              defaultValue={i18n.language}
              onChange={onChangeLang}
              name="language"
              id="language"
            >
              {langs.map(({ code, label }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
