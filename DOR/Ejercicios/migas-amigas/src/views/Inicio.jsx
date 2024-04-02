import { useTranslation } from "react-i18next";
import { RightCompose } from "../components/content/RightCompose";
import { ProductList } from "../components/content/ProductList";
import { SummaryTable } from "../components/content/SummaryTable";

export const Inicio = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <div>
          <h1 className="fw-bold">{t("homepage.titleInitPage")}</h1>
        </div>
        <div>
          <img src="https://placehold.co/800x600" alt="header" width="800" height="600"/>
        </div>
      </div>
      <SummaryTable />
      <RightCompose />
      <ProductList />
    </div>
  );
};
