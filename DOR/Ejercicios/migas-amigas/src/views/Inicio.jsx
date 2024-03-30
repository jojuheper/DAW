import { useTranslation } from "react-i18next";
import { RightCompose } from "../components/content/RightCompose";
import { ProductList } from "../components/content/ProductList";

export const Inicio = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <div>
          <h1>{t("homepage.titleInitPage")}</h1>
        </div>
        <div>
          <img src="https://placehold.co/800x600" alt="header" />
        </div>
      </div>
      <RightCompose />
      <ProductList />
    </div>
  );
};
