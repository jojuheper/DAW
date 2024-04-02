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
      <div>Body</div>
      <Project projects={projects}/>
    </div>
  );
};
