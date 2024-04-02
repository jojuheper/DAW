import { useTranslation } from "react-i18next";
import { langs } from "../../constants/langs";
import { useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { Navbar } from "../navbar/Navbar";

export const HeaderNav = () => {
  const { i18n, t } = useTranslation(["translation"]);
  const { language, setLanguage } = useContext(LanguageContext);
  const onChangeLang = ({ target }) => {
    i18n.changeLanguage(target.value);
    setLanguage(target.value);
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language, language, setLanguage]);

  return (
    <div className="">
      <div className="">
        <h1 className="fw-bold">{t("header.titleHeader")}</h1>
      </div>
      <Navbar />
      <select
        defaultValue={i18n.language}
        onChange={onChangeLang}
        name="language"
        id="languageSelect"
      >
        {langs.map(({ code, label }) => (
          <option key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
