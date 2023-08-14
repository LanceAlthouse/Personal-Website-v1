import React from "react";
import ProfilePicture from "../../assets/images/profile_picture_circular.png";
import Navbar from "../Navbar/Navbar";

const LeftColumn = () => {
  return (
    <div className="bg-zinc-800 min-h-screen flex flex-col items-center">
      <img className="h-72 w-72 pt-10" src={ProfilePicture}></img>
      <Navbar />
    </div>
  );
};

export default LeftColumn;
