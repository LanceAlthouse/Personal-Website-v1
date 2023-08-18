import {React} from "react";
import ProfilePicture from "../../assets/images/profile_picture_circular.png";
import Navbar from "../Navbar/Navbar";

const MobileNavbar = () => {
  return (
    <div className="bg-black">
      <div className="pt-16 flex flex-col items-center justify-center overflow-hidden">
        <img
          className="h-64 w-64 border-4 border-green-600 rounded-full"
          alt="profile_picture"
          src={ProfilePicture}
        ></img>
      </div>
      <Navbar/>
    </div>
  );
};

export default MobileNavbar;