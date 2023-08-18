import { React } from "react";
import ProjectTile from "../ProjectTile/ProjectTile";

const Projects = () => {
  return (
    <div className="font-mono font-medium Consolas ">
      <h1 className="font-md text-3xl text-white">projects</h1>
      <div className="flex flex-wrap items-center justify-center grid-cols-5 grid-rows-5 gap-16 p-16">
        <ProjectTile projectGifUrl="" projectTitle="" />
        <ProjectTile projectGifUrl="" projectTitle="" />
        <ProjectTile projectGifUrl="" projectTitle="" />
        <ProjectTile projectGifUrl="" projectTitle="" />
        <ProjectTile projectGifUrl="" projectTitle="" />
        <ProjectTile projectGifUrl="" projectTitle="" />
      </div>
    </div>
  );
};

export default Projects;
