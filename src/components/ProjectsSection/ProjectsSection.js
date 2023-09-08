import { React } from "react";
import { projectData } from "../../data/projectData";
import ProjectTile from "../ProjectTile/ProjectTile";

const Projects = () => {
  const projectTiles = projectData.map((project) => (
    <ProjectTile
      projectImgUrl={project.projectImgUrl}
      projectGithubUrl={project.projectGithubUrl}
      projectTitle={project.projectTitle}
      projectStatus={project.projectStatus}
      projectDescription={project.projectDescription}
    />
  ));

  return (
    <div className="font-mono font-medium Consolas">
      <div className="flex flex-wrap items-center justify-center grid-cols-5 grid-rows-5 gap-16 p-8 pt-16">
        {projectTiles}
      </div>
    </div>
  );
};

export default Projects;
