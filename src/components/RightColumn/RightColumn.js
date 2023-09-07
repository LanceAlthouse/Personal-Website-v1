import { React } from "react";
import { useLocation } from "react-router-dom";
import Home from "../Home/Home";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import Projects from "../ProjectsSection/ProjectsSection";
import ContactSection from "../ContactSection/ContactSection";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import NextPageButton from "../NextPageButton/NextPageButton";
import Credits from "../CreditsSection/CreditsSection";

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
    nextPage = "/credits";
  } else {
    content = <Credits />;
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
      <div
        className={`flex flex-col justify-center items-center pr-4 ${
          currentPath === "/projects" ? "pt-6" : "pt-auto"
        } fixed bottom-8 right-8 z-10`}
      >
        <NextPageButton nextPage={nextPage} />
      </div>
    </div>
  );
};

export default RightColumn;
