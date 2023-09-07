import { React } from "react";
import GithubLogo from "../../assets/images/github_logo.avif";

const ProjectTile = (props) => {
  let status = "";
  let content = "";

  if (props.projectStatus === "Depracated") {
    status = "rounded-full bg-red-600 w-2 h-2";
  } else if (props.projectStatus === "Work In Progress") {
    status = "rounded-full bg-yellow-600 w-2 h-2";
  } else if (props.projectStatus === "Completed") {
    status = "rounded-full bg-green-600 w-2 h-2";
  }

  if (props.projectGithubUrl) {
    content = (
      <div className=" flex flex-row gap-3 justify-center">
        <a
          href={props.projectGithubUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="View this project on Github"
        >
          <img
            src={GithubLogo}
            alt="github_logo"
            className="invert w-8 h-8 hover:scale-125 ease-in duration-300"
          ></img>
        </a>
      </div>
    );
  } else {
    content = <div></div>;
  }

  return (
    <div className="rounded-2xl w-80 h-[510px] text-white px-[1px] py-[1px] bg-gradient-to-r from-green-600 to-fuchsia-900 hover:scale-110 ease-in duration-300 shadow-lg shadow-black">
      <div className="rounded-2xl w-full h-full bg-zinc-950 p-3 overflow-hidden">
        <div className="rounded-2xl bg-gradient-to-r from-green-600 to-fuchsia-900">
          <img
            className="h-full w-full max-h-[200px] rounded-2xl p-[1px]"
            src={props.projectImgUrl}
            alt="project-img"
          ></img>
        </div>
        <h1 className="text-center font-bold pt-2 text-lg">
          {props.projectTitle}
        </h1>
        <div className="flex items-center justify-center rounded-2xl pt-2">
          <div className={status}></div>
          <h2 className="pl-2 text-sm">{props.projectStatus}</h2>
        </div>
        <p className="h-48 pl-2 pr-2 pt-2 pb-[0px] text-green-600 text-sm overflow-auto">
          {props.projectDescription}
        </p>
        {content}
      </div>
    </div>
  );
};

export default ProjectTile;
