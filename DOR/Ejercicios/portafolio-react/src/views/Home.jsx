import { Introduction } from "../components/common/introduction/Introduction";
import { Project } from "../components/projects/Project";


export const Home = () => {
  const projects = [
    {
      id: 1,
      title: "java",
    },
    {
      id: 2,
      title: "react",
    },
  ];
  return (
    <div>
      <Introduction />
      <Project projects={projects}/>
    </div>
  );
};
