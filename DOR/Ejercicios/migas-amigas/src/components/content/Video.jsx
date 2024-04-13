import { useTranslation } from "react-i18next";
import videoBread from "../../resources/video/video_comp.mp4";

export const Video = () => {
  const {t} = useTranslation();
  return (
    <div>
        <div>
          <div>{t("homepage.product.video.title")}</div>
          <p>{t("homepage.product.video.p.1")}</p>
          <p>{t("homepage.product.video.p.2")}</p>
        </div>
        <video width="640" height="360" controls>
          <source src={videoBread} type="video/mp4"></source>
        </video>
      </div>
  )
}
