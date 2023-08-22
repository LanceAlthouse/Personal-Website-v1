import { React } from "react";

const ProjectTile = (props) => {
  return (
    <div className="rounded-2xl w-80 h-96 text-white bg-gradient-to-r p-[1px] from-green-600 to-fuchsia-950 transform -skew-y-6">
      <div className="rounded-2xl w-80 h-96 bg-zinc-950 p-3">
        <div className="rounded-2xl bg-zinc-500">
          <img
            className="h-full w-full max-h-[200px] rounded-2xl p-[1px]"
            src={props.projectImgUrl}
            alt="project-img"
          ></img>
        </div>
        <h1 className="text-center font-bold pt-2">{props.projectTitle}</h1>
        <p className="p-4 text-green-600 text-sm">{props.projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectTile;
