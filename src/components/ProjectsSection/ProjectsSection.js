import { React } from "react";
import ProjectTile from "../ProjectTile/ProjectTile";

const Projects = () => {
  return (
    <div className="flex grid-cols-5 grid-rows-5 font-mono font-medium Consolas ">
      <h1 className="font-md text-3xl text-white">projects</h1>
      <ProjectTile />
    </div>
  );
};

export default Projects;
