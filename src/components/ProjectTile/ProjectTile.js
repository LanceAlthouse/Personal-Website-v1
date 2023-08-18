import { React } from "react";

const ProjectTile = (props) => {
  return (
    <div className="bg-zinc-950 rounded-2xl w-80 h-96">
      <img
        className="w-60 h-60"
        src={props.projectGifUrl}
        alt="project-gif"
      ></img>
      <h1>{props.projectTitle}</h1>
    </div>
  );
};

export default ProjectTile;
