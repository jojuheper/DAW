import { useTranslation } from "react-i18next";
import { Visit } from "../counter/Visit";
import { Navbar } from "../header/Navbar";
import { Icons } from "../icon/Icons";
import { Name } from "../name/Name";

export const Footer = () => {
  const {t} = useTranslation();
  return (
    <section className="mt-5">
      <div className="md:flex md:justify-center md:gap-10 md:items-center">
        <Name />
        <Navbar />
      </div>
      <div className="grid justify-center md:flex md:gap-10">
        <p className="flex"><Icons icon="copyright"/> {t('footer.copyright')} </p>
        <p>{t('footer.made')}</p>
      </div>
      <Visit />
    </section>
  );
};
