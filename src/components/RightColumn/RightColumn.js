import { React } from "react";
import { useLocation } from "react-router-dom";
import Home from "../Home/Home";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import Projects from "../ProjectsSection/ProjectsSection";
import ContactSection from "../ContactSection/ContactSection";

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
    <div className="bg-zinc-900 min-h-screen min-w-max overflow-auto whitespace-normal overflow-x-hidden">
      {content}
    </div>
  );
};

export default RightColumn;
