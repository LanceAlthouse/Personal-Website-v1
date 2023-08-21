import { React } from "react";
import ProjectTile from "../ProjectTile/ProjectTile";

const Projects = () => {
  return (
    <div className="font-mono font-medium Consolas ">
      <h1 className="font-bold text-3xl text-white text-center underline pt-6">Projects</h1>
      <div className="flex flex-wrap items-center justify-center grid-cols-5 grid-rows-5 gap-16 p-16">
        <ProjectTile projectGifUrl="https://imgur.com/0kv2TkZ.png" projectTitle="Expense Splitter Web App" projectDescription=""/>
        <ProjectTile projectGifUrl="" projectTitle="Movie Catalog Web App" projectDescription="Application is currently a WIP"/>
      </div>
    </div>
  );
};

export default Projects;
