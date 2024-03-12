import { useTranslation } from "react-i18next";
import { langs } from "../../constants/langs";

export const HeaderNav = () => {
  const { i18n, t } = useTranslation();
  const onChangeLang = ({ target }) => {
    i18n.changeLanguage(target.value);
  };
  return (
    <div>
      <h1>{t("titleHeader")}</h1>
      <select
        defaultValue={i18n.language}
        onChange={onChangeLang}
        name=""
        id=""
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
