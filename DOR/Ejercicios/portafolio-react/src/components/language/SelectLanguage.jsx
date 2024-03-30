import { useTranslation } from "react-i18next";
import { LANGUAGE } from "../../constants/langs";

export const SelectLanguage = () => {
  const { i18n } = useTranslation(["translation"]);
  const onChangeLang = ({target}) => {
    i18n.changeLanguage(target.value);
  };
  return (
    <div>
      <select
        defaultValue={i18n.language}
        onChange={onChangeLang}
        name=""
        id=""
      >
        {LANGUAGE.map(({ code, label }) => (
          <option key={label} value={code}>
            {code}
          </option>
        ))}
      </select>
    </div>
  );
};
