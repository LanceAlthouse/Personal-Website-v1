import React from "react";
import ProfilePicture from "../../assets/images/profile_picture_circular.avif";
import LinkedInLogo from "../../assets/images/linkedin_logo.avif";
import GithubLogo from "../../assets/images/github_logo.avif";
import Navbar from "../Navbar/Navbar";

const LeftColumn = () => {
  return (
    <div className="h-full flex flex-col items-center bg-zinc-950 font-mono font-medium Consolas">
      <div className="pt-10 flex justify-center items-center object-fill">
        <div className="relative 2xl:w-64 2xl:h-64 lg:w-48 lg:h-48 md:h-32 md:w-32 sm:h-24 sm:w-24 border-4 border-green-600 rounded-full">
          <img
            className="w-full h-full object-cover"
            alt="profile_picture"
            src={ProfilePicture}
          ></img>
        </div>
      </div>
      <h1 className="text-2xl text-center text-green-600 pt-6">
        Lance Althouse
      </h1>
      <Navbar />
      <div className="pt-16 flex flex-row gap-6">
        <a
          href="https://github.com/Lancealot4567"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={GithubLogo}
            alt="github_logo"
            className="invert w-8 h-8 hover:scale-125 ease-in duration-300"
            title="View my Github page"
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
            title="View my LinkedIn page"
          ></img>
        </a>
      </div>
      <div className="pt-52 sm:pt-16 md:pt-16 lg:pt-16 text-center">
        <p className="text-white">&#169; 2023 Lance Althouse</p>
      </div>
    </div>
  );
};

export default LeftColumn;
