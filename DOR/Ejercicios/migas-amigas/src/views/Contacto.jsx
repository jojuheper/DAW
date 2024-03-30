import { useTranslation } from "react-i18next";
import { Contact } from "../components/common/contact/Contact";

export const Contacto = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("contactPage.titleContact")}</h1>
      <Contact />
    </div>
  );
};