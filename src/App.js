import "./App.css";
import LeftColumn from "./components/LeftColumn/LeftColumn";
import RightColumn from "./components/RightColumn/RightColumn";

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-7">
        <div className="col-span-2">
          <LeftColumn />
        </div>
        <div className="col-span-5">
          <RightColumn />
        </div>
      </div>
    </div>
  );
}

export default App;
