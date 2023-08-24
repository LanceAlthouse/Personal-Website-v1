import { React } from "react";
import { useLocation } from "react-router-dom";
import Home from "../Home/Home";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import Projects from "../ProjectsSection/ProjectsSection";
import ContactSection from "../ContactSection/ContactSection";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import NextPageButton from "../NextPageButton/NextPageButton";

const RightColumn = () => {
  const location = useLocation();
  let nextPage = location.pathname;
  const currentPath = location.pathname;
  let content = null;

  if (currentPath === "/") {
    content = <Home />;
    nextPage = "/aboutme";
  } else if (currentPath === "/aboutme") {
    content = <AboutMeSection />;
    nextPage = "/projects";
  } else if (currentPath === "/projects") {
    content = <Projects />;
    nextPage = "/contact";
  } else if (currentPath === "/contact") {
    content = <ContactSection />;
    nextPage = "/";
  }

  return (
    <div className="bg-zinc-900 h-full">
      <div className="md:hidden sm:hidden">
        <MobileNavbar />
      </div>
      <div className="max-h-screen overflow-y-scroll overflow-hidden flex-grow pb-24">
        {content}
      </div>
      <div className="flex justify-center pt-auto">
        <NextPageButton nextPage={nextPage} />
      </div>
    </div>
  );
};

export default RightColumn;
