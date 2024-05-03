import { ButtonClassic } from "../button/ButtonClassic";

export const Introduction = () => {
  const linkedIn = "https://www.linkedin.com/in/jose-juan-herrera-perez/";
  return (
    <div>
      <div>
        <div>Hola, Yo soy Jose Juan Herrera</div>
        <h1>Full Stack Developer</h1>
        <div>
          Soy un desarrollador que vive en España a quien le gusta los retos
        </div>
        <div>
          <ButtonClassic
            buttonLink="/contact"
            buttonName="Contact Me"
            className="btn bg-sky-500"
          />
        </div>
        <div>
          <ButtonClassic
            buttonLink={linkedIn}
            buttonName="LinkedIn"
            buttonIconClass="facebook"
            className="btn bg-sky-500"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};
