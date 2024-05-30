import { Element } from "react-scroll";
import { Skills } from "../components/common/skill/Skills";
import { Project } from "../components/projects/Project";
import { Contact } from "./Contact";
import { About } from "../components/about/About";

export const Home = () => {
  return (
    <section>
      <Element name="about">
        <About />
      </Element>
      <Skills />
      <Element name="project">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </section>
  );
};
