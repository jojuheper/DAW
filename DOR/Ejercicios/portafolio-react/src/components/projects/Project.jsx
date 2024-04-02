import { useMemo, useState } from "react";
import { PropTypes } from "prop-types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const Project = ({ projects }) => {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [projects, search]);

  const handleSearchTermChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <MagnifyingGlassIcon className="h-7 w-5 text-gray-400 mr-1" />
        <input
          type="text"
          value={search}
          onChange={handleSearchTermChange}
        />
      </div>
      <div>
        <ul>
          {/* Algo de prueba para poder probar hacer la busqueda 
          mas adelante se probara con datos reales*/}
          {filteredProjects.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Project.propTypes = {
  projects: PropTypes.array,
};
