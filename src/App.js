import "./App.css";
import Home from "./components/Home/Home";
import AboutMeSection from "./components/AboutMeSection/AboutMeSection";
import ContactSection from "./components/ContactSection/ContactSection";
import LeftColumn from "./components/LeftColumn/LeftColumn";
import Projects from "./components/ProjectsSection/ProjectsSection";
import RightColumn from "./components/RightColumn/RightColumn";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="grid grid-cols-11">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div className="col-span-9">
            <RightColumn />
          </div>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMeSection />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
