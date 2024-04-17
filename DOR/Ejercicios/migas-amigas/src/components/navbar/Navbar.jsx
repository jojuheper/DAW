import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="">
        <NavLink className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" to="/">{t("homepage.navlink")}</NavLink>
        <NavLink className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" to="/panaderia">{t("bakery.navlink")}</NavLink>
        <NavLink className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" to="/pasteleriabolleria">{t("patisserie.navlink")}</NavLink>
        <NavLink className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" to="/empanadas">{t("empanada.navlink")}</NavLink>
        <NavLink className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" to="/contacto">{t("contactPage.navlink")}</NavLink>
    </div>
  );
};
