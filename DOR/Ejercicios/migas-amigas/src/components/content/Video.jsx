import { useTranslation } from "react-i18next";
// import videoBread from "../../resources/video/video_comp.mp4";

export const Video = () => {
  const { i18n, t } = useTranslation();
  
  return (
    <div>
      <div>
        <div>{t("homepage.product.video.title")}</div>
        <p>{t("homepage.product.video.p.1")}</p>
        <p>{t("homepage.product.video.p.2")}</p>
      </div>
      {/* <video width="640" height="360" controls>
          <source src={videoBread} type="video/mp4"></source>
        </video> */}
      <iframe
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/eYdBCKI_Jj0?cc_load_policy=1&cc_lang_pref=${i18n.language}`}
        title="¡Pan de arroz sin gluten! Receta fácil en licuadora"
        style={{ border: "0" }} // Reemplazo de frameBorder
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
