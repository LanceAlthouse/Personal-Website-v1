import { React } from "react";
import ProjectTile from "../ProjectTile/ProjectTile";
import ExpenseSplitterImg from "../../assets/images/expense_splitter_project_image.avif";
import WorkInProgressImg from "../../assets/images/work_in_progress_image.avif";

const Projects = () => {
  return (
    <div className="font-mono font-medium Consolas">
      <div className="flex flex-wrap items-center justify-center grid-cols-5 grid-rows-5 gap-16 p-8 pt-16">
        <ProjectTile
          projectImgUrl={WorkInProgressImg}
          projectGithubUrl="https://github.com/Lancealot4567/Movie-Catalog"
          projectTitle="Movie Catalog Web App"
          projectStatus="Work In Progress"
          projectDescription="This application is currently a WIP."
        />
        <ProjectTile
          projectImgUrl={WorkInProgressImg}
          projectGithubUrl="https://github.com/Lancealot4567/Personal-Website"
          projectTitle="Personal Portfolio Website"
          projectStatus="Work In Progress"
          projectDescription="This application is currently a WIP."
        />
        <ProjectTile
          projectImgUrl={ExpenseSplitterImg}
          projectGithubUrl="https://github.com/Lancealot4567/Expense-Splitter"
          projectTitle="Expense Splitter Web App"
          projectStatus="Completed"
          projectDescription="This application was developed in collaboration with one other individual and is aimed at simplifying the procedure of distributing costs within a group of people. The collaborative effort utilized Flask, Python, JS, and HTML/CSS for its construction."
        />
        <ProjectTile
          projectImgUrl={WorkInProgressImg}
          projectTitle="Burnplan Evaluation App"
          projectStatus="Completed"
          projectDescription=""
        />
        <ProjectTile
          projectImgUrl={WorkInProgressImg}
          projectTitle="Travel Planner App"
          projectStatus="Completed"
          projectDescription=""
        />
        <ProjectTile
          projectImgUrl={WorkInProgressImg}
          projectTitle="Sports Weather App"
          projectStatus="Completed"
          projectDescription=""
        />
      </div>
    </div>
  );
};

export default Projects;
