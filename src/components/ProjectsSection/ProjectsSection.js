import { React } from "react";
import ProjectTile from "../ProjectTile/ProjectTile";

const Projects = () => {
  return (
    <div className="font-mono font-medium Consolas ">
      <h1 className="font-bold text-3xl text-white text-center underline pt-6">Projects</h1>
      <div className="flex flex-wrap items-center justify-center grid-cols-5 grid-rows-5 gap-16 p-16">
        <ProjectTile projectImgUrl="https://imgur.com/0kv2TkZ.png" projectTitle="Expense Splitter Web App" projectDescription="This application is designed to streamline the process of splitting expenses among groups of people. It was collaboratively built using Flask, Python, JS, and HTML/CSS."/>
        <ProjectTile projectImgUrl="https://placehold.co/600x400?text=WIP" projectTitle="Movie Catalog Web App" projectDescription="This application is currently a WIP."/>
      </div>
    </div>
  );
};

export default Projects;
