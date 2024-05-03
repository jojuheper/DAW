import { useTranslation } from "react-i18next";
import { ProductList } from "../components/content/ProductList";
import { SummaryTable } from "../components/content/SummaryTable";
import logo from "../resources/img/Logo/02_logo.webp";
import { Video } from "../components/content/Video";

export const Inicio = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="container-fluid p-0 position-relative"
        style={{ height: "600px" }}
      >
        <div className="home__image w-100 h-100 position-absolute top-0 start-0 z-0 w-100 h-100">
          <img
            src={logo}
            alt="header"
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
          <div className="home__mascarade d-flex position-absolute top-0 start-0 z-1 w-100 h-100 opacity-50"></div>
        </div>
        <div className="home__container w-100 h-100 d-flex justify-content-center align-items-center position-relative z-2">
          <div className="home__title w-100 h-100 pt-2 text-center">
            <h1 className="fw-bold">{t("homepage.titleInitPage")}</h1>
          </div>
        </div>
      </div>
      <SummaryTable />
      <Video />
      <ProductList />
    </>
  );
};
