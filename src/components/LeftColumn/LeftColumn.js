import React from "react";
import ProfilePicture from "../../assets/images/profile_picture_circular.png";
import LinkedInLogo from "../../assets/images/linkedin_logo.png";
import GithubLogo from "../../assets/images/github_logo.png";
import Navbar from "../Navbar/Navbar";

const LeftColumn = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-zinc-950">
      <div className="pt-16">
        <img
          className="h-64 w-64 border-4 border-green-600 rounded-full"
          alt="profile_picture"
          src={ProfilePicture}
        ></img>
      </div>
      <Navbar />
      <div className="pt-16 flex flex-row gap-6">
        <button>
          <img
            src={GithubLogo}
            alt="github_logo"
            className="invert w-8 h-8 hover:drop-shadow-green"
          ></img>
        </button>
        <button>
          <img
            src={LinkedInLogo}
            alt="linkedin_logo"
            className="invert w-8 h-8"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default LeftColumn;
