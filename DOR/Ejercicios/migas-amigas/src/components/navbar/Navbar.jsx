import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="navbar text-capitalize">
        <NavLink className="navbar_link text-white" to="/">{t("homepage.navlink")}</NavLink>
        <NavLink className="navbar_link text-white" to="/panaderia">{t("bakery.navlink")}</NavLink>
        <NavLink className="navbar_link text-white" to="/pasteleriabolleria">{t("patisserie.navlink")}</NavLink>
        <NavLink className="navbar_link text-white" to="/empanadas">{t("empanada.navlink")}</NavLink>
        <NavLink className="navbar_link text-white" to="/contacto">{t("contactPage.navlink")}</NavLink>
    </div>
  );
};
