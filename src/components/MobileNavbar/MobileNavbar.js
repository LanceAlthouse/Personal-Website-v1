import { React } from "react";
import ProfilePicture from "../../assets/images/profile_picture_circular.png";
import LinkedInLogo from "../../assets/images/linkedin_logo.png";
import GithubLogo from "../../assets/images/github_logo.png";
import Navbar from "../Navbar/Navbar";

const MobileNavbar = () => {
  return (
    <div className="bg-black font-mono font-medium Consolas">
      <div className="pt-16 flex flex-col items-center justify-center overflow-hidden">
        <img
          className="h-64 w-64 border-4 border-green-600 rounded-full"
          alt="profile_picture"
          src={ProfilePicture}
        ></img>
      </div>
      <h1 className="text-2xl text-center text-green-600 pt-6">
        Lance Althouse
      </h1>
      <Navbar />
      <div className="pt-16 pb-16 flex flex-row gap-6 items-center justify-center">
        <a
          href="https://github.com/Lancealot4567"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={GithubLogo}
            alt="github_logo"
            className="invert w-8 h-8 hover:scale-125 ease-in duration-300"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/lance-althouse/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={LinkedInLogo}
            alt="linkedin_logo"
            className="invert w-8 h-8 hover:scale-125 ease-in duration-300"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default MobileNavbar;
