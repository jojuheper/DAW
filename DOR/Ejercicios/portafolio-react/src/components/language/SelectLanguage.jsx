import { useTranslation } from "react-i18next";
import { LANGUAGE } from "../../constants/langs";

export const SelectLanguage = () => {
  const { i18n } = useTranslation(["translation"]);
  const onChangeLang = ({target}) => {
    i18n.changeLanguage(target.value);
  };
  return (
    <div className="flex justify-center items-center gap-3 col-span-6 md:order-3 md:col-span-4">
      <label className="flex justify-center" htmlFor="languageSelect">
      </label>
      <select
      className="min-h-[44px] flex items-center"
        defaultValue={i18n.language}
        onChange={onChangeLang}
        aria-label="languageSelect"
        name="languageSelect"
        id="languageSelect"
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
