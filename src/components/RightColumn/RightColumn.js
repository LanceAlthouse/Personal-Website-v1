import { React } from "react";
import { useLocation } from "react-router-dom";
import Home from "../Home/Home";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import Projects from "../ProjectsSection/ProjectsSection";
import ContactSection from "../ContactSection/ContactSection";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const RightColumn = () => {
  const location = useLocation();

  const currentPath = location.pathname;
  let content = null;

  if (currentPath === "/") {
    content = <Home />;
  } else if (currentPath === "/aboutme") {
    content = <AboutMeSection />;
  } else if (currentPath === "/projects") {
    content = <Projects />;
  } else if (currentPath === "/contact") {
    content = <ContactSection />;
  }

  return (
    <div className="bg-zinc-900 h-full">
      <div className="md:hidden sm:hidden">
        <MobileNavbar />
      </div>
      <div className="max-h-screen overflow-y-scroll overflow-hidden">
        {content}
      </div>
    </div>
  );
};

export default RightColumn;
