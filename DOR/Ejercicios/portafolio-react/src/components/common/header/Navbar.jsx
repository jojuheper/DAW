import { useTranslation } from "react-i18next"
import { Link } from 'react-scroll'

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="flex order-3 gap-3 justify-center col-span-12 md:order-2 md:col-span-4">
      <Link className="hover:text-blue-600 hover:font-bold" to="about" smooth={true} duration={500}>{t('header.navbar.about')}</Link>
      <Link className="hover:text-blue-600 hover:font-bold" to="project" smooth={true} duration={500}>{t('header.navbar.project')}</Link>
      <Link className="hover:text-blue-600 hover:font-bold" to="contact" smooth={true} duration={500}>{t('header.navbar.contact')}</Link>
    </div>
  )
}
