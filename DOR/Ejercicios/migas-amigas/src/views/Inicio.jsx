import { useTranslation } from "react-i18next";
import { ProductList } from "../components/content/ProductList";
import { SummaryTable } from "../components/content/SummaryTable";
import logo from '../resources/img/Logo/02_logo.webp';
import { Video } from "../components/content/Video";

export const Inicio = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <div>
          <h1 className="fw-bold">{t("homepage.titleInitPage")}</h1>
        </div>
        <div>
          <img src={logo} alt="header" width="800" height="600"/>
        </div>
      </div>
      <SummaryTable />
      <Video />
      <ProductList />
    </div>
  );
};
