import { useTranslation } from "react-i18next";
import cookie from "../../resources/img/Home_Product/cookie.png";
import audio from "../../resources/audio/texto_migasamigas_ia_tratado.mp3";

export const Video = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="video__container container-fluid m-0 p-0 position-relative col-12">
      <div className="video__text w-100 h-100 p-4 position-relative z-0 col-12">
        <div className="video__text--bg position-absolute top-0 start-0 w-100 h-100 z-0"></div>
        <img className="video__text--img position-absolute top-0 start-0 z-0 w-100 h-100" src={cookie} alt="background" />
        <div className="video__text--text position-relative z-0 d-flex flex-column text-start text-md-center">
          <div className="video__text--title fs-2 fw-bold">{t("homepage.product.video.title")}</div>
          <p className="video__text--text1">{t("homepage.product.video.p.1")}</p>
          <p className="video__text--text2">{t("homepage.product.video.p.2")}</p>
        </div>
        <audio src={audio} controls autoPlay preload="auto"></audio>
      </div>
      <iframe
        className="video__video w-100 h-100 col-12"
        src={`https://www.youtube.com/embed/eYdBCKI_Jj0?cc_load_policy=1&cc_lang_pref=${i18n.language}`}
        title="¡Pan de arroz sin gluten! Receta fácil en licuadora"
        style={{ border: "0" }} // Reemplazo de frameBorder
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
