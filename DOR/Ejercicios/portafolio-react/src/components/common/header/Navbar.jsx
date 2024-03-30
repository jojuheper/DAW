import { useTranslation } from "react-i18next"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div>
      <NavLink to={'/'}>{t('header.navbar.home')}</NavLink>
      <NavLink to={'/about'}>{t('header.navbar.about')}</NavLink>
      <NavLink to={'/project'}>{t('header.navbar.project')}</NavLink>
      <NavLink to={'/contact'}>{t('header.navbar.contact')}</NavLink>
    </div>
  )
}
