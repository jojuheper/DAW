import { useTranslation } from "react-i18next";

export const ProductList = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <h1>{t("homepage.product.title")}</h1>
      </div>
      <div>
        {/* proudct */}
        <div>
            <img className="rounded-circle" src="https://placehold.co/200x200" alt="" />
            <div>{t("homepage.product.name.bread")}</div>
            <div>{t("homepage.product.description.bread")}</div>
        </div>
        <div>
            <img className="rounded-circle" src="https://placehold.co/200x200" alt="" />
            <div>{t("homepage.product.name.pastry")}</div>
            <div>{t("homepage.product.description.pastry")}</div>
        </div>
        <div>
            <img className="rounded-circle" src="https://placehold.co/200x200" alt="" />
            <div>{t("homepage.product.name.empanada")}</div>
            <div>{t("homepage.product.description.empanada")}</div>
        </div>
      </div>
    </div>
  );
};
