import { useTranslation } from "react-i18next";
import { SocialLink } from "../common/socialLink/SocialLink";
import { Icon } from "../common/icon/Icon";
import { NavLink } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

export const Footer = () => {
  const { t } = useTranslation();
  const copyright = "copyright";

  return (
    <div className="footer__container container-fluid py-2">
      <div className="footer__top row align-items-center">
        <div className="footer__top-title fs-4 fw-bold text-capitalize col-6 col-md-4 order-1">
          {t("footer.titleFooter")}
        </div>
        <div className="col-6 col-md-4 order-2 order-md-3 d-flex justify-content-center">
          <SocialLink />
        </div>
        <div className="col-12 col-md-4 order-3 order-md-2">
          <Navbar />
        </div>
      </div>
      <div className="footer__bottom--container">
        <div className="footer__bottom d-flex justify-content-center">
          <NavLink
            className="footer__bottom--link align-items-center link-secondary"
            to={"/"}
          >
            <Icon icon={copyright} /> 2024 {t("footer.copyright")}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
