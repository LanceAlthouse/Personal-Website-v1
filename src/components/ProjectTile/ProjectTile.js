import { React } from "react";

const ProjectTile = (props) => {
  return (
    <div className="bg-zinc-950 rounded-2xl w-80 h-96 text-white hover:border-green-600 hover:border-2 transform -skew-y-6">
        <img
        className="w-80 h-52 p-4"
        src={props.projectGifUrl}
        alt="project-gif"
      ></img>
      <h1 className="text-center font-bold">{props.projectTitle}</h1>
      <p className="p-4 text-green-600">{props.projectDescription}</p>
    </div>
  );
};

export default ProjectTile;
