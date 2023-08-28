import { React } from "react";
import ResumeIcon from "../../assets/images/resume_icon.png";
import ResumeFile from "../../assets/files/Lance_Althouse_Resume.pdf";

const AboutMeSection = () => {
  return (
    <div className="font-mono font-medium Consolas grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-5 h-[850px] xl:h-auto">
      <div className="p-16 text-2xl text-green-600 xl:col-span-3">
        <p>
          I am currently a junior pursuing a major in Software Engineering at
          the University of Nebraska-Lincoln. The programming languages I am
          proficient in include React, Java, Python, and more, I enjoy
          problem-solving and am eager to contribute to creating accessible
          software for the community. This is exactly why I aspire to become a
          software engineer.
        </p>
        <p className="pt-16">
          Beyond my academic interests, I'm an enthusiast in the world of 3D
          printing, networking, and experimenting with my homelab. These hobbies
          not only underline my technical skills but also show my commitment to
          exploring new technologies. In an evolving field like software
          engineering, I am always eager to learn new technologies and make
          meaningful contributions to the digital world.
        </p>
      </div>
      <div className="p-16 xl:col-span-2 flex flex-col justify-center items-center">
        <img
          src={ResumeIcon}
          alt="resume_icon"
          className="w-40 h-40 mb-8 ml-6"
        />
        <a
          href={ResumeFile}
          download="Lance_Althouse_Resume.pdf"
          className="bg-gray-600 opacity-90 text-white px-4 py-2 rounded-lg hover:bg-green-600 hover:opacity-100 shadow-lg shadow-black"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default AboutMeSection;
