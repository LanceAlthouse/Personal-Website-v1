import { React } from "react";
import GithubLogo from "../../assets/images/github_logo.png";

const ProjectTile = (props) => {
  return (
    <div className="rounded-2xl w-80 h-[124] text-white px-[1px] py-[1px] bg-gradient-to-r from-green-600 to-fuchsia-900">
      <div className="rounded-2xl w-full h-full bg-zinc-950 p-3 overflow-hidden">
        <div className="rounded-2xl bg-gradient-to-r from-green-600 to-fuchsia-900">
          <img
            className="h-full w-full max-h-[200px] rounded-2xl p-[1px]"
            src={props.projectImgUrl}
            alt="project-img"
          ></img>
        </div>
        <h1 className="text-center font-bold pt-2">{props.projectTitle}</h1>
        <p className="h-52 p-4 text-green-600 text-sm overflow-auto">{props.projectDescription}</p>
        <div className="pt-3 flex flex-row gap-3 justify-center">
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
      </div>
    </div>
  );
};

export default ProjectTile;
