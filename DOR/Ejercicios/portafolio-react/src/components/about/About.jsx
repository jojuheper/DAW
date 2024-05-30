import { useTranslation } from "react-i18next";
import { ButtonClassic } from "../common/button/ButtonClassic";
import video from "../../resources/video/portafolio_jc_retocado.mp4";

// images
import me from "../../resources/images/me.webp";

export const About = () => {
  const { t } = useTranslation();
  const linkedIn = "https://www.linkedin.com/in/jose-juan-herrera-perez/";
  return (
    <section className="mt-5">
      <div>
        <div className="flex flex-col text-left md:grid md:justify-center">
          <div className="flex items-center gap-4 md:col-span-6">
            <p className="flex w-100 col-span-6">{t("introduction.me")}</p>
            <div className="flex justify-center col-span-6">
              <img
                className="h-auto w-[50px] rounded-[50%]"
                src={me}
                alt="Jose Juan"
              />
            </div>
          </div>
          <h1 className="mt-2 text-4xl font-bold gradient-text md:col-span-6">
            {t("introduction.work")}
          </h1>
          <p className="mt-4 md:col-span-12">{t("introduction.place")}</p>
        </div>
        <div className="flex justify-center gap-10 mt-6">
          <ButtonClassic
            buttonLink="contact"
            buttonName="Contact Me"
            classname="flex justify-center items-center min-h-[44px] bg-blue-600 text-white p-4 rounded-xl"
            isExternal={false}
          />
          <ButtonClassic
            buttonLink={linkedIn}
            buttonName="LinkedIn"
            buttonIconClass="facebook"
            classname="flex justify-center items-center min-h-[44px] p-4 rounded-xl border-2 border-blue-600"
            isExternal={true}
          />
        </div>
      </div>
      <div className="mt-5 border-4 border-solid border-blue-700 rounded-xl">
        <video
          className="rounded-lg"
          src={video}
          controls
          autoPlay
          muted
        ></video>
      </div>
    </section>
  );
};
