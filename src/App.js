import "./App.css";
import LeftColumn from "./components/LeftColumn/LeftColumn";
import RightColumn from "./components/RightColumn/RightColumn";
import { BrowserRouter as Router } from "react-router-dom";

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
    </Router>
  );
}

export default App;
