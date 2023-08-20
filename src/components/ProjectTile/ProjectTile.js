import { React } from "react";

const ProjectTile = (props) => {
  return (
    <div className="bg-zinc-950 rounded-2xl w-80 h-96 text-white">
      <img
        className="w-52 h-52"
        src={props.projectGifUrl}
        alt="project-gif"
      ></img>
      <h1 className="text-center font-bold">{props.projectTitle}</h1>
    </div>
  );
};

export default ProjectTile;
