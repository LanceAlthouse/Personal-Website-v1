import { React } from "react";
import ProjectTile from "../ProjectTile/ProjectTile";

const Projects = () => {
  return (
    <div className="font-mono font-medium Consolas">
      <div className="flex flex-wrap items-center justify-center grid-cols-5 grid-rows-5 gap-16 p-8 h-[750px]">
        <ProjectTile
          projectImgUrl="https://imgur.com/0kv2TkZ.png"
          projectGithubUrl="https://github.com/isaiahstone21/Expense-Splitter"
          projectTitle="Expense Splitter Web App"
          projectDescription="This application was developed in collaboration with one other individual and is aimed at simplifying the procedure of distributing costs within a group of people. The collaborative effort utilized Flask, Python, JS, and HTML/CSS for its construction."
        />
        <ProjectTile
          projectImgUrl="https://placehold.co/600x400?text=WIP"
          projectGithubUrl="https://github.com/isaiahstone21/Movie-Catalog"
          projectTitle="Movie Catalog Web App"
          projectDescription="This application is currently a WIP."
        />
      </div>
    </div>
  );
};

export default Projects;
