import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

// images
import eci from "../../resources/images/eciseguros.webp";
import generali from "../../resources/images/generali.webp";
import intesa from "../../resources/images/intesa.webp";
import ng from "../../resources/images/northgate.webp";
import sisal from "../../resources/images/sisal.webp";
import umh from "../../resources/images/umh.webp";

const fadeImages = [
  {
    url: eci,
    caption: "Seguros el corte ingles",
    web: "https://seguros.elcorteingles.es",
    programmingLanguage: "java, aem cloud, vue, sass, javascript",
  },
  {
    url: generali,
    caption: "Generali",
    web: "https://www.generali.es/",
    programmingLanguage: "java, aem cloud, sass, javascript",
  },
  {
    url: intesa,
    caption: "Intesa sanpaolo",
    web: "https://www.intesasanpaolo.com",
    programmingLanguage: "java, aem 6.5, sass, javascript",
  },
  {
    url: ng,
    caption: "Northgate",
    web: "https://www.northgate.es",
    programmingLanguage: "java, aem 6.4, sass, javascript",
  },
  {
    url: sisal,
    caption: "Sisal",
    web: "https://www.superenalotto.it",
    programmingLanguage: "java, aem cloud, sass, javascript",
  },
  {
    url: umh,
    caption: "Umusic Hotel",
    web: "https://umusic-hotels.com/es",
    programmingLanguage: "java, aem cloud, sass, javascript",
  },
];

export const Project = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-4"></div>
      <div>
        <div className="slide-container">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div key={index} className="border-4 border-blue-600 rounded-xl md:rounded-2xl">
                <img
                  className="w-[100%] h-[300px] md:h-[650px] rounded-xl"
                  // style={{ width: "100%", height: "650px" }}
                  src={fadeImage.url}
                  alt={fadeImage.caption}
                />
                  <span className="flex justify-center items-center w-100 min-h-[44px] bg-blue-600 text-white projectInfo">Colaboración para {fadeImage.caption}</span>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};
