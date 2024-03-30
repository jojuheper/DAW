import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="">
        <NavLink to="/">{t("homepage.navlink")}</NavLink>
        <NavLink to="/panaderia">{t("bakery.navlink")}</NavLink>
        <NavLink to="/pasteleriabolleria">{t("patisserie.navlink")}</NavLink>
        <NavLink to="/empanadas">{t("empanada.navlink")}</NavLink>
        <NavLink to="/contacto">{t("contactPage.navlink")}</NavLink>
    </div>
  );
};
