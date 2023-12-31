import { React } from "react";
import ResumeIcon from "../../assets/images/resume_icon.avif";
import ResumeFile from "../../assets/files/Lance_Althouse_Resume.pdf";

const AboutMeSection = () => {
  return (
    <div className="font-mono font-medium Consolas grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-5 xl:h-auto">
      <div className="p-10 pb-0 text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl text-green-600 xl:col-span-3 flex flex-col justify-center items-center">
        <p>
          I am currently a junior pursuing a major in Software Engineering at
          the University of Nebraska-Lincoln. The programming languages I am
          proficient in include React, Java, Python, and more. I aspire to
          become a software engineer so that I can contribute to and create
          accessible software for the community. I also love solving problems,
          something I am able to do as a software engineer.
        </p>
        <p className="pt-10">
          Beyond my academic interests, I'm an enthusiast in the world of 3D
          printing, networking, and experimenting with my homelab. These hobbies
          not only underline my technical skills but also show my commitment to
          exploring new technologies. In an evolving field like software
          engineering, I am always eager to learn new technologies and make
          meaningful contributions to the digital world.
        </p>
      </div>
      <div className="p-5 xl:col-span-2 flex flex-col justify-center items-center">
        <img
          src={ResumeIcon}
          alt="resume_icon"
          className="w-40 h-40 mb-8 opacity-70"
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
