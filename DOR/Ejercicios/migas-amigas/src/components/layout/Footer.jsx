import { useTranslation } from "react-i18next";
import { SocialLink } from "../common/socialLink/SocialLink";
import { Icon } from "../common/icon/Icon";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

export const Footer = () => {
  const { t } = useTranslation();
  const copyright = "copyright";

  return (
    <div>
      <div>
        <div>
          <div className="fw-bold">{t("footer.titleFooter")}</div>
          <div>
            <SocialLink />
          </div>
        </div>
        <div>
          <div>{t("footer.titleMenu")}</div>
          <Navbar />
        </div>
      </div>

      <div>
        <div>
          <Link className="link-secondary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" to={"/"}>
            <Icon icon={copyright} /> 2024 {t("footer.copyright")}
          </Link>
        </div>
      </div>
    </div>
  );
};
